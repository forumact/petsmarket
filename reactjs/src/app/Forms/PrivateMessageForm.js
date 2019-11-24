import React, { Component } from "react";

export default class PrivateMessageForm extends Component {
  render() {
    return (
      <div className="modal">
        <div id="new-message-popup" className="form-popup new-message">
          <div className="form-popup-content">
            <h4 className="popup-title">Write a New Message</h4>
            <hr className="line-separator" />
            <form className="new-message-form">
              <div className="input-container field-add">
                <label htmlFor="mailto" className="rl-label b-label required">
                  To:
                </label>
                <label htmlFor="mailto" className="select-block">
                  <select name="mailto" id="mailto">
                    <option value="0">
                      Select from the authors you follow...
                    </option>
                    <option value="1">Vynil Brush</option>
                    <option value="2">Jenny_Block</option>
                  </select>
                </label>
                <div className="button dark-light add-field"></div>
              </div>
              <div className="input-container">
                <label htmlFor="subject" className="rl-label b-label">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject here..."
                />
              </div>
              <div className="input-container">
                <label htmlFor="message" className="rl-label b-label required">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button className="button mid dark">
                Send <span className="primary">Message</span>
              </button>
            </form>
          </div>
          <div onClick={this.props.handleHide} className="close-btn mfp-close">
            x
          </div>
        </div>
      </div>
    );
  }
}
