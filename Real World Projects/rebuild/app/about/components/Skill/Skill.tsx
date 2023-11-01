import React from 'react'

export default function Skill() {
    const skills = [
        {
            name: "HTML",
            level: "90%",
        },
        {
            name: "CSS",
            level: "75%",
        },
        {
            name: "Javascript",
            level: "70%",
        },
        {
            name: "Bootstrap",
            level: "85%",
        },
        {
            name: "Jquery",
            level: "60%",
        },
        {
            name: "PHP",
            level: "65%",
        },
        {
            name: "SQL",
            level: "85%",
        },
        {
            name: "WordPress",
            level: "90%",
        },
    ]

    return (
        <>
            {skills.map(({ name, level }, index) => (
                <div className="skill-item" key={index}>
                    <p>{name}</p>
                    <div className="progress inner-shadow">
                        <div className="progress-bar" style={{ width: `calc(${level} - 14px)` }}>
                            <span>{level}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
