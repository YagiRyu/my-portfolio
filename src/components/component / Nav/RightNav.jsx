import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Ul = styled.ul`


    .link__sp {
        padding:18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #1F2125;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        .link__sp > .active {
            border-bottom: 1px solid #111;
            color: rgb(241, 96, 0);
          }
          
          .link__sp {
            cursor: pointer;
            font-size: 18px;
            font-weight: 900;
            margin: 0 auto;
            color: white;
          }
          
          .link__sp:hover {
            transform: scale(1.08);
            transition: all 0.3s;
            transition-timing-function: ease-in;
          }
    }
}
`

function RightNav({ open }) {
    return (
            <Ul open={open}>
                <div className="link__sp">
            <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >HOME</Link>
                    </div>
                    <div className="link__sp">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >ABOUT</Link>
                    </div>
                    <div className="link__sp">
                    <Link
                        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >SKILL</Link>
                    </div>
                    <div className="link__sp">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >WORK</Link>
                    </div>
                    <div className="link__sp">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                    >CONTACT</Link>        
                    </div>
            </Ul>
    )
}

export default RightNav
