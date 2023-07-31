import '@styles/contact.scss'
import Footer from '../../Footer'
import { FaEnvelope, FaMapMarkerAlt, FaMicrophone, FaPhone } from 'react-icons/fa'
import SectionTitle from '../SectionTitle'

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <SectionTitle subTitle="contact" title="Get In Touch" />
        <div className="row">
          {/* <!-- contact item start --> */}
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i><FaPhone /></i>
              <span>phone</span>
              <p>+91 6207472428</p>
            </div>
          </div>
          {/* <!-- contact item end --> */}
          {/* <!-- contact item start --> */}
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i><FaEnvelope /></i>
              <span>Email</span>
              <p>hirechandan@gmail.com</p>
            </div>
          </div>
          {/* <!-- contact item end --> */}
          {/* <!-- contact item start --> */}
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i><FaMapMarkerAlt /></i>
              <span>Address</span>
              <p>Chas-Bokaro, Jharkhand- 827013 </p>
            </div>
          </div>
          {/* <!-- contact item end --> */}
        </div>
        <div className="row">

          <div className="contact-form">
            <form className="contact-form contact__form" method="post" action="php/contact-form-handler.php"
              onsubmit="return validation()">
              <div className="row">
                <div className="w-50">
                  <span id="username" className="valid_msg"></span>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input type="text" placeholder="Full Name" className="input-control" name="name"
                      id="user" autocomplete="off" />
                  </div>
                  <span id="emailId" className="valid_msg"></span>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input type="email" placeholder="Email" className="input-control" name="email"
                      id="email" autocomplete="off" />
                  </div>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input type="text" placeholder="Subject" className="input-control" name="subject"
                      autocomplete="off" />
                  </div>
                </div>
                <div className="w-50">
                  <span id="msg" className="valid_msg"></span>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <textarea className="input-control" placeholder="Message" name="message"
                      id="message"></textarea>
                    <span id="microphone" onclick="record()"><i><FaMicrophone /></i></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-btn">
                  <div className="contact__msg" style={{ display: "none", fontWeight: "bold", color: "#1fcd8b" }}>
                  </div>
                  <button type="submit" className="btn-1 outer-shadow hover-in-shadow" name="submit"
                    onclick="validation()">Send Message</button>
                  {/* <!-- Submission Message --> */}
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      <Footer classText="copyright-text-bottom" />
    </section>
  )
}

export default Contact