import Link from 'next/link';
import { FaCode, FaEnvelope, FaFileAlt, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { PiCertificateFill } from 'react-icons/pi';

export const navLinks = [
    {
        label: "Home",
        icon: <FaHome />,
        active: true,
    },
    {
        label: "About",
        icon: <FaUser />,
        active: false,
    },
    {
        label: "Resume",
        icon: <FaFileAlt />,
        active: false,
    },
    {
        label: "Certificate",
        icon: <PiCertificateFill />,
        active: false,
    },
    {
        label: "Portfolio",
        icon: <FaCode />,
        active: false,
    },
    {
        label: "Testimonial",
        icon: <FaUsers />,
        active: false,
    },
    {
        label: "Contact",
        icon: <FaEnvelope />,
        active: false,
    },
]

export default function SideNavLinks() {
    const activateLink = (currentElement?: HTMLElement, navLinkList?: any) => {

        if (currentElement?.classList.contains("active")) return;

        navLinkList?.forEach((linkElement: HTMLElement) => {
            if (currentElement === linkElement)
                linkElement.classList.add("active");
            else
                linkElement.classList.remove("active");
        })
    }

    return (
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                    {
                        navLinks.map(({ label, icon, active }, index) => (
                            <li className={`nav-link${active ? " active" : ""} outer-shadow`} key={index} onClick={(e) => activateLink(e.currentTarget, e.currentTarget.parentElement?.childNodes)}>
                                <Link href={label !== "Home" ? label.toLowerCase() : "/"}>
                                    <i className='icon'>{icon}</i>
                                    <span className="text nav-text">{label}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
