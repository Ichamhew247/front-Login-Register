import { useState, useEffect } from "react";

export default function Aboutme() {
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
