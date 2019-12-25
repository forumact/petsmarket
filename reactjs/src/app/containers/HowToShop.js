import React from "react";
import { Link } from "react-router-dom";
import HeadLine from "../components/HeadLine";
import image1 from "../../assets/how_to_shop_01.png";
import image2 from "../../assets/how_to_shop_02.png";
import image3 from "../../assets/how_to_shop_03.png";
import { documentTitle } from "../const";

const HowToShop = () => {
  const title = "How To Shop";
  return (
    <div>
      <HeadLine title={title}></HeadLine>
      <div className="ht-banner-wrap">
        <div className="ht-banner void violet">
          <figure className="ht-banner-img1">
            <img src={image1} alt="" />
          </figure>
        </div>
        <div className="ht-banner">
          <div className="ht-banner-content">
            <p className="text-header">Create Your Account</p>
            <p>
              Pets Market is advertising websites here you can regiter with zero
              cost and post your ads. The best Advertise websites on tamilnadu
              especially for Pets.
            </p>
            <Link to={`/user-register`} className="button mid dark">
              Create your <span className="primary">New Account</span>
            </Link>
          </div>
        </div>
        <div className="ht-banner void pink">
          <figure className="ht-banner-img2">
            <img src={image2} alt="" />
          </figure>
        </div>
        <div className="ht-banner">
          <div className="ht-banner-content">
            <p className="text-header">Browse Our Shop Items</p>
            <p>
              Choose from over 2500 pets for sale on Pets Market, including
              Pigeons for sale, Country chicken, siruvidai kozhi and Peruvidai.
            </p>
            <Link to={`/products`} className="button mid dark">
              <span className="primary">Most Popular</span> Items
            </Link>
          </div>
        </div>
        <div className="ht-banner void blue">
          <figure className="ht-banner-img3">
            <img src={image3} alt="" />
          </figure>
        </div>
        <div className="ht-banner">
          <div className="ht-banner-content">
            <p className="text-header">Advertise Free</p>
            <p>
              Advertise your birds for sale on the{" "}
              <strong>{documentTitle}</strong> website to THOUSANDS of daily
              visitors. What's more, you can place a basic ad online for FREE!.
            </p>
            <Link to={`/create-ad`} className="button mid dark">
              Place a <span className="primary">FREE ADD</span> now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToShop;
