import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Project from './components/Project';
import UserPage from './components/UserPage';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/test').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <UserPage />
      <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.greeting}</h3>
          :
          <h3>LOADING</h3>}</div>
    </div>
  );
}

export default App;
