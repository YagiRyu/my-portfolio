import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div `
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 100;

div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'rgb(199,200,201)' : 'rgb(242,96,0)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translate(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`

function Burger() {

    const [open, setOpen] = useState(false);

    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav open={open} />
        </>
    )
}

export default Burger
