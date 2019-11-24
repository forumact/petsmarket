import React, { Component } from "react";
import { fetchBlogLatest } from "../../Networks";
import { NavLink } from "react-router-dom";

class LatestBlogs extends Component {
  constructor() {
    super();

    this.state = {
      latestblog: []
    };
  }

  render() {
    return (
      <div className="sidebar-item author-items-v2">
        <h4>{this.props.title}</h4>
        <hr className="line-separator" />
        {(this.state.latestblog || []).map(blog => {
          return (
            <div className="item-preview" key={blog.nid}>
              <NavLink exact to={`/blog/${blog.nid}`}>
                <figure className="product-preview-image small liquid">
                  <img src={blog.img} alt="" />
                </figure>
              </NavLink>
              <NavLink exact to={`/blog/${blog.nid}`}>
                <p className="text-header small">{blog.title}</p>
              </NavLink>
              <p className="category tiny primary">
                <NavLink exact to={`/blog/${blog.nid}`}>
                  Design Inspires
                </NavLink>
              </p>
              <div className="metadata">
                <div className="meta-item">
                  <span className="icon-bubble"></span>
                  <p>{blog.comment_count}</p>
                </div>
                <div className="meta-item">
                  <span className="icon-eye"></span>
                  <p>68</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const data = {
      type: this.props.title,
      nid: this.props.nid
    };

    fetchBlogLatest(data).then(response => {
      this.setState({
        latestblog: response.data
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.nid !== prevProps.nid) {
      const data = {
        type: this.props.title,
        nid: this.props.nid
      };

      fetchBlogLatest(data).then(response => {
        this.setState({
          latestblog: response.data
        });
      });
    }
  }
}

export default LatestBlogs;
