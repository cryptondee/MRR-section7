import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import "./css/index.css";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading list </h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
