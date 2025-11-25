import BookForm from "../../components/BookForm/BookForm";
import { useState } from "react";
import { BookFormValuesType } from "../../components/services/bookService";
import { useNavigate, useOutletContext } from "react-router-dom";

type BookOutletContext = {
  onCreate: (values: BookFormValuesType) => Promise<void> | void;
};

export default function AddingFormPage() {
  const { onCreate } = useOutletContext<BookOutletContext>();
  const navigate = useNavigate();

  const handleSubmit = async (values: BookFormValuesType) => {
    await onCreate(values);
    navigate("/books");
  };

  return (
    <div>
      <BookForm
        initialValues={{ name: "", category: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
