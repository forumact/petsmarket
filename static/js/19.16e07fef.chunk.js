(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[19],{207:function(e,t,a){"use strict";var n=a(10),c=a(11),r=a(15),s=a(13),l=a(14),i=a(0),m=a.n(i),o=a(16),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"section-headline-wrap ".concat(o.e)},m.a.createElement("div",{className:"section-headline"},m.a.createElement("h2",{className:"strtocaptalize"},this.props.title),m.a.createElement("p",null,"Home",m.a.createElement("span",{className:"separator"},"/"),m.a.createElement("span",{className:"current-section"},this.props.title))))}}]),t}(i.Component);t.a=u},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(10),c=a(11),r=a(15),s=a(13),l=a(14),i=a(0),m=a.n(i),o=a(344),u=a(345),d=a(346),p=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"share-links-wrap"},m.a.createElement("p",{className:"text-header small"},"Share this:"),m.a.createElement("ul",{className:"share-links hoverable"},m.a.createElement("li",null,m.a.createElement("a",{href:"/",className:"fb"},m.a.createElement(o.a,{url:"http://google.com",quote:"arulraj",className:"fb"},"\xa0"))),m.a.createElement("li",null,m.a.createElement("a",{href:"/",className:"twt"},m.a.createElement(u.a,{url:"http://google.com",quote:"arulraj",className:"twt"},"\xa0"))),m.a.createElement("li",null,m.a.createElement("a",{href:"/",className:"gplus"},m.a.createElement(d.a,{url:this.props.url,quote:"arulraj",className:"gplus"},"\xa0"))))))}}]),t}(i.Component)},257:function(e,t,a){"use strict";var n=a(54),c=a(10),r=a(11),s=a(15),l=a(13),i=a(20),m=a(14),o=a(0),u=a.n(o),d=a(9),p=a(209),h=a.n(p),E=a(21),v=a(16),b=a(29),f=a(18),g=a(51),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).validator=new g.a(b.b),a.state={comment:[],validation:a.validator.valid()},a.handleInputChange=a.handleInputChange.bind(Object(i.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.submitted=!1,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value,c=Object(E.a)({},a,n);this.setState(c)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.validator.validate(this.state);if(this.setState({validation:t}),this.submitted=!0,t.isValid){var a=Object(v.g)(this.state.comment,this.props.nid);this.props.attachComment(a),Object(f.a)(a),this.setState({comment:""})}}},{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return 0===Object(v.f)("uid")?u.a.createElement("p",null,"Please login to Post comment."):u.a.createElement("div",null,u.a.createElement("h3",null,"Leave a Comment"),u.a.createElement("div",{className:"comment-wrap comment-reply"},u.a.createElement("a",{href:"user-profile.html"},u.a.createElement("figure",{className:"user-avatar medium"},u.a.createElement("img",{src:v.a,alt:"user"}))),u.a.createElement("form",{className:"comment-reply-form",onSubmit:this.handleSubmit,autoComplete:"off"},u.a.createElement("textarea",{name:"comment",type:"text",placeholder:"Write your comment here...",value:this.state.comment,onChange:this.handleInputChange}),u.a.createElement("span",{className:"form-error"},e.comment.message),u.a.createElement("button",{className:"button primary"},"Post Comment"))))}}]),t}(o.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={numberofitem:b.n,pagenumber:0,count:0,commentlist:[]},a.attachComment=a.attachComment.bind(Object(i.a)(a)),a.handlePageChange=a.handlePageChange.bind(Object(i.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"attachComment",value:function(e){this.setState({commentlist:[].concat(Object(n.a)(this.state.commentlist||[]),[e]),count:this.state.count+1}),console.log(this.state)}},{key:"handlePageChange",value:function(e){var t=this,a={nid:this.props.nid,numberofitem:b.n,pagenumber:e-1};console.log("active page is ".concat(e)),Object(f.e)(a).then((function(a){t.setState({commentlist:a.data.comment,activePage:e,count:a.data.count})}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"post-tab xmtab"},u.a.createElement("div",{className:"tab-header primary"},u.a.createElement("div",{className:"tab-item selected"},u.a.createElement("p",{className:"text-header"},"Comments (",this.state.count,")"))),u.a.createElement("div",{className:"tab-content void open"},u.a.createElement("div",{className:"comment-list"},(this.state.commentlist||[]).map((function(e){return u.a.createElement("div",{key:e.cid},u.a.createElement("div",{className:"comment-wrap",key:e.cid},u.a.createElement(d.b,{to:"/user/".concat(e.uid)},u.a.createElement("figure",{className:"user-avatar medium"},u.a.createElement("img",{src:e.avatar,alt:""}))),u.a.createElement("div",{className:"comment"},u.a.createElement(d.b,{to:"/user/".concat(e.uid)},u.a.createElement("p",{className:"text-header strtocaptalize"},e.uname)),u.a.createElement("p",{className:"timestamp"},e.created),u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.comment_body},className:"product-post-paragraph"}))),u.a.createElement("hr",{className:"line-separator"}))})),u.a.createElement("div",{className:"pager tertiary"},this.state.count>b.n?u.a.createElement(h.a,{activePage:this.state.activePage,itemsCountPerPage:b.n,totalItemsCount:this.state.count,pageRangeDisplayed:5,onChange:this.handlePageChange,itemClass:"pager-item",linkClass:"page-link-class"}):null),u.a.createElement("div",{className:"clearfix"}),u.a.createElement(N,{attachComment:this.attachComment,nid:this.props.nid})))))}},{key:"componentDidMount",value:function(){var e=this,t={nid:this.props.nid,numberofitem:b.n,pagenumber:0};Object(f.e)(t).then((function(t){e.setState({commentlist:t.data.comment,count:t.data.count})}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.nid!==e.nid){var a={nid:this.props.nid,numberofitem:b.n,pagenumber:0};Object(f.e)(a).then((function(e){t.setState({commentlist:e.data.comment,count:e.data.count})}))}}}]),t}(o.Component);t.a=j},352:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(10),r=a(11),s=a(15),l=a(13),i=a(20),m=a(14),o=a(0),u=a.n(o),d=a(207),p=a(257),h=a(16);function E(e){return u.a.createElement("div",{className:"sidebar-item product-info"},u.a.createElement("h4",null,"Product Information"),u.a.createElement("hr",{className:"line-separator"}),u.a.createElement("div",{className:"information-layout"},u.a.createElement("div",{className:"information-layout-item"},u.a.createElement("p",{className:"text-header"},"Upload Date:"),u.a.createElement("p",null,e.product.update)),u.a.createElement("div",{className:"information-layout-item"},u.a.createElement("p",{className:"text-header"},"Category:"),u.a.createElement("p",null,e.product.category)),u.a.createElement("div",{className:"information-layout-item"},u.a.createElement("p",{className:"text-header"},"Gender:"),u.a.createElement("p",{className:"strtoupper"},e.product.condition)),u.a.createElement("div",{className:"information-layout-item"},u.a.createElement("p",{className:"text-header"},"Author's City:"),u.a.createElement("p",null,e.product.city)),u.a.createElement("div",{className:"information-layout-item"},u.a.createElement("p",{className:"text-header"},"Price:"),u.a.createElement("p",null,h.c,e.product.price))))}var v=a(18),b=a(9),f=a(344),g=a(345),N=a(346),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={sellerInfo:{}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.sellerInfo,t=e.name,a=e.picture,n=e.uid,c=e.created,r=e.mobile;return u.a.createElement("div",{className:"sidebar-item author-bio"},u.a.createElement("h4",null,"Product Seller"),u.a.createElement("hr",{className:"line-separator"}),u.a.createElement(b.b,{to:"/user/".concat(n),className:"user-avatar-wrap medium"},u.a.createElement("figure",{className:"user-avatar medium"},u.a.createElement("img",{src:a,alt:""}))),u.a.createElement("p",{className:"text-header strtocaptalize"},t),u.a.createElement("p",{className:"text-oneline"},"Member Since: ",c),u.a.createElement("ul",{className:"share-links"},u.a.createElement("li",null,u.a.createElement("a",{href:"/",className:"fb"},u.a.createElement(f.a,{url:"http://google.com",quote:"arulraj",className:"fb"},"\xa0"))),u.a.createElement("li",null,u.a.createElement("a",{href:"/",className:"twt"},u.a.createElement(g.a,{url:"http://google.com",quote:"arulraj",className:"twt"},"\xa0"))),u.a.createElement("li",null,u.a.createElement("a",{href:"/",className:"gplus"},u.a.createElement(N.a,{url:"http://google.com",quote:"arulraj",className:"gplus"},"\xa0")))),u.a.createElement("span",{className:"button mid dark spaced"},u.a.createElement("span",{className:"icon-phone call-alignment"}),r),u.a.createElement(b.b,{to:"/user/".concat(n),className:"button mid dark spaced"},"Go to Profile Page"))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.uid!==e.uid){var a={uid:this.props.uid};Object(v.p)(a).then((function(e){t.setState({sellerInfo:e.data})}))}}}]),t}(o.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"yourfavorites",value:function(e,t){e.preventDefault(),Object(v.n)(t)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"sidebar-item void buttons"},u.a.createElement("a",{href:"/",className:"button big dark purchase"},u.a.createElement("span",{className:"indian-currency"},this.props.product.price),u.a.createElement("span",null,"Purchase Now!")),u.a.createElement("a",{href:"/",className:"button big tertiary wcart"},u.a.createElement("span",{className:"icon-present"}),this.props.product.status),u.a.createElement("a",{href:"/",className:"button big secondary wfav",onClick:function(t){return e.yourfavorites(t,e.props.nid)}},u.a.createElement("span",{className:"icon-heart"}),u.a.createElement("span",{className:"fav-count"},this.props.product.flag_count),"Add to Favourites"))}}]),t}(o.Component),O=a(253),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={products:[]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"sidebar-item author-items"},u.a.createElement("h4",null,"More Author's Items"),u.a.createElement("div",{className:"product-list grid column4-wrap"},(this.state.products||[]).map((function(e){return u.a.createElement("div",{className:"product-item column",key:e.nid},u.a.createElement("span",{className:"pin featured"},"Featured"),u.a.createElement("div",{className:"product-preview-actions"},u.a.createElement("figure",{className:"product-preview-image"},u.a.createElement("img",{id:"product-src",src:e.img,alt:"product"})),u.a.createElement("div",{className:"preview-actions"},u.a.createElement("div",{className:"preview-action"},u.a.createElement(b.c,{to:"/products/".concat(e.nid)},u.a.createElement("div",{className:"circle tiny primary"},u.a.createElement("span",{className:"icon-tag"}))),u.a.createElement(b.c,{to:"/products/".concat(e.nid)},u.a.createElement("p",null,"Go to Ad"))),u.a.createElement("div",{className:"preview-action"},u.a.createElement("a",{href:"/"},u.a.createElement("div",{className:"circle tiny secondary"},u.a.createElement("span",{className:"icon-heart"}))),u.a.createElement("a",{href:"/"},u.a.createElement("p",null,"Favourites +"))))),u.a.createElement("div",{className:"product-info"},u.a.createElement(b.c,{to:"/products/".concat(e.nid)},u.a.createElement("p",{className:"text-header"},e.title)),u.a.createElement("p",{className:"product-description"},Object(h.i)(e.body,35,".....")),u.a.createElement(b.c,{to:"/products/".concat(e.nid)},u.a.createElement("p",{className:"category primary"},e.category)),u.a.createElement("p",{className:"price"},u.a.createElement("span",null,h.c),e.price)),u.a.createElement("hr",{className:"line-separator"}),u.a.createElement("div",{className:"user-rating"},u.a.createElement(b.c,{to:"/user/".concat(e.uid)},u.a.createElement("figure",{className:"user-avatar small"},u.a.createElement("img",{src:e.avatar,alt:"user-avatar"}))),u.a.createElement(b.c,{to:"/user/".concat(e.uid)},u.a.createElement("p",{className:"text-header tiny strtocaptalize"},e.username))))}))),u.a.createElement("div",{className:"clearfix"}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.uid!==e.uid){var a={uid:this.props.uid};Object(v.k)(a).then((function(e){t.setState({products:e.data.products})}))}}}]),t}(o.Component),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={slider:[]},e.changePath=e.changePath.bind(Object(i.a)(e)),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"changePath",value:function(e){var t=window.getComputedStyle(e.target,null).getPropertyValue("background-image"),a=t.substring(4,t.length-1).replace('"',"").replace('"',"");this.props.onChange("image",a)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"post-image-slides",style:{left:"0px"}},u.a.createElement("div",{className:"image-slides-wrap full"},u.a.createElement("div",{className:"image-slides","data-slide-visible-full":"5","data-slide-visible-small":"2","data-slide-count":"5"},(this.props.image||[]).map((function(t,a){return u.a.createElement("div",{arul:a,key:a,className:0===a?"image-slide selected":"image-slide",style:{left:"".concat(106*a,"px")}},u.a.createElement("figure",{className:"product-preview-image thumbnail liquid",style:{backgroundImage:"url(".concat(t,")")},onClick:e.changePath}))})))))}}]),t}(o.Component),w=a(272),P=a(29),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={product:[],image:""},a.changeProductImage=a.changeProductImage.bind(Object(i.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"changeProductImage",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"render",value:function(){var e=this.state.product,t=e.title,a=e.body,n=e.img,c=n?n[0]:"";return u.a.createElement(o.Fragment,null,u.a.createElement(w.Helmet,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("meta",{name:"description",content:t}),u.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),u.a.createElement(d.a,{title:t}),u.a.createElement("div",{className:"section-wrap"},u.a.createElement("div",{className:"section"},u.a.createElement("div",{className:"sidebar right"},u.a.createElement(y,{product:this.state.product}),u.a.createElement(E,{product:this.state.product}),u.a.createElement(j,{uid:this.state.product.uid}),u.a.createElement(k,{uid:this.state.product.uid})),u.a.createElement("div",{className:"content left"},u.a.createElement("article",{className:"post"},u.a.createElement("div",{className:"post-image"},u.a.createElement("figure",{className:"product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready"},u.a.createElement("img",{id:"product-src",src:this.state.image?this.state.image:c,alt:"product"}))),u.a.createElement(C,{image:n,onChange:this.changeProductImage}),u.a.createElement("div",{className:"post-content"},u.a.createElement("div",{className:"product-post-paragraph",dangerouslySetInnerHTML:{__html:a}})),u.a.createElement("hr",{className:"line-separator"}),u.a.createElement(O.a,{url:"http://localhost:3000/products/".concat(this.props.match.params.nid)})),u.a.createElement(p.a,{nid:this.props.match.params.nid})))))}},{key:"componentDidMount",value:function(){var e=this,t={nid:this.props.match.params.nid};Object(v.i)(t).then((function(t){e.setState({product:t.data}),document.title="".concat(t.data.title," | ").concat(P.o)}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.match.params.nid!==e.match.params.nid){var a={nid:this.props.match.params.nid};Object(v.i)(a).then((function(e){t.setState({product:e.data}),document.title="".concat(e.data.title," | ").concat(P.o)}))}}}]),t}(o.Component);t.default=S}}]);
//# sourceMappingURL=19.16e07fef.chunk.js.map