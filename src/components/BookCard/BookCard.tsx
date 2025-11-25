import { IBook } from "../services/bookService";
import css from "./BookCard.module.css";
import { TiDelete } from "react-icons/ti";

type PropsType = {
  book: IBook;
  onDelete: (id: string) => void;
};

export default function BookCard({ book, onDelete }: PropsType) {
  return (
    <li className={css.item}>
      <p>{book.name}</p>
      <p>{book.category}</p>
      <TiDelete onClick={() => onDelete(book._id)} className={css.icon} />
    </li>
  );
}
