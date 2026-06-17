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
        { h: '会写', p: 'huì xiě' },
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

    // 의문문 형태
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
        { h: '不', p: 'bú' },
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
        { h: '的', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '제 중국인 친구는 매운 것을 먹을 수 없다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '당신의 배우자는 문제를 해결할 것이다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '的', p: 'de' },
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
        { h: '的', p: 'de' },
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
        { h: '上课', p: 'shàngkè' },
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
        { h: '他们', p: 'tāmen' },
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
        { h: '的', p: 'de' },
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
        { h: '的', p: 'de' },
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
/* ============================================================
   [초기 세팅] URL 꼬리표(?day=9)를 읽어옵니다.
   ============================================================ */
window.onload = function () {
  // 1. 주소창에서 '?day=9' 같은 꼬리표를 찾아냅니다.
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDay = urlParams.get('day'); // '9', '10' 등이 들어옵니다.

  // 2. 만약 꼬리표가 없거나 데이터가 없는 날짜라면 로비로 튕겨냅니다.
  if (!selectedDay || !allSentenceData['day' + selectedDay]) {
    alert('데이터를 불러올 수 없습니다. 로비로 돌아갑니다.');
    location.href = 'index.html';
    return;
  }

  // 3. 꼬리표에 맞는 데이터를 세팅합니다. (예: day9의 데이터를 rawSentenceData에 복사)
  rawSentenceData = allSentenceData['day' + selectedDay];

  // 4. (선택사항) 화면 맨 위 태그에 몇 일차인지 자동으로 글씨를 바꿔줍니다.
  const titleTag = document.querySelector('.apt-tag');
  if (titleTag) {
    titleTag.innerText = `STEP 2 - Day ${selectedDay}`;
  }
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
   [핵심 함수] startGame (Day 9~11 통짜 배열용으로 수정됨)
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
          s.muted = false;
        });
      } else {
        s.muted = false;
      }
    }
  });

  // ★ 수정된 부분: 카테고리 찾지 않고 그냥 전체 데이터를 섞습니다 ★
  let shuffled = [...rawSentenceData].sort(() => 0.5 - Math.random());

  // 만약 전체 문장(약 20개) 중 10문제만 내고 싶다면 아래처럼 slice(0, 10)을 씁니다.
  // 전부 다 풀게 하고 싶으시면 그냥 gameQueue = shuffled; 라고 쓰시면 됩니다.
  gameQueue = shuffled.slice(0, 20);

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

    // 👇 현재 문제 데이터에서 한자와 병음을 각각 추출해서 합칩니다 👇
    const currentQuestion = gameQueue[currentIdx];
    // 한자는 띄어쓰기 없이 붙임
    const fullSentence = currentQuestion.chunks
      .map((chunk) => chunk.h)
      .join('');
    // 병음은 단어별로 띄어쓰기를 넣어서 보기 좋게 합침
    const fullPinyin = currentQuestion.chunks.map((chunk) => chunk.p).join(' ');

    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';

    // 한자와 병음을 모두 팝업 함수로 전달!
    setTimeout(() => {
      showTTSPopup(fullSentence, fullPinyin);
    }, 300);
  } else {
    // 오답 시 기존 코드 유지
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

/* ============================================================
   [TTS 기능] 중국어 원어민 발음 읽어주기
   ============================================================ */
function speakChinese(text) {
  // 브라우저가 TTS 기능을 지원하는지 확인
  if ('speechSynthesis' in window) {
    // 혹시 이전에 읽고 있던 소리가 있다면 끊고 새로 시작
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // 중국어(본토 간체) 설정

    // 발음 속도 조절 (1.0이 기본, 0.85 정도면 학습하기 딱 좋은 속도입니다)
    utterance.rate = 0.85;

    // 브라우저(구글) 엔진에게 읽어달라고 명령!
    window.speechSynthesis.speak(utterance);
  }
}
/* ============================================================
   [TTS & 팝업 기능] 병음 토글 및 0.65배속 1회 재생 (여성 음성)
   ============================================================ */
let currentFullSentence = '';

// 브라우저 목소리 목록 미리 불러오기
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// 1. 팝업창 생성 (병음 보기 버튼 추가)
function createTTSPopup() {
  if (document.getElementById('tts-popup')) return;
  const overlay = document.createElement('div');
  overlay.id = 'tts-popup';
  overlay.className = 'tts-popup-overlay';
  overlay.innerHTML = `
    <div class="tts-popup-box">
      <div class="apt-tag" style="margin-bottom:15px; display:inline-block;">정답 확인</div>
      <div id="tts-popup-cn" class="tts-popup-cn"></div>
      
      <!-- 👇 병음 보기 버튼 👇 -->
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

// 2. 병음 보기/숨기기 전환 함수
function togglePinyin() {
  const pyDiv = document.getElementById('tts-popup-py');
  const pyBtn = document.getElementById('py-toggle-btn');

  if (pyDiv.style.display === 'none' || pyDiv.style.display === '') {
    pyDiv.style.display = 'block'; // 보이게 변경
    pyBtn.innerText = '🙈 병음 숨기기';
  } else {
    pyDiv.style.display = 'none'; // 다시 숨기기
    pyBtn.innerText = '👀 병음 보기';
  }
}

// 3. 0.65배속으로 여자 목소리를 찾아 1번만 읽어주는 함수
function playTTS(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.65;
  utterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(
    (v) =>
      v.lang.includes('zh-CN') &&
      (v.name.includes('Xiaoxiao') ||
        v.name.includes('Google') ||
        v.name.includes('Female')),
  );
  const defaultZhVoice = voices.find((v) => v.lang.includes('zh-CN'));

  if (femaleVoice) {
    utterance.voice = femaleVoice;
  } else if (defaultZhVoice) {
    utterance.voice = defaultZhVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// 4. 다시 듣기 버튼
function replayTTS() {
  playTTS(currentFullSentence);
}

// 5. 정답 맞췄을 때 팝업 띄우기
function showTTSPopup(text, pinyin) {
  createTTSPopup();
  currentFullSentence = text;
  document.getElementById('tts-popup-cn').innerText = text;
  document.getElementById('tts-popup-py').innerText = pinyin;

  // 💡 새 문제가 나올 때마다 병음을 다시 숨김 상태로 초기화합니다.
  document.getElementById('tts-popup-py').style.display = 'none';
  document.getElementById('py-toggle-btn').innerText = '👀 병음 보기';

  document.getElementById('tts-popup').classList.add('active');

  setTimeout(() => {
    playTTS(text);
  }, 300);
}

// 6. 다음 문제로 넘어가기
function closeTTSPopupAndNext() {
  window.speechSynthesis.cancel();
  document.getElementById('tts-popup').classList.remove('active');

  score++;
  document.getElementById('score').innerText = score;
  currentIdx++;
  loadQuestion();
}
