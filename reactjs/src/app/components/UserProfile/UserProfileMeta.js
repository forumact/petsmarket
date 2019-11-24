import React, { Component } from "react";
//import AjaxMoadl from "../../Portals/AjaxPortal";

export default class UserProfileMeta extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {    
    this.setState({ showModal: true });
  }

  render() {
    // const ajaxModal = this.state.showModal ? (
    //   <AjaxMoadl showhide="true" data={this.props.userbasic.uid}></AjaxMoadl>
    // ) : null;

    return (
      <div className="author-profile-meta-wrap">
        <div className="author-profile-meta">
          <div className="author-profile-info">
            <div className="author-profile-info-item">
              <p className="text-header">Member Since:</p>
              <p>{this.props.userbasic.member_since}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Total Ads:</p>
              <p>{this.props.userbasic.total_items}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Mail:</p>
              <p>{this.props.userbasic.email}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Contact:</p>
              {/* <button onClick={this.handleShow} className="button secondary">
                Reveal
              </button>
              {ajaxModal} */}
              <p>{this.props.userbasic.contact}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //console.log(this.props);
  }
}
