import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import BooksPage from "../pages/BooksPage/BooksPage";
import AddingFormPage from "../pages/AddingFormPage/AddingFormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/books",
        element: <BooksPage />,
        children: [{ path: "add", element: <AddingFormPage /> }],
      },
    ],
  },
]);
