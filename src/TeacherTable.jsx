// import GeneralNav from "./shared/GeneralNav";
import Layout from "./shared/Layout";
import classes from "./styles/TeacherTable.module.css";

const TeacherTable = () => {
  
  const theading = ["Name", "Student Status"];
  const tbody = Array.from({ length: 10 }, (x) => ({ name: "", status: "" }));
  tbody[0].name = "Divine";
  tbody[0].status =
    "Your results indicate that you are at a [HIGH] risk drop out";

  return (
    <>
      {/* <GeneralNav /> */}
      <Layout>
        <section className={classes.cont}>
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr>
                {theading.map((head) => (
                  <th key={head}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {tbody.map(({ name, status }, i) => (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
};

export default TeacherTable;
