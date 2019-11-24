import React from "react";

export default function UploadQueue() {
  return (
    <div className="form-box-item full">
      <h4>Upload Queue</h4>
      <hr className="line-separator" />
      <div className="pg-bar-list">
        <div className="pg-bar-list-item">
          <div className="pg-bar-list-item-info">
            <p className="text-header">Professional Business Card</p>
            <p className="text-header">86%</p>
            <p className="timestamp">4 days ago</p>
          </div>
        </div>
        <div className="pg-bar-list-item">
          <div className="pg-bar-list-item-info">
            <p className="text-header">Professional Business Card</p>
            <p className="text-header">92%</p>
            <p className="timestamp">12 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
