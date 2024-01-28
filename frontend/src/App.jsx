import { Outlet } from "react-router-dom";
import { OverviewProvider } from "./context/Overviewcontext";
import { SelectedUserProvider } from "./context/SelectedUserContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <SelectedUserProvider>
      <AuthProvider>
        <OverviewProvider>
          <div className="main">
            <Outlet />
          </div>
          <div id="footer">
            <Navbar />
          </div>
        </OverviewProvider>
      </AuthProvider>
    </SelectedUserProvider>
  );
}

export default App;
