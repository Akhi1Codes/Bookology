console.log("clicked");
let myLibrary = [
  {
    author: "jake",
    title: "righttime",
    pages: 250,
    status: "read",
  },
  {
    author: "robert",
    title: "late at night",
    pages: 150,
    status: "unread",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here
}
