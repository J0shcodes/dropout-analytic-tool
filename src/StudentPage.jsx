import Layout from "./shared/Layout";
import MainHeader from "./shared/MainHeader";
import Button from "./shared/Button";
import Review from "./Review";
import classes from "./styles/StudentPage.module.css";
import { useState } from "react";

const App = () => {
  const [values, setValues] = useState({
    age: "",
    grade: "grade-10",
    ageConfirm: "",
    schoolDistanceInKm: 3,
    schoolMotivation: "",
    guardian: "Parents",
    schoolSafety: "",
    schoolBulling: "",
    parentAffordability: 2,
    haveBoyfriend: "",
    sex: "",
    contraceptives: "",
    proneToIllness: "",
    performance: 3,
    schoolPerformance: "",
    disability: "",
    takeDrugs: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [reviewData, setReviewData] = useState({
    show: false,
    review: null,
  });

  const handleRemoveReview = () => {
    setReviewData({ review: null, show: false });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = document.cookie.split("=")[1];
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);
    const body = JSON.stringify(values);

    try {
      setStatus((prev) => ({ ...prev, loading: true, error: null }));
      setReviewData({ review: null, show: false });

      const request = await fetch(
        `https://drop-out-analytic-api.herokuapp.com/api/v1/status`,
        {
          method: "POST",
          headers,
          body,
        }
      );
      const response = await request.json();
      setReviewData({ review: response.data.status, show: true });
    } catch (error) {
      console.log(error);
      setReviewData({ review: null, show: false });
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <>
      <MainHeader />
      <Layout>
        <div className={classes.student_page}>
          <p className={classes.text}>
            The web-based Big Data analytics tool is designed for girls in high
            schools across the Eastern Cape province with the ultimate goal of
            connecting the capabilities of Big Data in order to predict the
            likelihood of dropout encountered as a result of the Covid-19
            pandemic.
          </p>
          <div className={classes.review_form}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={`${classes.form__control} ${classes.age}`}>
                <label htmlFor="age">Age</label>
                <div>
                  <input
                    id="age"
                    type="text"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.grade}`}>
                <label htmlFor="grade">Current Grade</label>
                <div>
                  <select
                    name="grade"
                    id="grade"
                    className={classes.select}
                    value={values.grade}
                    onChange={handleChange}
                  >
                    <option value="grade-8">grade-8</option>
                    <option value="grade-9">grade-9</option>
                    <option value="grade-10">grade-10</option>
                    <option value="grade-11">grade-11</option>
                    <option value="grade-12">grade-12</option>
                  </select>
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.ageMatch}`}>
                <p>
                  Do you think your age matches the current grade you are in?
                </p>
                <div className={`${classes.radio__flex}`}>
                  <div>
                    <input
                      type="radio"
                      id="ageConfirm_positive"
                      name="ageConfirm"
                      value="true"
                      checked={values.ageConfirm === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="ageConfirm_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="ageConfirm_negative"
                      name="ageConfirm"
                      value="false"
                      checked={values.ageConfirm === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="ageConfirm_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.distance}`}>
                <p>Distance you travel to school</p>
                <div className={classes.range}>
                  <label htmlFor="range">
                    Using the line, show how far is your home to school
                  </label>
                  <div className={classes.range__div}>
                    <input
                      type="range"
                      id="range"
                      name="schoolDistanceInKm"
                      min={0}
                      max={10}
                      value={values.schoolDistanceInKm}
                      onChange={handleChange}
                    />
                    <span>10 Km</span>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you motivated to go to school?</p>
                <div className={`${classes.radio__flex}`}>
                  <div>
                    <input
                      type="radio"
                      id="school_positive"
                      name="schoolMotivation"
                      value="true"
                      onChange={handleChange}
                      checked={values.schoolMotivation === "true"}
                    />
                    <label htmlFor="school_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="school_negative"
                      name="schoolMotivation"
                      value="false"
                      onChange={handleChange}
                      checked={values.schoolMotivation === "false"}
                    />
                    <label htmlFor="school_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <label htmlFor="guardian">Who do you stay with?</label>
                <div>
                  <select
                    className={classes.select}
                    id="guardian"
                    value={values.guardian}
                    onChange={handleChange}
                    name="guardian"
                  >
                    <option disabled>-- Choose an option --</option>
                    <option>Parents</option>
                    <option>Uncle/Aunt</option>
                    <option>Alone</option>
                    <option>Grand Parents</option>
                    <option>Boyfriend</option>
                    <option>Only Siblings</option>
                  </select>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you feel safe at school?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="schoolSafety_positive"
                      name="schoolSafety"
                      value="true"
                      onChange={handleChange}
                      checked={values.schoolSafety === "true"}
                    />
                    <label htmlFor="schoolSafety_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="negative"
                      name="schoolSafety"
                      value="false"
                      onChange={handleChange}
                      checked={values.schoolSafety === "false"}
                    />
                    <label htmlFor="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Is there anyone who is bullying you?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="schoolBulling_positive"
                      name="schoolBulling"
                      value="true"
                      onChange={handleChange}
                      checked={values.schoolBulling === "true"}
                    />
                    <label htmlFor="schoolBulling_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="schoolBulling_negative"
                      name="schoolBulling"
                      value="false"
                      onChange={handleChange}
                      checked={values.schoolBulling === "false"}
                    />
                    <label htmlFor="schoolBulling_negative">No</label>
                  </div>
                </div>
              </div>

              <div
                className={`${classes.form__control} ${classes.parentAffordability}`}
              >
                <p>How would you rate the affordability of your Parents</p>
                <div className={classes.range}>
                  <label htmlFor="range">
                    <span>1</span> they cannot afford – <span>10</span> they can
                    afford anything I need (Stationery, school uniform, school
                    fees )
                  </label>
                  <div className={classes.range__div}>
                    <input
                      type="range"
                      id="range"
                      name="parentAffordability"
                      value={values.parentAffordability}
                      onChange={handleChange}
                      min={0}
                      max={10}
                    />
                    <span>10</span>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you have a boyfirend?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="haveBoyfriend_positive"
                      name="haveBoyfriend"
                      value="true"
                      checked={values.haveBoyfriend === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="haveBoyfriend_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="haveBoyfriend_negative"
                      name="haveBoyfriend"
                      value="false"
                      checked={values.haveBoyfriend === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="haveBoyfriend_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you and your boyfriend currently having sex?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="sex_positive"
                      name="sex"
                      value="true"
                      checked={values.sex === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="sex_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="sex_negative"
                      name="sex"
                      value="false"
                      checked={values.sex === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="sex_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you using any Contraceptives ? </p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="contraceptives_positive"
                      name="contraceptives"
                      value="true"
                      checked={values.contraceptives === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="contraceptives_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="contraceptives_negative"
                      name="contraceptives"
                      value="false"
                      checked={values.contraceptives === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="contraceptives_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you normally feel ill?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="proneToIllness_positive"
                      name="proneToIllness"
                      value="true"
                      checked={values.proneToIllness === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="proneToIllness_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="proneToIllness_negative"
                      name="proneToIllness"
                      value="false"
                      checked={values.proneToIllness === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="proneToIllness_negative">No</label>
                  </div>
                </div>
              </div>

              <div
                className={`${classes.form__control} ${classes.schoolPerformance}`}
              >
                <label htmlFor="schoolPerformance">
                  Is your current performance at school good?
                </label>
                <div className={`${classes.range} ${classes.form__flex}`}>
                  <input
                    type="range"
                    id="schoolPerformance"
                    name="performance"
                    value={values.performance}
                    onChange={(e) => {
                      handleChange(e);
                      let { value } = e.target;
                      setValues((prev) => ({
                        ...prev,
                        schoolPerformance:
                          value <= 4 ? "poor" : value <= 6 ? "average" : "good",
                      }));
                    }}
                    min={0}
                    max={10}
                  />
                  <div className={classes.range__output}>
                    <span>Poor</span>
                    <span>Average</span>
                    <span>Good</span>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you have any physical disability?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="disability_positive"
                      name="disability"
                      value="true"
                      checked={values.disability === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="disability_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="disability_negative"
                      name="disability"
                      value="false"
                      checked={values.disability === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="disability_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you take drugs, alcohol or smoke ?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input
                      type="radio"
                      id="takeDrugs_positive"
                      name="takeDrugs"
                      value="true"
                      checked={values.takeDrugs === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="takeDrugs_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="takeDrugs_negative"
                      name="takeDrugs"
                      value="false"
                      checked={values.takeDrugs === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="takeDrugs_negative">No</label>
                  </div>
                </div>
              </div>

              {/* <Button children="Check my status" /> */}
              <Button
                children={`${
                  status.loading ? "Submitting..." : "Check my status"
                }`}
                disabled={status.loading}
              />
            </form>
          </div>
        </div>
        {reviewData.show && (
          <Review
            review={reviewData.review}
            handleRemoveReview={handleRemoveReview}
          />
        )}
      </Layout>
    </>
  );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className={`${classes.form__control}`}>
  <p>Do you take drugs, alcohol or smoke ?</p>
  <div className={classes.range}>
    <label htmlFor="range">
      1 you hardly take – 10 you are always drinking/smoking
    </label>
    <input type="range" id="range" name="range" />
  </div>
</div>; */
}
