import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
    const educationDetails = [
        {
            from: 2019,
            to: 2023,
            level: "Bachelor of Technology In Computer Science & Soft. Engineering",
            info: `Currently, I'm pursuing my B.Tech Degree in Computer Science and Software Engineering from <a href = 'https://cgu-odisha.ac.in/' target = '_blank' rel = 'nofollow' > C.V.Raman Global University</a > since August 2019. This is an engineering and management institution located in Bhubaneswar, Odisha.`
        },
        {
            from: 2017,
            to: 2019,
            level: "Higher Secondary Education",
            info: "I've completed my Intermediate with Science Stream(Physics, Chemistry, Maths and Computer Fundamentals) from CBSE Board in India.I studied from<label> Crescent PublicSchool</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND."
        },
        {
            from: 2019,
            to: 2023,
            level: "Secondary Education",
            info: " I've completed my Matriculation from CBSE Board in India. I studied at <label> Crescent Public School</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND."
        },
    ]

    return (
        <div className="timeline">
            <div className="row">
                {educationDetails.map(({ from, to, level, info }, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-item-inner outer-shadow">
                            <i className="icon"><FaGraduationCap /></i>
                            <span>{from} - {to}</span>
                            <h3>{level}</h3>
                            <p dangerouslySetInnerHTML={{ __html: info }} />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
