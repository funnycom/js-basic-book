const add = () => {
  let a = parseInt(prompt("a"));
  let b = parseInt(prompt("b"));
  sum(a, b);
  document.write(val);
};

function sum(a, b) {
  val = a + b;
  return val;
}
