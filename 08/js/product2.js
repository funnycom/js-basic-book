let isOpen = false;
let view = document.getElementById("view");
let detail = document.getElementById("detail");

view.addEventListener("click", showDetail);

function showDetail() {
  if (isOpen == false) {
    detail.style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    detail.style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
}
//contribution test22
