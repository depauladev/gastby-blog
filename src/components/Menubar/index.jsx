import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Home } from "styled-icons/boxicons-solid/Home"
// import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { QuestionMark as Question } from "styled-icons/boxicons-regular/QuestionMark"

const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #FFF;
`

const MenuBarGroup = styled.div`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

const MenuBarLink = styled(AniLink)`
  display: block;
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
    color: var(--highlight);
  }

  &.dark {
    color: var(--highlight);
  }
  
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`

const scrollTop = () => {
  window.scroll({
    top: 0, 
    behavior: 'smooth'
  })
}

const Menubar = () =>  {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
      <MenuBarWrapper>

        <MenuBarGroup>
          <MenuBarLink fade duration={0.8} to="/" title="Voltar para Home">
            <MenuBarItem>
              <Home />
            </MenuBarItem>
          </MenuBarLink>

          <MenuBarLink className="about" fade duration={0.8} to="/about" title="Sobre mim">
            <MenuBarItem>
              <Question />
            </MenuBarItem>
          </MenuBarLink>
        
        {/*   
          <MenuBarLink fade duration={0.8} to="/search" title="Pesquisar">
            <MenuBarItem>
              <Search />
            </MenuBarItem>
          </MenuBarLink> 
        */}
        </MenuBarGroup>
  
        <MenuBarGroup>
          <MenuBarItem title="Mudar o tema" onClick={() => {
              window.__setPreferredTheme(isDarkMode ? "light" : "dark")
            }}
            className={theme}
          >
            <Light />
          </MenuBarItem>

          <MenuBarItem title="Ir para o Topo" onClick={scrollTop}>
            <Arrow />
          </MenuBarItem>
        </MenuBarGroup>

      </MenuBarWrapper>
  )
}

export default Menubar