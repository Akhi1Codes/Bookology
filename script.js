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

function bookDisplay() {
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
  myLibrary.push(stock);
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here
}

const stock = new Book("rock", "karl", 180, "read");

bookDisplay();
