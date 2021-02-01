import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import WomanCard from './WomanCard';
import axios from 'axios';

//Update url with new one created at mocki.io as needed
const apiURL = 'https://api.mocki.io/v1/c01ecec1'

function WomenList() {

    const [womanState, setWomanState] = useState([])

    axios.get(apiURL)
        .then((res) => {
            console.log("Retrieved data from api")
            setWomanState(res.data)
        })

    return (
      <div className="woman-list">
        <div className="all-woman-cards">
          {/* <div>
            <p>Name</p>
            <p>Organization Name</p>
            <p>Status</p>
          </div> */}
          {womanState.map(woman => (
            <WomanCard key={woman.name} app={woman} />
          ))}
        </div>
      </div>
    );
  }
  
  export default WomenList;
  