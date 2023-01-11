function add() {
  let a = parseInt(prompt("a"));
  let c = parseInt(prompt("c"));
  let sum = addNum(a, c);
  alert(sum);
}

function addNum(a = 10, b = 20, c = 30) {
  let sum = a + b + c;
  return sum;
}
