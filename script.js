class LibraryApp {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.dateContainer = document.getElementById('date-time');

    this.titleId = document.getElementById('title');
    this.authorId = document.getElementById('Author');
    this.buttonId = document.getElementById('btn');
    this.bookId = document.getElementById('book-title');

    this.init();
  }

  init() {
    this.displayBooks();
    this.buttonId.addEventListener('click', () => this.addBook());
    this.startClock();
    LibraryApp.setupNavigation(this);
  }

  addBook() {
    const titleValue = this.titleId.value.trim();
    const authorValue = this.authorId.value.trim();

    if (titleValue === '' || authorValue === '') {
      const messageElement = document.getElementById('message');
      messageElement.textContent = 'Please enter both title and author.';
      return;
    }

    const book = { title: titleValue, author: authorValue };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();

    this.titleId.value = '';
    this.authorId.value = '';
  }

  removeBook(index) {
    this.books = this.books.filter((_, bookIndex) => bookIndex !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    if (this.books.length === 0) {
      this.bookId.innerHTML = '<p>No books available.</p>';
      return;
    }

    const mapBook = this.books.map((book, index) => `
      <ul key="${index}" class="book">
        <li>${book.title} by ${book.author}</li>
        <li><button class="btn-remove" onclick="libraryApp.removeBook(${index})">Remove</button></li>
      </ul>`).join('');

    this.bookId.innerHTML = mapBook;
  }

  startClock() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
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
    this.dateContainer.innerText = now.toLocaleString('en-US', options);
  }

  static setupNavigation(libraryApp) {
    const listId = document.getElementById('home-link');
    const addNewId = document.getElementById('add-link');
    const contactId = document.getElementById('Contact-link');

    const homeSection = document.getElementById('home');
    const addBookSection = document.getElementById('add');
    const contactSection = document.getElementById('contact');

    const handleNavigation = (navId) => {
      homeSection.style.display = 'none';
      addBookSection.style.display = 'none';
      contactSection.style.display = 'none';

      if (navId === listId) {
        homeSection.style.display = 'block';
      }
      if (navId === addNewId) {
        addBookSection.style.display = 'block';
      }
      if (navId === contactId) {
        contactSection.style.display = 'block';
      }
    };

    listId.addEventListener('click', () => handleNavigation(listId));
    addNewId.addEventListener('click', () => handleNavigation(addNewId));
    contactId.addEventListener('click', () => handleNavigation(contactId));

    // Show the home section by default on page load
    handleNavigation(listId);
  }
}

// Create an instance of LibraryApp
const libraryApp = new LibraryApp();