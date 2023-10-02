import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Addmatches.css';

function Addteams(props) {
  console.log(props)
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [team, setTeam] = useState({
    TeamId: "",
    TeamName: "",
    Players: []
  });
  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getplayers')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(`Team id: ${team.TeamId}`);
    console.log(`Team Name: ${team.TeamName}`);
    console.log(`Player ID: ${team.Players}`);

    axios.post("http://localhost:3001/Addteams", team)
      .then(data => {
        alert("Added Successfully")
      }
      )
      .catch((error) => {
        console.log(error)
        alert("Addition failed")
      });
  }

  function handleChange(event) {
    setSelectedPlayer(players.find(p => p.pid === event.target.value));
  }

  function handleClick() {
    if (team.Players.length < 11) {
      setTeam({ ...team, Players: [...team.Players, selectedPlayer] });
    } else {
      alert("Team is full. Can't add more players.");
    }
  }

  return (

    <center>
      <div>
        <body ><form onSubmit={handleSubmit}>
          <h5><b>CRICKMITE</b></h5>
          <label>
            Team ID:
            <br />
            <input type="text" value={team.TeamId} onChange={event => setTeam({ ...team, TeamId: event.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Team Name:
            <br />
            <input type="text" value={team.TeamName} onChange={event => setTeam({ ...team, TeamName: event.target.value })} />
          </label>
          <br />
          <br />
          <center>
            <select value={selectedPlayer && selectedPlayer.pid} onChange={handleChange}>
              {players.map(option => (
                <option key={option.pid} value={option.pid}>
                  {option.PName}
                </option>
              ))}
            </select>
            <button id="Submit" className="btn btn-primary" onClick={handleClick}>Add Player</button>
          </center>
        </form></body></div>
      <br />
      <br />
      <Link to="Addmatches.html">
        <button type="button" className="btn btn-primary">Add Matches</button>
      </Link>
    </center>

  );
}
export default Addteams;

