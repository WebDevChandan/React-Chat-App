import { Button } from '@/app/components'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
    return (
        <div className="about-info">
            <p>
                Hello, My name is Chandan Kumar. I am a <span>Full-Stack Web/Java Developer</span> from Jharkhand, India. I like to code things from scratch and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions. I've done remote work for agencies, consulted for startups, and also worked as a Freelancer in a
                various online digital platform.
                <br /><br />I love in turning People's Imagination into
                Reality. Feel free to take a look at my latest projects on
                <Link href="/portfolio" className="portfolioPage" > Portfolio Page</Link>.
            </p>

            <p>
                Remotely available UTC-1 to UTC+05:30.
                <Link href="mailto:hirechandan@gmail.com" className="email">hirechandan@gmail.com</Link>
            </p>

            <Button href="myResume.pdf" label="Download Resume" target="_blank" />
            <Button href="contact" label="Hire Me" />

        </div>
    )
}
