import React from 'react';
import './Addmatches.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // add this line to import Bootstrap CSS
import { Link } from "react-router-dom";
import { formToJSON } from 'axios';

function Main() {
  return (
    <form>
    <div className="login-container text-center">
    <div className='formBody'>
     <h1><u>CRICKMITE</u></h1>
      <Link to="/signupuser.html">
        <button type="button" className="btn btn-primary">Sign Up as user</button>
      </Link>
      <p>Already have an account?</p>
      <Link to="/login.html">
        <button type="button" className="btn btn-primary">Login</button>
      </Link>
      </div>
    </div></form>
  );
}

export default Main;
