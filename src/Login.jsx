import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/Login.module.css";
import { Link } from "react-router-dom";
import Button from "./shared/Button";

const Login = () => {
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
            <form action="">
                <div className={classes.username}>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Janedoe"/>  
                </div>              
                <div className={classes.password}>
                    <label for="password">Password</label>
                    <input type="password" id="password"/>  
                </div>
              <Button children="Login"/>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
