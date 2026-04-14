/* ============================================================
   [데이터 설정] 
   ============================================================ */
const studyList = [
  { hanzi: '是', pinyin: 'shì', ko: '~이다, 맞다', cat: 'verb' },
  { hanzi: '谁', pinyin: 'shéi', ko: '누구', cat: 'pronoun' },
  { hanzi: '爱人', pinyin: 'àirén', ko: '배우자, 연인', cat: 'people' },
  { hanzi: '的', pinyin: 'de', ko: '~의, ~의 것', cat: 'grammar' },
  { hanzi: '哇', pinyin: 'wa', ko: '와!, 우와!', cat: 'phrase' },
  { hanzi: '帅', pinyin: 'shuài', ko: '잘생기다, 멋있다', cat: 'adj' },
  { hanzi: '谢谢', pinyin: 'xièxie', ko: '감사합니다', cat: 'phrase' },
  { hanzi: '这', pinyin: 'zhè', ko: '이 (이것)', cat: 'pronoun' },
  { hanzi: '那', pinyin: 'nà', ko: '저, 그 (저것)', cat: 'pronoun' },
  { hanzi: '手机', pinyin: 'shǒujī', ko: '휴대폰', cat: 'object' },
  { hanzi: '呢', pinyin: 'ne', ko: '~은요? (의문)', cat: 'grammar' },
  { hanzi: ' know', pinyin: 'zhīdào', ko: '알다', cat: 'verb' },
  { hanzi: '十四', pinyin: 'shísì', ko: '14', cat: 'number' },
  { hanzi: '亿', pinyin: 'yì', ko: '억', cat: 'num' },
  { hanzi: '五十六', pinyin: 'wǔshíliù', ko: '56', cat: 'number' },
  { hanzi: '民族', pinyin: 'mínzú', ko: '민족', cat: 'culture' },
  {
    hanzi: '少数民族',
    pinyin: 'shǎoshù mínzú',
    ko: '소수민족',
    cat: 'culture',
  },
  { hanzi: '回族', pinyin: 'huízú', ko: '회족', cat: 'culture' },
  { hanzi: '地图', pinyin: 'dìtú', ko: '지도', cat: 'object' },
  { hanzi: '公鸡', pinyin: 'gōngjī', ko: '수탉', cat: 'animal' },
];

const extraDistractors = [
  { ko: '어디', cat: 'pronoun' },
  { ko: '무엇', cat: 'pronoun' },
  { ko: '선생님', cat: 'people' },
  { ko: '친구', cat: 'people' },
  { ko: '컴퓨터', cat: 'object' },
  { ko: '책', cat: 'object' },
  { ko: '예쁘다', cat: 'adj' },
  { ko: '크다', cat: 'adj' },
  { ko: '가다', cat: 'verb' },
  { ko: '먹다', cat: 'verb' },
  { ko: '80', cat: 'number' },
  { ko: '65', cat: 'number' },
  { ko: '41', cat: 'number' },
  { ko: '66', cat: 'number' },
  { ko: '44', cat: 'number' },
  { ko: '백만', cat: 'num' },
  { ko: '역사', cat: 'culture' },
  { ko: '국가', cat: 'culture' },
  { ko: '십', cat: 'num' },
  { ko: '백', cat: 'num' },
  { ko: '천', cat: 'num' },
  { ko: '만', cat: 'num' },
  { ko: '백만', cat: 'num' },
  { ko: '천만', cat: 'num' },
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
