const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a. Function to find an item by ID ****
function findItemByID(array, id) {
  return array.find((book) => book.id === id);
}

console.log(findItemByID(books, 1));
console.log(findItemByID(books, 5));

// b. Function to filter
const booksBefore1950 = books.filter((book) => book.year < 1950);
console.log(booksBefore1950);

// c. Function to add genre
function addGenre(books) {
  return books.map((book) => ({ ...book, genre: "classic" }));
}
const booksWithGenre = addGenre(books);
console.log(booksWithGenre);
