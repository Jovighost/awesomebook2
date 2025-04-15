class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  
  }
}
class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
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
      bookId.innerHTML = '<p>No bookks available.</p>';
      return;
    }

    const mapBook = this.books.map((book, index) => `
            <ul key="${index}" class = "book">
                    <li>${book.title} by ${book.author}</li>
                    
                    <li><button class="btn-remove" onclick="bookCollection.removeBook(${index})">Remove</button></li>
                </ul>`).join('');
    bookId.innerHTML = mapBook;
  }
}
// Create an instance of BookCollection
const bookCollection = new BookCollection();
if (document.getElementById('btn')){}
const titleId = document.getElementById('title');
const authorId = document.getElementById('Author');
const buttonId = document.getElementById('btn');

// function to add a book
const add = () => {
  const titleValue = titleId.value.trim();
  const authorValue = authorId.value.trim();

  if (titleValue === '' || authorValue === '') {
    const messageElement = document.getElementById('message');
    messageElement.textContent = ('Please enter both title and author.');
    return;
  }
  const book = new Book(titleValue, authorValue);
  bookCollection.addBook(book);

  titleId.value = '';
  authorId.value = '';
};
buttonId.addEventListener('click', add);

bookCollection.displayBooks();



//navigation
const listId = document.getElementById('home-link');
const addNewId = document.getElementById('add-link');
const contactId = document.getElementById('Contact-link');


//section

const homeSection = document.getElementById('home');
const addBookSection = document.getElementById('add');
const contactSection = document.getElementById('contact');

// displaying and active time
class DataTimeTime {
    constructor() {
        this.datecontainer = document.getElementById('date-time');
        this.startClock();
    }

    updateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        this.datecontainer.innerText = now.toLocaleString('en-US', options);
    }

    startClock() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }
}

// function to handle navigate

const handleNavigation = (navId) => {
       // Hide all sections first
       homeSection.style.display = "none";
       addBookSection.style.display = "none";
       contactSection.style.display = "none";
   
       // Show the selected section
       if (navId === listId) {
           homeSection.style.display = "block";
       }
       if (navId === addNewId) {
           addBookSection.style.display = "block";
       }
       if (navId === contactId) {
           contactSection.style.display = "block";
       }
// Add event listeners for navigation
listId.addEventListener('click', () => handleNavigation(listId));
addNewId.addEventListener('click', () => handleNavigation(addNewId));
contactId.addEventListener('click', () => handleNavigation(contactId));
}

//Show the home section by default on page load
handleNavigation(listId);

// Initialize and display date and time
new DataTimeTime();('click', ()=> handleNavigation(addNewId))
contactId.addEventListener('click', () => handleNavigation(contactId))


//Show the home section by default on page load
handleNavigation(listId);