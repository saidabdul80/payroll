import{o as Z,H as be,c as S,r as R,a as p,b as g,f as s,z as j,m as te,E as ne,d as u,e as d,n as h,I as ke,g as H,u as N,x as Q,t as b,i as _e,J as $e,K as Me,L as ce,M as ze,N as fe,O as Ce,P as Se,R as pe,w as ee,S as Ae,U as Le,h as m,F as X,l as ae,q as Be}from"./app-2bcc9048.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const Ve={class:"relative"},Y={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white dark:bg-gray-800"}},setup(e){const t=e,a=n=>{l.value&&n.key==="Escape"&&(l.value=!1)};Z(()=>document.addEventListener("keydown",a)),be(()=>document.removeEventListener("keydown",a));const i=S(()=>({48:"w-48"})[t.width.toString()]),r=S(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),l=R(!1);return(n,o)=>(p(),g("div",Ve,[s("div",{onClick:o[0]||(o[0]=c=>l.value=!l.value)},[j(n.$slots,"trigger")]),te(s("div",{class:"fixed inset-0 z-40",onClick:o[1]||(o[1]=c=>l.value=!1)},null,512),[[ne,l.value]]),u(ke,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:d(()=>[te(s("div",{class:h(["absolute z-50 mt-2 rounded-md shadow-lg",[i.value,r.value]]),style:{display:"none"},onClick:o[2]||(o[2]=c=>l.value=!1)},[s("div",{class:h(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[j(n.$slots,"content")],2)],2),[[ne,l.value]])]),_:3})]))}},G={__name:"DropdownLink",props:{href:{type:String,default:"#"}},setup(e){return(t,a)=>(p(),H(N(Q),{href:e.href,class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition duration-150 ease-in-out"},{default:d(()=>[j(t.$slots,"default")]),_:3},8,["href"]))}},B={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,a=S(()=>t.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,r)=>(p(),H(N(Q),{href:e.href,class:h(a.value)},{default:d(()=>[j(i.$slots,"default")]),_:3},8,["href","class"]))}},Ee={"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Oe={class:"flex-1 mx-3 whitespace-nowrap"},k={__name:"SidebarListItem",props:{itemName:String,link:String,hasBadge:Boolean,badge:String,badgeContent:String,activeLinksRecursive:Array,activeLinks:Array},setup(e){return(t,a)=>(p(),g("li",null,[u(N(Q),{href:t.route(e.link),class:h(["flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 dark:text-gray-100",{"bg-purple-100 dark:bg-purple-800":e.activeLinksRecursive?e.activeLinksRecursive.some(i=>t.$page.url.includes(i)):e.activeLinks.includes(t.route().current())}])},{default:d(()=>[(p(),g("svg",Ee,[j(t.$slots,"default")])),s("span",Oe,b(e.itemName),1),e.hasBadge?(p(),g("span",{key:0,class:h({"inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-700 dark:text-gray-300":e.badge==="number","inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-purple-700 dark:text-gray-300":e.badge!=="number"})},b(e.badgeContent),3)):_e("",!0)]),_:3},8,["href","class"])]))}};function ge(e){return Ce()?(Se(e),!0):!1}function I(e){return typeof e=="function"?e():N(e)}const De=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const He=Object.prototype.toString,Ne=e=>He.call(e)==="[object Object]",me=()=>{};function je(e,t){function a(...i){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(l)})}return a}const he=e=>e();function Re(e=he){const t=R(!0);function a(){t.value=!1}function i(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:ce(t),pause:a,resume:i,eventFilter:r}}function qe(e){return e||pe()}function Ie(...e){if(e.length!==1)return Me(...e);const t=e[0];return typeof t=="function"?ce(ze(()=>({get:t,set:me}))):R(t)}function Te(e,t,a={}){const{eventFilter:i=he,...r}=a;return ee(e,je(i,t),r)}function Fe(e,t,a={}){const{eventFilter:i,...r}=a,{eventFilter:l,pause:n,resume:o,isActive:c}=Re(i);return{stop:Te(e,t,{...r,eventFilter:l}),pause:n,resume:o,isActive:c}}function ve(e,t=!0,a){qe()?Z(e,a):t?e():fe(e)}function Pe(e=!1,t={}){const{truthyValue:a=!0,falsyValue:i=!1}=t,r=$e(e),l=R(e);function n(o){if(arguments.length)return l.value=o,l.value;{const c=I(a);return l.value=l.value===c?I(i):c,l.value}}return r?n:[l,n]}function ye(e){var t;const a=I(e);return(t=a==null?void 0:a.$el)!=null?t:a}const T=De?window:void 0;function re(...e){let t,a,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,i,r]=e,t=T):[t,a,i,r]=e,!t)return me;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const l=[],n=()=>{l.forEach(_=>_()),l.length=0},o=(_,y,V,M)=>(_.addEventListener(y,V,M),()=>_.removeEventListener(y,V,M)),c=ee(()=>[ye(t),I(r)],([_,y])=>{if(n(),!_)return;const V=Ne(y)?{...y}:y;l.push(...a.flatMap(M=>i.map(z=>o(_,M,z,V))))},{immediate:!0,flush:"post"}),v=()=>{c(),n()};return ge(v),v}function We(){const e=R(!1),t=pe();return t&&Z(()=>{e.value=!0},t),e}function Je(e){const t=We();return S(()=>(t.value,!!e()))}function Ge(e,t={}){const{window:a=T}=t,i=Je(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let r;const l=R(!1),n=v=>{l.value=v.matches},o=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",n):r.removeListener(n))},c=Ae(()=>{i.value&&(o(),r=a.matchMedia(I(e)),"addEventListener"in r?r.addEventListener("change",n):r.addListener(n),l.value=r.matches)});return ge(()=>{c(),o(),r=void 0}),l}const U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__",Ue=Ke();function Ke(){return K in U||(U[K]=U[K]||{}),U[K]}function we(e,t){return Ue[e]||t}function Qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Xe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},se="vueuse-storage";function Ye(e,t,a,i={}){var r;const{flush:l="pre",deep:n=!0,listenToStorageChanges:o=!0,writeDefaults:c=!0,mergeDefaults:v=!1,shallow:_,window:y=T,eventFilter:V,onError:M=f=>{console.error(f)},initOnMounted:z}=i,$=(_?Le:R)(typeof t=="function"?t():t);if(!a)try{a=we("getDefaultStorage",()=>{var f;return(f=T)==null?void 0:f.localStorage})()}catch(f){M(f)}if(!a)return $;const L=I(t),F=Qe(L),E=(r=i.serializer)!=null?r:Xe[F],{pause:W,resume:w}=Fe($,()=>J($.value),{flush:l,deep:n,eventFilter:V});y&&o&&ve(()=>{re(y,"storage",C),re(y,se,P),z&&C()}),z||C();function O(f,x){y&&y.dispatchEvent(new CustomEvent(se,{detail:{key:e,oldValue:f,newValue:x,storageArea:a}}))}function J(f){try{const x=a.getItem(e);if(f==null)O(x,null),a.removeItem(e);else{const D=E.write(f);x!==D&&(a.setItem(e,D),O(x,D))}}catch(x){M(x)}}function q(f){const x=f?f.newValue:a.getItem(e);if(x==null)return c&&L!=null&&a.setItem(e,E.write(L)),L;if(!f&&v){const D=E.read(x);return typeof v=="function"?v(D,L):F==="object"&&!Array.isArray(D)?{...L,...D}:D}else return typeof x!="string"?x:E.read(x)}function C(f){if(!(f&&f.storageArea!==a)){if(f&&f.key==null){$.value=L;return}if(!(f&&f.key!==e)){W();try{(f==null?void 0:f.newValue)!==E.write($.value)&&($.value=q(f))}catch(x){M(x)}finally{f?fe(w):w()}}}}function P(f){C(f.detail)}return $}function xe(e){return Ge("(prefers-color-scheme: dark)",e)}function Ze(e={}){const{selector:t="html",attribute:a="class",initialValue:i="auto",window:r=T,storage:l,storageKey:n="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:c,emitAuto:v,disableTransition:_=!0}=e,y={auto:"",light:"light",dark:"dark",...e.modes||{}},V=xe({window:r}),M=S(()=>V.value?"dark":"light"),z=c||(n==null?Ie(i):Ye(n,i,l,{window:r,listenToStorageChanges:o})),$=S(()=>z.value==="auto"?M.value:z.value),L=we("updateHTMLAttrs",(w,O,J)=>{const q=typeof w=="string"?r==null?void 0:r.document.querySelector(w):ye(w);if(!q)return;let C;if(_){C=r.document.createElement("style");const P="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";C.appendChild(document.createTextNode(P)),r.document.head.appendChild(C)}if(O==="class"){const P=J.split(/\s/g);Object.values(y).flatMap(f=>(f||"").split(/\s/g)).filter(Boolean).forEach(f=>{P.includes(f)?q.classList.add(f):q.classList.remove(f)})}else q.setAttribute(O,J);_&&(r.getComputedStyle(C).opacity,document.head.removeChild(C))});function F(w){var O;L(t,a,(O=y[w])!=null?O:w)}function E(w){e.onChanged?e.onChanged(w,F):F(w)}ee($,E,{flush:"post",immediate:!0}),ve(()=>E($.value));const W=S({get(){return v?z.value:$.value},set(w){z.value=w}});try{return Object.assign(W,{store:z,system:M,state:$})}catch{return W}}function et(e={}){const{valueDark:t="dark",valueLight:a="",window:i=T}=e,r=Ze({...e,onChanged:(o,c)=>{var v;e.onChanged?(v=e.onChanged)==null||v.call(e,o==="dark",c,o):c(o)},modes:{dark:t,light:a}}),l=S(()=>r.system?r.system.value:xe({window:i}).value?"dark":"light");return S({get(){return r.value==="dark"},set(o){const c=o?"dark":"light";l.value===c?r.value="auto":r.value=c}})}const tt={name:"EmployeeIcon"},nt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"};function at(e,t,a,i,r,l){return p(),g("svg",nt,t[0]||(t[0]=[s("path",{"fill-rule":"evenodd",d:"M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z","clip-rule":"evenodd"},null,-1),s("path",{d:"M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"},null,-1)]))}const rt=A(tt,[["render",at]]),st={name:"OrganizationIcon"},ot={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"};function it(e,t,a,i,r,l){return p(),g("svg",ot,t[0]||(t[0]=[s("path",{"fill-rule":"evenodd",d:"M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z","clip-rule":"evenodd"},null,-1)]))}const lt=A(st,[["render",it]]),ut={name:"MessageIcon"},dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"};function ct(e,t,a,i,r,l){return p(),g("svg",dt,t[0]||(t[0]=[s("path",{"fill-rule":"evenodd",d:"M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z","clip-rule":"evenodd"},null,-1)]))}const oe=A(ut,[["render",ct]]),ft={name:"CalendarIcon"},pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"};function gt(e,t,a,i,r,l){return p(),g("svg",pt,t[0]||(t[0]=[s("path",{d:"M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"},null,-1),s("path",{fillRule:"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",clipRule:"evenodd"},null,-1)]))}const ie=A(ft,[["render",gt]]),mt={name:"TableIcon"},ht={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",class:"w-6 h-6"};function vt(e,t,a,i,r,l){return p(),g("svg",ht,t[0]||(t[0]=[s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"},null,-1)]))}const le=A(mt,[["render",vt]]),yt={name:"MoneyIcon"},wt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"};function xt(e,t,a,i,r,l){return p(),g("svg",wt,t[0]||(t[0]=[s("path",{"fill-rule":"evenodd",d:"M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z","clip-rule":"evenodd"},null,-1)]))}const ue=A(yt,[["render",xt]]),bt={name:"RocketIcon"},kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"};function _t(e,t,a,i,r,l){return p(),g("svg",kt,t[0]||(t[0]=[s("path",{"fill-rule":"evenodd",d:"M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z","clip-rule":"evenodd"},null,-1),s("path",{"fill-rule":"evenodd",d:"M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"},null,-1)]))}const de=A(bt,[["render",_t]]),$t={name:"UserIcon"},Mt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"fill-current",class:"w-5 h-5"};function zt(e,t,a,i,r,l){return p(),g("svg",Mt,t[0]||(t[0]=[s("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"},null,-1)]))}const Ct=A($t,[["render",zt]]);const St={class:"h-full px-3 py-4 overflow-y-auto border-r flex flex-col justify-between dark:bg-gray-800 dark:border-gray-800"},At={key:0,class:"space-y-2 font-medium mb-4"},Lt={class:"flex flex-row items-center"},Bt={class:"px-2"},Vt={key:1,class:"space-y-2 font-medium mb-4"},Et={class:"flex flex-row items-center"},Ot={class:"px-2"},Dt={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},Ht={class:"border-b border-gray-300 dark:border-gray-600"},Nt={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},jt={class:"flex justify-between h-16"},Rt={class:"flex"},qt={class:"block my-auto space-x-8 rtl:space-x-reverse sm:-my-px sm:flex"},It={class:"hidden sm:flex sm:items-center sm:ml-6"},Tt={class:"ml-3 relative !flex"},Ft={class:"inline-flex rounded-md"},Pt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Wt={class:"ml-3 relative"},Jt={class:"inline-flex rounded-md"},Gt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Ut={class:"-mr-2 flex items-center sm:hidden"},Kt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Qt={class:"inline-flex rounded-md"},Xt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Yt={class:"pt-2 pb-3 space-y-1"},Zt={class:"pt-4 pb-1 border-t border-gray-200"},en={class:"px-4"},tn={class:"font-medium text-base text-gray-800"},nn={class:"font-medium text-sm text-gray-500"},an={class:"mt-3 space-y-1"},rn={class:"mx-4 md:mx-0"},vn={__name:"AuthenticatedLayout",setup(e){const t=R(!1),a=et(),i=Pe(a),r={en:["English","us"],ar:["العربية","arab"]};function l(n){Be.visit(route("language",{language:n}),{onSuccess:()=>{window.history.go(0)}})}return(n,o)=>(p(),g(X,null,[s("aside",{id:"separator-sidebar",class:h(["fixed top-0 z-40 w-64 h-screen transition-transform ltr:-translate-x-full ltr:sm:translate-x-0 rtl:translate-x-full rtl:sm:-translate-x-0",n.$page.props.locale=="ar"?"right-0":"left-0"]),"aria-label":"Sidebar"},[s("div",St,[n.$page.props.auth.user.roles.includes("admin")?(p(),g("ul",At,[s("div",Lt,[o[2]||(o[2]=s("div",{class:"bg-purple-500 h-px flex-grow"},null,-1)),s("div",Bt,b(n.__("Admin Tools")),1),o[3]||(o[3]=s("div",{class:"bg-purple-500 h-px flex-grow"},null,-1))]),u(k,{"item-name":n.__("My Dashboard"),hasBadge:!1,link:"dashboard.index","active-links":["dashboard.index"]},{default:d(()=>[u(de,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("Employees"),hasBadge:!0,badge:"number","badge-content":n.$page.props.ui.empCount.toString()??"?",link:"employees.index","active-links":["employees.index","employees.create","employees.show","employees.find","employees.edit","employees.archived"]},{default:d(()=>[u(rt,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","badge-content"]),u(k,{"item-name":n.__("Organization"),"active-links-recursive":["branches","departments","positions","shifts","globals","metrics","logs"],"badge-content":"0",link:"branches.index"},{default:d(()=>[u(lt,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("Requests"),hasBadge:n.$page.props.ui.reqCount.toString()!=="0",badge:"number","badge-content":n.$page.props.ui.reqCount.toString()??"?",link:"requests.index","active-links":["requests.index","requests.create","requests.show","requests.edit"]},{default:d(()=>[u(oe,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","hasBadge","badge-content"]),u(k,{"item-name":n.__("Calendar"),link:"calendar.index",activeLinks:["calendar.index","calendars.index","calendars.create","calendars.show","calendars.edit"]},{default:d(()=>[u(ie,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("Attendance"),link:"attendances.index",activeLinks:["attendance.dashboard","attendance.show","attendances.index","attendances.create"]},{default:d(()=>[u(le,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("Payrolls"),link:"payrolls.index",activeLinks:["payrolls.index","payrolls.show","payrolls.edit"]},{default:d(()=>[u(ue,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"])])):(p(),g("ul",Vt,[s("div",Et,[o[4]||(o[4]=s("div",{class:"bg-purple-500 h-px flex-grow"},null,-1)),s("div",Ot,b(n.__("My Services")),1),o[5]||(o[5]=s("div",{class:"bg-purple-500 h-px flex-grow"},null,-1))]),u(k,{"item-name":n.__("My Dashboard"),hasBadge:!1,link:"dashboard.index","active-links":["dashboard.index"]},{default:d(()=>[u(de,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("My Profile"),hasBadge:!1,link:"my-profile","active-links":["my-profile"]},{default:d(()=>[u(Ct,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("My Requests"),hasBadge:n.$page.props.ui.reqCount.toString()!=="0",badge:"number","badge-content":n.$page.props.ui.reqCount.toString()??"?",link:"requests.index","active-links":["requests.index","requests.show","requests.create"]},{default:d(()=>[u(oe,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","hasBadge","badge-content"]),u(k,{"item-name":n.__("My Payrolls"),link:"payrolls.index","active-links":["payrolls.index","payrolls.show"]},{default:d(()=>[u(ue,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("My Calendar"),link:"calendar.index","active-links":["calendar.index"]},{default:d(()=>[u(ie,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),u(k,{"item-name":n.__("My Attendance"),link:"attendance.dashboard","active-links":["attendance.dashboard"]},{default:d(()=>[u(le,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"])]))])],2),s("div",{class:h(n.$page.props.locale==="ar"?"sm:mr-64":"sm:ml-64")},[s("div",null,[s("div",Dt,[s("nav",Ht,[s("div",Nt,[s("div",jt,[s("div",Rt,[s("div",qt,[j(n.$slots,"tabs")])]),s("div",It,[s("button",{onClick:o[0]||(o[0]=c=>N(i)()),type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},[(p(),g("svg",{id:"theme-toggle-dark-icon",class:h(["w-5 h-5",N(a)?"block":"hidden"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},o[6]||(o[6]=[s("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1)]),2)),(p(),g("svg",{id:"theme-toggle-light-icon",class:h(["w-5 h-5",N(a)?"hidden":"block"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},o[7]||(o[7]=[s("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1)]),2))]),s("div",Tt,[u(Y,{align:"right",width:"48"},{trigger:d(()=>[s("span",Ft,[s("button",Pt,[s("span",{class:h("fi fi-"+r[n.$page.props.locale][1]+" mx-2")},null,2),m(" "+b(r[n.$page.props.locale][0]),1)])])]),content:d(()=>[(p(!0),g(X,null,ae(Object.keys(r).filter(c=>c!==n.$page.props.locale),c=>(p(),H(G,{onClick:v=>l(c)},{default:d(()=>[s("span",{class:h("fi fi-"+r[c][1]+" mx-2")},null,2),m(" "+b(r[c][0]),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),s("div",Wt,[u(Y,{align:"right",width:"48"},{trigger:d(()=>[s("span",Jt,[s("button",Gt,[m(b(n.$page.props.auth.user.name)+" ",1),o[8]||(o[8]=s("svg",{class:"mx-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:d(()=>[u(G,{href:n.route("profile.edit")},{default:d(()=>[m(b(n.__("Profile")),1)]),_:1},8,["href"]),u(G,{href:n.route("logout"),method:"post",as:"button"},{default:d(()=>[m(b(n.__("Log Out")),1)]),_:1},8,["href"])]),_:1})])]),s("div",Ut,[s("button",{onClick:o[1]||(o[1]=c=>t.value=!t.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(p(),g("svg",Kt,[s("path",{class:h({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),s("path",{class:h({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),s("div",{class:h([{block:t.value,hidden:!t.value},"sm:hidden"])},[u(Y,{align:"right",width:"48"},{trigger:d(()=>[s("span",Qt,[s("button",Xt,[s("span",{class:h("fi fi-"+r[n.$page.props.locale][1]+" mx-2")},null,2),m(" "+b(r[n.$page.props.locale][0]),1)])])]),content:d(()=>[(p(!0),g(X,null,ae(Object.keys(r).filter(c=>c!==n.$page.props.locale),c=>(p(),H(G,{onClick:v=>l(c)},{default:d(()=>[s("span",{class:h("fi fi-"+r[c][1]+" mx-2")},null,2),m(" "+b(r[c][0]),1)]),_:2},1032,["onClick"]))),256))]),_:1}),s("div",Yt,[u(B,{href:n.route("dashboard.index"),active:n.route().current("dashboard.index")},{default:d(()=>o[9]||(o[9]=[m(" Dashboard ")])),_:1},8,["href","active"]),u(B,{href:n.route("employees.index")},{default:d(()=>o[10]||(o[10]=[m("Employees")])),_:1},8,["href"]),u(B,{href:n.route("branches.index")},{default:d(()=>o[11]||(o[11]=[m("Organization")])),_:1},8,["href"]),u(B,{href:n.route("requests.index")},{default:d(()=>o[12]||(o[12]=[m("Requests")])),_:1},8,["href"]),u(B,{href:n.route("calendar.index")},{default:d(()=>o[13]||(o[13]=[m("Calendar")])),_:1},8,["href"]),u(B,{href:n.route("attendances.index")},{default:d(()=>o[14]||(o[14]=[m("Attendance")])),_:1},8,["href"]),u(B,{href:n.route("payrolls.index")},{default:d(()=>o[15]||(o[15]=[m("Payrolls")])),_:1},8,["href"])]),s("div",Zt,[s("div",en,[s("div",tn,b(n.$page.props.auth.user.name),1),s("div",nn,b(n.$page.props.auth.user.email),1)]),s("div",an,[u(B,{href:n.route("profile.edit")},{default:d(()=>o[16]||(o[16]=[m(" Profile")])),_:1},8,["href"]),u(B,{href:n.route("logout"),method:"post",as:"button"},{default:d(()=>o[17]||(o[17]=[m(" Log Out ")])),_:1},8,["href"])])])],2)]),s("main",rn,[j(n.$slots,"default")])])])],2)],64))}},sn={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,a=S(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-purple-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out dark:text-white":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-purple-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out dark:text-gray-200");return(i,r)=>(p(),H(N(Q),{href:e.href,class:h(a.value)},{default:d(()=>[j(i.$slots,"default")]),_:3},8,["href","class"]))}},on={name:"LeftChevron"},ln={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"};function un(e,t,a,i,r,l){return p(),g("svg",ln,t[0]||(t[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1)]))}const dn=A(on,[["render",un]]),cn={name:"RightChevron"},fn={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"};function pn(e,t,a,i,r,l){return p(),g("svg",fn,t[0]||(t[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1)]))}const gn=A(cn,[["render",pn]]),yn={__name:"GoBackNavLink",setup(e){function t(){window.history.back()}const a=document.dir==="ltr";return(i,r)=>(p(),H(sn,{href:"#",onClick:t,class:"border-b-0","Preserve-Scroll":""},{default:d(()=>[a?(p(),H(dn,{key:0,class:"mr-2"})):(p(),H(gn,{key:1,class:"ml-2"})),m(" "+b(i.__("Go Back")),1)]),_:1}))}};export{ie as C,ue as M,le as T,vn as _,yn as a,sn as b,oe as c};