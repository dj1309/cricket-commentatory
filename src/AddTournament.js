import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';
import axios from 'axios'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Addmatches.css';
function AddTournament() {
  const[teamInfo,setTeamInfo] = useState({
    tid:"",
    tournamentName:""
  })

  function handleSubmit(event) {
    event.preventDefault();

    // You can do something with the tournament id and name here, such as send it to an API.
    console.log(`Tournament ID: ${teamInfo.tid}`);
    console.log(`Tournament Name: ${teamInfo.tournamentName}`);
      
    
      axios.post("http://localhost:3001/AddTournament", teamInfo)
      .then(data => {   
        alert("Added Successfully")
      }
  
  
    )
      .catch((error) => {
        console.log(error)
        alert("Addition failed")
      });
  }
return (   
   <center>
   <form onSubmit={handleSubmit}>
    <h5><b>CRICKMITE</b></h5>
      <label>
        Tournament ID:
        <br/>
        <input type="text" value={teamInfo.tid} onChange={event => setTeamInfo({...teamInfo,tid:event.target.value})} />
      </label>
      <br />
      <br/>
      <label>
        Tournament Name:
        <br/>
        <input type="text" value={teamInfo.tournamentName} onChange={event =>  setTeamInfo({...teamInfo,tournamentName: event.target.value})} />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
      <Link to="/Addteams.html">
     <button type="button" className="btn btn-primary" href="Addmatches.html">Add Teams</button></Link>
    </form>
    </center>
  
  );
}
export default AddTournament;
