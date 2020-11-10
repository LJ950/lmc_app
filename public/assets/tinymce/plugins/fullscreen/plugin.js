/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.4.1 (2020-07-08)
 */
!function(p){"use strict";var n,t,e,c=function(n){var t=n;return{get:function(){return t},set:function(n){t=n}}},r=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(n){return{isFullscreen:function(){return null!==n.get()}}},o=function(){},a=function(n){return function(){return n}},f=a(!1),u=a(!0),l=function(){return d},d=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:f,isSome:f,isNone:u,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:e,orThunk:t,map:l,each:o,bind:l,exists:f,forall:u,filter:l,equals:n,equals_:n,toArray:function(){return[]},toString:a("none()")}),s=function(e){var n=a(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:u,isNone:f,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return s(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:d},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(f,function(n){return t(e,n)})}};return o},m={some:s,none:l,from:function(n){return null===n||n===undefined?d:s(n)}},h=function(){return n=function(n){n.unbind()},t=c(m.none()),e=function(){t.get().each(n)},{clear:function(){e(),t.set(m.none())},isSet:function(){return t.get().isSome()},set:function(n){e(),t.set(m.some(n))}};var n,t,e},g=function(r){return function(n){return e=typeof(t=n),(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)===r;var t,e}},v=function(t){return function(n){return typeof n===t}},y=g("string"),w=g("array"),b=v("boolean"),S=function(n){return!(null===(t=n)||t===undefined);var t},T=v("function"),x=v("number"),D=Array.prototype.push,E=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o];r[o]=t(u,o)}return r},A=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},N=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r];t(u,r)&&e.push(u)}return e},O=function(n,t){return function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!w(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);D.apply(t,n[e])}return t}(E(n,t))},C=Object.keys,M=function(n){return n.style!==undefined&&T(n.style.getPropertyValue)},k=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:a(n)}},F={fromHtml:function(n,t){var e=(t||p.document).createElement("div");if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw p.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return k(e.childNodes[0])},fromTag:function(n,t){var e=(t||p.document).createElement(n);return k(e)},fromText:function(n,t){var e=(t||p.document).createTextNode(n);return k(e)},fromDom:k,fromPoint:function(n,t,e){var r=n.dom();return m.from(r.elementFromPoint(t,e)).map(k)}},P=("undefined"!=typeof p.window?p.window:Function("return this;")(),function(t){return function(n){return n.dom().nodeType===t}}),L=P(1),H=P(3),q=P(9),V=P(11),W=function(n,t){var e=n.dom();if(1!==e.nodeType)return!1;var r=e;if(r.matches!==undefined)return r.matches(t);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(t);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},j=function(e){var n;return n=e,m.from(n.dom().parentNode).map(F.fromDom).map(z).map(function(n){return N(n,function(n){return t=n,e.dom()!==t.dom();var t})}).getOr([])},z=function(n){return E(n.dom().childNodes,F.fromDom)},B=T(p.Element.prototype.attachShadow)&&T(p.Node.prototype.getRootNode),I=a(B),R=B?function(n){return F.fromDom(n.dom().getRootNode())}:function(n){return q(n)?n:(t=n,F.fromDom(t.dom().ownerDocument));var t},U=function(n){var t=R(n);return V(t)?m.some(t):m.none()},_=function(n){return F.fromDom(n.dom().host)},K=function(n){if(I()&&S(n.target)){var t=F.fromDom(n.target);if(L(t)&&X(F.fromDom(n.target))){if(n.composed&&n.composedPath){var e=n.composedPath();if(e)return 0===(r=e).length?m.none():m.some(r[0])}}}var r;return m.from(n.target)},X=function(n){return S(n.dom().shadowRoot)},Y=function(n){var t,e,r=H(n)?n.dom().parentNode:n.dom();return r!==undefined&&null!==r&&null!==r.ownerDocument&&U(F.fromDom(r)).fold(function(){return r.ownerDocument.body.contains(r)},(t=Y,e=_,function(n){return t(e(n))}))},G=function(n,t,e){!function(n,t,e){if(!(y(e)||b(e)||x(e)))throw p.console.error("Invalid call to Attr.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple");n.setAttribute(t,e+"")}(n.dom(),t,e)},J=function(n,t){var e=n.dom().getAttribute(t);return null===e?undefined:e},Q=function(n,t){n.dom().removeAttribute(t)},Z=function(n,t){var e=n.dom();!function(n,t){for(var e=C(n),r=0,o=e.length;r<o;r++){var u=e[r];t(n[u],u)}}(t,function(n,t){!function(n,t,e){if(!y(e))throw p.console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e);M(n)&&n.style.setProperty(t,e)}(e,t,n)})},$=function(n,t){return M(n)?n.style.getPropertyValue(t):""},nn=function(n){var e,r,t,o,u,i=F.fromDom(K(n).getOr(n.target)),c=function(){return n.stopPropagation()},f=function(){return n.preventDefault()},l=(e=f,r=c,function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e(r.apply(null,n))});return t=i,o=n.clientX,u=n.clientY,{target:a(t),x:a(o),y:a(u),stop:c,prevent:f,kill:l,raw:a(n)}},tn=function(e,r){return{left:a(e),top:a(r),translate:function(n,t){return tn(e+n,r+t)}}},en=tn,rn=function(n){var t=n===undefined?p.window:n;return m.from(t.visualViewport)},on=function(n,t,e,r){return{x:n,y:t,width:e,height:r,right:n+e,bottom:t+r}},un=function(n){var t,e,r,o,u=n===undefined?p.window:n,i=u.document,c=(t=F.fromDom(i),e=t!==undefined?t.dom():p.document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,en(r,o));return rn(u).fold(function(){var n=u.document.documentElement,t=n.clientWidth,e=n.clientHeight;return on(c.left(),c.top(),t,e)},function(n){return on(Math.max(n.pageLeft,c.left()),Math.max(n.pageTop,c.top()),n.width,n.height)})},cn=function(e,n,t){return rn(t).map(function(n){var t=function(n){return nn(n)};return n.addEventListener(e,t),{unbind:function(){return n.removeEventListener(e,t)}}}).getOrThunk(function(){return{unbind:o}})},fn=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),ln=tinymce.util.Tools.resolve("tinymce.Env"),an=tinymce.util.Tools.resolve("tinymce.util.Delay"),dn=function(n,t){n.fire("FullscreenStateChanged",{state:t})},sn=function(n,t,e){return N(function(n,t){for(var e=T(t)?t:f,r=n.dom(),o=[];null!==r.parentNode&&r.parentNode!==undefined;){var u=r.parentNode,i=F.fromDom(u);if(o.push(i),!0===e(i))break;r=u}return o}(n,e),t)},mn=function(n){return t=n,o=e===undefined?p.document:e.dom(),1!==(r=o).nodeType&&9!==r.nodeType&&11!==r.nodeType||0===r.childElementCount?[]:E(o.querySelectorAll(t),F.fromDom);var t,e,r,o},hn=function(n,t){return e=function(n){return W(n,t)},N(j(n),e);var e},pn="data-ephox-mobile-fullscreen-style",gn="position:absolute!important;",vn="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",yn=ln.os.isAndroid(),wn=function(n){var t,e,r,o,u=(e="background-color",r=(t=n).dom(),""!==(o=p.window.getComputedStyle(r).getPropertyValue(e))||Y(t)?o:$(r,e));return u!==undefined&&""!==u?"background-color:"+u+"!important":"background-color:rgb(255,255,255)!important;"},bn=function(o,n,t){var e,r,u=function(r){return function(n){var t=J(n,"style"),e=t===undefined?"no-styles":t.trim();e!==r&&(G(n,pn,e),Z(n,o.parseStyle(r)))}},i=(e="*",sn(n,function(n){return W(n,e)},r)),c=O(i,function(n){return hn(n,"*:not(.tox-silver-sink)")}),f=wn(t);A(c,u("display:none!important;")),A(i,u(gn+vn+f)),u((!0===yn?"":gn)+vn+f)(n)},Sn=fn.DOM,Tn=rn().fold(function(){return{bind:o,unbind:o}},function(t){var e,r=(e=c(m.none()),{clear:function(){e.set(m.none())},set:function(n){e.set(m.some(n))},isSet:function(){return e.get().isSome()},on:function(n){e.get().each(n)}}),o=h(),u=h(),i=an.throttle(function(){p.document.body.scrollTop=0,p.document.documentElement.scrollTop=0,p.window.requestAnimationFrame(function(){r.on(function(n){return Z(n,{top:t.offsetTop+"px",left:t.offsetLeft+"px",height:t.height+"px",width:t.width+"px"})})})},50);return{bind:function(n){r.set(n),i(),o.set(cn("resize")),u.set(cn("scroll"))},unbind:function(){r.on(function(){o.clear(),u.clear()}),r.clear()}}}),xn=function(t,n){var e,r,o=p.document.body,u=p.document.documentElement,i=t.getContainer(),c=F.fromDom(i),f=n.get(),l=F.fromDom(t.getBody()),a=ln.deviceType.isTouch(),d=i.style,s=t.iframeElement.style,m=function(){var e,n;a&&(e=t.dom,n=mn("["+pn+"]"),A(n,function(n){var t=J(n,pn);"no-styles"!==t?Z(n,e.parseStyle(t)):Q(n,"style"),Q(n,pn)})),Sn.removeClass(o,"tox-fullscreen"),Sn.removeClass(u,"tox-fullscreen"),Sn.removeClass(i,"tox-fullscreen"),Tn.unbind()};if(f)s.width=f.iframeWidth,s.height=f.iframeHeight,d.width=f.containerWidth,d.height=f.containerHeight,d.top=f.containerTop,d.left=f.containerLeft,e=f.scrollPos,p.window.scrollTo(e.x,e.y),n.set(null),dn(t,!1),m(),t.off("remove",m);else{var h={scrollPos:{x:(r=un(p.window)).x,y:r.y},containerWidth:d.width,containerHeight:d.height,containerTop:d.top,containerLeft:d.left,iframeWidth:s.width,iframeHeight:s.height};a&&bn(t.dom,c,l),s.width=s.height="100%",d.width=d.height="",Sn.addClass(o,"tox-fullscreen"),Sn.addClass(u,"tox-fullscreen"),Sn.addClass(i,"tox-fullscreen"),Tn.bind(c),t.on("remove",m),n.set(h),dn(t,!0)}},Dn=function(e,r){return function(t){t.setActive(null!==r.get());var n=function(n){return t.setActive(n.state)};return e.on("FullscreenStateChanged",n),function(){return e.off("FullscreenStateChanged",n)}}};!function En(){r.add("fullscreen",function(n){var t,e,r,o,u=c(null);return n.inline||(e=u,(t=n).addCommand("mceFullScreen",function(){xn(t,e)}),o=u,(r=n).ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return r.execCommand("mceFullScreen")},onSetup:Dn(r,o)}),r.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return r.execCommand("mceFullScreen")},onSetup:Dn(r,o)}),n.addShortcut("Meta+Shift+F","","mceFullScreen")),i(u)})}()}(window);