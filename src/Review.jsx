import { useNavigate } from "react-router-dom";
import Layout from "./shared/Layout";
import classes from "./styles/Review.module.css";

const Review = ({ review, handleRemoveReview }) => {
  let navigate = useNavigate();
  let {
    age,
    grade,
    guardian,
    parentAffordability,
    sex,
    contraceptives,
    haveBoyfriend,
  } = review;
  let ageMessage = "";
  let high = 0,
    low = 0;

  if (
    (grade === "grade-8" && age > 15) ||
    (grade === "grade-9" && age > 16) ||
    (grade === "grade-10" && age > 17) ||
    (grade === "grade-11" && age > 18) ||
    (grade === "grade-12" && age > 19)
  ) {
    ageMessage = "Your age is above the grade you are in currently.";
    high += 1;
  } else {
    ageMessage = "Your age is okay for the grade you are in currently.";
    low += 1;
  }

  let moneyMsg = `Your financial status is ${
    parentAffordability > 5 ? "good" : "not good"
  }`;
  if (moneyMsg === "Your financial status is not good") {
    high += 1;
  } else {
    low += 1;
  }
  let guardianRegex = /(Alone|Boyfriend|Only Sublings)/i;
  let guardianMsg = guardianRegex.test(guardian)
    ? "You are currently not staying with any adult"
    : "You are currently staying with an adult";
  if (guardianMsg === "You are currently staying with an adult") {
    low += 1;
  } else {
    high += 1;
  }

  let pregnantMsg = !sex
    ? "You are not sexually active"
    : contraceptives
    ? "You are currently sexually active but might not get pregnant cause you're using contraceptives"
    : "You are currently sexually active and not using protection, you are likely to fall pregnant";
  if (pregnantMsg === "You are not sexually active") {
    low += 1;
  } else {
    high += 1;
  }

  if (haveBoyfriend) {
    high += 1;
  }

  if (sex) {
    high = low + 1;
  }

  return (
    <Layout>
      <div className={classes.modal}>
        Your result indicates that you are at a [{high > low ? "HIGH" : "LOW"}]
        risk of dropping out
      </div>
      <div className={classes.review}>
        <h1>My Status Review</h1>
        <div className={classes.review_details}>
          <section className={classes.age}>
            <h2>Age</h2>
            <p>{ageMessage}</p>
          </section>
          <section className={classes.money}>
            <h2>Money</h2>
            <p>{moneyMsg}</p>
          </section>
          <section className={classes.home}>
            <h2>Home</h2>
            <p>{guardianMsg}</p>
          </section>
          <section className={classes.sex}>
            <h2>Sex</h2>
            <p>{pregnantMsg}</p>
          </section>
        </div>
        <div className={classes.encourage}>
          {high > low
            ? "Don't let this negative report de-motivate you. There is help available."
            : "Your report shows a positive result. Thank you."}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className={classes.exit}
            onClick={() => {
              handleRemoveReview();
              navigate("/");
            }}
          >
            Close and Exist
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
