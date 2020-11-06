import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { WiDayCloudy } from "react-icons/wi";
import date from "date-and-time";

function Home() {
  const [dateTime, setDateTime] = useState("");
  const [whetherData, setWhetherData] = useState([{ name: "Bhubaneswar" }]);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("name");
  const [emails, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([
    { name: "", email: "", password: "" },
  ]);
  const api = { email: "biswajit@gmail.com", password: "qwer1234" };
  const Time = () => {
    var d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    let value = h + ":" + m;
    setDateTime(value);
  };
  useEffect(() => {
    Time();
  });

  // console.log(dateTime);

  const handleShow = (e) => {
    setShow(true);
    setUsername(e.target.value);
    // console.log(e.target.value);
  };
  const handleEmail = (e) => {
    setShow(true);
    setEmail(e.target.value);
    // console.log(emails);
  };
  const handaleSubmit = (e) => {
    setInput("email");
  };
  const subEmail = (e) => {
    setInput("password");
    // console.log(emails);
    // console.log(username);
  };
  const handlePassword = (e) => {
    setShow(true);
    setPassword(e.target.value);
    // console.log(password);
  };
  const subPass = () => {
    // console.log(username);
    // console.log(emails);
    // console.log(password);
    setAllData({
      ...allData,
      name: username,
      email: emails,
      password: password,
    });
    if (api.email == emails && api.password == password) {
      setInput("dashboard");
      console.log(allData);
    } else {
      setInput("name");
      console.log("password error");
    }
  };
  const whetherApi = "bfc873dcbfd97dce32a13927f3563bf9";

  // useEffect(() => {
  //   const Api = () => {
  //     axios
  //       .get(
  //         "http://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=bfc873dcbfd97dce32a13927f3563bf9"
  //       )
  //       .then(function (response) {
  //         setWhetherData(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error.message);
  //       });
  //   };
  //   Api();
  // }, []);
  const Whetherfu = () => {
    if (api.email == emails && api.password == password) {
      return (
        <div
          className="text-right"
          style={{ color: "#fff", marginBottom: "111px" }}
        >
          <div>
            <h3>
              <WiDayCloudy style={{ fontSize: "44px" }} /> 31
            </h3>
          </div>
          <span>Bhubaneswar</span>
        </div>
      );
    }
  };

  const Display = () => {
    if (input == "name") {
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
              required
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
    }
    if (input == "email") {
      return (
        <div class="home">
          <div className="text-center">
            <span className="title">What's your email,{username}?</span>
          </div>
          <div className="text-center">
            <input
              type="email"
              onChange={handleEmail}
              name="email"
              className="in"
              required
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
    if (input == "password") {
      return (
        <div class="home">
          <div className="text-center">
            <span className="title">Please Choose a password.</span>
          </div>

          <div className="text-center">
            <input
              type="password"
              onChange={handlePassword}
              name="password"
              className="in"
              required
            />
          </div>

          <div className="text-center mt-3">
            {show == false ? (
              []
            ) : (
              <button onClick={subPass} className="btn">
                Continue
              </button>
            )}
          </div>
        </div>
      );
    }

    if (input == "dashboard") {
      if (api.email == emails && api.password == password) {
        return (
          <div class="home">
            <div
              class="text-right"
              style={{ marginLeft: "auto", marginBottom: "0" }}
            >
              {Whetherfu()}
            </div>

            <div class="clock">
              <span class="time">{dateTime}</span>
            </div>
            <div className="text-center">
              <span className="title">Good afternoon,{username}</span>
            </div>
            <div className="text-center">
              <span className="title">What is your main focus for today?</span>
            </div>
            <div className="text-center">
              <input
                type="text"
                // onChange={handlePassword}
                name="password"
                className="in"
                required
              />
            </div>
            {/* <div className="text-center mt-3">
                {show == false ? [] : <button className="btn">Continue</button>}
              </div> */}
          </div>
        );
      }
    }
  };

  return (
    <div>
      <div className="container">
        {/* <div>{Whetherfu()}</div> */}

        {Display()}
      </div>
    </div>
  );
}

export default Home;
