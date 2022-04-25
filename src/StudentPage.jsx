import Layout from "./shared/Layout";
import MainHeader from "./shared/MainHeader";
import Button from "./shared/Button";
import Review from "./Review"
import classes from "./styles/StudentPage.module.css";


const App = () => {
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
            <form className={classes.form}>
              <div className={`${classes.form__control} ${classes.age}`}>
                <div>Age</div>
                <div>
                  <input type="text" />
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.grade}`}>
                <label>Current Grade</label>
                <div>
                  <select name="grade" id="grade" className={classes.select}>
                    <option value="primary-1">primary-1</option>
                    <option value="primary-2">primary-2</option>
                    <option value="primary-3">primary-3</option>
                    <option value="primary-4">primary-4</option>
                    <option value="primary-5">primary-5</option>
                    <option value="primary-6">primary-6</option>
                  </select>
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.ageMatch}`}>
                <p>
                  Do you think your age matches the current grade you are in?
                </p>
                <div className={`${classes.radio__flex}`}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="yes" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control} ${classes.distance}`}>
                <p>Distance you travel to school</p>
                <div className={classes.range}>
                  <label for="range">
                    Using the line, show how far is your home to school
                  </label>
                  <input type="range" id="range" name="range" />
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you motivated to go to school?</p>
                <div className={`${classes.radio__flex}`}>
                  <div>
                    <input
                      type="radio"
                      id="school_positive"
                      name="school"
                      value="yes"
                    />
                    <label for="school_positive">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="school_negative"
                      name="school"
                      value="no"
                    />
                    <label for="school_negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Who do you stay with?</p>
                <div>
                  <select className={classes.select}>
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
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Is there anyone who is bullying you?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>How would you rate the affordability of your Parents</p>
                <div className={classes.range}>
                  <label for="range">
                    1 they cannot afford – 10 they can afford anything I need
                    (Stationery, school uniform, school fees )
                  </label>
                  <input type="range" id="range" name="range" />
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you have a boyfirend?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you and your boyfriend currently having sex?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Are you using any Contraceptives ? </p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you normally feel ill?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Is your current performance at school good?</p>
                <div className={classes.range}>
                  <input type="range" />
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you have any physical disability?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you take drugs, alcohol or smoke ?</p>
                <div className={classes.radio__flex}>
                  <div>
                    <input type="radio" id="positive" name="yes" value="yes" />
                    <label for="positive">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="negative" name="no" value="no" />
                    <label for="negative">No</label>
                  </div>
                </div>
              </div>

              <div className={`${classes.form__control}`}>
                <p>Do you take drugs, alcohol or smoke ?</p>
                <div className={classes.range}>
                  <label for="range">
                    1 you hardly take – 10 you are always drinking/smoking
                  </label>
                  <input type="range" id="range" name="range" />
                </div>
              </div>

              <Button children="Check my status" />
            </form>
          </div>
        </div>
        <Review />
      </Layout>
    </>
  );
};

export default App;
