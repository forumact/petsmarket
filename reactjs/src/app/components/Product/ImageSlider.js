import React, { Component } from "react";

export default class ImageSlider extends Component {
  constructor() {
    super();

    this.state = {
      slider: []
    };

    this.changePath = this.changePath.bind(this);
  }

  changePath(e) {
    let backgroundStyle = window
      .getComputedStyle(e.target, null)
      .getPropertyValue("background-image");
    let img = backgroundStyle
      .substring(4, backgroundStyle.length - 1)
      .replace('"', "").replace('"', "");          
    this.props.onChange("image", img);
  }
  render() {
    return (
      <div className="post-image-slides" style={{ left: "0px" }}>
        <div className="image-slides-wrap full">
          <div
            className="image-slides"
            data-slide-visible-full="5"
            data-slide-visible-small="2"
            data-slide-count="5"
          >
            {(this.props.image || []).map((item, i) => (
              <div
                arul={i}
                key={i}
                className={i === 0 ? `image-slide selected` : `image-slide`}
                style={{ left: `${i * 106}px` }}
              > 
                <figure
                  className="product-preview-image thumbnail liquid"
                  style={{ backgroundImage: `url(${item})` }}
                  onClick={this.changePath}
                >
                  {/* <img src={ProductImg1} alt="" /> */}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
