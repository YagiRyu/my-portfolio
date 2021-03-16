import React from 'react';
import './Skill.css';
import Jump from 'react-reveal/Jump';

function Skill() {
    return (
        <div className="skill" id="skill">
            <Jump>
            <h2>SKILL</h2>
            <div className="skill__content">
                <div class="skillCode">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" />
                    <h3>React JS</h3>
                </div>
                <div class="skillCode">
                    <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="node" />
                    <h3>Node JS</h3>
                </div>
                <div class="skillCode">
                    <img src="https://ucarecdn.com/f49e8fc4-876f-49ef-934f-89812fc4125e/" alt="css" />
                    <h3>CSS</h3>
                </div>
                <div class="skillCode">
                    <img src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png" alt="firebase" />
                    <h3>Firebase</h3>
                </div>
                <div class="skillCode">
                    <img src="https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png" alt="git" />
                    <h3>Git</h3>
                </div>
            </div>
            </Jump>
        </div>
    )
}

export default Skill
