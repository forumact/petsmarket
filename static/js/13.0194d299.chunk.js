(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[13,22],{214:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhGMjZCQzJGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhGMjZCQzNGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEYyNkJDMEY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEYyNkJDMUY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po8nCv0AAACLSURBVHjaYvz//38KAwODFhAXMWAHfUB8jQGocPl/CGgCYgY03ASVWw7isAHxFqhACZKiUqjYVpAamCAXEO8D4n9AnAHF/6BiIDkGZGt4gfgEEP+FKjoBFQPLMyE5mhGJ/R9DDIvV6bisxuWZEnTPwIKnEV/wsABt3wvEz4G4Hktg1wExDyjAAQIMAKOK+M3/IhZ/AAAAAElFTkSuQmCC"},215:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(10),l=t(11),i=t(15),r=t(13),s=t(20),m=t(14),c=t(0),o=t.n(c),u=t(18),d=t(214),h=t.n(d),p=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(r.a)(a).call(this,e))).state={hide:!0},t.fileUploadChange=t.fileUploadChange.bind(Object(s.a)(t)),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"fileUploadChange",value:function(e,a,t){var n=this,l=e.target.files,i=l[0].name,r=new FileReader,s=new FileReader;r.readAsArrayBuffer(l[0]),s.readAsDataURL(l[0]),this.setState({hide:!1}),s.onloadend=function(e){var t=e.target.result;document.getElementById("preview_"+a).src=t},r.onload=function(e){var a={image_data:e.target.result,file_name:i.split(".").join("-"+Date.now()+".")};Object(u.m)(a,t).then((function(e){e.data.fid[0].value?n.props.onChange(n.props.targetField,e.data.fid[0].value):alert(JSON.stringify(e.data))}))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{onSubmit:this.onFormSubmit},o.a.createElement("div",{className:this.state.hide?"ahide":""},o.a.createElement("img",{className:"upload_preview",src:"",alt:"preview",id:"preview_".concat(this.props.targetField)}),o.a.createElement("img",{className:"icon-class",src:h.a,alt:"icon"})),o.a.createElement("div",{className:"clearfix"}),o.a.createElement("input",{multiple:!0,className:"file",type:"file",name:"file",onChange:function(a){return e.fileUploadChange(a,e.props.targetField,e.props.fileApi)}}))}},{key:"componentDidUpdate",value:function(e){if(this.props.image!==e.image){var a=this.props,t=a.image,n=a.targetField;console.log(n),console.log(t),""!==t&&(document.getElementById("preview_"+n).src=t,this.setState({hide:!1}))}}}]),a}(c.Component)},226:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n);function i(){return l.a.createElement("div",{className:"form-box-item full"},l.a.createElement("h4",null,"Upload Guidelines"),l.a.createElement("hr",{className:"line-separator"}),l.a.createElement("div",{className:"plain-text-box"},l.a.createElement("div",{className:"plain-text-box-item"},l.a.createElement("p",{className:"text-header"},"File Upload:"),l.a.createElement("p",null,"Maximum 5 file can be upload per Adv. Please update Quality image with center focuse")),l.a.createElement("div",{className:"plain-text-box-item"},l.a.createElement("p",{className:"text-header"},"Photos and Images:"),l.a.createElement("p",null,"1. Upload image type is: JPEG, JPG, PNG.",l.a.createElement("br",null),"2. File size should be below 2 MB.",l.a.createElement("br",null),"3. First image will displayed as Thumbnail.",l.a.createElement("br",null),"4. For Better Image quality, Upload image size with 832x484"))))}},227:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n);function i(){return l.a.createElement("div",{className:"form-box-item full"},l.a.createElement("h4",null,"Upload Queue"),l.a.createElement("hr",{className:"line-separator"}),l.a.createElement("div",{className:"pg-bar-list"},l.a.createElement("div",{className:"pg-bar-list-item"},l.a.createElement("div",{className:"pg-bar-list-item-info"},l.a.createElement("p",{className:"text-header"},"Professional Business Card"),l.a.createElement("p",{className:"text-header"},"86%"),l.a.createElement("p",{className:"timestamp"},"4 days ago"))),l.a.createElement("div",{className:"pg-bar-list-item"},l.a.createElement("div",{className:"pg-bar-list-item-info"},l.a.createElement("p",{className:"text-header"},"Professional Business Card"),l.a.createElement("p",{className:"text-header"},"92%"),l.a.createElement("p",{className:"timestamp"},"12 days ago")))))}},358:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(11),i=t(15),r=t(13),s=t(14),m=t(0),c=t.n(m),o=t(21),u=t(20),d=t(29),h=t(18),p=t(215),b=t(51),E=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(r.a)(a).call(this,e))).validator=new b.a(d.a),t.state={first_name:"",last_name:"",username:"",mobile:"",new_pwd:"",new_pwd2:"",website:"",email:"",city:"",about:"",show_balance:"",notification:"",user_picture:"",avatar:"",uid:0,validation:t.validator.valid()},t.handleInputChange=t.handleInputChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t.handleInputFileChange=t.handleInputFileChange.bind(Object(u.a)(t)),t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name,l=Object(o.a)({},n,t);this.setState(l)}},{key:"handleInputFileChange",value:function(e,a){this.setState(Object(o.a)({},e,a))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log(this.state);var t=this.validator.validate(this.state);this.setState({validation:t}),this.submitted=!0,document.querySelector(".file").value="",console.log(t.isValid),t.isValid&&Object(h.y)(this.state).then((function(e){a.setState({first_name:e.data.first_name,last_name:e.data.last_name,username:e.data.username,mobile:e.data.mobile,new_pwd:"",new_pwd2:"",website:e.data.website,email:e.data.email,city:e.data.city,about:e.data.about,show_balance:"",notification:e.data.notification,user_picture:e.data.user_picture,avatar:"",uid:e.data.uid})}))}},{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return c.a.createElement("div",null,c.a.createElement("form",{id:"profile-info-form",onSubmit:this.handleSubmit},c.a.createElement("h4",null,"Profile Information"),c.a.createElement("hr",{className:"line-separator"}),c.a.createElement("div",{className:"profile-image"},c.a.createElement(p.default,{onChange:this.handleInputFileChange,targetField:"user_picture",fileApi:"/api/v1/file/upload/user/user/user_picture",image:this.state.avatar}),c.a.createElement("input",{className:"hide",name:"user_picture",id:"pic1",type:"hidden",placeholder:"Enter them item name here...",value:this.state.user_picture,onChange:this.handleInputChange}),c.a.createElement("span",{className:"form-error"},e.user_picture.message)),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"first_name",className:"rl-label"},"First Name"),c.a.createElement("input",{id:"first_name",name:"first_name",value:this.state.first_name,onChange:this.handleInputChange,type:"text",placeholder:"Enter your first name here..."}),c.a.createElement("span",{className:"form-error"},e.first_name.message)),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"last_name",className:"rl-label"},"Last Name"),c.a.createElement("input",{id:"last_name",name:"last_name",value:this.state.last_name,onChange:this.handleInputChange,type:"text",placeholder:"Enter your last name here..."}),c.a.createElement("span",{className:"form-error"},e.last_name.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"username",className:"rl-label required"},"Account Name"),c.a.createElement("input",{id:"username",name:"username",value:this.state.username,onChange:this.handleInputChange,type:"text",placeholder:"Enter your account name here..."}),c.a.createElement("span",{className:"form-error"},e.username.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"mobile",className:"rl-label required"},"Mobile"),c.a.createElement("input",{id:"mobile",name:"mobile",value:this.state.mobile,onChange:this.handleInputChange,type:"text",placeholder:"Enter your mobile number here..."}),c.a.createElement("span",{className:"form-error"},e.mobile.message)),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"new_pwd",className:"rl-label"},"New Password"),c.a.createElement("input",{id:"new_pwd",name:"new_pwd",value:this.state.new_pwd,onChange:this.handleInputChange,type:"password",placeholder:"Enter your password here..."})),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"new_pwd2",className:"rl-label"},"Repeat Password"),c.a.createElement("input",{id:"new_pwd2",name:"new_pwd2",value:this.state.new_pwd2,onChange:this.handleInputChange,type:"password",placeholder:"Repeat your password here..."})),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"email",className:"rl-label"},"Email"),c.a.createElement("input",{id:"email",name:"email",value:this.state.email,onChange:this.handleInputChange,type:"email",placeholder:"Enter your email address here..."}),c.a.createElement("span",{className:"form-error"},e.email.message)),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"website",className:"rl-label"},"Website"),c.a.createElement("input",{id:"website",name:"website",value:this.state.website,onChange:this.handleInputChange,type:"text",placeholder:"Enter your website link here..."}),c.a.createElement("span",{className:"form-error"},e.website.message)),c.a.createElement("div",{className:"input-container half"},c.a.createElement("label",{htmlFor:"city",className:"rl-label required"},"City"),c.a.createElement("label",{htmlFor:"city",className:"select-block"},c.a.createElement("select",{name:"city",form:"carform",value:this.state.city,onChange:this.handleInputChange},c.a.createElement("option",{value:"0"}),d.o.map((function(e,a){return c.a.createElement("option",{value:e,key:a},e)})))),c.a.createElement("span",{className:"form-error"},e.city.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"about",className:"rl-label"},"About"),c.a.createElement("input",{id:"about",name:"about",value:this.state.about,onChange:this.handleInputChange,type:"text",placeholder:"This will appear bellow to your avatar... (max 140 char)"}),c.a.createElement("span",{className:"form-error"},e.about.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{className:"rl-label"},"Preferences"),c.a.createElement("input",{id:"notification",name:"notification",value:this.state.notification,onChange:this.handleInputChange,type:"checkbox",component:"input"}),c.a.createElement("label",{htmlFor:"notification",className:"label-check"},c.a.createElement("span",{className:"checkbox primary"},c.a.createElement("span",null)),"Send me email notifications")),c.a.createElement("button",{type:"submit",className:"button mid-short primary"},"Save Changes")))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.props),Object(h.j)().then((function(a){e.setState({first_name:a.data.first_name,last_name:a.data.last_name,username:a.data.username,mobile:a.data.mobile,new_pwd:"",new_pwd2:"",website:a.data.website,email:a.data.email,city:a.data.city,about:a.data.about,show_balance:"",notification:a.data.notification,user_picture:a.data.user_picture,avatar:a.data.avatar,uid:a.data.uid})}))}}]),a}(m.Component),v=t(227),f=t(226),g=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dashboard-content"},c.a.createElement("div",{className:"headline buttons primary"},c.a.createElement("h4",null,"Account Settings")),c.a.createElement("div",{className:"form-box-items wrap-3-1 left"},c.a.createElement("div",{className:"form-box-item full"},c.a.createElement(E,null))),c.a.createElement("div",{className:"form-box-items wrap-1-3 right"},c.a.createElement(v.a,null),c.a.createElement(f.a,null)),c.a.createElement("div",{className:"clearfix"}))}}]),a}(m.Component);a.default=g}}]);
//# sourceMappingURL=13.0194d299.chunk.js.map