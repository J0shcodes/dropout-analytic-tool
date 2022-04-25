import { useState } from "react";

import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/Login.module.css";
import { Link } from "react-router-dom";
import Button from "./shared/Button";

// import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setValidLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')

  // const teacherLoginEndPoint = 'https://drop-out-analytic-api.herokuapp.com/api/v1/users/teacherLogin';
  const studentLoginEndPoint = 'https://drop-out-analytic-api.herokuapp.com/api/v1/users/login'

  // const [user, setUser] = useState();

  // if (user) {
  //   console.log("User loggedin");
  // } else {
  //   console.log("User not logged in");
  // }

  const handleLoginData = (e) => {
    const { name, value } = e.target;

    if(name === 'username') setUsername(value);
    if(name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userLoginData = {
      "username": username,
      "password": password
    }

    fetch(studentLoginEndPoint, {
      method: "POST",
      body: JSON.stringify(userLoginData),
      mode: "cors",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status === 200) {
        console.log(response.json);
        return response.json
      } else {
        setValidLogin(false);
        const errorInfo = "Invalid username or password";
        throw errorInfo;
      }
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      setErrorMessage(error)
    })
  };

  return (
    <>
      <AuthHeader />
      <Layout>
        <div className={classes.login}>
          <h1>Login</h1>
          <p className={classes.question}>
            New user? <Link to="/welcome" className={classes.link}>Sign Up</Link>
          </p>
          <div>
            {!validLogin ? (
              <p style={{color: "red"}}>{errorMessage}</p>
            ) : null}
            <form action="" id="loginform" onSubmit={handleSubmit}>
              <div className={classes.username}>
                <label htmlFor="username">Username</label>
                <input
                  onChange={handleLoginData}
                  type="text"
                  id="username"
                  placeholder="Janedoe"
                  value={username}
                  name="username"
                />
              </div>
              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleLoginData}
                  type="password"
                  id="password"
                  value={password}
                  name="password"                  
                />
              </div>
              <Button type="submit" children="Login" />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
