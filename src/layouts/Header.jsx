import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex m-auto shadow-lg border border-gray-600">
      <Link to="/homepage">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Header;
