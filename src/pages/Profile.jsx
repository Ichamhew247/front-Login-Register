import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Profile() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          setUser(result.user);
          setIsLoaded(false);
        } else if (result.status === "forhidden") {
          MySwal.fire({
            title: <strong>ห้ามดู ยังไม่ได้ล็อคอิน!!!</strong>,
            html: <i>{result.message}</i>,
            icon: "error",
          }).then(() => {
            navigate("/homepage");
          });
        }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
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

  if (isLoaded) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  } else {
    return (
      <>
        <div>{user.id}</div>
        <div>{user.fname}</div>
        <div>{user.lname}</div>
        <div>{user.username}</div>
        <div>{user.password}</div>
        <div>{user.email}</div>
        <img src={user.avatar} alt={user.id} width={100} />
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </>
    );
  }
}

export default Profile;
