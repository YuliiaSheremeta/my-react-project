import BookAddForm from "../../components/BookAddForm/BookAddForm";
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
      <BookAddForm
        initialValues={{ name: "", category: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
