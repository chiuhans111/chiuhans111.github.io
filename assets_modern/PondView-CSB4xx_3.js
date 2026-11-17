var Vh=Object.defineProperty;var kh=(n,e,t)=>e in n?Vh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Z=(n,e,t)=>kh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},Oi=[],Rn=()=>{},Ku=()=>!1,pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ma=n=>n.startsWith("onUpdate:"),Tt=Object.assign,wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wh=Object.prototype.hasOwnProperty,it=(n,e)=>Wh.call(n,e),Fe=Array.isArray,ui=n=>is(n)==="[object Map]",ta=n=>is(n)==="[object Set]",lc=n=>is(n)==="[object Date]",Ve=n=>typeof n=="function",gt=n=>typeof n=="string",Cn=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",$u=n=>(rt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),ju=Object.prototype.toString,is=n=>ju.call(n),Xh=n=>is(n).slice(8,-1),Zu=n=>is(n)==="[object Object]",Al=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},qh=/-\w/g,_n=ga(n=>n.replace(qh,e=>e.slice(1).toUpperCase())),Yh=/\B([A-Z])/g,vi=ga(n=>n.replace(Yh,"-$1").toLowerCase()),Ju=ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fa=ga(n=>n?`on${Ju(n)}`:""),An=(n,e)=>!Object.is(n,e),Xs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Kh=n=>{const e=gt(n)?Number(n):NaN;return isNaN(e)?n:e};let cc;const _a=()=>cc||(cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?Jh(i):Cl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(n)||rt(n))return n}const $h=/;(?![^(]*\))/g,jh=/:([^]+)/,Zh=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Jh(n){const e={};return n.replace(Zh,t=>t.startsWith("/*")?"":t).split($h).forEach(t=>{if(t){const i=t.split(jh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function va(n){let e="";if(gt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=va(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=bl(Qh);function ef(n){return!!n||n===""}function td(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=xa(n[r],e[r],t);return i}function uc(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&xa(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function nd(n,e,t){let i=ui(n),r=ui(e);if(i||r||(i=ta(n),r=ta(e),i||r))return i&&r?uc(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!xa(n[a],e[a],t))return!1}return String(n)===String(e)}function fc(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function xa(n,e,t){if(n===e)return!0;let i=lc(n),r=lc(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Cn(n),r=Cn(e),i||r?n===e:(i=Fe(n),r=Fe(e),i||r?i&&r?fc(n,e,t,td):!1:(i=rt(n),r=rt(e),i||r?!i||!r?!1:fc(n,e,t,nd):String(n)===String(e))))}const tf=n=>!!(n&&n.__v_isRef===!0),id=n=>gt(n)?n:n==null?"":Fe(n)||rt(n)&&(n.toString===ju||!Ve(n.toString))?tf(n)?id(n.value):JSON.stringify(n,nf,2):String(n),nf=(n,e)=>tf(e)?nf(n,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Na(i,s)+" =>"]=r,t),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Na(t))}:Cn(e)?Na(e):rt(e)&&!Fe(e)&&!Zu(e)?String(e):e,Na=(n,e="")=>{var t;return Cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ct&&(Ct.active?(this.parent=Ct,this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ct;try{return Ct=this,e()}finally{Ct=t}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){if(this._on>0&&--this._on===0){if(Ct===this)Ct=this.prevScope;else{let e=Ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function sd(){return Ct}let ft;const Oa=new WeakSet;class rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&(Ct.active?Ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hc(this),of(this);const e=ft,t=vn;ft=this,vn=!0;try{return this.fn()}finally{lf(this),ft=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,hc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bo(this)&&this.run()}get dirty(){return bo(this)}}let sf=0,Vr,kr;function af(n,e=!1){if(n.flags|=8,e){n.next=kr,kr=n;return}n.next=Vr,Vr=n}function Pl(){sf++}function Dl(){if(--sf>0)return;if(kr){let e=kr;for(kr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vr;){let e=Vr;for(Vr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ul(i),ad(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function bo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kr)||(n.globalVersion=Kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bo(n))))return;n.flags|=2;const e=n.dep,t=ft,i=vn;ft=n,vn=!0;try{of(n);const r=n.fn(n._value);(e.version===0||An(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,vn=i,lf(n),n.flags&=-3}}function Ul(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ul(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ad(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const uf=[];function Kn(){uf.push(vn),vn=!1}function $n(){const n=uf.pop();vn=n===void 0?!0:n}function hc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Kr=0;class od{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!vn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new od(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,ff(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){Pl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Dl()}}}function ff(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ff(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wo=new WeakMap,Hi=Symbol(""),Ao=Symbol(""),$r=Symbol("");function Lt(n,e,t){if(vn&&ft){let i=wo.get(n);i||wo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ll),r.map=i,r.key=t),r.track()}}function kn(n,e,t,i,r,s){const o=wo.get(n);if(!o){Kr++;return}const a=l=>{l&&l.trigger()};if(Pl(),e==="clear")o.forEach(a);else{const l=Fe(n),c=l&&Al(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===$r||!Cn(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get($r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hi)),ui(n)&&a(o.get(Ao)));break;case"delete":l||(a(o.get(Hi)),ui(n)&&a(o.get(Ao)));break;case"set":ui(n)&&a(o.get(Hi));break}}Dl()}function Xi(n){const e=Je(n);return e===n||(Lt(e,"iterate",$r),an(n))?e:Pn(n)?fi(n)?e.map(t=>pi(ln(t))):e.map(pi):e.map(ln)}function Ma(n){return Lt(n=Je(n),"iterate",$r),n}function En(n,e){return Pn(n)?pi(fi(n)?ln(e):e):ln(e)}const ld={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,n=>En(this,n))},concat(...n){return Xi(this).concat(...n.map(e=>Fe(e)?Xi(e):e))},entries(){return Ba(this,"entries",n=>(n[1]=En(this,n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(i=>En(this,i)),arguments)},find(n,e){return Ln(this,"find",n,e,t=>En(this,t),arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,t=>En(this,t),arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return Xi(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...e){return dc(this,"reduce",n,e)},reduceRight(n,...e){return dc(this,"reduceRight",n,e)},shift(){return Cr(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return Xi(this).toReversed()},toSorted(n){return Xi(this).toSorted(n)},toSpliced(...n){return Xi(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return Ba(this,"values",n=>En(this,n))}};function Ba(n,e,t){const i=Ma(n),r=i[e]();return i!==n&&!an(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const cd=Array.prototype;function Ln(n,e,t,i,r,s){const o=Ma(n),a=o!==n&&!an(n),l=o[e];if(l!==cd[e]){const h=l.apply(n,s);return a?ln(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,En(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function dc(n,e,t,i){const r=Ma(n),s=r!==n&&!an(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=En(n,c)),t.call(this,c,En(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=r[e](o,...i);return a?En(n,l):l}function za(n,e,t){const i=Je(n);Lt(i,"iterate",$r);const r=i[e](...t);return(r===-1||r===!1)&&Ol(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Cr(n,e,t=[]){Kn(),Pl();const i=Je(n)[e].apply(n,t);return Dl(),$n(),i}const ud=bl("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cn));function fd(n){Cn(n)||(n=String(n));const e=Je(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class df{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Sd:_f:s?gf:mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){let l;if(o&&(l=ld[t]))return l;if(t==="hasOwnProperty")return fd}const a=Reflect.get(e,t,It(e)?e:i);if((Cn(t)?hf.has(t):ud(t))||(r||Lt(e,"get",t),s))return a;if(It(a)){const l=o&&Al(t)?a:a.value;return r&&rt(l)?Co(l):l}return rt(a)?r?Co(a):Fl(a):a}}class pf extends df{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Fe(e)&&Al(t);if(!this._isShallow){const c=Pn(s);if(!an(i)&&!Pn(i)&&(s=Je(s),i=Je(i)),!o&&It(s)&&!It(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,It(e)?e:r);return e===Je(r)&&l&&(a?An(i,s)&&kn(e,"set",t,i):kn(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cn(t)||!hf.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Fe(e)?"length":Hi),Reflect.ownKeys(e)}}class hd extends df{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dd=new pf,pd=new hd,md=new pf(!0);const Ro=n=>n,hs=n=>Reflect.getPrototypeOf(n);function gd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=ui(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ro:e?pi:ln;return!e&&Lt(s,"iterate",l?Ao:Hi),Tt(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function ds(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _d(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(An(r,a)&&Lt(o,"get",r),Lt(o,"get",a));const{has:l}=hs(o),c=e?Ro:n?pi:ln;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(Je(r),"iterate",Hi),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(An(r,a)&&Lt(o,"has",r),Lt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?Ro:n?pi:ln;return!n&&Lt(l,"iterate",Hi),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return Tt(t,n?{add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear")}:{add(r){const s=Je(this),o=hs(s),a=Je(r),l=!e&&!an(r)&&!Pn(r)?a:r;return o.has.call(s,l)||An(r,l)&&o.has.call(s,r)||An(a,l)&&o.has.call(s,a)||(s.add(l),kn(s,"add",l,l)),this},set(r,s){!e&&!an(s)&&!Pn(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=hs(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?An(s,u)&&kn(o,"set",r,s):kn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=hs(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&kn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gd(r,n,e)}),t}function Il(n,e){const t=_d(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const vd={get:Il(!1,!1)},xd={get:Il(!1,!0)},Md={get:Il(!0,!1)};const mf=new WeakMap,gf=new WeakMap,_f=new WeakMap,Sd=new WeakMap;function yd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fl(n){return Pn(n)?n:Nl(n,!1,dd,vd,mf)}function Ed(n){return Nl(n,!1,md,xd,gf)}function Co(n){return Nl(n,!0,pd,Md,_f)}function Nl(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=yd(Xh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function fi(n){return Pn(n)?fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Pn(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function Ol(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Td(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Qu(n,"__v_skip",!0),n}const ln=n=>rt(n)?Fl(n):n,pi=n=>rt(n)?Co(n):n;function It(n){return n?n.__v_isRef===!0:!1}function Po(n){return bd(n,!1)}function bd(n,e){return It(n)?n:new wd(n,e)}class wd{constructor(e,t){this.dep=new Ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:ln(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||an(e)||Pn(e);e=i?e:Je(e),An(e,t)&&(this._rawValue=e,this._value=i?e:ln(e),this.dep.trigger())}}function kt(n){return It(n)?n.value:n}const Ad={get:(n,e,t)=>e==="__v_raw"?n:kt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return It(r)&&!It(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function vf(n){return fi(n)?n:new Proxy(n,Ad)}class Rd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return af(this,!0),!0}get value(){const e=this.dep.track();return cf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cd(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new Rd(i,r,t)}const ps={},na=new WeakMap;let Di;function Pd(n,e=!1,t=Di){if(t){let i=na.get(t);i||na.set(t,i=[]),i.push(n)}}function Dd(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:an(S)||r===!1||r===0?Wn(S,1):Wn(S);let u,h,d,f,v=!1,x=!1;if(It(n)?(h=()=>n.value,v=an(n)):fi(n)?(h=()=>c(n),v=!0):Fe(n)?(x=!0,v=n.some(S=>fi(S)||an(S)),h=()=>n.map(S=>{if(It(S))return S.value;if(fi(S))return c(S);if(Ve(S))return l?l(S,2):S()})):Ve(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Kn();try{d()}finally{$n()}}const S=Di;Di=u;try{return l?l(n,3,[f]):n(f)}finally{Di=S}}:h=Rn,e&&r){const S=h,G=r===!0?1/0:r;h=()=>Wn(S(),G)}const m=sd(),p=()=>{u.stop(),m&&m.active&&wl(m.effects,u)};if(s&&e){const S=e;e=(...G)=>{const C=S(...G);return p(),C}}let A=x?new Array(n.length).fill(ps):ps;const w=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const G=u.run();if(S||r||v||(x?G.some((C,F)=>An(C,A[F])):An(G,A))){d&&d();const C=Di;Di=u;try{const F=[G,A===ps?void 0:x&&A[0]===ps?[]:A,f];A=G,l?l(e,3,F):e(...F)}finally{Di=C}}}else u.run()};return a&&a(w),u=new rf(h),u.scheduler=o?()=>o(w,!1):w,f=S=>Pd(S,!1,u),d=u.onStop=()=>{const S=na.get(u);if(S){if(l)l(S,4);else for(const G of S)G();na.delete(u)}},e?i?w(!0):A=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Wn(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,It(n))Wn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(ta(n)||ui(n))n.forEach(i=>{Wn(i,e,t)});else if(Zu(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(n,e,t,i){try{return i?n(...i):n()}catch(r){Sa(r,e,t)}}function cn(n,e,t,i){if(Ve(n)){const r=rs(n,e,t,i);return r&&$u(r)&&r.catch(s=>{Sa(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(cn(n[s],e,t,i));return r}}function Sa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Kn(),rs(s,null,10,[n,l,c]),$n();return}}Ud(n,t,r,i,o)}function Ud(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let yn=-1;const ur=[];let li=null,ar=0;const xf=Promise.resolve();let ia=null;function Ld(n){const e=ia||xf;return n?e.then(this?n.bind(this):n):e}function Id(n){let e=yn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Bl(n){if(!(n.flags&1)){const e=jr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=jr(t)?Ot.push(n):Ot.splice(Id(e),0,n),n.flags|=1,Mf()}}function Mf(){ia||(ia=xf.then(yf))}function Fd(n){if(!Fe(n))li&&n.id===-1?li.splice(ar+1,0,n):n.flags&1||(ur.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ur.push(n[e]);Mf()}function pc(n,e,t=yn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sf(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>jr(t)-jr(i));if(ur.length=0,li){for(let t=0;t<e.length;t++)li.push(e[t]);return}for(li=e,ar=0;ar<li.length;ar++){const t=li[ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,ar=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yf(n){try{for(yn=0;yn<Ot.length;yn++){const e=Ot[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Ot.length;yn++){const e=Ot[yn];e&&(e.flags&=-2)}yn=-1,Ot.length=0,Sf(),ia=null,(Ot.length||ur.length)&&yf()}}let sn=null,Ef=null;function ra(n){const e=sn;return sn=n,Ef=n&&n.type.__scopeId||null,e}function Nd(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&la(-1);const s=ra(e),o=Gi.length;let a;try{a=n(...r)}finally{for(let l=Gi.length;l>o;l--)Jf();ra(s),i._d&&la(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function oS(n,e){if(sn===null)return n;const t=Ra(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Si(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Kn(),cn(l,t,8,[n.el,a,n,e]),$n())}}function Od(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function qs(n,e,t=!1){const i=nh();if(i||fr){let r=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Bd=Symbol.for("v-scx"),zd=()=>qs(Bd);function vt(n,e,t){return Tf(n,e,t)}function Tf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Tt({},t),l=e&&i||!e&&s!=="post";let c;if(es){if(s==="sync"){const f=zd();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Rn,f.resume=Rn,f.pause=Rn,f}}const u=zt;a.call=(f,v,x)=>cn(f,u,v,x);let h=!1;s==="post"?a.scheduler=f=>{Wt(f,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(f,v)=>{v?f():Bl(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Dd(n,e,a);return es&&(c?c.push(d):l&&d()),d}function Hd(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?bf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=ss(this),a=Tf(r,s.bind(i),t);return o(),a}function bf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Gd=Symbol("_vte"),ya=n=>n.__isTeleport,nn=Symbol("_leaveCb"),Pr=Symbol("_enterCb");function Vd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{n.isMounted=!0}),If(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Af=n=>{const e=n.subTree;return e.component?Af(e.component):e},kd={name:"BaseTransition",props:wf,setup(n,{slots:e}){const t=nh(),i=Vd();return()=>{const r=e.default&&Pf(e.default(),!0),s=r&&r.length?Rf(r):t.subTree?Up():void 0;if(!s)return;const o=Je(n),{mode:a}=o;if(i.isLeaving)return Ha(s);const l=sa(s);if(!l)return Ha(s);let c=Do(l,o,i,t,h=>c=h);l.type!==Bt&&Zr(l,c);let u=t.subTree&&sa(t.subTree);if(u&&u.type!==Bt&&!Ii(u,l)&&Af(t).type!==Bt){let h=Do(u,o,i,t);if(Zr(u,h),a==="out-in"&&l.type!==Bt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Ha(s);a==="in-out"&&l.type!==Bt?h.delayLeave=(d,f,v)=>{const x=Cf(i,u);x[String(u.key)]=u,d[nn]=()=>{f(),d[nn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Rf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bt){e=t;break}}return e}const Wd=kd;function Cf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Do(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:v,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:w}=e,S=String(n.key),G=Cf(t,n),C=(E,M)=>{E&&cn(E,i,9,M)},F=(E,M)=>{const D=M[1];C(E,M),Fe(E)?E.every(N=>N.length<=1)&&D():E.length<=1&&D()},B={mode:o,persisted:a,beforeEnter(E){let M=l;if(!t.isMounted)if(s)M=m||l;else return;E[nn]&&E[nn](!0);const D=G[S];D&&Ii(n,D)&&D.el[nn]&&D.el[nn](),C(M,[E])},enter(E){if(G[S]===n)return;let M=c,D=u,N=h;if(!t.isMounted)if(s)M=p||c,D=A||u,N=w||h;else return;let O=!1;E[Pr]=oe=>{O||(O=!0,oe?C(N,[E]):C(D,[E]),B.delayedLeave&&B.delayedLeave(),E[Pr]=void 0)};const j=E[Pr].bind(null,!1);M?F(M,[E,j]):j()},leave(E,M){const D=String(n.key);if(E[Pr]&&E[Pr](!0),t.isUnmounting)return M();C(d,[E]);let N=!1;E[nn]=j=>{N||(N=!0,M(),j?C(x,[E]):C(v,[E]),E[nn]=void 0,G[D]===n&&delete G[D])};const O=E[nn].bind(null,!1);G[D]=n,f?F(f,[E,O]):O()},clone(E){const M=Do(E,e,t,i,r);return r&&r(M),M}};return B}function Ha(n){if(Ea(n))return n=mi(n),n.children=null,n}function sa(n){if(!Ea(n))return ya(n.type)&&n.children?Rf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function Zr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Zr(ya(t.type)&&sa(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Pf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Tn?(o.patchFlag&128&&r++,i=i.concat(Pf(o.children,e,a))):(e||o.type!==Bt)&&i.push(a!=null?mi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Df(n,e){return Ve(n)?Tt({name:n.name},e,{setup:n}):n}function Uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function mc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const aa=new WeakMap;function Wr(n,e,t,i,r=!1){if(Fe(n)){n.forEach((x,m)=>Wr(x,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ra(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,h=a.setupState,d=Je(h),f=h===ct?Ku:x=>mc(u,x)?!1:it(d,x),v=(x,m)=>!(m&&mc(u,m));if(c!=null&&c!==l){if(gc(e),gt(c))u[c]=null,f(c)&&(h[c]=null);else if(It(c)){const x=e;v(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Ve(l))rs(l,a,12,[o,u]);else{const x=gt(l),m=It(l);if(x||m){const p=()=>{if(n.f){const A=x?f(l)?h[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Fe(A)&&wl(A,s);else if(Fe(A))A.includes(s)||A.push(s);else if(x)u[l]=[s],f(l)&&(h[l]=u[l]);else{const w=[s];v(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else x?(u[l]=o,f(l)&&(h[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{p(),aa.delete(n)};A.id=-1,aa.set(n,A),Wt(A,t)}else gc(n),p()}}}function gc(n){const e=aa.get(n);e&&(e.flags|=8,aa.delete(n))}_a().requestIdleCallback;_a().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,Ea=n=>n.type.__isKeepAlive;function Xd(n,e){Lf(n,"a",e)}function qd(n,e){Lf(n,"da",e)}function Lf(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ta(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ea(r.parent.vnode)&&Yd(i,e,t,r),r=r.parent}}function Yd(n,e,t,i){const r=Ta(e,n,i,!0);zl(()=>{wl(i[e],r)},t)}function Ta(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Kn();const a=ss(t),l=cn(e,t,n,o);return a(),$n(),l});return i?r.unshift(s):r.push(s),s}}const Jn=n=>(e,t=zt)=>{(!es||n==="sp")&&Ta(n,(...i)=>e(...i),t)},Kd=Jn("bm"),ba=Jn("m"),$d=Jn("bu"),jd=Jn("u"),If=Jn("bum"),zl=Jn("um"),Zd=Jn("sp"),Jd=Jn("rtg"),Qd=Jn("rtc");function ep(n,e=zt){Ta("ec",n,e)}const tp=Symbol.for("v-ndc");function lS(n,e,t,i){let r;const s=t,o=Fe(n);if(o||gt(n)){const a=o&&fi(n);let l=!1,c=!1;a&&(l=!an(n),c=Pn(n),n=Ma(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(l?c?pi(ln(n[u])):ln(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Uo=n=>n?ih(n)?Ra(n):Uo(n.parent):null,qr=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uo(n.parent),$root:n=>Uo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nf(n),$forceUpdate:n=>n.f||(n.f=()=>{Bl(n.update)}),$nextTick:n=>n.n||(n.n=Ld.bind(n.proxy)),$watch:n=>Hd.bind(n)}),Ga=(n,e)=>n!==ct&&!n.__isScriptSetup&&it(n,e),np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ga(i,e))return o[e]=1,i[e];if(r!==ct&&it(r,e))return o[e]=2,r[e];if(it(s,e))return o[e]=3,s[e];if(t!==ct&&it(t,e))return o[e]=4,t[e];Lo&&(o[e]=0)}}const c=qr[e];let u,h;if(c)return e==="$attrs"&&Lt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ct&&it(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ga(r,e)?(r[e]=t,!0):i!==ct&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ct&&a[0]!=="$"&&it(n,a)||Ga(e,a)||it(s,a)||it(i,a)||it(qr,a)||it(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _c(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Lo=!0;function ip(n){const e=Nf(n),t=n.proxy,i=n.ctx;Lo=!1,e.beforeCreate&&vc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:v,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:w,unmounted:S,render:G,renderTracked:C,renderTriggered:F,errorCaptured:B,serverPrefetch:E,expose:M,inheritAttrs:D,components:N,directives:O,filters:j}=e;if(c&&rp(c,i,null),o)for(const re in o){const K=o[re];Ve(K)&&(i[re]=K.bind(t))}if(r){const re=r.call(t,t);rt(re)&&(n.data=Fl(re))}if(Lo=!0,s)for(const re in s){const K=s[re],me=Ve(K)?K.bind(t,t):Ve(K.get)?K.get.bind(t,t):Rn,ae=!Ve(K)&&Ve(K.set)?K.set.bind(t):Rn,le=Vp({get:me,set:ae});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>le.value,set:ge=>le.value=ge})}if(a)for(const re in a)Ff(a[re],i,t,re);if(l){const re=Ve(l)?l.call(t):l;Reflect.ownKeys(re).forEach(K=>{Od(K,re[K])})}u&&vc(u,n,"c");function $(re,K){Fe(K)?K.forEach(me=>re(me.bind(t))):K&&re(K.bind(t))}if($(Kd,h),$(ba,d),$($d,f),$(jd,v),$(Xd,x),$(qd,m),$(ep,B),$(Qd,C),$(Jd,F),$(If,A),$(zl,S),$(Zd,E),Fe(M))if(M.length){const re=n.exposed||(n.exposed={});M.forEach(K=>{Object.defineProperty(re,K,{get:()=>t[K],set:me=>t[K]=me,enumerable:!0})})}else n.exposed||(n.exposed={});G&&n.render===Rn&&(n.render=G),D!=null&&(n.inheritAttrs=D),N&&(n.components=N),O&&(n.directives=O),E&&Uf(n)}function rp(n,e,t=Rn){Fe(n)&&(n=Io(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=qs(r.from||i,r.default,!0):s=qs(r.from||i):s=qs(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vc(n,e,t){cn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ff(n,e,t,i){let r=i.includes(".")?bf(t,i):()=>t[i];if(gt(n)){const s=e[n];Ve(s)&&vt(r,s)}else if(Ve(n))vt(r,n.bind(t));else if(rt(n))if(Fe(n))n.forEach(s=>Ff(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&vt(r,s,n)}}function Nf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>oa(l,c,o,!0)),oa(l,e,o)),rt(e)&&s.set(e,l),l}function oa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&oa(n,s,t,!0),r&&r.forEach(o=>oa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sp={data:xc,props:Mc,emits:Mc,methods:Or,computed:Or,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Or,directives:Or,watch:op,provide:xc,inject:ap};function xc(n,e){return e?n?function(){return Tt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function ap(n,e){return Or(Io(n),Io(e))}function Io(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Or(n,e){return n?Tt(Object.create(null),n,e):e}function Mc(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Tt(Object.create(null),_c(n),_c(e??{})):e}function op(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=Ft(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,e){return function(i,r=null){Ve(i)||(i=Tt({},i)),r!=null&&!rt(r)&&(r=null);const s=Of(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Wp,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...h)):Ve(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Ht(i,r);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Ra(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=fr;fr=c;try{return u()}finally{fr=h}}};return c}}let fr=null;const up=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${vi(e)}Modifiers`];function fp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&up(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>gt(u)?u.trim():u)),o.number&&(r=r.map(Rl)));let a,l=i[a=Fa(e)]||i[a=Fa(_n(e))];!l&&s&&(l=i[a=Fa(vi(e))]),l&&cn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,cn(c,n,6,r)}}const hp=new WeakMap;function Bf(n,e,t=!1){const i=t?hp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Bf(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Tt(o,s),rt(n)&&i.set(n,o),o)}function wa(n,e){return!n||!pa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,vi(e))||it(n,e))}function Sc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:v,inheritAttrs:x}=n,m=ra(n);let p,A;try{if(t.shapeFlag&4){const S=r||i,G=S;p=bn(c.call(G,S,u,h,f,d,v)),A=a}else{const S=e;p=bn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),A=e.props?a:dp(a)}}catch(S){Gi.length=0,Sa(S,n,1),p=Ht(Bt)}let w=p;if(A&&x!==!1){const S=Object.keys(A),{shapeFlag:G}=w;S.length&&G&7&&(s&&S.some(ma)&&(A=pp(A,s)),w=mi(w,A,!1,!0))}if(t.dirs&&(w=mi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition){const S=ya(w.type)&&sa(w)||w;Zr(S,t.transition)}return p=w,ra(m),p}const dp=n=>{let e;for(const t in n)(t==="class"||t==="style"||pa(t))&&((e||(e={}))[t]=n[t]);return e},pp=(n,e)=>{const t={};for(const i in n)(!ma(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(zf(o,i,d)&&!wa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yc(i,o,c):!0:!!o;return!1}function yc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(zf(e,n,s)&&!wa(t,s))return!0}return!1}function zf(n,e,t){const i=n[t],r=e[t];return t==="style"&&rt(i)&&rt(r)?!xa(i,r):i!==r}function gp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Hf={},Gf=()=>Object.create(Hf),Vf=n=>Object.getPrototypeOf(n)===Hf;function _p(n,e,t,i=!1){const r={},s=Gf();n.propsDefaults=Object.create(null),kf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ed(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function vp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wa(n.emitsOptions,d))continue;const f=e[d];if(l)if(it(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const v=_n(d);r[v]=Fo(l,a,v,f,n,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{kf(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!it(e,h)&&((u=vi(h))===h||!it(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Fo(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!it(e,h))&&(delete s[h],c=!0)}c&&kn(n.attrs,"set","")}function kf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;r&&it(r,u=_n(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:wa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(t),c=a||ct;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Fo(r,l,h,c[h],n,!it(c,h))}}return o}function Fo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ss(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===vi(t))&&(i=!0))}return i}const xp=new WeakMap;function Wf(n,e,t=!1){const i=t?xp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=h=>{l=!0;const[d,f]=Wf(h,e,!0);Tt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,Oi),Oi;if(Fe(s))for(let u=0;u<s.length;u++){const h=_n(s[u]);Ec(h)&&(o[h]=ct)}else if(s)for(const u in s){const h=_n(u);if(Ec(h)){const d=s[u],f=o[h]=Fe(d)||Ve(d)?{type:d}:Tt({},d),v=f.type;let x=!1,m=!0;if(Fe(v))for(let p=0;p<v.length;++p){const A=v[p],w=Ve(A)&&A.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(m=!1)}else x=Ve(v)&&v.name==="Boolean";f[0]=x,f[1]=m,(x||it(f,"default"))&&a.push(h)}}const c=[o,a];return rt(n)&&i.set(n,c),c}function Ec(n){return n[0]!=="$"&&!Gr(n)}const Hl=n=>n==="_"||n==="_ctx"||n==="$stable",Gl=n=>Fe(n)?n.map(bn):[bn(n)],Mp=(n,e,t)=>{if(e._n)return e;const i=Nd((...r)=>Gl(e(...r)),t);return i._c=!1,i},Xf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Hl(r))continue;const s=n[r];if(Ve(s))e[r]=Mp(r,s,i);else if(s!=null){const o=Gl(s);e[r]=()=>o}}},qf=(n,e)=>{const t=Gl(e);n.slots.default=()=>t},Yf=(n,e,t)=>{for(const i in e)(t||!Hl(i))&&(n[i]=e[i])},Sp=(n,e,t)=>{const i=n.slots=Gf();if(n.vnode.shapeFlag&32){const r=e._;r?(Yf(i,e,t),t&&Qu(i,"_",r,!0)):Xf(e,i)}else e&&qf(n,e)},yp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Yf(r,e,t):(s=!e.$stable,Xf(e,r)),o=e}else e&&(qf(n,e),o={default:1});if(s)for(const a in r)!Hl(a)&&o[a]==null&&delete r[a]},Wt=Ap;function Ep(n){return Tp(n)}function Tp(n,e){const t=_a();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Rn,insertStaticContent:v}=n,x=(b,L,T,P=null,U=null,I=null,H=void 0,ne=null,X=!!L.dynamicChildren)=>{if(b===L)return;b&&!Ii(b,L)&&(P=de(b),ge(b,U,I,!0),b=null),L.patchFlag===-2&&(X=!1,L.dynamicChildren=null),L.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(L.dynamicChildren===Oi&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:_,ref:g,shapeFlag:R}=L;switch(_){case Aa:m(b,L,T,P);break;case Bt:p(b,L,T,P);break;case Ys:b==null&&A(L,T,P,H);break;case Tn:N(b,L,T,P,U,I,H,ne,X);break;default:R&1?G(b,L,T,P,U,I,H,ne,X):R&6?O(b,L,T,P,U,I,H,ne,X):(R&64||R&128)&&_.process(b,L,T,P,U,I,H,ne,X,Oe)}g!=null&&U?Wr(g,b&&b.ref,I,L||b,!L):g==null&&b&&b.ref!=null&&Wr(b.ref,null,I,b,!0)},m=(b,L,T,P)=>{if(b==null)i(L.el=a(L.children),T,P);else{const U=L.el=b.el;L.children!==b.children&&c(U,L.children)}},p=(b,L,T,P)=>{b==null?i(L.el=l(L.children||""),T,P):L.el=b.el},A=(b,L,T,P)=>{[b.el,b.anchor]=v(b.children,L,T,P,b.el,b.anchor)},w=({el:b,anchor:L},T,P)=>{let U;for(;b&&b!==L;)U=d(b),i(b,T,P),b=U;i(L,T,P)},S=({el:b,anchor:L})=>{let T;for(;b&&b!==L;)T=d(b),r(b),b=T;r(L)},G=(b,L,T,P,U,I,H,ne,X)=>{if(L.type==="svg"?H="svg":L.type==="math"&&(H="mathml"),b==null)C(L,T,P,U,I,H,ne,X);else{const _=b.el&&b.el._isVueCE?b.el:null;try{_&&_._beginPatch(),E(b,L,U,I,H,ne,X)}finally{_&&_._endPatch()}}},C=(b,L,T,P,U,I,H,ne)=>{let X,_;const{props:g,shapeFlag:R,transition:W,dirs:Y}=b;if(X=b.el=o(b.type,I,g&&g.is,g),R&8?u(X,b.children):R&16&&B(b.children,X,null,P,U,Va(b,I),H,ne),Y&&Si(b,null,P,"created"),F(X,b,b.scopeId,H,P),g){for(const he in g)he!=="value"&&!Gr(he)&&s(X,he,null,g[he],I,P);"value"in g&&s(X,"value",null,g.value,I),(_=g.onVnodeBeforeMount)&&Mn(_,P,b)}Y&&Si(b,null,P,"beforeMount");const q=bp(U,W);q&&W.beforeEnter(X),i(X,L,T),((_=g&&g.onVnodeMounted)||q||Y)&&Wt(()=>{try{_&&Mn(_,P,b),q&&W.enter(X),Y&&Si(b,null,P,"mounted")}finally{}},U)},F=(b,L,T,P,U)=>{if(T&&f(b,T),P)for(let I=0;I<P.length;I++)f(b,P[I]);if(U){let I=U.subTree;if(L===I||Zf(I.type)&&(I.ssContent===L||I.ssFallback===L)){const H=U.vnode;F(b,H,H.scopeId,H.slotScopeIds,U.parent)}}},B=(b,L,T,P,U,I,H,ne,X=0)=>{for(let _=X;_<b.length;_++){const g=b[_]=ne?Vn(b[_]):bn(b[_]);x(null,g,L,T,P,U,I,H,ne)}},E=(b,L,T,P,U,I,H)=>{const ne=L.el=b.el;let{patchFlag:X,dynamicChildren:_,dirs:g}=L;X|=b.patchFlag&16;const R=b.props||ct,W=L.props||ct;let Y;if(T&&yi(T,!1),(Y=W.onVnodeBeforeUpdate)&&Mn(Y,T,L,b),g&&Si(L,b,T,"beforeUpdate"),T&&yi(T,!0),_&&(!b.dynamicChildren||b.dynamicChildren.length!==_.length)&&(X=0,H=!1,_=null),(R.innerHTML&&W.innerHTML==null||R.textContent&&W.textContent==null)&&u(ne,""),_?M(b.dynamicChildren,_,ne,T,P,Va(L,U),I):H||K(b,L,ne,null,T,P,Va(L,U),I,!1),X>0){if(X&16)D(ne,R,W,T,U);else if(X&2&&R.class!==W.class&&s(ne,"class",null,W.class,U),X&4&&s(ne,"style",R.style,W.style,U),X&8){const q=L.dynamicProps;for(let he=0;he<q.length;he++){const ce=q[he],pe=R[ce],Le=W[ce];(Le!==pe||ce==="value")&&s(ne,ce,pe,Le,U,T)}}X&1&&b.children!==L.children&&u(ne,L.children)}else!H&&_==null&&D(ne,R,W,T,U);((Y=W.onVnodeUpdated)||g)&&Wt(()=>{Y&&Mn(Y,T,L,b),g&&Si(L,b,T,"updated")},P)},M=(b,L,T,P,U,I,H)=>{for(let ne=0;ne<L.length;ne++){const X=b[ne],_=L[ne],g=X.el&&(X.type===Tn||!Ii(X,_)||X.shapeFlag&198)?h(X.el):T;x(X,_,g,null,P,U,I,H,!0)}},D=(b,L,T,P,U)=>{if(L!==T){if(L!==ct)for(const I in L)!Gr(I)&&!(I in T)&&s(b,I,L[I],null,U,P);for(const I in T){if(Gr(I))continue;const H=T[I],ne=L[I];H!==ne&&I!=="value"&&s(b,I,ne,H,U,P)}"value"in T&&s(b,"value",L.value,T.value,U)}},N=(b,L,T,P,U,I,H,ne,X)=>{const _=L.el=b?b.el:a(""),g=L.anchor=b?b.anchor:a("");let{patchFlag:R,dynamicChildren:W,slotScopeIds:Y}=L;Y&&(ne=ne?ne.concat(Y):Y),b==null?(i(_,T,P),i(g,T,P),B(L.children||[],T,g,U,I,H,ne,X)):R>0&&R&64&&W&&b.dynamicChildren&&b.dynamicChildren.length===W.length?(M(b.dynamicChildren,W,T,U,I,H,ne),(L.key!=null||U&&L===U.subTree)&&Kf(b,L,!0)):K(b,L,T,g,U,I,H,ne,X)},O=(b,L,T,P,U,I,H,ne,X)=>{L.slotScopeIds=ne,b==null?L.shapeFlag&512?U.ctx.activate(L,T,P,H,X):j(L,T,P,U,I,H,X):oe(b,L,X)},j=(b,L,T,P,U,I,H)=>{const ne=b.component=Np(b,P,U);if(Ea(b)&&(ne.ctx.renderer=Oe),Op(ne,!1,H),ne.asyncDep){if(U&&U.registerDep(ne,$,H),!b.el){const X=ne.subTree=Ht(Bt);p(null,X,L,T),b.placeholder=X.el}}else $(ne,b,L,T,U,I,H)},oe=(b,L,T)=>{const P=L.component=b.component;if(mp(b,L,T))if(P.asyncDep&&!P.asyncResolved){L.el=b.el,re(P,L,T);return}else P.next=L,P.update();else L.el=b.el,P.vnode=L},$=(b,L,T,P,U,I,H)=>{const ne=()=>{if(b.isMounted){let{next:R,bu:W,u:Y,parent:q,vnode:he}=b;{const Se=$f(b);if(Se){R&&(R.el=he.el,re(b,R,H)),Se.asyncDep.then(()=>{Wt(()=>{b.isUnmounted||_()},U)});return}}let ce=R,pe;yi(b,!1),R?(R.el=he.el,re(b,R,H)):R=he,W&&Xs(W),(pe=R.props&&R.props.onVnodeBeforeUpdate)&&Mn(pe,q,R,he),yi(b,!0);const Le=Sc(b),fe=b.subTree;b.subTree=Le,x(fe,Le,h(fe.el),de(fe),b,U,I),R.el=Le.el,ce===null&&gp(b,Le.el),Y&&Wt(Y,U),(pe=R.props&&R.props.onVnodeUpdated)&&Wt(()=>Mn(pe,q,R,he),U)}else{let R;const{el:W,props:Y}=L,{bm:q,m:he,parent:ce,root:pe,type:Le}=b,fe=Xr(L);yi(b,!1),q&&Xs(q),!fe&&(R=Y&&Y.onVnodeBeforeMount)&&Mn(R,ce,L),yi(b,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(Le,b.parent?b.parent.type:void 0);const Se=b.subTree=Sc(b);x(null,Se,T,P,b,U,I),L.el=Se.el}if(he&&Wt(he,U),!fe&&(R=Y&&Y.onVnodeMounted)){const Se=L;Wt(()=>Mn(R,ce,Se),U)}(L.shapeFlag&256||ce&&Xr(ce.vnode)&&ce.vnode.shapeFlag&256)&&b.a&&Wt(b.a,U),b.isMounted=!0,L=T=P=null}};b.scope.on();const X=b.effect=new rf(ne);b.scope.off();const _=b.update=X.run.bind(X),g=b.job=X.runIfDirty.bind(X);g.i=b,g.id=b.uid,X.scheduler=()=>Bl(g),yi(b,!0),_()},re=(b,L,T)=>{L.component=b;const P=b.vnode.props;b.vnode=L,b.next=null,vp(b,L.props,P,T),yp(b,L.children,T),Kn(),pc(b),$n()},K=(b,L,T,P,U,I,H,ne,X=!1)=>{const _=b&&b.children,g=b?b.shapeFlag:0,R=L.children,{patchFlag:W,shapeFlag:Y}=L;if(W>0){if(W&128){ae(_,R,T,P,U,I,H,ne,X);return}else if(W&256){me(_,R,T,P,U,I,H,ne,X);return}}Y&8?(g&16&&xe(_,U,I),R!==_&&u(T,R)):g&16?Y&16?ae(_,R,T,P,U,I,H,ne,X):xe(_,U,I,!0):(g&8&&u(T,""),Y&16&&B(R,T,P,U,I,H,ne,X))},me=(b,L,T,P,U,I,H,ne,X)=>{b=b||Oi,L=L||Oi;const _=b.length,g=L.length,R=Math.min(_,g);let W;for(W=0;W<R;W++){const Y=L[W]=X?Vn(L[W]):bn(L[W]);x(b[W],Y,T,null,U,I,H,ne,X)}_>g?xe(b,U,I,!0,!1,R):B(L,T,P,U,I,H,ne,X,R)},ae=(b,L,T,P,U,I,H,ne,X)=>{let _=0;const g=L.length;let R=b.length-1,W=g-1;for(;_<=R&&_<=W;){const Y=b[_],q=L[_]=X?Vn(L[_]):bn(L[_]);if(Ii(Y,q))x(Y,q,T,null,U,I,H,ne,X);else break;_++}for(;_<=R&&_<=W;){const Y=b[R],q=L[W]=X?Vn(L[W]):bn(L[W]);if(Ii(Y,q))x(Y,q,T,null,U,I,H,ne,X);else break;R--,W--}if(_>R){if(_<=W){const Y=W+1,q=Y<g?L[Y].el:P;for(;_<=W;)x(null,L[_]=X?Vn(L[_]):bn(L[_]),T,q,U,I,H,ne,X),_++}}else if(_>W)for(;_<=R;)ge(b[_],U,I,!0),_++;else{const Y=_,q=_,he=new Map;for(_=q;_<=W;_++){const ve=L[_]=X?Vn(L[_]):bn(L[_]);ve.key!=null&&he.set(ve.key,_)}let ce,pe=0;const Le=W-q+1;let fe=!1,Se=0;const Ie=new Array(Le);for(_=0;_<Le;_++)Ie[_]=0;for(_=Y;_<=R;_++){const ve=b[_];if(pe>=Le){ge(ve,U,I,!0);continue}let Be;if(ve.key!=null)Be=he.get(ve.key);else for(ce=q;ce<=W;ce++)if(Ie[ce-q]===0&&Ii(ve,L[ce])){Be=ce;break}Be===void 0?ge(ve,U,I,!0):(Ie[Be-q]=_+1,Be>=Se?Se=Be:fe=!0,x(ve,L[Be],T,null,U,I,H,ne,X),pe++)}const Ne=fe?wp(Ie):Oi;for(ce=Ne.length-1,_=Le-1;_>=0;_--){const ve=q+_,Be=L[ve],Ge=L[ve+1],st=ve+1<g?Ge.el||jf(Ge):P;Ie[_]===0?x(null,Be,T,st,U,I,H,ne,X):fe&&(ce<0||_!==Ne[ce]?le(Be,T,st,2):ce--)}}},le=(b,L,T,P,U=null)=>{const{el:I,type:H,transition:ne,children:X,shapeFlag:_}=b;if(_&6){le(b.component.subTree,L,T,P);return}if(_&128){b.suspense.move(L,T,P);return}if(_&64){H.move(b,L,T,Oe);return}if(H===Tn){i(I,L,T);for(let R=0;R<X.length;R++)le(X[R],L,T,P);i(b.anchor,L,T);return}if(H===Ys){w(b,L,T);return}if(P!==2&&_&1&&ne)if(P===0)ne.persisted&&!I[nn]?i(I,L,T):(ne.beforeEnter(I),i(I,L,T),Wt(()=>ne.enter(I),U));else{const{leave:R,delayLeave:W,afterLeave:Y}=ne,q=()=>{b.ctx.isUnmounted?r(I):i(I,L,T)},he=()=>{const ce=I._isLeaving||!!I[nn];I._isLeaving&&I[nn](!0),ne.persisted&&!ce?q():R(I,()=>{q(),Y&&Y()})};W?W(I,q,he):he()}else i(I,L,T)},ge=(b,L,T,P=!1,U=!1)=>{const{type:I,props:H,ref:ne,children:X,dynamicChildren:_,shapeFlag:g,patchFlag:R,dirs:W,cacheIndex:Y,memo:q}=b;if((R===-2||_&&_.hasOnce)&&(U=!1),ne!=null&&(Kn(),Wr(ne,null,T,b,!0),$n()),Y!=null&&(!b.ctx||b.ctx===L)&&(L.renderCache[Y]=void 0),g&256){L.ctx.deactivate(b);return}const he=g&1&&W,ce=!Xr(b);let pe;if(ce&&(pe=H&&H.onVnodeBeforeUnmount)&&Mn(pe,L,b),g&6)se(b.component,T,P);else{if(g&128){b.suspense.unmount(T,P);return}he&&Si(b,null,L,"beforeUnmount"),g&64?b.type.remove(b,L,T,Oe,P):_&&!_.hasOnce&&(I!==Tn||R>0&&R&64)?xe(_,L,T,!1,!0):(I===Tn&&R&384||!U&&g&16)&&xe(X,L,T),P&&ye(b)}const Le=q!=null&&Y==null;(ce&&(pe=H&&H.onVnodeUnmounted)||he||Le)&&Wt(()=>{pe&&Mn(pe,L,b),he&&Si(b,null,L,"unmounted"),Le&&(b.el=null)},T)},ye=b=>{const{type:L,el:T,anchor:P,transition:U}=b;if(L===Tn){te(T,P);return}if(L===Ys){S(b),U&&!U.persisted&&U.afterLeave&&U.afterLeave();return}const I=()=>{r(T),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:H,delayLeave:ne}=U,X=()=>H(T,I);ne?ne(b.el,I,X):X()}else I()},te=(b,L)=>{let T;for(;b!==L;)T=d(b),r(b),b=T;r(L)},se=(b,L,T)=>{const{bum:P,scope:U,job:I,subTree:H,um:ne,m:X,a:_}=b;Tc(X),Tc(_),P&&Xs(P),U.stop(),I?(I.flags|=8,ge(H,b,L,T)):b.vnode.el&&H&&(H.transition=b.vnode.transition,ge(H,b,L,T)),ne&&Wt(ne,L),Wt(()=>{b.isUnmounted=!0},L)},xe=(b,L,T,P=!1,U=!1,I=0)=>{for(let H=I;H<b.length;H++)ge(b[H],L,T,P,U)},de=b=>{if(b.shapeFlag&6)return de(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const L=d(b.anchor||b.el),T=L&&L[Gd];return T?d(T):L};let Ae=!1;const Re=(b,L,T)=>{let P;b==null?L._vnode&&(ge(L._vnode,null,null,!0),P=L._vnode.component):x(L._vnode||null,b,L,null,null,null,T),L._vnode=b,Ae||(Ae=!0,pc(P),Sf(),Ae=!1)},Oe={p:x,um:ge,m:le,r:ye,mt:j,mc:B,pc:K,pbc:M,n:de,o:n};return{render:Re,hydrate:void 0,createApp:cp(Re)}}function Va({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function bp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kf(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Kf(o,a)),a.type===Aa&&(a.patchFlag===-1&&(a=r[s]=Vn(a)),a.el=o.el),a.type===Bt&&!a.el&&(a.el=o.el)}}function wp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function $f(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function Tc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function jf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?jf(e.subTree):null}const Zf=n=>n.__isSuspense;function Ap(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Fd(n)}const Tn=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Ys=Symbol.for("v-stc"),Gi=[];let Zt=null;function Vl(n=!1){Gi.push(Zt=n?null:[])}function Jf(){Gi.pop(),Zt=Gi[Gi.length-1]||null}let Jr=1;function la(n,e=!1){Jr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Qf(n){return n.dynamicChildren=Jr>0?Zt||Oi:null,Jf(),Jr>0&&Zt&&Zt.push(n),n}function eh(n,e,t,i,r,s){return Qf(kl(n,e,t,i,r,s,!0))}function Rp(n,e,t,i,r){return Qf(Ht(n,e,t,i,r,!0))}function ca(n){return n?n.__v_isVNode===!0:!1}function Ii(n,e){return n.type===e.type&&n.key===e.key}const th=({key:n})=>n??null,Ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||It(n)||Ve(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function kl(n,e=null,t=null,i=0,r=null,s=n===Tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&th(e),ref:e&&Ks(e),scopeId:Ef,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(ua(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Jr>0&&!o&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const Ht=Cp;function Cp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tp)&&(n=Bt),ca(n)){const a=mi(n,e,!0);return t&&ua(a,t),Jr>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(n)]=a:Zt.push(a)),a.patchFlag=-2,a}if(Gp(n)&&(n=n.__vccOpts),e){e=Pp(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=va(a)),rt(l)&&(Ol(l)&&!Fe(l)&&(l=Tt({},l)),e.style=Cl(l))}const o=gt(n)?1:Zf(n)?128:ya(n)?64:rt(n)?4:Ve(n)?2:0;return kl(n,e,t,i,r,o,s,!0)}function Pp(n){return n?Ol(n)||Vf(n)?Tt({},n):n:null}function mi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&th(c),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Ks(e)):[s,Ks(e)]:Ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mi(n.ssContent),ssFallback:n.ssFallback&&mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Zr(u,l.clone(u)),u}function Dp(n=" ",e=0){return Ht(Aa,null,n,e)}function cS(n,e){const t=Ht(Ys,null,n);return t.staticCount=e,t}function Up(n="",e=!1){return e?(Vl(),Rp(Bt,null,n)):Ht(Bt,null,n)}function bn(n){return n==null||typeof n=="boolean"?Ht(Bt):Fe(n)?Ht(Tn,null,n.slice()):ca(n)?Vn(n):Ht(Aa,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mi(n)}function ua(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ua(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Vf(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ve(e)){if(i&65){ua(n,{default:e});return}e={default:e,_ctx:sn},t=32}else e=String(e),i&64?(t=16,e=[Dp(e)]):t=8;n.children=e,n.shapeFlag|=t}function Lp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=va([e.class,i.class]));else if(r==="style")e.style=Cl([e.style,i.style]);else if(pa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ma(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){cn(n,e,7,[t,i])}const Ip=Of();let Fp=0;function Np(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ip,s={uid:Fp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(i,r),emitsOptions:Bf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fp.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const nh=()=>zt||sn;let fa,Qr;{const n=_a(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};fa=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Qr=e("__VUE_SSR_SETTERS__",t=>es=t)}const ss=n=>{const e=zt;return fa(n),n.scope.on(),()=>{n.scope.off(),fa(e)}},bc=()=>{zt&&zt.scope.off(),fa(null)};function ih(n){return n.vnode.shapeFlag&4}let es=!1;function Op(n,e=!1,t=!1){e&&Qr(e);const{props:i,children:r}=n.vnode,s=ih(n);_p(n,i,s,e),Sp(n,r,t||e);const o=s?Bp(n,e):void 0;return e&&Qr(!1),o}function Bp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=t;if(i){Kn();const r=n.setupContext=i.length>1?Hp(n):null,s=ss(n),o=rs(i,n,0,[n.props,r]),a=$u(o);if($n(),s(),(a||n.sp)&&!Xr(n)&&Uf(n),a){if(o.then(bc,bc),e)return o.then(l=>{Qr(!0);try{wc(n,l,e)}finally{Qr(!1)}}).catch(l=>{Sa(l,n,0)});n.asyncDep=o}else wc(n,o)}else rh(n)}function wc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=vf(e)),rh(n)}function rh(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const r=ss(n);Kn();try{ip(n)}finally{$n(),r()}}}const zp={get(n,e){return Lt(n,"get",""),n[e]}};function Hp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zp),slots:n.slots,emit:n.emit,expose:e}}function Ra(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vf(Td(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function Gp(n){return Ve(n)&&"__vccOpts"in n}const Vp=(n,e)=>Cd(n,e,es);function kp(n,e,t){try{la(-1);const i=arguments.length;return i===2?rt(e)&&!Fe(e)?ca(e)?Ht(n,null,[e]):Ht(n,e):Ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ca(t)&&(t=[t]),Ht(n,e,t))}finally{la(1)}}const Wp="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let No;const Ac=typeof window<"u"&&window.trustedTypes;if(Ac)try{No=Ac.createPolicy("vue",{createHTML:n=>n})}catch{}const sh=No?n=>No.createHTML(n):n=>n,Xp="http://www.w3.org/2000/svg",qp="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Rc=Gn&&Gn.createElement("template"),Yp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(Xp,n):e==="mathml"?Gn.createElementNS(qp,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Rc.innerHTML=sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Rc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ti="transition",Dr="animation",ts=Symbol("_vtc"),ah={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Kp=Tt({},wf,ah),$p=n=>(n.displayName="Transition",n.props=Kp,n),uS=$p((n,{slots:e})=>kp(Wd,jp(n),e)),Ei=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Cc=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function jp(n){const e={};for(const N in n)N in ah||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,v=Zp(r),x=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:w,onLeave:S,onLeaveCancelled:G,onBeforeAppear:C=p,onAppear:F=A,onAppearCancelled:B=w}=e,E=(N,O,j,oe)=>{N._enterCancelled=oe,Ti(N,O?u:a),Ti(N,O?c:o),j&&j()},M=(N,O)=>{N._isLeaving=!1,Ti(N,h),Ti(N,f),Ti(N,d),O&&O()},D=N=>(O,j)=>{const oe=N?F:A,$=()=>E(O,N,j);Ei(oe,[O,$]),Pc(()=>{Ti(O,N?l:s),In(O,N?u:a),Cc(oe)||Dc(O,i,x,$)})};return Tt(e,{onBeforeEnter(N){Ei(p,[N]),In(N,s),In(N,o)},onBeforeAppear(N){Ei(C,[N]),In(N,l),In(N,c)},onEnter:D(!1),onAppear:D(!0),onLeave(N,O){N._isLeaving=!0;const j=()=>M(N,O);In(N,h),N._enterCancelled?(In(N,d),Ic(N)):(Ic(N),In(N,d)),Pc(()=>{N._isLeaving&&(Ti(N,h),In(N,f),Cc(S)||Dc(N,i,m,j))}),Ei(S,[N,j])},onEnterCancelled(N){E(N,!1,void 0,!0),Ei(w,[N])},onAppearCancelled(N){E(N,!0,void 0,!0),Ei(B,[N])},onLeaveCancelled(N){M(N),Ei(G,[N])}})}function Zp(n){if(n==null)return null;if(rt(n))return[ka(n.enter),ka(n.leave)];{const e=ka(n);return[e,e]}}function ka(n){return Kh(n)}function In(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ts]||(n[ts]=new Set)).add(e)}function Ti(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ts];t&&(t.delete(e),t.size||(n[ts]=void 0))}function Pc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Jp=0;function Dc(n,e,t,i){const r=n._endId=++Jp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Qp(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),s()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function Qp(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),o=Uc(r,s),a=i(`${Dr}Delay`),l=i(`${Dr}Duration`),c=Uc(a,l);let u=null,h=0,d=0;e===ti?o>0&&(u=ti,h=o,d=s.length):e===Dr?c>0&&(u=Dr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ti:Dr:null,d=u?u===ti?s.length:l.length:0);const f=u===ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${ti}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Uc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Lc(t)+Lc(n[i])))}function Lc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ic(n){return(n?n.ownerDocument:document).body.offsetHeight}function em(n,e,t){const i=n[ts];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fc=Symbol("_vod"),tm=Symbol("_vsh"),nm=Symbol(""),im=/(?:^|;)\s*display\s*:/;function rm(n,e,t){const i=n.style,r=gt(t);let s=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Br(i,a,"")}else for(const o in e)t[o]==null&&Br(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?am(n,o,!gt(e)&&e?e[o]:void 0,a)||Br(i,o,a):Br(i,o,"")}}else if(r){if(e!==t){const o=i[nm];o&&(t+=";"+o),i.cssText=t,s=im.test(t)}}else e&&n.removeAttribute("style");Fc in n&&(n[Fc]=s?i.display:"",n[tm]&&(i.display="none"))}const ms=/\s*!important$/;function Br(n,e,t){if(Fe(t))t.forEach(i=>Br(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))ms.test(t)?n.setProperty(e,t.replace(ms,""),"important"):n.setProperty(e,t);else{const i=sm(n,e);ms.test(t)?n.setProperty(vi(i),t.replace(ms,""),"important"):n[i]=t}}const Nc=["Webkit","Moz","ms"],Wa={};function sm(n,e){const t=Wa[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return Wa[e]=i;i=Ju(i);for(let r=0;r<Nc.length;r++){const s=Nc[r]+i;if(s in n)return Wa[e]=s}return e}function am(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&gt(i)&&t===i}const Oc="http://www.w3.org/1999/xlink";function Bc(n,e,t,i,r,s=ed(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oc,e.slice(6,e.length)):n.setAttributeNS(Oc,e,t):t==null||s&&!ef(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cn(t)?String(t):t)}function zc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ef(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function or(n,e,t,i){n.addEventListener(e,t,i)}function om(n,e,t,i){n.removeEventListener(e,t,i)}const Hc=Symbol("_vei");function lm(n,e,t,i,r=null){const s=n[Hc]||(n[Hc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=fm(e);if(i){const c=s[e]=pm(i,r);or(n,a,c,l)}else o&&(om(n,a,o,l),s[e]=void 0)}}const cm=/(Once|Passive|Capture)$/,um=/^on:?(?:Once|Passive|Capture)$/;function fm(n){let e,t;for(;(t=n.match(cm))&&!um.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):vi(n.slice(2)),e]}let Xa=0;const hm=Promise.resolve(),dm=()=>Xa||(hm.then(()=>Xa=0),Xa=Date.now());function pm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Fe(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&cn(c,e,5,a)}}else cn(r,e,5,[i])};return t.value=n,t.attached=dm(),t}const Gc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?em(n,i,o):e==="style"?rm(n,t,i):pa(e)?ma(e)||lm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gm(n,e,i,o))?(zc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bc(n,e,i,o,s,e!=="value")):n._isVueCE&&(_m(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(i)))?zc(n,_n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bc(n,e,i,o))};function gm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gc(e)&&gt(t)?!1:e in n}function _m(n,e){const t=n._def.props;if(!t)return!1;const i=_n(e);return Array.isArray(t)?t.some(r=>_n(r)===i):Object.keys(t).some(r=>_n(r)===i)}const Vc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>Xs(e,t):e};function vm(n){n.target.composing=!0}function kc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign"),_s=Symbol("_initialValue");function qa(n,e,t){return e&&(n=n.trim()),t&&(n=Rl(n)),n}const fS={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[_s]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[_s]=n.defaultValue.replace(/\r\n?/g,`
`))),n[gs]=Vc(r);const s=i||r.props&&r.props.type==="number";or(n,e?"change":"input",o=>{o.target.composing||n[gs](qa(n.value,t,s))}),(t||s)&&or(n,"change",()=>{n.value=qa(n.value,t,s)}),e||(or(n,"compositionstart",vm),or(n,"compositionend",kc),or(n,"change",kc))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[_s];delete n[_s],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[gs](qa(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[gs]=Vc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Rl(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},xm=["ctrl","shift","alt","meta"],Mm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>xm.some(t=>n[`${t}Key`]&&!e.includes(t))},hS=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Mm[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},Sm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dS=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=vi(r.key);if(e.some(o=>o===s||Sm[o]===s))return n(r)}))},ym=Tt({patchProp:mm},Yp);let Wc;function Em(){return Wc||(Wc=Ep(ym))}const pS=((...n)=>{const e=Em().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Tm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bm(n){return gt(n)?document.querySelector(n):n}const oh=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="170",wm=0,Xc=1,Am=2,lh=1,Rm=2,Hn=3,gi=0,Yt=1,Xn=2,hi=0,hr=1,qc=2,Yc=3,Kc=4,Cm=5,Fi=100,Pm=101,Dm=102,Um=103,Lm=104,Im=200,Fm=201,Nm=202,Om=203,Oo=204,Bo=205,Bm=206,zm=207,Hm=208,Gm=209,Vm=210,km=211,Wm=212,Xm=213,qm=214,zo=0,Ho=1,Go=2,mr=3,Vo=4,ko=5,Wo=6,Xo=7,ch=0,Ym=1,Km=2,di=0,$m=1,jm=2,Zm=3,Jm=4,Qm=5,eg=6,tg=7,uh=300,gr=301,_r=302,qo=303,Yo=304,Ca=306,Ko=1e3,xt=1001,$o=1002,Ye=1003,ng=1004,vs=1005,mt=1006,Ya=1007,Bi=1008,jn=1009,fh=1010,hh=1011,ns=1012,Xl=1013,ki=1014,Et=1015,yr=1016,ql=1017,Yl=1018,vr=1020,dh=35902,ph=1021,mh=1022,pt=1023,gh=1024,_h=1025,dr=1026,xr=1027,vh=1028,Kl=1029,xh=1030,$l=1031,jl=1033,$s=33776,js=33777,Zs=33778,Js=33779,jo=35840,Zo=35841,Jo=35842,Qo=35843,el=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,al=37811,ol=37812,ll=37813,cl=37814,ul=37815,fl=37816,hl=37817,dl=37818,pl=37819,ml=37820,gl=37821,Qs=36492,_l=36494,vl=36495,Mh=36283,xl=36284,Ml=36285,Sl=36286,ig=3200,rg=3201,sg=0,ag=1,ci="",rn="srgb",Er="srgb-linear",Pa="linear",ot="srgb",qi=7680,$c=519,og=512,lg=513,cg=514,Sh=515,ug=516,fg=517,hg=518,dg=519,jc=35044,zi="300 es",qn=2e3,ha=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,yl=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function pg(n,e){return(n%e+e)%e}function $a(n,e,t){return(1-t)*n+t*e}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],v=i[8],x=r[0],m=r[3],p=r[6],A=r[1],w=r[4],S=r[7],G=r[2],C=r[5],F=r[8];return s[0]=o*x+a*A+l*G,s[3]=o*m+a*w+l*C,s[6]=o*p+a*S+l*F,s[1]=c*x+u*A+h*G,s[4]=c*m+u*w+h*C,s[7]=c*p+u*S+h*F,s[2]=d*x+f*A+v*G,s[5]=d*m+f*w+v*C,s[8]=d*p+f*S+v*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,v=t*h+i*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Xe;function yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mg(){const n=da("canvas");return n.style.display="block",n}const Zc={};function zr(n){n in Zc||(Zc[n]=!0,console.warn(n))}function gg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function _g(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(n.r=Yn(n.r),n.g=Yn(n.g),n.b=Yn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ci?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],eu=[.3127,.329],tu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Er]:{primaries:Jc,whitePoint:eu,transfer:Pa,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Jc,whitePoint:eu,transfer:ot,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Yi;class xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=da("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mg=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Za(r[o].image)):s.push(Za(r[o]))}else s=Za(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sg=0;class Rt extends Tr{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=xt,r=xt,s=mt,o=Bi,a=pt,l=jn,c=Rt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=as(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case xt:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case xt:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=uh;Rt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,i=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(f+1)/2,G=(p+1)/2,C=(u+d)/4,F=(h+x)/4,B=(v+m)/4;return w>S&&w>G?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=F/i):S>G?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=B/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=F/s,r=B/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yg extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends yg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eg extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==v){let m=1-a;const p=l*d+c*f+u*v+h*x,A=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const G=Math.sqrt(w),C=Math.atan2(G,p*A);m=Math.sin(m*C)/G,a=Math.sin(a*C)/G}const S=a*A;if(l=l*m+d*S,c=c*m+f*S,u=u*m+v*S,h=h*m+x*S,m===1-a){const G=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=G,c*=G,u*=G,h*=G}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-a*f,e[t+2]=c*v+u*f+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new ee,iu=new os;class ls{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Ms.subVectors(this.max,Lr),Ki.subVectors(e.a,Lr),$i.subVectors(e.b,Lr),ji.subVectors(e.c,Lr),ni.subVectors($i,Ki),ii.subVectors(ji,$i),bi.subVectors(Ki,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!Qa(t,Ki,$i,ji,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Ki,$i,ji,Ms))?!1:(Ss.crossVectors(ni,ii),t=[Ss.x,Ss.y,Ss.z],Qa(t,Ki,$i,ji,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],hn=new ee,xs=new ls,Ki=new ee,$i=new ee,ji=new ee,ni=new ee,ii=new ee,bi=new ee,Lr=new ee,Ms=new ee,Ss=new ee,wi=new ee;function Qa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wi.fromArray(n,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tg=new ls,Ir=new ee,eo=new ee;class Zl{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(eo)),this.expandByPoint(Ir.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new ee,to=new ee,ys=new ee,ri=new ee,no=new ee,Es=new ee,io=new ee;class bg{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){to.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(to);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=ri.dot(this.direction),l=-ri.dot(ys),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,d,f,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(to).addScaledVector(ys,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){no.subVectors(t,e),Es.subVectors(i,e),io.crossVectors(no,Es);let o=this.direction.dot(io),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Es.crossVectors(ri,Es));if(l<0)return null;const c=a*this.direction.dot(no.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(io);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,l,c,u,h,d,f,v,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,f,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,f,v,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,v=c*u,x=c*h;t[0]=d+x*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,v=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Ag)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),si.crossVectors(i,$t),si.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),si.crossVectors(i,$t)),si.normalize(),Ts.crossVectors($t,si),r[0]=si.x,r[4]=Ts.x,r[8]=$t.x,r[1]=si.y,r[5]=Ts.y,r[9]=$t.y,r[2]=si.z,r[6]=Ts.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],v=i[2],x=i[6],m=i[10],p=i[14],A=i[3],w=i[7],S=i[11],G=i[15],C=r[0],F=r[4],B=r[8],E=r[12],M=r[1],D=r[5],N=r[9],O=r[13],j=r[2],oe=r[6],$=r[10],re=r[14],K=r[3],me=r[7],ae=r[11],le=r[15];return s[0]=o*C+a*M+l*j+c*K,s[4]=o*F+a*D+l*oe+c*me,s[8]=o*B+a*N+l*$+c*ae,s[12]=o*E+a*O+l*re+c*le,s[1]=u*C+h*M+d*j+f*K,s[5]=u*F+h*D+d*oe+f*me,s[9]=u*B+h*N+d*$+f*ae,s[13]=u*E+h*O+d*re+f*le,s[2]=v*C+x*M+m*j+p*K,s[6]=v*F+x*D+m*oe+p*me,s[10]=v*B+x*N+m*$+p*ae,s[14]=v*E+x*O+m*re+p*le,s[3]=A*C+w*M+S*j+G*K,s[7]=A*F+w*D+S*oe+G*me,s[11]=A*B+w*N+S*$+G*ae,s[15]=A*E+w*O+S*re+G*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+x*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,w=v*d*c-u*m*c-v*l*f+o*m*f+u*l*p-o*d*p,S=u*x*c-v*h*c+v*a*f-o*x*f-u*a*p+o*h*p,G=v*h*l-u*x*l-v*a*d+o*x*d+u*a*m-o*h*m,C=t*A+i*w+r*S+s*G;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=A*F,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*F,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*F,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*F,e[4]=w*F,e[5]=(u*m*s-v*d*s+v*r*f-t*m*f-u*r*p+t*d*p)*F,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*F,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*F,e[8]=S*F,e[9]=(v*h*s-u*x*s-v*i*f+t*x*f+u*i*p-t*h*p)*F,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*p+t*a*p)*F,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*f-t*a*f)*F,e[12]=G*F,e[13]=(u*x*r-v*h*r+v*i*d-t*x*d-u*i*m+t*h*m)*F,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*F,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,v=s*h,x=o*u,m=o*h,p=a*h,A=l*c,w=l*u,S=l*h,G=i.x,C=i.y,F=i.z;return r[0]=(1-(x+p))*G,r[1]=(f+S)*G,r[2]=(v-w)*G,r[3]=0,r[4]=(f-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(v+w)*F,r[9]=(m-A)*F,r[10]=(1-(d+x))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const c=1/s,u=1/o,h=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,v;if(a===qn)f=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ha)f=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,f=(i+r)*u;let v,x;if(a===qn)v=(o+s)*h,x=-2*h;else if(a===ha)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new ee,dn=new yt,wg=new ee(0,0,0),Ag=new ee(1,1,1),si=new ee,Ts=new ee,$t=new ee,ru=new yt,su=new os;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rg=0;const au=new ee,Ji=new os,On=new yt,bs=new ee,Fr=new ee,Cg=new ee,Pg=new os,ou=new ee(1,0,0),lu=new ee(0,1,0),cu=new ee(0,0,1),uu={type:"added"},Dg={type:"removed"},Qi={type:"childadded",child:null},ro={type:"childremoved",child:null};class Jt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new ee,t=new Zn,i=new os,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Fr,bs,this.up):On.lookAt(bs,Fr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg),ro.child=e,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new ee(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new ee,Bn=new ee,so=new ee,zn=new ee,er=new ee,tr=new ee,fu=new ee,ao=new ee,oo=new ee,lo=new ee,co=new je,uo=new je,fo=new je;class gn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Bn.subVectors(i,t),so.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Bn),l=pn.dot(so),c=Bn.dot(Bn),u=Bn.dot(so),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return co.setScalar(0),uo.setScalar(0),fo.setScalar(0),co.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,i),fo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(co,s.x),o.addScaledVector(uo,s.y),o.addScaledVector(fo,s.z),o}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Bn.subVectors(e,t),pn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),pn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),tr.subVectors(s,i),ao.subVectors(e,i);const l=er.dot(ao),c=tr.dot(ao);if(l<=0&&c<=0)return t.copy(i);oo.subVectors(e,r);const u=er.dot(oo),h=tr.dot(oo);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(er,o);lo.subVectors(e,s);const f=er.dot(lo),v=tr.dot(lo);if(v>=0&&f<=v)return t.copy(s);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(tr,a);const m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return fu.subVectors(s,r),a=(h-u)/(h-u+(f-v)),t.copy(r).addScaledVector(fu,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=pg(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ho(o,s,e+1/3),this.g=ho(o,s,e),this.b=ho(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return $e.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Xt(Ut.r*255,0,255))*65536+Math.round(Xt(Ut.g*255,0,255))*256+Math.round(Xt(Ut.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=rn){$e.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(ws);const i=$a(ai.h,ws.h,t),r=$a(ai.s,ws.s,t),s=$a(ai.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=wh;let Ug=0;class Da extends Tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=as(),this.name="",this.blending=hr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oo&&(i.blendSrc=this.blendSrc),this.blendDst!==Bo&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jl extends Da{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new ee,As=new He;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=Et,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class Ah extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rh extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vi extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lg=0;const tn=new yt,po=new Jt,nr=new ee,jt=new ls,Nr=new ls,At=new ee;class xi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Rh:Ah)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vi(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(jt.min,Nr.min),jt.expandByPoint(At),At.addVectors(jt.max,Nr.max),jt.expandByPoint(At)):(jt.expandByPoint(Nr.min),jt.expandByPoint(Nr.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),At.add(nr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new ee,l[B]=new ee;const c=new ee,u=new ee,h=new ee,d=new He,f=new He,v=new He,x=new ee,m=new ee;function p(B,E,M){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,B),f.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),v.sub(d);const D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(D),a[B].add(x),a[E].add(x),a[M].add(x),l[B].add(m),l[E].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,E=A.length;B<E;++B){const M=A[B],D=M.start,N=M.count;for(let O=D,j=D+N;O<j;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new ee,S=new ee,G=new ee,C=new ee;function F(B){G.fromBufferAttribute(r,B),C.copy(G);const E=a[B];w.copy(E),w.sub(G.multiplyScalar(G.dot(E))).normalize(),S.crossVectors(C,E);const D=S.dot(l[B])<0?-1:1;o.setXYZW(B,w.x,w.y,w.z,D)}for(let B=0,E=A.length;B<E;++B){const M=A[B],D=M.start,N=M.count;for(let O=D,j=D+N;O<j;O+=3)F(e.getX(O+0)),F(e.getX(O+1)),F(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,h=new ee;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new yt,Ai=new bg,Rs=new Zl,du=new ee,Cs=new ee,Ps=new ee,Ds=new ee,mo=new ee,Us=new ee,pu=new ee,Ls=new ee;class qt extends Jt{constructor(e=new xi,t=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(mo.fromBufferAttribute(h,e),o?Us.addScaledVector(mo,u):Us.addScaledVector(mo.sub(t),u))}t.add(Us)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Rs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Rs,du)===null||Ai.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],A=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,G=w;S<G;S+=3){const C=a.getX(S),F=a.getX(S+1),B=a.getX(S+2);r=Is(this,p,e,i,c,u,h,C,F,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const A=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=Is(this,o,e,i,c,u,h,A,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],A=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,G=w;S<G;S+=3){const C=S,F=S+1,B=S+2;r=Is(this,p,e,i,c,u,h,C,F,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const A=m,w=m+1,S=m+2;r=Is(this,o,e,i,c,u,h,A,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ig(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gi,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:n}}function Is(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Cs),n.getVertexPosition(l,Ps),n.getVertexPosition(c,Ds);const u=Ig(n,e,t,i,Cs,Ps,Ds,pu);if(u){const h=new ee;gn.getBarycoord(pu,Cs,Ps,Ds,h),r&&(u.uv=gn.getInterpolatedAttribute(r,a,l,c,h,new He)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,l,c,h,new He)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,h,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new ee,materialIndex:0};gn.getNormal(Cs,Ps,Ds,d.normal),u.face=d,u.barycoord=h}return u}class cs extends xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vi(c,3)),this.setAttribute("normal",new Vi(u,3)),this.setAttribute("uv",new Vi(h,2));function v(x,m,p,A,w,S,G,C,F,B,E){const M=S/F,D=G/B,N=S/2,O=G/2,j=C/2,oe=F+1,$=B+1;let re=0,K=0;const me=new ee;for(let ae=0;ae<$;ae++){const le=ae*D-O;for(let ge=0;ge<oe;ge++){const ye=ge*M-N;me[x]=ye*A,me[m]=le*w,me[p]=j,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=C>0?1:-1,u.push(me.x,me.y,me.z),h.push(ge/F),h.push(1-ae/B),re+=1}}for(let ae=0;ae<B;ae++)for(let le=0;le<F;le++){const ge=d+le+oe*ae,ye=d+le+oe*(ae+1),te=d+(le+1)+oe*(ae+1),se=d+(le+1)+oe*ae;l.push(ge,ye,se),l.push(ye,te,se),K+=6}a.addGroup(f,K,E),f+=K,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Fg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ch(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Ng={clone:Mr,merge:Nt};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Da{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ph extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new ee,mu=new He,gu=new He;class mn extends Ph{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class zg extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new mn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new mn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new mn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new mn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new mn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dh extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hg extends Ke{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cs(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:hi});s.uniforms.tEquirect.value=t;const o=new qt(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=mt),new zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const go=new ee,Gg=new ee,Vg=new Xe;class Ui{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=go.subVectors(i,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(go),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vg.getNormalMatrix(e),r=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Zl,Fs=new ee;class Uh{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],v=r[9],x=r[10],m=r[11],p=r[12],A=r[13],w=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-f,S-p).normalize(),i[1].setComponents(l+s,d+c,m+f,S+p).normalize(),i[2].setComponents(l+o,d+u,m+v,S+A).normalize(),i[3].setComponents(l-o,d-u,m-v,S-A).normalize(),i[4].setComponents(l-a,d-h,m-x,S-w).normalize(),t===qn)i[5].setComponents(l+a,d+h,m+x,S+w).normalize();else if(t===ha)i[5].setComponents(a,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){const v=h[d],x=h[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class _i extends xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*d-o;for(let w=0;w<c;w++){const S=w*h-s;v.push(S,-A,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const w=A+c*p,S=A+c*(p+1),G=A+1+c*(p+1),C=A+1+c*p;f.push(w,S,C),f.push(S,G,C)}this.setIndex(f),this.setAttribute("position",new Vi(v,3)),this.setAttribute("normal",new Vi(x,3)),this.setAttribute("uv",new Vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,d_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:Kg,alphatest_pars_fragment:$g,aomap_fragment:jg,aomap_pars_fragment:Zg,batching_pars_vertex:Jg,batching_vertex:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:f_,color_vertex:h_,common:d_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:v_,emissivemap_pars_fragment:x_,colorspace_fragment:M_,colorspace_pars_fragment:S_,envmap_fragment:y_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:w_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:U_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:F_,lights_toon_fragment:O_,lights_toon_pars_fragment:B_,lights_phong_fragment:z_,lights_phong_pars_fragment:H_,lights_physical_fragment:G_,lights_physical_pars_fragment:V_,lights_fragment_begin:k_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:$_,map_fragment:j_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:rv,morphtarget_pars_vertex:sv,morphtarget_vertex:av,normal_fragment_begin:ov,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:uv,normal_vertex:fv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:_v,packing:vv,premultiplied_alpha_fragment:xv,project_vertex:Mv,dithering_fragment:Sv,dithering_pars_fragment:yv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:wv,shadowmap_vertex:Av,shadowmask_pars_fragment:Rv,skinbase_vertex:Cv,skinning_pars_vertex:Pv,skinning_vertex:Dv,skinnormal_vertex:Uv,specularmap_fragment:Lv,specularmap_pars_fragment:Iv,tonemapping_fragment:Fv,tonemapping_pars_fragment:Nv,transmission_fragment:Ov,transmission_pars_fragment:Bv,uv_pars_fragment:zv,uv_pars_vertex:Hv,uv_vertex:Gv,worldpos_vertex:Vv,background_vert:kv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:Kv,depth_vert:$v,depth_frag:jv,distanceRGBA_vert:Zv,distanceRGBA_frag:Jv,equirect_vert:Qv,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:r0,meshlambert_vert:s0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:u0,meshphong_vert:f0,meshphong_frag:h0,meshphysical_vert:d0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:v0,shadow_vert:x0,shadow_frag:M0,sprite_vert:S0,sprite_frag:y0},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wn={basic:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Nt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Nt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Nt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Nt([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Nt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Nt([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Nt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Nt([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Nt([Me.common,Me.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Nt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:Nt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ns={r:0,b:0,g:0},Ci=new Zn,E0=new yt;function T0(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function v(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?t:e).get(w)),w}function x(A){let w=!1;const S=v(A);S===null?p(a,l):S&&S.isColor&&(p(S,1),w=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,w){const S=v(w);S&&(S.isCubeTexture||S.mapping===Ca)?(u===void 0&&(u=new qt(new cs(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Mr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(G,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ci.copy(w.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Ci)),u.material.toneMapped=$e.getTransfer(S.colorSpace)!==ot,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qt(new _i(2,2),new Mt({name:"BackgroundMaterial",uniforms:Mr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$e.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,w){A.getRGB(Ns,Ch(n)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:x,addToRenderList:m}}function b0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,D,N,O,j){let oe=!1;const $=h(O,N,D);s!==$&&(s=$,c(s.object)),oe=f(M,O,N,j),oe&&v(M,O,N,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,S(M,D,N,O),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,D,N){const O=N.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let oe=j[D.id];oe===void 0&&(oe={},j[D.id]=oe);let $=oe[O];return $===void 0&&($=d(l()),oe[O]=$),$}function d(M){const D=[],N=[],O=[];for(let j=0;j<t;j++)D[j]=0,N[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,D,N,O){const j=s.attributes,oe=D.attributes;let $=0;const re=N.getAttributes();for(const K in re)if(re[K].location>=0){const ae=j[K];let le=oe[K];if(le===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;$++}return s.attributesNum!==$||s.index!==O}function v(M,D,N,O){const j={},oe=D.attributes;let $=0;const re=N.getAttributes();for(const K in re)if(re[K].location>=0){let ae=oe[K];ae===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),j[K]=le,$++}s.attributes=j,s.attributesNum=$,s.index=O}function x(){const M=s.newAttributes;for(let D=0,N=M.length;D<N;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const N=s.newAttributes,O=s.enabledAttributes,j=s.attributeDivisors;N[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),j[M]!==D&&(n.vertexAttribDivisor(M,D),j[M]=D)}function A(){const M=s.newAttributes,D=s.enabledAttributes;for(let N=0,O=D.length;N<O;N++)D[N]!==M[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function w(M,D,N,O,j,oe,$){$===!0?n.vertexAttribIPointer(M,D,N,j,oe):n.vertexAttribPointer(M,D,N,O,j,oe)}function S(M,D,N,O){x();const j=O.attributes,oe=N.getAttributes(),$=D.defaultAttributeValues;for(const re in oe){const K=oe[re];if(K.location>=0){let me=j[re];if(me===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ae=me.normalized,le=me.itemSize,ge=e.get(me);if(ge===void 0)continue;const ye=ge.buffer,te=ge.type,se=ge.bytesPerElement,xe=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===Xl;if(me.isInterleavedBufferAttribute){const de=me.data,Ae=de.stride,Re=me.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<K.locationSize;Oe++)p(K.location+Oe,de.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<K.locationSize;Oe++)m(K.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Oe=0;Oe<K.locationSize;Oe++)w(K.location+Oe,le/K.locationSize,te,ae,Ae*se,(Re+le/K.locationSize*Oe)*se,xe)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<K.locationSize;de++)p(K.location+de,me.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<K.locationSize;de++)m(K.location+de);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let de=0;de<K.locationSize;de++)w(K.location+de,le/K.locationSize,te,ae,le*se,le/K.locationSize*de*se,xe)}}else if($!==void 0){const ae=$[re];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(K.location,ae);break;case 3:n.vertexAttrib3fv(K.location,ae);break;case 4:n.vertexAttrib4fv(K.location,ae);break;default:n.vertexAttrib1fv(K.location,ae)}}}}A()}function G(){B();for(const M in i){const D=i[M];for(const N in D){const O=D[N];for(const j in O)u(O[j].object),delete O[j];delete D[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const N in D){const O=D[N];for(const j in O)u(O[j].object),delete O[j];delete D[N]}delete i[M.id]}function F(M){for(const D in i){const N=i[D];if(N[M.id]===void 0)continue;const O=N[M.id];for(const j in O)u(O[j].object),delete O[j];delete N[M.id]}}function B(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:E,dispose:G,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function w0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*d[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==pt&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const B=F===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==jn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Et&&!B)}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:G,maxSamples:C}}function R0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,w=A*4;let S=p.clippingState||null;l.value=S,S=u(v,d,w,f);for(let G=0;G!==w;++G)S[G]=t[G];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=f+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=f;w!==x;++w,S+=4)o.copy(h[w]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function C0(n){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=gr:a===Yo&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===Yo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class br extends Ph{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,_u=[.125,.215,.35,.446,.526,.582],Ni=20,_o=new br,vu=new et;let vo=null,xo=0,Mo=0,So=!1;const Li=(1+Math.sqrt(5))/2,sr=1/Li,xu=[new ee(-Li,sr,0),new ee(Li,sr,0),new ee(-sr,0,Li),new ee(sr,0,Li),new ee(0,Li,-sr),new ee(0,Li,sr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,xo,Mo),this._renderer.xr.enabled=So,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:yr,format:pt,colorSpace:Er,depthBuffer:!1},r=Su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(s)),this._blurMaterial=D0(s,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,i,r){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vu),u.toneMapping=di,u.autoClear=!1;const f=new Jl({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new qt(new cs,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(vu),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Os(r,A*w,p>2?w:0,w,w),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(r-s-1)%xu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let A=0;for(let F=0;F<Ni;++F){const B=F/x,E=Math.exp(-B*B/2);p.push(E),F===0?A+=E:F<m&&(A+=2*E)}for(let F=0;F<p.length;F++)p[F]=p[F]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-i;const S=this._sizeLods[r],G=3*S*(r>w-lr?r-w+lr:0),C=4*(this._cubeSize-S);Os(t,G,C,3*S,2*S),l.setRenderTarget(t),l.render(h,_o)}}function P0(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+_u.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-lr?l=_u[o-n+lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,x=3,m=2,p=1,A=new Float32Array(x*v*f),w=new Float32Array(m*v*f),S=new Float32Array(p*v*f);for(let C=0;C<f;C++){const F=C%3*2/3-1,B=C>2?0:-1,E=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];A.set(E,x*v*C),w.set(d,m*v*C);const M=[C,C,C,C,C,C];S.set(M,p*v*C)}const G=new xi;G.setAttribute("position",new on(A,x)),G.setAttribute("uv",new on(w,m)),G.setAttribute("faceIndex",new on(S,p)),e.push(G),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Su(n,e,t){const i=new Ke(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function D0(n,e,t){const i=new Float32Array(Ni),r=new ee(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function yu(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Eu(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===Yo,u=l===gr||l===_r;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Mu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Mu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function L0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function I0(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const v in f){const x=f[v];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,v=h.attributes.position;let x=0;if(f!==null){const A=f.array;x=f.version;for(let w=0,S=A.length;w<S;w+=3){const G=A[w+0],C=A[w+1],F=A[w+2];d.push(G,C,C,F,F,G)}}else if(v!==void 0){const A=v.array;x=v.version;for(let w=0,S=A.length/3-1;w<S;w+=3){const G=w+0,C=w+1,F=w+2;d.push(G,C,C,F,F,G)}}else return;const m=new(yh(d)?Rh:Ah)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function F0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,v){v!==0&&(n.drawElementsInstanced(i,f,s,d*o,v),t.update(f,i,v))}function u(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,i,1)}function h(d,f,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,v);let p=0;for(let A=0;A<v;A++)p+=f[A]*x[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function N0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function O0(n,e,t){const i=new WeakMap,r=new je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,G=1;S>e.maxTextureSize&&(G=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*G*4*h),F=new Th(C,S,G,h);F.type=Et,F.needsUpdate=!0;const B=w*4;for(let M=0;M<h;M++){const D=m[M],N=p[M],O=A[M],j=S*G*4*M;for(let oe=0;oe<D.count;oe++){const $=oe*B;f===!0&&(r.fromBufferAttribute(D,oe),C[j+$+0]=r.x,C[j+$+1]=r.y,C[j+$+2]=r.z,C[j+$+3]=0),v===!0&&(r.fromBufferAttribute(N,oe),C[j+$+4]=r.x,C[j+$+5]=r.y,C[j+$+6]=r.z,C[j+$+7]=0),x===!0&&(r.fromBufferAttribute(O,oe),C[j+$+8]=r.x,C[j+$+9]=r.y,C[j+$+10]=r.z,C[j+$+11]=O.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new He(S,G)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function B0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ih extends Rt{constructor(e,t,i,r,s,o,a,l,c,u=dr){if(u!==dr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===dr&&(i=ki),i===void 0&&u===xr&&(i=vr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fh=new Rt,Tu=new Ih(1,1),Nh=new Th,Oh=new Eg,Bh=new Dh,bu=[],wu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ua(n,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function k0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Cu.set(i),n.uniformMatrix2fv(this.addr,!1,Cu),wt(t,i)}}function W0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),wt(t,i)}}function X0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Au.set(i),n.uniformMatrix4fv(this.addr,!1,Au),wt(t,i)}}function q0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=Sh,s=Tu):s=Fh,t.setTexture2D(e||s,r)}function tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Oh,r)}function nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bh,r)}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nh,r)}function rx(n){switch(n){case 5126:return z0;case 35664:return H0;case 35665:return G0;case 35666:return V0;case 35674:return k0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return K0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(n,e){n.uniform1fv(this.addr,e)}function ax(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function ox(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function lx(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function cx(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ux(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fx(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hx(n,e){n.uniform1iv(this.addr,e)}function dx(n,e){n.uniform2iv(this.addr,e)}function px(n,e){n.uniform3iv(this.addr,e)}function mx(n,e){n.uniform4iv(this.addr,e)}function gx(n,e){n.uniform1uiv(this.addr,e)}function _x(n,e){n.uniform2uiv(this.addr,e)}function vx(n,e){n.uniform3uiv(this.addr,e)}function xx(n,e){n.uniform4uiv(this.addr,e)}function Mx(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fh,s[o])}function Sx(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Oh,s[o])}function yx(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bh,s[o])}function Ex(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nh,s[o])}function Tx(n){switch(n){case 5126:return sx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return hx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Ex}}class bx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}}class wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function Rx(n,e,t){const i=n.name,r=i.length;for(yo.lastIndex=0;;){const s=yo.exec(i),o=yo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pu(t,c===void 0?new bx(a,n,e):new wx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ax(a),Pu(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cx=37297;let Px=0;function Dx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Uu=new Xe;function Ux(n){$e._getMatrix(Uu,$e.workingColorSpace,n);const e=`mat3( ${Uu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dx(n.getShaderSource(e),o)}else return r}function Lx(n,e){const t=Ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ix(n,e){let t;switch(e){case $m:t="Linear";break;case jm:t="Reinhard";break;case Zm:t="Cineon";break;case Jm:t="ACESFilmic";break;case eg:t="AgX";break;case tg:t="Neutral";break;case Qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new ee;function Fx(){$e.getLuminanceCoefficients(Bs);const n=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Ox(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hr(n){return n!==""}function Iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(zx,Gx)}const Hx=new Map;function Gx(n,e){let t=qe[e];if(t===void 0){const i=Hx.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(Vx,kx)}function kx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Ym:e="ENVMAP_BLENDING_MIX";break;case Km:e="ENVMAP_BLENDING_ADD";break}return e}function Kx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $x(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wx(t),c=Xx(t),u=qx(t),h=Yx(t),d=Kx(t),f=Nx(t),v=Ox(s),x=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?qe.tonemapping_pars_fragment:"",t.toneMapping!==di?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=El(o),o=Iu(o,t),o=Fu(o,t),a=El(a),a=Iu(a,t),a=Fu(a,t),o=Nu(o),a=Nu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+m+o,S=A+p+a,G=Du(r,r.VERTEX_SHADER,w),C=Du(r,r.FRAGMENT_SHADER,S);r.attachShader(x,G),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(G).trim(),j=r.getShaderInfoLog(C).trim();let oe=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,G,C);else{const re=Lu(r,G,"vertex"),K=Lu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+re+`
`+K)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||j==="")&&($=!1);$&&(D.diagnostics={runnable:oe,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(G),r.deleteShader(C),B=new ea(r,x),E=Bx(r,x)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Cx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=G,this.fragmentShader=C,this}let jx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jx(e),t.set(e,i)),i}}class Jx{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function Qx(n,e,t,i,r,s,o){const a=new bh,l=new Zx,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,N,O){const j=N.fog,oe=O.geometry,$=E.isMeshStandardMaterial?N.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),K=re&&re.mapping===Ca?re.image.height:null,me=v[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ae=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,le=ae!==void 0?ae.length:0;let ge=0;oe.morphAttributes.position!==void 0&&(ge=1),oe.morphAttributes.normal!==void 0&&(ge=2),oe.morphAttributes.color!==void 0&&(ge=3);let ye,te,se,xe;if(me){const at=wn[me];ye=at.vertexShader,te=at.fragmentShader}else ye=E.vertexShader,te=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const de=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,lt=!!E.map,b=!!E.matcap,L=!!re,T=!!E.aoMap,P=!!E.lightMap,U=!!E.bumpMap,I=!!E.normalMap,H=!!E.displacementMap,ne=!!E.emissiveMap,X=!!E.metalnessMap,_=!!E.roughnessMap,g=E.anisotropy>0,R=E.clearcoat>0,W=E.dispersion>0,Y=E.iridescence>0,q=E.sheen>0,he=E.transmission>0,ce=g&&!!E.anisotropyMap,pe=R&&!!E.clearcoatMap,Le=R&&!!E.clearcoatNormalMap,fe=R&&!!E.clearcoatRoughnessMap,Se=Y&&!!E.iridescenceMap,Ie=Y&&!!E.iridescenceThicknessMap,Ne=q&&!!E.sheenColorMap,ve=q&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ge=!!E.specularColorMap,st=!!E.specularIntensityMap,z=he&&!!E.transmissionMap,Ee=he&&!!E.thicknessMap,ie=!!E.gradientMap,ue=!!E.alphaMap,we=E.alphaTest>0,Te=!!E.alphaHash,ke=!!E.extensions;let _t=di;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Pt={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:te,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:lt,matcap:b,envMap:L,envMapMode:L&&re.mapping,envMapCubeUVHeight:K,aoMap:T,lightMap:P,bumpMap:U,normalMap:I,displacementMap:d&&H,emissiveMap:ne,normalMapObjectSpace:I&&E.normalMapType===ag,normalMapTangentSpace:I&&E.normalMapType===sg,metalnessMap:X,roughnessMap:_,anisotropy:g,anisotropyMap:ce,clearcoat:R,clearcoatMap:pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:W,iridescence:Y,iridescenceMap:Se,iridescenceThicknessMap:Ie,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:Ge,specularIntensityMap:st,transmission:he,transmissionMap:z,thicknessMap:Ee,gradientMap:ie,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Te,combine:E.combine,mapUv:lt&&x(E.map.channel),aoMapUv:T&&x(E.aoMap.channel),lightMapUv:P&&x(E.lightMap.channel),bumpMapUv:U&&x(E.bumpMap.channel),normalMapUv:I&&x(E.normalMap.channel),displacementMapUv:H&&x(E.displacementMap.channel),emissiveMapUv:ne&&x(E.emissiveMap.channel),metalnessMapUv:X&&x(E.metalnessMap.channel),roughnessMapUv:_&&x(E.roughnessMap.channel),anisotropyMapUv:ce&&x(E.anisotropyMap.channel),clearcoatMapUv:pe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(E.sheenRoughnessMap.channel),specularMapUv:Be&&x(E.specularMap.channel),specularColorMapUv:Ge&&x(E.specularColorMap.channel),specularIntensityMapUv:st&&x(E.specularIntensityMap.channel),transmissionMapUv:z&&x(E.transmissionMap.channel),thicknessMapUv:Ee&&x(E.thicknessMap.channel),alphaMapUv:ue&&x(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(I||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!oe.attributes.uv&&(lt||ue),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:O.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(M,E),w(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function A(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function w(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=v[E.type];let D;if(M){const N=wn[M];D=Ng.clone(N.uniforms)}else D=E.uniforms;return D}function G(E,M){let D;for(let N=0,O=u.length;N<O;N++){const j=u[N];if(j.cacheKey===M){D=j,++D.usedTimes;break}}return D===void 0&&(D=new $x(n,M,E,s),u.push(D)),D}function C(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function F(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:G,releaseProgram:C,releaseShaderCache:F,programs:u,dispose:B}}function eM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function tM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,v,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,v,x,m){const p=o(h,d,f,v,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,v,x,m){const p=o(h,d,f,v,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||tM),i.length>1&&i.sort(d||Bu),r.length>1&&r.sort(d||Bu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function nM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zu,n.set(i,[o])):r>=s.length?(o=new zu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new et};break;case"SpotLight":t={position:new ee,direction:new ee,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function rM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){const e=new iM,t=rM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const r=new ee,s=new yt,o=new yt;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,v=0,x=0,m=0,p=0,A=0,w=0,S=0,G=0,C=0,F=0;c.sort(aM);for(let E=0,M=c.length;E<M;E++){const D=c[E],N=D.color,O=D.intensity,j=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*O,h+=N.g*O,d+=N.b*O;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],O);F++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const re=D.shadow,K=t.get(D);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=oe,i.directionalShadowMatrix[f]=D.shadow.matrix,A++}i.directional[f]=$,f++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(N).multiplyScalar(O),$.distance=j,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[x]=$;const re=D.shadow;if(D.map&&(i.spotLightMap[G]=D.map,G++,re.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=re.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=oe,S++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(N).multiplyScalar(O),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const re=D.shadow,K=t.get(D);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,K.shadowCameraNear=re.camera.near,K.shadowCameraFar=re.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=oe,i.pointShadowMatrix[v]=D.shadow.matrix,w++}i.point[v]=$,v++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(O),$.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==v||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==A||B.numPointShadows!==w||B.numSpotShadows!==S||B.numSpotMaps!==G||B.numLightProbes!==F)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+G-C,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=F,B.directionalLength=f,B.pointLength=v,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=A,B.numPointShadows=w,B.numSpotShadows=S,B.numSpotMaps=G,B.numLightProbes=F,i.version=sM++)}function l(c,u){let h=0,d=0,f=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const w=c[p];if(w.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(w.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Hu(n){const e=new oM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hu(n),e.set(r,[a])):s>=o.length?(a=new Hu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class cM extends Da{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends Da{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dM(n,e,t){let i=new Uh;const r=new He,s=new He,o=new je,a=new cM({depthPacking:rg}),l=new uM,c={},u=t.maxTextureSize,h={[gi]:Yt,[Yt]:gi,[Xn]:Xn},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:fM,fragmentShader:hM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new xi;v.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(C,F,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==Hn&&this.type===Hn,j=p===Hn&&this.type!==Hn;for(let oe=0,$=C.length;oe<$;oe++){const re=C[oe],K=re.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const me=K.getFrameExtents();if(r.multiply(me),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,K.mapSize.y=s.y)),K.map===null||O===!0||j===!0){const le=this.type!==Hn?{minFilter:Ye,magFilter:Ye}:{};K.map!==null&&K.map.dispose(),K.map=new Ke(r.x,r.y,le),K.map.texture.name=re.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const ae=K.getViewportCount();for(let le=0;le<ae;le++){const ge=K.getViewport(le);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(o),K.updateMatrices(re,le),i=K.getFrustum(),S(F,B,K.camera,re,this.type)}K.isPointLightShadow!==!0&&this.type===Hn&&A(K,B),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,D)};function A(C,F){const B=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ke(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(F,null,B,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(F,null,B,f,x,null)}function w(C,F,B,E){let M=null;const D=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=B.isPointLight===!0?l:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const N=M.uuid,O=F.uuid;let j=c[N];j===void 0&&(j={},c[N]=j);let oe=j[O];oe===void 0&&(oe=M.clone(),j[O]=oe,F.addEventListener("dispose",G)),M=oe}if(M.visible=F.visible,M.wireframe=F.wireframe,E===Hn?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:h[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=B}return M}function S(C,F,B,E,M){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const O=e.update(C),j=C.material;if(Array.isArray(j)){const oe=O.groups;for(let $=0,re=oe.length;$<re;$++){const K=oe[$],me=j[K.materialIndex];if(me&&me.visible){const ae=w(C,me,E,M);C.onBeforeShadow(n,C,F,B,O,ae,K),n.renderBufferDirect(B,null,O,ae,C,K),C.onAfterShadow(n,C,F,B,O,ae,K)}}}else if(j.visible){const oe=w(C,j,E,M);C.onBeforeShadow(n,C,F,B,O,oe,null),n.renderBufferDirect(B,null,O,oe,C,null),C.onAfterShadow(n,C,F,B,O,oe,null)}}const N=C.children;for(let O=0,j=N.length;O<j;O++)S(N[O],F,B,E,M)}function G(C){C.target.removeEventListener("dispose",G);for(const B in c){const E=c[B],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const pM={[zo]:Ho,[Go]:Wo,[Vo]:Xo,[mr]:ko,[Ho]:zo,[Wo]:Go,[Xo]:Vo,[ko]:mr};function mM(n,e){function t(){let z=!1;const Ee=new je;let ie=null;const ue=new je(0,0,0,0);return{setMask:function(we){ie!==we&&!z&&(n.colorMask(we,we,we,we),ie=we)},setLocked:function(we){z=we},setClear:function(we,Te,ke,_t,Pt){Pt===!0&&(we*=_t,Te*=_t,ke*=_t),Ee.set(we,Te,ke,_t),ue.equals(Ee)===!1&&(n.clearColor(we,Te,ke,_t),ue.copy(Ee))},reset:function(){z=!1,ie=null,ue.set(-1,0,0,0)}}}function i(){let z=!1,Ee=!1,ie=null,ue=null,we=null;return{setReversed:function(Te){if(Ee!==Te){const ke=e.get("EXT_clip_control");Ee?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const _t=we;we=null,this.setClear(_t)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?de(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Te){ie!==Te&&!z&&(n.depthMask(Te),ie=Te)},setFunc:function(Te){if(Ee&&(Te=pM[Te]),ue!==Te){switch(Te){case zo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case Vo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Wo:n.depthFunc(n.GREATER);break;case Xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){z=Te},setClear:function(Te){we!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),we=Te)},reset:function(){z=!1,ie=null,ue=null,we=null,Ee=!1}}}function r(){let z=!1,Ee=null,ie=null,ue=null,we=null,Te=null,ke=null,_t=null,Pt=null;return{setTest:function(at){z||(at?de(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(at){Ee!==at&&!z&&(n.stencilMask(at),Ee=at)},setFunc:function(at,un,Dn){(ie!==at||ue!==un||we!==Dn)&&(n.stencilFunc(at,un,Dn),ie=at,ue=un,we=Dn)},setOp:function(at,un,Dn){(Te!==at||ke!==un||_t!==Dn)&&(n.stencilOp(at,un,Dn),Te=at,ke=un,_t=Dn)},setLocked:function(at){z=at},setClear:function(at){Pt!==at&&(n.clearStencil(at),Pt=at)},reset:function(){z=!1,Ee=null,ie=null,ue=null,we=null,Te=null,ke=null,_t=null,Pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,A=null,w=null,S=null,G=null,C=null,F=new et(0,0,0),B=0,E=!1,M=null,D=null,N=null,O=null,j=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=re>=2);let me=null,ae={};const le=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),ye=new je().fromArray(le),te=new je().fromArray(ge);function se(z,Ee,ie,ue){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(z,Te),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ie;ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ee+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(mr),U(!1),I(Xc),de(n.CULL_FACE),T(hi);function de(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Ae(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Re(z,Ee){return h[z]!==Ee?(n.bindFramebuffer(z,Ee),h[z]=Ee,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Oe(z,Ee){let ie=f,ue=!1;if(z){ie=d.get(Ee),ie===void 0&&(ie=[],d.set(Ee,ie));const we=z.textures;if(ie.length!==we.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,ke=we.length;Te<ke;Te++)ie[Te]=n.COLOR_ATTACHMENT0+Te;ie.length=we.length,ue=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ie)}function lt(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const b={[Fi]:n.FUNC_ADD,[Pm]:n.FUNC_SUBTRACT,[Dm]:n.FUNC_REVERSE_SUBTRACT};b[Um]=n.MIN,b[Lm]=n.MAX;const L={[Im]:n.ZERO,[Fm]:n.ONE,[Nm]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[Vm]:n.SRC_ALPHA_SATURATE,[Hm]:n.DST_COLOR,[Bm]:n.DST_ALPHA,[Om]:n.ONE_MINUS_SRC_COLOR,[Bo]:n.ONE_MINUS_SRC_ALPHA,[Gm]:n.ONE_MINUS_DST_COLOR,[zm]:n.ONE_MINUS_DST_ALPHA,[km]:n.CONSTANT_COLOR,[Wm]:n.ONE_MINUS_CONSTANT_COLOR,[Xm]:n.CONSTANT_ALPHA,[qm]:n.ONE_MINUS_CONSTANT_ALPHA};function T(z,Ee,ie,ue,we,Te,ke,_t,Pt,at){if(z===hi){x===!0&&(Ae(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),z!==Cm){if(z!==m||at!==E){if((p!==Fi||S!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,S=Fi),at)switch(z){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,w=null,G=null,C=null,F.set(0,0,0),B=0,m=z,E=at}return}we=we||Ee,Te=Te||ie,ke=ke||ue,(Ee!==p||we!==S)&&(n.blendEquationSeparate(b[Ee],b[we]),p=Ee,S=we),(ie!==A||ue!==w||Te!==G||ke!==C)&&(n.blendFuncSeparate(L[ie],L[ue],L[Te],L[ke]),A=ie,w=ue,G=Te,C=ke),(_t.equals(F)===!1||Pt!==B)&&(n.blendColor(_t.r,_t.g,_t.b,Pt),F.copy(_t),B=Pt),m=z,E=!1}function P(z,Ee){z.side===Xn?Ae(n.CULL_FACE):de(n.CULL_FACE);let ie=z.side===Yt;Ee&&(ie=!ie),U(ie),z.blending===hr&&z.transparent===!1?T(hi):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ue=z.stencilWrite;a.setTest(ue),ue&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function I(z){z!==wm?(de(n.CULL_FACE),z!==D&&(z===Xc?n.cullFace(n.BACK):z===Am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=z}function H(z){z!==N&&($&&n.lineWidth(z),N=z)}function ne(z,Ee,ie){z?(de(n.POLYGON_OFFSET_FILL),(O!==Ee||j!==ie)&&(n.polygonOffset(Ee,ie),O=Ee,j=ie)):Ae(n.POLYGON_OFFSET_FILL)}function X(z){z?de(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function _(z){z===void 0&&(z=n.TEXTURE0+oe-1),me!==z&&(n.activeTexture(z),me=z)}function g(z,Ee,ie){ie===void 0&&(me===null?ie=n.TEXTURE0+oe-1:ie=me);let ue=ae[ie];ue===void 0&&(ue={type:void 0,texture:void 0},ae[ie]=ue),(ue.type!==z||ue.texture!==Ee)&&(me!==ie&&(n.activeTexture(ie),me=ie),n.bindTexture(z,Ee||xe[z]),ue.type=z,ue.texture=Ee)}function R(){const z=ae[me];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(z){ye.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ye.copy(z))}function ve(z){te.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function Be(z,Ee){let ie=c.get(Ee);ie===void 0&&(ie=new WeakMap,c.set(Ee,ie));let ue=ie.get(z);ue===void 0&&(ue=n.getUniformBlockIndex(Ee,z.name),ie.set(z,ue))}function Ge(z,Ee){const ue=c.get(Ee).get(z);l.get(Ee)!==ue&&(n.uniformBlockBinding(Ee,ue,z.__bindingPointIndex),l.set(Ee,ue))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,ae={},h={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,A=null,w=null,S=null,G=null,C=null,F=new et(0,0,0),B=0,E=!1,M=null,D=null,N=null,O=null,j=null,ye.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ae,bindFramebuffer:Re,drawBuffers:Oe,useProgram:lt,setBlending:T,setMaterial:P,setFlipSided:U,setCullFace:I,setLineWidth:H,setPolygonOffset:ne,setScissorTest:X,activeTexture:_,bindTexture:g,unbindTexture:R,compressedTexImage2D:W,compressedTexImage3D:Y,texImage2D:Se,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:Ge,texStorage2D:Le,texStorage3D:fe,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ne,viewport:ve,reset:st}}function Gu(n,e,t,i){const r=gM(i);switch(t){case ph:return n*e;case gh:return n*e;case _h:return n*e*2;case vh:return n*e/r.components*r.byteLength;case Kl:return n*e/r.components*r.byteLength;case xh:return n*e*2/r.components*r.byteLength;case $l:return n*e*2/r.components*r.byteLength;case mh:return n*e*3/r.components*r.byteLength;case pt:return n*e*4/r.components*r.byteLength;case jl:return n*e*4/r.components*r.byteLength;case $s:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Qo:return Math.max(n,16)*Math.max(e,8)/4;case jo:case Jo:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qs:case _l:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mh:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gM(n){switch(n){case jn:case fh:return{byteLength:1,components:1};case ns:case hh:case yr:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case ki:case Xl:case Et:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function _M(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,g){return f?new OffscreenCanvas(_,g):da("canvas")}function x(_,g,R){let W=1;const Y=X(_);if((Y.width>R||Y.height>R)&&(W=R/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const q=Math.floor(W*Y.width),he=Math.floor(W*Y.height);h===void 0&&(h=v(q,he));const ce=g?v(q,he):h;return ce.width=q,ce.height=he,ce.getContext("2d").drawImage(_,0,0,q,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+q+"x"+he+")."),ce}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),_;return _}function m(_){return _.generateMipmaps}function p(_){n.generateMipmap(_)}function A(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(_,g,R,W,Y=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let q=g;if(g===n.RED&&(R===n.FLOAT&&(q=n.R32F),R===n.HALF_FLOAT&&(q=n.R16F),R===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.R8UI),R===n.UNSIGNED_SHORT&&(q=n.R16UI),R===n.UNSIGNED_INT&&(q=n.R32UI),R===n.BYTE&&(q=n.R8I),R===n.SHORT&&(q=n.R16I),R===n.INT&&(q=n.R32I)),g===n.RG&&(R===n.FLOAT&&(q=n.RG32F),R===n.HALF_FLOAT&&(q=n.RG16F),R===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RG8UI),R===n.UNSIGNED_SHORT&&(q=n.RG16UI),R===n.UNSIGNED_INT&&(q=n.RG32UI),R===n.BYTE&&(q=n.RG8I),R===n.SHORT&&(q=n.RG16I),R===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RGB8UI),R===n.UNSIGNED_SHORT&&(q=n.RGB16UI),R===n.UNSIGNED_INT&&(q=n.RGB32UI),R===n.BYTE&&(q=n.RGB8I),R===n.SHORT&&(q=n.RGB16I),R===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),R===n.UNSIGNED_INT&&(q=n.RGBA32UI),R===n.BYTE&&(q=n.RGBA8I),R===n.SHORT&&(q=n.RGBA16I),R===n.INT&&(q=n.RGBA32I)),g===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),g===n.RGBA){const he=Y?Pa:$e.getTransfer(W);R===n.FLOAT&&(q=n.RGBA32F),R===n.HALF_FLOAT&&(q=n.RGBA16F),R===n.UNSIGNED_BYTE&&(q=he===ot?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(_,g){let R;return _?g===null||g===ki||g===vr?R=n.DEPTH24_STENCIL8:g===Et?R=n.DEPTH32F_STENCIL8:g===ns&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ki||g===vr?R=n.DEPTH_COMPONENT24:g===Et?R=n.DEPTH_COMPONENT32F:g===ns&&(R=n.DEPTH_COMPONENT16),R}function G(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ye&&_.minFilter!==mt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function C(_){const g=_.target;g.removeEventListener("dispose",C),B(g),g.isVideoTexture&&u.delete(g)}function F(_){const g=_.target;g.removeEventListener("dispose",F),M(g)}function B(_){const g=i.get(_);if(g.__webglInit===void 0)return;const R=_.source,W=d.get(R);if(W){const Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(_),Object.keys(W).length===0&&d.delete(R)}i.remove(_)}function E(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const R=_.source,W=d.get(R);delete W[g.__cacheKey],o.memory.textures--}function M(_){const g=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const R=_.textures;for(let W=0,Y=R.length;W<Y;W++){const q=i.get(R[W]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(R[W])}i.remove(_)}let D=0;function N(){D=0}function O(){const _=D;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),D+=1,_}function j(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function oe(_,g){const R=i.get(_);if(_.isVideoTexture&&H(_),_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){const W=_.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(R,_,g);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function $(_,g){const R=i.get(_);if(_.version>0&&R.__version!==_.version){te(R,_,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function re(_,g){const R=i.get(_);if(_.version>0&&R.__version!==_.version){te(R,_,g);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function K(_,g){const R=i.get(_);if(_.version>0&&R.__version!==_.version){se(R,_,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const me={[Ko]:n.REPEAT,[xt]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ae={[Ye]:n.NEAREST,[ng]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[mt]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},le={[og]:n.NEVER,[dg]:n.ALWAYS,[lg]:n.LESS,[Sh]:n.LEQUAL,[cg]:n.EQUAL,[hg]:n.GEQUAL,[ug]:n.GREATER,[fg]:n.NOTEQUAL};function ge(_,g){if(g.type===Et&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===mt||g.magFilter===Ya||g.magFilter===vs||g.magFilter===Bi||g.minFilter===mt||g.minFilter===Ya||g.minFilter===vs||g.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,me[g.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ae[g.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ye||g.minFilter!==vs&&g.minFilter!==Bi||g.type===Et&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ye(_,g){let R=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let Y=d.get(W);Y===void 0&&(Y={},d.set(W,Y));const q=j(g);if(q!==_.__cacheKey){Y[q]===void 0&&(Y[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),Y[q].usedTimes++;const he=Y[_.__cacheKey];he!==void 0&&(Y[_.__cacheKey].usedTimes--,he.usedTimes===0&&E(g)),_.__cacheKey=q,_.__webglTexture=Y[q].texture}return R}function te(_,g,R){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const Y=ye(_,g),q=g.source;t.bindTexture(W,_.__webglTexture,n.TEXTURE0+R);const he=i.get(q);if(q.version!==he.__version||Y===!0){t.activeTexture(n.TEXTURE0+R);const ce=$e.getPrimaries($e.workingColorSpace),pe=g.colorSpace===ci?null:$e.getPrimaries(g.colorSpace),Le=g.colorSpace===ci||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=x(g.image,!1,r.maxTextureSize);fe=ne(g,fe);const Se=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let Ne=w(g.internalFormat,Se,Ie,g.colorSpace,g.isVideoTexture);ge(W,g);let ve;const Be=g.mipmaps,Ge=g.isVideoTexture!==!0,st=he.__version===void 0||Y===!0,z=q.dataReady,Ee=G(g,fe);if(g.isDepthTexture)Ne=S(g.format===xr,g.type),st&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ne,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Se,Ie,null));else if(g.isDataTexture)if(Be.length>0){Ge&&st&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Be[0].width,Be[0].height);for(let ie=0,ue=Be.length;ie<ue;ie++)ve=Be[ie],Ge?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Ne,ve.width,ve.height,0,Se,Ie,ve.data);g.generateMipmaps=!1}else Ge?(st&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,fe.width,fe.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Se,Ie,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Se,Ie,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,Be[0].width,Be[0].height,fe.depth);for(let ie=0,ue=Be.length;ie<ue;ie++)if(ve=Be[ie],g.format!==pt)if(Se!==null)if(Ge){if(z)if(g.layerUpdates.size>0){const we=Gu(ve.width,ve.height,g.format,g.type);for(const Te of g.layerUpdates){const ke=ve.data.subarray(Te*we/ve.data.BYTES_PER_ELEMENT,(Te+1)*we/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Te,ve.width,ve.height,1,Se,ke)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,fe.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ne,ve.width,ve.height,fe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,fe.depth,Se,Ie,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ne,ve.width,ve.height,fe.depth,0,Se,Ie,ve.data)}else{Ge&&st&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Be[0].width,Be[0].height);for(let ie=0,ue=Be.length;ie<ue;ie++)ve=Be[ie],g.format!==pt?Se!==null?Ge?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Ne,ve.width,ve.height,0,Se,Ie,ve.data)}else if(g.isDataArrayTexture)if(Ge){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,fe.width,fe.height,fe.depth),z)if(g.layerUpdates.size>0){const ie=Gu(fe.width,fe.height,g.format,g.type);for(const ue of g.layerUpdates){const we=fe.data.subarray(ue*ie/fe.data.BYTES_PER_ELEMENT,(ue+1)*ie/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Se,Ie,we)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(g.isData3DTexture)Ge?(st&&t.texStorage3D(n.TEXTURE_3D,Ee,Ne,fe.width,fe.height,fe.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(g.isFramebufferTexture){if(st)if(Ge)t.texStorage2D(n.TEXTURE_2D,Ee,Ne,fe.width,fe.height);else{let ie=fe.width,ue=fe.height;for(let we=0;we<Ee;we++)t.texImage2D(n.TEXTURE_2D,we,Ne,ie,ue,0,Se,Ie,null),ie>>=1,ue>>=1}}else if(Be.length>0){if(Ge&&st){const ie=X(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ie.width,ie.height)}for(let ie=0,ue=Be.length;ie<ue;ie++)ve=Be[ie],Ge?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se,Ie,ve):t.texImage2D(n.TEXTURE_2D,ie,Ne,Se,Ie,ve);g.generateMipmaps=!1}else if(Ge){if(st){const ie=X(fe);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ie.width,ie.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ie,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Se,Ie,fe);m(g)&&p(W),he.__version=q.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function se(_,g,R){if(g.image.length!==6)return;const W=ye(_,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+R);const q=i.get(Y);if(Y.version!==q.__version||W===!0){t.activeTexture(n.TEXTURE0+R);const he=$e.getPrimaries($e.workingColorSpace),ce=g.colorSpace===ci?null:$e.getPrimaries(g.colorSpace),pe=g.colorSpace===ci||he===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Le&&!fe?Se[ue]=x(g.image[ue],!0,r.maxCubemapSize):Se[ue]=fe?g.image[ue].image:g.image[ue],Se[ue]=ne(g,Se[ue]);const Ie=Se[0],Ne=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),Be=w(g.internalFormat,Ne,ve,g.colorSpace),Ge=g.isVideoTexture!==!0,st=q.__version===void 0||W===!0,z=Y.dataReady;let Ee=G(g,Ie);ge(n.TEXTURE_CUBE_MAP,g);let ie;if(Le){Ge&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,Ie.width,Ie.height);for(let ue=0;ue<6;ue++){ie=Se[ue].mipmaps;for(let we=0;we<ie.length;we++){const Te=ie[we];g.format!==pt?Ne!==null?Ge?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Te.width,Te.height,Ne,ve,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Te.width,Te.height,0,Ne,ve,Te.data)}}}else{if(ie=g.mipmaps,Ge&&st){ie.length>0&&Ee++;const ue=X(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){Ge?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ne,ve,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Se[ue].width,Se[ue].height,0,Ne,ve,Se[ue].data);for(let we=0;we<ie.length;we++){const ke=ie[we].image[ue].image;Ge?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,ke.width,ke.height,Ne,ve,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,ke.width,ke.height,0,Ne,ve,ke.data)}}else{Ge?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,ve,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Ne,ve,Se[ue]);for(let we=0;we<ie.length;we++){const Te=ie[we];Ge?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ne,ve,Te.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,Ne,ve,Te.image[ue])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),q.__version=Y.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function xe(_,g,R,W,Y,q){const he=s.convert(R.format,R.colorSpace),ce=s.convert(R.type),pe=w(R.internalFormat,he,ce,R.colorSpace),Le=i.get(g),fe=i.get(R);if(fe.__renderTarget=g,!Le.__hasExternalTextures){const Se=Math.max(1,g.width>>q),Ie=Math.max(1,g.height>>q);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,q,pe,Se,Ie,g.depth,0,he,ce,null):t.texImage2D(Y,q,pe,Se,Ie,0,he,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),I(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,fe.__webglTexture,0,U(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,fe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(_,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,_),g.depthBuffer){const W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,q=S(g.stencilBuffer,Y),he=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=U(g);I(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,_)}else{const W=g.textures;for(let Y=0;Y<W.length;Y++){const q=W[Y],he=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),pe=w(q.internalFormat,he,ce,q.colorSpace),Le=U(g);R&&I(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,pe,g.width,g.height):I(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,pe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const Y=W.__webglTexture,q=U(g);if(g.depthTexture.format===dr)I(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(g.depthTexture.format===xr)I(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Re(_){const g=i.get(_),R=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const W=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ae(g.__webglFramebuffer,_)}else if(R){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),de(g.__webglDepthbuffer[W],_,!1);else{const Y=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),de(g.__webglDepthbuffer,_,!1);else{const W=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(_,g,R){const W=i.get(_);g!==void 0&&xe(W.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Re(_)}function lt(_){const g=_.texture,R=i.get(_),W=i.get(g);_.addEventListener("dispose",F);const Y=_.textures,q=_.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,o.memory.textures++),q){R.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[ce]=[];for(let pe=0;pe<g.mipmaps.length;pe++)R.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else R.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)R.__webglFramebuffer[ce]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(he)for(let ce=0,pe=Y.length;ce<pe;ce++){const Le=i.get(Y[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&I(_)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ce=0;ce<Y.length;ce++){const pe=Y[ce];R.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ce]);const Le=s.convert(pe.format,pe.colorSpace),fe=s.convert(pe.type),Se=w(pe.internalFormat,Le,fe,pe.colorSpace,_.isXRRenderTarget===!0),Ie=U(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Se,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,R.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),de(R.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ge(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)xe(R.__webglFramebuffer[ce][pe],_,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else xe(R.__webglFramebuffer[ce],_,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,pe=Y.length;ce<pe;ce++){const Le=Y[ce],fe=i.get(Le);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),ge(n.TEXTURE_2D,Le),xe(R.__webglFramebuffer,_,Le,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ce=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),ge(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)xe(R.__webglFramebuffer[pe],_,g,n.COLOR_ATTACHMENT0,ce,pe);else xe(R.__webglFramebuffer,_,g,n.COLOR_ATTACHMENT0,ce,0);m(g)&&p(ce),t.unbindTexture()}_.depthBuffer&&Re(_)}function b(_){const g=_.textures;for(let R=0,W=g.length;R<W;R++){const Y=g[R];if(m(Y)){const q=A(_),he=i.get(Y).__webglTexture;t.bindTexture(q,he),p(q),t.unbindTexture()}}}const L=[],T=[];function P(_){if(_.samples>0){if(I(_)===!1){const g=_.textures,R=_.width,W=_.height;let Y=n.COLOR_BUFFER_BIT;const q=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(_),ce=g.length>1;if(ce)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Le=i.get(g[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,R,W,0,0,R,W,Y,n.NEAREST),l===!0&&(L.length=0,T.length=0,L.push(n.COLOR_ATTACHMENT0+pe),_.depthBuffer&&_.resolveDepthBuffer===!1&&(L.push(q),T.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Le=i.get(g[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const g=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function U(_){return Math.min(r.maxSamples,_.samples)}function I(_){const g=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function H(_){const g=o.render.frame;u.get(_)!==g&&(u.set(_,g),_.update())}function ne(_,g){const R=_.colorSpace,W=_.format,Y=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||R!==Er&&R!==ci&&($e.getTransfer(R)===ot?(W!==pt||Y!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}function X(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=oe,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=K,this.rebindTextures=Oe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=I}function vM(n,e){function t(i,r=ci){let s;const o=$e.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.BYTE;if(i===hh)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Et)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===ph)return n.ALPHA;if(i===mh)return n.RGB;if(i===pt)return n.RGBA;if(i===gh)return n.LUMINANCE;if(i===_h)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===vh)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===xh)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===$s||i===js||i===Zs||i===Js)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Zo||i===Jo||i===Qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===el||i===tl)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===il)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ll)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ul)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qs||i===_l||i===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qs)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mh||i===xl||i===Ml||i===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xM extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:SM,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TM extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const x=new EM,m=t.getContextAttributes();let p=null,A=null;const w=[],S=[],G=new He;let C=null;const F=new mn;F.viewport=new je;const B=new mn;B.viewport=new je;const E=[F,B],M=new xM;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=w[te];return se===void 0&&(se=new Eo,w[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=w[te];return se===void 0&&(se=new Eo,w[te]=se),se.getGripSpace()},this.getHand=function(te){let se=w[te];return se===void 0&&(se=new Eo,w[te]=se),se.getHandSpace()};function O(te){const se=S.indexOf(te.inputSource);if(se===-1)return;const xe=w[se];xe!==void 0&&(xe.update(te.inputSource,te.frame,c||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",oe);for(let te=0;te<w.length;te++){const se=S[te];se!==null&&(S[te]=null,w[te].disconnect(se))}D=null,N=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,A=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",j),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Ke(f.framebufferWidth,f.framebufferHeight,{format:pt,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,xe=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?xr:dr,xe=m.stencil?vr:ki);const Ae={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Ke(d.textureWidth,d.textureHeight,{format:pt,type:jn,depthTexture:new Ih(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(te){for(let se=0;se<te.removed.length;se++){const xe=te.removed[se],de=S.indexOf(xe);de>=0&&(S[de]=null,w[de].disconnect(xe))}for(let se=0;se<te.added.length;se++){const xe=te.added[se];let de=S.indexOf(xe);if(de===-1){for(let Re=0;Re<w.length;Re++)if(Re>=S.length){S.push(xe),de=Re;break}else if(S[Re]===null){S[Re]=xe,de=Re;break}if(de===-1)break}const Ae=w[de];Ae&&Ae.connect(xe)}}const $=new ee,re=new ee;function K(te,se,xe){$.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const de=$.distanceTo(re),Ae=se.projectionMatrix.elements,Re=xe.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),lt=Ae[14]/(Ae[10]+1),b=(Ae[9]+1)/Ae[5],L=(Ae[9]-1)/Ae[5],T=(Ae[8]-1)/Ae[0],P=(Re[8]+1)/Re[0],U=Oe*T,I=Oe*P,H=de/(-T+P),ne=H*-T;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ne),te.translateZ(H),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const X=Oe+H,_=lt+H,g=U-ne,R=I+(de-ne),W=b*lt/_*X,Y=L*lt/_*X;te.projectionMatrix.makePerspective(g,R,W,Y,X,_),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let se=te.near,xe=te.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),M.near=B.near=F.near=se,M.far=B.far=F.far=xe,(D!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,N=M.far),F.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,M.layers.mask=F.layers.mask|B.layers.mask;const de=te.parent,Ae=M.cameras;me(M,de);for(let Re=0;Re<Ae.length;Re++)me(Ae[Re],de);Ae.length===2?K(M,F,B):M.projectionMatrix.copy(F.projectionMatrix),ae(te,M,de)};function ae(te,se,xe){xe===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=yl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let le=null;function ge(te,se){if(u=se.getViewerPose(c||o),v=se,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let de=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Re=0;Re<xe.length;Re++){const Oe=xe[Re];let lt=null;if(f!==null)lt=f.getViewport(Oe);else{const L=h.getViewSubImage(d,Oe);lt=L.viewport,Re===0&&(e.setRenderTargetTextures(A,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(A))}let b=E[Re];b===void 0&&(b=new mn,b.layers.enable(Re),b.viewport=new je,E[Re]=b),b.matrix.fromArray(Oe.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Oe.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(lt.x,lt.y,lt.width,lt.height),Re===0&&(M.matrix.copy(b.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(b)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=h.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,r.renderState)}}for(let xe=0;xe<w.length;xe++){const de=S[xe],Ae=w[xe];de!==null&&Ae!==void 0&&Ae.update(de,se,c||o)}le&&le(te,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const ye=new Lh;ye.setAnimationLoop(ge),this.setAnimationLoop=function(te){le=te},this.dispose=function(){}}}const Pi=new Zn,bM=new yt;function wM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ch(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),w=A.envMap,S=A.envMapRotation;w&&(m.envMap.value=w,Pi.copy(S),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(Pi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){const S=w.program;i.uniformBlockBinding(A,S)}function c(A,w){let S=r[A.id];S===void 0&&(v(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",m));const G=w.program;i.updateUBOMapping(A,G);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const w=h();A.__bindingPointIndex=w;const S=n.createBuffer(),G=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,G,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const w=r[A.id],S=A.uniforms,G=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,F=S.length;C<F;C++){const B=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,M=B.length;E<M;E++){const D=B[E];if(f(D,C,E,G)===!0){const N=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let oe=0;oe<O.length;oe++){const $=O[oe],re=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,N+j,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,j),j+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,w,S,G){const C=A.value,F=w+"_"+S;if(G[F]===void 0)return typeof C=="number"||typeof C=="boolean"?G[F]=C:G[F]=C.clone(),!0;{const B=G[F];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return G[F]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function v(A){const w=A.uniforms;let S=0;const G=16;for(let F=0,B=w.length;F<B;F++){const E=Array.isArray(w[F])?w[F]:[w[F]];for(let M=0,D=E.length;M<D;M++){const N=E[M],O=Array.isArray(N.value)?N.value:[N.value];for(let j=0,oe=O.length;j<oe;j++){const $=O[j],re=x($),K=S%G,me=K%re.boundary,ae=K+me;S+=me,ae!==0&&G-ae<re.storage&&(S+=G-ae),N.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=re.storage}}}const C=S%G;return C>0&&(S+=G-C),A.__size=S,A.__cache={},this}function x(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){const w=A.target;w.removeEventListener("dispose",m);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class RM{constructor(e={}){const{canvas:t=mg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let G=!1,C=0,F=0,B=null,E=-1,M=null;const D=new je,N=new je;let O=null;const j=new et(0);let oe=0,$=t.width,re=t.height,K=1,me=null,ae=null;const le=new je(0,0,$,re),ge=new je(0,0,$,re);let ye=!1;const te=new Uh;let se=!1,xe=!1;const de=new yt,Ae=new yt,Re=new ee,Oe=new je,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let b=!1;function L(){return B===null?K:1}let T=i;function P(y,V){return t.getContext(y,V)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Te,!1),T===null){const V="webgl2";if(T=P(V,y),T===null)throw P(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let U,I,H,ne,X,_,g,R,W,Y,q,he,ce,pe,Le,fe,Se,Ie,Ne,ve,Be,Ge,st,z;function Ee(){U=new L0(T),U.init(),Ge=new vM(T,U),I=new A0(T,U,e,Ge),H=new mM(T,U),I.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),ne=new N0(T),X=new eM,_=new _M(T,U,H,X,I,Ge,ne),g=new C0(S),R=new U0(S),W=new kg(T),st=new b0(T,W),Y=new I0(T,W,ne,st),q=new B0(T,Y,W,ne),Ne=new O0(T,I,_),fe=new R0(X),he=new Qx(S,g,R,U,I,st,fe),ce=new wM(S,X),pe=new nM,Le=new lM(U),Ie=new T0(S,g,R,H,q,f,l),Se=new dM(S,q,I),z=new AM(T,ne,I,H),ve=new w0(T,U,ne),Be=new F0(T,U,ne),ne.programs=he.programs,S.capabilities=I,S.extensions=U,S.properties=X,S.renderLists=pe,S.shadowMap=Se,S.state=H,S.info=ne}Ee();const ie=new TM(S,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=U.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=U.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize($,re,!1))},this.getSize=function(y){return y.set($,re)},this.setSize=function(y,V,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,re=V,t.width=Math.floor(y*K),t.height=Math.floor(V*K),J===!0&&(t.style.width=y+"px",t.style.height=V+"px"),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set($*K,re*K).floor()},this.setDrawingBufferSize=function(y,V,J){$=y,re=V,K=J,t.width=Math.floor(y*J),t.height=Math.floor(V*J),this.setViewport(0,0,y,V)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(le)},this.setViewport=function(y,V,J,Q){y.isVector4?le.set(y.x,y.y,y.z,y.w):le.set(y,V,J,Q),H.viewport(D.copy(le).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,V,J,Q){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,V,J,Q),H.scissor(N.copy(ge).multiplyScalar(K).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(y){H.setScissorTest(ye=y)},this.setOpaqueSort=function(y){me=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(y=!0,V=!0,J=!0){let Q=0;if(y){let k=!1;if(B!==null){const _e=B.texture.format;k=_e===jl||_e===$l||_e===Kl}if(k){const _e=B.texture.type,be=_e===jn||_e===ki||_e===ns||_e===vr||_e===ql||_e===Yl,Ce=Ie.getClearColor(),Pe=Ie.getClearAlpha(),ze=Ce.r,We=Ce.g,De=Ce.b;be?(v[0]=ze,v[1]=We,v[2]=De,v[3]=Pe,T.clearBufferuiv(T.COLOR,0,v)):(x[0]=ze,x[1]=We,x[2]=De,x[3]=Pe,T.clearBufferiv(T.COLOR,0,x))}else Q|=T.COLOR_BUFFER_BIT}V&&(Q|=T.DEPTH_BUFFER_BIT),J&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),pe.dispose(),Le.dispose(),X.dispose(),g.dispose(),R.dispose(),q.dispose(),st.dispose(),z.dispose(),he.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ec),ie.removeEventListener("sessionend",tc),Mi.stop()};function ue(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const y=ne.autoReset,V=Se.enabled,J=Se.autoUpdate,Q=Se.needsUpdate,k=Se.type;Ee(),ne.autoReset=y,Se.enabled=V,Se.autoUpdate=J,Se.needsUpdate=Q,Se.type=k}function Te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const V=y.target;V.removeEventListener("dispose",ke),_t(V)}function _t(y){Pt(y),X.remove(y)}function Pt(y){const V=X.get(y).programs;V!==void 0&&(V.forEach(function(J){he.releaseProgram(J)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,J,Q,k,_e){V===null&&(V=lt);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ce=zh(y,V,J,Q,k);H.setMaterial(Q,be);let Pe=J.index,ze=1;if(Q.wireframe===!0){if(Pe=Y.getWireframeAttribute(J),Pe===void 0)return;ze=2}const We=J.drawRange,De=J.attributes.position;let Ze=We.start*ze,ut=(We.start+We.count)*ze;_e!==null&&(Ze=Math.max(Ze,_e.start*ze),ut=Math.min(ut,(_e.start+_e.count)*ze)),Pe!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,Pe.count)):De!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,De.count));const ht=ut-Ze;if(ht<0||ht===1/0)return;st.setup(k,Q,Ce,J,Pe);let Gt,tt=ve;if(Pe!==null&&(Gt=W.get(Pe),tt=Be,tt.setIndex(Gt)),k.isMesh)Q.wireframe===!0?(H.setLineWidth(Q.wireframeLinewidth*L()),tt.setMode(T.LINES)):tt.setMode(T.TRIANGLES);else if(k.isLine){let Ue=Q.linewidth;Ue===void 0&&(Ue=1),H.setLineWidth(Ue*L()),k.isLineSegments?tt.setMode(T.LINES):k.isLineLoop?tt.setMode(T.LINE_LOOP):tt.setMode(T.LINE_STRIP)}else k.isPoints?tt.setMode(T.POINTS):k.isSprite&&tt.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ue=k._multiDrawStarts,Un=k._multiDrawCounts,nt=k._multiDrawCount,fn=Pe?W.get(Pe).bytesPerElement:1,Wi=X.get(Q).currentProgram.getUniforms();for(let Kt=0;Kt<nt;Kt++)Wi.setValue(T,"_gl_DrawID",Kt),tt.render(Ue[Kt]/fn,Un[Kt])}else if(k.isInstancedMesh)tt.renderInstances(Ze,ht,k.count);else if(J.isInstancedBufferGeometry){const Ue=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Un=Math.min(J.instanceCount,Ue);tt.renderInstances(Ze,ht,Un)}else tt.render(Ze,ht)};function at(y,V,J){y.transparent===!0&&y.side===Xn&&y.forceSinglePass===!1?(y.side=Yt,y.needsUpdate=!0,fs(y,V,J),y.side=gi,y.needsUpdate=!0,fs(y,V,J),y.side=Xn):fs(y,V,J)}this.compile=function(y,V,J=null){J===null&&(J=y),p=Le.get(J),p.init(V),w.push(p),J.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),y!==J&&y.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Q=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _e=k.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const Ce=_e[be];at(Ce,J,k),Q.add(Ce)}else at(_e,J,k),Q.add(_e)}),w.pop(),p=null,Q},this.compileAsync=function(y,V,J=null){const Q=this.compile(y,V,J);return new Promise(k=>{function _e(){if(Q.forEach(function(be){X.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){k(y);return}setTimeout(_e,10)}U.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let un=null;function Dn(y){un&&un(y)}function ec(){Mi.stop()}function tc(){Mi.start()}const Mi=new Lh;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(y){un=y,ie.setAnimationLoop(y),y===null?Mi.stop():Mi.start()},ie.addEventListener("sessionstart",ec),ie.addEventListener("sessionend",tc),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,V,B),p=Le.get(y,w.length),p.init(V),w.push(p),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(Ae),xe=this.localClippingEnabled,se=fe.init(this.clippingPlanes,xe),m=pe.get(y,A.length),m.init(),A.push(m),ie.enabled===!0&&ie.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&Ia(_e,V,-1/0,S.sortObjects)}Ia(y,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(me,ae),b=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,b&&Ie.addToRenderList(m,y),this.info.render.frame++,se===!0&&fe.beginShadows();const J=p.state.shadowsArray;Se.render(J,y,V),se===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,k=m.transmissive;if(p.setupLights(),V.isArrayCamera){const _e=V.cameras;if(k.length>0)for(let be=0,Ce=_e.length;be<Ce;be++){const Pe=_e[be];ic(Q,k,y,Pe)}b&&Ie.render(y);for(let be=0,Ce=_e.length;be<Ce;be++){const Pe=_e[be];nc(m,y,Pe,Pe.viewport)}}else k.length>0&&ic(Q,k,y,V),b&&Ie.render(y),nc(m,y,V);B!==null&&(_.updateMultisampleRenderTarget(B),_.updateRenderTargetMipmap(B)),y.isScene===!0&&y.onAfterRender(S,y,V),st.resetDefaultState(),E=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],se===!0&&fe.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ia(y,V,J,Q){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||te.intersectsSprite(y)){Q&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);const be=q.update(y),Ce=y.material;Ce.visible&&m.push(y,be,Ce,J,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||te.intersectsObject(y))){const be=q.update(y),Ce=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){const Pe=be.groups;for(let ze=0,We=Pe.length;ze<We;ze++){const De=Pe[ze],Ze=Ce[De.materialIndex];Ze&&Ze.visible&&m.push(y,be,Ze,J,Oe.z,De)}}else Ce.visible&&m.push(y,be,Ce,J,Oe.z,null)}}const _e=y.children;for(let be=0,Ce=_e.length;be<Ce;be++)Ia(_e[be],V,J,Q)}function nc(y,V,J,Q){const k=y.opaque,_e=y.transmissive,be=y.transparent;p.setupLightsView(J),se===!0&&fe.setGlobalState(S.clippingPlanes,J),Q&&H.viewport(D.copy(Q)),k.length>0&&us(k,V,J),_e.length>0&&us(_e,V,J),be.length>0&&us(be,V,J),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ic(y,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ke(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?yr:jn,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Q.id],be=Q.viewport||D;_e.setSize(be.z,be.w);const Ce=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(j),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),b&&Ie.render(J);const Pe=S.toneMapping;S.toneMapping=di;const ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),se===!0&&fe.setGlobalState(S.clippingPlanes,Q),us(y,J,Q),_.updateMultisampleRenderTarget(_e),_.updateRenderTargetMipmap(_e),U.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let De=0,Ze=V.length;De<Ze;De++){const ut=V[De],ht=ut.object,Gt=ut.geometry,tt=ut.material,Ue=ut.group;if(tt.side===Xn&&ht.layers.test(Q.layers)){const Un=tt.side;tt.side=Yt,tt.needsUpdate=!0,rc(ht,J,Q,Gt,tt,Ue),tt.side=Un,tt.needsUpdate=!0,We=!0}}We===!0&&(_.updateMultisampleRenderTarget(_e),_.updateRenderTargetMipmap(_e))}S.setRenderTarget(Ce),S.setClearColor(j,oe),ze!==void 0&&(Q.viewport=ze),S.toneMapping=Pe}function us(y,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let k=0,_e=y.length;k<_e;k++){const be=y[k],Ce=be.object,Pe=be.geometry,ze=Q===null?be.material:Q,We=be.group;Ce.layers.test(J.layers)&&rc(Ce,V,J,Pe,ze,We)}}function rc(y,V,J,Q,k,_e){y.onBeforeRender(S,V,J,Q,k,_e),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(S,V,J,Q,y,_e),k.transparent===!0&&k.side===Xn&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,S.renderBufferDirect(J,V,Q,k,y,_e),k.side=gi,k.needsUpdate=!0,S.renderBufferDirect(J,V,Q,k,y,_e),k.side=Xn):S.renderBufferDirect(J,V,Q,k,y,_e),y.onAfterRender(S,V,J,Q,k,_e)}function fs(y,V,J){V.isScene!==!0&&(V=lt);const Q=X.get(y),k=p.state.lights,_e=p.state.shadowsArray,be=k.state.version,Ce=he.getParameters(y,k.state,_e,V,J),Pe=he.getProgramCacheKey(Ce);let ze=Q.programs;Q.environment=y.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(y.isMeshStandardMaterial?R:g).get(y.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",ke),ze=new Map,Q.programs=ze);let We=ze.get(Pe);if(We!==void 0){if(Q.currentProgram===We&&Q.lightsStateVersion===be)return ac(y,Ce),We}else Ce.uniforms=he.getUniforms(y),y.onBeforeCompile(Ce,S),We=he.acquireProgram(Ce,Pe),ze.set(Pe,We),Q.uniforms=Ce.uniforms;const De=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=fe.uniform),ac(y,Ce),Q.needsLights=Gh(y),Q.lightsStateVersion=be,Q.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),Q.currentProgram=We,Q.uniformsList=null,We}function sc(y){if(y.uniformsList===null){const V=y.currentProgram.getUniforms();y.uniformsList=ea.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function ac(y,V){const J=X.get(y);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function zh(y,V,J,Q,k){V.isScene!==!0&&(V=lt),_.resetTextureUnits();const _e=V.fog,be=Q.isMeshStandardMaterial?V.environment:null,Ce=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Er,Pe=(Q.isMeshStandardMaterial?R:g).get(Q.envMap||be),ze=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!J.morphAttributes.position,Ze=!!J.morphAttributes.normal,ut=!!J.morphAttributes.color;let ht=di;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ht=S.toneMapping);const Gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tt=Gt!==void 0?Gt.length:0,Ue=X.get(Q),Un=p.state.lights;if(se===!0&&(xe===!0||y!==M)){const Qt=y===M&&Q.id===E;fe.setState(Q,y,Qt)}let nt=!1;Q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Un.state.version||Ue.outputColorSpace!==Ce||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==Pe||Q.fog===!0&&Ue.fog!==_e||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==We||Ue.morphTargets!==De||Ue.morphNormals!==Ze||Ue.morphColors!==ut||Ue.toneMapping!==ht||Ue.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Ue.__version=Q.version);let fn=Ue.currentProgram;nt===!0&&(fn=fs(Q,V,k));let Wi=!1,Kt=!1,Ar=!1;const dt=fn.getUniforms(),xn=Ue.uniforms;if(H.useProgram(fn.program)&&(Wi=!0,Kt=!0,Ar=!0),Q.id!==E&&(E=Q.id,Kt=!0),Wi||M!==y){H.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),_g(de),vg(de),dt.setValue(T,"projectionMatrix",de)):dt.setValue(T,"projectionMatrix",y.projectionMatrix),dt.setValue(T,"viewMatrix",y.matrixWorldInverse);const Qn=dt.map.cameraPosition;Qn!==void 0&&Qn.setValue(T,Re.setFromMatrixPosition(y.matrixWorld)),I.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&dt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Kt=!0,Ar=!0)}if(k.isSkinnedMesh){dt.setOptional(T,k,"bindMatrix"),dt.setOptional(T,k,"bindMatrixInverse");const Qt=k.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),dt.setValue(T,"boneTexture",Qt.boneTexture,_))}k.isBatchedMesh&&(dt.setOptional(T,k,"batchingTexture"),dt.setValue(T,"batchingTexture",k._matricesTexture,_),dt.setOptional(T,k,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",k._indirectTexture,_),dt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",k._colorsTexture,_));const Rr=J.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Ne.update(k,J,fn),(Kt||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,dt.setValue(T,"receiveShadow",k.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(xn.envMap.value=Pe,xn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(xn.envMapIntensity.value=V.environmentIntensity),Kt&&(dt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&Hh(xn,Ar),_e&&Q.fog===!0&&ce.refreshFogUniforms(xn,_e),ce.refreshMaterialUniforms(xn,Q,K,re,p.state.transmissionRenderTarget[y.id]),ea.upload(T,sc(Ue),xn,_)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ea.upload(T,sc(Ue),xn,_),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&dt.setValue(T,"center",k.center),dt.setValue(T,"modelViewMatrix",k.modelViewMatrix),dt.setValue(T,"normalMatrix",k.normalMatrix),dt.setValue(T,"modelMatrix",k.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Qt=Q.uniformsGroups;for(let Qn=0,ei=Qt.length;Qn<ei;Qn++){const oc=Qt[Qn];z.update(oc,fn),z.bind(oc,fn)}}return fn}function Hh(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function Gh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,V,J){X.get(y.texture).__webglTexture=V,X.get(y.depthTexture).__webglTexture=J;const Q=X.get(y);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,V){const J=X.get(y);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,J=0){B=y,C=V,F=J;let Q=!0,k=null,_e=!1,be=!1;if(y){const Pe=X.get(y);if(Pe.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(Pe.__hasExternalTextures)_.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&X.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const We=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(We[V])?k=We[V][J]:k=We[V],_e=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?k=X.get(y).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[J]:k=We,D.copy(y.viewport),N.copy(y.scissor),O=y.scissorTest}else D.copy(le).multiplyScalar(K).floor(),N.copy(ge).multiplyScalar(K).floor(),O=ye;if(H.bindFramebuffer(T.FRAMEBUFFER,k)&&Q&&H.drawBuffers(y,k),H.viewport(D),H.scissor(N),H.setScissorTest(O),_e){const Pe=X.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,J)}else if(be){const Pe=X.get(y.texture),ze=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pe.__webglTexture,J||0,ze)}E=-1},this.readRenderTargetPixels=function(y,V,J,Q,k,_e,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){H.bindFramebuffer(T.FRAMEBUFFER,Ce);try{const Pe=y.texture,ze=Pe.format,We=Pe.type;if(!I.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-Q&&J>=0&&J<=y.height-k&&T.readPixels(V,J,Q,k,Ge.convert(ze),Ge.convert(We),_e)}finally{const Pe=B!==null?X.get(B).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,V,J,Q,k,_e,be){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const Pe=y.texture,ze=Pe.format,We=Pe.type;if(!I.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=y.width-Q&&J>=0&&J<=y.height-k){H.bindFramebuffer(T.FRAMEBUFFER,Ce);const De=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.bufferData(T.PIXEL_PACK_BUFFER,_e.byteLength,T.STREAM_READ),T.readPixels(V,J,Q,k,Ge.convert(ze),Ge.convert(We),0);const Ze=B!==null?X.get(B).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Ze);const ut=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await gg(T,ut,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_e),T.deleteBuffer(De),T.deleteSync(ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,V=null,J=0){y.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1]);const Q=Math.pow(2,-J),k=Math.floor(y.image.width*Q),_e=Math.floor(y.image.height*Q),be=V!==null?V.x:0,Ce=V!==null?V.y:0;_.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,be,Ce,k,_e),H.unbindTexture()},this.copyTextureToTexture=function(y,V,J=null,Q=null,k=0){y.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,y=arguments[1],V=arguments[2],k=arguments[3]||0,J=null);let _e,be,Ce,Pe,ze,We,De,Ze,ut;const ht=y.isCompressedTexture?y.mipmaps[k]:y.image;J!==null?(_e=J.max.x-J.min.x,be=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Pe=J.min.x,ze=J.min.y,We=J.isBox3?J.min.z:0):(_e=ht.width,be=ht.height,Ce=ht.depth||1,Pe=0,ze=0,We=0),Q!==null?(De=Q.x,Ze=Q.y,ut=Q.z):(De=0,Ze=0,ut=0);const Gt=Ge.convert(V.format),tt=Ge.convert(V.type);let Ue;V.isData3DTexture?(_.setTexture3D(V,0),Ue=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(_.setTexture2DArray(V,0),Ue=T.TEXTURE_2D_ARRAY):(_.setTexture2D(V,0),Ue=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const Un=T.getParameter(T.UNPACK_ROW_LENGTH),nt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),fn=T.getParameter(T.UNPACK_SKIP_PIXELS),Wi=T.getParameter(T.UNPACK_SKIP_ROWS),Kt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ht.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ht.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);const Ar=y.isDataArrayTexture||y.isData3DTexture,dt=V.isDataArrayTexture||V.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const xn=X.get(y),Rr=X.get(V),Qt=X.get(xn.__renderTarget),Qn=X.get(Rr.__renderTarget);H.bindFramebuffer(T.READ_FRAMEBUFFER,Qt.__webglFramebuffer),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ei=0;ei<Ce;ei++)Ar&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(y).__webglTexture,k,We+ei),y.isDepthTexture?(dt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(V).__webglTexture,k,ut+ei),T.blitFramebuffer(Pe,ze,_e,be,De,Ze,_e,be,T.DEPTH_BUFFER_BIT,T.NEAREST)):dt?T.copyTexSubImage3D(Ue,k,De,Ze,ut+ei,Pe,ze,_e,be):T.copyTexSubImage2D(Ue,k,De,Ze,ut+ei,Pe,ze,_e,be);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Ue,k,De,Ze,ut,_e,be,Ce,Gt,tt,ht.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Ue,k,De,Ze,ut,_e,be,Ce,Gt,ht.data):T.texSubImage3D(Ue,k,De,Ze,ut,_e,be,Ce,Gt,tt,ht):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,De,Ze,_e,be,Gt,tt,ht.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,De,Ze,ht.width,ht.height,Gt,ht.data):T.texSubImage2D(T.TEXTURE_2D,k,De,Ze,_e,be,Gt,tt,ht);T.pixelStorei(T.UNPACK_ROW_LENGTH,Un),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Kt),k===0&&V.generateMipmaps&&T.generateMipmap(Ue),H.unbindTexture()},this.copyTextureToTexture3D=function(y,V,J=null,Q=null,k=0){return y.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,y=arguments[2],V=arguments[3],k=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,V,J,Q,k)},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),H.unbindTexture()},this.resetState=function(){C=0,F=0,B=null,H.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Sr extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class CM extends Rt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ye,u=Ye,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr extends Rt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const PM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,DM=`
precision highp float;

uniform sampler2D u_texture;
uniform vec2 u_texelSize;
uniform float u_subtransformSize;
uniform float u_normalization;
uniform bool u_isHorizontal;
uniform bool u_isForward;

const float TWOPI = 6.283185307179586;

void main() {
    float index = (u_isHorizontal ? gl_FragCoord.x : gl_FragCoord.y) - 0.5;
    float evenIndex = floor(index / u_subtransformSize) * (u_subtransformSize * 0.5) + mod(index, u_subtransformSize * 0.5) + 0.5;
    vec2 evenPos = (u_isHorizontal ? vec2(evenIndex, gl_FragCoord.y) : vec2(gl_FragCoord.x, evenIndex)) * u_texelSize;
    vec2 oddPos = evenPos + vec2(u_isHorizontal ? 1.0 : 0.0, u_isHorizontal ? 0.0 : 1.0) * 0.5;

    vec4 even = texture2D(u_texture, evenPos);
    vec4 odd = texture2D(u_texture, oddPos);

    float twiddleArgument = (u_isForward ? -TWOPI : TWOPI) * (index / u_subtransformSize);
    vec2 twiddle = vec2(cos(twiddleArgument), sin(twiddleArgument));

    // Two simultaneous complex transforms in RG and BA:
    // (Ar + i Ai) + (Tr + i Ti) * (Br + i Bi) = (Ar + Tr*Br - Ti*Bi) + i(Ai + Ti*Br + Tr*Bi)
    vec4 oddRotated = vec4(
        twiddle.x * odd.xz - twiddle.y * odd.yw,
        twiddle.y * odd.xz + twiddle.x * odd.yw
    ).xzyw;

    gl_FragColor = (even + oddRotated) * u_normalization;
}
`;class UM{constructor(e=512,t=e){Z(this,"width");Z(this,"height");Z(this,"size");Z(this,"passesH");Z(this,"passesV");Z(this,"totalPasses");Z(this,"quadScene");Z(this,"quadCamera");Z(this,"fftMaterial");Z(this,"quadMesh");Z(this,"rtPing");Z(this,"rtPong");if((e&e-1)!==0||(t&t-1)!==0)throw new Error(`StockhamFFT2D: width and height must be powers of two (got ${e}x${t})`);this.width=e,this.height=t,this.size=Math.max(e,t),this.passesH=Math.round(Math.log2(e)),this.passesV=Math.round(Math.log2(t)),this.totalPasses=this.passesH+this.passesV;const i={minFilter:Ye,magFilter:Ye,format:pt,type:Et,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(e,t,i),this.rtPong=new Ke(e,t,i),this.quadScene=new Sr,this.quadCamera=new br(-1,1,1,-1,0,1),this.fftMaterial=new Mt({vertexShader:PM,fragmentShader:DM,uniforms:{u_texture:{value:null},u_texelSize:{value:new He(1/e,1/t)},u_subtransformSize:{value:2},u_normalization:{value:1},u_isHorizontal:{value:!0},u_isForward:{value:!0}},depthTest:!1,depthWrite:!1}),this.quadMesh=new qt(new _i(2,2),this.fftMaterial),this.quadScene.add(this.quadMesh)}execute(e,t,i){let r=this.rtPing,s=this.rtPong;const o=this.fftMaterial.uniforms,a=1/Math.sqrt(this.width),l=1/Math.sqrt(this.height);for(let c=0;c<this.totalPasses;c++){const u=c<this.passesH,h=u?c:c-this.passesH,d=Math.pow(2,h+1);o.u_texture.value=c===0?t:r.texture,o.u_isHorizontal.value=u,o.u_isForward.value=i,o.u_subtransformSize.value=d,o.u_normalization.value=c===0?a:c===this.passesH?l:1,e.setRenderTarget(s),e.render(this.quadScene,this.quadCamera);const f=r;r=s,s=f}return e.setRenderTarget(null),r}benchmark(e,t=100){this.execute(e,this.rtPing.texture,!0),e.setRenderTarget(null);const i=performance.now();for(let f=0;f<t;f++)this.execute(e,this.rtPing.texture,f%2===0);e.getContext().finish();const o=performance.now()-i,a=o/t,l=1e3/a,c=this.size*this.size,u=c*t/(o*1e3),d=20*c*Math.log2(this.size)*t/(o*1e6);return{iterations:t,totalMs:o,avgTimeMs:a,fpsEquivalent:l,throughputMPixelsPerSec:u,gflops:d}}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.fftMaterial.dispose(),this.quadMesh.geometry.dispose()}}class La{constructor(){Z(this,"camera");Z(this,"scene");Z(this,"mesh");this.camera=new br(-1,1,1,-1,0,1),this.camera.matrixAutoUpdate=!1,this.camera.updateMatrixWorld(!0);const e=new xi,t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),i=new Float32Array([0,0,2,0,0,2]);e.setAttribute("position",new on(t,3)),e.setAttribute("uv",new on(i,2)),this.mesh=new qt(e),this.mesh.matrixAutoUpdate=!1,this.mesh.frustumCulled=!1,this.scene=new Sr,this.scene.matrixWorldAutoUpdate=!1,this.scene.add(this.mesh)}render(e,t,i){this.mesh.material=t,e.setRenderTarget(i),e.render(this.scene,this.camera)}dispose(){this.mesh.geometry.dispose()}}const LM=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,IM=`
precision highp float;
precision highp sampler2D;

uniform sampler2D u_texRG;
uniform sampler2D u_texB;
uniform vec2 u_texelSize;
uniform float u_subtransformSize;
uniform float u_normalization;
uniform bool u_isHorizontal;
uniform bool u_isForward;

layout(location = 0) out vec4 outRG;
layout(location = 1) out vec4 outB;

const float TWOPI = 6.283185307179586;

void main() {
    float index = (u_isHorizontal ? gl_FragCoord.x : gl_FragCoord.y) - 0.5;
    float halfSub = u_subtransformSize * 0.5;
    float evenIndex = floor(index / u_subtransformSize) * halfSub + mod(index, halfSub) + 0.5;
    vec2 evenPos = (u_isHorizontal ? vec2(evenIndex, gl_FragCoord.y) : vec2(gl_FragCoord.x, evenIndex)) * u_texelSize;
    vec2 oddPos = evenPos + vec2(u_isHorizontal ? 1.0 : 0.0, u_isHorizontal ? 0.0 : 1.0) * 0.5;

    vec4 evenRG = texture(u_texRG, evenPos);
    vec4 oddRG  = texture(u_texRG, oddPos);
    vec4 evenB  = texture(u_texB, evenPos);
    vec4 oddB   = texture(u_texB, oddPos);

    float twiddleArgument = (u_isForward ? -TWOPI : TWOPI) * (index / u_subtransformSize);
    vec2 twiddle = vec2(cos(twiddleArgument), sin(twiddleArgument));

    // Vectorized complex rotation for Red (RG) and Green (BA)
    vec4 oddRotatedRG = vec4(
        twiddle.x * oddRG.xz - twiddle.y * oddRG.yw,
        twiddle.y * oddRG.xz + twiddle.x * oddRG.yw
    ).xzyw;

    // Vectorized complex rotation for Blue (RG) and Auxiliary 4th Field (BA)
    vec4 oddRotatedB = vec4(
        twiddle.x * oddB.xz - twiddle.y * oddB.yw,
        twiddle.y * oddB.xz + twiddle.x * oddB.yw
    ).xzyw;

    outRG = (evenRG + oddRotatedRG) * u_normalization;
    outB  = (evenB  + oddRotatedB)  * u_normalization;
}
`;class Vu{constructor(e=512,t=e,i,r=Et){Z(this,"width");Z(this,"height");Z(this,"passesH");Z(this,"passesV");Z(this,"totalPasses");Z(this,"runner");Z(this,"fftMaterial");Z(this,"rtPing");Z(this,"rtPong");if((e&e-1)!==0||(t&t-1)!==0)throw new Error(`StockhamFFT2D_RGB: width (${e}) and height (${t}) must be powers of two`);this.width=e,this.height=t,this.passesH=Math.round(Math.log2(e)),this.passesV=Math.round(Math.log2(t)),this.totalPasses=this.passesH+this.passesV;const s={minFilter:Ye,magFilter:Ye,format:pt,type:Et,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(e,t,s),this.rtPong=new Ke(e,t,s),this.runner=i??new La,this.fftMaterial=new Mt({glslVersion:zi,vertexShader:LM,fragmentShader:IM,uniforms:{u_texRG:{value:null},u_texB:{value:null},u_texelSize:{value:new He(1/e,1/t)},u_subtransformSize:{value:2},u_normalization:{value:1},u_isHorizontal:{value:!0},u_isForward:{value:!0}},depthTest:!1,depthWrite:!1})}execute(e,t,i,r){let s=this.rtPing,o=this.rtPong;const a=this.fftMaterial.uniforms,l=1/Math.sqrt(this.width),c=1/Math.sqrt(this.height);for(let u=0;u<this.totalPasses;u++){const h=u<this.passesH,d=h?u:u-this.passesH,f=Math.pow(2,d+1);a.u_texRG.value=u===0?t:s.textures[0],a.u_texB.value=u===0?i:s.textures[1],a.u_isHorizontal.value=h,a.u_isForward.value=r,a.u_subtransformSize.value=f,a.u_normalization.value=u===0?l:u===this.passesH?c:1,this.runner.render(e,this.fftMaterial,o);const v=s;s=o,o=v}return e.setRenderTarget(null),s}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.fftMaterial.dispose(),this.runner.dispose()}}const Hs=8,ku=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,FM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_fieldTex;      // R = E^n (current), G = E^(n-1) (previous)
uniform sampler2D u_materialTex;   // R = n (refractive index), G = sigma (absorption)
uniform sampler2D u_sourceTex;     // Generalized dynamic wave excitation field (touch, multi-touch, impulses)
uniform sampler2D u_coupledWaveTex;// Optical wavefield from FFT
uniform bool u_hasMaterialTex;
uniform bool u_hasSourceTex;
uniform bool u_hasCoupledWave;

uniform vec2 u_texelSize;
uniform float u_dt;
uniform float u_cfl;              // Courant factor Sc (e.g. 0.50)
uniform float u_time;
uniform vec2 u_pmlWidth;
uniform float u_pmlSigmaMax;
uniform vec4 u_pmlSides;           // (left, right, bottom, top): 1.0 = absorbing PML, 0.0 = hard reflective boundary

// Source parameters
uniform int u_sourceType;          // 0 = none, 1 = continuous, 2 = pulse, 3 = coupled
uniform float u_sourceFreq;
uniform float u_sourceAmp;
uniform vec4 u_islandBounds[8];    // (uCenter, vCenter, rxUv, ryUv) matching CSS card bounding half-size
uniform vec3 u_islandState[8];     // (strength [0..1], emerge [0..1], harmonic seed)

void main() {
  vec2 uv = vUv;
  vec4 center = texture2D(u_fieldTex, uv);
  float E_curr = center.r;
  float E_prev = center.g;

  // 1. Medium properties: refractive index n (eps = n^2) and material conductivity sigma
  float n = 1.0;
  float sigma_mat = 0.0;
  if (u_hasMaterialTex) {
    vec4 mat = texture2D(u_materialTex, uv);
    n = max(1.0, mat.r);
    sigma_mat = max(0.0, mat.g * 10.0);
  }

  // 2. 9-Point Isotropic Discrete Laplacian:
  // Orthogonal neighbors (weight 4.0)
  float E_left  = texture2D(u_fieldTex, uv - vec2(u_texelSize.x, 0.0)).r;
  float E_right = texture2D(u_fieldTex, uv + vec2(u_texelSize.x, 0.0)).r;
  float E_down  = texture2D(u_fieldTex, uv - vec2(0.0, u_texelSize.y)).r;
  float E_up    = texture2D(u_fieldTex, uv + vec2(0.0, u_texelSize.y)).r;

  // Diagonal neighbors (weight 1.0)
  float E_dl    = texture2D(u_fieldTex, uv + vec2(-u_texelSize.x, -u_texelSize.y)).r;
  float E_dr    = texture2D(u_fieldTex, uv + vec2( u_texelSize.x, -u_texelSize.y)).r;
  float E_ul    = texture2D(u_fieldTex, uv + vec2(-u_texelSize.x,  u_texelSize.y)).r;
  float E_ur    = texture2D(u_fieldTex, uv + vec2( u_texelSize.x,  u_texelSize.y)).r;

  // Exact 9-point isotropic operator: (4 * cross + 1 * diag - 20 * center) / 6.0
  float laplacian = (
    4.0 * (E_left + E_right + E_down + E_up) +
    1.0 * (E_dl + E_dr + E_ul + E_ur) -
    20.0 * E_curr
  ) * (1.0 / 6.0);

  // 3. Directional Cubic Sponge Absorbing Boundary Layer
  // Left side absorption (uv.x near 0):
  float dist_left   = (max(0.0, u_pmlWidth.x - uv.x) / u_pmlWidth.x) * u_pmlSides.x;
  // Right side absorption (uv.x near 1):
  float dist_right  = (max(0.0, uv.x - (1.0 - u_pmlWidth.x)) / u_pmlWidth.x) * u_pmlSides.y;
  float sigma_pml_x = u_pmlSigmaMax * pow(max(dist_left, dist_right), 3.0);

  // Bottom side absorption (uv.y near 0 - open when can scroll down):
  float dist_bottom = (max(0.0, u_pmlWidth.y - uv.y) / u_pmlWidth.y) * u_pmlSides.z;
  // Top side absorption (uv.y near 1 - open when can scroll up):
  float dist_top    = (max(0.0, uv.y - (1.0 - u_pmlWidth.y)) / u_pmlWidth.y) * u_pmlSides.w;
  float sigma_pml_y = u_pmlSigmaMax * pow(max(dist_bottom, dist_top), 3.0);

  float vacuum_loss = 0.003;
  float total_loss  = vacuum_loss + sigma_mat + (sigma_pml_x + sigma_pml_y);

  // 4. Verlet Time-Stepping Discretization:
  // Wave speed in medium: v = c / n -> (v * dt / dx)^2 = (u_cfl / n)^2
  float c2_dt2 = (u_cfl / n) * (u_cfl / n);
  float gamma = total_loss * u_dt * 0.5;

  // Discrete central difference integration:
  // E_next * (1 + gamma) = 2 * E_curr - E_prev * (1 - gamma) + c2_dt2 * laplacian
  float denom = 1.0 + gamma;
  float E_next = (2.0 * E_curr - (1.0 - gamma) * E_prev + c2_dt2 * laplacian) / denom;

  // 5. Generalized External Source Injection:
  // Reads source term J(x,y) directly from u_sourceTex without any hardcoded coordinates or shapes.
  if (u_hasSourceTex) {
    float srcVal = texture2D(u_sourceTex, uv).r;
    float headroom = srcVal < 0.0 ? clamp(1.0 + E_curr, 0.0, 1.0) : clamp(1.0 - E_curr, 0.0, 1.0);
    E_next += (srcVal * c2_dt2) * headroom;
  }

  // Incident Harmonic Boundary Source (optional)
  float topPmlY = 1.0 - u_pmlWidth.y;
  float srcY = topPmlY - u_texelSize.y * 3.0;
  float distY = abs(uv.y - srcY);
  if (distY < u_texelSize.y * 1.5 && uv.x > u_pmlWidth.x && uv.x < 1.0 - u_pmlWidth.x) {
    float env = smoothstep(u_texelSize.y * 1.5, 0.0, distY);
    if (u_sourceType == 1) {
      E_next += u_sourceAmp * sin(u_time * u_sourceFreq) * env;
    } else if (u_sourceType == 2) {
      float pulse = exp(-pow((u_time - 0.4) * 16.0, 2.0)) * sin(u_time * u_sourceFreq);
      E_next += u_sourceAmp * pulse * env;
    } else if (u_sourceType == 3 && u_hasCoupledWave) {
      float fftField = texture2D(u_coupledWaveTex, uv).r;
      E_next += fftField * u_sourceAmp * sin(u_time * u_sourceFreq) * env;
    }
  }

  // 6. C-infinity Hyperbolic Tangent Soft Limiter (Smooth physical ceiling at 1.0)
  // Maintains strictly linear propagation in [-0.75, +0.75], perfectly smooth saturation at 1.0.
  const float SAT_LIMIT = 1.0;
  E_next = SAT_LIMIT * tanh(E_next / SAT_LIMIT);

  // 7. Independent Per-Card Constant-Override Floating Islands aligned 1:1 with Expanded Super-Ellipse Feather:
  for (int i = 0; i < 8; i++) {
    vec4 ib = u_islandBounds[i];
    vec3 st = u_islandState[i];
    if (st.x <= 0.002 || ib.z <= 0.001 || ib.w <= 0.001) continue;
    vec2 q = abs(uv - ib.xy) / ib.zw;
    if (q.x > 1.35 || q.y > 1.35) continue;
    float superR = pow(pow(q.x, 2.8) + pow(q.y, 2.8), 1.0 / 2.8);
    float smoothEmerge = st.y * st.y * (3.0 - 2.0 * st.y);
    float outerR = mix(0.20, 1.18, smoothEmerge);
    float innerR = max(0.0, outerR - 0.28);
    float islandMask = 1.0 - smoothstep(innerR, outerR, superR);
    float plateauHeight = 0.30 * (st.x * st.x * (3.0 - 2.0 * st.x));
    E_next = mix(E_next, plateauHeight, islandMask);
  }

  // Time sliding window: R = E^(n+1) (new current), G = E^n (new previous)
  gl_FragColor = vec4(E_next, E_curr, 0.0, 1.0);
}
`,NM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_fieldTex;
uniform sampler2D u_materialTex;
uniform bool u_hasMaterialTex;
uniform float u_exposure;
uniform float u_dt;

void main() {
  vec4 field = texture2D(u_fieldTex, vUv);
  float Ez = field.r;
  float Ez_prev = field.g;
  float dE_dt = (Ez - Ez_prev) / max(u_dt, 1e-4);

  float eps = 1.0;
  if (u_hasMaterialTex) {
    float n = max(1.0, texture2D(u_materialTex, vUv).r);
    eps = n * n;
  }

  // High-contrast wave ripples and energy tonemapping
  float wave = abs(Ez) * 5.0;
  float energy = 0.5 * (eps * Ez * Ez + dE_dt * dE_dt * 0.1);
  float tonemapped = 1.0 - exp(-energy * u_exposure);
  float finalTone = max(wave, tonemapped);

  // Dielectric nanopillars microstructure: bright secondary electron SEM contrast & edge emission
  if (u_hasMaterialTex) {
    float mat = texture2D(u_materialTex, vUv).r;
    float matL = texture2D(u_materialTex, vUv - vec2(0.003, 0.0)).r;
    float matR = texture2D(u_materialTex, vUv + vec2(0.003, 0.0)).r;
    float matT = texture2D(u_materialTex, vUv + vec2(0.0, 0.003)).r;
    float edge = abs(mat - matL) + abs(mat - matR) + abs(mat - matT);

    if (mat > 0.1) {
      finalTone = max(finalTone * 0.4 + 0.35, 0.35);
    }
    if (edge > 0.04) {
      finalTone = max(finalTone, 0.88);
    }
  }

  finalTone = clamp(finalTone, 0.0, 1.0);
  gl_FragColor = vec4(vec3(finalTone), 1.0);
}
`;class OM{constructor(e={}){Z(this,"width");Z(this,"height");Z(this,"dt");Z(this,"cfl");Z(this,"pmlCells");Z(this,"pmlSigmaMax");Z(this,"rtE_Ping");Z(this,"rtE_Pong");Z(this,"rtOutput");Z(this,"runner");Z(this,"ownsRunner",!1);Z(this,"matWave");Z(this,"matOut");Z(this,"simTime",0);Z(this,"smoothedSpeed",0);Z(this,"floatType",Et);this.width=e.width??512,this.floatType=e.floatType??Et,this.height=e.height??512,this.pmlCells=e.pmlCells??32,this.pmlSigmaMax=e.pmlSigmaMax??16,this.cfl=Math.min(e.cfl??.5,.7071),this.dt=this.cfl/Math.SQRT2,e.runner?(this.runner=e.runner,this.ownsRunner=!1):(this.runner=new La,this.ownsRunner=!0);const t={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtE_Ping=new Ke(this.width,this.height,t),this.rtE_Pong=new Ke(this.width,this.height,t),this.rtOutput=new Ke(this.width,this.height,t);const i=new He(1/this.width,1/this.height),r=new He(this.pmlCells/this.width,this.pmlCells/this.height);this.matWave=new Mt({vertexShader:ku,fragmentShader:FM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_sourceTex:{value:null},u_coupledWaveTex:{value:null},u_hasMaterialTex:{value:!1},u_hasSourceTex:{value:!1},u_hasCoupledWave:{value:!1},u_texelSize:{value:i},u_dt:{value:this.dt},u_cfl:{value:this.cfl},u_time:{value:0},u_pmlWidth:{value:r},u_pmlSigmaMax:{value:this.pmlSigmaMax},u_pmlSides:{value:new je(1,1,1,1)},u_sourceType:{value:0},u_sourceFreq:{value:20},u_sourceAmp:{value:.25},u_islandBounds:{value:Array.from({length:Hs},()=>new je(.5,.5,0,0))},u_islandState:{value:Array.from({length:Hs},()=>new ee(0,0,0))}},depthTest:!1,depthWrite:!1}),this.matOut=new Mt({vertexShader:ku,fragmentShader:NM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_hasMaterialTex:{value:!1},u_exposure:{value:24},u_dt:{value:this.dt}},depthTest:!1,depthWrite:!1})}reset(e){e.setRenderTarget(this.rtE_Ping),e.clearColor(),e.setRenderTarget(this.rtE_Pong),e.clearColor(),e.setRenderTarget(null)}resize(e,t,i){if(this.width===e&&this.height===t)return;const r=this.rtE_Ping,s=this.rtE_Pong;this.width=e,this.height=t;const o={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},a=new Ke(this.width,this.height,o),l=new Ke(this.width,this.height,o);this.rtOutput.dispose(),this.rtOutput=new Ke(this.width,this.height,o);const c=new Jl({map:r.texture,depthTest:!1,depthWrite:!1}),u=new qt(new _i(2,2),c),h=new br(-1,1,1,-1,0,1),d=new Sr;d.add(u),i.setRenderTarget(a),i.render(d,h),c.map=s.texture,i.setRenderTarget(l),i.render(d,h),i.setRenderTarget(null),c.dispose(),u.geometry.dispose(),r.dispose(),s.dispose(),this.rtE_Ping=a,this.rtE_Pong=l;const f=new He(1/this.width,1/this.height),v=new He(this.pmlCells/this.width,this.pmlCells/this.height);this.matWave.uniforms.u_texelSize.value.copy(f),this.matWave.uniforms.u_pmlWidth.value.copy(v)}step(e,t){const i=t.subSteps??4;this.matWave.uniforms.u_hasMaterialTex.value=!!t.materialTex,this.matWave.uniforms.u_materialTex.value=t.materialTex??null,this.matWave.uniforms.u_hasSourceTex.value=!!t.sourceTex,this.matWave.uniforms.u_sourceTex.value=t.sourceTex??null,this.matWave.uniforms.u_hasCoupledWave.value=!!t.coupledWaveTex,this.matWave.uniforms.u_coupledWaveTex.value=t.coupledWaveTex??null;let r=0;t.sourceType==="continuous"?r=1:t.sourceType==="pulse"?r=2:t.sourceType==="coupled_beam"&&(r=3),this.matWave.uniforms.u_sourceType.value=r,this.matWave.uniforms.u_sourceFreq.value=t.sourceFreq??20,this.matWave.uniforms.u_sourceAmp.value=t.sourceAmp??.25;let s=this.rtE_Ping,o=this.rtE_Pong;for(let a=0;a<i;a++){this.simTime+=this.dt*.14,this.matWave.uniforms.u_time.value=this.simTime,this.matWave.uniforms.u_fieldTex.value=s.texture,this.runner.render(e,this.matWave,o);const l=s;s=o,o=l}return this.rtE_Ping=s,this.rtE_Pong=o,e.setRenderTarget(null),s}renderOutput(e,t=null,i=24){return this.matOut.uniforms.u_fieldTex.value=this.rtE_Ping.texture,this.matOut.uniforms.u_hasMaterialTex.value=!!t,this.matOut.uniforms.u_materialTex.value=t,this.matOut.uniforms.u_exposure.value=i,this.runner.render(e,this.matOut,this.rtOutput),this.rtOutput}setPmlSides(e,t,i,r){this.matWave.uniforms.u_pmlSides.value.set(e,t,i,r)}setCardIslands(e){const t=this.matWave.uniforms.u_islandBounds.value,i=this.matWave.uniforms.u_islandState.value,r=Math.min(Hs,e.length);for(let s=0;s<r;s++){const o=e[s];t[s].set(o.uCenter,o.vCenter,o.rxUv,o.ryUv),i[s].set(o.strength,o.emerge,o.seed??0)}for(let s=r;s<Hs;s++)t[s].set(.5,.5,0,0),i[s].set(0,0,0)}setCardIsland(e,t,i,r,s,o,a=0){s<=.002&&o<=.002?this.setCardIslands([]):this.setCardIslands([{uCenter:e,vCenter:t,rxUv:i,ryUv:r,strength:s,emerge:o,seed:a}])}getEFieldRenderTarget(){return this.rtE_Ping}dispose(){this.rtE_Ping.dispose(),this.rtE_Pong.dispose(),this.rtOutput.dispose(),this.matWave.dispose(),this.matOut.dispose(),this.ownsRunner&&this.runner.dispose()}}const BM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,zM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_prevSource;
uniform float u_decay;         // Exponential temporal dissipation factor [0.0, 1.0]
uniform float u_aspect;        // Domain aspect ratio (width / height)
uniform int u_numStrokes;      // Number of active concurrent strokes (0 to 16)
uniform vec4 u_segments[16];   // (x0, y0, x1, y1) in UV space [0, 1]
uniform vec2 u_params[16];     // (radius, strength)

// Continuous Twigl Sinusoidal Scroll Wavefront Pulse: fract(sin(p.x * 3.0) * 0.2 - p.y)
uniform float u_wavePulseStrength;
uniform float u_wavePulseY;
uniform float u_wavePulseDir;

void main() {
  // 1. Read and decay existing source field from previous frame
  float prevVal = texture2D(u_prevSource, vUv).r * u_decay;

  // 2. Metric coordinate transformation: scale X by aspect ratio to ensure circular isotropy
  vec2 p = vec2(vUv.x * u_aspect, vUv.y);
  float impulse = 0.0;

  // 3. Accumulate active pointer/touch capsule strokes
  for (int i = 0; i < 16; i++) {
    if (i >= u_numStrokes) break;

    vec4 seg = u_segments[i];
    vec2 a = vec2(seg.x * u_aspect, seg.y);
    vec2 b = vec2(seg.z * u_aspect, seg.w);
    float radius = max(u_params[i].x, 0.005);
    float strength = u_params[i].y;

    // Exact distance to 2D line segment A -> B
    vec2 ba = b - a;
    vec2 pa = p - a;
    float lenSq = dot(ba, ba);
    float h = lenSq > 1e-8 ? clamp(dot(pa, ba) / lenSq, 0.0, 1.0) : 0.0;
    float dist = length(pa - ba * h);

    if (dist < radius) {
      // C2 Hermite smooth falloff: (1 - t^2)^2 with zero boundary derivative
      float t = dist / radius;
      float falloff = (1.0 - t * t) * (1.0 - t * t);
      impulse += strength * falloff;
    }
  }

  // 4. Smooth Sinusoidal Wavefront Pulse (Pure Smooth Wave, NO FRACT):
  if (abs(u_wavePulseStrength) > 0.001) {
    vec2 pTwigl = (vUv * 2.0 - 1.0);
    pTwigl.x *= u_aspect;
    
    // Smooth single wave crest (No fract repetition):
    float waveDist = abs(sin(pTwigl.x * 3.0) * 0.2 - (pTwigl.y - u_wavePulseY));
    float wavePulse = exp(-pow(waveDist * 10.0, 2.0));
    impulse += wavePulse * u_wavePulseStrength;
  }

  // 5. Saturate impulse and write to 32-bit floating-point channel R
  float total = clamp(prevVal + impulse, -1.0, 1.0);
  gl_FragColor = vec4(total, 0.0, 0.0, 1.0);
}
`;class HM{constructor(e=512,t=512,i,r=Et){Z(this,"width");Z(this,"height");Z(this,"rtPing");Z(this,"rtPong");Z(this,"matSplat");Z(this,"runner");Z(this,"ownsRunner",!1);Z(this,"readPing",!0);Z(this,"floatType",Et);Z(this,"segmentsBuffer");Z(this,"paramsBuffer");this.width=e,this.height=t,this.floatType=r,i?(this.runner=i,this.ownsRunner=!1):(this.runner=new La,this.ownsRunner=!0);const s={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.width,this.height,s),this.rtPong=new Ke(this.width,this.height,s),this.segmentsBuffer=new Float32Array(64),this.paramsBuffer=new Float32Array(32),this.matSplat=new Mt({vertexShader:BM,fragmentShader:zM,uniforms:{u_prevSource:{value:null},u_decay:{value:.8},u_aspect:{value:this.width/Math.max(1,this.height)},u_numStrokes:{value:0},u_segments:{value:this.segmentsBuffer},u_params:{value:this.paramsBuffer},u_wavePulseStrength:{value:0},u_wavePulseY:{value:0},u_wavePulseDir:{value:1}},depthTest:!1,depthWrite:!1})}resize(e,t,i){if(this.width===e&&this.height===t)return;this.width=e,this.height=t,this.rtPing.dispose(),this.rtPong.dispose();const r={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.width,this.height,r),this.rtPong=new Ke(this.width,this.height,r),this.matSplat.uniforms.u_aspect.value=this.width/Math.max(1,this.height),this.clear(i)}clear(e){e.setRenderTarget(this.rtPing),e.clearColor(),e.setRenderTarget(this.rtPong),e.clearColor(),e.setRenderTarget(null)}update(e,t,i=.8,r){const s=this.readPing?this.rtPing:this.rtPong,o=this.readPing?this.rtPong:this.rtPing,a=Math.min(t.length,16);this.matSplat.uniforms.u_prevSource.value=s.texture,this.matSplat.uniforms.u_decay.value=i,this.matSplat.uniforms.u_numStrokes.value=a,r&&Math.abs(r.strength)>.001?(this.matSplat.uniforms.u_wavePulseStrength.value=r.strength,this.matSplat.uniforms.u_wavePulseY.value=r.y,this.matSplat.uniforms.u_wavePulseDir.value=r.dir):this.matSplat.uniforms.u_wavePulseStrength.value=0;for(let l=0;l<a;l++){const c=t[l],u=l*4;this.segmentsBuffer[u+0]=c.x0,this.segmentsBuffer[u+1]=c.y0,this.segmentsBuffer[u+2]=c.x1,this.segmentsBuffer[u+3]=c.y1;const h=l*2;this.paramsBuffer[h+0]=c.radius,this.paramsBuffer[h+1]=c.strength}return this.runner.render(e,this.matSplat,o),e.setRenderTarget(null),this.readPing=!this.readPing,o.texture}getTexture(){return(this.readPing?this.rtPing:this.rtPong).texture}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.matSplat.dispose(),this.ownsRunner&&this.runner.dispose()}}const cr=class cr{constructor(){Z(this,"fishes",[]);Z(this,"pellets",[]);Z(this,"aspect",1);Z(this,"viewportH",900);Z(this,"packedHeads",new Float32Array(12));Z(this,"packedColors",new Float32Array(12));Z(this,"packedSpines",new Float32Array(72));Z(this,"packedPellets",new Float32Array(cr.MAX_PELLETS*4));this.initFishes()}initFishes(){const e={x:.56,y:.62,vx:0,vy:0,angle:2.3,targetAngle:2.3,speed:.044,baseSpeed:.044,size:.056,color:new et(.001,.001,.002),finColor:new je(.005,.005,.01,.9),phase:0,wiggleSpeed:5.8,isLeader:!0,swimTimer:1.8,isSwimming:!0,personality:{feedSpeedMult:1.75,burstMin:1.5,burstSpan:1.4,restMin:.8,restSpan:1.1,wanderFreq:.62,wanderAmp:.42,turnBias:-.06,postMealTurn:-.75},spine:Array.from({length:6},(r,s)=>({x:.56+s*.008,y:.62-s*.008}))},t={x:.34,y:.54,vx:0,vy:0,angle:.45,targetAngle:.45,speed:.036,baseSpeed:.036,size:.051,color:new et(.36,.37,.385),finColor:new je(.4,.41,.425,.85),phase:1.8,wiggleSpeed:5,isLeader:!1,swimTimer:1.2,isSwimming:!1,personality:{feedSpeedMult:1.48,burstMin:1.1,burstSpan:1.1,restMin:1.3,restSpan:1.5,wanderFreq:.43,wanderAmp:.48,turnBias:.14,postMealTurn:.95},spine:Array.from({length:6},(r,s)=>({x:.34-s*.008,y:.54-s*.005}))},i={x:.48,y:.35,vx:0,vy:0,angle:-2.1,targetAngle:-2.1,speed:.03,baseSpeed:.03,size:.046,color:new et(.34,.35,.365),finColor:new je(.38,.39,.405,.85),phase:3.5,wiggleSpeed:4.3,isLeader:!1,swimTimer:2.4,isSwimming:!0,personality:{feedSpeedMult:1.25,burstMin:.9,burstSpan:.9,restMin:1.9,restSpan:2,wanderFreq:.29,wanderAmp:.32,turnBias:-.11,postMealTurn:-1.35},spine:Array.from({length:6},(r,s)=>({x:.48+s*.006,y:.35+s*.008}))};this.fishes=[e,t,i]}setAspect(e){this.aspect=e}setViewportSize(e,t){this.viewportH=Math.max(1,t)}getFishScale(){return Math.min(1.45,Math.max(.85,Math.sqrt(900/Math.max(320,this.viewportH))))}applyScrollShift(e,t){if(!(Math.abs(e)<1e-6&&Math.abs(t)<1e-6)){for(let i=this.pellets.length-1;i>=0;i--){const r=this.pellets[i];r.x+=e,r.y+=t,(r.y<-.55||r.y>1.55||r.x<-.45||r.x>1.45)&&this.pellets.splice(i,1)}for(let i=0;i<this.fishes.length;i++){const r=this.fishes[i];let s=e,o=t;const a=r.x+s,l=r.y+o,c=.1+i*.035;l>1+c?o-=l-(1+c):l<-c&&(o-=l- -c),a>1.18?s-=a-1.18:a<-.18&&(s-=a- -.18),r.x+=s,r.y+=o;for(let u=0;u<r.spine.length;u++)r.spine[u].x+=s,r.spine[u].y+=o}}}dropFood(e,t){const i=Math.min(Math.max(e,.04),.96),r=Math.min(Math.max(t,.04),.96);this.pellets.length>=cr.MAX_PELLETS&&this.pellets.shift(),this.pellets.push({x:i,y:r,vx:(Math.random()-.5)*.008,vy:(Math.random()-.5)*.008,size:.0032+Math.random()*8e-4,age:0,maxAge:24})}update(e,t,i,r,s,o,a){const l=Math.min(e,.05),c=this.getFishScale();for(let d=this.pellets.length-1;d>=0;d--){const f=this.pellets[d];f.age+=l,f.x+=f.vx*l,f.y+=f.vy*l,f.vx*=Math.exp(-l*2.5),f.vy*=Math.exp(-l*2.5),(f.age>=f.maxAge||f.y<-.55||f.y>1.55)&&this.pellets.splice(d,1)}const u=new Array(this.fishes.length).fill(null),h=this.pellets.filter(d=>d.age>=.08&&d.x>=-.05&&d.x<=1.05&&d.y>=-.05&&d.y<=1.05);if(h.length>0){const d=[];for(let x=0;x<this.fishes.length;x++){const m=this.fishes[x];for(const p of h){const A=(p.x-m.x)*this.aspect,w=p.y-m.y,S=Math.sqrt(A*A+w*w);d.push({fIdx:x,pellet:p,score:S/Math.max(.5,m.personality.feedSpeedMult)})}}d.sort((x,m)=>x.score-m.score);const f=new Set,v=new Set;for(const x of d)v.has(x.fIdx)||f.has(x.pellet)||(u[x.fIdx]=x.pellet,v.add(x.fIdx),f.add(x.pellet))}for(let d=0;d<this.fishes.length;d++){const f=this.fishes[d],v=f.personality,x=f.x,m=f.y,p=f.spine[f.spine.length-1],A=p.x,w=p.y;if(f.swimTimer-=l,f.swimTimer<=0)if(f.isSwimming=!f.isSwimming,f.shelterPadIdx=null,f.isSwimming){if(f.swimTimer=v.burstMin+Math.random()*v.burstSpan,f.targetAngle+=v.turnBias*2.2+(Math.random()-.5)*1.35,a&&a.length>0&&Math.random()<.38){let ae=-1,le=.62;for(let ge=0;ge<a.length;ge++){const ye=a[ge];if(ye.r<=.01||ye.y<.14||ye.y>.86||ye.x<.04||ye.x>.96||this.fishes.some((Ae,Re)=>Re!==d&&Ae.shelterPadIdx===ge))continue;const se=(ye.x-f.x)*this.aspect,xe=ye.y-f.y,de=Math.sqrt(se*se+xe*xe);de>ye.r*.75&&de<le&&(le=de,ae=ge)}ae>=0&&(f.shelterPadIdx=ae,f.swimTimer=Math.max(f.swimTimer,2.4))}}else f.swimTimer=v.restMin+Math.random()*v.restSpan;let S=!1,G=!1;const C=u[d];if(C){f.shelterPadIdx=null;const ae=(C.x-f.x)*this.aspect,le=C.y-f.y,ge=Math.sqrt(ae*ae+le*le),ye=f.size*c,te=Math.max(.022*c,ye*.16);if(ge<=te){o&&C.x>=-.05&&C.x<=1.05&&C.y>=-.05&&C.y<=1.05&&o(C.x,C.y,C.x,C.y,ye*.18,.34);const se=this.pellets.indexOf(C);se>=0&&this.pellets.splice(se,1),f.targetAngle+=v.postMealTurn+(Math.random()-.5)*.7,f.speed=f.baseSpeed*(.7+d*.18),f.swimTimer=.65+d*.45+Math.random()*.8}else{f.targetAngle=Math.atan2(le,ae);const se=f.baseSpeed*v.feedSpeedMult;f.speed+=(se-f.speed)*Math.min(1,l*4.5),f.isSwimming=!0,f.swimTimer=Math.max(f.swimTimer,.8+d*.35),G=!0}}else if(s){const ae=(i-f.x)*this.aspect,le=r-f.y;if(Math.sqrt(ae*ae+le*le)<.2*c){f.shelterPadIdx=null;const ye=Math.atan2(-le,-ae)+v.turnBias*.8;f.targetAngle=ye,f.speed=f.baseSpeed*(2+.25*(2-d)),f.isSwimming=!0,f.swimTimer=1+d*.3,S=!0}}if(!S&&!G){let ae=!1;if(f.shelterPadIdx!=null&&a&&a[f.shelterPadIdx]){const le=a[f.shelterPadIdx];if(le.r>.01&&le.y>=.08&&le.y<=.92){const ge=(le.x-f.x)*this.aspect,ye=le.y-f.y;Math.sqrt(ge*ge+ye*ye)<=le.r*.62?(f.isSwimming=!1,f.swimTimer=2.2+Math.random()*1.8,f.shelterPadIdx=null):(f.targetAngle=Math.atan2(ye,ge),f.isSwimming=!0,f.speed+=(f.baseSpeed*.92-f.speed)*Math.min(1,l*3),ae=!0)}else f.shelterPadIdx=null}if(!ae)if(f.isSwimming){f.speed+=(f.baseSpeed-f.speed)*l*3;const le=Math.sin(t*v.wanderFreq+d*2.7)*v.wanderAmp+v.turnBias;f.targetAngle+=le*l*.65}else f.speed*=Math.exp(-l*(2+d*.35)),f.speed<8e-4&&(f.speed=0)}const F=.13*c;for(let ae=0;ae<this.fishes.length;ae++){if(ae===d)continue;const le=this.fishes[ae],ge=(f.x-le.x)*this.aspect,ye=f.y-le.y,te=Math.sqrt(ge*ge+ye*ye);if(te>1e-5&&te<F){const se=(1-te/F)*l*3.4;let de=Math.atan2(ye,ge)-f.targetAngle;for(;de>Math.PI;)de-=Math.PI*2;for(;de<-Math.PI;)de+=Math.PI*2;f.targetAngle+=de*Math.min(1,se)}}const B=G?.04:.12,E=f.x<B||f.x>1-B||f.y<B||f.y>1-B,M=f.x<-.01||f.x>1.01||f.y<-.01||f.y>1.01;if(E){f.shelterPadIdx=null;const ae=.5+(d-1)*.16,le=.5+(1-d)*.13,ge=(ae-f.x)*this.aspect,ye=le-f.y;let se=Math.atan2(ye,ge)+v.turnBias*.32-f.targetAngle;for(;se>Math.PI;)se-=Math.PI*2;for(;se<-Math.PI;)se+=Math.PI*2;const xe=M?1:Math.min(1,l*5.5);if(f.targetAngle+=se*xe,f.isSwimming=!0,M){const de=f.baseSpeed*(2.65+d*.2);f.speed+=(de-f.speed)*Math.min(1,l*6.5),f.swimTimer=Math.max(f.swimTimer,1.4)}else f.speed<f.baseSpeed*.85&&(f.speed+=(f.baseSpeed-f.speed)*Math.min(1,l*3.5))}const D=f.speed/Math.max(1e-5,f.baseSpeed);f.phase+=l*f.wiggleSpeed*Math.min(1.6,D);let N=f.targetAngle-f.angle;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const O=M?7.5:.4+2.2*Math.min(1,D);f.angle+=N*Math.min(1,l*O),f.vx=Math.cos(f.angle)*f.speed*c,f.vy=Math.sin(f.angle)*f.speed*c,f.x+=f.vx/Math.max(.1,this.aspect)*l,f.y+=f.vy*l;const j=f.spine[2].x,oe=f.spine[2].y,$=f.spine[0];$.x=f.x,$.y=f.y;const re=f.size*c,K=re*.21;let me=f.angle+Math.PI;for(let ae=1;ae<f.spine.length;ae++){const le=f.spine[ae-1],ge=f.spine[ae],ye=(ge.x-le.x)*this.aspect,te=ge.y-le.y;let se=Math.atan2(te,ye);const xe=Math.pow(ae/(f.spine.length-1),1.3),de=Math.sin(f.phase-ae*.75)*(.15*xe*Math.min(1.3,D));let Re=me+de-se;for(;Re>Math.PI;)Re-=Math.PI*2;for(;Re<-Math.PI;)Re+=Math.PI*2;se+=Re*Math.min(1,l*(3+11*Math.min(1,D))),ge.x=le.x+Math.cos(se)*K/Math.max(.1,this.aspect),ge.y=le.y+Math.sin(se)*K,me=se}if(o&&$.x>=-.06&&$.x<=1.06&&$.y>=-.06&&$.y<=1.06){const ae=f.spine[2],le=.18;o($.x,$.y,ae.x,ae.y,re*.24,le),o(ae.x,ae.y,p.x,p.y,re*.2,le*.85),o(x,m,j,oe,re*.24,-le),o(j,oe,A,w,re*.2,-le*.85)}}}packUniforms(){const e=this.packedHeads,t=this.packedColors,i=this.packedSpines,r=this.packedPellets,s=this.getFishScale();for(let o=0;o<3;o++){const a=this.fishes[o];e[o*4+0]=a.x,e[o*4+1]=a.y,e[o*4+2]=a.angle,e[o*4+3]=a.size*s,t[o*4+0]=a.color.r,t[o*4+1]=a.color.g,t[o*4+2]=a.color.b,t[o*4+3]=a.isLeader?1:0;for(let l=0;l<6;l++){const c=a.spine[l],u=(o*6+l)*4;i[u+0]=c.x,i[u+1]=c.y,i[u+2]=0,i[u+3]=0}}for(let o=0;o<cr.MAX_PELLETS;o++){const a=o*4;if(o<this.pellets.length){const l=this.pellets[o],c=l.age<.18?1.35-.35*(l.age/.18):1,u=l.age>l.maxAge-2?Math.max(0,(l.maxAge-l.age)/2):1,h=Math.min(1,l.age/.06);r[a+0]=l.x,r[a+1]=l.y,r[a+2]=l.size*s*c,r[a+3]=h*u}else r[a+0]=0,r[a+1]=0,r[a+2]=0,r[a+3]=0}return{heads:e,colors:t,spines:i,pellets:r}}};Z(cr,"MAX_PELLETS",12);let Tl=cr;const Qe={1:{name:"Macro Caustic Lens",scaleLabel:"10⁰ m → 10⁻² m",description:"Pristine macroscopic optical glass refraction with balanced fluid caustics and pond swells.",wavelength:.4,propagationZ:46.65,phaseCoupling:.4,refractiveIndex:1,materialAbsorption:0,exposure:.525,ambient:.165,refractionStrength:.45,reflectionGloss:.52,pondWaveAmp:5.15,pondWaveK0:.01,pondWavePower:4.1,pondWaveSpeed:7},2:{name:"Micro Diffraction Hologram",scaleLabel:"10⁻⁴ m → 10⁻⁶ m",description:"Sub-wavelength wave optics, deep holographic diffraction rings, and Talbot chromatic fringes.",wavelength:20,propagationZ:2.5,phaseCoupling:2.5,refractiveIndex:1,materialAbsorption:0,exposure:.35,ambient:.11,refractionStrength:.3,reflectionGloss:.22,pondWaveAmp:3.2,pondWaveK0:.009,pondWavePower:3.9,pondWaveSpeed:7},3:{name:"Deep Dielectric Diffraction",scaleLabel:"10⁻⁵ m → 10⁻⁷ m",description:"High-index dielectric aperture relief with deep interference shadows and dramatic wave troughs.",wavelength:20,propagationZ:5.95,phaseCoupling:2,refractiveIndex:2.5,materialAbsorption:.01,exposure:.05,ambient:.01,refractionStrength:0,reflectionGloss:0,pondWaveAmp:7.05,pondWaveK0:.005,pondWavePower:4.6,pondWaveSpeed:6.5}};function Sn(n,e,t){return n+(e-n)*t}function To(n,e,t){return n*Math.pow(e/n,t)}function GM(n){const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}const VM={...Qe[1]};function mS(n){return kM(GM(n))}function kM(n){const e=Qe[1],t=Qe[2];return{wavelength:To(e.wavelength,t.wavelength,n),propagationZ:To(e.propagationZ,t.propagationZ,n),phaseCoupling:Sn(e.phaseCoupling,t.phaseCoupling,n),refractiveIndex:Sn(e.refractiveIndex,t.refractiveIndex,n),materialAbsorption:Sn(e.materialAbsorption,t.materialAbsorption,n),exposure:To(e.exposure,t.exposure,n),ambient:Sn(e.ambient,t.ambient,n),refractionStrength:Sn(e.refractionStrength,t.refractionStrength,n),reflectionGloss:Sn(e.reflectionGloss,t.reflectionGloss,n),pondWaveAmp:Sn(e.pondWaveAmp,t.pondWaveAmp,n),pondWaveK0:Sn(e.pondWaveK0,t.pondWaveK0,n),pondWavePower:Sn(e.pondWavePower,t.pondWavePower,n),pondWaveSpeed:Sn(e.pondWaveSpeed,t.pondWaveSpeed,n)}}const Gs=620/532,Vs=1,ks=460/532,Wu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ws=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,WM=`
precision highp float;
in vec2 vUv;

uniform sampler2D u_logoTexture;

layout(location = 0) out vec4 outRG;
layout(location = 1) out vec4 outB;

void main() {
  vec3 srgb = clamp(texture(u_logoTexture, vUv).rgb, 0.0, 1.0);
  // |U_c| = sqrt(I_c) = sqrt(srgb^2.2) = srgb^1.1 so |H(+z)H(-z)U_c|^2 reproduces exact RGB color & white=1.0!
  vec3 amp = pow(srgb, vec3(1.1));

  outRG = vec4(amp.r, 0.0, amp.g, 0.0);
  outB  = vec4(amp.b, 0.0, 0.0, 1.0);
}
`,XM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_logoTexture;
uniform float u_refractiveIndex;
uniform float u_materialAbsorption;
uniform float u_dielectricRelief;

void main() {
  vec3 rgb = texture2D(u_logoTexture, vUv).rgb;
  float luma = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
  float val = mix(luma, clamp(1.0 - luma, 0.0, 1.0), u_dielectricRelief);
  float effN = max(u_refractiveIndex, 1.0 + 0.34 * u_dielectricRelief);
  float n = 1.0 + (effN - 1.0) * val;
  float sigma = u_materialAbsorption * val;
  gl_FragColor = vec4(n, sigma, val, 1.0);
}
`,qM=`
precision highp float;
in vec2 vUv;

uniform sampler2D u_kSpaceRG;
uniform sampler2D u_kSpaceB;
uniform vec2 u_resolution;
uniform vec2 u_viewportSize;   // CSS viewport dimensions so spatial frequency stays invariant across window sizes
uniform vec2 u_scrollUv;       // Normalized page scroll offset (cycles of viewport) for seamless Fourier shift
uniform vec3 u_wavelengths;    // (lambda_R, lambda_G, lambda_B) = lambda_0 * (620, 532, 460) / 532
uniform float u_propagationZ;  // +dz forward, -dz backward
uniform float u_pupilNA;       // 0.95
uniform float u_time;          // Elapsed time for ocean-style wave dispersion
uniform float u_pondWaveAmp;   // K-space Phillips wave amplitude
uniform float u_pondWaveK0;    // K-space Phillips peak wavenumber k0
uniform float u_pondWaveTime;  // Smoothly accumulated dispersion time (dt * speed)
uniform float u_pondWavePower; // K-space spectral power-law slope

layout(location = 0) out vec4 outRG;
layout(location = 1) out vec4 outB;

const float PI = 3.14159265358979323846;
const float TWO_PI = 6.283185307179586;
const float C_PHASE = 19.739208802178716; // 2 * PI^2

// Evaluates Helmholtz transfer function H(rho; lambda, z) for one wavelength channel
vec2 evaluateHelmholtzPropagator(float lambda, float z, float rho2) {
  // Dimensionless spatial frequency parameter kappa = lambda / lambda_ref
  // Normalization scale s0 ensures Abbe limit rho_c = 1 / (lambda * s0)
  const float S0 = 0.15;
  const float C_EVA = 16.0;

  float kappa = lambda * S0;
  float kappa2_rho2 = kappa * kappa * rho2;
  float S = 1.0 - kappa2_rho2;

  if (S >= 0.0) {
    // -------------------------------------------------------------
    // REGIME 1: PROPAGATING WAVE (rho <= 1 / kappa)
    // Pure real kz = (2*pi / lambda) * sqrt(1 - kappa^2 * rho^2)
    // Non-paraxial Helmholtz dispersion with unit gain |H| = 1.0
    // -------------------------------------------------------------
    float sqrtS = sqrt(S);
    float denom = 1.0 + sqrtS;
    float phi = - (z * lambda * C_PHASE * rho2) / denom;
    return vec2(cos(phi), sin(phi));
  } else {
    // -------------------------------------------------------------
    // REGIME 2: EVANESCENT WAVE (rho > 1 / kappa)
    // Spatial frequencies exceeding Abbe diffraction limit (sub-wavelength features)
    // kz = i * alpha, where alpha = (2*pi / lambda) * sqrt(kappa^2 * rho^2 - 1)
    // -------------------------------------------------------------
    if (z <= 0.0) {
      // BACKWARD ASM (-z): Inverse operator cannot amplify evanescent waves!
      // In physical inverse diffraction, sub-wavelength info is irreversibly lost.
      // Filter out evanescent modes (H = 0) to prevent exponential noise explosion.
      return vec2(0.0, 0.0);
    } else {
      // FORWARD ASM (+z): Physical exponential evanescent decay
      float alpha = C_EVA * sqrt(-S);
      float decay = exp(- alpha * z);
      // Continuous boundary phase matching
      float phiBound = - (z * lambda * C_PHASE * rho2);
      return vec2(decay * cos(phiBound), decay * sin(phiBound));
    }
  }
}

// Evaluates Hermitian-symmetric complex height spectrum hat_phi(q) in k-space
vec2 evalPondPhiHat(vec2 qIdx, vec2 effHalfRes, vec2 gridHalfRes, float k0, float p, vec2 N) {
  if (dot(qIdx, qIdx) < 0.5) return vec2(0.0);
  vec2 gridNorm = qIdx / gridHalfRes;
  if (dot(gridNorm, gridNorm) >= 0.90) return vec2(0.0);

  vec2 qNorm = qIdx / effHalfRes;
  float rho2 = dot(qNorm, qNorm);
  if (rho2 >= 0.85) return vec2(0.0);

  float k = sqrt(rho2);
  float r = max(k / k0, 0.001);
  float powerSpec = 1.0 / (pow(1.0 / r, 0.75) + pow(r, p));

  float sgn = (qIdx.y > 0.0 || (qIdx.y == 0.0 && qIdx.x > 0.0)) ? 1.0 : -1.0;
  vec2 halfFreq = qIdx * sgn;
  float basePhase = fract(sin(dot(halfFreq, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
  // Independent per-mode propagation polarity (+/-halfFreq) for full 360-degree isotropic waves
  float dirSign = (fract(sin(dot(halfFreq, vec2(93.9898, 67.345))) * 24634.6345) > 0.5) ? 1.0 : -1.0;
  float ampRand = fract(sin(dot(halfFreq, vec2(41.314, 19.727))) * 31415.9265);
  float xi = sqrt(-log(max(ampRand, 0.0005)));
  float omega = sqrt(k) * 2.5;
  // Fourier shift theorem: subtracting 2*pi*q·u_scrollUv shifts wave field +u_scrollUv so ripples glide 1:1 with page scroll
  float phase = sgn * (basePhase - dirSign * omega * u_pondWaveTime) - TWO_PI * dot(qIdx, u_scrollUv);

  // Compensate 2D FFT discrete density + low-k0 caustic curvature scaling (~(0.028/k0)^2.15):
  // Lower spatial frequency weakens Laplacian focusing as k^2, so amplitude rises accordingly to preserve crisp caustics
  float rmsNorm = sqrt((N.x * N.y) / max(4.0 * effHalfRes.x * effHalfRes.y, 1.0));
  float curvatureBoost = clamp(pow(0.028 / max(k0, 0.004), 1.65), 0.35, 10.0);
  float amp = u_pondWaveAmp * 3.5 * (0.06 / k0) * curvatureBoost * powerSpec * exp(-rho2 * 1.5) * xi * rmsNorm;
  return vec2(cos(phase), sin(phase)) * amp;
}

void main() {
  vec2 coord = gl_FragCoord.xy - 0.5;
  vec2 N = u_resolution;

  vec2 freqIdx = coord;
  if (freqIdx.x >= N.x * 0.5) freqIdx.x -= N.x;
  if (freqIdx.y >= N.y * 0.5) freqIdx.y -= N.y;

  vec2 gridHalfN = N * 0.5;
  vec2 freqNorm = freqIdx / gridHalfN;
  float rho2 = dot(freqNorm, freqNorm);
  vec2 effHalfRes = 256.0 * (max(u_viewportSize, vec2(1.0)) / 900.0);
  vec2 physNorm = freqIdx / effHalfRes;
  float physRho2 = dot(physNorm, physNorm);

  // Evaluate exact Helmholtz Angular Spectrum Transfer Functions for R, G, B independently
  vec2 propR = evaluateHelmholtzPropagator(u_wavelengths.x, u_propagationZ, physRho2);
  vec2 propG = evaluateHelmholtzPropagator(u_wavelengths.y, u_propagationZ, physRho2);
  vec2 propB = evaluateHelmholtzPropagator(u_wavelengths.z, u_propagationZ, physRho2);

  vec4 specRG = texture(u_kSpaceRG, vUv);
  vec2 specB  = texture(u_kSpaceB, vUv).xy;

  vec2 modR = vec2(
    specRG.x * propR.x - specRG.y * propR.y,
    specRG.x * propR.y + specRG.y * propR.x
  );
  vec2 modG = vec2(
    specRG.z * propG.x - specRG.w * propG.y,
    specRG.z * propG.y + specRG.w * propG.x
  );
  vec2 modB = vec2(
    specB.x * propB.x - specB.y * propB.y,
    specB.x * propB.y + specB.y * propB.x
  );

  // Physical Phillips-style k^-4 pond wave spectrum on forward ASM (zero extra FFTs/passes):
  // Preserves DC = 1.0 (white pond bed), follows 1 / (1 + (k/k0)^4) water-wave tail + Nyquist guard
  float pondProfile = 1.0;
  vec2 phiHat = vec2(0.0);
  if (u_propagationZ > 0.0) {
    float k0Sq = 0.38 * 0.38;
    float phillipsTail = 1.0 / (1.0 + (rho2 * rho2) / (k0Sq * k0Sq));
    pondProfile = phillipsTail * exp(-rho2 * 2.0);

    // Piggyback Hermitian-symmetric 2D pond wave spectrum hat_phi(k) on unused B.zw channel;
    // Existing 4-channel Stockham IFFT transforms all RGB fields + phi(x,y) simultaneously.
    if (u_pondWaveAmp > 0.0005) {
      float k0 = max(u_pondWaveK0, 0.004);
      float p = max(u_pondWavePower, 0.5);
      phiHat = evalPondPhiHat(freqIdx, effHalfRes, gridHalfN, k0, p, N);
    }
  }

  outRG = vec4(modR, modG) * pondProfile;
  outB  = vec4(modB * pondProfile, phiHat);
}
`,YM=`
precision highp float;
in vec2 vUv;

uniform sampler2D u_preFocusRG;
uniform sampler2D u_preFocusB;
uniform sampler2D u_fdtdTex;
uniform sampler2D u_materialTex;
uniform sampler2D u_pondPhiTex;       // 4th-channel IFFT pond height phi(x,y) in .z
uniform vec2 u_pondPhiScrollDelta;    // Inter-frame scroll UV delta for zero-lag periodic pond lookup
uniform float u_hasPondPhi;           // 1.0 when valid pond wave height field is active
uniform float u_phaseCoupling;        // Unified phase coupling alpha
uniform vec3 u_invWavelengthRatios;   // (532/620, 1.0, 532/460)
uniform float u_aspect;
uniform float u_time;
uniform vec4 u_fishHeads[3];          // (x, y, angle, size)
uniform vec4 u_fishSpines[18];        // (x, y, 0, 0)
uniform vec4 u_lotusPads[2];          // (x, y, radius, angle)

layout(location = 0) out vec4 outRG;
layout(location = 1) out vec4 outB;

// Optical sensitivity compensation factor:
// Calibrates normalized FDTD amplitude [-1, 1] into the optimal physical caustic focusing regime
const float COUPLING_COMPENSATION = 5.2;

// Evaluates projected optical shadow of the fish with bounding-circle early-out
float evaluateFishShadow(vec2 pMetric) {
  float shadowMask = 0.0;
  vec2 lightOffset = vec2(0.012, -0.018);

  for (int f = 0; f < 3; f++) {
    vec4 head = u_fishHeads[f];
    float size = head.w;
    if (size < 0.001) continue;

    int spineBase = f * 6;
    vec2 midBody = vec2(u_fishSpines[spineBase + 2].x * u_aspect, u_fishSpines[spineBase + 2].y) + lightOffset;
    float boundR = size * 1.15;
    vec2 dBound = pMetric - midBody;
    if (dot(dBound, dBound) > boundR * boundR) continue;

    for (int s = 0; s < 5; s++) {
      vec2 a = vec2(u_fishSpines[spineBase + s].x * u_aspect, u_fishSpines[spineBase + s].y) + lightOffset;
      vec2 b = vec2(u_fishSpines[spineBase + s + 1].x * u_aspect, u_fishSpines[spineBase + s + 1].y) + lightOffset;

      vec2 pa = pMetric - a;
      vec2 ba = b - a;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
      float d = length(pa - ba * h);

      float t = (float(s) + h) / 5.0;
      float profile = pow(clamp(t / 0.22, 0.0, 1.0), 0.55) * pow(clamp(1.0 - t * 0.86, 0.08, 1.0), 1.25);
      float r = size * (0.045 + 0.155 * profile);

      if (d < r * 1.55) {
        float falloff = smoothstep(r * 1.55, r * 0.35, d);
        shadowMask = max(shadowMask, falloff * 0.45);
      }
    }
  }
  return shadowMask;
}

// Evaluates projected optical shadow of floating celadon lotus pads (real Fresnel diffraction in Micro, soft sunlit shade in Macro)
float evaluateLotusShadow(vec2 pMetric) {
  float shadowMask = 0.0;
  vec2 padLightOffset = vec2(0.016, -0.024);

  for (int i = 0; i < 2; i++) {
    vec4 pad = u_lotusPads[i];
    float r = pad.z;
    if (r < 0.002) continue;

    vec2 center = vec2(pad.x * u_aspect, pad.y) + padLightOffset;
    vec2 dVec = pMetric - center;
    if (dot(dVec, dVec) > r * r * 1.35) continue;

    float c = cos(pad.w), s = sin(pad.w);
    vec2 loc = vec2(c * dVec.x + s * dVec.y, -s * dVec.x + c * dVec.y);
    float theta = atan(loc.y, loc.x);
    float notch = 0.34 * exp(-pow(theta / 0.26, 2.0));
    float rimR = r * (1.0 + 0.026 * cos(theta * 7.0) - notch);
    float normR = length(loc) / max(rimR, 1e-5);
    if (normR < 1.12) {
      float falloff = smoothstep(1.10, 0.78, normR);
      shadowMask = max(shadowMask, falloff * 0.40);
    }
  }
  return shadowMask;
}

// Mobile-safe software periodic bilinear lookup via texelFetch + POT bitmask (zero OES_texture_float_linear dependency!)
float samplePondPhiPeriodic(vec2 uv) {
  ivec2 size = textureSize(u_pondPhiTex, 0);
  ivec2 mask = max(size - ivec2(1), ivec2(0));
  vec2 st = fract(uv) * vec2(size) - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = st - iuv;
  ivec2 base = ivec2(iuv) + size;
  float p00 = texelFetch(u_pondPhiTex, base & mask, 0).z;
  float p10 = texelFetch(u_pondPhiTex, (base + ivec2(1, 0)) & mask, 0).z;
  float p01 = texelFetch(u_pondPhiTex, (base + ivec2(0, 1)) & mask, 0).z;
  float p11 = texelFetch(u_pondPhiTex, (base + ivec2(1, 1)) & mask, 0).z;
  return mix(mix(p00, p10, fuv.x), mix(p01, p11, fuv.x), fuv.y);
}

void main() {
  vec4 U_RG  = texture(u_preFocusRG, vUv);
  vec2 U_B   = texture(u_preFocusB, vUv).xy;
  float Ez   = texture(u_fdtdTex, vUv).r;

  vec2 pMetric = vec2(vUv.x * u_aspect, vUv.y);
  float shadow = max(evaluateFishShadow(pMetric), evaluateLotusShadow(pMetric));
  float atten = clamp(1.0 - shadow, 0.0, 1.0);

  float phiPond = (u_hasPondPhi > 0.5) ? samplePondPhiPeriodic(vUv - u_pondPhiScrollDelta) : 0.0;
  vec3 pondDispersion = mix(vec3(1.0), u_invWavelengthRatios, 0.25);
  vec3 phi = Ez * (u_phaseCoupling * COUPLING_COMPENSATION) * u_invWavelengthRatios + phiPond * pondDispersion;

  vec2 modR = vec2(cos(phi.x), sin(phi.x));
  vec2 modG = vec2(cos(phi.y), sin(phi.y));
  vec2 modB = vec2(cos(phi.z), sin(phi.z));

  vec2 U_R_prime = vec2(
    U_RG.x * modR.x - U_RG.y * modR.y,
    U_RG.x * modR.y + U_RG.y * modR.x
  ) * atten;
  vec2 U_G_prime = vec2(
    U_RG.z * modG.x - U_RG.w * modG.y,
    U_RG.z * modG.y + U_RG.w * modG.x
  ) * atten;
  vec2 U_B_prime = vec2(
    U_B.x * modB.x - U_B.y * modB.y,
    U_B.x * modB.y + U_B.y * modB.x
  ) * atten;

  outRG = vec4(U_R_prime, U_G_prime);
  outB  = vec4(U_B_prime, 0.0, 1.0);
}
`,KM=`
precision highp float;
varying vec2 vUv;

// Distance to capsule segment
float segmentDist(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h);
}

uniform sampler2D u_finalField_RG;
uniform sampler2D u_finalField_B;
uniform sampler2D u_fdtdTex;
uniform vec2 u_resolution;
uniform vec2 u_simGrid;
uniform vec2 u_fdtdGrid;
uniform float u_exposure;
uniform float u_ambient;
uniform float u_refractionStrength;
uniform float u_reflectionGloss;
uniform float u_hasPondPhi;

// Leo Lionni Swimmy Fish Uniforms
uniform float u_aspect;
uniform float u_time;
uniform vec4 u_fishHeads[3];       // (x, y, angle, size)
uniform vec4 u_fishColors[3];      // (r, g, b, isLeader)
uniform vec4 u_fishSpines[18];     // (x, y, 0, 0)
uniform vec4 u_foodPellets[12];    // (x, y, radius, alpha)
uniform vec4 u_lotusPads[2];       // (x, y, radius, angle)
uniform vec4 u_pebbles[3];         // (x, y, radius, angle)
uniform sampler2D u_cardTex0;
uniform sampler2D u_cardTex1;
uniform sampler2D u_cardTex2;
uniform sampler2D u_cardTex3;
uniform sampler2D u_cardTex4;
uniform sampler2D u_cardTex5;
uniform sampler2D u_cardTex6;
uniform sampler2D u_cardTex7;
uniform vec4 u_cardBounds[8];      // (uMin, vMin, uMax, vMax)
uniform vec4 u_cardParams[8];      // (emerge [0..1], imgAspect, boxAspect, hasTex)

vec4 sampleActiveCardTex(int slot, vec2 uv) {
  if (slot == 0) return texture2D(u_cardTex0, uv);
  if (slot == 1) return texture2D(u_cardTex1, uv);
  if (slot == 2) return texture2D(u_cardTex2, uv);
  if (slot == 3) return texture2D(u_cardTex3, uv);
  if (slot == 4) return texture2D(u_cardTex4, uv);
  if (slot == 5) return texture2D(u_cardTex5, uv);
  if (slot == 6) return texture2D(u_cardTex6, uv);
  return texture2D(u_cardTex7, uv);
}

// Narkowicz ACES Filmic S-Curve: crisp shadow toe + high midtone contrast + smooth highlight shoulder
float acesFilmic(float x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

// Smooth software bilinear texture sampling for FDTD scalar field (cheapest)
float sampleFdtdBilinear(vec2 uv) {
  vec2 grid = max(u_fdtdGrid, vec2(1.0));
  vec2 st = uv * grid - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec2 sf = fuv;

  float a = texture2D(u_fdtdTex, (iuv + vec2(0.5, 0.5)) / grid).r;
  float b = texture2D(u_fdtdTex, (iuv + vec2(1.5, 0.5)) / grid).r;
  float c = texture2D(u_fdtdTex, (iuv + vec2(0.5, 1.5)) / grid).r;
  float d = texture2D(u_fdtdTex, (iuv + vec2(1.5, 1.5)) / grid).r;

  return mix(mix(a, b, sf.x), mix(c, d, sf.x), sf.y);
}

// Guaranteed software bicubic/bilinear reconstruction for optical complex fields:
// (Completely bypasses hardware float linear filter support across all mobile/desktop GPUs)
vec4 sampleFieldBilinear(sampler2D tex, vec2 uv) {
  vec2 grid = max(u_simGrid, vec2(1.0));
  vec2 st = clamp(uv, 0.0, 1.0) * grid - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec2 sf = fuv;

  vec4 s00 = texture2D(tex, (iuv + vec2(0.5, 0.5)) / grid);
  vec4 s10 = texture2D(tex, (iuv + vec2(1.5, 0.5)) / grid);
  vec4 s01 = texture2D(tex, (iuv + vec2(0.5, 1.5)) / grid);
  vec4 s11 = texture2D(tex, (iuv + vec2(1.5, 1.5)) / grid);

  return mix(mix(s00, s10, sf.x), mix(s01, s11, sf.x), sf.y);
}

// Evaluates Leo Lionni Picture Book Style Watercolor Koi Fish
// Continuous interpolated radius profile, delicate fan tail, and rich pigment density
vec4 evaluateHighResFish(vec2 pMetric) {
  vec3 accumRGB = vec3(0.0);
  float accumA = 0.0;

  for (int f = 0; f < 3; f++) {
    vec4 head = u_fishHeads[f];
    float size = head.w;
    if (size < 0.001) continue;

    vec3 col = u_fishColors[f].rgb;
    bool isLeader = u_fishColors[f].a > 0.5;
    int spineBase = f * 6;

    // Fast bounding-circle early-out (skips ~95% of screen pixels)
    vec2 midBody = vec2(u_fishSpines[spineBase + 2].x * u_aspect, u_fishSpines[spineBase + 2].y);
    float boundR = size * 1.15;
    vec2 dBound = pMetric - midBody;
    if (dot(dBound, dBound) > boundR * boundR) continue;

    // 1. Delicate Pectoral Fins (subtle swept-back watercolor strokes at shoulder)
    vec2 p1 = vec2(u_fishSpines[spineBase + 1].x * u_aspect, u_fishSpines[spineBase + 1].y);
    vec2 p0 = vec2(u_fishSpines[spineBase].x * u_aspect, u_fishSpines[spineBase].y);
    vec2 bodyFwd = normalize(p0 - p1 + 1e-6);
    float bodyAng = atan(bodyFwd.y, bodyFwd.x);

    vec2 finDirL = vec2(cos(bodyAng + 2.38), sin(bodyAng + 2.38));
    vec2 finDirR = vec2(cos(bodyAng - 2.38), sin(bodyAng - 2.38));
    float finLen = size * 0.22;

    float dFinL = segmentDist(pMetric, p1, p1 + finDirL * finLen);
    float dFinR = segmentDist(pMetric, p1, p1 + finDirR * finLen);
    float finMask = smoothstep(size * 0.068, size * 0.012, min(dFinL, dFinR)) * 0.65;
    if (finMask > 0.005) {
      vec3 finCol = isLeader ? vec3(0.006, 0.006, 0.010) : vec3(0.36, 0.37, 0.385);
      float outA = finMask + accumA * (1.0 - finMask);
      accumRGB = (finCol * finMask + accumRGB * accumA * (1.0 - finMask)) / max(outA, 1e-5);
      accumA = outA;
    }

    // 2. Smooth Continuous Tapered Torpedo Body (interpolates radius continuously along each segment!)
    float minNormalizedDist = 10.0;
    float bestT = 0.0;

    for (int s = 0; s < 5; s++) {
      vec2 a = vec2(u_fishSpines[spineBase + s].x * u_aspect, u_fishSpines[spineBase + s].y);
      vec2 b = vec2(u_fishSpines[spineBase + s + 1].x * u_aspect, u_fishSpines[spineBase + s + 1].y);

      vec2 pa = pMetric - a;
      vec2 ba = b - a;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
      float d = length(pa - ba * h);

      // Continuous normalized spine position t in [0.0 (nose), 1.0 (tail peduncle)]
      float t = (float(s) + h) / 5.0;

      // Natural streamlined koi profile: widest at t = 0.22, gracefully tapering to narrow tail peduncle
      float profile = pow(clamp(t / 0.22, 0.0, 1.0), 0.55) * pow(clamp(1.0 - t * 0.86, 0.08, 1.0), 1.25);
      float r = size * (0.042 + 0.145 * profile);

      float normDist = d / max(r, 1e-5);
      if (normDist < minNormalizedDist) {
        minNormalizedDist = normDist;
        bestT = t;
      }
    }

    // 3. Organic Watercolor Fan Tail (Soft expanding fan with delicate central notch)
    vec2 tailBase = vec2(u_fishSpines[spineBase + 5].x * u_aspect, u_fishSpines[spineBase + 5].y);
    vec2 tailPrev = vec2(u_fishSpines[spineBase + 4].x * u_aspect, u_fishSpines[spineBase + 4].y);
    vec2 tailDir = normalize(tailBase - tailPrev + 1e-6);
    vec2 tailPerp = vec2(-tailDir.y, tailDir.x);

    vec2 relTail = pMetric - tailBase;
    float tailAlong = dot(relTail, tailDir);
    float tailAcross = dot(relTail, tailPerp);
    float tailLen = size * 0.34;

    if (tailAlong > -size * 0.04 && tailAlong < tailLen * 1.15) {
      float uTail = clamp(tailAlong / tailLen, 0.0, 1.0);
      // Fan expands gracefully from narrow peduncle to soft broad veil
      float halfWidth = size * (0.025 + 0.135 * pow(uTail, 0.85));
      float normAcross = abs(tailAcross) / max(halfWidth, 1e-5);
      // Subtle crescent notch at the trailing edge of the fan tail
      float notchEnd = 1.0 - 0.22 * exp(-normAcross * normAcross * 5.5);

      float radialFade = smoothstep(1.08, 0.45, normAcross);
      float lengthFade = smoothstep(-0.08, 0.12, uTail) * smoothstep(notchEnd + 0.08, notchEnd - 0.28, uTail);
      float tailAlpha = radialFade * lengthFade * (1.0 - 0.25 * uTail) * 0.88;

      if (tailAlpha > 0.005) {
        vec3 tailCol = isLeader ? vec3(0.006, 0.006, 0.010) : mix(vec3(0.32, 0.33, 0.345), vec3(0.45, 0.46, 0.475), uTail);
        float outA = tailAlpha + accumA * (1.0 - tailAlpha);
        accumRGB = (tailCol * tailAlpha + accumRGB * accumA * (1.0 - tailAlpha)) / max(outA, 1e-5);
        accumA = outA;
      }
    }

    // Render main body over fins with watercolor edge granulation
    if (minNormalizedDist < 1.15) {
      float bodyMask = smoothstep(1.10, 0.78, minNormalizedDist) * 0.98;

      // Rich concentrated watercolor pigment: darker along dorsal spine center, slightly warmer toward edge
      float edgeRatio = clamp(minNormalizedDist, 0.0, 1.0);
      vec3 fishSkinCol = col;
      if (!isLeader) {
        // Soft sumi-silver light gray body with gentle dorsal tonal depth
        vec3 dorsalCore = vec3(0.24, 0.25, 0.265);
        vec3 mistEdge = vec3(0.39, 0.40, 0.415);
        fishSkinCol = mix(dorsalCore, mistEdge, smoothstep(0.0, 0.85, edgeRatio));
        fishSkinCol = mix(fishSkinCol, vec3(0.42, 0.43, 0.445), bestT * 0.22);
      } else {
        // Swimmy: Deepest sumi-ink velvet black core
        vec3 sumiCore = vec3(0.0005, 0.0005, 0.001);
        vec3 sumiRim  = vec3(0.012, 0.014, 0.020);
        fishSkinCol = mix(sumiCore, sumiRim, smoothstep(0.35, 1.0, edgeRatio));
      }

      if (bodyMask > 0.005) {
        float outA = bodyMask + accumA * (1.0 - bodyMask);
        accumRGB = (fishSkinCol * bodyMask + accumRGB * accumA * (1.0 - bodyMask)) / max(outA, 1e-5);
        accumA = outA;
      }
    }
  }

  return vec4(accumRGB, accumA);
}

// Evaluates simple flat matte floating koi food grains (zero specular/shadow)
vec4 evaluateFoodPellets(vec2 pMetric) {
  vec3 accumRGB = vec3(0.0);
  float accumA = 0.0;

  for (int i = 0; i < 12; i++) {
    vec4 pel = u_foodPellets[i];
    float r = pel.z;
    float alpha = pel.w;
    if (r < 0.0003 || alpha <= 0.005) continue;

    vec2 center = vec2(pel.x * u_aspect, pel.y);
    float d = length(pMetric - center);
    if (d < r * 1.15) {
      float body = smoothstep(r * 1.15, r * 0.65, d) * 0.92 * alpha;
      vec3 pelCol = vec3(0.42, 0.22, 0.09);

      float outA = body + accumA * (1.0 - body);
      accumRGB = (pelCol * body + accumRGB * accumA * (1.0 - body)) / max(outA, 1e-5);
      accumA = outA;
    }
  }

  return vec4(accumRGB, accumA);
}

// Evaluates subtle pale celadon-grey river pebbles on the underwater pond bed:
// Multiplies raw optical irradiance BEFORE tonemapping so real RGB caustics focus directly onto the stones!
vec3 evaluateSubmergedPebbles(vec2 pMetric) {
  vec3 bedAlbedo = vec3(1.0);

  for (int i = 0; i < 3; i++) {
    vec4 peb = u_pebbles[i];
    float r = peb.z;
    if (r < 0.001) continue;

    vec2 center = vec2(peb.x * u_aspect, peb.y);
    vec2 dVec = pMetric - center;
    if (dot(dVec, dVec) > r * r * 1.75) continue;

    // Whisper-soft contact shade on the white porcelain sand bed
    vec2 dShade = (dVec - vec2(0.004, -0.006)) / max(r, 1e-4);
    float contactShade = smoothstep(1.25, 0.86, length(dShade)) * 0.032;
    bedAlbedo *= (1.0 - contactShade);

    float c = cos(peb.w), s = sin(peb.w);
    vec2 loc = vec2(c * dVec.x + s * dVec.y, -s * dVec.x + c * dVec.y);
    // Smooth organic egg-oval river stone silhouette
    loc.y *= 1.0 + 0.10 * clamp(loc.x / max(r, 1e-4), -1.0, 1.0);
    float ellipD = length(vec2(loc.x / max(r, 1e-4), loc.y / max(r * 0.74, 1e-4)));

    if (ellipD < 1.08) {
      float mask = smoothstep(1.06, 0.70, ellipD);
      vec3 baseTint = (i == 0)
        ? vec3(0.685, 0.712, 0.708)
        : ((i == 1) ? vec3(0.738, 0.736, 0.722) : vec3(0.655, 0.682, 0.690));
      float dome = clamp(0.5 + 0.38 * (-dVec.x + dVec.y) / max(r, 1e-4), 0.0, 1.0);
      vec3 stoneCol = mix(baseTint * 0.93, min(vec3(0.88), baseTint * 1.07), dome);
      bedAlbedo = mix(bedAlbedo, stoneCol, mask);
    }
  }

  return bedAlbedo;
}

// Evaluates minimalist sumi-celadon watercolor lotus leaves floating on the pond surface
vec4 evaluateLotusPads(vec2 pMetric) {
  vec3 accumRGB = vec3(0.0);
  float accumA = 0.0;

  for (int i = 0; i < 2; i++) {
    vec4 pad = u_lotusPads[i];
    float r = pad.z;
    if (r < 0.002) continue;

    vec2 center = vec2(pad.x * u_aspect, pad.y);
    vec2 dVec = pMetric - center;
    if (dot(dVec, dVec) > r * r * 1.25) continue;

    float c = cos(pad.w), s = sin(pad.w);
    vec2 loc = vec2(c * dVec.x + s * dVec.y, -s * dVec.x + c * dVec.y);
    float theta = atan(loc.y, loc.x);
    // Gentle 7-lobe botanical margin + single classic V-cleft notch
    float notch = 0.34 * exp(-pow(theta / 0.26, 2.0));
    float rimR = r * (1.0 + 0.026 * cos(theta * 7.0) - notch);
    float normR = length(loc) / max(rimR, 1e-5);

    if (normR < 1.04) {
      float leafAlpha = smoothstep(1.025, 0.935, normR) * 0.90;
      if (leafAlpha > 0.004) {
        // Low-saturation sumi-celadon / mineral sage watercolor wash (水墨青瓷繪本風)
        vec3 coreCol = vec3(0.155, 0.238, 0.212);
        vec3 midCol  = vec3(0.232, 0.326, 0.288);
        vec3 rimCol  = vec3(0.298, 0.386, 0.334);
        vec3 leafCol = mix(coreCol, midCol, smoothstep(0.05, 0.72, normR));
        leafCol = mix(leafCol, rimCol, smoothstep(0.70, 0.99, normR));

        // Subtle botanical radial veins + delicate pale celadon petiole center dot
        float vein = pow(max(0.0, cos(theta * 7.0)), 6.0) * smoothstep(0.10, 0.35, normR) * smoothstep(0.96, 0.55, normR);
        leafCol = mix(leafCol, vec3(0.325, 0.415, 0.365), vein * 0.24);
        float navel = smoothstep(0.085, 0.032, normR);
        leafCol = mix(leafCol, vec3(0.410, 0.490, 0.435), navel * 0.68);

        float outA = leafAlpha + accumA * (1.0 - leafAlpha);
        accumRGB = (leafCol * leafAlpha + accumRGB * accumA * (1.0 - leafAlpha)) / max(outA, 1e-5);
        accumA = outA;
      }
    }
  }

  return vec4(accumRGB, accumA);
}

void main() {
  vec2 baseUv = vUv;

  // 1. Smooth 4-Tap Bilinear Central Difference Normal Extraction (16 fetches vs 32)
  vec2 texel = 1.0 / max(u_fdtdGrid, vec2(1.0));
  vec2 step2 = texel * 1.75; // Expanded differential baseline for silky macro water ripples

  float sL = sampleFdtdBilinear(baseUv - vec2(step2.x, 0.0));
  float sR = sampleFdtdBilinear(baseUv + vec2(step2.x, 0.0));
  float sD = sampleFdtdBilinear(baseUv - vec2(0.0, step2.y));
  float sU = sampleFdtdBilinear(baseUv + vec2(0.0, step2.y));

  float liveEz = (sL + sR + sD + sU) * 0.25;
  float livePondPhi = 0.0;
  vec2 gradEz = vec2((sR - sL) * 0.5, (sU - sD) * 0.5);
  if (u_hasPondPhi > 0.5) {
    vec2 stepPhi = 1.5 / max(u_simGrid, vec2(1.0));
    float pL = sampleFieldBilinear(u_finalField_B, baseUv - vec2(stepPhi.x, 0.0)).z;
    float pR = sampleFieldBilinear(u_finalField_B, baseUv + vec2(stepPhi.x, 0.0)).z;
    float pD = sampleFieldBilinear(u_finalField_B, baseUv - vec2(0.0, stepPhi.y)).z;
    float pU = sampleFieldBilinear(u_finalField_B, baseUv + vec2(0.0, stepPhi.y)).z;
    livePondPhi = (pL + pR + pD + pU) * 0.25;
    gradEz += vec2((pR - pL) * 0.5, (pU - pD) * 0.5) * 0.14;
  }

  // Surface normal with organic water curvature scale
  vec3 normal = normalize(vec3(-gradEz * 6.5, 1.0));

  // 2. Continuous Refraction Ray Distortion with Soft Physical Saturation (Snell's Law)
  // Scale UV displacement inversely with viewport height so refraction offsets stay constant in CSS pixels
  float pxScale = clamp(sqrt(900.0 / max(u_resolution.y, 240.0)), 0.75, 1.35);
  vec2 rawOffset = normal.xy * (u_refractionStrength * 0.025 * pxScale);
  float offsetMag = length(rawOffset);
  float maxOffset = 0.045 * pxScale;
  vec2 refrOffset = offsetMag > 1e-5 ? (rawOffset / offsetMag) * (maxOffset * tanh(offsetMag / maxOffset)) : vec2(0.0);

  // Realistic optical dispersion (Cauchy relation for water: delta n ~ 0.008 across visible spectrum)
  vec2 uvR = clamp(baseUv + refrOffset * 1.008, 0.0, 1.0);
  vec2 uvG = clamp(baseUv + refrOffset * 1.000, 0.0, 1.0);
  vec2 uvB = clamp(baseUv + refrOffset * 0.992, 0.0, 1.0);

  vec4 U_RG_R = sampleFieldBilinear(u_finalField_RG, uvR);
  vec4 U_RG_G = sampleFieldBilinear(u_finalField_RG, uvG);
  vec4 U_B_B  = sampleFieldBilinear(u_finalField_B,  uvB);

  // Linear physical optical irradiances with dispersed refraction sampling: I_c = |U_c|^2
  vec3 rawI = vec3(
    dot(U_RG_R.xy, U_RG_R.xy),
    dot(U_RG_G.zw, U_RG_G.zw),
    dot(U_B_B.xy,  U_B_B.xy)
  );

  // Underwater refracted metric coordinate (shared by submerged river pebbles, koi fish & food)
  vec2 distortedUv = clamp(baseUv + refrOffset * 0.65, 0.0, 1.0);
  vec2 pFishMetric = vec2(distortedUv.x * u_aspect, distortedUv.y);
  vec3 pebbleAlbedo = evaluateSubmergedPebbles(pFishMetric);

  // 3. Pre-exposure scaling (caustics focus physically across submerged river pebbles!)
  vec3 hdr = rawI * pebbleAlbedo * u_exposure;

  // 4. Hybrid Luminance / Peak-Channel Norm (prevents per-channel hard clipping & hue skew)
  float luma = dot(hdr, vec3(0.2126, 0.7152, 0.0722));
  float maxC = max(hdr.r, max(hdr.g, hdr.b));
  float norm = mix(luma, maxC, 0.5);

  // 5. ACES Filmic S-Curve on norm (preserves exact 620/532/460nm chromaticity ratio)
  float mappedNorm = acesFilmic(norm);
  vec3 tonemapped = hdr * (mappedNorm / max(norm, 1e-6));

  // 6. AgX Highlight Shoulder Desaturation:
  //    Keeps spectral fringes saturated in midtones/highlights, while gracefully rolling off
  //    extreme caustic focal cusps (mappedNorm > 0.78) into clean incandescent white
  float highlightDesat = smoothstep(0.75, 0.99, mappedNorm);
  float mappedLuma = dot(tonemapped, vec3(0.2126, 0.7152, 0.0722));
  tonemapped = mix(tonemapped, vec3(mappedLuma), highlightDesat * 0.72);

  // Soft per-channel shoulder guard for ultra-saturated single-wavelength spikes
  tonemapped = tonemapped / (1.0 + max(vec3(0.0), tonemapped - 0.85) * 0.8);

  // 7. Micro-facet / Differential Normal Based Reflection Glossiness (WATER SURFACE)
  // View direction towards screen V = (0, 0, 1), Light direction from shallow grazing angle
  vec3 V = vec3(0.0, 0.0, 1.0);
  vec3 L = normalize(vec3(0.3, 0.5, 0.82));
  vec3 H = normalize(L + V);
  float NdotH = max(0.0, dot(normal, H));
  float NdotV = max(0.0, dot(normal, V));

  // Blinn-Phong specular lobe with gloss exponent governed by u_reflectionGloss
  float glossExponent = mix(16.0, 256.0, clamp(u_reflectionGloss, 0.0, 1.0));
  float specular = pow(NdotH, glossExponent) * (glossExponent + 8.0) / 40.0;
  // Schlick Fresnel approximation
  float fresnel = 0.04 + 0.96 * pow(1.0 - NdotV, 5.0);
  vec3 glossReflection = vec3(specular * fresnel * u_reflectionGloss);

  // 8. Additive Ambient Light: Adds ambient floor to background water/pool bed
  vec3 waterComposite = tonemapped + vec3(u_ambient);

  // ---------------------------------------------------------------------------
  // STEP 6.5: COMPOSITE HIGH-RES WATERCOLOR KOI FISH & SURFACE CELADON LOTUS PADS
  // ---------------------------------------------------------------------------
  vec4 fish = evaluateHighResFish(pFishMetric);

  vec3 finalComposite = waterComposite;
  if (fish.a > 0.0) {
    // Pure rich ink & vermilion pigment density (95%+ concentration)
    finalComposite = mix(waterComposite, fish.rgb, fish.a);
  }
  vec4 food = evaluateFoodPellets(pFishMetric);
  if (food.a > 0.0) {
    finalComposite = mix(finalComposite, food.rgb, food.a);
  }

  // Floating celadon lotus pads rest on the water surface (above swimming/sheltering koi, matte-velvet finish)
  vec2 padUv = clamp(baseUv + normal.xy * 0.0022, 0.0, 1.0);
  vec4 lotus = evaluateLotusPads(vec2(padUv.x * u_aspect, padUv.y));
  if (lotus.a > 0.0) {
    finalComposite = mix(finalComposite, lotus.rgb, lotus.a);
  }

  // Composite up to 8 independent high-res emerged portfolio cards shaped by real live water waves + atan expansion!
  float maxCardMask = 0.0;
  for (int c = 0; c < 8; c++) {
    vec4 cp = u_cardParams[c];
    if (cp.x <= 0.002 || cp.w <= 0.5) continue;
    vec4 cb = u_cardBounds[c];
    vec2 bMin = cb.xy;
    vec2 bMax = cb.zw;
    vec2 center = (bMin + bMax) * 0.5;
    vec2 halfSize = max((bMax - bMin) * 0.5, vec2(1e-4));
    vec2 qBase = (baseUv - center) / halfSize;
    if (all(lessThanEqual(abs(qBase), vec2(1.32)))) {
      float emerge = cp.x;
      float smoothEmerge = emerge * emerge * (3.0 - 2.0 * emerge);

      // Organic live fluid edge perturbation directly driven by real water surface slope + live height
      vec2 waveShift = normal.xy * (0.065 * (1.0 - 0.25 * smoothEmerge));
      vec2 qWave = abs(qBase + waveShift);
      float superR = pow(pow(qWave.x, 2.8) + pow(qWave.y, 2.8), 1.0 / 2.8);
      float liveWaterHeight = clamp(liveEz * 1.4 + livePondPhi * 0.16, -0.8, 0.8);
      float rimWaveMod = clamp(liveWaterHeight * 0.085, -0.075, 0.075);

      float outerR = mix(0.20, 1.18, smoothEmerge) + rimWaveMod;
      float innerR = max(0.0, outerR - 0.28);
      float cMask = (1.0 - smoothstep(innerR, outerR, superR)) * clamp(smoothEmerge * 1.35, 0.0, 1.0);

      if (cMask > 0.002) {
        // Smooth C-infinity soft-clamp: 0.5*sqrt(a+(x+1)^2) - 0.5*sqrt(a+(x-1)^2)
        // Keeps center ~1:1 undistorted while smoothly rounding off past +-1 without kinks
        const float SOFT_CLAMP_A = 0.002;
        vec2 qSample = qBase + normal.xy * (0.006 * (1.0 - cMask));
        vec2 softQ = 0.5 * sqrt(SOFT_CLAMP_A + (qSample + 1.0) * (qSample + 1.0))
                   - 0.5 * sqrt(SOFT_CLAMP_A + (qSample - 1.0) * (qSample - 1.0));
        vec2 coverUv = softQ * 0.5 + 0.5;

        float imgAsp = max(cp.y, 0.1);
        float boxAsp = max(cp.z, 0.1);
        if (imgAsp > boxAsp) {
          float scaleX = boxAsp / imgAsp;
          coverUv.x = (coverUv.x - 0.5) * scaleX + 0.5;
        } else {
          float scaleY = imgAsp / boxAsp;
          coverUv.y = (coverUv.y - 0.5) * scaleY + 0.5;
        }
        vec3 srgbSample = sampleActiveCardTex(c, clamp(coverUv, 0.0, 1.0)).rgb;
        vec3 linearCard = pow(clamp(srgbSample, 0.0, 1.0), vec3(2.2));
        finalComposite = mix(finalComposite, linearCard, cMask);
        maxCardMask = max(maxCardMask, cMask);
      }
    }
  }

  // Composite glossy surface reflection (damped over superhydrophobic matte lotus leaf and dry card center)
  finalComposite += glossReflection * (1.0 - lotus.a * 0.78) * (1.0 - maxCardMask * 0.85);

  // 9. Linear to sRGB transfer curve
  vec3 srgb = pow(clamp(finalComposite, 0.0, 1.0), vec3(1.0 / 2.2));

  gl_FragColor = vec4(srgb, 1.0);
}
`,$M=`
precision highp float;
precision highp sampler2D;

uniform sampler2D u_texRG;
uniform sampler2D u_texB;

layout(location = 0) out vec4 outRG;
layout(location = 1) out vec4 outB;

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);
  outRG = texelFetch(u_texRG, coord, 0);
  outB  = texelFetch(u_texB,  coord, 0);
}
`;class jM{constructor(e){Z(this,"renderer");Z(this,"scene");Z(this,"camera");Z(this,"width",512);Z(this,"height",512);Z(this,"viewportWidth",900);Z(this,"viewportHeight",900);Z(this,"fftRGB");Z(this,"fdtd");Z(this,"rtTarget");Z(this,"rtTargetKSpace");Z(this,"rtMaterial");Z(this,"rtPreFocus");Z(this,"mrtScratch");Z(this,"rtDisplayFinal");Z(this,"runner");Z(this,"targetSceneMaterial");Z(this,"materialMapMaterial");Z(this,"asmModMaterial");Z(this,"phaseScreenMaterial");Z(this,"masterCausticMaterial");Z(this,"mrtBlitMaterial");Z(this,"needBackwardUpdate",!0);Z(this,"needTargetFFTUpdate",!0);Z(this,"needMaterialUpdate",!0);Z(this,"cachedPreFocusRT",null);Z(this,"_wavelength",Qe[1].wavelength);Z(this,"_deltaZ",Qe[1].propagationZ);Z(this,"_refractiveIndex",Qe[1].refractiveIndex);Z(this,"_materialAbsorption",Qe[1].materialAbsorption);Z(this,"phaseCoupling",Qe[1].phaseCoupling);Z(this,"smoothedCoupling",Qe[1].phaseCoupling);Z(this,"exposure",Qe[1].exposure);Z(this,"ambient",Qe[1].ambient);Z(this,"refractionStrength",Qe[1].refractionStrength);Z(this,"reflectionGloss",Qe[1].reflectionGloss);Z(this,"pondWaveAmp",Qe[1].pondWaveAmp);Z(this,"pondWaveK0",Qe[1].pondWaveK0);Z(this,"pondWaveSpeed",Qe[1].pondWaveSpeed);Z(this,"pondWavePower",Qe[1].pondWavePower);Z(this,"pondWaveTime",0);Z(this,"hasPondPhiValid",!1);Z(this,"lastPondScrollUv",new He(0,0));Z(this,"smoothedScrollUv",new He(0,0));Z(this,"floatType",Et);Z(this,"lotusUniforms",[new je,new je]);Z(this,"pebbleUniforms",[new je,new je,new je]);Z(this,"activeLotusPads",[{x:.1,y:.22,r:.06},{x:.9,y:.78,r:.05}]);Z(this,"lotusDrift",[{dScale:0,vScale:0},{dScale:0,vScale:0}]);Z(this,"textureAspect",1);Z(this,"currentTextureUrl","");Z(this,"mouse",{x:0,y:0,prevX:0,prevY:0,vx:0,vy:0,isDown:!1});Z(this,"isReady",!1);Z(this,"telemetry",{continuousMode:0,mouseScattering:0,waveEnergy:0,projectionName:"PHYSICAL RGB (620/532/460nm) ASM + FDTD",scaleExponentStr:"10⁰ m"});Z(this,"perturbationRenderer");Z(this,"pendingStrokes",[]);Z(this,"pendingWavePulse",null);Z(this,"fishSim");Z(this,"activeCardTexCache",new WeakMap);Z(this,"allocatedCardTextures",new Set);Z(this,"cardPlaceholderTex",null);this.renderer=new RM({canvas:e,antialias:!1,alpha:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<=768?1:1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.renderer.getContext(),i=!!(t&&t.getExtension("EXT_color_buffer_float"));!i&&t&&t.getExtension("EXT_color_buffer_half_float"),this.floatType=i?Et:yr,this.viewportWidth=Math.max(1,window.innerWidth),this.viewportHeight=Math.max(1,window.innerHeight);const r=this.calculateOptimalGrid(this.viewportWidth,this.viewportHeight);this.width=r.width,this.height=r.height,this.scene=new Sr,this.camera=new br(-1,1,1,-1,0,1),this.runner=new La;const s=Math.max(64,this.width>>1),o=Math.max(64,this.height>>1);this.perturbationRenderer=new HM(s,o,this.runner,this.floatType),this.fftRGB=new Vu(this.width,this.height,this.runner,this.floatType),this.fdtd=new OM({width:s,height:o,cfl:.5,pmlCells:16,pmlSigmaMax:16,runner:this.runner,floatType:this.floatType});const a={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},l={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1},c={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtTarget=new Ke(this.width,this.height,l),this.rtTargetKSpace=new Ke(this.width,this.height,l),this.rtMaterial=new Ke(this.width,this.height,a),this.rtPreFocus=new Ke(this.width,this.height,l),this.mrtScratch=new Ke(this.width,this.height,l),this.rtDisplayFinal=new Ke(this.width,this.height,c),this.hasPondPhiValid=!1;const u=new CM(new Uint8Array([0,0,0,0]),1,1,pt);u.needsUpdate=!0,this.cardPlaceholderTex=u,this.fishSim=new Tl,this.fishSim.setAspect(this.viewportWidth/Math.max(1,this.viewportHeight)),this.fishSim.setViewportSize(this.viewportWidth,this.viewportHeight);const h=this.fishSim.packUniforms();this.targetSceneMaterial=new Mt({glslVersion:zi,vertexShader:Ws,fragmentShader:WM,uniforms:{u_logoTexture:{value:u},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishSpines:{value:h.spines}}}),this.materialMapMaterial=new Mt({vertexShader:Wu,fragmentShader:XM,uniforms:{u_logoTexture:{value:u},u_refractiveIndex:{value:this.refractiveIndex},u_materialAbsorption:{value:this.materialAbsorption},u_dielectricRelief:{value:0}}}),this.asmModMaterial=new Mt({glslVersion:zi,vertexShader:Ws,fragmentShader:qM,uniforms:{u_kSpaceRG:{value:null},u_kSpaceB:{value:null},u_resolution:{value:new He(this.width,this.height)},u_viewportSize:{value:new He(this.viewportWidth,this.viewportHeight)},u_scrollUv:{value:new He(0,0)},u_wavelengths:{value:new ee(this.wavelength*Gs,this.wavelength*Vs,this.wavelength*ks)},u_pupilNA:{value:.95},u_propagationZ:{value:0},u_time:{value:0},u_pondWaveAmp:{value:this.pondWaveAmp},u_pondWaveK0:{value:this.pondWaveK0},u_pondWaveTime:{value:0},u_pondWavePower:{value:this.pondWavePower}}}),this.phaseScreenMaterial=new Mt({glslVersion:zi,vertexShader:Ws,fragmentShader:YM,uniforms:{u_preFocusRG:{value:null},u_preFocusB:{value:null},u_fdtdTex:{value:null},u_materialTex:{value:null},u_pondPhiTex:{value:this.rtDisplayFinal.textures[1]},u_pondPhiScrollDelta:{value:new He(0,0)},u_hasPondPhi:{value:0},u_phaseCoupling:{value:this.phaseCoupling},u_invWavelengthRatios:{value:new ee(1/Gs,1/Vs,1/ks)},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishSpines:{value:h.spines},u_lotusPads:{value:this.lotusUniforms}}}),this.masterCausticMaterial=new Mt({vertexShader:Wu,fragmentShader:KM,uniforms:{u_finalField_RG:{value:null},u_finalField_B:{value:null},u_fdtdTex:{value:null},u_resolution:{value:new He(window.innerWidth,window.innerHeight)},u_simGrid:{value:new He(this.width,this.height)},u_fdtdGrid:{value:new He(s,o)},u_exposure:{value:this.exposure},u_ambient:{value:this.ambient},u_refractionStrength:{value:this.refractionStrength},u_reflectionGloss:{value:this.reflectionGloss},u_hasPondPhi:{value:0},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishColors:{value:h.colors},u_fishSpines:{value:h.spines},u_foodPellets:{value:h.pellets},u_lotusPads:{value:this.lotusUniforms},u_pebbles:{value:this.pebbleUniforms},u_cardTex0:{value:u},u_cardTex1:{value:u},u_cardTex2:{value:u},u_cardTex3:{value:u},u_cardTex4:{value:u},u_cardTex5:{value:u},u_cardTex6:{value:u},u_cardTex7:{value:u},u_cardBounds:{value:Array.from({length:8},()=>new je(0,0,0,0))},u_cardParams:{value:Array.from({length:8},()=>new je(0,1.6,1.6,0))}}}),this.mrtBlitMaterial=new Mt({glslVersion:zi,vertexShader:Ws,fragmentShader:$M,uniforms:{u_texRG:{value:null},u_texB:{value:null}}}),this.loadTexture("white-square")}get fftTarget(){return this.fftRGB}get fftBackwardRGB(){return this.fftRGB}get fftForwardRGB(){return this.fftRGB}get fftFinalRGB(){return this.fftRGB}get wavelength(){return this._wavelength}set wavelength(e){Math.abs(this._wavelength-e)>1e-4&&(this._wavelength=e,this.needBackwardUpdate=!0)}get deltaZ(){return this._deltaZ}set deltaZ(e){Math.abs(this._deltaZ-e)>1e-4&&(this._deltaZ=e,this.needBackwardUpdate=!0)}get refractiveIndex(){return this._refractiveIndex}set refractiveIndex(e){this._refractiveIndex!==e&&(this._refractiveIndex=e,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0)}get materialAbsorption(){return this._materialAbsorption}set materialAbsorption(e){this._materialAbsorption!==e&&(this._materialAbsorption=e,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0)}get phaseCouplingIn(){return this.phaseCoupling}set phaseCouplingIn(e){this.phaseCoupling=e}get phaseCouplingOut(){return this.phaseCoupling}set phaseCouplingOut(e){this.phaseCoupling=e}hitTestLotusPad(e,t){const i=this.viewportWidth/Math.max(1,this.viewportHeight),r=e*i;for(let s=0;s<this.activeLotusPads.length;s++){const o=this.activeLotusPads[s];if(o.r<.002)continue;const a=r-o.x*i,l=t-o.y,c=Math.max(o.r*1.5,.055);if(a*a+l*l<=c*c)return s}return-1}nudgeLotusPad(e){const t=this.lotusDrift[e],i=this.activeLotusPads[e];!t||!i||(t.dScale=-.05,t.vScale=0,this.addPerturbation(i.x,i.y,i.x,i.y,.042,.55))}triggerScrollWave(e,t,i=1){this.pendingWavePulse={strength:e,y:t,dir:i}}dropFoodPellet(e,t){this.fishSim.dropFood(e,t);const i=Math.min(2.25,Math.max(.45,900/Math.max(240,this.viewportHeight)));this.addPerturbation(e,t,e,t,.042*i,.72)}setPmlSides(e,t,i,r){this.fdtd.setPmlSides(e,t,i,r)}setCardIslands(e){this.fdtd.setCardIslands(e)}setCardIsland(e,t,i,r,s,o,a=0){this.fdtd.setCardIsland(e,t,i,r,s,o,a)}setActiveCards(e){const t=this.masterCausticMaterial.uniforms,i=t.u_cardBounds.value,r=t.u_cardParams.value;let s=0;for(let o=0;o<e.length&&s<8;o++){const a=e[o];if(!a.img||!a.img.complete||a.img.naturalWidth<=0||a.emerge<=.002)continue;let l=this.activeCardTexCache.get(a.img);l||(l=new Rt(a.img),l.wrapS=xt,l.wrapT=xt,l.minFilter=mt,l.magFilter=mt,l.generateMipmaps=!1,l.needsUpdate=!0,this.activeCardTexCache.set(a.img,l),this.allocatedCardTextures.add(l));const c=t["u_cardTex"+s];c&&c.value!==l&&(c.value=l);const u=a.img.naturalWidth/Math.max(1,a.img.naturalHeight);i[s].set(a.uMin,a.vMin,a.uMax,a.vMax),r[s].set(a.emerge,u,Math.max(.1,a.boxAspect),1),s++}for(let o=s;o<8;o++)if(r[o].set(0,1.6,1.6,0),this.cardPlaceholderTex){const a=t["u_cardTex"+o];a&&a.value!==this.cardPlaceholderTex&&(a.value=this.cardPlaceholderTex)}}setActiveCard(e,t,i,r,s,o,a){!e||o<=.002?this.setActiveCards([]):this.setActiveCards([{img:e,uMin:t,vMin:i,uMax:r,vMax:s,emerge:o,boxAspect:a}])}setMode(e){}createWhiteSquareTexture(e=1024,t=1){const i=document.createElement("canvas");i.width=e,i.height=e;const r=i.getContext("2d");if(r)if(t>=1)r.fillStyle="#ffffff",r.fillRect(0,0,e,e);else{r.fillStyle="#000000",r.fillRect(0,0,e,e);const o=Math.round(e*t),a=Math.round((e-o)/2);r.fillStyle="#ffffff",r.fillRect(a,a,o,o)}const s=new Yr(i);return s.wrapS=xt,s.wrapT=xt,s.minFilter=mt,s.magFilter=mt,s.generateMipmaps=!1,s.needsUpdate=!0,s}createChaiLogoTexture(e=1024){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");i&&(i.fillStyle="#000000",i.fillRect(0,0,e,e),i.fillStyle="#ffffff",i.font='bold 580px "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("柴",e/2,e/2));const r=new Yr(t);return r.wrapS=xt,r.wrapT=xt,r.minFilter=mt,r.magFilter=mt,r.generateMipmaps=!1,r.needsUpdate=!0,r}async loadTexture(e="white-square"){if(!(this.currentTextureUrl===e&&this.isReady)){if(this.currentTextureUrl=e,e==="white-square"){const t=this.createWhiteSquareTexture(1024,1);this.setTexture(t,1);return}(e==="chai"||e==="chai-logo")&&(e="/chai_black.png");try{const t=new Image;t.crossOrigin="anonymous",t.src=e,"decode"in t?await t.decode():await new Promise((r,s)=>{t.onload=()=>r(),t.onerror=s}),this.textureAspect=t.naturalWidth&&t.naturalHeight?t.naturalWidth/t.naturalHeight:1;const i=new Rt(t);i.wrapS=xt,i.wrapT=xt,i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,this.targetSceneMaterial.uniforms.u_logoTexture.value=i,this.materialMapMaterial.uniforms.u_logoTexture.value=i}catch(t){console.warn("[FourierContinuumEngine] Network image load failed, activating fallback aperture:",t);const i=e.includes("chai")?this.createChaiLogoTexture(1024):this.createWhiteSquareTexture(1024,.75);this.textureAspect=1,this.targetSceneMaterial.uniforms.u_logoTexture.value=i,this.materialMapMaterial.uniforms.u_logoTexture.value=i}this.materialMapMaterial.uniforms.u_dielectricRelief.value=0,this.isReady=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.fdtd.reset(this.renderer)}}setTexture(e,t=1){this.textureAspect=t,this.materialMapMaterial.uniforms.u_dielectricRelief.value=0,this.targetSceneMaterial.uniforms.u_logoTexture.value=e,this.materialMapMaterial.uniforms.u_logoTexture.value=e,this.isReady=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.fdtd.reset(this.renderer)}updateDynamicApertureTexture(e,t=1){this.materialMapMaterial.uniforms.u_dielectricRelief.value=t,this.targetSceneMaterial.uniforms.u_logoTexture.value!==e&&(this.targetSceneMaterial.uniforms.u_logoTexture.value=e,this.materialMapMaterial.uniforms.u_logoTexture.value=e,this.isReady=!0),e.needsUpdate=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0}setMaterialTexture(e,t=1){this.setTexture(e,t)}addPerturbations(e){for(let t=0;t<e.length;t++)this.pendingStrokes.length<16&&this.pendingStrokes.push(e[t])}addPerturbation(e,t,i,r,s=.04,o=.6){this.pendingStrokes.length<16&&this.pendingStrokes.push({x0:e,y0:t,x1:i,y1:r,radius:s,strength:o})}createFallbackTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t&&(t.fillStyle="#000000",t.fillRect(0,0,512,512),t.fillStyle="#ffffff",t.font='bold 280px "Noto Sans TC", "PingFang TC", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("柴",256,256));const i=new Yr(e);return i.wrapS=xt,i.wrapT=xt,i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,i}computeBackwardASM(){const e=this._wavelength*Gs,t=this._wavelength*Vs,i=this._wavelength*ks;if(this.needMaterialUpdate&&(this.materialMapMaterial.uniforms.u_refractiveIndex.value=this._refractiveIndex,this.materialMapMaterial.uniforms.u_materialAbsorption.value=this._materialAbsorption,this.runner.render(this.renderer,this.materialMapMaterial,this.rtMaterial),this.needMaterialUpdate=!1),this.needTargetFFTUpdate){this.runner.render(this.renderer,this.targetSceneMaterial,this.rtTarget);const s=this.fftRGB.execute(this.renderer,this.rtTarget.textures[0],this.rtTarget.textures[1],!0);this.mrtBlitMaterial.uniforms.u_texRG.value=s.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=s.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtTargetKSpace),this.needTargetFFTUpdate=!1}this.asmModMaterial.uniforms.u_kSpaceRG.value=this.rtTargetKSpace.textures[0],this.asmModMaterial.uniforms.u_kSpaceB.value=this.rtTargetKSpace.textures[1],this.asmModMaterial.uniforms.u_viewportSize.value.set(this.viewportWidth,this.viewportHeight),this.asmModMaterial.uniforms.u_scrollUv.value.set(0,0),this.asmModMaterial.uniforms.u_wavelengths.value.set(e,t,i),this.asmModMaterial.uniforms.u_propagationZ.value=-this._deltaZ,this.runner.render(this.renderer,this.asmModMaterial,this.mrtScratch);const r=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!1);this.mrtBlitMaterial.uniforms.u_texRG.value=r.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=r.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtPreFocus),this.renderer.setRenderTarget(null),this.cachedPreFocusRT=this.rtPreFocus,this.needBackwardUpdate=!1}update(e,t){if(!this.isReady){this.renderer.setRenderTarget(null),this.renderer.clearColor();return}const i=this.mouse.x-this.mouse.prevX,r=this.mouse.y-this.mouse.prevY;this.mouse.vx=this.mouse.vx*.65+i*.35,this.mouse.vy=this.mouse.vy*.65+r*.35,this.mouse.prevX=this.mouse.x,this.mouse.prevY=this.mouse.y;const s=Math.sqrt(this.mouse.vx**2+this.mouse.vy**2),o=this.renderer.domElement,a=(o.clientWidth||window.innerWidth)/Math.max(1,o.clientHeight||window.innerHeight);this.fishSim.setAspect(a),this.fishSim.setViewportSize(this.viewportWidth,this.viewportHeight),this.asmModMaterial.uniforms.u_viewportSize.value.set(this.viewportWidth,this.viewportHeight);const l=Math.min(Math.max(e,0),.05);let c=this.lastPondScrollUv.x,u=this.lastPondScrollUv.y,h=0,d=0;if(typeof window<"u"){const le=window.scrollX*.8/Math.max(240,this.viewportWidth),ge=window.scrollY*.8/Math.max(240,this.viewportHeight),ye=l>0?1-Math.exp(-l*28):1,te=this.smoothedScrollUv.x,se=this.smoothedScrollUv.y;this.smoothedScrollUv.x+=(le-this.smoothedScrollUv.x)*ye,this.smoothedScrollUv.y+=(ge-this.smoothedScrollUv.y)*ye,h=this.smoothedScrollUv.x-te,d=this.smoothedScrollUv.y-se,c=(this.smoothedScrollUv.x%1+1)%1,u=(this.smoothedScrollUv.y%1+1)%1}this.phaseScreenMaterial.uniforms.u_pondPhiScrollDelta&&this.phaseScreenMaterial.uniforms.u_pondPhiScrollDelta.value.set(c-this.lastPondScrollUv.x,u-this.lastPondScrollUv.y),this.fishSim.applyScrollShift(-h,d);const f=ae=>((ae+this.smoothedScrollUv.y+.22)%1.44+1.44)%1.44-.22,v=a<.78,x=v?.44:Math.min(1.18,Math.max(.82,Math.sqrt(900/Math.max(240,this.viewportHeight))));for(let ae=0;ae<2;ae++){const le=this.lotusDrift[ae],ge=Math.exp(-l*6.5);le.vScale=le.vScale*ge-le.dScale*42*l,le.dScale+=le.vScale*l}const m=(v?.8:.105)+Math.sin(t*.42)*.0045,p=f(v?.82:.76)+Math.cos(t*.35)*.0045,A=.062*x*(1+this.lotusDrift[0].dScale),w=-.52+Math.sin(t*.31)*.07,S=(v?1.012:.895)+Math.cos(t*.38+1.7)*.0045,G=f(v?.34:.24)+Math.sin(t*.46+1.1)*.0045,C=.048*x*(1+this.lotusDrift[1].dScale),F=2.55+Math.cos(t*.29+.8)*.07;this.lotusUniforms[0].set(m,p,A,w),this.lotusUniforms[1].set(S,G,C,F),this.activeLotusPads[0].x=m,this.activeLotusPads[0].y=p,this.activeLotusPads[0].r=A,this.activeLotusPads[1].x=S,this.activeLotusPads[1].y=G,this.activeLotusPads[1].r=C,this.pebbleUniforms[0].set(v?.105:.168,f(.32),.025*x,.42),this.pebbleUniforms[1].set(v?.148:.204,f(.355),.016*x,-.65),this.pebbleUniforms[2].set(v?.885:.835,f(.58),.021*x,1.05);const B=this.mouse.x*.5+.5,E=this.mouse.y*.5+.5;this.fishSim.update(e,t,B,E,this.mouse.isDown||s>.005,(ae,le,ge,ye,te,se)=>{this.pendingStrokes.length<16&&this.pendingStrokes.push({x0:ae,y0:le,x1:ge,y1:ye,radius:te,strength:se})},this.activeLotusPads);const M=this.fishSim.packUniforms(),D=this.hasPondPhiValid&&this.pondWaveAmp>5e-4?1:0;if(this.phaseScreenMaterial.uniforms.u_aspect.value=a,this.phaseScreenMaterial.uniforms.u_time&&(this.phaseScreenMaterial.uniforms.u_time.value=t),this.phaseScreenMaterial.uniforms.u_fishHeads.value=M.heads,this.phaseScreenMaterial.uniforms.u_fishSpines.value=M.spines,this.masterCausticMaterial.uniforms.u_aspect.value=a,this.masterCausticMaterial.uniforms.u_time&&(this.masterCausticMaterial.uniforms.u_time.value=t),this.masterCausticMaterial.uniforms.u_fishHeads.value=M.heads,this.masterCausticMaterial.uniforms.u_fishColors.value=M.colors,this.masterCausticMaterial.uniforms.u_fishSpines.value=M.spines,this.masterCausticMaterial.uniforms.u_foodPellets.value=M.pellets,this.pendingStrokes.length===0&&(this.mouse.isDown||s>.005)){const ae=this.mouse.prevX*.5+.5,le=this.mouse.prevY*.5+.5,ge=this.mouse.x*.5+.5,ye=this.mouse.y*.5+.5,te=(this.mouse.isDown?.75:.35)*Math.min(1,.4+s*8),se=Math.min(2.25,Math.max(.45,900/Math.max(240,this.viewportHeight)));this.pendingStrokes.push({x0:ae,y0:le,x1:ge,y1:ye,radius:.045*se,strength:te})}const N=this.perturbationRenderer.update(this.renderer,this.pendingStrokes,.82,this.pendingWavePulse);this.pendingStrokes.length=0,this.pendingWavePulse=null,(this.needBackwardUpdate||!this.cachedPreFocusRT)&&this.computeBackwardASM(),this.fdtd.step(this.renderer,{subSteps:2,elapsed:t,sourceType:"none",sourceFreq:18,sourceAmp:.28,materialTex:this.rtMaterial.texture,sourceTex:N});const O=this.fdtd.getEFieldRenderTarget();this.smoothedCoupling=this.smoothedCoupling*.92+this.phaseCoupling*.08,this.phaseScreenMaterial.uniforms.u_preFocusRG.value=this.rtPreFocus.textures[0],this.phaseScreenMaterial.uniforms.u_preFocusB.value=this.rtPreFocus.textures[1],this.phaseScreenMaterial.uniforms.u_fdtdTex.value=O.texture,this.phaseScreenMaterial.uniforms.u_materialTex.value=this.rtMaterial.texture,this.phaseScreenMaterial.uniforms.u_pondPhiTex.value=this.rtDisplayFinal.textures[1],this.phaseScreenMaterial.uniforms.u_hasPondPhi.value=D,this.phaseScreenMaterial.uniforms.u_phaseCoupling.value=this.smoothedCoupling,this.runner.render(this.renderer,this.phaseScreenMaterial,this.mrtScratch),this.pondWaveTime+=Math.min(Math.max(e,0),.05)*this.pondWaveSpeed;const j=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!0),oe=this._wavelength*Gs,$=this._wavelength*Vs,re=this._wavelength*ks;this.asmModMaterial.uniforms.u_kSpaceRG.value=j.textures[0],this.asmModMaterial.uniforms.u_kSpaceB.value=j.textures[1],this.asmModMaterial.uniforms.u_wavelengths.value.set(oe,$,re),this.asmModMaterial.uniforms.u_propagationZ.value=+this._deltaZ,this.asmModMaterial.uniforms.u_time&&(this.asmModMaterial.uniforms.u_time.value=t),this.asmModMaterial.uniforms.u_pondWaveAmp&&(this.asmModMaterial.uniforms.u_pondWaveAmp.value=this.pondWaveAmp),this.asmModMaterial.uniforms.u_pondWaveK0&&(this.asmModMaterial.uniforms.u_pondWaveK0.value=this.pondWaveK0),this.asmModMaterial.uniforms.u_pondWaveTime&&(this.asmModMaterial.uniforms.u_pondWaveTime.value=this.pondWaveTime),this.asmModMaterial.uniforms.u_pondWavePower&&(this.asmModMaterial.uniforms.u_pondWavePower.value=this.pondWavePower),this.asmModMaterial.uniforms.u_scrollUv&&this.asmModMaterial.uniforms.u_scrollUv.value.set(c,u),this.runner.render(this.renderer,this.asmModMaterial,this.mrtScratch);const K=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!1);this.mrtBlitMaterial.uniforms.u_texRG.value=K.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=K.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtDisplayFinal),this.hasPondPhiValid=!0,this.lastPondScrollUv.set(c,u),this.masterCausticMaterial.uniforms.u_finalField_RG.value=this.rtDisplayFinal.textures[0],this.masterCausticMaterial.uniforms.u_finalField_B.value=this.rtDisplayFinal.textures[1],this.masterCausticMaterial.uniforms.u_fdtdTex.value=O.texture,this.masterCausticMaterial.uniforms.u_exposure.value=this.exposure,this.masterCausticMaterial.uniforms.u_ambient.value=this.ambient,this.masterCausticMaterial.uniforms.u_refractionStrength.value=this.refractionStrength,this.masterCausticMaterial.uniforms.u_reflectionGloss.value=this.reflectionGloss,this.masterCausticMaterial.uniforms.u_hasPondPhi.value=this.pondWaveAmp>5e-4?1:0,this.runner.render(this.renderer,this.masterCausticMaterial,null);const me=Math.min(1,s*45+(this.mouse.isDown?.65:0));this.telemetry.mouseScattering+=(me-this.telemetry.mouseScattering)*.15}calculateOptimalGrid(e,t){const i=e/Math.max(1,t);let r=512,s=512;return Math.min(e,t)<=768?(r=i<1?128:256,s=i<1?256:128):e>=1400&&i>=1.5?(r=1024,s=512):(r=512,s=512),{width:r,height:s}}resize(e,t){const i=Math.max(1,Math.round(e)),r=Math.max(1,Math.round(t)),s=i/r;this.viewportWidth=i,this.viewportHeight=r,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<=768?1:1.5)),this.renderer.setSize(i,r,!0),this.asmModMaterial.uniforms.u_viewportSize.value.set(i,r),this.masterCausticMaterial.uniforms.u_resolution.value.set(i,r),this.masterCausticMaterial.uniforms.u_aspect.value=s,this.targetSceneMaterial.uniforms.u_aspect.value=s,this.fishSim.setAspect(s),this.fishSim.setViewportSize(i,r);const{width:o,height:a}=this.calculateOptimalGrid(i,r);if(o===this.width&&a===this.height){this.isReady&&(this.needTargetFFTUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.update(0,performance.now()/1e3));return}this.width=o,this.height=a;const l=this.rtPreFocus;this.rtTarget.dispose(),this.rtTargetKSpace.dispose(),this.rtMaterial.dispose(),this.mrtScratch.dispose(),this.rtDisplayFinal.dispose();const c={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},u={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1},h={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtTarget=new Ke(this.width,this.height,u),this.rtTargetKSpace=new Ke(this.width,this.height,u),this.rtMaterial=new Ke(this.width,this.height,c),this.rtPreFocus=new Ke(this.width,this.height,u),this.mrtScratch=new Ke(this.width,this.height,u),this.rtDisplayFinal=new Ke(this.width,this.height,h),this.hasPondPhiValid=!1,this.phaseScreenMaterial.uniforms.u_pondPhiTex.value=this.rtDisplayFinal.textures[1],this.mrtBlitMaterial.uniforms.u_texRG.value=l.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=l.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtPreFocus),this.renderer.setRenderTarget(null),l.dispose(),this.fftRGB.dispose(),this.fftRGB=new Vu(this.width,this.height,this.runner,this.floatType);const d=Math.max(64,this.width>>1),f=Math.max(64,this.height>>1);this.fdtd.resize(d,f,this.renderer),this.perturbationRenderer.resize(d,f,this.renderer),this.asmModMaterial.uniforms.u_resolution.value.set(this.width,this.height),this.masterCausticMaterial.uniforms.u_simGrid.value.set(this.width,this.height),this.masterCausticMaterial.uniforms.u_fdtdGrid.value.set(d,f),this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.isReady&&(this.computeBackwardASM(),this.update(.016,performance.now()/1e3))}dispose(){var e;this.fftRGB.dispose(),this.fdtd.dispose(),this.perturbationRenderer.dispose(),this.rtTarget.dispose(),this.rtTargetKSpace.dispose(),this.rtMaterial.dispose(),this.rtPreFocus.dispose(),this.mrtScratch.dispose(),this.rtDisplayFinal.dispose(),this.targetSceneMaterial.dispose(),this.materialMapMaterial.dispose(),this.asmModMaterial.dispose(),this.phaseScreenMaterial.dispose();for(const t of this.allocatedCardTextures)t.dispose();this.allocatedCardTextures.clear(),(e=this.cardPlaceholderTex)==null||e.dispose(),this.masterCausticMaterial.dispose(),this.mrtBlitMaterial.dispose(),this.runner.dispose(),this.renderer.dispose()}}class ZM{constructor(e=512,t=512){Z(this,"canvas");Z(this,"ctx");Z(this,"texture");Z(this,"imageCache",new Map);Z(this,"visibility",1);Z(this,"lastScrollY",-99999);Z(this,"lastVpW",-1);Z(this,"lastVpH",-1);Z(this,"lastSimW",-1);Z(this,"lastSimH",-1);Z(this,"lastHadVisibleCards",!1);Z(this,"cachedCardEls",null);Z(this,"cardFadeMap",new Map);Z(this,"imageJustLoaded",!0);this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(256,e),this.canvas.height=Math.min(256,t),this.ctx=this.canvas.getContext("2d",{alpha:!1,willReadFrequently:!0}),this.texture=new Yr(this.canvas),this.texture.wrapS=xt,this.texture.wrapT=xt,this.texture.minFilter=mt,this.texture.magFilter=mt,this.texture.generateMipmaps=!1}markDirty(){this.imageJustLoaded=!0}getOrLoadImage(e){if(!e)return null;const t=this.imageCache.get(e);if(t)return t;const i=new Image;i.crossOrigin="anonymous";const r={img:i,loaded:!1,failed:!1};return this.imageCache.set(e,r),i.onload=()=>{r.loaded=!0,this.imageJustLoaded=!0},i.onerror=()=>{r.failed=!0},i.src=e,r}drawRoundedRect(e,t,i,r,s,o){const[a,l,c,u]=o.map(h=>Math.max(0,Math.min(h,Math.min(r,s)*.5)));e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+r-l,i),l>0&&e.quadraticCurveTo(t+r,i,t+r,i+l),e.lineTo(t+r,i+s-c),c>0&&e.quadraticCurveTo(t+r,i+s,t+r-c,i+s),e.lineTo(t+u,i+s),u>0&&e.quadraticCurveTo(t,i+s,t,i+s-u),e.lineTo(t,i+a),a>0&&e.quadraticCurveTo(t,i,t+a,i),e.closePath(),e.fill()}drawCoverImage(e,t,i,r,s,o){const a=t.naturalWidth,l=t.naturalHeight;if(a<=0||l<=0||s<=0||o<=0)return;const c=a/l,u=s/o;let h=0,d=0,f=a,v=l;c>u?(f=l*u,h=(a-f)*.5):(v=a/u,d=(l-v)*.5),e.drawImage(t,h,d,f,v,i,r,s,o)}sync(e,t,i){var M;if(typeof window>"u"||typeof document>"u"||!this.ctx)return!1;const r=e.renderer.domElement.getBoundingClientRect(),s=Math.max(1,r.width||window.innerWidth),o=Math.max(1,r.height||window.innerHeight),a=r.width>0?r.left:0,l=r.height>0?r.top:0,c=Math.min(256,Math.max(64,e.width)),u=Math.min(256,Math.max(64,e.height)),h=window.scrollY||window.pageYOffset||0,d=i?0:1,f=Math.min(Math.max(t,0),.05),v=this.visibility;if(Math.abs(d-this.visibility)>.001){const D=f>0?1-Math.exp(-f*8.5):1;this.visibility+=(d-this.visibility)*D,Math.abs(d-this.visibility)<=.002&&(this.visibility=d)}(!this.cachedCardEls||this.cachedCardEls.length===0||!((M=this.cachedCardEls[0])!=null&&M.isConnected))&&(this.cachedCardEls=Array.from(document.querySelectorAll("[data-project-aperture]")));const x=this.cachedCardEls;let m=!1;for(let D=0;D<x.length;D++){const N=x[D],O=N.dataset.apertureHidden==="1"?0:1,j=this.cardFadeMap.get(N)??1;if(Math.abs(O-j)>.004){const oe=O<j?4.2:3.6,$=f>0?1-Math.exp(-f*oe):1,re=j+(O-j)*$;this.cardFadeMap.set(N,Math.abs(O-re)<=.005?O:re),m=!0}}const p=Math.abs(this.visibility-v)>.002,A=Math.abs(h-this.lastScrollY)>=.5,w=s!==this.lastVpW||o!==this.lastVpH||c!==this.lastSimW||u!==this.lastSimH;if(!p&&!A&&!w&&!this.imageJustLoaded&&!m)return!1;let S=[];if(this.visibility>.004)for(let D=0;D<x.length;D++){const N=x[D],O=this.cardFadeMap.get(N)??1;if(O<=.005)continue;const j=N.getBoundingClientRect(),oe=j.top-l;j.bottom-l<=-24||oe>=o+24||j.width<=4||j.height<=4||S.push({el:N,rect:j,fade:O})}const G=S.length>0;if(!G&&!this.lastHadVisibleCards&&!p&&!w&&!this.imageJustLoaded&&!m)return this.lastScrollY=h,!1;this.lastHadVisibleCards=G;for(let D=0;D<x.length;D++){const O=x[D].querySelector("img");O&&!O.dataset.apertureBound&&(O.dataset.apertureBound="1",O.complete||O.addEventListener("load",()=>{this.imageJustLoaded=!0},{once:!0}))}this.lastScrollY=h,this.lastVpW=s,this.lastVpH=o,this.imageJustLoaded=!1,(c!==this.lastSimW||u!==this.lastSimH)&&(this.canvas.width=c,this.canvas.height=u,this.lastSimW=c,this.lastSimH=u,this.texture.dispose(),this.texture=new Yr(this.canvas),this.texture.wrapS=xt,this.texture.wrapT=xt,this.texture.minFilter=mt,this.texture.magFilter=mt,this.texture.generateMipmaps=!1);const C=this.ctx,F=c/s,B=u/o,E=this.visibility;if(C.globalAlpha=1,C.fillStyle="#ffffff",C.fillRect(0,0,c,u),E>.004){for(let j=0;j<S.length;j++){const{el:oe,rect:$,fade:re}=S[j],K=($.left-a)*F,me=($.top-l)*B,ae=Math.max(1,$.width*F),le=Math.max(1,$.height*B),ge=oe.dataset.projectAperture||"",ye=oe.querySelector("img"),te=ye&&ye.complete&&ye.naturalWidth>0?ye:(()=>{const se=this.getOrLoadImage(ge);return se&&se.loaded&&se.img.naturalWidth>0?se.img:null})();te?(C.save(),C.globalAlpha=.94*E*re,this.drawCoverImage(C,te,K,me,ae,le),C.restore()):(C.fillStyle=`rgba(214, 220, 224, ${(.48*E*re).toFixed(3)})`,C.fillRect(K,me,ae,le))}const D=Math.max(3,Math.round(u*.015)),N=C.createLinearGradient(0,0,0,D);N.addColorStop(0,"rgba(255, 255, 255, 1)"),N.addColorStop(.45,"rgba(255, 255, 255, 0.2)"),N.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=N,C.fillRect(0,0,c,D);const O=C.createLinearGradient(0,u-D,0,u);O.addColorStop(0,"rgba(255, 255, 255, 0)"),O.addColorStop(.55,"rgba(255, 255, 255, 0.2)"),O.addColorStop(1,"rgba(255, 255, 255, 1)"),C.fillStyle=O,C.fillRect(0,u-D,c,D)}return e.updateDynamicApertureTexture(this.texture,E*.42),!0}dispose(){this.texture.dispose(),this.imageCache.clear(),this.cardFadeMap.clear(),this.cachedCardEls=null}}const Xu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,JM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_fieldTex;       // R = Ezx, G = Ezy, B = Hx, A = Hy
uniform sampler2D u_materialTex;    // R = refractive index n, G = absorption sigma
uniform sampler2D u_opticalSrcTex;  // Coupling from 2D FFT wavefield
uniform bool u_hasMaterialTex;
uniform bool u_hasOpticalSrcTex;

uniform vec2 u_texelSize;
uniform float u_dt;
uniform float u_dx;
uniform float u_time;

// PML Parameters
uniform float u_pmlWidth;           // Boundary thickness (e.g. 0.12)
uniform float u_pmlSigmaMax;        // Max PML conductivity (e.g. 28.0)

// Wave Source Parameters
uniform int u_sourceType;           // 0 = none, 1 = continuous, 2 = pulse, 3 = optical_coupled
uniform float u_sourceFreq;
uniform float u_sourceAmp;
uniform vec2 u_mousePos;
uniform float u_mouseDown;

void main() {
  vec2 uv = vUv;
  vec4 center = texture2D(u_fieldTex, uv);
  float Ezx = center.r;
  float Ezy = center.g;
  float Hx  = center.b;
  float Hy  = center.a;
  float Ez  = Ezx + Ezy; // Total physical scalar field

  // 1. Medium Properties: Refractive Index n and Material Absorption Sigma
  float n = 1.0;
  float sigma_mat = 0.0;
  if (u_hasMaterialTex) {
    vec4 mat = texture2D(u_materialTex, uv);
    n = max(1.0, mat.r);
    sigma_mat = max(0.0, mat.g * 8.0); // Material conductivity / absorption
  }
  float eps = n * n; // Permittivity eps = n^2

  // 2. Spatial Neighbors for Staggered Finite Differences
  vec4 up    = texture2D(u_fieldTex, uv + vec2(0.0, u_texelSize.y));
  vec4 right = texture2D(u_fieldTex, uv + vec2(u_texelSize.x, 0.0));
  vec4 down  = texture2D(u_fieldTex, uv - vec2(0.0, u_texelSize.y));
  vec4 left  = texture2D(u_fieldTex, uv - vec2(u_texelSize.x, 0.0));

  float Ez_up    = up.r + up.g;
  float Ez_right = right.r + right.g;
  float Hx_down  = down.b;
  float Hy_left  = left.a;

  // 3. Perfect Matched Layer (PML) Spatial Conductivity Profiles
  // Directional PML conductivities: sigma_pml_x and sigma_pml_y with cubic polynomial grading
  float dist_left   = max(0.0, u_pmlWidth - uv.x) / u_pmlWidth;
  float dist_right  = max(0.0, uv.x - (1.0 - u_pmlWidth)) / u_pmlWidth;
  float dist_x      = max(dist_left, dist_right);
  float sigma_pml_x = u_pmlSigmaMax * pow(dist_x, 3.0);

  float dist_bottom = max(0.0, u_pmlWidth - uv.y) / u_pmlWidth;
  float dist_top    = max(0.0, uv.y - (1.0 - u_pmlWidth)) / u_pmlWidth;
  float dist_y      = max(dist_bottom, dist_top);
  float sigma_pml_y = u_pmlSigmaMax * pow(dist_y, 3.0);

  // 4. Update Auxiliary Magnetic Fields (Hx, Hy) with PML Damping
  // dEz/dy and dEz/dx
  float dEz_dy = (Ez_up - Ez) / u_dx;
  float dEz_dx = (Ez_right - Ez) / u_dx;

  float denom_hx = 2.0 + sigma_pml_y * u_dt;
  float Da_x = (2.0 - sigma_pml_y * u_dt) / denom_hx;
  float Db_x = (2.0 * u_dt) / denom_hx;
  Hx = Da_x * Hx - Db_x * dEz_dy;

  float denom_hy = 2.0 + sigma_pml_x * u_dt;
  float Da_y = (2.0 - sigma_pml_x * u_dt) / denom_hy;
  float Db_y = (2.0 * u_dt) / denom_hy;
  Hy = Da_y * Hy + Db_y * dEz_dx;

  // 5. Update Split Scalar Electric Fields (Ezx, Ezy) with Material Absorption & PML
  float dHy_dx = (Hy - Hy_left) / u_dx;
  float dHx_dy = (Hx - Hx_down) / u_dx;

  float total_sig_x = sigma_mat + sigma_pml_x;
  float denom_ex = 2.0 * eps + total_sig_x * u_dt;
  float Ca_x = (2.0 * eps - total_sig_x * u_dt) / denom_ex;
  float Cb_x = (2.0 * u_dt) / denom_ex;
  Ezx = Ca_x * Ezx + Cb_x * dHy_dx;

  float total_sig_y = sigma_mat + sigma_pml_y;
  float denom_ey = 2.0 * eps + total_sig_y * u_dt;
  float Ca_y = (2.0 * eps - total_sig_y * u_dt) / denom_ey;
  float Cb_y = (2.0 * u_dt) / denom_ey;
  Ezy = Ca_y * Ezy - Cb_y * dHx_dy;

  // 6. Wave Source Injection
  if (u_sourceType == 1) {
    // Continuous harmonic laser source (incident from upper boundary inside physical domain)
    float sourceY = 1.0 - u_pmlWidth - u_texelSize.y * 3.0;
    float distToSrc = abs(uv.y - sourceY);
    if (distToSrc < u_texelSize.y * 1.5 && uv.x > u_pmlWidth && uv.x < 1.0 - u_pmlWidth) {
      float injection = u_sourceAmp * sin(u_time * u_sourceFreq) * smoothstep(u_texelSize.y * 1.5, 0.0, distToSrc);
      Ezx += injection * 0.5;
      Ezy += injection * 0.5;
    }
  } else if (u_sourceType == 2) {
    // Ultra-short broadband Gaussian wavelet pulse
    float sourceY = 1.0 - u_pmlWidth - u_texelSize.y * 3.0;
    float distToSrc = abs(uv.y - sourceY);
    if (distToSrc < u_texelSize.y * 1.5 && uv.x > u_pmlWidth && uv.x < 1.0 - u_pmlWidth) {
      float pulse = exp(-pow((u_time - 0.4) * 16.0, 2.0)) * sin(u_time * u_sourceFreq);
      float injection = u_sourceAmp * pulse * smoothstep(u_texelSize.y * 1.5, 0.0, distToSrc);
      Ezx += injection * 0.5;
      Ezy += injection * 0.5;
    }
  } else if (u_sourceType == 3 && u_hasOpticalSrcTex) {
    // Coherent wavefield injection from 2D FFT engine
    float optAmp = texture2D(u_opticalSrcTex, uv).r;
    float injection = optAmp * u_sourceAmp * sin(u_time * u_sourceFreq);
    Ezx += injection * 0.5;
    Ezy += injection * 0.5;
  }

  // 7. Interactive Cursor Point Dipole
  vec2 mouseUv = u_mousePos * 0.5 + 0.5;
  float mDist = distance(uv, mouseUv);
  if (mDist < 0.04) {
    float mInject = smoothstep(0.04, 0.0, mDist) * (u_mouseDown * 0.5 + 0.06 * sin(u_time * 36.0));
    Ezx += mInject * 0.5;
    Ezy += mInject * 0.5;
  }

  gl_FragColor = vec4(Ezx, Ezy, Hx, Hy);
}
`,QM=`
precision highp float;
varying vec2 vUv;

uniform sampler2D u_fieldTex;       // R = Ezx, G = Ezy, B = Hx, A = Hy
uniform sampler2D u_materialTex;
uniform bool u_hasMaterialTex;
uniform int u_outputMode;           // 0 = raw scalar u, 1 = energy density, 2 = poynting magnitude

void main() {
  vec4 field = texture2D(u_fieldTex, vUv);
  float u = field.r + field.g; // Physical scalar field u = Ezx + Ezy
  float Hx = field.b;
  float Hy = field.a;

  float n = 1.0;
  if (u_hasMaterialTex) {
    n = max(1.0, texture2D(u_materialTex, vUv).r);
  }
  float eps = n * n;

  if (u_outputMode == 0) {
    // Raw scalar field (bipolar centered at 0.5)
    float display = u * 0.5 + 0.5;
    gl_FragColor = vec4(vec3(display), 1.0);
  } else if (u_outputMode == 1) {
    // Physical EM energy density: W = 0.5 * (eps * u^2 + Hx^2 + Hy^2)
    float energy = 0.5 * (eps * u * u + Hx * Hx + Hy * Hy);
    // Smooth tonemapping: 1.0 - exp(-energy * alpha) guarantees NO BLOWOUT
    float tonemapped = 1.0 - exp(-energy * 24.0);
    gl_FragColor = vec4(vec3(tonemapped), 1.0);
  } else {
    // Poynting vector magnitude |S| = |u * H|
    float poynting = abs(u) * sqrt(Hx * Hx + Hy * Hy);
    float tonemapped = 1.0 - exp(-poynting * 30.0);
    gl_FragColor = vec4(vec3(tonemapped), 1.0);
  }
}
`;class eS{constructor(e={}){Z(this,"size");Z(this,"dt");Z(this,"dx");Z(this,"pmlWidthRatio");Z(this,"pmlSigmaMax");Z(this,"rtPing");Z(this,"rtPong");Z(this,"rtOutput");Z(this,"quadScene");Z(this,"quadCamera");Z(this,"updateMaterial");Z(this,"outputMaterial");Z(this,"quadMesh");Z(this,"rtMaterial");Z(this,"materialScene");Z(this,"materialMesh");this.size=e.size??256,this.dx=e.dx??1;const t=Math.min(e.cfl??.35,.707);this.dt=t*this.dx,this.pmlWidthRatio=e.pmlWidthRatio??.12,this.pmlSigmaMax=e.pmlSigmaMax??28;const i={minFilter:Ye,magFilter:Ye,format:pt,type:Et,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.size,this.size,i),this.rtPong=new Ke(this.size,this.size,i),this.rtOutput=new Ke(this.size,this.size,i),this.rtMaterial=new Ke(this.size,this.size,i),this.quadScene=new Sr,this.quadCamera=new br(-1,1,1,-1,0,1),this.updateMaterial=new Mt({vertexShader:Xu,fragmentShader:JM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_opticalSrcTex:{value:null},u_hasMaterialTex:{value:!1},u_hasOpticalSrcTex:{value:!1},u_texelSize:{value:new He(1/this.size,1/this.size)},u_dt:{value:this.dt},u_dx:{value:this.dx},u_time:{value:0},u_pmlWidth:{value:this.pmlWidthRatio},u_pmlSigmaMax:{value:this.pmlSigmaMax},u_sourceType:{value:1},u_sourceFreq:{value:20},u_sourceAmp:{value:.2},u_mousePos:{value:new He(0,0)},u_mouseDown:{value:0}},depthTest:!1,depthWrite:!1}),this.outputMaterial=new Mt({vertexShader:Xu,fragmentShader:QM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_hasMaterialTex:{value:!1},u_outputMode:{value:1}},depthTest:!1,depthWrite:!1}),this.quadMesh=new qt(new _i(2,2),this.updateMaterial),this.quadScene.add(this.quadMesh),this.materialScene=new Sr,this.materialMesh=new qt(new _i(2,2)),this.materialScene.add(this.materialMesh)}reset(e){e.setRenderTarget(this.rtPing),e.clearColor(),e.setRenderTarget(this.rtPong),e.clearColor(),e.setRenderTarget(null)}setMaterialMap(e){this.updateMaterial.uniforms.u_hasMaterialTex.value=!!e,this.updateMaterial.uniforms.u_materialTex.value=e,this.outputMaterial.uniforms.u_hasMaterialTex.value=!!e,this.outputMaterial.uniforms.u_materialTex.value=e}step(e,t){const i=t.subSteps??4,r=this.updateMaterial.uniforms;r.u_hasOpticalSrcTex.value=!!t.opticalWavefieldTex,r.u_opticalSrcTex.value=t.opticalWavefieldTex??null;let s=1;t.sourceType==="pulse"?s=2:t.sourceType==="optical_coupled"?s=3:t.sourceType==="none"&&(s=0),r.u_sourceType.value=s,r.u_sourceFreq.value=t.sourceFreq??20,r.u_sourceAmp.value=t.sourceAmp??.2,t.mouse&&(r.u_mousePos.value.set(t.mouse.x,t.mouse.y),r.u_mouseDown.value=t.mouse.isDown?1:0),this.quadMesh.material=this.updateMaterial;let o=this.rtPing,a=this.rtPong;for(let l=0;l<i;l++){r.u_fieldTex.value=o.texture,r.u_time.value=t.elapsed+l*(this.dt*.02),e.setRenderTarget(a),e.render(this.quadScene,this.quadCamera);const c=o;o=a,a=c}return this.rtPing=o,this.rtPong=a,e.setRenderTarget(null),o}renderOutput(e,t=1){return this.quadMesh.material=this.outputMaterial,this.outputMaterial.uniforms.u_fieldTex.value=this.rtPing.texture,this.outputMaterial.uniforms.u_outputMode.value=t,e.setRenderTarget(this.rtOutput),e.render(this.quadScene,this.quadCamera),e.setRenderTarget(null),this.rtOutput}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.rtOutput.dispose(),this.rtMaterial.dispose(),this.updateMaterial.dispose(),this.outputMaterial.dispose(),this.quadMesh.geometry.dispose()}}function qu(n,e=256,t=100){const i=new UM(e),r=i.benchmark(n,t);return i.dispose(),r}function Yu(n,e=256,t=200){const i=new eS({size:e,cfl:.35,pmlWidthRatio:.12});i.reset(n),i.step(n,{subSteps:4,elapsed:.01,sourceType:"continuous",sourceFreq:20,sourceAmp:.2});const r=n.getContext();r.finish();const s=performance.now(),o=10,a=t/o;for(let v=0;v<a;v++)i.step(n,{subSteps:o,elapsed:v*o*.01,sourceType:"continuous",sourceFreq:20,sourceAmp:.2});r.finish();const c=performance.now()-s,u=c/t,d=e*e*t/(c*1e3),f=!isNaN(u)&&u>0;return i.dispose(),{size:e,totalSteps:t,totalMs:c,avgStepMs:u,throughputMCyclesPerSec:d,isCourantStable:f}}function tS(n){const e=qu(n,256,120),t=qu(n,512,60),i=Yu(n,256,200),r=Yu(n,512,100);return{fft:{size256:e,size512:t},fdtd:{size256:i,size512:r},timestamp:new Date().toISOString()}}const nS=Df({__name:"FourierContinuumCanvas",props:{modeIndex:{default:0},wavelength:{default:Qe[1].wavelength},propagationZ:{default:Qe[1].propagationZ},phaseCoupling:{default:Qe[1].phaseCoupling},phaseCouplingIn:{},phaseCouplingOut:{},refractiveIndex:{default:Qe[1].refractiveIndex},materialAbsorption:{default:Qe[1].materialAbsorption},exposure:{default:Qe[1].exposure},ambient:{default:Qe[1].ambient},refractionStrength:{default:Qe[1].refractionStrength},reflectionGloss:{default:Qe[1].reflectionGloss},pondWaveAmp:{default:Qe[1].pondWaveAmp},pondWaveK0:{default:Qe[1].pondWaveK0},pondWaveSpeed:{default:Qe[1].pondWaveSpeed},pondWavePower:{default:Qe[1].pondWavePower},imageUrl:{default:"white-square"},fullscreen:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},dynamicPortfolioAperture:{type:Boolean,default:!1},pureWaterMode:{type:Boolean,default:!1}},emits:["telemetry","perf"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=Po(null),o=Po(null);let a=null,l=null,c=null;const u=new Map;let h=0;function d(P){const U=P.detail,I=!!(U!=null&&U.active),H=(U==null?void 0:U.el)??null,ne=(U==null?void 0:U.exclusive)!==!1;if(H){if(I&&ne)for(const[_,g]of u.entries())_!==H&&(g.target=0);const X=u.get(H);X?(X.target=I?1:0,I&&(X.seq=++h)):I&&u.set(H,{el:H,target:1,progress:0,seq:++h})}else if(!I)for(const X of u.values())X.target=0}function f(){l&&l.markDirty()}function v(){if(s.value){const P=s.value.getBoundingClientRect();if(P.width>0&&P.height>0)return P}return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}}function x(P){if(!a)return;const U=P.detail;if(!U)return;const I=v(),H=Math.max(1,I.width),ne=Math.max(1,I.height),X=Math.min(Math.max((U.left-I.left)/H,0),1),_=Math.min(Math.max((U.right-I.left)/H,0),1),g=Math.min(Math.max(1-(U.top-I.top)/ne,0),1),R=Math.min(Math.max(1-(U.bottom-I.top)/ne,0),1),W=.018*Math.min(1.6,Math.max(.55,900/Math.max(240,ne))),Y=.014;a.addPerturbations([{x0:X,y0:g,x1:_,y1:g,radius:W,strength:Y},{x0:X,y0:R,x1:_,y1:R,radius:W,strength:Y},{x0:X,y0:R,x1:X,y1:g,radius:W,strength:Y*.85},{x0:_,y0:R,x1:_,y1:g,radius:W,strength:Y*.85}])}let m=performance.now(),p=0,A=performance.now(),w=0;vt(()=>i.modeIndex,P=>{a&&a.setMode(P)}),vt(()=>i.wavelength,P=>{a&&P!==void 0&&(a.wavelength=P)}),vt(()=>i.propagationZ,P=>{a&&P!==void 0&&(a.deltaZ=P)}),vt(()=>i.phaseCoupling,P=>{a&&P!==void 0&&(a.phaseCoupling=P)}),vt(()=>i.phaseCouplingIn,P=>{a&&P!==void 0&&(a.phaseCouplingIn=P)}),vt(()=>i.phaseCouplingOut,P=>{a&&P!==void 0&&(a.phaseCouplingOut=P)}),vt(()=>i.refractiveIndex,P=>{a&&P!==void 0&&(a.refractiveIndex=P)}),vt(()=>i.materialAbsorption,P=>{a&&P!==void 0&&(a.materialAbsorption=P)}),vt(()=>i.exposure,P=>{a&&P!==void 0&&(a.exposure=P)}),vt(()=>i.ambient,P=>{a&&P!==void 0&&(a.ambient=P)}),vt(()=>i.refractionStrength,P=>{a&&P!==void 0&&(a.refractionStrength=P)}),vt(()=>i.reflectionGloss,P=>{a&&P!==void 0&&(a.reflectionGloss=P)}),vt(()=>i.pondWaveAmp,P=>{a&&P!==void 0&&(a.pondWaveAmp=P)}),vt(()=>i.pondWaveK0,P=>{a&&P!==void 0&&(a.pondWaveK0=P)}),vt(()=>i.pondWaveSpeed,P=>{a&&P!==void 0&&(a.pondWaveSpeed=P)}),vt(()=>i.pondWavePower,P=>{a&&P!==void 0&&(a.pondWavePower=P)}),vt(()=>i.imageUrl,P=>{a&&P&&a.loadTexture(P)});function S(P,U){const I=v(),H=Math.min(Math.max((P-I.left)/Math.max(1,I.width),0),1),ne=Math.min(Math.max(1-(U-I.top)/Math.max(1,I.height),0),1);return{u:H,v:ne}}const G=new Map,C=new Map;let F=!1,B=null;function E(){return Math.min(2.25,Math.max(.45,900/Math.max(240,window.innerHeight)))}function M(P){const U=P;return!U||typeof U.closest!="function"?!1:!!U.closest('a, button, input, select, textarea, label, [role="button"], .lab-panel, .lab-controls, .cover-menu--item, .contact-table--item, .project-item, .cover-logo, .logo, .floating-logo-btn')}function D(P){F=!0,B={x:P.clientX,y:P.clientY,validTarget:!M(P.target)};const{u:U,v:I}=S(P.clientX,P.clientY);G.set("mouse",{prevU:U,prevV:I,currU:U,currV:I,targetU:U,targetV:I,pressure:1,isTouch:!1,active:!0}),a&&(a.addPerturbation(U,I,U,I,.05*E(),.85),a.mouse.x=U*2-1,a.mouse.y=I*2-1,a.mouse.isDown=!0)}function N(P){const{u:U,v:I}=S(P.clientX,P.clientY),H=G.get("mouse");H?(H.targetU=U,H.targetV=I,H.pressure=F?1:.85,H.active=!0):G.set("mouse",{prevU:U,prevV:I,currU:U,currV:I,targetU:U,targetV:I,pressure:F?1:.85,isTouch:!1,active:!0}),a&&(a.mouse.x=U*2-1,a.mouse.y=I*2-1,a.mouse.isDown=F)}function O(P){var I;F=!1;const U=G.get("mouse");if(U&&(U.pressure=.85),a&&(a.mouse.isDown=!1),a&&B&&B.validTarget&&!M(P.target)&&P.button===0&&!((I=window.getSelection())!=null&&I.toString())&&Math.hypot(P.clientX-B.x,P.clientY-B.y)<10){const{u:H,v:ne}=S(P.clientX,P.clientY);a.dropFoodPellet(H,ne)}B=null}function j(P){if(M(P.target))return;const U=E();for(let I=0;I<P.changedTouches.length;I++){const H=P.changedTouches[I];C.set(H.identifier,{x:H.clientX,y:H.clientY});const{u:ne,v:X}=S(H.clientX,H.clientY);a&&a.addPerturbation(ne,X,ne,X,.05*U,.85)}}function oe(P){if(M(P.target)){for(let U=0;U<P.changedTouches.length;U++)C.delete(P.changedTouches[U].identifier);return}for(let U=0;U<P.changedTouches.length;U++){const I=P.changedTouches[U],H=C.get(I.identifier);if(C.delete(I.identifier),H&&a&&Math.hypot(I.clientX-H.x,I.clientY-H.y)<12){const{u:ne,v:X}=S(I.clientX,I.clientY);a.dropFoodPellet(ne,X)}}}function $(P){if(M(P.target))return;const U=E();for(let I=0;I<P.changedTouches.length;I++){const H=P.changedTouches[I];C.set(H.identifier,{x:H.clientX,y:H.clientY});const{u:ne,v:X}=S(H.clientX,H.clientY);G.set(H.identifier,{prevU:ne,prevV:X,currU:ne,currV:X,targetU:ne,targetV:X,pressure:H.force>0?H.force:1,isTouch:!0,active:!0}),a&&(a.addPerturbation(ne,X,ne,X,.05*U,.85),a.mouse.x=ne*2-1,a.mouse.y=X*2-1,a.mouse.isDown=!0)}}function re(P){if(!M(P.target)){P.cancelable&&P.preventDefault();for(let U=0;U<P.touches.length;U++){const I=P.touches[U],{u:H,v:ne}=S(I.clientX,I.clientY),X=G.get(I.identifier);X?(X.targetU=H,X.targetV=ne,X.pressure=I.force>0?I.force:X.pressure,X.active=!0):G.set(I.identifier,{prevU:H,prevV:ne,currU:H,currV:ne,targetU:H,targetV:ne,pressure:I.force>0?I.force:1,isTouch:!0,active:!0}),U===0&&a&&(a.mouse.x=H*2-1,a.mouse.y=ne*2-1,a.mouse.isDown=!0)}}}function K(P){for(let U=0;U<P.changedTouches.length;U++){const I=P.changedTouches[U],H=C.get(I.identifier);if(C.delete(I.identifier),G.delete(I.identifier),H&&a&&!M(P.target)&&Math.hypot(I.clientX-H.x,I.clientY-H.y)<12){const{u:ne,v:X}=S(I.clientX,I.clientY);a.dropFoodPellet(ne,X)}}P.touches.length===0&&a&&(a.mouse.isDown=!1)}function me(P){for(let U=0;U<P.changedTouches.length;U++){const I=P.changedTouches[U].identifier;C.delete(I),G.delete(I)}P.touches.length===0&&a&&(a.mouse.isDown=!1)}let ae=0,le=0,ge=0,ye=!1,te=null;function se(){if(!a)return;const P=v(),U=Math.max(64,Math.round(P.width)),I=Math.max(64,Math.round(P.height));U===le&&I===ge||(le=U,ge=I,a.resize(U,I))}function xe(){ye||(ye=!0,requestAnimationFrame(()=>{se(),ye=!1}))}function de(P){if(c=requestAnimationFrame(de),P-m<14.5)return;const U=Math.min((P-m)/1e3,.1),I=P/1e3;if(m=P,a){if(G.size>0){const _=a.width/Math.max(1,a.height),g=[];for(const R of G.values()){R.isTouch?(R.currU=R.targetU,R.currV=R.targetV):(R.currU+=(R.targetU-R.currU)*.45,R.currV+=(R.targetV-R.currV)*.45);const W=(R.currU-R.prevU)*_,Y=R.currV-R.prevV,q=Math.sqrt(W*W+Y*Y);if(q>1e-4||R.isTouch&&R.active||F){const he=(.042+Math.min(q*.15,.04))*E(),pe=(R.isTouch||F?.75:.6)*Math.min(1,.4+q*8)*R.pressure;g.push({x0:R.prevU,y0:R.prevV,x1:R.currU,y1:R.currV,radius:he,strength:pe})}R.prevU=R.currU,R.prevV=R.currV}g.length>0&&a.addPerturbations(g)}if(i.dynamicPortfolioAperture&&l){l.sync(a,U,i.pureWaterMode);const _=v(),g=[];for(const[Y,q]of u.entries()){if(!Y.isConnected){u.delete(Y);continue}const he=i.pureWaterMode?0:q.target,ce=he>q.progress?2.4:4.2;if(q.progress+=(he-q.progress)*(1-Math.exp(-U*ce)),q.progress<=.003&&q.target<=.001){u.delete(Y);continue}g.push(q)}g.length>8&&(g.sort((Y,q)=>q.target-Y.target||q.seq-Y.seq),g.length=8);const R=[],W=[];if(_.width>0&&_.height>0)for(let Y=0;Y<g.length;Y++){const q=g[Y],he=q.el.getBoundingClientRect();if(he.width<=4||he.height<=4||he.bottom<_.top-120||he.top>_.top+_.height+120)continue;const ce=(he.left-_.left)/_.width,pe=(he.right-_.left)/_.width,Le=1-(he.bottom-_.top)/_.height,fe=1-(he.top-_.top)/_.height;R.push({uCenter:(ce+pe)*.5,vCenter:(Le+fe)*.5,rxUv:(pe-ce)*.5,ryUv:(fe-Le)*.5,strength:q.progress,emerge:q.progress}),W.push({img:q.el.querySelector("img"),uMin:ce,vMin:Le,uMax:pe,vMax:fe,emerge:q.progress,boxAspect:he.width/he.height})}a.setCardIslands(R),a.setActiveCards(W)}const H=performance.now();a.update(U,I);const ne=performance.now()-H;p++,w+=ne;const X=P-A;if(X>=400){const _=Math.round(p*1e3/X),g=w/p;r("perf",{fps:_,frameMs:Number(g.toFixed(2))}),p=0,w=0,A=P}P-ae>100&&(r("telemetry",{...a.telemetry}),ae=P)}}let Ae=!1,Re=!1;function Oe(){Re||typeof window>"u"||(Re=!0,window.addEventListener("touchstart",j,{passive:!0}),window.addEventListener("touchend",oe,{passive:!0}))}function lt(){!Re||typeof window>"u"||(Re=!1,window.removeEventListener("touchstart",j),window.removeEventListener("touchend",oe))}function b(){lt(),!(Ae||typeof window>"u")&&(Ae=!0,window.addEventListener("touchstart",$,{passive:!0}),window.addEventListener("touchmove",re,{passive:!1}),window.addEventListener("touchend",K,{passive:!0}),window.addEventListener("touchcancel",me,{passive:!0}))}function L(){!Ae||typeof window>"u"||(Ae=!1,window.removeEventListener("touchstart",$),window.removeEventListener("touchmove",re),window.removeEventListener("touchend",K),window.removeEventListener("touchcancel",me),G.clear())}vt(()=>i.interactive,P=>{P?b():(L(),Oe())});function T(P,U){}return e({getEngine:()=>a,setPmlSides:(P,U,I,H)=>{a&&a.setPmlSides(P,U,I,H)},addPerturbation:(P,U,I,H,ne,X)=>{a&&a.addPerturbation(P,U,I,H,ne,X)},dropFoodPellet:(P,U)=>{a&&a.dropFoodPellet(P,U)},addScrollWave:T}),ba(()=>{o.value&&(a=new jM(o.value),a.wavelength=i.wavelength,a.deltaZ=i.propagationZ,a.phaseCoupling=i.phaseCoupling??Qe[1].phaseCoupling,a.refractiveIndex=i.refractiveIndex,a.materialAbsorption=i.materialAbsorption,a.exposure=i.exposure,a.ambient=i.ambient,a.refractionStrength=i.refractionStrength,a.reflectionGloss=i.reflectionGloss,a.pondWaveAmp=i.pondWaveAmp,a.pondWaveK0=i.pondWaveK0,a.pondWaveSpeed=i.pondWaveSpeed,a.pondWavePower=i.pondWavePower,a.setMode(i.modeIndex),i.imageUrl&&a.loadTexture(i.imageUrl),se(),i.dynamicPortfolioAperture&&(l=new ZM(a.width,a.height),l.sync(a,.016,i.pureWaterMode),window.addEventListener("pond-card-ripple",x),window.addEventListener("pond-aperture-dirty",f),window.addEventListener("pond-hover-optics",d)),typeof window<"u"&&(window.__FOURIER_ENGINE__=a,window.__RUN_BENCHMARK__=()=>tS(a.renderer)),typeof ResizeObserver<"u"&&s.value&&(te=new ResizeObserver(()=>{xe()}),te.observe(s.value)),window.addEventListener("mousedown",D),window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("mouseup",O),window.addEventListener("resize",xe),i.interactive?b():Oe(),c=requestAnimationFrame(de))}),zl(()=>{c&&cancelAnimationFrame(c),te&&(te.disconnect(),te=null),window.removeEventListener("mousedown",D),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",O),window.removeEventListener("resize",xe),window.removeEventListener("pond-card-ripple",x),window.removeEventListener("pond-aperture-dirty",f),window.removeEventListener("pond-hover-optics",d),l&&(l.dispose(),l=null),L(),lt(),a&&(a.dispose(),a=null)}),(P,U)=>(Vl(),eh("div",{ref_key:"containerRef",ref:s,class:va(["fourier-canvas-container",{"is-fullscreen":n.fullscreen,"is-interactive":n.interactive}])},[kl("canvas",{ref_key:"canvasRef",ref:o,class:"fourier-gl-canvas"},null,512)],2))}}),iS=oh(nS,[["__scopeId","data-v-72d076c6"]]),rS={class:"pond-container"},sS=Df({__name:"PondView",setup(n){const e=Po(null),t=VM;return ba(()=>{e.value&&e.value.setPmlSides(1,1,1,1)}),(i,r)=>(Vl(),eh("div",rS,[Ht(iS,{ref_key:"canvasRef",ref:e,"mode-index":0,wavelength:kt(t).wavelength,"propagation-z":kt(t).propagationZ,"phase-coupling":kt(t).phaseCoupling,"refractive-index":kt(t).refractiveIndex,"material-absorption":kt(t).materialAbsorption,exposure:kt(t).exposure,ambient:kt(t).ambient,"refraction-strength":kt(t).refractionStrength,"reflection-gloss":kt(t).reflectionGloss,"pond-wave-amp":kt(t).pondWaveAmp,"pond-wave-k0":kt(t).pondWaveK0,"pond-wave-power":kt(t).pondWavePower,"pond-wave-speed":kt(t).pondWaveSpeed,"image-url":"white-square",fullscreen:!0,interactive:!0},null,8,["wavelength","propagation-z","phase-coupling","refractive-index","material-absorption","exposure","ambient","refraction-strength","reflection-gloss","pond-wave-amp","pond-wave-k0","pond-wave-power","pond-wave-speed"])]))}}),gS=oh(sS,[["__scopeId","data-v-af9d99d6"]]);export{pS as A,Tn as F,Qe as O,gS as P,uS as T,oh as _,Vl as a,kl as b,eh as c,Df as d,cS as e,zl as f,lS as g,Ht as h,Dp as i,Cl as j,Ld as k,iS as l,hS as m,va as n,ba as o,Nd as p,Up as q,Po as r,oS as s,id as t,vt as u,fS as v,dS as w,Rp as x,Vp as y,mS as z};
