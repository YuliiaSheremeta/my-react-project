import { useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";
import List from '../List/List';
import css from './App.module.css';

export default function App() {
const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBooks(response);
    };
    fetchBooks();
  }, []);

    return (
        <div>
            <h1 className={css.title}>My library!</h1>
            {books.length > 0 && <List items={books} />}   
        </div>
       );       
};
