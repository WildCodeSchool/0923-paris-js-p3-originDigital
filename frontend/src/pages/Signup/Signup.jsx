import { useState, useNavigate } from "react";
import Header from "../../components/Header/Header";
import "./Signup.css";
import useOverview from "../../context/Overviewcontext";

function Signup() {
  const navigate = useNavigate();
  const [adminRegister] = useState(false);
  const { setIsAdmin } = useOverview();
  setIsAdmin(adminRegister);
  const isMobile = window.innerWidth < 1024;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            username,
            password,
          }),
        }
      );

      if (response.status === 201) {
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          <button
            className="signup_Button"
            type="button"
            onClick={handleSubmit}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
