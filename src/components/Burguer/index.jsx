import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    transition: ease .4s;

    &:focus {
        outline: none;
    }

    :hover  {
        height: 1.4rem;
    }

    :hover .second {
        height: 0.3rem;
        width: 1.6rem;
    }

    div {
        margin: 0 auto;
        width: 2rem;
        height: 0.25rem;
        background: #FFF;
        border-radius: 10px;
        transition: ease 0.3s;
        position: relative;
        transform-origin: 1px; 
    }
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)} title="Menu">
        <div className="first"/>
        <div className="second"/>
        <div className="third"/>
        </StyledBurger>
    )
}

export default Burger;