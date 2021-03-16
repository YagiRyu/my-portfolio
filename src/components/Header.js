import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from "react-scroll";
import Navbar from './component / Nav/Navbar';

function Header() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`header ${show && "header__black"}`}>
                    <div className="link">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >HOME</Link>
                    </div>
                    <div className="link">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >ABOUT</Link>
                    </div>
                    <div className="link">
                    <Link
                        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >SKILL</Link>
                    </div>
                    <div className="link">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >WORK</Link>
                    </div>
                    <div className="link">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >CONTACT</Link>        
                    </div>
                    <div className="sp">
                        <Navbar />
                    </div>
        </div>
    )
}

export default Header;
