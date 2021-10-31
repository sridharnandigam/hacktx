import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';


import axios from 'axios';


const ProjectPage = ({props}) => {
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
        <div>
            <div>{getMessage.status === 200 ? 
                <h3>{getMessage.data.greeting}</h3>
                :
                <h3>LOADING</h3>}</div>
        </div>
    )
}

export default ProjectPage