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
import {
  BiSolidSkipNextCircle,
  BiSolidSkipPreviousCircle,
} from "react-icons/bi";

export default function BooksPage() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const isFormOpen = location.pathname === "/books/add";

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await getAllBooks({
        page,
        perPage,
        category: category || undefined,
        search: search || undefined,
      });

      setBooks(response.books);
      setTotalPages(response.totalPages);
      setTotalItems(response.totalItems);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page, perPage, category, search]);

  const handleCreate = async (values: BookFormValuesType) => {
    await createNewBook(values);
    setPage(1);
    await fetchBooks();
  };

  const handleDelete = async (bookId: string) => {
    await deleteBook(bookId);
    await fetchBooks();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div>
      <Link to={isFormOpen ? "/books" : "add"}>
        <IoAddCircle className={css.icon} />
      </Link>
      {/* тут перекидаємо handleCreate у дочірні маршрути */}
      <Outlet context={{ onCreate: handleCreate }} />
      <div className={css.form}>
        <select
          value={category}
          onChange={handleCategoryChange}
          className={css.select}
        >
          <option value="">--Find by category--</option>
          <option value="hystory">Hystory</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="adventure">Adventure</option>
          <option value="biography">Biography</option>
        </select>
        <input
          className={css.input}
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      {loading && <p>Loading...</p>}

      {!loading && books.length > 0 && (
        <>
          <p>
            Total books:<strong>{totalItems}</strong>
          </p>
          <List items={books} onDelete={handleDelete} />
        </>
      )}
      {!loading && totalPages > 1 && (
        <div className={css.buttonscontainer}>
          <button
            className={css.button}
            onClick={prevPage}
            disabled={page === 1}
          >
            <BiSolidSkipPreviousCircle />
          </button>
          <span>
            Page {page} from {totalPages}
          </span>
          <button
            className={css.button}
            onClick={nextPage}
            disabled={page === totalPages}
          >
            <BiSolidSkipNextCircle />
          </button>
        </div>
      )}
    </div>
  );
}
