"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import '@styles/nav.scss'
import Footer from '@components/Footer'
import Button from '@components/Button'

const Nav = ({ openClass, navPopUp, navPopDown }) => {
  const navMenu = useRef();

  return (
    <>
      <nav className={`nav-menu ${navPopUp ? openClass : ""}`} ref={navMenu}>
        <div
          className="close-nav-menu outer-shadow hover-in-shadow"
          onClick={navPopDown}
        >
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li onClick={navPopDown}><Button hrefText="/" btnType="link-item active" btnText="home" /></li>
            <li onClick={navPopDown}><Button hrefText="/about" btnType="link-item" btnText="about" /></li>
            <li onClick={navPopDown}><Button hrefText="/resume" btnType="link-item" btnText="resume" /></li>
            <li onClick={navPopDown}><Button hrefText="/certificate" btnType="link-item" btnText="certificate" /></li>
            <li onClick={navPopDown}><Button hrefText="/portfolio" btnType="link-item" btnText="portfolio" /></li>
            <li onClick={navPopDown}><Button hrefText="/services" btnType="link-item" btnText="services" /></li>
            <li onClick={navPopDown}><Button hrefText="/testimonial" btnType="link-item" btnText="testimonial" /></li>
            <li onClick={navPopDown}><Button hrefText="/contact" btnType="link-item" btnText="contact" /></li>
          </ul>
        </div>

        <Footer classText="copyright-text" />
        {/* <!-- copyright text --> */}
        {/* <p className="copyright-text">
          Copyright &copy; 2020-2022 WebDevChandan
        </p> */}
      </nav>
      <div className="fade-out-effect"></div>
    </>
  )
}

export default Nav