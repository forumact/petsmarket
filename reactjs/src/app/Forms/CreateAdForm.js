import React, { Component } from "react";
import {
  ItemCategory,
  ItemConditions,
  city,
  ItemStatus,
  UploadFormValidation,
  FileApiArray,
  documentTitle,
  AdvertType
} from "../const";
import FileUpload from "../components/FileUpload";
import { productCreate, productUpdate, fetchProductDetails } from "../Networks";
import { IndianRupee } from "../helper";
import FormValidator from "../FormValidator";
import { withRouter } from "react-router-dom";

class CreateAddForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(UploadFormValidation);

    this.state = {
      item_category: "",
      item_advert_type: "",
      item_name: "",
      item_description: "",
      item_picture1: "",
      item_picture2: "",
      item_picture3: "",
      item_picture4: "",
      item_price: "",
      item_status: "",
      item_conditions: "",
      item_city: "",
      item_tags: "",
      item_nid: 0,
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);

    this.submitted = false;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleInputFileChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    //return false;
    const file = document.querySelector(".file");
    file.value = "";
    console.log(validation.isValid);
    if (validation.isValid) {
      if (this.state.item_nid) {
        productUpdate(this.state).then(response => {
          this.props.history.push(`/products/${this.state.item_nid}`);
        });
      } else {
        productCreate(this.state).then(response => {
          console.log(response);
          this.setState({
            item_name: "",
            item_category: "",
            item_advert_type: "",
            item_description: "",
            item_picture1: "",
            item_url1: "",
            item_picture2: "",
            item_url2: "",
            item_picture3: "",
            item_url3: "",
            item_picture4: "",
            item_url4: "",
            item_price: "",
            item_status: "",
            item_conditions: "",
            item_city: "",
            item_tags: "",
            item_nid: 0
          });
          this.props.history.push(`/products/${response.data.nid}`);
        });
      }
    }
    return false;
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <form id="upload_form" onSubmit={this.handleSubmit} autoComplete="off">
        <div className="input-container">
          <label htmlFor="item_name" className="rl-label required">
            Advert Title (Max 150 Characters)
          </label>
          <input
            name="item_name"
            type="text"
            placeholder="Enter them item name here..."
            value={this.state.item_name}
            onChange={this.handleInputChange}
            maxLength="150"
          ></input>
          <span className="form-error">{validation.item_name.message}</span>
        </div>
        <div className="input-container half">
          <label htmlFor="category" className="rl-label required">
            Category
          </label>
          <select
            name="item_category"
            value={this.state.item_category}
            onChange={this.handleInputChange}
          >
            <option />
            {ItemCategory.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="form-error">{validation.item_category.message}</span>
        </div>
        <div className="input-container half">
          <label htmlFor="advert_type" className="rl-label required">
            Advert type
          </label>
          <select
            name="item_advert_type"
            value={this.state.item_advert_type}
            onChange={this.handleInputChange}
          >
            <option />
            {AdvertType.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="form-error">{validation.item_advert_type.message}</span>
        </div>
        <div className="input-container">
          <label htmlFor="item_description" className="rl-label required">
            Description
          </label>
          <textarea
            rows="4"
            cols="50"
            name="item_description"
            placeholder="Enter them item description here..."
            value={this.state.item_description}
            onChange={this.handleInputChange}
          ></textarea>
          <span className="form-error">
            {validation.item_description.message}
          </span>
        </div>

        {FileApiArray.map(fileApi => {
          return (
            <div className="input-container" key={fileApi.id}>
              <label className="rl-label required">{`Upload Image ${fileApi.id}`}</label>
              <div className="upload-file mb-0">
                <div className="upload-file-actions">
                  <FileUpload
                    onChange={this.handleInputFileChange}
                    targetField={`item_picture${fileApi.id}`}
                    fileApi={fileApi.url}
                    image={this.state["item_url" + fileApi.id]}
                  ></FileUpload>
                  <input
                    className="hide"
                    name={`item_picture${fileApi.id}`}
                    id={`pic${fileApi.id}`}
                    type="hidden"
                    placeholder="Enter them item name here..."
                    value={this.state["item_picture" + fileApi.id]}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
              </div>
              <span className="form-error">
                {fileApi.id === "1" ? validation.item_picture1.message : ""}
              </span>
            </div>
          );
        })}

        <div className="input-container half">
          <label htmlFor="price" className="rl-label required">
            Price({IndianRupee})
          </label>
          <input
            name="item_price"
            type="text"
            placeholder="Enter them Price here..."
            value={this.state.item_price}
            onChange={this.handleInputChange}
          ></input>
          <span className="form-error">{validation.item_price.message}</span>
        </div>
        <div className="input-container half">
          <label htmlFor="item_status" className="rl-label required">
            Status
          </label>
          <select
            name="item_status"
            form="carform"
            value={this.state.item_status}
            onChange={this.handleInputChange}
          >
            <option />
            {ItemStatus.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="form-error">{validation.item_status.message}</span>
        </div>
        <div className="clearfix"></div>
        <div className="input-container half">
          <label htmlFor="item_conditions" className="rl-label required">
            Gender
          </label>
          <select
            name="item_conditions"
            form="carform"
            value={this.state.item_conditions}
            onChange={this.handleInputChange}
          >
            <option />
            {ItemConditions.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="form-error">
            {validation.item_conditions.message}
          </span>
        </div>
        <div className="input-container half">
          <label htmlFor="city" className="rl-label required">
            City
          </label>
          <select
            name="item_city"
            form="carform"
            value={this.state.item_city}
            onChange={this.handleInputChange}
          >
            <option />
            {city.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="form-error">{validation.item_city.message}</span>
        </div>
        <div className="input-container">
          <label htmlFor="item_tags" className="rl-label required">
            Tags
          </label>
          <input
            name="item_tags"
            type="text"
            placeholder="Enter them item tags separated by a comma..."
            value={this.state.item_tags}
            onChange={this.handleInputChange}
          ></input>
          <span className="form-error">{validation.item_tags.message}</span>
        </div>
        <hr className="line-separator" />
        {/* <button  type="submit" className="button big dark">Submit Item <span className="primary">for Review</span></button> */}
        <button type="submit" className="button big dark">
          {this.state.item_nid > 0 ? "Update" : "Submit"}
        </button>
      </form>
    );
  }

  componentDidMount() {
    console.log(this.props);
    const data = {
      nid: this.props.nid ? this.props.nid : ""
    };

    if (data.nid) {
      fetchProductDetails(data).then(response => {
        this.setState({
          item_name: response.data.title,
          item_category: response.data.category,
          item_advert_type: response.data.category,
          item_description: response.data.body,
          item_picture1: response.data.picture1,
          item_url1: response.data.img[0],
          item_picture2: response.data.picture2,
          item_url2: response.data.img[1],
          item_picture3: response.data.picture3,
          item_url3: response.data.img[2],
          item_picture4: response.data.picture4,
          item_url4: response.data.img[3],
          item_price: response.data.price,
          item_status: response.data.status,
          item_conditions: response.data.condition,
          item_city: response.data.city,
          item_tags: response.data.title,
          item_picture: response.data.imguri,
          item_nid: response.data.nid
        });
        document.title = `${response.data.title} | ${documentTitle}`;
      });
    }
  }
}

export default withRouter(CreateAddForm);
