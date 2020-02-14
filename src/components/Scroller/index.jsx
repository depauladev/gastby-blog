import styled from 'styled-components';
import React from 'react'
import media from 'styled-media-query'

import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"

const Div = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 60px;
    right: 60px;
    z-index: 30;
    border-radius: 50%;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.1);
    cursor: pointer;
    transition: ease .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0009;

    &:hover svg {
        transform: translate(0,-7px);
    }

    ${media.lessThan("large")`
        width: 40px;
        height: 40px;
        bottom: 15px;
        right: 15px;

        &:hover svg {
            transform: translate(0,0px);
        }
    `}
`

const Flecha = styled(Arrow)`
    transition: ease .4s;
    height: 30px;

    ${media.lessThan("large")`
        height: 25px;
    `}
`

class Scroller extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            opacity: 0
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        const scrolled = scrollPx / winHeightPx * 100;
        const opacity = scrolled > 10 ? 1 : 0
    
        this.setState({
            opacity
        })
    };

    render() {
        return (
        <Div title="Ir para o Topo"
             onClick={() => window.scroll({top: 0,behavior: 'smooth'})}
             style={{
                 opacity: this.state.opacity
             }}>
            <Flecha />
        </Div>
        )
    }
}

export default Scroller