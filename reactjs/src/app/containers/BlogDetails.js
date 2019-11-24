import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import { fetchBlogDetails } from "../Networks";
import SocilaMediaShareLinks from "../components/Product/SocilaMediaShareLinks";
import LatestBlogs from "../components/Blog/LatestBlogs";
import {Helmet} from "react-helmet";
import { documentTitle } from "../const";

class BlogDetails extends Component {
  constructor() {
    super();

    this.state = {
      blog: []
    };
  }

  render() {
    const { title, body, img } = this.state.blog;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />          
          <meta name="description" content={title} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <LatestBlogs
                title="Latest Blogs"
                nid={this.props.match.params.nid}
              ></LatestBlogs>
              <LatestBlogs
                title="Popular Blogs"
                nid={this.props.match.params.nid}
              ></LatestBlogs>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                    <img id="product-src" src={img} alt="" />
                  </figure>
                </div>
                <div className="post-content">
                  <div className="product-post-paragraph">
                    {/* {body} */}
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks
                  url={`http://localhost:3000/products/${this.props.match.params.nid}`}
                ></SocilaMediaShareLinks>
              </article>
              <CommentsList nid={this.props.match.params.nid}></CommentsList>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data = {
      nid: this.props.match.params.nid
    };

    fetchBlogDetails(data).then(response => {
      this.setState({
        blog: response.data
      });
      document.title = `${response.data.title} | ${documentTitle}`;
    });
  }

  componentDidUpdate(prevProps) {
    //Typical usage, don't forget to compare the props
    if (this.props.match.params.nid !== prevProps.match.params.nid) {
      const data = {
        nid: this.props.match.params.nid
      };
      fetchBlogDetails(data).then(response => {
        this.setState({
          blog: response.data
        });
        document.title = `${response.data.title} | ${documentTitle}`;
      });
    }
  }
}

export default BlogDetails;
