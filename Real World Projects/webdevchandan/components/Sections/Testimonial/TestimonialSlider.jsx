import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const TestimonialSlider = ({ message, imgSrc, altTxt, clientName, clientRegion }) => {
    return (
        < div className="testi-item" >
            <i className="left"><FaQuoteLeft /></i>
            <i className="right"><FaQuoteRight /></i>
            <p>{message}</p>
            <Image
                src={imgSrc}
                alt={altTxt}
                width={70}
                height={70} />
            <span>{clientName}</span>
            <label className="client_region">{clientRegion}</label>
        </div >

    )
}

export default TestimonialSlider