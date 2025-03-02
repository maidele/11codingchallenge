//Task 1
// This defines the Book class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // Assignment of title
        this.author = author; // Assignment of author name
        this.isbn = isbn; // Assignment of isbn
        this.copies = copies; // Assignment of copy amount
    }

    // Returning details
    getDetails() {
        return `Book: ${this.title}, Author: ${this.author}, ISBM: $${this.isbn}, Copier: ${this.copies}`;
    }

    // Method to update copies when an additional copy is borrowed or returned
    updateCopies(quantity) {
        if (this.copies >= quantity) {
            this.copies += quantity; // Reduce copies amount via ordered quantity
        } else {
            console.log("Not enough copies available.");
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2-
// Define the Borrower class
class Borrower {
    constructor(name, borrowerID) {
        this.name = name; // Assignment of borrower name
        this.borrowerID = borrowerID; // Assignment of borrower ID name
        this.borrowedBooks = []; // Assignment of Borrowed books
    };       // Assignment of adding book title to borrowedBooks
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book.isbn);
        }
    }

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []



