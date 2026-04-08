const subjects = [
  { hanzi: '我', pinyin: 'wǒ', ko: '나는' },
  { hanzi: '你', pinyin: 'nǐ', ko: '너는' },
  { hanzi: '他', pinyin: 'tā', ko: '그는' },
  { hanzi: '她', pinyin: 'tā', ko: '그녀는' },
  { hanzi: '老师', pinyin: 'lǎoshī', ko: '선생님은' },
  { hanzi: '大家', pinyin: 'dàjiā', ko: '여러분은' },
];

const verbs = [
  { hanzi: '听', pinyin: 'tīng', ko: '듣는다' },
  { hanzi: '喝', pinyin: 'hē', ko: '마신다' },
  { hanzi: '吃', pinyin: 'chī', ko: '먹는다' },
  { hanzi: '来', pinyin: 'lái', ko: '온다' },
  { hanzi: '买', pinyin: 'mǎi', ko: '산다' },
  { hanzi: '看', pinyin: 'kàn', ko: '본다' },
  { hanzi: '去', pinyin: 'qù', ko: '간다' },
];

const TOTAL_QUESTIONS = 15;
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let isClickable = true; // 중복 클릭 방지용
let currentOptions = []; // 현재 화면에 표시된 2개의 선택지 데이터
let correctOptionIndex = 0; // 정답이 0번 버튼인지 1번 버튼인지 저장

// DOM 요소
const elKoQuestion = document.getElementById('ko-question');
const elProgress = document.getElementById('progress');
const elScore = document.getElementById('score');
const elFeedback = document.getElementById('feedback-msg');
const btns = [
  document.getElementById('btn-0'),
  document.getElementById('btn-1'),
];

function startGame() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  updateScoreBoard();
  loadNextQuestion();
}

function loadNextQuestion() {
  if (currentQuestionIndex >= TOTAL_QUESTIONS) {
    endGame();
    return;
  }

  // 상태 초기화
  isClickable = true;
  elFeedback.className = '';
  elFeedback.innerText = '';
  btns.forEach((btn) => {
    btn.classList.remove('correct', 'wrong');
  });

  // 1. 정답 만들기
  let correctSub = subjects[Math.floor(Math.random() * subjects.length)];
  let correctVerb = verbs[Math.floor(Math.random() * verbs.length)];
  let questionText = `${correctSub.ko} ${correctVerb.ko}`; // 예: 나는 마신다

  let correctData = {
    hanzi: `${correctSub.hanzi}${correctVerb.hanzi}`,
    pinyin: `${correctSub.pinyin} ${correctVerb.pinyin}`,
    isCorrect: true,
  };

  // 2. 오답(매력적인 함정) 만들기: 주어는 같게 하고 동사만 다르게 설정
  let wrongVerb;
  do {
    wrongVerb = verbs[Math.floor(Math.random() * verbs.length)];
  } while (wrongVerb.hanzi === correctVerb.hanzi); // 정답 동사와 겹치지 않게

  let wrongData = {
    hanzi: `${correctSub.hanzi}${wrongVerb.hanzi}`,
    pinyin: `${correctSub.pinyin} ${wrongVerb.pinyin}`,
    isCorrect: false,
  };

  // 3. 버튼 위치 무작위 섞기 (50% 확률)
  if (Math.random() > 0.5) {
    currentOptions = [correctData, wrongData];
    correctOptionIndex = 0;
  } else {
    currentOptions = [wrongData, correctData];
    correctOptionIndex = 1;
  }

  // 4. 화면에 데이터 뿌리기
  elKoQuestion.innerText = questionText;

  for (let i = 0; i < 2; i++) {
    document.getElementById(`cn-text-${i}`).innerText = currentOptions[i].hanzi;
    document.getElementById(`pinyin-text-${i}`).innerText =
      currentOptions[i].pinyin;
  }

  currentQuestionIndex++;
  updateScoreBoard();
}

function selectAnswer(selectedIndex) {
  if (!isClickable) return; // 이미 선택했다면 무시
  isClickable = false;

  const isCorrect = currentOptions[selectedIndex].isCorrect;

  if (isCorrect) {
    // 정답인 경우
    correctAnswersCount++;
    btns[selectedIndex].classList.add('correct');
    elFeedback.innerText = '딩동댕! 정답입니다 👏';
    elFeedback.className = 'feedback-correct';
  } else {
    // 오답인 경우
    btns[selectedIndex].classList.add('wrong');
    btns[correctOptionIndex].classList.add('correct'); // 정답이 뭔지 초록색으로 알려줌
    elFeedback.innerText = '아쉽네요! 초록색 버튼이 정답입니다.';
    elFeedback.className = 'feedback-wrong';
  }

  updateScoreBoard();

  // 1.5초 후 다음 문제로
  setTimeout(() => {
    loadNextQuestion();
  }, 1500);
}

function updateScoreBoard() {
  elProgress.innerText = `진행도: ${currentQuestionIndex} / ${TOTAL_QUESTIONS}`;
  elScore.innerText = `정답: ${correctAnswersCount}`;
}

function endGame() {
  // 게임 보드를 숨기고
  document.getElementById('game-board').style.display = 'none';

  // 팝업창을 'flex' 모드로 띄웁니다 (중앙 정렬을 위해)
  const resultScreen = document.getElementById('result-screen');
  resultScreen.style.display = 'flex';

  // 점수 텍스트 업데이트
  document.getElementById('final-score').innerHTML =
    `부평 그랑힐스 입주민님,<br>총 <b>${TOTAL_QUESTIONS}</b>문제 중 <b>${correctAnswersCount}</b>문제를 맞히셨습니다!`;
}

const introOverlay = document.getElementById('intro-overlay');
const introVideo = document.getElementById('intro-video');
const mainLobby = document.getElementById('main-lobby');

// 인트로를 숨기고 로비를 보여주는 함수
function startLobby() {
  introOverlay.style.opacity = '0'; // 부드럽게 사라짐
  setTimeout(() => {
    introOverlay.style.display = 'none';
    mainLobby.style.display = 'flex'; // 로비 등장
    // 오디오가 포함된 영상이라면 여기서 정지하거나 소리를 끌 수 있습니다.
    introVideo.pause();
  }, 800); // 0.8초 애니메이션 뒤에 완전히 제거
}

// 영상이 자연스럽게 끝났을 때도 로비로 이동
introVideo.onended = function () {
  startLobby();
};
