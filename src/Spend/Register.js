import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class cred {
  email;
  username;
  password;
  constructor(email = "", username = "", password = "") {
    this.username = username;
    this.password = password;
  }
}

export default function Register() {
  const [credentials, setCredetials] = useState(new cred());

  const HandleCred = (e) => {
    setCredetials({
      ...credentials,
      [e.target.id]: [e.target.value],
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setCredetials({ username: "", password: "" });
    const { username, password } = credentials;
    alert(`${username} password ${password}`);
    console.log(`${username}`);
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div className="LoginForm">
          <input
            type="email"
            placeholder="email"
            value={credentials.email}
            onChange={HandleCred}
          />
          <input
            type="text"
            placeholder="username"
            value={credentials.username}
            onChange={HandleCred}
            id="username"
          />
          <input
            type="password"
            placeholder="password"
            value={credentials.password}
            onChange={HandleCred}
            id="password"
          />
          <button>Register</button>
        </div>
        <div className="u-footer">
          Already have account ? <br />
          <Link to="/user">Login here</Link>
        </div>
      </form>
    </div>
  );
}
