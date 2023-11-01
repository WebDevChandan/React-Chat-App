import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function SocialLinks() {
    const socialLinks = [
        {
            "label": "Linkedin",
            "icon": <FaLinkedinIn/>,
            "link": "https://www.linkedin.com/in/webdevchandan/"
        }, {
            "label": "Leetcode",
            "icon": <SiLeetcode />,
            "link": "https://leetcode.com/WebDevChandan/",
        }, {
            "label": "Github",
            "icon": <FaGithub />,
            "link": "https://github.com/WebDevChandan",
        }, {
            "label": "Twitter",
            "icon": <FaTwitter />,
            "link": "https://twitter.com/WebChandan",
        }
    ]

  return (
      <div className="social-links">
          {socialLinks.map(({ label, icon, link }, index) => (
              <Link href={link} target="_blank" key={index}
                  className="outer-shadow hover-in-shadow" title={label}><i>{icon}</i></Link>
          ))}
          
      </div>
  )
}
