import Header from "../../components/Header/Header";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <Header />
      <section className="container_Forgot">
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
            RESET PASSWORD
          </button>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
