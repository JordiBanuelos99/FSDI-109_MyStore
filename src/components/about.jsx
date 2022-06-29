import "./about.css";
import { useState } from "react";

const About = () => {
    const [visible, setVisible] = useState(0);

    const changeVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="about">
            <h1>About this website</h1>
            <h3>Jordi Bañuelos</h3>
            {visible ? <h4>Banuelosmendez99@gmail.com</h4> : "Click on the button below"}
            <button onClick={changeVisibility}>Show / Hide Information</button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default About;