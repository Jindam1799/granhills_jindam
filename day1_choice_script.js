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
        { h: '不', p: 'bù' },
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
        { h: '不', p: 'bù' },
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
        { h: '不', p: 'bù' },
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

function startGame() {
  gameQueue = [];
  ['come', 'listen', 'watch', 'buy'].forEach((verb) => {
    let shuffled = [...rawSentenceData[verb]].sort(() => 0.5 - Math.random());
    gameQueue.push(...shuffled.slice(0, 5));
  });
  gameQueue.sort(() => 0.5 - Math.random());
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';
  loadQuestion();
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
  cardElement.classList.add('used');
  selectedChunks.push(chunk.h);

  const display = document.getElementById('sentence-display');
  const selectedTag = document.createElement('div');
  selectedTag.className = 'selected-card';
  // ★ HTML 구조 내 클래스 부여로 한자를 병음보다 훨씬 크게 조절 ★
  selectedTag.innerHTML = `<div class="hz-text">${chunk.h}</div><div class="py-text">${chunk.p}</div>`;
  display.appendChild(selectedTag);

  if (selectedChunks.length === answerOrder.length) {
    checkAnswer();
  }
}

function checkAnswer() {
  clearInterval(timerInterval);
  const isCorrect =
    JSON.stringify(selectedChunks) === JSON.stringify(answerOrder);
  const fb = document.getElementById('feedback-msg');
  const display = document.getElementById('sentence-display');

  if (isCorrect) {
    score++;
    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';
    document.getElementById('score').innerText = score;
    currentIdx++;
    setTimeout(loadQuestion, 1200);
  } else {
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
  document
    .querySelectorAll('.chunk-card')
    .forEach((c) => c.classList.remove('used'));
  document.getElementById('feedback-msg').innerText = '';
  startTimer();
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
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
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
  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 문장을 모두 마스터했습니다.`;
}
