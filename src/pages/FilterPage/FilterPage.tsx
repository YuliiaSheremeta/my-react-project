import { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import {
  deleteBook,
  getAllBooks,
  IBook,
} from "../../components/services/bookService";
import List from "../../components/List/List";

export default function FilterPage() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBooks(response);
      setFilteredBooks(response);
    };
    fetchBooks();
  }, []);

  const handleChange = (value: string) => {
    setSelectedCategory(value);
  };
  const handleFilter = () => {
    if (selectedCategory === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) => book.category === selectedCategory)
      );
    }
  };
  const handleDelete = async (bookId: string) => {
    await deleteBook(bookId);
    setBooks((prev) => prev.filter((book) => book._id !== bookId));
    setFilteredBooks((prev) => prev.filter((book) => book._id !== bookId));
  };

  return (
    <>
      <FilterForm
        category={selectedCategory}
        onChange={handleChange}
        onFilter={handleFilter}
      />
      {filteredBooks.length > 0 && (
        <List items={filteredBooks} onDelete={handleDelete} />
      )}
    </>
  );
}
