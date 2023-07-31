"use client";

import { EditButton, Tab } from '@components';
import '@styles/about.scss';
import DOMPurify from 'dompurify';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBriefcase, FaGithub, FaGraduationCap, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../../Button';
import SectionTitle from '../SectionTitle';


const About = () => {
  const [tabSwitch, setTabSwitch] = useState("skills");
  const { data: session } = useSession();
  const [editorMode, setEditorMode] = useState(false);
  const [content, setContent] = useState(null);
  let sanitizedContent = DOMPurify.sanitize(content);

  const fetchAboutData = async () => {
    const response = await fetch('/api/getPortfolioData/')
    const data = await response.json();

    setContent(data.about.text);
  }

  const updateHanlder = async () => {
    await fetch('/api/about/updateData/info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: content,
    })

    setEditorMode(!editorMode);
  }

  useEffect(() => {
    fetchAboutData();
  }, []);

  const handleEditorChange = (value) => {
    setContent(value);
  };


  const editContent = () => {
    setEditorMode(!editorMode);
  }

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <SectionTitle subTitle="main info" title="About me" />
        <div className="row">

          <div className="about-img">
            <div className="img-box inner-shadow">
              <Image src="/img/About_Chandan_Kumar.webp" alt="Chandan Kumar" className="outer-shadow"
                width={420}
                height={420}
                priority="false"
              />
            </div>
            {/* <!-- social links start --> */}
            <div className="social-links">
              <a href="https://www.linkedin.com/in/webdevchandan/" target="_blank"
                className="outer-shadow hover-in-shadow" title="Linkedin">
                {/* <i className="fab fa-linkedin-in"></i> */}
                <i><FaLinkedinIn /></i>
              </a>
              <a href="https://leetcode.com/WebDevChandan/" target="_blank"
                className="outer-shadow hover-in-shadow" title="Leetcode">
                <i><SiLeetcode /></i>

              </a>
              <a href="https://github.com/WebDevChandan" target="_blank" className="outer-shadow hover-in-shadow"
                title="Github">
                <i><FaGithub /></i>
              </a>
              <a href="https://twitter.com/WebChandan" target="_blank" className="outer-shadow hover-in-shadow"
                title="Twitter">
                <i><FaTwitter /></i>
              </a>
            </div>
            {/* <!-- social links end --> */}

          </div>
          <div className="about-info">

            
            {!editorMode && 
              <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
            }
            {editorMode
              &&
              <>
                <ReactQuill value={content} onChange={handleEditorChange} />
                <button onClick={updateHanlder} className='btn-1 outer-shadow hover-in-shadow'>Save</button>
              </>
            }

            {session?.user && <EditButton editContentFun={editContent} />}

            <Button btnText="Download Resume" target="_blank" hrefText="resume.pdf" btnType="btn-1" />
            <Button btnText="Hire Me" hrefText="contact" btnType="list-item btn-1" />
          </div>
        </div>

        {/* <!--about tabs start --> */}
        <div className="row">
          <div className="about-tabs">
            <Tab switchTab={() => { setTabSwitch("skills") }} classText={`tab-item ${tabSwitch == "skills" ? "outer-shadow active" : ""}`} dataTarget=".skills" tabText="skills" />

            <Tab switchTab={() => { setTabSwitch("experience") }} classText={`tab-item ${tabSwitch == "experience" ? "outer-shadow active" : ""}`} dataTarget=".experience" tabText="experience" />

            <Tab switchTab={() => { setTabSwitch("education") }} classText={`tab-item ${tabSwitch == "education" ? "outer-shadow active" : ""}`} dataTarget=".education" tabText="education" />

          </div>
        </div>
        {/* <!--about tabs end --> */}

        {/* <!-- skills start --> */}
        <div className="row">
          <div className={`skills tab-content ${tabSwitch == "skills" ? "active" : ""}`}>
            <div className="row">

              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>Html</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(90% - 14px)" }}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>CSS</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(75% - 14px)" }}>
                    <span>75%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>Javascript</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(70% - 14px)" }}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>Bootstrap</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(85% - 14px)" }}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>Jquery</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(60% - 14px)" }}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>PHP</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(85% - 14px)" }}>
                    <span>65%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>SQL</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(85% - 14px)" }}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
              {/* <!-- skill item start --> */}
              <div className="skill-item">
                <p>WordPress</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar" style={{ width: "calc(80% - 14px)" }}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              {/* <!-- skill item end --> */}
            </div>
          </div>
        </div>
        {/* <!-- skills end --> */}

        {/* <!-- experience start --> */}
        <div className="row">
          <div className={`experience tab-content ${tabSwitch == "experience" ? "active" : ""}`}>
            <div className="row">
              <div className="timeline">
                <div className="row">
                  {/* <!-- timeline item start --> */}
                  <div className="timeline-item">
                    <div className="timeline-item-inner outer-shadow">
                      <i className="icon"><FaBriefcase /></i>
                      <span>May, 2019 - Present</span>
                      <h3>Front End & WordPress developer </h3>
                      <h4>Fiverr, Israel</h4>
                      <p>
                        Currently, I'm working at Fiverr as Freelancer by providing my services as
                        Front End Developer over 100+ clients per month. Fiverr is an Israeli online
                        marketplace for freelance services. The company provide a platform for
                        freelancers to offer services to customers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- experience end --> */}

        {/* <!-- education start --> */}
        <div className="row">
          <div className={`education tab-content ${tabSwitch == "education" ? "active" : ""}`}>
            <div className="row">
              <div className="timeline">
                <div className="row">
                  {/* <!-- timeline item start --> */}
                  <div className="timeline-item">
                    <div className="timeline-item-inner outer-shadow">
                      <i className="icon"><FaGraduationCap /></i>
                      <span>2019 - Present</span>
                      <h3>Bachelor of Technology In Computer Science & Soft. Engineering</h3>
                      <p>
                        Currently, I'm pursuing my B.Tech Degree in Computer Science and Software
                        Engineering from <a href="https://cgu-odisha.ac.in/" target="_blank"
                          style={{ color: "#666666", fontWeight: 550 }}
                          rel="nofollow">C.V. Raman Global University <i
                            className='fas fa-external-link-alt'></i></a> since August 2019. This is
                        an engineering and management institution located in Bhubaneswar, Odisha.
                      </p>
                    </div>
                  </div>
                  {/* <!-- timeline item end --> */}
                  {/* <!-- timeline item start --> */}
                  <div className="timeline-item">
                    <div className="timeline-item-inner outer-shadow">
                      <i className="fas fa-graduation-cap icon"></i>
                      <span>2017 - 2019</span>
                      <h3>Higher Secondary Education</h3>
                      <p>
                        I've completed my Intermediate with Science Stream(Physics, Chemistry, Maths
                        and Computer Fundamentals) from CBSE Board in India. I studied from <label
                          style={{ fontWeight: 550, color: "#666666" }}> Crescent Public
                          School</label> (Affiliated from CBSE Board), SEC-VI, BOKARO STEEL CITY,
                        JHARKHAND.

                      </p>
                    </div>
                  </div>
                  {/* <!-- timeline item end --> */}
                  {/* <!-- timeline item start --> */}
                  <div className="timeline-item">
                    <div className="timeline-item-inner outer-shadow">
                      <i className="icon"><FaGraduationCap /></i>
                      <span>2017</span>
                      <h3>Secondary Education</h3>
                      <p>
                        I've completed my Matriculation from CBSE Board in India. I studied at
                        <label style={{ fontWeight: 550, color: "#666666" }}> Crescent
                          Public School</label> (Affiliated from CBSE Board), SEC-VI, BOKARO STEEL
                        CITY, JHARKHAND.
                      </p>
                    </div>
                  </div>
                  {/* <!-- timeline item end --> */}

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- education end --> */}
      </div>
    </section>
  )
}

export default About