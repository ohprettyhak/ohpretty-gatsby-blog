(self.webpackChunkohpretty_gatsby_blog=self.webpackChunkohpretty_gatsby_blog||[]).push([[269],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5007:function(e,t,n){"use strict";n.d(t,{H:function(){return He}});var r,o,i,a,c=n(7294),l=n(9),u=n(8631),s=n(9499),f=n(5697),d=n.n(f),p=n(4839),m=n.n(p),h=n(2993),y=n.n(h),g=n(6494),b=n.n(g),v="bodyAttributes",w="htmlAttributes",T="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",A="href",k="http-equiv",O="innerHTML",S="itemprop",_="name",N="property",j="rel",L="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",q="encodeSpecialCharacters",B="onChangeClientState",D="titleTemplate",U=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),z=[E.NOSCRIPT,E.SCRIPT,E.STYLE],H="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=te(e,E.TITLE),n=te(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=te(e,M);return t||r||void 0},Q=function(e){return te(e,B)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ee=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==x&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=b()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},te=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ne=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ne(e)}),0)}),re=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:n.g.requestAnimationFrame||ne,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:n.g.cancelAnimationFrame||re,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ce=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;fe(E.BODY,r),fe(E.HTML,o),se(f,d);var p={baseTag:de(E.BASE,n),linkTags:de(E.LINK,i),metaTags:de(E.META,a),noscriptTags:de(E.NOSCRIPT,c),scriptTags:de(E.SCRIPT,u),styleTags:de(E.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),fe(E.TITLE,t)},fe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},de=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},he=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=me(n,r),[c.createElement(E.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case w:return{toComponent:function(){return me(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+$(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:he(E.BASE,t,r),bodyAttributes:he(v,n,r),htmlAttributes:he(w,o,r),link:he(E.LINK,i,r),meta:he(E.META,a,r),noscript:he(E.NOSCRIPT,c,r),script:he(E.SCRIPT,l,r),style:he(E.STYLE,u,r),title:he(E.TITLE,{title:f,titleAttributes:d},r)}},ge=m()((function(e){return{baseTag:Z([A,I],e),bodyAttributes:X(v,e),defer:te(e,R),encode:te(e,q),htmlAttributes:X(w,e),linkTags:ee(E.LINK,[j,A],e),metaTags:ee(E.META,[_,C,k,N,S],e),noscriptTags:ee(E.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:ee(E.SCRIPT,[L,O],e),styleTags:ee(E.STYLE,[x],e),title:J(e),titleAttributes:X(T,e)}}),(function(e){ce&&ie(ce),e.defer?ce=oe((function(){le(e,(function(){ce=null}))})):(le(e),ce=null)}),ye)((function(){return null})),be=(o=ge,a=i=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case E.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case E.BODY:return G({},o,{bodyAttributes:G({},i)});case E.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(W(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},K(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var ve=n(6863),we=n.n(ve);var Te=function(e,t){void 0===t&&(t={});var n=(0,c.useState)(e?"loading":"idle"),r=n[0],o=n[1];return(0,c.useEffect)((function(){if(e){var n=document.querySelector('script[src="'+e+'"]');if(n)o(n.getAttribute("data-status"));else{(n=document.createElement("script")).src=e,n.async=!0,Object.keys(t).forEach((function(e){"type"===e&&n&&(n.type=t[e]),"noModule"===e&&n&&(n.noModule=t[e]),"integrity"===e&&n&&(n.integrity=t[e]),"crossorigin"===e&&n&&(n.crossOrigin=t[e])})),n.setAttribute("data-status","loading"),document.body.appendChild(n);var r=function(e){var t;null===(t=n)||void 0===t||t.setAttribute("data-status","load"===e.type?"ready":"error")};n.addEventListener("load",r),n.addEventListener("error",r)}var i=function(e){o("load"===e.type?"ready":"error")};return n.addEventListener("load",i),n.addEventListener("error",i),function(){n&&(n.removeEventListener("load",i),n.removeEventListener("error",i))}}o("idle")}),[e]),r},Ee=c.memo((function(){var e=(0,s.useLocation)().pathname,t=Te("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",{type:"module"}),n=Te("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",{noModule:!0});(0,c.useEffect)((function(){}),[t,n]);var r=(0,u.v9)((function(e){return e.title}));return c.createElement(be,null,c.createElement("title",null,e===we().sitePathPrefix?we().title:r+" – "+we().title),c.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"}),c.createElement("style",null,"@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap');"))})),Ce=n(1597),xe=(0,l.createGlobalStyle)(["*{box-sizing:border-box;-webkit-font-smoothing:antialiased;}html,body,span,figure,p,h1,h2,h3,h4,h5,h6,button,a{margin:0;padding:0;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',Pretendard,Roboto,'Noto Sans KR','Segoe UI','Malgun Gothic',sans-serif;-webkit-text-size-adjust:100%;}html,body,#___gatsby,#gatsby-focus-wrapper{height:100%;}*::selection{background:#e9ecef;text-shadow:none;}*::-moz-selection{background:#e9ecef;text-shadow:none;}*::-webkit-selection{background:#e9ecef;text-shadow:none;}@keyframes fadein-dropdown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);-ms-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0);}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;}}@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-o-keyframes fadein{from{opacity:0;}to{opacity:1;}}"]),Ae=(0,l.createGlobalStyle)([":root{--mobile:425px,--tablet:768px,--desktop:1200px,}body{&.light{--primary:white;--line:#eeeeee;--mobile-menu:rgba(245,245,245,0.98);--text:#343a40;--text-secondary:#868e96;--cover:#fcfcfc;}&.dark{--primary:#25201d;--line:#1a1613;--mobile-menu:rgba(37,32,29,0.98);--text:white;--text-secondary:#bbbbbb;--cover:#221e1a;}}"]),ke=l.default.nav.withConfig({displayName:"Navigation__TopNavigation",componentId:"sc-1mahtxu-0"})(["position:fixed;z-index:9;width:100%;height:56px;background-color:var(--primary);background-position:center center;border-bottom:1px solid var(--line);transition:all 0.2s ease;"]),Oe=l.default.div.withConfig({displayName:"Navigation__TopNavigationContainer",componentId:"sc-1mahtxu-1"})(["display:flex;width:100%;max-width:1200px;height:100%;margin:0 auto;padding:0 6%;align-items:center;justify-content:space-between;"]),Se=l.default.ul.withConfig({displayName:"Navigation__TopLinkWrap",componentId:"sc-1mahtxu-2"})(["display:flex;height:100%;padding:0;list-style:none;@media only screen and (max-width:600px){display:none;}"]),_e=l.default.li.withConfig({displayName:"Navigation__TopLinkList",componentId:"sc-1mahtxu-3"})(["display:table;height:100%;margin:0 0 0 48px;opacity:1;transition:opacity 0.2s ease;:hover{opacity:0.7;}a{display:table-cell;height:100%;padding:0;font-weight:500;color:var(--text);text-decoration:none;user-select:none;vertical-align:middle;background-color:transparent;}"]),Ne=(0,l.default)(Ce.rU).withConfig({displayName:"Navigation__Logo",componentId:"sc-1mahtxu-4"})(["display:flex;align-items:center;color:var(--text);text-decoration:none;opacity:1;transition:opacity 0.2s ease;:hover{opacity:0.7;}"]),je=l.default.div.withConfig({displayName:"Navigation__LogoContainer",componentId:"sc-1mahtxu-5"})(["display:flex;align-items:center;opacity:1;color:var(--text);transition:opacity 0.2s ease;cursor:pointer;:hover{opacity:0.7;}"]),Le=l.default.div.withConfig({displayName:"Navigation__Menu",componentId:"sc-1mahtxu-6"})(["display:none;border-bottom:none;align-items:center;cursor:pointer;padding:16px 0;ion-icon{width:24px;height:24px;margin:0;padding:0;color:var(--text);vertical-align:middle;}@media only screen and (max-width:600px){display:flex;}"]),Ie=l.default.div.withConfig({displayName:"Navigation__MobileMenu",componentId:"sc-1mahtxu-7"})(["position:fixed;display:none;width:100%;height:100%;top:0;left:0;background:var(--mobile-menu);z-index:9;animation:fadein-dropdown 0.3s both 0.3s;-moz-animation:fadein-dropdown 0.3s both 0.3s;-webkit-animation:fadein-dropdown 0.3s both 0.3s;-o-animation:fadein-dropdown 0.3s both 0.3s;"]),Pe=l.default.section.withConfig({displayName:"Navigation__MobileMenuContainer",componentId:"sc-1mahtxu-8"})(["width:100%;margin:0 auto;padding:0 6%;"]),Me=l.default.div.withConfig({displayName:"Navigation__MobileMenuClose",componentId:"sc-1mahtxu-9"})(["display:flex;height:56px;align-items:center;"]),Re=(0,l.default)(Le).withConfig({displayName:"Navigation__MenuAlignRight",componentId:"sc-1mahtxu-10"})(["display:flex;margin-left:auto;"]),qe=l.default.ul.withConfig({displayName:"Navigation__MobileMenuWrap",componentId:"sc-1mahtxu-11"})(["margin:32px 0 0 0;padding:0;list-style:none;"]),Be=l.default.li.withConfig({displayName:"Navigation__MobileMenuList",componentId:"sc-1mahtxu-12"})(["margin:24px 0;font-size:1.5rem;font-weight:700;a{width:100%;color:var(--text);text-decoration:none;}"]),De=function(){var e=(0,s.useLocation)().pathname,t=function(e){var t=document.getElementById("mobile-menu");t.style.display=e?"block":"none"};return c.createElement(c.Fragment,null,c.createElement(xe,null),c.createElement(Ae,null),c.createElement(ke,null,c.createElement(Oe,null,e===we().sitePathPrefix?c.createElement(je,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},c.createElement("p",null,"ohpretty-gatsby-blog")):c.createElement(je,null,c.createElement(Ne,{to:"/"},c.createElement("p",null,"ohpretty-gatsby-blog"))),c.createElement(Se,null,c.createElement(_e,null,c.createElement(Ce.rU,{to:"/post"},"Post")),c.createElement(_e,null,c.createElement(Ce.rU,{to:"/about"},"About")),c.createElement(_e,null,c.createElement("a",{href:"https://github.com/"+we().social.github,target:"_blank"},"Github"))),c.createElement(Le,{onClick:function(){return t(!0)}},c.createElement("ion-icon",{name:"menu-outline"}))),c.createElement(Ie,{id:"mobile-menu"},c.createElement(Pe,null,c.createElement(Me,null,c.createElement(Re,{onClick:function(){return t(!1)}},c.createElement("ion-icon",{name:"close-outline"}))),c.createElement(qe,null,c.createElement(Be,null,c.createElement(Ce.rU,{to:"/post"},"Post")),c.createElement(Be,null,c.createElement(Ce.rU,{to:"/about"},"About")),c.createElement(Be,null,c.createElement("a",{href:"https://github.com/ohprettyhak",target:"_blank",onClick:function(){return t(!1)}},"Github")))))))},Ue=l.default.main.withConfig({displayName:"DefaultLayout__Main",componentId:"sc-qk1q43-0"})(["width:100%;max-width:1200px;height:100%;margin:0 auto;padding:0 6%;"]),ze=l.default.div.withConfig({displayName:"DefaultLayout__Container",componentId:"sc-qk1q43-1"})(["height:100%;padding-top:56px;background-color:var(--primary);transition:background-color 0.2s ease;"]),He=function(e){var t=e.children,n=function(){var e=(0,c.useState)(null),t=e[0],n=e[1],r=(0,c.useCallback)((function(){var e="light"===t?"dark":"light";n(e),window.__setPreferredTheme(e)}),[t]);return(0,c.useEffect)((function(){"object"==typeof window&&n(window.__theme),window.__onThemeChange=function(e){n(e)}}),[]),{theme:t,toggleTheme:r}}(),r=(n.theme,n.toggleTheme);return c.createElement(c.Fragment,null,c.createElement(Ee,null),c.createElement(De,null),c.createElement(ze,null,c.createElement(Ue,null,t),c.createElement("button",{onClick:r},"asdf")))}}}]);