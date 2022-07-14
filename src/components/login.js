import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="content">
      <h2>Login</h2>
      <br />
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
