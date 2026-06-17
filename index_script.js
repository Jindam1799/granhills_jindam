function startLobby() {
  const introOverlay = document.getElementById('intro-overlay');
  const introVideo = document.getElementById('intro-video');
  const mainLobby = document.getElementById('main-lobby');

  // ★ 함수 안에서 오디오 요소를 다시 찾습니다.
  const introBgm = document.getElementById('intro-bgm');

  if (!introOverlay) return;

  // ★ 소리 재생 명령
  if (introBgm) {
    introBgm.muted = false; // 혹시 모르니 무음 해제
    introBgm
      .play()
      .then(() => console.log('음악 재생 성공!'))
      .catch((e) => {
        console.error('재생 실패 원인:', e);
        alert('소리 재생에 실패했습니다. 파일 경로를 확인해주세요.');
      });
  }

  // 인트로 숨기기 로직
  introOverlay.style.opacity = '0';
  setTimeout(() => {
    introOverlay.style.display = 'none';
    if (mainLobby) mainLobby.style.display = 'flex';
    if (introVideo) introVideo.pause();
  }, 800);
}

// 레벨 박스를 열고 닫는 토글 함수
function toggleLevel(targetId) {
  const content = document.getElementById(targetId);

  // 현재 숨겨져 있으면 보이게, 보이고 있으면 숨기게 처리
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';

    // 열릴 때 화면을 살짝 아래로 스크롤해서 내용이 잘 보이게 해줌
    setTimeout(() => {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  } else {
    content.style.display = 'none';
  }
}
