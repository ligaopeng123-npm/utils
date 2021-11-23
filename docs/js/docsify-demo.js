var docsifyDemo=function(b){"use strict";function y(t){return B(t)||O(t)||q(t)||R()}function B(t){if(Array.isArray(t))return g(t)}function O(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function q(t,a){if(!!t){if(typeof t=="string")return g(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,a)}}function g(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=t[r];return o}function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function C(t,a,r,o){return new(r||(r=Promise))(function(n,c){function i(d){try{f(o.next(d))}catch(e){c(e)}}function s(d){try{f(o.throw(d))}catch(e){c(e)}}function f(d){var e;d.done?n(d.value):(e=d.value,e instanceof r?e:new r(function(u){u(e)})).then(i,s)}f((o=o.apply(t,a||[])).next())})}function L(t,a){var r,o,n,c,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(f){return function(d){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&e[0]?o.return:e[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,e[1])).done)return n;switch(o=0,n&&(e=[2&e[0],n.value]),e[0]){case 0:case 1:n=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,o=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!((n=n.length>0&&n[n.length-1])||e[0]!==6&&e[0]!==2)){i=0;continue}if(e[0]===3&&(!n||e[1]>n[0]&&e[1]<n[3])){i.label=e[1];break}if(e[0]===6&&i.label<n[1]){i.label=n[1],n=e;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(e);break}n[2]&&i.ops.pop(),i.trys.pop();continue}e=a.call(t,i)}catch(u){e=[6,u],o=0}finally{r=n=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([f,d])}}}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var h,w,E,_,S=typeof navigator=="undefined"?void 0:navigator,v=S==null?void 0:S.clipboard;(h=v==null?void 0:v.read)===null||h===void 0||h.bind(v),(w=v==null?void 0:v.readText)===null||w===void 0||w.bind(v);var T=((E=v==null?void 0:v.write)===null||E===void 0||E.bind(v),(_=v==null?void 0:v.writeText)===null||_===void 0?void 0:_.bind(v)),x=typeof window=="undefined"?void 0:window,A=(x==null||x.ClipboardItem,x);function V(){return typeof ClipboardEvent=="undefined"&&A.clipboardData!==void 0&&A.clipboardData.setData!==void 0}var X=function(){this.success=!1};function $(t,a,r){for(var o in t.success=!0,a){var n=a[o],c=r.clipboardData;c.setData(o,n),o==="text/plain"&&c.getData(o)!==n&&(t.success=!1)}r.preventDefault()}function D(t){var a=new X,r=$.bind(this,a,t);document.addEventListener("copy",r);try{document.execCommand("copy")}finally{document.removeEventListener("copy",r)}return a.success}function M(t,a){z(t);var r=D(a);return k(),r}function z(t){var a=document.getSelection();if(a){var r=document.createRange();r.selectNodeContents(t),a.removeAllRanges(),a.addRange(r)}}function k(){var t=document.getSelection();t&&t.removeAllRanges()}function P(t){return C(this,void 0,void 0,function(){var a;return L(this,function(r){if(a="text/plain"in t,V()){if(!a)throw new Error("No `text/plain` value was specified.");if(o=t["text/plain"],A.clipboardData.setData("Text",o))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var o;return D(t)?[2,!0]:navigator.userAgent.indexOf("Edge")>-1?[2,!0]:M(document.body,t)?[2,!0]:function(n){var c=document.createElement("div");c.setAttribute("style","-webkit-user-select: text !important"),c.textContent="temporary element",document.body.appendChild(c);var i=M(c,n);return document.body.removeChild(c),i}(t)?[2,!0]:function(n){var c=document.createElement("div");c.setAttribute("style","-webkit-user-select: text !important");var i=c;c.attachShadow&&(i=c.attachShadow({mode:"open"}));var s=document.createElement("span");s.innerText=n,i.appendChild(s),document.body.appendChild(c),z(s);var f=document.execCommand("copy");return k(),document.body.removeChild(c),f}(t["text/plain"])?[2,!0]:[2,!1]})})}function W(t){return C(this,void 0,void 0,function(){return L(this,function(a){if(T)return[2,T(t)];if(!P(function(r){var o={};return o["text/plain"]=r,o}(t)))throw new Error("writeText() failed");return[2]})})}function G(t){W(t)}var H=`
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
`,U=`
    <svg aria-hidden="true"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
    </svg>
`,F=`
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
`;function I(t,a){var r=0;t.afterEach(function(o,n){var c=new DOMParser,i=c.parseFromString(o,"text/html"),s=i.querySelectorAll("pre"),f=y(s);f.forEach(function(d){var e="demo_code_"+r,u=document.createElement("div");if(u.innerHTML='<button type="button" class="demo-copy-code-button" aria-controls="'.concat(e,'">Copy</button>').trim(),u=u.firstChild,d.getAttribute("data-lang")=="html preview"){var l=d.innerText,p=d.outerHTML,N="demo_toggle_"+r,j="demo_preview_"+r,J=d.getAttribute("data-lang").replace(" preview",""),p=d.cloneNode(!0);p.setAttribute("data-lang",J),p.setAttribute("aria-labelledby",N),p.append(u);var m=document.createElement("div");m.innerHTML=`
                        <div class="demo">
                            <div class="demo_preview">
                                <div class="demo_preview_content" id="`.concat(j,`">
                                    `).concat(l,`
                                </div>
                                <div class="demo_resize" aria-controls="`).concat(j,`" role="slider" tabindex="0">
                                    `).concat(F,`
                                </div>
                            </div>
                            
                            <div
                                class="demo_code"
                                id="`).concat(e,`"
                                style="display: none;">
                                `).concat(p.outerHTML,`
                            </div>
                            
                            <div class="demo_button">
                            <button type="button" class="demo_button demo_toggle" id="`).concat(N,'" aria-expanded="false" aria-controls="').concat(e,`">
                                View Source
                                `).concat(H,`
                            </button>
                            </div>
                        </div>
                    `).trim(),m=m.firstChild,d.replaceWith(m)}else d.id=e,d.append(u);r++}),n(i.body.innerHTML)}),t.doneEach(function(){var o,n,c;document.addEventListener("mousedown",function(e){var u=e.target;u.className=="demo_resize"&&(o=!0),u.className.baseVal=="bi bi-grip-vertical"&&(u=u.parentElement,o=!0),n=e.pageX,c=u.getAttribute("aria-controls")}),document.addEventListener("mousemove",function(e){if(o&&e.pageX!=n){var u=document.getElementById(c).parentElement,l=e.pageX-n,p=u.offsetWidth+l;u.style.width=p+"px",n=e.pageX}}),document.addEventListener("mouseup",function(e){o=!1}),document.addEventListener("mouseleave",function(e){o=!1});var i=document.querySelectorAll(".demo_toggle"),s=y(i);s.forEach(function(e){e.addEventListener("click",function(u){e.getAttribute("aria-expanded")=="false"?(e.setAttribute("aria-expanded","true"),e.innerHTML="Hide Source".concat(U)):(e.setAttribute("aria-expanded","false"),e.innerHTML="View Source".concat(H));var l=e.getAttribute("aria-controls"),p=document.getElementById(l);p.style.display=p.style.display=="none"?"block":"none"})});var f=document.querySelectorAll(".demo-copy-code-button"),d=y(f);d.forEach(function(e){e.addEventListener("click",function(u){G(e.parentElement.querySelector("code").innerText),e.className+=" copied";function l(){e.className="demo-copy-code-button",e.removeEventListener("webkitAnimationEnd",l),e.removeEventListener("oAnimationEnd",l),e.removeEventListener("MSAnimationEnd",l),e.removeEventListener("animationend",l)}e.addEventListener("webkitAnimationEnd",l,!1),e.addEventListener("oAnimationEnd",l,!1),e.addEventListener("MSAnimationEnd",l,!1),e.addEventListener("animationend",l,!1)})})})}if(window.$docsify)window.$docsify.plugins=[].concat(I,window.$docsify.plugins||[]);else throw new Error("Docsify is not loaded");return b.docsifyDemo=I,Object.defineProperty(b,"__esModule",{value:!0}),b}({});
//# sourceMappingURL=index.min.js.map
