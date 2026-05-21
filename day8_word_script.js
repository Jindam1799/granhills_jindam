const studyList = [
  // 인명 / 대명사 / 동사
  { hanzi: '丽丽', pinyin: 'Lìli', ko: '리리 (이름)', cat: 'people' },
  { hanzi: '自己', pinyin: 'zìjǐ', ko: '자기 자신, 스스로', cat: 'pronoun' },
  { hanzi: '拿', pinyin: 'ná', ko: '들다, 가지다', cat: 'verb' },

  // 소유 / 존재
  { hanzi: '有', pinyin: 'yǒu', ko: '있다 (소유)', cat: 'possession' },
  { hanzi: '没有', pinyin: 'méiyǒu', ko: '없다', cat: 'possession' },

  // 소지품 / 물건
  { hanzi: '纸巾', pinyin: 'zhǐjīn', ko: '휴지, 티슈', cat: 'object' },
  { hanzi: '湿巾', pinyin: 'shījīn', ko: '물티슈', cat: 'object' },
  { hanzi: '书包', pinyin: 'shūbāo', ko: '책가방', cat: 'object' },
  { hanzi: '礼物', pinyin: 'lǐwù', ko: '선물', cat: 'object' },
  {
    hanzi: '喜字',
    pinyin: 'xǐzì',
    ko: '희(囍) 글자, 결혼 축하 글자',
    cat: 'culture',
  },

  // 위치 / 방위사
  { hanzi: '里边', pinyin: 'lǐbiān', ko: '안쪽', cat: 'location' },
  { hanzi: '外边', pinyin: 'wàibiān', ko: '밖쪽', cat: 'location' },
  { hanzi: '上边', pinyin: 'shàngbiān', ko: '위쪽', cat: 'location' },
  { hanzi: '下边', pinyin: 'xiàbiān', ko: '아래쪽', cat: 'location' },
  { hanzi: '前边', pinyin: 'qiánbiān', ko: '앞쪽', cat: 'location' },
  { hanzi: '后边', pinyin: 'hòubiān', ko: '뒤쪽', cat: 'location' },
  { hanzi: '左边', pinyin: 'zuǒbiān', ko: '왼쪽', cat: 'location' },
  { hanzi: '右边', pinyin: 'yòubiān', ko: '오른쪽', cat: 'location' },
  { hanzi: '旁边', pinyin: 'pángbiān', ko: '옆쪽', cat: 'location' },
];

const extraDistractors = [
  // 인물 / 대명사 오답
  { ko: '선생님', cat: 'people' },
  { ko: '친구', cat: 'people' },
  { ko: '우리', cat: 'pronoun' },
  { ko: '누구', cat: 'pronoun' },

  // 동사 오답
  { ko: '놓다, 두다', cat: 'verb' },
  { ko: '주다', cat: 'verb' },
  { ko: '사다', cat: 'verb' },

  // 소유 오답
  { ko: '이다 (맞다)', cat: 'possession' },
  { ko: '아니다', cat: 'possession' },

  // 물건 오답
  { ko: '지갑', cat: 'object' },
  { ko: '휴대폰', cat: 'object' },
  { ko: '수첩', cat: 'object' },
  { ko: '열쇠', cat: 'object' },
  { ko: '지도', cat: 'culture' },
  { ko: '한족', cat: 'culture' },

  // 위치 오답 (지난주 방향이 오답으로 나오면 아주 좋습니다)
  { ko: '동쪽', cat: 'location' },
  { ko: '서쪽', cat: 'location' },
  { ko: '남쪽', cat: 'location' },
  { ko: '북쪽', cat: 'location' },
  { ko: '가운데', cat: 'location' },
  { ko: '멀다', cat: 'location' },
  { ko: '가깝다', cat: 'location' },
];
let gameWords = [];
const TOTAL_QUESTIONS = 20;
let currentIdx = 0;
let score = 0;
let isClickable = true;
let correctIdx = 0;
let timeLeft = 20;
let timerInterval;

let timerSound, correctSound, wrongSound;

/* ============================================================
   [핵심 함수] 효과음 씹힘 방지 (복제 재생)
   ============================================================ */
function playEffect(audioElement) {
  if (!audioElement) return;
  const clone = audioElement.cloneNode(true);
  clone.volume = 1;
  clone.muted = false; // ★ 복제본 무조건 음소거 해제
  clone.play().catch(() => {});
}

/* ============================================================
   [게임 로직]
   ============================================================ */
function startGame() {
  timerSound = document.getElementById('timer-sound');
  correctSound = document.getElementById('correct-sound');
  wrongSound = document.getElementById('wrong-sound');

  const unlockSounds = [timerSound, correctSound, wrongSound];
  unlockSounds.forEach((s) => {
    if (s) {
      s.muted = true;
      let p = s.play();
      if (p !== undefined) {
        p.then(() => {
          s.pause();
          s.currentTime = 0;
          s.muted = false;
        }).catch(() => {
          // ★ 타이머가 영원히 침묵했던 이유 해결!
          // 에러가 나도 음소거는 반드시 풀어줍니다.
          s.muted = false;
        });
      } else {
        s.muted = false;
      }
    }
  });

  gameWords = [...studyList]
    .sort(() => Math.random() - 0.5)
    .slice(0, TOTAL_QUESTIONS);
  currentIdx = 0;
  score = 0;

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';

  setTimeout(loadQuestion, 150);
}

function showHint() {
  if (!isClickable) return;
  const pinyinElem = document.getElementById('q-pinyin');
  pinyinElem.innerText = gameWords[currentIdx].pinyin;
  pinyinElem.style.visibility = 'visible';
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 20;

  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) {
    timerDisplay.innerText = timeLeft;
    timerDisplay.style.color = 'var(--primary)';
  }

  if (timerSound) {
    timerSound.muted = false; // ★ 켤 때 한 번 더 강제 음소거 해제
    timerSound.pause();
    timerSound.currentTime = 0;
    timerSound.play().catch(() => {});
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    const currentTimerDisplay = document.getElementById('timer');
    if (currentTimerDisplay) {
      currentTimerDisplay.innerText = timeLeft;
      if (timeLeft <= 5) currentTimerDisplay.style.color = 'var(--wrong)';
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleError('시간 초과! ⏰');
    }
  }, 1000);
}

function loadQuestion() {
  if (currentIdx >= TOTAL_QUESTIONS) {
    endGame();
    return;
  }
  isClickable = true;
  const pinyinElem = document.getElementById('q-pinyin');
  pinyinElem.style.visibility = 'hidden';
  pinyinElem.innerText = '';

  document.querySelector('.choices-area').classList.remove('disabled');
  document.getElementById('feedback-msg').innerText = '';

  const btns = [0, 1, 2, 3].map((i) => document.getElementById(`btn-${i}`));
  btns.forEach((b) => {
    b.classList.remove('correct', 'wrong');
    b.blur();
  });

  let correctWord = gameWords[currentIdx];
  let potentialDistractors = [...studyList, ...extraDistractors].filter(
    (w) => w.cat === correctWord.cat && w.ko !== correctWord.ko,
  );
  potentialDistractors.sort(() => Math.random() - 0.5);

  let options = [correctWord];
  for (let i = 0; i < 3; i++) {
    if (potentialDistractors[i]) options.push(potentialDistractors[i]);
  }
  while (options.length < 4) {
    let rand = studyList[Math.floor(Math.random() * studyList.length)];
    if (!options.find((o) => o.ko === rand.ko)) options.push(rand);
  }

  options.sort(() => Math.random() - 0.5);
  window.currentOptions = options;
  correctIdx = options.findIndex((o) => o.ko === correctWord.ko);

  document.getElementById('ko-question').innerText = correctWord.hanzi;
  document.getElementById('score').innerText = score;

  for (let i = 0; i < 4; i++) {
    document.getElementById(`ko-text-${i}`).innerText = options[i].ko;
  }
  startTimer();
}

function handleError(msg) {
  isClickable = false;
  if (timerSound) timerSound.pause();

  playEffect(wrongSound);

  const qBox = document.querySelector('.question-box');
  const fb = document.getElementById('feedback-msg');
  fb.innerText = msg;
  fb.style.color = 'var(--wrong)';
  qBox.classList.add('shake');

  setTimeout(() => {
    qBox.classList.remove('shake');
    loadQuestion();
  }, 1200);
}

function selectAnswer(selectedIndex) {
  if (!isClickable) return;
  isClickable = false;

  const btns = [0, 1, 2, 3].map((i) => document.getElementById(`btn-${i}`));
  btns[selectedIndex].blur();

  if (timerSound) timerSound.pause();
  document.querySelector('.choices-area').classList.add('disabled');

  const isCorrect = selectedIndex === correctIdx;
  const fb = document.getElementById('feedback-msg');

  if (isCorrect) {
    playEffect(correctSound);

    score++;
    btns[selectedIndex].classList.add('correct');
    fb.innerText = '딩동댕! 정답입니다 👏';
    fb.style.color = 'var(--correct)';
    currentIdx++;
    setTimeout(loadQuestion, 1200);
  } else {
    playEffect(wrongSound);

    btns[selectedIndex].classList.add('wrong');
    fb.innerText = '아쉬워요! 다시 한번 생각해보세요 🧐';
    fb.style.color = 'var(--wrong)';

    setTimeout(loadQuestion, 1500);
  }
}

function endGame() {
  if (timerInterval) clearInterval(timerInterval);
  if (timerSound) timerSound.pause();

  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  if (result) result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 단어를 모두 마스터 했습니다.</b><br>(이 화면을 캡쳐해서 카톡방에 올려주세요!)`;
}
