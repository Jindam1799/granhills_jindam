const studyList = [
  // 동사
  { hanzi: '干', pinyin: 'gàn', ko: '하다 (일, 행동)', cat: 'verb' },
  { hanzi: '做', pinyin: 'zuò', ko: '만들다, 하다', cat: 'verb' },
  { hanzi: '尝', pinyin: 'cháng', ko: '맛보다', cat: 'verb' },

  // 조리법
  { hanzi: '烤', pinyin: 'kǎo', ko: '굽다', cat: 'cooking' },
  { hanzi: '炸', pinyin: 'zhá', ko: '튀기다', cat: 'cooking' },
  { hanzi: '煮', pinyin: 'zhǔ', ko: '삶다, 끓이다', cat: 'cooking' },
  { hanzi: '烧', pinyin: 'shāo', ko: '불로 조리하다, 볶다', cat: 'cooking' },
  { hanzi: '涮', pinyin: 'shuàn', ko: '살짝 데치다', cat: 'cooking' },

  // 음식/요리
  { hanzi: '菜', pinyin: 'cài', ko: '요리, 음식', cat: 'food' },
  { hanzi: '中国菜', pinyin: 'zhōngguó cài', ko: '중국요리', cat: 'food' },
  { hanzi: '京菜(北京菜)', pinyin: 'jīngcài', ko: '북경요리', cat: 'food' },
  { hanzi: '烤肉', pinyin: 'kǎoròu', ko: '구운 고기, 불고기', cat: 'food' },
  { hanzi: '炸酱面', pinyin: 'zhájiàngmiàn', ko: '자장면', cat: 'food' },
  { hanzi: '羊肉', pinyin: 'yángròu', ko: '양고기', cat: 'food' },
  {
    hanzi: '涮羊肉',
    pinyin: 'shuàn yángròu',
    ko: '양고기 샤브샤브',
    cat: 'food',
  },
  { hanzi: '烤鸭', pinyin: 'kǎoyā', ko: '오리구이', cat: 'food' },

  // 신체/기타 부위
  { hanzi: '肚', pinyin: 'dǔ', ko: '천엽, 동물의 위', cat: 'body' },
  { hanzi: '肚子', pinyin: 'dùzi', ko: '배, 복부', cat: 'body' },

  // 민족 및 기타
  { hanzi: '满', pinyin: 'mǎn', ko: '가득하다', cat: 'adj' },
  { hanzi: '满族', pinyin: 'mǎnzú', ko: '만주족', cat: 'culture' },
  { hanzi: '汉族', pinyin: 'hànzú', ko: '한족', cat: 'culture' },

  // 문법
  { hanzi: 'A一A', pinyin: 'A yi A', ko: '한번 ~해보다', cat: 'grammar' },
];

const extraDistractors = [
  // 동사 오답
  { ko: '먹다', cat: 'verb' },
  { ko: '마시다', cat: 'verb' },
  { ko: '사다', cat: 'verb' },

  // 조리법 오답
  { ko: '찌다', cat: 'cooking' },
  { ko: '썰다', cat: 'cooking' },
  { ko: '버무리다', cat: 'cooking' },
  { ko: '얼리다', cat: 'cooking' },

  // 음식 오답
  { ko: '한국요리', cat: 'food' },
  { ko: '마라탕', cat: 'food' },
  { ko: '소고기', cat: 'food' },
  { ko: '돼지고기', cat: 'food' },
  { ko: '짬뽕', cat: 'food' },
  { ko: '치킨', cat: 'food' },

  // 신체 부위 오답
  { ko: '머리', cat: 'body' },
  { ko: '다리', cat: 'body' },
  { ko: '손', cat: 'body' },
  { ko: '눈', cat: 'body' },

  // 민족/문화 오답
  { ko: '조선족', cat: 'culture' },
  { ko: '몽골족', cat: 'culture' },
  { ko: '소수민족', cat: 'culture' },

  // 형용사 오답
  { ko: '비어있다', cat: 'adj' },
  { ko: '적다', cat: 'adj' },
  { ko: '충분하다', cat: 'adj' },

  // 문법 오답
  { ko: '~할 것이다', cat: 'grammar' },
  { ko: '~하는 중이다', cat: 'grammar' },
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
