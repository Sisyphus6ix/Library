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

myLibrary.push(addBookToLibrary())
console.log(myLibrary)