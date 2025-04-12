const bookId = document.getElementById("book-title");
const titleId = document.getElementById("title");
const authorId = document.getElementById("Author");
const buttonId = document.getElementById("btn");

var books = JSON.parse(localStorage.getItem("books")) || [];


// Display books
const displayBook = () => {
    if (books.length === 0) {
        bookId.innerHTML = "<p>No books available.</p>";
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

    bookId.innerHTML = mapBook;
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
       title: titleValue,
       author: authorValue
   };
   books.push(book);
    localStorage.setItem('books', JSON.stringify(books)); // Update localStorage
    displayBook(); // Refresh display

    // Clear input fields
    titleId.value = '';
    authorId.value = '';

 
}

//remove a book
const removeBook =(bookIndex) => {
    books = books.filter((_, index) => index !== bookIndex);
    localStorage.setItem('books', JSON.stringify(books)); // Update localStorage
    displayBook();
   
}

// Add event listener
buttonId.addEventListener('click', add);

// Initial display of books
displayBook();



