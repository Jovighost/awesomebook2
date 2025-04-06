
var books = [
{
    tittle: "book of life",
    author: "jaden smith"
},
{
    title: "1884",
    author: "George owell"
},
{
    title: "my woman is a tiger",
    author: "giovanni"
}
]

const add = (title,author) =>{
  
   const book ={
    title: title,
    author: author
   };
   books.push(book)
 
}

//remove a book
const removeBook =(bookIndex) => {
    books = books.filter(index => index !== bookIndex);
    console.log(books)
}
 


removeBook(books[0])



