import { Outlet } from "react-router-dom";
import { OverviewProvider } from "./context/Overviewcontext";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <OverviewProvider>
      <div className="main">
        <Outlet />
      </div>
      <div id="footer">
        <Navbar />
      </div>
    </OverviewProvider>
  );
}

export default App;
