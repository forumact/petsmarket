(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[12],{204:function(e,t,a){"use strict";var s=a(10),i=a(11),n=a(15),r=a(14),l=a(16),o=a(0),c=a.n(o),u=a(18),p=function(e){function t(){return Object(s.a)(this,t),Object(n.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section-headline-wrap ".concat(u.e)},c.a.createElement("div",{className:"section-headline"},c.a.createElement("h2",{className:"strtocaptalize"},this.props.title),c.a.createElement("p",null,"Home",c.a.createElement("span",{className:"separator"},"/"),c.a.createElement("span",{className:"current-section"},this.props.title))))}}]),t}(o.Component);t.a=p},205:function(e,t,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)&&s.length){var r=i.apply(null,s);r&&e.push(r)}else if("object"===n)for(var l in s)a.call(s,l)&&s[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),i=o(a(0)),n=(o(a(20)),o(a(207))),r=o(a(208)),l=o(a(205));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),s(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,s=t.pageRangeDisplayed,o=t.activePage,c=t.prevPageText,u=t.nextPageText,p=t.firstPageText,m=t.lastPageText,f=t.totalItemsCount,d=t.onChange,h=t.activeClass,v=t.itemClass,g=t.itemClassFirst,b=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,E=t.activeLinkClass,_=t.disabledClass,N=(t.hideDisabled,t.hideNavigation,t.linkClass),P=t.linkClassFirst,k=t.linkClassPrev,x=t.linkClassNext,O=t.linkClassLast,j=(t.hideFirstLastPages,t.getPageUrl),w=new n.default(a,s).build(f,o),F=w.first_page;F<=w.last_page;F++)e.push(i.default.createElement(r.default,{isActive:F===o,key:F,href:j(F),pageNumber:F,pageText:F+"",onClick:d,itemClass:v,linkClass:N,activeClass:h,activeLinkClass:E}));return this.isPrevPageVisible(w.has_previous_page)&&e.unshift(i.default.createElement(r.default,{key:"prev"+w.previous_page,pageNumber:w.previous_page,onClick:d,pageText:c,isDisabled:!w.has_previous_page,itemClass:(0,l.default)(v,b),linkClass:(0,l.default)(N,k),disabledClass:_})),this.isFirstPageVisible(w.has_previous_page)&&e.unshift(i.default.createElement(r.default,{key:"first",pageNumber:1,onClick:d,pageText:p,isDisabled:!w.has_previous_page,itemClass:(0,l.default)(v,g),linkClass:(0,l.default)(N,P),disabledClass:_})),this.isNextPageVisible(w.has_next_page)&&e.push(i.default.createElement(r.default,{key:"next"+w.next_page,pageNumber:w.next_page,onClick:d,pageText:u,isDisabled:!w.has_next_page,itemClass:(0,l.default)(v,y),linkClass:(0,l.default)(N,x),disabledClass:_})),this.isLastPageVisible(w.has_next_page)&&e.push(i.default.createElement(r.default,{key:"last",pageNumber:w.total_pages,onClick:d,pageText:m,isDisabled:w.current_page===w.total_pages,itemClass:(0,l.default)(v,C),linkClass:(0,l.default)(N,O),disabledClass:_})),e}},{key:"render",value:function(){var e=this.buildPages();return i.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();c.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=c},207:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var s=Math.max(1,t-Math.floor(this.length/2)),i=Math.min(a,t+Math.floor(this.length/2));i-s+1<this.length&&(t<a/2?i=Math.min(a,i+(this.length-(i-s))):s=Math.max(1,s-(this.length-(i-s)))),i-s+1>this.length&&(t>a/2?s++:i--);var n=this.per_page*(t-1);n<0&&(n=0);var r=this.per_page*t-1;return r<0&&(r=0),r>Math.max(e-1,0)&&(r=Math.max(e-1,0)),{total_pages:a,pages:Math.min(i-s+1,a),current_page:t,first_page:s,last_page:i,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(r-n+1,e),first_result:n,last_result:r}}},208:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),i=a(0),n=l(i),r=(l(a(20)),l(a(205)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),s(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,s=t.pageNumber;e.preventDefault(),a||this.props.onClick(s)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,s=(t.pageNumber,t.activeClass),i=t.itemClass,l=t.linkClass,c=t.activeLinkClass,u=t.disabledClass,p=t.isActive,m=t.isDisabled,f=t.href,d=(0,r.default)(i,(o(e={},s,p),o(e,u,m),e)),h=(0,r.default)(l,o({},c,p));return n.default.createElement("li",{className:d,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:h,href:f},a))}}]),t}();c.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=c},360:function(e,t,a){"use strict";a.r(t);var s=a(10),i=a(11),n=a(15),r=a(14),l=a(27),o=a(16),c=a(0),u=a.n(c),p=a(50),m=a(204),f=a(13),d=a(18),h=function(e){function t(){return Object(s.a)(this,t),Object(n.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"product-item"},u.a.createElement(f.b,{to:"/products/".concat(this.props.fav.nid)},u.a.createElement("figure",{className:"product-preview-image small"},u.a.createElement("img",{src:this.props.fav.img,alt:"product"}))),u.a.createElement("div",{className:"product-info"},u.a.createElement(f.b,{to:"/products/".concat(this.props.fav.nid),title:this.props.fav.title},u.a.createElement("p",{className:"text-header"},Object(d.i)(this.props.fav.title,25,"....."))),u.a.createElement("p",{className:"product-description"},Object(d.i)(this.props.fav.body,35,".....")),u.a.createElement("a",{href:"shop-gridview-v1.html"},u.a.createElement("p",{className:"category primary"},this.props.fav.category))),u.a.createElement("div",{className:"author-data"},u.a.createElement("div",{className:"user-rating"},u.a.createElement(f.b,{to:"/user/".concat(this.props.fav.uid)},u.a.createElement("figure",{className:"user-avatar small"},u.a.createElement("img",{src:this.props.fav.avatar,alt:"user-avatar"}))),u.a.createElement(f.b,{to:"/user/".concat(this.props.fav.uid)},u.a.createElement("p",{className:"text-header tiny strtocaptalize"},this.props.fav.uname))),u.a.createElement("div",{className:"metadata"},u.a.createElement("div",{className:"meta-item"},u.a.createElement("span",{className:"icon-bubble"}),u.a.createElement("p",null,this.props.fav.comment_count)),u.a.createElement("div",{className:"meta-item"},u.a.createElement("span",{className:"icon-eye"}),u.a.createElement("p",null,"210")),u.a.createElement("div",{className:"meta-item"},u.a.createElement("span",{className:"icon-heart"}),u.a.createElement("p",null,this.props.fav.flag_count.favourites)))),u.a.createElement("div",{className:"item-metadata"},u.a.createElement("p",{className:"text-header tiny"},"Gender: ",u.a.createElement("span",null,this.props.fav.condition)),u.a.createElement("br",null),u.a.createElement("p",{className:"text-header tiny"},"Category: ",u.a.createElement("span",null,this.props.fav.category))),u.a.createElement("div",{className:"author-data-reputation"},u.a.createElement("p",{className:"text-header tiny"},"Reputation")),u.a.createElement("div",{className:"item-actions"},u.a.createElement("a",{href:"/",className:"tooltip",title:"Add to Favourites"},u.a.createElement("div",{className:"circle tiny"},u.a.createElement("span",{className:"icon-heart"})))),u.a.createElement("div",{className:"price-info"},u.a.createElement("p",{className:"price medium"},u.a.createElement("span",null,d.c),this.props.fav.price)))}}]),t}(c.Component),v=a(8),g=a(206),b=a.n(g),y=a(32),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e))).state={userFavourites:{},activePage:1,itemsCountPerPage:y.p,totalItemsCount:1},a.handlePageChange=a.handlePageChange.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"handlePageChange",value:function(e){var t={numberofitem:y.p,pagenumber:e-1,uid:this.props.match.params.uid};console.log("active page is ".concat(e)),this.props.getUserFavourites(t),this.setState({activePage:e})}},{key:"render",value:function(){var e=this.props.userFavourites,t=e.flags,a=e.count;return u.a.createElement("div",null,u.a.createElement(m.a,{title:"Your Favourites"}),u.a.createElement("div",{className:"section-wrap"},u.a.createElement("div",{className:"section"},u.a.createElement("div",{className:"content full"},u.a.createElement("div",{className:"headline primary"},u.a.createElement("h4",null,a," Favourites Found"),u.a.createElement("div",{className:"clearfix"})),u.a.createElement("div",{className:"product-showcase"},u.a.createElement("div",{className:"product-list list full"},(t||[]).map((function(e){return u.a.createElement(h,{key:e.fid,fav:e})})))),u.a.createElement("div",{className:"clearfix"}),u.a.createElement("div",{className:"pager tertiary"},a>9?u.a.createElement(b.a,{activePage:this.state.activePage,itemsCountPerPage:y.p,totalItemsCount:a,pageRangeDisplayed:5,onChange:this.handlePageChange,itemClass:"pager-item",linkClass:"page-link-class"}):null)))))}},{key:"componentDidMount",value:function(){var e={numberofitem:y.p,pagenumber:0,uid:this.props.match.params.uid};this.props.getUserFavourites(e)}}]),t}(c.Component);t.default=Object(p.b)((function(e){return{userFavourites:e.userFavourites}}),(function(e){return{getUserFavourites:function(t){e({type:v.d,payload:t})}}}))(C)}}]);
//# sourceMappingURL=12.54ee1c4f.chunk.js.map