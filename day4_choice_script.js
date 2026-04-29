/* ============================================================
   [데이터 설정]
   ============================================================ */
const rawSentenceData = {
  dialogue: [
    {
      ko: '당신은 매운 것을 좋아하세요?',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '喜欢', p: 'xǐhuān' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '좋아해요, 당신은요?',
      chunks: [
        { h: '喜欢', p: 'xǐhuān' },
        { h: '你呢', p: 'nǐ ne' },
      ],
    },
    {
      ko: '그다지 매운 것을 좋아하지 않아요.',
      chunks: [
        { h: '不', p: 'bú' },
        { h: '太', p: 'tài' },
        { h: '喜欢', p: 'xǐhuān' },
      ],
    },
    {
      ko: '아, 그럼, 안 매운 것을 먹자.',
      chunks: [
        { h: '哦', p: 'Ò' },
        { h: '那', p: 'nà' },
        { h: '吃', p: 'chī' },
        { h: '不', p: 'bú' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
        { h: '吧', p: 'ba' },
      ],
    },
  ],
};

let gameQueue = [];
let currentIdx = 0;
let score = 0;
let timeLeft = 20;
let timerInterval;
let selectedChunks = [];
let answerOrder = [];

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
   [핵심 함수] startGame
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
          // ★ 타이머 침묵 버그 원인 차단!
          s.muted = false;
        });
      } else {
        s.muted = false;
      }
    }
  });

  gameQueue = [];
  ['dialogue'].forEach((verb) => {
    if (rawSentenceData[verb]) {
      let shuffled = [...rawSentenceData[verb]].sort(() => 0.5 - Math.random());
      gameQueue.push(...shuffled.slice(0, 5));
    }
  });
  gameQueue.sort(() => 0.5 - Math.random());

  currentIdx = 0;
  score = 0;

  document.getElementById('ko-sentence').innerText = '준비...';
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';

  setTimeout(loadQuestion, 150);
}

function loadQuestion() {
  if (currentIdx >= gameQueue.length) {
    endGame();
    return;
  }
  selectedChunks = [];
  document.getElementById('sentence-display').innerHTML = '';
  document.getElementById('feedback-msg').innerText = '';

  const data = gameQueue[currentIdx];
  document.getElementById('ko-sentence').innerText = data.ko;
  answerOrder = data.chunks.map((c) => c.h);

  const pool = document.getElementById('chunk-pool');
  pool.innerHTML = '';
  [...data.chunks]
    .sort(() => Math.random() - 0.5)
    .forEach((chunk) => {
      const card = document.createElement('div');
      card.className = 'chunk-card';
      card.setAttribute('tabindex', '-1');
      card.innerHTML = `<div class="cn-text">${chunk.h}</div><div class="pinyin-text">${chunk.p}</div>`;
      card.onclick = () => {
        card.blur();
        selectChunk(chunk, card);
      };
      pool.appendChild(card);
    });

  startTimer();
}

function selectChunk(chunk, cardElement) {
  if (cardElement.classList.contains('used')) return;

  cardElement.blur();
  cardElement.classList.add('used');
  selectedChunks.push(chunk.h);

  const display = document.getElementById('sentence-display');
  const selectedTag = document.createElement('div');
  selectedTag.className = 'selected-card';
  selectedTag.style.cursor = 'pointer';
  selectedTag.innerHTML = `<div class="hz-text">${chunk.h}</div><div class="py-text">${chunk.p}</div>`;

  selectedTag.onclick = function () {
    for (let i = selectedChunks.length - 1; i >= 0; i--) {
      if (selectedChunks[i] === chunk.h) {
        selectedChunks.splice(i, 1);
        break;
      }
    }
    this.remove();
    cardElement.classList.remove('used');
    const fb = document.getElementById('feedback-msg');
    if (fb) fb.innerText = '';
  };

  display.appendChild(selectedTag);

  if (selectedChunks.length === answerOrder.length) {
    setTimeout(checkAnswer, 100);
  }
}

function checkAnswer() {
  clearInterval(timerInterval);
  if (timerSound) timerSound.pause();

  const isCorrect =
    JSON.stringify(selectedChunks) === JSON.stringify(answerOrder);
  const fb = document.getElementById('feedback-msg');
  const display = document.getElementById('sentence-display');

  if (isCorrect) {
    playEffect(correctSound);

    score++;
    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';
    document.getElementById('score').innerText = score;
    currentIdx++;
    setTimeout(loadQuestion, 1200);
  } else {
    playEffect(wrongSound);

    fb.innerText = '틀렸어요! 다시 맞춰보세요 🧐';
    fb.style.color = 'var(--wrong)';
    display.classList.add('shake');
    setTimeout(() => {
      display.classList.remove('shake');
      resetCurrentSentence();
    }, 1200);
  }
}

function resetCurrentSentence() {
  selectedChunks = [];
  document.getElementById('sentence-display').innerHTML = '';
  document.querySelectorAll('.chunk-card').forEach((c) => {
    c.classList.remove('used');
    c.blur();
  });
  document.getElementById('feedback-msg').innerText = '';
  startTimer();
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
    timerSound.muted = false; // ★ 켤 때 한 번 더 확실하게 음소거 해제
    timerSound.pause();
    timerSound.currentTime = 0;
    timerSound.play().catch(() => {});
  }

  timerInterval = setInterval(() => {
    timeLeft--;

    const currentDisplay = document.getElementById('timer');
    if (currentDisplay) {
      currentDisplay.innerText = timeLeft;
      if (timeLeft <= 5) currentDisplay.style.color = 'var(--wrong)';
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  if (timerSound) timerSound.pause();

  playEffect(wrongSound);

  const display = document.getElementById('sentence-display');
  document.getElementById('feedback-msg').innerText =
    '시간 초과! 다시 도전! ⏰';
  document.getElementById('feedback-msg').style.color = 'var(--wrong)';
  display.classList.add('shake');

  setTimeout(() => {
    display.classList.remove('shake');
    resetCurrentSentence();
  }, 1200);
}

function endGame() {
  clearInterval(timerInterval);
  if (timerSound) timerSound.pause();
  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  if (result) result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 문장을 모두 마스터 했습니다.<br>(이 화면을 캡쳐해서 카톡방에 올려주세요!)`;
}
