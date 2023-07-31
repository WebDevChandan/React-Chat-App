"use client"

import '@styles/card.scss'
import { FaLock } from 'react-icons/fa'
import SectionTitle from '../SectionTitle'
import { useState } from 'react'
import { Card, Tab } from '@components'

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const description = "< li > GoChat is a live free online community chat web application for every people around all over the world.</li ><li>It allows their user to create multiple chat rooms to build a community for sharing information. Users can create their profiles and customize Rooms as per their branding. Moreover, they can make their rooms available for joining as Publicly or Privately as per their preference.</li><li>It uses Front-End and Back-End Tools (PHP & SQL) along with jQuery library and Node.Js.</li>	<li>Required APIs - APIs of Facebook, Google, Twitter (For Social login Integration).</li><li><label style='font-weight: bold; color: $text-black-600; '>Uniqueness</label>:-		GoChat comes with Radio-Station Integration which fetches data from the source 'Radiosure' (www.radiosure.com/stations). Users can play radios (For news & Songs) as per their choice while chatting inside the Chat Room.</li>";

  return (
    <section className="card-section section">
      <div className="container">

        <SectionTitle subTitle="portfolio" title="Latest Projects" />

        <div className="row">
          <div className="card-filter">
            <Tab switchTab={() => { setFilter("all") }} clsTxt={`filter-item ${filter == "all" ? "outer-shadow active" : ""}`} dataTarget="all" tabText="all" />

            <Tab switchTab={() => { setFilter("web-application") }} clsTxt={`filter-item ${filter == "web-application" ? "outer-shadow active" : ""}`} dataTarget="web-application" tabText="web application" />

            <Tab switchTab={() => { setFilter("wordpress") }} clsTxt={`filter-item ${filter == "wordpress" ? "outer-shadow active" : ""}`} dataTarget=".wordpress" tabText="wordpress" />

            <Tab switchTab={() => { setFilter("e-commerce") }} clsTxt={`filter-item ${filter == "e-commerce" ? "outer-shadow active" : ""}`} dataTarget="e-commerce" tabText="e-commerce" />

            <Tab switchTab={() => { setFilter("web-design-&-development") }} clsTxt={`filter-item ${filter == "web-design-&-development" ? "outer-shadow active" : ""}`} dataTarget="web-design-&-development" tabText="web design & development" />
          </div>
        </div>
        {/* <!-- portfolio filter end --> */}


        <div className="row">

          {/* <!-- portfolio item start--> */}
          <Card
            dataCatg="web-application"
            cardName="Project"
            cardTitle="GoChat"
            htmlDesc={description}
            startDate="Apr, 2021"
            endDate="Jul,2021"
            client="Chandan Kumar"
            tools="HTML, CSS, JavaScript, PHP, jQuery, SQL, Node.Js & Required APIs"
            projLink="https://gochat.moviesrocker.co"
            linkText="gochat.moviesrocker.co"
            demoEmail="demo@demo.com"
            demoPass="demo"
            thumbImg="/img/portfolio/thumb/project-16.webp"
            largeImg="/img/portfolio/large/project-16/GoChat Landing Page.webp"
            altTxt="GoChat by MoviesRocker.co"
          />
          <Card
            cardName="Project"
            cardTitle="Meme Generator"
            thumbImg="/img/portfolio/thumb/project-7.webp"
            altTxt="Meme Generator"
            disable= {true}
          />
          {/* <!-- portfolio item end--> */}

        </div>
      </div>
    </section>
  )
}

export default Portfolio