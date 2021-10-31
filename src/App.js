import logo from './logo.svg';
import './App.css';
import UserPage from './components/UserPage';
import ProjectPage from './components/ProjectPage';

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';


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
      <Switch>
          <Route path="/" component={UserPage} exact />
          <Route path="/project" component={ProjectPage} />
      </Switch>
    </div>
  );
}

export default App;
/*
<UserPage />
      <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.greeting}</h3>
          :
          <h3>LOADING</h3>}</div>
*/