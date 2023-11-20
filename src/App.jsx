import { Outlet } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
