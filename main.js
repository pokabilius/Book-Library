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
// let titleValue = document.querySelector('.titlevalue')
let authorValue = document.querySelector('.authorvalue')
let readValue = document.querySelector('.readvalue')
let pagesValue = document.querySelector('.pagesvalue')
const changeBtn = document.querySelector('.change')
const removeBtn = document.querySelector('.remove')
let modal = document.querySelector('.modal')
const bookContainer = document.querySelector('.bookcontainer')


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
    lib.forEach(element => {
        // Create modal===================================
        const newmodal = document.createElement('div')
        newmodal.classList.add('modal')
        const divTitle = document.createElement('h2')
        const titleValue = document.createElement('h1')
        titleValue.classList.add('titlevalue')
        divTitle.textContent = 'Title: '
        bookContainer.appendChild(newmodal)
        newmodal.appendChild(divTitle)
        newmodal.appendChild(titleValue)
        modal.style.display = 'flex'
        titleValue.textContent = element.title
        // authorValue.textContent = element.author
        // readValue.textContent = element.read
        // pagesValue.textContent = element.pages
    });
}

// ==================To do ===========================================================================================
// =========for every new book created create new modal and pass author title etc and show it in dom
function appendBook (book) {
    
    
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

// closemodal.addEventListener('click',deleteBook)

// ==================To do ===========================================================================================
// function deleteBook (e) {
//     //identify book with id(id=title )
//     let id = e.target.previousElementSibling.textContent
//     alert(id)
//     // delete book from array
//     for (i in myLibrary){
//         if (myLibrary[i].title === id){
//             myLibrary.splice(i,1)
//         }
//     }
//     // delete book from display panel 
    
//     // update counters 
// }
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
    // appendBook(newBook)
    
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



