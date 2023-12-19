import { useState } from "react";
import { Icon } from "@iconify/react";
import Header from "../../components/Header/Header";
import "./Signup.css";
import Navbar from "../../components/NavBar/Navbar";
import useOverview from "../../context/Overviewcontext";

function Signup() {
  const [adminRegister] = useState(true);
  const { setIsAdmin } = useOverview();
  setIsAdmin(adminRegister);

  return (
    <section className="container_body">
      <div className="container_logo">
        <img id="logo_sign" src="src/assets/logoprin.png" alt="" />
        <Header />
        <Icon
          id="icon_sign"
          icon="ph:user-circle-thin"
          color="#f3f3e6"
          width="90"
          height="90"
        />
      </div>
      <div className="text_title">
        <h1 className="title_signup">SIGN UP</h1>
        <p id="join_us">Join us!</p>
      </div>
      <div className="container_email">
        <p id="text_sign">Email</p>
        <input
          type="email"
          id="email"
          placeholder="Email"
          pattern=".+@example\.com"
          required
        />
      </div>
      <div className="container_username">
        <p id="text_user">Username</p>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className="container_password">
        <p id="text_pass">Password</p>
        <input
          type="password"
          id="pass"
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="container_butsignup">
        <button className="signup_button" type="button">
          SIGN UP
        </button>
      </div>
      <Navbar />
    </section>
  );
}

export default Signup;
