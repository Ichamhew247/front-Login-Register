import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Avatar from "../components/Avatar";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const handleCLickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleCLickOutside);
    return () => document.removeEventListener("click", handleCLickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    MySwal.fire({
      title: <strong>Logout completed!</strong>,
      icon: "success",
    }).then(() => {
      navigate("/homepage");
    });
  };
  return (
    <div>
      <div className="relative" ref={dropdownEl}>
        <div role="button" onClick={() => setOpen(!open)}>
          <Avatar src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        {open && (
          <div className="flex gap-4 absolute bg-lime-300 border rounded-xl shadow-lg  w-64 right-0 translate-y-4 p-2">
            <div>
              <Link to="/profile">
                <Avatar src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Link>
            </div>

            <div>
              <div className="hover:bg-slate-600 cursor-pointer">
                My Profile
              </div>
              <hr className="w-[160px] border border-black" />
              <button className="hover:bg-slate-600 " onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
