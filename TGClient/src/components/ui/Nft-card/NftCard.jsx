import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nft-card.css";
// designing the card is present in live-auction

import Modal from "../Modal/Modal";


import NftImage from '../Nft-image/NftImage'

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <NftImage img = {imgUrl} />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i className="ri-shopping-bag-line"></i> Place Bid
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
