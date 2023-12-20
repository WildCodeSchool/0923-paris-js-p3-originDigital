import Header from "../../components/Header/Header";
import "./Login.css";

function Login() {
  return (
    <section className="container_Body_Header">
      <Header />
      <div className="container_Log">
        <div className="text_Title_Log">
          <h1 className="Title_Log">LOG IN</h1>
          <p id="text_Log">Hey! Welcome back!</p>
        </div>
        <div className="container_Input_Log">
          <div className="container_Username_Log">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="container_Password">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass"
              placeholder="Password"
              name="password"
            />
            <a className="link_Log" href="www.google.com">
              Forgot your password?{" "}
            </a>
          </div>
          <div className="container_But_Log">
            <button className="signup_Button" type="button">
              LOG IN
            </button>
            <p className="text_Log_End">Don’t have an account yet?</p>
            <button className="signup_End" type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
