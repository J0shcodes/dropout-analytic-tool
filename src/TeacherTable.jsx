import { useState, useEffect } from "react";
import Layout from "./shared/Layout";
import classes from "./styles/TeacherTable.module.css";
import { getCookie } from "./middlewares/getCookie";

import { useNavigate } from "react-router-dom";

const TeacherTable = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userToken = getCookie();

    if(userToken === '') {
      navigate('/')
    }
  })

  const userToken = getCookie();   

  const [errorMessage, setErrorMessage] = useState('');
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    fetch('https://drop-out-analytic-api.herokuapp.com/api/v1/status', {
    method: 'GET',
    headers: {"Authorization": `Bearer ${userToken}`}
    })
    .then(response => {
      if(response.status === 200) {
        return response.json()
      } else {
        const error = "Something went wrong while trying to retrive students data"
        throw error
      }
    })
    .then(data => {
      const studentStatusData = data.data
      const newStudentData = studentStatusData.statuses.filter(({user}) => user)
      setStatusData(newStudentData);
    })
    .catch(error => {
      setErrorMessage(error);
    })
  
  }, [userToken])
  
  const theading = ["Name", "School", "Student Status"];
  const tbody = Array.from({ length: 10 }, (x) => ({ name: "", school: "", status: "" }));
  tbody[0].name = "Divine"; 
  tbody[0].school = "Little Flower"
  tbody[0].status =
    "Your results indicate that you are at a [HIGH] risk drop out";

  return (
    <>
      <Layout>
        {errorMessage ? (
          <p style={{color: "red", marginTop: '1em', textAlign: 'center'}}>{errorMessage}</p>
        ) : null}
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
              {statusData.length !== 0 ? statusData.map(status => (
                <tr key={status.id}>
                  <td>{status.user.firstname}</td>
                  <td>{status.user.school}</td>
                  <td>{status.risk}</td>
                </tr>
              )) : 
                <tr>
                  <td>Student name not available</td>   
                  <td>Student school not available</td>    
                  <td>Student status result not available</td>      
                </tr>
              }
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
};

export default TeacherTable;
