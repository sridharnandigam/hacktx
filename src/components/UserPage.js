import Profile from "./Profile";
import Project from "./Project";
//import "index.css";

const UserPage = ({props}) => {
    return (
        <div className = "container">
            <div className = "Interests"> <h1>Interesting stuff</h1></div>
            <Profile className = "User" />
            <div className = "Projects"> 
                <Project className = "Project1" title = "Project1" description = "Brief Description 1" />
                <Project className = "Project2" title = "Project2" description = "Brief Description 2" />
                <Project className = "Project3" title = "Project3" description = "Brief Description 3" />
            </div>
            <div className = "Contributions"/>
        </div>
    )
}

export default UserPage;