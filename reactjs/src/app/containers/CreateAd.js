import React, { Component } from "react";
import CreateAdForm from "../Forms/CreateAdForm";
import UpdateAdsGuidelines from "../components/UpdateAds/UpdateAdsGuidelines";
import UpdateAdsQueue from "../components/UpdateAds/UpdateAdsQueue";

class CreateAdd extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div className="headline simple primary">
          <h4>Tell us about what you're advertising</h4>
        </div>
        <div className="form-box-items wrap-3-1 left">
          <div className="form-box-item full">
            <h4>Advert Details</h4>
            <hr className="line-separator" />
            <CreateAdForm />
          </div>
        </div>
        <div className="form-box-items wrap-1-3 right">
          <UpdateAdsQueue></UpdateAdsQueue>
          <UpdateAdsGuidelines></UpdateAdsGuidelines>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default CreateAdd;
