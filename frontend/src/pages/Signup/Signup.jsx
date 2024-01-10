import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Signup.css";
import useOverview from "../../context/Overviewcontext";

function Signup() {
  const [adminRegister] = useState(false);
  const { setIsAdmin } = useOverview();
  setIsAdmin(adminRegister);
  const Navigate = useNavigate();
  const isMobile = window.innerWidth < 1024;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="container_Body_Signup">
      {isMobile ? (
        <div className="container_Header_Sign">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Sign">
        <div className="text_Title_Sign">
          <h1 className="title_Signup">SIGN UP</h1>
          <p id="join_Us">Join us!</p>
        </div>
        <div className="container_Input_Sign">
          <div className="container_Email">
            <p id="text_Sign">Email</p>
            <input
              type="email"
              id="email_Sign"
              placeholder="Email"
              pattern=".+@example\.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="container_User">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username_Sign"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="container_Pass">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass_Sign"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="container_But_Signup">
          <button className="signup_Button" type="button">
            SIGN UP
          </button>
          <p className="text_Log_End">Don’t have an account yet?</p>
          <button
            className="signup_End_Log"
            type="button"
            onClick={() => Navigate("/signup")}
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
