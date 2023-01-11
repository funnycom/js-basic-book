const o = document.querySelector("#open");
const c = document.querySelector("#desc");

let shows = () => {
  o.style.display = "none";
  c.style.display = "block";
};

let hides = () => {
  o.style.display = "block";
  c.style.display = "none";
};

let open = () => {
  o.style.display = "none";
  c.style.display = "block";
};

let close = () => {
  o.style.display = "block";
  c.style.display = "none";
};
