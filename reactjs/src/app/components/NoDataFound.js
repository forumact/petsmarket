import React, { Component } from "react";

export default class NoDataFound extends Component {
  render() {
    return (
      <section className="section-wrap">
        <div className="section">
          <div className="content full">No Data was Found for this Criteria!</div>
        </div>
      </section>
    );
  }
}
