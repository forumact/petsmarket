(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[20,22],{211:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhGMjZCQzJGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhGMjZCQzNGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEYyNkJDMEY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEYyNkJDMUY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po8nCv0AAACLSURBVHjaYvz//38KAwODFhAXMWAHfUB8jQGocPl/CGgCYgY03ASVWw7isAHxFqhACZKiUqjYVpAamCAXEO8D4n9AnAHF/6BiIDkGZGt4gfgEEP+FKjoBFQPLMyE5mhGJ/R9DDIvV6bisxuWZEnTPwIKnEV/wsABt3wvEz4G4Hktg1wExDyjAAQIMAKOK+M3/IhZ/AAAAAElFTkSuQmCC"},212:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(10),l=t(11),i=t(15),r=t(14),s=t(27),m=t(16),c=t(0),o=t.n(c),u=t(17),h=t(211),d=t.n(h),p=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(r.a)(a).call(this,e))).state={hide:!0},t.fileUploadChange=t.fileUploadChange.bind(Object(s.a)(t)),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"fileUploadChange",value:function(e,a,t){var n=this,l=e.target.files,i=l[0].name,r=new FileReader,s=new FileReader;r.readAsArrayBuffer(l[0]),s.readAsDataURL(l[0]),this.setState({hide:!1}),s.onloadend=function(e){var t=e.target.result;document.getElementById("preview_"+a).src=t},r.onload=function(e){var a={image_data:e.target.result,file_name:i.split(".").join("-"+Date.now()+".")};Object(u.m)(a,t).then((function(e){e.data.fid[0].value?n.props.onChange(n.props.targetField,e.data.fid[0].value):alert(JSON.stringify(e.data))}))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{onSubmit:this.onFormSubmit},o.a.createElement("div",{className:this.state.hide?"ahide":""},o.a.createElement("img",{className:"upload_preview",src:"",alt:"preview",id:"preview_".concat(this.props.targetField)}),o.a.createElement("img",{className:"icon-class",src:d.a,alt:"icon"})),o.a.createElement("div",{className:"clearfix"}),o.a.createElement("input",{multiple:!0,className:"file",type:"file",name:"file",onChange:function(a){return e.fileUploadChange(a,e.props.targetField,e.props.fileApi)}}))}},{key:"componentDidUpdate",value:function(e){if(this.props.image!==e.image){var a=this.props,t=a.image,n=a.targetField;console.log(n),console.log(t),""!==t&&(document.getElementById("preview_"+n).src=t,this.setState({hide:!1}))}}}]),a}(c.Component)},356:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(11),i=t(15),r=t(14),s=t(16),m=t(0),c=t.n(m),o=t(19),u=t(27),h=t(17),d=t(212),p=t(28),g=t(49),E=t(32),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(r.a)(a).call(this,e))).validator=new g.a(E.k),t.state={first_name:"",last_name:"",user_name:"",email:"",password:"",user_picture:"",city:"",validation:t.validator.valid()},t.handleInputChange=t.handleInputChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t.handleInputFileChange=t.handleInputFileChange.bind(Object(u.a)(t)),t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.name,n=a.value,l=Object(o.a)({},t,n);this.setState(l)}},{key:"handleInputFileChange",value:function(e,a){this.setState(Object(o.a)({},e,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.validator.validate(this.state);return this.setState({validation:a}),this.submitted=!0,document.querySelector(".file").value="",a.isValid&&Object(h.x)(this.state).then((function(e){console.log(e.data.uid),e.data.uid})),!1}},{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return c.a.createElement("div",{className:"form-popup"},c.a.createElement("div",{className:"form-popup-headline secondary"},c.a.createElement("h2",null,"Register Account"),c.a.createElement("p",null,"Register now and start making money from home!")),c.a.createElement("div",{className:"form-popup-content"},c.a.createElement("form",{id:"register-form4",onSubmit:this.handleSubmit,autoComplete:"off"},c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"userpciture",className:"rl-label required"},"Profile Image"),c.a.createElement(d.default,{onChange:this.handleInputFileChange,targetField:"user_picture",fileApi:"/api/v1/file/upload/user/user/user_picture"}),c.a.createElement("input",{className:"hide",name:"user_picture",id:"pic1",type:"hidden",placeholder:"Enter them item name here...",value:this.state.user_picture,onChange:this.handleInputChange}),c.a.createElement("span",{className:"form-error"},e.user_picture.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"first_name",className:"rl-label required"},"First Name"),c.a.createElement("input",{name:"first_name",type:"text",placeholder:"Enter them first name here...",value:this.state.first_name,onChange:this.handleInputChange,maxLength:"150"}),c.a.createElement("span",{className:"form-error"},e.first_name.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"last_name",className:"rl-label required"},"Last Name"),c.a.createElement("input",{name:"last_name",type:"text",placeholder:"Enter them first name here...",value:this.state.last_name,onChange:this.handleInputChange,maxLength:"150"}),c.a.createElement("span",{className:"form-error"},e.last_name.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"city",className:"rl-label required"},"City"),c.a.createElement("select",{name:"city",form:"carform",value:this.state.city,onChange:this.handleInputChange},c.a.createElement("option",null),E.m.map((function(e,a){return c.a.createElement("option",{value:e,key:a},e)}))),c.a.createElement("span",{className:"form-error"},e.city.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"user_name",className:"rl-label required"},"Account Name"),c.a.createElement("input",{name:"user_name",type:"text",placeholder:"Enter them user name here...",value:this.state.user_name,onChange:this.handleInputChange,maxLength:"150"}),c.a.createElement("span",{className:"form-error"},e.user_name.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"email",className:"rl-label required"},"Email"),c.a.createElement("input",{name:"email",type:"text",placeholder:"Enter them email here...",value:this.state.email,onChange:this.handleInputChange,maxLength:"150"}),c.a.createElement("span",{className:"form-error"},e.email.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"password",className:"rl-label required"},"Password"),c.a.createElement("input",{name:"password",type:"password",placeholder:"Enter them password name here...",value:this.state.password,onChange:this.handleInputChange,maxLength:"150"}),c.a.createElement("span",{className:"form-error"},e.password.message)),c.a.createElement("button",{className:"button mid dark"},"Register ",c.a.createElement("span",{className:"primary"},"Now!")))))}}]),a}(m.Component),b=Object(p.f)(v),f=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"section-wrap"},c.a.createElement("div",{className:"section"},c.a.createElement(b,null)))}}]),a}(c.a.Component);a.default=f}}]);
//# sourceMappingURL=20.9560630f.chunk.js.map