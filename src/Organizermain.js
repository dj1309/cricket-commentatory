import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // add this line to import Bootstrap CSS
import { Link } from "react-router-dom";
import { formToJSON } from 'axios';


function Organizermain() {
  return (
  
    <div className="login-container text-center">
    <div className='formBody'>
     <h1><u>CRICKMITE</u></h1>
      <Link to="/Organizersignup.html">
        <button type="button" className="btn btn-primary">Sign Up as Organizer</button>
      </Link>
      <p>Already have an account?</p>
      <Link to="/Organizerlogin.html">
        <button type="button" className="btn btn-primary">Login</button>
      </Link>
      </div>
    </div>
  );
}

export default Organizermain;
