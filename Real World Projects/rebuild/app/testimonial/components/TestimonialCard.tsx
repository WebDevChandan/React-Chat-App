import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function TestimonialCard() {
    const testimonialData = [
        {
            name: "Lori Wolfe-1",
            img: "female.png",
            region: "USA",
            feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
            active: false,
        },
        {
            name: "Lori Wolfe-2",
            img: "female.png",
            region: "USA",
            feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
            active: true,
        },
        {
            name: "Lori Wolfe-3",
            img: "female.png",
            region: "USA",
            feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
            active: false,
        },
    ]
    return (
        <>
            {testimonialData.map(({ name, region, feedback, img, active }, index) => (
                <div className={`${active ? "active " : ""}testi-item`} key={index}>
                    <i className="left"> <FaQuoteLeft /></i>
                    <i className="right"><FaQuoteRight /></i>
                    <p>{feedback}</p>
                    <img src={`img/testimonial/${img}`} alt="female" />
                    <span>{name}</span>
                    <label className="client_region">
                        {region}
                    </label>
                </div>
            ))}

        </>
    )
}
