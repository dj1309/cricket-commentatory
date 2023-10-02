import 'bootstrap/dist/css/bootstrap.min.css';
import './Addmatches.css';
import React, { useState } from 'react';
import axios from 'axios';

function Organizerlogin() {

  const [loginObject, setLoginObject] = useState({
    "username": "",
    "password": ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    console.log("Name:",name, " Value:", value)
    setLoginObject({
      ...loginObject,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/login", loginObject)
    .then(data => {
      window.open("http://localhost:3000/AddTournament.html")
    })
    .catch((error) => {
      console.log(error)
      alert("Login failed")
    });
  }

  return (
    <div>
        <center><body>
            <div className="login-container">
              <h2>Welcome Back</h2>
              <h1><u>CRICKMITE</u></h1>
              <h4>Enter the details to login</h4>
              <label htmlFor="Email"><b>Email</b></label><br />
              <input type="text" value={loginObject.username} onChange={handleChange} placeholder="enter email" name="username" required /><br />
              <label htmlFor="password" value={loginObject.password}><b>password</b></label><br />
              <input type="text" placeholder="enter password" onChange={handleChange} name="password" required /><br /><br />
              <button id="Submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br />
            </div></body> 
        </center>
      </div>
  );
}

export default Organizerlogin;
