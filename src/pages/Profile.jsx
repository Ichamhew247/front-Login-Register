import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Profile() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8888/users/authen", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          setUser(result.user);
          setIsLoaded(true);
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
        <div>{user.email}</div>
        <div>{user.fname}</div>
        <div>{user.lname}</div>
        {/* <img src={user.avatar} alt={user.id} width={100} /> */}
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </>
    );
  }
}

export default Profile;
