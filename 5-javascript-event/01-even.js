// 이벤트의 기본 동작 방식
const ilbuni = document.querySelector(".ilbuni:nth-child(3)"); // 전역변수
// 전역변수 남발하면 별로 안좋음, 그래서 js 작성할 때는 전역변수를 최소화 하는게 좋음
ilbuni.addEventListener("click", function () {
  ilbuni.classList.add("special");
});
// 클릭 이벤트 등록하기

// defer <- defer를 넣어주면 스크립트가 백그라운드에서 작동이 된다.
// 즉, html은 html 대로 로드가 되어 바로 우리 눈에 보이고
// 동시에 뒤에서 script가 로드가 된다는 이야기.
// 그래서, script 로드가 안 끝나도 html이 우리 눈에 바로 보인다는 이야기.
// defer는 DOMContentLoaded와 같은 순서라고 한다면

// async <- 는 순서에 상관없이 완전 비동기적이기 때문에
// html 태그가 필요하다면 async는 안 쓰는게 좋다.
