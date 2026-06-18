const allSentenceData = {
  /* ============================================================
     [데이터 설정]
     ============================================================ */
  day9: [
    {
      ko: '저는 중국어를 할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '저는 중국어를 할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '저는 영어를 할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '저는 영어를 할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '저는 운전할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '저는 운전할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '저는 자전거를 탈 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '저는 자전거를 탈 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '저는 요리할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '저는 요리할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '저는 사진 찍을 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '저는 사진 찍을 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '저는 한자를 쓸 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
    {
      ko: '저는 한자를 쓸 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
    {
      ko: '누가 중국어를 할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '누가 영어를 할 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '누가 운전할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '누가 자전거를 탈 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '누가 요리할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '누가 사진을 찍을 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '누가 한자를 쓸 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },

        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
  ],
  day10: [
    {
      ko: '오늘 비가 올 것이다.',
      chunks: [
        { h: '今天', p: 'jīntiān' },
        { h: '会', p: 'huì' },
        { h: '下雨', p: 'xià yǔ' },
      ],
    },
    {
      ko: '오늘 비가 오지 않을 것이다.',
      chunks: [
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '下雨', p: 'xià yǔ' },
      ],
    },
    {
      ko: '너는 성공할 것이다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '会', p: 'huì' },
        { h: '成功', p: 'chénggōng' },
      ],
    },
    {
      ko: '너는 성공하지 못할 것이다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '成功', p: 'chénggōng' },
      ],
    },
    {
      ko: '그들은 돌아올 것이다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '会', p: 'huì' },
        { h: '回来', p: 'huílái' },
      ],
    },
    {
      ko: '그들은 돌아오지 않을 것이다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '回来', p: 'huílái' },
      ],
    },
    {
      ko: '그녀는 이길 것이다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '会', p: 'huì' },
        { h: '赢', p: 'yíng' },
      ],
    },
    {
      ko: '그녀는 이기지 못할 것이다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '赢', p: 'yíng' },
      ],
    },
    {
      ko: '여러분은 한국어를 알아들을 수 있다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '能', p: 'néng' },
        { h: '听懂', p: 'tīngdǒng' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
    {
      ko: '여러분은 한국어를 알아들을 수 없다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '听懂', p: 'tīngdǒng' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
    {
      ko: '제 중국인 친구는 매운 것을 먹을 수 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '의', p: 'de' },
      ],
    },
    {
      ko: '제 중국인 친구는 매운 것을 먹을 수 없다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '의', p: 'de' },
      ],
    },
    {
      ko: '당신의 배우자는 문제를 해결할 것이다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '의', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '会', p: 'huì' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '당신의 배우자는 문제를 해결하지 못할 것이다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '의', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '선생님은 500m를 수영할 수 있다.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '能', p: 'néng' },
        { h: '游', p: 'yóu' },
        { h: '五百', p: 'wǔbǎi' },
        { h: '米', p: 'mǐ' },
      ],
    },
    {
      ko: '선생님은 500m를 수영할 수 없다.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '游', p: 'yóu' },
        { h: '五百', p: 'wǔbǎi' },
        { h: '米', p: 'mǐ' },
      ],
    },
  ],
  day11: [
    {
      ko: '너 들어갈 수 있어?',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '能', p: 'néng' },
        { h: '进', p: 'jìn' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '너희들은 들어갈 수 없어.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '进', p: 'jìn' },
      ],
    },
    {
      ko: '이곳에 오실 수 있으신가요?',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '能', p: 'néng' },
        { h: '来', p: 'lái' },
        { h: '这儿', p: 'zhèr' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '오늘 수업하실 수 없으세요.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '上課', p: 'shàngkè' },
      ],
    },
    {
      ko: '그는 나갈 수 있나요?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '能', p: 'néng' },
        { h: '出去', p: 'chūqù' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그들은 오늘 나갈 수 없어요.',
      chunks: [
        { h: '**', p: 'tāmen' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '出去', p: 'chūqù' },
      ],
    },
    {
      ko: '그녀는 나를 도와줄 수 있나요?',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '能', p: 'néng' },
        { h: '帮', p: 'bāng' },
        { h: '我', p: 'wǒ' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그녀는 오늘 나를 도와줄 수 없어요.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '帮', p: 'bāng' },
        { h: '我', p: 'wǒ' },
      ],
    },
    {
      ko: '선생님은 도착하실 수 있나요?',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '能', p: 'néng' },
        { h: '到', p: 'dào' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '선생님은 오늘 도착하실 수 없어요.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '到', p: 'dào' },
      ],
    },
    {
      ko: '여러분은 한자를 이해할 수 없어요.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '看懂', p: 'kàndǒng' },
        { h: '汉字', p: 'hànzì' },
      ],
    },
    {
      ko: '제 배우자는 숙제를 끝낼 수 있어요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '能', p: 'néng' },
        { h: '完成', p: 'wánchéng' },
        { h: '作业', p: 'zuòyè' },
      ],
    },
    {
      ko: '제 중국인 친구는 문제를 해결할 수 없어요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '中国', p: 'Zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
  ],
};

let rawSentenceData = [];
let gameQueue = [];
let currentIdx = 0;
let score = 0;
let timeLeft = 20;
let timerInterval;
let selectedChunks = [];
let answerOrder = [];
let timerSound, correctSound, wrongSound;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDay = urlParams.get('day');
  if (!selectedDay || !allSentenceData['day' + selectedDay]) {
    alert('데이터를 불러올 수 없습니다. 로비로 돌아갑니다.');
    location.href = 'index.html';
    return;
  }
  rawSentenceData = allSentenceData['day' + selectedDay];
  const titleTag = document.querySelector('.apt-tag');
  if (titleTag) titleTag.innerText = `STEP 2 - Day ${selectedDay}`;
};

function playEffect(audioElement) {
  if (!audioElement) return;
  const clone = audioElement.cloneNode(true);
  clone.volume = 1;
  clone.muted = false;
  clone.play().catch(() => {});
}

function startGame() {
  timerSound = document.getElementById('timer-sound');
  correctSound = document.getElementById('correct-sound');
  wrongSound = document.getElementById('wrong-sound');

  gameQueue = [...rawSentenceData].sort(() => 0.5 - Math.random()).slice(0, 20);
  currentIdx = 0;
  score = 0;

  document.getElementById('ko-sentence').innerText = '준비...';
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
  };
  display.appendChild(selectedTag);

  // 💡 안드로이드 락 우회: 딜레이를 완벽히 없애 유저 터치 권한 유지
  if (selectedChunks.length === answerOrder.length) {
    checkAnswer();
  }
}

function checkAnswer() {
  clearInterval(timerInterval);
  if (timerSound) timerSound.pause();

  const isCorrect =
    JSON.stringify(selectedChunks) === JSON.stringify(answerOrder);
  const fb = document.getElementById('feedback-msg');

  if (isCorrect) {
    // 💡 안드로이드 핵심: 오디오 파일(띠링~)과 TTS가 동시 재생되면 안드로이드가 TTS를 차단합니다.
    // 안드로이드 환경에서는 효과음을 건너뛰고 오직 맑은 TTS 음성에 집중시킵니다.
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (!isAndroid) {
      playEffect(correctSound);
    }

    const currentQuestion = gameQueue[currentIdx];
    const fullSentence = currentQuestion.chunks
      .map((chunk) => chunk.h)
      .join('');
    const fullPinyin = currentQuestion.chunks.map((chunk) => chunk.p).join(' ');

    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';

    // 즉시 팝업창 실행 (0초 딜레이)
    showTTSPopup(fullSentence, fullPinyin);
  } else {
    playEffect(wrongSound);
    fb.innerText = '틀렸어요! 다시 맞춰보세요 🧐';
    fb.style.color = 'var(--wrong)';
    document.getElementById('sentence-display').classList.add('shake');
    setTimeout(() => {
      document.getElementById('sentence-display').classList.remove('shake');
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
  playEffect(wrongSound);
  document.getElementById('feedback-msg').innerText =
    '시간 초과! 다시 도전! ⏰';
  document.getElementById('feedback-msg').style.color = 'var(--wrong)';
  resetCurrentSentence();
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  if (result) result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 문장을 모두 마스터 했습니다.<br>(이 화면을 캡쳐해서 카톡방에 올려주세요!)`;
}

/* ============================================================
   [TTS & 팝업 기능] 안드로이드 완벽 대응 극초고속 버전
   ============================================================ */
let currentFullSentence = '';
window.activeUtterance = null;

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = function () {
      window.speechSynthesis.getVoices();
    };
  }
}

function createTTSPopup() {
  if (document.getElementById('tts-popup')) return;
  const overlay = document.createElement('div');
  overlay.id = 'tts-popup';
  overlay.className = 'tts-popup-overlay';
  overlay.style.display = 'none';
  overlay.innerHTML = `
    <div class="tts-popup-box">
      <div class="apt-tag" style="margin-bottom:15px; display:inline-block;">정답 확인</div>
      <div id="tts-popup-cn" class="tts-popup-cn"></div>
      <button id="py-toggle-btn" class="py-toggle-btn" onclick="togglePinyin()">👀 병음 보기</button>
      <div id="tts-popup-py" class="tts-popup-py"></div>
      <div class="tts-popup-btn-group">
        <button class="tts-btn tts-btn-listen" onclick="replayTTS()">🎧 다시 듣기</button>
        <button class="tts-btn tts-btn-next" onclick="closeTTSPopupAndNext()">▶ 다음 문제</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

window.togglePinyin = function () {
  const pyDiv = document.getElementById('tts-popup-py');
  const pyBtn = document.getElementById('py-toggle-btn');
  if (pyDiv.style.display === 'none' || pyDiv.style.display === '') {
    pyDiv.style.display = 'block';
    pyBtn.innerText = '🙈 병음 숨기기';
  } else {
    pyDiv.style.display = 'none';
    pyBtn.innerText = '👀 병음 보기';
  }
};

window.playTTS = function (text) {
  if (!('speechSynthesis' in window)) return;
  try {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  } catch (e) {}

  window.activeUtterance = new SpeechSynthesisUtterance(text);
  window.activeUtterance.lang = 'zh-CN';
  window.activeUtterance.rate = 0.65;
  window.activeUtterance.volume = 1.0;

  // 💡 안드로이드 전용 처리: 모바일 크롬은 특정한 오프라인 음성을 강제 지정하면 재생이 차단됩니다.
  // lang 기반으로 시스템 기본 여성 음성을 타게 만드는 것이 가장 안전합니다.
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (!isAndroid) {
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const femaleVoice = voices.find(
        (v) =>
          v.lang.includes('zh-CN') &&
          (v.name.includes('Xiaoxiao') ||
            v.name.includes('Google') ||
            v.name.includes('Female')),
      );
      if (femaleVoice) window.activeUtterance.voice = femaleVoice;
    }
  }

  try {
    window.speechSynthesis.speak(window.activeUtterance);
  } catch (e) {
    console.error(e);
  }
};

window.replayTTS = function () {
  window.playTTS(currentFullSentence);
};

window.showTTSPopup = function (text, pinyin) {
  createTTSPopup();
  currentFullSentence = text;
  document.getElementById('tts-popup-cn').innerText = text;
  document.getElementById('tts-popup-py').innerText = pinyin;

  // 💡 오타 수정 완료! (style.style -> style)
  document.getElementById('tts-popup-py').style.display = 'none';
  document.getElementById('py-toggle-btn').innerText = '👀 병음 보기';

  const popup = document.getElementById('tts-popup');
  if (popup) {
    popup.style.display = 'flex';
    popup.classList.add('active');
  }
  window.playTTS(text); // 딜레이 0초 즉시 재생
};

window.closeTTSPopupAndNext = function () {
  try {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  } catch (e) {}
  const popup = document.getElementById('tts-popup');
  if (popup) {
    popup.classList.remove('active');
    popup.style.display = 'none';
  }
  score++;
  if (document.getElementById('score'))
    document.getElementById('score').innerText = score;
  currentIdx++;
  loadQuestion();
};
