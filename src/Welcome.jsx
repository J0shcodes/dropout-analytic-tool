import {useState} from 'react';

import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/Welcome.module.css";
import Button from "./shared/Button";
import { parseJwt } from './middlewares/parseJWT';

import {useNavigate} from "react-router-dom"

const Welcome = () => {

  const getCookie = () => {
    const cookieName = "user";
  
    const cookieArr = document.cookie.split(";");
  
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
  
      if (cookieName === cookiePair[0].trim()) {
        return cookiePair[1];
      } else {
        return "";
      }
    }
  };
  
  const userToken = getCookie();

  const navigate = useNavigate();

  if(userToken !== '') {
    const userData = parseJwt(userToken);
    if(userData.role === 'user') navigate('/student_page');
    if(userData.role === 'teacher') navigate('/teacher_table');
  }

  const [selectedOption, setSelectedOption] = useState('')
  

  const handleChange = e => {
    setSelectedOption(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    
    if(selectedOption === 'Student') navigate('/student_signup');
    if(selectedOption === 'Teacher') navigate('/teacher_signup');
  }

  return (
    <>
      <AuthHeader />
      <Layout>
        <div className={classes.welcome}>
          <h1>Welcome</h1>
          <p className={classes.question}>
            Already have an account? <Link to="/teacher_login" className={classes.link} style={{color: "#170C37"}}>Teacher</Link> | <Link to="/student_login" className={classes.link}>Student</Link>
          </p>
          <div className={classes.form}>
            <form onSubmit={handleSubmit}>
              <p className={classes.category}>What category do you classify as?</p>
              <div>
                <div style={{marginTop: "0.4em"}}>
                  <input
                    type="radio"
                    id="category1"
                    name="category"
                    value="Student"
                    onChange={handleChange}
                  />
                  <label htmlFor="category1">Student</label>
                </div>
                <div style={{marginTop: "0.4em"}}>
                  <input
                    type="radio"
                    id="category2"
                    name="category"
                    value="Teacher"
                    onChange={handleChange}
                  />
                  <label htmlFor="category2">Teacher</label>
                </div>
              </div>
              <Button type="submit" children="Sign up"/>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Welcome;
