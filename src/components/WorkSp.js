import React from 'react';
import '../style/WorkSp.css';
import netflix from '../image/netflix.png';
import spotify from '../image/spotify.png';
import twitter from '../image/twitter.png';
import youtube from '../image/youtube.png';
import portfolio from '../image/portfolio.png';
import Bounce from 'react-reveal/Bounce';

function WorkSp() {
    return (
        <div className="workSp">
            <Bounce left >
            <a href="https://netflix-clone-28633.web.app/" >
            <div className="grid__sp">
                <h3>Netflix-clone app🚀</h3>
                <div className="work__image">
                    <img src={netflix} alt="img25"/>
                    <p><span>Skill used</span><br/> React JS・Node JS・CSS・firebase・Material-UI・Netflix API</p>    
                </div>   
            </div>
            </a>
          </Bounce>
          <Bounce left >
          <a href=" https://spotify-clone-app-86f98.web.app/">
          <div className="grid__sp">
                <h3>Spotify-clone app🚀</h3>
                <div className="work__image">
                <img src={spotify} alt="img25"/>
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI・Spotify API</p>
                </div>    
            </div>
            </a>
          </Bounce>

            <Bounce left >
            <a href=" https://twitter-clone-e9466.web.app/ ">
            <div className="grid__sp">
                <h3>Twitter-clone app🚀</h3>
                <div className="work__image">
                <img src={twitter} alt="img25"/>
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>
            </div>
            </a>
            </Bounce>

            <Bounce left >
            <a href="https://clone-a2f66.web.app">
            <div className="grid__sp">
                <h3>Youtube-clone app🚀</h3>
                <div className="work__image">
                <img src={youtube} alt="img25"/>
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>
            </div>
            </a>
            </Bounce>
            <Bounce left >
            <div className="grid__sp">
                <h3>my portfolio🚀</h3>
                <div className="work__image">
                <img src={portfolio} alt="img25"/>
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>    
            </div>
            </Bounce>
        </div>
    )
}

export default WorkSp
