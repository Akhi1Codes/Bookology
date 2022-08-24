let myLibrary = [
  {
    title: "righttime",
    author: "jake",
    pages: 250,
    status: "read",
  },
  {
    title: "late at night",
    author: "robert",
    pages: 150,
    status: "not read",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book(formTitle, authorName, noPages, readStatus);
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
  myLibrary.push(newBook);
  formTitle.value = "";
  authorName.value = "";
  noPages.value = "";
  readDetails.value = "";
}

/*********************************************/

const formTitle = document.getElementById("title").value;
const authorName = document.getElementById("author").value;
const noPages = document.getElementById("pages").value;
const readDetails = document.getElementById("status-read");
const addbook = document.getElementById("addBook");
const popup = document.getElementById("popup");
const button = document.getElementById("submit-btn");
addbook.addEventListener("click", () => (popup.style.display = "contents"));
button.addEventListener("click", () => {
  popup.style.display = "none";
  if (readDetails.checked === true) {
    readStatus = "read";
  } else {
    readStatus = "not read";
  }
  addBookToLibrary();
});
