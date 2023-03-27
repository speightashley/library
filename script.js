const addBookBtn = document.getElementsByClassName("addBook");

let myLibrary = [];

function Book(title, author, length, read) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.read = read;
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

function showForm() {
  console.log("The button is working");
}

for (const ele of addBookBtn) {
  ele.addEventListener("click", showForm);
}
