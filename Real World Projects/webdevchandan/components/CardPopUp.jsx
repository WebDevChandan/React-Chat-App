"use client"

import Image from 'next/image'
import { useContext, useState } from 'react'
import { FaExternalLinkAlt, FaMinus, FaPlay, FaPlus } from 'react-icons/fa'
import { CardContext } from './Card'

const CardPopUp = ({ cardPopShow, cardPopDown }) => {
    const cardData = useContext(CardContext);
    const [showCardDetails, setShowCardDetails] = useState(false);

    
    return (
        <div className={` cp card-popup ${cardPopShow ? "open" : ""}`}>
            <div className={`cp-details ${showCardDetails ? "active" : ""}`}>
                <div className="cp-details-inner">
                    <div className="cp-title">
                        <h2>{cardData.cardTitle}</h2>
                        {cardData.cardName !== "Project"
                            ? <p>Certificate Authority - <span className="cp-category">{cardData.cfAuthority}</span></p>
                            : <p>Category - <span className="cp-category">{cardData.dataCatg}</span></p>
                        }
                    </div>
                    <div className="cp-sub-details">
                        <div className="row">
                            <div className="description">
                                {cardData.cardName !== "Project"
                                    ?
                                    <>
                                        <h3>"Description"</h3>
                                        <p>{cardData.desc}</p>
                                    </>
                                    :
                                    <>
                                        <h3>Project Brief</h3>
                                        <p>{cardData.htmlDesc}</p>
                                    </>
                                }
                            </div>
                            <div className="info">
                                {cardData.cardName !== "Project"
                                    ? <>
                                        <h3>Certificate Details</h3>
                                        <ul>
                                            <li>Issue Date - <span>{cardData.issDate}</span></li>
                                            <li>Expiry Date - <span>{cardData.expDate}</span></li>
                                            <li>Skills - <span>{cardData.skills}</span></li>
                                            <li>Link - <span><a href={cardData.cfLink}>Click Here <FaExternalLinkAlt /></a></span>
                                            </li>
                                        </ul>
                                    </>
                                    :
                                    <>
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>{cardData.startDate}-{cardData.endDate}</span></li>
                                            <li>Client - <span>{cardData.client}</span></li>
                                            <li>Tools - <span>{cardData.tools}</span></li>
                                            <li>Web - <span><a href={cardData.projLink}>{cardData.linkText}</a></span>
                                            </li>
                                            <li>Use Demo - <span>Email: {cardData.demoEmail} / Password: {cardData.demoPass}</span></li>
                                        </ul>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="separator"></div>

            <div className="cp-main">
                <div className="cp-main-inner">
                    <div className="cp-details-btn outer-shadow hover-in-shadow" onClick={() => setShowCardDetails(!showCardDetails)}>
                        {cardData.cardName} Details <i>{showCardDetails ? <FaMinus /> : <FaPlus />}</i>
                    </div>
                    <div className="cp-close outer-shadow hover-in-shadow" onClick={() => {
                        cardPopDown(); setShowCardDetails(!showCardDetails); }}>
                        &times;
                    </div>
                    <img
                        src={cardData.largeImg}
                        alt={cardData.altTxt}
                        className="cp-img outer-shadow"
                    />
                    <div className="cp-counter">
                        1 of 6
                    </div>
                </div>

                <div className="cp-loader">
                    <div></div>
                </div>

                {cardData.cardName == "Project" && <><div className="cp-prev"><FaPlay /></div>
                    <div className="cp-next"><FaPlay /></div></>}
            </div>
        </div>
    )
}

export default CardPopUp