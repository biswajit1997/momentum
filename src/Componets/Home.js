import React, { useState, useEffect } from "react";
import "../App.css";
// import axios from "axios";
import { WiDayCloudy } from "react-icons/wi";
import { FcGoogle } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
// import date from "date-and-time";
import fire from "./fire";
import { Popover, PopoverBody } from "reactstrap";

function Home() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const [dateTime, setDateTime] = useState("");
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("name");
  const [emails, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([
    { name: "", email: "", password: "" },
  ]);
  const [todo, setTodo] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  // const api = { email: "biswajit@gmail.com", password: "qwer1234" };
  const [login, setLogin] = useState("");
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

  // console.log(fire);

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
    // fire.auth().signInWithEmailAndPassword(emails, password).catch();
    //createUserWithEmailAndPassword
    fire
      .auth()
      .signInWithEmailAndPassword(emails, password)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;

        console.log(result);
        setLogin(result.operationType);
        if (result.operationType === "signIn") {
          setInput("dashboard");
        } else {
          setInput("name");
        }

        // The signed-in user info.
        // var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });

    setAllData({
      ...allData,
      name: username,
      email: emails,
      password: password,
    });
  };

  const googleLogin = () => {
    var provider = new fire.firebase_.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        setdata(result);
        setLogin(result.operationType);
        if (result.operationType === "signIn") {
          setInput("dashboard");
        } else {
          setInput("name");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTodo = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubTodo = () => {
    fire.database().ref("Todo").push(todo);
  };
  const handeShowTodo = () => {
    fire
      .database()
      .ref("Todo")
      .on("value", (snapshot) => {
        let fetchdata = [];
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          fetchdata.push(snap.val());
        });
        setFetchData(fetchdata);
      });
  };
  const fetch = () => {
    return (
      <div>
        {fetchData.map((item) => {
          return <span style={{ fontSize: "30px" }}>{item.todo}</span>;
        })}
      </div>
    );
  };

  // const whetherApi = "bfc873dcbfd97dce32a13927f3563bf9";
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
    if (login === "signIn") {
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
    if (input === "name") {
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
            {show === false ? (
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
    if (input === "email") {
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
            {show === false ? (
              []
            ) : (
              <button onClick={subEmail} className="btn">
                Continue
              </button>
            )}
          </div>
          <div
            className="mt-5 border p-2"
            style={{ cursor: "pointer" }}
            onClick={googleLogin}
          >
            <span style={{ color: "#fff" }}>SignIn with </span>
            <FcGoogle style={{ fontSize: "30px", cursor: "pointer" }} />
          </div>
        </div>
      );
    }
    if (input === "password") {
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
            {show === false ? (
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

    if (input === "dashboard") {
      if (login === "signIn") {
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
              <span className="title">Good evening,{username}</span>
            </div>
            {/* <div className="text-center">
              <span className="title">What is your main focus for today?</span>
            </div> */}
            <div className="text-center">
              <input
                type="text"
                onChange={handleTodo}
                name="todo"
                className="in"
                required
              />
            </div>
            <div className="text-center mt-3">
              {show === false ? (
                []
              ) : (
                <button onClick={handleSubTodo} className="btn">
                  Continue
                </button>
              )}
            </div>
            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="Popover1"
              toggle={toggle}
            >
              <PopoverBody>
                <div>Name:{data.user.displayName}</div>
                <div>Email:{data.user.email}</div>
                <div
                  onClick={handeShowTodo}
                  className="text-center border"
                  style={{ margin: "10px", cursor: "pointer" }}
                >
                  Todo
                </div>
                <div>{fetch()}</div>
              </PopoverBody>
            </Popover>
            <div style={{ marginRight: "auto", marginBottom: "0" }}>
              <FiSettings
                id="Popover1"
                style={{
                  fontSize: "35px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </div>
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
