let addBtn = document.querySelector("#add");

let itemList = [];
addBtn.addEventListener("click", addList);
function addList() {
  let item = document.querySelector("#item");
  if (item.value != null) {
    itemList.push(item.value);
    item.value = "";
  }
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list = list + `<li>${itemList[i]}<span class='close' id=${i}>X</span></li>`;
  }
  list = list + "</ul>";

  document.querySelector("#itemList").innerHTML = list;
  let removeBtn = document.querySelectorAll(".close");
  console.log(removeBtn);
  for (let i = 0; i < itemList.length; i++) {
    removeBtn[i].addEventListener("click", removeList);
  }
}

function removeList() {
  id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
