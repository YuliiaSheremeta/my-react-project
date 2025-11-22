import axios from "axios";

export interface IBook {
  name: string;
  category: string;
  _id: string;
}
type BookIdType = IBook["_id"];

interface IBookUpdate {
  name: string;
  category: string;
  _id: BookIdType;
}
export type BookFormValuesType = {
  name: string;
  category: string;
};

axios.defaults.baseURL = "https://my-node-practice.onrender.com/";

export const getAllBooks = async () => {
  const res = await axios.get<IBook[]>("/books");
  return res.data;
};

export const createNewBook = async (newBook: IBook) => {
  const res = await axios.post<IBook>("/books", newBook);
  return res.data;
};

export const deleteBook = async (bookId: BookIdType) => {
  const res = await axios.delete<IBook>(`/books/${bookId}`);
  return res.data;
};

export const updateBook = async (bookUpdate: IBookUpdate) => {
  const res = await axios.put<IBook>(`/books/${bookUpdate._id}`, bookUpdate);
  return res.data;
};
