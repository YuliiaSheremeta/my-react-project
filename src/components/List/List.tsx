import { IBook } from "../services/bookService";
import css from "./List.module.css";
import BookCard from "../BookCard/BookCard";

type PropsType = {
  items: IBook[];
};

export default function List({ items }: PropsType) {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <BookCard key={item._id} book={item} />
        ))}
      </ul>
    </>
  );
}
