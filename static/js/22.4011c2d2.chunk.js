(this.webpackJsonppegionworld=this.webpackJsonppegionworld||[]).push([[22],{211:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhGMjZCQzJGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhGMjZCQzNGNjI5MTFFNjhEOThCMDU2QTI0RUU5NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEYyNkJDMEY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEYyNkJDMUY2MjkxMUU2OEQ5OEIwNTZBMjRFRTk2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po8nCv0AAACLSURBVHjaYvz//38KAwODFhAXMWAHfUB8jQGocPl/CGgCYgY03ASVWw7isAHxFqhACZKiUqjYVpAamCAXEO8D4n9AnAHF/6BiIDkGZGt4gfgEEP+FKjoBFQPLMyE5mhGJ/R9DDIvV6bisxuWZEnTPwIKnEV/wsABt3wvEz4G4Hktg1wExDyjAAQIMAKOK+M3/IhZ/AAAAAElFTkSuQmCC"},212:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return g}));var a=i(10),n=i(11),l=i(15),c=i(14),o=i(27),A=i(16),r=i(0),s=i.n(r),d=i(17),h=i(211),p=i.n(h),g=function(e){function t(e){var i;return Object(a.a)(this,t),(i=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={hide:!0},i.fileUploadChange=i.fileUploadChange.bind(Object(o.a)(i)),i}return Object(A.a)(t,e),Object(n.a)(t,[{key:"fileUploadChange",value:function(e,t,i){var a=this,n=e.target.files,l=n[0].name,c=new FileReader,o=new FileReader;c.readAsArrayBuffer(n[0]),o.readAsDataURL(n[0]),this.setState({hide:!1}),o.onloadend=function(e){var i=e.target.result;document.getElementById("preview_"+t).src=i},c.onload=function(e){var t={image_data:e.target.result,file_name:l.split(".").join("-"+Date.now()+".")};Object(d.m)(t,i).then((function(e){e.data.fid[0].value?a.props.onChange(a.props.targetField,e.data.fid[0].value):alert(JSON.stringify(e.data))}))}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{onSubmit:this.onFormSubmit},s.a.createElement("div",{className:this.state.hide?"ahide":""},s.a.createElement("img",{className:"upload_preview",src:"",alt:"preview",id:"preview_".concat(this.props.targetField)}),s.a.createElement("img",{className:"icon-class",src:p.a,alt:"icon"})),s.a.createElement("div",{className:"clearfix"}),s.a.createElement("input",{multiple:!0,className:"file",type:"file",name:"file",onChange:function(t){return e.fileUploadChange(t,e.props.targetField,e.props.fileApi)}}))}},{key:"componentDidUpdate",value:function(e){if(this.props.image!==e.image){var t=this.props,i=t.image,a=t.targetField;console.log(a),console.log(i),""!==i&&(document.getElementById("preview_"+a).src=i,this.setState({hide:!1}))}}}]),t}(r.Component)}}]);
//# sourceMappingURL=22.4011c2d2.chunk.js.map