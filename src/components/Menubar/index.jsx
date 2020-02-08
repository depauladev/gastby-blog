import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"

const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  border-left: 1px solid var(--borders);
  z-index: 10;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

const MenuBarLink = styled(Link)`
  display: block;
`

const MenuBarItem = styled.span`
  color: var(--texts);
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

  &.light {
    color: var(--highlight);
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`


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
  
          <MenuBarLink to="/" title="Voltar para Home">
            <MenuBarItem>
              <Home />
            </MenuBarItem>
          </MenuBarLink>
  
          <MenuBarLink to="/search/" title="Pesquisar">
            <MenuBarItem>
              <Search />
            </MenuBarItem>
          </MenuBarLink>
        </MenuBarGroup>
  
        <MenuBarGroup>
          <MenuBarItem title="Mudar o tema" onClick={() => {
              window.__setPreferredTheme(isDarkMode ? "light" : "dark")
            }}
            className={theme}
          >
            <Light />
          </MenuBarItem>
          <MenuBarItem title="Ir para o Topo">
            <Arrow />
          </MenuBarItem>
        </MenuBarGroup>
      </MenuBarWrapper>
  )
}

export default Menubar