let itemList = [];
const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);
function addList() {
  let item = document.querySelector("#item");
  if (item.value != null) {
    itemList.push(item.value);
    item.value = "";
    item.focus();
  }

  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<li>${itemList[i]}<span class='close' id="${i}">X</span> <span class='modify' id="${i}">수정</span></li>`;
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  var remove = document.querySelectorAll(".close");
  var mod = document.querySelectorAll(".modify");
  for (i = 0; i < itemList.length; i++) {
    remove[i].addEventListener("click", removeList);
  }

  for (i = 0; i < itemList.length; i++) {
    mod[i].addEventListener("click", modifyList);
  }
}

function removeList() {
  let id = this.getAttribute("id");
  itemList.pop(id);
  showList();
}

function modifyList() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1, document.querySelector("#item").value);
  showList();
}
