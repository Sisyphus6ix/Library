const list = document.getElementById('books')
const form = document.getElementById('form')
const addBookButton = document.getElementById('button')
const submitButton = document.getElementsByName('submit')

let myLibrary = []

//constructor for creating books
function book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// function for adding things to the array
// const addBookToLibrary = () => {
//     let userTitle = prompt('What is the title?')
//     let userAuthor = prompt('Who is the author?')
//     let userPages = prompt('How many pages are there?')

//     bookInfo = new book(userTitle, userAuthor, userPages)
//     return bookInfo
// }

// myLibrary.push(addBookToLibrary())
// myLibrary.push(addBookToLibrary())
// console.table(myLibrary)

let bookTitleForm = undefined
let bookAuthorForm = undefined
let bookPagesForm = undefined

// function for looping through array and displaying it in html
for (books of myLibrary){
    let bookDiv = document.createElement('div')
    let bookTitle = document.createElement('h5')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    bookTitle.innerText = books.title;
    bookAuthor.innerText = books.author;
    bookPages.innerText = books.pages;
    list.appendChild(bookDiv)
    bookDiv.appendChild(bookTitle)
    bookDiv.appendChild(bookAuthor)
    bookDiv.appendChild(bookPages)
}

// Function for making form
const createForm = () => {
    let makeForm = document.createElement('div')
    
    bookTitleForm = document.createElement('input')
    bookTitleForm.setAttribute('type', 'text')
    bookTitleForm.setAttribute('placeholder', 'Title')
    bookAuthorForm = document.createElement('input')
    bookAuthorForm.setAttribute('type', 'text')
    bookAuthorForm.setAttribute('placeholder', 'Author')
    bookPagesForm = document.createElement('input')
    bookPagesForm.setAttribute('type', 'number')
    bookPagesForm.setAttribute('placeholder', 'Pages')
    let bookCheck = document.createElement('input')
    bookCheck.setAttribute('type', 'checkbox')
    // bookCheck.setAttribute('name', 'Have you read this book?')
    let formSubmit = document.createElement('input')
    formSubmit.setAttribute('type', 'submit')
    formSubmit.setAttribute('name', 'submit')
    
    form.innerHTML = ''
    form.appendChild(makeForm)
    makeForm.appendChild(bookTitleForm)
    makeForm.appendChild(bookAuthorForm)
    makeForm.appendChild(bookPagesForm)
    makeForm.appendChild(bookCheck)
    makeForm.appendChild(formSubmit)
    submitButton[0].addEventListener('click', storeInArray)
    console.log(submitButton[0])

    return bookTitleForm, bookAuthorForm, bookPagesForm
}

// Function for storing books in array
const storeInArray = () => {
    let userTitle = bookTitleForm.value
    let userAuthor = bookAuthorForm.value
    let userPages = bookPagesForm.value

    bookInfo = new book(userTitle, userAuthor, userPages)
    myLibrary.push(bookInfo)
    console.table(myLibrary)
}


// Function for clearing form
const clear = () => {
    
}

addBookButton.addEventListener('click', createForm)
// submitButton.addEventListener('click', storeInArray)