// ================Variables=============================================

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
const closebtn = document.querySelector('.closebtn')
const header = document.querySelector('.header')
const displaypanel = document.querySelector('.displaypanel')
let closemodal = document.querySelector('.closemodal')



function Book (title, author, pages , read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${title} + ${author}`
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

// ==================To do ===========================================================================================
// =========for every new book created create new modal and pass author title etc and show it in dom
function appendBook (book) {
    const divTitle = document.querySelector('.divTitle')
    const divAuthor = document.querySelector('.divAuthor')
    const divPages = document.querySelector('.divPages')
    const divRead = document.querySelector('.divRead')
    const bookContainer = document.querySelector('.bookcontainer')
    const modal = document.querySelector('.modal')
    
    if (myLibrary.length === 1) {
        console.log("array of one book")
        modal.style.display = 'flex'
        divTitle.textContent = ` Title: ${book.title} `
        divAuthor.textContent = `Author: ${book.author} `
        divPages.textContent = `Pages: ${book.pages}`
        divRead.textContent = `Read: ${book.read}`
    }else{
        const newdivTitle = document.createElement('div')
        const newdivAuthor = document.createElement('div')
        const newdivPages = document.createElement('div')
        const newdivRead = document.createElement('div')
        const newModal = document.createElement('div')
        const titlecontainer = document.createElement('div')
        closemodal = `<div class="material-symbols-outlined closemodal">close</div>`
        console.log("aray bigger than one")
        newdivTitle.textContent = ` Title: ${book.title} ` //separate data from titles in order to identify them later
        newdivAuthor.textContent = `Author: ${book.author} ` //separate data from titles in order to identify them later
        newdivPages.textContent = `Pages: ${book.pages}` //separate data from titles in order to identify them later
        newdivRead.textContent = `Read: ${book.read}` //separate data from titles in order to identify them later
        newModal.classList.add('modal')
        newModal.style.display = 'flex'
        titlecontainer.classList.add('titlecontainer')
        bookContainer.appendChild(newModal)
        titlecontainer.appendChild(newdivTitle)
        titlecontainer.innerHTML += closemodal
        newModal.appendChild(titlecontainer)
        newModal.appendChild(newdivAuthor)
        newModal.appendChild(newdivPages)
        newModal.appendChild(newdivRead)
    }
    
}
// ==================To do ===========================================================================================


//=========== adevnent listener to btn and show up a modal with input for book author etc (fade background and show up the input modal)
btn.addEventListener('click', () => {
    if  (input.style.display === 'flex' ){
        input.style.display = 'none'
        header.classList.remove('blur')
        displaypanel.classList.remove('blur')
        
    }else {
        input.style.display = 'flex'
        header.classList.add('blur')
        displaypanel.classList.add('blur')
    }

})

closebtn.addEventListener('click', () => {
    if  (input.style.display === 'flex' ){
        input.style.display = 'none'
        header.classList.remove('blur')
        displaypanel.classList.remove('blur')
    }else {
        input.style.display = 'flex'
        header.classList.add('blur')
        displaypanel.classList.add('blur')
    }

})

closemodal.addEventListener('click',deleteBook)

// ==================To do ===========================================================================================
function deleteBook (e) {
    //identify book with id(id=title )
    let id = e.target.previousElementSibling.textContent
    alert(id)
    // delete book from array
    for (i in myLibrary){
        if (myLibrary[i].title === id){
            myLibrary.splice(i,1)
        }
    }
    // delete book from display panel 
    
    // update counters 
}
// ==================To do ===========================================================================================


//============ pass inputs as parameters in new Book
submitbtn.addEventListener('click', (event) => {
    event.preventDefault()
    const bookTitle = document.getElementById('title').value
    const authorName = document.getElementById('author').value
    const pagesRead = document.getElementById('pages').value
    const read = document.querySelector('input[name=read]:checked').value;
    document.querySelector('form').reset()
    newBook = new Book (bookTitle, authorName, pagesRead , read)
    addBookToLibrary(newBook)
    showLibrary(myLibrary)
    appendBook(newBook)
    console.log(myLibrary)
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



