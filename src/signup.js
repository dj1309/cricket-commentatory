import './Addmatches.css';
import axios from 'axios'
import React, { useState } from 'react';
function SignUp() {
  const [signUpObject, setSignUpObject] = useState({
    "username": "",
    "password": ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    console.log("Name:",name, " Value:", value)
    setSignUpObject({
      ...signUpObject,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/addUser", signUpObject)
    .then(data => {
      alert("Added successfully");
    })
    .catch((error) => {
      console.log(error)
      alert("Addition failed")
    });
  }
  return (
    <div>
        <center>
          <form>
            <div className="login-container">
              <h2>Register as a User</h2>
              <h1><u>CRICKMITE</u></h1>
              <h4>Enter the details to Signup</h4>
              <label htmlFor="Email"><b>Email</b></label><br />
              <input type="text" placeholder="enter email" name="username" onChange={handleChange} required /><br />
              <pre><label htmlFor="password"><b>password      password</b></label></pre>
              <input type="text" placeholder="enter password" name="password" onChange={handleChange} required />
              {/* <label htmlFor="password"><b>password</b></label> */}
              <input type="text" placeholder=" re-enter password" name="password" onChange={handleChange} required /><br /><br />
              <button id="Submit" className="btn btn-primary"onClick={handleSubmit}>Submit</button><br />
            </div>
          </form>
        </center>
      </div>
  );
}

export default SignUp;
