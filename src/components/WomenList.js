import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import WomanCard from './WomanCard';

function WomenList() {
    return (
      <div className="woman-list">
        <div className="all-woman-cards">
          {/* <div>
            <p>Name</p>
            <p>Organization Name</p>
            <p>Status</p>
          </div> */}
          {_____.map(woman => (
            <WomanCard key={woman.name} app={woman} />
          ))}
        </div>
      </div>
    );
  }
  
  export default WomenList;
  