import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Register() {
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
    console.log(inputs);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fname: inputs.fname,
      lname: inputs.lname,
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
      avatar: inputs.avatar,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          MySwal.fire({
            title: <strong>Login completed!</strong>,
            html: <i>{result.message}</i>,
            icon: "success",
          }).then(() => {
            navigate("/homepage");
          });
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
        Enter your fisrtname:
        <div>
          <input
            className="border border-sky-300"
            type="text"
            name="fname"
            value={inputs.fname || ""}
            onChange={handleChange}
          />
        </div>
        Enter your lastname:
        <div>
          <input
            className="border border-sky-300"
            type="text"
            name="lname"
            value={inputs.lname || ""}
            onChange={handleChange}
          />
        </div>
        Enter your username:
        <div>
          <input
            className="border border-sky-300"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        Enter your password:
        <div>
          <input
            className="border border-sky-300"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        Enter your email:
        <div>
          <input
            className="border border-sky-300"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        Enter your avatar:
        <div>
          <input
            className="border border-sky-300"
            type="text"
            name="avatar"
            value={inputs.avatar || ""}
            onChange={handleChange}
          />
        </div>
        <button>
          <input
            className="border border-sky-300 hover:bg-sky-600 cursor-pointer"
            type="submit"
          />
        </button>
      </form>
    </div>
  );
}

export default Register;
