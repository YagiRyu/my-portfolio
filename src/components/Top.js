import React from 'react';
import Header from './Header';
import '../style/Top.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-scroll";

function Top() {

    return (
        <div className="top" id="home">
            <Header />
            <div className="top__content">
                <Zoom >
                    <h1>I'm a Ryutaro Yagi.</h1>
                    <p>I'm a Japan based <span>ReactJS Developer.</span><br />Thank you for visiting this site.<br/>I providing the best things.</p>
                </Zoom>
                <a href="https://www.instagram.com/yagi_ryu822/"><InstagramIcon className="Icon"/></a>
                <a href="https://www.facebook.com/yagi.ryutaro"><FacebookIcon className="Icon"/></a> 
                <a href="https://twitter.com/K3Kcj"><TwitterIcon className="Icon"/></a>    
                <a href="https://github.com/YagiRyu"><GitHubIcon className="Icon"/></a>
                <div className="link">
                    <p>CONTACT!</p>
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                className="linkArrow"
                ><ArrowDownwardIcon className="arrowIcon"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Top
