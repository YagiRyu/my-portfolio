import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/yagi_ryu822/"><InstagramIcon className="footerIcon"/></a>
            <a href="https://www.facebook.com/yagi.ryutaro"><FacebookIcon className="footerIcon"/></a> 
            <a href="https://twitter.com/K3Kcj"><TwitterIcon className="footerIcon"/></a>    
            <a href="https://github.com/YagiRyu"><GitHubIcon className="footerIcon"/></a>
            <p>created by ryutaro yagi</p>  
        </div>
    )
}

export default Footer
