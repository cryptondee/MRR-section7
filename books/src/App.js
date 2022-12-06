import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import "./css/index.css";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const fetchedBooks = await axios.get("http://localhost:3001/books");
    setBooks(fetchedBooks.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(res);
    const updatedBooks = books.map((book, index) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book, index) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list </h1>
      {books.length}
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
