import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Match from './Match';
import './tournament.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tournament() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getTournaments')
      .then(response => {
        setTournaments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleChange(event) {
    console.log("change event triggered")
    setSelectedOption(event.target.value);
  }

  function handleClick(){
    console.log(selectedOption)
    setIsClicked(true);
  }

  if(isClicked){
    return <Match tournament={selectedOption}/>;
  }

  return (
    
    <center>
      <center><strong><h1><u>CRICKMITE</u></h1></strong></center>
      <form><div>
      <select value={selectedOption} onChange={handleChange}>
        {tournaments.map(option => (
          <option key={option.tid} value={option.tid}>
            {option.tournamentName}
          </option>
        ))}
        <br/>
      </select>
      <button  id="Submit" className="btn btn-primary" onClick={handleClick}>Fetch matches</button>
    </div></form></center>
  );
}

export default Tournament;
