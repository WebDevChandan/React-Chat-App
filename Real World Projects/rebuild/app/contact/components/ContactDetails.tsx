import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

export default function ContactDetails() {
    const contactDetailsData = [{
        label: "phone",
        details: "+91 6207472428",
        icon: <FaPhone />,
    }, {
        label: "email",
        details: "hirechandan@gmail.com",
        icon: <FaEnvelope />,
    }, {
        label: "phone",
        details: "Chas-Bokaro, Jharkhand- 827013",
        icon: <FaMapMarkerAlt />,
    },
    ]
    return (
        <div className="row">
            {contactDetailsData.map(({ label, details, icon }, index) => (
                <div className="contact-item" key={index}>
                    <div className="contact-item-inner outer-shadow">
                        <i>{icon}</i>
                        <span>{label}</span>
                        <p>{details}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
