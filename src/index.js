import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Welcome from './Welcome';
import StudentSignup from './StudentSignup';
import TeacherSignup from './TeacherSignup'
import Review from './Review';  
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/welcome" element={<Welcome />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/teacher_signup" element={<TeacherSignup />}/>
      <Route path="/student_signup" element={<StudentSignup />}/>
      <Route path="/review" element={<Review />}/>
    </Routes>
  </BrowserRouter>    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
