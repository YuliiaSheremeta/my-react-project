import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to={""}>Home</Link>
        </li>
        <li>
          <Link to={"/books"}>Books</Link>
        </li>
        <li>
          <Link to={"/filter"}>Find by category</Link>
        </li>
      </ul>
    </div>
  );
}
