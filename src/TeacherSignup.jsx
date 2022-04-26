import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Layout from "./shared/Layout";
import AuthHeader from "./shared/AuthHeader";
import classes from "./styles/TeacherSignup.module.css";


const TeacherSignup = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [school, setSchool] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") setUsername(value);
    if (name === "firstname") setFirstname(value);
    if (name === "surname") setSurname(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "age") setAge(value);
    if (name === "gender") setGender(value);
    if (name === "school") setSchool(value);

    if (password.length < 8) {
      setPasswordError("Password characters must not be less than 8");
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const teacherSignupData = {
      "username": username,
      "firstname": firstname,
      "surname": surname,
      "password": password,
      "passwordConfirm": confirmPassword,
      "age": age,
      "gender": gender,
      "school": school,
    }

    const studentSignupURL =
      "https://drop-out-analytic-api.herokuapp.com/api/v1/users/teacherSignup";

    fetch(studentSignupURL, {
      method: "POST",
      body: JSON.stringify(teacherSignupData),
      mode: "cors",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "same-origin",
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          const errorInfo = "Something went wrong please try again";
          throw errorInfo;
          
        }
      })
      .then((data) => {
        const token = data.token;
        const key = 'user';
        const value = encodeURIComponent(token);
        document.cookie = `${key}=${value};path=/`;        
        navigate('/teacher_table');
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
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
          {errorMessage ? (
              <p style={{color: "red"}}>{errorMessage}</p>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className={classes.username}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="username"
                  placeholder="divine"
                  name="username"
                  value={username}
                  required
                />
              </div>

              <div className={classes.firstname}>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="firstname"
                  placeholder="Divine"
                  name="firstname"
                  value={firstname}
                  required
                />
              </div>

              <div className={classes.surname}>
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="surname"
                  placeholder="Olusanya"
                  name="surname"
                  value={surname}
                  required
                />
              </div>

              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  required
                />
                {passwordError ? (
                  <p style={{ color: "red", fontSize: "14px", marginTop: "0" }}>
                    {passwordError}
                  </p>
                ) : null}
              </div>

              <div className={classes.password}>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  onChange={handleChange}
                  id="confirmpassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                />
                {confirmPasswordError ? (
                  <p style={{ color: "red", fontSize: "14px", marginTop: "0" }}>
                    {confirmPasswordError}
                  </p>
                ) : null}
              </div>

              <div className={classes.age_gender}>
                <div className={classes.age}>
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    id="age"
                    placeholder="20"
                    name="age"
                    value={age}
                    required
                  />
                </div>
                <div className={classes.gender}>
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    onChange={handleChange}
                    name="gender"
                    value={gender}
                    required
                  >
                    <option>--- Select your gender ---</option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </div>
              </div>

              <div className={classes.school}>
                <label htmlFor="school">School</label>
                <select
                  id="school"
                  name="school"
                  onChange={handleChange}
                  value={school}
                >
                  <option>--- Select your school ---</option>
                  <option>Sinolwazi SSS</option>
                  <option>Tolweni SSS</option>
                  <option>Little flower SSS</option>
                  <option>Dalibaso</option>
                  <option>Jongintaba</option>
                  <option>Gxaba SS</option>
                  <option>Zanokhanyo</option>
                  <option>Vulindlela SSS</option>
                  <option>Victor Poto SSS</option>
                  <option>Cibeni SS</option>
                </select>
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
