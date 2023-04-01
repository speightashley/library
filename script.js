const cancelBtn = document.getElementById("cancel");
const bookForm = document.getElementById("bookInput");
const addBook = document.getElementById("addBook");
const header = document.getElementById("header");
const mainContent = document.getElementById("mainContent");
const adder = document.getElementById("adder");
const readStatus = document.querySelectorAll("readStatus");

const title = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookLength = document.getElementById("bookLength");
const status = document.getElementById("status");

const headings = document.getElementById("tableContent");

let myLibrary = [];

function Book(title, author, length, status) {
  this.id = myLibrary.length;
  this.title = title;
  this.author = author;
  this.length = length;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    bookAuthor.value,
    bookLength.value,
    status.value
  );
  myLibrary.push(newBook);
  addRow(newBook);
}

function addRow(book) {
  let row = document.createElement("tr");

  let id = document.createElement("td");
  let author = document.createElement("td");
  let title = document.createElement("td");
  let pages = document.createElement("td");
  let del = document.createElement("td");
  let progress = document.createElement("td");
  let status = document.createElement("td");

  let statusButton = document.createElement("button");

  statusButton.id = book.status;

  pages.className = "readStatus";
  pages.className = "num";

  id.innerText = book.id;
  author.innerText = book.author;
  title.innerText = book.title;
  pages.innerText = book.length;
  del.innerText = "X";
  progress.innerHTML = `<progress max="${book.length}" value="${book.length}" ></progress>`; // Todo - Need to create an input for number of pages read

  status.appendChild(statusButton);
  statusButton.innerText = book.status;

  row.append(id);
  row.append(title);
  row.append(author);
  row.append(pages);
  row.append(status);
  row.append(pages);
  row.append(progress);
  row.append(del);

  headings.append(row);
}

function clearForm() {
  title.value = null;
  bookAuthor.value = null;
  status.value = null;
  bookLength.value = 0;
}

function toggleForm() {
  bookForm.classList.toggle("hide");
  bookForm.classList.toggle("form");
  header.classList.toggle("blur");
  mainContent.classList.toggle("blur");
}

cancelBtn.addEventListener("click", toggleForm);
addBook.addEventListener("click", toggleForm);
adder.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearForm();
  console.log(myLibrary);
  toggleForm();
});
