import React from 'react'
import Nav from './Nav'
import moon from '../assets/half-moon.png'
import sun from '../assets/sun.png'
import hamburger from '../assets/hamburger.png'
import { Lists } from '../information'

function NavLists(list) {
  return <Nav key={list.id} link={list.heading} href={list.href} />
}

function mobileNav() {
  const navLists = document.querySelector('.nav_lists')
  const navList = document.querySelectorAll('.nav-list')
  const navLinks = document.querySelectorAll('.nav-link')
  const logo = document.querySelector('.logo0')
  navLists.classList.toggle('hide')
  navLists.classList.toggle('mobile-nav')
  logo.classList.toggle('hide')
  for (const list of navList) {
    list.classList.toggle('listPad')
  }
  for (const link of navLinks) {
    link.classList.toggle('dark')
    link.style.fontSize = '1rem'
  }
}

function NavBar(props) {
  return (
    <div className="intro-flex">
      <a href="index.html" className="logo0">
        <strong className="strong logo">
          Port<span>folio</span>
        </strong>
      </a>
      <nav>
        <a href="#">
          <img
            src={hamburger}
            className="menu"
            onClick={mobileNav}
            alt="menu-button"
          />
        </a>
        <ul className="nav_lists hide">
          {Lists.map(NavLists)}
          <ul className="weather">
            <button
              type="button"
              aria-label={props.mode ? 'darkmode' : 'light mode'}
              onClick={props.handleClick}
            >
              {props.mode ? (
                <img src={sun} alt="sun" />
              ) : (
                <img src={moon} alt="moon" />
              )}
            </button>
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
