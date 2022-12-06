import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./bookShow";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderBooks = books.map((book, index) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}> +1</button>
      {renderBooks}
    </div>
  );
}
export default BookList;
