import { useEffect, useState } from "react";
import {
  getAllBooks,
  BookFormValuesType,
  createNewBook,
  IBook,
  deleteBook,
} from "../../components/services/bookService";
import List from "../../components/List/List";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import css from "./BooksPage.module.css";

export default function BooksPage() {
  const [books, setBooks] = useState<IBook[]>([]);
  const location = useLocation();
  const isFormOpen = location.pathname === "/books/add";

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBooks(response);
    };
    fetchBooks();
  }, []);

  const handleCreate = async (values: BookFormValuesType) => {
    const newBook = await createNewBook(values);
    setBooks((prev) => [...prev, newBook]);
  };

  const handleDelete = async (bookId: string) => {
    await deleteBook(bookId);
    setBooks((prev) => prev.filter((book) => book._id !== bookId));
  };

  return (
    <div>
      <Link to={isFormOpen ? "/books" : "add"}>
        <IoAddCircle className={css.icon} />
      </Link>
      {/* тут перекидаємо handleCreate у дочірні маршрути */}
      <Outlet context={{ onCreate: handleCreate }} />
      {books.length > 0 && <List items={books} onDelete={handleDelete} />}
    </div>
  );
}
