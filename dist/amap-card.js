var version = "0.1.2";

/******************************************************************************
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
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$3=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$1),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$1)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:r$4,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=false),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$4(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),true===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t) true!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=false,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$3=document,l=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$3.createTreeWalker(r$3,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.2.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r$2 = class r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(s,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}};r$2._$litElement$=true,r$2["finalized"]=true,globalThis.litElementHydrateSupport?.({LitElement:r$2});const i=globalThis.litElementPolyfillSupport;i?.({LitElement:r$2});(globalThis.litElementVersions??=[]).push("4.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:true}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

const AMAP_THEMES = [
    "normal", // 标准
    "dark", // 幻影黑
    "light", // 月光银
    "whitesmoke", // 远山黛
    "fresh", // 草色青
    "grey", // 雅士灰
    "graffiti", // 涂鸦
    "macaron", // 马卡龙
    "blue", // 靛青蓝
    "darkblue", // 极夜蓝
    "wine", // 酱籽
];
const AMAP_CONTROLS = [
    "ToolBar", // 缩放控件
    "Scale", // 比例尺控件
    "ControlBar", // 控制罗盘控件
    "Geolocation", // 定位控件
    "HawkEye", // 鹰眼控件
    "MapType", // 图层切换控件
];
const AMAP_CONTROLS_POSE = {
    ToolBar: {
        position: {
            right: "16px",
            bottom: "50px",
        },
    },
    Scale: null,
    ControlBar: null,
    Geolocation: null,
    HawkEye: null,
    MapType: null,
};

var card$1 = {
	not_found: "Entity not found",
	config_not_found: "Configuration not found",
	Key_not_found: "No key or security key is configured for AMap"
};
var editor$1 = {
	title: "Title",
	api: {
		title: "API Deployment",
		key: "Key",
		security: "Security Key"
	},
	appearance: {
		title: "Appearance",
		theme: {
			mode: {
				light: "Daytime Theme",
				dark: "Dark Theme"
			},
			options: {
				normal: "Normal",
				dark: "Dark",
				light: "Light",
				whitesmoke: "Whitesmoke",
				fresh: "Fresh",
				grey: "Grey",
				graffiti: "Graffiti",
				macaron: "Macaron",
				blue: "Blue",
				darkblue: "Darkblue",
				wine: "Wine"
			}
		},
		viewMode: "View Mode",
		pitch: "Map Pitch Angle (3D)",
		zoom: "Zoom",
		control: {
			title: "Control",
			ToolBar: "Zoom Control",
			Scale: "Scale Control",
			ControlBar: "Compass Control",
			Geolocation: "Location Control",
			HawkEye: "Overview Control",
			MapType: "Map Type Control"
		}
	},
	entity: "Entity"
};
var en = {
	card: card$1,
	editor: editor$1
};

var en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$1,
  default: en,
  editor: editor$1
});

var card = {
	not_found: "未找到实体",
	config_not_found: "未找到配置",
	Key_not_found: "未配置高德地图的 Key 或安全密钥"
};
var editor = {
	title: "标题",
	api: {
		title: "API 配置",
		key: "Key",
		security: "安全密钥"
	},
	appearance: {
		title: "外观",
		theme: {
			mode: {
				light: "白天主题",
				dark: "暗色主题"
			},
			options: {
				normal: "标准",
				dark: "幻影黑",
				light: "月光银",
				whitesmoke: "远山黛",
				fresh: "草色青",
				grey: "雅士灰",
				graffiti: "涂鸦",
				macaron: "马卡龙",
				blue: "靛青蓝",
				darkblue: "极夜蓝",
				wine: "酱籽"
			}
		},
		viewMode: "视图模式",
		pitch: "地图俯仰角度(3D)",
		zoom: "缩放",
		control: {
			title: "控件",
			ToolBar: "缩放控件",
			Scale: "比例尺控件",
			ControlBar: "控制罗盘控件",
			Geolocation: "定位控件",
			HawkEye: "鹰眼控件",
			MapType: "图层切换控件"
		}
	},
	entity: "实体"
};
var zhHans = {
	card: card,
	editor: editor
};

var zh_Hans = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card,
  default: zhHans,
  editor: editor
});

const languages = {
    en: en$1,
    "zh-Hans": zh_Hans,
};
const DEFAULT_LANG = "en";
function getTranslatedString(key, lang) {
    try {
        return key
            .split(".")
            .reduce((o, i) => o[i], languages[lang]);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (_) {
        return undefined;
    }
}
function setupCustomLocalize(hass) {
    return function (key) {
        const lang = hass?.locale.language ?? DEFAULT_LANG;
        let translated = getTranslatedString(key, lang);
        if (!translated)
            translated = getTranslatedString(key, DEFAULT_LANG);
        return translated ?? key;
    };
}

const defaultConfig = {
    key: "",
    type: "",
    security: "",
    lightTheme: "normal",
    darkTheme: "dark",
    controls: ["ToolBar"],
    viewMode: "2D",
    pitch: 30,
    zoom: 15,
    entities: [],
};
let AMapCardEditor = class AMapCardEditor extends r$2 {
    constructor() {
        super(...arguments);
        this._isInitialized = false;
    }
    setConfig(config) {
        if (!this._isInitialized) {
            // 初始化默认值
            this._config = { ...defaultConfig, ...config };
            this._isInitialized = true;
        }
        else {
            this._config = config;
        }
    }
    render() {
        if (!this.hass || !this._config)
            return x ``;
        const customLocalize = setupCustomLocalize(this.hass);
        const schema = [
            {
                name: "key",
                selector: { text: { type: "password" } },
                required: true,
                label: customLocalize("editor.api.key"),
            },
            {
                name: "security",
                selector: { text: { type: "password" } },
                required: true,
                label: customLocalize("editor.api.security"),
            },
            {
                name: "lightTheme",
                type: "select",
                options: AMAP_THEMES.map((item) => [
                    item,
                    customLocalize("editor.appearance.theme.options." + item),
                ]),
                label: customLocalize("editor.appearance.theme.mode.light"),
            },
            {
                name: "darkTheme",
                type: "select",
                options: AMAP_THEMES.map((item) => [
                    item,
                    customLocalize("editor.appearance.theme.options." + item),
                ]),
                label: customLocalize("editor.appearance.theme.mode.dark"),
            },
            {
                name: "controls",
                type: "multi_select",
                options: AMAP_CONTROLS.reduce((acc, item) => {
                    acc[item] = customLocalize("editor.appearance.control." + item);
                    return acc;
                }, {}),
                label: customLocalize("editor.appearance.control.title"),
            },
            {
                name: "viewMode",
                selector: { select: { options: ["2D", "3D"] } },
                label: customLocalize("editor.appearance.viewMode"),
            },
            {
                name: "pitch",
                selector: {
                    number: { min: 0, max: 83, step: 1, mode: "slider" },
                },
                label: customLocalize("editor.appearance.pitch"),
            },
            // {
            //   name: "zoom",
            //   selector: {
            //     number: { min: 3, max: 20, step: 1, mode: "slider" },
            //   },
            //   label: customLocalize("editor.appearance.zoom"),
            // },
            {
                name: "entities",
                selector: { entity: { multiple: true, domain: ["zone", "device_tracker", "person"] } },
                label: customLocalize("editor.entity"),
            },
        ];
        return x `
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .schema=${schema}
          .data=${this._config}
          .computeLabel=${(schema) => schema.label}
          @value-changed=${this._handleValueChanged}
        ></ha-form>
      </div>
    `;
    }
    _handleValueChanged(ev) {
        this._config = ev.detail.value;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
};
__decorate([
    n({ attribute: false })
], AMapCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], AMapCardEditor.prototype, "_config", void 0);
AMapCardEditor = __decorate([
    t("amap-card-editor")
], AMapCardEditor);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist$1 = {exports: {}};

var dist = dist$1.exports;

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist$1.exports;
	hasRequiredDist = 1;
	(function (module, exports) {
(function(m,p){module.exports=p();})(dist,function(){function m(a){var b=[];a.AMapUI&&b.push(p(a.AMapUI));a.Loca&&b.push(r(a.Loca));return Promise.all(b)}function p(a){return new Promise(function(h,c){var f=[];if(a.plugins)for(var e=0;e<a.plugins.length;e+=1) -1==d.AMapUI.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(g.AMapUI===b.failed)c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");
		else if(g.AMapUI===b.notload){g.AMapUI=b.loading;d.AMapUI.version=a.version||d.AMapUI.version;e=d.AMapUI.version;var l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/ui/"+e+"/main.js";k.onerror=function(a){g.AMapUI=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25");};k.onload=function(){g.AMapUI=b.loaded;if(f.length)window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=
		arguments[a];}for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]();});else for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]();};l.appendChild(k);}else g.AMapUI===b.loaded?a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a];}h();}):h():a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):
		n.AMapUI.push(function(a){a?c(a):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a];}h();}):h();});})}function r(a){return new Promise(function(h,c){if(g.Loca===b.failed)c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if(g.Loca===b.notload){g.Loca=b.loading;d.Loca.version=a.version||d.Loca.version;var f=d.Loca.version,e=d.AMap.version.startsWith("2"),l=f.startsWith("2");if(e&&!l||!e&&l)c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");
		else {e=d.key;l=document.body||document.head;var k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/loca?v="+f+"&key="+e;k.onerror=function(a){g.Loca=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25");};k.onload=function(){g.Loca=b.loaded;for(h();n.Loca.length;)n.Loca.splice(0,1)[0]();};l.appendChild(k);}}else g.Loca===b.loaded?a.version&&a.version!==d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):h():a.version&&a.version!==d.Loca.version?
		c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):n.Loca.push(function(a){a?c(a):c();});})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var b;(function(a){a.notload="notload";a.loading="loading";a.loaded="loaded";a.failed="failed";})(b||(b={}));var d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},g={AMap:b.notload,AMapUI:b.notload,Loca:b.notload},n={AMapUI:[],Loca:[]},q=[],t=function(a){"function"==typeof a&&
		(g.AMap===b.loaded?a(window.AMap):q.push(a));};return {load:function(a){return new Promise(function(h,c){if(g.AMap==b.failed)c("");else if(g.AMap==b.notload){var f=a.key,e=a.version,l=a.plugins;f?(window.AMap&&"lbs.amap.com"!==location.host&&c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"),d.key=f,d.AMap.version=e||d.AMap.version,d.AMap.plugins=l||d.AMap.plugins,g.AMap=b.loading,e=document.body||document.head,window.___onAPILoaded=function(d){delete window.___onAPILoaded;if(d)g.AMap=
		b.failed,c(d);else for(g.AMap=b.loaded,m(a).then(function(){h(window.AMap);})["catch"](c);q.length;)q.splice(0,1)[0]();},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+d.AMap.version+"&key="+f+"&plugin="+d.AMap.plugins.join(","),l.onerror=function(a){g.AMap=b.failed;c(a);},e.appendChild(l)):c("\u8bf7\u586b\u5199key");}else if(g.AMap==b.loaded)if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&
		a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {f=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1) -1==d.AMap.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(f.length)window.AMap.plugin(f,function(){m(a).then(function(){h(window.AMap);})["catch"](c);});else m(a).then(function(){h(window.AMap);})["catch"](c);}else if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");
		else {var k=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1) -1==d.AMap.plugins.indexOf(a.plugins[e])&&k.push(a.plugins[e]);t(function(){if(k.length)window.AMap.plugin(k,function(){m(a).then(function(){h(window.AMap);})["catch"](c);});else m(a).then(function(){h(window.AMap);})["catch"](c);});}})},reset:function(){delete window.AMap;delete window.AMapUI;delete window.Loca;d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}};g={AMap:b.notload,AMapUI:b.notload,
		Loca:b.notload};n={AMap:[],AMapUI:[],Loca:[]};}}}); 
	} (dist$1));
	return dist$1.exports;
}

var distExports = requireDist();
var AMapLoader = /*@__PURE__*/getDefaultExportFromCjs(distExports);

var coordtransform$1 = {exports: {}};

/**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 */
var coordtransform = coordtransform$1.exports;

var hasRequiredCoordtransform;

function requireCoordtransform () {
	if (hasRequiredCoordtransform) return coordtransform$1.exports;
	hasRequiredCoordtransform = 1;
	(function (module) {
		//UMD魔法代码
		// if the module has no dependencies, the above pattern can be simplified to
		(function (root, factory) {
		  if (module.exports) {
		    // Node. Does not work with strict CommonJS, but
		    // only CommonJS-like environments that support module.exports,
		    // like Node.
		    module.exports = factory();
		  } else {
		    // Browser globals (root is window)
		    root.coordtransform = factory();
		  }
		}(coordtransform, function () {
		  //定义一些常量
		  var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
		  var PI = 3.1415926535897932384626;
		  var a = 6378245.0;
		  var ee = 0.00669342162296594323;
		  /**
		   * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
		   * 即 百度 转 谷歌、高德
		   * @param bd_lon
		   * @param bd_lat
		   * @returns {*[]}
		   */
		  var bd09togcj02 = function bd09togcj02(bd_lon, bd_lat) {
		    var bd_lon = +bd_lon;
		    var bd_lat = +bd_lat;
		    var x = bd_lon - 0.0065;
		    var y = bd_lat - 0.006;
		    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
		    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
		    var gg_lng = z * Math.cos(theta);
		    var gg_lat = z * Math.sin(theta);
		    return [gg_lng, gg_lat]
		  };

		  /**
		   * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
		   * 即谷歌、高德 转 百度
		   * @param lng
		   * @param lat
		   * @returns {*[]}
		   */
		  var gcj02tobd09 = function gcj02tobd09(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
		    var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
		    var bd_lng = z * Math.cos(theta) + 0.0065;
		    var bd_lat = z * Math.sin(theta) + 0.006;
		    return [bd_lng, bd_lat]
		  };

		  /**
		   * WGS84转GCj02
		   * @param lng
		   * @param lat
		   * @returns {*[]}
		   */
		  var wgs84togcj02 = function wgs84togcj02(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    if (out_of_china(lng, lat)) {
		      return [lng, lat]
		    } else {
		      var dlat = transformlat(lng - 105.0, lat - 35.0);
		      var dlng = transformlng(lng - 105.0, lat - 35.0);
		      var radlat = lat / 180.0 * PI;
		      var magic = Math.sin(radlat);
		      magic = 1 - ee * magic * magic;
		      var sqrtmagic = Math.sqrt(magic);
		      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
		      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
		      var mglat = lat + dlat;
		      var mglng = lng + dlng;
		      return [mglng, mglat]
		    }
		  };

		  /**
		   * GCJ02 转换为 WGS84
		   * @param lng
		   * @param lat
		   * @returns {*[]}
		   */
		  var gcj02towgs84 = function gcj02towgs84(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    if (out_of_china(lng, lat)) {
		      return [lng, lat]
		    } else {
		      var dlat = transformlat(lng - 105.0, lat - 35.0);
		      var dlng = transformlng(lng - 105.0, lat - 35.0);
		      var radlat = lat / 180.0 * PI;
		      var magic = Math.sin(radlat);
		      magic = 1 - ee * magic * magic;
		      var sqrtmagic = Math.sqrt(magic);
		      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
		      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
		      var mglat = lat + dlat;
		      var mglng = lng + dlng;
		      return [lng * 2 - mglng, lat * 2 - mglat]
		    }
		  };

		  var transformlat = function transformlat(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    var ret = -100 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
		    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
		    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
		    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
		    return ret
		  };

		  var transformlng = function transformlng(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
		    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
		    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
		    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
		    return ret
		  };

		  /**
		   * 判断是否在国内，不在国内则不做偏移
		   * @param lng
		   * @param lat
		   * @returns {boolean}
		   */
		  var out_of_china = function out_of_china(lng, lat) {
		    var lat = +lat;
		    var lng = +lng;
		    // 纬度3.86~53.55,经度73.66~135.05 
		    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
		  };

		  return {
		    bd09togcj02: bd09togcj02,
		    gcj02tobd09: gcj02tobd09,
		    wgs84togcj02: wgs84togcj02,
		    gcj02towgs84: gcj02towgs84
		  }
		})); 
	} (coordtransform$1));
	return coordtransform$1.exports;
}

var coordtransformExports = requireCoordtransform();

function getMapStyle(theme) {
    return "amap://styles/" + theme;
}
function getMapControls(controls) {
    return controls.map((control) => "AMap." + control);
}

function amapCardStyle() {
    return i$3 `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 120px;
      min-height: 120px;
    }

    .amap-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    #amap {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      min-height: 120px;
    }

    .amap-custom {
      top: 0;
      left: 0;
      position: absolute;
    }

    #amap img {
      max-width: none !important;
      max-height: none !important;
    }

    #amap {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KD0UqkwAAAf1JREFUeAHtmtGpAkEQBE9TMAi/zMb8MzCGU/97Ye8QunDrfQ7qNFUMS8Pbtom/fd8fEx/b/FymdIDL85p/wmmLgEJa5Ad7FTIA0xorpEV+sFchAzCtsUJa5Ad7FTIA0xorpEV+sPcyW1oG33f8WwL3qZ+blebnMs4DXGzqGWFv6hvSYx83KyRi6Q0V0mMfNyskYukNFdJjHzcrJGLpDRXSYx8329QjltrQpp7QH2jWv/5fA5t6EtKc+YY06YfdCglQmiOFNOmH3QoJUJojhTTph90KCVCaI4U06YfdNvUApTiyqSf4NvVEZdGZbwhMvEIUAiMAi+OFKARGABbHC1EIjAAsjk2dJcSmnnzY1BOVRWc+6jDxClEIjAAsjheiEBgBWBwvRCEwArA4/9LUbx+uLxjbM3Fs6omaTT1RWXTmow4TrxCFwAjA4nghCoERgMXxQhQCIwCL8y9NHYb1dBybekJnU09UFp35qMPEK0QhMAKwOF6IQmAEYHG8EIXACMDi2NRZQmzqyYdNPVFZdOajDhOvEIXACMDieCEKgRGAxfFCFAIjAItjU2cJsaknHzb1RGXRmY86TLxCFAIjAIvjhSgERgAWxwtRCIwALI5NnSXEpp582NQTlUVnPuow8QpRCIwALI4XohAYAVgcL0QhMAKwON+m/oRlWjrOG2SeYNIaKe7fAAAAAElFTkSuQmCC);
      //background-color: #f1f1f1;
      touch-action: none;
      position: relative;
      overflow: hidden;
      -ms-touch-action: none;
    }

    .amap-drags,
    .amap-layers {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      transform: translateZ(0);
    }

    .amap-layers canvas {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .amap-layers .amap-layer-tile {
      transform: translateZ(0);
    }

    .amap-layers .amap-layer-tile,
    .amap-layers .amap-layer-tile img {
      position: absolute;
      top: 0;
      left: 0;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-layers .amap-layer-image {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(0);
    }

    .amap-layers .amap-layer-image img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .amap-layer img {
      pointer-events: none;
      display: block;
    }

    .amap-layers .amap-layer-overlay {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(0);
    }

    .amap-e,
    .amap-maps {
      width: 100%;
      height: 100%;
      outline: none;
    }

    .amap-maps {
      z-index: 0;
    }

    .amap-e,
    .amap-layers,
    .amap-maps,
    .amap-tile-container {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
    }

    .amap-context,
    .amap-marker,
    .amap-markers,
    .amap-overlays {
      position: absolute;
      left: 0;
      top: 0;
    }

    .amap-layers {
      z-index: 0;
    }

    .amap-overlays {
      z-index: 110;
      cursor: default;
    }

    .amap-markers {
      z-index: 120;
    }

    .amap-controls {
      z-index: 150;
    }

    .amap-copyright {
      display: block !important;
      left: 85px;
      height: 16px;
      bottom: 1.8px;
      line-height: 1.5;
      padding-bottom: 2px;
      font-size: 11px;
      font-family: Arial, sans-serif;
    }

    .amap-copyright,
    .amap-logo {
      position: absolute;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-logo {
      bottom: 1.5px;
      left: 4px;
      height: 20px;
    }

    .amap-logo img {
      width: 73px !important;
      height: 20px !important;
      border: none;
      vertical-align: baseline !important;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-icon {
      position: relative;
      z-index: 1;
    }

    .amap-icon img {
      position: absolute;
      z-index: -1;
    }

    .amap-marker-label {
      position: absolute;
      z-index: 2;
      border: 1px solid #00f;
      background-color: #fff;
      white-space: nowrap;
      cursor: default;
      padding: 3px;
      font-size: 12px;
      line-height: 14px;
    }

    .amap-info {
      left: 0;
      width: fit-content;
      width: -webkit-fit-content;
      width: -moz-max-content;
    }

    .amap-info,
    .amap-menu {
      position: absolute;
      z-index: 140;
    }

    .amap-info-close {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #c3c3c3;
      text-decoration: none;
      font:
        700 16px/14px Tahoma,
        Verdana,
        sans-serif;
      width: 14px;
      height: 14px;
      cursor: pointer;
    }

    .amap-info-outer,
    .amap-menu-outer {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      background: none repeat scroll 0 0 #fff;
      border-radius: 2px;
      padding: 1px;
      text-align: left;
    }

    .amap-info-contentContainer:hover .amap-info-outer,
    .amap-menu-outer:hover {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .amap-info-content {
      position: relative;
      background: #fff;
      padding: 10px 18px 10px 10px;
      line-height: 1.4;
      overflow: auto;
    }

    .amap-marker-content {
      position: relative;
    }

    .amap-info-sharp-old {
      overflow: hidden;
      position: absolute;
      background-image: url(https://webapi.amap.com/images/arrows.png);
    }

    .bottom-center .amap-info-sharp-old {
      height: 12px;
      width: 20px;
      background-position: center 12px;
      top: 100%;
      left: 50%;
      margin: -9px auto 0 -10px;
    }

    .bottom-left .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -16px -46px;
      top: 100%;
      margin-top: -9px;
    }

    .bottom-right .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      top: -1px;
      background-position: -56px -46px;
      left: 100%;
      margin-left: -13px;
      top: 100%;
      margin-top: -9px;
    }

    .middle-left .amap-info-sharp-old {
      height: 20px;
      width: 12px;
      background-position: 0;
      top: 50%;
      margin-top: -10px;
      margin-left: -11px;
    }

    .center .amap-info-sharp-old {
      display: none;
    }

    .middle-right .amap-info-sharp-old {
      height: 20px;
      margin-right: 0;
      width: 12px;
      background-position: 100%;
      left: 100%;
      margin-left: -9px;
      top: 50%;
      margin-top: -10px;
    }

    .top-center .amap-info-sharp-old {
      height: 12px;
      width: 20px;
      background-position: top;
      top: 0;
      left: 50%;
      margin: -3px auto 0 -10px;
    }

    .top-left .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -16px -3px;
      top: 0;
      margin-top: -3px;
    }

    .top-right .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -56px -3px;
      left: 100%;
      margin-left: -13px;
      top: 0;
      margin-top: -3px;
    }

    .amap-info-sharp {
      position: absolute;
    }

    .bottom-center .amap-info-sharp {
      bottom: 0;
      left: 50%;
      border-top: 8px solid #fff;
    }

    .bottom-center .amap-info-sharp,
    .bottom-center .amap-info-sharp:after {
      margin-left: -8px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    .bottom-center .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: -7px;
      border-top: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(2px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after {
      border-top: 8px solid rgba(0, 0, 0, 0.5);
    }

    .bottom-left .amap-info-sharp {
      border-color: transparent #fff;
      border-style: solid;
      border-width: 0 0 10px 10px;
    }

    .bottom-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: -10px;
      border-color: transparent rgba(0, 0, 0, 0.3);
      border-style: solid;
      border-width: 0 0 10px 10px;
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after {
      border-color: transparent rgba(0, 0, 0, 0.5);
    }

    .bottom-left .amap-info-content {
      border-radius: 2px 2px 2px 0;
    }

    .bottom-right .amap-info-sharp {
      right: 0;
      border-top: 10px solid #fff;
      border-left: 10px solid transparent;
    }

    .bottom-right .amap-info-sharp:after {
      position: absolute;
      margin-top: -9px;
      margin-left: -10px;
      content: "";
      border-top: 10px solid rgba(0, 0, 0, 0.3);
      border-left: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after {
      border-top: 10px solid rgba(0, 0, 0, 0.5);
    }

    .bottom-right .amap-info-content {
      border-radius: 2px 2px 0 2px;
    }

    .top-center .amap-info-sharp {
      top: 0;
      left: 50%;
      border-bottom: 8px solid #fff;
    }

    .top-center .amap-info-sharp,
    .top-center .amap-info-sharp:after {
      margin-left: -8px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    .top-center .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      border-bottom: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .top-left .amap-info-sharp {
      left: 0;
      top: 0;
      border-bottom: 10px solid #fff;
      border-right: 10px solid transparent;
    }

    .top-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      margin-left: 0;
      border-bottom: 10px solid rgba(0, 0, 0, 0.3);
      border-right: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .top-right .amap-info-sharp {
      right: 0;
      top: 0;
      border-bottom: 10px solid #fff;
      border-left: 10px solid transparent;
    }

    .top-right .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      margin-left: -10px;
      border-bottom: 10px solid rgba(0, 0, 0, 0.3);
      border-left: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .middle-right .amap-info-sharp {
      right: 0;
      top: 50%;
      border-left: 8px solid #fff;
    }

    .middle-right .amap-info-sharp,
    .middle-right .amap-info-sharp:after {
      margin-top: -8px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    .middle-right .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: -8px;
      border-left: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.middle-right .amap-info-sharp:after {
      border-left: 8px solid rgba(0, 0, 0, 0.5);
    }

    .middle-left .amap-info-sharp {
      left: 0;
      top: 50%;
      border-right: 8px solid #fff;
    }

    .middle-left .amap-info-sharp,
    .middle-left .amap-info-sharp:after {
      margin-top: -8px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    .middle-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: 0;
      border-right: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.middle-left .amap-info-sharp:after {
      border-right: 8px solid rgba(0, 0, 0, 0.5);
    }

    .amap-info-contentContainer.top-center,
    .amap-info-contentContainer.top-left,
    .amap-info-contentContainer.top-right {
      padding-top: 8px;
    }

    .amap-info-contentContainer.bottom-center,
    .amap-info-contentContainer.bottom-left,
    .amap-info-contentContainer.bottom-right {
      padding-bottom: 8px;
    }

    .amap-info-contentContainer.middle-right {
      padding-right: 8px;
    }

    .amap-info-contentContainer.middle-left {
      padding-left: 8px;
    }

    .amap-menu-outer {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul.amap-menu-outer li {
      height: 35px;
      line-height: 35px;
      word-break: break-all;
      padding: 0 10px;
      font-size: 12px;
      white-space: nowrap;
    }

    ul.amap-menu-outer li a {
      text-decoration: none;
      font-size: 13px;
      margin: 0 5px;
      color: #000;
      padding: 5px;
    }

    ul.amap-menu-outer li:hover {
      background-color: #f3f3ee;
    }

    .amap-overlay-text-container {
      display: block;
      width: auto;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #fff;
      padding: 2px 3px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .amap-overlay-text-container.amap-overlay-text-empty {
      display: none;
    }

    .amap-info-content-ie8 {
      border: 1px solid #9c9c9c;
    }

    .amap-control {
      position: absolute;
      -webkit-tap-highlight-color: transparent;
    }

    .amap-toolbar {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }

    .amap-toolbar span {
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 0 0 4px 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      font-size: 20px;
    }

    .amap-toolbar span:first-child {
      border-bottom: 1px solid #eee;
      border-radius: 4px 4px 0 0;
    }

    .amap-toolbar span:hover {
      font-weight: bolder;
      background-color: #f0f0f0;
    }

    .amap-scalecontrol {
      pointer-events: none;
      background-color: hsla(0, 0%, 100%, 0.5);
      border-radius: 2px;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-text {
      font-size: 10px;
      text-align: center;
      transition: width 0.3s;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-line {
      position: relative;
      height: 8px;
      left: 2px;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-edgeleft,
    .amap-scalecontrol .amap-scale-edgeright,
    .amap-scalecontrol .amap-scale-middle {
      position: absolute;
      background-color: #333;
      overflow: hidden;
      box-sizing: content-box !important;
    }

    .amap-scalecontrol .amap-scale-edgeright {
      width: 1px;
      height: 6px;
      border: 1px solid #fff;
      transition: left 0.3s;
    }

    .amap-scalecontrol .amap-scale-middle {
      height: 2px;
      left: 2px;
      top: 2px;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: width 0.3s;
    }

    .amap-scalecontrol .amap-scale-edgeleft {
      width: 1px;
      height: 6px;
      border: 1px solid #fff;
    }

    .amap-controlbar,
    .amap-controlbar * {
      user-select: none;
    }

    .amap-controlbar .amap-luopan {
      width: 92px;
      height: 92px;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -22px -30px no-repeat;
      background-size: 348px 270px;
      user-select: none;
    }

    .amap-luopan .amap-compass {
      top: 46px;
      left: 50%;
      position: absolute;
      margin: -24px;
      width: 48px;
      height: 48px;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -231px -26px no-repeat;
      background-size: 348px 270px;
    }

    .amap-luopan .amap-compass.amap-compass-black {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) no-repeat -231px -79px;
      background-size: 348px 270px;
    }

    .amap-luopan .amap-compass .amap-pointers {
      position: absolute;
      width: 30px;
      height: 48px;
      top: 0;
      left: 9px;
      border: none;
      z-index: 2;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -281px -26px no-repeat;
      background-size: 348px 270px;
    }

    .amap-pitchDown,
    .amap-pitchUp {
      width: 30px;
      height: 25.5px;
      position: absolute;
      top: 3.5px;
      margin-left: -15px;
      left: 50%;
      z-index: 1;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -302.5px -49px
        no-repeat;
      background-size: 348px 270px;
    }

    .amap-pitchDown:hover,
    .amap-pitchUp:hover {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png)
        no-repeat -302.5px -23.5px;
      background-size: 348px 270px;
    }

    .amap-pitchDown {
      top: 66px;
      transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
    }

    .amap-rotateLeft,
    .amap-rotateRight {
      width: 21px;
      height: 52px;
      top: 19px;
      position: absolute;
      z-index: 2;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -301.5px -77px
        no-repeat;
      background-size: 348px 270px;
    }

    .amap-rotateLeft:hover,
    .amap-rotateRight:hover {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png)
        no-repeat -278.5px -76.5px;
      background-size: 348px 270px;
    }

    .amap-rotateLeft {
      left: 5px;
    }

    .amap-rotateRight {
      right: 5px;
      transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
    }

    .amap-ctrl-icon-layer {
      width: 30px;
      height: 30px;
    }

    .amap-ctrl-icon-layer,
    .amap-ctrl-list-layer {
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    }

    .amap-ctrl-list-layer {
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      z-index: 1;
    }

    .amap-ctrl-list-layer ul {
      overflow: hidden;
      list-style: none;
      margin: 0;
      padding: 5px 8px;
    }

    .amap-ctrl-list-layer ul li {
      float: left;
      width: 100%;
    }

    .amap-ctrl-list-layer ul p {
      white-space: nowrap;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      padding-left: 5px;
      margin: 0 10px;
    }

    .amap-ctrl-list-layer input {
      float: left;
      height: 20px;
      width: 12px;
      margin: 0 5px;
    }

    .amap-ctrl-base-layer {
      border-bottom: 1px solid #eee;
    }

    .amap-ranging-label {
      _width: 10px;
      font-size: 12px;
      line-height: 14px;
      background: #fff;
      border: 1px solid #ccc;
      padding: 3px 7px 3px 2px;
      white-space: nowrap;
    }

    .amap-ranging-label span {
      height: 12px;
      vertical-align: center;
      display: inline-block;
      white-space: nowrap;
      margin-left: 5px;
    }

    .amap-popup {
      text-align: center;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: -165px;
      margin-top: -170px;
    }

    .amap-popup-content {
      vertical-align: middle;
      line-height: 200px;
      overflow: hidden;
      background-color: #fff;
      border: solid;
      border-width: 3px 1px;
      border-radius: 5px;
      border-color: #ddf;
      margin: 0 auto;
      text-align: center;
      height: 340px;
    }

    .amap-labellayers {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: 0 0;
    }

    .amap-indoormap-floorbar-control {
      position: absolute;
      width: 40px;
      text-align: center;
      line-height: 1.3em;
      border-radius: 20px;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      margin-top: -100px;
    }

    .amap-indoormap-floorbar-control .floor-list-box {
      max-height: 160px;
      overflow: scroll;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    .floor-list-box::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }

    .amap-indoormap-floorbar-control ul {
      list-style: none;
      margin: 0;
      padding: 0 4px;
      width: 40px;
      box-sizing: border-box;
    }

    .amap-indoormap-floorbar-control ul li {
      height: 32px;
      width: 32px;
      border-radius: 16px;
    }

    .amap-indoormap-floorbar-control ul li:hover {
      background-color: #efefef;
    }

    .amap-indoormap-floorbar-control ul li div {
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
    }

    .amap-indoormap-floorbar-control ul li.selected {
      color: #fff;
      background-color: #4196ff;
    }

    .amap-indoormap-floorbar-control .floor-minus,
    .amap-indoormap-floorbar-control .floor-plus {
      height: 32px;
      width: 32px;
      margin: 0 auto;
      border-radius: 16px;
      position: relative;
    }

    .amap-indoormap-floorbar-control .floor-minus:after,
    .amap-indoormap-floorbar-control .floor-plus:after {
      content: "";
      position: absolute;
      margin: auto;
      bottom: 4px;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-top-color: #777;
    }

    .amap-indoormap-floorbar-control .floor-plus:after {
      border-bottom-color: #777;
      border-top-color: transparent;
      bottom: 11px;
    }

    .amap-indoormap-floorbar-control .floor-plus:hover:after {
      border-bottom-color: #222;
    }

    .amap-indoormap-floorbar-control .floor-minus:hover:after {
      border-top-color: #222;
    }

    .amap-indoormap-floorbar-control .floor-plus.disabled:after {
      border-bottom-color: #ddd;
    }

    .amap-indoormap-floorbar-control .floor-minus.disabled:after {
      border-top-color: #ddd;
    }

    .amap-indoormap-floorbar-control .floor-list-item.selected:after {
      right: 0;
      left: auto;
      border-left-color: transparent;
      border-right-color: #4196ff;
    }

    .amap-indoormap-floorbar-control .floor-btn.disabled,
    .amap-indoormap-floorbar-control .floor-btn.disabled *,
    .amap-indoormap-floorbar-control.with-indrm-loader * {
      -webkit-pointer-events: none !important;
      pointer-events: none !important;
    }

    .amap-indoormap-floorbar-control .with-indrm-loader .floor-nonas {
      opacity: 0.5;
    }

    .amap-logo {
      display: block !important;
      pointer-events: none;
    }

    .amap-geolocation {
      font-size: 12px;
      font-family:
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      line-height: 1.5;
      font-weight: 300;
      color: #111213;
      box-sizing: border-box;
      position: absolute;
      -webkit-tap-highlight-color: transparent;
      background-color: #fff;
      box-shadow: 0 0 5px silver;
      cursor: pointer;
      background-image: url(https://a.amap.com/jsapi/static/image/plugin/locate.png);
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      bottom: 15px;
      right: 15px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    .amap-hawkeye {
      transition:
        width 0.2s,
        height 0.2s;
    }

    .amap-hawkeye .button {
      position: absolute;
      z-index: 1;
      cursor: pointer;
      border-color: silver;
      border-style: solid none none solid;
      border-width: 1px;
      bottom: 0;
      right: 0;
      background-color: #fff;
      background-image: url(https://a.amap.com/jsapi/static/image/plugin/arrow.png);
      background-size: cover;
    }

    .amap-hawkeye .amap-container {
      z-index: 0;
      width: 100%;
      height: 100%;
      min-width: 1px;
      min-height: 1px;
    }

    .amap-hawkeye .amap-container .amap-copyright,
    .amap-hawkeye .amap-container .amap-logo {
      display: none !important;
    }
  `;
}

// This puts your card into the UI card picker dialog
window.customCards = window.customCards || [];
window.customCards.push({
    type: "amap-card",
    name: "AMap Card",
    description: "高德地图卡片。",
});
let AMapCard = class AMapCard extends r$2 {
    static async getConfigElement() {
        return document.createElement("amap-card-editor");
    }
    static getStubConfig(hass) {
        // Find a power entity for default
        const sampleEntities = Object.keys(hass.states).filter((entityId) => {
            const entity = hass.states[entityId];
            return (entity.state &&
                entity.attributes &&
                entity.attributes.latitude &&
                entity.attributes.longitude);
        });
        // Sample config
        return {
            entities: sampleEntities,
        };
    }
    setConfig(config) {
        this._config = config;
    }
    getCardSize() {
        return 2;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadMap().then();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.map?.destroy();
    }
    firstUpdated() {
        this._loadMap().then();
    }
    render() {
        if (!this.hass) {
            return x ``;
        }
        const customLocalize = setupCustomLocalize(this.hass);
        if (!this._config) {
            return x `<ha-card>
        <ha-alert alert-type="error">${customLocalize("card.config_not_found")}</ha-alert>
      </ha-card>`;
        }
        if (!this._config.key || !this._config.security) {
            return x `<ha-card>
        <ha-alert alert-type="error">${customLocalize("card.Key_not_found")}</ha-alert>
      </ha-card>`;
        }
        return x `<ha-card class="amap-card"><div id="amap" tabindex="0"></div></ha-card>`;
    }
    async _loadMap() {
        if (!this._config.key || !this._config.security) {
            console.warn("No key or security key is configured for AMap");
            return;
        }
        window._AMapSecurityConfig = {
            securityJsCode: this._config.security,
        };
        try {
            const AMap = await AMapLoader.load({
                key: this._config.key,
                version: "2.0",
                plugins: getMapControls(this._config.controls) ?? [],
            });
            this.map = new AMap.Map(this.shadowRoot.getElementById("amap"), {
                pitch: this._config.pitch || 30, //地图俯仰角度，有效范围 0 度- 83 度
                viewMode: this._config.viewMode || "2D",
                zoom: this._config.zoom || 12,
                mapStyle: getMapStyle(this._getTheme()) ?? "amap://styles/normal",
                rotateEnable: true, //是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标左键画圈移动
                pitchEnable: true, //是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标左键上下移动
                center: [116.397428, 39.90923], //地图中心点
            });
            // 添加控件
            if (this._config.controls.length > 0) {
                this._config.controls.forEach((control) => {
                    this.map.addControl(new AMap[control](AMAP_CONTROLS_POSE[control] ?? {}));
                });
            }
            const fitView = [];
            // 添加实体
            this._config.entities.forEach((entityId) => {
                const stateObj = this.hass.states[entityId];
                if (stateObj && stateObj.attributes.latitude && stateObj.attributes.longitude) {
                    // 转换坐标系
                    const [gcjLng, gcjLat] = coordtransformExports.wgs84togcj02(stateObj.attributes.longitude, stateObj.attributes.latitude);
                    if (!gcjLng || !gcjLat)
                        return;
                    const imgHtml = this._generateIconHtml(stateObj);
                    const markerContent = `
            <div
              style="
              width: 40px;
              height: 40px;
              border-radius: 50%;
              overflow: hidden;
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center; 
            "
            >
              ${imgHtml}
            </div>
          `;
                    const marker = new AMap.Marker({
                        position: [gcjLng, gcjLat],
                        title: stateObj.attributes.friendly_name || entityId,
                        // icon: icon,
                        content: markerContent,
                        offset: new AMap.Pixel(-20, -20), //偏移量
                    });
                    // 添加圆形
                    const center = new AMap.LngLat(gcjLng, gcjLat);
                    const radius = stateObj.attributes.radius || stateObj.attributes.gps_accuracy || 10;
                    const color = stateObj.attributes.color || "#1791fc";
                    const circle = new AMap.Circle({
                        center: center, //圆心
                        radius: radius, //半径
                        borderWeight: 0, //描边的宽度
                        strokeColor: color, //轮廓线颜色
                        strokeOpacity: 0.8, //轮廓线透明度
                        strokeWeight: 3, //轮廓线宽度
                        fillOpacity: 0.2, //圆形填充透明度
                        strokeDasharray: [10, 10],
                        fillColor: color, //圆形填充颜色
                        cursor: "pointer", //鼠标悬停时的鼠标样式
                    });
                    circle.on("click", () => {
                        this._handleClick(entityId);
                    });
                    marker.on("click", () => {
                        this._handleClick(entityId);
                    });
                    this.map.add(marker);
                    this.map.add(circle);
                    fitView.push(circle);
                }
            });
            // 根据覆盖物范围调整视野
            this.map.setFitView(fitView);
        }
        catch (e) {
            console.error("Failed to load AMap:", e);
        }
    }
    // https://developers.home-assistant.io/blog/2023/07/07/action-event-custom-cards/
    _handleClick(entityId) {
        const actionConfig = {
            entity: entityId,
            tap_action: {
                action: "more-info",
            },
        };
        const event = new CustomEvent("hass-action", {
            bubbles: true,
            composed: true,
            detail: {
                config: actionConfig,
                action: "tap",
            },
        });
        this.dispatchEvent(event);
    }
    _generateIconHtml(stateObj) {
        let imgHtml = ` <ha-icon icon="mdi:map-marker-radius">icon</ha-icon> `;
        if (stateObj.attributes.entity_picture) {
            imgHtml = `
      <img
        src="${stateObj.attributes.entity_picture}"
        alt=""
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    `;
        }
        else if (stateObj.attributes.icon) {
            const attributes = stateObj.attributes;
            imgHtml = `
      <ha-icon icon="${attributes.icon}" 
        style="
        --icon-primary-color: ${attributes.color}; 
        --mdc-icon-size: ${attributes.size - 10}px;
        "
      >icon</ha-icon>
      `;
        }
        return imgHtml;
    }
    _getTheme() {
        // 判断是否自动，根据系统主题切换
        const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        return isDark ? this._config.darkTheme : this._config.lightTheme;
    }
};
AMapCard.styles = amapCardStyle();
__decorate([
    n({ attribute: false })
], AMapCard.prototype, "hass", void 0);
__decorate([
    n()
], AMapCard.prototype, "_config", void 0);
AMapCard = __decorate([
    t("amap-card")
], AMapCard);

console.info(`%c🌏 AMap Card - ${version}`, "color: #0085fe; font-weight: 700;");
