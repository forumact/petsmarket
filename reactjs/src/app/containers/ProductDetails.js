import React, { Component, Fragment } from "react";
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import ProductInfo from "../components/Product/ProductInfo";
import { fetchProductDetails } from "../Networks";
import ProductSeller from "../components/Product/ProductSeller";
import ProductMarketing from "../components/Product/ProductMarketing";
import SocilaMediaShareLinks from "../components/Product/SocilaMediaShareLinks";
import AuthorsItem from "../components/Product/AuthorsItem";
import ImageSlider from "../components/Product/ImageSlider";
import { Helmet } from "react-helmet";
import { documentTitle, ProdUrl } from "../const";
import { substring } from "../helper";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      image: ""
    };
    this.changeProductImage = this.changeProductImage.bind(this);
  }

  changeProductImage(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { title, body, img } = this.state.product;
    let img1 = img ? img[0] : "";
    let imgprview = this.state.image ? this.state.image : img1;
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href={ProdUrl} />
        </Helmet>
        <Helmet
          title={title}
          meta={[
            { name: "description", content: substring(body, 150, ".....") },
            { property: "og:type", content: "Product" },
            { property: "og:title", content: title },
            { property: "og:image", content: img1 },
            { property: "og:url", content: ProdUrl }
          ]}
        />

        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <ProductMarketing product={this.state.product}></ProductMarketing>
              <ProductInfo product={this.state.product}></ProductInfo>
              <ProductSeller uid={this.state.product.uid}></ProductSeller>
              <AuthorsItem uid={this.state.product.uid}></AuthorsItem>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure
                    className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready"
                    style={{
                      backgroundImage: `url(${imgprview})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "contain"
                    }}
                  >
                    {/* <img
                      id="product-src"
                      src={this.state.image ? this.state.image : img1}
                      alt="product"
                    /> */}
                  </figure>
                </div>
                <ImageSlider
                  image={img}
                  onChange={this.changeProductImage}
                ></ImageSlider>
                <hr className="line-separator" />
                <div className="post-content">
                  {/* {body} */}
                  <div
                    className="product-post-paragraph"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks
                  url={`${ProdUrl}products/${this.props.match.params.nid}`}
                  quote={title}
                ></SocilaMediaShareLinks>
              </article>
              <CommentsList nid={this.props.match.params.nid}></CommentsList>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    const data = {
      nid: this.props.match.params.nid
    };

    fetchProductDetails(data).then(response => {
      this.setState({
        product: response.data
      });
      document.title = `${response.data.title} | ${documentTitle}`;
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.nid !== prevProps.match.params.nid) {
      //Typical usage, don't forget to compare the props
      const data = {
        nid: this.props.match.params.nid
      };

      fetchProductDetails(data).then(response => {
        this.setState({
          product: response.data
        });
        document.title = `${response.data.title} | ${documentTitle}`;
      });
    }
  }
}

export default ProductDetails;
