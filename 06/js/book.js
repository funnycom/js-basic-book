let Book = function (title, author, volume, price) {
  this.title = title;
  this.author = author;
  this.volume = volume;
  this.price = price;
};
let first = new Book("a", "b", "c", "1");
let second = new Book("d", "e", "f", "2");
let third = new Book("g", "h", "i", "3");

let bookList = [first, second, third];

document.write("<h1>책 제목만 뜯어보기</h1>");
for (i = 0; i < 3; i++) {
  document.write(`<div>${bookList[i].title}</div>`);
}
