import styled from 'styled-components';
import React from 'react'
import media from 'styled-media-query'

const Bar = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4px;
    z-index: 30;
`

class ProgressBar extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            background: ''
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
        const background = `linear-gradient(
            to right,
            rgba(0, 0, 0, .7) ${scrolled},
            transparent  0)`
    
        this.setState({
            background
        })
    };

    render() {
        return <Bar style={{
            background: this.state.background
        }}/>
    }
}

export default ProgressBar