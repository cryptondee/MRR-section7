import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./bookShow";

function BookList() {
  const { books } = useContext(BooksContext);
  const renderBooks = books.map((book, index) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}
export default BookList;
