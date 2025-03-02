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