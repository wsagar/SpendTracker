import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DispatchContext, StateContext } from "../Context";
import { Actions } from "../action";
import "./Login.css";
import Register from "./Register";

class cred {
  username;
  password;
  constructor(username = "", password = "") {
    this.username = username;
    this.password = password;
  }
}

export default function Login() {
  const [credentials, setCredetials] = useState(new cred());
  const { actions } = useContext(StateContext);

  useEffect(() => {
    if (actions.user == Actions.SUCCESS) {
      navigate("trades");
    }
  }, [actions]);

  // const [submitted, setSubmit] = useState(false);
  const navigate = useNavigate();
  const HandleCred = (e) => {
    setCredetials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };
  const dispatch = useContext(DispatchContext);
  const validateUser = async () => {
    //axis api call
    dispatch({
      type: Actions.LOGIN,
    });
    const data = await axios.post("http://localhost:5000/validate-user", {
      username: credentials.username,
      password: credentials.password,
    });
    if (data.status === 200) {
      navigate("/trade");
      dispatch({
        type: Actions.LOGIN_SUCCESS,
        payload: data.data.token,
      });
    } else {
      alert(data.data.error);
      dispatch({
        type: Actions.LOGIN_ERROR,
      });
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    // setSubmit(true);
    setCredetials({ username: "", password: "" });
    const { username, password } = credentials;
    console.log(`${username}`);

    //API call, wait for response
    //validateUser();
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div className="LoginForm">
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
          <button>Login</button>
        </div>
        <div className="u-footer">
          <label>
            New to Spend tracker ? <br />
            Click here to create &nbsp;
            <Link to="/user/register" element={<Register />}>
              Register here
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}
