import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex gap-4 justify-end p-8 pr-12 m-auto shadow-sm ">
      <Link to="/homepage">
        <button className=" border-gray-600">Home</button>
      </Link>
      <Link to="/login">
        <button className=" border-gray-600">Login</button>
      </Link>
      <Link to="/register">
        <button className=" border-gray-600">Register</button>
      </Link>
      <Link to="/profile">
        <button className=" border-gray-600">Profile</button>
      </Link>
    </div>
  );
}

export default Header;
