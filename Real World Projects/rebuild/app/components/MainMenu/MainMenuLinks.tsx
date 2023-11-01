import Link from "next/link";
import { toggleMainMenuBar } from '../Header/HamburgerButton';
import { navLinks as menuLinks } from "../Sidebar/SideMenuLinks";

export default function MainMenuLinks() {
    return (
        <>
            <div className="close-nav-menu outer-shadow hover-in-shadow" onClick={toggleMainMenuBar}>&times;</div>

            <div className="nav-menu-inner">
                <ul>
                    {menuLinks.map(({ label, active }, index) => (
                        <li key={index}>
                            <Link href={label !== "Home" ? label.toLowerCase() : "/"}
                                className={`${active ? "active inner-shadow " : "outer-shadow hover-in-shadow"}`}
                                onClick={toggleMainMenuBar}
                            >{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
