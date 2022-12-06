import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);
  const handleDelete = () => {
    deleteBookById(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3> {book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/200/200`} />
      <div className="content">{content}</div>
      <div>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
      </div>
    </div>
  );
}
export default BookShow;
