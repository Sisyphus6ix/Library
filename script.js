const list = document.getElementById("books");
const form = document.getElementById("form");
const addBookButton = document.getElementById("button");
const submitButton = document.getElementsByName("submit");

let myLibrary = [];

//constructor for creating books
function book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Globally setting values
let bookTitleForm = undefined;
let bookAuthorForm = undefined;
let bookPagesForm = undefined;
let bookStatusForm = false

// Function for making form
const createForm = () => {
  // Creating div for form
  let makeForm = document.createElement("div");

  // Form contents
  bookTitleForm = document.createElement("input");
  bookTitleForm.setAttribute("type", "text");
  bookTitleForm.setAttribute("placeholder", "Title");
  bookAuthorForm = document.createElement("input");
  bookAuthorForm.setAttribute("type", "text");
  bookAuthorForm.setAttribute("placeholder", "Author");
  bookPagesForm = document.createElement("input");
  bookPagesForm.setAttribute("type", "number");
  bookPagesForm.setAttribute("placeholder", "Pages");
  bookStatusForm = document.createElement("input");
  bookStatusForm.setAttribute('type', 'checkbox');
  let formSubmit = document.createElement("input");
  formSubmit.setAttribute("type", "submit");
  formSubmit.setAttribute("name", "submit");

  // Adding form to div
  form.innerHTML = "";
  form.appendChild(makeForm);
  makeForm.appendChild(bookTitleForm);
  makeForm.appendChild(bookAuthorForm);
  makeForm.appendChild(bookPagesForm);
  makeForm.appendChild(bookStatusForm);
  makeForm.appendChild(formSubmit);

  // EventListener for using submit button in form
  submitButton[0].addEventListener("click", storeInArray);

  // returning variables to update their value
  return bookTitleForm, bookAuthorForm, bookPagesForm, bookStatusForm;
};

// Function for storing books in array
const storeInArray = () => {
  let userTitle = bookTitleForm.value;
  let userAuthor = bookAuthorForm.value;
  let userPages = bookPagesForm.value;
  let userStatus = bookStatusForm.value;

  bookInfo = new book(userTitle, userAuthor, userPages, userStatus);
  myLibrary.push(bookInfo);
  console.table(myLibrary);
  form.innerHTML = "";

  updatingHTML();
};

// Function for looping through array and displaying it in html
const updatingHTML = () => {
  list.innerHTML = "";

  // Function for removing item from HTML
  const removeFromArray = (event) => {
    // Removing the book using its button index attribute
    myLibrary.splice(event.target.attributes[2].nodeValue, 1);

    // Reupdating HTML to display updated contents
    updatingHTML();
  };

  // Looping through array and giving each removeBtn correlation the right object 
  for (let i = 0; i < myLibrary.length; i++) {
    let bookDiv = document.createElement("div");
    let bookTitle = document.createElement("h5");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookStatus = document.createElement('p')
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("name", "removeBtn");
    removeBtn.setAttribute("index", i);
    removeBtn.insertAdjacentText("beforeend", "Remove");
    removeBtn.addEventListener("click", removeFromArray);

    let books = myLibrary[i];
    bookTitle.innerText = books.title;
    bookAuthor.innerText = books.author;
    bookPages.innerText = books.pages;
    bookStatus.innerText = books.status;
    list.appendChild(bookDiv);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages)
    bookDiv.appendChild(bookStatus);
    bookDiv.appendChild(removeBtn);
  }
};

addBookButton.addEventListener("click", createForm);
