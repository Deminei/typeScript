"use strict";
const books = [
    {
        id: 1,
        title: "How To Train Goldfish Using Dolphin Training Techniques",
        author: "C. Scott Johnson",
        published: new Date("1995-09-30"),
        available: true,
    },
    {
        id: 2,
        title: "Unsolved Mysteries",
        author: "N. Igma",
        published: new Date("1960-07-11"),
        available: false,
    },
    {
        id: 3,
        title: "I'm Fine",
        author: "Howard Yu",
        published: new Date("1949-06-08"),
        available: true,
    },
];
console.log(books);
function addBook(book) {
    books.push(book);
}
const newBook = {
    id: 4,
    title: "Teach Me!",
    author: "I. Wanda Know",
    published: new Date("1813-01-28"),
    available: true,
};
addBook(newBook);
console.log(books);
function findBookById(id) {
    return books.find((book) => book.id === id);
}
const bookId = 2;
const foundBook = findBookById(bookId);
if (foundBook) {
    console.log(`Book with id ${bookId} found:`, foundBook);
}
else {
    console.log(`Book with id ${bookId} not found.`);
}
function updateBook(book) {
    const index = books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
const bookToUpdate = {
    id: 2,
    title: "Unsolved Mysteries",
    author: "N. Igma",
    published: new Date("1960-07-11"),
    available: true,
};
const updated = updateBook(bookToUpdate);
if (updated) {
    console.log(`Book with id ${bookToUpdate.id} updated successfully.`);
}
else {
    console.log(`Book with id ${bookToUpdate.id} not found.`);
}
function removeBook(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        console.log(`Book with id ${id} has been removed from the library`);
        return true;
    }
    else {
        console.log(`Book with id ${id} was not found in the library`);
        return false;
    }
}
removeBook(3);
console.log(books);
