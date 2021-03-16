import React from 'react';
import '../style/Work.css';
import netflix from '../image/netflix.png';
import spotify from '../image/spotify.png';
import twitter from '../image/twitter.png';
import youtube from '../image/youtube.png';
import portfolio from '../image/portfolio.png';
import Bounce from 'react-reveal/Bounce';
import WorkSp from './WorkSp';

function Work() {

    return (
        <div className="work" id="work">
          <Bounce left >
            <a href="https://netflix-clone-28633.web.app/" >
            <div className="grid">
              <figure className="effect-zoe">
                <h3>Netflix-clone app🚀</h3>
                <div className="grid__content">
                    <img src={netflix} alt="img25"/>
                    <figcaption>
                        <h2>Netflix-clone</h2>
                    </figcaption>
                    <p><span>Skill used</span><br/> React JS・Node JS・CSS・firebase・Material-UI・Netflix API</p>    
                </div>   
              </figure>
            </div>
            </a>
          </Bounce>
          <Bounce left >
            <a href=" https://spotify-clone-app-86f98.web.app/">
            <div className="grid">
              <figure className="effect-zoe">
                <h3>Spotify-clone app🚀</h3>
                <div className="grid__content">
                <img src={spotify} alt="img25"/>
                <figcaption>
                  <h2>Spotify-clone</h2>
                </figcaption> 
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI・Spotify API</p>
                </div>    
              </figure>
            </div>
            </a>
          </Bounce>
            <Bounce left >
              <a href=" https://twitter-clone-e9466.web.app/ ">
              <div className="grid">
              <figure className="effect-zoe">
                <h3>Twitter-clone app🚀</h3>
                <div className="grid__content">
                <img src={twitter} alt="img25"/>
                <figcaption>
                  <h2>Twitter-clone</h2>
                </figcaption>
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>
              </figure>
            </div>
            </a>
            </Bounce>

            <Bounce left >
              <a href="https://clone-a2f66.web.app">
              <div className="grid">
              <figure className="effect-zoe">
                <h3>Youtube-clone app🚀</h3>
                <div className="grid__content">
                <img src={youtube} alt="img25"/>
                <figcaption>
                  <h2>Youtube-clone</h2>
                </figcaption>     
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>
              </figure>
            </div>
            </a>
            </Bounce>
            <Bounce left>
            <div className="grid">
              <figure className="effect-zoe">
                <h3>My portfolio🚀</h3>
                <div className="grid__content">
                <img src={portfolio} alt="img25"/>
                <figcaption>
                  <h2>My-portfolio</h2>
                </figcaption> 
                <p><span>Skill used</span><br /> React JS・Node JS・CSS・firebase・Material-UI</p>
                </div>    
              </figure>
            </div>
            </Bounce>
          
            <div className="work__sp">
              <WorkSp />
            </div>
        </div>
    )
}

export default Work
