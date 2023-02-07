import { Link } from "react-router-dom";
import google from "../assets/images/google.png";

import { useState } from "react";

import "../styles/login.css";
import { useContext } from "react";

// import akshayLok from "../../assets/img/AkshayLok.png";

function Login() {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <div className="login">
      {/* <Navbar login={false} /> */}
      <div className="img">
        {/* <img src={google} alt="logo" /> */}
        <h3>
          <span className="h3Span" >Distributing Energy</span>
          <span>Empowering People</span>
        </h3>
      </div>
      <main class="main">
        <div class="container">
          <section class="wrapper">
            <div class="heading">
              <h1 class="text text-large">Sign In</h1>
              <p class="text text-normal">
                New user?{" "}
                <span>
                  <Link to="/signup" class="text text-links">
                    Create an account
                  </Link>
                </span>
              </p>
            </div>
            <form name="signin" class="form">
              <div class="input-control">
                <label for="email" class="input-label" hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input-field"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="input-control">
                <label for="password" class="input-label" hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="input-field"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="input-control">
                <a href="#" class="text text-links">
                  Forgot Password
                </a>
                <input
                  type="submit"
                  name="submit"
                  class="input-submit"
                  value="Sign In"
                  // disabled
                />
              </div>
            </form>
            <div class="striped">
              <span class="striped-line"></span>
              <span class="striped-text">Or</span>
              <span class="striped-line"></span>
            </div>

            <div className="button">
              <button
              >
                <img src={google} alt="" />
                <span>Google</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;