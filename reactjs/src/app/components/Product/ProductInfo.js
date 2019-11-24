import React from 'react'
import { IndianRupee } from "../../helper";

export default function ProductInfo(props) {
  return (
    <div className="sidebar-item product-info">
    <h4>Product Information</h4>
    <hr className="line-separator" />
    <div className="information-layout">
      <div className="information-layout-item">
        <p className="text-header">Upload Date:</p>
        <p>{props.product.update}</p>
      </div>
      <div className="information-layout-item">
        <p className="text-header">Category:</p>
        <p>{props.product.category}</p>
      </div>
      <div className="information-layout-item">
        <p className="text-header">Gender:</p>
        <p className="strtoupper">{props.product.condition}</p>
      </div>
      <div className="information-layout-item">
        <p className="text-header">Author's City:</p>
        <p>{props.product.city}</p>
      </div>
      <div className="information-layout-item">
        <p className="text-header">Price:</p>
        <p>{IndianRupee}{props.product.price}</p>
      </div>
    </div>
  </div>
  )
}
