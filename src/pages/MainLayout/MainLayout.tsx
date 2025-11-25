import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

export default function MainLayout() {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
}
