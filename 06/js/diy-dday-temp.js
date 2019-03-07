var now = new Date();
var firstDay = new Date("2018-03-23");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector('#accent').innerText = passedDay + "일";