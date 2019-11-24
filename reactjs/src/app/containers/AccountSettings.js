import React, { Component } from "react";
import AccountSettingsForm from "../Forms/AccountSettingsForm";
import UpdateAdsQueue from "../components/UpdateAds/UpdateAdsQueue";
import UpdateAdsGuidelines from "../components/UpdateAds/UpdateAdsGuidelines";

class AccountSettings extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>Account Settings</h4>
        </div>
        <div className="form-box-items wrap-3-1 left">
          <div className="form-box-item full">
            <AccountSettingsForm></AccountSettingsForm>
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

export default AccountSettings;
