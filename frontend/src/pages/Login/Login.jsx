import { Icon } from "@iconify/react";
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import "./Login.css";

function Login() {
  return (
    <>
      <main className="container_body">
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
        <div className="text_title_log">
          <h1 className="title_log">LOG IN</h1>
          <p id="text_log">Hey! Welcome back!</p>
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
          <a className="link_log" href="www.google.com">
            Forgot your password?{" "}
          </a>
        </div>
        <div className="container_butsignup">
          <button className="signup_button" type="button">
            LOG IN
          </button>
          <p className="text_log_end">Don’t have an account yet?</p>
          <button className="signup_end" type="button">
            Sign up
          </button>
        </div>
      </main>
      <Navbar />
    </>
  );
}

export default Login;
