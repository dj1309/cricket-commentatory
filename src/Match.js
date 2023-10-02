import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Addmatches.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Match(props) {
  console.log(props)
  const [matches, setMatches] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios.post('http://127.0.0.1:3001/getMatches', {
      "tid": props.tournament
    })
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  
  function handleClick(){
    console.log(selectedOption)
    setIsClicked(true);
  }

  if(isClicked){
    // return <Score match={selectedOption}/>;
  }

  return (
    <center><div>
      <select value={selectedOption} onChange={handleChange}>
        {matches.map(option => (
          <option key={option.mid} value={option.mid}>
            {option.matchName}
          </option>
        ))}
      </select>
      <button  id="Submit" className="btn btn-primary"  onClick={handleClick}>Fetch score</button>
    </div></center>
  );
}

export default Match;
