import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Profile() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8888/users/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "ok") {
          MySwal.fire({
            title: "Authen success!",
            icon: "success",
          });
        } else {
          MySwal.fire({
            title: <strong>Authen FAILED!</strong>,
            icon: "error",
          });
          // localStorage.removeItem("token");
          window.location = "/login";
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
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
    <>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
      <div>Nattanicha</div>
    </>
  );
}
