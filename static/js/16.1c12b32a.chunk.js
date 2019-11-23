(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[16],{208:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var n=s.apply(null,r);n&&e.push(n)}else if("object"===i)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},209:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=o(a(0)),i=(o(a(17)),o(a(210))),n=o(a(211)),l=o(a(208));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),r(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,o=t.activePage,c=t.prevPageText,u=t.nextPageText,p=t.firstPageText,d=t.lastPageText,f=t.totalItemsCount,h=t.onChange,m=t.activeClass,g=t.itemClass,v=t.itemClassFirst,b=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,P=t.activeLinkClass,_=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),E=t.linkClassFirst,O=t.linkClassPrev,N=t.linkClassNext,x=t.linkClassLast,j=(t.hideFirstLastPages,t.getPageUrl),w=new i.default(a,r).build(f,o),M=w.first_page;M<=w.last_page;M++)e.push(s.default.createElement(n.default,{isActive:M===o,key:M,href:j(M),pageNumber:M,pageText:M+"",onClick:h,itemClass:g,linkClass:k,activeClass:m,activeLinkClass:P}));return this.isPrevPageVisible(w.has_previous_page)&&e.unshift(s.default.createElement(n.default,{key:"prev"+w.previous_page,pageNumber:w.previous_page,onClick:h,pageText:c,isDisabled:!w.has_previous_page,itemClass:(0,l.default)(g,b),linkClass:(0,l.default)(k,O),disabledClass:_})),this.isFirstPageVisible(w.has_previous_page)&&e.unshift(s.default.createElement(n.default,{key:"first",pageNumber:1,onClick:h,pageText:p,isDisabled:!w.has_previous_page,itemClass:(0,l.default)(g,v),linkClass:(0,l.default)(k,E),disabledClass:_})),this.isNextPageVisible(w.has_next_page)&&e.push(s.default.createElement(n.default,{key:"next"+w.next_page,pageNumber:w.next_page,onClick:h,pageText:u,isDisabled:!w.has_next_page,itemClass:(0,l.default)(g,y),linkClass:(0,l.default)(k,N),disabledClass:_})),this.isLastPageVisible(w.has_next_page)&&e.push(s.default.createElement(n.default,{key:"last",pageNumber:w.total_pages,onClick:h,pageText:d,isDisabled:w.current_page===w.total_pages,itemClass:(0,l.default)(g,C),linkClass:(0,l.default)(k,x),disabledClass:_})),e}},{key:"render",value:function(){var e=this.buildPages();return s.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();c.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=c},210:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var r=Math.max(1,t-Math.floor(this.length/2)),s=Math.min(a,t+Math.floor(this.length/2));s-r+1<this.length&&(t<a/2?s=Math.min(a,s+(this.length-(s-r))):r=Math.max(1,r-(this.length-(s-r)))),s-r+1>this.length&&(t>a/2?r++:s--);var i=this.per_page*(t-1);i<0&&(i=0);var n=this.per_page*t-1;return n<0&&(n=0),n>Math.max(e-1,0)&&(n=Math.max(e-1,0)),{total_pages:a,pages:Math.min(s-r+1,a),current_page:t,first_page:r,last_page:s,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(n-i+1,e),first_result:i,last_result:n}}},211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a(0),i=l(s),n=(l(a(17)),l(a(208)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,r=t.pageNumber;e.preventDefault(),a||this.props.onClick(r)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),s=t.itemClass,l=t.linkClass,c=t.activeLinkClass,u=t.disabledClass,p=t.isActive,d=t.isDisabled,f=t.href,h=(0,n.default)(s,(o(e={},r,p),o(e,u,d),e)),m=(0,n.default)(l,o({},c,p));return i.default.createElement("li",{className:h,onClick:this.handleClick.bind(this)},i.default.createElement("a",{className:m,href:f},a))}}]),t}();c.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=c},355:function(e,t,a){"use strict";a.r(t);var r=a(10),s=a(11),i=a(15),n=a(13),l=a(20),o=a(14),c=a(0),u=a.n(c),p=a(8),d=a(52),f=a(209),h=a.n(f),m=a(9),g=a(16),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(n.a)(t).call(this,e))).state={hover:!1},a.hoverOn=a.hoverOn.bind(Object(l.a)(a)),a.hoverOff=a.hoverOff.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"hoverOn",value:function(){this.setState({hover:!0})}},{key:"hoverOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return u.a.createElement("div",{onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff},u.a.createElement("div",{className:"product-settings primary dropdown-handle"},u.a.createElement("span",{className:"sl-icon icon-settings"})),u.a.createElement("ul",{className:this.state.hover?"dropdown small hover-effect open":"dropdown small hover-effect closed"},u.a.createElement("li",{className:"dropdown-item"},u.a.createElement("div",{className:"dp-triangle"}),u.a.createElement(m.b,{to:"update-ad/".concat(this.props.nid)},"Update Ad")),u.a.createElement("li",{className:"dropdown-item"},u.a.createElement(m.b,{to:"products/".concat(this.props.nid)},"View"))))}}]),t}(c.Component);function b(e){return u.a.createElement("div",{className:"product-item column",key:e.product.nid},u.a.createElement("div",{className:"product-preview-actions"},u.a.createElement("figure",{className:"product-preview-image"},u.a.createElement("img",{id:"product-src",src:e.product.img[0],alt:"product"})),u.a.createElement(v,{nid:e.product.nid})),u.a.createElement("div",{className:"product-info"},u.a.createElement(m.c,{to:"/products/".concat(e.product.nid)},u.a.createElement("p",{className:"text-header",title:e.product.title},Object(g.i)(e.product.title,25,"....."))),u.a.createElement("p",{className:"product-description"},Object(g.i)(e.product.body,35,".....")),u.a.createElement("a",{href:"shop-gridview-v1.html"},u.a.createElement("p",{className:"category primary"},e.product.category)),u.a.createElement("p",{className:"price"},u.a.createElement("span",null,"\u20b9"),e.product.price?e.product.price:"NA")),u.a.createElement("hr",{className:"line-separator"}),u.a.createElement("div",{className:"user-rating"},u.a.createElement(m.c,{to:"/user/".concat(e.product.uid)},u.a.createElement("figure",{className:"user-avatar small"},u.a.createElement("img",{src:e.product.avatar,alt:"user-avatar"}))),u.a.createElement(m.c,{to:"/user/".concat(e.product.uid)},u.a.createElement("p",{className:"text-header tiny"},e.product.username)),u.a.createElement("div",{className:"rating tooltip tooltipstered"},u.a.createElement("span",{className:"icon-camera"}),"\xa0",e.product.img.length)))}var y=a(29),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(n.a)(t).call(this,e))).state={products:{},activePage:1,itemsCountPerPage:y.r,totalItemsCount:1},a.handlePageChange=a.handlePageChange.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"handlePageChange",value:function(e){var t={numberofitem:y.r,uid:Object(g.f)("uid"),pagenumber:e-1};console.log("active page is ".concat(e)),this.props.getUserProducts(t),this.setState({activePage:e})}},{key:"componentDidMount",value:function(){var e={numberofitem:y.r,pagenumber:0,uid:Object(g.f)("uid")};this.props.getUserProducts(e)}},{key:"render",value:function(){var e=this.props.userProducts,t=e.products,a=e.count;return u.a.createElement("div",{className:"dashboard-content"},u.a.createElement("div",{className:"headline buttons primary"},u.a.createElement("h4",null,a," Manage Ads")),u.a.createElement("div",{className:"product-list grid column4-wrap"},(t||[]).map((function(e){return u.a.createElement(b,{key:e.nid,product:e})}))),u.a.createElement("div",{className:"clearfix"}),u.a.createElement("div",{className:"pager tertiary fright"},a>y.r?u.a.createElement(h.a,{activePage:this.state.activePage,itemsCountPerPage:y.r,totalItemsCount:a,pageRangeDisplayed:5,onChange:this.handlePageChange,itemClass:"pager-item",linkClass:"page-link-class"}):null))}}]),t}(c.Component);t.default=Object(d.b)((function(e){return{userProducts:e.userProducts}}),(function(e){return{getUserProducts:function(t){e({type:p.e,payload:t})}}}))(C)}}]);
//# sourceMappingURL=16.1c12b32a.chunk.js.map