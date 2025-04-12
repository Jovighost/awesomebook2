const bookId = document.getElementById("book-title");
const titleId = document.getElementById("title");
const authorId = document.getElementById("Author");
const buttonId = document.getElementById("btn");

var books = JSON.parse(localStorage.getItem("books")) || [];

// display books
const displayBook = () => {
    if (books.length === 0) {
        bookId.innerHTML = "<p>No books available.</p>"
        return;
    }
    
    const mapBook = books.map((book, index) => {
        return `
         <ul key="${index}">
                    <li>${book.title}</h1></li>
                    <li>${book.author}</li>
                    <li> <button class="btn-remove" onclick="removeBook(${index})">Remove</button></li>
                </ul>
               `;
    }).join('');
    bookId.innerHTML = mapBook
 
};


const add = () =>{
  
    // getting input values
    const titleValue = titleId.value.trim();
    const authorValue = authorId.value.trim();
    
    //check if inputs are empty
    if (titleValue === "" || authorValue === "") {
        alert("Please enter both title and author.");
        return;
    }

    const book = {
        title:titleValue,
        author:authorValue
      }; 
      books.push(book);
      localStorage.setItem('books' , JSON.stringify(books));
      displayBook();

      titleId.value = '';
      authorId.value = ''; 
};




class BookCollection{
    constructor(){
        this.books = [];

    }

    // method to add a book
    addBook(book) {
        this.books.push(book)  
        console.log(`${book.title} by ${book.author}`)   
}


}

// Add event listener
buttonId.addEventListener('click', add);


 

 



