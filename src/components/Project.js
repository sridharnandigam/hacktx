import React from 'react';
import { ReactDOM } from 'react';

const Project = ({ title, description }) => {
    return (
        <div style = {projectStyle}>
            <h2 style = {titleStyle}>{title}</h2>
            <p style = {projectDescription}>{description}</p>
        </div>
    )
}

const projectStyle = {
    color: 'white',
    backgroundColor: '#4e4e4e',
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
    display: "grid",
    gridTemplateRows: "50px 1fr 50px",
    gridTemplateColumns: "150px 1fr"
}

const projectDescription = {
    gridRowStart: 1.5,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    paddingLeft: "20px",
    margin: 0,
}

const titleStyle = {
    gridRowStart: 1,
    gridRowEnd: 1.5,
    gridColumnStart: 2,
    paddingLeft: "20px",
    verticalAlign: "top",
    fontSize: "25px"
}
export default Project;