import { IBook } from "../services/bookService";
import css from "./BookCard.module.css";

type PropsType = {
  book: IBook;
};

export default function BookCard({ book }: PropsType) {
  return (
    <li className={css.item}>
      <p>{book.name}</p>
      <p>{book.category}</p>
    </li>
  );
}
