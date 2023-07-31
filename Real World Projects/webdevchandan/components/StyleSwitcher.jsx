"use client"

import '@styles/style-switcher.scss'
import { useEffect, useState } from 'react'
import { FaCog, FaMoon } from 'react-icons/fa'

const StyleSwitcher = () => {
  const bodyElement = window.document.querySelector('body');
  const [showSwitch, setShowSwitch] = useState(false);

  
  const [themeColor, setThemeColor] = useState("color-1");
  
  
  const addToLocalStorage = (themeColor) => {
    localStorage.setItem('themeClr', themeColor);
  }
  
  useEffect(() => {
    
    window.matchMedia('(prefers-color-scheme: dark)').matches ? bodyElement.classList.add("dark") : null;
    
    let prevColor = localStorage.getItem('themeClr');

    !prevColor ? bodyElement.classList.add(themeColor) : bodyElement.classList.add(prevColor);

    addToLocalStorage(themeColor);
    
    prevColor ? bodyElement.classList.replace(prevColor, themeColor) : null;
  }, [themeColor]);

  const handleDarkModeToggle = () => {
    bodyElement.classList.toggle('dark');
  }

  return (
    <div className={`style-switcher outer-shadow ${showSwitch ? "open" : ""}`}>
      <div className="style-switcher-toggler s-icon outer-shadow hover-in-shadow"
        onClick={() => { setShowSwitch(!showSwitch) }}>
        <i className="fas fa-cog fa-spin"><FaCog /></i>
      </div>

      <div className="day-night s-icon outer-shadow hover-in-shadow" onClick={handleDarkModeToggle}>
        <i><FaMoon /></i>
      </div>

      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setThemeColor("color-1")}></span>
        <span className="color-2" onClick={() => setThemeColor("color-2")}></span>
        <span className="color-3" onClick={() => setThemeColor("color-3")}></span>
        <span className="color-4" onClick={() => setThemeColor("color-4")}></span>
        <span className="color-5" onClick={() => setThemeColor("color-5")}></span>
      </div>
    </div>
  )
}

export default StyleSwitcher