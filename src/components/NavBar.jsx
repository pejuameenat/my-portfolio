import React, { useState } from 'react'
import Nav from './Nav'
import moon from '../assets/half-moon.png'
import sun from '../assets/sun.png'
import hamburger from '../assets/hamburger.png'
import { Lists } from '../information'

function NavBar(props) {
  const [showNav, setShowNav] = useState(false)

  function NavLists(list) {
    return <Nav key={list.id} link={list.heading} href={list.href} showNav={showNav} />
  }

  function mobileNav() {
    window.innerWidth < 992
      ? setShowNav((prevShow) => !prevShow)
      : setShowNav(false)
  }

  return (
    <div className="intro-flex">
      <header>
        <a href="index.html" className="logo0">
          <strong className="strong logo">
            Port<span>folio</span>
          </strong>
        </a>
        <button
          type="button"
          aria-label="hamburger button"
          aria-haspopup="true"
          className="hamburger-button"
          onClick={mobileNav}
        >
          <img src={hamburger} className="menu" alt="menu-button" />
        </button>
      </header>
      <nav>
        <ul className={showNav ? 'nav_lists hide' : 'nav_lists'}>
          {Lists.map(NavLists)}
          <div className="weather">
            <button
              type="button"
              aria-label={
                props.mode ? ' switch to darkmode' : 'switch to light mode'
              }
              onClick={props.handleClick}
            >
              {props.mode ? (
                <img src={sun} alt="sun" />
              ) : (
                <img src={moon} alt="moon" />
              )}
            </button>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
