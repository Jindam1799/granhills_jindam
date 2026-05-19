const studyList = [
  // 인사말 / 어기조사
  { hanzi: '喂', pinyin: 'wéi, wèi', ko: '여보세요 / 어이', cat: 'phrase' },

  // 전치사 / 동사
  { hanzi: '在', pinyin: 'zài', ko: '~에 있다, 에서', cat: 'prep' },
  { hanzi: '去', pinyin: 'qù', ko: '가다', cat: 'verb' },
  { hanzi: '上课', pinyin: 'shàng kè', ko: '수업하다', cat: 'verb' },

  // 장소 대명사
  { hanzi: '哪儿', pinyin: 'nǎr', ko: '어디', cat: 'place_pronoun' },
  { hanzi: '这儿', pinyin: 'zhèr', ko: '여기', cat: 'place_pronoun' },
  { hanzi: '那儿', pinyin: 'nàr', ko: '저기', cat: 'place_pronoun' },

  // 장소 명사
  { hanzi: '补习班', pinyin: 'bǔxíbān', ko: '학원', cat: 'place' },
  {
    hanzi: '四合院',
    pinyin: 'sìhéyuàn',
    ko: '사합원 (전통 가옥)',
    cat: 'place',
  },

  // 시간 명사
  { hanzi: '每天', pinyin: 'měitiān', ko: '매일', cat: 'time' },
  { hanzi: '星期三', pinyin: 'xīngqīsān', ko: '수요일', cat: 'time' },
  { hanzi: '星期天', pinyin: 'xīngqītiān', ko: '일요일', cat: 'time' },

  // 대명사 / 양사
  { hanzi: '每', pinyin: 'měi', ko: '매~, 각각, ~마다', cat: 'grammar' },
  { hanzi: '个', pinyin: 'ge', ko: '개 (양사)', cat: 'measure' },

  // 방향 명사
  { hanzi: '北边', pinyin: 'běibiān', ko: '북쪽', cat: 'direction' },
  { hanzi: '东边', pinyin: 'dōngbiān', ko: '동쪽', cat: 'direction' },
  { hanzi: '西边', pinyin: 'xībiān', ko: '서쪽', cat: 'direction' },
  { hanzi: '南边', pinyin: 'nánbiān', ko: '남쪽', cat: 'direction' },
];

const extraDistractors = [
  // 인사말 오답
  { ko: '안녕하세요', cat: 'phrase' },
  { ko: '미안합니다', cat: 'phrase' },
  { ko: '감사합니다', cat: 'phrase' },

  // 전치사/동사 오답
  { ko: '~로, ~을 향해', cat: 'prep' },
  { ko: '~부터', cat: 'prep' },
  { ko: '오다', cat: 'verb' },
  { ko: '먹다', cat: 'verb' },
  { ko: '퇴근하다', cat: 'verb' },
  { ko: '쉬다', cat: 'verb' },

  // 장소 대명사 오답
  { ko: '누구', cat: 'place_pronoun' },
  { ko: '어느 것', cat: 'place_pronoun' },
  { ko: '무엇', cat: 'place_pronoun' },

  // 장소 명사 오답
  { ko: '학교', cat: 'place' },
  { ko: '병원', cat: 'place' },
  { ko: '식당', cat: 'place' },
  { ko: '집', cat: 'place' },

  // 시간 명사 오답
  { ko: '오늘', cat: 'time' },
  { ko: '내일', cat: 'time' },
  { ko: '월요일', cat: 'time' },
  { ko: '금요일', cat: 'time' },
  { ko: '매주', cat: 'time' },

  // 대명사/양사 오답
  { ko: '모두', cat: 'grammar' },
  { ko: '어떤', cat: 'grammar' },
  { ko: '명 (사람)', cat: 'measure' },
  { ko: '마리 (동물)', cat: 'measure' },
  { ko: '권 (책)', cat: 'measure' },

  // 방향 명사 오답
  { ko: '위쪽', cat: 'direction' },
  { ko: '아래쪽', cat: 'direction' },
  { ko: '앞쪽', cat: 'direction' },
  { ko: '뒤쪽', cat: 'direction' },
  { ko: '오른쪽', cat: 'direction' },
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
