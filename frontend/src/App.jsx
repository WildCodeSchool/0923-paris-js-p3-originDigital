import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Outlet />
      </div>
      <div id="footer">
        <Navbar />
      </div>
    </>
  );
}

export default App;
