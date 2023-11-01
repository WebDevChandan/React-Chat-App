import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
    const experienceDetails = [
        {
            from: "May, 2019",
            to: "Current",
            role: "Fiverr, Israel",
            organization: {
                title: "Full-Stack & WordPress developer",
                info: "Currently, I'm working at Fiverr as Freelancer by providing my services as Front End Developer over 100+ clients per month.Fiverr is an Israeli online marketplace for freelance services.The company provide a platform for freelancers to offer services to customers worldwide."
            }
        },
        {
            from: "Oct, 2017",
            to: "Nov, 2017",
            role: "WordPress Developer Intern",
            organization: {
                title: "All India Tour & Taxi, India",
                info: "I've worked remotely with this company as a Senior WordPress Developer to build a Car Rental Website for their business. This is a Car Rental Service providing Company in over 3+ states across India which are located in Uttar Pradesh, India."
            }
        }
    ]
    return (
        <div className="timeline">
            <div className="row">
                {experienceDetails.map(({ to, from, role, organization }, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-item-inner outer-shadow">
                            <i className="icon"><FaBriefcase /></i>
                            <span>{from} - {to}</span>
                            <h3>{role}</h3>
                            <h4>{organization.title}</h4>
                            <p>{organization.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
