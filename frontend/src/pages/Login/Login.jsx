import Header from "../../components/Header/Header";

import "./Login.css";

function Login() {
  const isMobile = window.innerWidth < 1024;
  return (
    <section className="container_Body_Header">
      {isMobile ? (
        <div className="container_Header_Log">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Log">
        <div className="text_Title_Log">
          <h1 className="title_Log">LOG IN</h1>
          <p id="text_Log">Hey! Welcome back!</p>
        </div>
        <div className="container_Input_Log">
          <div className="container_Username_Log">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username_Login"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="container_Password">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass_Log"
              placeholder="Password"
              name="password"
            />
            <a className="link_Log" href="www.google.com">
              Forgot your password?{" "}
            </a>
          </div>
          <div className="container_But_Log">
            <button className="signup_Button_Log" type="button">
              LOG IN
            </button>
            <p className="text_Log_End">Don’t have an account yet?</p>
            <button className="signup_End_Log" type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
