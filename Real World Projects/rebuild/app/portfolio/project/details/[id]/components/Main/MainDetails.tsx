import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { ProjectDetailsCloseBtn, ProjectDetailsOpenBtn } from '..'

export default function MainDetails() {
    return (
        <div className="pp-main">
            <div className="pp-main-inner">
                <ProjectDetailsOpenBtn />
                <ProjectDetailsCloseBtn />

                <img src="/img/portfolio/large/project-1/GoChat_Admin_Panel.webp" alt="img" className="pp-img outer-shadow" />
                
                <div className="pp-counter">
                    1 of 6
                </div>
            </div>


            {/* Loader */}
            <div className="pp-loader">
                <div></div>
            </div>


            {/* <!-- pp navigation --> */}
            <div className="pp-prev"><i className="fas fa-play"></i></div>
            <div className="pp-next"><i className="fas fa-play"></i></div>
        </div>
    )
}
