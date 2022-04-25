import Layout from "./shared/Layout";
import classes from "./styles/Review.module.css";

const Review = () => {
  return (
    <Layout>
      <div className={classes.review}>
        <h1>My Status Review</h1>
        <div className={classes.review_details}>
          <section className={classes.age}>
            <h2>Age</h2>
            <p>Your age is above the grade you are in currently</p>
          </section>
          <section className={classes.money}>
            <h2>Money</h2>
            <p>Your financial status is not good</p>
          </section>
          <section className={classes.home}>
            <h2>Home</h2>
            <p>You are currently not staying with any adult</p>
          </section>
          <section className={classes.sex}>
            <h2>Sex</h2>
            <p>
              You are currently sexually active and not using protection, you
              are likely to fall pregnant
            </p>
          </section>
        </div>
        <div className={classes.encourage}>
          Don't let this negative report de-motivate you. There is help
          available
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <button className={classes.more}>Tell me more</button>
          <button className={classes.exit}>Close and Exist</button>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
