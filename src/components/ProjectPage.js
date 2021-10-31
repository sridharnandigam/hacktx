import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import test_DOWNLOAD from '../assets/test_DOWNLOAD.jpg';
import image3 from '../assets/image3.jpg';
import image1 from '../assets/image1.jpg';
import test3rdver from '../assets/test3rdver.jpg'

import axios from 'axios';


const ProjectPage = ({props}) => {
    const images = {
        first: {image1},
        second: {test_DOWNLOAD},
        third: {test3rdver}
    }

    const request = { object:'test.jpg' }
    const [getMessage, setGetMessage] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:5000/test').then(response => {
          console.log("SUCCESS", response.data.greeting)
          setGetMessage(response)
        }).catch(error => {
            console.log(error)
        })
        }, []);
        
    return (
        <div className="projectcontainer">
            <div className = "ProjectPicture">
                <img src = {image3} style = {imageStyle}/>
            </div>
            <div className = "ProjectDescription">ProjectDescription</div>
            <div className = "VersionHistory">VersionHistory</div>
            <div className = "CurrentVersion">
                <img src = {image1} style = {versionStyle} onClick = {setPicture}/>
            </div>
        </div>
    );
}

function setPicture(e){
    e.target.setAttribute('src', test_DOWNLOAD);
}

const imageStyle = {
    width: "300px",
    borderRadius: "50px",
    padding: "1rem"
}

const versionStyle = {
    width: "500px",
    borderRadius: "50px",
    padding: "1rem"
}
export default ProjectPage;

/**
 * <div>{getMessage.status === 200 ? 
                <h3>{getMessage.data.greeting}</h3>
                :
                <h3>LOADING</h3>}</div>
 */