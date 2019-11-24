import React from "react";

export default function UpdateAdsGuidelines() {
  return (
    <div className="form-box-item full">
      <h4>Upload Guidelines</h4>
      <hr className="line-separator" />
      <div className="plain-text-box">
        <div className="plain-text-box-item">
          <p className="text-header">File Upload:</p>
          <p>
            Maximum 5 file can be upload per Adv. Please update Quality image
            with center focuse
          </p>
        </div>
        <div className="plain-text-box-item">
          <p className="text-header">Photos and Images:</p>
          <p>
            1. Upload image type is: JPEG, JPG, PNG.
            <br />
            2. File size should be below 2 MB.
            <br />
            3. First image will displayed as Thumbnail.
            <br />
            4. For Better Image quality, Upload image size with 832x484
          </p>
        </div>
        {/* <div className="plain-text-box-item">
          <p className="text-header">Guide with Links:</p>
          <p>
            <a href="/" className="primary">
              Click here for the link.
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
