import React from 'react';
import './Contact.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Form from './Form';
import { Link } from "react-scroll";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__top">
                <MailOutlineIcon className="contactIcon"/>
                <p>If you have a project for me I'd like to here from you. So give me a message by using the form or SNS (Twitter, Instagram, Facebook) if you'd like to get in contact with me.</p>
            </div>
            <div className="form">
                <Form />
                <p><span>Phone number & Mail</span><br />Ryutaro Yagi<br />080-8581-5330<br/>lxam2cctzwcn@gmail.com</p>
            </div>
            <div className="link">
                <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                className="linkArrow"
                ><ArrowUpwardIcon className="arrowIcon"/></Link>
                </div>
        </div>
    )
}

export default Contact
