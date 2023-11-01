"use client";

export const toggleMainMenuBar = () => {
  const mainMenu = document.querySelector('.nav-menu');
  mainMenu?.classList.toggle("open");
}

export default function HamburgerButton() {
  return (
    <div className="hamburger-btn outer-shadow hover-in-shadow" onClick={toggleMainMenuBar}>
      <span>
      </span>
    </div>
  )
}
