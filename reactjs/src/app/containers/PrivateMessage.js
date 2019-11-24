import React, { Component } from "react";
import { Avatar } from "../helper";
//import { privatemessagecreate } from "../Networks";
import Modal from "../Portals/Modal/Modal";
import PrivateMessageForm from "../Forms/PrivateMessageForm";
import Notify from "../Portals/AlertPortal";

export default class PrivateMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, showAlert: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <PrivateMessageForm handleHide={this.handleHide}></PrivateMessageForm>
      </Modal>
    ) : null;

    const alert = this.state.showAlert ? (
      <Notify showhide="true" message="Form Updated Successfully."></Notify>
    ) : null;

    return (
      <div className="dashboard-content">
        <div className="headline buttons two primary">
          <h4>Your Inbox (36)</h4>
          <button
            onClick={this.handleShow}
            href="#new-message-popup"
            className="button mid-short secondary open-new-message"
          >
            New Message
          </button>
          {modal}
          {alert}
        </div>
        <div className="inbox-messages">
          <div className="inbox-message">
            <div className="inbox-message-actions">
              <input type="checkbox" id="msg1" name="msg1" />
              <label htmlFor="msg1" className="label-check">
                <span className="checkbox primary">
                  <span></span>
                </span>
              </label>
            </div>
            <div className="inbox-message-author">
              <figure className="user-avatar">
                <img src={Avatar} alt="user-img" />
              </figure>
              <p className="text-header">
                Sarah-Imaginarium
                <span className="message-icon icon-envelope secondary"></span>
              </p>
            </div>

            <a href="dashboard-openmessage.html">
              <div className="inbox-message-content">
                <p className="text-header">Product Question</p>
                <p className="description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </div>
            </a>

            <div className="inbox-message-type">
              <span className="message-icon icon-envelope secondary"></span>
            </div>

            <div className="inbox-message-date">
              <p>May 18th, 2014</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ showAlert: true });
    // const userpayload = {
    //   uid: this.props.match.params.uid
    // };
    // privatemessagecreate(userpayload).then(response => {});
  }
}
