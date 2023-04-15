
let myLibrary = [];
let newBook = {}
let totalPages = 0
let totalBooks = 0
let booksInProgress = 0

const submitbtn = document.getElementById('submit')
const btn = document.querySelector('button')
const input = document.querySelector('.formcontainer')
const totalBooksText = document.querySelector('.finished')
const booksInProgressText = document.querySelector('.unfinished')



function Book (title, author, pages , read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${title} + ${author} + ${pages}`
    }
}

function addBookToLibrary (book) {
    return myLibrary.push(book)
}

function showLibrary(lib) {
    for(let i in lib) {
        console.log(myLibrary[i])
    }
}

// ========= every new book created create new modal and pass author title etc and show it in dom
function appendBook (book) {
    const divTitle = document.createElement('div')
    const divAuthor = document.createElement('div')
    const divPages = document.createElement('div')
    const divRead = document.createElement('div')
    const bookContainer = document.querySelector('.bookcontainer')
    const newModal = document.createElement('div')
    newModal.classList.add('modal')
    bookContainer.appendChild(newModal)
    divTitle.textContent = ` Title: ${book.title} `
    divAuthor.textContent = `Author: ${book.author} `
    divPages.textContent = `Pages: ${book.pages}`
    divRead.textContent = `Read: ${book.read}`
    newModal.appendChild(divTitle)
    newModal.appendChild(divAuthor)
    newModal.appendChild(divPages)
    newModal.appendChild(divRead)

}
//=========== adevnent listener to btn and show up a modal with input for book author etc (fade background and show up the input modal)
btn.addEventListener('click', () => {
    if  (input.style.display === 'flex' ){
        input.style.display = 'none'
    }else {
        input.style.display = 'flex'
    }

})

//============ pass inputs as parameters in new Book
submitbtn.addEventListener('click', (event) => {
    event.preventDefault()
    const bookTitle = document.getElementById('title').value
    const authorName = document.getElementById('author').value
    const pagesRead = document.getElementById('pages').value
    const read = document.querySelector('input[name=read]:checked').value;
    document.querySelector('form').reset()
    newBook = new Book(bookTitle, authorName, pagesRead , read)
    addBookToLibrary(newBook)
    showLibrary(myLibrary)
    appendBook(newBook)
    if (read === 'Yes'){
        totalBooks++
        totalBooksText.textContent = 'Books Finished: '
        totalBooksText.textContent = totalBooksText.textContent + `${totalBooks}`
    }
    if (read === 'No'){
        booksInProgress++
        booksInProgressText.textContent = 'Books in Progress: '
        booksInProgressText.textContent = booksInProgressText.textContent + `${booksInProgress}`
    }
    
})



