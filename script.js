let list = document.getElementById('books')
let button = document.getElementById('button')

let myLibrary = []

//constructor for creating books
function book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// function for adding things to the array
const addBookToLibrary = () => {
    let userTitle = prompt('What is the title?')
    let userAuthor = prompt('Who is the author?')
    let userPages = prompt('How many pages are there?')

    bookInfo = new book(userTitle, userAuthor, userPages)
    return bookInfo
}

// myLibrary.push(addBookToLibrary())
// myLibrary.push(addBookToLibrary())
// console.table(myLibrary)


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


// EventListener
button.addEventListener('click', function(){
    console.log('This button is working')
})