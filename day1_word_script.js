/* ============================================================
   [데이터 설정] 
   1. studyList: 실제 문제로 출제되는 단어표 (28개)
   2. extraDistractors: 오답 카드로만 사용되는 보조 데이터
   ============================================================ */

const studyList = [
  { hanzi: '我', pinyin: 'wǒ', ko: '나', cat: 'pronoun' },
  { hanzi: '你', pinyin: 'nǐ', ko: '너', cat: 'pronoun' },
  { hanzi: '您', pinyin: 'nín', ko: '당신 (존칭)', cat: 'pronoun' },
  { hanzi: '他', pinyin: 'tā', ko: '그', cat: 'pronoun' },
  { hanzi: '她', pinyin: 'tā', ko: '그녀', cat: 'pronoun' },
  { hanzi: '我们', pinyin: 'wǒmen', ko: '우리', cat: 'pronoun' },
  { hanzi: '你们', pinyin: 'nǐmen', ko: '너희', cat: 'pronoun' },
  { hanzi: '他们', pinyin: 'tāmen', ko: '그들 (남/혼합)', cat: 'pronoun' },
  { hanzi: '她们', pinyin: 'tāmen', ko: '그녀들', cat: 'pronoun' },
  { hanzi: '大家', pinyin: 'dàjiā', ko: '모두, 여러분', cat: 'pronoun' },
  { hanzi: '老师', pinyin: 'lǎoshī', ko: '선생님', cat: 'people' },
  { hanzi: '来', pinyin: 'lái', ko: '오다', cat: 'verb' },
  { hanzi: '听', pinyin: 'tīng', ko: '듣다', cat: 'verb' },
  { hanzi: '看', pinyin: 'kàn', ko: '보다', cat: 'verb' },
  { hanzi: '喝', pinyin: 'hē', ko: '마시다', cat: 'verb' },
  { hanzi: '吃', pinyin: 'chī', ko: '먹다', cat: 'verb' },
  { hanzi: '买', pinyin: 'mǎi', ko: '사다', cat: 'verb' },
  { hanzi: '中国', pinyin: 'Zhōngguó', ko: '중국', cat: 'country' },
  { hanzi: '韩国', pinyin: 'Hánguó', ko: '한국', cat: 'country' },
  { hanzi: '北方', pinyin: 'běifāng', ko: '북방', cat: 'geo' },
  { hanzi: '南方', pinyin: 'nánfāng', ko: '남방', cat: 'geo' },
  { hanzi: '秦岭', pinyin: 'Qínlǐng', ko: '친링산맥', cat: 'geo' },
  { hanzi: '淮河', pinyin: 'Huáihé', ko: '화이허', cat: 'geo' },
  { hanzi: '早上', pinyin: 'zǎoshang', ko: '아침', cat: 'time' },
  { hanzi: '油条', pinyin: 'yóutiáo', ko: '요우티아오 (튀긴 빵)', cat: 'food' },
  { hanzi: '包子', pinyin: 'bāozi', ko: '바오즈 (찐빵)', cat: 'food' },
  { hanzi: '煎饼', pinyin: 'jiānbing', ko: '젠빙 (중국식 전병)', cat: 'food' },
];

// 오답 전용 카드 (문제로는 나오지 않음)
const extraDistractors = [
  { ko: '미국', cat: 'country' },
  { ko: '일본', cat: 'country' },
  { ko: '영국', cat: 'country' },
  { ko: '태산', cat: 'geo' },
  { ko: '장강', cat: 'geo' },
  { ko: '황허', cat: 'geo' },
  { ko: '서쪽', cat: 'geo' },
  { ko: '교자', cat: 'food' },
  { ko: '면료', cat: 'food' },
  { ko: '죽', cat: 'food' },
  { ko: '학생', cat: 'people' },
  { ko: '의사', cat: 'people' },
  { ko: '친구', cat: 'people' },
  { ko: '팔다', cat: 'verb' },
  { ko: '배우다', cat: 'verb' },
  { ko: '쓰다', cat: 'verb' },
  { ko: '점심', cat: 'time' },
  { ko: '저녁', cat: 'time' },
];

/* ============================================================
   [게임 로직]
   ============================================================ */

let gameWords = [];
const TOTAL_QUESTIONS = 20;
let currentIdx = 0;
let score = 0;
let isClickable = true;
let correctIdx = 0;
let timeLeft = 20;
let timerInterval;

function startGame() {
  // 28개 단어표에서 랜덤으로 20개 추출하여 문제 리스트 생성
  gameWords = [...studyList]
    .sort(() => Math.random() - 0.5)
    .slice(0, TOTAL_QUESTIONS);
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';
  loadQuestion();
}

function showHint() {
  document.getElementById('q-pinyin').style.visibility = 'visible';
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 20;
  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = timeLeft;
  timerDisplay.style.color = 'var(--primary)';

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    if (timeLeft <= 5) timerDisplay.style.color = 'var(--wrong)';
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
  document.getElementById('feedback-msg').innerText = '';
  document.getElementById('q-pinyin').style.visibility = 'hidden';
  const btns = [0, 1, 2, 3].map((i) => document.getElementById(`btn-${i}`));
  btns.forEach((b) => b.classList.remove('correct', 'wrong'));

  let correctWord = gameWords[currentIdx];

  // 오답 후보들 (단어표의 다른 단어들 + 오답 전용 단어들 중 같은 카테고리인 것들)
  let potentialDistractors = [...studyList, ...extraDistractors].filter(
    (w) => w.cat === correctWord.cat && w.ko !== correctWord.ko,
  );

  potentialDistractors.sort(() => Math.random() - 0.5);

  let options = [correctWord];
  // 같은 카테고리에서 오답 3개 채우기
  for (let i = 0; i < 3; i++) {
    if (potentialDistractors[i]) {
      options.push(potentialDistractors[i]);
    }
  }

  // 혹시라도 카테고리 내 단어가 부족하면 아무 단어나 채움
  while (options.length < 4) {
    let rand = studyList[Math.floor(Math.random() * studyList.length)];
    if (!options.find((o) => o.ko === rand.ko)) options.push(rand);
  }

  options.sort(() => Math.random() - 0.5);
  correctIdx = options.findIndex((o) => o.ko === correctWord.ko);

  document.getElementById('ko-question').innerText = correctWord.hanzi;
  document.getElementById('q-pinyin').innerText = correctWord.pinyin;
  document.getElementById('score').innerText = score;

  for (let i = 0; i < 4; i++) {
    document.getElementById(`ko-text-${i}`).innerText = options[i].ko;
  }
  startTimer();
}

function handleError(msg) {
  isClickable = false;
  const qBox = document.querySelector('.question-box');
  const fb = document.getElementById('feedback-msg');
  fb.innerText = msg;
  fb.style.color = 'var(--wrong)';
  qBox.classList.add('shake');

  setTimeout(() => {
    qBox.classList.remove('shake');
    isClickable = true;
    fb.innerText = '';
    startTimer(); // 맞힐 때까지 시간 리셋
  }, 1200);
}

function selectAnswer(idx) {
  if (!isClickable) return;
  isClickable = false;
  clearInterval(timerInterval);

  if (idx === correctIdx) {
    score++;
    document.getElementById(`btn-${idx}`).classList.add('correct');
    document.getElementById('feedback-msg').innerText = '딩동댕! 👏';
    document.getElementById('feedback-msg').style.color = 'var(--correct)';
    currentIdx++;
    setTimeout(loadQuestion, 1200);
  } else {
    document.getElementById(`btn-${idx}`).classList.add('wrong');
    handleError('틀렸어요! 다시 생각해보세요 🧐');
  }
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `부평 그랑힐스 단어 마스터!<br>총 <b>${TOTAL_QUESTIONS}</b>문제를 모두 맞혔습니다!`;
}
