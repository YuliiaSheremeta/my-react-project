import { useEffect, useState } from "react";
import { createNewBook, getAllBooks} from "../services/bookService";
import List from '../List/List';
import BookForm from '../BookForm/BookForm';
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

  const handleCreate = async(values) => {
    const newBook = await createNewBook(values);
    setBooks(prev => [...prev, newBook]);
  }

  /*const handleUpdate = async (values) => {
    const updatedBook = await updateBook(values._id, values);
    setBooks(prev => prev.map(book => book._id === updatedBook._id ? updatedBook : book));
  }*/

    return (
        <div>
        <h1 className={css.title}>My library!</h1>
        <BookForm initialValues={{name:'',category:''}} onSubmit={handleCreate} />
            {books.length > 0 && <List items={books} />}   
        </div>
       );       
};
