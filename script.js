class Book {
    constructor(title, author){
        this.title=title;
        this.author=author;
    }
}
class BookCollection {
    constructor() {
        this.books = JSON.parse(localStorage.getItem("books")) || [];
    }
    addBook(book) {
        this.books.push(book);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
    }
    removeBook(index) {
        this.books = this.books.filter((_, bookIndex) => bookIndex !== index);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
    }
    displayBooks() {
        const bookId = document.getElementById('book-title');
        if (this.books.lenghth === 0) {
            bookId.innerHTML = "<p>No bookks available.</p>";
            return;
        }

        const mapBook = this.books.map((book, index) =>{
            return`
            <ul key="${index}" class = "book">
                    <li>${book.title} by ${book.author}</li>
                    
                    <li><button class="btn-remove" onclick="bookCollection.removeBook(${index})">Remove</button></li>
                </ul>`
        }).join('');
        bookId.innerHTML = mapBook;
    }
}
// Create an instance of BookCollection
const bookCollection = new BookCollection();

const titleId = document.getElementById("title");
const authorId = document.getElementById("Author");
const buttonId = document.getElementById("btn");

// function to add a book
const add = () => {
    const titleValue = titleId.value.trim();
    const authorValue = authorId.value.trim();

    if (titleValue === "" || authorValue === "") {
        alert("Please enter both title and author.");
        return;
    }
    const book = new Book(titleValue, authorValue);
    bookCollection.addBook(book);

    titleId.value = '';
    authorId.value = '';
}
buttonId.addEventListener('click', add);

bookCollection.displayBooks();
