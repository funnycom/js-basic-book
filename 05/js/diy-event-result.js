const o = document.querySelector("#open");
const c = document.querySelector("#desc");

let showDetail = () => {
  o.style.display = "none";
  c.style.display = "block";
};

function hideDetail() {
  document.querySelector("#desc").style.display = "none";
  document.querySelector("#open").style.display = "block";
}
