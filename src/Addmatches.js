import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Addmatches.css';

function Addmatches() {
    const[MatchInfo,setMatchInfo] = useState({
        mid:"",
        matchName:"",
        tid:"",
        Team1:"",
        Team2:""
      })
    
      function handleSubmit(event) {
        event.preventDefault();
    
        // You can do something with the tournament id and name here, such as send it to an API.
        console.log(`match id:${MatchInfo.mid}`);
        console.log(`Match Name: ${MatchInfo.matchName}`);
        console.log(`Tournament ID: ${MatchInfo.tid}`);
        console.log(`Team 1:${MatchInfo.Team1}`);
        console.log(`Team 2:${MatchInfo.Team2}`);
          
        
          axios.post("http://localhost:3001/Addmatches", MatchInfo)
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
        
          <body class="form">
        <form onSubmit={handleSubmit}>
        <h5><b>CRICKMITE</b></h5>
        <label>
            Match ID:
            <br/>
            <input type="text" value={MatchInfo.mid} onChange={event => setMatchInfo({...MatchInfo,mid:event.target.value})} />
          </label>
          <br />
          <br/>
        <label>
            Match Name:
            <br/>
            <input type="text" value={MatchInfo.matchName} onChange={event =>  setMatchInfo({...MatchInfo,matchName: event.target.value})} />
          </label>
         <br />
          <br/>
          <label>
            Tournament ID:
            <br/>
            <input type="text" value={MatchInfo.tid} onChange={event => setMatchInfo({...MatchInfo,tid:event.target.value})} />
          </label>
          <br />
          <br/>
          <label>
            Team1 Name:
            <br/>
            <input type="text" value={MatchInfo.Team1} onChange={event =>  setMatchInfo({...MatchInfo,Team1: event.target.value})} />
          </label>
          <br />
          <br />
          <label>
            Team2 Name:
            <br/>
            <input type="text" value={MatchInfo.Team2} onChange={event =>  setMatchInfo({...MatchInfo,Team2: event.target.value})} />
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
          <br />
          <br />
          <Link to="#">
         <button type="button" className="btn btn-primary" href="Addmatches.html">livescore</button></Link>
        </form>
        </body>
      
        </center>
      
      );

}
export default Addmatches;