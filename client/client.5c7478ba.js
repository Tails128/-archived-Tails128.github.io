function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function v(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function R(){if(!w)throw new Error("Function called outside component initialization");return w}const P=[],A=[],L=[],j=[],C=Promise.resolve();let N=!1;function q(t){L.push(t)}let O=!1;const U=new Set;function k(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];x(e),D(e.$$)}for(P.length=0;A.length;)A.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(P.length);for(;j.length;)j.pop()();N=!1,O=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const I=new Set;let H;function T(){H={r:0,c:[],p:H}}function B(){H.r||o(H.c),H=H.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),H.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),q(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(P.push(t),N||(N=!0,C.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,a,c,i,l=[-1]){const f=w;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&W(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),F(e,n.target,n.anchor),k()}x(f)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(t){let e,n;const r=t[2].default,o=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(r,t,t[1],null);return{c(){e=p("main"),o&&o.c(),this.h()},l(t){e=y(t,"MAIN",{class:!0});var n=$(e);o&&o.l(n),n.forEach(u),this.h()},h(){g(e,"class","svelte-f33a6u")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&2&e&&o.p(c(r,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(r,t[1],e,null))},i(t){n||(J(o,t),n=!0)},o(t){K(o,t),n=!1},d(t){t&&u(e),o&&o.d(t)}}}function ot(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class st extends Q{constructor(t){super(),X(this,t,ot,rt,a,{segment:0})}}function at(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var o=$(e);n=b(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function ct(e){let n,r,o,s,a,c,f,S,w,x=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&at(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),a=h(),c=p("p"),f=d(x),S=h(),R&&R.c(),w=m(),this.h()},l(t){E('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=v(t),o=y(t,"H1",{class:!0});var n=$(o);s=b(n,e[0]),n.forEach(u),a=v(t),c=y(t,"P",{class:!0});var i=$(c);f=b(i,x),i.forEach(u),S=v(t),R&&R.l(t),w=m(),this.h()},h(){g(o,"class","svelte-8od9u6"),g(c,"class","svelte-8od9u6")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,a,e),l(t,c,e),i(c,f),l(t,S,e),R&&R.m(t,e),l(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&x!==(x=t[1].message+"")&&_(f,x),t[2]&&t[1].stack?R?R.p(t,e):(R=at(t),R.c(),R.m(w.parentNode,w)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(S),R&&R.d(t),t&&u(w)}}}function it(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class lt extends Q{constructor(t){super(),X(this,t,it,ct,a,{status:0,error:1})}}function ut(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&Y(c.$$.fragment),n=m()},l(t){c&&z(c.$$.fragment,t),n=m()},m(t,e){c&&F(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?M(o,[V(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){T();const t=c;K(t.$$.fragment,1,0,()=>{G(t,1)}),B()}s?(Y((c=new s(a())).$$.fragment),J(c.$$.fragment,1),F(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&K(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&G(c,t)}}}function ft(t){let e;const n=new lt({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){F(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function pt(t){let e,n,r,o;const s=[ft,ut],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(T(),K(a[i],1,1,()=>{a[i]=null}),B(),n=a[e],n||(n=a[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){K(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function dt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new st({props:o});return{c(){Y(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,e){F(s,t,e),n=!0},p(t,[e]){const n=12&e?M(r,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(J(s.$$.fragment,t),n=!0)},o(t){K(s.$$.fragment,t),n=!1},d(t){G(s,t)}}}function ht(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=et,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class mt extends Q{constructor(t){super(),X(this,t,ht,dt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const gt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],$t=[{js:()=>import("./index.a3566d27.js"),css:[]},{js:()=>import("./about.91dca6e2.js"),css:[]},{js:()=>import("./index.f4969a35.js"),css:[]},{js:()=>import("./[slug].7c3f200f.js"),css:[]}],yt=(bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:bt(t[1])})}]}]);var bt;const vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let _t,St,Et,wt=!1,xt=[],Rt="{}";const Pt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(vt&&vt.session)};let At,Lt;Pt.session.subscribe(async t=>{if(At=t,!wt)return;Lt=!0;const e=Dt(new URL(location.href)),n=St={},{redirect:r,props:o,branch:s}=await Bt(e);n===St&&await Tt(r,s,o,e.page)});let jt,Ct=null;let Nt,qt=1;const Ot="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ut={};function kt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Dt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(vt.baseUrl))return null;let e=t.pathname.slice(vt.baseUrl.length);if(""===e&&(e="/"),!gt.some(t=>t.test(e)))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=kt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function It(){return{x:pageXOffset,y:pageYOffset}}async function Ht(t,e,n,r){if(e)Nt=e;else{const t=It();Ut[Nt]=t,e=Nt=++qt,Ut[Nt]=n?t:{x:0,y:0}}Nt=e,_t&&Pt.preloading.set(!0);const o=Ct&&Ct.href===t.href?Ct.promise:Bt(t);Ct=null;const s=St={},{redirect:a,props:c,branch:i}=await o;if(s===St&&(await Tt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ut[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ut[Nt]=t,t&&scrollTo(t.x,t.y)}}async function Tt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Dt(new URL(t,document.baseURI));return n?(Ot[e.replaceState?"replaceState":"pushState"]({id:Nt},"",t),Ht(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Pt.page.set(r),Pt.preloading.set(!1),_t)_t.$set(n);else{n.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},n.level0={props:await Et},n.notify=Pt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Kt(t.nextSibling);Kt(t),Kt(e)}_t=new mt({target:jt,props:n,hydrate:!0})}xt=e,Rt=JSON.stringify(r.query),wt=!0,Lt=!1}async function Bt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Et||(Et=vt.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},At));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Rt)return!0;const o=xt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Lt&&!u&&xt[c]&&xt[c].part===e.i)return xt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Jt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}($t[e.i]);let m;return m=wt||!vt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},At):{}:vt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Jt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Kt(t){t.parentNode.removeChild(t)}function Mt(t){const e=Dt(new URL(t,document.baseURI));if(e)return Ct&&t===Ct.href||function(t,e){Ct={href:t,promise:e}}(t,Bt(e)),Ct.promise}let Vt;function Yt(t){clearTimeout(Vt),Vt=setTimeout(()=>{zt(t)},20)}function zt(t){const e=Gt(t.target);e&&"prefetch"===e.rel&&Mt(e.href)}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Dt(o);if(s){Ht(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ot.pushState({id:Nt},"",o.href)}}function Gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wt(t){if(Ut[Nt]=It(),t.state){const e=Dt(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else qt=qt+1,function(t){Nt=t}(qt),Ot.replaceState({id:Nt},"",location.href)}var Xt;Xt={target:document.querySelector("#sapper")},"scrollRestoration"in Ot&&(Ot.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ot.scrollRestoration="auto"}),addEventListener("load",()=>{Ot.scrollRestoration="manual"}),function(t){jt=t}(Xt.target),addEventListener("click",Ft),addEventListener("popstate",Wt),addEventListener("touchstart",zt),addEventListener("mousemove",Yt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ot.replaceState({id:qt},"",e);const n=new URL(location.href);if(vt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=vt;Et||(Et=s&&s[0]),Tt(null,[],{error:c,status:a,session:o,level0:{props:Et},level1:{props:{status:a,error:c},component:lt},segments:s},{host:e,path:n,query:kt(r),params:{}})}();const r=Dt(n);return r?Ht(r,qt,!0,t):void 0});export{Q as S,h as a,$ as b,y as c,b as d,p as e,u as f,v as g,g as h,X as i,S as j,l as k,i as l,_ as m,t as n,f as o,E as q,a as s,d as t};
