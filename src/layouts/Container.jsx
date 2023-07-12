import { Outlet } from "react-router-dom";
import Header from "./Header";

function Container() {
  return (
    <div>
      <>
        <Header />
        <Outlet />
      </>
    </div>
  );
}

export default Container;
