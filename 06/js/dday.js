let startDate = new Date("2022-08-27T02:00:00").getTime();
let now = new Date().getTime();

let passedTime = now - startDate;
let passedDate = Math.round(passedTime / (1000 * 24 * 60 * 60));

document.querySelector("#accent").innerHTML = `${passedDate}일❤️`;

function calcDate(days) {
  let future = startDate + days * (1000 * 24 * 60 * 60);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let day = someday.getDate();
  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${day}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
// let calcDate = (days) => {

// }
