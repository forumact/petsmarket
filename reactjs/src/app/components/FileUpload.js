import React, { Component } from "react";
import { fileupload } from "../Networks";
import CloseIcon from "../../assets/close-icon-small.png";

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };

    this.fileUploadChange = this.fileUploadChange.bind(this);
  }

  fileUploadChange(e, previewid, fileApi) {
    let files = e.target.files;
    let filename = files[0].name;

    let reader = new FileReader();
    var readerBase64 = new FileReader();

    reader.readAsArrayBuffer(files[0]);

    readerBase64.readAsDataURL(files[0]);
    this.setState({
      hide: false
    });
    readerBase64.onloadend = function(e) {
      var base64 = e.target.result;
      document.getElementById("preview_" + previewid).src = base64;
    };

    reader.onload = e => {
      var strImage = e.target.result;

      let fileobject = {
        image_data: strImage,
        file_name: filename.split(".").join("-" + Date.now() + ".")
      };
      fileupload(fileobject, fileApi).then(response => {
        if (response.data.fid[0].value) {
          this.props.onChange(
            this.props.targetField,
            response.data.fid[0].value
          );
        } else {
          alert(JSON.stringify(response.data));
        }
      });
    };
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <div className={this.state.hide ? "ahide" : ""}>
          <img
            className="upload_preview"
            src=""
            alt="preview"
            id={`preview_${this.props.targetField}`}
          />
          <img className="icon-class" src={CloseIcon} alt="icon" />
        </div>
        <div className="clearfix"></div>
        <input
          multiple
          className="file"
          type="file"
          name="file"
          onChange={e =>
            this.fileUploadChange(e, this.props.targetField, this.props.fileApi)
          }
        />
      </div>
    );
  }

  // componentDidMount() {
  //   let { avatar, targetField } = this.props;
  //   console.log(targetField);
  //   console.log(avatar);
  //   if (avatar !== "") {
  //     document.getElementById("preview_" + targetField).src = avatar;
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.image !== prevProps.image) {
      let { image, targetField } = this.props;
      console.log(targetField);
      console.log(image);
      if (image !== "") {
        document.getElementById("preview_" + targetField).src = image;
        this.setState({
          hide: false
        });
      }
    }
  }
}
