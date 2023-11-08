import React from 'react'
import { HeaderDetails, MainDetails } from './components'
import './styles/certificateDetails.scss';

export default function CertificateDetails() {
    const certificateDetails = [{
        headerDetails: {
            title: {
                name: "CSS",
                authority: "HackerRank",
            },
            info: {
                issueDate: "08 Nov, 2021",
                expiryDate: "No Expiry",
                skill: "CSS",
                link: "https://google.com"
            },
            description: "It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.",
        },
        mainDetails: {
            largeImage: "HackerRank-Verfied-CSS-Certificate.png",
            imgText: "HackerRank CSS Certificate"
        }
    }]
    
    return (
        <div className="cp certificate-popup">
            {
                certificateDetails.map(({ headerDetails, mainDetails }, index) => (
                    <>
                        <div className="cp-details" key={index}>
                            <div className="cp-details-inner">
                                <HeaderDetails headerDetails={headerDetails} />
                            </div>
                        </div>

                        <div className="separator"></div>

                        <div className="cp-main">
                            <MainDetails mainDetails={mainDetails} />

                            {/* Loader */}
                            <div className="cp-loader">
                                <div></div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
