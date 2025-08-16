import React, { useState } from 'react';

const LibraryApp = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addBook = (book) => {
    const updatedBooks = [];
    for (let i = 0; i < books.length; i++) {
      updatedBooks.push(books[i]);
    }
    updatedBooks.push(book);
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].id !== id) {
        updatedBooks.push(books[i]);
      }
    }
    setBooks(updatedBooks);
  };

  const updateBook = (id, updatedInfo) => {
    const updatedBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        updatedBooks.push({ ...books[i], ...updatedInfo });
      } else {
        updatedBooks.push(books[i]);
      }
    }
    setBooks(updatedBooks);
  };

  const searchBooks = (books, searchTerm) => {
    const result = [];
    for (let i = 0; i < books.length; i++) {
      if (
        books[i].title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        books[i].author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        books[i].genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        books[i].pages.toString().includes(searchTerm)
      ) {
        result.push(books[i]);
      }
    }
    return result;
  };

  const markAsIssued = (id) => {
    const updatedBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        updatedBooks.push({ ...books[i], issued: true });
      } else {
        updatedBooks.push(books[i]);
      }
    }
    setBooks(updatedBooks);
  };

  const returnBook = (id) => {
    const updatedBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        updatedBooks.push({ ...books[i], issued: false });
      } else {
        updatedBooks.push(books[i]);
      }
    }
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Бібліотека</h1>

      <div>
        <h2>Пошук книги</h2>
        <input
          type="text"
          placeholder="Пошук за назвою, автором, жанром або кількістю сторінок"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {searchBooks(books, searchTerm).map(book => (
            !book.issued ? (
              <li key={book.id}>
                <strong>{book.title}</strong> - {book.author} - {book.genre} - {book.year} - {book.pages} сторінок
                <button onClick={() => markAsIssued(book.id)}>Взяти</button>
                <button onClick={() => deleteBook(book.id)}>Видалити</button>
                <button onClick={() => updateBook(book.id, { title: 'Оновлена назва' })}>Оновити</button>
              </li>
            ) : null
          ))}
        </ul>
      </div>

      <div>
        <h2>Недоступні книги</h2>
        <ul>
          {books.map(book => (
            book.issued ? (
              <li key={book.id}>
                <strong>{book.title}</strong> - {book.author} - {book.genre} - {book.year} - {book.pages} сторінок
                <button onClick={() => returnBook(book.id)}>Повернути</button>
              </li>
            ) : null
          ))}
        </ul>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        addBook({
          id: Date.now(),
          title: e.target.title.value,
          author: e.target.author.value,
          genre: e.target.genre.value,
          year: e.target.year.value,
          pages: e.target.pages.value,
          issued: false
        });
        e.target.reset();
      }}>
        <input type="text" name="title" placeholder="Назва книги" required />
        <input type="text" name="author" placeholder="Автор книги" required />
        <input type="text" name="genre" placeholder="Жанр книги" required />
        <input type="number" name="year" placeholder="Рік випуску" required />
        <input type="number" name="pages" placeholder="Кількість сторінок" required />
        <button type="submit">Додати книгу</button>
      </form>
    </div>
  );
};

export default LibraryApp;
