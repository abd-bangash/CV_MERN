import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Info from "./Info.jsx";
import Projects from "./Projects.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Info></Info>
      <Projects></Projects>
    </>
  );
}

export default App;
