let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let formTitle = document.getElementById("title").value;
  let authorName = document.getElementById("author").value;
  let noPages = document.getElementById("pages").value;
  let readStatus = document.getElementById("status-read").checked;
  const newBook = new Book(formTitle, authorName, noPages, readStatus);
  myLibrary.push(newBook);
  render();
}

function render() {
  const display = document.querySelector("main");
  const books = document.querySelectorAll(".details-container");
  books.forEach((book) => display.removeChild(book));
  for (i = 0; i < myLibrary.length; i++) {
    Booklayout(myLibrary[i]);
  }
}
/*********************************************/
const form = document.querySelector("form");
const addbook = document.getElementById("addBook");
const popup = document.getElementById("popup");
addbook.addEventListener("click", () => {
  popup.style.display = "contents";
  form.reset();
  const close = document.getElementById("close-btn");
  close.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.style.display = "none";
  addBookToLibrary();
});

function Booklayout(bookinfo) {
  const book = document.createElement("div");
  book.classList.add("details-container");
  document.querySelector("main").appendChild(book);

  const titlename = document.createElement("p");
  titlename.textContent = bookinfo.title;
  titlename.classList.add("book-label");
  book.appendChild(titlename);

  const author = document.createElement("p");
  author.textContent = "-" + bookinfo.author;
  author.classList.add("book-label");
  book.appendChild(author);

  const pagenumbers = document.createElement("p");
  pagenumbers.textContent = bookinfo.pages + "" + "pages";
  pagenumbers.classList.add("book-label");
  book.appendChild(pagenumbers);

  const bookstatus = document.createElement("button");
  bookstatus.classList.add("inbookBtn");
  if (bookinfo.status === true) {
    bookstatus.textContent = "Read";
  } else {
    bookstatus.textContent = "Not read";
  }
  bookstatus.addEventListener("click", () => {
    bookinfo.status = !bookinfo.status;
    render();
  });
  book.appendChild(bookstatus);

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("inbookBtn");
  book.appendChild(deletebtn);
  deletebtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(bookinfo), 1);
    render();
  });
}
