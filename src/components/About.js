import React from 'react';
import './About.css'  ;
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <div className="about" id="about">
            <Fade bottom >
            <div className="about__img">
                <img src="https://pbs.twimg.com/profile_images/1347874613527597056/DI-22HqB_400x400.jpg" alt="" />
            </div>
            <div className="about__content">
                <h2>About Me</h2>
                <p>My name is Ryu. I'm a ReactJS Developer.<br />EDUCATION：<span> Nihon University. (now 1st year student)</span></p>
                <h2>Contact Details</h2>
                <p>Ryutaro Yagi<br />Japan Kanagawa prefecture / Kawasaki city<br />lxam2cctzwcn@gmail.com</p>
            </div>
            </Fade>
        </div>
    )
}

export default About;
