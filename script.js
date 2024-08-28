const myLibrary = [];

class Book {
  constructor(author, title, numOfPages, read) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  if (book instanceof Book) {
    myLibrary.push(book);
    updateTable();
  } else {
    console.error("Not a book bro");
  }
}

function displayBooks(library) {
  library.forEach((book) => {
    console.log(book);
  });
}

function updateTable() {
  const tableBody = document.querySelector("#myTable tbody");
  tableBody.innerHTML = myLibrary
    .map(
      (book) =>
        `<tr>
                    <td>${book.author}</td>
                    <td>${book.title}</td>
                    <td>${book.numOfPages}</td>
                    <td>${book.read ? "Yes" : "No"}</td>
                </tr>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  let harryPotter = new Book("J.K. Rowling", "Harry Potter", 969, true);
  addBookToLibrary(harryPotter);
  const form = document.querySelector(".book-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let numOfPages = parseInt(document.getElementById("numOfPages").value);
    const hasBeenRead = document.querySelector('input[name="hasBeenRead"]:checked').value === "yes";

    let anyBook = new Book(author, title, numOfPages, hasBeenRead);
    addBookToLibrary(anyBook);
    form.reset();
  });
});
