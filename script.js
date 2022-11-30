let list = document.getElementById('books')

// empty array
let myLibrary = []

//constructor for creating books
const book = (title, author, pages) => {
    this.title = title
    this.author = author
    this.pages = pages
}

// function for adding things to the array
const addBookToLibrary = () => {
    let userTitle = prompt('What is the title?')
    let userAuthor = prompt('Who is the author?')
    let userPages = prompt('How many pages are there?')

    let bookInfo = {
        title: userTitle,
        author: userAuthor,
        pages: userPages
    }

    return bookInfo
}

// myLibrary.push(addBookToLibrary())
// console.table(myLibrary)


// function for looping through array and displaying it in html
for (books of myLibrary){
    let bookTitle = document.createElement('h5')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    bookTitle.innerText = books.title;
    bookAuthor.innerText = books.author;
    bookPages.innerText = books.pages;
    list.appendChild(bookTitle)
    list.appendChild(bookAuthor)
    list.appendChild(bookPages)
}

