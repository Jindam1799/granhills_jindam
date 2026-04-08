const rawSentenceData = {
  come: [
    {
      ko: '그는 옵니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
      ],
    },
    {
      ko: '그는 안 옵니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '来', p: 'lái' },
      ],
    },
    {
      ko: '그는 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 안 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '来', p: 'lái' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 옵니까 안 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
        { h: '不', p: 'bu' },
        { h: '来', p: 'lái' },
      ],
    },
    {
      ko: '그는 한국에 옵니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
        { h: '韩国', p: 'hánguó' },
      ],
    },
    {
      ko: '그는 한국에 안 옵니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '来', p: 'lái' },
        { h: '韩国', p: 'hánguó' },
      ],
    },
    {
      ko: '그는 한국에 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
        { h: '韩国', p: 'hánguó' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 한국에 안 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '来', p: 'lái' },
        { h: '韩国', p: 'hánguó' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 한국에 옵니까 안 옵니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '来', p: 'lái' },
        { h: '不', p: 'bu' },
        { h: '来', p: 'lái' },
        { h: '韩国', p: 'hánguó' },
      ],
    },
  ],
  listen: [
    {
      ko: '그는 듣습니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
      ],
    },
    {
      ko: '그는 안 듣습니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '听', p: 'tīng' },
      ],
    },
    {
      ko: '그는 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 안 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '听', p: 'tīng' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 듣습니까 안 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
        { h: '不', p: 'bu' },
        { h: '听', p: 'tīng' },
      ],
    },
    {
      ko: '그는 음악을 듣습니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
        { h: '音乐', p: 'yīnyuè' },
      ],
    },
    {
      ko: '그는 음악을 안 듣습니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '听', p: 'tīng' },
        { h: '音乐', p: 'yīnyuè' },
      ],
    },
    {
      ko: '그는 음악을 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
        { h: '音乐', p: 'yīnyuè' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 음악을 안 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '听', p: 'tīng' },
        { h: '音乐', p: 'yīnyuè' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 음악을 듣습니까 안 듣습니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '听', p: 'tīng' },
        { h: '不', p: 'bu' },
        { h: '听', p: 'tīng' },
        { h: '音乐', p: 'yīnyuè' },
      ],
    },
  ],
  watch: [
    {
      ko: '그는 봅니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
      ],
    },
    {
      ko: '그는 안 봅니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '看', p: 'kàn' },
      ],
    },
    {
      ko: '그는 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 안 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '看', p: 'kàn' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 봅니까 안 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
        { h: '不', p: 'bu' },
        { h: '看', p: 'kàn' },
      ],
    },
    {
      ko: '그는 영화를 봅니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
        { h: '电影', p: 'diànyǐng' },
      ],
    },
    {
      ko: '그는 영화를 안 봅니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '看', p: 'kàn' },
        { h: '电影', p: 'diànyǐng' },
      ],
    },
    {
      ko: '그는 영화를 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
        { h: '电影', p: 'diànyǐng' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 영화를 안 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '看', p: 'kàn' },
        { h: '电影', p: 'diànyǐng' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 영화를 봅니까 안 봅니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '看', p: 'kàn' },
        { h: '不', p: 'bu' },
        { h: '看', p: 'kàn' },
        { h: '电影', p: 'diànyǐng' },
      ],
    },
  ],
  buy: [
    {
      ko: '그는 삽니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
      ],
    },
    {
      ko: '그는 안 삽니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '买', p: 'mǎi' },
      ],
    },
    {
      ko: '그는 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 안 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '买', p: 'mǎi' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 삽니까 안 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
        { h: '不', p: 'bu' },
        { h: '买', p: 'mǎi' },
      ],
    },
    {
      ko: '그는 책을 삽니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
        { h: '书', p: 'shū' },
      ],
    },
    {
      ko: '그는 책을 안 삽니다.',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '买', p: 'mǎi' },
        { h: '书', p: 'shū' },
      ],
    },
    {
      ko: '그는 책을 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
        { h: '书', p: 'shū' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 책을 안 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '买', p: 'mǎi' },
        { h: '书', p: 'shū' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그는 책을 삽니까 안 삽니까?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '买', p: 'mǎi' },
        { h: '不', p: 'bu' },
        { h: '买', p: 'mǎi' },
        { h: '书', p: 'shū' },
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
   [핵심 함수] startGame
   ============================================================ */
function startGame() {
  timerSound = document.getElementById('timer-sound');
  correctSound = document.getElementById('correct-sound');
  wrongSound = document.getElementById('wrong-sound');

  // ★ [사운드 해결] 모든 소리 요소를 무음으로 한 번 재생하여 모바일 권한 획득
  const unlockSounds = [timerSound, correctSound, wrongSound];
  unlockSounds.forEach((s) => {
    if (s) {
      const originalVol = s.volume;
      s.volume = 0;
      s.muted = false;
      s.play()
        .then(() => {
          s.pause();
          s.currentTime = 0;
          s.volume = originalVol;
        })
        .catch(() => {});
    }
  });

  gameQueue = [];
  ['come', 'listen', 'watch', 'buy'].forEach((verb) => {
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

  // 화면 전환 후 타이머가 확실히 동작하도록 미세 지연 후 로드
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
      card.innerHTML = `<div class="cn-text">${chunk.h}</div><div class="pinyin-text">${chunk.p}</div>`;
      card.onclick = () => selectChunk(chunk, card);
      pool.appendChild(card);
    });

  startTimer();
}

function selectChunk(chunk, cardElement) {
  if (cardElement.classList.contains('used')) return;

  // ★ [호버 해결] 터치하는 순간 포커스 해제하여 모바일 잔상 방지
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
    if (correctSound) {
      correctSound.currentTime = 0;
      correctSound.play().catch(() => {});
    }
    score++;
    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';
    document.getElementById('score').innerText = score;
    currentIdx++;
    setTimeout(loadQuestion, 1200);
  } else {
    if (wrongSound) {
      wrongSound.currentTime = 0;
      wrongSound.play().catch(() => {});
    }
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
    c.blur(); // 포커스 초기화
  });
  document.getElementById('feedback-msg').innerText = '';
  startTimer();
}

/* ============================================================
   [핵심 함수] startTimer (보강됨)
   ============================================================ */
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timeLeft = 20;

  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) {
    timerDisplay.innerText = timeLeft;
    timerDisplay.style.color = 'var(--primary)';
  }

  if (timerSound) {
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
  if (wrongSound) {
    wrongSound.currentTime = 0;
    wrongSound.play().catch(() => {});
  }
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
  result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 문장을 모두 마스터 했습니다.<br>(이 화면을 캡쳐해서 카톡방에 올려주세요!)`;
}
