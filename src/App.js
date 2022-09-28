import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import alertContext from "./context/alert/alertContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const {showAlert} = useContext(alertContext);
  const updateModes = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Dark Mode Disabled");
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#050f47";
      document.body.style.color = "#fff";
      showAlert("Dark Mode Enabled");
    }
  };
  return (
    <div className="App">
        <Navbar
          brandName="KB-TextUtils"
          darkMode={darkMode}
          updateModes={updateModes}
        />
        <Alert darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
    </div>
  );
}

export default App;
