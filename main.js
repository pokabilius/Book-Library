let myLibrary = [];

const btn = document.querySelector('button')
const input = document.querySelector('.formcontainer')
const modal = document.querySelector('.modal')
const divTitle = document.createElement('div')
const divAuthor = document.createElement('div')
const divPages = document.createElement('div')
const divRead = document.createElement('div')
modal.appendChild(divTitle)
modal.appendChild(divAuthor)
modal.appendChild(divPages)
modal.appendChild(divRead)


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

// adevnent listener to btn and show up a modal with input for book author etc (fade background and show up the input modal)
btn.addEventListener('click', () => {
    if  (input.style.display === 'flex' ){
        input.style.display = 'none'
    }else {
        input.style.display = 'flex'
    }

})

// pass inputs as parameters in new Book


// every new book created create new modal and pass author title etc and show it in dom

const book1 = new Book('Hobbit', 'Tolkin', 150 , false)
const book2 = new Book('Lord of the rings', 'Tolkin', 150, true)

addBookToLibrary(book1)
addBookToLibrary(book2)




divTitle.textContent = ` Title: ${book1.title} `
divAuthor.textContent = `Author: ${book1.author} `
divPages.textContent = `Pages: ${book1.pages}`


showLibrary(myLibrary)


