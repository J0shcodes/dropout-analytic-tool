import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/Welcome.module.css";
import Button from "./shared/Button";

const Welcome = () => {
  return (
    <>
      <AuthHeader />
      <Layout>
        <div className={classes.welcome}>
          <h1>Welcome</h1>
          <p className={classes.question}>
            Already have an account? <Link to="/login" className={classes.link}>Login</Link>
          </p>
          <div className={classes.form}>
            <form action="">
              <p className={classes.category}>What category do you classify as?</p>
              <div>
                <div style={{marginTop: "0.4em"}}>
                  <input
                    type="radio"
                    id="userchoice1"
                    name="student"
                    value="student"
                  />
                  <label for="userchoice1">Student</label>
                </div>
                <div style={{marginTop: "0.4em"}}>
                  <input
                    type="radio"
                    id="userchoice2"
                    name="teacher"
                    value="teacher"
                  />
                  <label for="userchoice21">Teacher</label>
                </div>
              </div>
              <Button children="Sign up"/>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Welcome;
