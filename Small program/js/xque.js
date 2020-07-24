(e=>{"use strict";if(e.$)return;const t=document;let n=Object.prototype.toString;const r=e=>n.call(e).toLowerCase().replace(/(\[object )|(])/g,""),i=e=>r(e).search("function")>-1,s=e=>"string"===r(e),o=e=>void 0===e,l=e=>!o(e)&&"number"===r(e.length)&&e.length>=0&&!i(e)&&!s(e),a=t=>t instanceof Element||t==e,{defineProperty:u,assign:p}=Object,d=e=>Array.from(e),h=(e,t)=>e.splice(e.length,0,...t),c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},f=(e,t)=>e.some((e,n)=>!1===t(e,n)),m=getComputedStyle,g=(e,t)=>{let n=e.split(" ");f(n,e=>t(e))},v="XQUE_"+(()=>Math.random().toString(32).substr(2))(),b=v+"_event",y=(e,t,n,r,s)=>{let l=i(t);if(o(t)){if(s)return r(e[0])}else f(e,(e,i)=>{let s;s=l?t.call(e,i,r&&r(e)):t,o(s)||n(e,s,i)});return e},x=(e,t,n,s)=>{let[l,a]=t;if("object"==r(l))for(let t in l)f(e,e=>{n(e,t,l[t])});else if(i(a))f(e,(e,t)=>{a.call(e,t,s(e,l))});else{if(o(a))return s(e[0],l);f(e,e=>{n(e,...t)})}return e},E=e=>"number"==r(e)?e+"px":e,L=(e,n=t)=>d(n.querySelectorAll(e)),O=e=>{let n=t.createElement("div");return n.innerHTML=e,d(n.childNodes).filter(function(e){if(!(e instanceof Text)||e.textContent&&e.textContent.trim())return e})},w=(e,n)=>{if(e===n)return!0;let r=t.createElement("div");return e!==t&&(r.appendChild(e.cloneNode(!1)),0 in L(n,r))},C=e=>e[v]||(e[v]={}),T=e=>e[b]||(e[b]={});function P(e=[]){h(this,e)}let S=Object.create(Array.prototype);p(S,{attr(...e){return x(this,e,(e,t,n)=>{e.setAttribute(t,n)},(e,t)=>e.getAttribute(t))},removeAttr(e){return y(this,e,(e,t)=>{g(t,t=>{e.removeAttribute(t)})})},prop(...e){return x(this,e,(e,t,n)=>{e[t]=n},(e,t)=>e[t])},removeProp(e){return y(this,e,(e,t)=>{g(t,t=>{delete e[t]})})},data(...e){return x(this,e,(e,t,n)=>{C(e)[t]=n},(e,t)=>{let n={};return p(n,e.dataset),p(n,C(e)),n[t]})},removeData(e){return y(this,e,(e,t)=>{g(t,t=>{delete C(e)[t]})})},css(...e){return x(this,e,(e,t,n)=>{String(m(e)[t]).indexOf("px")>-1&&(n=E(n)),e.style[t]=n},(e,t)=>m(e)[t])},text(e){return y(this,e,(e,t)=>{e.textContent=t},e=>e.textContent,1)},html(e){return y(this,e,(e,t)=>{e.innerHTML=t},e=>e.innerHTML,1)},val(e){return y(this,e,(e,t)=>{e.value=t},e=>e.value,1)},each(e){return f(this,(t,n)=>{e.call(t,n,t)}),this},index(e){let t,n;return e?e.nodeType?(n=e,t=this):e instanceof A?(n=e[0],t=this):"string"===r(e)&&(n=this[0],t=A(e)):(n=this[0],t=d(n.parentNode.children)),t.indexOf(n)},extend(e){p(S,e)}});let j={addClass(e,t){e.classList.add(t)},removeClass(e,t){e.classList.remove(t)},toggleClass(e,t){e.classList.toggle(t)}};for(let e in j){let t=j[e];S[e]=function(e){return y(this,e,(e,n)=>{g(n,n=>{t(e,n)})},e=>e.classList.value)}}const N=(e,t)=>{l(e)?f(d(e),e=>{t(e)}):t(e)};let A=function(n,s){let o=[];switch(r(n)){case"string":n.search("<")>-1?o=O(n):N(s,e=>{let t=L(n,e);h(o,t)});break;case"array":o=n;break;default:n instanceof Element||n===e?o=[n]:l(n)?o=d(n):i(n)?("complete"===t.readyState?n(A):t.addEventListener("DOMContentLoaded",function(){n(A)},!1),o=[t]):n&&(s&&a(n)?N(s,e=>{let t=n.tagName.toLowerCase(),r=L(t,e);f(r,e=>{n===e&&o.push(e)})}):o=[n])}return new P(o)};const D=(e,t,n)=>{let i=e.length;return y(e,t,(e,t)=>{let s=r(t);i--;let o=t;"string"===s?o=O(t):a(t)&&(o=[t]),i>0&&(o=[].map.call(o,e=>e.cloneNode(!0))),f(o,t=>{n(e,t)})},e=>e.innerHTML)},H=(e,t)=>{e[v]=p({},C(t));let n=T(t),r=T(e);for(let t in n){let i=n[t],s=r[t]=[];f(i,n=>{let r=p({},n);s.push(r),e.addEventListener(t,r.handle)})}},I=(e,t)=>{let n=Array.from(e.children),r=t.children;f(n,(e,t)=>{let n=r[t];H(e,n),I(e,n)})};Object.assign(S,{append(e){return D(this,e,(e,t)=>{e.appendChild(t)})},prepend(e){return D(this,e,(e,t)=>{e.insertBefore(t,e.firstChild)})},before(e){return D(this,e,(e,t)=>{e.parentNode.insertBefore(t,e)})},after(e){return D(this,e,(e,t)=>{var n=e.parentNode;n.lastChild===e?n.appendChild(t):n.insertBefore(t,e.nextSibling)})},wrap(e){return D(this,e,(e,t)=>{e.parentNode.insertBefore(t,e),t.appendChild(e)})},unwrap(){var e=[];return f(this,function(t){var n=t.parentNode;n.parentNode.insertBefore(t,n),-1===e.indexOf(n)&&e.push(n)}),A(e).remove(),this},wrapInner(e){return D(this,e,(e,t)=>{f(d(e.childNodes),function(e){t.appendChild(e)}),e.appendChild(t)})},wrapAll(e){return s(e)&&(e=O(e)),this.eq(0).before(e=A(e)),f(this,t=>e.append(t)),this},replaceWith(e){return this.before(e).remove()},empty(){f(this,e=>{e.innerHTML=""})},remove(e){f(this,t=>{e&&!w(t,e)||t.parentNode.removeChild(t)})},clone(e,t){return this.map((n,r)=>{let i=r.cloneNode(!0);return e&&H(i,r),t&&I(i,r),i})}});let _={append:"appendTo",prepend:"prependTo",after:"insertAfter",before:"insertBefore",replaceWith:"replaceAll"};for(let e in _){S[_[e]]=function(t){A(t)[e](this)}}const U=(e,t)=>parseFloat(m(e)[t]);f([{Width:["left","right"]},{Height:["top","bottom"]}],e=>{for(let t in e){let n=t.toLowerCase();S[n]=function(e){return y(this,e,(e,t)=>{t=E(t),e.style[n]=t},e=>U(e,n),1)};let r=e[t],i=(e,t,i,s)=>{let o=U(e,n);return f(r,n=>{t&&(o+=U(e,"padding-"+n)),i&&(o+=U(e,"border-"+n+"-width")),s&&(o+=U(e,"margin-"+n))}),o};S["inner"+t]=function(){return i(this[0],1)};S["outer"+t]=function(e){return i(this[0],1,1,e)}}}),Object.assign(S,{offset(){let e=this[0],t=0,n=0;do{t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent}while(e);return{top:t,left:n}},position(){let e=this[0];return{top:e.offsetTop,left:e.offsetLeft}},scrollTop(e){return y(this,e,(e,t)=>{e.scrollTop=t},e=>e.scrollTop,1)},scrollLeft(e){return y(this,e,(e,t)=>{e.scrollLeft=t},e=>e.scrollLeft,1)}});const k=(e,t,n,r)=>{let o=[];return s(t)?f(e,e=>{w(e,t)?n&&n(o,e):r&&r(o,e)}):l(t)?f(e,e=>{f(t,t=>{e===t?n&&n(o,e):r&&r(o,e)})}):a(t)?f(e,e=>{t===e?n&&n(o,e):r&&r(o,e)}):i(t)&&f(e,(e,i)=>{t.call(e,i,e)?n&&n(o,e):r&&r(o,e)}),A(o)},q=(e,t,n)=>{let r=[];return f(n,n=>{!(n=n[t])||-1!=r.indexOf(n)||e&&!w(n,e)||r.push(n)}),A(r)},M=(e,t,n,i)=>{let s=[],o=e=>{let l=e[t];if(l){if(i&&("string"===r(i)&&w(l,i)||i===l||i instanceof Array&&i.indexOf(l)>-1))return;n&&!w(l,n)||-1!==s.indexOf(l)||s.push(l),o(l)}};return f(e,e=>{o(e)}),o=null,A(s)};p(S,{slice(...e){let t=[].slice.call(this,...e);return A(t)},eq(e){return this.slice(e,parseInt(e)+1||void 0)},first(){return this.eq(0)},last(){return this.eq(-1)},get(e){return o(e)?d(this):this[e]},hasClass(e){let t=!1;return f(this,n=>{n.classList.contains(e)&&(t=!0)}),t},filter(e){return k(this,e,(e,t)=>e.push(t))},not(e){return k(this,e,0,(e,t)=>e.push(t))},is(e){return 0 in this.filter(e)},map(e){let t=[];return f(this,(n,r)=>{t.push(e(r,n))}),A(t)},find(e){return A(e,this)},has(e){let t=[];return f(this,n=>{0 in A(e,n)&&t.push(n)}),A(t)},children(e){let t=[];return f(this,n=>{n.nodeType&&f(d(n.children),n=>{e?w(n,e)&&t.push(n):t.push(n)})}),A(t)},next(e){return q(e,"nextElementSibling",this)},prev(e){return q(e,"previousElementSibling",this)},parent(e){return q(e,"parentNode",this)},nextAll(e){return M(this,"nextElementSibling",e)},prevAll(e){return M(this,"previousElementSibling",e)},parents(e){return M(this,"parentNode",e,t)},nextUntil(e,t){return M(this,"nextElementSibling",t,e)},prevUntil(e,t){return M(this,"previousElementSibling",t,e)},parentsUntil(e,t){return M(this,"parentNode",t,e)},closest(e){var t=A(e).parent();return this.parentsUntil(t,e)},siblings(e){let t=this;return this.parent().children(e).filter(function(){if(-1===t.indexOf(this))return!0})},offsetParent(){let e=[];return f(this,n=>{e.push(n.offsetParent||t.body)}),A(e)}});let $={preventDefault(){this._pD()},isDefaultPrevented(){return this.defaultPrevented},stopPropagation(){this._sP()},isPropagationStopped(){return this.cancelBubble},stopImmediatePropagation(){this.isImmediatePropagationStopped=(()=>!0),this._sIP()},isImmediatePropagationStopped:()=>!1};const B=e=>(e._pD||(Object.defineProperties(e,{_pD:{value:e.preventDefault},_sP:{value:e.stopPropagation},_sIP:{value:e.stopImmediatePropagation}}),Object.assign(e,$)),e);let R=MouseEvent,F=e.TouchEvent||Event,W={click:R,mousedown:R,mouseup:R,mousemove:R,mouseenter:R,mouseleave:R,touchstart:F,touchend:F,touchmove:F},X=["focus","blur"],G=A.Event=((e,t)=>{let n=W[e]||Event;return B(new n(e,t))});const J=(e,t)=>{let n=T(e);return n[t]||(n[t]=[])},z=(e,t,n,r)=>(f(e,e=>{if(a(e)){if(!r&&!n&&X.indexOf(t)>-1&&i(e[t]))return void e[t]();let s;s=t instanceof Event?t:r?new Event(t,{bubbles:!1,cancelable:!0}):G(t,{bubbles:!0,cancelable:!0}),n&&u(s,"_argData",{value:n}),e.dispatchEvent(s)}else{let r=J(e,t),i=[],s=0;f(r,e=>{if(e.isOne||i.push(e),s)return;let r=G(t),l=[r];n&&l.push(n);let a=e.data;o(a)||(r.data=a),e.fn(...l),delete r.data,r.isImmediatePropagationStopped()&&(s=1)}),T(e)[t]=i}}),e),Q=(e,t,n,r,u,p)=>{if(t=t.split(" "),i(n)?(u=n,n=r=void 0):s(n)?i(r)&&(u=r,r=void 0):(u=r,r=n,n=void 0),u)return f(e,e=>{f(t,t=>{let i={fn:u,isOne:p,data:r,selector:n};if(a(e)){let s=function(i){B(i),!o(r)&&(i.data=r),i.originalEvent=i;let a=i._argData;a&&!l(a)&&(a=[a]);let d=this,h=1;if(n){let e=A(i.target).parents(n);0 in e?d=e[0]:w(i.target,n)?d=i.target:h=0}h&&(a?u.call(d,i,...a):u.call(d,i)),delete i.data,delete i.originalEvent,p&&e.removeEventListener(t,s)};i.handle=s,e.addEventListener(t,s)}J(e,t).push(i)})}),e;console.error("no function =>",u)};Object.assign(S,{on(e,t,n,r){return Q(this,e,t,n,r)},one(e,t,n){return Q(this,e,void 0,t,n,1)},off(e,t,n){return((e,t,n,r)=>(t&&(t=t.split(" "),!r&&i(n)&&(r=n,n=void 0)),f(e,e=>{let i=T(e);if(t)f(t,t=>{let s=J(e,t);if(a(e))if(r){let i=s.find(function(e){return e.fn===r&&e.selector===n});i&&(e.removeEventListener(t,i.handle),c(s,i))}else f(s,n=>{e.removeEventListener(t,n.handle)}),i[t]=[];else r?c(s,r):i[t]=[]});else{if(a(e))for(let t in i){let n=i[t];f(n,n=>{e.removeEventListener(t,n.handle)})}e[b]={}}}),e))(this,e,t,n)},trigger(e,t){return z(this,e,t)},triggerHandler(e,t){return z(this,e,t,1)},bind(e,t,n){return this.on(e,t,n)},unbind(e,t){return this.off(e,t)},hover(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),f("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e){S[e]=function(t){return t?this.on(e,t):this.trigger(e),this}});let K={url:"",type:"GET",data:"",crossDomain:!1,dataType:"",headers:{},timeout:1e5,username:null,password:null,contentType:"json"};const V=e=>{let t=p({},K);p(t,e),t.type=t.type.toUpperCase();let{url:n,contentType:r,data:i}=t;if(i instanceof FormData)r="form";else if(r.indexOf("form")>-1){let e=new FormData;for(let t in i)e.append(t,i[t]);i=e}switch(t.type){case"GET":r="";let e=Y(i);n+=(n.indexOf("?")>-1?n+="&":"?")+e,i=null;break;case"POST":let s="; charset=UTF-8";r.indexOf("json")>-1?(r="application/json"+s,i=JSON.stringify(i)):r.indexOf("urlencoded")>-1?(r="application/x-www-form-urlencoded"+s,i=Y(i)):r.indexOf("form")>-1?r="multipart/form-data"+s:r.indexOf("xml")>-1&&(r="text/xml"+s)}let s=A({});var o=new XMLHttpRequest;let l=new Promise((e,i)=>{o.open(t.type,n,!0,t.username,t.password);let{headers:l}=t;for(let e in l)o.setRequestHeader(e,l[e]);r&&o.setRequestHeader("Content-Type",r),o.responseType=t.dataType,o.withCredentials=t.crossDomain,o.timeout=t.timeout,o.addEventListener("load",t=>{let{target:n}=t,{response:r}=t.target,i=n.getResponseHeader("content-type");i&&i.indexOf("application/json")>-1&&"object"!=typeof r&&(r=JSON.parse(r)),e(r)},!1),o.addEventListener("error",e=>{i()},!1),o.addEventListener("progress",e=>{s.trigger("loading",e)},!1),o.upload&&o.upload.addEventListener("progress",e=>{s.trigger("uploading",e)},!1)});return p(l,{loading:e=>(s.on("loading",(t,n)=>e(n)),l),uploading:e=>(s.on("uploading",(t,n)=>e(n)),l),beforeSend:e=>(e(o),l)}),setTimeout(()=>{i?o.send(i):o.send()},0),l.options=t,l},Y=(e,t="",n)=>{let r="";for(let i in e){let s=e[i];"object"==typeof s?r+=Y(s,t?`${t}[${i}]`:i,n):(t&&(e instanceof Array&&(i=""),i=t+`[${i}]`),n||(i=encodeURIComponent(i),s=encodeURIComponent(s)),r+=`${i}=${s}&`)}return t||(r=r.replace(/&$/g,"")),r};p(A,{ajax:V,ajaxSetup:e=>{p(K,e)},param:e=>Y(e,"",1)}),f(["get","post"],e=>{A[e]=((t,n,r)=>{let i={url:t,type:e.toUpperCase(),data:n};return r&&(i.dataType=r),V(i)})}),p(S,{show(){return f(this,e=>{e.style.display=""}),this},hide(){return f(this,e=>{e.style.display="none"}),this}}),A.prototype=A.fn=P.prototype=S,p(A,{extend(...e){if(1!==e.length)return p(...e);{let t=e[0];"object"==r(t)&&p(A,t)}},merge:h,type:r}),e.Xque=e.$=A})(window);