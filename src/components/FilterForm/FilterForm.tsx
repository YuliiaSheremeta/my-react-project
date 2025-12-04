import css from "./FilterForm.module.css";
type FilterFormProps = {
  category: string;
  onChange: (value: string) => void;
  onFilter: () => void;
};
export default function FilterForm({
  category,
  onChange,
  onFilter,
}: FilterFormProps) {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find the book by category
        <select
          className={css.select}
          value={category}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">--Choose--</option>
          <option value="hystory">Hystory</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="adventure">Adventure</option>
          <option value="biography">Biography</option>
        </select>
      </label>
      <button onClick={onFilter} className={css.button}>
        Find
      </button>
    </div>
  );
}
