(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[10],{204:function(e,t,a){"use strict";var r=a(10),c=a(11),s=a(15),n=a(14),i=a(16),l=a(0),o=a.n(l),u=a(18),m=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section-headline-wrap ".concat(u.e)},o.a.createElement("div",{className:"section-headline"},o.a.createElement("h2",{className:"strtocaptalize"},this.props.title),o.a.createElement("p",null,"Home",o.a.createElement("span",{className:"separator"},"/"),o.a.createElement("span",{className:"current-section"},this.props.title))))}}]),t}(l.Component);t.a=m},210:function(e,t,a){"use strict";var r=a(10),c=a(11),s=a(15),n=a(14),i=a(16),l=a(0),o=a.n(l),u=a(13),m=a(18),p=a(17),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"yourfavorites",value:function(e,t,a){if(e.preventDefault(),"Flagged"===a)return console.log(t,"item already flagged"),!1;Object(p.n)(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.nid,r=t.flag;return"stop"===r?null:o.a.createElement("div",{className:"preview-action"},o.a.createElement("a",{href:"/"},o.a.createElement("div",{className:"circle tiny secondary"},o.a.createElement("span",{onClick:function(t){return e.yourfavorites(t,a,r)},className:"icon-heart"}))),o.a.createElement("a",{href:"/"},o.a.createElement("p",null,"Favourites1 +")))}}]),t}(l.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.product.img?this.props.product.img[0]:"";return o.a.createElement("div",{className:"product-item column"},o.a.createElement("div",{className:"product-preview-actions"},o.a.createElement("figure",{className:"product-preview-image"},o.a.createElement("img",{id:"product-src",src:e,alt:"product"})),o.a.createElement("div",{className:"preview-actions"},o.a.createElement("div",{className:"preview-action"},o.a.createElement(u.c,{exact:!0,to:"/products/".concat(this.props.product.nid)},o.a.createElement("div",{className:"circle tiny primary"},o.a.createElement("span",{className:"icon-tag"}))),o.a.createElement(u.c,{exact:!0,to:"/products/".concat(this.props.product.nid)},o.a.createElement("p",null,"Go to Ad"))),o.a.createElement(d,{nid:this.props.product.nid,flag:this.props.product.flag}))),o.a.createElement("div",{className:"product-info"},o.a.createElement(u.c,{exact:!0,to:"/products/".concat(this.props.product.nid)},o.a.createElement("p",{className:"text-header",title:this.props.product.title},Object(m.i)(this.props.product.title,25,"....."))),o.a.createElement("p",{className:"product-description"},Object(m.i)(this.props.product.body,30,".....")),o.a.createElement(u.c,{exact:!0,to:"/products/".concat(this.props.product.nid)},o.a.createElement("p",{className:"category tertiary"},this.props.product.category)),o.a.createElement("p",{className:"price"},o.a.createElement("span",null,m.c),this.props.product.price?this.props.product.price:"NA")),o.a.createElement("hr",{className:"line-separator"}),o.a.createElement("div",{className:"user-rating"},o.a.createElement(u.c,{to:"/user/".concat(this.props.product.uid)},o.a.createElement("figure",{className:"user-avatar small"},o.a.createElement("img",{src:this.props.product.avatar,alt:"user-avatar"}))),o.a.createElement(u.c,{to:"/user/".concat(this.props.product.uid)},o.a.createElement("p",{className:"text-header tiny strtocaptalize"},this.props.product.username)),o.a.createElement("div",{className:"rating tooltip tooltipstered"},o.a.createElement("span",{className:"icon-camera"}),"\xa0",this.props.product.img.length)))}}]),t}(l.Component);t.a=h},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(10),c=a(11),s=a(15),n=a(14),i=a(16),l=a(0),o=a.n(l),u=a(341),m=a(342),p=a(343),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sidebar-item author-bio"},o.a.createElement("a",{href:"user-profile.html",className:"user-avatar-wrap medium"},o.a.createElement("figure",{className:"user-avatar medium"},o.a.createElement("img",{src:this.props.userbasic.picture,alt:""}))),o.a.createElement("p",{className:"text-header strtocaptalize"},this.props.userbasic.username),o.a.createElement("p",{className:"text-oneline"},this.props.userbasic.about,o.a.createElement("br",null),o.a.createElement("span",{className:"icon-location-pin"}," "),this.props.userbasic.city),o.a.createElement("ul",{className:"share-links"},o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"fb"},o.a.createElement(u.a,{url:"http://google.com",quote:"arulraj",className:"fb"},"\xa0"))),o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"twt"},o.a.createElement(m.a,{url:"http://google.com",quote:"arulraj",className:"twt"},"\xa0"))),o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"gplus"},o.a.createElement(p.a,{url:"http://google.com",quote:"arulraj",className:"gplus"},"\xa0")))))}}]),t}(l.Component)},252:function(e,t,a){"use strict";var r=a(10),c=a(11),s=a(15),n=a(14),i=a(16),l=a(0),o=a.n(l),u=a(13),m=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:"dropdown hover-effect"},o.a.createElement("li",{className:"dropdown-item"},o.a.createElement(u.c,{to:"/user/".concat(this.props.uid)},"Profile Page")),o.a.createElement("li",{className:"dropdown-item"},o.a.createElement(u.c,{to:"/user/".concat(this.props.uid,"/ads")},"Author's Ads")))}}]),t}(l.Component);t.a=m},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(10),c=a(11),s=a(15),n=a(14),i=a(27),l=a(16),o=a(0),u=a.n(o),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={showModal:!1},a.handleShow=a.handleShow.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleShow",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){return u.a.createElement("div",{className:"author-profile-meta-wrap"},u.a.createElement("div",{className:"author-profile-meta"},u.a.createElement("div",{className:"author-profile-info"},u.a.createElement("div",{className:"author-profile-info-item"},u.a.createElement("p",{className:"text-header"},"Member Since:"),u.a.createElement("p",null,this.props.userbasic.member_since)),u.a.createElement("div",{className:"author-profile-info-item"},u.a.createElement("p",{className:"text-header"},"Total Ads:"),u.a.createElement("p",null,this.props.userbasic.total_items)),u.a.createElement("div",{className:"author-profile-info-item"},u.a.createElement("p",{className:"text-header"},"Mail:"),u.a.createElement("p",null,this.props.userbasic.email)),u.a.createElement("div",{className:"author-profile-info-item"},u.a.createElement("p",{className:"text-header"},"Contact:"),u.a.createElement("p",null,this.props.userbasic.contact)))))}},{key:"componentDidMount",value:function(){}}]),t}(o.Component)},345:function(e,t,a){"use strict";a.r(t);var r=a(10),c=a(11),s=a(15),n=a(14),i=a(16),l=a(0),o=a.n(l),u=a(204),m=a(210),p=a(251),d=a(50),h=a(252),E=a(253),f=a(8),b=a(17),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={userProducts:{},userbasic:{}},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="".concat(this.state.userbasic.username,"'s Profile"),t=this.props.userProducts.products;return o.a.createElement("div",null,o.a.createElement(u.a,{title:e}),o.a.createElement("div",{className:"author-profile-banner"}),o.a.createElement(E.a,{userbasic:this.state.userbasic}),o.a.createElement("div",{className:"section-wrap"},o.a.createElement("div",{className:"section overflowable"},o.a.createElement("div",{className:"sidebar left author-profile"},o.a.createElement(p.a,{userbasic:this.state.userbasic}),o.a.createElement(h.a,{uid:this.props.match.params.uid})),o.a.createElement("div",{className:"content right"},o.a.createElement("div",{className:"headline buttons primary"},o.a.createElement("h4",{className:"strtocaptalize"},"Latest Items")),o.a.createElement("div",{className:"product-list grid column3-4-wrap"},(t||[]).map((function(e){return o.a.createElement(m.a,{key:e.nid,product:e})}))),o.a.createElement("div",{className:"clearfix"})),o.a.createElement("div",{className:"clearfix"}))))}},{key:"componentDidMount",value:function(){var e=this,t={uid:this.props.match.params.uid};Object(b.q)(t).then((function(t){e.setState({userbasic:t.data})}));var a={numberofitem:9,pagenumber:0,uid:this.props.match.params.uid};this.props.getUserProducts(a);document.title="".concat("Arulraj"," | {process.env.REACT_APP_DOC_TITLE}")}}]),t}(l.Component);t.default=Object(d.b)((function(e){return{userProducts:e.userProducts}}),(function(e){return{getUserProducts:function(t){e({type:f.e,payload:t})}}}))(v)}}]);
//# sourceMappingURL=10.d6d926cf.chunk.js.map