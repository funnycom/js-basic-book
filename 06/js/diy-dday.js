let firstDate = new Date("2022-08-27T02:00:00").getTime();
let nowDate = new Date().getTime();

let dDay = Math.round((nowDate - firstDate) / (1000 * 3600 * 24));
console.log(dDay);

document.querySelector("#accent").innerHTML = `${dDay}일`;

let calcDay = (days) => {
  let val = new Date(firstDate + days * 1000 * 3600 * 24);
  let year = val.getFullYear();
  let month = val.getMonth() + 1;
  let day = val.getDate();
  document.querySelector(
    `#date${days}`
  ).innerHTML = `${year}년 ${month}월 ${day}일`;
};

calcDay(100);
calcDay(200);
calcDay(365);
calcDay(500);
