import React, { useState, useEffect } from "react";
import "../App.css";
// import axios from "axios";
import { WiDayCloudy } from "react-icons/wi";
import { FcGoogle } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";

// import date from "date-and-time";
import fire from "./fire";
import { Popover, PopoverBody } from "reactstrap";
import ToggleButton from "react-toggle-button";

function Home() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const [userDetails, setUserDetails] = useState([
    {
      name: "",
      email: "",
      password: "",
      uid: "",
      weather: "",
      time: "",
      focus: "",
    },
  ]);
  const [dateTime, setDateTime] = useState("");
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("name");
  const [todo, setTodo] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  const [login, setLogin] = useState("");
  const Time = () => {
    var d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    let value = h + ":" + m;
    setDateTime(value);
  };
  const [weatherToggle, setWeatherToggle] = useState(true);
  const [timeToggle, setTimeToggle] = useState(true);
  const [focusToggle, setFocusToggle] = useState(true);
  // console.log(focusToggle);
  useEffect(() => {
    Time();
  });

  const handleShow = (e) => {
    setShow(true);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleEmail = (e) => {
    setShow(true);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handaleSubmit = (e) => {
    e.target.value = "";
    setInput("email");
  };
  const subEmail = (e) => {
    setInput("password");
  };
  const handlePassword = (e) => {
    setShow(true);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const subPass = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(userDetails.email, userDetails.password)
      .then(function (result) {
        console.log(result);
        setLogin(result.operationType);
        setdata(result);
        if (result.operationType === "signIn") {
          setInput("dashboard");
        } else {
          setInput("name");
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
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
          setUserDetails({
            ...userDetails,
            uid: result.user.uid,
            email: result.user.email,
          });
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

  useEffect(() => {
    if (userDetails.uid) {
      // console.log("userDetails");
      fire.database().ref("userDetails").push(userDetails);
      console.log(userDetails);
    }
  }, []);

  const handleSubTodo = () => {
    setFocusToggle(false);
    // fire.database().ref("Todo").push(todo);
  };

  useEffect(() => {
    const userDetailsShow = () => {
      fire
        .database()
        .ref("userDetails")
        .on("value", (snapshot) => {
          let fetchdata = [];
          snapshot.forEach((snap) => {
            fetchdata.push(snap.val());
          });
          setFetchData(fetchdata);
        });
    };
    userDetailsShow();
  }, []);

  // const fetch = () => {
  //   return (
  //     <div>
  //       {fetchData.map((item) => {
  //         return <span style={{ fontSize: "30px" }}>{item.todo}</span>;
  //       })}
  //     </div>
  //   );
  // };

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
  const focus = () => {
    return (
      <>
        <div className="text-center">
          <span className="focus">What is your main focus for today?</span>
        </div>

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
      </>
    );
  };
  const onClose = () => {
    setTodo("");
    setFocusToggle(true);
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
              value={userDetails.c}
              required
            />
          </div>
          <div className="text-center mt-3">
            {show === false ? (
              []
            ) : (
              <button
                type="submit"
                onClick={(e) => handaleSubmit(e)}
                className="btn"
              >
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
            <span className="title">What's your email,{userDetails.name}?</span>
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
              {weatherToggle === true ? Whetherfu() : []}
            </div>

            <div class="clock">
              <span class="time"> {timeToggle === true ? dateTime : []}</span>
            </div>

            <div className="text-center">
              <span className="title">Good evening,{userDetails.name}</span>
            </div>
            {focusToggle == true ? focus() : []}
            {focusToggle == false ? (
              <div className="text-center mt-3">
                <span style={{ color: "#fff", marginRight: "7px" }}>
                  {todo.todo}
                </span>
                <RiCloseLine
                  onClick={onClose}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </div>
            ) : (
              []
            )}

            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="Popover1"
              toggle={toggle}
            >
              <PopoverBody>
                <div>Name:{data.user.displayName}</div>
                <div>Email:{data.user.email}</div>

                {/* <div
                  onClick={handeShowTodo}
                  className="text-center border"
                  style={{ margin: "10px", cursor: "pointer" }}
                >
                  Todo
                </div> */}
                {/* <div>{fetch()}</div> */}

                <div className="row mt-3">
                  <div className="col-6">Weather : </div>
                  <div className="col-6">
                    <ToggleButton
                      value={weatherToggle || false}
                      onToggle={(value) => {
                        setWeatherToggle(!weatherToggle);
                        setUserDetails({
                          ...userDetails,
                          weather: weatherToggle,
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">Time : </div>
                  <div className="col-6">
                    <ToggleButton
                      value={timeToggle || false}
                      onToggle={(value) => {
                        setTimeToggle(!timeToggle);
                        setUserDetails({ ...userDetails, time: timeToggle });
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">Focus : </div>
                  <div className="col-6">
                    <ToggleButton
                      value={focusToggle || false}
                      onToggle={(value) => {
                        setFocusToggle(!focusToggle);
                        setUserDetails({
                          ...userDetails,
                          focus: focusToggle,
                        });
                      }}
                    />
                  </div>
                </div>
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
