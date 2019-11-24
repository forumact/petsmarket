import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import OurServices from "../components/OurServices";
import ProductShowcase from "../components/Home/ProductShowcase";
import SubscribeBanner from "../components/Home/SubscribeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <OurServices></OurServices>
      <ProductShowcase></ProductShowcase>
      <div className="clearfix"></div>
      <SubscribeBanner></SubscribeBanner>
    </div>
  );
};

export default Home;
