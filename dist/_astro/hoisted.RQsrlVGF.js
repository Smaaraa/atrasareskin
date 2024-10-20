import{i as U}from"./index.D_76QRnP.js";const g="data-astro-transition-persist";function W(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function V(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function K(t){for(const e of Array.from(document.head.children)){const n=z(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function j(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${g}]`)){const o=n.getAttribute(g),r=t.querySelector(`[${g}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&J(n)&&!Q(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const G=()=>{const t=document.activeElement;if(t?.closest(`[${g}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>A({activeElement:t,start:e,end:n})}return()=>A({activeElement:t})}else return()=>A({activeElement:null})},A=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},z=(t,e)=>{const n=t.getAttribute(g),o=n&&e.head.querySelector(`[${g}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},J=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},Q=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),Z=t=>{W(t),V(t),K(t);const e=G();j(t.body,document.body),e()},tt="astro:before-preparation",et="astro:after-preparation",nt="astro:before-swap",ot="astro:after-swap",rt=t=>document.dispatchEvent(new Event(t));class X extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,u,a,l,d,c){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class st extends X{formData;loader;constructor(e,n,o,r,i,u,a,l,d,c){super(tt,{cancelable:!0},e,n,o,r,i,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class it extends X{direction;viewTransition;swap;constructor(e,n){super(nt,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>Z(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function at(t,e,n,o,r,i,u,a,l){const d=new st(t,e,n,o,r,i,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(rt(et),d.navigationType!=="traverse"&&L({scrollX,scrollY}))),d}function ct(t,e){const n=new it(t,e);return document.dispatchEvent(n),n.swap(),n}const lt=history.pushState.bind(history),T=history.replaceState.bind(history),L=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},R=!!document.startViewTransition,k=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let m,b,v;const C=t=>document.dispatchEvent(new Event(t)),_=()=>C("astro:page-load"),ut=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},x="data-astro-transition-persist",I="data-astro-transition",S="data-astro-transition-fallback";let M,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):k()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function dt(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function $(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function mt(){let t=Promise.resolve();for(const e of document.getElementsByTagName("script")){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const q=(t,e,n,o,r)=>{const i=Y(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;T({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",t.href)}else lt({...n.state,index:++y,scrollX:0,scrollY:0},"",t.href);if(document.title=u,v=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const l=history.state;location.href=t.href,history.state||(T(l,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ft(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${x}="${n.getAttribute(x)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function N(t,e,n,o,r){async function i(l){function d(h){const f=h.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(S,l);const w=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const u=document.title,a=ct(t,n.viewTransition);q(a.to,a.from,e,u,o),C(ot),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ht(){return m?.controller.abort(),m={controller:new AbortController}}async function B(t,e,n,o,r){const i=ht();if(!k()||location.origin!==n.origin){i===m&&(m=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&L({scrollX,scrollY}),Y(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){q(n,e,o,document.title,r),i===m&&(m=void 0);return}const a=await at(e,n,t,u,o.sourceElement,o.info,i.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){i===m&&(m=void 0),a.signal.aborted||(location.href=n.href);return}async function l(s){const w=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const p=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const f=await dt(w,h);if(f===null){s.preventDefault();return}if(f.redirected){const p=new URL(f.redirected);if(p.origin!==s.to.origin){s.preventDefault();return}s.to=p}if(M??=new DOMParser,s.newDocument=M.parseFromString(f.html,f.mediaType),s.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const E=ft(s.newDocument);E.length&&!s.signal.aborted&&await Promise.all(E)}async function d(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){i===m&&(m=void 0);return}if(document.documentElement.setAttribute(I,a.direction),R)c.viewTransition=document.startViewTransition(async()=>await N(a,o,c,r));else{const s=(async()=>{await Promise.resolve(),await N(a,o,c,r,$())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await mt(),_(),ut()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===b&&(b=void 0),i===m&&(m=void 0),document.documentElement.removeAttribute(I),document.documentElement.removeAttribute(S)});try{await c.viewTransition?.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function O(t,e){await B("forward",v,new URL(t,location.href),e??{})}function wt(t){if(!k()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>y?"forward":"back";y=n,B(o,v,new URL(location.href),{},e)}const F=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&L({scrollX,scrollY})};{if(R||$()!=="none")if(v=new URL(location.href),addEventListener("popstate",wt),addEventListener("load",_),"onscrollend"in window)addEventListener("scrollend",F);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,F();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.getElementsByTagName("script"))t.dataset.astroExec=""}function bt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function H(t){return t.dataset.astroReload!==void 0}(R||bt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;H(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),O(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||H(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),s=new URL(a);s.search=c.toString(),a=s.toString()}else d.formData=r;t.preventDefault(),O(a,d)}),U({prefetchAll:!0}));function D(t){t==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),document.documentElement.classList.add("theme-transition"),localStorage.setItem("theme",t)}function P(){return localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}document.addEventListener("DOMContentLoaded",()=>{D(P())});document.addEventListener("astro:page-load",()=>{D(P())});document.addEventListener("astro:after-swap",()=>{D(P())});window.addEventListener("load",()=>{document.documentElement.classList.remove("theme-transition")});const pt=new MutationObserver(t=>{t.forEach(e=>{if(e.attributeName==="class"){const n=document.documentElement.classList.contains("dark");localStorage.setItem("theme",n?"dark":"light")}})});pt.observe(document.documentElement,{attributes:!0});
