import { useState } from "react";
import Header from "../../components/Header/Header";
import "./Signup.css";
import useOverview from "../../context/Overviewcontext";

function Signup() {
  const [adminRegister] = useState(true);
  const { setIsAdmin } = useOverview();
  setIsAdmin(adminRegister);

  return (
    <section className="container_Body_Signup">
      <Header />
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
              id="email"
              placeholder="Email"
              pattern=".+@example\.com"
              required
            />
          </div>
          <div className="container_User">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="container_Pass">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass_Sign"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div className="container_But_Signup">
          <button className="signup_Button" type="button">
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
