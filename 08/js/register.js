userName = document.getElementById("userName");
btn = document.getElementById("btn");
btn.addEventListener("click", create);
let list = document.getElementById("nameList");

function create() {
  let p = document.createElement("p");
  let name = document.createTextNode(`${userName.value}`);
  p.appendChild(name);
  list.appendChild(p);
  userName.value = "";
}
