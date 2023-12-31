import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: inputs.email,
      password: inputs.password,
      expiresIn: 600000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8888/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          MySwal.fire({
            title: <strong>Login completed!</strong>,
            html: <i>{result.message}</i>,
            icon: "success",
          }).then((value) => {
            localStorage.setItem("token", result.token);
            navigate("/profile");
            console.log(value);
          });
          console.log(result);
        } else {
          MySwal.fire({
            title: <strong>Login FAILED!</strong>,
            html: <i>{result.message}</i>,
            icon: "error",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>email :</h1>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <h1>password :</h1>
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
