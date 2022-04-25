import {useState} from 'react';

import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/Welcome.module.css";
import Button from "./shared/Button";

import {useNavigate} from "react-router-dom"

const Welcome = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate();

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
            Already have an account? <Link to="/login" className={classes.link}>Login</Link>
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
