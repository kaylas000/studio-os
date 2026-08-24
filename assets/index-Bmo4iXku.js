var u1=Object.defineProperty;var d1=(n,e,t)=>e in n?u1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Vu=(n,e,t)=>d1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var s_={exports:{}},pu={},a_={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),f1=Symbol.for("react.portal"),h1=Symbol.for("react.fragment"),p1=Symbol.for("react.strict_mode"),m1=Symbol.for("react.profiler"),g1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),x1=Symbol.for("react.suspense"),y1=Symbol.for("react.memo"),S1=Symbol.for("react.lazy"),Tm=Symbol.iterator;function w1(n){return n===null||typeof n!="object"?null:(n=Tm&&n[Tm]||n["@@iterator"],typeof n=="function"?n:null)}var o_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l_=Object.assign,c_={};function ja(n,e,t){this.props=n,this.context=e,this.refs=c_,this.updater=t||o_}ja.prototype.isReactComponent={};ja.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ja.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function u_(){}u_.prototype=ja.prototype;function Hh(n,e,t){this.props=n,this.context=e,this.refs=c_,this.updater=t||o_}var Gh=Hh.prototype=new u_;Gh.constructor=Hh;l_(Gh,ja.prototype);Gh.isPureReactComponent=!0;var Am=Array.isArray,d_=Object.prototype.hasOwnProperty,Wh={current:null},f_={key:!0,ref:!0,__self:!0,__source:!0};function h_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)d_.call(e,i)&&!f_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:il,type:n,key:s,ref:a,props:r,_owner:Wh.current}}function M1(n,e){return{$$typeof:il,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Xh(n){return typeof n=="object"&&n!==null&&n.$$typeof===il}function b1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Cm=/\/+/g;function Hu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?b1(""+n.key):e.toString(36)}function ac(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case il:case f1:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Hu(a,0):i,Am(r)?(t="",n!=null&&(t=n.replace(Cm,"$&/")+"/"),ac(r,e,t,"",function(c){return c})):r!=null&&(Xh(r)&&(r=M1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Cm,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Am(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Hu(s,o);a+=ac(s,e,t,l,r)}else if(l=w1(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Hu(s,o++),a+=ac(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function _l(n,e,t){if(n==null)return n;var i=[],r=0;return ac(n,i,"","",function(s){return e.call(t,s,r++)}),i}function E1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},oc={transition:null},T1={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Wh};function p_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:_l,forEach:function(n,e,t){_l(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return _l(n,function(){e++}),e},toArray:function(n){return _l(n,function(e){return e})||[]},only:function(n){if(!Xh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=ja;Ye.Fragment=h1;Ye.Profiler=m1;Ye.PureComponent=Hh;Ye.StrictMode=p1;Ye.Suspense=x1;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;Ye.act=p_;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=l_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)d_.call(e,l)&&!f_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:il,type:n.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(n){return n={$$typeof:_1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:g1,_context:n},n.Consumer=n};Ye.createElement=h_;Ye.createFactory=function(n){var e=h_.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:v1,render:n}};Ye.isValidElement=Xh;Ye.lazy=function(n){return{$$typeof:S1,_payload:{_status:-1,_result:n},_init:E1}};Ye.memo=function(n,e){return{$$typeof:y1,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=oc.transition;oc.transition={};try{n()}finally{oc.transition=e}};Ye.unstable_act=p_;Ye.useCallback=function(n,e){return on.current.useCallback(n,e)};Ye.useContext=function(n){return on.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return on.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return on.current.useEffect(n,e)};Ye.useId=function(){return on.current.useId()};Ye.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return on.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};Ye.useRef=function(n){return on.current.useRef(n)};Ye.useState=function(n){return on.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return on.current.useTransition()};Ye.version="18.3.1";a_.exports=Ye;var Ie=a_.exports;const A1=r_(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=Ie,R1=Symbol.for("react.element"),P1=Symbol.for("react.fragment"),N1=Object.prototype.hasOwnProperty,L1=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function m_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)N1.call(e,i)&&!D1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R1,type:n,key:s,ref:a,props:r,_owner:L1.current}}pu.Fragment=P1;pu.jsx=m_;pu.jsxs=m_;s_.exports=pu;var y=s_.exports,Jd={},g_={exports:{}},Hn={},__={exports:{}},v_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,X){var I=G.length;G.push(X);e:for(;0<I;){var R=I-1>>>1,B=G[R];if(0<r(B,X))G[R]=X,G[I]=B,I=R;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var X=G[0],I=G.pop();if(I!==X){G[0]=I;e:for(var R=0,B=G.length,ae=B>>>1;R<ae;){var V=2*(R+1)-1,$=G[V],ce=V+1,ue=G[ce];if(0>r($,I))ce<B&&0>r(ue,$)?(G[R]=ue,G[ce]=I,R=ce):(G[R]=$,G[V]=I,R=V);else if(ce<B&&0>r(ue,I))G[R]=ue,G[ce]=I,R=ce;else break e}}return X}function r(G,X){var I=G.sortIndex-X.sortIndex;return I!==0?I:G.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(G){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=G)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function S(G){if(m=!1,x(G),!v)if(t(l)!==null)v=!0,K(T);else{var X=t(c);X!==null&&Y(S,X.startTime-G)}}function T(G,X){v=!1,m&&(m=!1,d(N),N=-1),p=!0;var I=h;try{for(x(X),f=t(l);f!==null&&(!(f.expirationTime>X)||G&&!F());){var R=f.callback;if(typeof R=="function"){f.callback=null,h=f.priorityLevel;var B=R(f.expirationTime<=X);X=n.unstable_now(),typeof B=="function"?f.callback=B:f===t(l)&&i(l),x(X)}else i(l);f=t(l)}if(f!==null)var ae=!0;else{var V=t(c);V!==null&&Y(S,V.startTime-X),ae=!1}return ae}finally{f=null,h=I,p=!1}}var C=!1,A=null,N=-1,w=5,E=-1;function F(){return!(n.unstable_now()-E<w)}function L(){if(A!==null){var G=n.unstable_now();E=G;var X=!0;try{X=A(!0,G)}finally{X?z():(C=!1,A=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(L)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,H=M.port2;M.port1.onmessage=L,z=function(){H.postMessage(null)}}else z=function(){g(L,0)};function K(G){A=G,C||(C=!0,z())}function Y(G,X){N=g(function(){G(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,K(T))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(G){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var I=h;h=X;try{return G()}finally{h=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var I=h;h=G;try{return X()}finally{h=I}},n.unstable_scheduleCallback=function(G,X,I){var R=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?R+I:R):I=R,G){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,G={id:u++,callback:X,priorityLevel:G,startTime:I,expirationTime:B,sortIndex:-1},I>R?(G.sortIndex=I,e(c,G),t(l)===null&&G===t(c)&&(m?(d(N),N=-1):m=!0,Y(S,I-R))):(G.sortIndex=B,e(l,G),v||p||(v=!0,K(T))),G},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(G){var X=h;return function(){var I=h;h=X;try{return G.apply(this,arguments)}finally{h=I}}}})(v_);__.exports=v_;var k1=__.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=Ie,Bn=k1;function xe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x_=new Set,No={};function As(n,e){Ma(n,e),Ma(n+"Capture",e)}function Ma(n,e){for(No[n]=e,n=0;n<e.length;n++)x_.add(e[n])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,U1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function O1(n){return ef.call(Pm,n)?!0:ef.call(Rm,n)?!1:U1.test(n)?Pm[n]=!0:(Rm[n]=!0,!1)}function F1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z1(n,e,t,i){if(e===null||typeof e>"u"||F1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var Yh=/[\-:]([a-z])/g;function qh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Yh,qh);qt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Yh,qh);qt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Yh,qh);qt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function $h(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z1(e,t,r,i)&&(t=null),i||r===null?O1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),w_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Ya(n){return n===null||typeof n!="object"?null:(n=Nm&&n[Nm]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,Gu;function co(n){if(Gu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+n}var Wu=!1;function Xu(n,e){if(!n||Wu)return"";Wu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Wu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?co(n):""}function B1(n){switch(n.tag){case 5:return co(n.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return n=Xu(n.type,!1),n;case 11:return n=Xu(n.type.render,!1),n;case 1:return n=Xu(n.type,!0),n;default:return""}}function sf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ks:return"Fragment";case Zs:return"Portal";case tf:return"Profiler";case Zh:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case S_:return(n.displayName||"Context")+".Consumer";case y_:return(n._context.displayName||"Context")+".Provider";case Kh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qh:return e=n.displayName||null,e!==null?e:sf(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return sf(n(e))}catch{}}return null}function j1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function M_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V1(n){var e=M_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function xl(n){n._valueTracker||(n._valueTracker=V1(n))}function b_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=M_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ac(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function af(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Lm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(n,e){e=e.checked,e!=null&&$h(n,"checked",e,!1)}function of(n,e){E_(n,e);var t=Dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lf(n,e.type,t):e.hasOwnProperty("defaultValue")&&lf(n,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Dm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lf(n,e,t){(e!=="number"||Ac(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var uo=Array.isArray;function da(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function cf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function km(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(xe(92));if(uo(t)){if(1<t.length)throw Error(xe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Dr(t)}}function T_(n,e){var t=Dr(e.value),i=Dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Im(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function A_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?A_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var yl,C_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Lo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H1=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(n){H1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),vo[e]=vo[n]})});function R_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||vo.hasOwnProperty(n)&&vo[n]?(""+e).trim():e+"px"}function P_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=R_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var G1=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(n,e){if(e){if(G1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function ff(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function Jh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pf=null,fa=null,ha=null;function Um(n){if(n=al(n)){if(typeof pf!="function")throw Error(xe(280));var e=n.stateNode;e&&(e=xu(e),pf(n.stateNode,n.type,e))}}function N_(n){fa?ha?ha.push(n):ha=[n]:fa=n}function L_(){if(fa){var n=fa,e=ha;if(ha=fa=null,Um(n),e)for(n=0;n<e.length;n++)Um(e[n])}}function D_(n,e){return n(e)}function k_(){}var Yu=!1;function I_(n,e,t){if(Yu)return n(e,t);Yu=!0;try{return D_(n,e,t)}finally{Yu=!1,(fa!==null||ha!==null)&&(k_(),L_())}}function Do(n,e){var t=n.stateNode;if(t===null)return null;var i=xu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(xe(231,e,typeof t));return t}var mf=!1;if($i)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){mf=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{mf=!1}function W1(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var xo=!1,Cc=null,Rc=!1,gf=null,X1={onError:function(n){xo=!0,Cc=n}};function Y1(n,e,t,i,r,s,a,o,l){xo=!1,Cc=null,W1.apply(X1,arguments)}function q1(n,e,t,i,r,s,a,o,l){if(Y1.apply(this,arguments),xo){if(xo){var c=Cc;xo=!1,Cc=null}else throw Error(xe(198));Rc||(Rc=!0,gf=c)}}function Cs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function U_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Om(n){if(Cs(n)!==n)throw Error(xe(188))}function $1(n){var e=n.alternate;if(!e){if(e=Cs(n),e===null)throw Error(xe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Om(r),n;if(s===i)return Om(r),e;s=s.sibling}throw Error(xe(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(xe(189))}}if(t.alternate!==i)throw Error(xe(190))}if(t.tag!==3)throw Error(xe(188));return t.stateNode.current===t?n:e}function O_(n){return n=$1(n),n!==null?F_(n):null}function F_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=F_(n);if(e!==null)return e;n=n.sibling}return null}var z_=Bn.unstable_scheduleCallback,Fm=Bn.unstable_cancelCallback,Z1=Bn.unstable_shouldYield,K1=Bn.unstable_requestPaint,Ct=Bn.unstable_now,Q1=Bn.unstable_getCurrentPriorityLevel,ep=Bn.unstable_ImmediatePriority,B_=Bn.unstable_UserBlockingPriority,Pc=Bn.unstable_NormalPriority,J1=Bn.unstable_LowPriority,j_=Bn.unstable_IdlePriority,mu=null,Ci=null;function eS(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(mu,n,void 0,(n.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:iS,tS=Math.log,nS=Math.LN2;function iS(n){return n>>>=0,n===0?32:31-(tS(n)/nS|0)|0}var Sl=64,wl=4194304;function fo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=fo(o):(s&=a,s!==0&&(i=fo(s)))}else a=t&~r,a!==0?i=fo(a):s!==0&&(i=fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-mi(e),r=1<<t,i|=n[t],e&=~r;return i}function rS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-mi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=rS(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function _f(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function V_(){var n=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),n}function qu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function rl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-mi(e),n[e]=t}function aS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-mi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function tp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-mi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function H_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var G_,np,W_,X_,Y_,vf=!1,Ml=[],Sr=null,wr=null,Mr=null,ko=new Map,Io=new Map,hr=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(n,e){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function $a(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=al(e),e!==null&&np(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function lS(n,e,t,i,r){switch(e){case"focusin":return Sr=$a(Sr,n,e,t,i,r),!0;case"dragenter":return wr=$a(wr,n,e,t,i,r),!0;case"mouseover":return Mr=$a(Mr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,$a(ko.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,$a(Io.get(s)||null,n,e,t,i,r)),!0}return!1}function q_(n){var e=os(n.target);if(e!==null){var t=Cs(e);if(t!==null){if(e=t.tag,e===13){if(e=U_(t),e!==null){n.blockedOn=e,Y_(n.priority,function(){W_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hf=i,t.target.dispatchEvent(i),hf=null}else return e=al(t),e!==null&&np(e),n.blockedOn=t,!1;e.shift()}return!0}function Bm(n,e,t){lc(n)&&t.delete(e)}function cS(){vf=!1,Sr!==null&&lc(Sr)&&(Sr=null),wr!==null&&lc(wr)&&(wr=null),Mr!==null&&lc(Mr)&&(Mr=null),ko.forEach(Bm),Io.forEach(Bm)}function Za(n,e){n.blockedOn===e&&(n.blockedOn=null,vf||(vf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,cS)))}function Uo(n){function e(r){return Za(r,n)}if(0<Ml.length){Za(Ml[0],n);for(var t=1;t<Ml.length;t++){var i=Ml[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Sr!==null&&Za(Sr,n),wr!==null&&Za(wr,n),Mr!==null&&Za(Mr,n),ko.forEach(e),Io.forEach(e),t=0;t<hr.length;t++)i=hr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hr.length&&(t=hr[0],t.blockedOn===null);)q_(t),t.blockedOn===null&&hr.shift()}var pa=nr.ReactCurrentBatchConfig,Lc=!0;function uS(n,e,t,i){var r=st,s=pa.transition;pa.transition=null;try{st=1,ip(n,e,t,i)}finally{st=r,pa.transition=s}}function dS(n,e,t,i){var r=st,s=pa.transition;pa.transition=null;try{st=4,ip(n,e,t,i)}finally{st=r,pa.transition=s}}function ip(n,e,t,i){if(Lc){var r=xf(n,e,t,i);if(r===null)rd(n,e,i,Dc,t),zm(n,i);else if(lS(r,n,e,t,i))i.stopPropagation();else if(zm(n,i),e&4&&-1<oS.indexOf(n)){for(;r!==null;){var s=al(r);if(s!==null&&G_(s),s=xf(n,e,t,i),s===null&&rd(n,e,i,Dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rd(n,e,i,null,t)}}var Dc=null;function xf(n,e,t,i){if(Dc=null,n=Jh(i),n=os(n),n!==null)if(e=Cs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=U_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Dc=n,null}function $_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q1()){case ep:return 1;case B_:return 4;case Pc:case J1:return 16;case j_:return 536870912;default:return 16}default:return 16}}var gr=null,rp=null,cc=null;function Z_(){if(cc)return cc;var n,e=rp,t=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return cc=r.slice(n,1<i?1-i:void 0)}function uc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bl(){return!0}function jm(){return!1}function Gn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:jm,this.isPropagationStopped=jm,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Gn(Va),sl=wt({},Va,{view:0,detail:0}),fS=Gn(sl),$u,Zu,Ka,gu=wt({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ka&&(Ka&&n.type==="mousemove"?($u=n.screenX-Ka.screenX,Zu=n.screenY-Ka.screenY):Zu=$u=0,Ka=n),$u)},movementY:function(n){return"movementY"in n?n.movementY:Zu}}),Vm=Gn(gu),hS=wt({},gu,{dataTransfer:0}),pS=Gn(hS),mS=wt({},sl,{relatedTarget:0}),Ku=Gn(mS),gS=wt({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Gn(gS),vS=wt({},Va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xS=Gn(vS),yS=wt({},Va,{data:0}),Hm=Gn(yS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=MS[n])?!!e[n]:!1}function ap(){return bS}var ES=wt({},sl,{key:function(n){if(n.key){var e=SS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=uc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(n){return n.type==="keypress"?uc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),TS=Gn(ES),AS=wt({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Gn(AS),CS=wt({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),RS=Gn(CS),PS=wt({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=Gn(PS),LS=wt({},gu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Gn(LS),kS=[9,13,27,32],op=$i&&"CompositionEvent"in window,yo=null;$i&&"documentMode"in document&&(yo=document.documentMode);var IS=$i&&"TextEvent"in window&&!yo,K_=$i&&(!op||yo&&8<yo&&11>=yo),Wm=" ",Xm=!1;function Q_(n,e){switch(n){case"keyup":return kS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function US(n,e){switch(n){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:(Xm=!0,Wm);case"textInput":return n=e.data,n===Wm&&Xm?null:n;default:return null}}function OS(n,e){if(Qs)return n==="compositionend"||!op&&Q_(n,e)?(n=Z_(),cc=rp=gr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!FS[n.type]:e==="textarea"}function ev(n,e,t,i){N_(i),e=kc(e,"onChange"),0<e.length&&(t=new sp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var So=null,Oo=null;function zS(n){dv(n,0)}function _u(n){var e=ta(n);if(b_(e))return n}function BS(n,e){if(n==="change")return e}var tv=!1;if($i){var Qu;if($i){var Ju="oninput"in document;if(!Ju){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),Ju=typeof qm.oninput=="function"}Qu=Ju}else Qu=!1;tv=Qu&&(!document.documentMode||9<document.documentMode)}function $m(){So&&(So.detachEvent("onpropertychange",nv),Oo=So=null)}function nv(n){if(n.propertyName==="value"&&_u(Oo)){var e=[];ev(e,Oo,n,Jh(n)),I_(zS,e)}}function jS(n,e,t){n==="focusin"?($m(),So=e,Oo=t,So.attachEvent("onpropertychange",nv)):n==="focusout"&&$m()}function VS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _u(Oo)}function HS(n,e){if(n==="click")return _u(e)}function GS(n,e){if(n==="input"||n==="change")return _u(e)}function WS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _i=typeof Object.is=="function"?Object.is:WS;function Fo(n,e){if(_i(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ef.call(e,r)||!_i(n[r],e[r]))return!1}return!0}function Zm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Km(n,e){var t=Zm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zm(t)}}function iv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?iv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function rv(){for(var n=window,e=Ac();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ac(n.document)}return e}function lp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function XS(n){var e=rv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&iv(t.ownerDocument.documentElement,t)){if(i!==null&&lp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Km(t,s);var a=Km(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var YS=$i&&"documentMode"in document&&11>=document.documentMode,Js=null,yf=null,wo=null,Sf=!1;function Qm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sf||Js==null||Js!==Ac(i)||(i=Js,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Fo(wo,i)||(wo=i,i=kc(yf,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Js)))}function El(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ea={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},ed={},sv={};$i&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function vu(n){if(ed[n])return ed[n];if(!ea[n])return n;var e=ea[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in sv)return ed[n]=e[t];return n}var av=vu("animationend"),ov=vu("animationiteration"),lv=vu("animationstart"),cv=vu("transitionend"),uv=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,e){uv.set(n,e),As(e,[n])}for(var td=0;td<Jm.length;td++){var nd=Jm[td],qS=nd.toLowerCase(),$S=nd[0].toUpperCase()+nd.slice(1);Br(qS,"on"+$S)}Br(av,"onAnimationEnd");Br(ov,"onAnimationIteration");Br(lv,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(cv,"onTransitionEnd");Ma("onMouseEnter",["mouseout","mouseover"]);Ma("onMouseLeave",["mouseout","mouseover"]);Ma("onPointerEnter",["pointerout","pointerover"]);Ma("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function eg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,q1(i,e,void 0,n),n.currentTarget=null}function dv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;eg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;eg(r,o,c),s=l}}}if(Rc)throw n=gf,Rc=!1,gf=null,n}function ut(n,e){var t=e[Tf];t===void 0&&(t=e[Tf]=new Set);var i=n+"__bubble";t.has(i)||(fv(e,n,2,!1),t.add(i))}function id(n,e,t){var i=0;e&&(i|=4),fv(t,n,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function zo(n){if(!n[Tl]){n[Tl]=!0,x_.forEach(function(t){t!=="selectionchange"&&(ZS.has(t)||id(t,!1,n),id(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,id("selectionchange",!1,e))}}function fv(n,e,t,i){switch($_(e)){case 1:var r=uS;break;case 4:r=dS;break;default:r=ip}t=r.bind(null,e,t,n),r=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=os(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}I_(function(){var c=s,u=Jh(t),f=[];e:{var h=uv.get(n);if(h!==void 0){var p=sp,v=n;switch(n){case"keypress":if(uc(t)===0)break e;case"keydown":case"keyup":p=TS;break;case"focusin":v="focus",p=Ku;break;case"focusout":v="blur",p=Ku;break;case"beforeblur":case"afterblur":p=Ku;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RS;break;case av:case ov:case lv:p=_S;break;case cv:p=NS;break;case"scroll":p=fS;break;case"wheel":p=DS;break;case"copy":case"cut":case"paste":p=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gm}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Do(_,d),S!=null&&m.push(Bo(_,S,x)))),g)break;_=_.return}0<m.length&&(h=new p(h,v,null,t,u),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==hf&&(v=t.relatedTarget||t.fromElement)&&(os(v)||v[Zi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?os(v):null,v!==null&&(g=Cs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(m=Vm,S="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(m=Gm,S="onPointerLeave",d="onPointerEnter",_="pointer"),g=p==null?h:ta(p),x=v==null?h:ta(v),h=new m(S,_+"leave",p,t,u),h.target=g,h.relatedTarget=x,S=null,os(u)===c&&(m=new m(d,_+"enter",v,t,u),m.target=x,m.relatedTarget=g,S=m),g=S,p&&v)t:{for(m=p,d=v,_=0,x=m;x;x=Ns(x))_++;for(x=0,S=d;S;S=Ns(S))x++;for(;0<_-x;)m=Ns(m),_--;for(;0<x-_;)d=Ns(d),x--;for(;_--;){if(m===d||d!==null&&m===d.alternate)break t;m=Ns(m),d=Ns(d)}m=null}else m=null;p!==null&&tg(f,h,p,m,!1),v!==null&&g!==null&&tg(f,g,v,m,!0)}}e:{if(h=c?ta(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=BS;else if(Ym(h))if(tv)T=GS;else{T=VS;var C=jS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=HS);if(T&&(T=T(n,c))){ev(f,T,t,u);break e}C&&C(n,h,c),n==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&lf(h,"number",h.value)}switch(C=c?ta(c):window,n){case"focusin":(Ym(C)||C.contentEditable==="true")&&(Js=C,yf=c,wo=null);break;case"focusout":wo=yf=Js=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,Qm(f,t,u);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":Qm(f,t,u)}var A;if(op)e:{switch(n){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qs?Q_(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(K_&&t.locale!=="ko"&&(Qs||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qs&&(A=Z_()):(gr=u,rp="value"in gr?gr.value:gr.textContent,Qs=!0)),C=kc(c,N),0<C.length&&(N=new Hm(N,n,null,t,u),f.push({event:N,listeners:C}),A?N.data=A:(A=J_(t),A!==null&&(N.data=A)))),(A=IS?US(n,t):OS(n,t))&&(c=kc(c,"onBeforeInput"),0<c.length&&(u=new Hm("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=A))}dv(f,e)})}function Bo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function kc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(n,t),s!=null&&i.unshift(Bo(n,s,r)),s=Do(n,e),s!=null&&i.push(Bo(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Do(t,s),l!=null&&a.unshift(Bo(t,l,o))):r||(l=Do(t,s),l!=null&&a.push(Bo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function ng(n){return(typeof n=="string"?n:""+n).replace(KS,`
`).replace(QS,"")}function Al(n,e,t){if(e=ng(e),ng(n)!==e&&t)throw Error(xe(425))}function Ic(){}var wf=null,Mf=null;function bf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,ew=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(n){return ig.resolve(null).then(n).catch(tw)}:Ef;function tw(n){setTimeout(function(){throw n})}function sd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Uo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Uo(e)}function br(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function rg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ha=Math.random().toString(36).slice(2),bi="__reactFiber$"+Ha,jo="__reactProps$"+Ha,Zi="__reactContainer$"+Ha,Tf="__reactEvents$"+Ha,nw="__reactListeners$"+Ha,iw="__reactHandles$"+Ha;function os(n){var e=n[bi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zi]||t[bi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=rg(n);n!==null;){if(t=n[bi])return t;n=rg(n)}return e}n=t,t=n.parentNode}return null}function al(n){return n=n[bi]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(xe(33))}function xu(n){return n[jo]||null}var Af=[],na=-1;function jr(n){return{current:n}}function ht(n){0>na||(n.current=Af[na],Af[na]=null,na--)}function ct(n,e){na++,Af[na]=n.current,n.current=e}var kr={},nn=jr(kr),mn=jr(!1),xs=kr;function ba(n,e){var t=n.type.contextTypes;if(!t)return kr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function gn(n){return n=n.childContextTypes,n!=null}function Uc(){ht(mn),ht(nn)}function sg(n,e,t){if(nn.current!==kr)throw Error(xe(168));ct(nn,e),ct(mn,t)}function hv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,j1(n)||"Unknown",r));return wt({},t,i)}function Oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,xs=nn.current,ct(nn,n),ct(mn,mn.current),!0}function ag(n,e,t){var i=n.stateNode;if(!i)throw Error(xe(169));t?(n=hv(n,e,xs),i.__reactInternalMemoizedMergedChildContext=n,ht(mn),ht(nn),ct(nn,n)):ht(mn),ct(mn,t)}var ji=null,yu=!1,ad=!1;function pv(n){ji===null?ji=[n]:ji.push(n)}function rw(n){yu=!0,pv(n)}function Vr(){if(!ad&&ji!==null){ad=!0;var n=0,e=st;try{var t=ji;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ji=null,yu=!1}catch(r){throw ji!==null&&(ji=ji.slice(n+1)),z_(ep,Vr),r}finally{st=e,ad=!1}}return null}var ia=[],ra=0,Fc=null,zc=0,qn=[],$n=0,ys=null,Gi=1,Wi="";function es(n,e){ia[ra++]=zc,ia[ra++]=Fc,Fc=n,zc=e}function mv(n,e,t){qn[$n++]=Gi,qn[$n++]=Wi,qn[$n++]=ys,ys=n;var i=Gi;n=Wi;var r=32-mi(i)-1;i&=~(1<<r),t+=1;var s=32-mi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Gi=1<<32-mi(e)+r|t<<r|i,Wi=s+n}else Gi=1<<s|t<<r|i,Wi=n}function cp(n){n.return!==null&&(es(n,1),mv(n,1,0))}function up(n){for(;n===Fc;)Fc=ia[--ra],ia[ra]=null,zc=ia[--ra],ia[ra]=null;for(;n===ys;)ys=qn[--$n],qn[$n]=null,Wi=qn[--$n],qn[$n]=null,Gi=qn[--$n],qn[$n]=null}var On=null,kn=null,pt=!1,fi=null;function gv(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function og(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,On=n,kn=br(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,On=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ys!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,On=n,kn=null,!0):!1;default:return!1}}function Cf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rf(n){if(pt){var e=kn;if(e){var t=e;if(!og(n,e)){if(Cf(n))throw Error(xe(418));e=br(t.nextSibling);var i=On;e&&og(n,e)?gv(i,t):(n.flags=n.flags&-4097|2,pt=!1,On=n)}}else{if(Cf(n))throw Error(xe(418));n.flags=n.flags&-4097|2,pt=!1,On=n}}}function lg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Cl(n){if(n!==On)return!1;if(!pt)return lg(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bf(n.type,n.memoizedProps)),e&&(e=kn)){if(Cf(n))throw _v(),Error(xe(418));for(;e;)gv(n,e),e=br(e.nextSibling)}if(lg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(xe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=br(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=On?br(n.stateNode.nextSibling):null;return!0}function _v(){for(var n=kn;n;)n=br(n.nextSibling)}function Ea(){kn=On=null,pt=!1}function dp(n){fi===null?fi=[n]:fi.push(n)}var sw=nr.ReactCurrentBatchConfig;function Qa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(xe(309));var i=t.stateNode}if(!i)throw Error(xe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(xe(284));if(!t._owner)throw Error(xe(290,n))}return n}function Rl(n,e){throw n=Object.prototype.toString.call(e),Error(xe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function cg(n){var e=n._init;return e(n._payload)}function vv(n){function e(d,_){if(n){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Cr(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,_,x,S){return _===null||_.tag!==6?(_=hd(x,d.mode,S),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,S){var T=x.type;return T===Ks?u(d,_,x.props.children,S,x.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&cg(T)===_.type)?(S=r(_,x.props),S.ref=Qa(d,_,x),S.return=d,S):(S=_c(x.type,x.key,x.props,null,d.mode,S),S.ref=Qa(d,_,x),S.return=d,S)}function c(d,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=pd(x,d.mode,S),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function u(d,_,x,S,T){return _===null||_.tag!==7?(_=ps(x,d.mode,S,T),_.return=d,_):(_=r(_,x),_.return=d,_)}function f(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hd(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vl:return x=_c(_.type,_.key,_.props,null,d.mode,x),x.ref=Qa(d,null,_),x.return=d,x;case Zs:return _=pd(_,d.mode,x),_.return=d,_;case dr:var S=_._init;return f(d,S(_._payload),x)}if(uo(_)||Ya(_))return _=ps(_,d.mode,x,null),_.return=d,_;Rl(d,_)}return null}function h(d,_,x,S){var T=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(d,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:return x.key===T?l(d,_,x,S):null;case Zs:return x.key===T?c(d,_,x,S):null;case dr:return T=x._init,h(d,_,T(x._payload),S)}if(uo(x)||Ya(x))return T!==null?null:u(d,_,x,S,null);Rl(d,x)}return null}function p(d,_,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(_,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vl:return d=d.get(S.key===null?x:S.key)||null,l(_,d,S,T);case Zs:return d=d.get(S.key===null?x:S.key)||null,c(_,d,S,T);case dr:var C=S._init;return p(d,_,x,C(S._payload),T)}if(uo(S)||Ya(S))return d=d.get(x)||null,u(_,d,S,T,null);Rl(_,S)}return null}function v(d,_,x,S){for(var T=null,C=null,A=_,N=_=0,w=null;A!==null&&N<x.length;N++){A.index>N?(w=A,A=null):w=A.sibling;var E=h(d,A,x[N],S);if(E===null){A===null&&(A=w);break}n&&A&&E.alternate===null&&e(d,A),_=s(E,_,N),C===null?T=E:C.sibling=E,C=E,A=w}if(N===x.length)return t(d,A),pt&&es(d,N),T;if(A===null){for(;N<x.length;N++)A=f(d,x[N],S),A!==null&&(_=s(A,_,N),C===null?T=A:C.sibling=A,C=A);return pt&&es(d,N),T}for(A=i(d,A);N<x.length;N++)w=p(A,d,N,x[N],S),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?N:w.key),_=s(w,_,N),C===null?T=w:C.sibling=w,C=w);return n&&A.forEach(function(F){return e(d,F)}),pt&&es(d,N),T}function m(d,_,x,S){var T=Ya(x);if(typeof T!="function")throw Error(xe(150));if(x=T.call(x),x==null)throw Error(xe(151));for(var C=T=null,A=_,N=_=0,w=null,E=x.next();A!==null&&!E.done;N++,E=x.next()){A.index>N?(w=A,A=null):w=A.sibling;var F=h(d,A,E.value,S);if(F===null){A===null&&(A=w);break}n&&A&&F.alternate===null&&e(d,A),_=s(F,_,N),C===null?T=F:C.sibling=F,C=F,A=w}if(E.done)return t(d,A),pt&&es(d,N),T;if(A===null){for(;!E.done;N++,E=x.next())E=f(d,E.value,S),E!==null&&(_=s(E,_,N),C===null?T=E:C.sibling=E,C=E);return pt&&es(d,N),T}for(A=i(d,A);!E.done;N++,E=x.next())E=p(A,d,N,E.value,S),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?N:E.key),_=s(E,_,N),C===null?T=E:C.sibling=E,C=E);return n&&A.forEach(function(L){return e(d,L)}),pt&&es(d,N),T}function g(d,_,x,S){if(typeof x=="object"&&x!==null&&x.type===Ks&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:e:{for(var T=x.key,C=_;C!==null;){if(C.key===T){if(T=x.type,T===Ks){if(C.tag===7){t(d,C.sibling),_=r(C,x.props.children),_.return=d,d=_;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&cg(T)===C.type){t(d,C.sibling),_=r(C,x.props),_.ref=Qa(d,C,x),_.return=d,d=_;break e}t(d,C);break}else e(d,C);C=C.sibling}x.type===Ks?(_=ps(x.props.children,d.mode,S,x.key),_.return=d,d=_):(S=_c(x.type,x.key,x.props,null,d.mode,S),S.ref=Qa(d,_,x),S.return=d,d=S)}return a(d);case Zs:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=pd(x,d.mode,S),_.return=d,d=_}return a(d);case dr:return C=x._init,g(d,_,C(x._payload),S)}if(uo(x))return v(d,_,x,S);if(Ya(x))return m(d,_,x,S);Rl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,x),_.return=d,d=_):(t(d,_),_=hd(x,d.mode,S),_.return=d,d=_),a(d)):t(d,_)}return g}var Ta=vv(!0),xv=vv(!1),Bc=jr(null),jc=null,sa=null,fp=null;function hp(){fp=sa=jc=null}function pp(n){var e=Bc.current;ht(Bc),n._currentValue=e}function Pf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ma(n,e){jc=n,fp=sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function ni(n){var e=n._currentValue;if(fp!==n)if(n={context:n,memoizedValue:e,next:null},sa===null){if(jc===null)throw Error(xe(308));sa=n,jc.dependencies={lanes:0,firstContext:n}}else sa=sa.next=n;return e}var ls=null;function mp(n){ls===null?ls=[n]:ls.push(n)}function yv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,mp(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ki(n,i)}function Ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fr=!1;function gp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(n,t)}return r=i.interleaved,r===null?(e.next=e,mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(n,t)}function dc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,tp(n,t)}}function ug(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Vc(n,e,t,i){var r=n.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=n,m=o;switch(h=e,p=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=wt({},f,h);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ws|=a,n.lanes=a,n.memoizedState=f}}function dg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var ol={},Ri=jr(ol),Vo=jr(ol),Ho=jr(ol);function cs(n){if(n===ol)throw Error(xe(174));return n}function _p(n,e){switch(ct(Ho,e),ct(Vo,n),ct(Ri,ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=uf(e,n)}ht(Ri),ct(Ri,e)}function Aa(){ht(Ri),ht(Vo),ht(Ho)}function wv(n){cs(Ho.current);var e=cs(Ri.current),t=uf(e,n.type);e!==t&&(ct(Vo,n),ct(Ri,t))}function vp(n){Vo.current===n&&(ht(Ri),ht(Vo))}var _t=jr(0);function Hc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function xp(){for(var n=0;n<od.length;n++)od[n]._workInProgressVersionPrimary=null;od.length=0}var fc=nr.ReactCurrentDispatcher,ld=nr.ReactCurrentBatchConfig,Ss=0,yt=null,kt=null,zt=null,Gc=!1,Mo=!1,Go=0,aw=0;function $t(){throw Error(xe(321))}function yp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_i(n[t],e[t]))return!1;return!0}function Sp(n,e,t,i,r,s){if(Ss=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=n===null||n.memoizedState===null?uw:dw,n=t(i,r),Mo){s=0;do{if(Mo=!1,Go=0,25<=s)throw Error(xe(301));s+=1,zt=kt=null,e.updateQueue=null,fc.current=fw,n=t(i,r)}while(Mo)}if(fc.current=Wc,e=kt!==null&&kt.next!==null,Ss=0,zt=kt=yt=null,Gc=!1,e)throw Error(xe(300));return n}function wp(){var n=Go!==0;return Go=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?yt.memoizedState=zt=n:zt=zt.next=n,zt}function ii(){if(kt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=zt===null?yt.memoizedState:zt.next;if(e!==null)zt=e,kt=n;else{if(n===null)throw Error(xe(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},zt===null?yt.memoizedState=zt=n:zt=zt.next=n}return zt}function Wo(n,e){return typeof e=="function"?e(n):e}function cd(n){var e=ii(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ss&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,yt.lanes|=u,ws|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,_i(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,yt.lanes|=s,ws|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ud(n){var e=ii(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);_i(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mv(){}function bv(n,e){var t=yt,i=ii(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Mp(Av.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(t.flags|=2048,Xo(9,Tv.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(xe(349));Ss&30||Ev(t,e,r)}return r}function Ev(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tv(n,e,t,i){e.value=t,e.getSnapshot=i,Cv(e)&&Rv(n)}function Av(n,e,t){return t(function(){Cv(e)&&Rv(n)})}function Cv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_i(n,t)}catch{return!0}}function Rv(n){var e=Ki(n,1);e!==null&&gi(e,n,1,-1)}function fg(n){var e=yi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},e.queue=n,n=n.dispatch=cw.bind(null,yt,n),[e.memoizedState,n]}function Xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Pv(){return ii().memoizedState}function hc(n,e,t,i){var r=yi();yt.flags|=n,r.memoizedState=Xo(1|e,t,void 0,i===void 0?null:i)}function Su(n,e,t,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&yp(i,a.deps)){r.memoizedState=Xo(e,t,s,i);return}}yt.flags|=n,r.memoizedState=Xo(1|e,t,s,i)}function hg(n,e){return hc(8390656,8,n,e)}function Mp(n,e){return Su(2048,8,n,e)}function Nv(n,e){return Su(4,2,n,e)}function Lv(n,e){return Su(4,4,n,e)}function Dv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kv(n,e,t){return t=t!=null?t.concat([n]):null,Su(4,4,Dv.bind(null,e,n),t)}function bp(){}function Iv(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Uv(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ov(n,e,t){return Ss&21?(_i(t,e)||(t=V_(),yt.lanes|=t,ws|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function ow(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=ld.transition;ld.transition={};try{n(!1),e()}finally{st=t,ld.transition=i}}function Fv(){return ii().memoizedState}function lw(n,e,t){var i=Ar(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},zv(n))Bv(e,t);else if(t=yv(n,e,t,i),t!==null){var r=an();gi(t,n,i,r),jv(t,e,i)}}function cw(n,e,t){var i=Ar(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(zv(n))Bv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,_i(o,a)){var l=e.interleaved;l===null?(r.next=r,mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=yv(n,e,r,i),t!==null&&(r=an(),gi(t,n,i,r),jv(t,e,i))}}function zv(n){var e=n.alternate;return n===yt||e!==null&&e===yt}function Bv(n,e){Mo=Gc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function jv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,tp(n,t)}}var Wc={readContext:ni,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},uw={readContext:ni,useCallback:function(n,e){return yi().memoizedState=[n,e===void 0?null:e],n},useContext:ni,useEffect:hg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,hc(4194308,4,Dv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return hc(4194308,4,n,e)},useInsertionEffect:function(n,e){return hc(4,2,n,e)},useMemo:function(n,e){var t=yi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=yi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=lw.bind(null,yt,n),[i.memoizedState,n]},useRef:function(n){var e=yi();return n={current:n},e.memoizedState=n},useState:fg,useDebugValue:bp,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=fg(!1),e=n[0];return n=ow.bind(null,n[1]),yi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=yt,r=yi();if(pt){if(t===void 0)throw Error(xe(407));t=t()}else{if(t=e(),Bt===null)throw Error(xe(349));Ss&30||Ev(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,hg(Av.bind(null,i,s,n),[n]),i.flags|=2048,Xo(9,Tv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=yi(),e=Bt.identifierPrefix;if(pt){var t=Wi,i=Gi;t=(i&~(1<<32-mi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Go++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=aw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dw={readContext:ni,useCallback:Iv,useContext:ni,useEffect:Mp,useImperativeHandle:kv,useInsertionEffect:Nv,useLayoutEffect:Lv,useMemo:Uv,useReducer:cd,useRef:Pv,useState:function(){return cd(Wo)},useDebugValue:bp,useDeferredValue:function(n){var e=ii();return Ov(e,kt.memoizedState,n)},useTransition:function(){var n=cd(Wo)[0],e=ii().memoizedState;return[n,e]},useMutableSource:Mv,useSyncExternalStore:bv,useId:Fv,unstable_isNewReconciler:!1},fw={readContext:ni,useCallback:Iv,useContext:ni,useEffect:Mp,useImperativeHandle:kv,useInsertionEffect:Nv,useLayoutEffect:Lv,useMemo:Uv,useReducer:ud,useRef:Pv,useState:function(){return ud(Wo)},useDebugValue:bp,useDeferredValue:function(n){var e=ii();return kt===null?e.memoizedState=n:Ov(e,kt.memoizedState,n)},useTransition:function(){var n=ud(Wo)[0],e=ii().memoizedState;return[n,e]},useMutableSource:Mv,useSyncExternalStore:bv,useId:Fv,unstable_isNewReconciler:!1};function ui(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Nf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wu={isMounted:function(n){return(n=n._reactInternals)?Cs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=Ar(n),s=qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(gi(e,n,r,i),dc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=Ar(n),s=qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(gi(e,n,r,i),dc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=Ar(n),r=qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Er(n,r,i),e!==null&&(gi(e,n,i,t),dc(e,n,i))}};function pg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fo(t,i)||!Fo(r,s):!0}function Vv(n,e,t){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=gn(e)?xs:nn.current,i=e.contextTypes,s=(i=i!=null)?ba(n,r):kr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function mg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wu.enqueueReplaceState(e,e.state,null)}function Lf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},gp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=gn(e)?xs:nn.current,r.context=ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),Vc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ca(n,e){try{var t="",i=e;do t+=B1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function dd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Df(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function Hv(n,e,t){t=qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Yc||(Yc=!0,Hf=i),Df(n,e)},t}function Gv(n,e,t){t=qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Df(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Df(n,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function gg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new hw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Aw.bind(null,n,e,t),e.then(n,n))}function _g(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function vg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qi(-1,1),e.tag=2,Er(t,e,1))),t.lanes|=1),n)}var pw=nr.ReactCurrentOwner,pn=!1;function sn(n,e,t,i){e.child=n===null?xv(e,null,t,i):Ta(e,n.child,t,i)}function xg(n,e,t,i,r){t=t.render;var s=e.ref;return ma(e,r),i=Sp(n,e,t,i,s,r),t=wp(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qi(n,e,r)):(pt&&t&&cp(e),e.flags|=1,sn(n,e,i,r),e.child)}function yg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Wv(n,e,s,i,r)):(n=_c(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Fo,t(a,i)&&n.ref===e.ref)return Qi(n,e,r)}return e.flags|=1,n=Cr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Wv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Fo(s,i)&&n.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,Qi(n,e,r)}return kf(n,e,t,i,r)}function Xv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(oa,Nn),Nn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ct(oa,Nn),Nn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ct(oa,Nn),Nn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ct(oa,Nn),Nn|=i;return sn(n,e,r,t),e.child}function Yv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function kf(n,e,t,i,r){var s=gn(t)?xs:nn.current;return s=ba(e,s),ma(e,r),t=Sp(n,e,t,i,s,r),i=wp(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qi(n,e,r)):(pt&&i&&cp(e),e.flags|=1,sn(n,e,t,r),e.child)}function Sg(n,e,t,i,r){if(gn(t)){var s=!0;Oc(e)}else s=!1;if(ma(e,r),e.stateNode===null)pc(n,e),Vv(e,t,i),Lf(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ni(c):(c=gn(t)?xs:nn.current,c=ba(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&mg(e,a,i,c),fr=!1;var h=e.memoizedState;a.state=h,Vc(e,i,a,r),l=e.memoizedState,o!==i||h!==l||mn.current||fr?(typeof u=="function"&&(Nf(e,t,u,i),l=e.memoizedState),(o=fr||pg(e,t,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Sv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:ui(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=gn(t)?xs:nn.current,l=ba(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&mg(e,a,i,l),fr=!1,h=e.memoizedState,a.state=h,Vc(e,i,a,r);var v=e.memoizedState;o!==f||h!==v||mn.current||fr?(typeof p=="function"&&(Nf(e,t,p,i),v=e.memoizedState),(c=fr||pg(e,t,c,i,h,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return If(n,e,t,i,s,r)}function If(n,e,t,i,r,s){Yv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ag(e,t,!1),Qi(n,e,s);i=e.stateNode,pw.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Ta(e,n.child,null,s),e.child=Ta(e,null,o,s)):sn(n,e,o,s),e.memoizedState=i.state,r&&ag(e,t,!0),e.child}function qv(n){var e=n.stateNode;e.pendingContext?sg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(n,e.context,!1),_p(n,e.containerInfo)}function wg(n,e,t,i,r){return Ea(),dp(r),e.flags|=256,sn(n,e,t,i),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Of(n){return{baseLanes:n,cachePool:null,transitions:null}}function $v(n,e,t){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ct(_t,r&1),n===null)return Rf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Eu(a,i,0,null),n=ps(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Of(t),e.memoizedState=Uf,n):Ep(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return mw(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=ps(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Of(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Uf,i}return s=n.child,n=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ep(n,e){return e=Eu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Pl(n,e,t,i){return i!==null&&dp(i),Ta(e,n.child,null,t),n=Ep(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mw(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=dd(Error(xe(422))),Pl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Eu({mode:"visible",children:i.children},r,0,null),s=ps(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ta(e,n.child,null,a),e.child.memoizedState=Of(a),e.memoizedState=Uf,s);if(!(e.mode&1))return Pl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(xe(419)),i=dd(s,i,void 0),Pl(n,e,a,i)}if(o=(a&n.childLanes)!==0,pn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(n,r),gi(i,n,r,-1))}return Np(),i=dd(Error(xe(421))),Pl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Cw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,kn=br(r.nextSibling),On=e,pt=!0,fi=null,n!==null&&(qn[$n++]=Gi,qn[$n++]=Wi,qn[$n++]=ys,Gi=n.id,Wi=n.overflow,ys=e),e=Ep(e,i.children),e.flags|=4096,e)}function Mg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pf(n.return,e,t)}function fd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Zv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mg(n,t,e);else if(n.tag===19)Mg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ct(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fd(e,!0,t,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ws|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(xe(153));if(e.child!==null){for(n=e.child,t=Cr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gw(n,e,t){switch(e.tag){case 3:qv(e),Ea();break;case 5:wv(e);break;case 1:gn(e.type)&&Oc(e);break;case 4:_p(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(_t,_t.current&1),e.flags|=128,null):t&e.child.childLanes?$v(n,e,t):(ct(_t,_t.current&1),n=Qi(n,e,t),n!==null?n.sibling:null);ct(_t,_t.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Zv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Xv(n,e,t)}return Qi(n,e,t)}var Kv,Ff,Qv,Jv;Kv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ff=function(){};Qv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,cs(Ri.current);var s=null;switch(t){case"input":r=af(n,r),i=af(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=cf(n,r),i=cf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ic)}df(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ja(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function _w(n,e,t){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return gn(e.type)&&Uc(),Zt(e),null;case 3:return i=e.stateNode,Aa(),ht(mn),ht(nn),xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Cl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(Xf(fi),fi=null))),Ff(n,e),Zt(e),null;case 5:vp(e);var r=cs(Ho.current);if(t=e.type,n!==null&&e.stateNode!=null)Qv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Zt(e),null}if(n=cs(Ri.current),Cl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[bi]=e,i[jo]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ho.length;r++)ut(ho[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Lm(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":km(i,s),ut("invalid",i)}df(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,o,n),r=["children",""+o]):No.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(t){case"input":xl(i),Dm(i,s,!0);break;case"textarea":xl(i),Im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=A_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[bi]=e,n[jo]=i,Kv(n,e,!1,!1),e.stateNode=n;e:{switch(a=ff(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<ho.length;r++)ut(ho[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Lm(n,i),r=af(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":km(n,i),r=cf(n,i),ut("invalid",n);break;default:r=i}df(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?P_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Lo(n,l):typeof l=="number"&&Lo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&$h(n,s,l,a))}switch(t){case"input":xl(n),Dm(n,i,!1);break;case"textarea":xl(n),Im(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?da(n,!!i.multiple,s,!1):i.defaultValue!=null&&da(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ic)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(n&&e.stateNode!=null)Jv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(t=cs(Ho.current),cs(Ri.current),Cl(e)){if(i=e.stateNode,t=e.memoizedProps,i[bi]=e,(s=i.nodeValue!==t)&&(n=On,n!==null))switch(n.tag){case 3:Al(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[bi]=e,e.stateNode=i}return Zt(e),null;case 13:if(ht(_t),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&kn!==null&&e.mode&1&&!(e.flags&128))_v(),Ea(),e.flags|=98560,s=!1;else if(s=Cl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[bi]=e}else Ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else fi!==null&&(Xf(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||_t.current&1?It===0&&(It=3):Np())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Aa(),Ff(n,e),n===null&&zo(e.stateNode.containerInfo),Zt(e),null;case 10:return pp(e.type._context),Zt(e),null;case 17:return gn(e.type)&&Uc(),Zt(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ja(s,!1);else{if(It!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Hc(n),a!==null){for(e.flags|=128,Ja(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ct(_t,_t.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ct()>Ra&&(e.flags|=128,i=!0,Ja(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ja(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Zt(e),null}else 2*Ct()-s.renderingStartTime>Ra&&t!==1073741824&&(e.flags|=128,i=!0,Ja(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,t=_t.current,ct(_t,i?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Pp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function vw(n,e){switch(up(e),e.tag){case 1:return gn(e.type)&&Uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Aa(),ht(mn),ht(nn),xp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return vp(e),null;case 13:if(ht(_t),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Ea()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Aa(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Nl=!1,Jt=!1,xw=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function aa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Et(n,e,i)}else t.current=null}function zf(n,e,t){try{t()}catch(i){Et(n,e,i)}}var bg=!1;function yw(n,e){if(wf=Lc,n=rv(),lp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mf={focusedElem:n,selectionRange:t},Lc=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,g=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:ui(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(S){Et(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return v=bg,bg=!1,v}function bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,t,s)}r=r.next}while(r!==i)}}function Mu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ex(n){var e=n.alternate;e!==null&&(n.alternate=null,ex(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[bi],delete e[jo],delete e[Tf],delete e[nw],delete e[iw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tx(n){return n.tag===5||n.tag===3||n.tag===4}function Eg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ic));else if(i!==4&&(n=n.child,n!==null))for(jf(n,e,t),n=n.sibling;n!==null;)jf(n,e,t),n=n.sibling}function Vf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Vf(n,e,t),n=n.sibling;n!==null;)Vf(n,e,t),n=n.sibling}var Gt=null,di=!1;function rr(n,e,t){for(t=t.child;t!==null;)nx(n,e,t),t=t.sibling}function nx(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(mu,t)}catch{}switch(t.tag){case 5:Jt||aa(t,e);case 6:var i=Gt,r=di;Gt=null,rr(n,e,t),Gt=i,di=r,Gt!==null&&(di?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(di?(n=Gt,t=t.stateNode,n.nodeType===8?sd(n.parentNode,t):n.nodeType===1&&sd(n,t),Uo(n)):sd(Gt,t.stateNode));break;case 4:i=Gt,r=di,Gt=t.stateNode.containerInfo,di=!0,rr(n,e,t),Gt=i,di=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zf(t,e,a),r=r.next}while(r!==i)}rr(n,e,t);break;case 1:if(!Jt&&(aa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Et(t,e,o)}rr(n,e,t);break;case 21:rr(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,rr(n,e,t),Jt=i):rr(n,e,t);break;default:rr(n,e,t)}}function Tg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new xw),e.forEach(function(i){var r=Rw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,di=!1;break e;case 3:Gt=o.stateNode.containerInfo,di=!0;break e;case 4:Gt=o.stateNode.containerInfo,di=!0;break e}o=o.return}if(Gt===null)throw Error(xe(160));nx(s,a,r),Gt=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ix(e,n),e=e.sibling}function ix(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),xi(n),i&4){try{bo(3,n,n.return),Mu(3,n)}catch(m){Et(n,n.return,m)}try{bo(5,n,n.return)}catch(m){Et(n,n.return,m)}}break;case 1:ai(e,n),xi(n),i&512&&t!==null&&aa(t,t.return);break;case 5:if(ai(e,n),xi(n),i&512&&t!==null&&aa(t,t.return),n.flags&32){var r=n.stateNode;try{Lo(r,"")}catch(m){Et(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&E_(r,s),ff(o,a);var c=ff(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?P_(r,f):u==="dangerouslySetInnerHTML"?C_(r,f):u==="children"?Lo(r,f):$h(r,u,f,c)}switch(o){case"input":of(r,s);break;case"textarea":T_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?da(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?da(r,!!s.multiple,s.defaultValue,!0):da(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(m){Et(n,n.return,m)}}break;case 6:if(ai(e,n),xi(n),i&4){if(n.stateNode===null)throw Error(xe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Et(n,n.return,m)}}break;case 3:if(ai(e,n),xi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(m){Et(n,n.return,m)}break;case 4:ai(e,n),xi(n);break;case 13:ai(e,n),xi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cp=Ct())),i&4&&Tg(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(c=Jt)||u,ai(e,n),Jt=c):ai(e,n),xi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Pe=n,u=n.child;u!==null;){for(f=Pe=u;Pe!==null;){switch(h=Pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:aa(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){Et(i,t,m)}}break;case 5:aa(h,h.return);break;case 22:if(h.memoizedState!==null){Cg(f);continue}}p!==null?(p.return=h,Pe=p):Cg(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=R_("display",a))}catch(m){Et(n,n.return,m)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){Et(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ai(e,n),xi(n),i&4&&Tg(n);break;case 21:break;default:ai(e,n),xi(n)}}function xi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(tx(t)){var i=t;break e}t=t.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lo(r,""),i.flags&=-33);var s=Eg(n);Vf(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Eg(n);jf(n,o,a);break;default:throw Error(xe(161))}}catch(l){Et(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Sw(n,e,t){Pe=n,rx(n)}function rx(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Nl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Nl;var c=Jt;if(Nl=a,(Jt=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?Rg(r):l!==null?(l.return=a,Pe=l):Rg(r);for(;s!==null;)Pe=s,rx(s),s=s.sibling;Pe=r,Nl=o,Jt=c}Ag(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Ag(n)}}function Ag(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ui(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}dg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Jt||e.flags&512&&Bf(e)}catch(h){Et(e,e.return,h)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Cg(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Rg(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Mu(4,e)}catch(l){Et(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Bf(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{Bf(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===n){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var ww=Math.ceil,Xc=nr.ReactCurrentDispatcher,Tp=nr.ReactCurrentOwner,ti=nr.ReactCurrentBatchConfig,Qe=0,Bt=null,Dt=null,Wt=0,Nn=0,oa=jr(0),It=0,Yo=null,ws=0,bu=0,Ap=0,Eo=null,un=null,Cp=0,Ra=1/0,zi=null,Yc=!1,Hf=null,Tr=null,Ll=!1,_r=null,qc=0,To=0,Gf=null,mc=-1,gc=0;function an(){return Qe&6?Ct():mc!==-1?mc:mc=Ct()}function Ar(n){return n.mode&1?Qe&2&&Wt!==0?Wt&-Wt:sw.transition!==null?(gc===0&&(gc=V_()),gc):(n=st,n!==0||(n=window.event,n=n===void 0?16:$_(n.type)),n):1}function gi(n,e,t,i){if(50<To)throw To=0,Gf=null,Error(xe(185));rl(n,t,i),(!(Qe&2)||n!==Bt)&&(n===Bt&&(!(Qe&2)&&(bu|=t),It===4&&pr(n,Wt)),_n(n,i),t===1&&Qe===0&&!(e.mode&1)&&(Ra=Ct()+500,yu&&Vr()))}function _n(n,e){var t=n.callbackNode;sS(n,e);var i=Nc(n,n===Bt?Wt:0);if(i===0)t!==null&&Fm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Fm(t),e===1)n.tag===0?rw(Pg.bind(null,n)):pv(Pg.bind(null,n)),ew(function(){!(Qe&6)&&Vr()}),t=null;else{switch(H_(i)){case 1:t=ep;break;case 4:t=B_;break;case 16:t=Pc;break;case 536870912:t=j_;break;default:t=Pc}t=fx(t,sx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function sx(n,e){if(mc=-1,gc=0,Qe&6)throw Error(xe(327));var t=n.callbackNode;if(ga()&&n.callbackNode!==t)return null;var i=Nc(n,n===Bt?Wt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=$c(n,i);else{e=i;var r=Qe;Qe|=2;var s=ox();(Bt!==n||Wt!==e)&&(zi=null,Ra=Ct()+500,hs(n,e));do try{Ew();break}catch(o){ax(n,o)}while(!0);hp(),Xc.current=s,Qe=r,Dt!==null?e=0:(Bt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=_f(n),r!==0&&(i=r,e=Wf(n,r))),e===1)throw t=Yo,hs(n,0),pr(n,i),_n(n,Ct()),t;if(e===6)pr(n,i);else{if(r=n.current.alternate,!(i&30)&&!Mw(r)&&(e=$c(n,i),e===2&&(s=_f(n),s!==0&&(i=s,e=Wf(n,s))),e===1))throw t=Yo,hs(n,0),pr(n,i),_n(n,Ct()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:ts(n,un,zi);break;case 3:if(pr(n,i),(i&130023424)===i&&(e=Cp+500-Ct(),10<e)){if(Nc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ef(ts.bind(null,n,un,zi),e);break}ts(n,un,zi);break;case 4:if(pr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-mi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ww(i/1960))-i,10<i){n.timeoutHandle=Ef(ts.bind(null,n,un,zi),i);break}ts(n,un,zi);break;case 5:ts(n,un,zi);break;default:throw Error(xe(329))}}}return _n(n,Ct()),n.callbackNode===t?sx.bind(null,n):null}function Wf(n,e){var t=Eo;return n.current.memoizedState.isDehydrated&&(hs(n,e).flags|=256),n=$c(n,e),n!==2&&(e=un,un=t,e!==null&&Xf(e)),n}function Xf(n){un===null?un=n:un.push.apply(un,n)}function Mw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(n,e){for(e&=~Ap,e&=~bu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-mi(e),i=1<<t;n[t]=-1,e&=~i}}function Pg(n){if(Qe&6)throw Error(xe(327));ga();var e=Nc(n,0);if(!(e&1))return _n(n,Ct()),null;var t=$c(n,e);if(n.tag!==0&&t===2){var i=_f(n);i!==0&&(e=i,t=Wf(n,i))}if(t===1)throw t=Yo,hs(n,0),pr(n,e),_n(n,Ct()),t;if(t===6)throw Error(xe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ts(n,un,zi),_n(n,Ct()),null}function Rp(n,e){var t=Qe;Qe|=1;try{return n(e)}finally{Qe=t,Qe===0&&(Ra=Ct()+500,yu&&Vr())}}function Ms(n){_r!==null&&_r.tag===0&&!(Qe&6)&&ga();var e=Qe;Qe|=1;var t=ti.transition,i=st;try{if(ti.transition=null,st=1,n)return n()}finally{st=i,ti.transition=t,Qe=e,!(Qe&6)&&Vr()}}function Pp(){Nn=oa.current,ht(oa)}function hs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,JS(t)),Dt!==null)for(t=Dt.return;t!==null;){var i=t;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:Aa(),ht(mn),ht(nn),xp();break;case 5:vp(i);break;case 4:Aa();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:pp(i.type._context);break;case 22:case 23:Pp()}t=t.return}if(Bt=n,Dt=n=Cr(n.current,null),Wt=Nn=e,It=0,Yo=null,Ap=bu=ws=0,un=Eo=null,ls!==null){for(e=0;e<ls.length;e++)if(t=ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}ls=null}return n}function ax(n,e){do{var t=Dt;try{if(hp(),fc.current=Wc,Gc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gc=!1}if(Ss=0,zt=kt=yt=null,Mo=!1,Go=0,Tp.current=null,t===null||t.return===null){It=1,Yo=e,Dt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=_g(a);if(p!==null){p.flags&=-257,vg(p,a,o,s,e),p.mode&1&&gg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var m=new Set;m.add(l),e.updateQueue=m}else v.add(l);break e}else{if(!(e&1)){gg(s,c,e),Np();break e}l=Error(xe(426))}}else if(pt&&o.mode&1){var g=_g(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vg(g,a,o,s,e),dp(Ca(l,o));break e}}s=l=Ca(l,o),It!==4&&(It=2),Eo===null?Eo=[s]:Eo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Hv(s,l,e);ug(s,d);break e;case 1:o=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tr===null||!Tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Gv(s,o,e);ug(s,S);break e}}s=s.return}while(s!==null)}cx(t)}catch(T){e=T,Dt===t&&t!==null&&(Dt=t=t.return);continue}break}while(!0)}function ox(){var n=Xc.current;return Xc.current=Wc,n===null?Wc:n}function Np(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(ws&268435455)&&!(bu&268435455)||pr(Bt,Wt)}function $c(n,e){var t=Qe;Qe|=2;var i=ox();(Bt!==n||Wt!==e)&&(zi=null,hs(n,e));do try{bw();break}catch(r){ax(n,r)}while(!0);if(hp(),Qe=t,Xc.current=i,Dt!==null)throw Error(xe(261));return Bt=null,Wt=0,It}function bw(){for(;Dt!==null;)lx(Dt)}function Ew(){for(;Dt!==null&&!Z1();)lx(Dt)}function lx(n){var e=dx(n.alternate,n,Nn);n.memoizedProps=n.pendingProps,e===null?cx(n):Dt=e,Tp.current=null}function cx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=vw(t,e),t!==null){t.flags&=32767,Dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,Dt=null;return}}else if(t=_w(t,e,Nn),t!==null){Dt=t;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=n}while(e!==null);It===0&&(It=5)}function ts(n,e,t){var i=st,r=ti.transition;try{ti.transition=null,st=1,Tw(n,e,t,i)}finally{ti.transition=r,st=i}return null}function Tw(n,e,t,i){do ga();while(_r!==null);if(Qe&6)throw Error(xe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(xe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(aS(n,s),n===Bt&&(Dt=Bt=null,Wt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ll||(Ll=!0,fx(Pc,function(){return ga(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var a=st;st=1;var o=Qe;Qe|=4,Tp.current=null,yw(n,t),ix(t,n),XS(Mf),Lc=!!wf,Mf=wf=null,n.current=t,Sw(t),K1(),Qe=o,st=a,ti.transition=s}else n.current=t;if(Ll&&(Ll=!1,_r=n,qc=r),s=n.pendingLanes,s===0&&(Tr=null),eS(t.stateNode),_n(n,Ct()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yc)throw Yc=!1,n=Hf,Hf=null,n;return qc&1&&n.tag!==0&&ga(),s=n.pendingLanes,s&1?n===Gf?To++:(To=0,Gf=n):To=0,Vr(),null}function ga(){if(_r!==null){var n=H_(qc),e=ti.transition,t=st;try{if(ti.transition=null,st=16>n?16:n,_r===null)var i=!1;else{if(n=_r,_r=null,qc=0,Qe&6)throw Error(xe(331));var r=Qe;for(Qe|=4,Pe=n.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var u=Pe;switch(u.tag){case 0:case 11:case 15:bo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Pe=f;else for(;Pe!==null;){u=Pe;var h=u.sibling,p=u.return;if(ex(u),u===c){Pe=null;break}if(h!==null){h.return=p,Pe=h;break}Pe=p}}}var v=s.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var _=n.current;for(Pe=_;Pe!==null;){a=Pe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Pe=x;else e:for(a=_;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Mu(9,o)}}catch(T){Et(o,o.return,T)}if(o===a){Pe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Pe=S;break e}Pe=o.return}}if(Qe=r,Vr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(mu,n)}catch{}i=!0}return i}finally{st=t,ti.transition=e}}return!1}function Ng(n,e,t){e=Ca(t,e),e=Hv(n,e,1),n=Er(n,e,1),e=an(),n!==null&&(rl(n,1,e),_n(n,e))}function Et(n,e,t){if(n.tag===3)Ng(n,n,t);else for(;e!==null;){if(e.tag===3){Ng(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){n=Ca(t,n),n=Gv(e,n,1),e=Er(e,n,1),n=an(),e!==null&&(rl(e,1,n),_n(e,n));break}}e=e.return}}function Aw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Wt&t)===t&&(It===4||It===3&&(Wt&130023424)===Wt&&500>Ct()-Cp?hs(n,0):Ap|=t),_n(n,e)}function ux(n,e){e===0&&(n.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var t=an();n=Ki(n,e),n!==null&&(rl(n,e,t),_n(n,t))}function Cw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ux(n,t)}function Rw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),ux(n,t)}var dx;dx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,gw(n,e,t);pn=!!(n.flags&131072)}else pn=!1,pt&&e.flags&1048576&&mv(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(n,e),n=e.pendingProps;var r=ba(e,nn.current);ma(e,t),r=Sp(null,e,i,n,r,t);var s=wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Lf(e,i,n,t),e=If(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&cp(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Nw(i),n=ui(i,n),r){case 0:e=kf(null,e,i,n,t);break e;case 1:e=Sg(null,e,i,n,t);break e;case 11:e=xg(null,e,i,n,t);break e;case 14:e=yg(null,e,i,ui(i.type,n),t);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),kf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Sg(n,e,i,r,t);case 3:e:{if(qv(e),n===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sv(n,e),Vc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ca(Error(xe(423)),e),e=wg(n,e,i,t,r);break e}else if(i!==r){r=Ca(Error(xe(424)),e),e=wg(n,e,i,t,r);break e}else for(kn=br(e.stateNode.containerInfo.firstChild),On=e,pt=!0,fi=null,t=xv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ea(),i===r){e=Qi(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return wv(e),n===null&&Rf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,bf(i,r)?a=null:s!==null&&bf(i,s)&&(e.flags|=32),Yv(n,e),sn(n,e,a,t),e.child;case 6:return n===null&&Rf(e),null;case 13:return $v(n,e,t);case 4:return _p(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ta(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),xg(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Bc,i._currentValue),i._currentValue=a,s!==null)if(_i(s.value,a)){if(s.children===r.children&&!mn.current){e=Qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pf(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(xe(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Pf(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ma(e,t),r=ni(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),yg(n,e,i,r,t);case 15:return Wv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),pc(n,e),e.tag=1,gn(i)?(n=!0,Oc(e)):n=!1,ma(e,t),Vv(e,i,r),Lf(e,i,r,t),If(null,e,i,!0,n,t);case 19:return Zv(n,e,t);case 22:return Xv(n,e,t)}throw Error(xe(156,e.tag))};function fx(n,e){return z_(n,e)}function Pw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new Pw(n,e,t,i)}function Lp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nw(n){if(typeof n=="function")return Lp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Kh)return 11;if(n===Qh)return 14}return 2}function Cr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function _c(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Lp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ks:return ps(t.children,r,s,e);case Zh:a=8,r|=8;break;case tf:return n=Zn(12,t,e,r|2),n.elementType=tf,n.lanes=s,n;case nf:return n=Zn(13,t,e,r),n.elementType=nf,n.lanes=s,n;case rf:return n=Zn(19,t,e,r),n.elementType=rf,n.lanes=s,n;case w_:return Eu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y_:a=10;break e;case S_:a=9;break e;case Kh:a=11;break e;case Qh:a=14;break e;case dr:a=16,i=null;break e}throw Error(xe(130,n==null?n:typeof n,""))}return e=Zn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ps(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function Eu(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=w_,n.lanes=t,n.stateNode={isHidden:!1},n}function hd(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function pd(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Lw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dp(n,e,t,i,r,s,a,o,l){return n=new Lw(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),n}function Dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function hx(n){if(!n)return kr;n=n._reactInternals;e:{if(Cs(n)!==n||n.tag!==1)throw Error(xe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(n.tag===1){var t=n.type;if(gn(t))return hv(n,t,e)}return e}function px(n,e,t,i,r,s,a,o,l){return n=Dp(t,i,!0,n,r,s,a,o,l),n.context=hx(null),t=n.current,i=an(),r=Ar(t),s=qi(i,r),s.callback=e??null,Er(t,s,r),n.current.lanes=r,rl(n,r,i),_n(n,i),n}function Tu(n,e,t,i){var r=e.current,s=an(),a=Ar(r);return t=hx(t),e.context===null?e.context=t:e.pendingContext=t,e=qi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Er(r,e,a),n!==null&&(gi(n,r,a,s),dc(n,r,a)),a}function Zc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function kp(n,e){Lg(n,e),(n=n.alternate)&&Lg(n,e)}function kw(){return null}var mx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ip(n){this._internalRoot=n}Au.prototype.render=Ip.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(xe(409));Tu(n,e,null,null)};Au.prototype.unmount=Ip.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ms(function(){Tu(null,n,null,null)}),e[Zi]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var e=X_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hr.length&&e!==0&&e<hr[t].priority;t++);hr.splice(t,0,n),t===0&&q_(n)}};function Up(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function Iw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zc(a);s.call(c)}}var a=px(e,i,n,0,null,!1,!1,"",Dg);return n._reactRootContainer=a,n[Zi]=a.current,zo(n.nodeType===8?n.parentNode:n),Ms(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Zc(l);o.call(c)}}var l=Dp(n,0,!1,null,null,!1,!1,"",Dg);return n._reactRootContainer=l,n[Zi]=l.current,zo(n.nodeType===8?n.parentNode:n),Ms(function(){Tu(e,l,t,i)}),l}function Ru(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Zc(a);o.call(l)}}Tu(e,a,n,r)}else a=Iw(t,e,n,r,i);return Zc(a)}G_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=fo(e.pendingLanes);t!==0&&(tp(e,t|1),_n(e,Ct()),!(Qe&6)&&(Ra=Ct()+500,Vr()))}break;case 13:Ms(function(){var i=Ki(n,1);if(i!==null){var r=an();gi(i,n,1,r)}}),kp(n,1)}};np=function(n){if(n.tag===13){var e=Ki(n,134217728);if(e!==null){var t=an();gi(e,n,134217728,t)}kp(n,134217728)}};W_=function(n){if(n.tag===13){var e=Ar(n),t=Ki(n,e);if(t!==null){var i=an();gi(t,n,e,i)}kp(n,e)}};X_=function(){return st};Y_=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};pf=function(n,e,t){switch(e){case"input":if(of(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xu(i);if(!r)throw Error(xe(90));b_(i),of(i,r)}}}break;case"textarea":T_(n,t);break;case"select":e=t.value,e!=null&&da(n,!!t.multiple,e,!1)}};D_=Rp;k_=Ms;var Uw={usingClientEntryPoint:!1,Events:[al,ta,xu,N_,L_,Rp]},eo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=O_(n),n===null?null:n.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{mu=Dl.inject(Ow),Ci=Dl}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;Hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(xe(200));return Dw(n,e,null,t)};Hn.createRoot=function(n,e){if(!Up(n))throw Error(xe(299));var t=!1,i="",r=mx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dp(n,1,!1,null,null,t,!1,i,r),n[Zi]=e.current,zo(n.nodeType===8?n.parentNode:n),new Ip(e)};Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(xe(188)):(n=Object.keys(n).join(","),Error(xe(268,n)));return n=O_(e),n=n===null?null:n.stateNode,n};Hn.flushSync=function(n){return Ms(n)};Hn.hydrate=function(n,e,t){if(!Cu(e))throw Error(xe(200));return Ru(null,n,e,!0,t)};Hn.hydrateRoot=function(n,e,t){if(!Up(n))throw Error(xe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=mx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=px(e,null,n,1,t??null,r,!1,s,a),n[Zi]=e.current,zo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Au(e)};Hn.render=function(n,e,t){if(!Cu(e))throw Error(xe(200));return Ru(null,n,e,!1,t)};Hn.unmountComponentAtNode=function(n){if(!Cu(n))throw Error(xe(40));return n._reactRootContainer?(Ms(function(){Ru(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1};Hn.unstable_batchedUpdates=Rp;Hn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Cu(t))throw Error(xe(200));if(n==null||n._reactInternals===void 0)throw Error(xe(38));return Ru(n,e,t,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(n){console.error(n)}}gx(),g_.exports=Hn;var Fw=g_.exports,kg=Fw;Jd.createRoot=kg.createRoot,Jd.hydrateRoot=kg.hydrateRoot;/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_x=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=Ie.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Ie.createElement("svg",{ref:l,...Bw,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:_x("lucide",r),...o},[...a.map(([c,u])=>Ie.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(n,e)=>{const t=Ie.forwardRef(({className:i,...r},s)=>Ie.createElement(jw,{ref:s,iconNode:e,className:_x(`lucide-${zw(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=rt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=rt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=rt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=rt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=rt("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=rt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=rt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=rt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=rt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=rt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=rt("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=rt("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=rt("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=rt("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=rt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=rt("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=rt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=rt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=rt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=rt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=rt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=rt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=rt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=rt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=rt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=rt("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=rt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=rt("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);class sM{constructor(){Vu(this,"ctx",null);Vu(this,"isMuted",!1);this.isMuted=typeof window<"u"&&localStorage.getItem("studio_muted")==="true"}_getContext(){if(typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playCinematicImpact(){if(this.isMuted)return;const e=this._getContext();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(32,t+1.2),r.gain.setValueAtTime(.6,t),r.gain.exponentialRampToValueAtTime(.001,t+1.8);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(380,t),s.frequency.exponentialRampToValueAtTime(60,t+1.5),i.connect(s),s.connect(r),r.connect(e.destination),i.start(t),i.stop(t+1.8),this._playNoiseSparkle(t)}playWhoosh(){if(this.isMuted)return;const e=this._getContext();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain(),s=e.createBiquadFilter();i.type="sine",i.frequency.setValueAtTime(200,t),i.frequency.exponentialRampToValueAtTime(800,t+.2),i.frequency.exponentialRampToValueAtTime(120,t+.5),s.type="bandpass",s.frequency.setValueAtTime(600,t),r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.25,t+.2),r.gain.exponentialRampToValueAtTime(.001,t+.5),i.connect(s),s.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.5)}playClick(e=440){if(this.isMuted)return;const t=this._getContext();if(!t)return;const i=t.currentTime,r=t.createOscillator(),s=t.createGain();r.type="sine",r.frequency.setValueAtTime(e,i),r.frequency.exponentialRampToValueAtTime(e*1.5,i+.06),s.gain.setValueAtTime(.18,i),s.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(s),s.connect(t.destination),r.start(i),r.stop(i+.06)}_playNoiseSparkle(e){const t=this._getContext();if(!t)return;const i=t.sampleRate*.4,r=t.createBuffer(1,i,t.sampleRate),s=r.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=r;const o=t.createBiquadFilter();o.type="highpass",o.frequency.setValueAtTime(2400,e);const l=t.createGain();l.gain.setValueAtTime(.12,e),l.gain.exponentialRampToValueAtTime(.001,e+.4),a.connect(o),o.connect(l),l.connect(t.destination),a.start(e),a.stop(e+.4)}toggleMute(){return this.isMuted=!this.isMuted,typeof window<"u"&&localStorage.setItem("studio_muted",String(this.isMuted)),this.isMuted}getIsMuted(){return this.isMuted}}const $e=new sM,aM=({currentArchetype:n,onSelectArchetype:e,onOpenDownload:t,onOpenOrder:i,onOpenVault:r,onToggleSpacingOverlay:s,isSpacingActive:a})=>{const[o,l]=Ie.useState(!1),[c,u]=Ie.useState($e.getIsMuted());Ie.useEffect(()=>{const h=()=>{l(window.scrollY>30)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const f=()=>{const h=$e.toggleMute();u(h),h||$e.playClick(500)};return y.jsxs("header",{className:`floating-nav ${o?"nav-scrolled":""}`,children:[y.jsxs("div",{className:"nav-container",children:[y.jsxs("a",{href:"#hero-intro",className:"nav-brand",onClick:()=>$e.playClick(600),children:[y.jsx("span",{className:"brand-logo-text",children:"STUDIO OS"}),y.jsx("span",{className:"brand-badge-v",children:"v2.0"})]}),y.jsxs("div",{className:"nav-telemetry",children:[y.jsx("span",{className:"tele-pulse"}),y.jsx("span",{children:"[9 SYSTEMS ACTIVE // LENIS SMOOTH // 60 FPS]"})]}),y.jsxs("div",{className:"nav-actions",children:[y.jsx("button",{onClick:f,className:`btn-icon-nav ${c?"":"active-glow"}`,title:"Вкл/Выкл звуковые эффекты","aria-label":"Звук",children:c?y.jsx(bx,{size:17}):y.jsx(Mx,{size:17})}),y.jsx("button",{onClick:s,className:`btn-icon-nav ${a?"active-glow":""}`,title:"Включить Spacing Overlay радар отступов","aria-label":"Отступы",children:y.jsx(Op,{size:17})}),y.jsxs("button",{onClick:r,className:"btn-studio-secondary nav-btn-desktop",children:[y.jsx(Fp,{size:15}),y.jsx("span",{children:"Ассеты"})]}),y.jsxs("button",{onClick:t,className:"btn-studio-secondary nav-btn-desktop",children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать"})]}),y.jsxs("button",{onClick:i,className:"btn-studio-primary nav-btn-cta",children:[y.jsx(bs,{size:15}),y.jsx("span",{children:"Заказать сайт"})]})]})]}),y.jsx("style",{children:`
        .floating-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 18px clamp(16px, 4vw, 36px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-scrolled {
          padding: 12px clamp(16px, 4vw, 36px);
          background: rgba(6, 7, 10, 0.88);
          backdrop-filter: blur(20px);
          border-bottom: var(--border-width) solid var(--border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
        }
        .nav-container {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-logo-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.1rem, 1rem + 0.4vw, 1.35rem);
          color: var(--accent);
          letter-spacing: 0.12em;
          text-shadow: 0 0 25px var(--accent-glow);
        }
        .brand-badge-v {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 2px 6px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .nav-telemetry {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 6px 14px;
          border-radius: 20px;
        }
        .tele-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 8px #00ff88;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 980px) {
          .nav-telemetry { display: none; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-icon-nav {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-icon-nav:hover, .btn-icon-nav.active-glow {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .nav-btn-desktop {
          padding: 8px 16px;
          min-height: 44px;
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .nav-btn-desktop { display: none; }
        }
        .nav-btn-cta {
          padding: 8px 18px;
          min-height: 44px;
          font-size: 0.82rem;
        }
      `})]})},oM=({currentArchetype:n,onSelectArchetype:e,onOpenDownload:t,onOpenOrder:i,onOpenVault:r,onReplayIntro:s})=>{const[a,o]=Ie.useState(!1),l=c=>{$e.playClick(440),e(c),o(!1)};return y.jsxs(y.Fragment,{children:[y.jsx("nav",{className:"mobile-thumb-bar",children:y.jsxs("div",{className:"thumb-grid",children:[y.jsxs("button",{className:"thumb-btn",onClick:()=>o(!0),"aria-label":"Сменить архетип",children:[y.jsx(Qw,{size:20}),y.jsx("span",{children:"Архетипы"})]}),y.jsxs("button",{className:"thumb-btn",onClick:s,"aria-label":"3D Интро",children:[y.jsx(yx,{size:20}),y.jsx("span",{children:"3D Интро"})]}),y.jsxs("button",{className:"thumb-btn primary-cta",onClick:i,"aria-label":"Заказать сайт",children:[y.jsx(bs,{size:20}),y.jsx("span",{children:"Заказать"})]}),y.jsxs("button",{className:"thumb-btn",onClick:t,"aria-label":"Скачать",children:[y.jsx(vn,{size:20}),y.jsx("span",{children:"Скачать"})]}),y.jsxs("button",{className:"thumb-btn",onClick:r,"aria-label":"Хранилище",children:[y.jsx(Fp,{size:20}),y.jsx("span",{children:"Ассеты"})]})]})}),a&&y.jsx("div",{className:"drawer-overlay",onClick:()=>o(!1),children:y.jsxs("div",{className:"drawer-sheet",onClick:c=>c.stopPropagation(),children:[y.jsx("div",{className:"drawer-handle"}),y.jsxs("div",{className:"drawer-header",children:[y.jsx("h3",{children:"🎨 Выбор Дизайн-Архетипа"}),y.jsx("button",{onClick:()=>o(!1),className:"close-drawer",children:"✕"})]}),y.jsx("div",{className:"drawer-archetypes-list",children:[{id:"luxury-noir",name:"Luxury Noir",desc:"Кинематографичный люкс, черный + золото"},{id:"neo-brutalism",name:"Neo-Brutalism",desc:"Сырой уличный контраст, четкие тени"},{id:"cyber-tech",name:"Cyber-Tech",desc:"Инженерный неон, терминальные сетки"},{id:"editorial-swiss",name:"Editorial Swiss",desc:"Швейцарская сетка, чистая типографика"},{id:"clean-minimal",name:"Clean Minimal",desc:"Мягкий human-интерфейс, закругления"}].map(c=>y.jsxs("button",{className:`drawer-arch-card ${n===c.id?"active":""}`,onClick:()=>l(c.id),children:[y.jsxs("div",{children:[y.jsx("strong",{children:c.name}),y.jsx("p",{children:c.desc})]}),n===c.id&&y.jsx("span",{className:"active-dot",children:"✓"})]},c.id))})]})}),y.jsx("style",{children:`
        .mobile-thumb-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: rgba(8, 9, 12, 0.92);
          backdrop-filter: blur(18px);
          border-top: var(--border-width) solid var(--border);
          padding-bottom: env(safe-area-inset-bottom, 0px);
          box-shadow: 0 -10px 30px rgba(0,0,0,0.8);
        }
        @media (max-width: 860px) {
          .mobile-thumb-bar { display: block; }
        }
        .thumb-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          height: 60px;
          align-items: center;
        }
        .thumb-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          height: 100%;
          min-height: 48px;
          min-width: 48px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .thumb-btn:active {
          transform: scale(0.92);
        }
        .thumb-btn.primary-cta {
          color: #000;
          background: var(--accent);
          font-weight: bold;
          border-radius: 8px;
          margin: 4px;
          height: calc(100% - 8px);
        }
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          z-index: 100000;
          display: flex;
          align-items: flex-end;
        }
        .drawer-sheet {
          width: 100%;
          background: var(--bg-surface);
          border-top: var(--border-width) solid var(--border-strong);
          border-radius: 20px 20px 0 0;
          padding: 16px 20px calc(24px + env(safe-area-inset-bottom, 0px));
          max-height: 80vh;
          overflow-y: auto;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .drawer-handle {
          width: 40px;
          height: 4px;
          background: rgba(255,255,255,0.2);
          border-radius: 2px;
          margin: 0 auto 16px;
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .drawer-header h3 {
          font-size: 1.1rem;
        }
        .close-drawer {
          font-size: 20px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .drawer-archetypes-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .drawer-arch-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          text-align: left;
          color: var(--text-primary);
          cursor: pointer;
          min-height: 52px;
        }
        .drawer-arch-card.active {
          border-color: var(--accent);
          background: var(--bg-card);
        }
        .drawer-arch-card strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }
        .drawer-arch-card p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .active-dot {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--accent);
          font-weight: bold;
        }
      `})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zp="167",lM=0,Ug=1,cM=2,Ex=1,uM=2,Fi=3,Ir=0,xn=1,Hi=2,Rr=0,_a=1,Kc=2,Og=3,Fg=4,dM=5,ss=100,fM=101,hM=102,pM=103,mM=104,gM=200,_M=201,vM=202,xM=203,Yf=204,qf=205,yM=206,SM=207,wM=208,MM=209,bM=210,EM=211,TM=212,AM=213,CM=214,RM=0,PM=1,NM=2,Qc=3,LM=4,DM=5,kM=6,IM=7,Tx=0,UM=1,OM=2,Pr=0,FM=1,zM=2,BM=3,Ax=4,jM=5,VM=6,HM=7,Cx=300,Na=301,La=302,$f=303,Zf=304,Pu=306,Kf=1e3,us=1001,Qf=1002,Kn=1003,GM=1004,kl=1005,hi=1006,md=1007,ds=1008,Ji=1009,Rx=1010,Px=1011,qo=1012,Bp=1013,Es=1014,Xi=1015,ll=1016,jp=1017,Vp=1018,Da=1020,Nx=35902,Lx=1021,Dx=1022,pi=1023,kx=1024,Ix=1025,va=1026,ka=1027,Ux=1028,Hp=1029,Ox=1030,Gp=1031,Wp=1033,vc=33776,xc=33777,yc=33778,Sc=33779,Jf=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,ah=37808,oh=37809,lh=37810,ch=37811,uh=37812,dh=37813,fh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,wc=36492,yh=36494,Sh=36495,Fx=36283,wh=36284,Mh=36285,bh=36286,WM=3200,XM=3201,zx=0,YM=1,mr="",Si="srgb",Hr="srgb-linear",Xp="display-p3",Nu="display-p3-linear",Jc="linear",dt="srgb",eu="rec709",tu="p3",Ls=7680,zg=519,qM=512,$M=513,ZM=514,Bx=515,KM=516,QM=517,JM=518,eb=519,Bg=35044,jg="300 es",Yi=2e3,nu=2001;class Ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Eh=180/Math.PI;function cl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function tb(n,e){return(n%e+e)%e}function _d(n,e,t){return(1-t)*n+t*e}function to(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],m=r[0],g=r[3],d=r[6],_=r[1],x=r[4],S=r[7],T=r[2],C=r[5],A=r[8];return s[0]=a*m+o*_+l*T,s[3]=a*g+o*x+l*C,s[6]=a*d+o*S+l*A,s[1]=c*m+u*_+f*T,s[4]=c*g+u*x+f*C,s[7]=c*d+u*S+f*A,s[2]=h*m+p*_+v*T,s[5]=h*g+p*x+v*C,s[8]=h*d+p*S+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(o*i-r*a)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vd.makeScale(e,t)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new We;function jx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function iu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nb(){const n=iu("canvas");return n.style.display="block",n}const Vg={};function Ao(n){n in Vg||(Vg[n]=!0,console.warn(n))}function ib(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[Hr]:{transfer:Jc,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Si]:{transfer:dt,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Nu]:{transfer:Jc,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Gg),fromReference:n=>n.applyMatrix3(Hg)},[Xp]:{transfer:dt,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gg),fromReference:n=>n.applyMatrix3(Hg).convertLinearToSRGB()}},rb=new Set([Hr,Nu]),it={enabled:!0,_workingColorSpace:Hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=no[e].toReference,r=no[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return no[n].primaries},getTransfer:function(n){return n===mr?Jc:no[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(no[e].luminanceCoefficients)}};function xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ds;class sb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=iu("canvas")),Ds.width=e.width,Ds.height=e.height;const i=Ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=iu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xa(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xa(t[i]/255)*255):t[i]=xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ab=0;class Vx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yd(r[a].image)):s.push(yd(r[a]))}else s=yd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ob=0;class yn extends Ga{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=us,r=us,s=hi,a=ds,o=pi,l=Ji,c=yn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=cl(),this.name="",this.source=new Vx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kf:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kf:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Cx;yn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,T=(d+1)/2,C=(u+h)/4,A=(f+m)/4,N=(v+g)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=N/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=N/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-v)*(g-v)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(f-m)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lb extends Ga{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends lb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hx extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cb extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==v){let g=1-o;const d=l*h+c*p+u*v+f*m,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),C=Math.atan2(T,d*_);g=Math.sin(g*C)/T,o=Math.sin(o*C)/T}const S=o*_;if(l=l*g+h*S,c=c*g+p*S,u=u*g+v*S,f=f*g+m*S,g===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new ne,Wg=new ul;class dl{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ul.subVectors(this.max,io),ks.subVectors(e.a,io),Is.subVectors(e.b,io),Us.subVectors(e.c,io),sr.subVectors(Is,ks),ar.subVectors(Us,Is),Xr.subVectors(ks,Us);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Xr.z,Xr.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Xr.z,0,-Xr.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Xr.y,Xr.x,0];return!wd(t,ks,Is,Us,Ul)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,ks,Is,Us,Ul))?!1:(Ol.crossVectors(sr,ar),t=[Ol.x,Ol.y,Ol.z],wd(t,ks,Is,Us,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],oi=new ne,Il=new dl,ks=new ne,Is=new ne,Us=new ne,sr=new ne,ar=new ne,Xr=new ne,io=new ne,Ul=new ne,Ol=new ne,Yr=new ne;function wd(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Yr.fromArray(n,s);const o=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),u=i.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ub=new dl,ro=new ne,Md=new ne;class Lu{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Md)),this.expandByPoint(ro.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new ne,bd=new ne,Fl=new ne,or=new ne,Ed=new ne,zl=new ne,Td=new ne;class Gx{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bd.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),or.copy(this.origin).sub(bd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fl),o=or.dot(this.direction),l=-or.dot(Fl),c=or.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const m=1/u;f*=m,h*=m,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bd).addScaledVector(Fl,h),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,r,s){Ed.subVectors(t,e),zl.subVectors(i,e),Td.crossVectors(Ed,zl);let a=this.direction.dot(Td),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;or.subVectors(this.origin,e);const l=o*this.direction.dot(zl.crossVectors(or,zl));if(l<0)return null;const c=o*this.direction.dot(Ed.cross(or));if(c<0||l+c>a)return null;const u=-o*or.dot(Td);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,m,g){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,m,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,m=c*f;t[0]=h+m*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=m+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,m=c*f;t[0]=h-m*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=m-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,m=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,m=o*c;t[0]=l*u,t[4]=m-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-m*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(db,e,fb)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),lr.crossVectors(i,Rn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),lr.crossVectors(i,Rn)),lr.normalize(),Bl.crossVectors(Rn,lr),r[0]=lr.x,r[4]=Bl.x,r[8]=Rn.x,r[1]=lr.y,r[5]=Bl.y,r[9]=Rn.y,r[2]=lr.z,r[6]=Bl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],m=i[6],g=i[10],d=i[14],_=i[3],x=i[7],S=i[11],T=i[15],C=r[0],A=r[4],N=r[8],w=r[12],E=r[1],F=r[5],L=r[9],z=r[13],M=r[2],H=r[6],K=r[10],Y=r[14],G=r[3],X=r[7],I=r[11],R=r[15];return s[0]=a*C+o*E+l*M+c*G,s[4]=a*A+o*F+l*H+c*X,s[8]=a*N+o*L+l*K+c*I,s[12]=a*w+o*z+l*Y+c*R,s[1]=u*C+f*E+h*M+p*G,s[5]=u*A+f*F+h*H+p*X,s[9]=u*N+f*L+h*K+p*I,s[13]=u*w+f*z+h*Y+p*R,s[2]=v*C+m*E+g*M+d*G,s[6]=v*A+m*F+g*H+d*X,s[10]=v*N+m*L+g*K+d*I,s[14]=v*w+m*z+g*Y+d*R,s[3]=_*C+x*E+S*M+T*G,s[7]=_*A+x*F+S*H+T*X,s[11]=_*N+x*L+S*K+T*I,s[15]=_*w+x*z+S*Y+T*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],m=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+m*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+g*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],m=e[13],g=e[14],d=e[15],_=f*g*c-m*h*c+m*l*p-o*g*p-f*l*d+o*h*d,x=v*h*c-u*g*c-v*l*p+a*g*p+u*l*d-a*h*d,S=u*m*c-v*f*c+v*o*p-a*m*p-u*o*d+a*f*d,T=v*f*l-u*m*l-v*o*h+a*m*h+u*o*g-a*f*g,C=t*_+i*x+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*A,e[2]=(o*g*s-m*l*s+m*r*c-i*g*c-o*r*d+i*l*d)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*g*s-v*h*s+v*r*p-t*g*p-u*r*d+t*h*d)*A,e[6]=(v*l*s-a*g*s-v*r*c+t*g*c+a*r*d-t*l*d)*A,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*A,e[8]=S*A,e[9]=(v*f*s-u*m*s-v*i*p+t*m*p+u*i*d-t*f*d)*A,e[10]=(a*m*s-v*o*s+v*i*c-t*m*c-a*i*d+t*o*d)*A,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*A,e[12]=T*A,e[13]=(u*m*r-v*f*r+v*i*h-t*m*h-u*i*g+t*f*g)*A,e[14]=(v*o*r-a*m*r-v*i*l+t*m*l+a*i*g-t*o*g)*A,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,m=a*u,g=a*f,d=o*f,_=l*c,x=l*u,S=l*f,T=i.x,C=i.y,A=i.z;return r[0]=(1-(m+d))*T,r[1]=(p+S)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(v+x)*A,r[9]=(g-_)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Os.set(r[0],r[1],r[2]).length();const a=Os.set(r[4],r[5],r[6]).length(),o=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const c=1/s,u=1/a,f=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,t.setFromRotationMatrix(li),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Yi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(o===Yi)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===nu)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Yi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,p=(i+r)*u;let v,m;if(o===Yi)v=(a+s)*f,m=-2*f;else if(o===nu)v=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new ne,li=new St,db=new ne(0,0,0),fb=new ne(1,1,1),lr=new ne,Bl=new ne,Rn=new ne,Xg=new St,Yg=new ul;class Pi{constructor(e=0,t=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hb=0;const qg=new ne,Fs=new ul,Ii=new St,jl=new ne,so=new ne,pb=new ne,mb=new ul,$g=new ne(1,0,0),Zg=new ne(0,1,0),Kg=new ne(0,0,1),Qg={type:"added"},gb={type:"removed"},zs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Xt extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new ne,t=new Pi,i=new ul,r=new ne(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new We}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Kg,e)}translateOnAxis(e,t){return qg.copy(e).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(so,jl,this.up):Ii.lookAt(jl,so,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gb),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new ne(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ne,Ui=new ne,Cd=new ne,Oi=new ne,Bs=new ne,js=new ne,Jg=new ne,Rd=new ne,Pd=new ne,Nd=new ne;class Ei{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Ui.subVectors(i,t),Cd.subVectors(e,t);const a=ci.dot(ci),o=ci.dot(Ui),l=ci.dot(Cd),c=Ui.dot(Ui),u=Ui.dot(Cd),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Ui.subVectors(e,t),ci.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bs.subVectors(r,i),js.subVectors(s,i),Rd.subVectors(e,i);const l=Bs.dot(Rd),c=js.dot(Rd);if(l<=0&&c<=0)return t.copy(i);Pd.subVectors(e,r);const u=Bs.dot(Pd),f=js.dot(Pd);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Bs,a);Nd.subVectors(e,s);const p=Bs.dot(Nd),v=js.dot(Nd);if(v>=0&&p<=v)return t.copy(s);const m=p*c-l*v;if(m<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(js,o);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Jg.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Jg,o);const d=1/(g+m+h);return a=m*d,o=h*d,t.copy(i).addScaledVector(Bs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Ld(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=tb(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ld(a,s,e+1/3),this.g=Ld(a,s,e),this.b=Ld(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=Si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const i=Xx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=xd(e.r),this.g=xd(e.g),this.b=xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return it.fromWorkingColorSpace(Qt.copy(this),e),Math.round(dn(Qt.r*255,0,255))*65536+Math.round(dn(Qt.g*255,0,255))*256+Math.round(dn(Qt.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Si){it.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Vl);const i=_d(cr.h,Vl.h,t),r=_d(cr.s,Vl.s,t),s=_d(cr.l,Vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ze;Ze.NAMES=Xx;let _b=0;class Wa extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=_a,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ru extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new ne,Hl=new Xe;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ao("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=to(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=to(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=to(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=to(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=to(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bg&&(e.usage=this.usage),e}}class Yx extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qx extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fn extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vb=0;const Xn=new St,Dd=new Xt,Vs=new ne,Pn=new dl,ao=new dl,Ft=new ne;class ri extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?qx:Yx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(Pn.min,ao.min),Pn.expandByPoint(Ft),Ft.addVectors(Pn.max,ao.max),Pn.expandByPoint(Ft)):(Pn.expandByPoint(ao.min),Pn.expandByPoint(ao.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Ft.add(Vs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new ne,l[N]=new ne;const c=new ne,u=new ne,f=new ne,h=new Xe,p=new Xe,v=new Xe,m=new ne,g=new ne;function d(N,w,E){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const F=1/(p.x*v.y-v.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(F),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(F),o[N].add(m),o[w].add(m),o[E].add(m),l[N].add(g),l[w].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,w=_.length;N<w;++N){const E=_[N],F=E.start,L=E.count;for(let z=F,M=F+L;z<M;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new ne,S=new ne,T=new ne,C=new ne;function A(N){T.fromBufferAttribute(r,N),C.copy(T);const w=o[N];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(C,w);const F=S.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,F)}for(let N=0,w=_.length;N<w;++N){const E=_[N],F=E.start,L=E.count;for(let z=F,M=F+L;z<M;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new ne,s=new ne,a=new ne,o=new ne,l=new ne,c=new ne,u=new ne,f=new ne;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e0=new St,qr=new Gx,Gl=new Lu,t0=new ne,Hs=new ne,Gs=new ne,Ws=new ne,kd=new ne,Wl=new ne,Xl=new Xe,Yl=new Xe,ql=new Xe,n0=new ne,i0=new ne,r0=new ne,$l=new ne,Zl=new ne;class Qn extends Xt{constructor(e=new ri,t=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(kd.fromBufferAttribute(f,e),a?Wl.addScaledVector(kd,u):Wl.addScaledVector(kd.sub(t),u))}t.add(Wl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Gl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Gl,t0)===null||qr.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(s).invert(),qr.copy(e.ray).applyMatrix4(e0),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,m=h.length;v<m;v++){const g=h[v],d=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,T=x;S<T;S+=3){const C=o.getX(S),A=o.getX(S+1),N=o.getX(S+2);r=Kl(this,d,e,i,c,u,f,C,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=v,d=m;g<d;g+=3){const _=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=Kl(this,a,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,m=h.length;v<m;v++){const g=h[v],d=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,T=x;S<T;S+=3){const C=S,A=S+1,N=S+2;r=Kl(this,d,e,i,c,u,f,C,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=v,d=m;g<d;g+=3){const _=g,x=g+1,S=g+2;r=Kl(this,a,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function xb(n,e,t,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ir,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zl);return c<t.near||c>t.far?null:{distance:c,point:Zl.clone(),object:n}}function Kl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Hs),n.getVertexPosition(l,Gs),n.getVertexPosition(c,Ws);const u=xb(n,e,t,i,Hs,Gs,Ws,$l);if(u){r&&(Xl.fromBufferAttribute(r,o),Yl.fromBufferAttribute(r,l),ql.fromBufferAttribute(r,c),u.uv=Ei.getInterpolation($l,Hs,Gs,Ws,Xl,Yl,ql,new Xe)),s&&(Xl.fromBufferAttribute(s,o),Yl.fromBufferAttribute(s,l),ql.fromBufferAttribute(s,c),u.uv1=Ei.getInterpolation($l,Hs,Gs,Ws,Xl,Yl,ql,new Xe)),a&&(n0.fromBufferAttribute(a,o),i0.fromBufferAttribute(a,l),r0.fromBufferAttribute(a,c),u.normal=Ei.getInterpolation($l,Hs,Gs,Ws,n0,i0,r0,new ne),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new ne,materialIndex:0};Ei.getNormal(Hs,Gs,Ws,f.normal),u.face=f}return u}class fl extends ri{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(f,2));function v(m,g,d,_,x,S,T,C,A,N,w){const E=S/A,F=T/N,L=S/2,z=T/2,M=C/2,H=A+1,K=N+1;let Y=0,G=0;const X=new ne;for(let I=0;I<K;I++){const R=I*F-z;for(let B=0;B<H;B++){const ae=B*E-L;X[m]=ae*_,X[g]=R*x,X[d]=M,c.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[d]=C>0?1:-1,u.push(X.x,X.y,X.z),f.push(B/A),f.push(1-I/N),Y+=1}}for(let I=0;I<N;I++)for(let R=0;R<A;R++){const B=h+R+H*I,ae=h+R+H*(I+1),V=h+(R+1)+H*(I+1),$=h+(R+1)+H*I;l.push(B,ae,$),l.push(ae,V,$),G+=6}o.addGroup(p,G,w),p+=G,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ia(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Ia(n[t]);for(const r in i)e[r]=i[r]}return e}function yb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $x(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Sb={clone:Ia,merge:rn};var wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zx extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ne,s0=new Xe,a0=new Xe;class fn extends Zx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,s0,a0),t.subVectors(a0,s0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,Ys=1;class bb extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Xs,Ys,e,t);r.layers=this.layers,this.add(r);const s=new fn(Xs,Ys,e,t);s.layers=this.layers,this.add(s);const a=new fn(Xs,Ys,e,t);a.layers=this.layers,this.add(a);const o=new fn(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new fn(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new fn(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kx extends yn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Na,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eb extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fl(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Rr});s.uniforms.tEquirect.value=t;const a=new Qn(r,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=hi),new bb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Id=new ne,Tb=new ne,Ab=new We;class ns{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Id.subVectors(i,t).cross(Tb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ab.getNormalMatrix(e),r=this.coplanarPoint(Id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Lu,Ql=new ne;class Yp{constructor(e=new ns,t=new ns,i=new ns,r=new ns,s=new ns,a=new ns){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],m=r[10],g=r[11],d=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-d).normalize(),i[1].setComponents(l+s,h+c,g+p,S+d).normalize(),i[2].setComponents(l+a,h+u,g+v,S+_).normalize(),i[3].setComponents(l-a,h-u,g-v,S-_).normalize(),i[4].setComponents(l-o,h-f,g-m,S-x).normalize(),t===Yi)i[5].setComponents(l+o,h+f,g+m,S+x).normalize();else if(t===nu)i[5].setComponents(o,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qx(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,v=h.length;p<v;p++){const m=h[p];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Du extends ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],m=[],g=[];for(let d=0;d<u;d++){const _=d*h-a;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-_,0),m.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const x=_+c*d,S=_+c*(d+1),T=_+1+c*(d+1),C=_+1+c*d;p.push(x,S,C),p.push(S,T,C)}this.setIndex(p),this.setAttribute("position",new Fn(v,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
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
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ob=`#ifdef USE_BATCHING
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
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vb=`#ifdef USE_IRIDESCENCE
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
#endif`,Hb=`#ifdef USE_BUMPMAP
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
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qb=`#define PI 3.141592653589793
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
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eE=`vec3 transformedNormal = objectNormal;
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
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
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
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,AE=`struct PhysicalMaterial {
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
}`,CE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FE=`#if defined( USE_POINTS_UV )
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
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h2=`float getShadowMask() {
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
}`,p2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m2=`#ifdef USE_SKINNING
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
#endif`,g2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,v2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S2=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
#endif`,M2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R2=`uniform sampler2D t2D;
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
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`#include <common>
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
}`,I2=`#if DEPTH_PACKING == 3200
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
}`,U2=`#define DISTANCE
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
}`,O2=`#define DISTANCE
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`uniform float scale;
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
}`,j2=`uniform vec3 diffuse;
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
}`,V2=`#include <common>
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
}`,H2=`uniform vec3 diffuse;
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
}`,G2=`#define LAMBERT
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
}`,W2=`#define LAMBERT
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
}`,X2=`#define MATCAP
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
}`,Y2=`#define MATCAP
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
}`,q2=`#define NORMAL
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
}`,$2=`#define NORMAL
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
}`,Z2=`#define PHONG
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
}`,K2=`#define PHONG
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
}`,Q2=`#define STANDARD
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
}`,J2=`#define STANDARD
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
}`,eT=`#define TOON
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
}`,tT=`#define TOON
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
}`,nT=`uniform float size;
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
}`,iT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 color;
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
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,oT=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Rb,alphahash_pars_fragment:Pb,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Db,alphatest_pars_fragment:kb,aomap_fragment:Ib,aomap_pars_fragment:Ub,batching_pars_vertex:Ob,batching_vertex:Fb,begin_vertex:zb,beginnormal_vertex:Bb,bsdfs:jb,iridescence_fragment:Vb,bumpmap_pars_fragment:Hb,clipping_planes_fragment:Gb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Yb,color_fragment:qb,color_pars_fragment:$b,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:eE,displacementmap_pars_vertex:tE,displacementmap_vertex:nE,emissivemap_fragment:iE,emissivemap_pars_fragment:rE,colorspace_fragment:sE,colorspace_pars_fragment:aE,envmap_fragment:oE,envmap_common_pars_fragment:lE,envmap_pars_fragment:cE,envmap_pars_vertex:uE,envmap_physical_pars_fragment:SE,envmap_vertex:dE,fog_vertex:fE,fog_pars_vertex:hE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:gE,lightmap_pars_fragment:_E,lights_lambert_fragment:vE,lights_lambert_pars_fragment:xE,lights_pars_begin:yE,lights_toon_fragment:wE,lights_toon_pars_fragment:ME,lights_phong_fragment:bE,lights_phong_pars_fragment:EE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:CE,lights_fragment_maps:RE,lights_fragment_end:PE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:kE,map_fragment:IE,map_pars_fragment:UE,map_particle_fragment:OE,map_particle_pars_fragment:FE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:BE,morphinstance_vertex:jE,morphcolor_vertex:VE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:WE,normal_fragment_begin:XE,normal_fragment_maps:YE,normal_pars_fragment:qE,normal_pars_vertex:$E,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:e2,iridescence_pars_fragment:t2,opaque_fragment:n2,packing:i2,premultiplied_alpha_fragment:r2,project_vertex:s2,dithering_fragment:a2,dithering_pars_fragment:o2,roughnessmap_fragment:l2,roughnessmap_pars_fragment:c2,shadowmap_pars_fragment:u2,shadowmap_pars_vertex:d2,shadowmap_vertex:f2,shadowmask_pars_fragment:h2,skinbase_vertex:p2,skinning_pars_vertex:m2,skinning_vertex:g2,skinnormal_vertex:_2,specularmap_fragment:v2,specularmap_pars_fragment:x2,tonemapping_fragment:y2,tonemapping_pars_fragment:S2,transmission_fragment:w2,transmission_pars_fragment:M2,uv_pars_fragment:b2,uv_pars_vertex:E2,uv_vertex:T2,worldpos_vertex:A2,background_vert:C2,background_frag:R2,backgroundCube_vert:P2,backgroundCube_frag:N2,cube_vert:L2,cube_frag:D2,depth_vert:k2,depth_frag:I2,distanceRGBA_vert:U2,distanceRGBA_frag:O2,equirect_vert:F2,equirect_frag:z2,linedashed_vert:B2,linedashed_frag:j2,meshbasic_vert:V2,meshbasic_frag:H2,meshlambert_vert:G2,meshlambert_frag:W2,meshmatcap_vert:X2,meshmatcap_frag:Y2,meshnormal_vert:q2,meshnormal_frag:$2,meshphong_vert:Z2,meshphong_frag:K2,meshphysical_vert:Q2,meshphysical_frag:J2,meshtoon_vert:eT,meshtoon_frag:tT,points_vert:nT,points_frag:iT,shadow_vert:rT,shadow_frag:sT,sprite_vert:aT,sprite_frag:oT},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Mi={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mi.physical={uniforms:rn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Jl={r:0,b:0,g:0},Zr=new Pi,lT=new St;function cT(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function m(_){let x=!1;const S=v(_);S===null?d(o,l):S&&S.isColor&&(d(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===Pu)?(u===void 0&&(u=new Qn(new fl(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Ia(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zr.copy(x.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(Zr)),u.material.toneMapped=it.getTransfer(S.colorSpace)!==dt,(f!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qn(new Du(2,2),new Ur({name:"BackgroundMaterial",uniforms:Ia(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,x){_.getRGB(Jl,$x(n)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:m,addToRenderList:g}}function uT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(E,F,L,z,M){let H=!1;const K=f(z,L,F);s!==K&&(s=K,c(s.object)),H=p(E,z,L,M),H&&v(E,z,L,M),M!==null&&e.update(M,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(E,F,L,z),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,F,L){const z=L.wireframe===!0;let M=i[E.id];M===void 0&&(M={},i[E.id]=M);let H=M[F.id];H===void 0&&(H={},M[F.id]=H);let K=H[z];return K===void 0&&(K=h(l()),H[z]=K),K}function h(E){const F=[],L=[],z=[];for(let M=0;M<t;M++)F[M]=0,L[M]=0,z[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,F,L,z){const M=s.attributes,H=F.attributes;let K=0;const Y=L.getAttributes();for(const G in Y)if(Y[G].location>=0){const I=M[G];let R=H[G];if(R===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(R=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(R=E.instanceColor)),I===void 0||I.attribute!==R||R&&I.data!==R.data)return!0;K++}return s.attributesNum!==K||s.index!==z}function v(E,F,L,z){const M={},H=F.attributes;let K=0;const Y=L.getAttributes();for(const G in Y)if(Y[G].location>=0){let I=H[G];I===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(I=E.instanceColor));const R={};R.attribute=I,I&&I.data&&(R.data=I.data),M[G]=R,K++}s.attributes=M,s.attributesNum=K,s.index=z}function m(){const E=s.newAttributes;for(let F=0,L=E.length;F<L;F++)E[F]=0}function g(E){d(E,0)}function d(E,F){const L=s.newAttributes,z=s.enabledAttributes,M=s.attributeDivisors;L[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),M[E]!==F&&(n.vertexAttribDivisor(E,F),M[E]=F)}function _(){const E=s.newAttributes,F=s.enabledAttributes;for(let L=0,z=F.length;L<z;L++)F[L]!==E[L]&&(n.disableVertexAttribArray(L),F[L]=0)}function x(E,F,L,z,M,H,K){K===!0?n.vertexAttribIPointer(E,F,L,M,H):n.vertexAttribPointer(E,F,L,z,M,H)}function S(E,F,L,z){m();const M=z.attributes,H=L.getAttributes(),K=F.defaultAttributeValues;for(const Y in H){const G=H[Y];if(G.location>=0){let X=M[Y];if(X===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const I=X.normalized,R=X.itemSize,B=e.get(X);if(B===void 0)continue;const ae=B.buffer,V=B.type,$=B.bytesPerElement,ce=V===n.INT||V===n.UNSIGNED_INT||X.gpuType===Bp;if(X.isInterleavedBufferAttribute){const ue=X.data,de=ue.stride,_e=X.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)d(G.location+be,ue.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<G.locationSize;be++)g(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let be=0;be<G.locationSize;be++)x(G.location+be,R/G.locationSize,V,I,de*$,(_e+R/G.locationSize*be)*$,ce)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)d(G.location+ue,X.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<G.locationSize;ue++)g(G.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ue=0;ue<G.locationSize;ue++)x(G.location+ue,R/G.locationSize,V,I,R*$,R/G.locationSize*ue*$,ce)}}else if(K!==void 0){const I=K[Y];if(I!==void 0)switch(I.length){case 2:n.vertexAttrib2fv(G.location,I);break;case 3:n.vertexAttrib3fv(G.location,I);break;case 4:n.vertexAttrib4fv(G.location,I);break;default:n.vertexAttrib1fv(G.location,I)}}}}_()}function T(){N();for(const E in i){const F=i[E];for(const L in F){const z=F[L];for(const M in z)u(z[M].object),delete z[M];delete F[L]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const F=i[E.id];for(const L in F){const z=F[L];for(const M in z)u(z[M].object),delete z[M];delete F[L]}delete i[E.id]}function A(E){for(const F in i){const L=i[F];if(L[E.id]===void 0)continue;const z=L[E.id];for(const M in z)u(z[M].object),delete z[M];delete L[E.id]}}function N(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:_}}function dT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];for(let m=0;m<h.length;m++)t.update(v,i,h[m])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const A=C===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ji&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xi&&!A)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,maxSamples:T}}function hT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ns,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,x=_*4;let S=d.clippingState||null;l.value=S,S=u(v,h,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,v!==!0||g===null){const d=p+m*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=p;x!==m;++x,S+=4)a.copy(f[x]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function pT(n){let e=new WeakMap;function t(a,o){return o===$f?a.mapping=Na:o===Zf&&(a.mapping=La),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$f||o===Zf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Eb(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jx extends Zx{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const la=4,o0=[.125,.215,.35,.446,.526,.582],as=20,Ud=new Jx,l0=new Ze;let Od=null,Fd=0,zd=0,Bd=!1;const is=(1+Math.sqrt(5))/2,qs=1/is,c0=[new ne(-is,qs,0),new ne(is,qs,0),new ne(-qs,0,is),new ne(qs,0,is),new ne(0,is,-qs),new ne(0,is,qs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class u0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Fd,zd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Na||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ll,format:pi,colorSpace:Hr,depthBuffer:!1},r=d0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(s)),this._blurMaterial=gT(s,e,t)}return r}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,i,r){const o=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(l0),u.toneMapping=Pr,u.autoClear=!1;const p=new ru({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),v=new Qn(new fl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(l0),m=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;ec(r,_*x,d>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Na||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ec(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ud)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=c0[(r-s-1)%c0.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*as-1),m=s/v,g=isFinite(s)?1+Math.floor(u*m):as;g>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const d=[];let _=0;for(let A=0;A<as;++A){const N=A/m,w=Math.exp(-N*N/2);d.push(w),A===0?_+=w:A<g&&(_+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-la?r-x+la:0),C=4*(this._cubeSize-S);ec(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Ud)}}function mT(n){const e=[],t=[],i=[];let r=n;const s=n-la+1+o0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-la?l=o0[a-n+la-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,m=3,g=2,d=1,_=new Float32Array(m*v*p),x=new Float32Array(g*v*p),S=new Float32Array(d*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,N=C>2?0:-1,w=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];_.set(w,m*v*C),x.set(h,g*v*C);const E=[C,C,C,C,C,C];S.set(E,d*v*C)}const T=new ri;T.setAttribute("position",new Sn(_,m)),T.setAttribute("uv",new Sn(x,g)),T.setAttribute("faceIndex",new Sn(S,d)),e.push(T),r>la&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function d0(n,e,t){const i=new Ts(n,e,t);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gT(n,e,t){const i=new Float32Array(as),r=new ne(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qp(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function f0(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qp(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function h0(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function qp(){return`

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
	`}function _T(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$f||l===Zf,u=l===Na||l===La;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new u0(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new u0(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xT(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const m=h.morphAttributes[v];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const m=p[v];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let m=0;if(p!==null){const _=p.array;m=p.version;for(let x=0,S=_.length;x<S;x+=3){const T=_[x+0],C=_[x+1],A=_[x+2];h.push(T,C,C,A,A,T)}}else if(v!==void 0){const _=v.array;m=v.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const T=x+0,C=x+1,A=x+2;h.push(T,C,C,A,A,T)}}else return;const g=new(jx(h)?qx:Yx)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function yT(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*a,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let d=0;d<v;d++)g+=p[d];t.update(g,i,1)}function f(h,p,v,m){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,v);let d=0;for(let _=0;_<v;_++)d+=p[_];for(let _=0;_<m.length;_++)t.update(d,i,m[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ST(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wT(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),m===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*C*4*f),N=new Hx(A,T,C,f);N.type=Xi,N.needsUpdate=!0;const w=S*4;for(let F=0;F<f;F++){const L=d[F],z=_[F],M=x[F],H=T*C*4*F;for(let K=0;K<L.count;K++){const Y=K*w;v===!0&&(r.fromBufferAttribute(L,K),A[H+Y+0]=r.x,A[H+Y+1]=r.y,A[H+Y+2]=r.z,A[H+Y+3]=0),m===!0&&(r.fromBufferAttribute(z,K),A[H+Y+4]=r.x,A[H+Y+5]=r.y,A[H+Y+6]=r.z,A[H+Y+7]=0),g===!0&&(r.fromBufferAttribute(M,K),A[H+Y+8]=r.x,A[H+Y+9]=r.y,A[H+Y+10]=r.z,A[H+Y+11]=M.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Xe(T,C)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const m=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function MT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ey extends yn{constructor(e,t,i,r,s,a,o,l,c,u=va){if(u!==va&&u!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===va&&(i=Es),i===void 0&&u===ka&&(i=Da),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ty=new yn,p0=new ey(1,1),ny=new Hx,iy=new cb,ry=new Kx,m0=[],g0=[],_0=new Float32Array(16),v0=new Float32Array(9),x0=new Float32Array(4);function Xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=m0[r];if(s===void 0&&(s=new Float32Array(r),m0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ku(n,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function CT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;x0.set(i),n.uniformMatrix2fv(this.addr,!1,x0),Ot(t,i)}}function RT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;v0.set(i),n.uniformMatrix3fv(this.addr,!1,v0),Ot(t,i)}}function PT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;_0.set(i),n.uniformMatrix4fv(this.addr,!1,_0),Ot(t,i)}}function NT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function IT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function zT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(p0.compareFunction=Bx,s=p0):s=ty,t.setTexture2D(e||s,r)}function BT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||iy,r)}function jT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ry,r)}function VT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ny,r)}function HT(n){switch(n){case 5126:return bT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return kT;case 5125:return IT;case 36294:return UT;case 36295:return OT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return VT}}function GT(n,e){n.uniform1fv(this.addr,e)}function WT(n,e){const t=Xa(e,this.size,2);n.uniform2fv(this.addr,t)}function XT(n,e){const t=Xa(e,this.size,3);n.uniform3fv(this.addr,t)}function YT(n,e){const t=Xa(e,this.size,4);n.uniform4fv(this.addr,t)}function qT(n,e){const t=Xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $T(n,e){const t=Xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZT(n,e){const t=Xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KT(n,e){n.uniform1iv(this.addr,e)}function QT(n,e){n.uniform2iv(this.addr,e)}function JT(n,e){n.uniform3iv(this.addr,e)}function eA(n,e){n.uniform4iv(this.addr,e)}function tA(n,e){n.uniform1uiv(this.addr,e)}function nA(n,e){n.uniform2uiv(this.addr,e)}function iA(n,e){n.uniform3uiv(this.addr,e)}function rA(n,e){n.uniform4uiv(this.addr,e)}function sA(n,e,t){const i=this.cache,r=e.length,s=ku(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ty,s[a])}function aA(n,e,t){const i=this.cache,r=e.length,s=ku(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||iy,s[a])}function oA(n,e,t){const i=this.cache,r=e.length,s=ku(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ry,s[a])}function lA(n,e,t){const i=this.cache,r=e.length,s=ku(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ny,s[a])}function cA(n){switch(n){case 5126:return GT;case 35664:return WT;case 35665:return XT;case 35666:return YT;case 35674:return qT;case 35675:return $T;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HT(t.type)}}class dA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cA(t.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function y0(n,e){n.seq.push(e),n.map[e.id]=e}function hA(n,e,t){const i=n.name,r=i.length;for(jd.lastIndex=0;;){const s=jd.exec(i),a=jd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){y0(t,c===void 0?new uA(o,n,e):new dA(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new fA(o),y0(t,f)),t=f}}}class Mc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);hA(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function S0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pA=37297;let mA=0;function gA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function _A(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===tu&&t===eu?i="LinearDisplayP3ToLinearSRGB":e===eu&&t===tu&&(i="LinearSRGBToLinearDisplayP3"),n){case Hr:case Nu:return[i,"LinearTransferOETF"];case Si:case Xp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function w0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gA(n.getShaderSource(e),a)}else return r}function vA(n,e){const t=_A(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xA(n,e){let t;switch(e){case FM:t="Linear";break;case zM:t="Reinhard";break;case BM:t="OptimizedCineon";break;case Ax:t="ACESFilmic";break;case VM:t="AgX";break;case HM:t="Neutral";break;case jM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new ne;function yA(){it.getLuminanceCoefficients(tc);const n=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function wA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function po(n){return n!==""}function M0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(n){return n.replace(bA,TA)}const EA=new Map;function TA(n,e){let t=Ge[e];if(t===void 0){const i=EA.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}const AA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(n){return n.replace(AA,CA)}function CA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function T0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function RA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Na:case La:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case La:e="ENVMAP_MODE_REFRACTION";break}return e}function LA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tx:e="ENVMAP_BLENDING_MULTIPLY";break;case UM:e="ENVMAP_BLENDING_MIX";break;case OM:e="ENVMAP_BLENDING_ADD";break}return e}function DA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kA(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=RA(t),c=PA(t),u=NA(t),f=LA(t),h=DA(t),p=SA(t),v=wA(s),m=r.createProgram();let g,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(po).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(po).join(`
`),d.length>0&&(d+=`
`)):(g=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),d=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Pr?xA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vA("linearToOutputTexel",t.outputColorSpace),yA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),a=Th(a),a=M0(a,t),a=b0(a,t),o=Th(o),o=M0(o,t),o=b0(o,t),a=E0(a),o=E0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+g+a,S=_+d+o,T=S0(r,r.VERTEX_SHADER,x),C=S0(r,r.FRAGMENT_SHADER,S);r.attachShader(m,T),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(F){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(T).trim(),M=r.getShaderInfoLog(C).trim();let H=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,C);else{const Y=w0(r,T,"vertex"),G=w0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+L+`
`+Y+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||M==="")&&(K=!1);K&&(F.diagnostics={runnable:H,programLog:L,vertexShader:{log:z,prefix:g},fragmentShader:{log:M,prefix:d}})}r.deleteShader(T),r.deleteShader(C),N=new Mc(r,m),w=MA(r,m)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(m,pA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}let IA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new OA(e),t.set(e,i)),i}}class OA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function FA(n,e,t,i,r,s,a){const o=new Wx,l=new UA,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,E,F,L,z){const M=L.fog,H=z.geometry,K=w.isMeshStandardMaterial?L.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),G=Y&&Y.mapping===Pu?Y.image.height:null,X=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const I=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,R=I!==void 0?I.length:0;let B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let ae,V,$,ce;if(X){const Je=Mi[X];ae=Je.vertexShader,V=Je.fragmentShader}else ae=w.vertexShader,V=w.fragmentShader,l.update(w),$=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const ue=n.getRenderTarget(),de=z.isInstancedMesh===!0,_e=z.isBatchedMesh===!0,be=!!w.map,Te=!!w.matcap,W=!!Y,Oe=!!w.aoMap,b=!!w.lightMap,se=!!w.bumpMap,Z=!!w.normalMap,j=!!w.displacementMap,k=!!w.emissiveMap,q=!!w.metalnessMap,D=!!w.roughnessMap,P=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,re=w.iridescence>0,Q=w.sheen>0,pe=w.transmission>0,me=P&&!!w.anisotropyMap,ge=O&&!!w.clearcoatMap,De=O&&!!w.clearcoatNormalMap,ve=O&&!!w.clearcoatRoughnessMap,Me=re&&!!w.iridescenceMap,He=re&&!!w.iridescenceThicknessMap,Ae=Q&&!!w.sheenColorMap,Re=Q&&!!w.sheenRoughnessMap,Be=!!w.specularMap,ze=!!w.specularColorMap,lt=!!w.specularIntensityMap,ee=pe&&!!w.transmissionMap,ye=pe&&!!w.thicknessMap,fe=!!w.gradientMap,he=!!w.alphaMap,Se=w.alphaTest>0,Ue=!!w.alphaHash,Ke=!!w.extensions;let Rt=Pr;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const Vt={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:ae,fragmentShader:V,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:_e,batchingColor:_e&&z._colorsTexture!==null,instancing:de,instancingColor:de&&z.instanceColor!==null,instancingMorph:de&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Hr,alphaToCoverage:!!w.alphaToCoverage,map:be,matcap:Te,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:G,aoMap:Oe,lightMap:b,bumpMap:se,normalMap:Z,displacementMap:h&&j,emissiveMap:k,normalMapObjectSpace:Z&&w.normalMapType===YM,normalMapTangentSpace:Z&&w.normalMapType===zx,metalnessMap:q,roughnessMap:D,anisotropy:P,anisotropyMap:me,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:De,clearcoatRoughnessMap:ve,dispersion:J,iridescence:re,iridescenceMap:Me,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:Ae,sheenRoughnessMap:Re,specularMap:Be,specularColorMap:ze,specularIntensityMap:lt,transmission:pe,transmissionMap:ee,thicknessMap:ye,gradientMap:fe,opaque:w.transparent===!1&&w.blending===_a&&w.alphaToCoverage===!1,alphaMap:he,alphaTest:Se,alphaHash:Ue,combine:w.combine,mapUv:be&&m(w.map.channel),aoMapUv:Oe&&m(w.aoMap.channel),lightMapUv:b&&m(w.lightMap.channel),bumpMapUv:se&&m(w.bumpMap.channel),normalMapUv:Z&&m(w.normalMap.channel),displacementMapUv:j&&m(w.displacementMap.channel),emissiveMapUv:k&&m(w.emissiveMap.channel),metalnessMapUv:q&&m(w.metalnessMap.channel),roughnessMapUv:D&&m(w.roughnessMap.channel),anisotropyMapUv:me&&m(w.anisotropyMap.channel),clearcoatMapUv:ge&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(w.sheenRoughnessMap.channel),specularMapUv:Be&&m(w.specularMap.channel),specularColorMapUv:ze&&m(w.specularColorMap.channel),specularIntensityMapUv:lt&&m(w.specularIntensityMap.channel),transmissionMapUv:ee&&m(w.transmissionMap.channel),thicknessMapUv:ye&&m(w.thicknessMap.channel),alphaMapUv:he&&m(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Z||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(be||he),fog:!!M,useFog:w.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:be&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Hi,flipSided:w.side===xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&w.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)E.push(F),E.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(_(E,w),x(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const E=v[w.type];let F;if(E){const L=Mi[E];F=Sb.clone(L.uniforms)}else F=w.uniforms;return F}function T(w,E){let F;for(let L=0,z=u.length;L<z;L++){const M=u[L];if(M.cacheKey===E){F=M,++F.usedTimes;break}}return F===void 0&&(F=new kA(n,E,w,s),u.push(F)),F}function C(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:N}}function zA(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function BA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function A0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function C0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,v,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function o(f,h,p,v,m,g){const d=a(f,h,p,v,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,m,g){const d=a(f,h,p,v,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||BA),i.length>1&&i.sort(h||A0),r.length>1&&r.sort(h||A0)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function jA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new C0,n.set(i,[a])):r>=s.length?(a=new C0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function VA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ze};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function HA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GA=0;function WA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XA(n){const e=new VA,t=HA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const r=new ne,s=new St,a=new St;function o(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,m=0,g=0,d=0,_=0,x=0,S=0,T=0,C=0,A=0;c.sort(WA);for(let w=0,E=c.length;w<E;w++){const F=c[w],L=F.color,z=F.intensity,M=F.distance,H=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=L.r*z,f+=L.g*z,h+=L.b*z;else if(F.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(F.sh.coefficients[K],z);A++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Y=F.shadow,G=t.get(F);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=F.shadow.matrix,_++}i.directional[p]=K,p++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(L).multiplyScalar(z),K.distance=M,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,i.spot[m]=K;const Y=F.shadow;if(F.map&&(i.spotLightMap[T]=F.map,T++,Y.updateMatrices(F),F.castShadow&&C++),i.spotLightMatrix[m]=Y.matrix,F.castShadow){const G=t.get(F);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=H,S++}m++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(L).multiplyScalar(z),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=K,g++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const Y=F.shadow,G=t.get(F);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=F.shadow.matrix,x++}i.point[v]=K,v++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(z),K.groundColor.copy(F.groundColor).multiplyScalar(z),i.hemi[d]=K,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==m||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==_||N.numPointShadows!==x||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=p,N.pointLength=v,N.spotLength=m,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=_,N.numPointShadows=x,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=A,i.version=GA++)}function l(c,u){let f=0,h=0,p=0,v=0,m=0;const g=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function R0(n){const e=new XA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function YA(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new R0(n),e.set(r,[o])):s>=a.length?(o=new R0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class qA extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $A extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
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
}`;function QA(n,e,t){let i=new Yp;const r=new Xe,s=new Xe,a=new ft,o=new qA({depthPacking:XM}),l=new $A,c={},u=t.maxTextureSize,f={[Ir]:xn,[xn]:Ir,[Hi]:Hi},h=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ZA,fragmentShader:KA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ri;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ex;let d=this.type;this.render=function(C,A,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Rr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=d!==Fi&&this.type===Fi,M=d===Fi&&this.type!==Fi;for(let H=0,K=C.length;H<K;H++){const Y=C[H],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const X=G.getFrameExtents();if(r.multiply(X),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,G.mapSize.y=s.y)),G.map===null||z===!0||M===!0){const R=this.type!==Fi?{minFilter:Kn,magFilter:Kn}:{};G.map!==null&&G.map.dispose(),G.map=new Ts(r.x,r.y,R),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const I=G.getViewportCount();for(let R=0;R<I;R++){const B=G.getViewport(R);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),L.viewport(a),G.updateMatrices(Y,R),i=G.getFrustum(),S(A,N,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&_(G,N),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(w,E,F)};function _(C,A){const N=e.update(m);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ts(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,N,h,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,N,p,m,null)}function x(C,A,N,w){let E=null;const F=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)E=F;else if(E=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=E.uuid,z=A.uuid;let M=c[L];M===void 0&&(M={},c[L]=M);let H=M[z];H===void 0&&(H=E.clone(),M[z]=H,A.addEventListener("dispose",T)),E=H}if(E.visible=A.visible,E.wireframe=A.wireframe,w===Fi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=n.properties.get(E);L.light=N}return E}function S(C,A,N,w,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),M=C.material;if(Array.isArray(M)){const H=z.groups;for(let K=0,Y=H.length;K<Y;K++){const G=H[K],X=M[G.materialIndex];if(X&&X.visible){const I=x(C,X,w,E);C.onBeforeShadow(n,C,A,N,z,I,G),n.renderBufferDirect(N,null,z,I,C,G),C.onAfterShadow(n,C,A,N,z,I,G)}}}else if(M.visible){const H=x(C,M,w,E);C.onBeforeShadow(n,C,A,N,z,H,null),n.renderBufferDirect(N,null,z,H,C,null),C.onAfterShadow(n,C,A,N,z,H,null)}}const L=C.children;for(let z=0,M=L.length;z<M;z++)S(L[z],A,N,w,E)}function T(C){C.target.removeEventListener("dispose",T);for(const N in c){const w=c[N],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function JA(n){function e(){let ee=!1;const ye=new ft;let fe=null;const he=new ft(0,0,0,0);return{setMask:function(Se){fe!==Se&&!ee&&(n.colorMask(Se,Se,Se,Se),fe=Se)},setLocked:function(Se){ee=Se},setClear:function(Se,Ue,Ke,Rt,Vt){Vt===!0&&(Se*=Rt,Ue*=Rt,Ke*=Rt),ye.set(Se,Ue,Ke,Rt),he.equals(ye)===!1&&(n.clearColor(Se,Ue,Ke,Rt),he.copy(ye))},reset:function(){ee=!1,fe=null,he.set(-1,0,0,0)}}}function t(){let ee=!1,ye=null,fe=null,he=null;return{setTest:function(Se){Se?ce(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Se){ye!==Se&&!ee&&(n.depthMask(Se),ye=Se)},setFunc:function(Se){if(fe!==Se){switch(Se){case RM:n.depthFunc(n.NEVER);break;case PM:n.depthFunc(n.ALWAYS);break;case NM:n.depthFunc(n.LESS);break;case Qc:n.depthFunc(n.LEQUAL);break;case LM:n.depthFunc(n.EQUAL);break;case DM:n.depthFunc(n.GEQUAL);break;case kM:n.depthFunc(n.GREATER);break;case IM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Se}},setLocked:function(Se){ee=Se},setClear:function(Se){he!==Se&&(n.clearDepth(Se),he=Se)},reset:function(){ee=!1,ye=null,fe=null,he=null}}}function i(){let ee=!1,ye=null,fe=null,he=null,Se=null,Ue=null,Ke=null,Rt=null,Vt=null;return{setTest:function(Je){ee||(Je?ce(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Je){ye!==Je&&!ee&&(n.stencilMask(Je),ye=Je)},setFunc:function(Je,Li,vi){(fe!==Je||he!==Li||Se!==vi)&&(n.stencilFunc(Je,Li,vi),fe=Je,he=Li,Se=vi)},setOp:function(Je,Li,vi){(Ue!==Je||Ke!==Li||Rt!==vi)&&(n.stencilOp(Je,Li,vi),Ue=Je,Ke=Li,Rt=vi)},setLocked:function(Je){ee=Je},setClear:function(Je){Vt!==Je&&(n.clearStencil(Je),Vt=Je)},reset:function(){ee=!1,ye=null,fe=null,he=null,Se=null,Ue=null,Ke=null,Rt=null,Vt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,v=!1,m=null,g=null,d=null,_=null,x=null,S=null,T=null,C=new Ze(0,0,0),A=0,N=!1,w=null,E=null,F=null,L=null,z=null;const M=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=K>=2);let G=null,X={};const I=n.getParameter(n.SCISSOR_BOX),R=n.getParameter(n.VIEWPORT),B=new ft().fromArray(I),ae=new ft().fromArray(R);function V(ee,ye,fe,he){const Se=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(ee,Ue),n.texParameteri(ee,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ee,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<fe;Ke++)ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ye+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ue}const $={};$[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),s.setFunc(Qc),se(!1),Z(Ug),ce(n.CULL_FACE),Oe(Rr);function ce(ee){c[ee]!==!0&&(n.enable(ee),c[ee]=!0)}function ue(ee){c[ee]!==!1&&(n.disable(ee),c[ee]=!1)}function de(ee,ye){return u[ee]!==ye?(n.bindFramebuffer(ee,ye),u[ee]=ye,ee===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),ee===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function _e(ee,ye){let fe=h,he=!1;if(ee){fe=f.get(ye),fe===void 0&&(fe=[],f.set(ye,fe));const Se=ee.textures;if(fe.length!==Se.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Ke=Se.length;Ue<Ke;Ue++)fe[Ue]=n.COLOR_ATTACHMENT0+Ue;fe.length=Se.length,he=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,he=!0);he&&n.drawBuffers(fe)}function be(ee){return p!==ee?(n.useProgram(ee),p=ee,!0):!1}const Te={[ss]:n.FUNC_ADD,[fM]:n.FUNC_SUBTRACT,[hM]:n.FUNC_REVERSE_SUBTRACT};Te[pM]=n.MIN,Te[mM]=n.MAX;const W={[gM]:n.ZERO,[_M]:n.ONE,[vM]:n.SRC_COLOR,[Yf]:n.SRC_ALPHA,[bM]:n.SRC_ALPHA_SATURATE,[wM]:n.DST_COLOR,[yM]:n.DST_ALPHA,[xM]:n.ONE_MINUS_SRC_COLOR,[qf]:n.ONE_MINUS_SRC_ALPHA,[MM]:n.ONE_MINUS_DST_COLOR,[SM]:n.ONE_MINUS_DST_ALPHA,[EM]:n.CONSTANT_COLOR,[TM]:n.ONE_MINUS_CONSTANT_COLOR,[AM]:n.CONSTANT_ALPHA,[CM]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(ee,ye,fe,he,Se,Ue,Ke,Rt,Vt,Je){if(ee===Rr){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),ee!==dM){if(ee!==m||Je!==N){if((g!==ss||x!==ss)&&(n.blendEquation(n.FUNC_ADD),g=ss,x=ss),Je)switch(ee){case _a:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Og:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Og:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}d=null,_=null,S=null,T=null,C.set(0,0,0),A=0,m=ee,N=Je}return}Se=Se||ye,Ue=Ue||fe,Ke=Ke||he,(ye!==g||Se!==x)&&(n.blendEquationSeparate(Te[ye],Te[Se]),g=ye,x=Se),(fe!==d||he!==_||Ue!==S||Ke!==T)&&(n.blendFuncSeparate(W[fe],W[he],W[Ue],W[Ke]),d=fe,_=he,S=Ue,T=Ke),(Rt.equals(C)===!1||Vt!==A)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Vt),C.copy(Rt),A=Vt),m=ee,N=!1}function b(ee,ye){ee.side===Hi?ue(n.CULL_FACE):ce(n.CULL_FACE);let fe=ee.side===xn;ye&&(fe=!fe),se(fe),ee.blending===_a&&ee.transparent===!1?Oe(Rr):Oe(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),s.setFunc(ee.depthFunc),s.setTest(ee.depthTest),s.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const he=ee.stencilWrite;a.setTest(he),he&&(a.setMask(ee.stencilWriteMask),a.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),a.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),k(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(ee){w!==ee&&(ee?n.frontFace(n.CW):n.frontFace(n.CCW),w=ee)}function Z(ee){ee!==lM?(ce(n.CULL_FACE),ee!==E&&(ee===Ug?n.cullFace(n.BACK):ee===cM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),E=ee}function j(ee){ee!==F&&(H&&n.lineWidth(ee),F=ee)}function k(ee,ye,fe){ee?(ce(n.POLYGON_OFFSET_FILL),(L!==ye||z!==fe)&&(n.polygonOffset(ye,fe),L=ye,z=fe)):ue(n.POLYGON_OFFSET_FILL)}function q(ee){ee?ce(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function D(ee){ee===void 0&&(ee=n.TEXTURE0+M-1),G!==ee&&(n.activeTexture(ee),G=ee)}function P(ee,ye,fe){fe===void 0&&(G===null?fe=n.TEXTURE0+M-1:fe=G);let he=X[fe];he===void 0&&(he={type:void 0,texture:void 0},X[fe]=he),(he.type!==ee||he.texture!==ye)&&(G!==fe&&(n.activeTexture(fe),G=fe),n.bindTexture(ee,ye||$[ee]),he.type=ee,he.texture=ye)}function O(){const ee=X[G];ee!==void 0&&ee.type!==void 0&&(n.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ae(ee){B.equals(ee)===!1&&(n.scissor(ee.x,ee.y,ee.z,ee.w),B.copy(ee))}function Re(ee){ae.equals(ee)===!1&&(n.viewport(ee.x,ee.y,ee.z,ee.w),ae.copy(ee))}function Be(ee,ye){let fe=l.get(ye);fe===void 0&&(fe=new WeakMap,l.set(ye,fe));let he=fe.get(ee);he===void 0&&(he=n.getUniformBlockIndex(ye,ee.name),fe.set(ee,he))}function ze(ee,ye){const he=l.get(ye).get(ee);o.get(ye)!==he&&(n.uniformBlockBinding(ye,he,ee.__bindingPointIndex),o.set(ye,he))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,X={},u={},f=new WeakMap,h=[],p=null,v=!1,m=null,g=null,d=null,_=null,x=null,S=null,T=null,C=new Ze(0,0,0),A=0,N=!1,w=null,E=null,F=null,L=null,z=null,B.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ce,disable:ue,bindFramebuffer:de,drawBuffers:_e,useProgram:be,setBlending:Oe,setMaterial:b,setFlipSided:se,setCullFace:Z,setLineWidth:j,setPolygonOffset:k,setScissorTest:q,activeTexture:D,bindTexture:P,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:Me,texImage3D:He,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:De,texStorage3D:ve,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:me,compressedTexSubImage3D:ge,scissor:Ae,viewport:Re,reset:lt}}function P0(n,e,t,i){const r=eC(i);switch(t){case Lx:return n*e;case kx:return n*e;case Ix:return n*e*2;case Ux:return n*e/r.components*r.byteLength;case Hp:return n*e/r.components*r.byteLength;case Ox:return n*e*2/r.components*r.byteLength;case Gp:return n*e*2/r.components*r.byteLength;case Dx:return n*e*3/r.components*r.byteLength;case pi:return n*e*4/r.components*r.byteLength;case Wp:return n*e*4/r.components*r.byteLength;case vc:case xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(n,16)*Math.max(e,8)/4;case Jf:case th:return Math.max(n,8)*Math.max(e,8)/2;case ih:case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wc:case yh:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fx:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mh:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eC(n){switch(n){case Ji:case Rx:return{byteLength:1,components:1};case qo:case Px:case ll:return{byteLength:2,components:1};case jp:case Vp:return{byteLength:2,components:4};case Es:case Bp:case Xi:return{byteLength:4,components:1};case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function tC(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,P){return p?new OffscreenCanvas(D,P):iu("canvas")}function m(D,P,O){let J=1;const re=q(D);if((re.width>O||re.height>O)&&(J=O/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(J*re.width),pe=Math.floor(J*re.height);f===void 0&&(f=v(Q,pe));const me=P?v(Q,pe):f;return me.width=Q,me.height=pe,me.getContext("2d").drawImage(D,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+pe+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Kn&&D.minFilter!==hi}function d(D){n.generateMipmap(D)}function _(D,P,O,J,re=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=P;if(P===n.RED&&(O===n.FLOAT&&(Q=n.R32F),O===n.HALF_FLOAT&&(Q=n.R16F),O===n.UNSIGNED_BYTE&&(Q=n.R8)),P===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.R8UI),O===n.UNSIGNED_SHORT&&(Q=n.R16UI),O===n.UNSIGNED_INT&&(Q=n.R32UI),O===n.BYTE&&(Q=n.R8I),O===n.SHORT&&(Q=n.R16I),O===n.INT&&(Q=n.R32I)),P===n.RG&&(O===n.FLOAT&&(Q=n.RG32F),O===n.HALF_FLOAT&&(Q=n.RG16F),O===n.UNSIGNED_BYTE&&(Q=n.RG8)),P===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.RG8UI),O===n.UNSIGNED_SHORT&&(Q=n.RG16UI),O===n.UNSIGNED_INT&&(Q=n.RG32UI),O===n.BYTE&&(Q=n.RG8I),O===n.SHORT&&(Q=n.RG16I),O===n.INT&&(Q=n.RG32I)),P===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),P===n.RGBA){const pe=re?Jc:it.getTransfer(J);O===n.FLOAT&&(Q=n.RGBA32F),O===n.HALF_FLOAT&&(Q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Q=pe===dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(D,P){let O;return D?P===null||P===Es||P===Da?O=n.DEPTH24_STENCIL8:P===Xi?O=n.DEPTH32F_STENCIL8:P===qo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Es||P===Da?O=n.DEPTH_COMPONENT24:P===Xi?O=n.DEPTH_COMPONENT32F:P===qo&&(O=n.DEPTH_COMPONENT16),O}function S(D,P){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kn&&D.minFilter!==hi?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function T(D){const P=D.target;P.removeEventListener("dispose",T),A(P),P.isVideoTexture&&u.delete(P)}function C(D){const P=D.target;P.removeEventListener("dispose",C),w(P)}function A(D){const P=i.get(D);if(P.__webglInit===void 0)return;const O=D.source,J=h.get(O);if(J){const re=J[P.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(D),Object.keys(J).length===0&&h.delete(O)}i.remove(D)}function N(D){const P=i.get(D);n.deleteTexture(P.__webglTexture);const O=D.source,J=h.get(O);delete J[P.__cacheKey],a.memory.textures--}function w(D){const P=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(P.__webglFramebuffer[J]))for(let re=0;re<P.__webglFramebuffer[J].length;re++)n.deleteFramebuffer(P.__webglFramebuffer[J][re]);else n.deleteFramebuffer(P.__webglFramebuffer[J]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[J])}else{if(Array.isArray(P.__webglFramebuffer))for(let J=0;J<P.__webglFramebuffer.length;J++)n.deleteFramebuffer(P.__webglFramebuffer[J]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let J=0;J<P.__webglColorRenderbuffer.length;J++)P.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[J]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const O=D.textures;for(let J=0,re=O.length;J<re;J++){const Q=i.get(O[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(O[J])}i.remove(D)}let E=0;function F(){E=0}function L(){const D=E;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),E+=1,D}function z(D){const P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function M(D,P){const O=i.get(D);if(D.isVideoTexture&&j(D),D.isRenderTargetTexture===!1&&D.version>0&&O.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,D,P);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+P)}function H(D,P){const O=i.get(D);if(D.version>0&&O.__version!==D.version){ae(O,D,P);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+P)}function K(D,P){const O=i.get(D);if(D.version>0&&O.__version!==D.version){ae(O,D,P);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+P)}function Y(D,P){const O=i.get(D);if(D.version>0&&O.__version!==D.version){V(O,D,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+P)}const G={[Kf]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[Qf]:n.MIRRORED_REPEAT},X={[Kn]:n.NEAREST,[GM]:n.NEAREST_MIPMAP_NEAREST,[kl]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[md]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},I={[qM]:n.NEVER,[eb]:n.ALWAYS,[$M]:n.LESS,[Bx]:n.LEQUAL,[ZM]:n.EQUAL,[JM]:n.GEQUAL,[KM]:n.GREATER,[QM]:n.NOTEQUAL};function R(D,P){if(P.type===Xi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===hi||P.magFilter===md||P.magFilter===kl||P.magFilter===ds||P.minFilter===hi||P.minFilter===md||P.minFilter===kl||P.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,G[P.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,G[P.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,G[P.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,X[P.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,X[P.minFilter]),P.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,I[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Kn||P.minFilter!==kl&&P.minFilter!==ds||P.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function B(D,P){let O=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",T));const J=P.source;let re=h.get(J);re===void 0&&(re={},h.set(J,re));const Q=z(P);if(Q!==D.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),re[Q].usedTimes++;const pe=re[D.__cacheKey];pe!==void 0&&(re[D.__cacheKey].usedTimes--,pe.usedTimes===0&&N(P)),D.__cacheKey=Q,D.__webglTexture=re[Q].texture}return O}function ae(D,P,O){let J=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(J=n.TEXTURE_3D);const re=B(D,P),Q=P.source;t.bindTexture(J,D.__webglTexture,n.TEXTURE0+O);const pe=i.get(Q);if(Q.version!==pe.__version||re===!0){t.activeTexture(n.TEXTURE0+O);const me=it.getPrimaries(it.workingColorSpace),ge=P.colorSpace===mr?null:it.getPrimaries(P.colorSpace),De=P.colorSpace===mr||me===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ve=m(P.image,!1,r.maxTextureSize);ve=k(P,ve);const Me=s.convert(P.format,P.colorSpace),He=s.convert(P.type);let Ae=_(P.internalFormat,Me,He,P.colorSpace,P.isVideoTexture);R(J,P);let Re;const Be=P.mipmaps,ze=P.isVideoTexture!==!0,lt=pe.__version===void 0||re===!0,ee=Q.dataReady,ye=S(P,ve);if(P.isDepthTexture)Ae=x(P.format===ka,P.type),lt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ve.width,ve.height,0,Me,He,null));else if(P.isDataTexture)if(Be.length>0){ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,Be[0].width,Be[0].height);for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,Me,He,Re.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,Me,He,Re.data);P.generateMipmaps=!1}else ze?(lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,ve.width,ve.height),ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Me,He,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ve.width,ve.height,0,Me,He,ve.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ze&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,Be[0].width,Be[0].height,ve.depth);for(let fe=0,he=Be.length;fe<he;fe++)if(Re=Be[fe],P.format!==pi)if(Me!==null)if(ze){if(ee)if(P.layerUpdates.size>0){const Se=P0(Re.width,Re.height,P.format,P.type);for(const Ue of P.layerUpdates){const Ke=Re.data.subarray(Ue*Se/Re.data.BYTES_PER_ELEMENT,(Ue+1)*Se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Ue,Re.width,Re.height,1,Me,Ke,0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ve.depth,Me,Re.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Re.width,Re.height,ve.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ve.depth,Me,He,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Re.width,Re.height,ve.depth,0,Me,He,Re.data)}else{ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,Be[0].width,Be[0].height);for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],P.format!==pi?Me!==null?ze?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,Me,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,Me,He,Re.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,Me,He,Re.data)}else if(P.isDataArrayTexture)if(ze){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,ve.width,ve.height,ve.depth),ee)if(P.layerUpdates.size>0){const fe=P0(ve.width,ve.height,P.format,P.type);for(const he of P.layerUpdates){const Se=ve.data.subarray(he*fe/ve.data.BYTES_PER_ELEMENT,(he+1)*fe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,Me,He,Se)}P.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Me,He,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ve.width,ve.height,ve.depth,0,Me,He,ve.data);else if(P.isData3DTexture)ze?(lt&&t.texStorage3D(n.TEXTURE_3D,ye,Ae,ve.width,ve.height,ve.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Me,He,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ve.width,ve.height,ve.depth,0,Me,He,ve.data);else if(P.isFramebufferTexture){if(lt)if(ze)t.texStorage2D(n.TEXTURE_2D,ye,Ae,ve.width,ve.height);else{let fe=ve.width,he=ve.height;for(let Se=0;Se<ye;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ae,fe,he,0,Me,He,null),fe>>=1,he>>=1}}else if(Be.length>0){if(ze&&lt){const fe=q(Be[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ae,fe.width,fe.height)}for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Me,He,Re):t.texImage2D(n.TEXTURE_2D,fe,Ae,Me,He,Re);P.generateMipmaps=!1}else if(ze){if(lt){const fe=q(ve);t.texStorage2D(n.TEXTURE_2D,ye,Ae,fe.width,fe.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,He,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Me,He,ve);g(P)&&d(J),pe.__version=Q.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function V(D,P,O){if(P.image.length!==6)return;const J=B(D,P),re=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+O);const Q=i.get(re);if(re.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const pe=it.getPrimaries(it.workingColorSpace),me=P.colorSpace===mr?null:it.getPrimaries(P.colorSpace),ge=P.colorSpace===mr||pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=P.isCompressedTexture||P.image[0].isCompressedTexture,ve=P.image[0]&&P.image[0].isDataTexture,Me=[];for(let he=0;he<6;he++)!De&&!ve?Me[he]=m(P.image[he],!0,r.maxCubemapSize):Me[he]=ve?P.image[he].image:P.image[he],Me[he]=k(P,Me[he]);const He=Me[0],Ae=s.convert(P.format,P.colorSpace),Re=s.convert(P.type),Be=_(P.internalFormat,Ae,Re,P.colorSpace),ze=P.isVideoTexture!==!0,lt=Q.__version===void 0||J===!0,ee=re.dataReady;let ye=S(P,He);R(n.TEXTURE_CUBE_MAP,P);let fe;if(De){ze&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,He.width,He.height);for(let he=0;he<6;he++){fe=Me[he].mipmaps;for(let Se=0;Se<fe.length;Se++){const Ue=fe[Se];P.format!==pi?Ae!==null?ze?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ae,Re,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,Be,Ue.width,Ue.height,0,Ae,Re,Ue.data)}}}else{if(fe=P.mipmaps,ze&&lt){fe.length>0&&ye++;const he=q(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,he.width,he.height)}for(let he=0;he<6;he++)if(ve){ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Me[he].width,Me[he].height,Ae,Re,Me[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Be,Me[he].width,Me[he].height,0,Ae,Re,Me[he].data);for(let Se=0;Se<fe.length;Se++){const Ke=fe[Se].image[he].image;ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Ke.width,Ke.height,Ae,Re,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,Be,Ke.width,Ke.height,0,Ae,Re,Ke.data)}}else{ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae,Re,Me[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Be,Ae,Re,Me[he]);for(let Se=0;Se<fe.length;Se++){const Ue=fe[Se];ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Ae,Re,Ue.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,Be,Ae,Re,Ue.image[he])}}}g(P)&&d(n.TEXTURE_CUBE_MAP),Q.__version=re.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function $(D,P,O,J,re,Q){const pe=s.convert(O.format,O.colorSpace),me=s.convert(O.type),ge=_(O.internalFormat,pe,me,O.colorSpace);if(!i.get(P).__hasExternalTextures){const ve=Math.max(1,P.width>>Q),Me=Math.max(1,P.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,ge,ve,Me,P.depth,0,pe,me,null):t.texImage2D(re,Q,ge,ve,Me,0,pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Z(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,re,i.get(O).__webglTexture,0,se(P)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,re,i.get(O).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(D,P,O){if(n.bindRenderbuffer(n.RENDERBUFFER,D),P.depthBuffer){const J=P.depthTexture,re=J&&J.isDepthTexture?J.type:null,Q=x(P.stencilBuffer,re),pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=se(P);Z(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Q,P.width,P.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Q,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Q,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,D)}else{const J=P.textures;for(let re=0;re<J.length;re++){const Q=J[re],pe=s.convert(Q.format,Q.colorSpace),me=s.convert(Q.type),ge=_(Q.internalFormat,pe,me,Q.colorSpace),De=se(P);O&&Z(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ge,P.width,P.height):Z(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ge,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ge,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(D,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),M(P.depthTexture,0);const J=i.get(P.depthTexture).__webglTexture,re=se(P);if(P.depthTexture.format===va)Z(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(P.depthTexture.format===ka)Z(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function de(D){const P=i.get(D),O=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!P.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(P.__webglFramebuffer,D)}else if(O){P.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[J]),P.__webglDepthbuffer[J]=n.createRenderbuffer(),ce(P.__webglDepthbuffer[J],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=n.createRenderbuffer(),ce(P.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(D,P,O){const J=i.get(D);P!==void 0&&$(J.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&de(D)}function be(D){const P=D.texture,O=i.get(D),J=i.get(P);D.addEventListener("dispose",C);const re=D.textures,Q=D.isWebGLCubeRenderTarget===!0,pe=re.length>1;if(pe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=P.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let me=0;me<6;me++)if(P.mipmaps&&P.mipmaps.length>0){O.__webglFramebuffer[me]=[];for(let ge=0;ge<P.mipmaps.length;ge++)O.__webglFramebuffer[me][ge]=n.createFramebuffer()}else O.__webglFramebuffer[me]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){O.__webglFramebuffer=[];for(let me=0;me<P.mipmaps.length;me++)O.__webglFramebuffer[me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(pe)for(let me=0,ge=re.length;me<ge;me++){const De=i.get(re[me]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&Z(D)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const ge=re[me];O.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const De=s.convert(ge.format,ge.colorSpace),ve=s.convert(ge.type),Me=_(ge.internalFormat,De,ve,ge.colorSpace,D.isXRRenderTarget===!0),He=se(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Me,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,O.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),R(n.TEXTURE_CUBE_MAP,P);for(let me=0;me<6;me++)if(P.mipmaps&&P.mipmaps.length>0)for(let ge=0;ge<P.mipmaps.length;ge++)$(O.__webglFramebuffer[me][ge],D,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else $(O.__webglFramebuffer[me],D,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(P)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let me=0,ge=re.length;me<ge;me++){const De=re[me],ve=i.get(De);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),R(n.TEXTURE_2D,De),$(O.__webglFramebuffer,D,De,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),g(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,J.__webglTexture),R(me,P),P.mipmaps&&P.mipmaps.length>0)for(let ge=0;ge<P.mipmaps.length;ge++)$(O.__webglFramebuffer[ge],D,P,n.COLOR_ATTACHMENT0,me,ge);else $(O.__webglFramebuffer,D,P,n.COLOR_ATTACHMENT0,me,0);g(P)&&d(me),t.unbindTexture()}D.depthBuffer&&de(D)}function Te(D){const P=D.textures;for(let O=0,J=P.length;O<J;O++){const re=P[O];if(g(re)){const Q=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(re).__webglTexture;t.bindTexture(Q,pe),d(Q),t.unbindTexture()}}}const W=[],Oe=[];function b(D){if(D.samples>0){if(Z(D)===!1){const P=D.textures,O=D.width,J=D.height;let re=n.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(D),me=P.length>1;if(me)for(let ge=0;ge<P.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<P.length;ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const De=i.get(P[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,re,n.NEAREST),l===!0&&(W.length=0,Oe.length=0,W.push(n.COLOR_ATTACHMENT0+ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(W.push(Q),Oe.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ge=0;ge<P.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const De=i.get(P[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const P=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function se(D){return Math.min(r.maxSamples,D.samples)}function Z(D){const P=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function j(D){const P=a.render.frame;u.get(D)!==P&&(u.set(D,P),D.update())}function k(D,P){const O=D.colorSpace,J=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||O!==Hr&&O!==mr&&(it.getTransfer(O)===dt?(J!==pi||re!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),P}function q(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=M,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=_e,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=b,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Z}function nC(n,e){function t(i,r=mr){let s;const a=it.getTransfer(r);if(i===Ji)return n.UNSIGNED_BYTE;if(i===jp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rx)return n.BYTE;if(i===Px)return n.SHORT;if(i===qo)return n.UNSIGNED_SHORT;if(i===Bp)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===Xi)return n.FLOAT;if(i===ll)return n.HALF_FLOAT;if(i===Lx)return n.ALPHA;if(i===Dx)return n.RGB;if(i===pi)return n.RGBA;if(i===kx)return n.LUMINANCE;if(i===Ix)return n.LUMINANCE_ALPHA;if(i===va)return n.DEPTH_COMPONENT;if(i===ka)return n.DEPTH_STENCIL;if(i===Ux)return n.RED;if(i===Hp)return n.RED_INTEGER;if(i===Ox)return n.RG;if(i===Gp)return n.RG_INTEGER;if(i===Wp)return n.RGBA_INTEGER;if(i===vc||i===xc||i===yc||i===Sc)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ih||i===rh)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ah)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===yh||i===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fx||i===wh||i===Mh||i===bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class iC extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rC={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(c,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new yn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ur({vertexShader:sC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lC extends Ga{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const m=new oC,g=t.getContextAttributes();let d=null,_=null;const x=[],S=[],T=new Xe;let C=null;const A=new fn;A.layers.enable(1),A.viewport=new ft;const N=new fn;N.layers.enable(2),N.viewport=new ft;const w=[A,N],E=new iC;E.layers.enable(1),E.layers.enable(2);let F=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=x[V];return $===void 0&&($=new Vd,x[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=x[V];return $===void 0&&($=new Vd,x[V]=$),$.getGripSpace()},this.getHand=function(V){let $=x[V];return $===void 0&&($=new Vd,x[V]=$),$.getHandSpace()};function z(V){const $=S.indexOf(V.inputSource);if($===-1)return;const ce=x[$];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||a),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function M(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",H);for(let V=0;V<x.length;V++){const $=S[V];$!==null&&(S[V]=null,x[V].disconnect($))}F=null,L=null,m.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",M),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ts(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,ce=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?ka:va,ce=g.stencil?Da:Es);const de={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Ts(h.textureWidth,h.textureHeight,{format:pi,type:Ji,depthTexture:new ey(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(V){for(let $=0;$<V.removed.length;$++){const ce=V.removed[$],ue=S.indexOf(ce);ue>=0&&(S[ue]=null,x[ue].disconnect(ce))}for(let $=0;$<V.added.length;$++){const ce=V.added[$];let ue=S.indexOf(ce);if(ue===-1){for(let _e=0;_e<x.length;_e++)if(_e>=S.length){S.push(ce),ue=_e;break}else if(S[_e]===null){S[_e]=ce,ue=_e;break}if(ue===-1)break}const de=x[ue];de&&de.connect(ce)}}const K=new ne,Y=new ne;function G(V,$,ce){K.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ue=K.distanceTo(Y),de=$.projectionMatrix.elements,_e=ce.projectionMatrix.elements,be=de[14]/(de[10]-1),Te=de[14]/(de[10]+1),W=(de[9]+1)/de[5],Oe=(de[9]-1)/de[5],b=(de[8]-1)/de[0],se=(_e[8]+1)/_e[0],Z=be*b,j=be*se,k=ue/(-b+se),q=k*-b;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(q),V.translateZ(k),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const D=be+k,P=Te+k,O=Z-q,J=j+(ue-q),re=W*Te/P*D,Q=Oe*Te/P*D;V.projectionMatrix.makePerspective(O,J,re,Q,D,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;m.texture!==null&&(V.near=m.depthNear,V.far=m.depthFar),E.near=N.near=A.near=V.near,E.far=N.far=A.far=V.far,(F!==E.near||L!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),F=E.near,L=E.far,A.near=F,A.far=L,N.near=F,N.far=L,A.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const $=V.parent,ce=E.cameras;X(E,$);for(let ue=0;ue<ce.length;ue++)X(ce[ue],$);ce.length===2?G(E,A,N):E.projectionMatrix.copy(A.projectionMatrix),I(V,E,$)};function I(V,$,ce){ce===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Eh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)};let R=null;function B(V,$){if(u=$.getViewerPose(c||a),v=$,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let _e=0;_e<ce.length;_e++){const be=ce[_e];let Te=null;if(p!==null)Te=p.getViewport(be);else{const Oe=f.getViewSubImage(h,be);Te=Oe.viewport,_e===0&&(e.setRenderTargetTextures(_,Oe.colorTexture,h.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(_))}let W=w[_e];W===void 0&&(W=new fn,W.layers.enable(_e),W.viewport=new ft,w[_e]=W),W.matrix.fromArray(be.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(be.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Te.x,Te.y,Te.width,Te.height),_e===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(W)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const _e=f.getDepthInformation(ce[0]);_e&&_e.isValid&&_e.texture&&m.init(e,_e,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ue=S[ce],de=x[ce];ue!==null&&de!==void 0&&de.update(ue,$,c||a)}R&&R(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const ae=new Qx;ae.setAnimationLoop(B),this.setAnimationLoop=function(V){R=V},this.dispose=function(){}}}const Kr=new Pi,cC=new St;function uC(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,$x(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,_,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===xn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===xn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,S=_.envMapRotation;x&&(g.envMap.value=x,Kr.copy(S),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4(cC.makeRotationFromEuler(Kr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dC(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(_,T);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function u(_){const x=f();_.__bindingPointIndex=x;const S=n.createBuffer(),T=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=r[_.id],S=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,A=S.length;C<A;C++){const N=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,E=N.length;w<E;w++){const F=N[w];if(p(F,C,w,T)===!0){const L=F.__offset,z=Array.isArray(F.value)?F.value:[F.value];let M=0;for(let H=0;H<z.length;H++){const K=z[H],Y=m(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,L+M,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,M),M+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,S,T){const C=_.value,A=x+"_"+S;if(T[A]===void 0)return typeof C=="number"||typeof C=="boolean"?T[A]=C:T[A]=C.clone(),!0;{const N=T[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return T[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function v(_){const x=_.uniforms;let S=0;const T=16;for(let A=0,N=x.length;A<N;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,F=w.length;E<F;E++){const L=w[E],z=Array.isArray(L.value)?L.value:[L.value];for(let M=0,H=z.length;M<H;M++){const K=z[M],Y=m(K),G=S%T,X=G%Y.boundary,I=G+X;S+=X,I!==0&&T-I<Y.storage&&(S+=T-I),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Y.storage}}}const C=S%T;return C>0&&(S+=T-C),_.__size=S,_.__cache={},this}function m(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class sy{constructor(e={}){const{canvas:t=nb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=Pr,this.toneMappingExposure=1;const x=this;let S=!1,T=0,C=0,A=null,N=-1,w=null;const E=new ft,F=new ft;let L=null;const z=new Ze(0);let M=0,H=t.width,K=t.height,Y=1,G=null,X=null;const I=new ft(0,0,H,K),R=new ft(0,0,H,K);let B=!1;const ae=new Yp;let V=!1,$=!1;const ce=new St,ue=new ne,de=new ft,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Te(){return A===null?Y:1}let W=i;function Oe(U,te){return t.getContext(U,te)}try{const U={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zp}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Se,!1),W===null){const te="webgl2";if(W=Oe(te,U),W===null)throw Oe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let b,se,Z,j,k,q,D,P,O,J,re,Q,pe,me,ge,De,ve,Me,He,Ae,Re,Be,ze,lt;function ee(){b=new vT(W),b.init(),Be=new nC(W,b),se=new fT(W,b,e,Be),Z=new JA(W),j=new ST(W),k=new zA,q=new tC(W,b,Z,k,se,Be,j),D=new pT(x),P=new _T(x),O=new Cb(W),ze=new uT(W,O),J=new xT(W,O,j,ze),re=new MT(W,J,O,j),He=new wT(W,se,q),De=new hT(k),Q=new FA(x,D,P,b,se,ze,De),pe=new uC(x,k),me=new jA,ge=new YA(b),Me=new cT(x,D,P,Z,re,h,l),ve=new QA(x,re,se),lt=new dC(W,j,se,Z),Ae=new dT(W,b,j),Re=new yT(W,b,j),j.programs=Q.programs,x.capabilities=se,x.extensions=b,x.properties=k,x.renderLists=me,x.shadowMap=ve,x.state=Z,x.info=j}ee();const ye=new lC(x,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const U=b.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=b.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(H,K,!1))},this.getSize=function(U){return U.set(H,K)},this.setSize=function(U,te,oe=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=U,K=te,t.width=Math.floor(U*Y),t.height=Math.floor(te*Y),oe===!0&&(t.style.width=U+"px",t.style.height=te+"px"),this.setViewport(0,0,U,te)},this.getDrawingBufferSize=function(U){return U.set(H*Y,K*Y).floor()},this.setDrawingBufferSize=function(U,te,oe){H=U,K=te,Y=oe,t.width=Math.floor(U*oe),t.height=Math.floor(te*oe),this.setViewport(0,0,U,te)},this.getCurrentViewport=function(U){return U.copy(E)},this.getViewport=function(U){return U.copy(I)},this.setViewport=function(U,te,oe,le){U.isVector4?I.set(U.x,U.y,U.z,U.w):I.set(U,te,oe,le),Z.viewport(E.copy(I).multiplyScalar(Y).round())},this.getScissor=function(U){return U.copy(R)},this.setScissor=function(U,te,oe,le){U.isVector4?R.set(U.x,U.y,U.z,U.w):R.set(U,te,oe,le),Z.scissor(F.copy(R).multiplyScalar(Y).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(U){Z.setScissorTest(B=U)},this.setOpaqueSort=function(U){G=U},this.setTransparentSort=function(U){X=U},this.getClearColor=function(U){return U.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(U=!0,te=!0,oe=!0){let le=0;if(U){let ie=!1;if(A!==null){const we=A.texture.format;ie=we===Wp||we===Gp||we===Hp}if(ie){const we=A.texture.type,Ce=we===Ji||we===Es||we===qo||we===Da||we===jp||we===Vp,Ne=Me.getClearColor(),Le=Me.getClearAlpha(),je=Ne.r,Ve=Ne.g,Fe=Ne.b;Ce?(p[0]=je,p[1]=Ve,p[2]=Fe,p[3]=Le,W.clearBufferuiv(W.COLOR,0,p)):(v[0]=je,v[1]=Ve,v[2]=Fe,v[3]=Le,W.clearBufferiv(W.COLOR,0,v))}else le|=W.COLOR_BUFFER_BIT}te&&(le|=W.DEPTH_BUFFER_BIT),oe&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),ge.dispose(),k.dispose(),D.dispose(),P.dispose(),re.dispose(),ze.dispose(),lt.dispose(),Q.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",vi),ye.removeEventListener("sessionend",xm),Wr.stop()};function fe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const U=j.autoReset,te=ve.enabled,oe=ve.autoUpdate,le=ve.needsUpdate,ie=ve.type;ee(),j.autoReset=U,ve.enabled=te,ve.autoUpdate=oe,ve.needsUpdate=le,ve.type=ie}function Se(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ue(U){const te=U.target;te.removeEventListener("dispose",Ue),Ke(te)}function Ke(U){Rt(U),k.remove(U)}function Rt(U){const te=k.get(U).programs;te!==void 0&&(te.forEach(function(oe){Q.releaseProgram(oe)}),U.isShaderMaterial&&Q.releaseShaderCache(U))}this.renderBufferDirect=function(U,te,oe,le,ie,we){te===null&&(te=_e);const Ce=ie.isMesh&&ie.matrixWorld.determinant()<0,Ne=a1(U,te,oe,le,ie);Z.setMaterial(le,Ce);let Le=oe.index,je=1;if(le.wireframe===!0){if(Le=J.getWireframeAttribute(oe),Le===void 0)return;je=2}const Ve=oe.drawRange,Fe=oe.attributes.position;let et=Ve.start*je,Mt=(Ve.start+Ve.count)*je;we!==null&&(et=Math.max(et,we.start*je),Mt=Math.min(Mt,(we.start+we.count)*je)),Le!==null?(et=Math.max(et,0),Mt=Math.min(Mt,Le.count)):Fe!=null&&(et=Math.max(et,0),Mt=Math.min(Mt,Fe.count));const bt=Mt-et;if(bt<0||bt===1/0)return;ze.setup(ie,le,Ne,oe,Le);let An,tt=Ae;if(Le!==null&&(An=O.get(Le),tt=Re,tt.setIndex(An)),ie.isMesh)le.wireframe===!0?(Z.setLineWidth(le.wireframeLinewidth*Te()),tt.setMode(W.LINES)):tt.setMode(W.TRIANGLES);else if(ie.isLine){let ke=le.linewidth;ke===void 0&&(ke=1),Z.setLineWidth(ke*Te()),ie.isLineSegments?tt.setMode(W.LINES):ie.isLineLoop?tt.setMode(W.LINE_LOOP):tt.setMode(W.LINE_STRIP)}else ie.isPoints?tt.setMode(W.POINTS):ie.isSprite&&tt.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)tt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(b.get("WEBGL_multi_draw"))tt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ke=ie._multiDrawStarts,Ht=ie._multiDrawCounts,nt=ie._multiDrawCount,si=Le?O.get(Le).bytesPerElement:1,Ps=k.get(le).currentProgram.getUniforms();for(let Cn=0;Cn<nt;Cn++)Ps.setValue(W,"_gl_DrawID",Cn),tt.render(ke[Cn]/si,Ht[Cn])}else if(ie.isInstancedMesh)tt.renderInstances(et,bt,ie.count);else if(oe.isInstancedBufferGeometry){const ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ht=Math.min(oe.instanceCount,ke);tt.renderInstances(et,bt,Ht)}else tt.render(et,bt)};function Vt(U,te,oe){U.transparent===!0&&U.side===Hi&&U.forceSinglePass===!1?(U.side=xn,U.needsUpdate=!0,ml(U,te,oe),U.side=Ir,U.needsUpdate=!0,ml(U,te,oe),U.side=Hi):ml(U,te,oe)}this.compile=function(U,te,oe=null){oe===null&&(oe=U),g=ge.get(oe),g.init(te),_.push(g),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),U!==oe&&U.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),g.setupLights();const le=new Set;return U.traverse(function(ie){const we=ie.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const Ne=we[Ce];Vt(Ne,oe,ie),le.add(Ne)}else Vt(we,oe,ie),le.add(we)}),_.pop(),g=null,le},this.compileAsync=function(U,te,oe=null){const le=this.compile(U,te,oe);return new Promise(ie=>{function we(){if(le.forEach(function(Ce){k.get(Ce).currentProgram.isReady()&&le.delete(Ce)}),le.size===0){ie(U);return}setTimeout(we,10)}b.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Je=null;function Li(U){Je&&Je(U)}function vi(){Wr.stop()}function xm(){Wr.start()}const Wr=new Qx;Wr.setAnimationLoop(Li),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(U){Je=U,ye.setAnimationLoop(U),U===null?Wr.stop():Wr.start()},ye.addEventListener("sessionstart",vi),ye.addEventListener("sessionend",xm),this.render=function(U,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(te),te=ye.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,te,A),g=ge.get(U,_.length),g.init(te),_.push(g),ce.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ae.setFromProjectionMatrix(ce),$=this.localClippingEnabled,V=De.init(this.clippingPlanes,$),m=me.get(U,d.length),m.init(),d.push(m),ye.enabled===!0&&ye.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&Fu(we,te,-1/0,x.sortObjects)}Fu(U,te,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(G,X),be=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,be&&Me.addToRenderList(m,U),this.info.render.frame++,V===!0&&De.beginShadows();const oe=g.state.shadowsArray;ve.render(oe,U,te),V===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=m.opaque,ie=m.transmissive;if(g.setupLights(),te.isArrayCamera){const we=te.cameras;if(ie.length>0)for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Le=we[Ce];Sm(le,ie,U,Le)}be&&Me.render(U);for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Le=we[Ce];ym(m,U,Le,Le.viewport)}}else ie.length>0&&Sm(le,ie,U,te),be&&Me.render(U),ym(m,U,te);A!==null&&(q.updateMultisampleRenderTarget(A),q.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(x,U,te),ze.resetDefaultState(),N=-1,w=null,_.pop(),_.length>0?(g=_[_.length-1],V===!0&&De.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Fu(U,te,oe,le){if(U.visible===!1)return;if(U.layers.test(te.layers)){if(U.isGroup)oe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(te);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ae.intersectsSprite(U)){le&&de.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ce);const Ce=re.update(U),Ne=U.material;Ne.visible&&m.push(U,Ce,Ne,oe,de.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ae.intersectsObject(U))){const Ce=re.update(U),Ne=U.material;if(le&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),de.copy(U.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),de.copy(Ce.boundingSphere.center)),de.applyMatrix4(U.matrixWorld).applyMatrix4(ce)),Array.isArray(Ne)){const Le=Ce.groups;for(let je=0,Ve=Le.length;je<Ve;je++){const Fe=Le[je],et=Ne[Fe.materialIndex];et&&et.visible&&m.push(U,Ce,et,oe,de.z,Fe)}}else Ne.visible&&m.push(U,Ce,Ne,oe,de.z,null)}}const we=U.children;for(let Ce=0,Ne=we.length;Ce<Ne;Ce++)Fu(we[Ce],te,oe,le)}function ym(U,te,oe,le){const ie=U.opaque,we=U.transmissive,Ce=U.transparent;g.setupLightsView(oe),V===!0&&De.setGlobalState(x.clippingPlanes,oe),le&&Z.viewport(E.copy(le)),ie.length>0&&pl(ie,te,oe),we.length>0&&pl(we,te,oe),Ce.length>0&&pl(Ce,te,oe),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Sm(U,te,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[le.id]===void 0&&(g.state.transmissionRenderTarget[le.id]=new Ts(1,1,{generateMipmaps:!0,type:b.has("EXT_color_buffer_half_float")||b.has("EXT_color_buffer_float")?ll:Ji,minFilter:ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const we=g.state.transmissionRenderTarget[le.id],Ce=le.viewport||E;we.setSize(Ce.z,Ce.w);const Ne=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(z),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear(),be&&Me.render(oe);const Le=x.toneMapping;x.toneMapping=Pr;const je=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),g.setupLightsView(le),V===!0&&De.setGlobalState(x.clippingPlanes,le),pl(U,oe,le),q.updateMultisampleRenderTarget(we),q.updateRenderTargetMipmap(we),b.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,et=te.length;Fe<et;Fe++){const Mt=te[Fe],bt=Mt.object,An=Mt.geometry,tt=Mt.material,ke=Mt.group;if(tt.side===Hi&&bt.layers.test(le.layers)){const Ht=tt.side;tt.side=xn,tt.needsUpdate=!0,wm(bt,oe,le,An,tt,ke),tt.side=Ht,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(we),q.updateRenderTargetMipmap(we))}x.setRenderTarget(Ne),x.setClearColor(z,M),je!==void 0&&(le.viewport=je),x.toneMapping=Le}function pl(U,te,oe){const le=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,we=U.length;ie<we;ie++){const Ce=U[ie],Ne=Ce.object,Le=Ce.geometry,je=le===null?Ce.material:le,Ve=Ce.group;Ne.layers.test(oe.layers)&&wm(Ne,te,oe,Le,je,Ve)}}function wm(U,te,oe,le,ie,we){U.onBeforeRender(x,te,oe,le,ie,we),U.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ie.transparent===!0&&ie.side===Hi&&ie.forceSinglePass===!1?(ie.side=xn,ie.needsUpdate=!0,x.renderBufferDirect(oe,te,le,ie,U,we),ie.side=Ir,ie.needsUpdate=!0,x.renderBufferDirect(oe,te,le,ie,U,we),ie.side=Hi):x.renderBufferDirect(oe,te,le,ie,U,we),U.onAfterRender(x,te,oe,le,ie,we)}function ml(U,te,oe){te.isScene!==!0&&(te=_e);const le=k.get(U),ie=g.state.lights,we=g.state.shadowsArray,Ce=ie.state.version,Ne=Q.getParameters(U,ie.state,we,te,oe),Le=Q.getProgramCacheKey(Ne);let je=le.programs;le.environment=U.isMeshStandardMaterial?te.environment:null,le.fog=te.fog,le.envMap=(U.isMeshStandardMaterial?P:D).get(U.envMap||le.environment),le.envMapRotation=le.environment!==null&&U.envMap===null?te.environmentRotation:U.envMapRotation,je===void 0&&(U.addEventListener("dispose",Ue),je=new Map,le.programs=je);let Ve=je.get(Le);if(Ve!==void 0){if(le.currentProgram===Ve&&le.lightsStateVersion===Ce)return bm(U,Ne),Ve}else Ne.uniforms=Q.getUniforms(U),U.onBeforeCompile(Ne,x),Ve=Q.acquireProgram(Ne,Le),je.set(Le,Ve),le.uniforms=Ne.uniforms;const Fe=le.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Fe.clippingPlanes=De.uniform),bm(U,Ne),le.needsLights=l1(U),le.lightsStateVersion=Ce,le.needsLights&&(Fe.ambientLightColor.value=ie.state.ambient,Fe.lightProbe.value=ie.state.probe,Fe.directionalLights.value=ie.state.directional,Fe.directionalLightShadows.value=ie.state.directionalShadow,Fe.spotLights.value=ie.state.spot,Fe.spotLightShadows.value=ie.state.spotShadow,Fe.rectAreaLights.value=ie.state.rectArea,Fe.ltc_1.value=ie.state.rectAreaLTC1,Fe.ltc_2.value=ie.state.rectAreaLTC2,Fe.pointLights.value=ie.state.point,Fe.pointLightShadows.value=ie.state.pointShadow,Fe.hemisphereLights.value=ie.state.hemi,Fe.directionalShadowMap.value=ie.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Fe.spotShadowMap.value=ie.state.spotShadowMap,Fe.spotLightMatrix.value=ie.state.spotLightMatrix,Fe.spotLightMap.value=ie.state.spotLightMap,Fe.pointShadowMap.value=ie.state.pointShadowMap,Fe.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.currentProgram=Ve,le.uniformsList=null,Ve}function Mm(U){if(U.uniformsList===null){const te=U.currentProgram.getUniforms();U.uniformsList=Mc.seqWithValue(te.seq,U.uniforms)}return U.uniformsList}function bm(U,te){const oe=k.get(U);oe.outputColorSpace=te.outputColorSpace,oe.batching=te.batching,oe.batchingColor=te.batchingColor,oe.instancing=te.instancing,oe.instancingColor=te.instancingColor,oe.instancingMorph=te.instancingMorph,oe.skinning=te.skinning,oe.morphTargets=te.morphTargets,oe.morphNormals=te.morphNormals,oe.morphColors=te.morphColors,oe.morphTargetsCount=te.morphTargetsCount,oe.numClippingPlanes=te.numClippingPlanes,oe.numIntersection=te.numClipIntersection,oe.vertexAlphas=te.vertexAlphas,oe.vertexTangents=te.vertexTangents,oe.toneMapping=te.toneMapping}function a1(U,te,oe,le,ie){te.isScene!==!0&&(te=_e),q.resetTextureUnits();const we=te.fog,Ce=le.isMeshStandardMaterial?te.environment:null,Ne=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hr,Le=(le.isMeshStandardMaterial?P:D).get(le.envMap||Ce),je=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ve=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Fe=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Mt=!!oe.morphAttributes.color;let bt=Pr;le.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=x.toneMapping);const An=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,tt=An!==void 0?An.length:0,ke=k.get(le),Ht=g.state.lights;if(V===!0&&($===!0||U!==w)){const Wn=U===w&&le.id===N;De.setState(le,U,Wn)}let nt=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ht.state.version||ke.outputColorSpace!==Ne||ie.isBatchedMesh&&ke.batching===!1||!ie.isBatchedMesh&&ke.batching===!0||ie.isBatchedMesh&&ke.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ke.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ke.instancing===!1||!ie.isInstancedMesh&&ke.instancing===!0||ie.isSkinnedMesh&&ke.skinning===!1||!ie.isSkinnedMesh&&ke.skinning===!0||ie.isInstancedMesh&&ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ke.instancingMorph===!1&&ie.morphTexture!==null||ke.envMap!==Le||le.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==De.numPlanes||ke.numIntersection!==De.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==Ve||ke.morphTargets!==Fe||ke.morphNormals!==et||ke.morphColors!==Mt||ke.toneMapping!==bt||ke.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,ke.__version=le.version);let si=ke.currentProgram;nt===!0&&(si=ml(le,te,ie));let Ps=!1,Cn=!1,zu=!1;const Pt=si.getUniforms(),ir=ke.uniforms;if(Z.useProgram(si.program)&&(Ps=!0,Cn=!0,zu=!0),le.id!==N&&(N=le.id,Cn=!0),Ps||w!==U){Pt.setValue(W,"projectionMatrix",U.projectionMatrix),Pt.setValue(W,"viewMatrix",U.matrixWorldInverse);const Wn=Pt.map.cameraPosition;Wn!==void 0&&Wn.setValue(W,ue.setFromMatrixPosition(U.matrixWorld)),se.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",U.isOrthographicCamera===!0),w!==U&&(w=U,Cn=!0,zu=!0)}if(ie.isSkinnedMesh){Pt.setOptional(W,ie,"bindMatrix"),Pt.setOptional(W,ie,"bindMatrixInverse");const Wn=ie.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Pt.setValue(W,"boneTexture",Wn.boneTexture,q))}ie.isBatchedMesh&&(Pt.setOptional(W,ie,"batchingTexture"),Pt.setValue(W,"batchingTexture",ie._matricesTexture,q),Pt.setOptional(W,ie,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",ie._indirectTexture,q),Pt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",ie._colorsTexture,q));const Bu=oe.morphAttributes;if((Bu.position!==void 0||Bu.normal!==void 0||Bu.color!==void 0)&&He.update(ie,oe,si),(Cn||ke.receiveShadow!==ie.receiveShadow)&&(ke.receiveShadow=ie.receiveShadow,Pt.setValue(W,"receiveShadow",ie.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(ir.envMap.value=Le,ir.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&te.environment!==null&&(ir.envMapIntensity.value=te.environmentIntensity),Cn&&(Pt.setValue(W,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&o1(ir,zu),we&&le.fog===!0&&pe.refreshFogUniforms(ir,we),pe.refreshMaterialUniforms(ir,le,Y,K,g.state.transmissionRenderTarget[U.id]),Mc.upload(W,Mm(ke),ir,q)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Mc.upload(W,Mm(ke),ir,q),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Pt.setValue(W,"center",ie.center),Pt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(W,"normalMatrix",ie.normalMatrix),Pt.setValue(W,"modelMatrix",ie.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Wn=le.uniformsGroups;for(let ju=0,c1=Wn.length;ju<c1;ju++){const Em=Wn[ju];lt.update(Em,si),lt.bind(Em,si)}}return si}function o1(U,te){U.ambientLightColor.needsUpdate=te,U.lightProbe.needsUpdate=te,U.directionalLights.needsUpdate=te,U.directionalLightShadows.needsUpdate=te,U.pointLights.needsUpdate=te,U.pointLightShadows.needsUpdate=te,U.spotLights.needsUpdate=te,U.spotLightShadows.needsUpdate=te,U.rectAreaLights.needsUpdate=te,U.hemisphereLights.needsUpdate=te}function l1(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,te,oe){k.get(U.texture).__webglTexture=te,k.get(U.depthTexture).__webglTexture=oe;const le=k.get(U);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||b.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,te){const oe=k.get(U);oe.__webglFramebuffer=te,oe.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(U,te=0,oe=0){A=U,T=te,C=oe;let le=!0,ie=null,we=!1,Ce=!1;if(U){const Le=k.get(U);Le.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(W.FRAMEBUFFER,null),le=!1):Le.__webglFramebuffer===void 0?q.setupRenderTarget(U):Le.__hasExternalTextures&&q.rebindTextures(U,k.get(U.texture).__webglTexture,k.get(U.depthTexture).__webglTexture);const je=U.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const Ve=k.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ve[te])?ie=Ve[te][oe]:ie=Ve[te],we=!0):U.samples>0&&q.useMultisampledRTT(U)===!1?ie=k.get(U).__webglMultisampledFramebuffer:Array.isArray(Ve)?ie=Ve[oe]:ie=Ve,E.copy(U.viewport),F.copy(U.scissor),L=U.scissorTest}else E.copy(I).multiplyScalar(Y).floor(),F.copy(R).multiplyScalar(Y).floor(),L=B;if(Z.bindFramebuffer(W.FRAMEBUFFER,ie)&&le&&Z.drawBuffers(U,ie),Z.viewport(E),Z.scissor(F),Z.setScissorTest(L),we){const Le=k.get(U.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le.__webglTexture,oe)}else if(Ce){const Le=k.get(U.texture),je=te||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Le.__webglTexture,oe||0,je)}N=-1},this.readRenderTargetPixels=function(U,te,oe,le,ie,we,Ce){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=k.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const Le=U.texture,je=Le.format,Ve=Le.type;if(!se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=U.width-le&&oe>=0&&oe<=U.height-ie&&W.readPixels(te,oe,le,ie,Be.convert(je),Be.convert(Ve),we)}finally{const Le=A!==null?k.get(A).__webglFramebuffer:null;Z.bindFramebuffer(W.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(U,te,oe,le,ie,we,Ce){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=k.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const Le=U.texture,je=Le.format,Ve=Le.type;if(!se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=U.width-le&&oe>=0&&oe<=U.height-ie){const Fe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Fe),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),W.readPixels(te,oe,le,ie,Be.convert(je),Be.convert(Ve),0),W.flush();const et=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);await ib(W,et,4);try{W.bindBuffer(W.PIXEL_PACK_BUFFER,Fe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we)}finally{W.deleteBuffer(Fe),W.deleteSync(et)}return we}}finally{const Le=A!==null?k.get(A).__webglFramebuffer:null;Z.bindFramebuffer(W.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(U,te=null,oe=0){U.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,U=arguments[1]);const le=Math.pow(2,-oe),ie=Math.floor(U.image.width*le),we=Math.floor(U.image.height*le),Ce=te!==null?te.x:0,Ne=te!==null?te.y:0;q.setTexture2D(U,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Ce,Ne,ie,we),Z.unbindTexture()},this.copyTextureToTexture=function(U,te,oe=null,le=null,ie=0){U.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,U=arguments[1],te=arguments[2],ie=arguments[3]||0,oe=null);let we,Ce,Ne,Le,je,Ve;oe!==null?(we=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,Ne=oe.min.x,Le=oe.min.y):(we=U.image.width,Ce=U.image.height,Ne=0,Le=0),le!==null?(je=le.x,Ve=le.y):(je=0,Ve=0);const Fe=Be.convert(te.format),et=Be.convert(te.type);q.setTexture2D(te,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const Mt=W.getParameter(W.UNPACK_ROW_LENGTH),bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),An=W.getParameter(W.UNPACK_SKIP_PIXELS),tt=W.getParameter(W.UNPACK_SKIP_ROWS),ke=W.getParameter(W.UNPACK_SKIP_IMAGES),Ht=U.isCompressedTexture?U.mipmaps[ie]:U.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ht.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ne),W.pixelStorei(W.UNPACK_SKIP_ROWS,Le),U.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ie,je,Ve,we,Ce,Fe,et,Ht.data):U.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ie,je,Ve,Ht.width,Ht.height,Fe,Ht.data):W.texSubImage2D(W.TEXTURE_2D,ie,je,Ve,we,Ce,Fe,et,Ht),W.pixelStorei(W.UNPACK_ROW_LENGTH,Mt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,An),W.pixelStorei(W.UNPACK_SKIP_ROWS,tt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ke),ie===0&&te.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(U,te,oe=null,le=null,ie=0){U.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,U=arguments[2],te=arguments[3],ie=arguments[4]||0);let we,Ce,Ne,Le,je,Ve,Fe,et,Mt;const bt=U.isCompressedTexture?U.mipmaps[ie]:U.image;oe!==null?(we=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,Ne=oe.max.z-oe.min.z,Le=oe.min.x,je=oe.min.y,Ve=oe.min.z):(we=bt.width,Ce=bt.height,Ne=bt.depth,Le=0,je=0,Ve=0),le!==null?(Fe=le.x,et=le.y,Mt=le.z):(Fe=0,et=0,Mt=0);const An=Be.convert(te.format),tt=Be.convert(te.type);let ke;if(te.isData3DTexture)q.setTexture3D(te,0),ke=W.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)q.setTexture2DArray(te,0),ke=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const Ht=W.getParameter(W.UNPACK_ROW_LENGTH),nt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),si=W.getParameter(W.UNPACK_SKIP_PIXELS),Ps=W.getParameter(W.UNPACK_SKIP_ROWS),Cn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,bt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Le),W.pixelStorei(W.UNPACK_SKIP_ROWS,je),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ve),U.isDataTexture||U.isData3DTexture?W.texSubImage3D(ke,ie,Fe,et,Mt,we,Ce,Ne,An,tt,bt.data):te.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,ie,Fe,et,Mt,we,Ce,Ne,An,bt.data):W.texSubImage3D(ke,ie,Fe,et,Mt,we,Ce,Ne,An,tt,bt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ht),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,si),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ps),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Cn),ie===0&&te.generateMipmaps&&W.generateMipmap(ke),Z.unbindTexture()},this.initRenderTarget=function(U){k.get(U).__webglFramebuffer===void 0&&q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?q.setTextureCube(U,0):U.isData3DTexture?q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?q.setTexture2DArray(U,0):q.setTexture2D(U,0),Z.unbindTexture()},this.resetState=function(){T=0,C=0,A=null,Z.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xp?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Nu?"display-p3":"srgb"}}class $p{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new $p(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ay extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zp extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const N0=new St,Ah=new Gx,nc=new Lu,ic=new ne;class oy extends Xt{constructor(e=new ri,t=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;N0.copy(r).invert(),Ah.copy(e.ray).applyMatrix4(N0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,m=p;v<m;v++){const g=c.getX(v);ic.fromBufferAttribute(f,g),L0(ic,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,m=p;v<m;v++)ic.fromBufferAttribute(f,v),L0(ic,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function L0(n,e,t,i,r,s,a){const o=Ah.distanceSqToPoint(n);if(o<t){const l=new ne;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Kp extends ri{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Fn(s,3)),this.setAttribute("normal",new Fn(s.slice(),3)),this.setAttribute("uv",new Fn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const x=new ne,S=new ne,T=new ne;for(let C=0;C<t.length;C+=3)p(t[C+0],x),p(t[C+1],S),p(t[C+2],T),l(x,S,T,_)}function l(_,x,S,T){const C=T+1,A=[];for(let N=0;N<=C;N++){A[N]=[];const w=_.clone().lerp(S,N/C),E=x.clone().lerp(S,N/C),F=C-N;for(let L=0;L<=F;L++)L===0&&N===C?A[N][L]=w:A[N][L]=w.clone().lerp(E,L/F)}for(let N=0;N<C;N++)for(let w=0;w<2*(C-N)-1;w++){const E=Math.floor(w/2);w%2===0?(h(A[N][E+1]),h(A[N+1][E]),h(A[N][E])):(h(A[N][E+1]),h(A[N+1][E+1]),h(A[N+1][E]))}}function c(_){const x=new ne;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(_),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const _=new ne;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const S=g(_)/2/Math.PI+.5,T=d(_)/Math.PI+.5;a.push(S,1-T)}v(),f()}function f(){for(let _=0;_<a.length;_+=6){const x=a[_+0],S=a[_+2],T=a[_+4],C=Math.max(x,S,T),A=Math.min(x,S,T);C>.9&&A<.1&&(x<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,x){const S=_*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const _=new ne,x=new ne,S=new ne,T=new ne,C=new Xe,A=new Xe,N=new Xe;for(let w=0,E=0;w<s.length;w+=9,E+=6){_.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),C.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),T.copy(_).add(x).add(S).divideScalar(3);const F=g(T);m(C,E+0,_,F),m(A,E+2,x,F),m(N,E+4,S,F)}}function m(_,x,S,T){T<0&&_.x===1&&(a[x]=_.x-1),S.x===0&&S.z===0&&(a[x]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.vertices,e.indices,e.radius,e.details)}}class su extends Kp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new su(e.radius,e.detail)}}class Qp extends ri{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new ne,f=new ne,h=new ne;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const m=v/r*s,g=p/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(m),f.y=(e+t*Math.cos(g))*Math.sin(m),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const m=(r+1)*p+v-1,g=(r+1)*(p-1)+v-1,d=(r+1)*(p-1)+v,_=(r+1)*p+v;a.push(m,g,_),a.push(g,d,_)}this.setIndex(a),this.setAttribute("position",new Fn(o,3)),this.setAttribute("normal",new Fn(l,3)),this.setAttribute("uv",new Fn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fC extends Wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jp extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hd=new St,D0=new ne,k0=new ne;class ly{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;D0.setFromMatrixPosition(e.matrixWorld),t.position.copy(D0),k0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k0),t.updateMatrixWorld(),Hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const I0=new St,oo=new ne,Gd=new ne;class hC extends ly{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new ne(1,0,0),new ne(-1,0,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,1,0),new ne(0,-1,0)],this._cubeUps=[new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,0,1),new ne(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(oo),Gd.copy(i.position),Gd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gd),i.updateMatrixWorld(),r.makeTranslation(-oo.x,-oo.y,-oo.z),I0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I0)}}class U0 extends Jp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pC extends ly{constructor(){super(new Jx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mC extends Jp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new pC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gC extends Jp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _C{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=O0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=O0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function O0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function Bi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function cy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},em,Yt,mt,Jn=1e8,ot=1/Jn,Ch=Math.PI*2,vC=Ch/4,xC=0,uy=Math.sqrt,yC=Math.cos,SC=Math.sin,jt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},tm=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},wn=function(e){return e!==!1},nm=function(){return typeof window<"u"},rc=function(e){return Tt(e)||jt(e)},dy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,wC=/random\([^)]+\)/g,MC=/,\s*/g,F0=/(?:-?\.?\d|\.)+/gi,fy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hy=/[+-]=-?[.\d]+/,bC=/[^,'"\[\]\s]+/gi,EC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,wi,Rh,im,jn={},au={},py,my=function(e){return(au=Ua(e,jn))&&Tn},rm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zo=function(e,t){return!t&&console.warn(e)},gy=function(e,t){return e&&(jn[e]=t)&&au&&(au[e]=t)||jn},Ko=function(){return 0},TC={suppressEvents:!0,isStart:!0,kill:!1},bc={suppressEvents:!0,kill:!1},AC={suppressEvents:!0},sm={},Nr=[],Ph={},_y,Ln={},Xd={},z0=30,Ec=[],am="",om=function(e){var t=e[0],i,r;if(Ni(t)||Tt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ec.length;r--&&!Ec[r].targetTest(t););i=Ec[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zy(e[r],i)))||e.splice(r,1);return e},ms=function(e){return e._gsap||om(ei(e))[0]._gsap},vy=function(e,t,i){return(i=e[t])&&Tt(i)?e[t]():tm(i)&&e.getAttribute&&e.getAttribute(t)||i},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},gt=function(e){return Math.round(e*1e7)/1e7||0},ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},CC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ou=function(){var e=Nr.length,t=Nr.slice(0),i,r;for(Ph={},Nr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},lm=function(e){return!!(e._initted||e._startAt||e.add)},xy=function(e,t,i,r){Nr.length&&!Yt&&ou(),e.render(t,i,!!(Yt&&t<0&&lm(e))),Nr.length&&!Yt&&ou()},yy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bC).length<2?t:jt(e)?e.trim():e},Sy=function(e){return e},Vn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},RC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},B0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ni(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},lu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Co=function(e){var t=e.parent||vt,i=e.keyframes?RC(tn(e.keyframes)):Vn;if(wn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},PC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},wy=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Iu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},NC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nh=function(e,t,i,r){return e._startAt&&(Yt?e._startAt.revert(bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},LC=function n(e){return!e||e._ts&&n(e.parent)},j0=function(e){return e._repeat?Oa(e._tTime,e=e.duration()+e._rDelay)*e:0},Oa=function(e,t){var i=Math.floor(e=gt(e/t));return e&&i===e?i-1:i},cu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uu=function(e){return e._end=gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Ou=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uu(e),i._dirty||gs(i,e)),e},My=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=cu(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),i)-t._tTime>ot)&&t.render(i,!0)),gs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ot}},Ti=function(e,t,i,r){return t.parent&&Or(t),t._start=gt((er(i)?i:i||e!==vt?Yn(e,i,t):e._time)+t._delay),t._end=gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wy(e,t,"_first","_last",e._sort?"_start":0),Lh(t)||(e._recent=t),r||My(e,t),e._ts<0&&Ou(e,e._tTime),e},by=function(e,t){return(jn.ScrollTrigger||rm("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},Ey=function(e,t,i,r,s){if(um(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_y!==Dn.frame)return Nr.push(e),e._lazy=[s,r],1},DC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Lh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kC=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&DC(e)&&!(!e._initted&&Lh(e))||(e._ts<0||e._dp._ts<0)&&!Lh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=hl(0,e._tDur,t),u=Oa(l,o),e._yoyo&&u&1&&(a=1-a),u!==Oa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Yt||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Ey(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?ot:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nh(e,t,i,!0),e._onUpdate&&!i&&In(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Or(e,1),!i&&!Yt&&(In(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Fa=function(e,t,i,r){var s=e._repeat,a=gt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:gt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Ou(e,e._tTime=e._tDur*o),e.parent&&Uu(e),i||gs(e.parent,e),e},V0=function(e){return e instanceof hn?gs(e):Fa(e,e._dur)},UC={_start:0,endTime:Ko,totalDuration:Ko},Yn=function n(e,t,i){var r=e.labels,s=e._recent||UC,a=e.duration()>=Jn?s.endTime(!1):e._dur,o,l,c;return jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(tn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Ro=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;a.immediateRender=wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Lt(t[0],a,t[s+1])},Gr=function(e,t){return e||e===0?t(e):t},hl=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!jt(e)||!(t=EC.exec(e))?"":t[1]},OC=function(e,t,i){return Gr(i,function(r){return hl(e,t,r)})},Dh=[].slice,Ty=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==wi},FC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return jt(r)&&!t||Ty(r,1)?(s=i).push.apply(s,ei(r)):i.push(r)})||i},ei=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):jt(e)&&!i&&(Rh||!za())?Dh.call((t||im).querySelectorAll(e),0):tn(e)?FC(e,i):Ty(e)?Dh.call(e,0):e?[e]:[]},kh=function(e){return e=ei(e)[0]||Zo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ei(t,i.querySelectorAll?i:i===e?Zo("Invalid scope")||im.createElement("div"):e)}},Ay=function(e){return e.sort(function(){return .5-Math.random()})},Cy=function(e){if(Tt(e))return e;var t=Ni(e)?e:{each:e},i=_s(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return jt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,p,v){var m=(v||t).length,g=a[m],d,_,x,S,T,C,A,N,w;if(!g){if(w=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!w){for(A=-Jn;A<(A=v[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(g=a[m]=[],d=l?Math.min(w,m)*u-.5:r%w,_=w===Jn?0:l?m*f/w-.5:r/w|0,A=0,N=Jn,C=0;C<m;C++)x=C%w-d,S=_-(C/w|0),g[C]=T=c?Math.abs(c==="y"?S:x):uy(x*x+S*S),T>A&&(A=T),T<N&&(N=T);r==="random"&&Ay(g),g.max=A-N,g.min=N,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:c?c==="y"?m/w:w:Math.max(w,m/w))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=en(t.amount||t.each)||0,i=i&&m<0?KC(i):i}return m=(g[h]-g.min)/g.max||0,gt(g.b+(i?i(m):m)*g.v)+g.u}},Ih=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:en(i))}},Ry=function(e,t){var i=tn(e),r,s;return!i&&Ni(e)&&(r=i=e.radius||Jn,e.values?(e=ei(e.values),(s=!er(e[0]))&&(r*=r)):e=Ih(e.increment)),Gr(t,i?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Jn,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||er(a)?u:u+en(a)}:Ih(e))},Py=function(e,t,i,r){return Gr(tn(e)?!t:i===!0?!!(i=0):!r,function(){return tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},zC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},BC=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},jC=function(e,t,i){return Ly(e,t,0,1,i)},Ny=function(e,t,i){return Gr(i,function(r){return e[~~t(r)]})},VC=function n(e,t,i){var r=t-e;return tn(e)?Ny(e,n(0,e.length),t):Gr(i,function(s){return(r+(s-e)%r)%r+e})},HC=function n(e,t,i){var r=t-e,s=r*2;return tn(e)?Ny(e,n(0,e.length-1),t):Gr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Qo=function(e){return e.replace(wC,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(MC);return Py(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Ly=function(e,t,i,r,s){var a=t-e,o=r-i;return Gr(s,function(l){return i+((l-e)/a*o||0)})},GC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=jt(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(v){v*=f;var m=Math.min(h,~~v);return u[m](v-m)},i=t}else r||(e=Ua(tn(e)?[]:{},e));if(!u){for(l in t)cm.call(o,e,l,"get",t[l]);s=function(v){return hm(v,o)||(a?e.p:e)}}}return Gr(i,s)},H0=function(e,t,i){var r=e.labels,s=Jn,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},In=function(e,t,i){var r=e.vars,s=r[t],a=mt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Nr.length&&ou(),o&&(mt=o),u=l?s.apply(c,l):s.call(c),mt=a,u},go=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&In(e,"onInterrupt"),e},ua,Dy=[],ky=function(e){if(e)if(e=!e.name&&e.default||e,nm()||e.headless){var t=e.name,i=Tt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ko,render:hm,add:cm,kill:oR,modifier:aR,rawVars:0},a={targetTest:0,get:0,getSetter:fm,aliases:{},register:0};if(za(),e!==r){if(Ln[t])return;Vn(r,Vn(lu(e,s),a)),Ua(r.prototype,Ua(s,lu(e,a))),Ln[r.prop=t]=r,e.targetTest&&(Ec.push(r),sm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gy(t,r),e.register&&e.register(Tn,r,bn)}else Dy.push(e)},at=255,_o={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Yd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*at+.5|0},Iy=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&at,e&at]:0:_o.black,s,a,o,l,c,u,f,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_o[e])r=_o[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&at,r&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(F0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Yd(l+1/3,s,a),r[1]=Yd(l,s,a),r[2]=Yd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(fy),i&&r.length<4&&(r[3]=1),r}else r=e.match(F0)||_o.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/at,a=r[1]/at,o=r[2]/at,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Uy=function(e){var t=[],i=[],r=-1;return e.split(Lr).forEach(function(s){var a=s.match(ca)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},G0=function(e,t,i){var r="",s=(e+r).match(Lr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Iy(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Uy(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Lr,"1").split(ca),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Lr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Lr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _o)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),WC=/hsl[a]?\(/,Oy=function(e){var t=e.join(" "),i;if(Lr.lastIndex=0,Lr.test(t))return i=WC.test(t),e[1]=G0(e[1],i),e[0]=G0(e[0],i,Uy(e[1])),!0},Jo,Dn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,p,v=function m(g){var d=n()-r,_=g===!0,x,S,T,C;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-a,(x>0||_)&&(C=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=x+(x>=s?4:s-x),S=1),_||(l=c(m)),S)for(p=0;p<o.length;p++)o[p](T,h,C,g)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){py&&(!Rh&&nm()&&(wi=Rh=window,im=wi.document||{},jn.gsap=Tn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Tn.version),my(au||wi.GreenSockGlobals||!wi.gsap&&wi||{}),Dy.forEach(ky)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,a-f.time*1e3+1|0)},Jo=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Jo=0,c=Ko},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,d,_){var x=d?function(S,T,C,A){g(S,T,C,A),f.remove(x)}:g;return f.remove(g),o[_?"unshift":"push"](x),za(),x},remove:function(g,d){~(d=o.indexOf(g))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f}(),za=function(){return!Jo&&Dn.wake()},qe={},XC=/^[\d.\-M][\d.\-,\s]/,YC=/["']/g,qC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(YC,"").trim():+c,r=l.substr(o+1).trim();return t},$C=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ZC=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[qC(t[1])]:$C(e).split(",").map(yy)):qe._CE&&XC.test(e)?qe._CE("",e):i},KC=function(e){return function(t){return 1-e(1-t)}},_s=function(e,t){return e&&(Tt(e)?e:qe[e]||ZC(e))||t},Rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Mn(e,function(o){qe[o]=jn[o]=s,qe[a=o.toLowerCase()]=i;for(var l in s)qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[o+"."+l]=s[l]}),s},Fy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Ch*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*SC((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Fy(o);return s=Ch/s,l.config=function(c,u){return n(e,c,u)},l},$d=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Fy(i);return r.config=function(s){return n(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Rs("Elastic",qd("in"),qd("out"),qd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Rs("Circ",function(n){return-(uy(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-yC(n*vC)+1});Rs("Back",$d("in"),$d("out"),$d());qe.SteppedEase=qe.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ot;return function(o){return((r*hl(0,a,o)|0)+s)*i}}};$o.ease=qe["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return am+=n+","+n+"Params,"});var zy=function(e,t){this.id=xC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vy,this.set=t?t.getSetter:fm},el=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fa(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),Jo||Dn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Fa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ou(this,i),!s._dp||s.parent||My(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xy(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+j0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+j0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Oa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?cu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ot?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Uu(this),NC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=gt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ti(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(wn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AC);var r=Yt;return Yt=i,lm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Yt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,V0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,V0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Yn(this,i),wn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,wn(r)),this._dur||(this._zTime=-ot),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Tt(i)?i:Sy,l=function(){var u=r.then;r.then=null,s&&s(),Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){go(this)},n}();Vn(el.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var hn=function(n){cy(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=wn(i.sortChildren),vt&&Ti(i.parent||vt,Bi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&by(Bi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ro(0,arguments,this),this},t.from=function(r,s,a){return Ro(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ro(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Yn(this,a),1),this},t.call=function(r,s,a){return Ti(this,Lt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Lt(r,a,Yn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Co(a).immediateRender=wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Co(o).immediateRender=wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:gt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,v,m,g,d,_,x,S,T,C,A;if(this!==vt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,x=this._ts,d=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=gt(u%g),u===l?(m=this._repeat,h=c):(T=gt(u/g),m=~~T,m&&m===T&&(h=c,m--),h>c&&(h=c)),T=Oa(this._tTime,g),!o&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),C&&m&1&&(h=c-h,A=1),m!==T&&!this._lock){var N=C&&T&1,w=N===(C&&m&1);if(m<T&&(N=!N),o=N?0:u%c?c:u,this._lock=1,this.render(o||(A?0:gt(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=m),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=N?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=IC(this,gt(o),gt(h)),_&&(u-=h-(h=_._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!T&&(In(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!d){_=0,v&&(u+=this._zTime=-ot);break}}p=v}else{p=this._last;for(var E=r<0?r:h;p;){if(v=p._prev,(p._act||E<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,a||Yt&&lm(p)),h!==this._time||!this._ts&&!d){_=0,v&&(u+=this._zTime=E?-ot:ot);break}}p=v}}if(_&&!s&&(this.pause(),_.render(h>=o?0:-ot)._zTime=h>=o?1:-1,this._ts))return this._start=S,Uu(this),this.render(r,s,a);this._onUpdate&&!s&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Or(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(In(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(er(s)||(s=Yn(this,s,r)),!(r instanceof el)){if(tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(jt(r))return this.addLabel(r,s);if(Tt(r))r=Lt.delayedCall(0,r);else return this}return this!==r?Ti(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return jt(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&Iu(this,r),r===this._recent&&(this._recent=this._last),gs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Lt.delayedCall(0,s||Ko,a);return o.data="isPause",this._hasPause=1,Ti(this,o,Yn(this,r))},t.removePause=function(r){var s=this._first;for(r=Yn(this,r);s;)s._start===r&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)vr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ei(r),l=this._first,c=er(s),u;l;)l instanceof Lt?CC(l._targets,o)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Yn(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,v=Lt.to(a,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==g&&Fa(v,g,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,f||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Vn({startAt:{time:Yn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),H0(this,Yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),H0(this,Yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=gt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return gs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Jn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ti(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=gt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Fa(a,a===vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(vt._ts&&(xy(vt,cu(r,vt)),_y=Dn.frame),Dn.frame>=z0){z0+=zn.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&zn.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(el);Vn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var QC=function(e,t,i,r,s,a,o){var l=new bn(this._pt,e,t,0,1,Wy,null,s),c=0,u=0,f,h,p,v,m,g,d,_;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Qo(r)),a&&(_=[i,r],a(_,e,t),i=_[0],r=_[1]),h=i.match(Wd)||[];f=Wd.exec(r);)v=f[0],m=r.substring(c,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),v!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:v.charAt(1)==="="?ya(g,v)-g:parseFloat(v)-g,m:p&&p<4?Math.round:0},c=Wd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(hy.test(r)||d)&&(l.e=0),this._pt=l,l},cm=function(e,t,i,r,s,a,o,l,c,u){Tt(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:Tt(f)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Tt(f)?c?iR:Hy:dm,v;if(jt(r)&&(~r.indexOf("random(")&&(r=Qo(r)),r.charAt(1)==="="&&(v=ya(h,r)+(en(h)||0),(v||v===0)&&(r=v))),!u||h!==r||Uh)return!isNaN(h*r)&&r!==""?(v=new bn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?sR:Gy,0,p),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!f&&!(t in e)&&rm(t,r),QC.call(this,e,t,h,r,p,l||zn.stringFilter,c))},JC=function(e,t,i,r,s){if(Tt(e)&&(e=Po(e,s,t,i,r)),!Ni(e)||e.style&&e.nodeType||tn(e)||dy(e))return jt(e)?Po(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Po(e[o],s,t,i,r);return a},By=function(e,t,i,r,s,a){var o,l,c,u;if(Ln[e]&&(o=new Ln[e]).init(s,o.rawVars?t[e]:JC(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new bn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ua))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vr,Uh,um=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,v=e._dur,m=e._startAt,g=e._targets,d=e.parent,_=d&&d.data==="nested"?d.vars.targets:g,x=e._overwrite==="auto"&&!em,S=e.timeline,T=r.easeReverse||f,C,A,N,w,E,F,L,z,M,H,K,Y,G;if(S&&(!h||!s)&&(s="none"),e._ease=_s(s,$o.ease),e._rEase=T&&(_s(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(z=g[0]?ms(g[0]).harness:0,Y=z&&r[z.prop],C=lu(r,sm),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!p?m.render(-1,!0):m.revert(u&&v?bc:TC),m._lazy=0),a){if(Or(e._startAt=Lt.set(g,Vn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return In(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!o&&!p)&&e._startAt.revert(bc),o&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&v&&!m){if(t&&(o=!1),N=Vn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&wn(l),immediateRender:o,stagger:0,parent:d},C),Y&&(N[z.prop]=Y),Or(e._startAt=Lt.set(g,N)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(bc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&wn(l)||l&&!v,A=0;A<g.length;A++){if(E=g[A],L=E._gsap||om(g)[A]._gsap,e._ptLookup[A]=H={},Ph[L.id]&&Nr.length&&ou(),K=_===g?A:_.indexOf(E),z&&(M=new z).init(E,Y||C,e,K,_)!==!1&&(e._pt=w=new bn(e._pt,E,M.name,0,1,M.render,M,0,M.priority),M._props.forEach(function(X){H[X]=w}),M.priority&&(F=1)),!z||Y)for(N in C)Ln[N]&&(M=By(N,C,e,K,E,_))?M.priority&&(F=1):H[N]=w=cm.call(e,E,N,"get",C[N],K,_,0,r.stringFilter);e._op&&e._op[A]&&e.kill(E,e._op[A]),x&&e._pt&&(vr=e,vt.killTweensOf(E,H,e.globalTime(t)),G=!e.parent,vr=0),e._pt&&l&&(Ph[L.id]=1)}F&&Xy(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,h&&t<=0&&S.render(Jn,!0,!0)},eR=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uh=1,e.vars[t]="+=0",um(e,o),Uh=0,l?Zo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=At(i)+en(f.e)),f.b&&(f.b=u.s+en(f.b))},tR=function(e,t){var i=e[0]?ms(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ua({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},nR=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(tn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Po=function(e,t,i,r,s){return Tt(e)?e.call(t,i,r,s):jt(e)&&~e.indexOf("random(")?Qo(e):e},jy=am+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vy={};Mn(jy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Vy[n]=1});var Lt=function(n){cy(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Co(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=r.parent||vt,_=(tn(i)||dy(i)?er(i[0]):"length"in r)?[i]:ei(i),x,S,T,C,A,N,w,E;if(o._targets=_.length?om(_):Zo("GSAP target "+i+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,v||h||rc(c)||rc(u)){r=o.vars;var F=r.easeReverse||r.yoyoEase;if(x=o.timeline=new hn({data:"nested",defaults:m||{},targets:d&&d.data==="nested"?d.vars.targets:_}),x.kill(),x.parent=x._dp=Bi(o),x._start=0,h||rc(c)||rc(u)){if(C=_.length,w=h&&Cy(h),Ni(h))for(A in h)~jy.indexOf(A)&&(E||(E={}),E[A]=h[A]);for(S=0;S<C;S++)T=lu(r,Vy),T.stagger=0,F&&(T.easeReverse=F),E&&Ua(T,E),N=_[S],T.duration=+Po(c,Bi(o),S,N,_),T.delay=(+Po(u,Bi(o),S,N,_)||0)-o._delay,!h&&C===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),x.to(N,T,w?w(S,N,_):0),x._ease=qe.none;x.duration()?c=u=0:o.timeline=0}else if(v){Co(Vn(x.vars.defaults,{ease:"none"})),x._ease=_s(v.ease||r.ease||"none");var L=0,z,M,H;if(tn(v))v.forEach(function(K){return x.to(_,K,">")}),x.duration();else{T={};for(A in v)A==="ease"||A==="easeEach"||nR(A,v[A],T,v.easeEach);for(A in T)for(z=T[A].sort(function(K,Y){return K.t-Y.t}),L=0,S=0;S<z.length;S++)M=z[S],H={ease:M.e,duration:(M.t-(S?z[S-1].t:0))/100*c},H[A]=M.v,x.to(_,H,L),L+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!em&&(vr=Bi(o),vt.killTweensOf(_),vr=0),Ti(d,Bi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!v&&o._start===gt(d._time)&&wn(f)&&LC(Bi(o))&&d.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-u)||0)),g&&by(Bi(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ot&&!u?l:r<ot?0:r,h,p,v,m,g,d,_,x;if(!c)kC(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(h=gt(f%m),f===l?(v=this._repeat,h=c):(g=gt(f/m),v=~~g,v&&v===g?(h=c,v--):h>c&&(h=c)),d=this._yoyo&&v&1,d&&(h=c-h),g=Oa(this._tTime,m),h===o&&!a&&this._initted&&v===g)return this._tTime=f,this;v!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=a=1,this.render(gt(m*v),!0).invalidate()._lock=0)}if(!this._initted){if(Ey(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&v!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var T=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(h/c);if(this._from&&(this.ratio=_=1-_),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!g&&(In(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Nh(this,r,s,a),In(this,"onUpdate")),this._repeat&&v!==g&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Nh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Or(this,1),!s&&!(u&&!o)&&(f||o||d)&&(In(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Jo||Dn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||um(this,c),u=this._ease(c/this._dur),eR(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Ou(this,0),this.parent||wy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vr&&vr.vars.overwrite!==!0)._first||go(this),this.parent&&a!==this.timeline.totalDuration()&&Fa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ei(r):o,c=this._ptLookup,u=this._pt,f,h,p,v,m,g,d;if((!s||s==="all")&&PC(o,l))return s==="all"&&(this._pt=0),go(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(m={},Mn(s,function(_){return m[_]=1}),s=m),s=tR(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,v=h,p={}):(p=f[d]=f[d]||{},v=s);for(m in v)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Iu(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&u&&go(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ro(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ro(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return vt.killTweensOf(r,s,a)},e}(el);Vn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new hn,t=Dh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dm=function(e,t,i){return e[t]=i},Hy=function(e,t,i){return e[t](i)},iR=function(e,t,i,r){return e[t](r.fp,i)},rR=function(e,t,i){return e.setAttribute(t,i)},fm=function(e,t){return Tt(e[t])?Hy:tm(e[t])&&e.setAttribute?rR:dm},Gy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},hm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},aR=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},oR=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Iu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},lR=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Xy=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},bn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Gy,this.d=l||this,this.set=c||dm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=lR,this.m=i,this.mt=s,this.tween=r},n}();Mn(am+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return sm[n]=1});jn.TweenMax=jn.TweenLite=Lt;jn.TimelineLite=jn.TimelineMax=hn;vt=new hn({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Oy;var vs=[],Tc={},cR=[],W0=0,uR=0,Zd=function(e){return(Tc[e]||cR).map(function(t){return t()})},Oh=function(){var e=Date.now(),t=[];e-W0>2&&(Zd("matchMediaInit"),vs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=wi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Zd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),W0=e,Zd("matchMedia"))},Yy=function(){function n(t,i){this.selector=i&&kh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=uR++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Tt(i)&&(s=r,r=i,i=Tt);var a=this,o=function(){var c=mt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=kh(s)),mt=a,f=r.apply(a,arguments),Tt(f)&&a._r.push(f),mt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Tt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=mt;mt=null,i(this),mt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=vs.length;a--;)vs[a].id===this.id&&vs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),dR=function(){function n(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ni(i)||(i={matches:i});var a=new Yy(0,s||this.scope),o=a.conditions={},l,c,u;mt&&!a.selector&&(a.selector=mt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=wi.matchMedia(i[c]),l&&(vs.indexOf(a)<0&&vs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Oh):l.addEventListener("change",Oh)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),uu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ky(r)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,i,r){jt(e)&&(e=ei(e)[0]);var s=ms(e||{}).get,a=i?Sy:yy;return i==="native"&&(i=""),e&&(t?a((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(o,l,c){return a((Ln[o]&&Ln[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=ei(e),e.length>1){var r=e.map(function(u){return Tn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Ln[t],o=ms(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ua._pt=0,f.init(e,i?u+i:u,ua,0,[e]),f.render(1,f),ua._pt&&hm(1,ua)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Tn.to(e,Vn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_s(e.ease,$o.ease)),B0($o,e||{})},config:function(e){return B0(zn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Ln[o]&&!jn[o]&&Zo(t+" effect requires "+o+" plugin.")}),Xd[t]=function(o,l,c){return i(ei(o),Vn(l||{},s),c)},a&&(hn.prototype[t]=function(o,l,c){return this.add(Xd[t](o,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=_s(t)},parseEase:function(e,t){return arguments.length?_s(e,t):qe},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new hn(e),r,s;for(i.smoothChildTiming=wn(e.smoothChildTiming),vt.remove(i),i._dp=0,i._time=i._tTime=vt._time,r=vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&Ti(i,r,r._start-r._delay),r=s;return Ti(vt,i,0),i},context:function(e,t){return e?new Yy(e,t):mt},matchMedia:function(e){return new dR(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Oh()},addEventListener:function(e,t){var i=Tc[e]||(Tc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:VC,wrapYoyo:HC,distribute:Cy,random:Py,snap:Ry,normalize:jC,getUnit:en,clamp:OC,splitColor:Iy,toArray:ei,selector:kh,mapRange:Ly,pipe:zC,unitize:BC,interpolate:GC,shuffle:Ay},install:my,effects:Xd,ticker:Dn,updateRoot:hn.updateRoot,plugins:Ln,globalTimeline:vt,core:{PropTween:bn,globals:gy,Tween:Lt,Timeline:hn,Animation:el,getCache:ms,_removeLinkedListItem:Iu,reverting:function(){return Yt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return em=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return uu[n]=Lt[n]});Dn.add(hn.updateRoot);ua=uu.to({},{duration:0});var fR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},hR=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=fR(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Kd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(jt(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}hR(o,s)}}}},Tn=uu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Yt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Kd("roundProps",Ih),Kd("modifiers"),Kd("snap",Ry))||uu;Lt.version=hn.version=Tn.version="3.15.0";py=1;nm()&&za();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var X0,xr,Sa,pm,fs,Y0,mm,pR=function(){return typeof window<"u"},tr={},rs=180/Math.PI,wa=Math.PI/180,$s=Math.atan2,q0=1e8,gm=/([A-Z])/g,mR=/(left|right|width|margin|padding|x)/i,gR=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_R=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},qy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$y=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SR=function(e,t,i){return e.style[t]=i},wR=function(e,t,i){return e.style.setProperty(t,i)},MR=function(e,t,i){return e._gsap[t]=i},bR=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ER=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},TR=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},xt="transform",En=xt+"Origin",AR=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Vi(r,o)}):this.tfm[e]=a.x?a[e]:Vi(r,e),e===En&&(this.tfm.zOrigin=a.zOrigin);else return Ai.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(xt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},Zy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CR=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gm,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mm(),(!s||!s.isStart)&&!i[xt]&&(Zy(i),r.zOrigin&&i[En]&&(i[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ky=function(e,t){var i={target:e,props:[],revert:CR,save:AR};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Qy,zh=function(e,t){var i=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return i&&i.style?i:xr.createElement(e)},Un=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ba(t)||t,1)||""},$0="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,i){var r=t||fs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($0[a]+e in s););return a<0?null:(a===3?"ms":a>=0?$0[a]:"")+e},Bh=function(){pR()&&window.document&&(X0=window,xr=X0.document,Sa=xr.documentElement,fs=zh("div")||{style:{}},zh("div"),xt=Ba(xt),En=xt+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qy=!!Ba("perspective"),mm=Tn.core.reverting,pm=1)},Z0=function(e){var t=e.ownerSVGElement,i=zh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Sa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Sa.removeChild(i),s},K0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jy=function(e){var t,i;try{t=e.getBBox()}catch{t=Z0(e),i=1}return t&&(t.width||t.height)||i||(t=Z0(e)),t&&!t.width&&!t.x&&!t.y?{x:+K0(e,["x","cx","x1"])||0,y:+K0(e,["y","cy","y1"])||0,width:0,height:0}:t},e1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jy(e))},Fr=function(e,t){if(t){var i=e.style,r;t in tr&&t!==En&&(t=xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gm,"-$1").toLowerCase())):i.removeAttribute(t)}},yr=function(e,t,i,r,s,a){var o=new bn(e._pt,t,i,0,1,a?$y:qy);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Q0={deg:1,rad:1,turn:1},RR={grid:1,flex:1},zr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=fs.style,l=mR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",v,m,g,d;if(r===a||!s||Q0[r]||Q0[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&e1(e),(p||a==="%")&&(tr[t]||~t.indexOf("adius")))return v=d?e.getBBox()[l?"width":"height"]:e[u],At(p?s/v*f:s/100*v);if(o[l?"width":"height"]=f+(h?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===xr||!m.appendChild)&&(m=xr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Dn.time&&!g.uncache)return At(s/g.width*f);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=f+r,v=e[u],_?e.style[t]=_:Fr(e,t)}else(p||a==="%")&&!RR[Un(m,"display")]&&(o.position=Un(e,"position")),m===e&&(o.position="static"),m.appendChild(fs),v=fs[u],m.removeChild(fs),o.position="absolute";return l&&p&&(g=ms(m),g.time=Dn.time,g.width=m[u]),At(h?v*s/f:v&&s?f/v*s:0)},Vi=function(e,t,i,r){var s;return pm||Bh(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=nl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fu(Un(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=du[t]&&du[t](e,t,i)||Un(e,t)||vy(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,i)+i:s},PR=function(e,t,i,r){if(!i||i==="none"){var s=Ba(t,e,1),a=s&&Un(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Un(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,Wy),l=0,c=0,u,f,h,p,v,m,g,d,_,x,S,T;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Un(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Un(e,t)||r,m?e.style[t]=m:Fr(e,t)),u=[i,r],Oy(u),i=u[0],r=u[1],h=i.match(ca)||[],T=r.match(ca)||[],T.length){for(;f=ca.exec(r);)g=f[0],_=r.substring(l,f.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),g!==(m=h[c++]||"")&&(p=parseFloat(m)||0,S=m.substr((p+"").length),g.charAt(1)==="="&&(g=ya(p,g)+S),d=parseFloat(g),x=g.substr((d+"").length),l=ca.lastIndex-x.length,x||(x=x||zn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=zr(e,t,m,x)||0),o._pt={_next:o._pt,p:_||c===1?_:",",s:p,c:d-p,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?$y:qy;return hy.test(r)&&(o.e=0),this._pt=o,o},J0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NR=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=J0[i]||i,t[1]=J0[r]||r,t.join(" ")},LR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],tr[o]&&(l=1,o=o==="transformOrigin"?En:xt),Fr(i,o);l&&(Fr(i,xt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",nl(i,1),a.uncache=1,Zy(r)))}},du={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,i,0,0,LR);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},tl=[1,0,0,1,0,0],t1={},n1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},e_=function(e){var t=Un(e,xt);return n1(t)?tl:t.substr(7).match(fy).map(At)},_m=function(e,t){var i=e._gsap||ms(e),r=e.style,s=e_(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tl:s):(s===tl&&!e.offsetParent&&e!==Sa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Sa.appendChild(e)),s=e_(e),l?r.display=l:Fr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Sa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jh=function(e,t,i,r,s,a){var o=e._gsap,l=s||_m(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],v=l[1],m=l[2],g=l[3],d=l[4],_=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,C,A,N,w;i?l!==tl&&(A=p*g-v*m)&&(N=S*(g/A)+T*(-m/A)+(m*_-g*d)/A,w=S*(-v/A)+T*(p/A)-(p*_-v*d)/A,S=N,T=w):(C=Jy(e),S=C.x+(~x[0].indexOf("%")?S/100*C.width:S),T=C.y+(~(x[1]||x[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&o.smooth?(d=S-c,_=T-u,o.xOffset=f+(d*p+_*m)-d,o.yOffset=h+(d*v+_*g)-_):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[En]="0px 0px",a&&(yr(a,o,"xOrigin",c,S),yr(a,o,"yOrigin",u,T),yr(a,o,"xOffset",f,o.xOffset),yr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},nl=function(e,t){var i=e._gsap||new zy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Un(e,En)||"0",u,f,h,p,v,m,g,d,_,x,S,T,C,A,N,w,E,F,L,z,M,H,K,Y,G,X,I,R,B,ae,V,$;return u=f=h=m=g=d=_=x=S=0,p=v=1,i.svg=!!(e.getCTM&&e1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),r.scale=r.rotate=r.translate="none"),A=_m(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),jh(e,Y||c,!!Y||i.originIsAbsolute,i.smooth!==!1,A)),T=i.xOrigin||0,C=i.yOrigin||0,A!==tl&&(F=A[0],L=A[1],z=A[2],M=A[3],u=H=A[4],f=K=A[5],A.length===6?(p=Math.sqrt(F*F+L*L),v=Math.sqrt(M*M+z*z),m=F||L?$s(L,F)*rs:0,_=z||M?$s(z,M)*rs+m:0,_&&(v*=Math.abs(Math.cos(_*wa))),i.svg&&(u-=T-(T*F+C*z),f-=C-(T*L+C*M))):($=A[6],ae=A[7],I=A[8],R=A[9],B=A[10],V=A[11],u=A[12],f=A[13],h=A[14],N=$s($,B),g=N*rs,N&&(w=Math.cos(-N),E=Math.sin(-N),Y=H*w+I*E,G=K*w+R*E,X=$*w+B*E,I=H*-E+I*w,R=K*-E+R*w,B=$*-E+B*w,V=ae*-E+V*w,H=Y,K=G,$=X),N=$s(-z,B),d=N*rs,N&&(w=Math.cos(-N),E=Math.sin(-N),Y=F*w-I*E,G=L*w-R*E,X=z*w-B*E,V=M*E+V*w,F=Y,L=G,z=X),N=$s(L,F),m=N*rs,N&&(w=Math.cos(N),E=Math.sin(N),Y=F*w+L*E,G=H*w+K*E,L=L*w-F*E,K=K*w-H*E,F=Y,H=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=At(Math.sqrt(F*F+L*L+z*z)),v=At(Math.sqrt(K*K+$*$)),N=$s(H,K),_=Math.abs(N)>2e-4?N*rs:0,S=V?1/(V<0?-V:V):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!n1(Un(e,xt)),Y&&e.setAttribute("transform",Y))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=At(p),i.scaleY=At(v),i.rotation=At(m)+o,i.rotationX=At(g)+o,i.rotationY=At(d)+o,i.skewX=_+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[En]=fu(c)),i.xOffset=i.yOffset=0,i.force3D=zn.force3D,i.renderTransform=i.svg?kR:Qy?i1:DR,i.uncache=0,i},fu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qd=function(e,t,i){var r=en(t);return At(parseFloat(t)+parseFloat(zr(e,"x",i+"px",r)))+r},DR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,i1(e,t)},Qr="0deg",lo="0px",Jr=") ",i1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,_=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Qr||u!==Qr)){var C=parseFloat(u)*wa,A=Math.sin(C),N=Math.cos(C),w;C=parseFloat(f)*wa,w=Math.cos(C),a=Qd(_,a,A*w*-x),o=Qd(_,o,-Math.sin(C)*-x),l=Qd(_,l,N*w*-x+x)}g!==lo&&(S+="perspective("+g+Jr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||a!==lo||o!==lo||l!==lo)&&(S+=l!==lo||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Jr),c!==Qr&&(S+="rotate("+c+Jr),u!==Qr&&(S+="rotateY("+u+Jr),f!==Qr&&(S+="rotateX("+f+Jr),(h!==Qr||p!==Qr)&&(S+="skew("+h+", "+p+Jr),(v!==1||m!==1)&&(S+="scale("+v+", "+m+Jr),_.style[xt]=S||"translate(0, 0)"},kR=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,_=i.forceCSS,x=parseFloat(a),S=parseFloat(o),T,C,A,N,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wa,c*=wa,T=Math.cos(l)*f,C=Math.sin(l)*f,A=Math.sin(l-c)*-h,N=Math.cos(l-c)*h,c&&(u*=wa,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,N*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),T*=w,C*=w)),T=At(T),C=At(C),A=At(A),N=At(N)):(T=f,N=h,C=A=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=zr(p,"x",a,"px"),S=zr(p,"y",o,"px")),(v||m||g||d)&&(x=At(x+v-(v*T+m*A)+g),S=At(S+m-(v*C+m*N)+d)),(r||s)&&(w=p.getBBox(),x=At(x+r/100*w.width),S=At(S+s/100*w.height)),w="matrix("+T+","+C+","+A+","+N+","+x+","+S+")",p.setAttribute("transform",w),_&&(p.style[xt]=w)},IR=function(e,t,i,r,s){var a=360,o=jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?rs:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*q0)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*q0)%a-~~(c/a)*a)),e._pt=h=new bn(e._pt,t,i,r,c,_R),h.e=u,h.u="deg",e._props.push(i),h},t_=function(e,t){for(var i in t)e[i]=t[i];return e},UR=function(e,t,i){var r=t_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,p,v;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[xt]=t,o=nl(i,1),Fr(i,xt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[xt],a[xt]=t,o=nl(i,1),a[xt]=c);for(l in tr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=en(c),v=en(u),f=p!==v?zr(i,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new bn(e._pt,o,l,f,h-f,Fh),e._pt.u=v||0,e._props.push(l));t_(o,r)};Mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});du[e>1?"border"+n:n]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(v){return Vi(o,v,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(v,m){return p[v]=h[m]=h[m]||h[(m-1)/2|0]}),o.init(l,p,f)}});var r1={name:"css",register:Bh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,p,v,m,g,d,_,x,S,T,C,A,N,w;pm||Bh(),this.styles=this.styles||Ky(e),N=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Ln[m]&&By(m,t,i,r,e,s)))){if(p=typeof u,v=du[m],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Qo(u)),v)v(this,e,m,u,i)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Lr.lastIndex=0,Lr.test(c)||(g=en(c),d=en(u),d?g!==d&&(c=zr(e,m,c,d)+d):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),N.push(m,0,o[m]);else if(p!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],jt(c)&&~c.indexOf("random(")&&(c=Qo(c)),en(c+"")||c==="auto"||(c+=zn.units[m]||en(Vi(e,m))||""),(c+"").charAt(1)==="="&&(c=Vi(e,m))):c=Vi(e,m),h=parseFloat(c),_=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),_&&(u=u.substr(2)),f=parseFloat(u),m in Ai&&(m==="autoAlpha"&&(h===1&&Vi(e,"visibility")==="hidden"&&f&&(h=0),N.push("visibility",0,o.visibility),yr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Ai[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in tr,x){if(this.styles.save(m),w=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Un(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=Un(e,"perspective"),E?e.style.perspective=E:Fr(e,"perspective")}f=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||nl(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new bn(this._pt,o,xt,0,1,T.renderTransform,T,0,-1),S.dep=1),m==="scale")this._pt=new bn(this._pt,T,"scaleY",T.scaleY,(_?ya(T.scaleY,_+f):f)-T.scaleY||0,Fh),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){N.push(En,0,o[En]),u=NR(u),T.svg?jh(e,u,0,C,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&yr(this,T,"zOrigin",T.zOrigin,d),yr(this,o,m,fu(c),fu(u)));continue}else if(m==="svgOrigin"){jh(e,u,1,C,0,this);continue}else if(m in t1){IR(this,T,m,h,_?ya(h,_+u):u);continue}else if(m==="smoothOrigin"){yr(this,T,"smooth",T.smooth,u);continue}else if(m==="force3D"){T[m]=u;continue}else if(m==="transform"){UR(this,u,e);continue}}else m in o||(m=Ba(m)||m);if(x||(f||f===0)&&(h||h===0)&&!gR.test(u)&&m in o)g=(c+"").substr((h+"").length),f||(f=0),d=en(u)||(m in zn.units?zn.units[m]:g),g!==d&&(h=zr(e,m,c,d)),this._pt=new bn(this._pt,x?T:o,m,h,(_?ya(h,_+f):f)-h,!x&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?yR:Fh),this._pt.u=d||0,x&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=xR):g!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=vR);else if(m in o)PR.call(this,e,m,c,_?_+u:u);else if(m in e)this.add(e,m,c||e[m],_?_+u:u,r,s);else if(m!=="parseTransform"){rm(m,u);continue}x||(m in o?N.push(m,0,o[m]):typeof e[m]=="function"?N.push(m,2,e[m]()):N.push(m,1,c||e[m])),a.push(m)}}A&&Xy(this)},render:function(e,t){if(t.tween._time||!mm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Vi,aliases:Ai,getSetter:function(e,t,i){var r=Ai[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==En&&(e._gsap.x||Vi(e,"x"))?i&&Y0===i?t==="scale"?bR:MR:(Y0=i||{})&&(t==="scale"?ER:TR):e.style&&!tm(e.style[t])?SR:~t.indexOf("-")?wR:fm(e,t)},core:{_removeProperty:Fr,_getMatrix:_m}};Tn.utils.checkPrefix=Ba;Tn.core.getStyleSaver=Ky;(function(n,e,t,i){var r=Mn(n+","+e+","+t,function(s){tr[s]=1});Mn(e,function(s){zn.units[s]="deg",t1[s]=1}),Ai[r[13]]=n+","+e,Mn(i,function(s){var a=s.split(":");Ai[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){zn.units[n]="px"});Tn.registerPlugin(r1);var Vh=Tn.registerPlugin(r1)||Tn;Vh.core.Tween;const OR=({onIntroComplete:n,forcePlay:e=!1})=>{const t=Ie.useRef(null),i=Ie.useRef(null),r=Ie.useRef(null),s=Ie.useRef(null),a=Ie.useRef(null),o=Ie.useRef(null),[l,c]=Ie.useState($e.getIsMuted()),[u,f]=Ie.useState(!0),[h,p]=Ie.useState(0);if(Ie.useEffect(()=>{if(!e&&sessionStorage.getItem("studio_intro_seen")==="true"){f(!1),n();return}const g=i.current;if(!g)return;const d=window.innerWidth,_=window.innerHeight,x=new ay,S=new fn(65,d/_,.1,1e3);S.position.z=22;const T=new sy({canvas:g,antialias:!0,alpha:!0,powerPreference:"high-performance"});T.setSize(d,_),T.setPixelRatio(Math.min(window.devicePixelRatio,2));const C=6e3,A=new ri,N=new Float32Array(C*3),w=new Float32Array(C*3),E=new Float32Array(C*3),F=new Float32Array(C*3),L=new Ze("#d4af37");for(let R=0;R<C;R++){const B=25+Math.random()*20,ae=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1);N[R*3]=B*Math.sin(V)*Math.cos(ae),N[R*3+1]=B*Math.sin(V)*Math.sin(ae),N[R*3+2]=B*Math.cos(V),E[R*3]=N[R*3],E[R*3+1]=N[R*3+1],E[R*3+2]=N[R*3+2];const $=R/C*Math.PI*8,ce=3+R%6*1.5;w[R*3]=Math.cos($)*ce+(Math.random()-.5)*.4,w[R*3+1]=Math.sin($)*ce+(Math.random()-.5)*.4,w[R*3+2]=(Math.random()-.5)*2,F[R*3]=L.r+(Math.random()-.5)*.2,F[R*3+1]=L.g+(Math.random()-.5)*.2,F[R*3+2]=L.b+(Math.random()-.5)*.2}A.setAttribute("position",new Sn(E,3)),A.setAttribute("color",new Sn(F,3));const z=new Zp({size:.16,vertexColors:!0,transparent:!0,opacity:.9,blending:Kc,depthWrite:!1}),M=new oy(A,z);x.add(M);const H=Vh.timeline({onComplete:()=>{X()}});$e.playCinematicImpact();const K={val:0};H.to(K,{val:1,duration:2.8,ease:"power3.inOut",onUpdate:()=>{p(Math.round(K.val*100));const R=A.attributes.position,B=K.val;for(let ae=0;ae<C;ae++){const V=N[ae*3],$=N[ae*3+1],ce=N[ae*3+2],ue=w[ae*3],de=w[ae*3+1],_e=w[ae*3+2];R.setXYZ(ae,V+(ue-V)*B+Math.sin(B*Math.PI+ae)*(1-B)*2,$+(de-$)*B+Math.cos(B*Math.PI+ae)*(1-B)*2,ce+(_e-ce)*B)}R.needsUpdate=!0}},0),a.current&&H.fromTo(a.current,{opacity:0,scale:.85,letterSpacing:"0.4em"},{opacity:1,scale:1,letterSpacing:"0.18em",duration:1.6,ease:"power2.out"},.8),o.current&&H.fromTo(o.current,{opacity:0,y:20},{opacity:1,y:0,duration:1.2,ease:"power2.out"},1.4);let Y=0;const G=()=>{M.rotation.z+=.003,M.rotation.y+=.002,T.render(x,S),Y=requestAnimationFrame(G)};G();const X=()=>{$e.playWhoosh(),sessionStorage.setItem("studio_intro_seen","true");const R=Vh.timeline({onComplete:()=>{f(!1),n(),cancelAnimationFrame(Y),T.dispose(),A.dispose(),z.dispose()}});r.current&&s.current?R.to([a.current,o.current,g],{opacity:0,duration:.5}).to(r.current,{yPercent:-100,duration:.9,ease:"power4.inOut"},"-=0.2").to(s.current,{yPercent:100,duration:.9,ease:"power4.inOut"},"<"):(f(!1),n())},I=()=>{const R=window.innerWidth,B=window.innerHeight;S.aspect=R/B,S.updateProjectionMatrix(),T.setSize(R,B)};return window.addEventListener("resize",I),()=>{H.kill(),cancelAnimationFrame(Y),window.removeEventListener("resize",I)}},[e]),!u)return null;const v=()=>{sessionStorage.setItem("studio_intro_seen","true"),$e.playWhoosh(),f(!1),n()},m=()=>{const g=$e.toggleMute();c(g),g||$e.playClick()};return y.jsxs("div",{className:"hollywood-intro-overlay",ref:t,children:[y.jsx("div",{className:"curtain curtain-top",ref:r}),y.jsx("div",{className:"curtain curtain-bottom",ref:s}),y.jsx("canvas",{className:"intro-canvas",ref:i}),y.jsxs("div",{className:"intro-content",children:[y.jsxs("span",{className:"intro-pretitle",children:[y.jsx(bs,{size:14,color:"#d4af37"}),y.jsx("span",{children:"PRODUCTION PREMIERE"})]}),y.jsx("h1",{className:"intro-title",ref:a,children:"STUDIO OS"}),y.jsx("p",{className:"intro-tagline",ref:o,children:"CINEMATIC ARCHITECTURE • 9 MONOLITHIC STANDARDS • ZERO-SLOP"}),y.jsxs("div",{className:"intro-hud-bar",children:[y.jsx("div",{className:"hud-track",children:y.jsx("div",{className:"hud-fill",style:{width:`${h}%`}})}),y.jsxs("span",{children:["INITIALIZING CORE ",h,"%"]})]})]}),y.jsxs("div",{className:"intro-controls",children:[y.jsxs("button",{className:"btn-intro-control",onClick:m,title:"Вкл/Выкл звук",children:[l?y.jsx(bx,{size:16}):y.jsx(Mx,{size:16}),y.jsx("span",{children:l?"ЗВУК ВЫКЛ":"ЗВУК ВКЛ"})]}),y.jsxs("button",{className:"btn-intro-control skip-btn",onClick:v,children:[y.jsx("span",{children:"ПРОПУСТИТЬ"}),y.jsx(qw,{size:16})]})]}),y.jsx("style",{children:`
        .hollywood-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999999;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #ffffff;
        }
        .curtain {
          position: fixed;
          left: 0;
          width: 100%;
          height: 50.5vh;
          background: #050507;
          z-index: 1000;
          pointer-events: none;
          box-shadow: 0 0 50px rgba(0,0,0,0.9);
        }
        .curtain-top { top: 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2); }
        .curtain-bottom { bottom: 0; border-top: 1px solid rgba(212, 175, 55, 0.2); }
        
        .intro-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .intro-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .intro-pretitle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.65rem, 0.6rem + 0.3vw, 0.85rem);
          color: #d4af37;
          letter-spacing: 0.3em;
          margin-bottom: 14px;
        }
        .intro-title {
          font-family: 'Cinzel', 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 6.5rem);
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #f7f7fa;
          text-shadow: 0 0 40px rgba(212, 175, 55, 0.5);
          margin-bottom: 12px;
        }
        .intro-tagline {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.7rem, 0.65rem + 0.3vw, 0.95rem);
          color: rgba(255, 255, 255, 0.65);
          letter-spacing: 0.15em;
          max-width: 680px;
          margin-bottom: 30px;
        }
        .intro-hud-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #d4af37;
        }
        .hud-track {
          width: 180px;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          overflow: hidden;
        }
        .hud-fill {
          height: 100%;
          background: #d4af37;
          box-shadow: 0 0 10px #d4af37;
          transition: width 0.1s linear;
        }
        .intro-controls {
          position: absolute;
          bottom: calc(24px + env(safe-area-inset-bottom, 0px));
          left: 0;
          right: 0;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          z-index: 20;
        }
        .btn-intro-control {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          min-height: 44px;
          background: rgba(10, 10, 15, 0.7);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 30px;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.25s ease;
        }
        .btn-intro-control:hover {
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
        }
        .skip-btn {
          border-color: rgba(255, 255, 255, 0.2);
        }
      `})]})},FR=({scrollProgress:n,activeArchetype:e,bloom:t=!0,grain:i=!0,vignette:r=!0})=>{const s=Ie.useRef(null),a=Ie.useRef({scroll:n,targetScroll:n,mouseX:0,mouseY:0,targetMouseX:0,targetMouseY:0,archetype:e});return a.current.targetScroll=n,a.current.archetype=e,Ie.useEffect(()=>{const o=s.current;if(!o)return;let l=window.innerWidth,c=window.innerHeight;const u=new ay;u.fog=new $p(329224,.025);const f=new fn(55,l/c,.1,1e3);f.position.set(0,0,18);const h=new sy({canvas:o,antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setSize(l,c),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=Ax,h.toneMappingExposure=1.2;const p=new su(4.5,2),v=new fC({color:1119e3,metalness:.95,roughness:.15,wireframe:!1,flatShading:!0}),m=new Qn(p,v);u.add(m);const g=new su(5.2,1),d=new ru({color:13938487,wireframe:!0,transparent:!0,opacity:.35}),_=new Qn(g,d);u.add(_);const x=4500,S=new ri,T=new Float32Array(x*3),C=new Float32Array(x*3);for(let X=0;X<x;X++){const I=15+Math.random()*50,R=Math.random()*Math.PI*2,B=Math.acos(2*Math.random()-1);T[X*3]=I*Math.sin(B)*Math.cos(R),T[X*3+1]=I*Math.sin(B)*Math.sin(R),T[X*3+2]=I*Math.cos(B);const ae=Math.random()>.6;C[X*3]=ae?.95:.4,C[X*3+1]=ae?.8:.6,C[X*3+2]=ae?.3:.9}S.setAttribute("position",new Sn(T,3)),S.setAttribute("color",new Sn(C,3));const A=new Zp({size:.18,vertexColors:!0,transparent:!0,opacity:.8,blending:Kc}),N=new oy(S,A);u.add(N);const w=new mo;for(let X=0;X<3;X++){const I=new Qp(6.5+X*1.8,.04,16,100),R=new ru({color:X===0?13938487:X===1?62206:16727552,transparent:!0,opacity:.45}),B=new Qn(I,R);B.rotation.x=X*Math.PI/3,B.rotation.y=X*Math.PI/4,w.add(B)}u.add(w);const E=new gC(16777215,.8);u.add(E);const F=new mC(13938487,3.5);F.position.set(10,15,12),u.add(F);const L=new U0(62206,4,50);L.position.set(-15,-10,10),u.add(L);const z=new U0(16727552,3,40);z.position.set(0,-15,-10),u.add(z);const M=X=>{let I=0,R=0;"touches"in X&&X.touches.length>0?(I=X.touches[0].clientX,R=X.touches[0].clientY):"clientX"in X&&(I=X.clientX,R=X.clientY),a.current.targetMouseX=(I/window.innerWidth-.5)*2,a.current.targetMouseY=(R/window.innerHeight-.5)*2};window.addEventListener("mousemove",M,{passive:!0}),window.addEventListener("touchmove",M,{passive:!0});let H=0,K=new _C;const Y=()=>{const X=K.getDelta(),I=K.getElapsedTime();a.current.scroll+=(a.current.targetScroll-a.current.scroll)*.08,a.current.mouseX+=(a.current.targetMouseX-a.current.mouseX)*.05,a.current.mouseY+=(a.current.targetMouseY-a.current.mouseY)*.05;const R=a.current.scroll,B=a.current.mouseX,ae=a.current.mouseY,V=a.current.archetype;V==="luxury-noir"?(F.color.set("#d4af37"),d.color.set("#d4af37"),v.color.set("#101216")):V==="neo-brutalism"?(F.color.set("#ff3e00"),d.color.set("#000000"),v.color.set("#ffffff")):V==="cyber-tech"?(F.color.set("#00ff88"),d.color.set("#00f2fe"),v.color.set("#040812")):V==="editorial-swiss"?(F.color.set("#0044ff"),d.color.set("#111111"),v.color.set("#f0f2f5")):(F.color.set("#6366f1"),d.color.set("#a5b4fc"),v.color.set("#14171d")),f.position.z=18-R*6+ae*2,f.position.x=B*3,f.position.y=-ae*2+Math.sin(R*Math.PI)*2,f.lookAt(0,0,0),m.rotation.y=I*.25+R*Math.PI*2,m.rotation.x=I*.15+ae*.5,_.rotation.y=-I*.2-R*Math.PI*2,_.rotation.z=I*.1,w.children.forEach(($,ce)=>{$.rotation.x+=X*(.4+ce*.2),$.rotation.y+=X*(.3+ce*.15)}),N.rotation.y=I*.03,N.rotation.x=-I*.02,h.render(u,f),H=requestAnimationFrame(Y)};Y();const G=()=>{l=window.innerWidth,c=window.innerHeight,f.aspect=l/c,f.updateProjectionMatrix(),h.setSize(l,c)};return window.addEventListener("resize",G),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",G),window.removeEventListener("mousemove",M),window.removeEventListener("touchmove",M),h.dispose(),p.dispose(),v.dispose(),g.dispose(),d.dispose(),S.dispose(),A.dispose()}},[]),y.jsxs("div",{className:"cinema-canvas-fixed-wrap",children:[y.jsx("canvas",{ref:s,className:"cinema-canvas"}),y.jsx("div",{className:`cinema-film-grain ${i?"active":""}`}),y.jsx("div",{className:`cinema-vignette ${r?"active":""}`}),y.jsx("style",{children:`
        .cinema-canvas-fixed-wrap {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100dvh;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .cinema-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .cinema-film-grain.active {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }
        .cinema-vignette.active {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.85) 100%);
          pointer-events: none;
          z-index: 3;
        }
      `})]})},zR=({scrollProgress:n,onOpenDownload:e,onOpenOrder:t,onOpenVault:i,onSelectArchetype:r,currentArchetype:s})=>y.jsxs("div",{className:"scrollytelling-container",children:[y.jsxs("div",{className:"scrolly-telemetry-hud",children:[y.jsxs("div",{className:"hud-metric",children:[y.jsx("span",{children:"TIMELINE PROGRESS:"}),y.jsxs("strong",{children:[Math.round(n*100),"%"]})]}),y.jsxs("div",{className:"hud-metric",children:[y.jsx("span",{children:"CAMERA VECTOR:"}),y.jsxs("strong",{children:["Z:",(18-n*6).toFixed(1),"m"]})]}),y.jsxs("div",{className:"hud-metric",children:[y.jsx("span",{children:"ARCHETYPE MATRIX:"}),y.jsx("strong",{children:s.toUpperCase()})]})]}),y.jsx("section",{className:"scrolly-act-section",id:"act-1",children:y.jsxs("div",{className:"act-content-card",children:[y.jsxs("div",{className:"act-header",children:[y.jsx("span",{className:"act-num",children:"01"}),y.jsxs("div",{children:[y.jsx("span",{className:"act-tagline",children:"[SYSTEM 01 // MOTION PRODUCTION]"}),y.jsx("h2",{className:"act-title",children:"ГОЛЛИВУДСКИЕ 3D-ЗАСТАВКИ И ТАЙМЛАЙНЫ"})]})]}),y.jsx("p",{className:"act-desc",children:"Никакого спагетти-кода из setTimeout. Длинная веб-анимация строится как единый Master Timeline, синхронизированный со скроллом через ScrollTrigger и Lenis с инерцией 1.2s."}),y.jsxs("div",{className:"act-features-chips",children:[y.jsx("span",{className:"chip",children:"Three.js WebGL Core"}),y.jsx("span",{className:"chip",children:"Sub-bass Web Audio Synth"}),y.jsx("span",{className:"chip",children:"Apple Image-Sequence Scrubbing"}),y.jsx("span",{className:"chip",children:"60 FPS Guaranteed"})]}),y.jsxs("div",{className:"act-actions-row",children:[y.jsxs("button",{className:"btn-act-primary",onClick:t,children:[y.jsx(bs,{size:16}),y.jsx("span",{children:"Заказать сайт студии"})]}),y.jsxs("button",{className:"btn-act-secondary",onClick:e,children:[y.jsx(vn,{size:16}),y.jsx("span",{children:"Скачать модуль 3D"})]})]})]})}),y.jsx("section",{className:"scrolly-act-section",id:"act-2",children:y.jsxs("div",{className:"act-content-card",children:[y.jsxs("div",{className:"act-header",children:[y.jsx("span",{className:"act-num",children:"02"}),y.jsxs("div",{children:[y.jsx("span",{className:"act-tagline",children:"[SYSTEM 02 // ANTI-SLOP DEFENSE]"}),y.jsx("h2",{className:"act-title",children:"ФИЛЬТРАЦИЯ AI-ШАБЛОННОСТИ И КЛИШЕ"})]})]}),y.jsx("p",{className:"act-desc",children:"Автоматические детекторы блокируют заезженные фразы («в современном мире»), фиолетово-синие градиенты и дефолтные шрифты. Минимальный порог оригинальности проекта — 75/100."}),y.jsxs("div",{className:"slop-visual-meter",children:[y.jsxs("div",{className:"meter-label",children:[y.jsx("span",{children:"Brand DNA Originality Score:"}),y.jsx("strong",{style:{color:"#00ff88"},children:"94 / 100 (HIGH AUTHENTICITY)"})]}),y.jsx("div",{className:"meter-track",children:y.jsx("div",{className:"meter-fill",style:{width:"94%"}})})]}),y.jsx("div",{className:"act-actions-row",children:y.jsxs("button",{className:"btn-act-secondary",onClick:e,children:[y.jsx(vn,{size:16}),y.jsx("span",{children:"Скачать Anti-Slop линтеры (ZIP)"})]})})]})}),y.jsx("section",{className:"scrolly-act-section",id:"act-3",children:y.jsxs("div",{className:"act-content-card",children:[y.jsxs("div",{className:"act-header",children:[y.jsx("span",{className:"act-num",children:"03"}),y.jsxs("div",{children:[y.jsx("span",{className:"act-tagline",children:"[SYSTEM 07 // 5 DESIGN ARCHETYPES]"}),y.jsx("h2",{className:"act-title",children:"МНОГОСЛОЙНАЯ ВАРИАТИВНОСТЬ ДИЗАЙНОВ"})]})]}),y.jsx("p",{className:"act-desc",children:"Макет и бизнес-логика умеют за 1 секунду мутировать между 5 фундаментальными стилями с автоматическим контролем математической контрастности APCA (WCAG AAA)."}),y.jsx("div",{className:"act-arch-switcher",children:[{id:"luxury-noir",name:"Luxury Noir",color:"#d4af37"},{id:"neo-brutalism",name:"Neo-Brutalism",color:"#ff3e00"},{id:"cyber-tech",name:"Cyber-Tech",color:"#00ff88"},{id:"editorial-swiss",name:"Editorial Swiss",color:"#0044ff"},{id:"clean-minimal",name:"Clean Minimal",color:"#6366f1"}].map(a=>y.jsxs("button",{className:`btn-arch-pill ${s===a.id?"active":""}`,onClick:()=>{$e.playClick(450),r(a.id)},children:[y.jsx("span",{className:"dot",style:{background:a.color}}),y.jsx("span",{children:a.name})]},a.id))}),y.jsx("div",{className:"act-actions-row",children:y.jsxs("button",{className:"btn-act-secondary",onClick:e,children:[y.jsx(vn,{size:16}),y.jsx("span",{children:"Скачать 5 Архетипов (JSON/CSS)"})]})})]})}),y.jsx("section",{className:"scrolly-act-section",id:"act-4",children:y.jsxs("div",{className:"act-content-card",children:[y.jsxs("div",{className:"act-header",children:[y.jsx("span",{className:"act-num",children:"04"}),y.jsxs("div",{children:[y.jsx("span",{className:"act-tagline",children:"[SYSTEM 09 // ZERO-BUG QUALITY]"}),y.jsx("h2",{className:"act-title",children:"ЕДИНЫЙ ПРОИЗВОДСТВЕННЫЙ МОНОРЕПОЗИТОРИЙ"})]})]}),y.jsx("p",{className:"act-desc",children:"В корне системы агент создает проекты через `studio new`, принудительно подключает 9 стандартов, а удачные блоки собирает через `studio harvest` в общую библиотеку."}),y.jsxs("div",{className:"monorepo-stats-grid",children:[y.jsxs("div",{className:"stat-card",children:[y.jsx("strong",{children:"9 СИСТЕМ"}),y.jsx("span",{children:"В едином ядре"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("strong",{children:"60 FPS"}),y.jsx("span",{children:"Стабильный фреймрейт"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("strong",{children:"0.00 CLS"}),y.jsx("span",{children:"Zero Layout Shift"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("strong",{children:"WCAG AAA"}),y.jsx("span",{children:"100% Доступность"})]})]}),y.jsxs("div",{className:"act-actions-row",children:[y.jsxs("button",{className:"btn-act-primary",onClick:t,children:[y.jsx(bs,{size:16}),y.jsx("span",{children:"Запустить проект в STUDIO OS"})]}),y.jsx("button",{className:"btn-act-secondary",onClick:i,children:y.jsx("span",{children:"Загрузить ассеты с ПК"})})]})]})}),y.jsx("style",{children:`
        .scrollytelling-container {
          position: relative;
          z-index: 10;
          padding: 60px 20px 100px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .scrolly-telemetry-hud {
          position: sticky;
          top: 75px;
          z-index: 50;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 18px;
          background: rgba(10, 12, 16, 0.75);
          backdrop-filter: blur(14px);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .hud-metric strong {
          color: var(--accent);
          margin-left: 6px;
        }
        .scrolly-act-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .act-content-card {
          max-width: 680px;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(24px, 4vw, 44px);
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(16px);
        }
        .act-header {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 18px;
        }
        .act-num {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1;
          color: var(--accent);
          opacity: 0.85;
        }
        .act-tagline {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }
        .act-title {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          line-height: 1.15;
        }
        .act-desc {
          font-size: clamp(0.95rem, 1vw, 1.1rem);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .act-features-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .chip {
          padding: 6px 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-primary);
        }
        .act-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .btn-act-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          padding: 12px 24px;
          background: var(--accent);
          color: #000;
          font-weight: bold;
          font-size: 0.88rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-act-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px var(--accent-glow);
        }
        .btn-act-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          padding: 12px 20px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          color: var(--text-primary);
          font-size: 0.85rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-act-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .slop-visual-meter {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          margin-bottom: 24px;
        }
        .meter-label {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .meter-track {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .meter-fill {
          height: 100%;
          background: #00ff88;
          box-shadow: 0 0 12px #00ff88;
        }
        .act-arch-switcher {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .btn-arch-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          min-height: 44px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
        }
        .btn-arch-pill .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .btn-arch-pill.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .monorepo-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 24px;
        }
        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
          text-align: center;
        }
        .stat-card strong {
          display: block;
          font-family: var(--font-mono);
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 2px;
        }
        .stat-card span {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
      `})]});function sc(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var s1={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function a(c,u){if(!r[c]){if(!i[c]){var f=typeof sc=="function"&&sc;if(!u&&f)return f(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var p=r[c]={exports:{}};i[c][0].call(p.exports,function(v){var m=i[c][1][v];return a(m||v)},p,p.exports,t,i,r,s)}return r[c].exports}for(var o=typeof sc=="function"&&sc,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,i,r){var s=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,f,h,p,v,m,g=[],d=0,_=l.length,x=_,S=s.getTypeOf(l)!=="string";d<l.length;)x=_-d,f=S?(c=l[d++],u=d<_?l[d++]:0,d<_?l[d++]:0):(c=l.charCodeAt(d++),u=d<_?l.charCodeAt(d++):0,d<_?l.charCodeAt(d++):0),h=c>>2,p=(3&c)<<4|u>>4,v=1<x?(15&u)<<2|f>>6:64,m=2<x?63&f:64,g.push(o.charAt(h)+o.charAt(p)+o.charAt(v)+o.charAt(m));return g.join("")},r.decode=function(l){var c,u,f,h,p,v,m=0,g=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var _,x=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&x--,l.charAt(l.length-2)===o.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(_=a.uint8array?new Uint8Array(0|x):new Array(0|x);m<l.length;)c=o.indexOf(l.charAt(m++))<<2|(h=o.indexOf(l.charAt(m++)))>>4,u=(15&h)<<4|(p=o.indexOf(l.charAt(m++)))>>2,f=(3&p)<<6|(v=o.indexOf(l.charAt(m++))),_[g++]=c,p!==64&&(_[g++]=u),v!==64&&(_[g++]=f);return _}},{"./support":30,"./utils":32}],2:[function(t,i,r){var s=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(u,f,h,p,v){this.compressedSize=u,this.uncompressedSize=f,this.crc32=h,this.compression=p,this.compressedContent=v}c.prototype={getContentWorker:function(){var u=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return u.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,f,h){return u.pipe(new o).pipe(new l("uncompressedSize")).pipe(f.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var s=t("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,u,f,h){var p=a,v=h+f;c^=-1;for(var m=h;m<v;m++)c=c>>>8^p[255&(c^u[m])];return-1^c}(0|l,o,o.length,0):function(c,u,f,h){var p=a,v=h+f;c^=-1;for(var m=h;m<v;m++)c=c>>>8^p[255&(c^u.charCodeAt(m))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var s=null;s=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:s}},{lie:37}],7:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),l=t("./stream/GenericWorker"),c=s?"uint8array":"array";function u(f,h){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=h,this.meta={}}r.magic="\b\0",o.inherits(u,l),u.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,f.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(h){f.push({data:h,meta:f.meta})}},r.compressWorker=function(f){return new u("Deflate",f)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function s(p,v){var m,g="";for(m=0;m<v;m++)g+=String.fromCharCode(255&p),p>>>=8;return g}function a(p,v,m,g,d,_){var x,S,T=p.file,C=p.compression,A=_!==c.utf8encode,N=o.transformTo("string",_(T.name)),w=o.transformTo("string",c.utf8encode(T.name)),E=T.comment,F=o.transformTo("string",_(E)),L=o.transformTo("string",c.utf8encode(E)),z=w.length!==T.name.length,M=L.length!==E.length,H="",K="",Y="",G=T.dir,X=T.date,I={crc32:0,compressedSize:0,uncompressedSize:0};v&&!m||(I.crc32=p.crc32,I.compressedSize=p.compressedSize,I.uncompressedSize=p.uncompressedSize);var R=0;v&&(R|=8),A||!z&&!M||(R|=2048);var B=0,ae=0;G&&(B|=16),d==="UNIX"?(ae=798,B|=function($,ce){var ue=$;return $||(ue=ce?16893:33204),(65535&ue)<<16}(T.unixPermissions,G)):(ae=20,B|=function($){return 63&($||0)}(T.dosPermissions)),x=X.getUTCHours(),x<<=6,x|=X.getUTCMinutes(),x<<=5,x|=X.getUTCSeconds()/2,S=X.getUTCFullYear()-1980,S<<=4,S|=X.getUTCMonth()+1,S<<=5,S|=X.getUTCDate(),z&&(K=s(1,1)+s(u(N),4)+w,H+="up"+s(K.length,2)+K),M&&(Y=s(1,1)+s(u(F),4)+L,H+="uc"+s(Y.length,2)+Y);var V="";return V+=`
\0`,V+=s(R,2),V+=C.magic,V+=s(x,2),V+=s(S,2),V+=s(I.crc32,4),V+=s(I.compressedSize,4),V+=s(I.uncompressedSize,4),V+=s(N.length,2),V+=s(H.length,2),{fileRecord:f.LOCAL_FILE_HEADER+V+N+H,dirRecord:f.CENTRAL_FILE_HEADER+s(ae,2)+V+s(F.length,2)+"\0\0\0\0"+s(B,4)+s(g,4)+N+H+F}}var o=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),u=t("../crc32"),f=t("../signature");function h(p,v,m,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=m,this.encodeFileName=g,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(p){var v=p.meta.percent||0,m=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:m?(v+100*(m-g-1))/m:100}}))},h.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var v=this.streamFiles&&!p.file.dir;if(v){var m=a(p,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(p){this.accumulate=!1;var v=this.streamFiles&&!p.file.dir,m=a(p,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),v)this.push({data:function(g){return f.DATA_DESCRIPTOR+s(g.crc32,4)+s(g.compressedSize,4)+s(g.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var p=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var m=this.bytesWritten-p,g=function(d,_,x,S,T){var C=o.transformTo("string",T(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(_,4)+s(x,4)+s(C.length,2)+C}(this.dirRecords.length,m,p,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(p){this._sources.push(p);var v=this;return p.on("data",function(m){v.processChunk(m)}),p.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),p.on("error",function(m){v.error(m)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(p){var v=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var m=0;m<v.length;m++)try{v[m].error(p)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,v=0;v<p.length;v++)p[v].lock()},i.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var s=t("../compressions"),a=t("./ZipFileWorker");r.generateWorker=function(o,l,c){var u=new a(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{o.forEach(function(h,p){f++;var v=function(_,x){var S=_||x,T=s[S];if(!T)throw new Error(S+" is not a valid compression method !");return T}(p.options.compression,l.compression),m=p.options.compressionOptions||l.compressionOptions||{},g=p.dir,d=p.date;p._compressWorker(v,m).withStreamInfo("file",{name:h,dir:g,date:d,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=f}catch(h){u.error(h)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=t("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var s=t("./utils"),a=t("./external"),o=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function f(h){return new a.Promise(function(p,v){var m=h.decompressed.getContentWorker().pipe(new c);m.on("error",function(g){v(g)}).on("end",function(){m.streamInfo.crc32!==h.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(h,p){var v=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",h,!0,p.optimizedBinaryString,p.base64).then(function(m){var g=new l(p);return g.load(m),g}).then(function(m){var g=[a.Promise.resolve(m)],d=m.files;if(p.checkCRC32)for(var _=0;_<d.length;_++)g.push(f(d[_]));return a.Promise.all(g)}).then(function(m){for(var g=m.shift(),d=g.files,_=0;_<d.length;_++){var x=d[_],S=x.fileNameStr,T=s.resolve(x.fileNameStr);v.file(T,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:p.createFolders}),x.dir||(v.file(T).unsafeOriginalName=S)}return g.zipComment.length&&(v.comment=g.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var s=t("../utils"),a=t("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var s=t("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var u=this;o.on("data",function(f,h){u.push(f)||u._helper.pause(),c&&c(h)}).on("error",function(f){u.emit("error",f)}).on("end",function(){u.push(null)})}t("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,i,r){function s(T,C,A){var N,w=o.getTypeOf(C),E=o.extend(A||{},u);E.date=E.date||new Date,E.compression!==null&&(E.compression=E.compression.toUpperCase()),typeof E.unixPermissions=="string"&&(E.unixPermissions=parseInt(E.unixPermissions,8)),E.unixPermissions&&16384&E.unixPermissions&&(E.dir=!0),E.dosPermissions&&16&E.dosPermissions&&(E.dir=!0),E.dir&&(T=d(T)),E.createFolders&&(N=g(T))&&_.call(this,N,!0);var F=w==="string"&&E.binary===!1&&E.base64===!1;A&&A.binary!==void 0||(E.binary=!F),(C instanceof f&&C.uncompressedSize===0||E.dir||!C||C.length===0)&&(E.base64=!1,E.binary=!0,C="",E.compression="STORE",w="string");var L=null;L=C instanceof f||C instanceof l?C:v.isNode&&v.isStream(C)?new m(T,C):o.prepareContent(T,C,E.binary,E.optimizedBinaryString,E.base64);var z=new h(T,L,E);this.files[T]=z}var a=t("./utf8"),o=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),u=t("./defaults"),f=t("./compressedObject"),h=t("./zipObject"),p=t("./generate"),v=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),g=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var C=T.lastIndexOf("/");return 0<C?T.substring(0,C):""},d=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},_=function(T,C){return C=C!==void 0?C:u.createFolders,T=d(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:C}),this.files[T]};function x(T){return Object.prototype.toString.call(T)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var C,A,N;for(C in this.files)N=this.files[C],(A=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&T(A,N)},filter:function(T){var C=[];return this.forEach(function(A,N){T(A,N)&&C.push(N)}),C},file:function(T,C,A){if(arguments.length!==1)return T=this.root+T,s.call(this,T,C,A),this;if(x(T)){var N=T;return this.filter(function(E,F){return!F.dir&&N.test(E)})}var w=this.files[this.root+T];return w&&!w.dir?w:null},folder:function(T){if(!T)return this;if(x(T))return this.filter(function(w,E){return E.dir&&T.test(w)});var C=this.root+T,A=_.call(this,C),N=this.clone();return N.root=A.name,N},remove:function(T){T=this.root+T;var C=this.files[T];if(C||(T.slice(-1)!=="/"&&(T+="/"),C=this.files[T]),C&&!C.dir)delete this.files[T];else for(var A=this.filter(function(w,E){return E.name.slice(0,T.length)===T}),N=0;N<A.length;N++)delete this.files[A[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var C,A={};try{if((A=o.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");o.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var N=A.comment||this.comment||"";C=p.generateWorker(this,A,N)}catch(w){(C=new l("error")).error(w)}return new c(C,A.type||"string",A.mimeType)},generateAsync:function(T,C){return this.generateInternalStream(T).accumulate(C)},generateNodeStream:function(T,C){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream(C)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===u&&this.data[h+3]===f)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&u===h[2]&&f===h[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var s=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,r){var s=t("./Uint8ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var s=t("./ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var s=t("../utils"),a=t("../support"),o=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");i.exports=function(f){var h=s.getTypeOf(f);return s.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new c(f):a.uint8array?new u(s.transformTo("uint8array",f)):new o(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var s=t("./GenericWorker"),a=t("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var s=t("./GenericWorker"),a=t("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(t,i,r){var s=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),l=t("../base64"),c=t("../support"),u=t("../external"),f=null;if(c.nodestream)try{f=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(v,m){return new u.Promise(function(g,d){var _=[],x=v._internalType,S=v._outputType,T=v._mimeType;v.on("data",function(C,A){_.push(C),m&&m(A)}).on("error",function(C){_=[],d(C)}).on("end",function(){try{var C=function(A,N,w){switch(A){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),w);case"base64":return l.encode(N);default:return s.transformTo(A,N)}}(S,function(A,N){var w,E=0,F=null,L=0;for(w=0;w<N.length;w++)L+=N[w].length;switch(A){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(F=new Uint8Array(L),w=0;w<N.length;w++)F.set(N[w],E),E+=N[w].length;return F;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+A+"'")}}(x,_),T);g(C)}catch(A){d(A)}_=[]}).resume()})}function p(v,m,g){var d=m;switch(m){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=m,this._mimeType=g,s.checkSupport(d),this._worker=v.pipe(new a(d)),v.lock()}catch(_){this._worker=new o("error"),this._worker.error(_)}}p.prototype={accumulate:function(v){return h(this,v)},on:function(v,m){var g=this;return v==="data"?this._worker.on(v,function(d){m.call(g,d.data,d.meta)}):this._worker.on(v,function(){s.delay(m,arguments,g)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var s=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}r.utf8encode=function(p){return a.nodebuffer?o.newBufferFrom(p,"utf-8"):function(v){var m,g,d,_,x,S=v.length,T=0;for(_=0;_<S;_++)(64512&(g=v.charCodeAt(_)))==55296&&_+1<S&&(64512&(d=v.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),_++),T+=g<128?1:g<2048?2:g<65536?3:4;for(m=a.uint8array?new Uint8Array(T):new Array(T),_=x=0;x<T;_++)(64512&(g=v.charCodeAt(_)))==55296&&_+1<S&&(64512&(d=v.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),_++),g<128?m[x++]=g:(g<2048?m[x++]=192|g>>>6:(g<65536?m[x++]=224|g>>>12:(m[x++]=240|g>>>18,m[x++]=128|g>>>12&63),m[x++]=128|g>>>6&63),m[x++]=128|63&g);return m}(p)},r.utf8decode=function(p){return a.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):function(v){var m,g,d,_,x=v.length,S=new Array(2*x);for(m=g=0;m<x;)if((d=v[m++])<128)S[g++]=d;else if(4<(_=c[d]))S[g++]=65533,m+=_-1;else{for(d&=_===2?31:_===3?15:7;1<_&&m<x;)d=d<<6|63&v[m++],_--;1<_?S[g++]=65533:d<65536?S[g++]=d:(d-=65536,S[g++]=55296|d>>10&1023,S[g++]=56320|1023&d)}return S.length!==g&&(S.subarray?S=S.subarray(0,g):S.length=g),s.applyFromCharCode(S)}(p=s.transformTo(a.uint8array?"uint8array":"array",p))},s.inherits(f,l),f.prototype.processChunk=function(p){var v=s.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var m=v;(v=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),v.set(m,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var g=function(_,x){var S;for((x=x||_.length)>_.length&&(x=_.length),S=x-1;0<=S&&(192&_[S])==128;)S--;return S<0||S===0?x:S+c[_[S]]>x?S:x}(v),d=v;g!==v.length&&(a.uint8array?(d=v.subarray(0,g),this.leftOver=v.subarray(g,v.length)):(d=v.slice(0,g),this.leftOver=v.slice(g,v.length))),this.push({data:r.utf8decode(d),meta:p.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(h,l),h.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var s=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),l=t("./external");function c(m){return m}function u(m,g){for(var d=0;d<m.length;++d)g[d]=255&m.charCodeAt(d);return g}t("setimmediate"),r.newBlob=function(m,g){r.checkSupport("blob");try{return new Blob([m],{type:g})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(m),d.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(m,g,d){var _=[],x=0,S=m.length;if(S<=d)return String.fromCharCode.apply(null,m);for(;x<S;)g==="array"||g==="nodebuffer"?_.push(String.fromCharCode.apply(null,m.slice(x,Math.min(x+d,S)))):_.push(String.fromCharCode.apply(null,m.subarray(x,Math.min(x+d,S)))),x+=d;return _.join("")},stringifyByChar:function(m){for(var g="",d=0;d<m.length;d++)g+=String.fromCharCode(m[d]);return g},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function h(m){var g=65536,d=r.getTypeOf(m),_=!0;if(d==="uint8array"?_=f.applyCanBeUsed.uint8array:d==="nodebuffer"&&(_=f.applyCanBeUsed.nodebuffer),_)for(;1<g;)try{return f.stringifyByChunk(m,d,g)}catch{g=Math.floor(g/2)}return f.stringifyByChar(m)}function p(m,g){for(var d=0;d<m.length;d++)g[d]=m[d];return g}r.applyFromCharCode=h;var v={};v.string={string:c,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return v.string.uint8array(m).buffer},uint8array:function(m){return u(m,new Uint8Array(m.length))},nodebuffer:function(m){return u(m,o.allocBuffer(m.length))}},v.array={string:h,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(m)}},v.arraybuffer={string:function(m){return h(new Uint8Array(m))},array:function(m){return p(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(new Uint8Array(m))}},v.uint8array={string:h,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return o.newBufferFrom(m)}},v.nodebuffer={string:h,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return v.nodebuffer.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:c},r.transformTo=function(m,g){if(g=g||"",!m)return g;r.checkSupport(m);var d=r.getTypeOf(g);return v[d][m](g)},r.resolve=function(m){for(var g=m.split("/"),d=[],_=0;_<g.length;_++){var x=g[_];x==="."||x===""&&_!==0&&_!==g.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},r.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(m)?"nodebuffer":s.uint8array&&m instanceof Uint8Array?"uint8array":s.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(m){if(!s[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(m){var g,d,_="";for(d=0;d<(m||"").length;d++)_+="\\x"+((g=m.charCodeAt(d))<16?"0":"")+g.toString(16).toUpperCase();return _},r.delay=function(m,g,d){setImmediate(function(){m.apply(d||null,g||[])})},r.inherits=function(m,g){function d(){}d.prototype=g.prototype,m.prototype=new d},r.extend=function(){var m,g,d={};for(m=0;m<arguments.length;m++)for(g in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],g)&&d[g]===void 0&&(d[g]=arguments[m][g]);return d},r.prepareContent=function(m,g,d,_,x){return l.Promise.resolve(g).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(T,C){var A=new FileReader;A.onload=function(N){T(N.target.result)},A.onerror=function(N){C(N.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var T=r.getTypeOf(S);return T?(T==="arraybuffer"?S=r.transformTo("uint8array",S):T==="string"&&(x?S=a.decode(S):d&&_!==!0&&(S=function(C){return u(C,s.uint8array?new Uint8Array(C.length):new Array(C.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),l=t("./zipEntry"),c=t("./support");function u(f){this.files=[],this.loadOptions=f}u.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(f)+")")}},isSignature:function(f,h){var p=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===h;return this.reader.setIndex(p),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",p=a.transformTo(h,f);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,h,p,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),h=this.reader.readInt(4),p=this.reader.readData(h),this.zip64ExtensibleData[f]={id:f,length:h,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,h;for(f=0;f<this.files.length;f++)h=this.files[f],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var h=f;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var v=h-p;if(0<v)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),u=t("./compressions"),f=t("./support");function h(p,v){this.options=p,this.loadOptions=v}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var v,m;if(p.skip(22),this.fileNameLength=p.readInt(2),m=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(g){for(var d in u)if(Object.prototype.hasOwnProperty.call(u,d)&&u[d].magic===g)return u[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,v,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var v=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(v),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var v,m,g,d=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<d;)v=p.readInt(2),m=p.readInt(2),g=p.readData(m),this.extraFields[v]={id:v,length:m,value:g};p.setIndex(d)},handleUTF8:function(){var p=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var m=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var d=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var v=s(p.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var v=s(p.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(p.length-5))}return null}},i.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function s(v,m,g){this.name=v,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=m,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),u=t("./stream/GenericWorker");s.prototype={internalStream:function(v){var m=null,g="string";try{if(!v)throw new Error("No output type specified.");var d=(g=v.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),m=this._decompressWorker();var _=!this._dataBinary;_&&!d&&(m=m.pipe(new l.Utf8EncodeWorker)),!_&&d&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(x){(m=new u("error")).error(x)}return new a(m,g,"")},async:function(v,m){return this.internalStream(v).accumulate(m)},nodeStream:function(v,m){return this.internalStream(v||"nodebuffer").toNodejsStream(m)},_compressWorker:function(v,m){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,v,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<f.length;p++)s.prototype[f[p]]=h;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(v),f=s.document.createTextNode("");u.observe(f,{characterData:!0}),a=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var m=s.document.createElement("script");m.onreadystatechange=function(){v(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:function(){setTimeout(v,0)};else{var h=new s.MessageChannel;h.port1.onmessage=v,a=function(){h.port2.postMessage(0)}}var p=[];function v(){var m,g;o=!0;for(var d=p.length;d;){for(g=p,p=[],m=-1;++m<d;)g[m]();d=p.length}o=!1}i.exports=function(m){p.push(m)!==1||o||a()}}).call(this,typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var s=t("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function f(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,d!==a&&m(this,d)}function h(d,_,x){this.promise=d,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function p(d,_,x){s(function(){var S;try{S=_(x)}catch(T){return o.reject(d,T)}S===d?o.reject(d,new TypeError("Cannot resolve promise with itself")):o.resolve(d,S)})}function v(d){var _=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof _=="function")return function(){_.apply(d,arguments)}}function m(d,_){var x=!1;function S(A){x||(x=!0,o.reject(d,A))}function T(A){x||(x=!0,o.resolve(d,A))}var C=g(function(){_(T,S)});C.status==="error"&&S(C.value)}function g(d,_){var x={};try{x.value=d(_),x.status="success"}catch(S){x.status="error",x.value=S}return x}(i.exports=f).prototype.finally=function(d){if(typeof d!="function")return this;var _=this.constructor;return this.then(function(x){return _.resolve(d()).then(function(){return x})},function(x){return _.resolve(d()).then(function(){throw x})})},f.prototype.catch=function(d){return this.then(null,d)},f.prototype.then=function(d,_){if(typeof d!="function"&&this.state===c||typeof _!="function"&&this.state===l)return this;var x=new this.constructor(a);return this.state!==u?p(x,this.state===c?d:_,this.outcome):this.queue.push(new h(x,d,_)),x},h.prototype.callFulfilled=function(d){o.resolve(this.promise,d)},h.prototype.otherCallFulfilled=function(d){p(this.promise,this.onFulfilled,d)},h.prototype.callRejected=function(d){o.reject(this.promise,d)},h.prototype.otherCallRejected=function(d){p(this.promise,this.onRejected,d)},o.resolve=function(d,_){var x=g(v,_);if(x.status==="error")return o.reject(d,x.value);var S=x.value;if(S)m(d,S);else{d.state=c,d.outcome=_;for(var T=-1,C=d.queue.length;++T<C;)d.queue[T].callFulfilled(_)}return d},o.reject=function(d,_){d.state=l,d.outcome=_;for(var x=-1,S=d.queue.length;++x<S;)d.queue[x].callRejected(_);return d},f.resolve=function(d){return d instanceof this?d:o.resolve(new this(a),d)},f.reject=function(d){var _=new this(a);return o.reject(_,d)},f.all=function(d){var _=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,S=!1;if(!x)return this.resolve([]);for(var T=new Array(x),C=0,A=-1,N=new this(a);++A<x;)w(d[A],A);return N;function w(E,F){_.resolve(E).then(function(L){T[F]=L,++C!==x||S||(S=!0,o.resolve(N,T))},function(L){S||(S=!0,o.reject(N,L))})}},f.race=function(d){var _=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,S=!1;if(!x)return this.resolve([]);for(var T=-1,C=new this(a);++T<x;)A=d[T],_.resolve(A).then(function(N){S||(S=!0,o.resolve(C,N))},function(N){S||(S=!0,o.reject(C,N))});var A;return C}},{immediate:36}],38:[function(t,i,r){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var s=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),u=Object.prototype.toString,f=0,h=-1,p=0,v=8;function m(d){if(!(this instanceof m))return new m(d);this.options=a.assign({level:h,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},d||{});var _=this.options;_.raw&&0<_.windowBits?_.windowBits=-_.windowBits:_.gzip&&0<_.windowBits&&_.windowBits<16&&(_.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var x=s.deflateInit2(this.strm,_.level,_.method,_.windowBits,_.memLevel,_.strategy);if(x!==f)throw new Error(l[x]);if(_.header&&s.deflateSetHeader(this.strm,_.header),_.dictionary){var S;if(S=typeof _.dictionary=="string"?o.string2buf(_.dictionary):u.call(_.dictionary)==="[object ArrayBuffer]"?new Uint8Array(_.dictionary):_.dictionary,(x=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(l[x]);this._dict_set=!0}}function g(d,_){var x=new m(_);if(x.push(d,!0),x.err)throw x.msg||l[x.err];return x.result}m.prototype.push=function(d,_){var x,S,T=this.strm,C=this.options.chunkSize;if(this.ended)return!1;S=_===~~_?_:_===!0?4:0,typeof d=="string"?T.input=o.string2buf(d):u.call(d)==="[object ArrayBuffer]"?T.input=new Uint8Array(d):T.input=d,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new a.Buf8(C),T.next_out=0,T.avail_out=C),(x=s.deflate(T,S))!==1&&x!==f)return this.onEnd(x),!(this.ended=!0);T.avail_out!==0&&(T.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(T.output,T.next_out))):this.onData(a.shrinkBuf(T.output,T.next_out)))}while((0<T.avail_in||T.avail_out===0)&&x!==1);return S===4?(x=s.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===f):S!==2||(this.onEnd(f),!(T.avail_out=0))},m.prototype.onData=function(d){this.chunks.push(d)},m.prototype.onEnd=function(d){d===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=m,r.deflate=g,r.deflateRaw=function(d,_){return(_=_||{}).raw=!0,g(d,_)},r.gzip=function(d,_){return(_=_||{}).gzip=!0,g(d,_)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var s=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),u=t("./zlib/zstream"),f=t("./zlib/gzheader"),h=Object.prototype.toString;function p(m){if(!(this instanceof p))return new p(m);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},m||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||m&&m.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,g.windowBits);if(d!==l.Z_OK)throw new Error(c[d]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(m,g){var d=new p(g);if(d.push(m,!0),d.err)throw d.msg||c[d.err];return d.result}p.prototype.push=function(m,g){var d,_,x,S,T,C,A=this.strm,N=this.options.chunkSize,w=this.options.dictionary,E=!1;if(this.ended)return!1;_=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?A.input=o.binstring2buf(m):h.call(m)==="[object ArrayBuffer]"?A.input=new Uint8Array(m):A.input=m,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(N),A.next_out=0,A.avail_out=N),(d=s.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&w&&(C=typeof w=="string"?o.string2buf(w):h.call(w)==="[object ArrayBuffer]"?new Uint8Array(w):w,d=s.inflateSetDictionary(this.strm,C)),d===l.Z_BUF_ERROR&&E===!0&&(d=l.Z_OK,E=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&d!==l.Z_STREAM_END&&(A.avail_in!==0||_!==l.Z_FINISH&&_!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=o.utf8border(A.output,A.next_out),S=A.next_out-x,T=o.buf2string(A.output,x),A.next_out=S,A.avail_out=N-S,S&&a.arraySet(A.output,A.output,x,S,0),this.onData(T)):this.onData(a.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(E=!0)}while((0<A.avail_in||A.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(_=l.Z_FINISH),_===l.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):_!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},r.Inflate=p,r.inflate=v,r.inflateRaw=function(m,g){return(g=g||{}).raw=!0,v(m,g)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var f in u)u.hasOwnProperty(f)&&(l[f]=u[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,u,f,h){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+f),h);else for(var p=0;p<f;p++)l[h+p]=c[u+p]},flattenChunks:function(l){var c,u,f,h,p,v;for(c=f=0,u=l.length;c<u;c++)f+=l[c].length;for(v=new Uint8Array(f),c=h=0,u=l.length;c<u;c++)p=l[c],v.set(p,h),h+=p.length;return v}},o={arraySet:function(l,c,u,f,h){for(var p=0;p<f;p++)l[h+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(t,i,r){var s=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(f,h){if(h<65537&&(f.subarray&&o||!f.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(f,h));for(var p="",v=0;v<h;v++)p+=String.fromCharCode(f[v]);return p}l[254]=l[254]=1,r.string2buf=function(f){var h,p,v,m,g,d=f.length,_=0;for(m=0;m<d;m++)(64512&(p=f.charCodeAt(m)))==55296&&m+1<d&&(64512&(v=f.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),m++),_+=p<128?1:p<2048?2:p<65536?3:4;for(h=new s.Buf8(_),m=g=0;g<_;m++)(64512&(p=f.charCodeAt(m)))==55296&&m+1<d&&(64512&(v=f.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),m++),p<128?h[g++]=p:(p<2048?h[g++]=192|p>>>6:(p<65536?h[g++]=224|p>>>12:(h[g++]=240|p>>>18,h[g++]=128|p>>>12&63),h[g++]=128|p>>>6&63),h[g++]=128|63&p);return h},r.buf2binstring=function(f){return u(f,f.length)},r.binstring2buf=function(f){for(var h=new s.Buf8(f.length),p=0,v=h.length;p<v;p++)h[p]=f.charCodeAt(p);return h},r.buf2string=function(f,h){var p,v,m,g,d=h||f.length,_=new Array(2*d);for(p=v=0;p<d;)if((m=f[p++])<128)_[v++]=m;else if(4<(g=l[m]))_[v++]=65533,p+=g-1;else{for(m&=g===2?31:g===3?15:7;1<g&&p<d;)m=m<<6|63&f[p++],g--;1<g?_[v++]=65533:m<65536?_[v++]=m:(m-=65536,_[v++]=55296|m>>10&1023,_[v++]=56320|1023&m)}return u(_,v)},r.utf8border=function(f,h){var p;for((h=h||f.length)>f.length&&(h=f.length),p=h-1;0<=p&&(192&f[p])==128;)p--;return p<0||p===0?h:p+l[f[p]]>h?p:h}},{"./common":41}],43:[function(t,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,u=s>>>16&65535|0,f=0;o!==0;){for(o-=f=2e3<o?2e3:o;u=u+(c=c+a[l++]|0)|0,--f;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();i.exports=function(a,o,l,c){var u=s,f=c+l;a^=-1;for(var h=c;h<f;h++)a=a>>>8^u[255&(a^o[h])];return-1^a}},{}],46:[function(t,i,r){var s,a=t("../utils/common"),o=t("./trees"),l=t("./adler32"),c=t("./crc32"),u=t("./messages"),f=0,h=4,p=0,v=-2,m=-1,g=4,d=2,_=8,x=9,S=286,T=30,C=19,A=2*S+1,N=15,w=3,E=258,F=E+w+1,L=42,z=113,M=1,H=2,K=3,Y=4;function G(b,se){return b.msg=u[se],se}function X(b){return(b<<1)-(4<b?9:0)}function I(b){for(var se=b.length;0<=--se;)b[se]=0}function R(b){var se=b.state,Z=se.pending;Z>b.avail_out&&(Z=b.avail_out),Z!==0&&(a.arraySet(b.output,se.pending_buf,se.pending_out,Z,b.next_out),b.next_out+=Z,se.pending_out+=Z,b.total_out+=Z,b.avail_out-=Z,se.pending-=Z,se.pending===0&&(se.pending_out=0))}function B(b,se){o._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,se),b.block_start=b.strstart,R(b.strm)}function ae(b,se){b.pending_buf[b.pending++]=se}function V(b,se){b.pending_buf[b.pending++]=se>>>8&255,b.pending_buf[b.pending++]=255&se}function $(b,se){var Z,j,k=b.max_chain_length,q=b.strstart,D=b.prev_length,P=b.nice_match,O=b.strstart>b.w_size-F?b.strstart-(b.w_size-F):0,J=b.window,re=b.w_mask,Q=b.prev,pe=b.strstart+E,me=J[q+D-1],ge=J[q+D];b.prev_length>=b.good_match&&(k>>=2),P>b.lookahead&&(P=b.lookahead);do if(J[(Z=se)+D]===ge&&J[Z+D-1]===me&&J[Z]===J[q]&&J[++Z]===J[q+1]){q+=2,Z++;do;while(J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&q<pe);if(j=E-(pe-q),q=pe-E,D<j){if(b.match_start=se,P<=(D=j))break;me=J[q+D-1],ge=J[q+D]}}while((se=Q[se&re])>O&&--k!=0);return D<=b.lookahead?D:b.lookahead}function ce(b){var se,Z,j,k,q,D,P,O,J,re,Q=b.w_size;do{if(k=b.window_size-b.lookahead-b.strstart,b.strstart>=Q+(Q-F)){for(a.arraySet(b.window,b.window,Q,Q,0),b.match_start-=Q,b.strstart-=Q,b.block_start-=Q,se=Z=b.hash_size;j=b.head[--se],b.head[se]=Q<=j?j-Q:0,--Z;);for(se=Z=Q;j=b.prev[--se],b.prev[se]=Q<=j?j-Q:0,--Z;);k+=Q}if(b.strm.avail_in===0)break;if(D=b.strm,P=b.window,O=b.strstart+b.lookahead,J=k,re=void 0,re=D.avail_in,J<re&&(re=J),Z=re===0?0:(D.avail_in-=re,a.arraySet(P,D.input,D.next_in,re,O),D.state.wrap===1?D.adler=l(D.adler,P,re,O):D.state.wrap===2&&(D.adler=c(D.adler,P,re,O)),D.next_in+=re,D.total_in+=re,re),b.lookahead+=Z,b.lookahead+b.insert>=w)for(q=b.strstart-b.insert,b.ins_h=b.window[q],b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+w-1])&b.hash_mask,b.prev[q&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=q,q++,b.insert--,!(b.lookahead+b.insert<w)););}while(b.lookahead<F&&b.strm.avail_in!==0)}function ue(b,se){for(var Z,j;;){if(b.lookahead<F){if(ce(b),b.lookahead<F&&se===f)return M;if(b.lookahead===0)break}if(Z=0,b.lookahead>=w&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,Z=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),Z!==0&&b.strstart-Z<=b.w_size-F&&(b.match_length=$(b,Z)),b.match_length>=w)if(j=o._tr_tally(b,b.strstart-b.match_start,b.match_length-w),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=w){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,Z=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else j=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(j&&(B(b,!1),b.strm.avail_out===0))return M}return b.insert=b.strstart<w-1?b.strstart:w-1,se===h?(B(b,!0),b.strm.avail_out===0?K:Y):b.last_lit&&(B(b,!1),b.strm.avail_out===0)?M:H}function de(b,se){for(var Z,j,k;;){if(b.lookahead<F){if(ce(b),b.lookahead<F&&se===f)return M;if(b.lookahead===0)break}if(Z=0,b.lookahead>=w&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,Z=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=w-1,Z!==0&&b.prev_length<b.max_lazy_match&&b.strstart-Z<=b.w_size-F&&(b.match_length=$(b,Z),b.match_length<=5&&(b.strategy===1||b.match_length===w&&4096<b.strstart-b.match_start)&&(b.match_length=w-1)),b.prev_length>=w&&b.match_length<=b.prev_length){for(k=b.strstart+b.lookahead-w,j=o._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-w),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=k&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,Z=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=w-1,b.strstart++,j&&(B(b,!1),b.strm.avail_out===0))return M}else if(b.match_available){if((j=o._tr_tally(b,0,b.window[b.strstart-1]))&&B(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return M}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(j=o._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<w-1?b.strstart:w-1,se===h?(B(b,!0),b.strm.avail_out===0?K:Y):b.last_lit&&(B(b,!1),b.strm.avail_out===0)?M:H}function _e(b,se,Z,j,k){this.good_length=b,this.max_lazy=se,this.nice_length=Z,this.max_chain=j,this.func=k}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*A),this.dyn_dtree=new a.Buf16(2*(2*T+1)),this.bl_tree=new a.Buf16(2*(2*C+1)),I(this.dyn_ltree),I(this.dyn_dtree),I(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(N+1),this.heap=new a.Buf16(2*S+1),I(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),I(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Te(b){var se;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=d,(se=b.state).pending=0,se.pending_out=0,se.wrap<0&&(se.wrap=-se.wrap),se.status=se.wrap?L:z,b.adler=se.wrap===2?0:1,se.last_flush=f,o._tr_init(se),p):G(b,v)}function W(b){var se=Te(b);return se===p&&function(Z){Z.window_size=2*Z.w_size,I(Z.head),Z.max_lazy_match=s[Z.level].max_lazy,Z.good_match=s[Z.level].good_length,Z.nice_match=s[Z.level].nice_length,Z.max_chain_length=s[Z.level].max_chain,Z.strstart=0,Z.block_start=0,Z.lookahead=0,Z.insert=0,Z.match_length=Z.prev_length=w-1,Z.match_available=0,Z.ins_h=0}(b.state),se}function Oe(b,se,Z,j,k,q){if(!b)return v;var D=1;if(se===m&&(se=6),j<0?(D=0,j=-j):15<j&&(D=2,j-=16),k<1||x<k||Z!==_||j<8||15<j||se<0||9<se||q<0||g<q)return G(b,v);j===8&&(j=9);var P=new be;return(b.state=P).strm=b,P.wrap=D,P.gzhead=null,P.w_bits=j,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=k+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+w-1)/w),P.window=new a.Buf8(2*P.w_size),P.head=new a.Buf16(P.hash_size),P.prev=new a.Buf16(P.w_size),P.lit_bufsize=1<<k+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new a.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=se,P.strategy=q,P.method=Z,W(b)}s=[new _e(0,0,0,0,function(b,se){var Z=65535;for(Z>b.pending_buf_size-5&&(Z=b.pending_buf_size-5);;){if(b.lookahead<=1){if(ce(b),b.lookahead===0&&se===f)return M;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var j=b.block_start+Z;if((b.strstart===0||b.strstart>=j)&&(b.lookahead=b.strstart-j,b.strstart=j,B(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-F&&(B(b,!1),b.strm.avail_out===0))return M}return b.insert=0,se===h?(B(b,!0),b.strm.avail_out===0?K:Y):(b.strstart>b.block_start&&(B(b,!1),b.strm.avail_out),M)}),new _e(4,4,8,4,ue),new _e(4,5,16,8,ue),new _e(4,6,32,32,ue),new _e(4,4,16,16,de),new _e(8,16,32,32,de),new _e(8,16,128,128,de),new _e(8,32,128,256,de),new _e(32,128,258,1024,de),new _e(32,258,258,4096,de)],r.deflateInit=function(b,se){return Oe(b,se,_,15,8,0)},r.deflateInit2=Oe,r.deflateReset=W,r.deflateResetKeep=Te,r.deflateSetHeader=function(b,se){return b&&b.state?b.state.wrap!==2?v:(b.state.gzhead=se,p):v},r.deflate=function(b,se){var Z,j,k,q;if(!b||!b.state||5<se||se<0)return b?G(b,v):v;if(j=b.state,!b.output||!b.input&&b.avail_in!==0||j.status===666&&se!==h)return G(b,b.avail_out===0?-5:v);if(j.strm=b,Z=j.last_flush,j.last_flush=se,j.status===L)if(j.wrap===2)b.adler=0,ae(j,31),ae(j,139),ae(j,8),j.gzhead?(ae(j,(j.gzhead.text?1:0)+(j.gzhead.hcrc?2:0)+(j.gzhead.extra?4:0)+(j.gzhead.name?8:0)+(j.gzhead.comment?16:0)),ae(j,255&j.gzhead.time),ae(j,j.gzhead.time>>8&255),ae(j,j.gzhead.time>>16&255),ae(j,j.gzhead.time>>24&255),ae(j,j.level===9?2:2<=j.strategy||j.level<2?4:0),ae(j,255&j.gzhead.os),j.gzhead.extra&&j.gzhead.extra.length&&(ae(j,255&j.gzhead.extra.length),ae(j,j.gzhead.extra.length>>8&255)),j.gzhead.hcrc&&(b.adler=c(b.adler,j.pending_buf,j.pending,0)),j.gzindex=0,j.status=69):(ae(j,0),ae(j,0),ae(j,0),ae(j,0),ae(j,0),ae(j,j.level===9?2:2<=j.strategy||j.level<2?4:0),ae(j,3),j.status=z);else{var D=_+(j.w_bits-8<<4)<<8;D|=(2<=j.strategy||j.level<2?0:j.level<6?1:j.level===6?2:3)<<6,j.strstart!==0&&(D|=32),D+=31-D%31,j.status=z,V(j,D),j.strstart!==0&&(V(j,b.adler>>>16),V(j,65535&b.adler)),b.adler=1}if(j.status===69)if(j.gzhead.extra){for(k=j.pending;j.gzindex<(65535&j.gzhead.extra.length)&&(j.pending!==j.pending_buf_size||(j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),R(b),k=j.pending,j.pending!==j.pending_buf_size));)ae(j,255&j.gzhead.extra[j.gzindex]),j.gzindex++;j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),j.gzindex===j.gzhead.extra.length&&(j.gzindex=0,j.status=73)}else j.status=73;if(j.status===73)if(j.gzhead.name){k=j.pending;do{if(j.pending===j.pending_buf_size&&(j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),R(b),k=j.pending,j.pending===j.pending_buf_size)){q=1;break}q=j.gzindex<j.gzhead.name.length?255&j.gzhead.name.charCodeAt(j.gzindex++):0,ae(j,q)}while(q!==0);j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),q===0&&(j.gzindex=0,j.status=91)}else j.status=91;if(j.status===91)if(j.gzhead.comment){k=j.pending;do{if(j.pending===j.pending_buf_size&&(j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),R(b),k=j.pending,j.pending===j.pending_buf_size)){q=1;break}q=j.gzindex<j.gzhead.comment.length?255&j.gzhead.comment.charCodeAt(j.gzindex++):0,ae(j,q)}while(q!==0);j.gzhead.hcrc&&j.pending>k&&(b.adler=c(b.adler,j.pending_buf,j.pending-k,k)),q===0&&(j.status=103)}else j.status=103;if(j.status===103&&(j.gzhead.hcrc?(j.pending+2>j.pending_buf_size&&R(b),j.pending+2<=j.pending_buf_size&&(ae(j,255&b.adler),ae(j,b.adler>>8&255),b.adler=0,j.status=z)):j.status=z),j.pending!==0){if(R(b),b.avail_out===0)return j.last_flush=-1,p}else if(b.avail_in===0&&X(se)<=X(Z)&&se!==h)return G(b,-5);if(j.status===666&&b.avail_in!==0)return G(b,-5);if(b.avail_in!==0||j.lookahead!==0||se!==f&&j.status!==666){var P=j.strategy===2?function(O,J){for(var re;;){if(O.lookahead===0&&(ce(O),O.lookahead===0)){if(J===f)return M;break}if(O.match_length=0,re=o._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++,re&&(B(O,!1),O.strm.avail_out===0))return M}return O.insert=0,J===h?(B(O,!0),O.strm.avail_out===0?K:Y):O.last_lit&&(B(O,!1),O.strm.avail_out===0)?M:H}(j,se):j.strategy===3?function(O,J){for(var re,Q,pe,me,ge=O.window;;){if(O.lookahead<=E){if(ce(O),O.lookahead<=E&&J===f)return M;if(O.lookahead===0)break}if(O.match_length=0,O.lookahead>=w&&0<O.strstart&&(Q=ge[pe=O.strstart-1])===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]){me=O.strstart+E;do;while(Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&pe<me);O.match_length=E-(me-pe),O.match_length>O.lookahead&&(O.match_length=O.lookahead)}if(O.match_length>=w?(re=o._tr_tally(O,1,O.match_length-w),O.lookahead-=O.match_length,O.strstart+=O.match_length,O.match_length=0):(re=o._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++),re&&(B(O,!1),O.strm.avail_out===0))return M}return O.insert=0,J===h?(B(O,!0),O.strm.avail_out===0?K:Y):O.last_lit&&(B(O,!1),O.strm.avail_out===0)?M:H}(j,se):s[j.level].func(j,se);if(P!==K&&P!==Y||(j.status=666),P===M||P===K)return b.avail_out===0&&(j.last_flush=-1),p;if(P===H&&(se===1?o._tr_align(j):se!==5&&(o._tr_stored_block(j,0,0,!1),se===3&&(I(j.head),j.lookahead===0&&(j.strstart=0,j.block_start=0,j.insert=0))),R(b),b.avail_out===0))return j.last_flush=-1,p}return se!==h?p:j.wrap<=0?1:(j.wrap===2?(ae(j,255&b.adler),ae(j,b.adler>>8&255),ae(j,b.adler>>16&255),ae(j,b.adler>>24&255),ae(j,255&b.total_in),ae(j,b.total_in>>8&255),ae(j,b.total_in>>16&255),ae(j,b.total_in>>24&255)):(V(j,b.adler>>>16),V(j,65535&b.adler)),R(b),0<j.wrap&&(j.wrap=-j.wrap),j.pending!==0?p:1)},r.deflateEnd=function(b){var se;return b&&b.state?(se=b.state.status)!==L&&se!==69&&se!==73&&se!==91&&se!==103&&se!==z&&se!==666?G(b,v):(b.state=null,se===z?G(b,-3):p):v},r.deflateSetDictionary=function(b,se){var Z,j,k,q,D,P,O,J,re=se.length;if(!b||!b.state||(q=(Z=b.state).wrap)===2||q===1&&Z.status!==L||Z.lookahead)return v;for(q===1&&(b.adler=l(b.adler,se,re,0)),Z.wrap=0,re>=Z.w_size&&(q===0&&(I(Z.head),Z.strstart=0,Z.block_start=0,Z.insert=0),J=new a.Buf8(Z.w_size),a.arraySet(J,se,re-Z.w_size,Z.w_size,0),se=J,re=Z.w_size),D=b.avail_in,P=b.next_in,O=b.input,b.avail_in=re,b.next_in=0,b.input=se,ce(Z);Z.lookahead>=w;){for(j=Z.strstart,k=Z.lookahead-(w-1);Z.ins_h=(Z.ins_h<<Z.hash_shift^Z.window[j+w-1])&Z.hash_mask,Z.prev[j&Z.w_mask]=Z.head[Z.ins_h],Z.head[Z.ins_h]=j,j++,--k;);Z.strstart=j,Z.lookahead=w-1,ce(Z)}return Z.strstart+=Z.lookahead,Z.block_start=Z.strstart,Z.insert=Z.lookahead,Z.lookahead=0,Z.match_length=Z.prev_length=w-1,Z.match_available=0,b.next_in=P,b.input=O,b.avail_in=D,Z.wrap=q,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(s,a){var o,l,c,u,f,h,p,v,m,g,d,_,x,S,T,C,A,N,w,E,F,L,z,M,H;o=s.state,l=s.next_in,M=s.input,c=l+(s.avail_in-5),u=s.next_out,H=s.output,f=u-(a-s.avail_out),h=u+(s.avail_out-257),p=o.dmax,v=o.wsize,m=o.whave,g=o.wnext,d=o.window,_=o.hold,x=o.bits,S=o.lencode,T=o.distcode,C=(1<<o.lenbits)-1,A=(1<<o.distbits)-1;e:do{x<15&&(_+=M[l++]<<x,x+=8,_+=M[l++]<<x,x+=8),N=S[_&C];t:for(;;){if(_>>>=w=N>>>24,x-=w,(w=N>>>16&255)===0)H[u++]=65535&N;else{if(!(16&w)){if(!(64&w)){N=S[(65535&N)+(_&(1<<w)-1)];continue t}if(32&w){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}E=65535&N,(w&=15)&&(x<w&&(_+=M[l++]<<x,x+=8),E+=_&(1<<w)-1,_>>>=w,x-=w),x<15&&(_+=M[l++]<<x,x+=8,_+=M[l++]<<x,x+=8),N=T[_&A];n:for(;;){if(_>>>=w=N>>>24,x-=w,!(16&(w=N>>>16&255))){if(!(64&w)){N=T[(65535&N)+(_&(1<<w)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(F=65535&N,x<(w&=15)&&(_+=M[l++]<<x,(x+=8)<w&&(_+=M[l++]<<x,x+=8)),p<(F+=_&(1<<w)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(_>>>=w,x-=w,(w=u-f)<F){if(m<(w=F-w)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(z=d,(L=0)===g){if(L+=v-w,w<E){for(E-=w;H[u++]=d[L++],--w;);L=u-F,z=H}}else if(g<w){if(L+=v+g-w,(w-=g)<E){for(E-=w;H[u++]=d[L++],--w;);if(L=0,g<E){for(E-=w=g;H[u++]=d[L++],--w;);L=u-F,z=H}}}else if(L+=g-w,w<E){for(E-=w;H[u++]=d[L++],--w;);L=u-F,z=H}for(;2<E;)H[u++]=z[L++],H[u++]=z[L++],H[u++]=z[L++],E-=3;E&&(H[u++]=z[L++],1<E&&(H[u++]=z[L++]))}else{for(L=u-F;H[u++]=H[L++],H[u++]=H[L++],H[u++]=H[L++],2<(E-=3););E&&(H[u++]=H[L++],1<E&&(H[u++]=H[L++]))}break}}break}}while(l<c&&u<h);l-=E=x>>3,_&=(1<<(x-=E<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<h?h-u+257:257-(u-h),o.hold=_,o.bits=x}},{}],49:[function(t,i,r){var s=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),u=1,f=2,h=0,p=-2,v=1,m=852,g=592;function d(L){return(L>>>24&255)+(L>>>8&65280)+((65280&L)<<8)+((255&L)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(L){var z;return L&&L.state?(z=L.state,L.total_in=L.total_out=z.total=0,L.msg="",z.wrap&&(L.adler=1&z.wrap),z.mode=v,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(m),z.distcode=z.distdyn=new s.Buf32(g),z.sane=1,z.back=-1,h):p}function S(L){var z;return L&&L.state?((z=L.state).wsize=0,z.whave=0,z.wnext=0,x(L)):p}function T(L,z){var M,H;return L&&L.state?(H=L.state,z<0?(M=0,z=-z):(M=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?p:(H.window!==null&&H.wbits!==z&&(H.window=null),H.wrap=M,H.wbits=z,S(L))):p}function C(L,z){var M,H;return L?(H=new _,(L.state=H).window=null,(M=T(L,z))!==h&&(L.state=null),M):p}var A,N,w=!0;function E(L){if(w){var z;for(A=new s.Buf32(512),N=new s.Buf32(32),z=0;z<144;)L.lens[z++]=8;for(;z<256;)L.lens[z++]=9;for(;z<280;)L.lens[z++]=7;for(;z<288;)L.lens[z++]=8;for(c(u,L.lens,0,288,A,0,L.work,{bits:9}),z=0;z<32;)L.lens[z++]=5;c(f,L.lens,0,32,N,0,L.work,{bits:5}),w=!1}L.lencode=A,L.lenbits=9,L.distcode=N,L.distbits=5}function F(L,z,M,H){var K,Y=L.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new s.Buf8(Y.wsize)),H>=Y.wsize?(s.arraySet(Y.window,z,M-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(H<(K=Y.wsize-Y.wnext)&&(K=H),s.arraySet(Y.window,z,M-H,K,Y.wnext),(H-=K)?(s.arraySet(Y.window,z,M-H,H,0),Y.wnext=H,Y.whave=Y.wsize):(Y.wnext+=K,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=K))),0}r.inflateReset=S,r.inflateReset2=T,r.inflateResetKeep=x,r.inflateInit=function(L){return C(L,15)},r.inflateInit2=C,r.inflate=function(L,z){var M,H,K,Y,G,X,I,R,B,ae,V,$,ce,ue,de,_e,be,Te,W,Oe,b,se,Z,j,k=0,q=new s.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!L||!L.state||!L.output||!L.input&&L.avail_in!==0)return p;(M=L.state).mode===12&&(M.mode=13),G=L.next_out,K=L.output,I=L.avail_out,Y=L.next_in,H=L.input,X=L.avail_in,R=M.hold,B=M.bits,ae=X,V=I,se=h;e:for(;;)switch(M.mode){case v:if(M.wrap===0){M.mode=13;break}for(;B<16;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(2&M.wrap&&R===35615){q[M.check=0]=255&R,q[1]=R>>>8&255,M.check=o(M.check,q,2,0),B=R=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&R)<<8)+(R>>8))%31){L.msg="incorrect header check",M.mode=30;break}if((15&R)!=8){L.msg="unknown compression method",M.mode=30;break}if(B-=4,b=8+(15&(R>>>=4)),M.wbits===0)M.wbits=b;else if(b>M.wbits){L.msg="invalid window size",M.mode=30;break}M.dmax=1<<b,L.adler=M.check=1,M.mode=512&R?10:12,B=R=0;break;case 2:for(;B<16;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(M.flags=R,(255&M.flags)!=8){L.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){L.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=R>>8&1),512&M.flags&&(q[0]=255&R,q[1]=R>>>8&255,M.check=o(M.check,q,2,0)),B=R=0,M.mode=3;case 3:for(;B<32;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.head&&(M.head.time=R),512&M.flags&&(q[0]=255&R,q[1]=R>>>8&255,q[2]=R>>>16&255,q[3]=R>>>24&255,M.check=o(M.check,q,4,0)),B=R=0,M.mode=4;case 4:for(;B<16;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.head&&(M.head.xflags=255&R,M.head.os=R>>8),512&M.flags&&(q[0]=255&R,q[1]=R>>>8&255,M.check=o(M.check,q,2,0)),B=R=0,M.mode=5;case 5:if(1024&M.flags){for(;B<16;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.length=R,M.head&&(M.head.extra_len=R),512&M.flags&&(q[0]=255&R,q[1]=R>>>8&255,M.check=o(M.check,q,2,0)),B=R=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(X<($=M.length)&&($=X),$&&(M.head&&(b=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,H,Y,$,b)),512&M.flags&&(M.check=o(M.check,H,$,Y)),X-=$,Y+=$,M.length-=$),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(X===0)break e;for($=0;b=H[Y+$++],M.head&&b&&M.length<65536&&(M.head.name+=String.fromCharCode(b)),b&&$<X;);if(512&M.flags&&(M.check=o(M.check,H,$,Y)),X-=$,Y+=$,b)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(X===0)break e;for($=0;b=H[Y+$++],M.head&&b&&M.length<65536&&(M.head.comment+=String.fromCharCode(b)),b&&$<X;);if(512&M.flags&&(M.check=o(M.check,H,$,Y)),X-=$,Y+=$,b)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;B<16;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(R!==(65535&M.check)){L.msg="header crc mismatch",M.mode=30;break}B=R=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),L.adler=M.check=0,M.mode=12;break;case 10:for(;B<32;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}L.adler=M.check=d(R),B=R=0,M.mode=11;case 11:if(M.havedict===0)return L.next_out=G,L.avail_out=I,L.next_in=Y,L.avail_in=X,M.hold=R,M.bits=B,2;L.adler=M.check=1,M.mode=12;case 12:if(z===5||z===6)break e;case 13:if(M.last){R>>>=7&B,B-=7&B,M.mode=27;break}for(;B<3;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}switch(M.last=1&R,B-=1,3&(R>>>=1)){case 0:M.mode=14;break;case 1:if(E(M),M.mode=20,z!==6)break;R>>>=2,B-=2;break e;case 2:M.mode=17;break;case 3:L.msg="invalid block type",M.mode=30}R>>>=2,B-=2;break;case 14:for(R>>>=7&B,B-=7&B;B<32;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if((65535&R)!=(R>>>16^65535)){L.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&R,B=R=0,M.mode=15,z===6)break e;case 15:M.mode=16;case 16:if($=M.length){if(X<$&&($=X),I<$&&($=I),$===0)break e;s.arraySet(K,H,Y,$,G),X-=$,Y+=$,I-=$,G+=$,M.length-=$;break}M.mode=12;break;case 17:for(;B<14;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(M.nlen=257+(31&R),R>>>=5,B-=5,M.ndist=1+(31&R),R>>>=5,B-=5,M.ncode=4+(15&R),R>>>=4,B-=4,286<M.nlen||30<M.ndist){L.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;B<3;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.lens[D[M.have++]]=7&R,R>>>=3,B-=3}for(;M.have<19;)M.lens[D[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,Z={bits:M.lenbits},se=c(0,M.lens,0,19,M.lencode,0,M.work,Z),M.lenbits=Z.bits,se){L.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;_e=(k=M.lencode[R&(1<<M.lenbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=B);){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(be<16)R>>>=de,B-=de,M.lens[M.have++]=be;else{if(be===16){for(j=de+2;B<j;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(R>>>=de,B-=de,M.have===0){L.msg="invalid bit length repeat",M.mode=30;break}b=M.lens[M.have-1],$=3+(3&R),R>>>=2,B-=2}else if(be===17){for(j=de+3;B<j;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}B-=de,b=0,$=3+(7&(R>>>=de)),R>>>=3,B-=3}else{for(j=de+7;B<j;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}B-=de,b=0,$=11+(127&(R>>>=de)),R>>>=7,B-=7}if(M.have+$>M.nlen+M.ndist){L.msg="invalid bit length repeat",M.mode=30;break}for(;$--;)M.lens[M.have++]=b}}if(M.mode===30)break;if(M.lens[256]===0){L.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,Z={bits:M.lenbits},se=c(u,M.lens,0,M.nlen,M.lencode,0,M.work,Z),M.lenbits=Z.bits,se){L.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,Z={bits:M.distbits},se=c(f,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,Z),M.distbits=Z.bits,se){L.msg="invalid distances set",M.mode=30;break}if(M.mode=20,z===6)break e;case 20:M.mode=21;case 21:if(6<=X&&258<=I){L.next_out=G,L.avail_out=I,L.next_in=Y,L.avail_in=X,M.hold=R,M.bits=B,l(L,V),G=L.next_out,K=L.output,I=L.avail_out,Y=L.next_in,H=L.input,X=L.avail_in,R=M.hold,B=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;_e=(k=M.lencode[R&(1<<M.lenbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=B);){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(_e&&!(240&_e)){for(Te=de,W=_e,Oe=be;_e=(k=M.lencode[Oe+((R&(1<<Te+W)-1)>>Te)])>>>16&255,be=65535&k,!(Te+(de=k>>>24)<=B);){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}R>>>=Te,B-=Te,M.back+=Te}if(R>>>=de,B-=de,M.back+=de,M.length=be,_e===0){M.mode=26;break}if(32&_e){M.back=-1,M.mode=12;break}if(64&_e){L.msg="invalid literal/length code",M.mode=30;break}M.extra=15&_e,M.mode=22;case 22:if(M.extra){for(j=M.extra;B<j;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.length+=R&(1<<M.extra)-1,R>>>=M.extra,B-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;_e=(k=M.distcode[R&(1<<M.distbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=B);){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(!(240&_e)){for(Te=de,W=_e,Oe=be;_e=(k=M.distcode[Oe+((R&(1<<Te+W)-1)>>Te)])>>>16&255,be=65535&k,!(Te+(de=k>>>24)<=B);){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}R>>>=Te,B-=Te,M.back+=Te}if(R>>>=de,B-=de,M.back+=de,64&_e){L.msg="invalid distance code",M.mode=30;break}M.offset=be,M.extra=15&_e,M.mode=24;case 24:if(M.extra){for(j=M.extra;B<j;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}M.offset+=R&(1<<M.extra)-1,R>>>=M.extra,B-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){L.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(I===0)break e;if($=V-I,M.offset>$){if(($=M.offset-$)>M.whave&&M.sane){L.msg="invalid distance too far back",M.mode=30;break}ce=$>M.wnext?($-=M.wnext,M.wsize-$):M.wnext-$,$>M.length&&($=M.length),ue=M.window}else ue=K,ce=G-M.offset,$=M.length;for(I<$&&($=I),I-=$,M.length-=$;K[G++]=ue[ce++],--$;);M.length===0&&(M.mode=21);break;case 26:if(I===0)break e;K[G++]=M.length,I--,M.mode=21;break;case 27:if(M.wrap){for(;B<32;){if(X===0)break e;X--,R|=H[Y++]<<B,B+=8}if(V-=I,L.total_out+=V,M.total+=V,V&&(L.adler=M.check=M.flags?o(M.check,K,V,G-V):a(M.check,K,V,G-V)),V=I,(M.flags?R:d(R))!==M.check){L.msg="incorrect data check",M.mode=30;break}B=R=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;B<32;){if(X===0)break e;X--,R+=H[Y++]<<B,B+=8}if(R!==(4294967295&M.total)){L.msg="incorrect length check",M.mode=30;break}B=R=0}M.mode=29;case 29:se=1;break e;case 30:se=-3;break e;case 31:return-4;case 32:default:return p}return L.next_out=G,L.avail_out=I,L.next_in=Y,L.avail_in=X,M.hold=R,M.bits=B,(M.wsize||V!==L.avail_out&&M.mode<30&&(M.mode<27||z!==4))&&F(L,L.output,L.next_out,V-L.avail_out)?(M.mode=31,-4):(ae-=L.avail_in,V-=L.avail_out,L.total_in+=ae,L.total_out+=V,M.total+=V,M.wrap&&V&&(L.adler=M.check=M.flags?o(M.check,K,V,L.next_out-V):a(M.check,K,V,L.next_out-V)),L.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(ae==0&&V===0||z===4)&&se===h&&(se=-5),se)},r.inflateEnd=function(L){if(!L||!L.state)return p;var z=L.state;return z.window&&(z.window=null),L.state=null,h},r.inflateGetHeader=function(L,z){var M;return L&&L.state&&2&(M=L.state).wrap?((M.head=z).done=!1,h):p},r.inflateSetDictionary=function(L,z){var M,H=z.length;return L&&L.state?(M=L.state).wrap!==0&&M.mode!==11?p:M.mode===11&&a(1,z,H,0)!==M.check?-3:F(L,z,H,H)?(M.mode=31,-4):(M.havedict=1,h):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var s=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(u,f,h,p,v,m,g,d){var _,x,S,T,C,A,N,w,E,F=d.bits,L=0,z=0,M=0,H=0,K=0,Y=0,G=0,X=0,I=0,R=0,B=null,ae=0,V=new s.Buf16(16),$=new s.Buf16(16),ce=null,ue=0;for(L=0;L<=15;L++)V[L]=0;for(z=0;z<p;z++)V[f[h+z]]++;for(K=F,H=15;1<=H&&V[H]===0;H--);if(H<K&&(K=H),H===0)return v[m++]=20971520,v[m++]=20971520,d.bits=1,0;for(M=1;M<H&&V[M]===0;M++);for(K<M&&(K=M),L=X=1;L<=15;L++)if(X<<=1,(X-=V[L])<0)return-1;if(0<X&&(u===0||H!==1))return-1;for($[1]=0,L=1;L<15;L++)$[L+1]=$[L]+V[L];for(z=0;z<p;z++)f[h+z]!==0&&(g[$[f[h+z]]++]=z);if(A=u===0?(B=ce=g,19):u===1?(B=a,ae-=257,ce=o,ue-=257,256):(B=l,ce=c,-1),L=M,C=m,G=z=R=0,S=-1,T=(I=1<<(Y=K))-1,u===1&&852<I||u===2&&592<I)return 1;for(;;){for(N=L-G,E=g[z]<A?(w=0,g[z]):g[z]>A?(w=ce[ue+g[z]],B[ae+g[z]]):(w=96,0),_=1<<L-G,M=x=1<<Y;v[C+(R>>G)+(x-=_)]=N<<24|w<<16|E|0,x!==0;);for(_=1<<L-1;R&_;)_>>=1;if(_!==0?(R&=_-1,R+=_):R=0,z++,--V[L]==0){if(L===H)break;L=f[h+g[z]]}if(K<L&&(R&T)!==S){for(G===0&&(G=K),C+=M,X=1<<(Y=L-G);Y+G<H&&!((X-=V[Y+G])<=0);)Y++,X<<=1;if(I+=1<<Y,u===1&&852<I||u===2&&592<I)return 1;v[S=R&T]=K<<24|Y<<16|C-m|0}}return R!==0&&(v[C+R]=L-G<<24|64<<16|0),d.bits=K,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var s=t("../utils/common"),a=0,o=1;function l(k){for(var q=k.length;0<=--q;)k[q]=0}var c=0,u=29,f=256,h=f+1+u,p=30,v=19,m=2*h+1,g=15,d=16,_=7,x=256,S=16,T=17,C=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(h+2));l(F);var L=new Array(2*p);l(L);var z=new Array(512);l(z);var M=new Array(256);l(M);var H=new Array(u);l(H);var K,Y,G,X=new Array(p);function I(k,q,D,P,O){this.static_tree=k,this.extra_bits=q,this.extra_base=D,this.elems=P,this.max_length=O,this.has_stree=k&&k.length}function R(k,q){this.dyn_tree=k,this.max_code=0,this.stat_desc=q}function B(k){return k<256?z[k]:z[256+(k>>>7)]}function ae(k,q){k.pending_buf[k.pending++]=255&q,k.pending_buf[k.pending++]=q>>>8&255}function V(k,q,D){k.bi_valid>d-D?(k.bi_buf|=q<<k.bi_valid&65535,ae(k,k.bi_buf),k.bi_buf=q>>d-k.bi_valid,k.bi_valid+=D-d):(k.bi_buf|=q<<k.bi_valid&65535,k.bi_valid+=D)}function $(k,q,D){V(k,D[2*q],D[2*q+1])}function ce(k,q){for(var D=0;D|=1&k,k>>>=1,D<<=1,0<--q;);return D>>>1}function ue(k,q,D){var P,O,J=new Array(g+1),re=0;for(P=1;P<=g;P++)J[P]=re=re+D[P-1]<<1;for(O=0;O<=q;O++){var Q=k[2*O+1];Q!==0&&(k[2*O]=ce(J[Q]++,Q))}}function de(k){var q;for(q=0;q<h;q++)k.dyn_ltree[2*q]=0;for(q=0;q<p;q++)k.dyn_dtree[2*q]=0;for(q=0;q<v;q++)k.bl_tree[2*q]=0;k.dyn_ltree[2*x]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function _e(k){8<k.bi_valid?ae(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function be(k,q,D,P){var O=2*q,J=2*D;return k[O]<k[J]||k[O]===k[J]&&P[q]<=P[D]}function Te(k,q,D){for(var P=k.heap[D],O=D<<1;O<=k.heap_len&&(O<k.heap_len&&be(q,k.heap[O+1],k.heap[O],k.depth)&&O++,!be(q,P,k.heap[O],k.depth));)k.heap[D]=k.heap[O],D=O,O<<=1;k.heap[D]=P}function W(k,q,D){var P,O,J,re,Q=0;if(k.last_lit!==0)for(;P=k.pending_buf[k.d_buf+2*Q]<<8|k.pending_buf[k.d_buf+2*Q+1],O=k.pending_buf[k.l_buf+Q],Q++,P===0?$(k,O,q):($(k,(J=M[O])+f+1,q),(re=A[J])!==0&&V(k,O-=H[J],re),$(k,J=B(--P),D),(re=N[J])!==0&&V(k,P-=X[J],re)),Q<k.last_lit;);$(k,x,q)}function Oe(k,q){var D,P,O,J=q.dyn_tree,re=q.stat_desc.static_tree,Q=q.stat_desc.has_stree,pe=q.stat_desc.elems,me=-1;for(k.heap_len=0,k.heap_max=m,D=0;D<pe;D++)J[2*D]!==0?(k.heap[++k.heap_len]=me=D,k.depth[D]=0):J[2*D+1]=0;for(;k.heap_len<2;)J[2*(O=k.heap[++k.heap_len]=me<2?++me:0)]=1,k.depth[O]=0,k.opt_len--,Q&&(k.static_len-=re[2*O+1]);for(q.max_code=me,D=k.heap_len>>1;1<=D;D--)Te(k,J,D);for(O=pe;D=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Te(k,J,1),P=k.heap[1],k.heap[--k.heap_max]=D,k.heap[--k.heap_max]=P,J[2*O]=J[2*D]+J[2*P],k.depth[O]=(k.depth[D]>=k.depth[P]?k.depth[D]:k.depth[P])+1,J[2*D+1]=J[2*P+1]=O,k.heap[1]=O++,Te(k,J,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],function(ge,De){var ve,Me,He,Ae,Re,Be,ze=De.dyn_tree,lt=De.max_code,ee=De.stat_desc.static_tree,ye=De.stat_desc.has_stree,fe=De.stat_desc.extra_bits,he=De.stat_desc.extra_base,Se=De.stat_desc.max_length,Ue=0;for(Ae=0;Ae<=g;Ae++)ge.bl_count[Ae]=0;for(ze[2*ge.heap[ge.heap_max]+1]=0,ve=ge.heap_max+1;ve<m;ve++)Se<(Ae=ze[2*ze[2*(Me=ge.heap[ve])+1]+1]+1)&&(Ae=Se,Ue++),ze[2*Me+1]=Ae,lt<Me||(ge.bl_count[Ae]++,Re=0,he<=Me&&(Re=fe[Me-he]),Be=ze[2*Me],ge.opt_len+=Be*(Ae+Re),ye&&(ge.static_len+=Be*(ee[2*Me+1]+Re)));if(Ue!==0){do{for(Ae=Se-1;ge.bl_count[Ae]===0;)Ae--;ge.bl_count[Ae]--,ge.bl_count[Ae+1]+=2,ge.bl_count[Se]--,Ue-=2}while(0<Ue);for(Ae=Se;Ae!==0;Ae--)for(Me=ge.bl_count[Ae];Me!==0;)lt<(He=ge.heap[--ve])||(ze[2*He+1]!==Ae&&(ge.opt_len+=(Ae-ze[2*He+1])*ze[2*He],ze[2*He+1]=Ae),Me--)}}(k,q),ue(J,me,k.bl_count)}function b(k,q,D){var P,O,J=-1,re=q[1],Q=0,pe=7,me=4;for(re===0&&(pe=138,me=3),q[2*(D+1)+1]=65535,P=0;P<=D;P++)O=re,re=q[2*(P+1)+1],++Q<pe&&O===re||(Q<me?k.bl_tree[2*O]+=Q:O!==0?(O!==J&&k.bl_tree[2*O]++,k.bl_tree[2*S]++):Q<=10?k.bl_tree[2*T]++:k.bl_tree[2*C]++,J=O,me=(Q=0)===re?(pe=138,3):O===re?(pe=6,3):(pe=7,4))}function se(k,q,D){var P,O,J=-1,re=q[1],Q=0,pe=7,me=4;for(re===0&&(pe=138,me=3),P=0;P<=D;P++)if(O=re,re=q[2*(P+1)+1],!(++Q<pe&&O===re)){if(Q<me)for(;$(k,O,k.bl_tree),--Q!=0;);else O!==0?(O!==J&&($(k,O,k.bl_tree),Q--),$(k,S,k.bl_tree),V(k,Q-3,2)):Q<=10?($(k,T,k.bl_tree),V(k,Q-3,3)):($(k,C,k.bl_tree),V(k,Q-11,7));J=O,me=(Q=0)===re?(pe=138,3):O===re?(pe=6,3):(pe=7,4)}}l(X);var Z=!1;function j(k,q,D,P){V(k,(c<<1)+(P?1:0),3),function(O,J,re,Q){_e(O),ae(O,re),ae(O,~re),s.arraySet(O.pending_buf,O.window,J,re,O.pending),O.pending+=re}(k,q,D)}r._tr_init=function(k){Z||(function(){var q,D,P,O,J,re=new Array(g+1);for(O=P=0;O<u-1;O++)for(H[O]=P,q=0;q<1<<A[O];q++)M[P++]=O;for(M[P-1]=O,O=J=0;O<16;O++)for(X[O]=J,q=0;q<1<<N[O];q++)z[J++]=O;for(J>>=7;O<p;O++)for(X[O]=J<<7,q=0;q<1<<N[O]-7;q++)z[256+J++]=O;for(D=0;D<=g;D++)re[D]=0;for(q=0;q<=143;)F[2*q+1]=8,q++,re[8]++;for(;q<=255;)F[2*q+1]=9,q++,re[9]++;for(;q<=279;)F[2*q+1]=7,q++,re[7]++;for(;q<=287;)F[2*q+1]=8,q++,re[8]++;for(ue(F,h+1,re),q=0;q<p;q++)L[2*q+1]=5,L[2*q]=ce(q,5);K=new I(F,A,f+1,h,g),Y=new I(L,N,0,p,g),G=new I(new Array(0),w,0,v,_)}(),Z=!0),k.l_desc=new R(k.dyn_ltree,K),k.d_desc=new R(k.dyn_dtree,Y),k.bl_desc=new R(k.bl_tree,G),k.bi_buf=0,k.bi_valid=0,de(k)},r._tr_stored_block=j,r._tr_flush_block=function(k,q,D,P){var O,J,re=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=function(Q){var pe,me=4093624447;for(pe=0;pe<=31;pe++,me>>>=1)if(1&me&&Q.dyn_ltree[2*pe]!==0)return a;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return o;for(pe=32;pe<f;pe++)if(Q.dyn_ltree[2*pe]!==0)return o;return a}(k)),Oe(k,k.l_desc),Oe(k,k.d_desc),re=function(Q){var pe;for(b(Q,Q.dyn_ltree,Q.l_desc.max_code),b(Q,Q.dyn_dtree,Q.d_desc.max_code),Oe(Q,Q.bl_desc),pe=v-1;3<=pe&&Q.bl_tree[2*E[pe]+1]===0;pe--);return Q.opt_len+=3*(pe+1)+5+5+4,pe}(k),O=k.opt_len+3+7>>>3,(J=k.static_len+3+7>>>3)<=O&&(O=J)):O=J=D+5,D+4<=O&&q!==-1?j(k,q,D,P):k.strategy===4||J===O?(V(k,2+(P?1:0),3),W(k,F,L)):(V(k,4+(P?1:0),3),function(Q,pe,me,ge){var De;for(V(Q,pe-257,5),V(Q,me-1,5),V(Q,ge-4,4),De=0;De<ge;De++)V(Q,Q.bl_tree[2*E[De]+1],3);se(Q,Q.dyn_ltree,pe-1),se(Q,Q.dyn_dtree,me-1)}(k,k.l_desc.max_code+1,k.d_desc.max_code+1,re+1),W(k,k.dyn_ltree,k.dyn_dtree)),de(k),P&&_e(k)},r._tr_tally=function(k,q,D){return k.pending_buf[k.d_buf+2*k.last_lit]=q>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&q,k.pending_buf[k.l_buf+k.last_lit]=255&D,k.last_lit++,q===0?k.dyn_ltree[2*D]++:(k.matches++,q--,k.dyn_ltree[2*(M[D]+f+1)]++,k.dyn_dtree[2*B(q)]++),k.last_lit===k.lit_bufsize-1},r._tr_align=function(k){V(k,2,3),$(k,x,F),function(q){q.bi_valid===16?(ae(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)}(k)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,u,f,h=1,p={},v=!1,m=a.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(a);g=g&&g.setTimeout?g:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){_(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,T=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=T,S}}()?(f="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",x,!1):a.attachEvent("onmessage",x),function(S){a.postMessage(f+S,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(S){_(S.data)},function(S){u.port2.postMessage(S)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(S){var T=m.createElement("script");T.onreadystatechange=function(){_(S),T.onreadystatechange=null,c.removeChild(T),T=null},c.appendChild(T)}):function(S){setTimeout(_,0,S)},g.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var T=new Array(arguments.length-1),C=0;C<T.length;C++)T[C]=arguments[C+1];var A={callback:S,args:T};return p[h]=A,l(h),h++},g.clearImmediate=d}function d(S){delete p[S]}function _(S){if(v)setTimeout(_,0,S);else{var T=p[S];if(T){v=!0;try{(function(C){var A=C.callback,N=C.args;switch(N.length){case 0:A();break;case 1:A(N[0]);break;case 2:A(N[0],N[1]);break;case 3:A(N[0],N[1],N[2]);break;default:A.apply(o,N)}})(T)}finally{d(S),v=!1}}}}function x(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(f)===0&&_(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(s1);var BR=s1.exports;const n_=r_(BR);var vm={};(function n(e,t,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),R=I.getContext("2d");R.fillRect(0,0,1,1);var B=I.transferToImageBitmap();R.createPattern(B,"no-repeat")}catch{return!1}return!0}();function l(){}function c(I){var R=t.exports.Promise,B=R!==void 0?R:e.Promise;return typeof B=="function"?new B(I):(I(l,l),null)}var u=function(I,R){return{transform:function(B){if(I)return B;if(R.has(B))return R.get(B);var ae=new OffscreenCanvas(B.width,B.height),V=ae.getContext("2d");return V.drawImage(B,0,0),R.set(B,ae),ae},clear:function(){R.clear()}}}(o,new Map),f=function(){var I=Math.floor(16.666666666666668),R,B,ae={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function($){var ce=Math.random();return ae[ce]=requestAnimationFrame(function ue(de){V===de||V+I-1<de?(V=de,delete ae[ce],$()):ae[ce]=requestAnimationFrame(ue)}),ce},B=function($){ae[$]&&cancelAnimationFrame(ae[$])}):(R=function($){return setTimeout($,I)},B=function($){return clearTimeout($)}),{frame:R,cancel:B}}(),h=function(){var I,R,B={};function ae(V){function $(ce,ue){V.postMessage({options:ce||{},callback:ue})}V.init=function(ue){var de=ue.transferControlToOffscreen();V.postMessage({canvas:de},[de])},V.fire=function(ue,de,_e){if(R)return $(ue,null),R;var be=Math.random().toString(36).slice(2);return R=c(function(Te){function W(Oe){Oe.data.callback===be&&(delete B[be],V.removeEventListener("message",W),R=null,u.clear(),_e(),Te())}V.addEventListener("message",W),$(ue,be),B[be]=W.bind(null,{data:{callback:be}})}),R},V.reset=function(){V.postMessage({reset:!0});for(var ue in B)B[ue](),delete B[ue]}}return function(){if(I)return I;if(!i&&s){var V=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([V])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}ae(I)}return I}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(I,R){return R?R(I):I}function m(I){return I!=null}function g(I,R,B){return v(I&&m(I[R])?I[R]:p[R],B)}function d(I){return I<0?0:Math.floor(I)}function _(I,R){return Math.floor(Math.random()*(R-I))+I}function x(I){return parseInt(I,16)}function S(I){return I.map(T)}function T(I){var R=String(I).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:x(R.substring(0,2)),g:x(R.substring(2,4)),b:x(R.substring(4,6))}}function C(I){var R=g(I,"origin",Object);return R.x=g(R,"x",Number),R.y=g(R,"y",Number),R}function A(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function N(I){var R=I.getBoundingClientRect();I.width=R.width,I.height=R.height}function w(I){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=I,R}function E(I,R,B,ae,V,$,ce,ue,de){I.save(),I.translate(R,B),I.rotate($),I.scale(ae,V),I.arc(0,0,1,ce,ue,de),I.restore()}function F(I){var R=I.angle*(Math.PI/180),B=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-R+(.5*B-Math.random()*B),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function L(I,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var B=R.tick++/R.totalTicks,ae=R.x+R.random*R.tiltCos,V=R.y+R.random*R.tiltSin,$=R.wobbleX+R.random*R.tiltCos,ce=R.wobbleY+R.random*R.tiltSin;if(I.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-B)+")",I.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))I.fill(Y(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs($-ae)*.1,Math.abs(ce-V)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var ue=Math.PI/10*R.wobble,de=Math.abs($-ae)*.1,_e=Math.abs(ce-V)*.1,be=R.shape.bitmap.width*R.scalar,Te=R.shape.bitmap.height*R.scalar,W=new DOMMatrix([Math.cos(ue)*de,Math.sin(ue)*de,-Math.sin(ue)*_e,Math.cos(ue)*_e,R.x,R.y]);W.multiplySelf(new DOMMatrix(R.shape.matrix));var Oe=I.createPattern(u.transform(R.shape.bitmap),"no-repeat");Oe.setTransform(W),I.globalAlpha=1-B,I.fillStyle=Oe,I.fillRect(R.x-be/2,R.y-Te/2,be,Te),I.globalAlpha=1}else if(R.shape==="circle")I.ellipse?I.ellipse(R.x,R.y,Math.abs($-ae)*R.ovalScalar,Math.abs(ce-V)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):E(I,R.x,R.y,Math.abs($-ae)*R.ovalScalar,Math.abs(ce-V)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var b=Math.PI/2*3,se=4*R.scalar,Z=8*R.scalar,j=R.x,k=R.y,q=5,D=Math.PI/q;q--;)j=R.x+Math.cos(b)*Z,k=R.y+Math.sin(b)*Z,I.lineTo(j,k),b+=D,j=R.x+Math.cos(b)*se,k=R.y+Math.sin(b)*se,I.lineTo(j,k),b+=D;else I.moveTo(Math.floor(R.x),Math.floor(R.y)),I.lineTo(Math.floor(R.wobbleX),Math.floor(V)),I.lineTo(Math.floor($),Math.floor(ce)),I.lineTo(Math.floor(ae),Math.floor(R.wobbleY));return I.closePath(),I.fill(),R.tick<R.totalTicks}function z(I,R,B,ae,V){var $=R.slice(),ce=I.getContext("2d"),ue,de,_e=c(function(be){function Te(){ue=de=null,ce.clearRect(0,0,ae.width,ae.height),u.clear(),V(),be()}function W(){i&&!(ae.width===r.width&&ae.height===r.height)&&(ae.width=I.width=r.width,ae.height=I.height=r.height),!ae.width&&!ae.height&&(B(I),ae.width=I.width,ae.height=I.height),ce.clearRect(0,0,ae.width,ae.height),$=$.filter(function(Oe){return L(ce,Oe)}),$.length?ue=f.frame(W):Te()}ue=f.frame(W),de=Te});return{addFettis:function(be){return $=$.concat(be),_e},canvas:I,promise:_e,reset:function(){ue&&f.cancel(ue),de&&de()}}}function M(I,R){var B=!I,ae=!!g(R||{},"resize"),V=!1,$=g(R,"disableForReducedMotion",Boolean),ce=s&&!!g(R||{},"useWorker"),ue=ce?h():null,de=B?A:N,_e=I&&ue?!!I.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Te;function W(b,se,Z){for(var j=g(b,"particleCount",d),k=g(b,"angle",Number),q=g(b,"spread",Number),D=g(b,"startVelocity",Number),P=g(b,"decay",Number),O=g(b,"gravity",Number),J=g(b,"drift",Number),re=g(b,"colors",S),Q=g(b,"ticks",Number),pe=g(b,"shapes"),me=g(b,"scalar"),ge=!!g(b,"flat"),De=C(b),ve=j,Me=[],He=I.width*De.x,Ae=I.height*De.y;ve--;)Me.push(F({x:He,y:Ae,angle:k,spread:q,startVelocity:D,color:re[ve%re.length],shape:pe[_(0,pe.length)],ticks:Q,decay:P,gravity:O,drift:J,scalar:me,flat:ge}));return Te?Te.addFettis(Me):(Te=z(I,Me,de,se,Z),Te.promise)}function Oe(b){var se=$||g(b,"disableForReducedMotion",Boolean),Z=g(b,"zIndex",Number);if(se&&be)return c(function(D){D()});B&&Te?I=Te.canvas:B&&!I&&(I=w(Z),document.body.appendChild(I)),ae&&!_e&&de(I);var j={width:I.width,height:I.height};ue&&!_e&&ue.init(I),_e=!0,ue&&(I.__confetti_initialized=!0);function k(){if(ue){var D={getBoundingClientRect:function(){if(!B)return I.getBoundingClientRect()}};de(D),ue.postMessage({resize:{width:D.width,height:D.height}});return}j.width=j.height=null}function q(){Te=null,ae&&(V=!1,e.removeEventListener("resize",k)),B&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,_e=!1)}return ae&&!V&&(V=!0,e.addEventListener("resize",k,!1)),ue?ue.fire(b,j,q):W(b,j,q)}return Oe.reset=function(){ue&&ue.reset(),Te&&Te.reset()},Oe}var H;function K(){return H||(H=M(null,{useWorker:!0,resize:!0})),H}function Y(I,R,B,ae,V,$,ce){var ue=new Path2D(I),de=new Path2D;de.addPath(ue,new DOMMatrix(R));var _e=new Path2D;return _e.addPath(de,new DOMMatrix([Math.cos(ce)*V,Math.sin(ce)*V,-Math.sin(ce)*$,Math.cos(ce)*$,B,ae])),_e}function G(I){if(!a)throw new Error("path confetti are not supported in this browser");var R,B;typeof I=="string"?R=I:(R=I.path,B=I.matrix);var ae=new Path2D(R),V=document.createElement("canvas"),$=V.getContext("2d");if(!B){for(var ce=1e3,ue=ce,de=ce,_e=0,be=0,Te,W,Oe=0;Oe<ce;Oe+=2)for(var b=0;b<ce;b+=2)$.isPointInPath(ae,Oe,b,"nonzero")&&(ue=Math.min(ue,Oe),de=Math.min(de,b),_e=Math.max(_e,Oe),be=Math.max(be,b));Te=_e-ue,W=be-de;var se=10,Z=Math.min(se/Te,se/W);B=[Z,0,0,Z,-Math.round(Te/2+ue)*Z,-Math.round(W/2+de)*Z]}return{type:"path",path:R,matrix:B}}function X(I){var R,B=1,ae="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?R=I:(R=I.text,B="scalar"in I?I.scalar:B,V="fontFamily"in I?I.fontFamily:V,ae="color"in I?I.color:ae);var $=10*B,ce=""+$+"px "+V,ue=new OffscreenCanvas($,$),de=ue.getContext("2d");de.font=ce;var _e=de.measureText(R),be=Math.ceil(_e.actualBoundingBoxRight+_e.actualBoundingBoxLeft),Te=Math.ceil(_e.actualBoundingBoxAscent+_e.actualBoundingBoxDescent),W=2,Oe=_e.actualBoundingBoxLeft+W,b=_e.actualBoundingBoxAscent+W;be+=W+W,Te+=W+W,ue=new OffscreenCanvas(be,Te),de=ue.getContext("2d"),de.font=ce,de.fillStyle=ae,de.fillText(R,Oe,b);var se=1/B;return{type:"bitmap",bitmap:ue.transferToImageBitmap(),matrix:[se,0,0,se,-be*se/2,-Te*se/2]}}t.exports=function(){return K().apply(this,arguments)},t.exports.reset=function(){K().reset()},t.exports.create=M,t.exports.shapeFromPath=G,t.exports.shapeFromText=X})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),vm,!1);const hu=vm.exports;vm.exports.create;const i_=[{id:"01-animations",title:"01. Кинематографичные анимации (Scroll & Post-Processing)",category:"Motion & WebGL",sizeEstimate:"45 KB",files:[{name:"TimelineEngine.ts",content:`// STUDIO OS: TimelineEngine.ts
import gsap from 'gsap';

export class MasterTimelineEngine {
  private master = gsap.timeline({ paused: true });
  public createScene(id: string) { return gsap.timeline(); }
  public scrubTo(p: number) { this.master.progress(p); }
}`},{name:"ImageSequenceScrubber.ts",content:`// STUDIO OS: Apple-style Image Sequence Scrubber
export class ImageSequenceScrubber {
  constructor(public canvas: HTMLCanvasElement, public frameCount: number) {}
}`}]},{id:"02-anti-slop",title:"02. Анти-слоп система (AI-Cliche & Gradient Filter)",category:"Quality & Authenticity",sizeEstimate:"28 KB",files:[{name:"ClicheDetector.ts",content:`// STUDIO OS: ClicheDetector.ts
export class ClicheDetector {
  public analyze(text: string) { return { score: 95, verdict: "Оригинал" }; }
}`},{name:"GradientSlopDetector.ts",content:`// STUDIO OS: GradientSlopDetector.ts
export class GradientSlopDetector {
  public checkGradient(c1: string, c2: string) { return { isSlop: false }; }
}`}]},{id:"03-mobile",title:"03. Mobile-Perfect Адаптация (Fluid & Touch)",category:"Responsive & UX",sizeEstimate:"18 KB",files:[{name:"fluid-system.css",content:`/* Fluid Typography & Touch-Targets */
:root {
  --fs-hero: clamp(2.5rem, 1.5rem + 5vw, 6rem);
  --touch-target-min: 44px;
}`},{name:"TouchTargetValidator.ts",content:"export class TouchTargetValidator { minSize = 44; }"}]},{id:"04-spacing",title:"04. Контроль отступов и зазоров (Spacing Tokens)",category:"Geometry & CSS",sizeEstimate:"14 KB",files:[{name:"tokens.css",content:":root { --spacing-1: 4px; --spacing-2: 8px; --spacing-4: 16px; --spacing-6: 24px; --spacing-8: 32px; }"},{name:"SpacingOverlay.ts",content:"export class SpacingOverlay { toggle() { console.log('Spacing Overlay Active'); } }"}]},{id:"05-hollywood-intros",title:"05. Голливудские 3D-заставки (Universal, Particles, Glitch)",category:"3D & WebGL",sizeEstimate:"65 KB",files:[{name:"IntroEngine.ts",content:`// STUDIO OS: Hollywood 3D Intro Engine (Three.js + Shaders)
import * as THREE from 'three';
export class IntroEngine { constructor(options: any) {} }`}]},{id:"06-seo",title:"06. Сквозная SEO-инъекция (Zod Contracts & JSON-LD)",category:"SEO & Structured Data",sizeEstimate:"22 KB",files:[{name:"seo.contracts.ts",content:"export interface PageSEOContract { title: string; canonical: string; openGraph: any; }"}]},{id:"07-archetypes",title:"07. 5 Дизайн-Архетипов (Noir, Brutal, Cyber, Swiss, Minimal)",category:"Design Systems",sizeEstimate:"38 KB",files:[{name:"TokenEngine.ts",content:"export const ARCHETYPES = ['luxury-noir', 'neo-brutalism', 'cyber-tech', 'editorial-swiss', 'clean-minimal'];"}]},{id:"08-copywriting",title:"08. Инженерный копирайтинг (Fact Density & Readability)",category:"Narrative Engineering",sizeEstimate:"20 KB",files:[{name:"FactDensityScorer.ts",content:"export class FactDensityScorer { static calculate(text: string) { return { score: 88 }; } }"}]},{id:"09-quality",title:"09. Zero-Bug Валидация и Playwright Matrix",category:"QA & Performance",sizeEstimate:"32 KB",files:[{name:"MemoryLeakDetector.ts",content:"export class MemoryLeakDetector { static check() { return { status: 'OK' }; } }"}]}],jR=({isOpen:n,onClose:e})=>{const[t,i]=Ie.useState(null),[r,s]=Ie.useState(new Set);if(!n)return null;const a=async l=>{i(l.id);const c=new n_,u=c.folder(`studio-os-${l.id}`);l.files.forEach(v=>{u==null||u.file(v.name,v.content)}),u==null||u.file("README.md",`# ${l.title}
Система из библиотеки STUDIO OS.
Используйте в соответствии со стандартами качества.`);const f=await c.generateAsync({type:"blob"}),h=URL.createObjectURL(f),p=document.createElement("a");p.href=h,p.download=`studio-os-${l.id}.zip`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(h),s(v=>new Set(v).add(l.id)),i(null),hu({particleCount:50,spread:60,origin:{y:.7}})},o=async()=>{i("all");const l=new n_,c=l.folder("studio-os-full-ecosystem");i_.forEach(p=>{const v=c==null?void 0:c.folder(p.id);p.files.forEach(m=>v==null?void 0:v.file(m.name,m.content))}),c==null||c.file("package.json",JSON.stringify({name:"studio-os-full",version:"2.0.0",private:!0},null,2)),c==null||c.file("README.md",`# STUDIO OS — Full Monorepo Ecosystem
Все 9 систем студии в одном архиве.`);const u=await l.generateAsync({type:"blob"}),f=URL.createObjectURL(u),h=document.createElement("a");h.href=f,h.download="studio-os-full-ecosystem.zip",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(f),s(p=>new Set(p).add("all")),i(null),hu({particleCount:100,spread:100,origin:{y:.6}})};return y.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[y.jsxs("div",{className:"studio-modal",onClick:l=>l.stopPropagation(),children:[y.jsxs("div",{className:"studio-modal__header",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"📦 Скачать системы STUDIO OS"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Выберите отдельный автономный модуль или скачайте весь монорепозиторий студии."})]}),y.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),y.jsxs("div",{className:"full-bundle-box",children:[y.jsxs("div",{className:"full-bundle-info",children:[y.jsx(Kw,{size:28,color:"var(--accent)"}),y.jsxs("div",{children:[y.jsx("h3",{children:"Полная экосистема STUDIO OS (Все 9 систем)"}),y.jsx("p",{children:"Включает CLI studio, библиотеки, шаблоны проектов, линтеры и тесты"})]})]}),y.jsxs("button",{className:"btn-studio-primary",onClick:o,disabled:t==="all",children:[y.jsx(vn,{size:16}),y.jsx("span",{children:t==="all"?"Сборка ZIP...":"Скачать Все 9 Систем (ZIP)"})]})]}),y.jsx("div",{className:"modules-grid",children:i_.map(l=>{const c=r.has(l.id),u=t===l.id;return y.jsxs("div",{className:"module-item",children:[y.jsxs("div",{className:"module-item__info",children:[y.jsxs("div",{className:"mod-cat",children:[l.category," • ",l.sizeEstimate]}),y.jsx("h4",{children:l.title}),y.jsx("div",{className:"mod-files",children:l.files.map(f=>y.jsxs("span",{children:[y.jsx(xx,{size:12})," ",f.name]},f.name))})]}),y.jsxs("button",{className:`btn-download-mod ${c?"downloaded":""}`,onClick:()=>a(l),disabled:u,children:[c?y.jsx(Pa,{size:15}):y.jsx(vn,{size:15}),y.jsx("span",{children:u?"Сборка...":c?"Скачано":"Скачать ZIP"})]})]},l.id)})})]}),y.jsx("style",{children:`
        .full-bundle-box {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }
        .full-bundle-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .full-bundle-info h3 {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .full-bundle-info p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 14px;
          max-height: 55vh;
          overflow-y: auto;
          padding-right: 6px;
        }
        .module-item {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          transition: border-color 0.2s;
        }
        .module-item:hover {
          border-color: var(--accent);
        }
        .mod-cat {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .module-item h4 {
          font-size: 0.95rem;
          margin-bottom: 8px;
        }
        .mod-files {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .mod-files span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 2px 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .btn-download-mod {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          font-weight: 600;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          transition: all 0.2s;
          cursor: pointer;
        }
        .btn-download-mod:hover {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .btn-download-mod.downloaded {
          border-color: #00ff88;
          color: #00ff88;
        }
      `})]})},VR=({isOpen:n,onClose:e})=>{const[t,i]=Ie.useState({projectName:"",clientContact:"",archetype:"luxury-noir",hasHollywoodIntro:!0,animationLevel:"cinematic",pageCount:3,dislikedColors:"Фиолетовый AI-градиент",targetMetrics:"Увеличение конверсии в заявку до 4.8%"}),[r,s]=Ie.useState(!1);if(!n)return null;const a=()=>{let l=12e4;return t.hasHollywoodIntro&&(l+=45e3),t.animationLevel==="cinematic"&&(l+=5e4),l+=(t.pageCount-1)*25e3,`${l.toLocaleString("ru-RU")} ₽`},o=l=>{l.preventDefault(),s(!0),hu({particleCount:80,spread:70,origin:{y:.6}})};return y.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[y.jsxs("div",{className:"studio-modal",onClick:l=>l.stopPropagation(),children:[y.jsxs("div",{className:"studio-modal__header",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"⚡ Конфигуратор проекта и Заказ сайта"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Разработка сайта на базе 9 монолитных стандартов качества STUDIO OS"})]}),y.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),r?y.jsxs("div",{className:"order-success-box",children:[y.jsx("div",{className:"success-icon",children:"✓"}),y.jsx("h3",{children:"Заявка и Brand DNA успешно приняты!"}),y.jsxs("p",{children:["ИИ-агент STUDIO OS зарезервировал проект ",y.jsx("strong",{children:t.projectName||"Новый Проект"})," в монорепозитории. Арт-директор свяжется с вами в течение 15 минут для согласования интерактивного прототипа."]}),y.jsxs("div",{className:"summary-pill",children:["Архетип: ",y.jsx("strong",{children:t.archetype})," • Оценка: ",y.jsx("strong",{children:a()})]}),y.jsx("button",{className:"btn-studio-primary",onClick:e,style:{marginTop:"20px"},children:"Вернуться к витрине студии"})]}):y.jsxs("form",{onSubmit:o,className:"order-form",children:[y.jsxs("div",{className:"form-grid",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Название бренда / компании *"}),y.jsx("input",{type:"text",required:!0,placeholder:"напр. Aurum Luxury Goods",value:t.projectName,onChange:l=>i({...t,projectName:l.target.value})})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Telegram / Email / Телефон для связи *"}),y.jsx("input",{type:"text",required:!0,placeholder:"@telegram_handle или name@company.com",value:t.clientContact,onChange:l=>i({...t,clientContact:l.target.value})})]}),y.jsxs("div",{className:"form-group full-width",children:[y.jsx("label",{children:"Базовый визуальный архетип"}),y.jsx("div",{className:"archetype-select-row",children:[{id:"luxury-noir",name:"Luxury Noir"},{id:"neo-brutalism",name:"Neo-Brutalism"},{id:"cyber-tech",name:"Cyber-Tech"},{id:"editorial-swiss",name:"Editorial Swiss"},{id:"clean-minimal",name:"Clean Minimal"}].map(l=>y.jsx("button",{type:"button",className:`arch-btn ${t.archetype===l.id?"active":""}`,onClick:()=>i({...t,archetype:l.id}),children:l.name},l.id))})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Голливудская 3D-заставка"}),y.jsxs("div",{className:"checkbox-wrap",children:[y.jsx("input",{type:"checkbox",id:"introCheck",checked:t.hasHollywoodIntro,onChange:l=>i({...t,hasHollywoodIntro:l.target.checked})}),y.jsx("label",{htmlFor:"introCheck",children:"Интегрировать Three.js 3D-интро"})]})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Уровень кинематографичности анимаций"}),y.jsxs("select",{value:t.animationLevel,onChange:l=>i({...t,animationLevel:l.target.value}),children:[y.jsx("option",{value:"subtle",children:"Стандартный (плавные переходы)"}),y.jsx("option",{value:"cinematic",children:"Кино-продакшн (ScrollTrigger + Shaders)"})]})]}),y.jsxs("div",{className:"form-group full-width",children:[y.jsx("label",{children:"Brand DNA Антипатии (какие цвета/приемы строго запрещены?)"}),y.jsx("input",{type:"text",placeholder:"напр. Никаких фиолетовых градиентов, 3D-блобов и стоковых фото",value:t.dislikedColors,onChange:l=>i({...t,dislikedColors:l.target.value})})]})]}),y.jsxs("div",{className:"estimate-bar",children:[y.jsxs("div",{children:[y.jsx("span",{className:"est-lbl",children:"Предварительный расчет:"}),y.jsx("div",{className:"est-val",children:a()}),y.jsxs("span",{className:"est-terms",children:[y.jsx(Sx,{size:14})," Включает все 9 стандартов, SEO, 60 FPS и адаптив"]})]}),y.jsxs("button",{type:"submit",className:"btn-studio-primary",children:[y.jsx(nM,{size:16}),y.jsx("span",{children:"Отправить заявку"})]})]})]})]}),y.jsx("style",{children:`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .form-group label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .form-group input, .form-group select {
          width: 100%;
          min-height: 42px;
          padding: 10px 14px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
        }
        .form-group input:focus, .form-group select:focus {
          border-color: var(--accent);
        }
        .archetype-select-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .arch-btn {
          padding: 8px 14px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .arch-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 42px;
        }
        .estimate-bar {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .est-lbl {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }
        .est-val {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          color: var(--accent);
          font-weight: 800;
        }
        .est-terms {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .order-success-box {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #00ff88;
          color: #000;
          font-size: 30px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .summary-pill {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 16px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
      `})]})},HR=({isOpen:n,onClose:e})=>{const[t,i]=Ie.useState(!1),[r,s]=Ie.useState([{name:"universal-light-cone.glsl",category:"shaders",size:"4.2 KB",addedTime:"Сегодня, 14:20"},{name:"cinematic-impact-sub.wav",category:"sounds",size:"480 KB",addedTime:"Сегодня, 13:10"},{name:"luxury-shield-badge.glb",category:"3d-models",size:"1.8 MB",addedTime:"Вчера, 19:40"}]),[a,o]=Ie.useState(null);if(!n)return null;const l=c=>{if(!c||c.length===0)return;const u=[];Array.from(c).forEach(f=>{var v;const h=((v=f.name.split(".").pop())==null?void 0:v.toLowerCase())||"";let p="textures";["glb","gltf","obj","fbx"].includes(h)?p="3d-models":["glsl","vert","frag"].includes(h)?p="shaders":["wav","mp3","ogg","flac"].includes(h)?p="sounds":["woff2","woff","ttf","otf"].includes(h)&&(p="fonts"),u.push({name:f.name,category:p,size:`${(f.size/1024).toFixed(1)} KB`,addedTime:"Только что"})}),s(f=>[...u,...f]),o(`✅ ${u.length} ассетов успешно обработано и сохранено в /library/assets-vault/!`),hu({particleCount:40,spread:60,origin:{y:.7}})};return y.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[y.jsxs("div",{className:"studio-modal",onClick:c=>c.stopPropagation(),children:[y.jsxs("div",{className:"studio-modal__header",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"📥 Загрузка файлов с ПК в библиотеку STUDIO OS"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Перетащите ассеты с компьютера — движок оптимизирует их и сохранит в `/library/assets-vault/`"})]}),y.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),y.jsxs("div",{className:`drop-area ${t?"dragging":""}`,onDragOver:c=>{c.preventDefault(),i(!0)},onDragLeave:()=>i(!1),onDrop:c=>{c.preventDefault(),i(!1),l(c.dataTransfer.files)},children:[y.jsx(Gw,{size:44,color:"var(--accent)"}),y.jsx("h3",{children:"Перетащите файлы с ПК в библиотеку"}),y.jsx("p",{children:"Поддерживаются .glb (3D), .glsl (шейдеры), .wav (звук), .woff2 (шрифты), .png (текстуры)"}),y.jsxs("label",{className:"btn-studio-secondary",style:{marginTop:"12px",cursor:"pointer"},children:[y.jsx("span",{children:"Выбрать файлы с диска"}),y.jsx("input",{type:"file",multiple:!0,style:{display:"none"},onChange:c=>l(c.target.files)})]})]}),a&&y.jsxs("div",{className:"vault-status-box",children:[y.jsx(vx,{size:16,color:"#00ff88"}),y.jsx("span",{children:a})]}),y.jsxs("div",{className:"vault-list-section",children:[y.jsxs("h4",{children:["Текущее содержимое `/library/assets-vault/` (",r.length," ассетов):"]}),y.jsx("div",{className:"vault-items-grid",children:r.map((c,u)=>y.jsxs("div",{className:"vault-item-card",children:[y.jsxs("div",{className:"vault-item-icon",children:[c.category==="3d-models"&&y.jsx(Hw,{size:20}),c.category==="shaders"&&y.jsx(xx,{size:20}),c.category==="sounds"&&y.jsx(Zw,{size:20}),c.category==="fonts"&&y.jsx(wx,{size:20}),c.category==="textures"&&y.jsx(Op,{size:20})]}),y.jsxs("div",{className:"vault-item-details",children:[y.jsx("div",{className:"v-name",children:c.name}),y.jsxs("div",{className:"v-meta",children:["Папка: ",y.jsx("strong",{children:c.category})," • ",c.size," • ",c.addedTime]})]})]},u))})]})]}),y.jsx("style",{children:`
        .drop-area {
          border: 2px dashed var(--border-strong);
          border-radius: var(--radius-md);
          background: var(--bg-primary);
          padding: 36px 20px;
          text-align: center;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .drop-area.dragging {
          border-color: var(--accent);
          background: var(--bg-card);
        }
        .drop-area h3 {
          font-size: 1.1rem;
        }
        .drop-area p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .vault-status-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .vault-list-section h4 {
          font-size: 0.9rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .vault-items-grid {
          display: grid;
          gap: 8px;
          max-height: 250px;
          overflow-y: auto;
        }
        .vault-item-card {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .vault-item-icon {
          color: var(--accent);
        }
        .v-name {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: bold;
        }
        .v-meta {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
      `})]})};class GR{constructor(){this.criticalCliches=["в современном цифровом мире","раскройте потенциал","revolutionize your business","погрузитесь в мир","уникальный опыт взаимодействия","передовые технологии будущего","команда профессионалов своего дела","индивидуальный подход к каждому клиенту","мы не просто","воплощаем ваши идеи в жизнь","на стыке технологий и креатива","unlock the power of"],this.mediumBuzzwords=["инновацион","уникальн","качественн","профессиональн","индивидуальн","эксклюзивн","seamless","cutting-edge","game-changer"]}analyze(e){let t=100;const i=[];this.criticalCliches.forEach(o=>{const l=new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),c=e.match(l);if(c){const u=c.length*20;t-=u,i.push({type:"CRITICAL_AI_CLICHE",phrase:c[0],count:c.length,penalty:u})}}),this.mediumBuzzwords.forEach(o=>{const l=new RegExp(`(^|[^а-яёa-z0-9])${o}[а-яёa-z0-9]*`,"gi"),c=e.match(l);if(c&&c.length>=1){const u=c.length*10;t-=u,i.push({type:"BUZZWORD_OVERUSE",phrase:o,count:c.length,penalty:u})}});const r=(e.match(/—/g)||[]).length;r>3&&(t-=10,i.push({type:"EM_DASH_OVERUSE",phrase:"—",count:r,penalty:10}));const s=Math.max(0,Math.min(100,t));let a="🏆 Высокая оригинальность (без AI-клише)";return s<50?a="❌ Обнаружен критический AI-слоп":s<75&&(a="⚠️ Требуется доработка и конкретизация"),{score:s,verdict:a,issues:i}}}class WR{constructor(){this.knownSlop=[{name:"AI Purple-Blue (Overused)",colors:["#667eea","#764ba2"]},{name:"AI Pink-Red Gradient",colors:["#f093fb","#f5576c"]},{name:"AI Cyan-Blue Gradient",colors:["#4facfe","#00f2fe"]},{name:"AI Sunset Orange",colors:["#fa709a","#fee140"]}]}checkGradient(e,t){const i=e.toLowerCase().trim(),r=t.toLowerCase().trim();for(const s of this.knownSlop)if(i===s.colors[0].toLowerCase()&&r===s.colors[1].toLowerCase()||i===s.colors[1].toLowerCase()&&r===s.colors[0].toLowerCase())return{isSlop:!0,matchedName:s.name,recommendation:"Замените градиент на монохромную плашку с шумом или нестандартную пару из Brand DNA."};return{isSlop:!1,recommendation:"✅ Градиент / цветовая пара уникальна."}}}class XR{constructor(){this.pool={layout:["Hero-секция НЕ может быть по центру экрана (только асимметрия)","Запрещена стандартная 12-колоночная сетка (использовать 7 или 9 колонок)","Минимум одна секция обязана ломать вертикальный ритм макета"],color:["Запрещено использовать больше 2 цветов помимо черного и белого","Основной цвет берется из редкой части спектра (оливковый, терракота, охра)","Никаких мягких градиентов — только жесткие плашки или текстуры"],typography:["Заголовки набраны редким акцидентным шрифтом (не Inter/Roboto/Montserrat)","Размер заголовка h1 обязан превышать 80px на десктопе"],interaction:["Обязательна микро-анимация скролла с физикой демпфирования","Курсор имеет интерактивную зону реакции при наведении на медиа"]}}generate(e="studio-project",t=3){const i=Object.keys(this.pool),r=[];let s=0;for(let a=0;a<e.length;a++)s=(s<<5)-s+e.charCodeAt(a);for(let a=0;a<t;a++){const o=i[(Math.abs(s)+a)%i.length],l=this.pool[o],c=l[(Math.abs(s)+a*3)%l.length];r.push({category:o,rule:c})}return r}}const YR=({onDownload:n,onOpenOrder:e})=>{const[t,i]=Ie.useState("В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения для вашего бизнеса. Мы не просто создаём сайты, а воплощаем ваши идеи в жизнь."),[r,s]=Ie.useState("#667eea"),[a,o]=Ie.useState("#764ba2"),[l,c]=Ie.useState("Inter"),[u,f]=Ie.useState("Inter"),h=new XR,[p,v]=Ie.useState(h.generate("studio-demo",3)),g=new GR().analyze(t),_=new WR().checkGradient(r,a),S=(["Inter","Poppins","Montserrat","Roboto","Open Sans","Lato","DM Sans","Space Grotesk"].includes(l)?30:0)+(l===u?20:0),T=Math.max(0,100-S),C=_.isSlop?30:100,A=90,N=Math.round(g.score*.35+C*.25+T*.2+A*.2),E=(L=>L>=85?{emoji:"🏆",text:"Шедевр! Проект чист от AI-слопа и готов к сдаче клиенту",color:"#00ff88"}:L>=70?{emoji:"✅",text:"Хорошо: проходит минимальный порог качества студии (≥ 70)",color:"#00f2fe"}:L>=50?{emoji:"⚠️",text:"Требуется ревизия арт-директора: обнаружены AI-клише",color:"#ffbd2e"}:{emoji:"❌",text:"STOP. Обнаружен критический AI-слоп! Полная переработка",color:"#ff4444"})(N),F=()=>{$e.playClick(520),v(h.generate(`seed-${Date.now()}`,3))};return y.jsxs("div",{className:"anti-slop-master-container",children:[y.jsxs("div",{className:"slop-dashboard-hero-box",children:[y.jsx("div",{className:"slop-gauge-col",children:y.jsxs("div",{className:"circular-score-dial",style:{borderColor:E.color},children:[y.jsx("span",{className:"dial-num",style:{color:E.color},children:N}),y.jsx("span",{className:"dial-lbl",children:"ORIGINALITY SCORE"})]})}),y.jsxs("div",{className:"slop-verdict-col",children:[y.jsxs("div",{className:"verdict-tag",style:{color:E.color,borderColor:E.color},children:[E.emoji," ",E.text]}),y.jsx("h3",{children:"ВАЛИДАТОР АНТИ-СЛОП СИСТЕМЫ STUDIO OS"}),y.jsx("p",{children:"Автоматический фильтр проверяет проект по 4 направлениям: тексты (NLP анализ клише), палитры (Delta-E от заезженных AI-градиентов), шрифты (дефолтность пар) и структура сеток."}),y.jsxs("div",{className:"score-breakdown-row",children:[y.jsxs("div",{className:"breakdown-pill",children:[y.jsx("span",{className:"b-icon",children:"✍️"}),y.jsxs("div",{children:[y.jsx("span",{className:"b-name",children:"Копирайтинг"}),y.jsxs("strong",{style:{color:g.score>=75?"#00ff88":"#ff5555"},children:[g.score,"/100"]})]})]}),y.jsxs("div",{className:"breakdown-pill",children:[y.jsx("span",{className:"b-icon",children:"🎨"}),y.jsxs("div",{children:[y.jsx("span",{className:"b-name",children:"Градиенты"}),y.jsxs("strong",{style:{color:_.isSlop?"#ff5555":"#00ff88"},children:[C,"/100"]})]})]}),y.jsxs("div",{className:"breakdown-pill",children:[y.jsx("span",{className:"b-icon",children:"🔤"}),y.jsxs("div",{children:[y.jsx("span",{className:"b-name",children:"Шрифты"}),y.jsxs("strong",{style:{color:T>=70?"#00ff88":"#ffaa00"},children:[T,"/100"]})]})]}),y.jsxs("div",{className:"breakdown-pill",children:[y.jsx("span",{className:"b-icon",children:"📐"}),y.jsxs("div",{children:[y.jsx("span",{className:"b-name",children:"Layout Сетка"}),y.jsxs("strong",{style:{color:"#00ff88"},children:[A,"/100"]})]})]})]})]})]}),y.jsxs("div",{className:"slop-tools-grid",children:[y.jsxs("div",{className:"slop-panel-card",children:[y.jsxs("div",{className:"panel-card-head",children:[y.jsxs("div",{className:"panel-title-wrap",children:[y.jsx("span",{className:"p-num",children:"01"}),y.jsxs("div",{children:[y.jsx("h4",{children:"Живой NLP Сканер AI-Клише"}),y.jsx("p",{children:"Поиск фраз-паразитов, избытка тире и одинаковой длины предложений"})]})]}),y.jsx("span",{className:`status-pill ${g.score>=75?"clean":"alert"}`,children:g.score>=75?"ЧИСТО":"НАЙДЕН СЛОП"})]}),y.jsx("textarea",{className:"slop-text-input",value:t,onChange:L=>i(L.target.value),rows:4,placeholder:"Введите текст для анализа..."}),y.jsxs("div",{className:"slop-penalties-box",children:[y.jsxs("div",{className:"penalties-head",children:[y.jsx("span",{children:"Найденные проблемы и штрафные баллы:"}),y.jsxs("strong",{children:[g.issues.length," маркеров"]})]}),g.issues.length>0?y.jsx("div",{className:"issues-tags-list",children:g.issues.map((L,z)=>y.jsxs("div",{className:"penalty-tag",children:[y.jsx(rM,{size:13}),y.jsxs("span",{className:"p-phrase",children:['"',L.phrase,'"']}),y.jsxs("span",{className:"p-pts",children:["-",L.penalty," pts"]})]},z))}):y.jsxs("div",{className:"zero-cliches-note",children:[y.jsx(Pa,{size:15,color:"#00ff88"}),y.jsx("span",{children:"Текст чист от клише, абстракций и шаблонных конструкций"})]})]}),y.jsxs("div",{className:"quick-presets-row",children:[y.jsx("span",{children:"Примеры:"}),y.jsx("button",{className:"btn-preset-test",onClick:()=>{$e.playClick(350),i("В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения. Мы не просто создаём сайты, а воплощаем ваши идеи в жизнь.")},children:"Типичный AI-Slop"}),y.jsx("button",{className:"btn-preset-test",onClick:()=>{$e.playClick(500),i("За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Время ответа сократилось с 420мс до 68мс (экономия 450,000 ₽/мес).")},children:"Fact-First Копирайтинг"})]})]}),y.jsxs("div",{className:"slop-panel-card",children:[y.jsxs("div",{className:"panel-card-head",children:[y.jsxs("div",{className:"panel-title-wrap",children:[y.jsx("span",{className:"p-num",children:"02"}),y.jsxs("div",{children:[y.jsx("h4",{children:"Детектор Градиентов и Шрифтов"}),y.jsx("p",{children:"Проверка на совпадение с заезженными AI-палитрами"})]})]}),y.jsx("span",{className:`status-pill ${_.isSlop?"alert":"clean"}`,children:_.isSlop?"AI GRADIENT":"ORIGINAL"})]}),y.jsx("div",{className:"gradient-display-surface",style:{background:`linear-gradient(135deg, ${r}, ${a})`},children:y.jsxs("span",{children:[r," → ",a]})}),y.jsxs("div",{className:"color-selectors-bar",children:[y.jsxs("label",{className:"color-field",children:[y.jsx("span",{children:"Цвет 1:"}),y.jsx("input",{type:"color",value:r,onChange:L=>s(L.target.value)}),y.jsx("code",{children:r})]}),y.jsxs("label",{className:"color-field",children:[y.jsx("span",{children:"Цвет 2:"}),y.jsx("input",{type:"color",value:a,onChange:L=>o(L.target.value)}),y.jsx("code",{children:a})]})]}),y.jsxs("div",{className:"quick-presets-row",children:[y.jsx("span",{children:"Тест палитры:"}),y.jsx("button",{className:"btn-preset-test",onClick:()=>{$e.playClick(320),s("#667eea"),o("#764ba2")},children:"AI Purple (#667eea)"}),y.jsx("button",{className:"btn-preset-test",onClick:()=>{$e.playClick(340),s("#f093fb"),o("#f5576c")},children:"AI Pink (#f093fb)"}),y.jsx("button",{className:"btn-preset-test",onClick:()=>{$e.playClick(500),s("#d4af37"),o("#070709")},children:"Luxury Gold (#d4af37)"})]}),y.jsxs("div",{className:"constraint-injector-panel",children:[y.jsxs("div",{className:"ci-head",children:[y.jsx("span",{className:"ci-title",children:"🎯 Принудительные ограничения (Constraint Injector):"}),y.jsx("button",{onClick:F,title:"Сгенерировать новые",children:y.jsx(Jw,{size:13})})]}),y.jsx("div",{className:"ci-list",children:p.map((L,z)=>y.jsxs("div",{className:"ci-item",children:[y.jsxs("strong",{children:["[",L.category.toUpperCase(),"]:"]})," ",L.rule]},z))})]})]})]}),y.jsxs("div",{className:"slop-footer-cta-row",children:[y.jsxs("button",{className:"btn-studio-secondary",onClick:n,children:[y.jsx(vn,{size:16}),y.jsx("span",{children:"Скачать весь Анти-слоп модуль (ZIP)"})]}),y.jsxs("button",{className:"btn-studio-primary",onClick:e,children:[y.jsx(bs,{size:16}),y.jsx("span",{children:"Заказать сайт с гарантией Анти-слоп > 85"})]})]}),y.jsx("style",{children:`
        .anti-slop-master-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .slop-dashboard-hero-box {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(20px, 4vw, 36px);
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: clamp(20px, 4vw, 40px);
          align-items: center;
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 860px) {
          .slop-dashboard-hero-box { grid-template-columns: 1fr; }
        }
        .slop-gauge-col {
          display: flex;
          justify-content: center;
        }
        .circular-score-dial {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid var(--accent);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          box-shadow: 0 0 30px rgba(0,0,0,0.8);
        }
        .dial-num {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1;
        }
        .dial-lbl {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .slop-verdict-col h3 {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          margin: 10px 0 8px;
        }
        .slop-verdict-col p {
          font-size: var(--fs-sm);
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .verdict-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid;
          background: var(--bg-primary);
        }
        .score-breakdown-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
        }
        .breakdown-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .b-icon { font-size: 1.2rem; }
        .b-name { display: block; font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-secondary); }
        .breakdown-pill strong { font-family: var(--font-mono); font-size: 0.95rem; }
        
        .slop-tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .slop-tools-grid { grid-template-columns: 1fr; }
        }
        .slop-panel-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 26px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
        .panel-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .panel-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .p-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--accent);
          line-height: 1;
        }
        .panel-title-wrap h4 {
          font-size: 1rem;
          margin-bottom: 2px;
        }
        .panel-title-wrap p {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .status-pill {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .status-pill.clean { background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.3); }
        .status-pill.alert { background: rgba(255, 60, 60, 0.15); color: #ff5555; border: 1px solid rgba(255, 60, 60, 0.3); }
        
        .slop-text-input {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 12px 14px;
          font-family: inherit;
          font-size: 0.88rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
        }
        .slop-text-input:focus { border-color: var(--accent); }
        
        .slop-penalties-box {
          background: var(--bg-primary);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .penalties-head {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .issues-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .penalty-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 60, 60, 0.1);
          color: #ff6666;
          border: 1px solid rgba(255, 60, 60, 0.25);
          border-radius: 4px;
          padding: 3px 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .p-pts { color: #ffaa00; font-weight: bold; }
        .zero-cliches-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #00ff88;
        }
        .quick-presets-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }
        .btn-preset-test {
          padding: 4px 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.72rem;
          cursor: pointer;
        }
        .btn-preset-test:hover { border-color: var(--accent); color: var(--accent); }
        
        .gradient-display-surface {
          height: 90px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }
        .color-selectors-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .color-field {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .color-field input[type="color"] {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: none;
        }
        .constraint-injector-panel {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .ci-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .ci-head button { color: var(--accent); cursor: pointer; }
        .ci-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ci-item {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .ci-item strong {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.7rem;
        }
        .slop-footer-cta-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 14px;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 18px 24px;
        }
      `})]})},qR=({onDownload:n,onOpenOrder:e})=>y.jsx("section",{className:"section-block",id:"anti-slop",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(iM,{size:14}),y.jsx("span",{children:"Система 02: Анти-слоп система (Защита от AI-шаблонности)"})]}),y.jsx("h2",{className:"section-title",children:"АЛГОРИТМИЧЕСКИЙ ФИЛЬТР ШАБЛОННОСТИ"}),y.jsx("p",{className:"section-desc",children:"Словари клише, Delta-E детекторы заезженных градиентов, хэширование DOM-структур и генератор принудительных ограничений не пропускают усредненный AI-слоп на этапе коммита."}),y.jsx(YR,{onDownload:n,onOpenOrder:e})]})}),$R=({isOverlayActive:n,onToggleOverlay:e,onDownload:t})=>{const[i,r]=Ie.useState("16px (var(--spacing-4))"),s=[{name:"--spacing-0-5",val:"2px",use:"Микро-отступы бейджей"},{name:"--spacing-1",val:"4px",use:"Иконки и мелкие кнопки"},{name:"--spacing-2",val:"8px",use:"Базовая модульная единица"},{name:"--spacing-3",val:"12px",use:"Внутренние паддинги инпутов"},{name:"--spacing-4",val:"16px",use:"Стандартный зазор элементов"},{name:"--spacing-6",val:"24px",use:"Отступы внутри карточек"},{name:"--spacing-8",val:"32px",use:"Зазоры между карточками"},{name:"--spacing-12",val:"48px",use:"Зазоры заголовков"},{name:"--spacing-16",val:"64px",use:"Планшетные отступы секций"},{name:"--spacing-24",val:"96px",use:"Десктопные отступы секций"}];return y.jsxs("section",{className:"section-block",id:"spacing-radar",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(eM,{size:14}),y.jsx("span",{children:"Система 04: Контроль отступов и зазоров (Spacing Control)"})]}),y.jsx("h2",{className:"section-title",children:"АППАРАТНЫЙ КОНТРОЛЬ ГЕОМЕТРИИ И ОТСТУПОВ"}),y.jsx("p",{className:"section-desc",children:"Полный запрет хаотичных пикселей (13px, 19px, 22px). Только строгая модульная шкала токенов, примитивы `<Box>` и `<Stack>`, а также Stylelint-правила, блокирующие произвольный CSS."}),y.jsxs("div",{className:"spacing-layout-grid",children:[y.jsxs("div",{className:"spacing-card",children:[y.jsxs("div",{className:"spacing-card-head",children:[y.jsxs("div",{children:[y.jsx("h3",{children:"📡 Радар отступов (Live Spacing Overlay)"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.78rem"},children:"Горячая клавиша: Ctrl + Shift + S"})]}),y.jsxs("button",{className:`btn-studio-primary ${n?"active-radar":""}`,onClick:()=>{$e.playClick(600),e()},children:[n?y.jsx(Yw,{size:16}):y.jsx(Op,{size:16}),y.jsx("span",{children:n?"Отключить радар":"Включить радар отступов"})]})]}),y.jsx("div",{className:"box-model-container",children:y.jsxs("div",{className:"margin-layer",children:[y.jsx("span",{className:"layer-lbl",children:"MARGIN: 24px (var(--spacing-6))"}),y.jsxs("div",{className:"padding-layer",children:[y.jsx("span",{className:"layer-lbl",children:"PADDING: 20px (var(--spacing-5))"}),y.jsxs("div",{className:"content-layer",children:[y.jsx("strong",{children:"Внутренний контент компонента"}),y.jsx("p",{children:"GAP: 12px между дочерними элементами"})]})]})]})}),y.jsxs("div",{className:"status-badge-row",children:[y.jsx(Pa,{size:15,color:"#00ff88"}),y.jsx("span",{children:"Stylelint AST Enforcer: 0 произвольных пикселей в кодовой базе"})]})]}),y.jsxs("div",{className:"spacing-card",children:[y.jsxs("div",{className:"spacing-card-head",children:[y.jsxs("div",{children:[y.jsx("h3",{children:"📐 Модульная шкала дизайн-токенов"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.78rem"},children:"Шкала на базе 8px модульного шага"})]}),y.jsx("span",{className:"badge-pill",children:"8px Modular"})]}),y.jsx("div",{className:"tokens-table-wrap",children:y.jsxs("table",{className:"tokens-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Токен"}),y.jsx("th",{children:"Значение"}),y.jsx("th",{children:"Назначение"})]})}),y.jsx("tbody",{children:s.map((a,o)=>y.jsxs("tr",{className:i.includes(a.val)?"selected":"",onClick:()=>{$e.playClick(300+o*20),r(`${a.val} (${a.name})`)},children:[y.jsx("td",{children:y.jsx("code",{children:a.name})}),y.jsx("td",{children:y.jsx("strong",{children:a.val})}),y.jsx("td",{children:a.use})]},o))})]})}),y.jsxs("button",{className:"btn-studio-secondary",onClick:t,style:{width:"100%",marginTop:"16px"},children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать токены и Stylelint плагин (ZIP)"})]})]})]})]}),y.jsx("style",{children:`
        .spacing-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .spacing-layout-grid { grid-template-columns: 1fr; }
        }
        .spacing-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
        .spacing-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .box-model-container {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
        }
        .margin-layer {
          background: rgba(255, 100, 0, 0.12);
          border: 1px dashed rgba(255, 100, 0, 0.6);
          padding: 16px;
          text-align: center;
        }
        .padding-layer {
          background: rgba(0, 200, 100, 0.12);
          border: 1px dashed rgba(0, 200, 100, 0.6);
          padding: 16px;
          margin-top: 8px;
        }
        .content-layer {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 14px;
          margin-top: 8px;
          color: var(--text-primary);
        }
        .layer-lbl {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
        }
        .status-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .tokens-table-wrap {
          max-height: 270px;
          overflow-y: auto;
        }
        .tokens-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }
        .tokens-table th, .tokens-table td {
          padding: 8px 10px;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .tokens-table th {
          color: var(--text-secondary);
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        .tokens-table tr {
          cursor: pointer;
          transition: background 0.15s;
        }
        .tokens-table tr:hover, .tokens-table tr.selected {
          background: rgba(255, 255, 255, 0.05);
        }
        .tokens-table tr.selected td {
          color: var(--accent);
        }
      `})]})},ZR=({onDownload:n})=>{const[e,t]=Ie.useState({name:"iPhone SE (375x667)",width:320,hasNotch:!1,reason:"Самый маленький актуальный экран iOS"}),i=[{name:"iPhone SE (375x667)",width:320,hasNotch:!1,reason:"Ловит обрезку строк и вылеты"},{name:"iPhone 15 Pro (393x852)",width:360,hasNotch:!0,reason:"Dynamic Island и Safe-Area"},{name:"Galaxy Z Fold (717x512)",width:440,hasNotch:!1,reason:"Раскладной широкий экран"},{name:"iPad Mini (768x1024)",width:500,hasNotch:!1,reason:"Планшетный портрет"}];return y.jsxs("section",{className:"section-block",id:"mobile",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(Ig,{size:14}),y.jsx("span",{children:"Система 03: Тотальная мобильная адаптация (Mobile-Perfect)"})]}),y.jsx("h2",{className:"section-title",children:"АДАПТАЦИЯ БЕЗ КОМПРОМИССОВ"}),y.jsx("p",{className:"section-desc",children:"Отказ от ручных брейкпоинтов в пользу fluid-типографики `clamp()`, гарантия touch target >= 44x44px и автоматический Playwright-прогон по матрице из 30+ реальных мобильных разрешений."}),y.jsxs("div",{className:"mobile-lab-layout-grid",children:[y.jsxs("div",{className:"device-simulator-col",children:[y.jsx("div",{className:"device-selector-row",children:i.map((r,s)=>y.jsxs("button",{className:`btn-device-tab ${e.name===r.name?"active":""}`,onClick:()=>{$e.playClick(400+s*40),t(r)},children:[y.jsx(Ig,{size:13}),y.jsx("span",{children:r.name.split(" ")[0]})]},s))}),y.jsxs("div",{className:"phone-mockup-frame",style:{width:`${e.width}px`},children:[e.hasNotch&&y.jsx("div",{className:"dynamic-island-bar"}),y.jsxs("div",{className:"mockup-screen",children:[y.jsxs("div",{className:"mockup-status-bar",children:[y.jsx("span",{children:"9:41"}),y.jsx("span",{children:"STUDIO OS Mobile"}),y.jsx("span",{children:"100%"})]}),y.jsxs("div",{className:"mockup-hero-card",children:[y.jsx("span",{className:"mock-badge",children:"48px Touch Target"}),y.jsx("h4",{children:"Мобильный интерфейс"}),y.jsx("p",{children:"Текст плавно масштабируется без скачков между 320px и 1440px."}),y.jsx("div",{className:"mockup-btn-group",children:y.jsxs("button",{className:"btn-touch-demo",children:[y.jsx($w,{size:14}),y.jsx("span",{children:"Тап-зона 48x48px"})]})})]}),y.jsxs("div",{className:"mockup-safe-note",children:[y.jsx("strong",{children:"Safe-Area Inset Handling"}),y.jsx("p",{children:"Кнопки не перекрываются Home Indicator."})]})]})]})]}),y.jsxs("div",{className:"mobile-standards-col",children:[y.jsx("h3",{children:"📱 Стандарты Mobile-Perfect студии"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Каждый проект тестируется на отсутствие горизонтального скролла на 1px и удобство управления одной рукой."}),y.jsx("div",{className:"specs-checklist",children:[{title:"Touch-Target >= 48px (Apple HIG & Material)",desc:"Все кликабельные элементы удобны для большого пальца"},{title:"Zero Horizontal Scroll",desc:"Автоматический детектор ловит вылет элементов за границы экрана"},{title:"iOS Safari Auto-Zoom Protection",desc:"Размер шрифта инпутов строго >= 16px"},{title:"Safe-Area-Inset (Dynamic Island & Notch)",desc:"Фиксированные меню учитывают вырезы экрана"},{title:"Playwright Viewport Sweep (30+ устройств)",desc:"Автоматические скриншоты всех страниц в CI/CD"}].map((r,s)=>y.jsxs("div",{className:"spec-item",children:[y.jsx(vx,{size:17,color:"#00ff88",style:{flexShrink:0,marginTop:"2px"}}),y.jsxs("div",{children:[y.jsx("strong",{children:r.title}),y.jsx("p",{children:r.desc})]})]},s))}),y.jsx("div",{className:"triple-tap-hint",children:y.jsx("span",{children:"💡 СОВЕТ: Нажмите 3 раза подряд по экрану на телефоне, чтобы открыть Mobile Debug Overlay!"})}),y.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать Mobile-Perfect систему (ZIP)"})]})]})]})]}),y.jsx("style",{children:`
        .mobile-lab-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .mobile-lab-layout-grid { grid-template-columns: 1fr; }
        }
        .device-simulator-col, .mobile-standards-col {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-standards-col {
          align-items: stretch;
        }
        .device-selector-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .btn-device-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: 20px;
          cursor: pointer;
        }
        .btn-device-tab.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .phone-mockup-frame {
          background: #000;
          border: 4px solid #333;
          border-radius: 34px;
          padding: 10px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
          position: relative;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dynamic-island-bar {
          width: 80px;
          height: 16px;
          background: #111;
          border-radius: 10px;
          margin: 0 auto 8px;
        }
        .mockup-screen {
          background: var(--bg-primary);
          border-radius: 24px;
          padding: 14px;
          color: var(--text-primary);
          min-height: 380px;
          overflow: hidden;
        }
        .mockup-status-bar {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .mockup-hero-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .mock-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent);
        }
        .mockup-hero-card h4 {
          font-size: 0.95rem;
          margin: 4px 0;
        }
        .mockup-hero-card p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .btn-touch-demo {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 44px;
          padding: 8px 14px;
          background: var(--accent);
          color: #000;
          font-weight: bold;
          font-size: 0.75rem;
          border-radius: 6px;
        }
        .mockup-safe-note {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px;
          font-size: 0.72rem;
        }
        .specs-checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .spec-item {
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
        }
        .spec-item strong { display: block; font-size: 0.85rem; }
        .spec-item p { font-size: 0.75rem; color: var(--text-secondary); }
        .triple-tap-hint {
          padding: 10px 14px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
        }
      `})]})},KR=({onDownload:n})=>{const[e,t]=Ie.useState("jsonld"),i={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"STUDIO OS Production",url:"https://studio-os.com",logo:"https://studio-os.com/logo.png",sameAs:["https://t.me/studio_os","https://github.com/studio-os"]},{"@type":"WebSite",name:"STUDIO OS Portal",potentialAction:{"@type":"SearchAction",target:"https://studio-os.com/search?q={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Главная",item:"https://studio-os.com"},{"@type":"ListItem",position:2,name:"Библиотека систем",item:"https://studio-os.com#systems"}]}]};return y.jsxs("section",{className:"section-block",id:"seo",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(tM,{size:14}),y.jsx("span",{children:"Система 06: Сквозная SEO-инъекция (SEO-by-Design)"})]}),y.jsx("h2",{className:"section-title",children:"SEO НЕ ПОСЛЕ СДАЧИ, А В КАЖДОМ КОММИТЕ"}),y.jsx("p",{className:"section-desc",children:'Zod-схемы метаданных, автоматическая генерация графа Schema.org JSON-LD, AST-инъекция `alt` и `loading="lazy"` при компиляции и headless-краулер Playwright, проверяющий статус-коды и каноникалы в CI/CD.'}),y.jsxs("div",{className:"seo-showcase-grid",children:[y.jsxs("div",{className:"seo-inspector-card",children:[y.jsxs("div",{className:"seo-tabs-bar",children:[y.jsxs("button",{className:`seo-tab-btn ${e==="jsonld"?"active":""}`,onClick:()=>{$e.playClick(450),t("jsonld")},children:[y.jsx(Ww,{size:14}),y.jsx("span",{children:"JSON-LD Schema Graph"})]}),y.jsx("button",{className:`seo-tab-btn ${e==="meta"?"active":""}`,onClick:()=>{$e.playClick(480),t("meta")},children:y.jsx("span",{children:"Google Snippet & Meta"})}),y.jsx("button",{className:`seo-tab-btn ${e==="rules"?"active":""}`,onClick:()=>{$e.playClick(510),t("rules")},children:y.jsx("span",{children:"ESLint AST Rules"})})]}),y.jsxs("div",{className:"tab-render-box",children:[e==="jsonld"&&y.jsx("pre",{className:"code-block-seo",children:JSON.stringify(i,null,2)}),e==="meta"&&y.jsxs("div",{className:"meta-preview-card",children:[y.jsxs("div",{className:"google-serp-card",children:[y.jsx("span",{className:"g-url",children:"https://studio-os.com › systems"}),y.jsx("h4",{className:"g-title",children:"STUDIO OS — Мета-система и Живой Портал Веб-Студии"}),y.jsx("p",{className:"g-desc",children:"Единая производственная операционная система веб-студии: 9 монолитных стандартов, живая библиотека модулей и голливудские заставки."})]}),y.jsxs("div",{className:"meta-stats-chips",children:[y.jsxs("span",{children:["Title: ",y.jsx("strong",{children:"58 симв. (Оптимально 30-65)"})]}),y.jsxs("span",{children:["Description: ",y.jsx("strong",{children:"146 симв. (Оптимально 70-160)"})]}),y.jsxs("span",{children:["H1 Count: ",y.jsx("strong",{children:"Ровно 1 тег"})]})]})]}),e==="rules"&&y.jsxs("div",{className:"rules-checklist",children:[y.jsxs("div",{className:"rule-card",children:[y.jsx(Pa,{size:15,color:"#00ff88"}),y.jsxs("div",{children:[y.jsx("strong",{children:"enforce-heading-hierarchy.js"}),y.jsx("p",{children:"Запрещает больше одного `h1` и пропуски уровней (`h1` → `h3` запрещено)"})]})]}),y.jsxs("div",{className:"rule-card",children:[y.jsx(Pa,{size:15,color:"#00ff88"}),y.jsxs("div",{children:[y.jsx("strong",{children:"require-image-seo-attrs.js"}),y.jsx("p",{children:"AST-плагин компилятора сам вычисляет `width/height` картинок для CLS=0"})]})]})]})]})]}),y.jsxs("div",{className:"seo-summary-card",children:[y.jsx("h3",{children:"🤖 Автоматизация поискового краулинга"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Встроенный Playwright SEOCrawler сканирует каждую страницу перед мержем в main."}),y.jsxs("div",{className:"crawler-kpi-grid",children:[y.jsxs("div",{className:"kpi-box",children:[y.jsx("span",{className:"kpi-num",children:"100%"}),y.jsx("span",{className:"kpi-lbl",children:"Rich Snippets"})]}),y.jsxs("div",{className:"kpi-box",children:[y.jsx("span",{className:"kpi-num",children:"0.00"}),y.jsx("span",{className:"kpi-lbl",children:"CLS Shift"})]}),y.jsxs("div",{className:"kpi-box",children:[y.jsx("span",{className:"kpi-num",children:"0"}),y.jsx("span",{className:"kpi-lbl",children:"Broken Links"})]})]}),y.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"20px"},children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать SEO-модуль и Zod-контракты (ZIP)"})]})]})]})]}),y.jsx("style",{children:`
        .seo-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .seo-showcase-grid { grid-template-columns: 1fr; }
        }
        .seo-inspector-card, .seo-summary-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
        }
        .seo-tabs-bar {
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .seo-tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .seo-tab-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .code-block-seo {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #00ff88;
          max-height: 260px;
          overflow-y: auto;
        }
        .meta-preview-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
        }
        .google-serp-card {
          background: #ffffff;
          color: #202124;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 14px;
          font-family: Arial, sans-serif;
        }
        .g-url { font-size: 0.75rem; color: #202124; display: block; margin-bottom: 4px; }
        .g-title { font-size: 1.05rem; color: #1a0dab; margin-bottom: 4px; font-weight: normal; }
        .g-desc { font-size: 0.82rem; color: #4d5156; line-height: 1.4; }
        .meta-stats-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .rules-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rule-card {
          display: flex;
          gap: 10px;
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }
        .rule-card p { font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; }
        .crawler-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: var(--bg-primary);
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }
        .kpi-box { text-align: center; }
        .kpi-num { display: block; font-family: var(--font-mono); font-size: 1.35rem; font-weight: bold; color: var(--accent); }
        .kpi-lbl { font-size: 0.68rem; color: var(--text-secondary); }
      `})]})};class QR{static calculate(e){const t=[/\b\d+([.,]\d+)?\s*(%|px|ms|мс|сек|мин|ч|дн|дней|дня|день|руб|₽|\$|€|k|M|GB|TB|RPS|FPS)\b/gi,/\b(20\d{2}|19\d{2})\s*(год|года|году|г\.)\b/gi,/\d+\s*(клиент|проект|сервер|пользовател|наград|мест|микросервис|устройств)/gi],i=e.split(/\s+/).filter(l=>l.length>0),r=[];t.forEach(l=>{const c=e.match(l);c&&r.push(...c)});const s=e.match(/(^|\s)\d{2,}(\s|[.,!?:;]|$)/g);s&&s.forEach(l=>{const c=l.trim();r.some(u=>u.includes(c))||r.push(c)});const a=r.length/Math.max(1,i.length/20);return{score:Math.min(100,Math.round(a*45)),factsCount:r.length,factsFound:r}}}class JR{static analyze(e){const t=e.split(/[.!?]+/).filter(o=>o.trim().length>0),i=e.split(/\s+/).filter(o=>o.length>0);if(t.length===0||i.length===0)return{score:100,verdict:"Пустой текст",avgWordsPerSentence:0};const r=i.length/t.length,s=Math.max(20,Math.min(100,Math.round(110-r*2.5)));let a="✅ Легко воспринимается, идеальный веб-ритм";return s<50?a="❌ Перегруженный синтаксис (канцелярит)":s<70&&(a="⚠️ Средняя сложность"),{score:s,verdict:a,avgWordsPerSentence:Math.round(r)}}}const e3=({onDownload:n})=>{const[e,t]=Ie.useState("За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Среднее время ответа сократилось с 420мс до 68мс, а расходы на сервера упали на 34% (экономия 450,000 ₽/мес)."),i=QR.calculate(e),r=JR.analyze(e);return y.jsxs("section",{className:"section-block",id:"copywriting",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(wx,{size:14}),y.jsx("span",{children:"Система 08: Инженерный копирайтинг (Fact-First)"})]}),y.jsx("h2",{className:"section-title",children:"ТЕКСТ КАК ИНЖЕНЕРНЫЙ КАРКАС КОНВЕРСИИ"}),y.jsx("p",{className:"section-desc",children:"Отказ от водянистых текстов в пользу точных метрик, артефактов и сроков. Алгоритмический контроль плотности фактов (минимум 1 цифра на 25 слов) и естественного веб-ритма."}),y.jsxs("div",{className:"copy-showcase-grid",children:[y.jsxs("div",{className:"copy-editor-card",children:[y.jsxs("div",{className:"copy-editor-head",children:[y.jsx("h3",{children:"✍️ Живой анализатор фактуры и читаемости текста"}),y.jsx("span",{className:"badge-pill",children:"NLP Score Engine"})]}),y.jsx("textarea",{className:"copy-textarea",value:e,onChange:s=>t(s.target.value),rows:4}),y.jsxs("div",{className:"copy-metrics-bar",children:[y.jsxs("div",{className:"metric-box",children:[y.jsxs("span",{className:"m-val",children:[i.score,"/100"]}),y.jsx("span",{className:"m-lbl",children:"Плотность фактов"})]}),y.jsxs("div",{className:"metric-box",children:[y.jsx("span",{className:"m-val",children:i.factsCount}),y.jsx("span",{className:"m-lbl",children:"Фактов найдено"})]}),y.jsxs("div",{className:"metric-box",children:[y.jsxs("span",{className:"m-val",children:[r.score,"/100"]}),y.jsx("span",{className:"m-lbl",children:"Читаемость Flesch"})]}),y.jsxs("div",{className:"metric-box",children:[y.jsx("span",{className:"m-val",children:r.avgWordsPerSentence}),y.jsx("span",{className:"m-lbl",children:"Слов в предложении"})]})]}),i.factsFound.length>0&&y.jsxs("div",{className:"extracted-facts-wrap",children:[y.jsx("span",{className:"ef-title",children:"Твёрдые доказательства (Facts):"}),y.jsx("div",{className:"ef-chips",children:i.factsFound.map((s,a)=>y.jsxs("span",{className:"fact-chip",children:["✓ ",s]},a))})]})]}),y.jsxs("div",{className:"tov-card",children:[y.jsx("h3",{children:"🎭 Калибровка Tone of Voice (ToV)"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"14px"},children:"Текст автоматически синхронизируется с выбранным визуальным архетипом."}),y.jsxs("div",{className:"tov-rules-box",children:[y.jsxs("div",{className:"tov-item",children:[y.jsx("strong",{children:"Luxury Noir ToV:"}),y.jsx("span",{children:"Сдержанный, лаконичный, без восклицательных знаков и капса"})]}),y.jsxs("div",{className:"tov-item",children:[y.jsx("strong",{children:"Neo-Brutalism ToV:"}),y.jsx("span",{children:"Прямой, честный, разговорный, с четкими глаголами"})]}),y.jsxs("div",{className:"tov-item",children:[y.jsx("strong",{children:"Cyber-Tech ToV:"}),y.jsx("span",{children:"Инженерный, с таймингами, протоколами и версиями"})]})]}),y.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать модуль копирайтинга (ZIP)"})]})]})]})]}),y.jsx("style",{children:`
        .copy-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .copy-showcase-grid { grid-template-columns: 1fr; }
        }
        .copy-editor-card, .tov-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .copy-editor-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .copy-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 14px;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.6;
          resize: vertical;
          outline: none;
          margin-bottom: 16px;
        }
        .copy-textarea:focus { border-color: var(--accent); }
        .copy-metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          background: var(--bg-primary);
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          margin-bottom: 14px;
        }
        .metric-box { text-align: center; }
        .metric-box .m-val { display: block; font-family: var(--font-mono); font-size: 1.25rem; font-weight: bold; color: var(--accent); }
        .metric-box .m-lbl { font-size: 0.68rem; color: var(--text-secondary); }
        .extracted-facts-wrap {
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
        }
        .ef-title { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); display: block; margin-bottom: 6px; }
        .ef-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .fact-chip {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 4px;
          padding: 2px 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }
        .tov-rules-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tov-item {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }
        .tov-item strong { display: block; font-family: var(--font-mono); color: var(--accent); margin-bottom: 2px; }
        .tov-item span { color: var(--text-secondary); font-size: 0.78rem; }
      `})]})};class t3{static checkClientMemory(){if(typeof window<"u"&&performance.memory){const e=performance.memory,t=Math.round(e.usedJSHeapSize/(1024*1024)),i=Math.round(e.totalJSHeapSize/(1024*1024));return{jsHeapSizeLimitMB:Math.round(e.jsHeapSizeLimit/(1024*1024)),totalJSHeapSizeMB:i,usedJSHeapSizeMB:t,status:t<150?"✅ Память в зеленой зоне (< 150MB)":"⚠️ Повышенный расход памяти"}}return{jsHeapSizeLimitMB:2048,totalJSHeapSizeMB:45,usedJSHeapSizeMB:38,status:"✅ Память в норме (Virtual API)"}}}const n3=({onDownload:n})=>{const[e,t]=Ie.useState(!1),[i,r]=Ie.useState(["PASS tests/unit/math/easing.spec.ts (12 tests)","PASS tests/unit/anti-slop/cliche.spec.ts (8 tests)","PASS tests/components/primitives/Box.spec.tsx (16 tests)","PASS tests/e2e/archetype-switch.spec.ts (5 browsers)","PASS tests/perf/memory-leak.spec.ts (JS Heap Delta: 0.2%)","✓ All 54 tests passed across Chromium, WebKit and Firefox (1.42s)"]),[s,a]=Ie.useState(60),o=t3.checkClientMemory();Ie.useEffect(()=>{let c=0,u=performance.now(),f=0;const h=p=>{c++,p-u>=1e3&&(a(c),c=0,u=p),f=requestAnimationFrame(h)};return f=requestAnimationFrame(h),()=>cancelAnimationFrame(f)},[]);const l=()=>{$e.playClick(600),t(!0),r(["[RUNNER]: Инициализация Playwright & Vitest Matrix..."]);const c=["1/5. Статический AST аудит (ESLint strict reflow rules)... [PASS]","2/5. Валидация Zod runtime guards & API contracts... [PASS]","3/5. Прогон матрицы скриншотов по 5 архетипам (Playwright)... [PASS]","4/5. Замер утечек памяти GPU VRAM и Three.js dispose()... [PASS]","5/5. Проверка доступности WCAG 2.2 AAA (axe-core)... [PASS]","🏆 100% QUALITY GATE ПРОЙДЕН. 0 ОШИБОК, 0 ПРЕДУПРЕЖДЕНИЙ."];c.forEach((u,f)=>{setTimeout(()=>{r(h=>[...h,u]),f===c.length-1&&(t(!1),$e.playCinematicImpact())},(f+1)*350)})};return y.jsxs("section",{className:"section-block",id:"zero-bug",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-tagline",children:[y.jsx(Sx,{size:14}),y.jsx("span",{children:"Система 09: Тотальная валидация и Zero-Bug тестирование"})]}),y.jsx("h2",{className:"section-title",children:"МОНОЛИТНАЯ БРОНЯ ОТ БАГОВ"}),y.jsx("p",{className:"section-desc",children:"Многоуровневая пирамида тестирования: кастомные AST-линтеры ловят Layout Thrashing, CDP замеряет утечки памяти JS Heap, а Playwright проверяет 5 архетипов в Chromium, WebKit и Firefox."}),y.jsxs("div",{className:"zero-bug-layout-grid",children:[y.jsxs("div",{className:"test-terminal-card",children:[y.jsxs("div",{className:"terminal-top-bar",children:[y.jsxs("div",{className:"window-dots",children:[y.jsx("span",{className:"dot red"}),y.jsx("span",{className:"dot yellow"}),y.jsx("span",{className:"dot green"})]}),y.jsx("span",{className:"terminal-title",children:"studio-ci-runner — Quality Gate"}),y.jsxs("button",{className:"btn-run-tests",onClick:l,disabled:e,children:[y.jsx(yx,{size:12}),y.jsx("span",{children:e?"Тестирование...":"Запустить CI тест"})]})]}),y.jsx("div",{className:"terminal-screen-box",children:i.map((c,u)=>y.jsx("div",{className:`log-line ${c.includes("PASS")||c.includes("🏆")?"pass":""}`,children:c},u))})]}),y.jsxs("div",{className:"telemetry-card",children:[y.jsx("h3",{children:"⚡ Телеметрия производительности"}),y.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Живой мониторинг FPS и состояния кучи памяти прямо на этой странице."}),y.jsxs("div",{className:"telemetry-stats-row",children:[y.jsxs("div",{className:"tele-kpi-card",children:[y.jsx(Vw,{size:20,color:"var(--accent)"}),y.jsxs("div",{children:[y.jsxs("span",{className:"t-val",children:[s," FPS"]}),y.jsx("span",{className:"t-lbl",children:"Частота кадров"})]})]}),y.jsxs("div",{className:"tele-kpi-card",children:[y.jsx(Xw,{size:20,color:"var(--accent)"}),y.jsxs("div",{children:[y.jsxs("span",{className:"t-val",children:[o.usedJSHeapSizeMB," MB"]}),y.jsx("span",{className:"t-lbl",children:"JS Heap Memory"})]})]})]}),y.jsxs("div",{className:"memory-status-badge",children:[y.jsx(Pa,{size:15,color:"#00ff88"}),y.jsx("span",{children:o.status})]}),y.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"20px"},children:[y.jsx(vn,{size:15}),y.jsx("span",{children:"Скачать модуль тестирования (ZIP)"})]})]})]})]}),y.jsx("style",{children:`
        .zero-bug-layout-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .zero-bug-layout-grid { grid-template-columns: 1fr; }
        }
        .test-terminal-card, .telemetry-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
        }
        .terminal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .window-dots {
          display: flex;
          gap: 6px;
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        .terminal-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .btn-run-tests {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--accent);
          color: #000;
          font-weight: bold;
          font-size: 0.72rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .terminal-screen-box {
          background: #030406;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: #d1d5db;
          min-height: 220px;
          max-height: 280px;
          overflow-y: auto;
          line-height: 1.6;
        }
        .log-line.pass { color: #00ff88; }
        .telemetry-stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .tele-kpi-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .t-val { display: block; font-family: var(--font-mono); font-size: 1.3rem; font-weight: bold; color: var(--text-primary); }
        .t-lbl { font-size: 0.7rem; color: var(--text-secondary); }
        .memory-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          padding: 10px 14px;
          background: rgba(0, 255, 136, 0.08);
          border: 1px solid rgba(0, 255, 136, 0.25);
          border-radius: var(--radius-sm);
          color: #00ff88;
        }
      `})]})},i3=({onOpenDownload:n,onOpenOrder:e,onOpenVault:t})=>y.jsxs("footer",{className:"studio-footer-monolith",children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"footer-main-grid",children:[y.jsxs("div",{className:"footer-brand-col",children:[y.jsx("div",{className:"footer-logo-title",children:"STUDIO OS"}),y.jsx("p",{className:"footer-brand-desc",children:"Саморазвивающаяся производственная операционная система веб-студии нового поколения. Монолитные стандарты качества, кинематографичные 3D-заставки и Zero-Bug гарантия."}),y.jsx("div",{className:"footer-version-tag",children:"Version 2.0.0 • Production Ready"})]}),y.jsxs("div",{className:"footer-links-col",children:[y.jsx("h4",{children:"9 Стандартов Студии"}),y.jsxs("ul",{className:"footer-nav-list",children:[y.jsx("li",{children:y.jsx("a",{href:"#hero-intro",children:"01. 3D Интро & Three.js"})}),y.jsx("li",{children:y.jsx("a",{href:"#animations",children:"02. Кинематографичный скролл"})}),y.jsx("li",{children:y.jsx("a",{href:"#anti-slop",children:"03. Анти-слоп защита"})}),y.jsx("li",{children:y.jsx("a",{href:"#spacing-radar",children:"04. Контроль отступов"})}),y.jsx("li",{children:y.jsx("a",{href:"#mobile",children:"05. Mobile-Perfect 48px"})}),y.jsx("li",{children:y.jsx("a",{href:"#seo",children:"06. Сквозное SEO (Zod)"})}),y.jsx("li",{children:y.jsx("a",{href:"#archetypes",children:"07. 5 Дизайн-архетипов"})}),y.jsx("li",{children:y.jsx("a",{href:"#copywriting",children:"08. Инженерный копирайтинг"})}),y.jsx("li",{children:y.jsx("a",{href:"#zero-bug",children:"09. Zero-Bug пирамида тестов"})})]})]}),y.jsxs("div",{className:"footer-actions-col",children:[y.jsx("h4",{children:"Действия и Доступ"}),y.jsxs("div",{className:"footer-btns-group",children:[y.jsxs("button",{className:"btn-studio-primary",onClick:()=>{$e.playClick(600),e()},style:{width:"100%"},children:[y.jsx(bs,{size:16}),y.jsx("span",{children:"Заказать сайт"})]}),y.jsxs("button",{className:"btn-studio-secondary",onClick:()=>{$e.playClick(500),n()},style:{width:"100%"},children:[y.jsx(vn,{size:16}),y.jsx("span",{children:"Скачать системы (ZIP)"})]}),y.jsxs("button",{className:"btn-studio-secondary",onClick:()=>{$e.playClick(520),t()},style:{width:"100%"},children:[y.jsx(Fp,{size:16}),y.jsx("span",{children:"Загрузить ассеты с ПК"})]})]})]})]}),y.jsxs("div",{className:"footer-bottom-row",children:[y.jsx("span",{children:"© 2026 STUDIO OS • Все права защищены. Построено на стандартах Zero-Bug."}),y.jsxs("div",{className:"footer-badges-list",children:[y.jsx("span",{children:"60 FPS Certified"}),y.jsx("span",{children:"WCAG 2.2 AAA"}),y.jsx("span",{children:"100% Anti-Slop"})]})]})]}),y.jsx("style",{children:`
        .studio-footer-monolith {
          background: var(--bg-surface);
          border-top: var(--border-width) solid var(--border);
          padding: clamp(40px, 6vw, 70px) 0 30px;
          position: relative;
          z-index: 10;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: clamp(24px, 4vw, 48px);
          margin-bottom: 40px;
        }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr; gap: 30px; }
        }
        .footer-logo-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .footer-brand-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          max-width: 380px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .footer-version-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .footer-links-col h4, .footer-actions-col h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-primary);
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.08em;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-nav-list a {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-nav-list a:hover {
          color: var(--accent);
        }
        .footer-btns-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-bottom-row {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-badges-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-badges-list span {
          background: var(--bg-primary);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border);
          color: var(--accent);
        }
      `})]});function r3(){const[n,e]=Ie.useState("luxury-noir"),[t,i]=Ie.useState(0),[r,s]=Ie.useState(!1),[a,o]=Ie.useState(!1),[l,c]=Ie.useState(!1),[u,f]=Ie.useState(!1),[h,p]=Ie.useState(!1);Ie.useEffect(()=>{const x=()=>{const S=document.documentElement.scrollHeight-window.innerHeight,T=window.scrollY,C=S>0?Math.min(1,Math.max(0,T/S)):0;i(C)};return window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]);const v=x=>{$e.playClick(480),e(x),document.documentElement.setAttribute("data-archetype",x)},m=()=>{$e.playClick(560),f(x=>{const S=!x;return S?document.body.classList.add("spacing-radar-active"):document.body.classList.remove("spacing-radar-active"),S})},g=()=>{$e.playClick(500),s(!0)},d=()=>{$e.playClick(600),o(!0)},_=()=>{$e.playClick(520),c(!0)};return y.jsxs("div",{className:"studio-app-root",children:[y.jsx(FR,{scrollProgress:t,activeArchetype:n,bloom:!0,grain:!0,vignette:!0}),y.jsx(OR,{forcePlay:h,onIntroComplete:()=>p(!1)}),y.jsx(aM,{currentArchetype:n,onSelectArchetype:v,onOpenDownload:g,onOpenOrder:d,onOpenVault:_,onToggleSpacingOverlay:m,isSpacingActive:u}),y.jsxs("main",{className:"main-content-layer",children:[y.jsx(zR,{scrollProgress:t,onOpenDownload:g,onOpenOrder:d,onOpenVault:_,onSelectArchetype:v,currentArchetype:n}),y.jsxs("div",{className:"interactive-labs-wrap",children:[y.jsx(qR,{onDownload:g,onOpenOrder:d}),y.jsx($R,{isOverlayActive:u,onToggleOverlay:m,onDownload:g}),y.jsx(ZR,{onDownload:g}),y.jsx(KR,{onDownload:g}),y.jsx(e3,{onDownload:g}),y.jsx(n3,{onDownload:g})]})]}),y.jsx(i3,{onOpenDownload:g,onOpenOrder:d,onOpenVault:_}),y.jsx(oM,{currentArchetype:n,onSelectArchetype:v,onOpenDownload:g,onOpenOrder:d,onOpenVault:_,onReplayIntro:()=>p(!0)}),y.jsx(jR,{isOpen:r,onClose:()=>s(!1)}),y.jsx(VR,{isOpen:a,onClose:()=>o(!1)}),y.jsx(HR,{isOpen:l,onClose:()=>c(!1)}),y.jsx("style",{children:`
        .main-content-layer {
          position: relative;
          z-index: 10;
        }
        .interactive-labs-wrap {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
      `})]})}Jd.createRoot(document.getElementById("root")).render(y.jsx(A1.StrictMode,{children:y.jsx(r3,{})}));
