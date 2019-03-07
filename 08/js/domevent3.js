var pic = document.querySelector('#pic');
pic.addEventListener("mouseover", changePic, false);  // mouseover 이벤트 발생하면 changePic 함수 실행
pic.addEventListener("mouseover", changeStyle, false);// mouseover 이벤트 발생하면 changeStyle 함수 실행
pic.addEventListener("mouseout", originPic, false); // mouseout 이벤트 발생하면 originPic 함수 실행
pic.addEventListener("mouseout", originStyle, false); // mouseout 이벤트 발생하면 originStyle 함수 실행
    
// 아래처럼 onmouseover 나 onmouseout 에 두 가지 이상의 함수를 지정하면 이벤트당 하나의 함수만 실행됩니다. 
// pic.onmouseover = changePic;
// pic.onmouseover = changeStyle;
// pic.onmouseout = originPic;
// pic.onmouseout = originStyle;

function changePic() {			
  pic.src = "images/boy.png";
}
function originPic() {
  pic.src = "images/girl.png";
}
function changeStyle() {
  pic.style.border = "1px solid #222";
}
function originStyle() {
  pic.style.border = "none";
}