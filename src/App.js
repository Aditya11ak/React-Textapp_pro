import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Formtext from "./Components/Formtext";
import Alert from "./Components/Alert";
import About from "./Components/About";

// For the react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // State for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    // this kind  of functions will run every time after the program is executed.related to it.
    // here for this it's alert
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="main">
      {/* react router */}
      <Router>
        <Navbar title="TextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Formtext alert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
