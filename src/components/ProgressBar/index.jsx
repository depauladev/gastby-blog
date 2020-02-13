import styled from 'styled-components';
import React from 'react'
import media from 'styled-media-query'

const Bar = styled.div`
    position: fixed;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, .7) ${({ scroll }) => scroll},
        transparent  0);
    width: 100%;
    top: 0;
    left: 0;
    height: 4px;
    z-index: 30;

    ${media.lessThan("large")`
        top: 65px;
    `}
`

class ProgressBar extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            scrolled: '0%'
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
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
    
        this.setState({
            scrolled: scrolled
        })
    };

    render() {
        return <Bar scroll={this.state.scrolled}/>
    }
}

export default ProgressBar