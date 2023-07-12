import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

function Header() {
  return (
    <header className="flex justify-end gap-4 px-10 h-20 items-center  bg-slate-300 shadow-lg sticky top-0 z-10">
      <div className="bg-orange-200 py-2 flex gap-4 ">
        <Link to="/homepage">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/aboutme">
          <button>Aboutme</button>
        </Link>
      </div>
      <Dropdown />
    </header>
  );
}

export default Header;
