(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[27],{360:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(11),s=t(15),l=t(13),o=t(14),i=t(0),c=t.n(i),m=t(21),u=t(20),d=t(9),p=t(29),h=t(18),b=t(336),v=t.n(b),f=t(337),g=t.n(f),E=t(28),y=t(51),N=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).validator=new y.a(p.i),t.state={username:"",password:"",validation:t.validator.valid()},t.handleInputChange=t.handleInputChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t.responseGoogle=t.responseGoogle.bind(Object(u.a)(t)),t.submitted=!1,t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.name,n=a.value,r=Object(m.a)({},t,n);this.setState(r)}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.validator.validate(this.state);if(this.setState({validation:t}),this.submitted=!0,t.isValid)try{var n={name:this.state.username,pass:this.state.password};Object(h.r)(n).then((function(e){if(e.data.invalid)return document.getElementById("error").innerHTML=e.data.invalid,!1;var t={csrf:e.data.csrf_token,uid:e.data.uid,avatar:e.data.avatar};a.setState({user:t}),localStorage.setItem("userObject",JSON.stringify(e.data)),a.props.history.push("/")}))}catch(r){console.log("Axios request failed: ".concat(r))}}},{key:"responseGoogle",value:function(e){var a=this;Object(h.s)(e).then((function(e){if(console.log(e.data),1===e.data.status){console.log("user logged in");var t={csrf:e.data.csrf_token,uid:e.data.uid,avatar:e.data.avatar};a.setState({user:t}),localStorage.setItem("userObject",JSON.stringify(e.data)),a.props.history.push("/")}}))}},{key:"responseFacebook",value:function(){}},{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return c.a.createElement("div",{className:"form-popup"},c.a.createElement("div",{className:"form-popup-headline secondary"},c.a.createElement("h2",null,"Login to your Account"),c.a.createElement("p",null,"Enter now to your account and start buying and selling!")),c.a.createElement("div",{className:"form-popup-content"},c.a.createElement("form",{onSubmit:this.handleSubmit,id:"login-form",autoComplete:"off"},c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"username",className:"rl-label"},"Username"),c.a.createElement("input",{name:"username",type:"text",placeholder:"Enter your username here...",value:this.state.username,onChange:this.handleInputChange}),c.a.createElement("span",{className:"form-error"},e.username.message)),c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{htmlFor:"password",className:"rl-label"},"Password"),c.a.createElement("input",{name:"password",type:"password",placeholder:"Enter your password here...",value:this.state.password,onChange:this.handleInputChange}),c.a.createElement("span",{className:"form-error"},e.password.message)),c.a.createElement("input",{name:"remember",id:"remember",type:"checkbox"}),c.a.createElement("label",{htmlFor:"remember",className:"label-check"},c.a.createElement("span",{className:"checkbox primary primary"},c.a.createElement("span",null)),"Remember username and password"),c.a.createElement("p",null," ","Back to home?"," ",c.a.createElement(d.b,{to:"/",className:"primary"},"Home")),"\xa0",c.a.createElement("p",null," ","New to Pigeons World?"," ",c.a.createElement(d.b,{to:"/user-register",className:"primary"},"Sign up now")),c.a.createElement("button",{type:"submit",className:"button mid dark"},"Login ",c.a.createElement("span",{className:"primary"},"Now!")),c.a.createElement("span",{id:"error",className:"form-error"})),c.a.createElement("hr",{className:"line-separator double"}),c.a.createElement(v.a,{appId:"Your FacebookAPP ID",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook,cssClass:"button mid fb half mt-0"}),c.a.createElement(g.a,{clientId:p.s,buttonText:"Login with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,className:"button mid tertiary half gchanges mt-0"})))}}]),a}(i.Component),w=Object(E.f)(N),O=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).state={userobject:""},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"section-wrap"},c.a.createElement("div",{className:"section"},c.a.createElement(w,null)))}}]),a}(c.a.Component);a.default=O}}]);
//# sourceMappingURL=27.e3d37067.chunk.js.map