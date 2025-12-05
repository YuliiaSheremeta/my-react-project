import axios from "axios";
import { IoExpandSharp } from "react-icons/io5";

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
export type GetBookParamsType = {
  page?: number;
  perPage?: number;
  category?: string;
  search?: string;
};
export interface IbookResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  books: IBook[];
}

axios.defaults.baseURL = "https://my-node-practice.onrender.com/";

export const getAllBooks = async (
  params: GetBookParamsType = {}
): Promise<IbookResponse> => {
  const { data } = await axios.get<IbookResponse>("/books", { params });
  return data;
};

export const createNewBook = async (data: BookFormValuesType) => {
  const res = await axios.post<IBook>("/books", data);
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
