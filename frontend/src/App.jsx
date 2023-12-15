import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
