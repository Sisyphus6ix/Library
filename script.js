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

// Globally setting values
let bookTitleForm = undefined
let bookAuthorForm = undefined
let bookPagesForm = undefined



// Function for making form
const createForm = () => {
    // Creating div for form
    let makeForm = document.createElement('div')

    // Form contents 
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
    let formSubmit = document.createElement('input')
    formSubmit.setAttribute('type', 'submit')
    formSubmit.setAttribute('name', 'submit')
    
    // Adding form to div
    form.innerHTML = ''
    form.appendChild(makeForm)
    makeForm.appendChild(bookTitleForm)
    makeForm.appendChild(bookAuthorForm)
    makeForm.appendChild(bookPagesForm)
    makeForm.appendChild(bookCheck)
    makeForm.appendChild(formSubmit)

    // EventListener for using submit button in form
    submitButton[0].addEventListener('click', storeInArray)

    // returning variables to update their value
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
    form.innerHTML = ''

    updatingHTML()
}

// Function for looping through array and displaying it in html
const updatingHTML = () => {
    let bookDiv = document.createElement('div')
    let bookTitle = document.createElement('h5')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('type', 'button')
    removeBtn.setAttribute('name', 'removeBtn')
    removeBtn.insertAdjacentText('beforeend', 'Remove')

    for (books of myLibrary.slice(-1)){
        bookTitle.innerText = books.title
        bookAuthor.innerText = books.author
        bookPages.innerText = books.pages
        list.appendChild(bookDiv)
        bookDiv.appendChild(bookTitle)
        bookDiv.appendChild(bookAuthor)
        bookDiv.appendChild(bookPages)
        bookDiv.appendChild(removeBtn)
    }
}

addBookButton.addEventListener('click', createForm)
// submitButton.addEventListener('click', storeInArray)