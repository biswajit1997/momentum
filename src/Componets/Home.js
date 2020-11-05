import React, { useState } from "react";
import "../App.css";
function Home() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [input, setInput] = useState(true);
  const [userDetails, setUserDetails] = useState([{ email: "", password: "" }]);
  const handleShow = (e) => {
    setShow(true);
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  const handleEmail = (e) => {
    setShow(true);
    setUserDetails({ ...username, [e.target.name]: e.target.value });
    console.log(userDetails);
  };
  const handaleSubmit = (e) => {
    setInput(false);
  };
  const subEmail = (e) => {
    console.log(userDetails);
  };
  const display = () => {
    if (input == true) {
      return (
        <div class="home">
          <div className="text-center">
            <span className="title">Hello, what's your name?</span>
          </div>
          <div className="text-center">
            <input
              type="text"
              onChange={handleShow}
              className="in"
              name="name"
            />
          </div>

          <div className="text-center mt-3">
            {show == false ? (
              []
            ) : (
              <button type="submit" onClick={handaleSubmit} className="btn">
                Continue
              </button>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div class="home">
          <div className="text-center">
            <span className="title">What's your email,{username}?</span>
          </div>
          <div className="text-center">
            <input
              type="text"
              onChange={handleEmail}
              name="email"
              className="in"
            />
          </div>

          <div className="text-center mt-3">
            {show == false ? (
              []
            ) : (
              <button onClick={subEmail} className="btn">
                Continue
              </button>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container">{display()}</div>
    </div>
  );
}

export default Home;
