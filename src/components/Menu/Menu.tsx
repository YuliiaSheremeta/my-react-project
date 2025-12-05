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
      </ul>
    </div>
  );
}
