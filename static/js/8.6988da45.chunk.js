(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[8,22],{214:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhGMjZCQzJGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhGMjZCQzNGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEYyNkJDMEY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEYyNkJDMUY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po8nCv0AAACLSURBVHjaYvz//38KAwODFhAXMWAHfUB8jQGocPl/CGgCYgY03ASVWw7isAHxFqhACZKiUqjYVpAamCAXEO8D4n9AnAHF/6BiIDkGZGt4gfgEEP+FKjoBFQPLMyE5mhGJ/R9DDIvV6bisxuWZEnTPwIKnEV/wsABt3wvEz4G4Hktg1wExDyjAAQIMAKOK+M3/IhZ/AAAAAElFTkSuQmCC"},215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var i=a(10),n=a(11),l=a(15),r=a(13),m=a(20),s=a(14),c=a(0),o=a.n(c),d=a(18),u=a(214),p=a.n(u),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={hide:!0},a.fileUploadChange=a.fileUploadChange.bind(Object(m.a)(a)),a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"fileUploadChange",value:function(e,t,a){var i=this,n=e.target.files,l=n[0].name,r=new FileReader,m=new FileReader;r.readAsArrayBuffer(n[0]),m.readAsDataURL(n[0]),this.setState({hide:!1}),m.onloadend=function(e){var a=e.target.result;document.getElementById("preview_"+t).src=a},r.onload=function(e){var t={image_data:e.target.result,file_name:l.split(".").join("-"+Date.now()+".")};Object(d.m)(t,a).then((function(e){e.data.fid[0].value?i.props.onChange(i.props.targetField,e.data.fid[0].value):alert(JSON.stringify(e.data))}))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{onSubmit:this.onFormSubmit},o.a.createElement("div",{className:this.state.hide?"ahide":""},o.a.createElement("img",{className:"upload_preview",src:"",alt:"preview",id:"preview_".concat(this.props.targetField)}),o.a.createElement("img",{className:"icon-class",src:p.a,alt:"icon"})),o.a.createElement("div",{className:"clearfix"}),o.a.createElement("input",{multiple:!0,className:"file",type:"file",name:"file",onChange:function(t){return e.fileUploadChange(t,e.props.targetField,e.props.fileApi)}}))}},{key:"componentDidUpdate",value:function(e){if(this.props.image!==e.image){var t=this.props,a=t.image,i=t.targetField;console.log(i),console.log(a),""!==a&&(document.getElementById("preview_"+i).src=a,this.setState({hide:!1}))}}}]),t}(c.Component)},226:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(0),n=a.n(i);function l(){return n.a.createElement("div",{className:"form-box-item full"},n.a.createElement("h4",null,"Upload Guidelines"),n.a.createElement("hr",{className:"line-separator"}),n.a.createElement("div",{className:"plain-text-box"},n.a.createElement("div",{className:"plain-text-box-item"},n.a.createElement("p",{className:"text-header"},"File Upload:"),n.a.createElement("p",null,"Maximum 5 file can be upload per Adv. Please update Quality image with center focuse")),n.a.createElement("div",{className:"plain-text-box-item"},n.a.createElement("p",{className:"text-header"},"Photos and Images:"),n.a.createElement("p",null,"1. Upload image type is: JPEG, JPG, PNG.",n.a.createElement("br",null),"2. File size should be below 2 MB.",n.a.createElement("br",null),"3. First image will displayed as Thumbnail.",n.a.createElement("br",null),"4. For Better Image quality, Upload image size with 832x484"))))}},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(0),n=a.n(i);function l(){return n.a.createElement("div",{className:"form-box-item full"},n.a.createElement("h4",null,"Upload Queue"),n.a.createElement("hr",{className:"line-separator"}),n.a.createElement("div",{className:"pg-bar-list"},n.a.createElement("div",{className:"pg-bar-list-item"},n.a.createElement("div",{className:"pg-bar-list-item-info"},n.a.createElement("p",{className:"text-header"},"Professional Business Card"),n.a.createElement("p",{className:"text-header"},"86%"),n.a.createElement("p",{className:"timestamp"},"4 days ago"))),n.a.createElement("div",{className:"pg-bar-list-item"},n.a.createElement("div",{className:"pg-bar-list-item-info"},n.a.createElement("p",{className:"text-header"},"Professional Business Card"),n.a.createElement("p",{className:"text-header"},"92%"),n.a.createElement("p",{className:"timestamp"},"12 days ago")))))}},236:function(e,t,a){"use strict";var i=a(21),n=a(10),l=a(11),r=a(15),m=a(13),s=a(20),c=a(14),o=a(0),d=a.n(o),u=a(29),p=a(215),h=a(18),E=a(16),g=a(51),v=a(28),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).validator=new g.a(u.n),a.state={item_category:"",item_advert_type:"",item_name:"",item_description:"",item_picture1:"",item_picture2:"",item_picture3:"",item_picture4:"",item_price:"",item_status:"",item_conditions:"",item_city:"",item_tags:"",item_nid:0,validation:a.validator.valid()},a.handleInputChange=a.handleInputChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a.handleInputFileChange=a.handleInputFileChange.bind(Object(s.a)(a)),a.submitted=!1,a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name,l=Object(i.a)({},n,a);this.setState(l)}},{key:"handleInputFileChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state);var a=this.validator.validate(this.state);return this.setState({validation:a}),this.submitted=!0,document.querySelector(".file").value="",console.log(a.isValid),a.isValid&&(this.state.item_nid?Object(h.u)(this.state).then((function(e){t.props.history.push("/products/".concat(t.state.item_nid))})):Object(h.t)(this.state).then((function(e){console.log(e),t.setState({item_name:"",item_category:"",item_advert_type:"",item_description:"",item_picture1:"",item_url1:"",item_picture2:"",item_url2:"",item_picture3:"",item_url3:"",item_picture4:"",item_url4:"",item_price:"",item_status:"",item_conditions:"",item_city:"",item_tags:"",item_nid:0}),t.props.history.push("/products/".concat(e.data.nid))}))),!1}},{key:"render",value:function(){var e=this,t=this.submitted?this.validator.validate(this.state):this.state.validation;return d.a.createElement("form",{id:"upload_form",onSubmit:this.handleSubmit,autoComplete:"off"},d.a.createElement("div",{className:"input-container"},d.a.createElement("label",{htmlFor:"item_name",className:"rl-label required"},"Advert Title (Max 150 Characters)"),d.a.createElement("input",{name:"item_name",type:"text",placeholder:"Enter them item name here...",value:this.state.item_name,onChange:this.handleInputChange,maxLength:"150"}),d.a.createElement("span",{className:"form-error"},t.item_name.message)),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"category",className:"rl-label required"},"Category"),d.a.createElement("select",{name:"item_category",value:this.state.item_category,onChange:this.handleInputChange},d.a.createElement("option",null),u.f.map((function(e,t){return d.a.createElement("option",{value:e,key:t},e)}))),d.a.createElement("span",{className:"form-error"},t.item_category.message)),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"advert_type",className:"rl-label required"},"Advert type"),d.a.createElement("select",{name:"item_advert_type",value:this.state.item_advert_type,onChange:this.handleInputChange},d.a.createElement("option",null),u.b.map((function(e,t){return d.a.createElement("option",{value:e,key:t},e)}))),d.a.createElement("span",{className:"form-error"},t.item_advert_type.message)),d.a.createElement("div",{className:"input-container"},d.a.createElement("label",{htmlFor:"item_description",className:"rl-label required"},"Description"),d.a.createElement("textarea",{rows:"4",cols:"50",name:"item_description",placeholder:"Enter them item description here...",value:this.state.item_description,onChange:this.handleInputChange}),d.a.createElement("span",{className:"form-error"},t.item_description.message)),u.d.map((function(a){return d.a.createElement("div",{className:"input-container",key:a.id},d.a.createElement("label",{className:"rl-label required"},"Upload Image ".concat(a.id)),d.a.createElement("div",{className:"upload-file mb-0"},d.a.createElement("div",{className:"upload-file-actions"},d.a.createElement(p.default,{onChange:e.handleInputFileChange,targetField:"item_picture".concat(a.id),fileApi:a.url,image:e.state["item_url"+a.id]}),d.a.createElement("input",{className:"hide",name:"item_picture".concat(a.id),id:"pic".concat(a.id),type:"hidden",placeholder:"Enter them item name here...",value:e.state["item_picture"+a.id],onChange:e.handleInputChange}))),d.a.createElement("span",{className:"form-error"},"1"===a.id?t.item_picture1.message:""))})),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"price",className:"rl-label required"},"Price(",E.c,")"),d.a.createElement("input",{name:"item_price",type:"text",placeholder:"Enter them Price here...",value:this.state.item_price,onChange:this.handleInputChange}),d.a.createElement("span",{className:"form-error"},t.item_price.message)),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"item_status",className:"rl-label required"},"Status"),d.a.createElement("select",{name:"item_status",form:"carform",value:this.state.item_status,onChange:this.handleInputChange},d.a.createElement("option",null),u.h.map((function(e,t){return d.a.createElement("option",{value:e,key:t},e)}))),d.a.createElement("span",{className:"form-error"},t.item_status.message)),d.a.createElement("div",{className:"clearfix"}),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"item_conditions",className:"rl-label required"},"Gender"),d.a.createElement("select",{name:"item_conditions",form:"carform",value:this.state.item_conditions,onChange:this.handleInputChange},d.a.createElement("option",null),u.g.map((function(e,t){return d.a.createElement("option",{value:e,key:t},e)}))),d.a.createElement("span",{className:"form-error"},t.item_conditions.message)),d.a.createElement("div",{className:"input-container half"},d.a.createElement("label",{htmlFor:"city",className:"rl-label required"},"City"),d.a.createElement("select",{name:"item_city",form:"carform",value:this.state.item_city,onChange:this.handleInputChange},d.a.createElement("option",null),u.o.map((function(e,t){return d.a.createElement("option",{value:e,key:t},e)}))),d.a.createElement("span",{className:"form-error"},t.item_city.message)),d.a.createElement("div",{className:"input-container"},d.a.createElement("label",{htmlFor:"item_tags",className:"rl-label required"},"Tags"),d.a.createElement("input",{name:"item_tags",type:"text",placeholder:"Enter them item tags separated by a comma...",value:this.state.item_tags,onChange:this.handleInputChange}),d.a.createElement("span",{className:"form-error"},t.item_tags.message)),d.a.createElement("hr",{className:"line-separator"}),d.a.createElement("button",{type:"submit",className:"button big dark"},this.state.item_nid>0?"Update":"Submit"))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t={nid:this.props.nid?this.props.nid:""};t.nid&&Object(h.i)(t).then((function(t){e.setState({item_name:t.data.title,item_category:t.data.category,item_advert_type:t.data.category,item_description:t.data.body,item_picture1:t.data.picture1,item_url1:t.data.img[0],item_picture2:t.data.picture2,item_url2:t.data.img[1],item_picture3:t.data.picture3,item_url3:t.data.img[2],item_picture4:t.data.picture4,item_url4:t.data.img[3],item_price:t.data.price,item_status:t.data.status,item_conditions:t.data.condition,item_city:t.data.city,item_tags:t.data.title,item_picture:t.data.imguri,item_nid:t.data.nid}),document.title="".concat(t.data.title," | ").concat(u.q)}))}}]),t}(o.Component);t.a=Object(v.f)(b)},341:function(e,t,a){"use strict";a.r(t);var i=a(10),n=a(11),l=a(15),r=a(13),m=a(14),s=a(0),c=a.n(s),o=a(236),d=a(226),u=a(227),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dashboard-content"},c.a.createElement("div",{className:"headline simple primary"},c.a.createElement("h4",null,"Tell us about what you're advertising")),c.a.createElement("div",{className:"form-box-items wrap-3-1 left"},c.a.createElement("div",{className:"form-box-item full"},c.a.createElement("h4",null,"Advert Details"),c.a.createElement("hr",{className:"line-separator"}),c.a.createElement(o.a,null))),c.a.createElement("div",{className:"form-box-items wrap-1-3 right"},c.a.createElement(u.a,null),c.a.createElement(d.a,null)),c.a.createElement("div",{className:"clearfix"}))}}]),t}(s.Component);t.default=p}}]);
//# sourceMappingURL=8.6988da45.chunk.js.map