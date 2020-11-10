/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.4.1 (2020-07-08)
 */
!function(p){"use strict";var t,e,n,l=function(t){var e=t;return{get:function(){return e},set:function(t){e=t}}},r=tinymce.util.Tools.resolve("tinymce.PluginManager"),d=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(){},f=function(t){return function(){return t}},i=f(!1),u=f(!0),a=function(){return c},c=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:i,isSome:i,isNone:u,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:f(null),getOrUndefined:f(undefined),or:n,orThunk:e,map:a,each:o,bind:a,exists:i,forall:u,filter:a,equals:t,equals_:t,toArray:function(){return[]},toString:f("none()")}),s=function(n){var t=f(n),e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:u,isNone:i,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return s(t(n))},each:function(t){t(n)},bind:r,exists:r,forall:r,filter:function(t){return t(n)?o:c},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(i,function(t){return e(n,t)})}};return o},v={some:s,none:a,from:function(t){return null===t||t===undefined?c:s(t)}};function m(t,e){return y(p.document.createElement("canvas"),t,e)}function h(t){var e=m(t.width,t.height);return g(e).drawImage(t,0,0),e}function g(t){return t.getContext("2d")}function y(t,e,n){return t.width=e,t.height=n,t}var w,b,I,T=window.Promise?window.Promise:(b=(w=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],L(t,_(U,this),_(A,this))}).immediateFn||"function"==typeof window.setImmediate&&window.setImmediate||function(t){p.setTimeout(t,1)},I=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},w.prototype["catch"]=function(t){return this.then(null,t)},w.prototype.then=function(n,r){var o=this;return new w(function(t,e){R.call(o,new x(n,r,t,e))})},w.all=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var c=Array.prototype.slice.call(1===t.length&&I(t[0])?t[0]:t);return new w(function(o,i){if(0===c.length)return o([]);var u=c.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){a(e,t)},i)}c[e]=t,0==--u&&o(c)}catch(r){i(r)}}for(var t=0;t<c.length;t++)a(t,c[t])})},w.resolve=function(e){return e&&"object"==typeof e&&e.constructor===w?e:new w(function(t){t(e)})},w.reject=function(n){return new w(function(t,e){e(n)})},w.race=function(o){return new w(function(t,e){for(var n=0,r=o;n<r.length;n++)r[n].then(t,e)})},w);function _(t,e){return function(){return t.apply(e,arguments)}}function R(r){var o=this;null!==this._state?b(function(){var t=o._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(o._value)}catch(n){return void r.reject(n)}r.resolve(e)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function U(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void L(_(e,t),_(U,this),_(A,this))}this._state=!0,this._value=t,E.call(this)}catch(n){A.call(this,n)}}function A(t){this._state=!1,this._value=t,E.call(this)}function E(){for(var t=0,e=this._deferreds;t<e.length;t++){var n=e[t];R.call(this,n)}this._deferreds=[]}function x(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function L(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}function j(t){var e=t.src;return(0===e.indexOf("data:")?k:function n(r){return new T(function(t,n){var e=new p.XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){200===this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},e.send()})})(e)}function C(a){return new T(function(t,e){var n=p.URL.createObjectURL(a),r=new p.Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",u)};function i(){o(),t(r)}function u(){o(),e("Unable to load data of type "+a.type+": "+n)}r.addEventListener("load",i),r.addEventListener("error",u),r.src=n,r.complete&&i()})}function k(n){return new T(function(t,e){(function g(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return v.none();for(var r=n[1],o=e[1],i=p.atob(o),u=i.length,a=Math.ceil(u/1024),c=new Array(a),s=0;s<a;++s){for(var f=1024*s,l=Math.min(1024+f,u),d=new Array(l-f),m=f,h=0;m<l;++h,++m)d[h]=i[m].charCodeAt(0);c[s]=new Uint8Array(d)}return v.some(new p.Blob(c,{type:r}))})(n).fold(function(){e("uri is not base64: "+n)},t)})}function O(t,r,o){return r=r||"image/png",p.HTMLCanvasElement.prototype.toBlob?new T(function(e,n){t.toBlob(function(t){t?e(t):n()},r,o)}):k(t.toDataURL(r,o))}function P(t){return C(t).then(function(t){!function n(t){p.URL.revokeObjectURL(t.src)}(t);var e=m(function r(t){return t.naturalWidth||t.width}(t),function o(t){return t.naturalHeight||t.height}(t));return g(e).drawImage(t,0,0),e})}function S(t,e,n){var r=e.type;function o(e,n){return t.then(function(t){return function r(t,e,n){return e=e||"image/png",t.toDataURL(e,n)}(t,e,n)})}return{getType:f(r),toBlob:function i(){return T.resolve(e)},toDataURL:f(n),toBase64:function u(){return n.split(",")[1]},toAdjustedBlob:function a(e,n){return t.then(function(t){return O(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function c(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function s(){return t.then(h)}}}function N(e){return function t(n){return new T(function(t){var e=new p.FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n)})}(e).then(function(t){return S(P(e),e,t)})}function M(e,t){return O(e,t).then(function(t){return S(T.resolve(e),t,e.toDataURL())})}function B(e,n){return e.toCanvas().then(function(t){return function a(t,e,n){var r=m(t.width,t.height),o=g(r),i=0,u=0;90!==(n=n<0?360+n:n)&&270!==n||y(r,r.height,r.width);90!==n&&180!==n||(i=r.width);270!==n&&180!==n||(u=r.height);return o.translate(i,u),o.rotate(n*Math.PI/180),o.drawImage(t,0,0),M(r,e)}(t,e.getType(),n)})}function D(e,n){return e.toCanvas().then(function(t){return function i(t,e,n){var r=m(t.width,t.height),o=g(r);"v"===n?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0));return M(r,e)}(t,e.getType(),n)})}var F,H=(F="function",function(t){return typeof t===F}),q=function(t,e){return function(t,e,n){for(var r=0,o=t.length;r<o;r++){var i=t[r];if(e(i,r))return v.some(i);if(n(i,r))break}return v.none()}(t,e,i)},z=function(t){return N(t)},$=function(t){if(null===t||t===undefined)throw new Error("Node cannot be null or undefined");return{dom:f(t)}},G={fromHtml:function(t,e){var n=(e||p.document).createElement("div");if(n.innerHTML=t,!n.hasChildNodes()||1<n.childNodes.length)throw p.console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node");return $(n.childNodes[0])},fromTag:function(t,e){var n=(e||p.document).createElement(t);return $(n)},fromText:function(t,e){var n=(e||p.document).createTextNode(t);return $(n)},fromDom:$,fromPoint:function(t,e,n){var r=t.dom();return v.from(r.elementFromPoint(e,n)).map($)}},J=("undefined"!=typeof p.window?p.window:Function("return this;")(),H(p.Element.prototype.attachShadow)&&H(p.Node.prototype.getRootNode),function(t,e){return n=function(t){return function(t,e){var n=t.dom();if(1!==n.nodeType)return!1;var r=n;if(r.matches!==undefined)return r.matches(e);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(e);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(e);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}(t,e)},q(t.dom().childNodes,function(t){return n(G.fromDom(t))}).map(G.fromDom);var n}),K=tinymce.util.Tools.resolve("tinymce.util.Delay"),V=tinymce.util.Tools.resolve("tinymce.util.Promise"),W=tinymce.util.Tools.resolve("tinymce.util.URI"),X=function(t){return t.getParam("imagetools_proxy")};function Q(t){var e,n;function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)}function Y(t){return{w:t.naturalWidth,h:t.naturalHeight}}var Z=function(t){return null!==t&&t!==undefined},tt=function(e,r,o){return new V(function(t){var n=new p.XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:this.response})},n.open("GET",e,!0),n.withCredentials=o,d.each(r,function(t,e){n.setRequestHeader(e,t)}),n.responseType="blob",n.send()})},et=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],nt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],rt=function(t){var e,n=(e=t,"ImageProxy HTTP error: "+q(et,function(t){return e===t.code}).fold(f("Unknown ImageProxy error"),function(t){return t.message}));return V.reject(n)},ot=function(t){var e,n,r=function(t){var e;try{e=JSON.parse(t)}catch(n){}return e}(t),o=(e=["error","type"].reduce(function(t,e){return Z(t)?t[e]:undefined},r),Z(e)?e:null);return"ImageProxy Service error: "+(o?(n=o,q(nt,function(t){return t.type===n}).fold(f("Unknown service error"),function(t){return t.message})):"Invalid JSON in service error message")},it=function(t,e){return r=e,new V(function(n){var t=new p.FileReader;t.onload=function(t){var e=t.target;n(e.result)},t.readAsText(r)}).then(function(t){var e=ot(t);return V.reject(e)});var r},ut=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e};return tt((r=e,o=-1===(n=t).indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!r?n:n+o+"apiKey="+encodeURIComponent(r)),i,!1).then(function(t){return t.status<200||300<=t.status?(e=t.status,n=t.blob,400===(r=e)||403===r||500===r?it(0,n):rt(e)):V.resolve(t.blob);var e,n,r})};var at=function(t,e,n){return e?ut(t,e):function r(t,e){return tt(t,{},e).then(function(t){return t.status<200||300<=t.status?rt(t.status):V.resolve(t.blob)})}(t,n)},ct=0,st=function(t){return J(G.fromDom(t),"img")},ft=function(t,e){return t.dom.is(e,"figure")},lt=function(n,t){var e=function(t){return e=t,n.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(ht(n,t)||gt(n,t)||X(n));var e};return ft(n,t)?st(t).map(function(t){return e(t.dom())?v.some(t.dom()):v.none()}):e(t)?v.some(t):v.none()},dt=function(t,e){t.notificationManager.open({text:e,type:"error"})},mt=function(t){var e=t.selection.getNode();return ft(t,e)?st(e):v.some(G.fromDom(e))},ht=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new W(n).host===t.documentBaseURI.host},gt=function(t,e){return-1!==d.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new W(e.src).host)},pt=function(t,e){var n,r,o,i,u=e.src;return gt(t,e)?at(e.src,null,(r=t,o=e,-1!==d.inArray(r.getParam("imagetools_credentials_hosts",[],"string[]"),new W(o.src).host))):ht(t,e)?j(e):(u=X(t),u+=(-1===u.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),n=(i=t).getParam("api_key",i.getParam("imagetools_api_key","","string"),"string"),at(u,n,!1))},vt=function(t,e){return n=t,v.from(n.getParam("imagetools_fetch_image",null,"function")).fold(function(){return pt(t,e)},function(t){return t(e)});var n},yt=function(t,e){var n=t.editorUpload.blobCache.getByUri(e.src);return n?V.resolve(n.blob()):vt(t,e)},wt=function(t){K.clearTimeout(t.get())},bt=function(a,c,s,f,l,d){return c.toBlob().then(function(t){var e,n,o,r,i,u=a.editorUpload.blobCache;return e=l.src,a.getParam("images_reuse_filename",!1,"boolean")&&(n=(o=u.getByUri(e))?(e=o.uri(),o.name()):(r=a,(i=e.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?r.dom.encode(i[1]):null)),o=u.create({id:"imagetools"+ct++,blob:t,base64:c.toBase64(),uri:e,name:n}),u.add(o),a.undoManager.transact(function(){a.$(l).on("load",function r(){var t,e,n;a.$(l).off("load",r),a.nodeChanged(),s?a.editorUpload.uploadImagesAuto():(wt(f),t=a,e=f,n=K.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()},t.getParam("images_upload_timeout",3e4,"number")),e.set(n))}),d&&a.$(l).attr({width:d.w,height:d.h}),a.$(l).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})},It=function(n,r,t,o){return function(){return mt(n).fold(function(){dt(n,"Could not find selected image")},function(e){return n._scanForImages().then(function(){return yt(n,e.dom())}).then(z).then(t).then(function(t){return bt(n,t,!1,r,e.dom(),o)},function(t){dt(n,t)})})}},Tt=function(e,n,r){return function(){var t=mt(e).fold(function(){return null},function(t){var e=Q(t.dom());return e?{w:e.h,h:e.w}:null});return It(e,n,function(t){return B(t,r)},t)()}},_t=function(t,e,n){return function(){return It(t,e,function(t){return D(t,n)})()}},Rt=function(e,n,r,i,u){return C(u).then(function(t){var e=Y(t);return i.w===e.w&&i.h===e.h||Q(r)&&function o(t,e){var n,r;e&&(n=t.style.width,r=t.style.height,(n||r)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,r=t.height,(n||r)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))}(r,e),p.URL.revokeObjectURL(t.src),u}).then(z).then(function(t){return bt(e,t,!0,n,r)},function(){})},Ut=function(i,u){return function(){var r=mt(i),o=r.map(function(t){return Y(t.dom())});mt(i).each(function(e){lt(i,e.dom()).each(function(t){yt(i,e.dom()).then(function(t){var e,n={blob:e=t,url:p.URL.createObjectURL(e)};i.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:n}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(t){var n=t.getData().imagetools.blob;r.each(function(e){o.each(function(t){Rt(i,u,e.dom(),t,n)})}),t.close()},onCancel:function(){},onAction:function(t,e){switch(e.name){case"save-state":e.value?t.enable("save"):t.disable("save");break;case"disable":t.disable("save"),t.disable("cancel");break;case"enable":t.enable("cancel")}}})})})})}};!function At(){r.add("imagetools",function(t){var n,e,r,o,i,u,a,c,s=l(0),f=l(null);n=t,e=s,d.each({mceImageRotateLeft:Tt(n,e,-90),mceImageRotateRight:Tt(n,e,90),mceImageFlipVertical:_t(n,e,"v"),mceImageFlipHorizontal:_t(n,e,"h"),mceEditImage:Ut(n,e)},function(t,e){n.addCommand(e,t)}),o=function(t){return function(){return r.execCommand(t)}},(r=t).ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:o("mceImageRotateLeft")}),r.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:o("mceImageRotateRight")}),r.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:o("mceImageFlipVertical")}),r.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:o("mceImageFlipHorizontal")}),r.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:o("mceEditImage"),onSetup:function(n){var t=function(){mt(r).each(function(t){var e=lt(r,t.dom()).isNone();n.setDisabled(e)})};return r.on("NodeChange",t),function(){r.off("NodeChange",t)}}}),r.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image-options",onAction:o("mceImage")}),r.ui.registry.addContextMenu("imagetools",{update:function(t){return lt(r,t).fold(function(){return[]},function(t){return[{text:"Edit image",icon:"edit-image",onAction:o("mceEditImage")}]})}}),(i=t).ui.registry.addContextToolbar("imagetools",{items:i.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(t){return lt(i,t).isSome()},position:"node",scope:"node"}),a=s,c=f,(u=t).on("NodeChange",function(t){var e=c.get();e&&e.src!==t.element.src&&(wt(a),u.editorUpload.uploadImagesAuto(),c.set(null)),lt(u,t.element).each(c.set)})})}()}(window);