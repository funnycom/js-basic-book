let firstDate = new Date("2022-08-27T02:00:00").getTime();
let nowDate = new Date().getTime();

let dDay = Math.round((nowDate - firstDate) / (1000 * 3600 * 24));
console.log(dDay);

document.querySelector("#accent").innerHTML = `${dDay}일`;
