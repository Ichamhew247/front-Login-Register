import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Aboutme() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [isLoaded, setIsLoaded] = useState(true);
  const [profile, setProfile] = useState({});

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
          setProfile(result.decoded);
          setIsLoaded(false);
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (isLoaded) return <div>Loading</div>;
  else {
    return (
      <>
        <div>{profile.email}</div>
        <div>{profile.fname}</div>
        <div>{profile.lname}</div>
      </>
    );
  }
}

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// export default function Aboutme() {
//   const navigate = useNavigate();
//   const MySwal = withReactContent(Swal);
//   const [isLoaded, setIsLoaded] = useState(true);
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer " + token);

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch("http://localhost:8888/users/authen", requestOptions)
//       .then((response) => response.json()) // แก้ไขเป็น response.json()
//       .then((result) => {
//         if (result.status === "ok") {
//           setProfile(result.decoded); // เซ็ตค่า profile เป็น result.decoded
//           setIsLoaded(false);
//         } else {
//           localStorage.removeItem("token");
//           navigate("/login");
//         }
//       })
//       .catch((error) => console.log("error", error));
//   }, []);

//   if (isLoaded) return <div>Loading</div>;
//   else {
//     return (
//       <>
//         <div>{profile.email}</div>
//         <div>{profile.fname}</div>
//         <div>{profile.lname}</div>
//       </>
//     );
//   }
// }
