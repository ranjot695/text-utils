import "./App.css";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import SignIn from "./components/SignIn";
// import Demo from "./components/Demo";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // function changeColor() {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#052805";
  //     showAlert("dark mode enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("light mode enabled ", "success");
  //   }
  // }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  function toggleButton() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled ", "success");
    }
  }

  return (
    <>
      <Router>
        <div>
          <NavBar
            link="AboutUs"
            mode={mode}
            toggleButton={toggleButton}
            // changeColor={changeColor}
          />
          <Alert alert={alert} />
          {/* <TextForms
            showAlert={showAlert}
            heading="enter your text here"
            mode={mode}
          /> */}

          <div class="container">
            <Routes>
              <Route exact path="/About" element={<AboutUs />}></Route>
              <Route
                exact
                path="/"
                element={<TextForms heading="Enter text" mode={mode} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
