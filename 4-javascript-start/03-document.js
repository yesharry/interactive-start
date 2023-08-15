// characters class 맨 마지막 자식으로 추가하기
const pElem = document.createElement("p");
pElem.innerHTML = '<a href="#">안녕</a>???';
const charactersElem = document.querySelector(".characters");
charactersElem.appendChild(pElem);

// 두번째 ilbuni -> b 삭제하기
charactersElem.removeChild(document.querySelector(".b"));

// css의 special 클래스를 js에 붙이기
const ilbuni = document.querySelector(".ilbuni");
ilbuni.classList.add("special");
ilbuni.className = "special";
// 두개 같다. 하지만 차이점은
// 두 번째는 ilbuni라는 클래스 이름을 special로 바꾼거고
// 첫 번째는 ilbuni 클래스에 special 클래스 이름을 또 추가한 것. add

// class 제거
const ilbuni = document.querySelector(".ilbuni");
ilbuni.classList.remove("ilbuni");
ilbuni.classList.toggle("ilbuni"); // ilbuni 클래스를 갖고 있으면 없애고, 없으면 붙여주고 => add와 remove를 왔다갔다!
