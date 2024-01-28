import React, { useState } from 'react'
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
    list.style.padding = '1.5rem 1rem 0'
  }
  for (const link of navLinks) {
    link.classList.toggle('dark')
    link.style.fontSize = '1rem'
  }
}

function NavBar() {
  const [img, setImg] = useState(false)

  // function toggleTheme() {
  //   if(img)return
  //   document.querySelector('body').classList.add('dark-body')
  // }
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
            <button type="button" onClick={() => setImg(!img)}>
              {img ? (
                <img src={sun} alt="sun" />
              ) : (
                <img
                  src={moon}
                  alt="moon"
                  // onClick={toggleTheme}
                />
              )}
            </button>
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
