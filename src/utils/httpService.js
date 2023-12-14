// 모든 fetch 요청을 하나의 함수를 사용하여 처리할 수 있게 하는 로직
const httpService = async (url, options, redirection, onLogout) => {
  const res = await fetch(url, options);

  if (res.status === 401) {
    // 토큰 만료 관련 처리
    const data = await res.json();
    console.log('401 토큰 만료!', data);
    onLogout();
    alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
    redirection('/login');
    return;
  }

  return res;
};

export default httpService;
