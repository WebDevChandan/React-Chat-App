"use client"

import '@styles/card.scss';
import Image from "next/image";
import { createContext, useState } from "react";
import CardPopUp from "./CardPopUp";
import { FaLock } from 'react-icons/fa';

export const CardContext = createContext(null);

const Card = ({ ...cardData }) => {
  const [cardPopShow, setCardPopShow] = useState(false);

  return (
    <CardContext.Provider value={cardData}>

      {/* <!-- certificate item start--> */}

      <div className="card-item" data-category={cardData.dataCatg} onClick={() => setCardPopShow(!cardPopShow)}>
        <div className={`card-item-inner outer-shadow ${cardData.disable ? "disable" : ""}`}>
          <div className="card-item-img">
            <img
              className={!cardData.disable && "animate"}
              src={cardData.thumbImg}
              alt={cardData.altTxt}
              title={cardData.title} />

              {/* <!-- view project btn --> */}
              {!cardData.disable
                ? <span className="view-card">view {cardData.cardName}</span>
                : <div className="content">
                  <div className="mini-content">
                    <ul className="social">
                      <li><i><FaLock /></i></li>
                      <h2 className="pending">Coming Soon....</h2>
                    </ul>
                  </div>
                </div>
              }
          </div>
          <p className="card-item-title">{cardData.cardTitle} </p>

        </div>
      </div>

      {/* <!-- certificate item end--> */}
      {!cardData.disable && <CardPopUp cardPopShow={cardPopShow} cardPopDown={() => setCardPopShow(!cardPopShow)} />}
    </CardContext.Provider >

  )
}

export default Card