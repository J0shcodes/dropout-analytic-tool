import Layout from "./shared/Layout";
import classes from "./styles/Review.module.css";

const Review = ({ review, handleRemoveReview }) => {
  let { age, grade, guardian, parentAffordability, sex, contraceptives } =
    review;
  let ageMessage = "";

  if (
    (grade === "grade-8" && age > 15) ||
    (grade === "grade-9" && age > 16) ||
    (grade === "grade-10" && age > 17) ||
    (grade === "grade-11" && age > 18) ||
    (grade === "grade-12" && age > 19)
  ) {
    ageMessage = "Your age is above the grade you are in currently.";
  } else {
    ageMessage = "Your age is okay for the grade you are in currently.";
  }

  let moneyMsg = `Your financial status is ${
    parentAffordability > 5 ? "good" : "not good"
  }`;
  let guardianRegex = /(Alone|Boyfriend|Only Sublings)/i;
  let guardianMsg = guardianRegex.test(guardian)
    ? "You are currently not staying with any adult"
    : "You are currently staying with an adult";

  let pregnantMsg = !sex
    ? "You are not sexually active"
    : contraceptives
    ? "You are currently sexually active but might not get pregnant cause you're using contraceptives"
    : "You are currently sexually active and not using protection, you are likely to fall pregnant";

  // "LOW" : "HIGH"
  // let lowOrHigh = "";

  return (
    <Layout>
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
          Don't let this negative report de-motivate you. There is help
          available
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <button className={classes.more}>Tell me more</button> */}
          <button className={classes.exit} onClick={handleRemoveReview}>
            Close and Exist
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
