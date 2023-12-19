import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./ForgotPassword.css";

function ForgotPassword() {
  const Navigate = useNavigate();

  return (
    <>
      <div className="container_Logo">
        <img id="logo_sign" src="src/assets/logoprin.png" alt="" />
        <Header />
        <Icon
          id="icon_sign"
          icon="ph:user-circle-thin"
          color="#f3f3e6"
          width="90"
          height="90"
          onClick={() => {
            Navigate("/usersprofile/:id");
          }}
        />
      </div>
      <div className="text_Forgot">
        <p id="text_Oups">OUPS</p>
        <p id="text_Oups2">We’ll send you a link to reset your password</p>
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
      <div className="container_butsignup">
        <button className="signup_button" type="button">
          RESET
        </button>
      </div>
    </>
  );
}

export default ForgotPassword;
