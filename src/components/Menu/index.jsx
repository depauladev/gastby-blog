import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

import SocialLinks from '../SocialLinks'

import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Close } from "styled-icons/remix-line/Close"

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    background: var(--postHightlight);
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(-100%)' };
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    ${media.lessThan("large")`
        width: 100%;
        align-items: center;
    `}
`;

const Navegacao = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    ${media.lessThan("large")`
        width: 100%;
    `}
`

const SocialDiv = styled.div`
    display: flex;
    align-items: flex-end;
        
    ${media.lessThan("large")`
        width: 100%;
    `}

`
const Utilidades = styled.div`
    display: flex;
    justify-content: space-between;
        
    ${media.lessThan("large")`
        width: 100%;
    `}
`

const Anchor = styled(AniLink)`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFF;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
        color: var(--postHover);
    }

    body.dark &:hover {
        color: var(--highlight);
    }

    ${media.lessThan("large")`
        font-size: 1.375rem;
    `}
`

const MenuBarItem = styled.span`
    color: #FFF;
    cursor: pointer;
    display: block;
    height: 3.75rem;
    padding: 1.1rem;
    position: relative;
    width: 3.75rem;
    transition: ease .3s;

    &:hover {
        color: var(--postHover);
    }

    body.dark &:hover {
        color: var(--highlight);
    }

    &.dark {
        color: var(--highlight);
    }
`

const Menu = ({ open, setOpen }) => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === "dark"
  
    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)

        const handleEsc = (event) => {
            if (event.keyCode === 27)
                setOpen(false)
        }

        window.addEventListener('keydown', handleEsc)
    
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }

    }, [])

    return (
        <StyledMenu open={open}>

            <Utilidades>
                <MenuBarItem className={theme} title="Mudar o tema" onClick={() => 
                    {window.__setPreferredTheme(isDarkMode ? "light" : "dark")}}>
                    <Light />
                </MenuBarItem>

                <MenuBarItem title="Ir para o Topo" onClick={() => window.scroll({top: 0,behavior: 'smooth'})}>
                    <Arrow />
                </MenuBarItem>

                <MenuBarItem title="Fechar menu" onClick={() => setOpen(!open)}>
                    <Close />
                </MenuBarItem>
            </Utilidades>

            <Navegacao>
                <Anchor to="/" title="Voltar para Home">
                    Home
                </Anchor>
                <Anchor to="/about" title="Sobre mim">
                    Sobre mim
                </Anchor>
                <Anchor to="/search" title="Pesquisar">
                    Pesquisar
                </Anchor>
            </Navegacao>

            <SocialDiv>
                <SocialLinks />
            </SocialDiv>

        </StyledMenu>
    )
}

export default Menu;