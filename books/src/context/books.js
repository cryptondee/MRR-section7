import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const fetchedBooks = await axios.get("http://localhost:3001/books");
    setBooks(fetchedBooks.data);
  };

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

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
