import React, { useState, useEffect } from "react";
import "../App.css";
import { BiCloudRain } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
// import date from "date-and-time";
import fire from "./fire";
import { Popover, PopoverBody } from "reactstrap";
import ToggleButton from "react-toggle-button";
import { Tooltip } from "reactstrap";

function Home() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const togglee = () => setTooltipOpen(!tooltipOpen);

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
  const [todo, setTodo] = useState("");
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
  const [weatherData, setWeatherData] = useState("");
  // console.log(weatherData);
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
      // console.log(userDetails);
    }
  }, []);

  const handleSubTodo = () => {
    setFocusToggle(false);
    console.log("todo submit");
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

  useEffect(() => {
    const Api = () => {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=bfc873dcbfd97dce32a13927f3563bf9"
        )
        .then(function (response) {
          setWeatherData(response.data);
          // console.log(response.data);
        })
        .catch(function (error) {
          console.error(error.message);
        });
    };
    Api();
  }, []);
  console.log(weatherData);
  const Whetherfu = () => {
    if (login === "signIn") {
      return (
        <div
        // className="text-right"
        // style={{ color: "#fff", marginBottom: "111px" }}
        >
          <div>
            <h3>
              <Tooltip
                placement="right"
                isOpen={tooltipOpen}
                target="TooltipExample"
                toggle={togglee}
              >
                {weatherData.weather[0].description}
              </Tooltip>
              {/* <BiCloudRain style={{ fontSize: "44px" }} /> */}
              <img
                id="TooltipExample"
                src={
                  "http://openweathermap.org/img/w/" +
                  weatherData.weather[0].icon +
                  ".png"
                }
                alert=""
              />
              {Math.floor(weatherData.main.temp - 273.15)}
              <sup>&deg;c</sup>
            </h3>
          </div>
          <span>{weatherData.name}</span>
        </div>
      );
    }
  };
  // let valTodo = todo.todo;
  // console.log(valTodo.length);

  const focus = () => {
    return (
      <>
        <div className="text-center">
          <span className="focus">What is your main focus for today?</span>
        </div>
        <form onSubmit={handleSubTodo}>
          <div className="text-center">
            <input
              type="text"
              onChange={handleTodo}
              name="todo"
              className="in"
              required
            />
          </div>
        </form>

        {/* <div className="text-center mt-3">
          {todo.todo == " " ? (
            <button onClick={handleSubTodo} className="btn">
              Continue
            </button>
          ) : (
            []
          )}
        </div> */}
      </>
    );
  };

  const onClose = () => {
    setTodo("");
    setFocusToggle(true);
  };
  const handlelogout = () => {
    setInput("name");
  };
  const [leftsidebar, setLeftSideBar] = useState("general");
  const handleGeneral = () => {
    setLeftSideBar("general");
  };
  const handleQuestion = () => {
    setLeftSideBar("question");
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
            type="submit"
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
            {/* <div
              class="text-right"
              style={{ marginLeft: "auto", marginBottom: "0" }}
            >
              {weatherToggle === true ? Whetherfu() : []}
            </div> */}

            <div class="clock">
              <span class="time"> {timeToggle === true ? dateTime : []}</span>
            </div>

            <div className="text-center">
              <span className="title">
                Good{" "}
                {
                  (dateTime > "16:00" ? "evening" : "afternoon",
                  dateTime > "20:00" ? "night" : "evening")
                }
                ,{userDetails.name}
              </span>
            </div>
            {focusToggle === true ? focus() : []}
            {focusToggle === false ? (
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
                <div className="container">
                  <div className="row">
                    <div
                      className="col-4"
                      style={{ borderRight: "1px solid #000" }}
                    >
                      <div>
                        <h5 onClick={handleGeneral} className="bar">
                          General
                        </h5>
                      </div>
                      <div>
                        <h5 onClick={handleQuestion} className="bar">
                          Question
                        </h5>
                      </div>
                    </div>
                    <div className="col-6">
                      {leftsidebar === "general" ? (
                        <div>
                          <div>
                            <h4>General</h4>
                          </div>
                          <div>
                            <span> Customize your dashboard</span>
                          </div>
                          <div className="row mt-3">
                            <div className="col-8">Weather : </div>
                            <div className="col-4 ">
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
                            <div className="col-8">Time : </div>
                            <div className="col-4">
                              <ToggleButton
                                value={timeToggle || false}
                                onToggle={(value) => {
                                  setTimeToggle(!timeToggle);
                                  setUserDetails({
                                    ...userDetails,
                                    time: timeToggle,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-8">Question : </div>
                            <div className="col-4">
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
                        </div>
                      ) : (
                        []
                      )}
                      {leftsidebar === "question" ? (
                        <div>
                          <div>
                            <h5>Question </h5>
                          </div>
                          <div>* {todo.todo}</div>
                        </div>
                      ) : (
                        []
                      )}
                    </div>
                  </div>
                </div>
                {/* <div>Name:{data.user.displayName}</div> */}
                <div>Name:{userDetails.name}</div>
                <div>Email:{data.user.email}</div>

                {/* <div
                  onClick={handeShowTodo}
                  className="text-center border"
                  style={{ margin: "10px", cursor: "pointer" }}
                >
                  Todo
                </div> */}
                {/* <div>{fetch()}</div> */}

                <div className="container">
                  <div
                    className="text-center border mt-3 logout"
                    onClick={handlelogout}
                  >
                    <span>Logout</span>
                  </div>
                </div>
              </PopoverBody>
            </Popover>
            {/* <div style={{ marginRight: "auto", marginBottom: "0" }}>
              <FiSettings
                id="Popover1"
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="text-center" style={{ color: "#fff" }}>
              "When you're curious,you find lots of interesting thing to do."
            </div> */}
          </div>
        );
      }
    }
  };

  return (
    <div className=" main">
      <div className="col-sm-12 col-xm-12 hd">
        {input === "dashboard" ? (
          <div>
            {login === "signIn" ? (
              <div
                class="weather"
                // style={{ marginLeft: "auto", marginBottom: "0" }}
              >
                {weatherToggle === true ? Whetherfu() : []}
              </div>
            ) : (
              []
            )}
          </div>
        ) : (
          []
        )}
      </div>

      <div className="col-sm-12 col-xm-12 mid ">{Display()}</div>

      <div className="col-sm-12 col-xm-12 footer">
        {input === "dashboard" ? (
          <div>
            {login === "signIn" ? (
              <>
                <div style={{ marginRight: "auto", marginBottom: "0" }}>
                  <FiSettings
                    id="Popover1"
                    style={{
                      fontSize: "25px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="text-center" style={{ color: "#fff" }}>
                  "So many of our dreams at first seem impossible. Then they
                  seem improbable. And then, when we summon the will, they soon
                  become inevitable."
                </div>
              </>
            ) : (
              []
            )}
          </div>
        ) : (
          []
        )}
      </div>
    </div>
  );
}

export default Home;
