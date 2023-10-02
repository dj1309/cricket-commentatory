import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // add this line to import Bootstrap CSS
import { Link } from "react-router-dom";
import './Addmatches.css';

function Index1() {
    return (
       <body>
        <div className="login-container text-center">
    <div className='formBody'>
     <h1><u>CRICKMITE</u></h1>
     <h6>I Am an </h6>
      <Link to="/Organizermain.html">
        <button type="button" className="btn btn-primary">ORGANIZER</button>
      </Link>
      <p>I Am an</p>
      <Link to="/Main.html">
        <button type="button" className="btn btn-primary">USER</button>
      </Link>
      </div>


          </div></body>
      );
    }
export default Index1;