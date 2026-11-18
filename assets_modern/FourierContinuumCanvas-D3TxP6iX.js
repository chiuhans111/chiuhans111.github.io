var Wh=Object.defineProperty;var Xh=(n,e,t)=>e in n?Wh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var j=(n,e,t)=>Xh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},Oi=[],Rn=()=>{},ju=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Al=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qh=Object.prototype.hasOwnProperty,it=(n,e)=>qh.call(n,e),Fe=Array.isArray,ui=n=>rs(n)==="[object Map]",sa=n=>rs(n)==="[object Set]",cc=n=>rs(n)==="[object Date]",Ge=n=>typeof n=="function",gt=n=>typeof n=="string",Cn=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Zu=n=>(rt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Ju=Object.prototype.toString,rs=n=>Ju.call(n),Yh=n=>rs(n).slice(8,-1),Qu=n=>rs(n)==="[object Object]",Rl=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Kh=/-\w/g,gn=Ma(n=>n.replace(Kh,e=>e.slice(1).toUpperCase())),$h=/\B([A-Z])/g,vi=Ma(n=>n.replace($h,"-$1").toLowerCase()),ef=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oa=Ma(n=>n?`on${ef(n)}`:""),An=(n,e)=>!Object.is(n,e),$s=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Cl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},jh=n=>{const e=gt(n)?Number(n):NaN;return isNaN(e)?n:e};let uc;const Sa=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?ed(i):Pl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(n)||rt(n))return n}const Zh=/;(?![^(]*\))/g,Jh=/:([^]+)/,Qh=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ed(n){const e={};return n.replace(Qh,t=>t.startsWith("/*")?"":t).split(Zh).forEach(t=>{if(t){const i=t.split(Jh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ya(n){let e="";if(gt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ya(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const td="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nd=wl(td);function nf(n){return!!n||n===""}function id(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=Ea(n[r],e[r],t);return i}function fc(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Ea(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function rd(n,e,t){let i=ui(n),r=ui(e);if(i||r||(i=sa(n),r=sa(e),i||r))return i&&r?fc(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!Ea(n[a],e[a],t))return!1}return String(n)===String(e)}function hc(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function Ea(n,e,t){if(n===e)return!0;let i=cc(n),r=cc(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Cn(n),r=Cn(e),i||r?n===e:(i=Fe(n),r=Fe(e),i||r?i&&r?hc(n,e,t,id):!1:(i=rt(n),r=rt(e),i||r?!i||!r?!1:hc(n,e,t,rd):String(n)===String(e))))}const rf=n=>!!(n&&n.__v_isRef===!0),sd=n=>gt(n)?n:n==null?"":Fe(n)||rt(n)&&(n.toString===Ju||!Ge(n.toString))?rf(n)?sd(n.value):JSON.stringify(n,sf,2):String(n),sf=(n,e)=>rf(e)?sf(n,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ba(i,s)+" =>"]=r,t),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ba(t))}:Cn(e)?Ba(e):rt(e)&&!Fe(e)&&!Qu(e)?String(e):e,Ba=(n,e="")=>{var t;return Cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class ad{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ct&&(Ct.active?(this.parent=Ct,this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ct;try{return Ct=this,e()}finally{Ct=t}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){if(this._on>0&&--this._on===0){if(Ct===this)Ct=this.prevScope;else{let e=Ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function od(){return Ct}let ft;const za=new WeakSet;class af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&(Ct.active?Ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dc(this),cf(this);const e=ft,t=_n;ft=this,_n=!0;try{return this.fn()}finally{uf(this),ft=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ll(e);this.deps=this.depsTail=void 0,dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ao(this)&&this.run()}get dirty(){return Ao(this)}}let of=0,Wr,Xr;function lf(n,e=!1){if(n.flags|=8,e){n.next=Xr,Xr=n;return}n.next=Wr,Wr=n}function Dl(){of++}function Ul(){if(--of>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ll(i),ld(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ao(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===jr)||(n.globalVersion=jr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ao(n))))return;n.flags|=2;const e=n.dep,t=ft,i=_n;ft=n,_n=!0;try{cf(n);const r=n.fn(n._value);(e.version===0||An(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,_n=i,uf(n),n.flags&=-3}}function Ll(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ll(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ld(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const hf=[];function Kn(){hf.push(_n),_n=!1}function $n(){const n=hf.pop();_n=n===void 0?!0:n}function dc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let jr=0;class cd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!_n||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new cd(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,jr++,this.notify(e)}notify(e){Dl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ul()}}}function df(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)df(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ro=new WeakMap,Hi=Symbol(""),Co=Symbol(""),Zr=Symbol("");function It(n,e,t){if(_n&&ft){let i=Ro.get(n);i||Ro.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Il),r.map=i,r.key=t),r.track()}}function kn(n,e,t,i,r,s){const o=Ro.get(n);if(!o){jr++;return}const a=l=>{l&&l.trigger()};if(Dl(),e==="clear")o.forEach(a);else{const l=Fe(n),u=l&&Rl(t);if(l&&t==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===Zr||!Cn(d)&&d>=c)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Zr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Hi)),ui(n)&&a(o.get(Co)));break;case"delete":l||(a(o.get(Hi)),ui(n)&&a(o.get(Co)));break;case"set":ui(n)&&a(o.get(Hi));break}}Ul()}function Xi(n){const e=Je(n);return e===n||(It(e,"iterate",Zr),sn(n))?e:Pn(n)?fi(n)?e.map(t=>pi(on(t))):e.map(pi):e.map(on)}function Ta(n){return It(n=Je(n),"iterate",Zr),n}function En(n,e){return Pn(n)?pi(fi(n)?on(e):e):on(e)}const ud={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,n=>En(this,n))},concat(...n){return Xi(this).concat(...n.map(e=>Fe(e)?Xi(e):e))},entries(){return Ha(this,"entries",n=>(n[1]=En(this,n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(i=>En(this,i)),arguments)},find(n,e){return Ln(this,"find",n,e,t=>En(this,t),arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,t=>En(this,t),arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ga(this,"includes",n)},indexOf(...n){return Ga(this,"indexOf",n)},join(n){return Xi(this).join(n)},lastIndexOf(...n){return Ga(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...e){return pc(this,"reduce",n,e)},reduceRight(n,...e){return pc(this,"reduceRight",n,e)},shift(){return Pr(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Xi(this).toReversed()},toSorted(n){return Xi(this).toSorted(n)},toSpliced(...n){return Xi(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return Ha(this,"values",n=>En(this,n))}};function Ha(n,e,t){const i=Ta(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fd=Array.prototype;function Ln(n,e,t,i,r,s){const o=Ta(n),a=o!==n&&!sn(n),l=o[e];if(l!==fd[e]){const h=l.apply(n,s);return a?on(h):h}let u=t;o!==n&&(a?u=function(h,d){return t.call(this,En(n,h),d,n)}:t.length>2&&(u=function(h,d){return t.call(this,h,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function pc(n,e,t,i){const r=Ta(n),s=r!==n&&!sn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,h){return a&&(a=!1,u=En(n,u)),t.call(this,u,En(n,c),h,n)}):t.length>3&&(o=function(u,c,h){return t.call(this,u,c,h,n)}));const l=r[e](o,...i);return a?En(n,l):l}function Ga(n,e,t){const i=Je(n);It(i,"iterate",Zr);const r=i[e](...t);return(r===-1||r===!1)&&Bl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Pr(n,e,t=[]){Kn(),Dl();const i=Je(n)[e].apply(n,t);return Ul(),$n(),i}const hd=wl("__proto__,__v_isRef,__isVue"),pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cn));function dd(n){Cn(n)||(n=String(n));const e=Je(this);return It(e,"has",n),e.hasOwnProperty(n)}class mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ed:xf:s?vf:_f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){let l;if(o&&(l=ud[t]))return l;if(t==="hasOwnProperty")return dd}const a=Reflect.get(e,t,Nt(e)?e:i);if((Cn(t)?pf.has(t):hd(t))||(r||It(e,"get",t),s))return a;if(Nt(a)){const l=o&&Rl(t)?a:a.value;return r&&rt(l)?Do(l):l}return rt(a)?r?Do(a):Nl(a):a}}class gf extends mf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Fe(e)&&Rl(t);if(!this._isShallow){const u=Pn(s);if(!sn(i)&&!Pn(i)&&(s=Je(s),i=Je(i)),!o&&Nt(s)&&!Nt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,Nt(e)?e:r);return e===Je(r)&&l&&(a?An(i,s)&&kn(e,"set",t,i):kn(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cn(t)||!pf.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",Fe(e)?"length":Hi),Reflect.ownKeys(e)}}class pd extends mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const md=new gf,gd=new pd,_d=new gf(!0);const Po=n=>n,ms=n=>Reflect.getPrototypeOf(n);function vd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=ui(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Po:e?pi:on;return!e&&It(s,"iterate",l?Co:Hi),Tt(Object.create(u),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}}})}}function gs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xd(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(An(r,a)&&It(o,"get",r),It(o,"get",a));const{has:l}=ms(o),u=e?Po:n?pi:on;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&It(Je(r),"iterate",Hi),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(An(r,a)&&It(o,"has",r),It(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),u=e?Po:n?pi:on;return!n&&It(l,"iterate",Hi),a.forEach((c,h)=>r.call(s,u(c),u(h),o))}};return Tt(t,n?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(r){const s=Je(this),o=ms(s),a=Je(r),l=!e&&!sn(r)&&!Pn(r)?a:r;return o.has.call(s,l)||An(r,l)&&o.has.call(s,r)||An(a,l)&&o.has.call(s,a)||(s.add(l),kn(s,"add",l,l)),this},set(r,s){!e&&!sn(s)&&!Pn(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=ms(o);let u=a.call(o,r);u||(r=Je(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?An(s,c)&&kn(o,"set",r,s):kn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=ms(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&kn(s,"delete",r,void 0),u},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vd(r,n,e)}),t}function Fl(n,e){const t=xd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const Md={get:Fl(!1,!1)},Sd={get:Fl(!1,!0)},yd={get:Fl(!0,!1)};const _f=new WeakMap,vf=new WeakMap,xf=new WeakMap,Ed=new WeakMap;function Td(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(n){return Pn(n)?n:Ol(n,!1,md,Md,_f)}function bd(n){return Ol(n,!1,_d,Sd,vf)}function Do(n){return Ol(n,!0,gd,yd,xf)}function Ol(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Td(Yh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function fi(n){return Pn(n)?fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Pn(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Bl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function wd(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const on=n=>rt(n)?Nl(n):n,pi=n=>rt(n)?Do(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function vn(n){return Ad(n,!1)}function Ad(n,e){return Nt(n)?n:new Rd(n,e)}class Rd{constructor(e,t){this.dep=new Il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||Pn(e);e=i?e:Je(e),An(e,t)&&(this._rawValue=e,this._value=i?e:on(e),this.dep.trigger())}}function Cd(n){return Nt(n)?n.value:n}const Pd={get:(n,e,t)=>e==="__v_raw"?n:Cd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return fi(n)?n:new Proxy(n,Pd)}class Dd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return lf(this,!0),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ud(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new Dd(i,r,t)}const _s={},aa=new WeakMap;let Di;function Ld(n,e=!1,t=Di){if(t){let i=aa.get(t);i||aa.set(t,i=[]),i.push(n)}}function Id(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=S=>r?S:sn(S)||r===!1||r===0?Wn(S,1):Wn(S);let c,h,d,f,_=!1,x=!1;if(Nt(n)?(h=()=>n.value,_=sn(n)):fi(n)?(h=()=>u(n),_=!0):Fe(n)?(x=!0,_=n.some(S=>fi(S)||sn(S)),h=()=>n.map(S=>{if(Nt(S))return S.value;if(fi(S))return u(S);if(Ge(S))return l?l(S,2):S()})):Ge(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Kn();try{d()}finally{$n()}}const S=Di;Di=c;try{return l?l(n,3,[f]):n(f)}finally{Di=S}}:h=Rn,e&&r){const S=h,B=r===!0?1/0:r;h=()=>Wn(S(),B)}const m=od(),p=()=>{c.stop(),m&&m.active&&Al(m.effects,c)};if(s&&e){const S=e;e=(...B)=>{const C=S(...B);return p(),C}}let R=x?new Array(n.length).fill(_s):_s;const b=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const B=c.run();if(S||r||_||(x?B.some((C,I)=>An(C,R[I])):An(B,R))){d&&d();const C=Di;Di=c;try{const I=[B,R===_s?void 0:x&&R[0]===_s?[]:R,f];R=B,l?l(e,3,I):e(...I)}finally{Di=C}}}else c.run()};return a&&a(b),c=new af(h),c.scheduler=o?()=>o(b,!1):b,f=S=>Ld(S,!1,c),d=c.onStop=()=>{const S=aa.get(c);if(S){if(l)l(S,4);else for(const B of S)B();aa.delete(c)}},e?i?b(!0):R=c.run():o?o(b.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Wn(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))Wn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(sa(n)||ui(n))n.forEach(i=>{Wn(i,e,t)});else if(Qu(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ss(n,e,t,i){try{return i?n(...i):n()}catch(r){as(r,e,t)}}function ln(n,e,t,i){if(Ge(n)){const r=ss(n,e,t,i);return r&&Zu(r)&&r.catch(s=>{as(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ln(n[s],e,t,i));return r}}function as(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(s){Kn(),ss(s,null,10,[n,l,u]),$n();return}}Fd(n,t,r,i,o)}function Fd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const zt=[];let yn=-1;const ur=[];let li=null,ar=0;const Sf=Promise.resolve();let oa=null;function Nd(n){const e=oa||Sf;return n?e.then(this?n.bind(this):n):e}function Od(n){let e=yn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=Jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function zl(n){if(!(n.flags&1)){const e=Jr(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=Jr(t)?zt.push(n):zt.splice(Od(e),0,n),n.flags|=1,yf()}}function yf(){oa||(oa=Sf.then(Tf))}function Bd(n){if(!Fe(n))li&&n.id===-1?li.splice(ar+1,0,n):n.flags&1||(ur.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ur.push(n[e]);yf()}function mc(n,e,t=yn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>Jr(t)-Jr(i));if(ur.length=0,li){for(let t=0;t<e.length;t++)li.push(e[t]);return}for(li=e,ar=0;ar<li.length;ar++){const t=li[ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,ar=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tf(n){try{for(yn=0;yn<zt.length;yn++){const e=zt[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ss(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<zt.length;yn++){const e=zt[yn];e&&(e.flags&=-2)}yn=-1,zt.length=0,Ef(),oa=null,(zt.length||ur.length)&&Tf()}}let rn=null,bf=null;function la(n){const e=rn;return rn=n,bf=n&&n.type.__scopeId||null,e}function zd(n,e=rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ha(-1);const s=la(e),o=Gi.length;let a;try{a=n(...r)}finally{for(let l=Gi.length;l>o;l--)eh();la(s),i._d&&ha(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pS(n,e){if(rn===null)return n;const t=Pa(rn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Si(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Kn(),ln(l,t,8,[n.el,a,n,e]),$n())}}function Hd(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function js(n,e,t=!1){const i=ih();if(i||fr){let r=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Gd=Symbol.for("v-scx"),Vd=()=>js(Gd);function vt(n,e,t){return wf(n,e,t)}function wf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Tt({},t),l=e&&i||!e&&s!=="post";let u;if(mr){if(s==="sync"){const f=Vd();u=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Rn,f.resume=Rn,f.pause=Rn,f}}const c=Ft;a.call=(f,_,x)=>ln(f,c,_,x);let h=!1;s==="post"?a.scheduler=f=>{kt(f,c&&c.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(f,_)=>{_?f():zl(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const d=Id(n,e,a);return mr&&(u?u.push(d):l&&d()),d}function kd(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?Af(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=ls(this),a=wf(r,s.bind(i),t);return o(),a}function Af(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Wd=Symbol("_vte"),ba=n=>n.__isTeleport,tn=Symbol("_leaveCb"),Dr=Symbol("_enterCb");function Xd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gl(()=>{n.isMounted=!0}),Ff(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],Rf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Cf=n=>{const e=n.subTree;return e.component?Cf(e.component):e},qd={name:"BaseTransition",props:Rf,setup(n,{slots:e}){const t=ih(),i=Xd();return()=>{const r=e.default&&Uf(e.default(),!0),s=r&&r.length?Pf(r):t.subTree?Op():void 0;if(!s)return;const o=Je(n),{mode:a}=o;if(i.isLeaving)return Va(s);const l=ca(s);if(!l)return Va(s);let u=Uo(l,o,i,t,h=>u=h);l.type!==Ht&&Qr(l,u);let c=t.subTree&&ca(t.subTree);if(c&&c.type!==Ht&&!Ii(c,l)&&Cf(t).type!==Ht){let h=Uo(c,o,i,t);if(Qr(c,h),a==="out-in"&&l.type!==Ht)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,c=void 0},Va(s);a==="in-out"&&l.type!==Ht?h.delayLeave=(d,f,_)=>{const x=Df(i,c);x[String(c.key)]=c,d[tn]=()=>{f(),d[tn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Pf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ht){e=t;break}}return e}const Yd=qd;function Df(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Uo(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:R,onAppearCancelled:b}=e,S=String(n.key),B=Df(t,n),C=(E,M)=>{E&&ln(E,i,9,M)},I=(E,M)=>{const P=M[1];C(E,M),Fe(E)?E.every(N=>N.length<=1)&&P():E.length<=1&&P()},z={mode:o,persisted:a,beforeEnter(E){let M=l;if(!t.isMounted)if(s)M=m||l;else return;E[tn]&&E[tn](!0);const P=B[S];P&&Ii(n,P)&&P.el[tn]&&P.el[tn](),C(M,[E])},enter(E){if(B[S]===n)return;let M=u,P=c,N=h;if(!t.isMounted)if(s)M=p||u,P=R||c,N=b||h;else return;let G=!1;E[Dr]=re=>{G||(G=!0,re?C(N,[E]):C(P,[E]),z.delayedLeave&&z.delayedLeave(),E[Dr]=void 0)};const Z=E[Dr].bind(null,!1);M?I(M,[E,Z]):Z()},leave(E,M){const P=String(n.key);if(E[Dr]&&E[Dr](!0),t.isUnmounting)return M();C(d,[E]);let N=!1;E[tn]=Z=>{N||(N=!0,M(),Z?C(x,[E]):C(_,[E]),E[tn]=void 0,B[P]===n&&delete B[P])};const G=E[tn].bind(null,!1);B[P]=n,f?I(f,[E,G]):G()},clone(E){const M=Uo(E,e,t,i,r);return r&&r(M),M}};return z}function Va(n){if(os(n))return n=mi(n),n.children=null,n}function ca(n){if(!os(n))return ba(n.type)&&n.children?Pf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function Qr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Qr(ba(t.type)&&ca(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Uf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Tn?(o.patchFlag&128&&r++,i=i.concat(Uf(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?mi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Lf(n,e){return Ge(n)?Tt({name:n.name},e,{setup:n}):n}function Hl(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function gc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ua=new WeakMap;function qr(n,e,t,i,r=!1){if(Fe(n)){n.forEach((x,m)=>qr(x,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Yr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Pa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===ct?a.refs={}:a.refs,h=a.setupState,d=Je(h),f=h===ct?ju:x=>gc(c,x)?!1:it(d,x),_=(x,m)=>!(m&&gc(c,m));if(u!=null&&u!==l){if(_c(e),gt(u))c[u]=null,f(u)&&(h[u]=null);else if(Nt(u)){const x=e;_(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(Ge(l))ss(l,a,12,[o,c]);else{const x=gt(l),m=Nt(l);if(x||m){const p=()=>{if(n.f){const R=x?f(l)?h[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)Fe(R)&&Al(R,s);else if(Fe(R))R.includes(s)||R.push(s);else if(x)c[l]=[s],f(l)&&(h[l]=c[l]);else{const b=[s];_(l,n.k)&&(l.value=b),n.k&&(c[n.k]=b)}}else x?(c[l]=o,f(l)&&(h[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const R=()=>{p(),ua.delete(n)};R.id=-1,ua.set(n,R),kt(R,t)}else _c(n),p()}}}function _c(n){const e=ua.get(n);e&&(e.flags|=8,ua.delete(n))}const vc=n=>n.nodeType===8;Sa().requestIdleCallback;Sa().cancelIdleCallback;function Kd(n,e){if(vc(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(vc(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const Yr=n=>!!n.type.__asyncLoader;function mS(n){Ge(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let u=null,c,h=0;const d=()=>(h++,u=null,f()),f=()=>{let _;return u||(_=u=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),l)return new Promise((m,p)=>{l(x,()=>m(d()),()=>p(x),h+1)});throw x}).then(x=>_!==u&&u?u:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),c=x,x)))};return Lf({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(_,x,m){const p=_.isConnected;let R=!1;(x.bu||(x.bu=[])).push(()=>R=!0);const b=()=>{R||!_.parentNode||p&&!_.isConnected||m()},S=s?()=>{const B=s(b,C=>Kd(_,C));B&&(x.bum||(x.bum=[])).push(B)}:b;c?S():f().then(()=>!x.isUnmounted&&S())},get __asyncResolved(){return c},setup(){const _=Ft;if(Hl(_),c)return()=>vs(c,_);const x=B=>{u=null,as(B,_,13,!i)};if(a&&_.suspense||mr)return f().then(B=>()=>vs(B,_)).catch(B=>(x(B),()=>i?Pt(i,{error:B}):null));const m=vn(!1),p=vn(),R=vn(!!r);let b,S;return Aa(()=>{b!=null&&clearTimeout(b),S!=null&&clearTimeout(S)}),r&&(S=setTimeout(()=>{_.isUnmounted||(R.value=!1)},r)),o!=null&&(b=setTimeout(()=>{if(!_.isUnmounted&&!m.value&&!p.value){const B=new Error(`Async component timed out after ${o}ms.`);x(B),p.value=B}},o)),f().then(()=>{_.isUnmounted||(m.value=!0,_.parent&&os(_.parent.vnode)&&_.parent.update())}).catch(B=>{if(_.isUnmounted){u=null;return}x(B),p.value=B}),()=>{if(m.value&&c)return vs(c,_);if(p.value&&i)return Pt(i,{error:p.value});if(t&&!R.value)return vs(t,_)}}})}function vs(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Pt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const os=n=>n.type.__isKeepAlive;function $d(n,e){If(n,"a",e)}function jd(n,e){If(n,"da",e)}function If(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(wa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)os(r.parent.vnode)&&Zd(i,e,t,r),r=r.parent}}function Zd(n,e,t,i){const r=wa(e,n,i,!0);Aa(()=>{Al(i[e],r)},t)}function wa(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Kn();const a=ls(t),l=ln(e,t,n,o);return a(),$n(),l});return i?r.unshift(s):r.push(s),s}}const Jn=n=>(e,t=Ft)=>{(!mr||n==="sp")&&wa(n,(...i)=>e(...i),t)},Jd=Jn("bm"),Gl=Jn("m"),Qd=Jn("bu"),ep=Jn("u"),Ff=Jn("bum"),Aa=Jn("um"),tp=Jn("sp"),np=Jn("rtg"),ip=Jn("rtc");function rp(n,e=Ft){wa("ec",n,e)}const sp=Symbol.for("v-ndc");function gS(n,e,t,i){let r;const s=t,o=Fe(n);if(o||gt(n)){const a=o&&fi(n);let l=!1,u=!1;a&&(l=!sn(n),u=Pn(n),n=Ta(n)),r=new Array(n.length);for(let c=0,h=n.length;c<h;c++)r[c]=e(l?u?pi(on(n[c])):on(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Lo=n=>n?rh(n)?Pa(n):Lo(n.parent):null,Kr=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Lo(n.parent),$root:n=>Lo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Of(n),$forceUpdate:n=>n.f||(n.f=()=>{zl(n.update)}),$nextTick:n=>n.n||(n.n=Nd.bind(n.proxy)),$watch:n=>kd.bind(n)}),ka=(n,e)=>n!==ct&&!n.__isScriptSetup&&it(n,e),ap={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ka(i,e))return o[e]=1,i[e];if(r!==ct&&it(r,e))return o[e]=2,r[e];if(it(s,e))return o[e]=3,s[e];if(t!==ct&&it(t,e))return o[e]=4,t[e];Io&&(o[e]=0)}}const u=Kr[e];let c,h;if(u)return e==="$attrs"&&It(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==ct&&it(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ka(r,e)?(r[e]=t,!0):i!==ct&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ct&&a[0]!=="$"&&it(n,a)||ka(e,a)||it(s,a)||it(i,a)||it(Kr,a)||it(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xc(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Io=!0;function op(n){const e=Of(n),t=n.proxy,i=n.ctx;Io=!1,e.beforeCreate&&Mc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:b,unmounted:S,render:B,renderTracked:C,renderTriggered:I,errorCaptured:z,serverPrefetch:E,expose:M,inheritAttrs:P,components:N,directives:G,filters:Z}=e;if(u&&lp(u,i,null),o)for(const se in o){const X=o[se];Ge(X)&&(i[se]=X.bind(t))}if(r){const se=r.call(t,t);rt(se)&&(n.data=Nl(se))}if(Io=!0,s)for(const se in s){const X=s[se],pe=Ge(X)?X.bind(t,t):Ge(X.get)?X.get.bind(t,t):Rn,ae=!Ge(X)&&Ge(X.set)?X.set.bind(t):Rn,le=Yp({get:pe,set:ae});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>le.value,set:ge=>le.value=ge})}if(a)for(const se in a)Nf(a[se],i,t,se);if(l){const se=Ge(l)?l.call(t):l;Reflect.ownKeys(se).forEach(X=>{Hd(X,se[X])})}c&&Mc(c,n,"c");function q(se,X){Fe(X)?X.forEach(pe=>se(pe.bind(t))):X&&se(X.bind(t))}if(q(Jd,h),q(Gl,d),q(Qd,f),q(ep,_),q($d,x),q(jd,m),q(rp,z),q(ip,C),q(np,I),q(Ff,R),q(Aa,S),q(tp,E),Fe(M))if(M.length){const se=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(se,X,{get:()=>t[X],set:pe=>t[X]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===Rn&&(n.render=B),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),G&&(n.directives=G),E&&Hl(n)}function lp(n,e,t=Rn){Fe(n)&&(n=Fo(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=js(r.from||i,r.default,!0):s=js(r.from||i):s=js(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Mc(n,e,t){ln(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let r=i.includes(".")?Af(t,i):()=>t[i];if(gt(n)){const s=e[n];Ge(s)&&vt(r,s)}else if(Ge(n))vt(r,n.bind(t));else if(rt(n))if(Fe(n))n.forEach(s=>Nf(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&vt(r,s,n)}}function Of(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>fa(l,u,o,!0)),fa(l,e,o)),rt(e)&&s.set(e,l),l}function fa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&fa(n,s,t,!0),r&&r.forEach(o=>fa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cp={data:Sc,props:yc,emits:yc,methods:Br,computed:Br,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Br,directives:Br,watch:fp,provide:Sc,inject:up};function Sc(n,e){return e?n?function(){return Tt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function up(n,e){return Br(Fo(n),Fo(e))}function Fo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Tt(Object.create(null),n,e):e}function yc(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Tt(Object.create(null),xc(n),xc(e??{})):e}function fp(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Bf(){return{app:null,config:{isNativeTag:ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function dp(n,e){return function(i,r=null){Ge(i)||(i=Tt({},i)),r!=null&&!rt(r)&&(r=null);const s=Bf(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$p,get config(){return s.config},set config(c){},use(c,...h){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(u,...h)):Ge(c)&&(o.add(c),c(u,...h))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,h){return h?(s.components[c]=h,u):s.components[c]},directive(c,h){return h?(s.directives[c]=h,u):s.directives[c]},mount(c,h,d){if(!l){const f=u._ceVNode||Pt(i,r);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(f,c,d),l=!0,u._container=c,c.__vue_app__=u,Pa(f.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ln(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return s.provides[c]=h,u},runWithContext(c){const h=fr;fr=u;try{return c()}finally{fr=h}}};return u}}let fr=null;const pp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gn(e)}Modifiers`]||n[`${vi(e)}Modifiers`];function mp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&pp(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>gt(c)?c.trim():c)),o.number&&(r=r.map(Cl)));let a,l=i[a=Oa(e)]||i[a=Oa(gn(e))];!l&&s&&(l=i[a=Oa(vi(e))]),l&&ln(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ln(u,n,6,r)}}const gp=new WeakMap;function zf(n,e,t=!1){const i=t?gp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=u=>{const c=zf(u,e,!0);c&&(a=!0,Tt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Tt(o,s),rt(n)&&i.set(n,o),o)}function Ra(n,e){return!n||!va(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,vi(e))||it(n,e))}function Ec(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,m=la(n);let p,R;try{if(t.shapeFlag&4){const S=r||i,B=S;p=bn(u.call(B,S,c,h,f,d,_)),R=a}else{const S=e;p=bn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),R=e.props?a:_p(a)}}catch(S){Gi.length=0,as(S,n,1),p=Pt(Ht)}let b=p;if(R&&x!==!1){const S=Object.keys(R),{shapeFlag:B}=b;S.length&&B&7&&(s&&S.some(xa)&&(R=vp(R,s)),b=mi(b,R,!1,!0))}if(t.dirs&&(b=mi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition){const S=ba(b.type)&&ca(b)||b;Qr(S,t.transition)}return p=b,la(m),p}const _p=n=>{let e;for(const t in n)(t==="class"||t==="style"||va(t))&&((e||(e={}))[t]=n[t]);return e},vp=(n,e)=>{const t={};for(const i in n)(!xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Tc(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(Hf(o,i,d)&&!Ra(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tc(i,o,u):!0:!!o;return!1}function Tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Hf(e,n,s)&&!Ra(t,s))return!0}return!1}function Hf(n,e,t){const i=n[t],r=e[t];return t==="style"&&rt(i)&&rt(r)?!Ea(i,r):i!==r}function Mp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Gf={},Vf=()=>Object.create(Gf),kf=n=>Object.getPrototypeOf(n)===Gf;function Sp(n,e,t,i=!1){const r={},s=Vf();n.propsDefaults=Object.create(null),Wf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:bd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function yp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(Ra(n.emitsOptions,d))continue;const f=e[d];if(l)if(it(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const _=gn(d);r[_]=No(l,a,_,f,n,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Wf(n,e,r,s)&&(u=!0);let c;for(const h in a)(!e||!it(e,h)&&((c=vi(h))===h||!it(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(r[h]=No(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!it(e,h))&&(delete s[h],u=!0)}u&&kn(n.attrs,"set","")}function Wf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(kr(l))continue;const u=e[l];let c;r&&it(r,c=gn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:Ra(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Je(t),u=a||ct;for(let c=0;c<s.length;c++){const h=s[c];t[h]=No(r,l,h,u[h],n,!it(u,h))}}return o}function No(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=ls(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===vi(t))&&(i=!0))}return i}const Ep=new WeakMap;function Xf(n,e,t=!1){const i=t?Ep:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const c=h=>{l=!0;const[d,f]=Xf(h,e,!0);Tt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return rt(n)&&i.set(n,Oi),Oi;if(Fe(s))for(let c=0;c<s.length;c++){const h=gn(s[c]);bc(h)&&(o[h]=ct)}else if(s)for(const c in s){const h=gn(c);if(bc(h)){const d=s[c],f=o[h]=Fe(d)||Ge(d)?{type:d}:Tt({},d),_=f.type;let x=!1,m=!0;if(Fe(_))for(let p=0;p<_.length;++p){const R=_[p],b=Ge(R)&&R.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=Ge(_)&&_.name==="Boolean";f[0]=x,f[1]=m,(x||it(f,"default"))&&a.push(h)}}const u=[o,a];return rt(n)&&i.set(n,u),u}function bc(n){return n[0]!=="$"&&!kr(n)}const Vl=n=>n==="_"||n==="_ctx"||n==="$stable",kl=n=>Fe(n)?n.map(bn):[bn(n)],Tp=(n,e,t)=>{if(e._n)return e;const i=zd((...r)=>kl(e(...r)),t);return i._c=!1,i},qf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Vl(r))continue;const s=n[r];if(Ge(s))e[r]=Tp(r,s,i);else if(s!=null){const o=kl(s);e[r]=()=>o}}},Yf=(n,e)=>{const t=kl(e);n.slots.default=()=>t},Kf=(n,e,t)=>{for(const i in e)(t||!Vl(i))&&(n[i]=e[i])},bp=(n,e,t)=>{const i=n.slots=Vf();if(n.vnode.shapeFlag&32){const r=e._;r?(Kf(i,e,t),t&&tf(i,"_",r,!0)):qf(e,i)}else e&&Yf(n,e)},wp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kf(r,e,t):(s=!e.$stable,qf(e,r)),o=e}else e&&(Yf(n,e),o={default:1});if(s)for(const a in r)!Vl(a)&&o[a]==null&&delete r[a]},kt=Dp;function Ap(n){return Rp(n)}function Rp(n,e){const t=Sa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:f=Rn,insertStaticContent:_}=n,x=(A,L,T,ce=null,w=null,U=null,F=void 0,Y=null,W=!!L.dynamicChildren)=>{if(A===L)return;A&&!Ii(A,L)&&(ce=de(A),ge(A,w,U,!0),A=null),L.patchFlag===-2&&(W=!1,L.dynamicChildren=null),L.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(L.dynamicChildren===Oi&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:v,ref:g,shapeFlag:D}=L;switch(v){case Ca:m(A,L,T,ce);break;case Ht:p(A,L,T,ce);break;case Zs:A==null&&R(L,T,ce,F);break;case Tn:N(A,L,T,ce,w,U,F,Y,W);break;default:D&1?B(A,L,T,ce,w,U,F,Y,W):D&6?G(A,L,T,ce,w,U,F,Y,W):(D&64||D&128)&&v.process(A,L,T,ce,w,U,F,Y,W,Ne)}g!=null&&w?qr(g,A&&A.ref,U,L||A,!L):g==null&&A&&A.ref!=null&&qr(A.ref,null,U,A,!0)},m=(A,L,T,ce)=>{if(A==null)i(L.el=a(L.children),T,ce);else{const w=L.el=A.el;L.children!==A.children&&u(w,L.children)}},p=(A,L,T,ce)=>{A==null?i(L.el=l(L.children||""),T,ce):L.el=A.el},R=(A,L,T,ce)=>{[A.el,A.anchor]=_(A.children,L,T,ce,A.el,A.anchor)},b=({el:A,anchor:L},T,ce)=>{let w;for(;A&&A!==L;)w=d(A),i(A,T,ce),A=w;i(L,T,ce)},S=({el:A,anchor:L})=>{let T;for(;A&&A!==L;)T=d(A),r(A),A=T;r(L)},B=(A,L,T,ce,w,U,F,Y,W)=>{if(L.type==="svg"?F="svg":L.type==="math"&&(F="mathml"),A==null)C(L,T,ce,w,U,F,Y,W);else{const v=A.el&&A.el._isVueCE?A.el:null;try{v&&v._beginPatch(),E(A,L,w,U,F,Y,W)}finally{v&&v._endPatch()}}},C=(A,L,T,ce,w,U,F,Y)=>{let W,v;const{props:g,shapeFlag:D,transition:O,dirs:$}=A;if(W=A.el=o(A.type,U,g&&g.is,g),D&8?c(W,A.children):D&16&&z(A.children,W,null,ce,w,Wa(A,U),F,Y),$&&Si(A,null,ce,"created"),I(W,A,A.scopeId,F,ce),g){for(const fe in g)fe!=="value"&&!kr(fe)&&s(W,fe,null,g[fe],U,ce);"value"in g&&s(W,"value",null,g.value,U),(v=g.onVnodeBeforeMount)&&Mn(v,ce,A)}$&&Si(A,null,ce,"beforeMount");const K=Cp(w,O);K&&O.beforeEnter(W),i(W,L,T),((v=g&&g.onVnodeMounted)||K||$)&&kt(()=>{try{v&&Mn(v,ce,A),K&&O.enter(W),$&&Si(A,null,ce,"mounted")}finally{}},w)},I=(A,L,T,ce,w)=>{if(T&&f(A,T),ce)for(let U=0;U<ce.length;U++)f(A,ce[U]);if(w){let U=w.subTree;if(L===U||Jf(U.type)&&(U.ssContent===L||U.ssFallback===L)){const F=w.vnode;I(A,F,F.scopeId,F.slotScopeIds,w.parent)}}},z=(A,L,T,ce,w,U,F,Y,W=0)=>{for(let v=W;v<A.length;v++){const g=A[v]=Y?Vn(A[v]):bn(A[v]);x(null,g,L,T,ce,w,U,F,Y)}},E=(A,L,T,ce,w,U,F)=>{const Y=L.el=A.el;let{patchFlag:W,dynamicChildren:v,dirs:g}=L;W|=A.patchFlag&16;const D=A.props||ct,O=L.props||ct;let $;if(T&&yi(T,!1),($=O.onVnodeBeforeUpdate)&&Mn($,T,L,A),g&&Si(L,A,T,"beforeUpdate"),T&&yi(T,!0),v&&(!A.dynamicChildren||A.dynamicChildren.length!==v.length)&&(W=0,F=!1,v=null),(D.innerHTML&&O.innerHTML==null||D.textContent&&O.textContent==null)&&c(Y,""),v?M(A.dynamicChildren,v,Y,T,ce,Wa(L,w),U):F||X(A,L,Y,null,T,ce,Wa(L,w),U,!1),W>0){if(W&16)P(Y,D,O,T,w);else if(W&2&&D.class!==O.class&&s(Y,"class",null,O.class,w),W&4&&s(Y,"style",D.style,O.style,w),W&8){const K=L.dynamicProps;for(let fe=0;fe<K.length;fe++){const oe=K[fe],me=D[oe],Ue=O[oe];(Ue!==me||oe==="value")&&s(Y,oe,me,Ue,w,T)}}W&1&&A.children!==L.children&&c(Y,L.children)}else!F&&v==null&&P(Y,D,O,T,w);(($=O.onVnodeUpdated)||g)&&kt(()=>{$&&Mn($,T,L,A),g&&Si(L,A,T,"updated")},ce)},M=(A,L,T,ce,w,U,F)=>{for(let Y=0;Y<L.length;Y++){const W=A[Y],v=L[Y],g=W.el&&(W.type===Tn||!Ii(W,v)||W.shapeFlag&198)?h(W.el):T;x(W,v,g,null,ce,w,U,F,!0)}},P=(A,L,T,ce,w)=>{if(L!==T){if(L!==ct)for(const U in L)!kr(U)&&!(U in T)&&s(A,U,L[U],null,w,ce);for(const U in T){if(kr(U))continue;const F=T[U],Y=L[U];F!==Y&&U!=="value"&&s(A,U,Y,F,w,ce)}"value"in T&&s(A,"value",L.value,T.value,w)}},N=(A,L,T,ce,w,U,F,Y,W)=>{const v=L.el=A?A.el:a(""),g=L.anchor=A?A.anchor:a("");let{patchFlag:D,dynamicChildren:O,slotScopeIds:$}=L;$&&(Y=Y?Y.concat($):$),A==null?(i(v,T,ce),i(g,T,ce),z(L.children||[],T,g,w,U,F,Y,W)):D>0&&D&64&&O&&A.dynamicChildren&&A.dynamicChildren.length===O.length?(M(A.dynamicChildren,O,T,w,U,F,Y),(L.key!=null||w&&L===w.subTree)&&$f(A,L,!0)):X(A,L,T,g,w,U,F,Y,W)},G=(A,L,T,ce,w,U,F,Y,W)=>{L.slotScopeIds=Y,A==null?L.shapeFlag&512?w.ctx.activate(L,T,ce,F,W):Z(L,T,ce,w,U,F,W):re(A,L,W)},Z=(A,L,T,ce,w,U,F)=>{const Y=A.component=Gp(A,ce,w);if(os(A)&&(Y.ctx.renderer=Ne),Vp(Y,!1,F),Y.asyncDep){if(w&&w.registerDep(Y,q,F),!A.el){const W=Y.subTree=Pt(Ht);p(null,W,L,T),A.placeholder=W.el}}else q(Y,A,L,T,w,U,F)},re=(A,L,T)=>{const ce=L.component=A.component;if(xp(A,L,T))if(ce.asyncDep&&!ce.asyncResolved){L.el=A.el,se(ce,L,T);return}else ce.next=L,ce.update();else L.el=A.el,ce.vnode=L},q=(A,L,T,ce,w,U,F)=>{const Y=()=>{if(A.isMounted){let{next:D,bu:O,u:$,parent:K,vnode:fe}=A;{const ve=jf(A);if(ve){D&&(D.el=fe.el,se(A,D,F)),ve.asyncDep.then(()=>{kt(()=>{A.isUnmounted||v()},w)});return}}let oe=D,me;yi(A,!1),D?(D.el=fe.el,se(A,D,F)):D=fe,O&&$s(O),(me=D.props&&D.props.onVnodeBeforeUpdate)&&Mn(me,K,D,fe),yi(A,!0);const Ue=Ec(A),he=A.subTree;A.subTree=Ue,x(he,Ue,h(he.el),de(he),A,w,U),D.el=Ue.el,oe===null&&Mp(A,Ue.el),$&&kt($,w),(me=D.props&&D.props.onVnodeUpdated)&&kt(()=>Mn(me,K,D,fe),w)}else{let D;const{el:O,props:$}=L,{bm:K,m:fe,parent:oe,root:me,type:Ue}=A,he=Yr(L);yi(A,!1),K&&$s(K),!he&&(D=$&&$.onVnodeBeforeMount)&&Mn(D,oe,L),yi(A,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(Ue,A.parent?A.parent.type:void 0);const ve=A.subTree=Ec(A);x(null,ve,T,ce,A,w,U),L.el=ve.el}if(fe&&kt(fe,w),!he&&(D=$&&$.onVnodeMounted)){const ve=L;kt(()=>Mn(D,oe,ve),w)}(L.shapeFlag&256||oe&&Yr(oe.vnode)&&oe.vnode.shapeFlag&256)&&A.a&&kt(A.a,w),A.isMounted=!0,L=T=ce=null}};A.scope.on();const W=A.effect=new af(Y);A.scope.off();const v=A.update=W.run.bind(W),g=A.job=W.runIfDirty.bind(W);g.i=A,g.id=A.uid,W.scheduler=()=>zl(g),yi(A,!0),v()},se=(A,L,T)=>{L.component=A;const ce=A.vnode.props;A.vnode=L,A.next=null,yp(A,L.props,ce,T),wp(A,L.children,T),Kn(),mc(A),$n()},X=(A,L,T,ce,w,U,F,Y,W=!1)=>{const v=A&&A.children,g=A?A.shapeFlag:0,D=L.children,{patchFlag:O,shapeFlag:$}=L;if(O>0){if(O&128){ae(v,D,T,ce,w,U,F,Y,W);return}else if(O&256){pe(v,D,T,ce,w,U,F,Y,W);return}}$&8?(g&16&&Se(v,w,U),D!==v&&c(T,D)):g&16?$&16?ae(v,D,T,ce,w,U,F,Y,W):Se(v,w,U,!0):(g&8&&c(T,""),$&16&&z(D,T,ce,w,U,F,Y,W))},pe=(A,L,T,ce,w,U,F,Y,W)=>{A=A||Oi,L=L||Oi;const v=A.length,g=L.length,D=Math.min(v,g);let O;for(O=0;O<D;O++){const $=L[O]=W?Vn(L[O]):bn(L[O]);x(A[O],$,T,null,w,U,F,Y,W)}v>g?Se(A,w,U,!0,!1,D):z(L,T,ce,w,U,F,Y,W,D)},ae=(A,L,T,ce,w,U,F,Y,W)=>{let v=0;const g=L.length;let D=A.length-1,O=g-1;for(;v<=D&&v<=O;){const $=A[v],K=L[v]=W?Vn(L[v]):bn(L[v]);if(Ii($,K))x($,K,T,null,w,U,F,Y,W);else break;v++}for(;v<=D&&v<=O;){const $=A[D],K=L[O]=W?Vn(L[O]):bn(L[O]);if(Ii($,K))x($,K,T,null,w,U,F,Y,W);else break;D--,O--}if(v>D){if(v<=O){const $=O+1,K=$<g?L[$].el:ce;for(;v<=O;)x(null,L[v]=W?Vn(L[v]):bn(L[v]),T,K,w,U,F,Y,W),v++}}else if(v>O)for(;v<=D;)ge(A[v],w,U,!0),v++;else{const $=v,K=v,fe=new Map;for(v=K;v<=O;v++){const xe=L[v]=W?Vn(L[v]):bn(L[v]);xe.key!=null&&fe.set(xe.key,v)}let oe,me=0;const Ue=O-K+1;let he=!1,ve=0;const Ie=new Array(Ue);for(v=0;v<Ue;v++)Ie[v]=0;for(v=$;v<=D;v++){const xe=A[v];if(me>=Ue){ge(xe,w,U,!0);continue}let Be;if(xe.key!=null)Be=fe.get(xe.key);else for(oe=K;oe<=O;oe++)if(Ie[oe-K]===0&&Ii(xe,L[oe])){Be=oe;break}Be===void 0?ge(xe,w,U,!0):(Ie[Be-K]=v+1,Be>=ve?ve=Be:he=!0,x(xe,L[Be],T,null,w,U,F,Y,W),me++)}const Oe=he?Pp(Ie):Oi;for(oe=Oe.length-1,v=Ue-1;v>=0;v--){const xe=K+v,Be=L[xe],Ve=L[xe+1],st=xe+1<g?Ve.el||Zf(Ve):ce;Ie[v]===0?x(null,Be,T,st,w,U,F,Y,W):he&&(oe<0||v!==Oe[oe]?le(Be,T,st,2):oe--)}}},le=(A,L,T,ce,w=null)=>{const{el:U,type:F,transition:Y,children:W,shapeFlag:v}=A;if(v&6){le(A.component.subTree,L,T,ce);return}if(v&128){A.suspense.move(L,T,ce);return}if(v&64){F.move(A,L,T,Ne);return}if(F===Tn){i(U,L,T);for(let D=0;D<W.length;D++)le(W[D],L,T,ce);i(A.anchor,L,T);return}if(F===Zs){b(A,L,T);return}if(ce!==2&&v&1&&Y)if(ce===0)Y.persisted&&!U[tn]?i(U,L,T):(Y.beforeEnter(U),i(U,L,T),kt(()=>Y.enter(U),w));else{const{leave:D,delayLeave:O,afterLeave:$}=Y,K=()=>{A.ctx.isUnmounted?r(U):i(U,L,T)},fe=()=>{const oe=U._isLeaving||!!U[tn];U._isLeaving&&U[tn](!0),Y.persisted&&!oe?K():D(U,()=>{K(),$&&$()})};O?O(U,K,fe):fe()}else i(U,L,T)},ge=(A,L,T,ce=!1,w=!1)=>{const{type:U,props:F,ref:Y,children:W,dynamicChildren:v,shapeFlag:g,patchFlag:D,dirs:O,cacheIndex:$,memo:K}=A;if((D===-2||v&&v.hasOnce)&&(w=!1),Y!=null&&(Kn(),qr(Y,null,T,A,!0),$n()),$!=null&&(!A.ctx||A.ctx===L)&&(L.renderCache[$]=void 0),g&256){L.ctx.deactivate(A);return}const fe=g&1&&O,oe=!Yr(A);let me;if(oe&&(me=F&&F.onVnodeBeforeUnmount)&&Mn(me,L,A),g&6)ie(A.component,T,ce);else{if(g&128){A.suspense.unmount(T,ce);return}fe&&Si(A,null,L,"beforeUnmount"),g&64?A.type.remove(A,L,T,Ne,ce):v&&!v.hasOnce&&(U!==Tn||D>0&&D&64)?Se(v,L,T,!1,!0):(U===Tn&&D&384||!w&&g&16)&&Se(W,L,T),ce&&Ee(A)}const Ue=K!=null&&$==null;(oe&&(me=F&&F.onVnodeUnmounted)||fe||Ue)&&kt(()=>{me&&Mn(me,L,A),fe&&Si(A,null,L,"unmounted"),Ue&&(A.el=null)},T)},Ee=A=>{const{type:L,el:T,anchor:ce,transition:w}=A;if(L===Tn){te(T,ce);return}if(L===Zs){S(A),w&&!w.persisted&&w.afterLeave&&w.afterLeave();return}const U=()=>{r(T),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(A.shapeFlag&1&&w&&!w.persisted){const{leave:F,delayLeave:Y}=w,W=()=>F(T,U);Y?Y(A.el,U,W):W()}else U()},te=(A,L)=>{let T;for(;A!==L;)T=d(A),r(A),A=T;r(L)},ie=(A,L,T)=>{const{bum:ce,scope:w,job:U,subTree:F,um:Y,m:W,a:v}=A;wc(W),wc(v),ce&&$s(ce),w.stop(),U?(U.flags|=8,ge(F,A,L,T)):A.vnode.el&&F&&(F.transition=A.vnode.transition,ge(F,A,L,T)),Y&&kt(Y,L),kt(()=>{A.isUnmounted=!0},L)},Se=(A,L,T,ce=!1,w=!1,U=0)=>{for(let F=U;F<A.length;F++)ge(A[F],L,T,ce,w)},de=A=>{if(A.shapeFlag&6)return de(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const L=d(A.anchor||A.el),T=L&&L[Wd];return T?d(T):L};let De=!1;const Ae=(A,L,T)=>{let ce;A==null?L._vnode&&(ge(L._vnode,null,null,!0),ce=L._vnode.component):x(L._vnode||null,A,L,null,null,null,T),L._vnode=A,De||(De=!0,mc(ce),Ef(),De=!1)},Ne={p:x,um:ge,m:le,r:Ee,mt:Z,mc:z,pc:X,pbc:M,n:de,o:n};return{render:Ae,hydrate:void 0,createApp:dp(Ae)}}function Wa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Cp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $f(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&$f(o,a)),a.type===Ca&&(a.patchFlag===-1&&(a=r[s]=Vn(a)),a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function Pp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function jf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jf(e)}function wc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Zf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Zf(e.subTree):null}const Jf=n=>n.__isSuspense;function Dp(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Bd(n)}const Tn=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Zs=Symbol.for("v-stc"),Gi=[];let jt=null;function Qf(n=!1){Gi.push(jt=n?null:[])}function eh(){Gi.pop(),jt=Gi[Gi.length-1]||null}let es=1;function ha(n,e=!1){es+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function th(n){return n.dynamicChildren=es>0?jt||Oi:null,eh(),es>0&&jt&&jt.push(n),n}function Up(n,e,t,i,r,s){return th(Wl(n,e,t,i,r,s,!0))}function Lp(n,e,t,i,r){return th(Pt(n,e,t,i,r,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function Ii(n,e){return n.type===e.type&&n.key===e.key}const nh=({key:n})=>n??null,Js=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Nt(n)||Ge(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function Wl(n,e=null,t=null,i=0,r=null,s=n===Tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nh(e),ref:e&&Js(e),scopeId:bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(pa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),es>0&&!o&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const Pt=Ip;function Ip(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===sp)&&(n=Ht),da(n)){const a=mi(n,e,!0);return t&&pa(a,t),es>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=ya(a)),rt(l)&&(Bl(l)&&!Fe(l)&&(l=Tt({},l)),e.style=Pl(l))}const o=gt(n)?1:Jf(n)?128:ba(n)?64:rt(n)?4:Ge(n)?2:0;return Wl(n,e,t,i,r,o,s,!0)}function Fp(n){return n?Bl(n)||kf(n)?Tt({},n):n:null}function mi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?Bp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&nh(u),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Js(e)):[s,Js(e)]:Js(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mi(n.ssContent),ssFallback:n.ssFallback&&mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Qr(c,l.clone(c)),c}function Np(n=" ",e=0){return Pt(Ca,null,n,e)}function _S(n,e){const t=Pt(Zs,null,n);return t.staticCount=e,t}function Op(n="",e=!1){return e?(Qf(),Lp(Ht,null,n)):Pt(Ht,null,n)}function bn(n){return n==null||typeof n=="boolean"?Pt(Ht):Fe(n)?Pt(Tn,null,n.slice()):da(n)?Vn(n):Pt(Ca,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mi(n)}function pa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!kf(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ge(e)){if(i&65){pa(n,{default:e});return}e={default:e,_ctx:rn},t=32}else e=String(e),i&64?(t=16,e=[Np(e)]):t=8;n.children=e,n.shapeFlag|=t}function Bp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ya([e.class,i.class]));else if(r==="style")e.style=Pl([e.style,i.style]);else if(va(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!xa(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){ln(n,e,7,[t,i])}const zp=Bf();let Hp=0;function Gp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zp,s={uid:Hp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(i,r),emitsOptions:zf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mp.bind(null,s),n.ce&&n.ce(s),s}let Ft=null;const ih=()=>Ft||rn;let ma,ts;{const n=Sa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ma=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),ts=e("__VUE_SSR_SETTERS__",t=>mr=t)}const ls=n=>{const e=Ft;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(e)}},Ac=()=>{Ft&&Ft.scope.off(),ma(null)};function rh(n){return n.vnode.shapeFlag&4}let mr=!1;function Vp(n,e=!1,t=!1){e&&ts(e);const{props:i,children:r}=n.vnode,s=rh(n);Sp(n,i,s,e),bp(n,r,t||e);const o=s?kp(n,e):void 0;return e&&ts(!1),o}function kp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ap);const{setup:i}=t;if(i){Kn();const r=n.setupContext=i.length>1?Xp(n):null,s=ls(n),o=ss(i,n,0,[n.props,r]),a=Zu(o);if($n(),s(),(a||n.sp)&&!Yr(n)&&Hl(n),a){if(o.then(Ac,Ac),e)return o.then(l=>{ts(!0);try{Rc(n,l,e)}finally{ts(!1)}}).catch(l=>{as(l,n,0)});n.asyncDep=o}else Rc(n,o)}else sh(n)}function Rc(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=Mf(e)),sh(n)}function sh(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const r=ls(n);Kn();try{op(n)}finally{$n(),r()}}}const Wp={get(n,e){return It(n,"get",""),n[e]}};function Xp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wp),slots:n.slots,emit:n.emit,expose:e}}function Pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(wd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}})):n.proxy}function qp(n){return Ge(n)&&"__vccOpts"in n}const Yp=(n,e)=>Ud(n,e,mr);function Kp(n,e,t){try{ha(-1);const i=arguments.length;return i===2?rt(e)&&!Fe(e)?da(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&da(t)&&(t=[t]),Pt(n,e,t))}finally{ha(1)}}const $p="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oo;const Cc=typeof window<"u"&&window.trustedTypes;if(Cc)try{Oo=Cc.createPolicy("vue",{createHTML:n=>n})}catch{}const ah=Oo?n=>Oo.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Pc=Gn&&Gn.createElement("template"),Jp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(jp,n):e==="mathml"?Gn.createElementNS(Zp,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pc.innerHTML=ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ti="transition",Ur="animation",ns=Symbol("_vtc"),oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qp=Tt({},Rf,oh),em=n=>(n.displayName="Transition",n.props=Qp,n),vS=em((n,{slots:e})=>Kp(Yd,tm(n),e)),Ei=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Dc=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function tm(n){const e={};for(const N in n)N in oh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,_=nm(r),x=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:b,onLeave:S,onLeaveCancelled:B,onBeforeAppear:C=p,onAppear:I=R,onAppearCancelled:z=b}=e,E=(N,G,Z,re)=>{N._enterCancelled=re,Ti(N,G?c:a),Ti(N,G?u:o),Z&&Z()},M=(N,G)=>{N._isLeaving=!1,Ti(N,h),Ti(N,f),Ti(N,d),G&&G()},P=N=>(G,Z)=>{const re=N?I:R,q=()=>E(G,N,Z);Ei(re,[G,q]),Uc(()=>{Ti(G,N?l:s),In(G,N?c:a),Dc(re)||Lc(G,i,x,q)})};return Tt(e,{onBeforeEnter(N){Ei(p,[N]),In(N,s),In(N,o)},onBeforeAppear(N){Ei(C,[N]),In(N,l),In(N,u)},onEnter:P(!1),onAppear:P(!0),onLeave(N,G){N._isLeaving=!0;const Z=()=>M(N,G);In(N,h),N._enterCancelled?(In(N,d),Nc(N)):(Nc(N),In(N,d)),Uc(()=>{N._isLeaving&&(Ti(N,h),In(N,f),Dc(S)||Lc(N,i,m,Z))}),Ei(S,[N,Z])},onEnterCancelled(N){E(N,!1,void 0,!0),Ei(b,[N])},onAppearCancelled(N){E(N,!0,void 0,!0),Ei(z,[N])},onLeaveCancelled(N){M(N),Ei(B,[N])}})}function nm(n){if(n==null)return null;if(rt(n))return[Xa(n.enter),Xa(n.leave)];{const e=Xa(n);return[e,e]}}function Xa(n){return jh(n)}function In(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ns]||(n[ns]=new Set)).add(e)}function Ti(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ns];t&&(t.delete(e),t.size||(n[ns]=void 0))}function Uc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let im=0;function Lc(n,e,t,i){const r=n._endId=++im,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=rm(n,e);if(!o)return i();const u=o+"end";let c=0;const h=()=>{n.removeEventListener(u,d),s()},d=f=>{f.target===n&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),n.addEventListener(u,d)}function rm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),o=Ic(r,s),a=i(`${Ur}Delay`),l=i(`${Ur}Duration`),u=Ic(a,l);let c=null,h=0,d=0;e===ti?o>0&&(c=ti,h=o,d=s.length):e===Ur?u>0&&(c=Ur,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?ti:Ur:null,d=c?c===ti?s.length:l.length:0);const f=c===ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${ti}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:f}}function Ic(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Fc(t)+Fc(n[i])))}function Fc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nc(n){return(n?n.ownerDocument:document).body.offsetHeight}function sm(n,e,t){const i=n[ns];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Oc=Symbol("_vod"),am=Symbol("_vsh"),om=Symbol(""),lm=/(?:^|;)\s*display\s*:/;function cm(n,e,t){const i=n.style,r=gt(t);let s=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zr(i,a,"")}else for(const o in e)t[o]==null&&zr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?fm(n,o,!gt(e)&&e?e[o]:void 0,a)||zr(i,o,a):zr(i,o,"")}}else if(r){if(e!==t){const o=i[om];o&&(t+=";"+o),i.cssText=t,s=lm.test(t)}}else e&&n.removeAttribute("style");Oc in n&&(n[Oc]=s?i.display:"",n[am]&&(i.display="none"))}const xs=/\s*!important$/;function zr(n,e,t){if(Fe(t))t.forEach(i=>zr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))xs.test(t)?n.setProperty(e,t.replace(xs,""),"important"):n.setProperty(e,t);else{const i=um(n,e);xs.test(t)?n.setProperty(vi(i),t.replace(xs,""),"important"):n[i]=t}}const Bc=["Webkit","Moz","ms"],qa={};function um(n,e){const t=qa[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return qa[e]=i;i=ef(i);for(let r=0;r<Bc.length;r++){const s=Bc[r]+i;if(s in n)return qa[e]=s}return e}function fm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&gt(i)&&t===i}const zc="http://www.w3.org/1999/xlink";function Hc(n,e,t,i,r,s=nd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zc,e.slice(6,e.length)):n.setAttributeNS(zc,e,t):t==null||s&&!nf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cn(t)?String(t):t)}function Gc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ah(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=nf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function or(n,e,t,i){n.addEventListener(e,t,i)}function hm(n,e,t,i){n.removeEventListener(e,t,i)}const Vc=Symbol("_vei");function dm(n,e,t,i,r=null){const s=n[Vc]||(n[Vc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=gm(e);if(i){const u=s[e]=xm(i,r);or(n,a,u,l)}else o&&(hm(n,a,o,l),s[e]=void 0)}}const pm=/(Once|Passive|Capture)$/,mm=/^on:?(?:Once|Passive|Capture)$/;function gm(n){let e,t;for(;(t=n.match(pm))&&!mm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):vi(n.slice(2)),e]}let Ya=0;const _m=Promise.resolve(),vm=()=>Ya||(_m.then(()=>Ya=0),Ya=Date.now());function xm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Fe(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&ln(u,e,5,a)}}else ln(r,e,5,[i])};return t.value=n,t.attached=vm(),t}const kc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?sm(n,i,o):e==="style"?cm(n,t,i):va(e)?xa(e)||dm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sm(n,e,i,o))?(Gc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hc(n,e,i,o,s,e!=="value")):n._isVueCE&&(ym(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(i)))?Gc(n,gn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Hc(n,e,i,o))};function Sm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&kc(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kc(e)&&gt(t)?!1:e in n}function ym(n,e){const t=n._def.props;if(!t)return!1;const i=gn(e);return Array.isArray(t)?t.some(r=>gn(r)===i):Object.keys(t).some(r=>gn(r)===i)}const Wc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>$s(e,t):e};function Em(n){n.target.composing=!0}function Xc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ms=Symbol("_assign"),Ss=Symbol("_initialValue");function Ka(n,e,t){return e&&(n=n.trim()),t&&(n=Cl(n)),n}const xS={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Ss]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Ss]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ms]=Wc(r);const s=i||r.props&&r.props.type==="number";or(n,e?"change":"input",o=>{o.target.composing||n[Ms](Ka(n.value,t,s))}),(t||s)&&or(n,"change",()=>{n.value=Ka(n.value,t,s)}),e||(or(n,"compositionstart",Em),or(n,"compositionend",Xc),or(n,"change",Xc))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Ss];delete n[Ss],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Ms](Ka(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ms]=Wc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Cl(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Tm=["ctrl","shift","alt","meta"],bm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Tm.some(t=>n[`${t}Key`]&&!e.includes(t))},MS=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=bm[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},wm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},SS=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=vi(r.key);if(e.some(o=>o===s||wm[o]===s))return n(r)}))},Am=Tt({patchProp:Mm},Jp);let qc;function Rm(){return qc||(qc=Ap(Am))}const yS=((...n)=>{const e=Rm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Pm(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Cm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Cm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pm(n){return gt(n)?document.querySelector(n):n}const Dm=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Um=vn("none");function Lm(n){Um.value=n}const lh=vn(null),Im=vn(null),ES=vn(0),Fm=vn(null);function TS(n,e){if(Fm.value=e?{...e}:null,Im.value=n,lh.value=n,typeof window<"u"){const t=`#project/${n}`;window.location.hash!==t&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}${t}`)}}function bS(){lh.value=null,typeof window<"u"&&window.location.hash.startsWith("#project/")&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}`)}const ch=vn(!1);function wS(){ch.value=!0,typeof window<"u"&&window.location.hash!=="#resume"&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}#resume`)}function AS(){ch.value=!1,typeof window<"u"&&window.location.hash==="#resume"&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}`)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="170",Nm=0,Yc=1,Om=2,uh=1,Bm=2,Hn=3,gi=0,qt=1,Xn=2,hi=0,hr=1,Kc=2,$c=3,jc=4,zm=5,Fi=100,Hm=101,Gm=102,Vm=103,km=104,Wm=200,Xm=201,qm=202,Ym=203,Bo=204,zo=205,Km=206,$m=207,jm=208,Zm=209,Jm=210,Qm=211,eg=212,tg=213,ng=214,Ho=0,Go=1,Vo=2,gr=3,ko=4,Wo=5,Xo=6,qo=7,fh=0,ig=1,rg=2,di=0,sg=1,ag=2,og=3,lg=4,cg=5,ug=6,fg=7,hh=300,_r=301,vr=302,Yo=303,Ko=304,Da=306,$o=1e3,xt=1001,jo=1002,Ye=1003,hg=1004,ys=1005,mt=1006,$a=1007,Bi=1008,jn=1009,dh=1010,ph=1011,is=1012,ql=1013,ki=1014,Et=1015,Er=1016,Yl=1017,Kl=1018,xr=1020,mh=35902,gh=1021,_h=1022,pt=1023,vh=1024,xh=1025,dr=1026,Mr=1027,Mh=1028,$l=1029,Sh=1030,jl=1031,Zl=1033,Qs=33776,ea=33777,ta=33778,na=33779,Zo=35840,Jo=35841,Qo=35842,el=35843,tl=36196,nl=37492,il=37496,rl=37808,sl=37809,al=37810,ol=37811,ll=37812,cl=37813,ul=37814,fl=37815,hl=37816,dl=37817,pl=37818,ml=37819,gl=37820,_l=37821,ia=36492,vl=36494,xl=36495,yh=36283,Ml=36284,Sl=36285,yl=36286,dg=3200,pg=3201,mg=0,gg=1,ci="",nn="srgb",Tr="srgb-linear",Ua="linear",ot="srgb",qi=7680,Zc=519,_g=512,vg=513,xg=514,Eh=515,Mg=516,Sg=517,yg=518,Eg=519,Jc=35044,zi="300 es",qn=2e3,ga=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ja=Math.PI/180,El=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Tg(n,e){return(n%e+e)%e}function Za(n,e,t){return(1-t)*n+t*e}function Lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],f=i[5],_=i[8],x=r[0],m=r[3],p=r[6],R=r[1],b=r[4],S=r[7],B=r[2],C=r[5],I=r[8];return s[0]=o*x+a*R+l*B,s[3]=o*m+a*b+l*C,s[6]=o*p+a*S+l*I,s[1]=u*x+c*R+h*B,s[4]=u*m+c*b+h*C,s[7]=u*p+c*S+h*I,s[2]=d*x+f*R+_*B,s[5]=d*m+f*b+_*C,s[8]=d*p+f*S+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,f=u*s-o*l,_=t*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(i*l-u*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Xe;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bg(){const n=_a("canvas");return n.style.display="block",n}const Qc={};function Hr(n){n in Qc||(Qc[n]=!0,console.warn(n))}function wg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ag(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(n.r=Yn(n.r),n.g=Yn(n.g),n.b=Yn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ci?Ua:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const eu=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],nu=[.3127,.329],iu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Tr]:{primaries:eu,whitePoint:nu,transfer:Ua,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:eu,whitePoint:nu,transfer:ot,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let Yi;class Cg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=_a("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pg=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qa(r[o].image)):s.push(Qa(r[o]))}else s=Qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dg=0;class Rt extends br{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=xt,r=xt,s=mt,o=Bi,a=pt,l=jn,u=Rt.DEFAULT_ANISOTROPY,c=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=cs(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case xt:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case xt:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=hh;Rt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,i=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,S=(f+1)/2,B=(p+1)/2,C=(c+d)/4,I=(h+x)/4,z=(_+m)/4;return b>S&&b>B?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=I/i):S>B?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=z/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=I/s,r=z/s),this.set(i,r,s,t),this}let R=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(h-x)/R,this.z=(d-c)/R,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends Ug{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||u!==f||c!==_){let m=1-a;const p=l*d+u*f+c*_+h*x,R=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const B=Math.sqrt(b),C=Math.atan2(B,p*R);m=Math.sin(m*C)/B,a=Math.sin(a*C)/B}const S=a*R;if(l=l*m+d*S,u=u*m+f*S,c=c*m+_*S,h=h*m+x*S,m===1-a){const B=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=B,u*=B,c*=B,h*=B}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*f-u*d,e[t+1]=l*_+c*d+u*h-a*f,e[t+2]=u*_+c*f+a*d-l*h,e[t+3]=c*_-a*h-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h-d*f*_;break;case"YXZ":this._x=d*c*h+u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h+d*f*_;break;case"ZXY":this._x=d*c*h-u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h-d*f*_;break;case"ZYX":this._x=d*c*h-u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h+d*f*_;break;case"YZX":this._x=d*c*h+u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h-d*f*_;break;case"XZY":this._x=d*c*h-u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new ee,su=new us;class fs{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ts.subVectors(this.max,Ir),Ki.subVectors(e.a,Ir),$i.subVectors(e.b,Ir),ji.subVectors(e.c,Ir),ni.subVectors($i,Ki),ii.subVectors(ji,$i),bi.subVectors(Ki,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!to(t,Ki,$i,ji,Ts)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Ki,$i,ji,Ts))?!1:(bs.crossVectors(ni,ii),t=[bs.x,bs.y,bs.z],to(t,Ki,$i,ji,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],fn=new ee,Es=new fs,Ki=new ee,$i=new ee,ji=new ee,ni=new ee,ii=new ee,bi=new ee,Ir=new ee,Ts=new ee,bs=new ee,wi=new ee;function to(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wi.fromArray(n,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),u=t.dot(wi),c=i.dot(wi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ig=new fs,Fr=new ee,no=new ee;class Jl{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ig.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(no)),this.expandByPoint(Fr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new ee,io=new ee,ws=new ee,ri=new ee,ro=new ee,As=new ee,so=new ee;class Fg{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){io.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ws),a=ri.dot(this.direction),l=-ri.dot(ws),u=ri.lengthSq(),c=Math.abs(1-o*o);let h,d,f,_;if(c>0)if(h=o*l-a,d=o*a-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const x=1/c;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(io).addScaledVector(ws,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){ro.subVectors(t,e),As.subVectors(i,e),so.crossVectors(ro,As);let o=this.direction.dot(so),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(As.crossVectors(ri,As));if(l<0)return null;const u=a*this.direction.dot(ro.cross(ri));if(u<0||l+u>o)return null;const c=-a*ri.dot(so);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,l,u,c,h,d,f,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,f,_,x,m)}set(e,t,i,r,s,o,a,l,u,c,h,d,f,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,f=o*h,_=a*c,x=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=f+_*u,t[5]=d-x*u,t[9]=-a*l,t[2]=x-d*u,t[6]=_+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,f=l*h,_=u*c,x=u*h;t[0]=d+x*a,t[4]=_*a-f,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=f*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,f=l*h,_=u*c,x=u*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*c,t[9]=x-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,f=o*h,_=a*c,x=a*h;t[0]=l*c,t[4]=_*u-f,t[8]=d*u+x,t[1]=l*h,t[5]=x*u+d,t[9]=f*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=x-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+x,t[5]=o*c,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*c,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ng,e,Og)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),si.crossVectors(i,Kt),si.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),si.crossVectors(i,Kt)),si.normalize(),Rs.crossVectors(Kt,si),r[0]=si.x,r[4]=Rs.x,r[8]=Kt.x,r[1]=si.y,r[5]=Rs.y,r[9]=Kt.y,r[2]=si.z,r[6]=Rs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],R=i[3],b=i[7],S=i[11],B=i[15],C=r[0],I=r[4],z=r[8],E=r[12],M=r[1],P=r[5],N=r[9],G=r[13],Z=r[2],re=r[6],q=r[10],se=r[14],X=r[3],pe=r[7],ae=r[11],le=r[15];return s[0]=o*C+a*M+l*Z+u*X,s[4]=o*I+a*P+l*re+u*pe,s[8]=o*z+a*N+l*q+u*ae,s[12]=o*E+a*G+l*se+u*le,s[1]=c*C+h*M+d*Z+f*X,s[5]=c*I+h*P+d*re+f*pe,s[9]=c*z+h*N+d*q+f*ae,s[13]=c*E+h*G+d*se+f*le,s[2]=_*C+x*M+m*Z+p*X,s[6]=_*I+x*P+m*re+p*pe,s[10]=_*z+x*N+m*q+p*ae,s[14]=_*E+x*G+m*se+p*le,s[3]=R*C+b*M+S*Z+B*X,s[7]=R*I+b*P+S*re+B*pe,s[11]=R*z+b*N+S*q+B*ae,s[15]=R*E+b*G+S*se+B*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*f-i*l*f)+x*(+t*l*f-t*u*d+s*o*d-r*o*f+r*u*c-s*l*c)+m*(+t*u*h-t*a*f-s*o*h+i*o*f+s*a*c-i*u*c)+p*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],m=e[14],p=e[15],R=h*m*u-x*d*u+x*l*f-a*m*f-h*l*p+a*d*p,b=_*d*u-c*m*u-_*l*f+o*m*f+c*l*p-o*d*p,S=c*x*u-_*h*u+_*a*f-o*x*f-c*a*p+o*h*p,B=_*h*l-c*x*l-_*a*d+o*x*d+c*a*m-o*h*m,C=t*R+i*b+r*S+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=R*I,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*I,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*p+i*l*p)*I,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*f-i*l*f)*I,e[4]=b*I,e[5]=(c*m*s-_*d*s+_*r*f-t*m*f-c*r*p+t*d*p)*I,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*p-t*l*p)*I,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*f+t*l*f)*I,e[8]=S*I,e[9]=(_*h*s-c*x*s-_*i*f+t*x*f+c*i*p-t*h*p)*I,e[10]=(o*x*s-_*a*s+_*i*u-t*x*u-o*i*p+t*a*p)*I,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*f-t*a*f)*I,e[12]=B*I,e[13]=(c*x*r-_*h*r+_*i*d-t*x*d-c*i*m+t*h*m)*I,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*I,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,f=s*c,_=s*h,x=o*c,m=o*h,p=a*h,R=l*u,b=l*c,S=l*h,B=i.x,C=i.y,I=i.z;return r[0]=(1-(x+p))*B,r[1]=(f+S)*B,r[2]=(_-b)*B,r[3]=0,r[4]=(f-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+R)*C,r[7]=0,r[8]=(_+b)*I,r[9]=(m-R)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const u=1/s,c=1/o,h=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(a===qn)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ga)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,f=(i+r)*c;let _,x;if(a===qn)_=(o+s)*h,x=-2*h;else if(a===ga)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new ee,hn=new yt,Ng=new ee(0,0,0),Og=new ee(1,1,1),si=new ee,Rs=new ee,Kt=new ee,au=new yt,ou=new us;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bg=0;const lu=new ee,Ji=new us,On=new yt,Cs=new ee,Nr=new ee,zg=new ee,Hg=new us,cu=new ee(1,0,0),uu=new ee(0,1,0),fu=new ee(0,0,1),hu={type:"added"},Gg={type:"removed"},Qi={type:"childadded",child:null},ao={type:"childremoved",child:null};class Zt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new ee,t=new Zn,i=new us,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Nr,Cs,this.up):On.lookAt(Cs,Nr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new ee(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new ee,Bn=new ee,oo=new ee,zn=new ee,er=new ee,tr=new ee,du=new ee,lo=new ee,co=new ee,uo=new ee,fo=new $e,ho=new $e,po=new $e;class mn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Bn.subVectors(i,t),oo.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Bn),l=dn.dot(oo),u=Bn.dot(Bn),c=Bn.dot(oo),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return fo.setScalar(0),ho.setScalar(0),po.setScalar(0),fo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,i),po.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(fo,s.x),o.addScaledVector(ho,s.y),o.addScaledVector(po,s.z),o}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Bn.subVectors(e,t),dn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),tr.subVectors(s,i),lo.subVectors(e,i);const l=er.dot(lo),u=tr.dot(lo);if(l<=0&&u<=0)return t.copy(i);co.subVectors(e,r);const c=er.dot(co),h=tr.dot(co);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(er,o);uo.subVectors(e,s);const f=er.dot(uo),_=tr.dot(uo);if(_>=0&&f<=_)return t.copy(s);const x=f*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(tr,a);const m=c*_-f*h;if(m<=0&&h-c>=0&&f-_>=0)return du.subVectors(s,r),a=(h-c)/(h-c+(f-_)),t.copy(r).addScaledVector(du,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Tg(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Wt(Lt.r*255,0,255))*65536+Math.round(Wt(Lt.g*255,0,255))*256+Math.round(Wt(Lt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=nn){je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ps);const i=Za(ai.h,Ps.h,t),r=Za(ai.s,Ps.s,t),s=Za(ai.l,Ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new et;et.NAMES=Rh;let Vg=0;class La extends br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=cs(),this.name="",this.blending=hr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==zo&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ql extends La{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new ee,Ds=new He;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=Et,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Ch extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ph extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vi extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kg=0;const en=new yt,go=new Zt,nr=new ee,$t=new fs,Or=new fs,At=new ee;class xi extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Ph:Ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vi(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors($t.min,Or.min),$t.expandByPoint(At),At.addVectors($t.max,Or.max),$t.expandByPoint(At)):($t.expandByPoint(Or.min),$t.expandByPoint(Or.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)At.fromBufferAttribute(a,u),l&&(nr.fromBufferAttribute(e,u),At.add(nr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new ee,l[z]=new ee;const u=new ee,c=new ee,h=new ee,d=new He,f=new He,_=new He,x=new ee,m=new ee;function p(z,E,M){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,z),f.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),c.sub(u),h.sub(u),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(P),a[z].add(x),a[E].add(x),a[M].add(x),l[z].add(m),l[E].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let z=0,E=R.length;z<E;++z){const M=R[z],P=M.start,N=M.count;for(let G=P,Z=P+N;G<Z;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new ee,S=new ee,B=new ee,C=new ee;function I(z){B.fromBufferAttribute(r,z),C.copy(B);const E=a[z];b.copy(E),b.sub(B.multiplyScalar(B.dot(E))).normalize(),S.crossVectors(C,E);const P=S.dot(l[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,P)}for(let z=0,E=R.length;z<E;++z){const M=R[z],P=M.start,N=M.count;for(let G=P,Z=P+N;G<Z;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,u=new ee,c=new ee,h=new ee;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let p=0;p<c;p++)d[_++]=u[f++]}return new an(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new yt,Ai=new Fg,Us=new Jl,mu=new ee,Ls=new ee,Is=new ee,Fs=new ee,_o=new ee,Ns=new ee,gu=new ee,Os=new ee;class Xt extends Zt{constructor(e=new xi,t=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(_o.fromBufferAttribute(h,e),o?Ns.addScaledVector(_o,c):Ns.addScaledVector(_o.sub(t),c))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Us.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Us,mu)===null||Ai.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(pu),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],R=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=R,B=b;S<B;S+=3){const C=a.getX(S),I=a.getX(S+1),z=a.getX(S+2);r=Bs(this,p,e,i,u,c,h,C,I,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const R=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=Bs(this,o,e,i,u,c,h,R,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],R=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=R,B=b;S<B;S+=3){const C=S,I=S+1,z=S+2;r=Bs(this,p,e,i,u,c,h,C,I,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const R=m,b=m+1,S=m+2;r=Bs(this,o,e,i,u,c,h,R,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wg(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gi,a),l===null)return null;Os.copy(a),Os.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Os);return u<t.near||u>t.far?null:{distance:u,point:Os.clone(),object:n}}function Bs(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Is),n.getVertexPosition(u,Fs);const c=Wg(n,e,t,i,Ls,Is,Fs,gu);if(c){const h=new ee;mn.getBarycoord(gu,Ls,Is,Fs,h),r&&(c.uv=mn.getInterpolatedAttribute(r,a,l,u,h,new He)),s&&(c.uv1=mn.getInterpolatedAttribute(s,a,l,u,h,new He)),o&&(c.normal=mn.getInterpolatedAttribute(o,a,l,u,h,new ee),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new ee,materialIndex:0};mn.getNormal(Ls,Is,Fs,d.normal),c.face=d,c.barycoord=h}return c}class hs extends xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vi(u,3)),this.setAttribute("normal",new Vi(c,3)),this.setAttribute("uv",new Vi(h,2));function _(x,m,p,R,b,S,B,C,I,z,E){const M=S/I,P=B/z,N=S/2,G=B/2,Z=C/2,re=I+1,q=z+1;let se=0,X=0;const pe=new ee;for(let ae=0;ae<q;ae++){const le=ae*P-G;for(let ge=0;ge<re;ge++){const Ee=ge*M-N;pe[x]=Ee*R,pe[m]=le*b,pe[p]=Z,u.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[p]=C>0?1:-1,c.push(pe.x,pe.y,pe.z),h.push(ge/I),h.push(1-ae/z),se+=1}}for(let ae=0;ae<z;ae++)for(let le=0;le<I;le++){const ge=d+le+re*ae,Ee=d+le+re*(ae+1),te=d+(le+1)+re*(ae+1),ie=d+(le+1)+re*ae;l.push(ge,Ee,ie),l.push(Ee,te,ie),X+=6}a.addGroup(f,X,E),f+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function Xg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const qg={clone:Sr,merge:Bt};var Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends La{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uh extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new ee,_u=new He,vu=new He;class pn extends Uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,_u,vu),t.subVectors(vu,_u)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class $g extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new pn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new pn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new pn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new pn(ir,rr,e,t);l.layers=this.layers,this.add(l);const u=new pn(ir,rr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Lh extends Rt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jg extends Ke{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:hi});s.uniforms.tEquirect.value=t;const o=new Xt(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=mt),new $g(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const vo=new ee,Zg=new ee,Jg=new Xe;class Ui{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vo.subVectors(i,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jg.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Jl,zs=new ee;class Ih{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],f=r[8],_=r[9],x=r[10],m=r[11],p=r[12],R=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-f,S-p).normalize(),i[1].setComponents(l+s,d+u,m+f,S+p).normalize(),i[2].setComponents(l+o,d+c,m+_,S+R).normalize(),i[3].setComponents(l-o,d-c,m-_,S-R).normalize(),i[4].setComponents(l-a,d-h,m-x,S-b).normalize(),t===qn)i[5].setComponents(l+a,d+h,m+x,S+b).normalize();else if(t===ga)i[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zs.x=r.normal.x>0?e.max.x:e.min.x,zs.y=r.normal.y>0?e.max.y:e.min.y,zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qg(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];n.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class _i extends xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,f=[],_=[],x=[],m=[];for(let p=0;p<c;p++){const R=p*d-o;for(let b=0;b<u;b++){const S=b*h-s;_.push(S,-R,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const b=R+u*p,S=R+u*(p+1),B=R+1+u*(p+1),C=R+1+u*p;f.push(b,S,C),f.push(S,B,C)}this.setIndex(f),this.setAttribute("position",new Vi(_,3)),this.setAttribute("normal",new Vi(x,3)),this.setAttribute("uv",new Vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var e_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
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
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
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
#endif`,o_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
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
#endif`,c_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d_=`#ifdef USE_IRIDESCENCE
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
#endif`,p_=`#ifdef USE_BUMPMAP
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
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E_=`#define PI 3.141592653589793
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
} // validated`,T_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b_=`vec3 transformedNormal = objectNormal;
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
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
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
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,J_=`struct PhysicalMaterial {
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
}`,Q_=`
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,S0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,w0=`#define TOON
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
}`,A0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:n_,alphamap_pars_fragment:i_,alphatest_fragment:r_,alphatest_pars_fragment:s_,aomap_fragment:a_,aomap_pars_fragment:o_,batching_pars_vertex:l_,batching_vertex:c_,begin_vertex:u_,beginnormal_vertex:f_,bsdfs:h_,iridescence_fragment:d_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:__,clipping_planes_vertex:v_,color_fragment:x_,color_pars_fragment:M_,color_pars_vertex:S_,color_vertex:y_,common:E_,cube_uv_reflection_fragment:T_,defaultnormal_vertex:b_,displacementmap_pars_vertex:w_,displacementmap_vertex:A_,emissivemap_fragment:R_,emissivemap_pars_fragment:C_,colorspace_fragment:P_,colorspace_pars_fragment:D_,envmap_fragment:U_,envmap_common_pars_fragment:L_,envmap_pars_fragment:I_,envmap_pars_vertex:F_,envmap_physical_pars_fragment:q_,envmap_vertex:N_,fog_vertex:O_,fog_pars_vertex:B_,fog_fragment:z_,fog_pars_fragment:H_,gradientmap_pars_fragment:G_,lightmap_pars_fragment:V_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:W_,lights_pars_begin:X_,lights_toon_fragment:Y_,lights_toon_pars_fragment:K_,lights_phong_fragment:$_,lights_phong_pars_fragment:j_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:Q_,lights_fragment_maps:ev,lights_fragment_end:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:sv,map_fragment:av,map_pars_fragment:ov,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:fv,morphinstance_vertex:hv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:_v,normal_fragment_maps:vv,normal_pars_fragment:xv,normal_pars_vertex:Mv,normal_vertex:Sv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Ev,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:wv,opaque_fragment:Av,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Pv,dithering_fragment:Dv,dithering_pars_fragment:Uv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Bv,skinbase_vertex:zv,skinning_pars_vertex:Hv,skinning_vertex:Gv,skinnormal_vertex:Vv,specularmap_fragment:kv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:Kv,uv_pars_fragment:$v,uv_pars_vertex:jv,uv_vertex:Zv,worldpos_vertex:Jv,background_vert:Qv,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:r0,depth_vert:s0,depth_frag:a0,distanceRGBA_vert:o0,distanceRGBA_frag:l0,equirect_vert:c0,equirect_frag:u0,linedashed_vert:f0,linedashed_frag:h0,meshbasic_vert:d0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:v0,meshnormal_vert:x0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:y0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:b0,meshtoon_frag:w0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:D0,sprite_frag:U0},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wn={basic:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Bt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Bt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Bt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Bt([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Bt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Bt([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Bt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Bt([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Bt([Me.common,Me.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Bt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:Bt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Hs={r:0,b:0,g:0},Ci=new Zn,L0=new yt;function I0(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,h=null,d=0,f=null;function _(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function x(R){let b=!1;const S=_(R);S===null?p(a,l):S&&S.isColor&&(p(S,1),b=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,b){const S=_(b);S&&(S.isCubeTexture||S.mapping===Da)?(c===void 0&&(c=new Xt(new hs(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Sr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(B,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ci.copy(b.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Ci)),c.material.toneMapped=je.getTransfer(S.colorSpace)!==ot,(h!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Xt(new _i(2,2),new Mt({name:"BackgroundMaterial",uniforms:Sr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=je.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function p(R,b){R.getRGB(Hs,Dh(n)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:x,addToRenderList:m}}function F0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,P,N,G,Z){let re=!1;const q=h(G,N,P);s!==q&&(s=q,u(s.object)),re=f(M,G,N,Z),re&&_(M,G,N,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(M,P,N,G),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function h(M,P,N){const G=N.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let re=Z[P.id];re===void 0&&(re={},Z[P.id]=re);let q=re[G];return q===void 0&&(q=d(l()),re[G]=q),q}function d(M){const P=[],N=[],G=[];for(let Z=0;Z<t;Z++)P[Z]=0,N[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,P,N,G){const Z=s.attributes,re=P.attributes;let q=0;const se=N.getAttributes();for(const X in se)if(se[X].location>=0){const ae=Z[X];let le=re[X];if(le===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function _(M,P,N,G){const Z={},re=P.attributes;let q=0;const se=N.getAttributes();for(const X in se)if(se[X].location>=0){let ae=re[X];ae===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),Z[X]=le,q++}s.attributes=Z,s.attributesNum=q,s.index=G}function x(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const N=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;N[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),Z[M]!==P&&(n.vertexAttribDivisor(M,P),Z[M]=P)}function R(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,G=P.length;N<G;N++)P[N]!==M[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function b(M,P,N,G,Z,re,q){q===!0?n.vertexAttribIPointer(M,P,N,Z,re):n.vertexAttribPointer(M,P,N,G,Z,re)}function S(M,P,N,G){x();const Z=G.attributes,re=N.getAttributes(),q=P.defaultAttributeValues;for(const se in re){const X=re[se];if(X.location>=0){let pe=Z[se];if(pe===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const ae=pe.normalized,le=pe.itemSize,ge=e.get(pe);if(ge===void 0)continue;const Ee=ge.buffer,te=ge.type,ie=ge.bytesPerElement,Se=te===n.INT||te===n.UNSIGNED_INT||pe.gpuType===ql;if(pe.isInterleavedBufferAttribute){const de=pe.data,De=de.stride,Ae=pe.offset;if(de.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)p(X.location+Ne,de.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)m(X.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Ne=0;Ne<X.locationSize;Ne++)b(X.location+Ne,le/X.locationSize,te,ae,De*ie,(Ae+le/X.locationSize*Ne)*ie,Se)}else{if(pe.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)p(X.location+de,pe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let de=0;de<X.locationSize;de++)m(X.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let de=0;de<X.locationSize;de++)b(X.location+de,le/X.locationSize,te,ae,le*ie,le/X.locationSize*de*ie,Se)}}else if(q!==void 0){const ae=q[se];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(X.location,ae);break;case 3:n.vertexAttrib3fv(X.location,ae);break;case 4:n.vertexAttrib4fv(X.location,ae);break;default:n.vertexAttrib1fv(X.location,ae)}}}}R()}function B(){z();for(const M in i){const P=i[M];for(const N in P){const G=P[N];for(const Z in G)c(G[Z].object),delete G[Z];delete P[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const N in P){const G=P[N];for(const Z in G)c(G[Z].object),delete G[Z];delete P[N]}delete i[M.id]}function I(M){for(const P in i){const N=i[P];if(N[M.id]===void 0)continue;const G=N[M.id];for(const Z in G)c(G[Z].object),delete G[Z];delete N[M.id]}}function z(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function N0(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let f=0;for(let _=0;_<h;_++)f+=c[_];t.update(f,i,1)}function l(u,c,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=c[x]*d[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function O0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==pt&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const z=I===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==jn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Et&&!z)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:B,maxSamples:C}}function B0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const R=s?0:i,b=R*4;let S=p.clippingState||null;l.value=S,S=c(_,d,b,f);for(let B=0;B!==b;++B)S[B]=t[B];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=f+x*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==x;++b,S+=4)o.copy(h[b]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function z0(n){let e=new WeakMap;function t(o,a){return a===Yo?o.mapping=_r:a===Ko&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yo||a===Ko)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new jg(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wr extends Uh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,xu=[.125,.215,.35,.446,.526,.582],Ni=20,xo=new wr,Mu=new et;let Mo=null,So=0,yo=0,Eo=!1;const Li=(1+Math.sqrt(5))/2,sr=1/Li,Su=[new ee(-Li,sr,0),new ee(Li,sr,0),new ee(-sr,0,Li),new ee(sr,0,Li),new ee(0,Li,-sr),new ee(0,Li,sr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,So,yo),this._renderer.xr.enabled=Eo,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Er,format:pt,colorSpace:Tr,depthBuffer:!1},r=Eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(s)),this._blurMaterial=G0(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,r){const a=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Mu),c.toneMapping=di,c.autoClear=!1;const f=new Ql({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new Xt(new hs,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Mu),x=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const b=this._cubeSize;Gs(r,R*b,p>2?b:0,b,b),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_r||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Su[(r-s-1)%Su.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Xt(this._lodPlanes[r],u),d=u.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),x=s/_,m=isFinite(s)?1+Math.floor(c*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let R=0;for(let I=0;I<Ni;++I){const z=I/x,E=Math.exp(-z*z/2);p.push(E),I===0?R+=E:I<m&&(R+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;const S=this._sizeLods[r],B=3*S*(r>b-lr?r-b+lr:0),C=4*(this._cubeSize-S);Gs(t,B,C,3*S,2*S),l.setRenderTarget(t),l.render(h,xo)}}function H0(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+xu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-lr?l=xu[o-n+lr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,_=6,x=3,m=2,p=1,R=new Float32Array(x*_*f),b=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let C=0;C<f;C++){const I=C%3*2/3-1,z=C>2?0:-1,E=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];R.set(E,x*_*C),b.set(d,m*_*C);const M=[C,C,C,C,C,C];S.set(M,p*_*C)}const B=new xi;B.setAttribute("position",new an(R,x)),B.setAttribute("uv",new an(b,m)),B.setAttribute("faceIndex",new an(S,p)),e.push(B),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eu(n,e,t){const i=new Ke(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function G0(n,e,t){const i=new Float32Array(Ni),r=new ee(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Tu(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function bu(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function V0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Yo||l===Ko,c=l===_r||l===vr;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yu(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return u&&f&&f.height>0||c&&f&&r(f)?(t===null&&(t=new yu(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function k0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W0(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const x=f[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function u(h){const d=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const R=f.array;x=f.version;for(let b=0,S=R.length;b<S;b+=3){const B=R[b+0],C=R[b+1],I=R[b+2];d.push(B,C,C,I,I,B)}}else if(_!==void 0){const R=_.array;x=_.version;for(let b=0,S=R.length/3-1;b<S;b+=3){const B=b+0,C=b+1,I=b+2;d.push(B,C,C,I,I,B)}}else return;const m=new(Th(d)?Ph:Ch)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function c(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function X0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,s,d*o,_),t.update(f,i,_))}function c(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function h(d,f,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,_);let p=0;for(let R=0;R<_;R++)p+=f[R]*x[R];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function q0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Y0(n,e,t){const i=new WeakMap,r=new $e;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let S=a.attributes.position.count*b,B=1;S>e.maxTextureSize&&(B=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*B*4*h),I=new wh(C,S,B,h);I.type=Et,I.needsUpdate=!0;const z=b*4;for(let M=0;M<h;M++){const P=m[M],N=p[M],G=R[M],Z=S*B*4*M;for(let re=0;re<P.count;re++){const q=re*z;f===!0&&(r.fromBufferAttribute(P,re),C[Z+q+0]=r.x,C[Z+q+1]=r.y,C[Z+q+2]=r.z,C[Z+q+3]=0),_===!0&&(r.fromBufferAttribute(N,re),C[Z+q+4]=r.x,C[Z+q+5]=r.y,C[Z+q+6]=r.z,C[Z+q+7]=0),x===!0&&(r.fromBufferAttribute(G,re),C[Z+q+8]=r.x,C[Z+q+9]=r.y,C[Z+q+10]=r.z,C[Z+q+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new He(S,B)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<u.length;x++)f+=u[x];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function K0(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Nh extends Rt{constructor(e,t,i,r,s,o,a,l,u,c=dr){if(c!==dr&&c!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===dr&&(i=ki),i===void 0&&c===Mr&&(i=xr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oh=new Rt,wu=new Nh(1,1),Bh=new wh,zh=new Lg,Hh=new Lh,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Au[r];if(s===void 0&&(s=new Float32Array(r),Au[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),wt(t,i)}}function ex(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),wt(t,i)}}function tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),wt(t,i)}}function nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=Eh,s=wu):s=Oh,t.setTexture2D(e||s,r)}function fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zh,r)}function hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bh,r)}function px(n){switch(n){case 5126:return $0;case 35664:return j0;case 35665:return Z0;case 35666:return J0;case 35674:return Q0;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}function mx(n,e){n.uniform1fv(this.addr,e)}function gx(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function _x(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function vx(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function xx(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mx(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sx(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yx(n,e){n.uniform1iv(this.addr,e)}function Ex(n,e){n.uniform2iv(this.addr,e)}function Tx(n,e){n.uniform3iv(this.addr,e)}function bx(n,e){n.uniform4iv(this.addr,e)}function wx(n,e){n.uniform1uiv(this.addr,e)}function Ax(n,e){n.uniform2uiv(this.addr,e)}function Rx(n,e){n.uniform3uiv(this.addr,e)}function Cx(n,e){n.uniform4uiv(this.addr,e)}function Px(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oh,s[o])}function Dx(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function Ux(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function Lx(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bh,s[o])}function Ix(n){switch(n){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return vx;case 35674:return xx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return yx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return bx;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Lx}}class Fx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=px(t.type)}}class Nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Uu(n,e){n.seq.push(e),n.map[e.id]=e}function Bx(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const s=To.exec(i),o=To.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Uu(t,u===void 0?new Fx(a,n,e):new Nx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ox(a),Uu(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zx=37297;let Hx=0;function Gx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Iu=new Xe;function Vx(n){je._getMatrix(Iu,je.workingColorSpace,n);const e=`mat3( ${Iu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Ua:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gx(n.getShaderSource(e),o)}else return r}function kx(n,e){const t=Vx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wx(n,e){let t;switch(e){case sg:t="Linear";break;case ag:t="Reinhard";break;case og:t="Cineon";break;case lg:t="ACESFilmic";break;case ug:t="AgX";break;case fg:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new ee;function Xx(){je.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Yx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function Nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace($x,Zx)}const jx=new Map;function Zx(n,e){let t=qe[e];if(t===void 0){const i=jx.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(Jx,Qx)}function Qx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function eM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function tM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function iM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case rg:e="ENVMAP_BLENDING_ADD";break}return e}function rM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eM(t),u=tM(t),c=nM(t),h=iM(t),d=rM(t),f=qx(t),_=Yx(s),x=r.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?qe.tonemapping_pars_fragment:"",t.toneMapping!==di?Wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Tl(o),o=Nu(o,t),o=Ou(o,t),a=Tl(a),a=Nu(a,t),a=Ou(a,t),o=Bu(o),a=Bu(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=R+m+o,S=R+p+a,B=Lu(r,r.VERTEX_SHADER,b),C=Lu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,B),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),G=r.getShaderInfoLog(B).trim(),Z=r.getShaderInfoLog(C).trim();let re=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,B,C);else{const se=Fu(r,B,"vertex"),X=Fu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+se+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||Z==="")&&(q=!1);q&&(P.diagnostics={runnable:re,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(B),r.deleteShader(C),z=new ra(r,x),E=Kx(r,x)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,zx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}let aM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lM(e),t.set(e,i)),i}}class lM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function cM(n,e,t,i,r,s,o){const a=new Ah,l=new oM,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,N,G){const Z=N.fog,re=G.geometry,q=E.isMeshStandardMaterial?N.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),X=se&&se.mapping===Da?se.image.height:null,pe=_[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ae=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,le=ae!==void 0?ae.length:0;let ge=0;re.morphAttributes.position!==void 0&&(ge=1),re.morphAttributes.normal!==void 0&&(ge=2),re.morphAttributes.color!==void 0&&(ge=3);let Ee,te,ie,Se;if(pe){const at=wn[pe];Ee=at.vertexShader,te=at.fragmentShader}else Ee=E.vertexShader,te=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),Se=l.getFragmentShaderID(E);const de=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Ae=G.isInstancedMesh===!0,Ne=G.isBatchedMesh===!0,lt=!!E.map,A=!!E.matcap,L=!!se,T=!!E.aoMap,ce=!!E.lightMap,w=!!E.bumpMap,U=!!E.normalMap,F=!!E.displacementMap,Y=!!E.emissiveMap,W=!!E.metalnessMap,v=!!E.roughnessMap,g=E.anisotropy>0,D=E.clearcoat>0,O=E.dispersion>0,$=E.iridescence>0,K=E.sheen>0,fe=E.transmission>0,oe=g&&!!E.anisotropyMap,me=D&&!!E.clearcoatMap,Ue=D&&!!E.clearcoatNormalMap,he=D&&!!E.clearcoatRoughnessMap,ve=$&&!!E.iridescenceMap,Ie=$&&!!E.iridescenceThicknessMap,Oe=K&&!!E.sheenColorMap,xe=K&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ve=!!E.specularColorMap,st=!!E.specularIntensityMap,H=fe&&!!E.transmissionMap,ye=fe&&!!E.thicknessMap,ne=!!E.gradientMap,ue=!!E.alphaMap,we=E.alphaTest>0,Te=!!E.alphaHash,ke=!!E.extensions;let _t=di;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Dt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:te,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Tr,alphaToCoverage:!!E.alphaToCoverage,map:lt,matcap:A,envMap:L,envMapMode:L&&se.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:ce,bumpMap:w,normalMap:U,displacementMap:d&&F,emissiveMap:Y,normalMapObjectSpace:U&&E.normalMapType===gg,normalMapTangentSpace:U&&E.normalMapType===mg,metalnessMap:W,roughnessMap:v,anisotropy:g,anisotropyMap:oe,clearcoat:D,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:he,dispersion:O,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:xe,specularMap:Be,specularColorMap:Ve,specularIntensityMap:st,transmission:fe,transmissionMap:H,thicknessMap:ye,gradientMap:ne,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Te,combine:E.combine,mapUv:lt&&x(E.map.channel),aoMapUv:T&&x(E.aoMap.channel),lightMapUv:ce&&x(E.lightMap.channel),bumpMapUv:w&&x(E.bumpMap.channel),normalMapUv:U&&x(E.normalMap.channel),displacementMapUv:F&&x(E.displacementMap.channel),emissiveMapUv:Y&&x(E.emissiveMap.channel),metalnessMapUv:W&&x(E.metalnessMap.channel),roughnessMapUv:v&&x(E.roughnessMap.channel),anisotropyMapUv:oe&&x(E.anisotropyMap.channel),clearcoatMapUv:me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(E.sheenRoughnessMap.channel),specularMapUv:Be&&x(E.specularMap.channel),specularColorMapUv:Ve&&x(E.specularColorMap.channel),specularIntensityMapUv:st&&x(E.specularIntensityMap.channel),transmissionMapUv:H&&x(E.transmissionMap.channel),thicknessMapUv:ye&&x(E.thicknessMap.channel),alphaMapUv:ue&&x(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(U||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!re.attributes.uv&&(lt||ue),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:G.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:Y&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xn,flipSided:E.side===qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(R(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function R(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=_[E.type];let P;if(M){const N=wn[M];P=qg.clone(N.uniforms)}else P=E.uniforms;return P}function B(E,M){let P;for(let N=0,G=c.length;N<G;N++){const Z=c[N];if(Z.cacheKey===M){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new sM(n,M,E,s),c.push(P)),P}function C(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function I(E){l.remove(E)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:B,releaseProgram:C,releaseShaderCache:I,programs:c,dispose:z}}function uM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function fM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,_,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||fM),i.length>1&&i.sort(d||Hu),r.length>1&&r.sort(d||Hu)}function c(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function hM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gu,n.set(i,[o])):r>=s.length?(o=new Gu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new et};break;case"SpotLight":t={position:new ee,direction:new ee,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function pM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mM=0;function gM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _M(n){const e=new dM,t=pM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ee);const r=new ee,s=new yt,o=new yt;function a(u){let c=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,R=0,b=0,S=0,B=0,C=0,I=0;u.sort(gM);for(let E=0,M=u.length;E<M;E++){const P=u[E],N=P.color,G=P.intensity,Z=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=N.r*G,h+=N.g*G,d+=N.b*G;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],G);I++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=re,i.directionalShadowMatrix[f]=P.shadow.matrix,R++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(G),q.distance=Z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[x]=q;const se=P.shadow;if(P.map&&(i.spotLightMap[B]=P.map,B++,se.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=se.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=re,S++}x++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(N).multiplyScalar(G),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const se=P.shadow,X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=P.shadow.matrix,b++}i.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(G),q.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==f||z.pointLength!==_||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==R||z.numPointShadows!==b||z.numSpotShadows!==S||z.numSpotMaps!==B||z.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,z.directionalLength=f,z.pointLength=_,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=R,z.numPointShadows=b,z.numSpotShadows=S,z.numSpotMaps=B,z.numLightProbes=I,i.version=mM++)}function l(u,c){let h=0,d=0,f=0,_=0,x=0;const m=c.matrixWorldInverse;for(let p=0,R=u.length;p<R;p++){const b=u[p];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Vu(n){const e=new _M(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vu(n),e.set(r,[a])):s>=o.length?(a=new Vu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class xM extends La{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MM extends La{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;function EM(n,e,t){let i=new Ih;const r=new He,s=new He,o=new $e,a=new xM({depthPacking:pg}),l=new MM,u={},c=t.maxTextureSize,h={[gi]:qt,[qt]:gi,[Xn]:Xn},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:SM,fragmentShader:yM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new xi;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(C,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=p!==Hn&&this.type===Hn,Z=p===Hn&&this.type!==Hn;for(let re=0,q=C.length;re<q;re++){const se=C[re],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pe=X.getFrameExtents();if(r.multiply(pe),s.copy(X.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/pe.x),r.x=s.x*pe.x,X.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/pe.y),r.y=s.y*pe.y,X.mapSize.y=s.y)),X.map===null||G===!0||Z===!0){const le=this.type!==Hn?{minFilter:Ye,magFilter:Ye}:{};X.map!==null&&X.map.dispose(),X.map=new Ke(r.x,r.y,le),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ae=X.getViewportCount();for(let le=0;le<ae;le++){const ge=X.getViewport(le);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(o),X.updateMatrices(se,le),i=X.getFrustum(),S(I,z,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Hn&&R(X,z),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,P)};function R(C,I){const z=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ke(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,z,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,z,f,x,null)}function b(C,I,z,E){let M=null;const P=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=z.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const N=M.uuid,G=I.uuid;let Z=u[N];Z===void 0&&(Z={},u[N]=Z);let re=Z[G];re===void 0&&(re=M.clone(),Z[G]=re,I.addEventListener("dispose",B)),M=re}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Hn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=z}return M}function S(C,I,z,E,M){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const G=e.update(C),Z=C.material;if(Array.isArray(Z)){const re=G.groups;for(let q=0,se=re.length;q<se;q++){const X=re[q],pe=Z[X.materialIndex];if(pe&&pe.visible){const ae=b(C,pe,E,M);C.onBeforeShadow(n,C,I,z,G,ae,X),n.renderBufferDirect(z,null,G,ae,C,X),C.onAfterShadow(n,C,I,z,G,ae,X)}}}else if(Z.visible){const re=b(C,Z,E,M);C.onBeforeShadow(n,C,I,z,G,re,null),n.renderBufferDirect(z,null,G,re,C,null),C.onAfterShadow(n,C,I,z,G,re,null)}}const N=C.children;for(let G=0,Z=N.length;G<Z;G++)S(N[G],I,z,E,M)}function B(C){C.target.removeEventListener("dispose",B);for(const z in u){const E=u[z],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const TM={[Ho]:Go,[Vo]:Xo,[ko]:qo,[gr]:Wo,[Go]:Ho,[Xo]:Vo,[qo]:ko,[Wo]:gr};function bM(n,e){function t(){let H=!1;const ye=new $e;let ne=null;const ue=new $e(0,0,0,0);return{setMask:function(we){ne!==we&&!H&&(n.colorMask(we,we,we,we),ne=we)},setLocked:function(we){H=we},setClear:function(we,Te,ke,_t,Dt){Dt===!0&&(we*=_t,Te*=_t,ke*=_t),ye.set(we,Te,ke,_t),ue.equals(ye)===!1&&(n.clearColor(we,Te,ke,_t),ue.copy(ye))},reset:function(){H=!1,ne=null,ue.set(-1,0,0,0)}}}function i(){let H=!1,ye=!1,ne=null,ue=null,we=null;return{setReversed:function(Te){if(ye!==Te){const ke=e.get("EXT_clip_control");ye?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const _t=we;we=null,this.setClear(_t)}ye=Te},getReversed:function(){return ye},setTest:function(Te){Te?de(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!H&&(n.depthMask(Te),ne=Te)},setFunc:function(Te){if(ye&&(Te=TM[Te]),ue!==Te){switch(Te){case Ho:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Vo:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){H=Te},setClear:function(Te){we!==Te&&(ye&&(Te=1-Te),n.clearDepth(Te),we=Te)},reset:function(){H=!1,ne=null,ue=null,we=null,ye=!1}}}function r(){let H=!1,ye=null,ne=null,ue=null,we=null,Te=null,ke=null,_t=null,Dt=null;return{setTest:function(at){H||(at?de(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(at){ye!==at&&!H&&(n.stencilMask(at),ye=at)},setFunc:function(at,cn,Dn){(ne!==at||ue!==cn||we!==Dn)&&(n.stencilFunc(at,cn,Dn),ne=at,ue=cn,we=Dn)},setOp:function(at,cn,Dn){(Te!==at||ke!==cn||_t!==Dn)&&(n.stencilOp(at,cn,Dn),Te=at,ke=cn,_t=Dn)},setLocked:function(at){H=at},setClear:function(at){Dt!==at&&(n.clearStencil(at),Dt=at)},reset:function(){H=!1,ye=null,ne=null,ue=null,we=null,Te=null,ke=null,_t=null,Dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,R=null,b=null,S=null,B=null,C=null,I=new et(0,0,0),z=0,E=!1,M=null,P=null,N=null,G=null,Z=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=se>=2);let pe=null,ae={};const le=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Ee=new $e().fromArray(le),te=new $e().fromArray(ge);function ie(H,ye,ne,ue){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(H,Te),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ne;ke++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ye+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const Se={};Se[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(gr),w(!1),U(Yc),de(n.CULL_FACE),T(hi);function de(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function De(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function Ae(H,ye){return h[H]!==ye?(n.bindFramebuffer(H,ye),h[H]=ye,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ne(H,ye){let ne=f,ue=!1;if(H){ne=d.get(ye),ne===void 0&&(ne=[],d.set(ye,ne));const we=H.textures;if(ne.length!==we.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,ke=we.length;Te<ke;Te++)ne[Te]=n.COLOR_ATTACHMENT0+Te;ne.length=we.length,ue=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ne)}function lt(H){return _!==H?(n.useProgram(H),_=H,!0):!1}const A={[Fi]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[Gm]:n.FUNC_REVERSE_SUBTRACT};A[Vm]=n.MIN,A[km]=n.MAX;const L={[Wm]:n.ZERO,[Xm]:n.ONE,[qm]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[Jm]:n.SRC_ALPHA_SATURATE,[jm]:n.DST_COLOR,[Km]:n.DST_ALPHA,[Ym]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[Zm]:n.ONE_MINUS_DST_COLOR,[$m]:n.ONE_MINUS_DST_ALPHA,[Qm]:n.CONSTANT_COLOR,[eg]:n.ONE_MINUS_CONSTANT_COLOR,[tg]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function T(H,ye,ne,ue,we,Te,ke,_t,Dt,at){if(H===hi){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),H!==zm){if(H!==m||at!==E){if((p!==Fi||S!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,S=Fi),at)switch(H){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,b=null,B=null,C=null,I.set(0,0,0),z=0,m=H,E=at}return}we=we||ye,Te=Te||ne,ke=ke||ue,(ye!==p||we!==S)&&(n.blendEquationSeparate(A[ye],A[we]),p=ye,S=we),(ne!==R||ue!==b||Te!==B||ke!==C)&&(n.blendFuncSeparate(L[ne],L[ue],L[Te],L[ke]),R=ne,b=ue,B=Te,C=ke),(_t.equals(I)===!1||Dt!==z)&&(n.blendColor(_t.r,_t.g,_t.b,Dt),I.copy(_t),z=Dt),m=H,E=!1}function ce(H,ye){H.side===Xn?De(n.CULL_FACE):de(n.CULL_FACE);let ne=H.side===qt;ye&&(ne=!ne),w(ne),H.blending===hr&&H.transparent===!1?T(hi):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const ue=H.stencilWrite;a.setTest(ue),ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function w(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function U(H){H!==Nm?(de(n.CULL_FACE),H!==P&&(H===Yc?n.cullFace(n.BACK):H===Om?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),P=H}function F(H){H!==N&&(q&&n.lineWidth(H),N=H)}function Y(H,ye,ne){H?(de(n.POLYGON_OFFSET_FILL),(G!==ye||Z!==ne)&&(n.polygonOffset(ye,ne),G=ye,Z=ne)):De(n.POLYGON_OFFSET_FILL)}function W(H){H?de(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function v(H){H===void 0&&(H=n.TEXTURE0+re-1),pe!==H&&(n.activeTexture(H),pe=H)}function g(H,ye,ne){ne===void 0&&(pe===null?ne=n.TEXTURE0+re-1:ne=pe);let ue=ae[ne];ue===void 0&&(ue={type:void 0,texture:void 0},ae[ne]=ue),(ue.type!==H||ue.texture!==ye)&&(pe!==ne&&(n.activeTexture(ne),pe=ne),n.bindTexture(H,ye||Se[H]),ue.type=H,ue.texture=ye)}function D(){const H=ae[pe];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(H){Ee.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function xe(H){te.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function Be(H,ye){let ne=u.get(ye);ne===void 0&&(ne=new WeakMap,u.set(ye,ne));let ue=ne.get(H);ue===void 0&&(ue=n.getUniformBlockIndex(ye,H.name),ne.set(H,ue))}function Ve(H,ye){const ue=u.get(ye).get(H);l.get(ye)!==ue&&(n.uniformBlockBinding(ye,ue,H.__bindingPointIndex),l.set(ye,ue))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},pe=null,ae={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,R=null,b=null,S=null,B=null,C=null,I=new et(0,0,0),z=0,E=!1,M=null,P=null,N=null,G=null,Z=null,Ee.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:De,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:lt,setBlending:T,setMaterial:ce,setFlipSided:w,setCullFace:U,setLineWidth:F,setPolygonOffset:Y,setScissorTest:W,activeTexture:v,bindTexture:g,unbindTexture:D,compressedTexImage2D:O,compressedTexImage3D:$,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Ue,texStorage3D:he,texSubImage2D:K,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Oe,viewport:xe,reset:st}}function ku(n,e,t,i){const r=wM(i);switch(t){case gh:return n*e;case vh:return n*e;case xh:return n*e*2;case Mh:return n*e/r.components*r.byteLength;case $l:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case _h:return n*e*3/r.components*r.byteLength;case pt:return n*e*4/r.components*r.byteLength;case Zl:return n*e*4/r.components*r.byteLength;case Qs:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:case el:return Math.max(n,16)*Math.max(e,8)/4;case Zo:case Qo:return Math.max(n,8)*Math.max(e,8)/2;case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ia:case vl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yh:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sl:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wM(n){switch(n){case jn:case dh:return{byteLength:1,components:1};case is:case ph:case Er:return{byteLength:2,components:1};case Yl:case Kl:return{byteLength:2,components:4};case ki:case ql:case Et:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,c=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,g){return f?new OffscreenCanvas(v,g):_a("canvas")}function x(v,g,D){let O=1;const $=W(v);if(($.width>D||$.height>D)&&(O=D/Math.max($.width,$.height)),O<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const K=Math.floor(O*$.width),fe=Math.floor(O*$.height);h===void 0&&(h=_(K,fe));const oe=g?_(K,fe):h;return oe.width=K,oe.height=fe,oe.getContext("2d").drawImage(v,0,0,K,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+fe+")."),oe}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),v;return v}function m(v){return v.generateMipmaps}function p(v){n.generateMipmap(v)}function R(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(v,g,D,O,$=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let K=g;if(g===n.RED&&(D===n.FLOAT&&(K=n.R32F),D===n.HALF_FLOAT&&(K=n.R16F),D===n.UNSIGNED_BYTE&&(K=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.R8UI),D===n.UNSIGNED_SHORT&&(K=n.R16UI),D===n.UNSIGNED_INT&&(K=n.R32UI),D===n.BYTE&&(K=n.R8I),D===n.SHORT&&(K=n.R16I),D===n.INT&&(K=n.R32I)),g===n.RG&&(D===n.FLOAT&&(K=n.RG32F),D===n.HALF_FLOAT&&(K=n.RG16F),D===n.UNSIGNED_BYTE&&(K=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RG8UI),D===n.UNSIGNED_SHORT&&(K=n.RG16UI),D===n.UNSIGNED_INT&&(K=n.RG32UI),D===n.BYTE&&(K=n.RG8I),D===n.SHORT&&(K=n.RG16I),D===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGB8UI),D===n.UNSIGNED_SHORT&&(K=n.RGB16UI),D===n.UNSIGNED_INT&&(K=n.RGB32UI),D===n.BYTE&&(K=n.RGB8I),D===n.SHORT&&(K=n.RGB16I),D===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),D===n.UNSIGNED_INT&&(K=n.RGBA32UI),D===n.BYTE&&(K=n.RGBA8I),D===n.SHORT&&(K=n.RGBA16I),D===n.INT&&(K=n.RGBA32I)),g===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),g===n.RGBA){const fe=$?Ua:je.getTransfer(O);D===n.FLOAT&&(K=n.RGBA32F),D===n.HALF_FLOAT&&(K=n.RGBA16F),D===n.UNSIGNED_BYTE&&(K=fe===ot?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(v,g){let D;return v?g===null||g===ki||g===xr?D=n.DEPTH24_STENCIL8:g===Et?D=n.DEPTH32F_STENCIL8:g===is&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ki||g===xr?D=n.DEPTH_COMPONENT24:g===Et?D=n.DEPTH_COMPONENT32F:g===is&&(D=n.DEPTH_COMPONENT16),D}function B(v,g){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Ye&&v.minFilter!==mt?Math.log2(Math.max(g.width,g.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?g.mipmaps.length:1}function C(v){const g=v.target;g.removeEventListener("dispose",C),z(g),g.isVideoTexture&&c.delete(g)}function I(v){const g=v.target;g.removeEventListener("dispose",I),M(g)}function z(v){const g=i.get(v);if(g.__webglInit===void 0)return;const D=v.source,O=d.get(D);if(O){const $=O[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(v),Object.keys(O).length===0&&d.delete(D)}i.remove(v)}function E(v){const g=i.get(v);n.deleteTexture(g.__webglTexture);const D=v.source,O=d.get(D);delete O[g.__cacheKey],o.memory.textures--}function M(v){const g=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let $=0;$<g.__webglFramebuffer[O].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[O][$]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=v.textures;for(let O=0,$=D.length;O<$;O++){const K=i.get(D[O]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(D[O])}i.remove(v)}let P=0;function N(){P=0}function G(){const v=P;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),P+=1,v}function Z(v){const g=[];return g.push(v.wrapS),g.push(v.wrapT),g.push(v.wrapR||0),g.push(v.magFilter),g.push(v.minFilter),g.push(v.anisotropy),g.push(v.internalFormat),g.push(v.format),g.push(v.type),g.push(v.generateMipmaps),g.push(v.premultiplyAlpha),g.push(v.flipY),g.push(v.unpackAlignment),g.push(v.colorSpace),g.join()}function re(v,g){const D=i.get(v);if(v.isVideoTexture&&F(v),v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){const O=v.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,v,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function q(v,g){const D=i.get(v);if(v.version>0&&D.__version!==v.version){te(D,v,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function se(v,g){const D=i.get(v);if(v.version>0&&D.__version!==v.version){te(D,v,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function X(v,g){const D=i.get(v);if(v.version>0&&D.__version!==v.version){ie(D,v,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const pe={[$o]:n.REPEAT,[xt]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},ae={[Ye]:n.NEAREST,[hg]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[mt]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},le={[_g]:n.NEVER,[Eg]:n.ALWAYS,[vg]:n.LESS,[Eh]:n.LEQUAL,[xg]:n.EQUAL,[yg]:n.GEQUAL,[Mg]:n.GREATER,[Sg]:n.NOTEQUAL};function ge(v,g){if(g.type===Et&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===mt||g.magFilter===$a||g.magFilter===ys||g.magFilter===Bi||g.minFilter===mt||g.minFilter===$a||g.minFilter===ys||g.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,pe[g.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ae[g.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ye||g.minFilter!==ys&&g.minFilter!==Bi||g.type===Et&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ee(v,g){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,g.addEventListener("dispose",C));const O=g.source;let $=d.get(O);$===void 0&&($={},d.set(O,$));const K=Z(g);if(K!==v.__cacheKey){$[K]===void 0&&($[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[K].usedTimes++;const fe=$[v.__cacheKey];fe!==void 0&&($[v.__cacheKey].usedTimes--,fe.usedTimes===0&&E(g)),v.__cacheKey=K,v.__webglTexture=$[K].texture}return D}function te(v,g,D){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);const $=Ee(v,g),K=g.source;t.bindTexture(O,v.__webglTexture,n.TEXTURE0+D);const fe=i.get(K);if(K.version!==fe.__version||$===!0){t.activeTexture(n.TEXTURE0+D);const oe=je.getPrimaries(je.workingColorSpace),me=g.colorSpace===ci?null:je.getPrimaries(g.colorSpace),Ue=g.colorSpace===ci||oe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let he=x(g.image,!1,r.maxTextureSize);he=Y(g,he);const ve=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let Oe=b(g.internalFormat,ve,Ie,g.colorSpace,g.isVideoTexture);ge(O,g);let xe;const Be=g.mipmaps,Ve=g.isVideoTexture!==!0,st=fe.__version===void 0||$===!0,H=K.dataReady,ye=B(g,he);if(g.isDepthTexture)Oe=S(g.format===Mr,g.type),st&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Oe,he.width,he.height,0,ve,Ie,null));else if(g.isDataTexture)if(Be.length>0){Ve&&st&&t.texStorage2D(n.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ue=Be.length;ne<ue;ne++)xe=Be[ne],Ve?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,ve,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,ne,Oe,xe.width,xe.height,0,ve,Ie,xe.data);g.generateMipmaps=!1}else Ve?(st&&t.texStorage2D(n.TEXTURE_2D,ye,Oe,he.width,he.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ve,Ie,he.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,he.width,he.height,0,ve,Ie,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ve&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Oe,Be[0].width,Be[0].height,he.depth);for(let ne=0,ue=Be.length;ne<ue;ne++)if(xe=Be[ne],g.format!==pt)if(ve!==null)if(Ve){if(H)if(g.layerUpdates.size>0){const we=ku(xe.width,xe.height,g.format,g.type);for(const Te of g.layerUpdates){const ke=xe.data.subarray(Te*we/xe.data.BYTES_PER_ELEMENT,(Te+1)*we/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Te,xe.width,xe.height,1,ve,ke)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,he.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Oe,xe.width,xe.height,he.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,he.depth,ve,Ie,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Oe,xe.width,xe.height,he.depth,0,ve,Ie,xe.data)}else{Ve&&st&&t.texStorage2D(n.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ue=Be.length;ne<ue;ne++)xe=Be[ne],g.format!==pt?ve!==null?Ve?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,ve,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,ne,Oe,xe.width,xe.height,0,ve,Ie,xe.data)}else if(g.isDataArrayTexture)if(Ve){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Oe,he.width,he.height,he.depth),H)if(g.layerUpdates.size>0){const ne=ku(he.width,he.height,g.format,g.type);for(const ue of g.layerUpdates){const we=he.data.subarray(ue*ne/he.data.BYTES_PER_ELEMENT,(ue+1)*ne/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,he.width,he.height,1,ve,Ie,we)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ie,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,ve,Ie,he.data);else if(g.isData3DTexture)Ve?(st&&t.texStorage3D(n.TEXTURE_3D,ye,Oe,he.width,he.height,he.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ie,he.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,ve,Ie,he.data);else if(g.isFramebufferTexture){if(st)if(Ve)t.texStorage2D(n.TEXTURE_2D,ye,Oe,he.width,he.height);else{let ne=he.width,ue=he.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,Oe,ne,ue,0,ve,Ie,null),ne>>=1,ue>>=1}}else if(Be.length>0){if(Ve&&st){const ne=W(Be[0]);t.texStorage2D(n.TEXTURE_2D,ye,Oe,ne.width,ne.height)}for(let ne=0,ue=Be.length;ne<ue;ne++)xe=Be[ne],Ve?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve,Ie,xe):t.texImage2D(n.TEXTURE_2D,ne,Oe,ve,Ie,xe);g.generateMipmaps=!1}else if(Ve){if(st){const ne=W(he);t.texStorage2D(n.TEXTURE_2D,ye,Oe,ne.width,ne.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,he)}else t.texImage2D(n.TEXTURE_2D,0,Oe,ve,Ie,he);m(g)&&p(O),fe.__version=K.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function ie(v,g,D){if(g.image.length!==6)return;const O=Ee(v,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+D);const K=i.get($);if($.version!==K.__version||O===!0){t.activeTexture(n.TEXTURE0+D);const fe=je.getPrimaries(je.workingColorSpace),oe=g.colorSpace===ci?null:je.getPrimaries(g.colorSpace),me=g.colorSpace===ci||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let ue=0;ue<6;ue++)!Ue&&!he?ve[ue]=x(g.image[ue],!0,r.maxCubemapSize):ve[ue]=he?g.image[ue].image:g.image[ue],ve[ue]=Y(g,ve[ue]);const Ie=ve[0],Oe=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),Be=b(g.internalFormat,Oe,xe,g.colorSpace),Ve=g.isVideoTexture!==!0,st=K.__version===void 0||O===!0,H=$.dataReady;let ye=B(g,Ie);ge(n.TEXTURE_CUBE_MAP,g);let ne;if(Ue){Ve&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,Ie.width,Ie.height);for(let ue=0;ue<6;ue++){ne=ve[ue].mipmaps;for(let we=0;we<ne.length;we++){const Te=ne[we];g.format!==pt?Oe!==null?Ve?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Te.width,Te.height,Oe,xe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Te.width,Te.height,0,Oe,xe,Te.data)}}}else{if(ne=g.mipmaps,Ve&&st){ne.length>0&&ye++;const ue=W(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(he){Ve?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ve[ue].width,ve[ue].height,Oe,xe,ve[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,ve[ue].width,ve[ue].height,0,Oe,xe,ve[ue].data);for(let we=0;we<ne.length;we++){const ke=ne[we].image[ue].image;Ve?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,ke.width,ke.height,Oe,xe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,ke.width,ke.height,0,Oe,xe,ke.data)}}else{Ve?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,xe,ve[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Oe,xe,ve[ue]);for(let we=0;we<ne.length;we++){const Te=ne[we];Ve?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Oe,xe,Te.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,Oe,xe,Te.image[ue])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),K.__version=$.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Se(v,g,D,O,$,K){const fe=s.convert(D.format,D.colorSpace),oe=s.convert(D.type),me=b(D.internalFormat,fe,oe,D.colorSpace),Ue=i.get(g),he=i.get(D);if(he.__renderTarget=g,!Ue.__hasExternalTextures){const ve=Math.max(1,g.width>>K),Ie=Math.max(1,g.height>>K);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,K,me,ve,Ie,g.depth,0,fe,oe,null):t.texImage2D($,K,me,ve,Ie,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,$,he.__webglTexture,0,w(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,$,he.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(v,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,v),g.depthBuffer){const O=g.depthTexture,$=O&&O.isDepthTexture?O.type:null,K=S(g.stencilBuffer,$),fe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w(g);U(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,K,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,v)}else{const O=g.textures;for(let $=0;$<O.length;$++){const K=O[$],fe=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),me=b(K.internalFormat,fe,oe,K.colorSpace),Ue=w(g);D&&U(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,me,g.width,g.height):U(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(v,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(g.depthTexture);O.__renderTarget=g,(!O.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const $=O.__webglTexture,K=w(g);if(g.depthTexture.format===dr)U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(g.depthTexture.format===Mr)U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ae(v){const g=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==v.depthTexture){const O=v.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",$)};O.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=O}if(v.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");De(g.__webglFramebuffer,v)}else if(D){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=n.createRenderbuffer(),de(g.__webglDepthbuffer[O],v,!1);else{const $=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),de(g.__webglDepthbuffer,v,!1);else{const O=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(v,g,D){const O=i.get(v);g!==void 0&&Se(O.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ae(v)}function lt(v){const g=v.texture,D=i.get(v),O=i.get(g);v.addEventListener("dispose",I);const $=v.textures,K=v.isWebGLCubeRenderTarget===!0,fe=$.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,o.memory.textures++),K){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let me=0;me<g.mipmaps.length;me++)D.__webglFramebuffer[oe][me]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(fe)for(let oe=0,me=$.length;oe<me;oe++){const Ue=i.get($[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&U(v)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const me=$[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const Ue=s.convert(me.format,me.colorSpace),he=s.convert(me.type),ve=b(me.internalFormat,Ue,he,me.colorSpace,v.isXRRenderTarget===!0),Ie=w(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),de(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),ge(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Se(D.__webglFramebuffer[oe][me],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else Se(D.__webglFramebuffer[oe],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,me=$.length;oe<me;oe++){const Ue=$[oe],he=i.get(Ue);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),ge(n.TEXTURE_2D,Ue),Se(D.__webglFramebuffer,v,Ue,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(oe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),ge(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Se(D.__webglFramebuffer[me],v,g,n.COLOR_ATTACHMENT0,oe,me);else Se(D.__webglFramebuffer,v,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&p(oe),t.unbindTexture()}v.depthBuffer&&Ae(v)}function A(v){const g=v.textures;for(let D=0,O=g.length;D<O;D++){const $=g[D];if(m($)){const K=R(v),fe=i.get($).__webglTexture;t.bindTexture(K,fe),p(K),t.unbindTexture()}}}const L=[],T=[];function ce(v){if(v.samples>0){if(U(v)===!1){const g=v.textures,D=v.width,O=v.height;let $=n.COLOR_BUFFER_BIT;const K=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(v),oe=g.length>1;if(oe)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<g.length;me++){if(v.resolveDepthBuffer&&(v.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ue=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,$,n.NEAREST),l===!0&&(L.length=0,T.length=0,L.push(n.COLOR_ATTACHMENT0+me),v.depthBuffer&&v.resolveDepthBuffer===!1&&(L.push(K),T.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ue=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const g=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function w(v){return Math.min(r.maxSamples,v.samples)}function U(v){const g=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(v){const g=o.render.frame;c.get(v)!==g&&(c.set(v,g),v.update())}function Y(v,g){const D=v.colorSpace,O=v.format,$=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==Tr&&D!==ci&&(je.getTransfer(D)===ot?(O!==pt||$!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function W(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(u.width=v.naturalWidth||v.width,u.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(u.width=v.displayWidth,u.height=v.displayHeight):(u.width=v.width,u.height=v.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=U}function RM(n,e){function t(i,r=ci){let s;const o=je.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.BYTE;if(i===ph)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===ql)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Et)return n.FLOAT;if(i===Er)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===_h)return n.RGB;if(i===pt)return n.RGBA;if(i===vh)return n.LUMINANCE;if(i===xh)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===$l)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===Qs||i===ea||i===ta||i===na)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zo||i===Jo||i===Qo||i===el)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===el)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tl||i===nl||i===il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tl||i===nl)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===il)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ol)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ml)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===vl||i===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ia)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Ml||i===Sl||i===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class CM extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(u,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),f=.02,_=.005;u.inputState.pinching&&d>f+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
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

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:DM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,f=null,_=null;const x=new LM,m=t.getContextAttributes();let p=null,R=null;const b=[],S=[],B=new He;let C=null;const I=new pn;I.viewport=new $e;const z=new pn;z.viewport=new $e;const E=[I,z],M=new CM;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=b[te];return ie===void 0&&(ie=new bo,b[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=b[te];return ie===void 0&&(ie=new bo,b[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=b[te];return ie===void 0&&(ie=new bo,b[te]=ie),ie.getHandSpace()};function G(te){const ie=S.indexOf(te.inputSource);if(ie===-1)return;const Se=b[ie];Se!==void 0&&(Se.update(te.inputSource,te.frame,u||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",re);for(let te=0;te<b.length;te++){const ie=S[te];ie!==null&&(S[te]=null,b[te].disconnect(ie))}P=null,N=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,R=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new Ke(f.framebufferWidth,f.framebufferHeight,{format:pt,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Se=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Mr:dr,Se=m.stencil?xr:ki);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ke(d.textureWidth,d.textureHeight,{format:pt,type:jn,depthTexture:new Nh(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(te){for(let ie=0;ie<te.removed.length;ie++){const Se=te.removed[ie],de=S.indexOf(Se);de>=0&&(S[de]=null,b[de].disconnect(Se))}for(let ie=0;ie<te.added.length;ie++){const Se=te.added[ie];let de=S.indexOf(Se);if(de===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=S.length){S.push(Se),de=Ae;break}else if(S[Ae]===null){S[Ae]=Se,de=Ae;break}if(de===-1)break}const De=b[de];De&&De.connect(Se)}}const q=new ee,se=new ee;function X(te,ie,Se){q.setFromMatrixPosition(ie.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const de=q.distanceTo(se),De=ie.projectionMatrix.elements,Ae=Se.projectionMatrix.elements,Ne=De[14]/(De[10]-1),lt=De[14]/(De[10]+1),A=(De[9]+1)/De[5],L=(De[9]-1)/De[5],T=(De[8]-1)/De[0],ce=(Ae[8]+1)/Ae[0],w=Ne*T,U=Ne*ce,F=de/(-T+ce),Y=F*-T;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Y),te.translateZ(F),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const W=Ne+F,v=lt+F,g=w-Y,D=U+(de-Y),O=A*lt/v*W,$=L*lt/v*W;te.projectionMatrix.makePerspective(g,D,O,$,W,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function pe(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ie=te.near,Se=te.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),M.near=z.near=I.near=ie,M.far=z.far=I.far=Se,(P!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),I.layers.mask=te.layers.mask|2,z.layers.mask=te.layers.mask|4,M.layers.mask=I.layers.mask|z.layers.mask;const de=te.parent,De=M.cameras;pe(M,de);for(let Ae=0;Ae<De.length;Ae++)pe(De[Ae],de);De.length===2?X(M,I,z):M.projectionMatrix.copy(I.projectionMatrix),ae(te,M,de)};function ae(te,ie,Se){Se===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=El*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let le=null;function ge(te,ie){if(c=ie.getViewerPose(u||o),_=ie,c!==null){const Se=c.views;f!==null&&(e.setRenderTargetFramebuffer(R,f.framebuffer),e.setRenderTarget(R));let de=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ae=0;Ae<Se.length;Ae++){const Ne=Se[Ae];let lt=null;if(f!==null)lt=f.getViewport(Ne);else{const L=h.getViewSubImage(d,Ne);lt=L.viewport,Ae===0&&(e.setRenderTargetTextures(R,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(R))}let A=E[Ae];A===void 0&&(A=new pn,A.layers.enable(Ae),A.viewport=new $e,E[Ae]=A),A.matrix.fromArray(Ne.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ne.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(lt.x,lt.y,lt.width,lt.height),Ae===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(A)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=h.getDepthInformation(Se[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,r.renderState)}}for(let Se=0;Se<b.length;Se++){const de=S[Se],De=b[Se];de!==null&&De!==void 0&&De.update(de,ie,u||o)}le&&le(te,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ee=new Fh;Ee.setAnimationLoop(ge),this.setAnimationLoop=function(te){le=te},this.dispose=function(){}}}const Pi=new Zn,FM=new yt;function NM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,b):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),b=R.envMap,S=R.envMapRotation;b&&(m.envMap.value=b,Pi.copy(S),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(Pi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const S=b.program;i.uniformBlockBinding(R,S)}function u(R,b){let S=r[R.id];S===void 0&&(_(R),S=c(R),r[R.id]=S,R.addEventListener("dispose",m));const B=b.program;i.updateUBOMapping(R,B);const C=e.render.frame;s[R.id]!==C&&(d(R),s[R.id]=C)}function c(R){const b=h();R.__bindingPointIndex=b;const S=n.createBuffer(),B=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,B,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const b=r[R.id],S=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,I=S.length;C<I;C++){const z=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,M=z.length;E<M;E++){const P=z[E];if(f(P,C,E,B)===!0){const N=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let re=0;re<G.length;re++){const q=G[re],se=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+Z,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Z),Z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(R,b,S,B){const C=R.value,I=b+"_"+S;if(B[I]===void 0)return typeof C=="number"||typeof C=="boolean"?B[I]=C:B[I]=C.clone(),!0;{const z=B[I];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return B[I]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(R){const b=R.uniforms;let S=0;const B=16;for(let I=0,z=b.length;I<z;I++){const E=Array.isArray(b[I])?b[I]:[b[I]];for(let M=0,P=E.length;M<P;M++){const N=E[M],G=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,re=G.length;Z<re;Z++){const q=G[Z],se=x(q),X=S%B,pe=X%se.boundary,ae=X+pe;S+=pe,ae!==0&&B-ae<se.storage&&(S+=B-ae),N.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=se.storage}}}const C=S%B;return C>0&&(S+=B-C),R.__size=S,R.__cache={},this}function x(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function m(R){const b=R.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class BM{constructor(e={}){const{canvas:t=bg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let B=!1,C=0,I=0,z=null,E=-1,M=null;const P=new $e,N=new $e;let G=null;const Z=new et(0);let re=0,q=t.width,se=t.height,X=1,pe=null,ae=null;const le=new $e(0,0,q,se),ge=new $e(0,0,q,se);let Ee=!1;const te=new Ih;let ie=!1,Se=!1;const de=new yt,De=new yt,Ae=new ee,Ne=new $e,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function L(){return z===null?X:1}let T=i;function ce(y,V){return t.getContext(y,V)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Te,!1),T===null){const V="webgl2";if(T=ce(V,y),T===null)throw ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let w,U,F,Y,W,v,g,D,O,$,K,fe,oe,me,Ue,he,ve,Ie,Oe,xe,Be,Ve,st,H;function ye(){w=new k0(T),w.init(),Ve=new RM(T,w),U=new O0(T,w,e,Ve),F=new bM(T,w),U.reverseDepthBuffer&&d&&F.buffers.depth.setReversed(!0),Y=new q0(T),W=new uM,v=new AM(T,w,F,W,U,Ve,Y),g=new z0(S),D=new V0(S),O=new Qg(T),st=new F0(T,O),$=new W0(T,O,Y,st),K=new K0(T,$,O,Y),Oe=new Y0(T,U,v),he=new B0(W),fe=new cM(S,g,D,w,U,st,he),oe=new NM(S,W),me=new hM,Ue=new vM(w),Ie=new I0(S,g,D,F,K,f,l),ve=new EM(S,K,U),H=new OM(T,Y,U,F),xe=new N0(T,w,Y),Be=new X0(T,w,Y),Y.programs=fe.programs,S.capabilities=U,S.extensions=w,S.properties=W,S.renderLists=me,S.shadowMap=ve,S.state=F,S.info=Y}ye();const ne=new IM(S,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=w.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=w.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(q,se,!1))},this.getSize=function(y){return y.set(q,se)},this.setSize=function(y,V,J=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,se=V,t.width=Math.floor(y*X),t.height=Math.floor(V*X),J===!0&&(t.style.width=y+"px",t.style.height=V+"px"),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(q*X,se*X).floor()},this.setDrawingBufferSize=function(y,V,J){q=y,se=V,X=J,t.width=Math.floor(y*J),t.height=Math.floor(V*J),this.setViewport(0,0,y,V)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(le)},this.setViewport=function(y,V,J,Q){y.isVector4?le.set(y.x,y.y,y.z,y.w):le.set(y,V,J,Q),F.viewport(P.copy(le).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,V,J,Q){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,V,J,Q),F.scissor(N.copy(ge).multiplyScalar(X).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(y){F.setScissorTest(Ee=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(y=!0,V=!0,J=!0){let Q=0;if(y){let k=!1;if(z!==null){const _e=z.texture.format;k=_e===Zl||_e===jl||_e===$l}if(k){const _e=z.texture.type,be=_e===jn||_e===ki||_e===is||_e===xr||_e===Yl||_e===Kl,Re=Ie.getClearColor(),Ce=Ie.getClearAlpha(),ze=Re.r,We=Re.g,Pe=Re.b;be?(_[0]=ze,_[1]=We,_[2]=Pe,_[3]=Ce,T.clearBufferuiv(T.COLOR,0,_)):(x[0]=ze,x[1]=We,x[2]=Pe,x[3]=Ce,T.clearBufferiv(T.COLOR,0,x))}else Q|=T.COLOR_BUFFER_BIT}V&&(Q|=T.DEPTH_BUFFER_BIT),J&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),me.dispose(),Ue.dispose(),W.dispose(),g.dispose(),D.dispose(),K.dispose(),st.dispose(),H.dispose(),fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",tc),ne.removeEventListener("sessionend",nc),Mi.stop()};function ue(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const y=Y.autoReset,V=ve.enabled,J=ve.autoUpdate,Q=ve.needsUpdate,k=ve.type;ye(),Y.autoReset=y,ve.enabled=V,ve.autoUpdate=J,ve.needsUpdate=Q,ve.type=k}function Te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const V=y.target;V.removeEventListener("dispose",ke),_t(V)}function _t(y){Dt(y),W.remove(y)}function Dt(y){const V=W.get(y).programs;V!==void 0&&(V.forEach(function(J){fe.releaseProgram(J)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,J,Q,k,_e){V===null&&(V=lt);const be=k.isMesh&&k.matrixWorld.determinant()<0,Re=Gh(y,V,J,Q,k);F.setMaterial(Q,be);let Ce=J.index,ze=1;if(Q.wireframe===!0){if(Ce=$.getWireframeAttribute(J),Ce===void 0)return;ze=2}const We=J.drawRange,Pe=J.attributes.position;let Ze=We.start*ze,ut=(We.start+We.count)*ze;_e!==null&&(Ze=Math.max(Ze,_e.start*ze),ut=Math.min(ut,(_e.start+_e.count)*ze)),Ce!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,Ce.count)):Pe!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,Pe.count));const ht=ut-Ze;if(ht<0||ht===1/0)return;st.setup(k,Q,Re,J,Ce);let Gt,tt=xe;if(Ce!==null&&(Gt=O.get(Ce),tt=Be,tt.setIndex(Gt)),k.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*L()),tt.setMode(T.LINES)):tt.setMode(T.TRIANGLES);else if(k.isLine){let Le=Q.linewidth;Le===void 0&&(Le=1),F.setLineWidth(Le*L()),k.isLineSegments?tt.setMode(T.LINES):k.isLineLoop?tt.setMode(T.LINE_LOOP):tt.setMode(T.LINE_STRIP)}else k.isPoints?tt.setMode(T.POINTS):k.isSprite&&tt.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,Un=k._multiDrawCounts,nt=k._multiDrawCount,un=Ce?O.get(Ce).bytesPerElement:1,Wi=W.get(Q).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)Wi.setValue(T,"_gl_DrawID",Yt),tt.render(Le[Yt]/un,Un[Yt])}else if(k.isInstancedMesh)tt.renderInstances(Ze,ht,k.count);else if(J.isInstancedBufferGeometry){const Le=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Un=Math.min(J.instanceCount,Le);tt.renderInstances(Ze,ht,Un)}else tt.render(Ze,ht)};function at(y,V,J){y.transparent===!0&&y.side===Xn&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,ps(y,V,J),y.side=gi,y.needsUpdate=!0,ps(y,V,J),y.side=Xn):ps(y,V,J)}this.compile=function(y,V,J=null){J===null&&(J=y),p=Ue.get(J),p.init(V),b.push(p),J.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),y!==J&&y.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Q=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _e=k.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const Re=_e[be];at(Re,J,k),Q.add(Re)}else at(_e,J,k),Q.add(_e)}),b.pop(),p=null,Q},this.compileAsync=function(y,V,J=null){const Q=this.compile(y,V,J);return new Promise(k=>{function _e(){if(Q.forEach(function(be){W.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){k(y);return}setTimeout(_e,10)}w.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let cn=null;function Dn(y){cn&&cn(y)}function tc(){Mi.stop()}function nc(){Mi.start()}const Mi=new Fh;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(y){cn=y,ne.setAnimationLoop(y),y===null?Mi.stop():Mi.start()},ne.addEventListener("sessionstart",tc),ne.addEventListener("sessionend",nc),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(V),V=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,V,z),p=Ue.get(y,b.length),p.init(V),b.push(p),De.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(De),Se=this.localClippingEnabled,ie=he.init(this.clippingPlanes,Se),m=me.get(y,R.length),m.init(),R.push(m),ne.enabled===!0&&ne.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&Na(_e,V,-1/0,S.sortObjects)}Na(y,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(pe,ae),A=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,A&&Ie.addToRenderList(m,y),this.info.render.frame++,ie===!0&&he.beginShadows();const J=p.state.shadowsArray;ve.render(J,y,V),ie===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,k=m.transmissive;if(p.setupLights(),V.isArrayCamera){const _e=V.cameras;if(k.length>0)for(let be=0,Re=_e.length;be<Re;be++){const Ce=_e[be];rc(Q,k,y,Ce)}A&&Ie.render(y);for(let be=0,Re=_e.length;be<Re;be++){const Ce=_e[be];ic(m,y,Ce,Ce.viewport)}}else k.length>0&&rc(Q,k,y,V),A&&Ie.render(y),ic(m,y,V);z!==null&&(v.updateMultisampleRenderTarget(z),v.updateRenderTargetMipmap(z)),y.isScene===!0&&y.onAfterRender(S,y,V),st.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ie===!0&&he.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Na(y,V,J,Q){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||te.intersectsSprite(y)){Q&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(De);const be=K.update(y),Re=y.material;Re.visible&&m.push(y,be,Re,J,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||te.intersectsObject(y))){const be=K.update(y),Re=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(De)),Array.isArray(Re)){const Ce=be.groups;for(let ze=0,We=Ce.length;ze<We;ze++){const Pe=Ce[ze],Ze=Re[Pe.materialIndex];Ze&&Ze.visible&&m.push(y,be,Ze,J,Ne.z,Pe)}}else Re.visible&&m.push(y,be,Re,J,Ne.z,null)}}const _e=y.children;for(let be=0,Re=_e.length;be<Re;be++)Na(_e[be],V,J,Q)}function ic(y,V,J,Q){const k=y.opaque,_e=y.transmissive,be=y.transparent;p.setupLightsView(J),ie===!0&&he.setGlobalState(S.clippingPlanes,J),Q&&F.viewport(P.copy(Q)),k.length>0&&ds(k,V,J),_e.length>0&&ds(_e,V,J),be.length>0&&ds(be,V,J),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function rc(y,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ke(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Er:jn,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Q.id],be=Q.viewport||P;_e.setSize(be.z,be.w);const Re=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(Z),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),A&&Ie.render(J);const Ce=S.toneMapping;S.toneMapping=di;const ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ie===!0&&he.setGlobalState(S.clippingPlanes,Q),ds(y,J,Q),v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e),w.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pe=0,Ze=V.length;Pe<Ze;Pe++){const ut=V[Pe],ht=ut.object,Gt=ut.geometry,tt=ut.material,Le=ut.group;if(tt.side===Xn&&ht.layers.test(Q.layers)){const Un=tt.side;tt.side=qt,tt.needsUpdate=!0,sc(ht,J,Q,Gt,tt,Le),tt.side=Un,tt.needsUpdate=!0,We=!0}}We===!0&&(v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e))}S.setRenderTarget(Re),S.setClearColor(Z,re),ze!==void 0&&(Q.viewport=ze),S.toneMapping=Ce}function ds(y,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let k=0,_e=y.length;k<_e;k++){const be=y[k],Re=be.object,Ce=be.geometry,ze=Q===null?be.material:Q,We=be.group;Re.layers.test(J.layers)&&sc(Re,V,J,Ce,ze,We)}}function sc(y,V,J,Q,k,_e){y.onBeforeRender(S,V,J,Q,k,_e),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(S,V,J,Q,y,_e),k.transparent===!0&&k.side===Xn&&k.forceSinglePass===!1?(k.side=qt,k.needsUpdate=!0,S.renderBufferDirect(J,V,Q,k,y,_e),k.side=gi,k.needsUpdate=!0,S.renderBufferDirect(J,V,Q,k,y,_e),k.side=Xn):S.renderBufferDirect(J,V,Q,k,y,_e),y.onAfterRender(S,V,J,Q,k,_e)}function ps(y,V,J){V.isScene!==!0&&(V=lt);const Q=W.get(y),k=p.state.lights,_e=p.state.shadowsArray,be=k.state.version,Re=fe.getParameters(y,k.state,_e,V,J),Ce=fe.getProgramCacheKey(Re);let ze=Q.programs;Q.environment=y.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(y.isMeshStandardMaterial?D:g).get(y.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",ke),ze=new Map,Q.programs=ze);let We=ze.get(Ce);if(We!==void 0){if(Q.currentProgram===We&&Q.lightsStateVersion===be)return oc(y,Re),We}else Re.uniforms=fe.getUniforms(y),y.onBeforeCompile(Re,S),We=fe.acquireProgram(Re,Ce),ze.set(Ce,We),Q.uniforms=Re.uniforms;const Pe=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=he.uniform),oc(y,Re),Q.needsLights=kh(y),Q.lightsStateVersion=be,Q.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),Q.currentProgram=We,Q.uniformsList=null,We}function ac(y){if(y.uniformsList===null){const V=y.currentProgram.getUniforms();y.uniformsList=ra.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function oc(y,V){const J=W.get(y);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Gh(y,V,J,Q,k){V.isScene!==!0&&(V=lt),v.resetTextureUnits();const _e=V.fog,be=Q.isMeshStandardMaterial?V.environment:null,Re=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Tr,Ce=(Q.isMeshStandardMaterial?D:g).get(Q.envMap||be),ze=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Pe=!!J.morphAttributes.position,Ze=!!J.morphAttributes.normal,ut=!!J.morphAttributes.color;let ht=di;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ht=S.toneMapping);const Gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tt=Gt!==void 0?Gt.length:0,Le=W.get(Q),Un=p.state.lights;if(ie===!0&&(Se===!0||y!==M)){const Jt=y===M&&Q.id===E;he.setState(Q,y,Jt)}let nt=!1;Q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Un.state.version||Le.outputColorSpace!==Re||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==Ce||Q.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==We||Le.morphTargets!==Pe||Le.morphNormals!==Ze||Le.morphColors!==ut||Le.toneMapping!==ht||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=Q.version);let un=Le.currentProgram;nt===!0&&(un=ps(Q,V,k));let Wi=!1,Yt=!1,Rr=!1;const dt=un.getUniforms(),xn=Le.uniforms;if(F.useProgram(un.program)&&(Wi=!0,Yt=!0,Rr=!0),Q.id!==E&&(E=Q.id,Yt=!0),Wi||M!==y){F.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),Ag(de),Rg(de),dt.setValue(T,"projectionMatrix",de)):dt.setValue(T,"projectionMatrix",y.projectionMatrix),dt.setValue(T,"viewMatrix",y.matrixWorldInverse);const Qn=dt.map.cameraPosition;Qn!==void 0&&Qn.setValue(T,Ae.setFromMatrixPosition(y.matrixWorld)),U.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&dt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Yt=!0,Rr=!0)}if(k.isSkinnedMesh){dt.setOptional(T,k,"bindMatrix"),dt.setOptional(T,k,"bindMatrixInverse");const Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),dt.setValue(T,"boneTexture",Jt.boneTexture,v))}k.isBatchedMesh&&(dt.setOptional(T,k,"batchingTexture"),dt.setValue(T,"batchingTexture",k._matricesTexture,v),dt.setOptional(T,k,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",k._indirectTexture,v),dt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",k._colorsTexture,v));const Cr=J.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&Oe.update(k,J,un),(Yt||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,dt.setValue(T,"receiveShadow",k.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(xn.envMap.value=Ce,xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(xn.envMapIntensity.value=V.environmentIntensity),Yt&&(dt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&Vh(xn,Rr),_e&&Q.fog===!0&&oe.refreshFogUniforms(xn,_e),oe.refreshMaterialUniforms(xn,Q,X,se,p.state.transmissionRenderTarget[y.id]),ra.upload(T,ac(Le),xn,v)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ra.upload(T,ac(Le),xn,v),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&dt.setValue(T,"center",k.center),dt.setValue(T,"modelViewMatrix",k.modelViewMatrix),dt.setValue(T,"normalMatrix",k.normalMatrix),dt.setValue(T,"modelMatrix",k.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Jt=Q.uniformsGroups;for(let Qn=0,ei=Jt.length;Qn<ei;Qn++){const lc=Jt[Qn];H.update(lc,un),H.bind(lc,un)}}return un}function Vh(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function kh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,V,J){W.get(y.texture).__webglTexture=V,W.get(y.depthTexture).__webglTexture=J;const Q=W.get(y);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,V){const J=W.get(y);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,J=0){z=y,C=V,I=J;let Q=!0,k=null,_e=!1,be=!1;if(y){const Ce=W.get(y);if(Ce.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)v.setupRenderTarget(y);else if(Ce.__hasExternalTextures)v.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&W.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(y)}}const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const We=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(We[V])?k=We[V][J]:k=We[V],_e=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?k=W.get(y).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[J]:k=We,P.copy(y.viewport),N.copy(y.scissor),G=y.scissorTest}else P.copy(le).multiplyScalar(X).floor(),N.copy(ge).multiplyScalar(X).floor(),G=Ee;if(F.bindFramebuffer(T.FRAMEBUFFER,k)&&Q&&F.drawBuffers(y,k),F.viewport(P),F.scissor(N),F.setScissorTest(G),_e){const Ce=W.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,J)}else if(be){const Ce=W.get(y.texture),ze=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ce.__webglTexture,J||0,ze)}E=-1},this.readRenderTargetPixels=function(y,V,J,Q,k,_e,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){F.bindFramebuffer(T.FRAMEBUFFER,Re);try{const Ce=y.texture,ze=Ce.format,We=Ce.type;if(!U.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-Q&&J>=0&&J<=y.height-k&&T.readPixels(V,J,Q,k,Ve.convert(ze),Ve.convert(We),_e)}finally{const Ce=z!==null?W.get(z).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,V,J,Q,k,_e,be){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){const Ce=y.texture,ze=Ce.format,We=Ce.type;if(!U.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=y.width-Q&&J>=0&&J<=y.height-k){F.bindFramebuffer(T.FRAMEBUFFER,Re);const Pe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Pe),T.bufferData(T.PIXEL_PACK_BUFFER,_e.byteLength,T.STREAM_READ),T.readPixels(V,J,Q,k,Ve.convert(ze),Ve.convert(We),0);const Ze=z!==null?W.get(z).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,Ze);const ut=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await wg(T,ut,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Pe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_e),T.deleteBuffer(Pe),T.deleteSync(ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,V=null,J=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1]);const Q=Math.pow(2,-J),k=Math.floor(y.image.width*Q),_e=Math.floor(y.image.height*Q),be=V!==null?V.x:0,Re=V!==null?V.y:0;v.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,be,Re,k,_e),F.unbindTexture()},this.copyTextureToTexture=function(y,V,J=null,Q=null,k=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,y=arguments[1],V=arguments[2],k=arguments[3]||0,J=null);let _e,be,Re,Ce,ze,We,Pe,Ze,ut;const ht=y.isCompressedTexture?y.mipmaps[k]:y.image;J!==null?(_e=J.max.x-J.min.x,be=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,Ce=J.min.x,ze=J.min.y,We=J.isBox3?J.min.z:0):(_e=ht.width,be=ht.height,Re=ht.depth||1,Ce=0,ze=0,We=0),Q!==null?(Pe=Q.x,Ze=Q.y,ut=Q.z):(Pe=0,Ze=0,ut=0);const Gt=Ve.convert(V.format),tt=Ve.convert(V.type);let Le;V.isData3DTexture?(v.setTexture3D(V,0),Le=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(v.setTexture2DArray(V,0),Le=T.TEXTURE_2D_ARRAY):(v.setTexture2D(V,0),Le=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const Un=T.getParameter(T.UNPACK_ROW_LENGTH),nt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),un=T.getParameter(T.UNPACK_SKIP_PIXELS),Wi=T.getParameter(T.UNPACK_SKIP_ROWS),Yt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ht.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ht.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ce),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);const Rr=y.isDataArrayTexture||y.isData3DTexture,dt=V.isDataArrayTexture||V.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const xn=W.get(y),Cr=W.get(V),Jt=W.get(xn.__renderTarget),Qn=W.get(Cr.__renderTarget);F.bindFramebuffer(T.READ_FRAMEBUFFER,Jt.__webglFramebuffer),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ei=0;ei<Re;ei++)Rr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,W.get(y).__webglTexture,k,We+ei),y.isDepthTexture?(dt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,W.get(V).__webglTexture,k,ut+ei),T.blitFramebuffer(Ce,ze,_e,be,Pe,Ze,_e,be,T.DEPTH_BUFFER_BIT,T.NEAREST)):dt?T.copyTexSubImage3D(Le,k,Pe,Ze,ut+ei,Ce,ze,_e,be):T.copyTexSubImage2D(Le,k,Pe,Ze,ut+ei,Ce,ze,_e,be);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Le,k,Pe,Ze,ut,_e,be,Re,Gt,tt,ht.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Le,k,Pe,Ze,ut,_e,be,Re,Gt,ht.data):T.texSubImage3D(Le,k,Pe,Ze,ut,_e,be,Re,Gt,tt,ht):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Pe,Ze,_e,be,Gt,tt,ht.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Pe,Ze,ht.width,ht.height,Gt,ht.data):T.texSubImage2D(T.TEXTURE_2D,k,Pe,Ze,_e,be,Gt,tt,ht);T.pixelStorei(T.UNPACK_ROW_LENGTH,Un),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,un),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Yt),k===0&&V.generateMipmaps&&T.generateMipmap(Le),F.unbindTexture()},this.copyTextureToTexture3D=function(y,V,J=null,Q=null,k=0){return y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,y=arguments[2],V=arguments[3],k=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,V,J,Q,k)},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&v.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),F.unbindTexture()},this.resetState=function(){C=0,I=0,z=null,F.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class yr extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zM extends Rt{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Ye,c=Ye,h,d){super(null,o,a,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r extends Rt{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);const HM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,GM=`
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
`;class VM{constructor(e=512,t=e){j(this,"width");j(this,"height");j(this,"size");j(this,"passesH");j(this,"passesV");j(this,"totalPasses");j(this,"quadScene");j(this,"quadCamera");j(this,"fftMaterial");j(this,"quadMesh");j(this,"rtPing");j(this,"rtPong");if((e&e-1)!==0||(t&t-1)!==0)throw new Error(`StockhamFFT2D: width and height must be powers of two (got ${e}x${t})`);this.width=e,this.height=t,this.size=Math.max(e,t),this.passesH=Math.round(Math.log2(e)),this.passesV=Math.round(Math.log2(t)),this.totalPasses=this.passesH+this.passesV;const i={minFilter:Ye,magFilter:Ye,format:pt,type:Et,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(e,t,i),this.rtPong=new Ke(e,t,i),this.quadScene=new yr,this.quadCamera=new wr(-1,1,1,-1,0,1),this.fftMaterial=new Mt({vertexShader:HM,fragmentShader:GM,uniforms:{u_texture:{value:null},u_texelSize:{value:new He(1/e,1/t)},u_subtransformSize:{value:2},u_normalization:{value:1},u_isHorizontal:{value:!0},u_isForward:{value:!0}},depthTest:!1,depthWrite:!1}),this.quadMesh=new Xt(new _i(2,2),this.fftMaterial),this.quadScene.add(this.quadMesh)}execute(e,t,i){let r=this.rtPing,s=this.rtPong;const o=this.fftMaterial.uniforms,a=1/Math.sqrt(this.width),l=1/Math.sqrt(this.height);for(let u=0;u<this.totalPasses;u++){const c=u<this.passesH,h=c?u:u-this.passesH,d=Math.pow(2,h+1);o.u_texture.value=u===0?t:r.texture,o.u_isHorizontal.value=c,o.u_isForward.value=i,o.u_subtransformSize.value=d,o.u_normalization.value=u===0?a:u===this.passesH?l:1,e.setRenderTarget(s),e.render(this.quadScene,this.quadCamera);const f=r;r=s,s=f}return e.setRenderTarget(null),r}benchmark(e,t=100){this.execute(e,this.rtPing.texture,!0),e.setRenderTarget(null);const i=performance.now();for(let f=0;f<t;f++)this.execute(e,this.rtPing.texture,f%2===0);e.getContext().finish();const o=performance.now()-i,a=o/t,l=1e3/a,u=this.size*this.size,c=u*t/(o*1e3),d=20*u*Math.log2(this.size)*t/(o*1e6);return{iterations:t,totalMs:o,avgTimeMs:a,fpsEquivalent:l,throughputMPixelsPerSec:c,gflops:d}}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.fftMaterial.dispose(),this.quadMesh.geometry.dispose()}}class Fa{constructor(){j(this,"camera");j(this,"scene");j(this,"mesh");this.camera=new wr(-1,1,1,-1,0,1),this.camera.matrixAutoUpdate=!1,this.camera.updateMatrixWorld(!0);const e=new xi,t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),i=new Float32Array([0,0,2,0,0,2]);e.setAttribute("position",new an(t,3)),e.setAttribute("uv",new an(i,2)),this.mesh=new Xt(e),this.mesh.matrixAutoUpdate=!1,this.mesh.frustumCulled=!1,this.scene=new yr,this.scene.matrixWorldAutoUpdate=!1,this.scene.add(this.mesh)}render(e,t,i){this.mesh.material=t,e.setRenderTarget(i),e.render(this.scene,this.camera)}dispose(){this.mesh.geometry.dispose()}}const kM=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,WM=`
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
`;class Wu{constructor(e=512,t=e,i,r=Et){j(this,"width");j(this,"height");j(this,"passesH");j(this,"passesV");j(this,"totalPasses");j(this,"runner");j(this,"fftMaterial");j(this,"rtPing");j(this,"rtPong");if((e&e-1)!==0||(t&t-1)!==0)throw new Error(`StockhamFFT2D_RGB: width (${e}) and height (${t}) must be powers of two`);this.width=e,this.height=t,this.passesH=Math.round(Math.log2(e)),this.passesV=Math.round(Math.log2(t)),this.totalPasses=this.passesH+this.passesV;const s={minFilter:Ye,magFilter:Ye,format:pt,type:Et,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(e,t,s),this.rtPong=new Ke(e,t,s),this.runner=i??new Fa,this.fftMaterial=new Mt({glslVersion:zi,vertexShader:kM,fragmentShader:WM,uniforms:{u_texRG:{value:null},u_texB:{value:null},u_texelSize:{value:new He(1/e,1/t)},u_subtransformSize:{value:2},u_normalization:{value:1},u_isHorizontal:{value:!0},u_isForward:{value:!0}},depthTest:!1,depthWrite:!1})}execute(e,t,i,r){let s=this.rtPing,o=this.rtPong;const a=this.fftMaterial.uniforms,l=1/Math.sqrt(this.width),u=1/Math.sqrt(this.height);for(let c=0;c<this.totalPasses;c++){const h=c<this.passesH,d=h?c:c-this.passesH,f=Math.pow(2,d+1);a.u_texRG.value=c===0?t:s.textures[0],a.u_texB.value=c===0?i:s.textures[1],a.u_isHorizontal.value=h,a.u_isForward.value=r,a.u_subtransformSize.value=f,a.u_normalization.value=c===0?l:c===this.passesH?u:1,this.runner.render(e,this.fftMaterial,o);const _=s;s=o,o=_}return e.setRenderTarget(null),s}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.fftMaterial.dispose(),this.runner.dispose()}}const Ws=8,Xu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,XM=`
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
uniform vec4 u_islandState[8];     // (strength [0..1], emerge [0..1], shapePower, featherWidth)

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

  // 7. Independent Per-Surface Constant-Override Floating Islands (Generalized Super-Ellipse + Feather):
  for (int i = 0; i < 8; i++) {
    vec4 ib = u_islandBounds[i];
    vec4 st = u_islandState[i];
    if (st.x <= 0.002 || ib.z <= 0.001 || ib.w <= 0.001) continue;
    vec2 q = abs(uv - ib.xy) / ib.zw;
    if (q.x > 1.35 || q.y > 1.35) continue;
    float pExp = max(1.5, st.z);
    float fWidth = max(0.04, st.w);
    float superR = pow(pow(q.x, pExp) + pow(q.y, pExp), 1.0 / pExp);
    float smoothEmerge = st.y * st.y * (3.0 - 2.0 * st.y);
    float maxOuter = 1.0 + fWidth * 0.64;
    float outerR = mix(0.20, maxOuter, smoothEmerge);
    float innerR = max(0.0, outerR - fWidth);
    float islandMask = 1.0 - smoothstep(innerR, outerR, superR);
    float plateauHeight = 0.30 * (st.x * st.x * (3.0 - 2.0 * st.x));
    E_next = mix(E_next, plateauHeight, islandMask);
  }

  // Time sliding window: R = E^(n+1) (new current), G = E^n (new previous)
  gl_FragColor = vec4(E_next, E_curr, 0.0, 1.0);
}
`,qM=`
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
`;class YM{constructor(e={}){j(this,"width");j(this,"height");j(this,"dt");j(this,"cfl");j(this,"pmlCells");j(this,"pmlSigmaMax");j(this,"rtE_Ping");j(this,"rtE_Pong");j(this,"rtOutput");j(this,"runner");j(this,"ownsRunner",!1);j(this,"matWave");j(this,"matOut");j(this,"simTime",0);j(this,"smoothedSpeed",0);j(this,"floatType",Et);this.width=e.width??512,this.floatType=e.floatType??Et,this.height=e.height??512,this.pmlCells=e.pmlCells??32,this.pmlSigmaMax=e.pmlSigmaMax??16,this.cfl=Math.min(e.cfl??.5,.7071),this.dt=this.cfl/Math.SQRT2,e.runner?(this.runner=e.runner,this.ownsRunner=!1):(this.runner=new Fa,this.ownsRunner=!0);const t={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtE_Ping=new Ke(this.width,this.height,t),this.rtE_Pong=new Ke(this.width,this.height,t),this.rtOutput=new Ke(this.width,this.height,t);const i=new He(1/this.width,1/this.height),r=new He(this.pmlCells/this.width,this.pmlCells/this.height);this.matWave=new Mt({vertexShader:Xu,fragmentShader:XM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_sourceTex:{value:null},u_coupledWaveTex:{value:null},u_hasMaterialTex:{value:!1},u_hasSourceTex:{value:!1},u_hasCoupledWave:{value:!1},u_texelSize:{value:i},u_dt:{value:this.dt},u_cfl:{value:this.cfl},u_time:{value:0},u_pmlWidth:{value:r},u_pmlSigmaMax:{value:this.pmlSigmaMax},u_pmlSides:{value:new $e(1,1,1,1)},u_sourceType:{value:0},u_sourceFreq:{value:20},u_sourceAmp:{value:.25},u_islandBounds:{value:Array.from({length:Ws},()=>new $e(.5,.5,0,0))},u_islandState:{value:Array.from({length:Ws},()=>new $e(0,0,2.8,.28))}},depthTest:!1,depthWrite:!1}),this.matOut=new Mt({vertexShader:Xu,fragmentShader:qM,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_hasMaterialTex:{value:!1},u_exposure:{value:24},u_dt:{value:this.dt}},depthTest:!1,depthWrite:!1})}reset(e){e.setRenderTarget(this.rtE_Ping),e.clearColor(),e.setRenderTarget(this.rtE_Pong),e.clearColor(),e.setRenderTarget(null)}resize(e,t,i){if(this.width===e&&this.height===t)return;const r=this.rtE_Ping,s=this.rtE_Pong;this.width=e,this.height=t;const o={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},a=new Ke(this.width,this.height,o),l=new Ke(this.width,this.height,o);this.rtOutput.dispose(),this.rtOutput=new Ke(this.width,this.height,o);const u=new Ql({map:r.texture,depthTest:!1,depthWrite:!1}),c=new Xt(new _i(2,2),u),h=new wr(-1,1,1,-1,0,1),d=new yr;d.add(c),i.setRenderTarget(a),i.render(d,h),u.map=s.texture,i.setRenderTarget(l),i.render(d,h),i.setRenderTarget(null),u.dispose(),c.geometry.dispose(),r.dispose(),s.dispose(),this.rtE_Ping=a,this.rtE_Pong=l;const f=new He(1/this.width,1/this.height),_=new He(this.pmlCells/this.width,this.pmlCells/this.height);this.matWave.uniforms.u_texelSize.value.copy(f),this.matWave.uniforms.u_pmlWidth.value.copy(_)}step(e,t){const i=t.subSteps??4;this.matWave.uniforms.u_hasMaterialTex.value=!!t.materialTex,this.matWave.uniforms.u_materialTex.value=t.materialTex??null,this.matWave.uniforms.u_hasSourceTex.value=!!t.sourceTex,this.matWave.uniforms.u_sourceTex.value=t.sourceTex??null,this.matWave.uniforms.u_hasCoupledWave.value=!!t.coupledWaveTex,this.matWave.uniforms.u_coupledWaveTex.value=t.coupledWaveTex??null;let r=0;t.sourceType==="continuous"?r=1:t.sourceType==="pulse"?r=2:t.sourceType==="coupled_beam"&&(r=3),this.matWave.uniforms.u_sourceType.value=r,this.matWave.uniforms.u_sourceFreq.value=t.sourceFreq??20,this.matWave.uniforms.u_sourceAmp.value=t.sourceAmp??.25;let s=this.rtE_Ping,o=this.rtE_Pong;for(let a=0;a<i;a++){this.simTime+=this.dt*.14,this.matWave.uniforms.u_time.value=this.simTime,this.matWave.uniforms.u_fieldTex.value=s.texture,this.runner.render(e,this.matWave,o);const l=s;s=o,o=l}return this.rtE_Ping=s,this.rtE_Pong=o,e.setRenderTarget(null),s}renderOutput(e,t=null,i=24){return this.matOut.uniforms.u_fieldTex.value=this.rtE_Ping.texture,this.matOut.uniforms.u_hasMaterialTex.value=!!t,this.matOut.uniforms.u_materialTex.value=t,this.matOut.uniforms.u_exposure.value=i,this.runner.render(e,this.matOut,this.rtOutput),this.rtOutput}setPmlSides(e,t,i,r){this.matWave.uniforms.u_pmlSides.value.set(e,t,i,r)}setCardIslands(e){const t=this.matWave.uniforms.u_islandBounds.value,i=this.matWave.uniforms.u_islandState.value,r=Math.min(Ws,e.length);for(let s=0;s<r;s++){const o=e[s];t[s].set(o.uCenter,o.vCenter,o.rxUv,o.ryUv),i[s].set(o.strength,o.emerge,o.shapePower??2.8,o.featherWidth??.28)}for(let s=r;s<Ws;s++)t[s].set(.5,.5,0,0),i[s].set(0,0,2.8,.28)}setCardIsland(e,t,i,r,s,o,a=0){s<=.002&&o<=.002?this.setCardIslands([]):this.setCardIslands([{uCenter:e,vCenter:t,rxUv:i,ryUv:r,strength:s,emerge:o,seed:a}])}getEFieldRenderTarget(){return this.rtE_Ping}dispose(){this.rtE_Ping.dispose(),this.rtE_Pong.dispose(),this.rtOutput.dispose(),this.matWave.dispose(),this.matOut.dispose(),this.ownsRunner&&this.runner.dispose()}}const KM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,$M=`
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
`;class jM{constructor(e=512,t=512,i,r=Et){j(this,"width");j(this,"height");j(this,"rtPing");j(this,"rtPong");j(this,"matSplat");j(this,"runner");j(this,"ownsRunner",!1);j(this,"readPing",!0);j(this,"floatType",Et);j(this,"segmentsBuffer");j(this,"paramsBuffer");this.width=e,this.height=t,this.floatType=r,i?(this.runner=i,this.ownsRunner=!1):(this.runner=new Fa,this.ownsRunner=!0);const s={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.width,this.height,s),this.rtPong=new Ke(this.width,this.height,s),this.segmentsBuffer=new Float32Array(64),this.paramsBuffer=new Float32Array(32),this.matSplat=new Mt({vertexShader:KM,fragmentShader:$M,uniforms:{u_prevSource:{value:null},u_decay:{value:.8},u_aspect:{value:this.width/Math.max(1,this.height)},u_numStrokes:{value:0},u_segments:{value:this.segmentsBuffer},u_params:{value:this.paramsBuffer},u_wavePulseStrength:{value:0},u_wavePulseY:{value:0},u_wavePulseDir:{value:1}},depthTest:!1,depthWrite:!1})}resize(e,t,i){if(this.width===e&&this.height===t)return;this.width=e,this.height=t,this.rtPing.dispose(),this.rtPong.dispose();const r={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.width,this.height,r),this.rtPong=new Ke(this.width,this.height,r),this.matSplat.uniforms.u_aspect.value=this.width/Math.max(1,this.height),this.clear(i)}clear(e){e.setRenderTarget(this.rtPing),e.clearColor(),e.setRenderTarget(this.rtPong),e.clearColor(),e.setRenderTarget(null)}update(e,t,i=.8,r){const s=this.readPing?this.rtPing:this.rtPong,o=this.readPing?this.rtPong:this.rtPing,a=Math.min(t.length,16);this.matSplat.uniforms.u_prevSource.value=s.texture,this.matSplat.uniforms.u_decay.value=i,this.matSplat.uniforms.u_numStrokes.value=a,r&&Math.abs(r.strength)>.001?(this.matSplat.uniforms.u_wavePulseStrength.value=r.strength,this.matSplat.uniforms.u_wavePulseY.value=r.y,this.matSplat.uniforms.u_wavePulseDir.value=r.dir):this.matSplat.uniforms.u_wavePulseStrength.value=0;for(let l=0;l<a;l++){const u=t[l],c=l*4;this.segmentsBuffer[c+0]=u.x0,this.segmentsBuffer[c+1]=u.y0,this.segmentsBuffer[c+2]=u.x1,this.segmentsBuffer[c+3]=u.y1;const h=l*2;this.paramsBuffer[h+0]=u.radius,this.paramsBuffer[h+1]=u.strength}return this.runner.render(e,this.matSplat,o),e.setRenderTarget(null),this.readPing=!this.readPing,o.texture}getTexture(){return(this.readPing?this.rtPing:this.rtPong).texture}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.matSplat.dispose(),this.ownsRunner&&this.runner.dispose()}}const cr=class cr{constructor(){j(this,"fishes",[]);j(this,"pellets",[]);j(this,"aspect",1);j(this,"viewportH",900);j(this,"packedHeads",new Float32Array(12));j(this,"packedColors",new Float32Array(12));j(this,"packedSpines",new Float32Array(72));j(this,"packedPellets",new Float32Array(cr.MAX_PELLETS*4));this.initFishes()}initFishes(){const e={x:.56,y:.62,vx:0,vy:0,angle:2.3,targetAngle:2.3,speed:.044,baseSpeed:.044,size:.056,color:new et(.001,.001,.002),finColor:new $e(.005,.005,.01,.9),phase:0,wiggleSpeed:5.8,isLeader:!0,swimTimer:1.8,isSwimming:!0,personality:{feedSpeedMult:1.75,burstMin:1.5,burstSpan:1.4,restMin:.8,restSpan:1.1,wanderFreq:.62,wanderAmp:.42,turnBias:-.06,postMealTurn:-.75},spine:Array.from({length:6},(r,s)=>({x:.56+s*.008,y:.62-s*.008}))},t={x:.34,y:.54,vx:0,vy:0,angle:.45,targetAngle:.45,speed:.036,baseSpeed:.036,size:.051,color:new et(.36,.37,.385),finColor:new $e(.4,.41,.425,.85),phase:1.8,wiggleSpeed:5,isLeader:!1,swimTimer:1.2,isSwimming:!1,personality:{feedSpeedMult:1.48,burstMin:1.1,burstSpan:1.1,restMin:1.3,restSpan:1.5,wanderFreq:.43,wanderAmp:.48,turnBias:.14,postMealTurn:.95},spine:Array.from({length:6},(r,s)=>({x:.34-s*.008,y:.54-s*.005}))},i={x:.48,y:.35,vx:0,vy:0,angle:-2.1,targetAngle:-2.1,speed:.03,baseSpeed:.03,size:.046,color:new et(.34,.35,.365),finColor:new $e(.38,.39,.405,.85),phase:3.5,wiggleSpeed:4.3,isLeader:!1,swimTimer:2.4,isSwimming:!0,personality:{feedSpeedMult:1.25,burstMin:.9,burstSpan:.9,restMin:1.9,restSpan:2,wanderFreq:.29,wanderAmp:.32,turnBias:-.11,postMealTurn:-1.35},spine:Array.from({length:6},(r,s)=>({x:.48+s*.006,y:.35+s*.008}))};this.fishes=[e,t,i]}setAspect(e){this.aspect=e}setViewportSize(e,t){this.viewportH=Math.max(1,t)}getFishScale(){return Math.min(1.45,Math.max(.85,Math.sqrt(900/Math.max(320,this.viewportH))))}applyScrollShift(e,t){if(!(Math.abs(e)<1e-6&&Math.abs(t)<1e-6)){for(let i=this.pellets.length-1;i>=0;i--){const r=this.pellets[i];r.x+=e,r.y+=t,(r.y<-.55||r.y>1.55||r.x<-.45||r.x>1.45)&&this.pellets.splice(i,1)}for(let i=0;i<this.fishes.length;i++){const r=this.fishes[i];let s=e,o=t;const a=r.x+s,l=r.y+o,u=.1+i*.035;l>1+u?o-=l-(1+u):l<-u&&(o-=l- -u),a>1.18?s-=a-1.18:a<-.18&&(s-=a- -.18),r.x+=s,r.y+=o;for(let c=0;c<r.spine.length;c++)r.spine[c].x+=s,r.spine[c].y+=o}}}dropFood(e,t){const i=Math.min(Math.max(e,.04),.96),r=Math.min(Math.max(t,.04),.96);this.pellets.length>=cr.MAX_PELLETS&&this.pellets.shift(),this.pellets.push({x:i,y:r,vx:(Math.random()-.5)*.008,vy:(Math.random()-.5)*.008,size:.0032+Math.random()*8e-4,age:0,maxAge:24})}update(e,t,i,r,s,o,a){const l=Math.min(e,.05),u=this.getFishScale();for(let d=this.pellets.length-1;d>=0;d--){const f=this.pellets[d];f.age+=l,f.x+=f.vx*l,f.y+=f.vy*l,f.vx*=Math.exp(-l*2.5),f.vy*=Math.exp(-l*2.5),(f.age>=f.maxAge||f.y<-.55||f.y>1.55)&&this.pellets.splice(d,1)}const c=new Array(this.fishes.length).fill(null),h=this.pellets.filter(d=>d.age>=.08&&d.x>=-.05&&d.x<=1.05&&d.y>=-.05&&d.y<=1.05);if(h.length>0){const d=[];for(let x=0;x<this.fishes.length;x++){const m=this.fishes[x];for(const p of h){const R=(p.x-m.x)*this.aspect,b=p.y-m.y,S=Math.sqrt(R*R+b*b);d.push({fIdx:x,pellet:p,score:S/Math.max(.5,m.personality.feedSpeedMult)})}}d.sort((x,m)=>x.score-m.score);const f=new Set,_=new Set;for(const x of d)_.has(x.fIdx)||f.has(x.pellet)||(c[x.fIdx]=x.pellet,_.add(x.fIdx),f.add(x.pellet))}for(let d=0;d<this.fishes.length;d++){const f=this.fishes[d],_=f.personality,x=f.x,m=f.y,p=f.spine[f.spine.length-1],R=p.x,b=p.y;if(f.swimTimer-=l,f.swimTimer<=0)if(f.isSwimming=!f.isSwimming,f.shelterPadIdx=null,f.isSwimming){if(f.swimTimer=_.burstMin+Math.random()*_.burstSpan,f.targetAngle+=_.turnBias*2.2+(Math.random()-.5)*1.35,a&&a.length>0&&Math.random()<.38){let ae=-1,le=.62;for(let ge=0;ge<a.length;ge++){const Ee=a[ge];if(Ee.r<=.01||Ee.y<.14||Ee.y>.86||Ee.x<.04||Ee.x>.96||this.fishes.some((De,Ae)=>Ae!==d&&De.shelterPadIdx===ge))continue;const ie=(Ee.x-f.x)*this.aspect,Se=Ee.y-f.y,de=Math.sqrt(ie*ie+Se*Se);de>Ee.r*.75&&de<le&&(le=de,ae=ge)}ae>=0&&(f.shelterPadIdx=ae,f.swimTimer=Math.max(f.swimTimer,2.4))}}else f.swimTimer=_.restMin+Math.random()*_.restSpan;let S=!1,B=!1;const C=c[d];if(C){f.shelterPadIdx=null;const ae=(C.x-f.x)*this.aspect,le=C.y-f.y,ge=Math.sqrt(ae*ae+le*le),Ee=f.size*u,te=Math.max(.022*u,Ee*.16);if(ge<=te){o&&C.x>=-.05&&C.x<=1.05&&C.y>=-.05&&C.y<=1.05&&o(C.x,C.y,C.x,C.y,Ee*.18,.34);const ie=this.pellets.indexOf(C);ie>=0&&this.pellets.splice(ie,1),f.targetAngle+=_.postMealTurn+(Math.random()-.5)*.7,f.speed=f.baseSpeed*(.7+d*.18),f.swimTimer=.65+d*.45+Math.random()*.8}else{f.targetAngle=Math.atan2(le,ae);const ie=f.baseSpeed*_.feedSpeedMult;f.speed+=(ie-f.speed)*Math.min(1,l*4.5),f.isSwimming=!0,f.swimTimer=Math.max(f.swimTimer,.8+d*.35),B=!0}}else if(s){const ae=(i-f.x)*this.aspect,le=r-f.y;if(Math.sqrt(ae*ae+le*le)<.2*u){f.shelterPadIdx=null;const Ee=Math.atan2(-le,-ae)+_.turnBias*.8;f.targetAngle=Ee,f.speed=f.baseSpeed*(2+.25*(2-d)),f.isSwimming=!0,f.swimTimer=1+d*.3,S=!0}}if(!S&&!B){let ae=!1;if(f.shelterPadIdx!=null&&a&&a[f.shelterPadIdx]){const le=a[f.shelterPadIdx];if(le.r>.01&&le.y>=.08&&le.y<=.92){const ge=(le.x-f.x)*this.aspect,Ee=le.y-f.y;Math.sqrt(ge*ge+Ee*Ee)<=le.r*.62?(f.isSwimming=!1,f.swimTimer=2.2+Math.random()*1.8,f.shelterPadIdx=null):(f.targetAngle=Math.atan2(Ee,ge),f.isSwimming=!0,f.speed+=(f.baseSpeed*.92-f.speed)*Math.min(1,l*3),ae=!0)}else f.shelterPadIdx=null}if(!ae)if(f.isSwimming){f.speed+=(f.baseSpeed-f.speed)*l*3;const le=Math.sin(t*_.wanderFreq+d*2.7)*_.wanderAmp+_.turnBias;f.targetAngle+=le*l*.65}else f.speed*=Math.exp(-l*(2+d*.35)),f.speed<8e-4&&(f.speed=0)}const I=.13*u;for(let ae=0;ae<this.fishes.length;ae++){if(ae===d)continue;const le=this.fishes[ae],ge=(f.x-le.x)*this.aspect,Ee=f.y-le.y,te=Math.sqrt(ge*ge+Ee*Ee);if(te>1e-5&&te<I){const ie=(1-te/I)*l*3.4;let de=Math.atan2(Ee,ge)-f.targetAngle;for(;de>Math.PI;)de-=Math.PI*2;for(;de<-Math.PI;)de+=Math.PI*2;f.targetAngle+=de*Math.min(1,ie)}}const z=B?.04:.12,E=f.x<z||f.x>1-z||f.y<z||f.y>1-z,M=f.x<-.01||f.x>1.01||f.y<-.01||f.y>1.01;if(E){f.shelterPadIdx=null;const ae=.5+(d-1)*.16,le=.5+(1-d)*.13,ge=(ae-f.x)*this.aspect,Ee=le-f.y;let ie=Math.atan2(Ee,ge)+_.turnBias*.32-f.targetAngle;for(;ie>Math.PI;)ie-=Math.PI*2;for(;ie<-Math.PI;)ie+=Math.PI*2;const Se=M?1:Math.min(1,l*5.5);if(f.targetAngle+=ie*Se,f.isSwimming=!0,M){const de=f.baseSpeed*(2.65+d*.2);f.speed+=(de-f.speed)*Math.min(1,l*6.5),f.swimTimer=Math.max(f.swimTimer,1.4)}else f.speed<f.baseSpeed*.85&&(f.speed+=(f.baseSpeed-f.speed)*Math.min(1,l*3.5))}const P=f.speed/Math.max(1e-5,f.baseSpeed);f.phase+=l*f.wiggleSpeed*Math.min(1.6,P);let N=f.targetAngle-f.angle;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const G=M?7.5:.4+2.2*Math.min(1,P);f.angle+=N*Math.min(1,l*G),f.vx=Math.cos(f.angle)*f.speed*u,f.vy=Math.sin(f.angle)*f.speed*u,f.x+=f.vx/Math.max(.1,this.aspect)*l,f.y+=f.vy*l;const Z=f.spine[2].x,re=f.spine[2].y,q=f.spine[0];q.x=f.x,q.y=f.y;const se=f.size*u,X=se*.21;let pe=f.angle+Math.PI;for(let ae=1;ae<f.spine.length;ae++){const le=f.spine[ae-1],ge=f.spine[ae],Ee=(ge.x-le.x)*this.aspect,te=ge.y-le.y;let ie=Math.atan2(te,Ee);const Se=Math.pow(ae/(f.spine.length-1),1.3),de=Math.sin(f.phase-ae*.75)*(.15*Se*Math.min(1.3,P));let Ae=pe+de-ie;for(;Ae>Math.PI;)Ae-=Math.PI*2;for(;Ae<-Math.PI;)Ae+=Math.PI*2;ie+=Ae*Math.min(1,l*(3+11*Math.min(1,P))),ge.x=le.x+Math.cos(ie)*X/Math.max(.1,this.aspect),ge.y=le.y+Math.sin(ie)*X,pe=ie}if(o&&q.x>=-.06&&q.x<=1.06&&q.y>=-.06&&q.y<=1.06){const ae=f.spine[2],le=.18;o(q.x,q.y,ae.x,ae.y,se*.24,le),o(ae.x,ae.y,p.x,p.y,se*.2,le*.85),o(x,m,Z,re,se*.24,-le),o(Z,re,R,b,se*.2,-le*.85)}}}packUniforms(){const e=this.packedHeads,t=this.packedColors,i=this.packedSpines,r=this.packedPellets,s=this.getFishScale();for(let o=0;o<3;o++){const a=this.fishes[o];e[o*4+0]=a.x,e[o*4+1]=a.y,e[o*4+2]=a.angle,e[o*4+3]=a.size*s,t[o*4+0]=a.color.r,t[o*4+1]=a.color.g,t[o*4+2]=a.color.b,t[o*4+3]=a.isLeader?1:0;for(let l=0;l<6;l++){const u=a.spine[l],c=(o*6+l)*4;i[c+0]=u.x,i[c+1]=u.y,i[c+2]=0,i[c+3]=0}}for(let o=0;o<cr.MAX_PELLETS;o++){const a=o*4;if(o<this.pellets.length){const l=this.pellets[o],u=l.age<.18?1.35-.35*(l.age/.18):1,c=l.age>l.maxAge-2?Math.max(0,(l.maxAge-l.age)/2):1,h=Math.min(1,l.age/.06);r[a+0]=l.x,r[a+1]=l.y,r[a+2]=l.size*s*u,r[a+3]=h*c}else r[a+0]=0,r[a+1]=0,r[a+2]=0,r[a+3]=0}return{heads:e,colors:t,spines:i,pellets:r}}};j(cr,"MAX_PELLETS",12);let bl=cr;const Qe={1:{name:"Macro Caustic Lens",scaleLabel:"10⁰ m → 10⁻² m",description:"Pristine macroscopic optical glass refraction with balanced fluid caustics and pond swells.",wavelength:.4,propagationZ:46.65,phaseCoupling:.4,refractiveIndex:1,materialAbsorption:0,exposure:.525,ambient:.165,refractionStrength:.45,reflectionGloss:.52,pondWaveAmp:5.15,pondWaveK0:.01,pondWavePower:4.1,pondWaveSpeed:7},2:{name:"Micro Diffraction Hologram",scaleLabel:"10⁻⁴ m → 10⁻⁶ m",description:"Sub-wavelength wave optics, deep holographic diffraction rings, and Talbot chromatic fringes.",wavelength:20,propagationZ:2.5,phaseCoupling:2.5,refractiveIndex:1,materialAbsorption:0,exposure:.35,ambient:.11,refractionStrength:.3,reflectionGloss:.22,pondWaveAmp:3.2,pondWaveK0:.009,pondWavePower:3.9,pondWaveSpeed:7},3:{name:"Deep Dielectric Diffraction",scaleLabel:"10⁻⁵ m → 10⁻⁷ m",description:"High-index dielectric aperture relief with deep interference shadows and dramatic wave troughs.",wavelength:20,propagationZ:5.95,phaseCoupling:2,refractiveIndex:2.5,materialAbsorption:.01,exposure:.05,ambient:0,refractionStrength:0,reflectionGloss:0,pondWaveAmp:7.05,pondWaveK0:.005,pondWavePower:4.6,pondWaveSpeed:6.5}};function Sn(n,e,t){return n+(e-n)*t}function wo(n,e,t){return n*Math.pow(e/n,t)}function ZM(n){const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}const RS={...Qe[1]};function CS(n){return JM(ZM(n))}function JM(n){const e=Qe[1],t=Qe[2];return{wavelength:wo(e.wavelength,t.wavelength,n),propagationZ:wo(e.propagationZ,t.propagationZ,n),phaseCoupling:Sn(e.phaseCoupling,t.phaseCoupling,n),refractiveIndex:Sn(e.refractiveIndex,t.refractiveIndex,n),materialAbsorption:Sn(e.materialAbsorption,t.materialAbsorption,n),exposure:wo(e.exposure,t.exposure,n),ambient:Sn(e.ambient,t.ambient,n),refractionStrength:Sn(e.refractionStrength,t.refractionStrength,n),reflectionGloss:Sn(e.reflectionGloss,t.reflectionGloss,n),pondWaveAmp:Sn(e.pondWaveAmp,t.pondWaveAmp,n),pondWaveK0:Sn(e.pondWaveK0,t.pondWaveK0,n),pondWavePower:Sn(e.pondWavePower,t.pondWavePower,n),pondWaveSpeed:Sn(e.pondWaveSpeed,t.pondWaveSpeed,n)}}const Xs=620/532,qs=1,Ys=460/532,qu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ks=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,QM=`
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
`,eS=`
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
`,tS=`
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
`,nS=`
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
`,iS=`
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
uniform vec4 u_cardParams[8];      // (emerge [0..1], imgAspect, boxAspect, fillMode: 0=off, 1=texture, 2=paper)
uniform vec4 u_cardStyle[8];       // (shapePower, featherWidth, waveRimCoupling, 0)

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
  float lotusVis = lotus.a * smoothstep(0.002, 0.02, u_ambient);
  if (lotusVis > 0.0) {
    finalComposite = mix(finalComposite, lotus.rgb, lotusVis);
  }

  // Composite up to 8 independent Continuum Surfaces (texture thumbnails, dry paper sheets, or transitions)
  float maxCardMask = 0.0;
  for (int c = 0; c < 8; c++) {
    vec4 cp = u_cardParams[c];
    if (cp.x <= 0.002 || cp.w <= 0.5) continue;
    vec4 cb = u_cardBounds[c];
    vec4 cs = u_cardStyle[c];
    vec2 bMin = cb.xy;
    vec2 bMax = cb.zw;
    vec2 center = (bMin + bMax) * 0.5;
    vec2 halfSize = max((bMax - bMin) * 0.5, vec2(1e-4));
    vec2 qBase = (baseUv - center) / halfSize;
    if (all(lessThanEqual(abs(qBase), vec2(1.32)))) {
      float emerge = cp.x;
      float smoothEmerge = emerge * emerge * (3.0 - 2.0 * emerge);
      float pExp = max(1.5, cs.x);
      float fWidth = max(0.04, cs.y);
      float rimCouple = clamp(cs.z, 0.0, 1.5);

      // Organic live fluid edge perturbation directly driven by real water surface slope + live height
      vec2 waveShift = normal.xy * (0.065 * rimCouple * (1.0 - 0.25 * smoothEmerge));
      vec2 qWave = abs(qBase + waveShift);
      float superR = pow(pow(qWave.x, pExp) + pow(qWave.y, pExp), 1.0 / pExp);
      float liveWaterHeight = clamp(liveEz * 1.4 + livePondPhi * 0.16, -0.8, 0.8);
      float rimWaveMod = clamp(liveWaterHeight * 0.085 * rimCouple, -0.075, 0.075);

      float maxOuter = 1.0 + fWidth * 0.64;
      float outerR = mix(0.20, maxOuter, smoothEmerge) + rimWaveMod;
      float innerR = max(0.0, outerR - fWidth);
      float cMask = (1.0 - smoothstep(innerR, outerR, superR)) * clamp(smoothEmerge * 1.35, 0.0, 1.0);

      if (cMask > 0.002) {
        vec3 linearCard;
        if (cp.w > 1.5) {
          // Dry porcelain paper surface for DOM overlays / Markdown sheets
          linearCard = vec3(0.955, 0.958, 0.962);
        } else {
          // Smooth C-infinity soft-clamp: 0.5*sqrt(a+(x+1)^2) - 0.5*sqrt(a+(x-1)^2)
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
          linearCard = pow(clamp(srgbSample, 0.0, 1.0), vec3(2.2));
        }
        finalComposite = mix(finalComposite, linearCard, cMask);
        maxCardMask = max(maxCardMask, cMask);
      }
    }
  }

  // Composite glossy surface reflection (damped over superhydrophobic matte lotus leaf and dry card center)
  finalComposite += glossReflection * (1.0 - lotusVis * 0.78) * (1.0 - maxCardMask * 0.85);

  // 9. Linear to sRGB transfer curve
  vec3 srgb = pow(clamp(finalComposite, 0.0, 1.0), vec3(1.0 / 2.2));

  gl_FragColor = vec4(srgb, 1.0);
}
`,rS=`
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
`;class sS{constructor(e){j(this,"renderer");j(this,"scene");j(this,"camera");j(this,"width",512);j(this,"height",512);j(this,"viewportWidth",900);j(this,"viewportHeight",900);j(this,"fftRGB");j(this,"fdtd");j(this,"rtTarget");j(this,"rtTargetKSpace");j(this,"rtMaterial");j(this,"rtPreFocus");j(this,"mrtScratch");j(this,"rtDisplayFinal");j(this,"runner");j(this,"targetSceneMaterial");j(this,"materialMapMaterial");j(this,"asmModMaterial");j(this,"phaseScreenMaterial");j(this,"masterCausticMaterial");j(this,"mrtBlitMaterial");j(this,"needBackwardUpdate",!0);j(this,"needTargetFFTUpdate",!0);j(this,"needMaterialUpdate",!0);j(this,"cachedPreFocusRT",null);j(this,"_wavelength",Qe[1].wavelength);j(this,"_deltaZ",Qe[1].propagationZ);j(this,"_refractiveIndex",Qe[1].refractiveIndex);j(this,"_materialAbsorption",Qe[1].materialAbsorption);j(this,"phaseCoupling",Qe[1].phaseCoupling);j(this,"smoothedCoupling",Qe[1].phaseCoupling);j(this,"exposure",Qe[1].exposure);j(this,"ambient",Qe[1].ambient);j(this,"refractionStrength",Qe[1].refractionStrength);j(this,"reflectionGloss",Qe[1].reflectionGloss);j(this,"pondWaveAmp",Qe[1].pondWaveAmp);j(this,"pondWaveK0",Qe[1].pondWaveK0);j(this,"pondWaveSpeed",Qe[1].pondWaveSpeed);j(this,"pondWavePower",Qe[1].pondWavePower);j(this,"pondWaveTime",0);j(this,"hasPondPhiValid",!1);j(this,"lastPondScrollUv",new He(0,0));j(this,"smoothedScrollUv",new He(0,0));j(this,"floatType",Et);j(this,"lotusUniforms",[new $e,new $e]);j(this,"pebbleUniforms",[new $e,new $e,new $e]);j(this,"activeLotusPads",[{x:.1,y:.22,r:.06},{x:.9,y:.78,r:.05}]);j(this,"lotusDrift",[{dScale:0,vScale:0},{dScale:0,vScale:0}]);j(this,"textureAspect",1);j(this,"currentTextureUrl","");j(this,"mouse",{x:0,y:0,prevX:0,prevY:0,vx:0,vy:0,isDown:!1});j(this,"isReady",!1);j(this,"telemetry",{continuousMode:0,mouseScattering:0,waveEnergy:0,projectionName:"PHYSICAL RGB (620/532/460nm) ASM + FDTD",scaleExponentStr:"10⁰ m"});j(this,"perturbationRenderer");j(this,"pendingStrokes",[]);j(this,"pendingWavePulse",null);j(this,"fishSim");j(this,"activeCardTexCache",new WeakMap);j(this,"allocatedCardTextures",new Set);j(this,"cardPlaceholderTex",null);this.renderer=new BM({canvas:e,antialias:!1,alpha:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<=768?1:1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.renderer.getContext(),i=!!(t&&t.getExtension("EXT_color_buffer_float"));!i&&t&&t.getExtension("EXT_color_buffer_half_float"),this.floatType=i?Et:Er,this.viewportWidth=Math.max(1,window.innerWidth),this.viewportHeight=Math.max(1,window.innerHeight);const r=this.calculateOptimalGrid(this.viewportWidth,this.viewportHeight);this.width=r.width,this.height=r.height,this.scene=new yr,this.camera=new wr(-1,1,1,-1,0,1),this.runner=new Fa;const s=Math.max(64,this.width>>1),o=Math.max(64,this.height>>1);this.perturbationRenderer=new jM(s,o,this.runner,this.floatType),this.fftRGB=new Wu(this.width,this.height,this.runner,this.floatType),this.fdtd=new YM({width:s,height:o,cfl:.5,pmlCells:16,pmlSigmaMax:16,runner:this.runner,floatType:this.floatType});const a={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},l={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1},u={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtTarget=new Ke(this.width,this.height,l),this.rtTargetKSpace=new Ke(this.width,this.height,l),this.rtMaterial=new Ke(this.width,this.height,a),this.rtPreFocus=new Ke(this.width,this.height,l),this.mrtScratch=new Ke(this.width,this.height,l),this.rtDisplayFinal=new Ke(this.width,this.height,u),this.hasPondPhiValid=!1;const c=new zM(new Uint8Array([0,0,0,0]),1,1,pt);c.needsUpdate=!0,this.cardPlaceholderTex=c,this.fishSim=new bl,this.fishSim.setAspect(this.viewportWidth/Math.max(1,this.viewportHeight)),this.fishSim.setViewportSize(this.viewportWidth,this.viewportHeight);const h=this.fishSim.packUniforms();this.targetSceneMaterial=new Mt({glslVersion:zi,vertexShader:Ks,fragmentShader:QM,uniforms:{u_logoTexture:{value:c},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishSpines:{value:h.spines}}}),this.materialMapMaterial=new Mt({vertexShader:qu,fragmentShader:eS,uniforms:{u_logoTexture:{value:c},u_refractiveIndex:{value:this.refractiveIndex},u_materialAbsorption:{value:this.materialAbsorption},u_dielectricRelief:{value:0}}}),this.asmModMaterial=new Mt({glslVersion:zi,vertexShader:Ks,fragmentShader:tS,uniforms:{u_kSpaceRG:{value:null},u_kSpaceB:{value:null},u_resolution:{value:new He(this.width,this.height)},u_viewportSize:{value:new He(this.viewportWidth,this.viewportHeight)},u_scrollUv:{value:new He(0,0)},u_wavelengths:{value:new ee(this.wavelength*Xs,this.wavelength*qs,this.wavelength*Ys)},u_pupilNA:{value:.95},u_propagationZ:{value:0},u_time:{value:0},u_pondWaveAmp:{value:this.pondWaveAmp},u_pondWaveK0:{value:this.pondWaveK0},u_pondWaveTime:{value:0},u_pondWavePower:{value:this.pondWavePower}}}),this.phaseScreenMaterial=new Mt({glslVersion:zi,vertexShader:Ks,fragmentShader:nS,uniforms:{u_preFocusRG:{value:null},u_preFocusB:{value:null},u_fdtdTex:{value:null},u_materialTex:{value:null},u_pondPhiTex:{value:this.rtDisplayFinal.textures[1]},u_pondPhiScrollDelta:{value:new He(0,0)},u_hasPondPhi:{value:0},u_phaseCoupling:{value:this.phaseCoupling},u_invWavelengthRatios:{value:new ee(1/Xs,1/qs,1/Ys)},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishSpines:{value:h.spines},u_lotusPads:{value:this.lotusUniforms}}}),this.masterCausticMaterial=new Mt({vertexShader:qu,fragmentShader:iS,uniforms:{u_finalField_RG:{value:null},u_finalField_B:{value:null},u_fdtdTex:{value:null},u_resolution:{value:new He(window.innerWidth,window.innerHeight)},u_simGrid:{value:new He(this.width,this.height)},u_fdtdGrid:{value:new He(s,o)},u_exposure:{value:this.exposure},u_ambient:{value:this.ambient},u_refractionStrength:{value:this.refractionStrength},u_reflectionGloss:{value:this.reflectionGloss},u_hasPondPhi:{value:0},u_aspect:{value:window.innerWidth/Math.max(1,window.innerHeight)},u_time:{value:0},u_fishHeads:{value:h.heads},u_fishColors:{value:h.colors},u_fishSpines:{value:h.spines},u_foodPellets:{value:h.pellets},u_lotusPads:{value:this.lotusUniforms},u_pebbles:{value:this.pebbleUniforms},u_cardTex0:{value:c},u_cardTex1:{value:c},u_cardTex2:{value:c},u_cardTex3:{value:c},u_cardTex4:{value:c},u_cardTex5:{value:c},u_cardTex6:{value:c},u_cardTex7:{value:c},u_cardBounds:{value:Array.from({length:8},()=>new $e(0,0,0,0))},u_cardParams:{value:Array.from({length:8},()=>new $e(0,1.6,1.6,0))},u_cardStyle:{value:Array.from({length:8},()=>new $e(2.8,.28,1,0))}}}),this.mrtBlitMaterial=new Mt({glslVersion:zi,vertexShader:Ks,fragmentShader:rS,uniforms:{u_texRG:{value:null},u_texB:{value:null}}}),this.loadTexture("white-square")}get fftTarget(){return this.fftRGB}get fftBackwardRGB(){return this.fftRGB}get fftForwardRGB(){return this.fftRGB}get fftFinalRGB(){return this.fftRGB}get wavelength(){return this._wavelength}set wavelength(e){Math.abs(this._wavelength-e)>1e-4&&(this._wavelength=e,this.needBackwardUpdate=!0)}get deltaZ(){return this._deltaZ}set deltaZ(e){Math.abs(this._deltaZ-e)>1e-4&&(this._deltaZ=e,this.needBackwardUpdate=!0)}get refractiveIndex(){return this._refractiveIndex}set refractiveIndex(e){this._refractiveIndex!==e&&(this._refractiveIndex=e,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0)}get materialAbsorption(){return this._materialAbsorption}set materialAbsorption(e){this._materialAbsorption!==e&&(this._materialAbsorption=e,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0)}get phaseCouplingIn(){return this.phaseCoupling}set phaseCouplingIn(e){this.phaseCoupling=e}get phaseCouplingOut(){return this.phaseCoupling}set phaseCouplingOut(e){this.phaseCoupling=e}hitTestLotusPad(e,t){const i=this.viewportWidth/Math.max(1,this.viewportHeight),r=e*i;for(let s=0;s<this.activeLotusPads.length;s++){const o=this.activeLotusPads[s];if(o.r<.002)continue;const a=r-o.x*i,l=t-o.y,u=Math.max(o.r*1.5,.055);if(a*a+l*l<=u*u)return s}return-1}nudgeLotusPad(e){const t=this.lotusDrift[e],i=this.activeLotusPads[e];!t||!i||(t.dScale=-.05,t.vScale=0,this.addPerturbation(i.x,i.y,i.x,i.y,.042,.55))}triggerScrollWave(e,t,i=1){this.pendingWavePulse={strength:e,y:t,dir:i}}dropFoodPellet(e,t){this.fishSim.dropFood(e,t);const i=Math.min(2.25,Math.max(.45,900/Math.max(240,this.viewportHeight)));this.addPerturbation(e,t,e,t,.042*i,.72)}setPmlSides(e,t,i,r){this.fdtd.setPmlSides(e,t,i,r)}setCardIslands(e){this.fdtd.setCardIslands(e)}setCardIsland(e,t,i,r,s,o,a=0){this.fdtd.setCardIsland(e,t,i,r,s,o,a)}setActiveCards(e){const t=this.masterCausticMaterial.uniforms,i=t.u_cardBounds.value,r=t.u_cardParams.value,s=t.u_cardStyle.value;let o=0;for(let a=0;a<e.length&&o<8;a++){const l=e[a];if(l.emerge<=.002)continue;const u=l.fillMode==="paper";if(!u&&(!l.img||!l.img.complete||l.img.naturalWidth<=0))continue;if(u){if(this.cardPlaceholderTex){const _=t["u_cardTex"+o];_&&_.value!==this.cardPlaceholderTex&&(_.value=this.cardPlaceholderTex)}i[o].set(l.uMin,l.vMin,l.uMax,l.vMax),r[o].set(l.emerge,1,Math.max(.1,l.boxAspect),2),s[o].set(l.shapePower??5.5,l.featherWidth??.11,l.waveRimCoupling??.32,0),o++;continue}const c=l.img;let h=this.activeCardTexCache.get(c);h||(h=new Rt(c),h.wrapS=xt,h.wrapT=xt,h.minFilter=mt,h.magFilter=mt,h.generateMipmaps=!1,h.needsUpdate=!0,this.activeCardTexCache.set(c,h),this.allocatedCardTextures.add(h));const d=t["u_cardTex"+o];d&&d.value!==h&&(d.value=h);const f=c.naturalWidth/Math.max(1,c.naturalHeight);i[o].set(l.uMin,l.vMin,l.uMax,l.vMax),r[o].set(l.emerge,f,Math.max(.1,l.boxAspect),1),s[o].set(l.shapePower??2.8,l.featherWidth??.28,l.waveRimCoupling??1,0),o++}for(let a=o;a<8;a++)if(r[a].set(0,1.6,1.6,0),s[a].set(2.8,.28,1,0),this.cardPlaceholderTex){const l=t["u_cardTex"+a];l&&l.value!==this.cardPlaceholderTex&&(l.value=this.cardPlaceholderTex)}}setActiveCard(e,t,i,r,s,o,a){!e||o<=.002?this.setActiveCards([]):this.setActiveCards([{img:e,uMin:t,vMin:i,uMax:r,vMax:s,emerge:o,boxAspect:a}])}setMode(e){}createWhiteSquareTexture(e=1024,t=1){const i=document.createElement("canvas");i.width=e,i.height=e;const r=i.getContext("2d");if(r)if(t>=1)r.fillStyle="#ffffff",r.fillRect(0,0,e,e);else{r.fillStyle="#000000",r.fillRect(0,0,e,e);const o=Math.round(e*t),a=Math.round((e-o)/2);r.fillStyle="#ffffff",r.fillRect(a,a,o,o)}const s=new $r(i);return s.wrapS=xt,s.wrapT=xt,s.minFilter=mt,s.magFilter=mt,s.generateMipmaps=!1,s.needsUpdate=!0,s}createChaiLogoTexture(e=1024){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");i&&(i.fillStyle="#000000",i.fillRect(0,0,e,e),i.fillStyle="#ffffff",i.font='bold 580px "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("柴",e/2,e/2));const r=new $r(t);return r.wrapS=xt,r.wrapT=xt,r.minFilter=mt,r.magFilter=mt,r.generateMipmaps=!1,r.needsUpdate=!0,r}async loadTexture(e="white-square"){if(!(this.currentTextureUrl===e&&this.isReady)){if(this.currentTextureUrl=e,e==="white-square"){const t=this.createWhiteSquareTexture(1024,1);this.setTexture(t,1);return}(e==="chai"||e==="chai-logo")&&(e="/chai_black.png");try{const t=new Image;t.crossOrigin="anonymous",t.src=e,"decode"in t?await t.decode():await new Promise((r,s)=>{t.onload=()=>r(),t.onerror=s}),this.textureAspect=t.naturalWidth&&t.naturalHeight?t.naturalWidth/t.naturalHeight:1;const i=new Rt(t);i.wrapS=xt,i.wrapT=xt,i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,this.targetSceneMaterial.uniforms.u_logoTexture.value=i,this.materialMapMaterial.uniforms.u_logoTexture.value=i}catch(t){console.warn("[FourierContinuumEngine] Network image load failed, activating fallback aperture:",t);const i=e.includes("chai")?this.createChaiLogoTexture(1024):this.createWhiteSquareTexture(1024,.75);this.textureAspect=1,this.targetSceneMaterial.uniforms.u_logoTexture.value=i,this.materialMapMaterial.uniforms.u_logoTexture.value=i}this.materialMapMaterial.uniforms.u_dielectricRelief.value=0,this.isReady=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.fdtd.reset(this.renderer)}}setTexture(e,t=1){this.textureAspect=t,this.materialMapMaterial.uniforms.u_dielectricRelief.value=0,this.targetSceneMaterial.uniforms.u_logoTexture.value=e,this.materialMapMaterial.uniforms.u_logoTexture.value=e,this.isReady=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.fdtd.reset(this.renderer)}updateDynamicApertureTexture(e,t=1){this.materialMapMaterial.uniforms.u_dielectricRelief.value=t,this.targetSceneMaterial.uniforms.u_logoTexture.value!==e&&(this.targetSceneMaterial.uniforms.u_logoTexture.value=e,this.materialMapMaterial.uniforms.u_logoTexture.value=e,this.isReady=!0),e.needsUpdate=!0,this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0}setMaterialTexture(e,t=1){this.setTexture(e,t)}addPerturbations(e){for(let t=0;t<e.length;t++)this.pendingStrokes.length<16&&this.pendingStrokes.push(e[t])}addPerturbation(e,t,i,r,s=.04,o=.6){this.pendingStrokes.length<16&&this.pendingStrokes.push({x0:e,y0:t,x1:i,y1:r,radius:s,strength:o})}createFallbackTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t&&(t.fillStyle="#000000",t.fillRect(0,0,512,512),t.fillStyle="#ffffff",t.font='bold 280px "Noto Sans TC", "PingFang TC", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("柴",256,256));const i=new $r(e);return i.wrapS=xt,i.wrapT=xt,i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,i}computeBackwardASM(){const e=this._wavelength*Xs,t=this._wavelength*qs,i=this._wavelength*Ys;if(this.needMaterialUpdate&&(this.materialMapMaterial.uniforms.u_refractiveIndex.value=this._refractiveIndex,this.materialMapMaterial.uniforms.u_materialAbsorption.value=this._materialAbsorption,this.runner.render(this.renderer,this.materialMapMaterial,this.rtMaterial),this.needMaterialUpdate=!1),this.needTargetFFTUpdate){this.runner.render(this.renderer,this.targetSceneMaterial,this.rtTarget);const s=this.fftRGB.execute(this.renderer,this.rtTarget.textures[0],this.rtTarget.textures[1],!0);this.mrtBlitMaterial.uniforms.u_texRG.value=s.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=s.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtTargetKSpace),this.needTargetFFTUpdate=!1}this.asmModMaterial.uniforms.u_kSpaceRG.value=this.rtTargetKSpace.textures[0],this.asmModMaterial.uniforms.u_kSpaceB.value=this.rtTargetKSpace.textures[1],this.asmModMaterial.uniforms.u_viewportSize.value.set(this.viewportWidth,this.viewportHeight),this.asmModMaterial.uniforms.u_scrollUv.value.set(0,0),this.asmModMaterial.uniforms.u_wavelengths.value.set(e,t,i),this.asmModMaterial.uniforms.u_propagationZ.value=-this._deltaZ,this.runner.render(this.renderer,this.asmModMaterial,this.mrtScratch);const r=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!1);this.mrtBlitMaterial.uniforms.u_texRG.value=r.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=r.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtPreFocus),this.renderer.setRenderTarget(null),this.cachedPreFocusRT=this.rtPreFocus,this.needBackwardUpdate=!1}update(e,t){if(!this.isReady){this.renderer.setRenderTarget(null),this.renderer.clearColor();return}const i=this.mouse.x-this.mouse.prevX,r=this.mouse.y-this.mouse.prevY;this.mouse.vx=this.mouse.vx*.65+i*.35,this.mouse.vy=this.mouse.vy*.65+r*.35,this.mouse.prevX=this.mouse.x,this.mouse.prevY=this.mouse.y;const s=Math.sqrt(this.mouse.vx**2+this.mouse.vy**2),o=this.renderer.domElement,a=(o.clientWidth||window.innerWidth)/Math.max(1,o.clientHeight||window.innerHeight);this.fishSim.setAspect(a),this.fishSim.setViewportSize(this.viewportWidth,this.viewportHeight),this.asmModMaterial.uniforms.u_viewportSize.value.set(this.viewportWidth,this.viewportHeight);const l=Math.min(Math.max(e,0),.05);let u=this.lastPondScrollUv.x,c=this.lastPondScrollUv.y,h=0,d=0;if(typeof window<"u"){const le=window.scrollX*.8/Math.max(240,this.viewportWidth),ge=window.scrollY*.8/Math.max(240,this.viewportHeight),Ee=l>0?1-Math.exp(-l*28):1,te=this.smoothedScrollUv.x,ie=this.smoothedScrollUv.y;this.smoothedScrollUv.x+=(le-this.smoothedScrollUv.x)*Ee,this.smoothedScrollUv.y+=(ge-this.smoothedScrollUv.y)*Ee,h=this.smoothedScrollUv.x-te,d=this.smoothedScrollUv.y-ie,u=(this.smoothedScrollUv.x%1+1)%1,c=(this.smoothedScrollUv.y%1+1)%1}this.phaseScreenMaterial.uniforms.u_pondPhiScrollDelta&&this.phaseScreenMaterial.uniforms.u_pondPhiScrollDelta.value.set(u-this.lastPondScrollUv.x,c-this.lastPondScrollUv.y),this.fishSim.applyScrollShift(-h,d);const f=ae=>((ae+this.smoothedScrollUv.y+.22)%1.44+1.44)%1.44-.22,_=a<.78,x=_?.44:Math.min(1.18,Math.max(.82,Math.sqrt(900/Math.max(240,this.viewportHeight))));for(let ae=0;ae<2;ae++){const le=this.lotusDrift[ae],ge=Math.exp(-l*6.5);le.vScale=le.vScale*ge-le.dScale*42*l,le.dScale+=le.vScale*l}const m=(_?.82:.895)+Math.sin(t*.42)*.0045,p=f(_?.82:.76)+Math.cos(t*.35)*.0045,R=.062*x*(1+this.lotusDrift[0].dScale),b=-.52+Math.sin(t*.31)*.07,S=(_?.14:.105)+Math.cos(t*.38+1.7)*.0045,B=f(_?.22:.24)+Math.sin(t*.46+1.1)*.0045,C=.048*x*(1+this.lotusDrift[1].dScale),I=2.55+Math.cos(t*.29+.8)*.07;this.lotusUniforms[0].set(m,p,R,b),this.lotusUniforms[1].set(S,B,C,I),this.activeLotusPads[0].x=m,this.activeLotusPads[0].y=p,this.activeLotusPads[0].r=R,this.activeLotusPads[1].x=S,this.activeLotusPads[1].y=B,this.activeLotusPads[1].r=C,this.pebbleUniforms[0].set(_?.105:.168,f(.32),.025*x,.42),this.pebbleUniforms[1].set(_?.148:.204,f(.355),.016*x,-.65),this.pebbleUniforms[2].set(_?.885:.835,f(.58),.021*x,1.05);const z=this.mouse.x*.5+.5,E=this.mouse.y*.5+.5;this.fishSim.update(e,t,z,E,this.mouse.isDown||s>.005,(ae,le,ge,Ee,te,ie)=>{this.pendingStrokes.length<16&&this.pendingStrokes.push({x0:ae,y0:le,x1:ge,y1:Ee,radius:te,strength:ie})},this.activeLotusPads);const M=this.fishSim.packUniforms(),P=this.hasPondPhiValid&&this.pondWaveAmp>5e-4?1:0;if(this.phaseScreenMaterial.uniforms.u_aspect.value=a,this.phaseScreenMaterial.uniforms.u_time&&(this.phaseScreenMaterial.uniforms.u_time.value=t),this.phaseScreenMaterial.uniforms.u_fishHeads.value=M.heads,this.phaseScreenMaterial.uniforms.u_fishSpines.value=M.spines,this.masterCausticMaterial.uniforms.u_aspect.value=a,this.masterCausticMaterial.uniforms.u_time&&(this.masterCausticMaterial.uniforms.u_time.value=t),this.masterCausticMaterial.uniforms.u_fishHeads.value=M.heads,this.masterCausticMaterial.uniforms.u_fishColors.value=M.colors,this.masterCausticMaterial.uniforms.u_fishSpines.value=M.spines,this.masterCausticMaterial.uniforms.u_foodPellets.value=M.pellets,this.pendingStrokes.length===0&&(this.mouse.isDown||s>.005)){const ae=this.mouse.prevX*.5+.5,le=this.mouse.prevY*.5+.5,ge=this.mouse.x*.5+.5,Ee=this.mouse.y*.5+.5,te=(this.mouse.isDown?.75:.35)*Math.min(1,.4+s*8),ie=Math.min(2.25,Math.max(.45,900/Math.max(240,this.viewportHeight)));this.pendingStrokes.push({x0:ae,y0:le,x1:ge,y1:Ee,radius:.045*ie,strength:te})}const N=this.perturbationRenderer.update(this.renderer,this.pendingStrokes,.82,this.pendingWavePulse);this.pendingStrokes.length=0,this.pendingWavePulse=null,(this.needBackwardUpdate||!this.cachedPreFocusRT)&&this.computeBackwardASM(),this.fdtd.step(this.renderer,{subSteps:2,elapsed:t,sourceType:"none",sourceFreq:18,sourceAmp:.28,materialTex:this.rtMaterial.texture,sourceTex:N});const G=this.fdtd.getEFieldRenderTarget();this.smoothedCoupling=this.smoothedCoupling*.92+this.phaseCoupling*.08,this.phaseScreenMaterial.uniforms.u_preFocusRG.value=this.rtPreFocus.textures[0],this.phaseScreenMaterial.uniforms.u_preFocusB.value=this.rtPreFocus.textures[1],this.phaseScreenMaterial.uniforms.u_fdtdTex.value=G.texture,this.phaseScreenMaterial.uniforms.u_materialTex.value=this.rtMaterial.texture,this.phaseScreenMaterial.uniforms.u_pondPhiTex.value=this.rtDisplayFinal.textures[1],this.phaseScreenMaterial.uniforms.u_hasPondPhi.value=P,this.phaseScreenMaterial.uniforms.u_phaseCoupling.value=this.smoothedCoupling,this.runner.render(this.renderer,this.phaseScreenMaterial,this.mrtScratch),this.pondWaveTime+=Math.min(Math.max(e,0),.05)*this.pondWaveSpeed;const Z=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!0),re=this._wavelength*Xs,q=this._wavelength*qs,se=this._wavelength*Ys;this.asmModMaterial.uniforms.u_kSpaceRG.value=Z.textures[0],this.asmModMaterial.uniforms.u_kSpaceB.value=Z.textures[1],this.asmModMaterial.uniforms.u_wavelengths.value.set(re,q,se),this.asmModMaterial.uniforms.u_propagationZ.value=+this._deltaZ,this.asmModMaterial.uniforms.u_time&&(this.asmModMaterial.uniforms.u_time.value=t),this.asmModMaterial.uniforms.u_pondWaveAmp&&(this.asmModMaterial.uniforms.u_pondWaveAmp.value=this.pondWaveAmp),this.asmModMaterial.uniforms.u_pondWaveK0&&(this.asmModMaterial.uniforms.u_pondWaveK0.value=this.pondWaveK0),this.asmModMaterial.uniforms.u_pondWaveTime&&(this.asmModMaterial.uniforms.u_pondWaveTime.value=this.pondWaveTime),this.asmModMaterial.uniforms.u_pondWavePower&&(this.asmModMaterial.uniforms.u_pondWavePower.value=this.pondWavePower),this.asmModMaterial.uniforms.u_scrollUv&&this.asmModMaterial.uniforms.u_scrollUv.value.set(u,c),this.runner.render(this.renderer,this.asmModMaterial,this.mrtScratch);const X=this.fftRGB.execute(this.renderer,this.mrtScratch.textures[0],this.mrtScratch.textures[1],!1);this.mrtBlitMaterial.uniforms.u_texRG.value=X.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=X.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtDisplayFinal),this.hasPondPhiValid=!0,this.lastPondScrollUv.set(u,c),this.masterCausticMaterial.uniforms.u_finalField_RG.value=this.rtDisplayFinal.textures[0],this.masterCausticMaterial.uniforms.u_finalField_B.value=this.rtDisplayFinal.textures[1],this.masterCausticMaterial.uniforms.u_fdtdTex.value=G.texture,this.masterCausticMaterial.uniforms.u_exposure.value=this.exposure,this.masterCausticMaterial.uniforms.u_ambient.value=this.ambient,this.masterCausticMaterial.uniforms.u_refractionStrength.value=this.refractionStrength,this.masterCausticMaterial.uniforms.u_reflectionGloss.value=this.reflectionGloss,this.masterCausticMaterial.uniforms.u_hasPondPhi.value=this.pondWaveAmp>5e-4?1:0,this.runner.render(this.renderer,this.masterCausticMaterial,null);const pe=Math.min(1,s*45+(this.mouse.isDown?.65:0));this.telemetry.mouseScattering+=(pe-this.telemetry.mouseScattering)*.15}calculateOptimalGrid(e,t){const i=e/Math.max(1,t);let r=512,s=512;return Math.min(e,t)<=768?(r=i<1?128:256,s=i<1?256:128):e>=1400&&i>=1.5?(r=1024,s=512):(r=512,s=512),{width:r,height:s}}resize(e,t){const i=Math.max(1,Math.round(e)),r=Math.max(1,Math.round(t)),s=i/r;this.viewportWidth=i,this.viewportHeight=r,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<=768?1:1.5)),this.renderer.setSize(i,r,!0),this.asmModMaterial.uniforms.u_viewportSize.value.set(i,r),this.masterCausticMaterial.uniforms.u_resolution.value.set(i,r),this.masterCausticMaterial.uniforms.u_aspect.value=s,this.targetSceneMaterial.uniforms.u_aspect.value=s,this.fishSim.setAspect(s),this.fishSim.setViewportSize(i,r);const{width:o,height:a}=this.calculateOptimalGrid(i,r);if(o===this.width&&a===this.height){this.isReady&&(this.needTargetFFTUpdate=!0,this.needBackwardUpdate=!0,this.computeBackwardASM(),this.update(0,performance.now()/1e3));return}this.width=o,this.height=a;const l=this.rtPreFocus;this.rtTarget.dispose(),this.rtTargetKSpace.dispose(),this.rtMaterial.dispose(),this.mrtScratch.dispose(),this.rtDisplayFinal.dispose();const u={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,stencilBuffer:!1,depthBuffer:!1},c={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1},h={minFilter:Ye,magFilter:Ye,format:pt,type:this.floatType,count:2,stencilBuffer:!1,depthBuffer:!1};this.rtTarget=new Ke(this.width,this.height,c),this.rtTargetKSpace=new Ke(this.width,this.height,c),this.rtMaterial=new Ke(this.width,this.height,u),this.rtPreFocus=new Ke(this.width,this.height,c),this.mrtScratch=new Ke(this.width,this.height,c),this.rtDisplayFinal=new Ke(this.width,this.height,h),this.hasPondPhiValid=!1,this.phaseScreenMaterial.uniforms.u_pondPhiTex.value=this.rtDisplayFinal.textures[1],this.mrtBlitMaterial.uniforms.u_texRG.value=l.textures[0],this.mrtBlitMaterial.uniforms.u_texB.value=l.textures[1],this.runner.render(this.renderer,this.mrtBlitMaterial,this.rtPreFocus),this.renderer.setRenderTarget(null),l.dispose(),this.fftRGB.dispose(),this.fftRGB=new Wu(this.width,this.height,this.runner,this.floatType);const d=Math.max(64,this.width>>1),f=Math.max(64,this.height>>1);this.fdtd.resize(d,f,this.renderer),this.perturbationRenderer.resize(d,f,this.renderer),this.asmModMaterial.uniforms.u_resolution.value.set(this.width,this.height),this.masterCausticMaterial.uniforms.u_simGrid.value.set(this.width,this.height),this.masterCausticMaterial.uniforms.u_fdtdGrid.value.set(d,f),this.needTargetFFTUpdate=!0,this.needMaterialUpdate=!0,this.needBackwardUpdate=!0,this.isReady&&(this.computeBackwardASM(),this.update(.016,performance.now()/1e3))}dispose(){var e;this.fftRGB.dispose(),this.fdtd.dispose(),this.perturbationRenderer.dispose(),this.rtTarget.dispose(),this.rtTargetKSpace.dispose(),this.rtMaterial.dispose(),this.rtPreFocus.dispose(),this.mrtScratch.dispose(),this.rtDisplayFinal.dispose(),this.targetSceneMaterial.dispose(),this.materialMapMaterial.dispose(),this.asmModMaterial.dispose(),this.phaseScreenMaterial.dispose();for(const t of this.allocatedCardTextures)t.dispose();this.allocatedCardTextures.clear(),(e=this.cardPlaceholderTex)==null||e.dispose(),this.masterCausticMaterial.dispose(),this.mrtBlitMaterial.dispose(),this.runner.dispose(),this.renderer.dispose()}}class aS{constructor(){j(this,"surfaces",new Map);j(this,"seqCounter",0)}upsert(e){const t=this.surfaces.get(e.id),i=e.shapePower??2.8,r=e.featherWidth??.28,s=e.waveRimCoupling??1,o=e.plateauStrength??1,a=e.fillMode??"texture",l=e.priority??0,u=e.zOrder??0,c=!!e.immediateEmerge,h=!!e.immediateRect,d=!!e.immediateStyle;if(t){e.el!==void 0&&(t.el=e.el),e.rect!==void 0&&(t.targetRect=e.rect?{...e.rect}:null,h&&e.rect&&(t.currRect={...e.rect})),e.initialRect&&(t.currRect={...e.initialRect},t.el&&(t.smoothToEl=!0)),e.initialEmerge!==void 0&&(t.currEmerge=Math.max(t.currEmerge,e.initialEmerge)),t.targetEmerge=e.emerge,t.immediateEmerge=c,c&&(t.currEmerge=e.emerge),t.immediateRect=h,t.immediateStyle=d,t.targetShapePower=i,t.targetFeatherWidth=r,t.targetWaveRimCoupling=s,d&&(t.currShapePower=i,t.currFeatherWidth=r,t.currWaveRimCoupling=s),t.plateauStrength=o,t.fillMode=a,e.img!==void 0&&(t.img=e.img),t.priority=l,t.zOrder=u,e.emerge>.001&&(t.seq=++this.seqCounter);return}if(e.emerge<=.001&&(e.initialEmerge??0)<=.001)return;const f=e.initialRect?{...e.initialRect}:e.rect?{...e.rect}:null;this.surfaces.set(e.id,{id:e.id,el:e.el??null,smoothToEl:!!(e.el&&e.initialRect),targetRect:e.rect?{...e.rect}:null,currRect:f,targetEmerge:e.emerge,currEmerge:c?e.emerge:e.initialEmerge??0,immediateEmerge:c,immediateRect:h,immediateStyle:d,targetShapePower:i,currShapePower:i,targetFeatherWidth:r,currFeatherWidth:r,targetWaveRimCoupling:s,currWaveRimCoupling:s,plateauStrength:o,fillMode:a,img:e.img??null,priority:l,zOrder:u,seq:++this.seqCounter})}remove(e){this.surfaces.delete(e)}getEmerge(e){var t;return((t=this.surfaces.get(e))==null?void 0:t.currEmerge)??0}setTargetEmerge(e,t,i){const r=this.surfaces.get(e);r&&(r.targetEmerge=t,r.immediateEmerge=!1,i!==void 0&&(r.targetRect=i?{...i}:null))}clearByPrefix(e,t){for(const[i,r]of this.surfaces.entries())i.startsWith(e)&&i!==t&&(r.targetEmerge=0,r.immediateEmerge=!1)}consumeActiveByPrefix(e,t){let i=null,r=null;if(t){const a=this.surfaces.get(t);a&&a.currEmerge>.005&&(i=t,r=a)}else for(const[a,l]of this.surfaces.entries())a.startsWith(e)&&(!r||l.currEmerge>r.currEmerge)&&(r=l,i=a);if(!r||!i||r.currEmerge<=.005)return null;let s=r.currRect;if(!s&&r.el){const a=r.el.getBoundingClientRect();s={left:a.left,top:a.top,width:a.width,height:a.height}}if(!s)return null;const o={id:i,emerge:r.currEmerge,rect:{...s},shapePower:r.currShapePower,featherWidth:r.currFeatherWidth,waveRimCoupling:r.currWaveRimCoupling,img:r.img};return this.surfaces.delete(i),o}step(e,t,i=8){const r=Math.min(Math.max(e,0),.1),s=1-Math.exp(-r*9.5),o=[];for(const[a,l]of this.surfaces.entries()){if(l.el&&!l.el.isConnected){this.surfaces.delete(a);continue}const u=t?0:l.targetEmerge;if(l.immediateEmerge&&!t)l.currEmerge=u;else{const c=u>l.currEmerge?2.8:4.4;l.currEmerge+=(u-l.currEmerge)*(1-Math.exp(-r*c))}if(l.immediateStyle?(l.currShapePower=l.targetShapePower,l.currFeatherWidth=l.targetFeatherWidth,l.currWaveRimCoupling=l.targetWaveRimCoupling):(l.currShapePower+=(l.targetShapePower-l.currShapePower)*s,l.currFeatherWidth+=(l.targetFeatherWidth-l.currFeatherWidth)*s,l.currWaveRimCoupling+=(l.targetWaveRimCoupling-l.currWaveRimCoupling)*s),l.el){const c=l.el.getBoundingClientRect();l.smoothToEl&&l.currRect?(l.currRect.left+=(c.left-l.currRect.left)*s,l.currRect.top+=(c.top-l.currRect.top)*s,l.currRect.width+=(c.width-l.currRect.width)*s,l.currRect.height+=(c.height-l.currRect.height)*s,Math.abs(c.left-l.currRect.left)<1&&Math.abs(c.top-l.currRect.top)<1&&Math.abs(c.width-l.currRect.width)<1&&(l.smoothToEl=!1)):l.currRect={left:c.left,top:c.top,width:c.width,height:c.height}}else l.targetRect&&(!l.currRect||l.immediateRect?l.currRect={...l.targetRect}:(l.currRect.left+=(l.targetRect.left-l.currRect.left)*s,l.currRect.top+=(l.targetRect.top-l.currRect.top)*s,l.currRect.width+=(l.targetRect.width-l.currRect.width)*s,l.currRect.height+=(l.targetRect.height-l.currRect.height)*s));if(!l.immediateEmerge&&l.currEmerge<=.003&&l.targetEmerge<=.001){this.surfaces.delete(a);continue}l.currEmerge>.002&&l.currRect&&l.currRect.width>4&&l.currRect.height>4&&o.push(l)}return o.length>i&&(o.sort((a,l)=>l.priority-a.priority||l.targetEmerge-a.targetEmerge||l.seq-a.seq),o.length=i),o.sort((a,l)=>a.zOrder-l.zOrder||a.seq-l.seq),o.map(a=>({id:a.id,rect:a.currRect,emerge:a.currEmerge,shapePower:a.currShapePower,featherWidth:a.currFeatherWidth,waveRimCoupling:a.currWaveRimCoupling,plateauStrength:a.plateauStrength,fillMode:a.fillMode,img:a.img}))}}const Vr=new aS;class oS{constructor(e=512,t=512){j(this,"canvas");j(this,"ctx");j(this,"texture");j(this,"imageCache",new Map);j(this,"visibility",1);j(this,"lastScrollY",-99999);j(this,"lastVpW",-1);j(this,"lastVpH",-1);j(this,"lastSimW",-1);j(this,"lastSimH",-1);j(this,"lastHadVisibleCards",!1);j(this,"cachedCardEls",null);j(this,"cardFadeMap",new Map);j(this,"imageJustLoaded",!0);this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(256,e),this.canvas.height=Math.min(256,t),this.ctx=this.canvas.getContext("2d",{alpha:!1,willReadFrequently:!0}),this.texture=new $r(this.canvas),this.texture.wrapS=xt,this.texture.wrapT=xt,this.texture.minFilter=mt,this.texture.magFilter=mt,this.texture.generateMipmaps=!1}markDirty(){this.imageJustLoaded=!0}getOrLoadImage(e){if(!e)return null;const t=this.imageCache.get(e);if(t)return t;const i=new Image;i.crossOrigin="anonymous";const r={img:i,loaded:!1,failed:!1};return this.imageCache.set(e,r),i.onload=()=>{r.loaded=!0,this.imageJustLoaded=!0},i.onerror=()=>{r.failed=!0},i.src=e,r}drawRoundedRect(e,t,i,r,s,o){const[a,l,u,c]=o.map(h=>Math.max(0,Math.min(h,Math.min(r,s)*.5)));e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+r-l,i),l>0&&e.quadraticCurveTo(t+r,i,t+r,i+l),e.lineTo(t+r,i+s-u),u>0&&e.quadraticCurveTo(t+r,i+s,t+r-u,i+s),e.lineTo(t+c,i+s),c>0&&e.quadraticCurveTo(t,i+s,t,i+s-c),e.lineTo(t,i+a),a>0&&e.quadraticCurveTo(t,i,t+a,i),e.closePath(),e.fill()}drawCoverImage(e,t,i,r,s,o){const a=t.naturalWidth,l=t.naturalHeight;if(a<=0||l<=0||s<=0||o<=0)return;const u=a/l,c=s/o;let h=0,d=0,f=a,_=l;u>c?(f=l*c,h=(a-f)*.5):(_=a/c,d=(l-_)*.5),e.drawImage(t,h,d,f,_,i,r,s,o)}sync(e,t,i){var M;if(typeof window>"u"||typeof document>"u"||!this.ctx)return!1;const r=e.renderer.domElement.getBoundingClientRect(),s=Math.max(1,r.width||window.innerWidth),o=Math.max(1,r.height||window.innerHeight),a=r.width>0?r.left:0,l=r.height>0?r.top:0,u=Math.min(256,Math.max(64,e.width)),c=Math.min(256,Math.max(64,e.height)),h=window.scrollY||window.pageYOffset||0,d=i?0:1,f=Math.min(Math.max(t,0),.05),_=this.visibility;if(Math.abs(d-this.visibility)>.001){const P=f>0?1-Math.exp(-f*8.5):1;this.visibility+=(d-this.visibility)*P,Math.abs(d-this.visibility)<=.002&&(this.visibility=d)}(!this.cachedCardEls||this.cachedCardEls.length===0||!((M=this.cachedCardEls[0])!=null&&M.isConnected))&&(this.cachedCardEls=Array.from(document.querySelectorAll("[data-project-aperture]")));const x=this.cachedCardEls;let m=!1;for(let P=0;P<x.length;P++){const N=x[P],G=N.dataset.projectAperture||"",Z=Vr.getEmerge(`hover-${G}`),re=N.dataset.apertureHidden==="1"?0:Math.max(0,1-Z),q=this.cardFadeMap.get(N)??1;if(Math.abs(re-q)>.004){const se=re<q?4.2:3.6,X=f>0?1-Math.exp(-f*se):1,pe=q+(re-q)*X;this.cardFadeMap.set(N,Math.abs(re-pe)<=.005?re:pe),m=!0}}const p=Math.abs(this.visibility-_)>.002,R=Math.abs(h-this.lastScrollY)>=.5,b=s!==this.lastVpW||o!==this.lastVpH||u!==this.lastSimW||c!==this.lastSimH;if(!p&&!R&&!b&&!this.imageJustLoaded&&!m)return!1;let S=[];if(this.visibility>.004)for(let P=0;P<x.length;P++){const N=x[P],G=this.cardFadeMap.get(N)??1;if(G<=.005)continue;const Z=N.getBoundingClientRect(),re=Z.top-l;Z.bottom-l<=-24||re>=o+24||Z.width<=4||Z.height<=4||S.push({el:N,rect:Z,fade:G})}const B=S.length>0;if(!B&&!this.lastHadVisibleCards&&!p&&!b&&!this.imageJustLoaded&&!m)return this.lastScrollY=h,!1;this.lastHadVisibleCards=B;for(let P=0;P<x.length;P++){const G=x[P].querySelector("img");G&&!G.dataset.apertureBound&&(G.dataset.apertureBound="1",G.complete||G.addEventListener("load",()=>{this.imageJustLoaded=!0},{once:!0}))}this.lastScrollY=h,this.lastVpW=s,this.lastVpH=o,this.imageJustLoaded=!1,(u!==this.lastSimW||c!==this.lastSimH)&&(this.canvas.width=u,this.canvas.height=c,this.lastSimW=u,this.lastSimH=c,this.texture.dispose(),this.texture=new $r(this.canvas),this.texture.wrapS=xt,this.texture.wrapT=xt,this.texture.minFilter=mt,this.texture.magFilter=mt,this.texture.generateMipmaps=!1);const C=this.ctx,I=u/s,z=c/o,E=this.visibility;if(C.globalAlpha=1,C.fillStyle="#ffffff",C.fillRect(0,0,u,c),E>.004){for(let Z=0;Z<S.length;Z++){const{el:re,rect:q,fade:se}=S[Z],X=(q.left-a)*I,pe=(q.top-l)*z,ae=Math.max(1,q.width*I),le=Math.max(1,q.height*z),ge=re.dataset.projectAperture||"",Ee=re.querySelector("img"),te=Ee&&Ee.complete&&Ee.naturalWidth>0?Ee:(()=>{const ie=this.getOrLoadImage(ge);return ie&&ie.loaded&&ie.img.naturalWidth>0?ie.img:null})();te?(C.save(),C.globalAlpha=.94*E*se,this.drawCoverImage(C,te,X,pe,ae,le),C.restore()):(C.fillStyle="#ffffff",C.fillRect(X,pe,ae,le))}const P=Math.max(3,Math.round(c*.015)),N=C.createLinearGradient(0,0,0,P);N.addColorStop(0,"rgba(255, 255, 255, 1)"),N.addColorStop(.45,"rgba(255, 255, 255, 0.2)"),N.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=N,C.fillRect(0,0,u,P);const G=C.createLinearGradient(0,c-P,0,c);G.addColorStop(0,"rgba(255, 255, 255, 0)"),G.addColorStop(.55,"rgba(255, 255, 255, 0.2)"),G.addColorStop(1,"rgba(255, 255, 255, 1)"),C.fillStyle=G,C.fillRect(0,c-P,u,P)}return e.updateDynamicApertureTexture(this.texture,E*.42),!0}dispose(){this.texture.dispose(),this.imageCache.clear(),this.cardFadeMap.clear(),this.cachedCardEls=null}}const Yu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,lS=`
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
`,cS=`
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
`;class uS{constructor(e={}){j(this,"size");j(this,"dt");j(this,"dx");j(this,"pmlWidthRatio");j(this,"pmlSigmaMax");j(this,"rtPing");j(this,"rtPong");j(this,"rtOutput");j(this,"quadScene");j(this,"quadCamera");j(this,"updateMaterial");j(this,"outputMaterial");j(this,"quadMesh");j(this,"rtMaterial");j(this,"materialScene");j(this,"materialMesh");this.size=e.size??256,this.dx=e.dx??1;const t=Math.min(e.cfl??.35,.707);this.dt=t*this.dx,this.pmlWidthRatio=e.pmlWidthRatio??.12,this.pmlSigmaMax=e.pmlSigmaMax??28;const i={minFilter:Ye,magFilter:Ye,format:pt,type:Et,stencilBuffer:!1,depthBuffer:!1};this.rtPing=new Ke(this.size,this.size,i),this.rtPong=new Ke(this.size,this.size,i),this.rtOutput=new Ke(this.size,this.size,i),this.rtMaterial=new Ke(this.size,this.size,i),this.quadScene=new yr,this.quadCamera=new wr(-1,1,1,-1,0,1),this.updateMaterial=new Mt({vertexShader:Yu,fragmentShader:lS,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_opticalSrcTex:{value:null},u_hasMaterialTex:{value:!1},u_hasOpticalSrcTex:{value:!1},u_texelSize:{value:new He(1/this.size,1/this.size)},u_dt:{value:this.dt},u_dx:{value:this.dx},u_time:{value:0},u_pmlWidth:{value:this.pmlWidthRatio},u_pmlSigmaMax:{value:this.pmlSigmaMax},u_sourceType:{value:1},u_sourceFreq:{value:20},u_sourceAmp:{value:.2},u_mousePos:{value:new He(0,0)},u_mouseDown:{value:0}},depthTest:!1,depthWrite:!1}),this.outputMaterial=new Mt({vertexShader:Yu,fragmentShader:cS,uniforms:{u_fieldTex:{value:null},u_materialTex:{value:null},u_hasMaterialTex:{value:!1},u_outputMode:{value:1}},depthTest:!1,depthWrite:!1}),this.quadMesh=new Xt(new _i(2,2),this.updateMaterial),this.quadScene.add(this.quadMesh),this.materialScene=new yr,this.materialMesh=new Xt(new _i(2,2)),this.materialScene.add(this.materialMesh)}reset(e){e.setRenderTarget(this.rtPing),e.clearColor(),e.setRenderTarget(this.rtPong),e.clearColor(),e.setRenderTarget(null)}setMaterialMap(e){this.updateMaterial.uniforms.u_hasMaterialTex.value=!!e,this.updateMaterial.uniforms.u_materialTex.value=e,this.outputMaterial.uniforms.u_hasMaterialTex.value=!!e,this.outputMaterial.uniforms.u_materialTex.value=e}step(e,t){const i=t.subSteps??4,r=this.updateMaterial.uniforms;r.u_hasOpticalSrcTex.value=!!t.opticalWavefieldTex,r.u_opticalSrcTex.value=t.opticalWavefieldTex??null;let s=1;t.sourceType==="pulse"?s=2:t.sourceType==="optical_coupled"?s=3:t.sourceType==="none"&&(s=0),r.u_sourceType.value=s,r.u_sourceFreq.value=t.sourceFreq??20,r.u_sourceAmp.value=t.sourceAmp??.2,t.mouse&&(r.u_mousePos.value.set(t.mouse.x,t.mouse.y),r.u_mouseDown.value=t.mouse.isDown?1:0),this.quadMesh.material=this.updateMaterial;let o=this.rtPing,a=this.rtPong;for(let l=0;l<i;l++){r.u_fieldTex.value=o.texture,r.u_time.value=t.elapsed+l*(this.dt*.02),e.setRenderTarget(a),e.render(this.quadScene,this.quadCamera);const u=o;o=a,a=u}return this.rtPing=o,this.rtPong=a,e.setRenderTarget(null),o}renderOutput(e,t=1){return this.quadMesh.material=this.outputMaterial,this.outputMaterial.uniforms.u_fieldTex.value=this.rtPing.texture,this.outputMaterial.uniforms.u_outputMode.value=t,e.setRenderTarget(this.rtOutput),e.render(this.quadScene,this.quadCamera),e.setRenderTarget(null),this.rtOutput}dispose(){this.rtPing.dispose(),this.rtPong.dispose(),this.rtOutput.dispose(),this.rtMaterial.dispose(),this.updateMaterial.dispose(),this.outputMaterial.dispose(),this.quadMesh.geometry.dispose()}}function Ku(n,e=256,t=100){const i=new VM(e),r=i.benchmark(n,t);return i.dispose(),r}function $u(n,e=256,t=200){const i=new uS({size:e,cfl:.35,pmlWidthRatio:.12});i.reset(n),i.step(n,{subSteps:4,elapsed:.01,sourceType:"continuous",sourceFreq:20,sourceAmp:.2});const r=n.getContext();r.finish();const s=performance.now(),o=10,a=t/o;for(let _=0;_<a;_++)i.step(n,{subSteps:o,elapsed:_*o*.01,sourceType:"continuous",sourceFreq:20,sourceAmp:.2});r.finish();const u=performance.now()-s,c=u/t,d=e*e*t/(u*1e3),f=!isNaN(c)&&c>0;return i.dispose(),{size:e,totalSteps:t,totalMs:u,avgStepMs:c,throughputMCyclesPerSec:d,isCourantStable:f}}function fS(n){const e=Ku(n,256,120),t=Ku(n,512,60),i=$u(n,256,200),r=$u(n,512,100);return{fft:{size256:e,size512:t},fdtd:{size256:i,size512:r},timestamp:new Date().toISOString()}}const hS=Lf({__name:"FourierContinuumCanvas",props:{modeIndex:{default:0},wavelength:{default:Qe[1].wavelength},propagationZ:{default:Qe[1].propagationZ},phaseCoupling:{default:Qe[1].phaseCoupling},phaseCouplingIn:{},phaseCouplingOut:{},refractiveIndex:{default:Qe[1].refractiveIndex},materialAbsorption:{default:Qe[1].materialAbsorption},exposure:{default:Qe[1].exposure},ambient:{default:Qe[1].ambient},refractionStrength:{default:Qe[1].refractionStrength},reflectionGloss:{default:Qe[1].reflectionGloss},pondWaveAmp:{default:Qe[1].pondWaveAmp},pondWaveK0:{default:Qe[1].pondWaveK0},pondWaveSpeed:{default:Qe[1].pondWaveSpeed},pondWavePower:{default:Qe[1].pondWavePower},imageUrl:{default:"white-square"},fullscreen:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},dynamicPortfolioAperture:{type:Boolean,default:!1},pureWaterMode:{type:Boolean,default:!1},fadeAperture:{type:Boolean,default:!1}},emits:["telemetry","perf"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=vn(null),o=vn(null);let a=null,l=null,u=null;function c(w){const U=w.detail,F=!!(U!=null&&U.active),Y=(U==null?void 0:U.el)??null,W=(U==null?void 0:U.exclusive)!==!1;if(Y){const v=`hover-${Y.dataset.projectAperture||"card"}`;F&&W&&Vr.clearByPrefix("hover-",v),Vr.upsert({id:v,el:Y,emerge:F?1:0,shapePower:2.8,featherWidth:.28,waveRimCoupling:1,fillMode:"texture",img:Y.querySelector("img")})}else F||Vr.clearByPrefix("hover-")}function h(){l&&l.markDirty()}let d=null;function f(){if(s.value){const w=s.value.getBoundingClientRect();if(w.width>0&&w.height>0)return d={left:w.left,top:w.top,width:w.width,height:w.height},d}return d={left:0,top:0,width:window.innerWidth,height:window.innerHeight},d}function _(){return d??f()}function x(w){if(!a)return;const U=w.detail;if(!U)return;const F=f(),Y=Math.max(1,F.width),W=Math.max(1,F.height),v=Math.min(Math.max((U.left-F.left)/Y,0),1),g=Math.min(Math.max((U.right-F.left)/Y,0),1),D=Math.min(Math.max(1-(U.top-F.top)/W,0),1),O=Math.min(Math.max(1-(U.bottom-F.top)/W,0),1),$=.018*Math.min(1.6,Math.max(.55,900/Math.max(240,W))),K=.014;a.addPerturbations([{x0:v,y0:D,x1:g,y1:D,radius:$,strength:K},{x0:v,y0:O,x1:g,y1:O,radius:$,strength:K},{x0:v,y0:O,x1:v,y1:D,radius:$,strength:K*.85},{x0:g,y0:O,x1:g,y1:D,radius:$,strength:K*.85}])}let m=performance.now(),p=0,R=performance.now(),b=0;vt(()=>i.modeIndex,w=>{a&&a.setMode(w)}),vt(()=>i.wavelength,w=>{a&&w!==void 0&&(a.wavelength=w)}),vt(()=>i.propagationZ,w=>{a&&w!==void 0&&(a.deltaZ=w)}),vt(()=>i.phaseCoupling,w=>{a&&w!==void 0&&(a.phaseCoupling=w)}),vt(()=>i.phaseCouplingIn,w=>{a&&w!==void 0&&(a.phaseCouplingIn=w)}),vt(()=>i.phaseCouplingOut,w=>{a&&w!==void 0&&(a.phaseCouplingOut=w)}),vt(()=>i.refractiveIndex,w=>{a&&w!==void 0&&(a.refractiveIndex=w)}),vt(()=>i.materialAbsorption,w=>{a&&w!==void 0&&(a.materialAbsorption=w)}),vt(()=>i.exposure,w=>{a&&w!==void 0&&(a.exposure=w)}),vt(()=>i.ambient,w=>{a&&w!==void 0&&(a.ambient=w)}),vt(()=>i.refractionStrength,w=>{a&&w!==void 0&&(a.refractionStrength=w)}),vt(()=>i.reflectionGloss,w=>{a&&w!==void 0&&(a.reflectionGloss=w)}),vt(()=>i.pondWaveAmp,w=>{a&&w!==void 0&&(a.pondWaveAmp=w)}),vt(()=>i.pondWaveK0,w=>{a&&w!==void 0&&(a.pondWaveK0=w)}),vt(()=>i.pondWaveSpeed,w=>{a&&w!==void 0&&(a.pondWaveSpeed=w)}),vt(()=>i.pondWavePower,w=>{a&&w!==void 0&&(a.pondWavePower=w)}),vt(()=>i.imageUrl,w=>{a&&w&&a.loadTexture(w)});function S(w,U){const F=_(),Y=Math.min(Math.max((w-F.left)/Math.max(1,F.width),0),1),W=Math.min(Math.max(1-(U-F.top)/Math.max(1,F.height),0),1);return{u:Y,v:W}}const B=new Map,C=new Map;let I=!1,z=null;function E(){return Math.min(2.25,Math.max(.45,900/Math.max(240,window.innerHeight)))}function M(w){const U=w;return!U||typeof U.closest!="function"?!1:!!U.closest('a, button, input, select, textarea, label, [role="button"], .lab-panel, .lab-controls, .cover-menu--item, .contact-table--item, .project-item, .cover-logo, .logo, .floating-logo-btn')}function P(w){I=!0,z={x:w.clientX,y:w.clientY,validTarget:!M(w.target)};const{u:U,v:F}=S(w.clientX,w.clientY);B.set("mouse",{prevU:U,prevV:F,currU:U,currV:F,targetU:U,targetV:F,pressure:1,isTouch:!1,active:!0}),a&&(a.addPerturbation(U,F,U,F,.05*E(),.85),a.mouse.x=U*2-1,a.mouse.y=F*2-1,a.mouse.isDown=!0)}function N(w){const{u:U,v:F}=S(w.clientX,w.clientY),Y=B.get("mouse");Y?(Y.targetU=U,Y.targetV=F,Y.pressure=I?1:.85,Y.active=!0):B.set("mouse",{prevU:U,prevV:F,currU:U,currV:F,targetU:U,targetV:F,pressure:I?1:.85,isTouch:!1,active:!0}),a&&(a.mouse.x=U*2-1,a.mouse.y=F*2-1,a.mouse.isDown=I)}function G(w,U){if(!a)return;const F=i.pureWaterMode?a.hitTestLotusPad(w,U):-1;F>=0?(a.nudgeLotusPad(F),Lm("none")):a.dropFoodPellet(w,U)}function Z(w){var F;I=!1;const U=B.get("mouse");if(U&&(U.pressure=.85),a&&(a.mouse.isDown=!1),a&&z&&z.validTarget&&!M(w.target)&&w.button===0&&!((F=window.getSelection())!=null&&F.toString())&&Math.hypot(w.clientX-z.x,w.clientY-z.y)<10){const{u:Y,v:W}=S(w.clientX,w.clientY);G(Y,W)}z=null}function re(w){if(M(w.target))return;const U=E();for(let F=0;F<w.changedTouches.length;F++){const Y=w.changedTouches[F];C.set(Y.identifier,{x:Y.clientX,y:Y.clientY});const{u:W,v}=S(Y.clientX,Y.clientY);a&&a.addPerturbation(W,v,W,v,.05*U,.85)}}function q(w){if(M(w.target)){for(let U=0;U<w.changedTouches.length;U++)C.delete(w.changedTouches[U].identifier);return}for(let U=0;U<w.changedTouches.length;U++){const F=w.changedTouches[U],Y=C.get(F.identifier);if(C.delete(F.identifier),Y&&a&&Math.hypot(F.clientX-Y.x,F.clientY-Y.y)<12){const{u:W,v}=S(F.clientX,F.clientY);a.dropFoodPellet(W,v)}}}function se(w){if(M(w.target))return;const U=E();for(let F=0;F<w.changedTouches.length;F++){const Y=w.changedTouches[F];C.set(Y.identifier,{x:Y.clientX,y:Y.clientY});const{u:W,v}=S(Y.clientX,Y.clientY);B.set(Y.identifier,{prevU:W,prevV:v,currU:W,currV:v,targetU:W,targetV:v,pressure:Y.force>0?Y.force:1,isTouch:!0,active:!0}),a&&(a.addPerturbation(W,v,W,v,.05*U,.85),a.mouse.x=W*2-1,a.mouse.y=v*2-1,a.mouse.isDown=!0)}}function X(w){if(!M(w.target)){w.cancelable&&w.preventDefault();for(let U=0;U<w.touches.length;U++){const F=w.touches[U],{u:Y,v:W}=S(F.clientX,F.clientY),v=B.get(F.identifier);v?(v.targetU=Y,v.targetV=W,v.pressure=F.force>0?F.force:v.pressure,v.active=!0):B.set(F.identifier,{prevU:Y,prevV:W,currU:Y,currV:W,targetU:Y,targetV:W,pressure:F.force>0?F.force:1,isTouch:!0,active:!0}),U===0&&a&&(a.mouse.x=Y*2-1,a.mouse.y=W*2-1,a.mouse.isDown=!0)}}}function pe(w){for(let U=0;U<w.changedTouches.length;U++){const F=w.changedTouches[U],Y=C.get(F.identifier);if(C.delete(F.identifier),B.delete(F.identifier),Y&&a&&!M(w.target)&&Math.hypot(F.clientX-Y.x,F.clientY-Y.y)<12){const{u:W,v}=S(F.clientX,F.clientY);G(W,v)}}w.touches.length===0&&a&&(a.mouse.isDown=!1)}function ae(w){for(let U=0;U<w.changedTouches.length;U++){const F=w.changedTouches[U].identifier;C.delete(F),B.delete(F)}w.touches.length===0&&a&&(a.mouse.isDown=!1)}let le=0,ge=0,Ee=0,te=!1,ie=null;function Se(){if(!a)return;const w=f(),U=Math.max(64,Math.round(w.width)),F=Math.max(64,Math.round(w.height));U===ge&&F===Ee||(ge=U,Ee=F,a.resize(U,F))}function de(){te||(te=!0,requestAnimationFrame(()=>{Se(),te=!1}))}function De(w){if(u=requestAnimationFrame(De),w-m<14.5)return;const U=Math.min((w-m)/1e3,.1),F=w/1e3;if(m=w,a){if(B.size>0){const g=a.width/Math.max(1,a.height),D=[];for(const O of B.values()){O.isTouch?(O.currU=O.targetU,O.currV=O.targetV):(O.currU+=(O.targetU-O.currU)*.45,O.currV+=(O.targetV-O.currV)*.45);const $=(O.currU-O.prevU)*g,K=O.currV-O.prevV,fe=Math.sqrt($*$+K*K);if(fe>1e-4||O.isTouch&&O.active||I){const oe=(.042+Math.min(fe*.15,.04))*E(),Ue=(O.isTouch||I?.75:.6)*Math.min(1,.4+fe*8)*O.pressure;D.push({x0:O.prevU,y0:O.prevV,x1:O.currU,y1:O.currV,radius:oe,strength:Ue})}O.prevU=O.currU,O.prevV=O.currV}D.length>0&&a.addPerturbations(D)}if(i.dynamicPortfolioAperture&&l){l.sync(a,U,i.pureWaterMode||i.fadeAperture);const g=_(),D=Vr.step(U,i.pureWaterMode,8),O=[],$=[];if(g.width>0&&g.height>0)for(let K=0;K<D.length;K++){const fe=D[K],oe=fe.rect;if(oe.width<=4||oe.height<=4||oe.top+oe.height<g.top-120||oe.top>g.top+g.height+120)continue;const me=(oe.left-g.left)/g.width,Ue=(oe.left+oe.width-g.left)/g.width,he=1-(oe.top+oe.height-g.top)/g.height,ve=1-(oe.top-g.top)/g.height;O.push({uCenter:(me+Ue)*.5,vCenter:(he+ve)*.5,rxUv:(Ue-me)*.5,ryUv:(ve-he)*.5,strength:fe.emerge*fe.plateauStrength,emerge:fe.emerge,shapePower:fe.shapePower,featherWidth:fe.featherWidth}),$.push({img:fe.img,uMin:me,vMin:he,uMax:Ue,vMax:ve,emerge:fe.emerge,boxAspect:oe.width/oe.height,fillMode:fe.fillMode,shapePower:fe.shapePower,featherWidth:fe.featherWidth,waveRimCoupling:fe.waveRimCoupling})}a.setCardIslands(O),a.setActiveCards($)}const Y=performance.now();a.update(U,F);const W=performance.now()-Y;p++,b+=W;const v=w-R;if(v>=400){const g=Math.round(p*1e3/v),D=b/p;r("perf",{fps:g,frameMs:Number(D.toFixed(2))}),p=0,b=0,R=w}w-le>100&&(r("telemetry",{...a.telemetry}),le=w)}}let Ae=!1,Ne=!1;function lt(){Ne||typeof window>"u"||(Ne=!0,window.addEventListener("touchstart",re,{passive:!0}),window.addEventListener("touchend",q,{passive:!0}))}function A(){!Ne||typeof window>"u"||(Ne=!1,window.removeEventListener("touchstart",re),window.removeEventListener("touchend",q))}function L(){A(),!(Ae||typeof window>"u")&&(Ae=!0,window.addEventListener("touchstart",se,{passive:!0}),window.addEventListener("touchmove",X,{passive:!1}),window.addEventListener("touchend",pe,{passive:!0}),window.addEventListener("touchcancel",ae,{passive:!0}))}function T(){!Ae||typeof window>"u"||(Ae=!1,window.removeEventListener("touchstart",se),window.removeEventListener("touchmove",X),window.removeEventListener("touchend",pe),window.removeEventListener("touchcancel",ae),B.clear())}vt(()=>i.interactive,w=>{w?L():(T(),lt())});function ce(w,U){}return e({getEngine:()=>a,setPmlSides:(w,U,F,Y)=>{a&&a.setPmlSides(w,U,F,Y)},addPerturbation:(w,U,F,Y,W,v)=>{a&&a.addPerturbation(w,U,F,Y,W,v)},dropFoodPellet:(w,U)=>{a&&a.dropFoodPellet(w,U)},addScrollWave:ce}),Gl(()=>{o.value&&(a=new sS(o.value),a.wavelength=i.wavelength,a.deltaZ=i.propagationZ,a.phaseCoupling=i.phaseCoupling??Qe[1].phaseCoupling,a.refractiveIndex=i.refractiveIndex,a.materialAbsorption=i.materialAbsorption,a.exposure=i.exposure,a.ambient=i.ambient,a.refractionStrength=i.refractionStrength,a.reflectionGloss=i.reflectionGloss,a.pondWaveAmp=i.pondWaveAmp,a.pondWaveK0=i.pondWaveK0,a.pondWaveSpeed=i.pondWaveSpeed,a.pondWavePower=i.pondWavePower,a.setMode(i.modeIndex),i.imageUrl&&a.loadTexture(i.imageUrl),Se(),i.dynamicPortfolioAperture&&(l=new oS(a.width,a.height),l.sync(a,.016,i.pureWaterMode),window.addEventListener("pond-card-ripple",x),window.addEventListener("pond-aperture-dirty",h),window.addEventListener("pond-hover-optics",c)),typeof window<"u"&&(window.__FOURIER_ENGINE__=a,window.__RUN_BENCHMARK__=()=>fS(a.renderer)),typeof ResizeObserver<"u"&&s.value&&(ie=new ResizeObserver(w=>{var F;const U=(F=w[0])==null?void 0:F.contentRect;U&&U.width>0&&U.height>0&&(d={left:0,top:0,width:U.width,height:U.height}),de()}),ie.observe(s.value)),window.addEventListener("mousedown",P),window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("mouseup",Z),window.addEventListener("resize",de),i.interactive?L():lt(),u=requestAnimationFrame(De))}),Aa(()=>{u&&cancelAnimationFrame(u),ie&&(ie.disconnect(),ie=null),window.removeEventListener("mousedown",P),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",Z),window.removeEventListener("resize",de),window.removeEventListener("pond-card-ripple",x),window.removeEventListener("pond-aperture-dirty",h),window.removeEventListener("pond-hover-optics",c),l&&(l.dispose(),l=null),T(),A(),a&&(a.dispose(),a=null)}),(w,U)=>(Qf(),Up("div",{ref_key:"containerRef",ref:s,class:ya(["fourier-canvas-container",{"is-fullscreen":n.fullscreen,"is-interactive":n.interactive}])},[Wl("canvas",{ref_key:"canvasRef",ref:o,class:"fourier-gl-canvas"},null,512)],2))}}),PS=Dm(hS,[["__scopeId","data-v-03274606"]]);export{lh as A,MS as B,Op as C,bS as D,ES as E,Tn as F,ch as G,Lp as H,zd as I,AS as J,PS as K,mS as L,CS as M,yS as N,Qe as O,RS as P,pS as Q,xS as R,vS as T,Dm as _,Qf as a,Wl as b,Up as c,Lf as d,_S as e,Aa as f,gS as g,SS as h,TS as i,Pl as j,Pt as k,Np as l,Im as m,ya as n,Gl as o,wS as p,Yp as q,vn as r,Lm as s,sd as t,Cd as u,Um as v,vt as w,Nd as x,Vr as y,Fm as z};
