import '@styles/testimonial.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import SectionTitle from '../SectionTitle'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  const clinetMssg = "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!";

  return (
    <section className="testimonial-section section" id="testimonial">
      <div className="container">
        <SectionTitle subTitle="testimonial" title="Client Speak" />
        <div className="row">
          <div className="testi-box">
            <div className="testi-slider outer-shadow">
              <div className="testi-slider-container">

                <TestimonialSlider
                  message={clinetMssg}
                  imgSrc="/img/testimonial/female.png"
                  altTxt="female"
                  clientName="Lori Wolfe"
                  clientRegion="USA"
                />
              
              </div>
            </div>
            <div className="testi-slider-nav">
              <span className="prev outer-shadow hover-in-shadow"><i><FaAngleLeft /></i></span>
              <span className="next outer-shadow hover-in-shadow"><i><FaAngleRight /></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial