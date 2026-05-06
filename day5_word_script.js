const studyList = [
  // 의문사 / 형용사 / 부사
  { hanzi: '什么', pinyin: 'shénme', ko: '무엇', cat: 'question' },
  { hanzi: '好喝', pinyin: 'hǎohē', ko: '맛있다 (음료)', cat: 'adj' },
  { hanzi: '有点(儿)', pinyin: 'yǒudiǎn(r)', ko: '조금, 약간', cat: 'adv' },

  // 음료 일반 / 커피류
  { hanzi: '饮料', pinyin: 'yǐnliào', ko: '음료', cat: 'drink' },
  { hanzi: '咖啡', pinyin: 'kāfēi', ko: '커피', cat: 'drink' },
  { hanzi: '美式咖啡', pinyin: 'měishì kāfēi', ko: '아메리카노', cat: 'drink' },
  { hanzi: '拿铁', pinyin: 'nátiě', ko: '라테', cat: 'drink' },
  { hanzi: '摩卡', pinyin: 'mókǎ', ko: '모카', cat: 'drink' },

  // 차(茶) 종류
  {
    hanzi: '珍珠奶茶',
    pinyin: 'zhēnzhū nǎichá',
    ko: '버블 밀크티',
    cat: 'drink',
  },
  { hanzi: '乌龙茶', pinyin: 'wūlóng chá', ko: '우롱차', cat: 'drink' },
  { hanzi: '普洱茶', pinyin: "pǔ'ěr chá", ko: '보이차', cat: 'drink' },
  { hanzi: '水果茶', pinyin: 'shuǐguǒ chá', ko: '과일차', cat: 'drink' },
  {
    hanzi: '芝士奶盖茶',
    pinyin: 'zhīshì nǎigài chá',
    ko: '치즈폼 티',
    cat: 'drink',
  },
  { hanzi: '红枣茶', pinyin: 'hóngzǎo chá', ko: '대추차', cat: 'drink' },
  { hanzi: '姜茶', pinyin: 'jiāng chá', ko: '생강차', cat: 'drink' },
  { hanzi: '菊花茶', pinyin: 'júhuā chá', ko: '국화차', cat: 'drink' },
  { hanzi: '凉茶', pinyin: 'liángchá', ko: '한방 허브차', cat: 'drink' },

  // 재료 (토핑)
  {
    hanzi: '珍珠',
    pinyin: 'zhēnzhū',
    ko: '진주, 버블티 펄',
    cat: 'ingredient',
  },
  { hanzi: '芝士', pinyin: 'zhīshì', ko: '치즈', cat: 'ingredient' },
  { hanzi: '奶盖', pinyin: 'nǎigài', ko: '밀크폼', cat: 'ingredient' },
];

const extraDistractors = [
  // 음료 오답
  { ko: '녹차', cat: 'drink' },
  { ko: '홍차', cat: 'drink' },
  { ko: '콜라', cat: 'drink' },
  { ko: '사이다', cat: 'drink' },
  { ko: '물', cat: 'drink' },
  { ko: '우유', cat: 'drink' },
  { ko: '주스', cat: 'drink' },

  // 재료/토핑 오답
  { ko: '설탕', cat: 'ingredient' },
  { ko: '얼음', cat: 'ingredient' },
  { ko: '시럽', cat: 'ingredient' },
  { ko: '젤리', cat: 'ingredient' },

  // 의문사 오답
  { ko: '누구', cat: 'question' },
  { ko: '어디', cat: 'question' },
  { ko: '언제', cat: 'question' },
  { ko: '왜', cat: 'question' },

  // 맛/상태 (형용사) 오답
  { ko: '맛없다', cat: 'adj' },
  { ko: '달다', cat: 'adj' },
  { ko: '쓰다', cat: 'adj' },
  { ko: '뜨겁다', cat: 'adj' },
  { ko: '차갑다', cat: 'adj' },

  // 부사 오답
  { ko: '아주 (매우)', cat: 'adv' },
  { ko: '가장', cat: 'adv' },
  { ko: '모두', cat: 'adv' },
  { ko: '진짜 (정말)', cat: 'adv' },
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
