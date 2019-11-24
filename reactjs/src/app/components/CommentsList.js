import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import CommentForm from "../Forms/CommentForm";
import { fetchCommentList } from "../Networks";
import { commentnumber } from "../const";

class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberofitem: commentnumber,
      pagenumber: 0,
      count: 0,
      commentlist: []
    };

    this.attachComment = this.attachComment.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  attachComment(messagejson) {    
    this.setState({
      commentlist: [...(this.state.commentlist || []), messagejson],
      count: this.state.count + 1
    });
    console.log(this.state);
  }

  handlePageChange(pageNumber) {
    const payload = {
      nid: this.props.nid,
      numberofitem: commentnumber,
      pagenumber: pageNumber - 1
    };
    console.log(`active page is ${pageNumber}`);
    fetchCommentList(payload).then(response => {
      this.setState({
        commentlist: response.data.comment,
        activePage: pageNumber,
        count: response.data.count
      });
    });
  }

  render() {
    return (
      <div>
        <div className="post-tab xmtab">
          <div className="tab-header primary">
            <div className="tab-item selected">
              <p className="text-header">Comments ({this.state.count})</p>
            </div>
          </div>
          <div className="tab-content void open">
            <div className="comment-list">
              {(this.state.commentlist || []).map(c => {
                return (
                  <div key={c.cid}>
                    <div className="comment-wrap" key={c.cid}>
                      <Link to={`/user/${c.uid}`}>
                        <figure className="user-avatar medium">
                          <img src={c.avatar} alt="" />
                        </figure>
                      </Link>
                      <div className="comment">
                        <Link to={`/user/${c.uid}`}>
                          <p className="text-header strtocaptalize">
                            {c.uname}
                          </p>
                        </Link>
                        {/* <span className="pin greyed">Purchased</span> */}
                        <p className="timestamp">{c.created}</p>
                        {/* <a href="/" className="report">Report</a> */}
                        <div
                          dangerouslySetInnerHTML={{ __html: c.comment_body }}
                          className="product-post-paragraph"
                        />
                      </div>
                    </div>
                    <hr className="line-separator" />
                  </div>
                );
              })}
              <div className="pager tertiary">
                {this.state.count > commentnumber ? (
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={commentnumber}
                    totalItemsCount={this.state.count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    itemClass="pager-item"
                    linkClass="page-link-class"
                  />
                ) : null}
              </div>
              <div className="clearfix"></div>
              <CommentForm
                attachComment={this.attachComment}
                nid={this.props.nid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const payload = {
      nid: this.props.nid,
      numberofitem: commentnumber,
      pagenumber: 0
    };

    fetchCommentList(payload).then(response => {
      this.setState({
        commentlist: response.data.comment,
        count: response.data.count
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.nid !== prevProps.nid) {
      //Typical usage, don't forget to compare the props
      const payload = {
        nid: this.props.nid,
        numberofitem: commentnumber,
        pagenumber: 0
      };

      fetchCommentList(payload).then(response => {
        this.setState({
          commentlist: response.data.comment,
          count: response.data.count
        });
      });
    }
  }
}

export default CommentsList;
