import React from 'react';
import { ReactDOM } from 'react';
import profile_pic from '../assets/profile_pic.jpg'

export default function Profile(){
    return (
        <div className="User">
            <img src = {profile_pic} class = "profile-pic" alt = "Profile Picture" style = {imageStyle}/>
            <p class = "description">
                Hi there, my name is Sridhar Nandigam. This is a brief description about myself and
                my interests. Stick around to find out what I'm interested in and what I'm working on,
                lol. 
            </p>
        </div>
    )
}

const imageStyle = {
    width: "300px",
    borderRadius: "50%",
    padding: "1rem"
}