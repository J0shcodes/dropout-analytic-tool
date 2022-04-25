import {Link} from "react-router-dom";
import Button from "./shared/Button";
import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader"; 
import classes from "./styles/TeacherSignup.module.css";

const TeacherSignup = () => {
    return (
      <>
        <AuthHeader />
        <Layout>
          <div className={classes.signup}>
            <h1>Sign Up</h1>
            <p className={classes.question}>
              Already have an account? <Link to="/login" className={classes.link}>Login</Link>
            </p>
            <div>
              <form action="">
                <div className={classes.username}>
                  <label for="username">Username</label>
                  <input type="text" id="username" placeholder="divine" />
                </div>

                <div className={classes.firstname}>
                  <label for="firstname">First Name</label>
                  <input type="text" id="firstname" placeholder="Divine" />
                </div>

                <div className={classes.surname}>
                  <label for="surname">Surname</label>
                  <input type="text" id="surname" placeholder="Olusanya" />
                </div>

                <div className={classes.password}>
                  <label for="password">Password</label>
                  <input type="password" id="password" />
                </div>

                <div className={classes.password}>
                  <label for="confirmpassword">Confirm Password</label>
                  <input type="password" id="confirmpassword" />
                </div>
                
                <div className={classes.age_gender}>
                  <div className={classes.age}>
                      <label for="age">Age</label>
                      <input type="text" id="age" placeholder="20" />
                  </div>
                  <div className={classes.gender}>
                      <label for="gender">Gender</label>
                      <select id="gender">
                          <option>male</option>
                          <option>female</option>
                      </select>
                  </div>
                </div>

                <div className={classes.school}>
                    <label for="school">School</label>
                    <input type="text" id="school" placeholder="$$$" />
                </div>

                <Button children="Sign Up" />
              </form>
            </div>
          </div>
        </Layout>
      </>
    );
  };

export default TeacherSignup;