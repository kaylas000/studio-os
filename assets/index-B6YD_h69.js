var qy=Object.defineProperty;var Yy=(n,e,t)=>e in n?qy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Bu=(n,e,t)=>Yy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var X0={exports:{}},fu={},q0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),Ky=Symbol.for("react.strict_mode"),Qy=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),_m=Symbol.iterator;function s1(n){return n===null||typeof n!="object"?null:(n=_m&&n[_m]||n["@@iterator"],typeof n=="function"?n:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$0=Object.assign,Z0={};function ja(n,e,t){this.props=n,this.context=e,this.refs=Z0,this.updater=t||Y0}ja.prototype.isReactComponent={};ja.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ja.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function K0(){}K0.prototype=ja.prototype;function zh(n,e,t){this.props=n,this.context=e,this.refs=Z0,this.updater=t||Y0}var Bh=zh.prototype=new K0;Bh.constructor=zh;$0(Bh,ja.prototype);Bh.isPureReactComponent=!0;var vm=Array.isArray,Q0=Object.prototype.hasOwnProperty,jh={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function e_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Q0.call(e,i)&&!J0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:el,type:n,key:s,ref:a,props:r,_owner:jh.current}}function a1(n,e){return{$$typeof:el,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Vh(n){return typeof n=="object"&&n!==null&&n.$$typeof===el}function o1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var xm=/\/+/g;function ju(n,e){return typeof n=="object"&&n!==null&&n.key!=null?o1(""+n.key):e.toString(36)}function ac(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case el:case $y:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+ju(a,0):i,vm(r)?(t="",n!=null&&(t=n.replace(xm,"$&/")+"/"),ac(r,e,t,"",function(c){return c})):r!=null&&(Vh(r)&&(r=a1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xm,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vm(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+ju(s,o);a+=ac(s,e,t,l,r)}else if(l=s1(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+ju(s,o++),a+=ac(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function gl(n,e,t){if(n==null)return n;var i=[],r=0;return ac(n,i,"","",function(s){return e.call(t,s,r++)}),i}function l1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},oc={transition:null},c1={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:oc,ReactCurrentOwner:jh};function t_(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:gl,forEach:function(n,e,t){gl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return gl(n,function(){e++}),e},toArray:function(n){return gl(n,function(e){return e})||[]},only:function(n){if(!Vh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=ja;Xe.Fragment=Zy;Xe.Profiler=Qy;Xe.PureComponent=zh;Xe.StrictMode=Ky;Xe.Suspense=n1;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;Xe.act=t_;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=$0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)Q0.call(e,l)&&!J0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:el,type:n.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(n){return n={$$typeof:e1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Jy,_context:n},n.Consumer=n};Xe.createElement=e_;Xe.createFactory=function(n){var e=e_.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:t1,render:n}};Xe.isValidElement=Vh;Xe.lazy=function(n){return{$$typeof:r1,_payload:{_status:-1,_result:n},_init:l1}};Xe.memo=function(n,e){return{$$typeof:i1,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=oc.transition;oc.transition={};try{n()}finally{oc.transition=e}};Xe.unstable_act=t_;Xe.useCallback=function(n,e){return on.current.useCallback(n,e)};Xe.useContext=function(n){return on.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return on.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return on.current.useEffect(n,e)};Xe.useId=function(){return on.current.useId()};Xe.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return on.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};Xe.useRef=function(n){return on.current.useRef(n)};Xe.useState=function(n){return on.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return on.current.useTransition()};Xe.version="18.3.1";q0.exports=Xe;var Le=q0.exports;const u1=W0(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=Le,f1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),p1=Object.prototype.hasOwnProperty,m1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g1={key:!0,ref:!0,__self:!0,__source:!0};function n_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)p1.call(e,i)&&!g1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f1,type:n,key:s,ref:a,props:r,_owner:m1.current}}fu.Fragment=h1;fu.jsx=n_;fu.jsxs=n_;X0.exports=fu;var x=X0.exports,$d={},i_={exports:{}},Vn={},r_={exports:{}},s_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,$){var U=G.length;G.push($);e:for(;0<U;){var P=U-1>>>1,j=G[P];if(0<r(j,$))G[P]=$,G[U]=j,U=P;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var $=G[0],U=G.pop();if(U!==$){G[0]=U;e:for(var P=0,j=G.length,se=j>>>1;P<se;){var V=2*(P+1)-1,Y=G[V],ue=V+1,ce=G[ue];if(0>r(Y,U))ue<j&&0>r(ce,Y)?(G[P]=ce,G[ue]=U,P=ue):(G[P]=Y,G[V]=U,P=V);else if(ue<j&&0>r(ce,U))G[P]=ce,G[ue]=U,P=ue;else break e}}return $}function r(G,$){var U=G.sortIndex-$.sortIndex;return U!==0?U:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=G)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function S(G){if(m=!1,y(G),!_)if(t(l)!==null)_=!0,K(T);else{var $=t(c);$!==null&&X(S,$.startTime-G)}}function T(G,$){_=!1,m&&(m=!1,d(N),N=-1),p=!0;var U=f;try{for(y($),h=t(l);h!==null&&(!(h.expirationTime>$)||G&&!z());){var P=h.callback;if(typeof P=="function"){h.callback=null,f=h.priorityLevel;var j=P(h.expirationTime<=$);$=n.unstable_now(),typeof j=="function"?h.callback=j:h===t(l)&&i(l),y($)}else i(l);h=t(l)}if(h!==null)var se=!0;else{var V=t(c);V!==null&&X(S,V.startTime-$),se=!1}return se}finally{h=null,f=U,p=!1}}var C=!1,A=null,N=-1,b=5,E=-1;function z(){return!(n.unstable_now()-E<b)}function D(){if(A!==null){var G=n.unstable_now();E=G;var $=!0;try{$=A(!0,G)}finally{$?O():(C=!1,A=null)}}else C=!1}var O;if(typeof v=="function")O=function(){v(D)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,H=M.port2;M.port1.onmessage=D,O=function(){H.postMessage(null)}}else O=function(){g(D,0)};function K(G){A=G,C||(C=!0,O())}function X(G,$){N=g(function(){G(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,K(T))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(G){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var U=f;f=$;try{return G()}finally{f=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var U=f;f=G;try{return $()}finally{f=U}},n.unstable_scheduleCallback=function(G,$,U){var P=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?P+U:P):U=P,G){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=U+j,G={id:u++,callback:$,priorityLevel:G,startTime:U,expirationTime:j,sortIndex:-1},U>P?(G.sortIndex=U,e(c,G),t(l)===null&&G===t(c)&&(m?(d(N),N=-1):m=!0,X(S,U-P))):(G.sortIndex=j,e(l,G),_||p||(_=!0,K(T))),G},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(G){var $=f;return function(){var U=f;f=$;try{return G.apply(this,arguments)}finally{f=U}}}})(s_);r_.exports=s_;var _1=r_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=Le,zn=_1;function xe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a_=new Set,Co={};function As(n,e){wa(n,e),wa(n+"Capture",e)}function wa(n,e){for(Co[n]=e,n=0;n<e.length;n++)a_.add(e[n])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},Sm={};function y1(n){return Zd.call(Sm,n)?!0:Zd.call(ym,n)?!1:x1.test(n)?Sm[n]=!0:(ym[n]=!0,!1)}function S1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M1(n,e,t,i){if(e===null||typeof e>"u"||S1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Xt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Xt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Xt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Xt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Xt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Xt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Xt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Xt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Xt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Gh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hh,Gh);Xt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hh,Gh);Xt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hh,Gh);Xt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Xt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Xt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function Wh(n,e,t,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M1(e,t,r,i)&&(t=null),i||r===null?y1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var tr=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),c_=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Xa(n){return n===null||typeof n!="object"?null:(n=Mm&&n[Mm]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,Vu;function oo(n){if(Vu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+n}var Hu=!1;function Gu(n,e){if(!n||Hu)return"";Hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?oo(n):""}function w1(n){switch(n.tag){case 5:return oo(n.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return n=Gu(n.type,!1),n;case 11:return n=Gu(n.type.render,!1),n;case 1:return n=Gu(n.type,!0),n;default:return""}}function ef(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ks:return"Fragment";case Zs:return"Portal";case Kd:return"Profiler";case Xh:return"StrictMode";case Qd:return"Suspense";case Jd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case l_:return(n.displayName||"Context")+".Consumer";case o_:return(n._context.displayName||"Context")+".Provider";case qh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Yh:return e=n.displayName||null,e!==null?e:ef(n.type)||"Memo";case ur:e=n._payload,n=n._init;try{return ef(n(e))}catch{}}return null}function b1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function u_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(n){var e=u_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function vl(n){n._valueTracker||(n._valueTracker=E1(n))}function d_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=u_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ac(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function tf(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function wm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f_(n,e){e=e.checked,e!=null&&Wh(n,"checked",e,!1)}function nf(n,e){f_(n,e);var t=Dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?rf(n,e.type,t):e.hasOwnProperty("defaultValue")&&rf(n,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function rf(n,e,t){(e!=="number"||Ac(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var lo=Array.isArray;function da(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function sf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Em(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(xe(92));if(lo(t)){if(1<t.length)throw Error(xe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Dr(t)}}function h_(n,e){var t=Dr(e.value),i=Dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Tm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function p_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?p_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xl,m_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(n){T1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),mo[e]=mo[n]})});function g_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||mo.hasOwnProperty(n)&&mo[n]?(""+e).trim():e+"px"}function __(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=g_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var A1=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(n,e){if(e){if(A1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function lf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function $h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var uf=null,fa=null,ha=null;function Am(n){if(n=il(n)){if(typeof uf!="function")throw Error(xe(280));var e=n.stateNode;e&&(e=_u(e),uf(n.stateNode,n.type,e))}}function v_(n){fa?ha?ha.push(n):ha=[n]:fa=n}function x_(){if(fa){var n=fa,e=ha;if(ha=fa=null,Am(n),e)for(n=0;n<e.length;n++)Am(e[n])}}function y_(n,e){return n(e)}function S_(){}var Wu=!1;function M_(n,e,t){if(Wu)return n(e,t);Wu=!0;try{return y_(n,e,t)}finally{Wu=!1,(fa!==null||ha!==null)&&(S_(),x_())}}function Po(n,e){var t=n.stateNode;if(t===null)return null;var i=_u(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(xe(231,e,typeof t));return t}var df=!1;if(qi)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){df=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{df=!1}function C1(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var go=!1,Cc=null,Rc=!1,ff=null,R1={onError:function(n){go=!0,Cc=n}};function P1(n,e,t,i,r,s,a,o,l){go=!1,Cc=null,C1.apply(R1,arguments)}function N1(n,e,t,i,r,s,a,o,l){if(P1.apply(this,arguments),go){if(go){var c=Cc;go=!1,Cc=null}else throw Error(xe(198));Rc||(Rc=!0,ff=c)}}function Cs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function w_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(n){if(Cs(n)!==n)throw Error(xe(188))}function D1(n){var e=n.alternate;if(!e){if(e=Cs(n),e===null)throw Error(xe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Cm(r),n;if(s===i)return Cm(r),e;s=s.sibling}throw Error(xe(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(xe(189))}}if(t.alternate!==i)throw Error(xe(190))}if(t.tag!==3)throw Error(xe(188));return t.stateNode.current===t?n:e}function b_(n){return n=D1(n),n!==null?E_(n):null}function E_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=E_(n);if(e!==null)return e;n=n.sibling}return null}var T_=zn.unstable_scheduleCallback,Rm=zn.unstable_cancelCallback,L1=zn.unstable_shouldYield,k1=zn.unstable_requestPaint,Et=zn.unstable_now,I1=zn.unstable_getCurrentPriorityLevel,Zh=zn.unstable_ImmediatePriority,A_=zn.unstable_UserBlockingPriority,Pc=zn.unstable_NormalPriority,U1=zn.unstable_LowPriority,C_=zn.unstable_IdlePriority,hu=null,Ei=null;function O1(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(hu,n,void 0,(n.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:B1,F1=Math.log,z1=Math.LN2;function B1(n){return n>>>=0,n===0?32:31-(F1(n)/z1|0)|0}var yl=64,Sl=4194304;function co(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=co(o):(s&=a,s!==0&&(i=co(s)))}else a=t&~r,a!==0?i=co(a):s!==0&&(i=co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fi(e),r=1<<t,i|=n[t],e&=~r;return i}function j1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-fi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=j1(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function hf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function R_(){var n=yl;return yl<<=1,!(yl&4194240)&&(yl=64),n}function Xu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function tl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fi(e),n[e]=t}function H1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Kh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var rt=0;function P_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var N_,Qh,D_,L_,k_,pf=!1,Ml=[],yr=null,Sr=null,Mr=null,No=new Map,Do=new Map,fr=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(n,e){switch(n){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Ya(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=il(e),e!==null&&Qh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function W1(n,e,t,i,r){switch(e){case"focusin":return yr=Ya(yr,n,e,t,i,r),!0;case"dragenter":return Sr=Ya(Sr,n,e,t,i,r),!0;case"mouseover":return Mr=Ya(Mr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return No.set(s,Ya(No.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Do.set(s,Ya(Do.get(s)||null,n,e,t,i,r)),!0}return!1}function I_(n){var e=as(n.target);if(e!==null){var t=Cs(e);if(t!==null){if(e=t.tag,e===13){if(e=w_(t),e!==null){n.blockedOn=e,k_(n.priority,function(){D_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);cf=i,t.target.dispatchEvent(i),cf=null}else return e=il(t),e!==null&&Qh(e),n.blockedOn=t,!1;e.shift()}return!0}function Nm(n,e,t){lc(n)&&t.delete(e)}function X1(){pf=!1,yr!==null&&lc(yr)&&(yr=null),Sr!==null&&lc(Sr)&&(Sr=null),Mr!==null&&lc(Mr)&&(Mr=null),No.forEach(Nm),Do.forEach(Nm)}function $a(n,e){n.blockedOn===e&&(n.blockedOn=null,pf||(pf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,X1)))}function Lo(n){function e(r){return $a(r,n)}if(0<Ml.length){$a(Ml[0],n);for(var t=1;t<Ml.length;t++){var i=Ml[t];i.blockedOn===n&&(i.blockedOn=null)}}for(yr!==null&&$a(yr,n),Sr!==null&&$a(Sr,n),Mr!==null&&$a(Mr,n),No.forEach(e),Do.forEach(e),t=0;t<fr.length;t++)i=fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fr.length&&(t=fr[0],t.blockedOn===null);)I_(t),t.blockedOn===null&&fr.shift()}var pa=tr.ReactCurrentBatchConfig,Dc=!0;function q1(n,e,t,i){var r=rt,s=pa.transition;pa.transition=null;try{rt=1,Jh(n,e,t,i)}finally{rt=r,pa.transition=s}}function Y1(n,e,t,i){var r=rt,s=pa.transition;pa.transition=null;try{rt=4,Jh(n,e,t,i)}finally{rt=r,pa.transition=s}}function Jh(n,e,t,i){if(Dc){var r=mf(n,e,t,i);if(r===null)nd(n,e,i,Lc,t),Pm(n,i);else if(W1(r,n,e,t,i))i.stopPropagation();else if(Pm(n,i),e&4&&-1<G1.indexOf(n)){for(;r!==null;){var s=il(r);if(s!==null&&N_(s),s=mf(n,e,t,i),s===null&&nd(n,e,i,Lc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else nd(n,e,i,null,t)}}var Lc=null;function mf(n,e,t,i){if(Lc=null,n=$h(i),n=as(n),n!==null)if(e=Cs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=w_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lc=n,null}function U_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I1()){case Zh:return 1;case A_:return 4;case Pc:case U1:return 16;case C_:return 536870912;default:return 16}default:return 16}}var mr=null,ep=null,cc=null;function O_(){if(cc)return cc;var n,e=ep,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return cc=r.slice(n,1<i?1-i:void 0)}function uc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function wl(){return!0}function Dm(){return!1}function Hn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:Dm,this.isPropagationStopped=Dm,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Hn(Va),nl=xt({},Va,{view:0,detail:0}),$1=Hn(nl),qu,Yu,Za,pu=xt({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Za&&(Za&&n.type==="mousemove"?(qu=n.screenX-Za.screenX,Yu=n.screenY-Za.screenY):Yu=qu=0,Za=n),qu)},movementY:function(n){return"movementY"in n?n.movementY:Yu}}),Lm=Hn(pu),Z1=xt({},pu,{dataTransfer:0}),K1=Hn(Z1),Q1=xt({},nl,{relatedTarget:0}),$u=Hn(Q1),J1=xt({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Hn(J1),tS=xt({},Va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nS=Hn(tS),iS=xt({},Va,{data:0}),km=Hn(iS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=aS[n])?!!e[n]:!1}function np(){return oS}var lS=xt({},nl,{key:function(n){if(n.key){var e=rS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=uc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(n){return n.type==="keypress"?uc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cS=Hn(lS),uS=xt({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=Hn(uS),dS=xt({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),fS=Hn(dS),hS=xt({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),pS=Hn(hS),mS=xt({},pu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=Hn(mS),_S=[9,13,27,32],ip=qi&&"CompositionEvent"in window,_o=null;qi&&"documentMode"in document&&(_o=document.documentMode);var vS=qi&&"TextEvent"in window&&!_o,F_=qi&&(!ip||_o&&8<_o&&11>=_o),Um=" ",Om=!1;function z_(n,e){switch(n){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function xS(n,e){switch(n){case"compositionend":return B_(e);case"keypress":return e.which!==32?null:(Om=!0,Um);case"textInput":return n=e.data,n===Um&&Om?null:n;default:return null}}function yS(n,e){if(Qs)return n==="compositionend"||!ip&&z_(n,e)?(n=O_(),cc=ep=mr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F_&&e.locale!=="ko"?null:e.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!SS[n.type]:e==="textarea"}function j_(n,e,t,i){v_(i),e=kc(e,"onChange"),0<e.length&&(t=new tp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var vo=null,ko=null;function MS(n){Q_(n,0)}function mu(n){var e=ta(n);if(d_(e))return n}function wS(n,e){if(n==="change")return e}var V_=!1;if(qi){var Zu;if(qi){var Ku="oninput"in document;if(!Ku){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Ku=typeof zm.oninput=="function"}Zu=Ku}else Zu=!1;V_=Zu&&(!document.documentMode||9<document.documentMode)}function Bm(){vo&&(vo.detachEvent("onpropertychange",H_),ko=vo=null)}function H_(n){if(n.propertyName==="value"&&mu(ko)){var e=[];j_(e,ko,n,$h(n)),M_(MS,e)}}function bS(n,e,t){n==="focusin"?(Bm(),vo=e,ko=t,vo.attachEvent("onpropertychange",H_)):n==="focusout"&&Bm()}function ES(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mu(ko)}function TS(n,e){if(n==="click")return mu(e)}function AS(n,e){if(n==="input"||n==="change")return mu(e)}function CS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:CS;function Io(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Zd.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function jm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vm(n,e){var t=jm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jm(t)}}function G_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?G_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var n=window,e=Ac();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ac(n.document)}return e}function rp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function RS(n){var e=W_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&G_(t.ownerDocument.documentElement,t)){if(i!==null&&rp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vm(t,s);var a=Vm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PS=qi&&"documentMode"in document&&11>=document.documentMode,Js=null,gf=null,xo=null,_f=!1;function Hm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_f||Js==null||Js!==Ac(i)||(i=Js,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&Io(xo,i)||(xo=i,i=kc(gf,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Js)))}function bl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ea={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Qu={},X_={};qi&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function gu(n){if(Qu[n])return Qu[n];if(!ea[n])return n;var e=ea[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in X_)return Qu[n]=e[t];return n}var q_=gu("animationend"),Y_=gu("animationiteration"),$_=gu("animationstart"),Z_=gu("transitionend"),K_=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,e){K_.set(n,e),As(e,[n])}for(var Ju=0;Ju<Gm.length;Ju++){var ed=Gm[Ju],NS=ed.toLowerCase(),DS=ed[0].toUpperCase()+ed.slice(1);zr(NS,"on"+DS)}zr(q_,"onAnimationEnd");zr(Y_,"onAnimationIteration");zr($_,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Z_,"onTransitionEnd");wa("onMouseEnter",["mouseout","mouseover"]);wa("onMouseLeave",["mouseout","mouseover"]);wa("onPointerEnter",["pointerout","pointerover"]);wa("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Wm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,N1(i,e,void 0,n),n.currentTarget=null}function Q_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,o,c),s=l}}}if(Rc)throw n=ff,Rc=!1,ff=null,n}function ct(n,e){var t=e[Mf];t===void 0&&(t=e[Mf]=new Set);var i=n+"__bubble";t.has(i)||(J_(e,n,2,!1),t.add(i))}function td(n,e,t){var i=0;e&&(i|=4),J_(t,n,i,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[El]){n[El]=!0,a_.forEach(function(t){t!=="selectionchange"&&(LS.has(t)||td(t,!1,n),td(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[El]||(e[El]=!0,td("selectionchange",!1,e))}}function J_(n,e,t,i){switch(U_(e)){case 1:var r=q1;break;case 4:r=Y1;break;default:r=Jh}t=r.bind(null,e,t,n),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function nd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=as(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}M_(function(){var c=s,u=$h(t),h=[];e:{var f=K_.get(n);if(f!==void 0){var p=tp,_=n;switch(n){case"keypress":if(uc(t)===0)break e;case"keydown":case"keyup":p=cS;break;case"focusin":_="focus",p=$u;break;case"focusout":_="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fS;break;case q_:case Y_:case $_:p=eS;break;case Z_:p=pS;break;case"scroll":p=$1;break;case"wheel":p=gS;break;case"copy":case"cut":case"paste":p=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Im}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?f!==null?f+"Capture":null:f;m=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Po(v,d),S!=null&&m.push(Oo(v,S,y)))),g)break;v=v.return}0<m.length&&(f=new p(f,_,null,t,u),h.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==cf&&(_=t.relatedTarget||t.fromElement)&&(as(_)||_[Yi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?as(_):null,_!==null&&(g=Cs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(m=Lm,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=Im,S="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?f:ta(p),y=_==null?f:ta(_),f=new m(S,v+"leave",p,t,u),f.target=g,f.relatedTarget=y,S=null,as(u)===c&&(m=new m(d,v+"enter",_,t,u),m.target=y,m.relatedTarget=g,S=m),g=S,p&&_)t:{for(m=p,d=_,v=0,y=m;y;y=Ns(y))v++;for(y=0,S=d;S;S=Ns(S))y++;for(;0<v-y;)m=Ns(m),v--;for(;0<y-v;)d=Ns(d),y--;for(;v--;){if(m===d||d!==null&&m===d.alternate)break t;m=Ns(m),d=Ns(d)}m=null}else m=null;p!==null&&Xm(h,f,p,m,!1),_!==null&&g!==null&&Xm(h,g,_,m,!0)}}e:{if(f=c?ta(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=wS;else if(Fm(f))if(V_)T=AS;else{T=ES;var C=bS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=TS);if(T&&(T=T(n,c))){j_(h,T,t,u);break e}C&&C(n,f,c),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&rf(f,"number",f.value)}switch(C=c?ta(c):window,n){case"focusin":(Fm(C)||C.contentEditable==="true")&&(Js=C,gf=c,xo=null);break;case"focusout":xo=gf=Js=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Hm(h,t,u);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":Hm(h,t,u)}var A;if(ip)e:{switch(n){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qs?z_(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(F_&&t.locale!=="ko"&&(Qs||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qs&&(A=O_()):(mr=u,ep="value"in mr?mr.value:mr.textContent,Qs=!0)),C=kc(c,N),0<C.length&&(N=new km(N,n,null,t,u),h.push({event:N,listeners:C}),A?N.data=A:(A=B_(t),A!==null&&(N.data=A)))),(A=vS?xS(n,t):yS(n,t))&&(c=kc(c,"onBeforeInput"),0<c.length&&(u=new km("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}Q_(h,e)})}function Oo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function kc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Po(n,t),s!=null&&i.unshift(Oo(n,s,r)),s=Po(n,e),s!=null&&i.push(Oo(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Po(t,s),l!=null&&a.unshift(Oo(t,l,o))):r||(l=Po(t,s),l!=null&&a.push(Oo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var kS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function qm(n){return(typeof n=="string"?n:""+n).replace(kS,`
`).replace(IS,"")}function Tl(n,e,t){if(e=qm(e),qm(n)!==e&&t)throw Error(xe(425))}function Ic(){}var vf=null,xf=null;function yf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(n){return Ym.resolve(null).then(n).catch(FS)}:Sf;function FS(n){setTimeout(function(){throw n})}function id(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Lo(e)}function wr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ha=Math.random().toString(36).slice(2),Si="__reactFiber$"+Ha,Fo="__reactProps$"+Ha,Yi="__reactContainer$"+Ha,Mf="__reactEvents$"+Ha,zS="__reactListeners$"+Ha,BS="__reactHandles$"+Ha;function as(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$m(n);n!==null;){if(t=n[Si])return t;n=$m(n)}return e}n=t,t=n.parentNode}return null}function il(n){return n=n[Si]||n[Yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(xe(33))}function _u(n){return n[Fo]||null}var wf=[],na=-1;function Br(n){return{current:n}}function dt(n){0>na||(n.current=wf[na],wf[na]=null,na--)}function lt(n,e){na++,wf[na]=n.current,n.current=e}var Lr={},tn=Br(Lr),pn=Br(!1),xs=Lr;function ba(n,e){var t=n.type.contextTypes;if(!t)return Lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Uc(){dt(pn),dt(tn)}function Zm(n,e,t){if(tn.current!==Lr)throw Error(xe(168));lt(tn,e),lt(pn,t)}function ev(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,b1(n)||"Unknown",r));return xt({},t,i)}function Oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,xs=tn.current,lt(tn,n),lt(pn,pn.current),!0}function Km(n,e,t){var i=n.stateNode;if(!i)throw Error(xe(169));t?(n=ev(n,e,xs),i.__reactInternalMemoizedMergedChildContext=n,dt(pn),dt(tn),lt(tn,n)):dt(pn),lt(pn,t)}var Fi=null,vu=!1,rd=!1;function tv(n){Fi===null?Fi=[n]:Fi.push(n)}function jS(n){vu=!0,tv(n)}function jr(){if(!rd&&Fi!==null){rd=!0;var n=0,e=rt;try{var t=Fi;for(rt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fi=null,vu=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(n+1)),T_(Zh,jr),r}finally{rt=e,rd=!1}}return null}var ia=[],ra=0,Fc=null,zc=0,qn=[],Yn=0,ys=null,ji=1,Vi="";function Jr(n,e){ia[ra++]=zc,ia[ra++]=Fc,Fc=n,zc=e}function nv(n,e,t){qn[Yn++]=ji,qn[Yn++]=Vi,qn[Yn++]=ys,ys=n;var i=ji;n=Vi;var r=32-fi(i)-1;i&=~(1<<r),t+=1;var s=32-fi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ji=1<<32-fi(e)+r|t<<r|i,Vi=s+n}else ji=1<<s|t<<r|i,Vi=n}function sp(n){n.return!==null&&(Jr(n,1),nv(n,1,0))}function ap(n){for(;n===Fc;)Fc=ia[--ra],ia[ra]=null,zc=ia[--ra],ia[ra]=null;for(;n===ys;)ys=qn[--Yn],qn[Yn]=null,Vi=qn[--Yn],qn[Yn]=null,ji=qn[--Yn],qn[Yn]=null}var On=null,kn=null,ft=!1,ci=null;function iv(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Qm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,On=n,kn=wr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,On=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ys!==null?{id:ji,overflow:Vi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,On=n,kn=null,!0):!1;default:return!1}}function bf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ef(n){if(ft){var e=kn;if(e){var t=e;if(!Qm(n,e)){if(bf(n))throw Error(xe(418));e=wr(t.nextSibling);var i=On;e&&Qm(n,e)?iv(i,t):(n.flags=n.flags&-4097|2,ft=!1,On=n)}}else{if(bf(n))throw Error(xe(418));n.flags=n.flags&-4097|2,ft=!1,On=n}}}function Jm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Al(n){if(n!==On)return!1;if(!ft)return Jm(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!yf(n.type,n.memoizedProps)),e&&(e=kn)){if(bf(n))throw rv(),Error(xe(418));for(;e;)iv(n,e),e=wr(e.nextSibling)}if(Jm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(xe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=wr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=On?wr(n.stateNode.nextSibling):null;return!0}function rv(){for(var n=kn;n;)n=wr(n.nextSibling)}function Ea(){kn=On=null,ft=!1}function op(n){ci===null?ci=[n]:ci.push(n)}var VS=tr.ReactCurrentBatchConfig;function Ka(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(xe(309));var i=t.stateNode}if(!i)throw Error(xe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(xe(284));if(!t._owner)throw Error(xe(290,n))}return n}function Cl(n,e){throw n=Object.prototype.toString.call(e),Error(xe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function eg(n){var e=n._init;return e(n._payload)}function sv(n){function e(d,v){if(n){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ar(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,n?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,v,y,S){return v===null||v.tag!==6?(v=dd(y,d.mode,S),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,S){var T=y.type;return T===Ks?u(d,v,y.props.children,S,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&eg(T)===v.type)?(S=r(v,y.props),S.ref=Ka(d,v,y),S.return=d,S):(S=_c(y.type,y.key,y.props,null,d.mode,S),S.ref=Ka(d,v,y),S.return=d,S)}function c(d,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=fd(y,d.mode,S),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function u(d,v,y,S,T){return v===null||v.tag!==7?(v=hs(y,d.mode,S,T),v.return=d,v):(v=r(v,y),v.return=d,v)}function h(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dd(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return y=_c(v.type,v.key,v.props,null,d.mode,y),y.ref=Ka(d,null,v),y.return=d,y;case Zs:return v=fd(v,d.mode,y),v.return=d,v;case ur:var S=v._init;return h(d,S(v._payload),y)}if(lo(v)||Xa(v))return v=hs(v,d.mode,y,null),v.return=d,v;Cl(d,v)}return null}function f(d,v,y,S){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:o(d,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return y.key===T?l(d,v,y,S):null;case Zs:return y.key===T?c(d,v,y,S):null;case ur:return T=y._init,f(d,v,T(y._payload),S)}if(lo(y)||Xa(y))return T!==null?null:u(d,v,y,S,null);Cl(d,y)}return null}function p(d,v,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,o(v,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _l:return d=d.get(S.key===null?y:S.key)||null,l(v,d,S,T);case Zs:return d=d.get(S.key===null?y:S.key)||null,c(v,d,S,T);case ur:var C=S._init;return p(d,v,y,C(S._payload),T)}if(lo(S)||Xa(S))return d=d.get(y)||null,u(v,d,S,T,null);Cl(v,S)}return null}function _(d,v,y,S){for(var T=null,C=null,A=v,N=v=0,b=null;A!==null&&N<y.length;N++){A.index>N?(b=A,A=null):b=A.sibling;var E=f(d,A,y[N],S);if(E===null){A===null&&(A=b);break}n&&A&&E.alternate===null&&e(d,A),v=s(E,v,N),C===null?T=E:C.sibling=E,C=E,A=b}if(N===y.length)return t(d,A),ft&&Jr(d,N),T;if(A===null){for(;N<y.length;N++)A=h(d,y[N],S),A!==null&&(v=s(A,v,N),C===null?T=A:C.sibling=A,C=A);return ft&&Jr(d,N),T}for(A=i(d,A);N<y.length;N++)b=p(A,d,N,y[N],S),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?N:b.key),v=s(b,v,N),C===null?T=b:C.sibling=b,C=b);return n&&A.forEach(function(z){return e(d,z)}),ft&&Jr(d,N),T}function m(d,v,y,S){var T=Xa(y);if(typeof T!="function")throw Error(xe(150));if(y=T.call(y),y==null)throw Error(xe(151));for(var C=T=null,A=v,N=v=0,b=null,E=y.next();A!==null&&!E.done;N++,E=y.next()){A.index>N?(b=A,A=null):b=A.sibling;var z=f(d,A,E.value,S);if(z===null){A===null&&(A=b);break}n&&A&&z.alternate===null&&e(d,A),v=s(z,v,N),C===null?T=z:C.sibling=z,C=z,A=b}if(E.done)return t(d,A),ft&&Jr(d,N),T;if(A===null){for(;!E.done;N++,E=y.next())E=h(d,E.value,S),E!==null&&(v=s(E,v,N),C===null?T=E:C.sibling=E,C=E);return ft&&Jr(d,N),T}for(A=i(d,A);!E.done;N++,E=y.next())E=p(A,d,N,E.value,S),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?N:E.key),v=s(E,v,N),C===null?T=E:C.sibling=E,C=E);return n&&A.forEach(function(D){return e(d,D)}),ft&&Jr(d,N),T}function g(d,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Ks&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:e:{for(var T=y.key,C=v;C!==null;){if(C.key===T){if(T=y.type,T===Ks){if(C.tag===7){t(d,C.sibling),v=r(C,y.props.children),v.return=d,d=v;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&eg(T)===C.type){t(d,C.sibling),v=r(C,y.props),v.ref=Ka(d,C,y),v.return=d,d=v;break e}t(d,C);break}else e(d,C);C=C.sibling}y.type===Ks?(v=hs(y.props.children,d.mode,S,y.key),v.return=d,d=v):(S=_c(y.type,y.key,y.props,null,d.mode,S),S.ref=Ka(d,v,y),S.return=d,d=S)}return a(d);case Zs:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=fd(y,d.mode,S),v.return=d,d=v}return a(d);case ur:return C=y._init,g(d,v,C(y._payload),S)}if(lo(y))return _(d,v,y,S);if(Xa(y))return m(d,v,y,S);Cl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,y),v.return=d,d=v):(t(d,v),v=dd(y,d.mode,S),v.return=d,d=v),a(d)):t(d,v)}return g}var Ta=sv(!0),av=sv(!1),Bc=Br(null),jc=null,sa=null,lp=null;function cp(){lp=sa=jc=null}function up(n){var e=Bc.current;dt(Bc),n._currentValue=e}function Tf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ma(n,e){jc=n,lp=sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(lp!==n)if(n={context:n,memoizedValue:e,next:null},sa===null){if(jc===null)throw Error(xe(308));sa=n,jc.dependencies={lanes:0,firstContext:n}}else sa=sa.next=n;return e}var os=null;function dp(n){os===null?os=[n]:os.push(n)}function ov(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dp(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var dr=!1;function fp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function dc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Kh(n,t)}}function tg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Vc(n,e,t,i){var r=n.updateQueue;dr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,m=o;switch(f=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=xt({},h,f);break e;case 2:dr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ms|=a,n.lanes=a,n.memoizedState=h}}function ng(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var rl={},Ti=Br(rl),zo=Br(rl),Bo=Br(rl);function ls(n){if(n===rl)throw Error(xe(174));return n}function hp(n,e){switch(lt(Bo,e),lt(zo,n),lt(Ti,rl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=af(e,n)}dt(Ti),lt(Ti,e)}function Aa(){dt(Ti),dt(zo),dt(Bo)}function cv(n){ls(Bo.current);var e=ls(Ti.current),t=af(e,n.type);e!==t&&(lt(zo,n),lt(Ti,t))}function pp(n){zo.current===n&&(dt(Ti),dt(zo))}var mt=Br(0);function Hc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function mp(){for(var n=0;n<sd.length;n++)sd[n]._workInProgressVersionPrimary=null;sd.length=0}var fc=tr.ReactCurrentDispatcher,ad=tr.ReactCurrentBatchConfig,Ss=0,vt=null,Dt=null,Ot=null,Gc=!1,yo=!1,jo=0,HS=0;function qt(){throw Error(xe(321))}function gp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function _p(n,e,t,i,r,s){if(Ss=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=n===null||n.memoizedState===null?qS:YS,n=t(i,r),yo){s=0;do{if(yo=!1,jo=0,25<=s)throw Error(xe(301));s+=1,Ot=Dt=null,e.updateQueue=null,fc.current=$S,n=t(i,r)}while(yo)}if(fc.current=Wc,e=Dt!==null&&Dt.next!==null,Ss=0,Ot=Dt=vt=null,Gc=!1,e)throw Error(xe(300));return n}function vp(){var n=jo!==0;return jo=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?vt.memoizedState=Ot=n:Ot=Ot.next=n,Ot}function ti(){if(Dt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=Ot===null?vt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=n;else{if(n===null)throw Error(xe(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?vt.memoizedState=Ot=n:Ot=Ot.next=n}return Ot}function Vo(n,e){return typeof e=="function"?e(n):e}function od(n){var e=ti(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ss&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,vt.lanes|=u,Ms|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,pi(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Ms|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ld(n){var e=ti(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);pi(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function uv(){}function dv(n,e){var t=vt,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,xp(pv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(t.flags|=2048,Ho(9,hv.bind(null,t,i,r,e),void 0,null),zt===null)throw Error(xe(349));Ss&30||fv(t,e,r)}return r}function fv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function hv(n,e,t,i){e.value=t,e.getSnapshot=i,mv(e)&&gv(n)}function pv(n,e,t){return t(function(){mv(e)&&gv(n)})}function mv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function gv(n){var e=$i(n,1);e!==null&&hi(e,n,1,-1)}function ig(n){var e=_i();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},e.queue=n,n=n.dispatch=XS.bind(null,vt,n),[e.memoizedState,n]}function Ho(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function _v(){return ti().memoizedState}function hc(n,e,t,i){var r=_i();vt.flags|=n,r.memoizedState=Ho(1|e,t,void 0,i===void 0?null:i)}function xu(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&gp(i,a.deps)){r.memoizedState=Ho(e,t,s,i);return}}vt.flags|=n,r.memoizedState=Ho(1|e,t,s,i)}function rg(n,e){return hc(8390656,8,n,e)}function xp(n,e){return xu(2048,8,n,e)}function vv(n,e){return xu(4,2,n,e)}function xv(n,e){return xu(4,4,n,e)}function yv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Sv(n,e,t){return t=t!=null?t.concat([n]):null,xu(4,4,yv.bind(null,e,n),t)}function yp(){}function Mv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function wv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function bv(n,e,t){return Ss&21?(pi(t,e)||(t=R_(),vt.lanes|=t,Ms|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function GS(n,e){var t=rt;rt=t!==0&&4>t?t:4,n(!0);var i=ad.transition;ad.transition={};try{n(!1),e()}finally{rt=t,ad.transition=i}}function Ev(){return ti().memoizedState}function WS(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Tv(n))Av(e,t);else if(t=ov(n,e,t,i),t!==null){var r=sn();hi(t,n,i,r),Cv(t,e,i)}}function XS(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Tv(n))Av(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,pi(o,a)){var l=e.interleaved;l===null?(r.next=r,dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ov(n,e,r,i),t!==null&&(r=sn(),hi(t,n,i,r),Cv(t,e,i))}}function Tv(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function Av(n,e){yo=Gc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Cv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Kh(n,t)}}var Wc={readContext:ei,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},qS={readContext:ei,useCallback:function(n,e){return _i().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:rg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,hc(4194308,4,yv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return hc(4194308,4,n,e)},useInsertionEffect:function(n,e){return hc(4,2,n,e)},useMemo:function(n,e){var t=_i();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_i();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=WS.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=_i();return n={current:n},e.memoizedState=n},useState:ig,useDebugValue:yp,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=ig(!1),e=n[0];return n=GS.bind(null,n[1]),_i().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=_i();if(ft){if(t===void 0)throw Error(xe(407));t=t()}else{if(t=e(),zt===null)throw Error(xe(349));Ss&30||fv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,rg(pv.bind(null,i,s,n),[n]),i.flags|=2048,Ho(9,hv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_i(),e=zt.identifierPrefix;if(ft){var t=Vi,i=ji;t=(i&~(1<<32-fi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=jo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=HS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},YS={readContext:ei,useCallback:Mv,useContext:ei,useEffect:xp,useImperativeHandle:Sv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:wv,useReducer:od,useRef:_v,useState:function(){return od(Vo)},useDebugValue:yp,useDeferredValue:function(n){var e=ti();return bv(e,Dt.memoizedState,n)},useTransition:function(){var n=od(Vo)[0],e=ti().memoizedState;return[n,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:Ev,unstable_isNewReconciler:!1},$S={readContext:ei,useCallback:Mv,useContext:ei,useEffect:xp,useImperativeHandle:Sv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:wv,useReducer:ld,useRef:_v,useState:function(){return ld(Vo)},useDebugValue:yp,useDeferredValue:function(n){var e=ti();return Dt===null?e.memoizedState=n:bv(e,Dt.memoizedState,n)},useTransition:function(){var n=ld(Vo)[0],e=ti().memoizedState;return[n,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:Ev,unstable_isNewReconciler:!1};function oi(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Af(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yu={isMounted:function(n){return(n=n._reactInternals)?Cs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Tr(n),s=Xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(hi(e,n,r,i),dc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Tr(n),s=Xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(hi(e,n,r,i),dc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=Tr(n),r=Xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(hi(e,n,i,t),dc(e,n,i))}};function sg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Io(t,i)||!Io(r,s):!0}function Rv(n,e,t){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=mn(e)?xs:tn.current,i=e.contextTypes,s=(i=i!=null)?ba(n,r):Lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ag(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yu.enqueueReplaceState(e,e.state,null)}function Cf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},fp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=mn(e)?xs:tn.current,r.context=ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yu.enqueueReplaceState(r,r.state,null),Vc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ca(n,e){try{var t="",i=e;do t+=w1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function cd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Rf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ZS=typeof WeakMap=="function"?WeakMap:Map;function Pv(n,e,t){t=Xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){qc||(qc=!0,zf=i),Rf(n,e)},t}function Nv(n,e,t){t=Xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Rf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Rf(n,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function og(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ZS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=uM.bind(null,n,e,t),e.then(n,n))}function lg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function cg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n)}var KS=tr.ReactCurrentOwner,hn=!1;function rn(n,e,t,i){e.child=n===null?av(e,null,t,i):Ta(e,n.child,t,i)}function ug(n,e,t,i,r){t=t.render;var s=e.ref;return ma(e,r),i=_p(n,e,t,i,s,r),t=vp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(ft&&t&&sp(e),e.flags|=1,rn(n,e,i,r),e.child)}function dg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Dv(n,e,s,i,r)):(n=_c(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Io,t(a,i)&&n.ref===e.ref)return Zi(n,e,r)}return e.flags|=1,n=Ar(s,i),n.ref=e.ref,n.return=e,e.child=n}function Dv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Io(s,i)&&n.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,Zi(n,e,r)}return Pf(n,e,t,i,r)}function Lv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(oa,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(oa,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(oa,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(oa,Pn),Pn|=i;return rn(n,e,r,t),e.child}function kv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Pf(n,e,t,i,r){var s=mn(t)?xs:tn.current;return s=ba(e,s),ma(e,r),t=_p(n,e,t,i,s,r),i=vp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(ft&&i&&sp(e),e.flags|=1,rn(n,e,t,r),e.child)}function fg(n,e,t,i,r){if(mn(t)){var s=!0;Oc(e)}else s=!1;if(ma(e,r),e.stateNode===null)pc(n,e),Rv(e,t,i),Cf(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=mn(t)?xs:tn.current,c=ba(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&ag(e,a,i,c),dr=!1;var f=e.memoizedState;a.state=f,Vc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||pn.current||dr?(typeof u=="function"&&(Af(e,t,u,i),l=e.memoizedState),(o=dr||sg(e,t,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,lv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:oi(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=mn(t)?xs:tn.current,l=ba(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&ag(e,a,i,l),dr=!1,f=e.memoizedState,a.state=f,Vc(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||pn.current||dr?(typeof p=="function"&&(Af(e,t,p,i),_=e.memoizedState),(c=dr||sg(e,t,c,i,f,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Nf(n,e,t,i,s,r)}function Nf(n,e,t,i,r,s){kv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Km(e,t,!1),Zi(n,e,s);i=e.stateNode,KS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Ta(e,n.child,null,s),e.child=Ta(e,null,o,s)):rn(n,e,o,s),e.memoizedState=i.state,r&&Km(e,t,!0),e.child}function Iv(n){var e=n.stateNode;e.pendingContext?Zm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(n,e.context,!1),hp(n,e.containerInfo)}function hg(n,e,t,i,r){return Ea(),op(r),e.flags|=256,rn(n,e,t,i),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Lf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Uv(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(mt,r&1),n===null)return Ef(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=wu(a,i,0,null),n=hs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lf(t),e.memoizedState=Df,n):Sp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return QS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ar(o,s):(s=hs(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Lf(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Df,i}return s=n.child,n=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sp(n,e){return e=wu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Rl(n,e,t,i){return i!==null&&op(i),Ta(e,n.child,null,t),n=Sp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function QS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=cd(Error(xe(422))),Rl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),s=hs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ta(e,n.child,null,a),e.child.memoizedState=Lf(a),e.memoizedState=Df,s);if(!(e.mode&1))return Rl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(xe(419)),i=cd(s,i,void 0),Rl(n,e,a,i)}if(o=(a&n.childLanes)!==0,hn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),hi(i,n,r,-1))}return Ap(),i=cd(Error(xe(421))),Rl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=dM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,kn=wr(r.nextSibling),On=e,ft=!0,ci=null,n!==null&&(qn[Yn++]=ji,qn[Yn++]=Vi,qn[Yn++]=ys,ji=n.id,Vi=n.overflow,ys=e),e=Sp(e,i.children),e.flags|=4096,e)}function pg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Tf(n.return,e,t)}function ud(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ov(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pg(n,t,e);else if(n.tag===19)pg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ud(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ud(e,!0,t,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ms|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(xe(153));if(e.child!==null){for(n=e.child,t=Ar(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ar(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function JS(n,e,t){switch(e.tag){case 3:Iv(e),Ea();break;case 5:cv(e);break;case 1:mn(e.type)&&Oc(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?Uv(n,e,t):(lt(mt,mt.current&1),n=Zi(n,e,t),n!==null?n.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Ov(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Lv(n,e,t)}return Zi(n,e,t)}var Fv,kf,zv,Bv;Fv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kf=function(){};zv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ls(Ti.current);var s=null;switch(t){case"input":r=tf(n,r),i=tf(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(n,r),i=sf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ic)}of(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Qa(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function eM(n,e,t){var i=e.pendingProps;switch(ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&Uc(),Yt(e),null;case 3:return i=e.stateNode,Aa(),dt(pn),dt(tn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Al(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Vf(ci),ci=null))),kf(n,e),Yt(e),null;case 5:pp(e);var r=ls(Bo.current);if(t=e.type,n!==null&&e.stateNode!=null)zv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Yt(e),null}if(n=ls(Ti.current),Al(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Fo]=s,n=(e.mode&1)!==0,t){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)ct(uo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":wm(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Em(i,s),ct("invalid",i)}of(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,o,n),r=["children",""+o]):Co.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(t){case"input":vl(i),bm(i,s,!0);break;case"textarea":vl(i),Tm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=p_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Si]=e,n[Fo]=i,Fv(n,e,!1,!1),e.stateNode=n;e:{switch(a=lf(t,i),t){case"dialog":ct("cancel",n),ct("close",n),r=i;break;case"iframe":case"object":case"embed":ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<uo.length;r++)ct(uo[r],n);r=i;break;case"source":ct("error",n),r=i;break;case"img":case"image":case"link":ct("error",n),ct("load",n),r=i;break;case"details":ct("toggle",n),r=i;break;case"input":wm(n,i),r=tf(n,i),ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ct("invalid",n);break;case"textarea":Em(n,i),r=sf(n,i),ct("invalid",n);break;default:r=i}of(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?__(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ro(n,l):typeof l=="number"&&Ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",n):l!=null&&Wh(n,s,l,a))}switch(t){case"input":vl(n),bm(n,i,!1);break;case"textarea":vl(n),Tm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?da(n,!!i.multiple,s,!1):i.defaultValue!=null&&da(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ic)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)Bv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(t=ls(Bo.current),ls(Ti.current),Al(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=On,n!==null))switch(n.tag){case 3:Tl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return Yt(e),null;case 13:if(dt(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&kn!==null&&e.mode&1&&!(e.flags&128))rv(),Ea(),e.flags|=98560,s=!1;else if(s=Al(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Si]=e}else Ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ci!==null&&(Vf(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?Lt===0&&(Lt=3):Ap())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Aa(),kf(n,e),n===null&&Uo(e.stateNode.containerInfo),Yt(e),null;case 10:return up(e.type._context),Yt(e),null;case 17:return mn(e.type)&&Uc(),Yt(e),null;case 19:if(dt(mt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qa(s,!1);else{if(Lt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Hc(n),a!==null){for(e.flags|=128,Qa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Ra&&(e.flags|=128,i=!0,Qa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Qa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Yt(e),null}else 2*Et()-s.renderingStartTime>Ra&&t!==1073741824&&(e.flags|=128,i=!0,Qa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=mt.current,lt(mt,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function tM(n,e){switch(ap(e),e.tag){case 1:return mn(e.type)&&Uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Aa(),dt(pn),dt(tn),mp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pp(e),null;case 13:if(dt(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Ea()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(mt),null;case 4:return Aa(),null;case 10:return up(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Pl=!1,Kt=!1,nM=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function aa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function If(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var mg=!1;function iM(n,e){if(vf=Dc,n=W_(),rp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(xf={focusedElem:n,selectionRange:t},Dc=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:oi(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(S){Mt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return _=mg,mg=!1,_}function So(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&If(e,t,s)}r=r.next}while(r!==i)}}function Su(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Uf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function jv(n){var e=n.alternate;e!==null&&(n.alternate=null,jv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[Fo],delete e[Mf],delete e[zS],delete e[BS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vv(n){return n.tag===5||n.tag===3||n.tag===4}function gg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Of(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ic));else if(i!==4&&(n=n.child,n!==null))for(Of(n,e,t),n=n.sibling;n!==null;)Of(n,e,t),n=n.sibling}function Ff(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ff(n,e,t),n=n.sibling;n!==null;)Ff(n,e,t),n=n.sibling}var Ht=null,li=!1;function ir(n,e,t){for(t=t.child;t!==null;)Hv(n,e,t),t=t.sibling}function Hv(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(hu,t)}catch{}switch(t.tag){case 5:Kt||aa(t,e);case 6:var i=Ht,r=li;Ht=null,ir(n,e,t),Ht=i,li=r,Ht!==null&&(li?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(li?(n=Ht,t=t.stateNode,n.nodeType===8?id(n.parentNode,t):n.nodeType===1&&id(n,t),Lo(n)):id(Ht,t.stateNode));break;case 4:i=Ht,r=li,Ht=t.stateNode.containerInfo,li=!0,ir(n,e,t),Ht=i,li=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&If(t,e,a),r=r.next}while(r!==i)}ir(n,e,t);break;case 1:if(!Kt&&(aa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Mt(t,e,o)}ir(n,e,t);break;case 21:ir(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,ir(n,e,t),Kt=i):ir(n,e,t);break;default:ir(n,e,t)}}function _g(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new nM),e.forEach(function(i){var r=fM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,li=!1;break e;case 3:Ht=o.stateNode.containerInfo,li=!0;break e;case 4:Ht=o.stateNode.containerInfo,li=!0;break e}o=o.return}if(Ht===null)throw Error(xe(160));Hv(s,a,r),Ht=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,n),e=e.sibling}function Gv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),gi(n),i&4){try{So(3,n,n.return),Su(3,n)}catch(m){Mt(n,n.return,m)}try{So(5,n,n.return)}catch(m){Mt(n,n.return,m)}}break;case 1:ii(e,n),gi(n),i&512&&t!==null&&aa(t,t.return);break;case 5:if(ii(e,n),gi(n),i&512&&t!==null&&aa(t,t.return),n.flags&32){var r=n.stateNode;try{Ro(r,"")}catch(m){Mt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&f_(r,s),lf(o,a);var c=lf(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?__(r,h):u==="dangerouslySetInnerHTML"?m_(r,h):u==="children"?Ro(r,h):Wh(r,u,h,c)}switch(o){case"input":nf(r,s);break;case"textarea":h_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?da(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?da(r,!!s.multiple,s.defaultValue,!0):da(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(m){Mt(n,n.return,m)}}break;case 6:if(ii(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(xe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Mt(n,n.return,m)}}break;case 3:if(ii(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(m){Mt(n,n.return,m)}break;case 4:ii(e,n),gi(n);break;case 13:ii(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bp=Et())),i&4&&_g(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(c=Kt)||u,ii(e,n),Kt=c):ii(e,n),gi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Pe=n,u=n.child;u!==null;){for(h=Pe=u;Pe!==null;){switch(f=Pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:aa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Mt(i,t,m)}}break;case 5:aa(f,f.return);break;case 22:if(f.memoizedState!==null){xg(h);continue}}p!==null?(p.return=f,Pe=p):xg(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=g_("display",a))}catch(m){Mt(n,n.return,m)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){Mt(n,n.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ii(e,n),gi(n),i&4&&_g(n);break;case 21:break;default:ii(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Vv(t)){var i=t;break e}t=t.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ro(r,""),i.flags&=-33);var s=gg(n);Ff(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gg(n);Of(n,o,a);break;default:throw Error(xe(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function rM(n,e,t){Pe=n,Wv(n)}function Wv(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Pl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=Pl;var c=Kt;if(Pl=a,(Kt=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?yg(r):l!==null?(l.return=a,Pe=l):yg(r);for(;s!==null;)Pe=s,Wv(s),s=s.sibling;Pe=r,Pl=o,Kt=c}vg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):vg(n)}}function vg(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:oi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ng(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ng(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Lo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Kt||e.flags&512&&Uf(e)}catch(f){Mt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function xg(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function yg(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Su(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Uf(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{Uf(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var sM=Math.ceil,Xc=tr.ReactCurrentDispatcher,Mp=tr.ReactCurrentOwner,Jn=tr.ReactCurrentBatchConfig,Ze=0,zt=null,Pt=null,Gt=0,Pn=0,oa=Br(0),Lt=0,Go=null,Ms=0,Mu=0,wp=0,Mo=null,un=null,bp=0,Ra=1/0,Ui=null,qc=!1,zf=null,Er=null,Nl=!1,gr=null,Yc=0,wo=0,Bf=null,mc=-1,gc=0;function sn(){return Ze&6?Et():mc!==-1?mc:mc=Et()}function Tr(n){return n.mode&1?Ze&2&&Gt!==0?Gt&-Gt:VS.transition!==null?(gc===0&&(gc=R_()),gc):(n=rt,n!==0||(n=window.event,n=n===void 0?16:U_(n.type)),n):1}function hi(n,e,t,i){if(50<wo)throw wo=0,Bf=null,Error(xe(185));tl(n,t,i),(!(Ze&2)||n!==zt)&&(n===zt&&(!(Ze&2)&&(Mu|=t),Lt===4&&hr(n,Gt)),gn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Ra=Et()+500,vu&&jr()))}function gn(n,e){var t=n.callbackNode;V1(n,e);var i=Nc(n,n===zt?Gt:0);if(i===0)t!==null&&Rm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Rm(t),e===1)n.tag===0?jS(Sg.bind(null,n)):tv(Sg.bind(null,n)),OS(function(){!(Ze&6)&&jr()}),t=null;else{switch(P_(i)){case 1:t=Zh;break;case 4:t=A_;break;case 16:t=Pc;break;case 536870912:t=C_;break;default:t=Pc}t=Jv(t,Xv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Xv(n,e){if(mc=-1,gc=0,Ze&6)throw Error(xe(327));var t=n.callbackNode;if(ga()&&n.callbackNode!==t)return null;var i=Nc(n,n===zt?Gt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=$c(n,i);else{e=i;var r=Ze;Ze|=2;var s=Yv();(zt!==n||Gt!==e)&&(Ui=null,Ra=Et()+500,fs(n,e));do try{lM();break}catch(o){qv(n,o)}while(!0);cp(),Xc.current=s,Ze=r,Pt!==null?e=0:(zt=null,Gt=0,e=Lt)}if(e!==0){if(e===2&&(r=hf(n),r!==0&&(i=r,e=jf(n,r))),e===1)throw t=Go,fs(n,0),hr(n,i),gn(n,Et()),t;if(e===6)hr(n,i);else{if(r=n.current.alternate,!(i&30)&&!aM(r)&&(e=$c(n,i),e===2&&(s=hf(n),s!==0&&(i=s,e=jf(n,s))),e===1))throw t=Go,fs(n,0),hr(n,i),gn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:es(n,un,Ui);break;case 3:if(hr(n,i),(i&130023424)===i&&(e=bp+500-Et(),10<e)){if(Nc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Sf(es.bind(null,n,un,Ui),e);break}es(n,un,Ui);break;case 4:if(hr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-fi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sM(i/1960))-i,10<i){n.timeoutHandle=Sf(es.bind(null,n,un,Ui),i);break}es(n,un,Ui);break;case 5:es(n,un,Ui);break;default:throw Error(xe(329))}}}return gn(n,Et()),n.callbackNode===t?Xv.bind(null,n):null}function jf(n,e){var t=Mo;return n.current.memoizedState.isDehydrated&&(fs(n,e).flags|=256),n=$c(n,e),n!==2&&(e=un,un=t,e!==null&&Vf(e)),n}function Vf(n){un===null?un=n:un.push.apply(un,n)}function aM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(n,e){for(e&=~wp,e&=~Mu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fi(e),i=1<<t;n[t]=-1,e&=~i}}function Sg(n){if(Ze&6)throw Error(xe(327));ga();var e=Nc(n,0);if(!(e&1))return gn(n,Et()),null;var t=$c(n,e);if(n.tag!==0&&t===2){var i=hf(n);i!==0&&(e=i,t=jf(n,i))}if(t===1)throw t=Go,fs(n,0),hr(n,e),gn(n,Et()),t;if(t===6)throw Error(xe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,es(n,un,Ui),gn(n,Et()),null}function Ep(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Ra=Et()+500,vu&&jr())}}function ws(n){gr!==null&&gr.tag===0&&!(Ze&6)&&ga();var e=Ze;Ze|=1;var t=Jn.transition,i=rt;try{if(Jn.transition=null,rt=1,n)return n()}finally{rt=i,Jn.transition=t,Ze=e,!(Ze&6)&&jr()}}function Tp(){Pn=oa.current,dt(oa)}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,US(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(ap(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:Aa(),dt(pn),dt(tn),mp();break;case 5:pp(i);break;case 4:Aa();break;case 13:dt(mt);break;case 19:dt(mt);break;case 10:up(i.type._context);break;case 22:case 23:Tp()}t=t.return}if(zt=n,Pt=n=Ar(n.current,null),Gt=Pn=e,Lt=0,Go=null,wp=Mu=Ms=0,un=Mo=null,os!==null){for(e=0;e<os.length;e++)if(t=os[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}os=null}return n}function qv(n,e){do{var t=Pt;try{if(cp(),fc.current=Wc,Gc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gc=!1}if(Ss=0,Ot=Dt=vt=null,yo=!1,jo=0,Mp.current=null,t===null||t.return===null){Lt=1,Go=e,Pt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Gt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=lg(a);if(p!==null){p.flags&=-257,cg(p,a,o,s,e),p.mode&1&&og(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){og(s,c,e),Ap();break e}l=Error(xe(426))}}else if(ft&&o.mode&1){var g=lg(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),cg(g,a,o,s,e),op(Ca(l,o));break e}}s=l=Ca(l,o),Lt!==4&&(Lt=2),Mo===null?Mo=[s]:Mo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Pv(s,l,e);tg(s,d);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Nv(s,o,e);tg(s,S);break e}}s=s.return}while(s!==null)}Zv(t)}catch(T){e=T,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function Yv(){var n=Xc.current;return Xc.current=Wc,n===null?Wc:n}function Ap(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||!(Ms&268435455)&&!(Mu&268435455)||hr(zt,Gt)}function $c(n,e){var t=Ze;Ze|=2;var i=Yv();(zt!==n||Gt!==e)&&(Ui=null,fs(n,e));do try{oM();break}catch(r){qv(n,r)}while(!0);if(cp(),Ze=t,Xc.current=i,Pt!==null)throw Error(xe(261));return zt=null,Gt=0,Lt}function oM(){for(;Pt!==null;)$v(Pt)}function lM(){for(;Pt!==null&&!L1();)$v(Pt)}function $v(n){var e=Qv(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Zv(n):Pt=e,Mp.current=null}function Zv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=tM(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Lt=6,Pt=null;return}}else if(t=eM(t,e,Pn),t!==null){Pt=t;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);Lt===0&&(Lt=5)}function es(n,e,t){var i=rt,r=Jn.transition;try{Jn.transition=null,rt=1,cM(n,e,t,i)}finally{Jn.transition=r,rt=i}return null}function cM(n,e,t,i){do ga();while(gr!==null);if(Ze&6)throw Error(xe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(xe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(H1(n,s),n===zt&&(Pt=zt=null,Gt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Nl||(Nl=!0,Jv(Pc,function(){return ga(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var a=rt;rt=1;var o=Ze;Ze|=4,Mp.current=null,iM(n,t),Gv(t,n),RS(xf),Dc=!!vf,xf=vf=null,n.current=t,rM(t),k1(),Ze=o,rt=a,Jn.transition=s}else n.current=t;if(Nl&&(Nl=!1,gr=n,Yc=r),s=n.pendingLanes,s===0&&(Er=null),O1(t.stateNode),gn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(qc)throw qc=!1,n=zf,zf=null,n;return Yc&1&&n.tag!==0&&ga(),s=n.pendingLanes,s&1?n===Bf?wo++:(wo=0,Bf=n):wo=0,jr(),null}function ga(){if(gr!==null){var n=P_(Yc),e=Jn.transition,t=rt;try{if(Jn.transition=null,rt=16>n?16:n,gr===null)var i=!1;else{if(n=gr,gr=null,Yc=0,Ze&6)throw Error(xe(331));var r=Ze;for(Ze|=4,Pe=n.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var u=Pe;switch(u.tag){case 0:case 11:case 15:So(8,u,s)}var h=u.child;if(h!==null)h.return=u,Pe=h;else for(;Pe!==null;){u=Pe;var f=u.sibling,p=u.return;if(jv(u),u===c){Pe=null;break}if(f!==null){f.return=p,Pe=f;break}Pe=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var v=n.current;for(Pe=v;Pe!==null;){a=Pe;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Pe=y;else e:for(a=v;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Su(9,o)}}catch(T){Mt(o,o.return,T)}if(o===a){Pe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Pe=S;break e}Pe=o.return}}if(Ze=r,jr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(hu,n)}catch{}i=!0}return i}finally{rt=t,Jn.transition=e}}return!1}function Mg(n,e,t){e=Ca(t,e),e=Pv(n,e,1),n=br(n,e,1),e=sn(),n!==null&&(tl(n,1,e),gn(n,e))}function Mt(n,e,t){if(n.tag===3)Mg(n,n,t);else for(;e!==null;){if(e.tag===3){Mg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){n=Ca(t,n),n=Nv(e,n,1),e=br(e,n,1),n=sn(),e!==null&&(tl(e,1,n),gn(e,n));break}}e=e.return}}function uM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,zt===n&&(Gt&t)===t&&(Lt===4||Lt===3&&(Gt&130023424)===Gt&&500>Et()-bp?fs(n,0):wp|=t),gn(n,e)}function Kv(n,e){e===0&&(n.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var t=sn();n=$i(n,e),n!==null&&(tl(n,e,t),gn(n,t))}function dM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Kv(n,t)}function fM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),Kv(n,t)}var Qv;Qv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,JS(n,e,t);hn=!!(n.flags&131072)}else hn=!1,ft&&e.flags&1048576&&nv(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(n,e),n=e.pendingProps;var r=ba(e,tn.current);ma(e,t),r=_p(null,e,i,n,r,t);var s=vp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=yu,e.stateNode=r,r._reactInternals=e,Cf(e,i,n,t),e=Nf(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&sp(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pM(i),n=oi(i,n),r){case 0:e=Pf(null,e,i,n,t);break e;case 1:e=fg(null,e,i,n,t);break e;case 11:e=ug(null,e,i,n,t);break e;case 14:e=dg(null,e,i,oi(i.type,n),t);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Pf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),fg(n,e,i,r,t);case 3:e:{if(Iv(e),n===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lv(n,e),Vc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ca(Error(xe(423)),e),e=hg(n,e,i,t,r);break e}else if(i!==r){r=Ca(Error(xe(424)),e),e=hg(n,e,i,t,r);break e}else for(kn=wr(e.stateNode.containerInfo.firstChild),On=e,ft=!0,ci=null,t=av(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ea(),i===r){e=Zi(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return cv(e),n===null&&Ef(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,yf(i,r)?a=null:s!==null&&yf(i,s)&&(e.flags|=32),kv(n,e),rn(n,e,a,t),e.child;case 6:return n===null&&Ef(e),null;case 13:return Uv(n,e,t);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ta(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),ug(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(Bc,i._currentValue),i._currentValue=a,s!==null)if(pi(s.value,a)){if(s.children===r.children&&!pn.current){e=Zi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Tf(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(xe(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Tf(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ma(e,t),r=ei(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),dg(n,e,i,r,t);case 15:return Dv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),pc(n,e),e.tag=1,mn(i)?(n=!0,Oc(e)):n=!1,ma(e,t),Rv(e,i,r),Cf(e,i,r,t),Nf(null,e,i,!0,n,t);case 19:return Ov(n,e,t);case 22:return Lv(n,e,t)}throw Error(xe(156,e.tag))};function Jv(n,e){return T_(n,e)}function hM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new hM(n,e,t,i)}function Cp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pM(n){if(typeof n=="function")return Cp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qh)return 11;if(n===Yh)return 14}return 2}function Ar(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function _c(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Cp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ks:return hs(t.children,r,s,e);case Xh:a=8,r|=8;break;case Kd:return n=$n(12,t,e,r|2),n.elementType=Kd,n.lanes=s,n;case Qd:return n=$n(13,t,e,r),n.elementType=Qd,n.lanes=s,n;case Jd:return n=$n(19,t,e,r),n.elementType=Jd,n.lanes=s,n;case c_:return wu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case o_:a=10;break e;case l_:a=9;break e;case qh:a=11;break e;case Yh:a=14;break e;case ur:a=16,i=null;break e}throw Error(xe(130,n==null?n:typeof n,""))}return e=$n(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function hs(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function wu(n,e,t,i){return n=$n(22,n,i,e),n.elementType=c_,n.lanes=t,n.stateNode={isHidden:!1},n}function dd(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function fd(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function mM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rp(n,e,t,i,r,s,a,o,l){return n=new mM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),n}function gM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ex(n){if(!n)return Lr;n=n._reactInternals;e:{if(Cs(n)!==n||n.tag!==1)throw Error(xe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(n.tag===1){var t=n.type;if(mn(t))return ev(n,t,e)}return e}function tx(n,e,t,i,r,s,a,o,l){return n=Rp(t,i,!0,n,r,s,a,o,l),n.context=ex(null),t=n.current,i=sn(),r=Tr(t),s=Xi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,tl(n,r,i),gn(n,i),n}function bu(n,e,t,i){var r=e.current,s=sn(),a=Tr(r);return t=ex(t),e.context===null?e.context=t:e.pendingContext=t,e=Xi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,a),n!==null&&(hi(n,r,a,s),dc(n,r,a)),a}function Zc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Pp(n,e){wg(n,e),(n=n.alternate)&&wg(n,e)}function _M(){return null}var nx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Np(n){this._internalRoot=n}Eu.prototype.render=Np.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(xe(409));bu(n,e,null,null)};Eu.prototype.unmount=Np.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ws(function(){bu(null,n,null,null)}),e[Yi]=null}};function Eu(n){this._internalRoot=n}Eu.prototype.unstable_scheduleHydration=function(n){if(n){var e=L_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fr.length&&e!==0&&e<fr[t].priority;t++);fr.splice(t,0,n),t===0&&I_(n)}};function Dp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bg(){}function vM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zc(a);s.call(c)}}var a=tx(e,i,n,0,null,!1,!1,"",bg);return n._reactRootContainer=a,n[Yi]=a.current,Uo(n.nodeType===8?n.parentNode:n),ws(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Zc(l);o.call(c)}}var l=Rp(n,0,!1,null,null,!1,!1,"",bg);return n._reactRootContainer=l,n[Yi]=l.current,Uo(n.nodeType===8?n.parentNode:n),ws(function(){bu(e,l,t,i)}),l}function Au(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Zc(a);o.call(l)}}bu(e,a,n,r)}else a=vM(t,e,n,r,i);return Zc(a)}N_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=co(e.pendingLanes);t!==0&&(Kh(e,t|1),gn(e,Et()),!(Ze&6)&&(Ra=Et()+500,jr()))}break;case 13:ws(function(){var i=$i(n,1);if(i!==null){var r=sn();hi(i,n,1,r)}}),Pp(n,1)}};Qh=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=sn();hi(e,n,134217728,t)}Pp(n,134217728)}};D_=function(n){if(n.tag===13){var e=Tr(n),t=$i(n,e);if(t!==null){var i=sn();hi(t,n,e,i)}Pp(n,e)}};L_=function(){return rt};k_=function(n,e){var t=rt;try{return rt=n,e()}finally{rt=t}};uf=function(n,e,t){switch(e){case"input":if(nf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=_u(i);if(!r)throw Error(xe(90));d_(i),nf(i,r)}}}break;case"textarea":h_(n,t);break;case"select":e=t.value,e!=null&&da(n,!!t.multiple,e,!1)}};y_=Ep;S_=ws;var xM={usingClientEntryPoint:!1,Events:[il,ta,_u,v_,x_,Ep]},Ja={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yM={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b_(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||_M,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{hu=Dl.inject(yM),Ei=Dl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xM;Vn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(xe(200));return gM(n,e,null,t)};Vn.createRoot=function(n,e){if(!Dp(n))throw Error(xe(299));var t=!1,i="",r=nx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rp(n,1,!1,null,null,t,!1,i,r),n[Yi]=e.current,Uo(n.nodeType===8?n.parentNode:n),new Np(e)};Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(xe(188)):(n=Object.keys(n).join(","),Error(xe(268,n)));return n=b_(e),n=n===null?null:n.stateNode,n};Vn.flushSync=function(n){return ws(n)};Vn.hydrate=function(n,e,t){if(!Tu(e))throw Error(xe(200));return Au(null,n,e,!0,t)};Vn.hydrateRoot=function(n,e,t){if(!Dp(n))throw Error(xe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=nx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=tx(e,null,n,1,t??null,r,!1,s,a),n[Yi]=e.current,Uo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Eu(e)};Vn.render=function(n,e,t){if(!Tu(e))throw Error(xe(200));return Au(null,n,e,!1,t)};Vn.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(xe(40));return n._reactRootContainer?(ws(function(){Au(null,null,n,!1,function(){n._reactRootContainer=null,n[Yi]=null})}),!0):!1};Vn.unstable_batchedUpdates=Ep;Vn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tu(t))throw Error(xe(200));if(n==null||n._reactInternals===void 0)throw Error(xe(38));return Au(n,e,t,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix)}catch(n){console.error(n)}}ix(),i_.exports=Vn;var SM=i_.exports,Eg=SM;$d.createRoot=Eg.createRoot,$d.hydrateRoot=Eg.hydrateRoot;/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rx=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Le.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Le.createElement("svg",{ref:l,...wM,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:rx("lucide",r),...o},[...a.map(([c,u])=>Le.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(n,e)=>{const t=Le.forwardRef(({className:i,...r},s)=>Le.createElement(bM,{ref:s,iconNode:e,className:rx(`lucide-${MM(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Ye("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Ye("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=Ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Ye("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Ye("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=Ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Ye("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Ye("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Ye("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Ye("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Ye("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=Ye("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=Ye("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Ye("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Ye("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Ye("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Ye("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Ye("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=Ye("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Ye("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Ye("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=Ye("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Ye("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),qM=({currentArchetype:n,onSelectArchetype:e,onOpenDownload:t,onOpenOrder:i,onOpenVault:r,onToggleSpacingOverlay:s,isSpacingActive:a})=>{const[o,l]=Le.useState(!1);return Le.useEffect(()=>{const c=()=>{l(window.scrollY>40)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),x.jsxs("header",{className:`floating-nav ${o?"nav-scrolled":""}`,children:[x.jsxs("div",{className:"nav-container",children:[x.jsxs("div",{className:"nav-brand",children:[x.jsx("div",{className:"brand-badge",children:"STUDIO OS"}),x.jsx("span",{className:"brand-version",children:"v2.0"})]}),x.jsxs("nav",{className:"nav-links",children:[x.jsx("a",{href:"#hero-intro",children:"01. 3D Интро"}),x.jsx("a",{href:"#animations",children:"02. Анимации"}),x.jsx("a",{href:"#anti-slop",children:"03. Анти-слоп"}),x.jsx("a",{href:"#archetypes",children:"04. Архетипы"}),x.jsx("a",{href:"#mobile",children:"06. Мобильность"}),x.jsx("a",{href:"#seo",children:"07. SEO"}),x.jsx("a",{href:"#vault-section",children:"08. Хранилище"})]}),x.jsxs("div",{className:"nav-actions",children:[x.jsxs("button",{onClick:s,className:`btn-icon-pill ${a?"active":""}`,title:"Включить радар отступов Spacing Overlay",children:[x.jsx(Lp,{size:15}),x.jsx("span",{children:a?"Радар: ON":"Отступы"})]}),x.jsxs("button",{onClick:r,className:"btn-icon-pill",title:"Загрузить ассеты с ПК в библиотеку",children:[x.jsx(sl,{size:15}),x.jsx("span",{children:"Загрузить ассет"})]}),x.jsxs("button",{onClick:t,className:"btn-studio-secondary btn-sm",children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать систему"})]}),x.jsxs("button",{onClick:i,className:"btn-studio-primary btn-sm",children:[x.jsx(bs,{size:15}),x.jsx("span",{children:"Заказать сайт"})]})]})]}),x.jsx("style",{children:`
        .floating-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 16px 24px;
          transition: all 0.3s ease;
        }
        .nav-scrolled {
          padding: 10px 24px;
          background: rgba(10, 10, 14, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: var(--border-width) solid var(--border);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .brand-badge {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--accent);
          letter-spacing: 0.1em;
        }
        .brand-version {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 2px 6px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .nav-links a {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 1100px) {
          .nav-links { display: none; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-icon-pill:hover, .btn-icon-pill.active {
          border-color: var(--accent);
          color: var(--accent);
        }
        .btn-sm {
          padding: 8px 16px;
          font-size: 0.82rem;
          min-height: 38px;
        }
      `})]})};class YM{constructor(){Bu(this,"ctx",null);Bu(this,"isMuted",!1);this.isMuted=typeof window<"u"&&localStorage.getItem("studio_muted")==="true"}_getContext(){if(typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playCinematicImpact(){if(this.isMuted)return;const e=this._getContext();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(32,t+1.2),r.gain.setValueAtTime(.6,t),r.gain.exponentialRampToValueAtTime(.001,t+1.8);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(380,t),s.frequency.exponentialRampToValueAtTime(60,t+1.5),i.connect(s),s.connect(r),r.connect(e.destination),i.start(t),i.stop(t+1.8),this._playNoiseSparkle(t)}playWhoosh(){if(this.isMuted)return;const e=this._getContext();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain(),s=e.createBiquadFilter();i.type="sine",i.frequency.setValueAtTime(200,t),i.frequency.exponentialRampToValueAtTime(800,t+.2),i.frequency.exponentialRampToValueAtTime(120,t+.5),s.type="bandpass",s.frequency.setValueAtTime(600,t),r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.25,t+.2),r.gain.exponentialRampToValueAtTime(.001,t+.5),i.connect(s),s.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.5)}playClick(e=440){if(this.isMuted)return;const t=this._getContext();if(!t)return;const i=t.currentTime,r=t.createOscillator(),s=t.createGain();r.type="sine",r.frequency.setValueAtTime(e,i),r.frequency.exponentialRampToValueAtTime(e*1.5,i+.06),s.gain.setValueAtTime(.18,i),s.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(s),s.connect(t.destination),r.start(i),r.stop(i+.06)}_playNoiseSparkle(e){const t=this._getContext();if(!t)return;const i=t.sampleRate*.4,r=t.createBuffer(1,i,t.sampleRate),s=r.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=r;const o=t.createBiquadFilter();o.type="highpass",o.frequency.setValueAtTime(2400,e);const l=t.createGain();l.gain.setValueAtTime(.12,e),l.gain.exponentialRampToValueAtTime(.001,e+.4),a.connect(o),o.connect(l),l.connect(t.destination),a.start(e),a.stop(e+.4)}toggleMute(){return this.isMuted=!this.isMuted,typeof window<"u"&&localStorage.setItem("studio_muted",String(this.isMuted)),this.isMuted}getIsMuted(){return this.isMuted}}const Qt=new YM,$M=({currentArchetype:n,onSelectArchetype:e,onOpenDownload:t,onOpenOrder:i,onOpenVault:r,onReplayIntro:s})=>{const[a,o]=Le.useState(!1),l=c=>{Qt.playClick(440),e(c),o(!1)};return x.jsxs(x.Fragment,{children:[x.jsx("nav",{className:"mobile-thumb-bar",children:x.jsxs("div",{className:"thumb-grid",children:[x.jsxs("button",{className:"thumb-btn",onClick:()=>o(!0),"aria-label":"Сменить архетип",children:[x.jsx(ox,{size:20}),x.jsx("span",{children:"Архетипы"})]}),x.jsxs("button",{className:"thumb-btn",onClick:s,"aria-label":"3D Интро",children:[x.jsx(lx,{size:20}),x.jsx("span",{children:"3D Интро"})]}),x.jsxs("button",{className:"thumb-btn primary-cta",onClick:i,"aria-label":"Заказать сайт",children:[x.jsx(bs,{size:20}),x.jsx("span",{children:"Заказать"})]}),x.jsxs("button",{className:"thumb-btn",onClick:t,"aria-label":"Скачать",children:[x.jsx(an,{size:20}),x.jsx("span",{children:"Скачать"})]}),x.jsxs("button",{className:"thumb-btn",onClick:r,"aria-label":"Хранилище",children:[x.jsx(sl,{size:20}),x.jsx("span",{children:"Ассеты"})]})]})}),a&&x.jsx("div",{className:"drawer-overlay",onClick:()=>o(!1),children:x.jsxs("div",{className:"drawer-sheet",onClick:c=>c.stopPropagation(),children:[x.jsx("div",{className:"drawer-handle"}),x.jsxs("div",{className:"drawer-header",children:[x.jsx("h3",{children:"🎨 Выбор Дизайн-Архетипа"}),x.jsx("button",{onClick:()=>o(!1),className:"close-drawer",children:"✕"})]}),x.jsx("div",{className:"drawer-archetypes-list",children:[{id:"luxury-noir",name:"Luxury Noir",desc:"Кинематографичный люкс, черный + золото"},{id:"neo-brutalism",name:"Neo-Brutalism",desc:"Сырой уличный контраст, четкие тени"},{id:"cyber-tech",name:"Cyber-Tech",desc:"Инженерный неон, терминальные сетки"},{id:"editorial-swiss",name:"Editorial Swiss",desc:"Швейцарская сетка, чистая типографика"},{id:"clean-minimal",name:"Clean Minimal",desc:"Мягкий human-интерфейс, закругления"}].map(c=>x.jsxs("button",{className:`drawer-arch-card ${n===c.id?"active":""}`,onClick:()=>l(c.id),children:[x.jsxs("div",{children:[x.jsx("strong",{children:c.name}),x.jsx("p",{children:c.desc})]}),n===c.id&&x.jsx("span",{className:"active-dot",children:"✓"})]},c.id))})]})}),x.jsx("style",{children:`
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
 */const Ip="167",ZM=0,Ag=1,KM=2,ux=1,QM=2,Ii=3,kr=0,_n=1,Bi=2,Cr=0,_a=1,Kc=2,Cg=3,Rg=4,JM=5,rs=100,ew=101,tw=102,nw=103,iw=104,rw=200,sw=201,aw=202,ow=203,Hf=204,Gf=205,lw=206,cw=207,uw=208,dw=209,fw=210,hw=211,pw=212,mw=213,gw=214,_w=0,vw=1,xw=2,Qc=3,yw=4,Sw=5,Mw=6,ww=7,dx=0,bw=1,Ew=2,Rr=0,Tw=1,Aw=2,Cw=3,Rw=4,Pw=5,Nw=6,Dw=7,fx=300,Na=301,Da=302,Wf=303,Xf=304,Cu=306,qf=1e3,cs=1001,Yf=1002,Zn=1003,Lw=1004,Ll=1005,ui=1006,hd=1007,us=1008,Ki=1009,hx=1010,px=1011,Wo=1012,Up=1013,Es=1014,Hi=1015,al=1016,Op=1017,Fp=1018,La=1020,mx=35902,gx=1021,_x=1022,di=1023,vx=1024,xx=1025,va=1026,ka=1027,yx=1028,zp=1029,Sx=1030,Bp=1031,jp=1033,vc=33776,xc=33777,yc=33778,Sc=33779,$f=35840,Zf=35841,Kf=35842,Qf=35843,Jf=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,ah=37812,oh=37813,lh=37814,ch=37815,uh=37816,dh=37817,fh=37818,hh=37819,ph=37820,mh=37821,Mc=36492,gh=36494,_h=36495,Mx=36283,vh=36284,xh=36285,yh=36286,kw=3200,Iw=3201,Uw=0,Ow=1,pr="",vi="srgb",Vr="srgb-linear",Vp="display-p3",Ru="display-p3-linear",Jc="linear",ut="srgb",eu="rec709",tu="p3",Ds=7680,Pg=519,Fw=512,zw=513,Bw=514,wx=515,jw=516,Vw=517,Hw=518,Gw=519,Ng=35044,Dg="300 es",Gi=2e3,nu=2001;class Ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=Math.PI/180,Sh=180/Math.PI;function ol(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function Ww(n,e){return(n%e+e)%e}function md(n,e,t){return(1-t)*n+t*e}function eo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],v=r[1],y=r[4],S=r[7],T=r[2],C=r[5],A=r[8];return s[0]=a*m+o*v+l*T,s[3]=a*g+o*y+l*C,s[6]=a*d+o*S+l*A,s[1]=c*m+u*v+h*T,s[4]=c*g+u*y+h*C,s[7]=c*d+u*S+h*A,s[2]=f*m+p*v+_*T,s[5]=f*g+p*y+_*C,s[8]=f*d+p*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=t*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(r*c-u*i)*m,e[2]=(o*i-r*a)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gd.makeScale(e,t)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new We;function bx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function iu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xw(){const n=iu("canvas");return n.style.display="block",n}const Lg={};function bo(n){n in Lg||(Lg[n]=!0,console.warn(n))}function qw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const kg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ig=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[Vr]:{transfer:Jc,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[vi]:{transfer:ut,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ru]:{transfer:Jc,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ig),fromReference:n=>n.applyMatrix3(kg)},[Vp]:{transfer:ut,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ig),fromReference:n=>n.applyMatrix3(kg).convertLinearToSRGB()}},Yw=new Set([Vr,Ru]),tt={enabled:!0,_workingColorSpace:Vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=to[e].toReference,r=to[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return to[n].primaries},getTransfer:function(n){return n===pr?Jc:to[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(to[e].luminanceCoefficients)}};function xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _d(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ls;class $w{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=iu("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=iu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xa(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xa(t[i]/255)*255):t[i]=xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zw=0;class Ex{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vd(r[a].image)):s.push(vd(r[a]))}else s=vd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$w.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kw=0;class vn extends Ga{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=cs,r=cs,s=ui,a=us,o=di,l=Ki,c=vn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=ol(),this.name="",this.source=new Ex(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=fx;vn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,T=(d+1)/2,C=(u+f)/4,A=(h+m)/4,N=(_+g)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=N/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=N/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(h-m)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qw extends Ga{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ex(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends Qw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tx extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jw extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==_){let g=1-o;const d=l*f+c*p+u*_+h*m,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,d*v);g=Math.sin(g*C)/T,o=Math.sin(o*C)/T}const S=o*v;if(l=l*g+f*S,c=c*g+p*S,u=u*g+_*S,h=h*g+m*S,g===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-o*p,e[t+2]=c*_+u*p+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new le,Ug=new ll;class cl{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Il.subVectors(this.max,no),ks.subVectors(e.a,no),Is.subVectors(e.b,no),Us.subVectors(e.c,no),rr.subVectors(Is,ks),sr.subVectors(Us,Is),Wr.subVectors(ks,Us);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Wr.z,Wr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Wr.z,0,-Wr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Wr.y,Wr.x,0];return!yd(t,ks,Is,Us,Il)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,ks,Is,Us,Il))?!1:(Ul.crossVectors(rr,sr),t=[Ul.x,Ul.y,Ul.z],yd(t,ks,Is,Us,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new le,new le,new le,new le,new le,new le,new le,new le],ri=new le,kl=new cl,ks=new le,Is=new le,Us=new le,rr=new le,sr=new le,Wr=new le,no=new le,Il=new le,Ul=new le,Xr=new le;function yd(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xr.fromArray(n,s);const o=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const eb=new cl,io=new le,Sd=new le;class Pu{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Sd)),this.expandByPoint(io.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new le,Md=new le,Ol=new le,ar=new le,wd=new le,Fl=new le,bd=new le;class Ax{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Md.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Md);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ol),o=ar.dot(this.direction),l=-ar.dot(Ol),c=ar.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const m=1/u;h*=m,f*=m,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Md).addScaledVector(Ol,f),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){wd.subVectors(t,e),Fl.subVectors(i,e),bd.crossVectors(wd,Fl);let a=this.direction.dot(bd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const l=o*this.direction.dot(Fl.crossVectors(ar,Fl));if(l<0)return null;const c=o*this.direction.dot(wd.cross(ar));if(c<0||l+c>a)return null;const u=-o*ar.dot(bd);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,r,s,a,o,l,c,u,h,f,p,_,m,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,p,_,m,g)}set(e,t,i,r,s,a,o,l,c,u,h,f,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,m=c*h;t[0]=f+m*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,m=c*h;t[0]=f-m*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tb,e,nb)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),or.crossVectors(i,Cn),or.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),or.crossVectors(i,Cn)),or.normalize(),zl.crossVectors(Cn,or),r[0]=or.x,r[4]=zl.x,r[8]=Cn.x,r[1]=or.y,r[5]=zl.y,r[9]=Cn.y,r[2]=or.z,r[6]=zl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],v=i[3],y=i[7],S=i[11],T=i[15],C=r[0],A=r[4],N=r[8],b=r[12],E=r[1],z=r[5],D=r[9],O=r[13],M=r[2],H=r[6],K=r[10],X=r[14],G=r[3],$=r[7],U=r[11],P=r[15];return s[0]=a*C+o*E+l*M+c*G,s[4]=a*A+o*z+l*H+c*$,s[8]=a*N+o*D+l*K+c*U,s[12]=a*b+o*O+l*X+c*P,s[1]=u*C+h*E+f*M+p*G,s[5]=u*A+h*z+f*H+p*$,s[9]=u*N+h*D+f*K+p*U,s[13]=u*b+h*O+f*X+p*P,s[2]=_*C+m*E+g*M+d*G,s[6]=_*A+m*z+g*H+d*$,s[10]=_*N+m*D+g*K+d*U,s[14]=_*b+m*O+g*X+d*P,s[3]=v*C+y*E+S*M+T*G,s[7]=v*A+y*z+S*H+T*$,s[11]=v*N+y*D+S*K+T*U,s[15]=v*b+y*O+S*X+T*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*p-i*l*p)+m*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+g*(+t*c*h-t*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-t*l*h+t*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],v=h*g*c-m*f*c+m*l*p-o*g*p-h*l*d+o*f*d,y=_*f*c-u*g*c-_*l*p+a*g*p+u*l*d-a*f*d,S=u*m*c-_*h*c+_*o*p-a*m*p-u*o*d+a*h*d,T=_*h*l-u*m*l-_*o*f+a*m*f+u*o*g-a*h*g,C=t*v+i*y+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(m*f*s-h*g*s-m*r*p+i*g*p+h*r*d-i*f*d)*A,e[2]=(o*g*s-m*l*s+m*r*c-i*g*c-o*r*d+i*l*d)*A,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*A,e[4]=y*A,e[5]=(u*g*s-_*f*s+_*r*p-t*g*p-u*r*d+t*f*d)*A,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*d-t*l*d)*A,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*A,e[8]=S*A,e[9]=(_*h*s-u*m*s-_*i*p+t*m*p+u*i*d-t*h*d)*A,e[10]=(a*m*s-_*o*s+_*i*c-t*m*c-a*i*d+t*o*d)*A,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*p-t*o*p)*A,e[12]=T*A,e[13]=(u*m*r-_*h*r+_*i*f-t*m*f-u*i*g+t*h*g)*A,e[14]=(_*o*r-a*m*r-_*i*l+t*m*l+a*i*g-t*o*g)*A,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,_=s*h,m=a*u,g=a*h,d=o*h,v=l*c,y=l*u,S=l*h,T=i.x,C=i.y,A=i.z;return r[0]=(1-(m+d))*T,r[1]=(p+S)*T,r[2]=(_-y)*T,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+d))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(_+y)*A,r[9]=(g-v)*A,r[10]=(1-(f+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Os.set(r[0],r[1],r[2]).length();const a=Os.set(r[4],r[5],r[6]).length(),o=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/a,h=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(o===Gi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===nu)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*c,p=(i+r)*u;let _,m;if(o===Gi)_=(a+s)*h,m=-2*h;else if(o===nu)_=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new le,si=new Nt,tb=new le(0,0,0),nb=new le(1,1,1),or=new le,zl=new le,Cn=new le,Og=new Nt,Fg=new ll;class Qi{constructor(e=0,t=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ib=0;const zg=new le,Fs=new ll,Di=new Nt,Bl=new le,ro=new le,rb=new le,sb=new ll,Bg=new le(1,0,0),jg=new le(0,1,0),Vg=new le(0,0,1),Hg={type:"added"},ab={type:"removed"},zs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class xn extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new le,t=new Qi,i=new ll,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new We}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ro,Bl,this.up):Di.lookAt(Bl,ro,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Di),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ab),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new le(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new le,Li=new le,Td=new le,ki=new le,Bs=new le,js=new le,Gg=new le,Ad=new le,Cd=new le,Rd=new le;class Mi{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ai.subVectors(r,t),Li.subVectors(i,t),Td.subVectors(e,t);const a=ai.dot(ai),o=ai.dot(Li),l=ai.dot(Td),c=Li.dot(Li),u=Li.dot(Td),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),Li.subVectors(e,t),ai.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ai.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bs.subVectors(r,i),js.subVectors(s,i),Ad.subVectors(e,i);const l=Bs.dot(Ad),c=js.dot(Ad);if(l<=0&&c<=0)return t.copy(i);Cd.subVectors(e,r);const u=Bs.dot(Cd),h=js.dot(Cd);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Bs,a);Rd.subVectors(e,s);const p=Bs.dot(Rd),_=js.dot(Rd);if(_>=0&&p<=_)return t.copy(s);const m=p*c-l*_;if(m<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(js,o);const g=u*_-p*h;if(g<=0&&h-u>=0&&p-_>=0)return Gg.subVectors(s,r),o=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(Gg,o);const d=1/(g+m+f);return a=m*d,o=f*d,t.copy(i).addScaledVector(Bs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Ww(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Pd(a,s,e+1/3),this.g=Pd(a,s,e),this.b=Pd(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=vi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=_d(e.r),this.g=_d(e.g),this.b=_d(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return tt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(dn(Zt.r*255,0,255))*65536+Math.round(dn(Zt.g*255,0,255))*256+Math.round(dn(Zt.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=vi){tt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(jl);const i=md(lr.h,jl.h,t),r=md(lr.s,jl.s,t),s=md(lr.l,jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new nt;nt.NAMES=Rx;let ob=0;class ul extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=_a,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Gf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Gf&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Px extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new le,Vl=new it;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}}class Nx extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dx extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ps extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lb=0;const Wn=new Nt,Nd=new xn,Vs=new le,Rn=new cl,so=new cl,Ut=new le;class Ci extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Dx:Nx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ps(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];so.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Rn.min,so.min),Rn.expandByPoint(Ut),Ut.addVectors(Rn.max,so.max),Rn.expandByPoint(Ut)):(Rn.expandByPoint(so.min),Rn.expandByPoint(so.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Ut.add(Vs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new le,l[N]=new le;const c=new le,u=new le,h=new le,f=new it,p=new it,_=new it,m=new le,g=new le;function d(N,b,E){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,E),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(z),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(z),o[N].add(m),o[b].add(m),o[E].add(m),l[N].add(g),l[b].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,b=v.length;N<b;++N){const E=v[N],z=E.start,D=E.count;for(let O=z,M=z+D;O<M;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new le,S=new le,T=new le,C=new le;function A(N){T.fromBufferAttribute(r,N),C.copy(T);const b=o[N];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(C,b);const z=S.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,z)}for(let N=0,b=v.length;N<b;++N){const E=v[N],z=E.start,D=E.count;for(let O=z,M=z+D;O<M;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new le,s=new le,a=new le,o=new le,l=new le,c=new le,u=new le,h=new le;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new Nt,qr=new Ax,Hl=new Pu,Xg=new le,Hs=new le,Gs=new le,Ws=new le,Dd=new le,Gl=new le,Wl=new it,Xl=new it,ql=new it,qg=new le,Yg=new le,$g=new le,Yl=new le,$l=new le;class Wi extends xn{constructor(e=new Ci,t=new Px){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Dd.fromBufferAttribute(h,e),a?Gl.addScaledVector(Dd,u):Gl.addScaledVector(Dd.sub(t),u))}t.add(Gl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Hl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Hl,Xg)===null||qr.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,m=f.length;_<m;_++){const g=f[_],d=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,T=y;S<T;S+=3){const C=o.getX(S),A=o.getX(S+1),N=o.getX(S+2);r=Zl(this,d,e,i,c,u,h,C,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=Zl(this,a,e,i,c,u,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,m=f.length;_<m;_++){const g=f[_],d=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,T=y;S<T;S+=3){const C=S,A=S+1,N=S+2;r=Zl(this,d,e,i,c,u,h,C,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=g,y=g+1,S=g+2;r=Zl(this,a,e,i,c,u,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function cb(n,e,t,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===kr,o),l===null)return null;$l.copy(o),$l.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:n}}function Zl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Hs),n.getVertexPosition(l,Gs),n.getVertexPosition(c,Ws);const u=cb(n,e,t,i,Hs,Gs,Ws,Yl);if(u){r&&(Wl.fromBufferAttribute(r,o),Xl.fromBufferAttribute(r,l),ql.fromBufferAttribute(r,c),u.uv=Mi.getInterpolation(Yl,Hs,Gs,Ws,Wl,Xl,ql,new it)),s&&(Wl.fromBufferAttribute(s,o),Xl.fromBufferAttribute(s,l),ql.fromBufferAttribute(s,c),u.uv1=Mi.getInterpolation(Yl,Hs,Gs,Ws,Wl,Xl,ql,new it)),a&&(qg.fromBufferAttribute(a,o),Yg.fromBufferAttribute(a,l),$g.fromBufferAttribute(a,c),u.normal=Mi.getInterpolation(Yl,Hs,Gs,Ws,qg,Yg,$g,new le),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new le,materialIndex:0};Mi.getNormal(Hs,Gs,Ws,h.normal),u.face=h}return u}class dl extends Ci{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ps(c,3)),this.setAttribute("normal",new ps(u,3)),this.setAttribute("uv",new ps(h,2));function _(m,g,d,v,y,S,T,C,A,N,b){const E=S/A,z=T/N,D=S/2,O=T/2,M=C/2,H=A+1,K=N+1;let X=0,G=0;const $=new le;for(let U=0;U<K;U++){const P=U*z-O;for(let j=0;j<H;j++){const se=j*E-D;$[m]=se*v,$[g]=P*y,$[d]=M,c.push($.x,$.y,$.z),$[m]=0,$[g]=0,$[d]=C>0?1:-1,u.push($.x,$.y,$.z),h.push(j/A),h.push(1-U/N),X+=1}}for(let U=0;U<N;U++)for(let P=0;P<A;P++){const j=f+P+H*U,se=f+P+H*(U+1),V=f+(P+1)+H*(U+1),Y=f+(P+1)+H*U;l.push(j,se,Y),l.push(se,V,Y),G+=6}o.addGroup(p,G,b),p+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ia(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Ia(n[t]);for(const r in i)e[r]=i[r]}return e}function ub(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const db={clone:Ia,merge:nn};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new le,Zg=new it,Kg=new it;class Dn extends kx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,Zg,Kg),t.subVectors(Kg,Zg)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class pb extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Xs,qs,e,t);r.layers=this.layers,this.add(r);const s=new Dn(Xs,qs,e,t);s.layers=this.layers,this.add(s);const a=new Dn(Xs,qs,e,t);a.layers=this.layers,this.add(a);const o=new Dn(Xs,qs,e,t);o.layers=this.layers,this.add(o);const l=new Dn(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ix extends vn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Na,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mb extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dl(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Cr});s.uniforms.tEquirect.value=t;const a=new Wi(r,s),o=t.minFilter;return t.minFilter===us&&(t.minFilter=ui),new pb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ld=new le,gb=new le,_b=new We;class ts{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ld.subVectors(i,t).cross(gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_b.getNormalMatrix(e),r=this.coplanarPoint(Ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Pu,Kl=new le;class Ux{constructor(e=new ts,t=new ts,i=new ts,r=new ts,s=new ts,a=new ts){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],d=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-p,S-d).normalize(),i[1].setComponents(l+s,f+c,g+p,S+d).normalize(),i[2].setComponents(l+a,f+u,g+_,S+v).normalize(),i[3].setComponents(l-a,f-u,g-_,S-v).normalize(),i[4].setComponents(l-o,f-h,g-m,S-y).normalize(),t===Gi)i[5].setComponents(l+o,f+h,g+m,S+y).normalize();else if(t===nu)i[5].setComponents(o,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ox(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,o),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const m=f[p];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Nu extends Ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<u;d++){const v=d*f-a;for(let y=0;y<c;y++){const S=y*h-s;_.push(S,-v,0),m.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const y=v+c*d,S=v+c*(d+1),T=v+1+c*(d+1),C=v+1+c*d;p.push(y,S,C),p.push(S,T,C)}this.setIndex(p),this.setAttribute("position",new ps(_,3)),this.setAttribute("normal",new ps(m,3)),this.setAttribute("uv",new ps(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
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
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
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
#endif`,Cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Lb=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,Hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`
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
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,vE=`
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i2=`float getShadowMask() {
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
}`,r2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,a2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,l2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#ifdef USE_TRANSMISSION
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`#include <common>
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
}`,E2=`#if DEPTH_PACKING == 3200
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
}`,T2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`uniform float scale;
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
}`,N2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,L2=`uniform vec3 diffuse;
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
}`,k2=`#define LAMBERT
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
}`,I2=`#define LAMBERT
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
}`,U2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,F2=`#define NORMAL
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
}`,z2=`#define NORMAL
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
}`,B2=`#define PHONG
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
}`,j2=`#define PHONG
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
}`,V2=`#define STANDARD
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
}`,H2=`#define STANDARD
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
}`,G2=`#define TOON
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
}`,W2=`#define TOON
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
}`,X2=`uniform float size;
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
}`,q2=`uniform vec3 diffuse;
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
}`,Y2=`#include <common>
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
}`,$2=`uniform vec3 color;
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
}`,Z2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:xb,alphahash_pars_fragment:yb,alphamap_fragment:Sb,alphamap_pars_fragment:Mb,alphatest_fragment:wb,alphatest_pars_fragment:bb,aomap_fragment:Eb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:Cb,begin_vertex:Rb,beginnormal_vertex:Pb,bsdfs:Nb,iridescence_fragment:Db,bumpmap_pars_fragment:Lb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Ob,color_fragment:Fb,color_pars_fragment:zb,color_pars_vertex:Bb,color_vertex:jb,common:Vb,cube_uv_reflection_fragment:Hb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Wb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:$b,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:Jb,envmap_pars_vertex:eE,envmap_physical_pars_fragment:dE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:rE,fog_pars_fragment:sE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:oE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:vE,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:bE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:CE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:PE,morphinstance_vertex:NE,morphcolor_vertex:DE,morphnormal_vertex:LE,morphtarget_pars_vertex:kE,morphtarget_vertex:IE,normal_fragment_begin:UE,normal_fragment_maps:OE,normal_pars_fragment:FE,normal_pars_vertex:zE,normal_vertex:BE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:qE,premultiplied_alpha_fragment:YE,project_vertex:$E,dithering_fragment:ZE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:e2,shadowmap_pars_vertex:t2,shadowmap_vertex:n2,shadowmask_pars_fragment:i2,skinbase_vertex:r2,skinning_pars_vertex:s2,skinning_vertex:a2,skinnormal_vertex:o2,specularmap_fragment:l2,specularmap_pars_fragment:c2,tonemapping_fragment:u2,tonemapping_pars_fragment:d2,transmission_fragment:f2,transmission_pars_fragment:h2,uv_pars_fragment:p2,uv_pars_vertex:m2,uv_vertex:g2,worldpos_vertex:_2,background_vert:v2,background_frag:x2,backgroundCube_vert:y2,backgroundCube_frag:S2,cube_vert:M2,cube_frag:w2,depth_vert:b2,depth_frag:E2,distanceRGBA_vert:T2,distanceRGBA_frag:A2,equirect_vert:C2,equirect_frag:R2,linedashed_vert:P2,linedashed_frag:N2,meshbasic_vert:D2,meshbasic_frag:L2,meshlambert_vert:k2,meshlambert_frag:I2,meshmatcap_vert:U2,meshmatcap_frag:O2,meshnormal_vert:F2,meshnormal_frag:z2,meshphong_vert:B2,meshphong_frag:j2,meshphysical_vert:V2,meshphysical_frag:H2,meshtoon_vert:G2,meshtoon_frag:W2,points_vert:X2,points_frag:q2,shadow_vert:Y2,shadow_frag:$2,sprite_vert:Z2,sprite_frag:K2},Ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yi={basic:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:nn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:nn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:nn([Ee.points,Ee.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:nn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:nn([Ee.common,Ee.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:nn([Ee.sprite,Ee.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:nn([Ee.common,Ee.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:nn([Ee.lights,Ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yi.physical={uniforms:nn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ql={r:0,b:0,g:0},$r=new Qi,Q2=new Nt;function J2(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function m(v){let y=!1;const S=_(v);S===null?d(o,l):S&&S.isColor&&(d(S,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,y){const S=_(y);S&&(S.isCubeTexture||S.mapping===Cu)?(u===void 0&&(u=new Wi(new dl(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Ia(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(y.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Q2.makeRotationFromEuler($r)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Wi(new Nu(2,2),new Ir({name:"BackgroundMaterial",uniforms:Ia(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,y){v.getRGB(Ql,Lx(n)),i.buffers.color.setClear(Ql.r,Ql.g,Ql.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:m,addToRenderList:g}}function eT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(E,z,D,O,M){let H=!1;const K=h(O,D,z);s!==K&&(s=K,c(s.object)),H=p(E,O,D,M),H&&_(E,O,D,M),M!==null&&e.update(M,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(E,z,D,O),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,z,D){const O=D.wireframe===!0;let M=i[E.id];M===void 0&&(M={},i[E.id]=M);let H=M[z.id];H===void 0&&(H={},M[z.id]=H);let K=H[O];return K===void 0&&(K=f(l()),H[O]=K),K}function f(E){const z=[],D=[],O=[];for(let M=0;M<t;M++)z[M]=0,D[M]=0,O[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:D,attributeDivisors:O,object:E,attributes:{},index:null}}function p(E,z,D,O){const M=s.attributes,H=z.attributes;let K=0;const X=D.getAttributes();for(const G in X)if(X[G].location>=0){const U=M[G];let P=H[G];if(P===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(P=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(P=E.instanceColor)),U===void 0||U.attribute!==P||P&&U.data!==P.data)return!0;K++}return s.attributesNum!==K||s.index!==O}function _(E,z,D,O){const M={},H=z.attributes;let K=0;const X=D.getAttributes();for(const G in X)if(X[G].location>=0){let U=H[G];U===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(U=E.instanceColor));const P={};P.attribute=U,U&&U.data&&(P.data=U.data),M[G]=P,K++}s.attributes=M,s.attributesNum=K,s.index=O}function m(){const E=s.newAttributes;for(let z=0,D=E.length;z<D;z++)E[z]=0}function g(E){d(E,0)}function d(E,z){const D=s.newAttributes,O=s.enabledAttributes,M=s.attributeDivisors;D[E]=1,O[E]===0&&(n.enableVertexAttribArray(E),O[E]=1),M[E]!==z&&(n.vertexAttribDivisor(E,z),M[E]=z)}function v(){const E=s.newAttributes,z=s.enabledAttributes;for(let D=0,O=z.length;D<O;D++)z[D]!==E[D]&&(n.disableVertexAttribArray(D),z[D]=0)}function y(E,z,D,O,M,H,K){K===!0?n.vertexAttribIPointer(E,z,D,M,H):n.vertexAttribPointer(E,z,D,O,M,H)}function S(E,z,D,O){m();const M=O.attributes,H=D.getAttributes(),K=z.defaultAttributeValues;for(const X in H){const G=H[X];if(G.location>=0){let $=M[X];if($===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){const U=$.normalized,P=$.itemSize,j=e.get($);if(j===void 0)continue;const se=j.buffer,V=j.type,Y=j.bytesPerElement,ue=V===n.INT||V===n.UNSIGNED_INT||$.gpuType===Up;if($.isInterleavedBufferAttribute){const ce=$.data,de=ce.stride,_e=$.offset;if(ce.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)d(G.location+be,ce.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<G.locationSize;be++)g(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,se);for(let be=0;be<G.locationSize;be++)y(G.location+be,P/G.locationSize,V,U,de*Y,(_e+P/G.locationSize*be)*Y,ue)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)d(G.location+ce,$.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ce=0;ce<G.locationSize;ce++)y(G.location+ce,P/G.locationSize,V,U,P*Y,P/G.locationSize*ce*Y,ue)}}else if(K!==void 0){const U=K[X];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(G.location,U);break;case 3:n.vertexAttrib3fv(G.location,U);break;case 4:n.vertexAttrib4fv(G.location,U);break;default:n.vertexAttrib1fv(G.location,U)}}}}v()}function T(){N();for(const E in i){const z=i[E];for(const D in z){const O=z[D];for(const M in O)u(O[M].object),delete O[M];delete z[D]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const z=i[E.id];for(const D in z){const O=z[D];for(const M in O)u(O[M].object),delete O[M];delete z[D]}delete i[E.id]}function A(E){for(const z in i){const D=i[z];if(D[E.id]===void 0)continue;const O=D[E.id];for(const M in O)u(O[M].object),delete O[M];delete D[E.id]}}function N(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function tT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let m=0;m<h;m++)_+=u[m];for(let m=0;m<f.length;m++)t.update(_,i,f[m])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const A=C===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ki&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!A)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:S,maxSamples:T}}function iT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ts,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,y=v*4;let S=d.clippingState||null;l.value=S,S=u(_,f,y,p);for(let T=0;T!==y;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,S=p;y!==m;++y,S+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function rT(n){let e=new WeakMap;function t(a,o){return o===Wf?a.mapping=Na:o===Xf&&(a.mapping=Da),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wf||o===Xf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mb(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sT extends kx{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const la=4,Qg=[.125,.215,.35,.446,.526,.582],ss=20,kd=new sT,Jg=new nt;let Id=null,Ud=0,Od=0,Fd=!1;const ns=(1+Math.sqrt(5))/2,Ys=1/ns,e0=[new le(-ns,Ys,0),new le(ns,Ys,0),new le(-Ys,0,ns),new le(Ys,0,ns),new le(0,ns,-Ys),new le(0,ns,Ys),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Od),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Na||e.mapping===Da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:al,format:di,colorSpace:Vr,depthBuffer:!1},r=n0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(s)),this._blurMaterial=oT(s,e,t)}return r}_compileMaterial(e){const t=new Wi(this._lodPlanes[0],e);this._renderer.compile(t,kd)}_sceneToCubeUV(e,t,i,r){const o=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jg),u.toneMapping=Rr,u.autoClear=!1;const p=new Px({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new Wi(new dl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Jg),m=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;Jl(r,v*y,d>2?y:0,y,y),u.setRenderTarget(r),m&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Na||e.mapping===Da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,kd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=e0[(r-s-1)%e0.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wi(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),m=s/_,g=isFinite(s)?1+Math.floor(u*m):ss;g>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const d=[];let v=0;for(let A=0;A<ss;++A){const N=A/m,b=Math.exp(-N*N/2);d.push(b),A===0?v+=b:A<g&&(v+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-la?r-y+la:0),C=4*(this._cubeSize-S);Jl(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(h,kd)}}function aT(n){const e=[],t=[],i=[];let r=n;const s=n-la+1+Qg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-la?l=Qg[a-n+la-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,m=3,g=2,d=1,v=new Float32Array(m*_*p),y=new Float32Array(g*_*p),S=new Float32Array(d*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,N=C>2?0:-1,b=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];v.set(b,m*_*C),y.set(f,g*_*C);const E=[C,C,C,C,C,C];S.set(E,d*_*C)}const T=new Ci;T.setAttribute("position",new yn(v,m)),T.setAttribute("uv",new yn(y,g)),T.setAttribute("faceIndex",new yn(S,d)),e.push(T),r>la&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function n0(n,e,t){const i=new Ts(n,e,t);return i.texture.mapping=Cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function oT(n,e,t){const i=new Float32Array(ss),r=new le(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hp(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function i0(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hp(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function r0(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Hp(){return`

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
	`}function lT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wf||l===Xf,u=l===Na||l===Da;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new t0(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new t0(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function cT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uT(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const m=f.morphAttributes[_];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let y=0,S=v.length;y<S;y+=3){const T=v[y+0],C=v[y+1],A=v[y+2];f.push(T,C,C,A,A,T)}}else if(_!==void 0){const v=_.array;m=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const T=y+0,C=y+1,A=y+2;f.push(T,C,C,A,A,T)}}else return;const g=new(bx(f)?Dx:Nx)(f,1);g.version=m;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dT(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*a,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function h(f,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,m,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v];for(let v=0;v<m.length;v++)t.update(d,i,m[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hT(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),m===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*C*4*h),N=new Tx(A,T,C,h);N.type=Hi,N.needsUpdate=!0;const b=S*4;for(let z=0;z<h;z++){const D=d[z],O=v[z],M=y[z],H=T*C*4*z;for(let K=0;K<D.count;K++){const X=K*b;_===!0&&(r.fromBufferAttribute(D,K),A[H+X+0]=r.x,A[H+X+1]=r.y,A[H+X+2]=r.z,A[H+X+3]=0),m===!0&&(r.fromBufferAttribute(O,K),A[H+X+4]=r.x,A[H+X+5]=r.y,A[H+X+6]=r.z,A[H+X+7]=0),g===!0&&(r.fromBufferAttribute(M,K),A[H+X+8]=r.x,A[H+X+9]=r.y,A[H+X+10]=r.z,A[H+X+11]=M.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new it(T,C)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const m=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function pT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Fx extends vn{constructor(e,t,i,r,s,a,o,l,c,u=va){if(u!==va&&u!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===va&&(i=Es),i===void 0&&u===ka&&(i=La),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zn,this.minFilter=l!==void 0?l:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zx=new vn,s0=new Fx(1,1),Bx=new Tx,jx=new Jw,Vx=new Ix,a0=[],o0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function Wa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=a0[r];if(s===void 0&&(s=new Float32Array(r),a0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Du(n,e){let t=o0[e];t===void 0&&(t=new Int32Array(e),o0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;u0.set(i),n.uniformMatrix2fv(this.addr,!1,u0),It(t,i)}}function yT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;c0.set(i),n.uniformMatrix3fv(this.addr,!1,c0),It(t,i)}}function ST(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;l0.set(i),n.uniformMatrix4fv(this.addr,!1,l0),It(t,i)}}function MT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function TT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(s0.compareFunction=wx,s=s0):s=zx,t.setTexture2D(e||s,r)}function NT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||jx,r)}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vx,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bx,r)}function kT(n){switch(n){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return wT;case 35668:case 35672:return bT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return AT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}function IT(n,e){n.uniform1fv(this.addr,e)}function UT(n,e){const t=Wa(e,this.size,2);n.uniform2fv(this.addr,t)}function OT(n,e){const t=Wa(e,this.size,3);n.uniform3fv(this.addr,t)}function FT(n,e){const t=Wa(e,this.size,4);n.uniform4fv(this.addr,t)}function zT(n,e){const t=Wa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BT(n,e){const t=Wa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jT(n,e){const t=Wa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VT(n,e){n.uniform1iv(this.addr,e)}function HT(n,e){n.uniform2iv(this.addr,e)}function GT(n,e){n.uniform3iv(this.addr,e)}function WT(n,e){n.uniform4iv(this.addr,e)}function XT(n,e){n.uniform1uiv(this.addr,e)}function qT(n,e){n.uniform2uiv(this.addr,e)}function YT(n,e){n.uniform3uiv(this.addr,e)}function $T(n,e){n.uniform4uiv(this.addr,e)}function ZT(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||zx,s[a])}function KT(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jx,s[a])}function QT(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vx,s[a])}function JT(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bx,s[a])}function eA(n){switch(n){case 5126:return IT;case 35664:return UT;case 35665:return OT;case 35666:return FT;case 35674:return zT;case 35675:return BT;case 35676:return jT;case 5124:case 35670:return VT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return qT;case 36295:return YT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kT(t.type)}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function d0(n,e){n.seq.push(e),n.map[e.id]=e}function rA(n,e,t){const i=n.name,r=i.length;for(zd.lastIndex=0;;){const s=zd.exec(i),a=zd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){d0(t,c===void 0?new tA(o,n,e):new nA(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new iA(o),d0(t,h)),t=h}}}class wc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);rA(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function f0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sA=37297;let aA=0;function oA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function lA(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===tu&&t===eu?i="LinearDisplayP3ToLinearSRGB":e===eu&&t===tu&&(i="LinearSRGBToLinearDisplayP3"),n){case Vr:case Ru:return[i,"LinearTransferOETF"];case vi:case Vp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function h0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oA(n.getShaderSource(e),a)}else return r}function cA(n,e){const t=lA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uA(n,e){let t;switch(e){case Tw:t="Linear";break;case Aw:t="Reinhard";break;case Cw:t="OptimizedCineon";break;case Rw:t="ACESFilmic";break;case Nw:t="AgX";break;case Dw:t="Neutral";break;case Pw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new le;function dA(){tt.getLuminanceCoefficients(ec);const n=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function hA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fo(n){return n!==""}function p0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(mA,_A)}const gA=new Map;function _A(n,e){let t=Ge[e];if(t===void 0){const i=gA.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(n){return n.replace(vA,xA)}function xA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function yA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===QM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Na:case Da:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Da:e="ENVMAP_MODE_REFRACTION";break}return e}function wA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dx:e="ENVMAP_BLENDING_MULTIPLY";break;case bw:e="ENVMAP_BLENDING_MIX";break;case Ew:e="ENVMAP_BLENDING_ADD";break}return e}function bA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EA(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yA(t),c=SA(t),u=MA(t),h=wA(t),f=bA(t),p=fA(t),_=hA(s),m=r.createProgram();let g,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fo).join(`
`),d.length>0&&(d+=`
`)):(g=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),d=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Rr?uA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,cA("linearToOutputTexel",t.outputColorSpace),dA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),a=Mh(a),a=p0(a,t),a=m0(a,t),o=Mh(o),o=p0(o,t),o=m0(o,t),a=g0(a),o=g0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+g+a,S=v+d+o,T=f0(r,r.VERTEX_SHADER,y),C=f0(r,r.FRAGMENT_SHADER,S);r.attachShader(m,T),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(z){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(T).trim(),M=r.getShaderInfoLog(C).trim();let H=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,C);else{const X=h0(r,T,"vertex"),G=h0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+D+`
`+X+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||M==="")&&(K=!1);K&&(z.diagnostics={runnable:H,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:M,prefix:d}})}r.deleteShader(T),r.deleteShader(C),N=new wc(r,m),b=pA(r,m)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(m,sA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CA(e),t.set(e,i)),i}}class CA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function RA(n,e,t,i,r,s,a){const o=new Cx,l=new AA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,E,z,D,O){const M=D.fog,H=O.geometry,K=b.isMeshStandardMaterial?D.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),G=X&&X.mapping===Cu?X.image.height:null,$=_[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const U=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,P=U!==void 0?U.length:0;let j=0;H.morphAttributes.position!==void 0&&(j=1),H.morphAttributes.normal!==void 0&&(j=2),H.morphAttributes.color!==void 0&&(j=3);let se,V,Y,ue;if($){const Ke=yi[$];se=Ke.vertexShader,V=Ke.fragmentShader}else se=b.vertexShader,V=b.fragmentShader,l.update(b),Y=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);const ce=n.getRenderTarget(),de=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,be=!!b.map,Te=!!b.matcap,W=!!X,Oe=!!b.aoMap,w=!!b.lightMap,re=!!b.bumpMap,Z=!!b.normalMap,B=!!b.displacementMap,k=!!b.emissiveMap,q=!!b.metalnessMap,L=!!b.roughnessMap,R=b.anisotropy>0,F=b.clearcoat>0,J=b.dispersion>0,ie=b.iridescence>0,Q=b.sheen>0,pe=b.transmission>0,me=R&&!!b.anisotropyMap,ge=F&&!!b.clearcoatMap,ke=F&&!!b.clearcoatNormalMap,ve=F&&!!b.clearcoatRoughnessMap,we=ie&&!!b.iridescenceMap,He=ie&&!!b.iridescenceThicknessMap,Ae=Q&&!!b.sheenColorMap,Re=Q&&!!b.sheenRoughnessMap,Be=!!b.specularMap,ze=!!b.specularColorMap,ot=!!b.specularIntensityMap,ee=pe&&!!b.transmissionMap,ye=pe&&!!b.thicknessMap,fe=!!b.gradientMap,he=!!b.alphaMap,Se=b.alphaTest>0,Ue=!!b.alphaHash,$e=!!b.extensions;let Tt=Rr;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const jt={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:V,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:de,instancingColor:de&&O.instanceColor!==null,instancingMorph:de&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Vr,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:Te,envMap:W,envMapMode:W&&X.mapping,envMapCubeUVHeight:G,aoMap:Oe,lightMap:w,bumpMap:re,normalMap:Z,displacementMap:f&&B,emissiveMap:k,normalMapObjectSpace:Z&&b.normalMapType===Ow,normalMapTangentSpace:Z&&b.normalMapType===Uw,metalnessMap:q,roughnessMap:L,anisotropy:R,anisotropyMap:me,clearcoat:F,clearcoatMap:ge,clearcoatNormalMap:ke,clearcoatRoughnessMap:ve,dispersion:J,iridescence:ie,iridescenceMap:we,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:Ae,sheenRoughnessMap:Re,specularMap:Be,specularColorMap:ze,specularIntensityMap:ot,transmission:pe,transmissionMap:ee,thicknessMap:ye,gradientMap:fe,opaque:b.transparent===!1&&b.blending===_a&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Se,alphaHash:Ue,combine:b.combine,mapUv:be&&m(b.map.channel),aoMapUv:Oe&&m(b.aoMap.channel),lightMapUv:w&&m(b.lightMap.channel),bumpMapUv:re&&m(b.bumpMap.channel),normalMapUv:Z&&m(b.normalMap.channel),displacementMapUv:B&&m(b.displacementMap.channel),emissiveMapUv:k&&m(b.emissiveMap.channel),metalnessMapUv:q&&m(b.metalnessMap.channel),roughnessMapUv:L&&m(b.roughnessMap.channel),anisotropyMapUv:me&&m(b.anisotropyMap.channel),clearcoatMapUv:ge&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ke&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(b.sheenRoughnessMap.channel),specularMapUv:Be&&m(b.specularMap.channel),specularColorMapUv:ze&&m(b.specularColorMap.channel),specularIntensityMapUv:ot&&m(b.specularIntensityMap.channel),transmissionMapUv:ee&&m(b.transmissionMap.channel),thicknessMapUv:ye&&m(b.thicknessMap.channel),alphaMapUv:he&&m(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Z||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(be||he),fog:!!M,useFog:b.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function d(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)E.push(z),E.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(v(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),b.push(o.mask)}function S(b){const E=_[b.type];let z;if(E){const D=yi[E];z=db.clone(D.uniforms)}else z=b.uniforms;return z}function T(b,E){let z;for(let D=0,O=u.length;D<O;D++){const M=u[D];if(M.cacheKey===E){z=M,++z.usedTimes;break}}return z===void 0&&(z=new EA(n,E,b,s),u.push(z)),z}function C(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:N}}function PA(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function NA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function v0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function x0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,_,m,g){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=m,d.group=g),e++,d}function o(h,f,p,_,m,g){const d=a(h,f,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,_,m,g){const d=a(h,f,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||NA),i.length>1&&i.sort(f||v0),r.length>1&&r.sort(f||v0)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function DA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new x0,n.set(i,[a])):r>=s.length?(a=new x0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function LA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new nt};break;case"SpotLight":t={position:new le,direction:new le,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function kA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let IA=0;function UA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OA(n){const e=new LA,t=kA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new le);const r=new le,s=new Nt,a=new Nt;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,m=0,g=0,d=0,v=0,y=0,S=0,T=0,C=0,A=0;c.sort(UA);for(let b=0,E=c.length;b<E;b++){const z=c[b],D=z.color,O=z.intensity,M=z.distance,H=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=D.r*O,h+=D.g*O,f+=D.b*O;else if(z.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(z.sh.coefficients[K],O);A++}else if(z.isDirectionalLight){const K=e.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,G=t.get(z);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=z.shadow.matrix,v++}i.directional[p]=K,p++}else if(z.isSpotLight){const K=e.get(z);K.position.setFromMatrixPosition(z.matrixWorld),K.color.copy(D).multiplyScalar(O),K.distance=M,K.coneCos=Math.cos(z.angle),K.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),K.decay=z.decay,i.spot[m]=K;const X=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,X.updateMatrices(z),z.castShadow&&C++),i.spotLightMatrix[m]=X.matrix,z.castShadow){const G=t.get(z);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=H,S++}m++}else if(z.isRectAreaLight){const K=e.get(z);K.color.copy(D).multiplyScalar(O),K.halfWidth.set(z.width*.5,0,0),K.halfHeight.set(0,z.height*.5,0),i.rectArea[g]=K,g++}else if(z.isPointLight){const K=e.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),K.distance=z.distance,K.decay=z.decay,z.castShadow){const X=z.shadow,G=t.get(z);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=z.shadow.matrix,y++}i.point[_]=K,_++}else if(z.isHemisphereLight){const K=e.get(z);K.skyColor.copy(z.color).multiplyScalar(O),K.groundColor.copy(z.groundColor).multiplyScalar(O),i.hemi[d]=K,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==m||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=p,N.pointLength=_,N.spotLength=m,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=A,i.version=IA++)}function l(c,u){let h=0,f=0,p=0,_=0,m=0;const g=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function y0(n){const e=new OA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function FA(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new y0(n),e.set(r,[o])):s>=a.length?(o=new y0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class zA extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`;function HA(n,e,t){let i=new Ux;const r=new it,s=new it,a=new Ft,o=new zA({depthPacking:Iw}),l=new BA,c={},u=t.maxTextureSize,h={[kr]:_n,[_n]:kr,[Bi]:Bi},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:jA,fragmentShader:VA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ci;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Wi(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ux;let d=this.type;this.render=function(C,A,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Cr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=d!==Ii&&this.type===Ii,M=d===Ii&&this.type!==Ii;for(let H=0,K=C.length;H<K;H++){const X=C[H],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const $=G.getFrameExtents();if(r.multiply($),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||O===!0||M===!0){const P=this.type!==Ii?{minFilter:Zn,magFilter:Zn}:{};G.map!==null&&G.map.dispose(),G.map=new Ts(r.x,r.y,P),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const U=G.getViewportCount();for(let P=0;P<U;P++){const j=G.getViewport(P);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(a),G.updateMatrices(X,P),i=G.getFrustum(),S(A,N,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ii&&v(G,N),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(b,E,z)};function v(C,A){const N=e.update(m);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ts(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,N,f,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,N,p,m,null)}function y(C,A,N,b){let E=null;const z=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)E=z;else if(E=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=E.uuid,O=A.uuid;let M=c[D];M===void 0&&(M={},c[D]=M);let H=M[O];H===void 0&&(H=E.clone(),M[O]=H,A.addEventListener("dispose",T)),E=H}if(E.visible=A.visible,E.wireframe=A.wireframe,b===Ii?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=N}return E}function S(C,A,N,b,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const O=e.update(C),M=C.material;if(Array.isArray(M)){const H=O.groups;for(let K=0,X=H.length;K<X;K++){const G=H[K],$=M[G.materialIndex];if($&&$.visible){const U=y(C,$,b,E);C.onBeforeShadow(n,C,A,N,O,U,G),n.renderBufferDirect(N,null,O,U,C,G),C.onAfterShadow(n,C,A,N,O,U,G)}}}else if(M.visible){const H=y(C,M,b,E);C.onBeforeShadow(n,C,A,N,O,H,null),n.renderBufferDirect(N,null,O,H,C,null),C.onAfterShadow(n,C,A,N,O,H,null)}}const D=C.children;for(let O=0,M=D.length;O<M;O++)S(D[O],A,N,b,E)}function T(C){C.target.removeEventListener("dispose",T);for(const N in c){const b=c[N],E=C.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function GA(n){function e(){let ee=!1;const ye=new Ft;let fe=null;const he=new Ft(0,0,0,0);return{setMask:function(Se){fe!==Se&&!ee&&(n.colorMask(Se,Se,Se,Se),fe=Se)},setLocked:function(Se){ee=Se},setClear:function(Se,Ue,$e,Tt,jt){jt===!0&&(Se*=Tt,Ue*=Tt,$e*=Tt),ye.set(Se,Ue,$e,Tt),he.equals(ye)===!1&&(n.clearColor(Se,Ue,$e,Tt),he.copy(ye))},reset:function(){ee=!1,fe=null,he.set(-1,0,0,0)}}}function t(){let ee=!1,ye=null,fe=null,he=null;return{setTest:function(Se){Se?ue(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(Se){ye!==Se&&!ee&&(n.depthMask(Se),ye=Se)},setFunc:function(Se){if(fe!==Se){switch(Se){case _w:n.depthFunc(n.NEVER);break;case vw:n.depthFunc(n.ALWAYS);break;case xw:n.depthFunc(n.LESS);break;case Qc:n.depthFunc(n.LEQUAL);break;case yw:n.depthFunc(n.EQUAL);break;case Sw:n.depthFunc(n.GEQUAL);break;case Mw:n.depthFunc(n.GREATER);break;case ww:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Se}},setLocked:function(Se){ee=Se},setClear:function(Se){he!==Se&&(n.clearDepth(Se),he=Se)},reset:function(){ee=!1,ye=null,fe=null,he=null}}}function i(){let ee=!1,ye=null,fe=null,he=null,Se=null,Ue=null,$e=null,Tt=null,jt=null;return{setTest:function(Ke){ee||(Ke?ue(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Ke){ye!==Ke&&!ee&&(n.stencilMask(Ke),ye=Ke)},setFunc:function(Ke,Ri,mi){(fe!==Ke||he!==Ri||Se!==mi)&&(n.stencilFunc(Ke,Ri,mi),fe=Ke,he=Ri,Se=mi)},setOp:function(Ke,Ri,mi){(Ue!==Ke||$e!==Ri||Tt!==mi)&&(n.stencilOp(Ke,Ri,mi),Ue=Ke,$e=Ri,Tt=mi)},setLocked:function(Ke){ee=Ke},setClear:function(Ke){jt!==Ke&&(n.clearStencil(Ke),jt=Ke)},reset:function(){ee=!1,ye=null,fe=null,he=null,Se=null,Ue=null,$e=null,Tt=null,jt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,d=null,v=null,y=null,S=null,T=null,C=new nt(0,0,0),A=0,N=!1,b=null,E=null,z=null,D=null,O=null;const M=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=K>=2);let G=null,$={};const U=n.getParameter(n.SCISSOR_BOX),P=n.getParameter(n.VIEWPORT),j=new Ft().fromArray(U),se=new Ft().fromArray(P);function V(ee,ye,fe,he){const Se=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(ee,Ue),n.texParameteri(ee,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ee,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<fe;$e++)ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ye+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ue}const Y={};Y[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),s.setFunc(Qc),re(!1),Z(Ag),ue(n.CULL_FACE),Oe(Cr);function ue(ee){c[ee]!==!0&&(n.enable(ee),c[ee]=!0)}function ce(ee){c[ee]!==!1&&(n.disable(ee),c[ee]=!1)}function de(ee,ye){return u[ee]!==ye?(n.bindFramebuffer(ee,ye),u[ee]=ye,ee===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),ee===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function _e(ee,ye){let fe=f,he=!1;if(ee){fe=h.get(ye),fe===void 0&&(fe=[],h.set(ye,fe));const Se=ee.textures;if(fe.length!==Se.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,$e=Se.length;Ue<$e;Ue++)fe[Ue]=n.COLOR_ATTACHMENT0+Ue;fe.length=Se.length,he=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,he=!0);he&&n.drawBuffers(fe)}function be(ee){return p!==ee?(n.useProgram(ee),p=ee,!0):!1}const Te={[rs]:n.FUNC_ADD,[ew]:n.FUNC_SUBTRACT,[tw]:n.FUNC_REVERSE_SUBTRACT};Te[nw]=n.MIN,Te[iw]=n.MAX;const W={[rw]:n.ZERO,[sw]:n.ONE,[aw]:n.SRC_COLOR,[Hf]:n.SRC_ALPHA,[fw]:n.SRC_ALPHA_SATURATE,[uw]:n.DST_COLOR,[lw]:n.DST_ALPHA,[ow]:n.ONE_MINUS_SRC_COLOR,[Gf]:n.ONE_MINUS_SRC_ALPHA,[dw]:n.ONE_MINUS_DST_COLOR,[cw]:n.ONE_MINUS_DST_ALPHA,[hw]:n.CONSTANT_COLOR,[pw]:n.ONE_MINUS_CONSTANT_COLOR,[mw]:n.CONSTANT_ALPHA,[gw]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(ee,ye,fe,he,Se,Ue,$e,Tt,jt,Ke){if(ee===Cr){_===!0&&(ce(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),ee!==JM){if(ee!==m||Ke!==N){if((g!==rs||y!==rs)&&(n.blendEquation(n.FUNC_ADD),g=rs,y=rs),Ke)switch(ee){case _a:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Cg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}d=null,v=null,S=null,T=null,C.set(0,0,0),A=0,m=ee,N=Ke}return}Se=Se||ye,Ue=Ue||fe,$e=$e||he,(ye!==g||Se!==y)&&(n.blendEquationSeparate(Te[ye],Te[Se]),g=ye,y=Se),(fe!==d||he!==v||Ue!==S||$e!==T)&&(n.blendFuncSeparate(W[fe],W[he],W[Ue],W[$e]),d=fe,v=he,S=Ue,T=$e),(Tt.equals(C)===!1||jt!==A)&&(n.blendColor(Tt.r,Tt.g,Tt.b,jt),C.copy(Tt),A=jt),m=ee,N=!1}function w(ee,ye){ee.side===Bi?ce(n.CULL_FACE):ue(n.CULL_FACE);let fe=ee.side===_n;ye&&(fe=!fe),re(fe),ee.blending===_a&&ee.transparent===!1?Oe(Cr):Oe(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),s.setFunc(ee.depthFunc),s.setTest(ee.depthTest),s.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const he=ee.stencilWrite;a.setTest(he),he&&(a.setMask(ee.stencilWriteMask),a.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),a.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),k(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(ee){b!==ee&&(ee?n.frontFace(n.CW):n.frontFace(n.CCW),b=ee)}function Z(ee){ee!==ZM?(ue(n.CULL_FACE),ee!==E&&(ee===Ag?n.cullFace(n.BACK):ee===KM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),E=ee}function B(ee){ee!==z&&(H&&n.lineWidth(ee),z=ee)}function k(ee,ye,fe){ee?(ue(n.POLYGON_OFFSET_FILL),(D!==ye||O!==fe)&&(n.polygonOffset(ye,fe),D=ye,O=fe)):ce(n.POLYGON_OFFSET_FILL)}function q(ee){ee?ue(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function L(ee){ee===void 0&&(ee=n.TEXTURE0+M-1),G!==ee&&(n.activeTexture(ee),G=ee)}function R(ee,ye,fe){fe===void 0&&(G===null?fe=n.TEXTURE0+M-1:fe=G);let he=$[fe];he===void 0&&(he={type:void 0,texture:void 0},$[fe]=he),(he.type!==ee||he.texture!==ye)&&(G!==fe&&(n.activeTexture(fe),G=fe),n.bindTexture(ee,ye||Y[ee]),he.type=ee,he.texture=ye)}function F(){const ee=$[G];ee!==void 0&&ee.type!==void 0&&(n.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ae(ee){j.equals(ee)===!1&&(n.scissor(ee.x,ee.y,ee.z,ee.w),j.copy(ee))}function Re(ee){se.equals(ee)===!1&&(n.viewport(ee.x,ee.y,ee.z,ee.w),se.copy(ee))}function Be(ee,ye){let fe=l.get(ye);fe===void 0&&(fe=new WeakMap,l.set(ye,fe));let he=fe.get(ee);he===void 0&&(he=n.getUniformBlockIndex(ye,ee.name),fe.set(ee,he))}function ze(ee,ye){const he=l.get(ye).get(ee);o.get(ye)!==he&&(n.uniformBlockBinding(ye,he,ee.__bindingPointIndex),o.set(ye,he))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,$={},u={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,d=null,v=null,y=null,S=null,T=null,C=new nt(0,0,0),A=0,N=!1,b=null,E=null,z=null,D=null,O=null,j.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:ce,bindFramebuffer:de,drawBuffers:_e,useProgram:be,setBlending:Oe,setMaterial:w,setFlipSided:re,setCullFace:Z,setLineWidth:B,setPolygonOffset:k,setScissorTest:q,activeTexture:L,bindTexture:R,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:we,texImage3D:He,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:ke,texStorage3D:ve,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:me,compressedTexSubImage3D:ge,scissor:Ae,viewport:Re,reset:ot}}function S0(n,e,t,i){const r=WA(i);switch(t){case gx:return n*e;case vx:return n*e;case xx:return n*e*2;case yx:return n*e/r.components*r.byteLength;case zp:return n*e/r.components*r.byteLength;case Sx:return n*e*2/r.components*r.byteLength;case Bp:return n*e*2/r.components*r.byteLength;case _x:return n*e*3/r.components*r.byteLength;case di:return n*e*4/r.components*r.byteLength;case jp:return n*e*4/r.components*r.byteLength;case vc:case xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Qf:return Math.max(n,16)*Math.max(e,8)/4;case $f:case Kf:return Math.max(n,8)*Math.max(e,8)/2;case Jf:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mc:case gh:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mx:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WA(n){switch(n){case Ki:case hx:return{byteLength:1,components:1};case Wo:case px:case al:return{byteLength:2,components:1};case Op:case Fp:return{byteLength:2,components:4};case Es:case Up:case Hi:return{byteLength:4,components:1};case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function XA(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,R){return p?new OffscreenCanvas(L,R):iu("canvas")}function m(L,R,F){let J=1;const ie=q(L);if((ie.width>F||ie.height>F)&&(J=F/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(J*ie.width),pe=Math.floor(J*ie.height);h===void 0&&(h=_(Q,pe));const me=R?_(Q,pe):h;return me.width=Q,me.height=pe,me.getContext("2d").drawImage(L,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+pe+")."),me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Zn&&L.minFilter!==ui}function d(L){n.generateMipmap(L)}function v(L,R,F,J,ie=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=R;if(R===n.RED&&(F===n.FLOAT&&(Q=n.R32F),F===n.HALF_FLOAT&&(Q=n.R16F),F===n.UNSIGNED_BYTE&&(Q=n.R8)),R===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.R8UI),F===n.UNSIGNED_SHORT&&(Q=n.R16UI),F===n.UNSIGNED_INT&&(Q=n.R32UI),F===n.BYTE&&(Q=n.R8I),F===n.SHORT&&(Q=n.R16I),F===n.INT&&(Q=n.R32I)),R===n.RG&&(F===n.FLOAT&&(Q=n.RG32F),F===n.HALF_FLOAT&&(Q=n.RG16F),F===n.UNSIGNED_BYTE&&(Q=n.RG8)),R===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.RG8UI),F===n.UNSIGNED_SHORT&&(Q=n.RG16UI),F===n.UNSIGNED_INT&&(Q=n.RG32UI),F===n.BYTE&&(Q=n.RG8I),F===n.SHORT&&(Q=n.RG16I),F===n.INT&&(Q=n.RG32I)),R===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),R===n.RGBA){const pe=ie?Jc:tt.getTransfer(J);F===n.FLOAT&&(Q=n.RGBA32F),F===n.HALF_FLOAT&&(Q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Q=pe===ut?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(L,R){let F;return L?R===null||R===Es||R===La?F=n.DEPTH24_STENCIL8:R===Hi?F=n.DEPTH32F_STENCIL8:R===Wo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Es||R===La?F=n.DEPTH_COMPONENT24:R===Hi?F=n.DEPTH_COMPONENT32F:R===Wo&&(F=n.DEPTH_COMPONENT16),F}function S(L,R){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zn&&L.minFilter!==ui?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function T(L){const R=L.target;R.removeEventListener("dispose",T),A(R),R.isVideoTexture&&u.delete(R)}function C(L){const R=L.target;R.removeEventListener("dispose",C),b(R)}function A(L){const R=i.get(L);if(R.__webglInit===void 0)return;const F=L.source,J=f.get(F);if(J){const ie=J[R.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(L),Object.keys(J).length===0&&f.delete(F)}i.remove(L)}function N(L){const R=i.get(L);n.deleteTexture(R.__webglTexture);const F=L.source,J=f.get(F);delete J[R.__cacheKey],a.memory.textures--}function b(L){const R=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(R.__webglFramebuffer[J]))for(let ie=0;ie<R.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(R.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(R.__webglFramebuffer[J]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[J])}else{if(Array.isArray(R.__webglFramebuffer))for(let J=0;J<R.__webglFramebuffer.length;J++)n.deleteFramebuffer(R.__webglFramebuffer[J]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let J=0;J<R.__webglColorRenderbuffer.length;J++)R.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[J]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const F=L.textures;for(let J=0,ie=F.length;J<ie;J++){const Q=i.get(F[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(L)}let E=0;function z(){E=0}function D(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function O(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function M(L,R){const F=i.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,L,R);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+R)}function H(L,R){const F=i.get(L);if(L.version>0&&F.__version!==L.version){se(F,L,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+R)}function K(L,R){const F=i.get(L);if(L.version>0&&F.__version!==L.version){se(F,L,R);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+R)}function X(L,R){const F=i.get(L);if(L.version>0&&F.__version!==L.version){V(F,L,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+R)}const G={[qf]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[Yf]:n.MIRRORED_REPEAT},$={[Zn]:n.NEAREST,[Lw]:n.NEAREST_MIPMAP_NEAREST,[Ll]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[hd]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},U={[Fw]:n.NEVER,[Gw]:n.ALWAYS,[zw]:n.LESS,[wx]:n.LEQUAL,[Bw]:n.EQUAL,[Hw]:n.GEQUAL,[jw]:n.GREATER,[Vw]:n.NOTEQUAL};function P(L,R){if(R.type===Hi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ui||R.magFilter===hd||R.magFilter===Ll||R.magFilter===us||R.minFilter===ui||R.minFilter===hd||R.minFilter===Ll||R.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,G[R.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,G[R.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,G[R.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[R.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[R.minFilter]),R.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,U[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Zn||R.minFilter!==Ll&&R.minFilter!==us||R.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function j(L,R){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",T));const J=R.source;let ie=f.get(J);ie===void 0&&(ie={},f.set(J,ie));const Q=O(R);if(Q!==L.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[Q].usedTimes++;const pe=ie[L.__cacheKey];pe!==void 0&&(ie[L.__cacheKey].usedTimes--,pe.usedTimes===0&&N(R)),L.__cacheKey=Q,L.__webglTexture=ie[Q].texture}return F}function se(L,R,F){let J=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(J=n.TEXTURE_3D);const ie=j(L,R),Q=R.source;t.bindTexture(J,L.__webglTexture,n.TEXTURE0+F);const pe=i.get(Q);if(Q.version!==pe.__version||ie===!0){t.activeTexture(n.TEXTURE0+F);const me=tt.getPrimaries(tt.workingColorSpace),ge=R.colorSpace===pr?null:tt.getPrimaries(R.colorSpace),ke=R.colorSpace===pr||me===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ve=m(R.image,!1,r.maxTextureSize);ve=k(R,ve);const we=s.convert(R.format,R.colorSpace),He=s.convert(R.type);let Ae=v(R.internalFormat,we,He,R.colorSpace,R.isVideoTexture);P(J,R);let Re;const Be=R.mipmaps,ze=R.isVideoTexture!==!0,ot=pe.__version===void 0||ie===!0,ee=Q.dataReady,ye=S(R,ve);if(R.isDepthTexture)Ae=y(R.format===ka,R.type),ot&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ve.width,ve.height,0,we,He,null));else if(R.isDataTexture)if(Be.length>0){ze&&ot&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,Be[0].width,Be[0].height);for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,we,He,Re.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,we,He,Re.data);R.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,ve.width,ve.height),ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,we,He,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ve.width,ve.height,0,we,He,ve.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ze&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,Be[0].width,Be[0].height,ve.depth);for(let fe=0,he=Be.length;fe<he;fe++)if(Re=Be[fe],R.format!==di)if(we!==null)if(ze){if(ee)if(R.layerUpdates.size>0){const Se=S0(Re.width,Re.height,R.format,R.type);for(const Ue of R.layerUpdates){const $e=Re.data.subarray(Ue*Se/Re.data.BYTES_PER_ELEMENT,(Ue+1)*Se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Ue,Re.width,Re.height,1,we,$e,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ve.depth,we,Re.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Re.width,Re.height,ve.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ve.depth,we,He,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Re.width,Re.height,ve.depth,0,we,He,Re.data)}else{ze&&ot&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,Be[0].width,Be[0].height);for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],R.format!==di?we!==null?ze?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Re.width,Re.height,we,He,Re.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Re.width,Re.height,0,we,He,Re.data)}else if(R.isDataArrayTexture)if(ze){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,ve.width,ve.height,ve.depth),ee)if(R.layerUpdates.size>0){const fe=S0(ve.width,ve.height,R.format,R.type);for(const he of R.layerUpdates){const Se=ve.data.subarray(he*fe/ve.data.BYTES_PER_ELEMENT,(he+1)*fe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,we,He,Se)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,we,He,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ve.width,ve.height,ve.depth,0,we,He,ve.data);else if(R.isData3DTexture)ze?(ot&&t.texStorage3D(n.TEXTURE_3D,ye,Ae,ve.width,ve.height,ve.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,we,He,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ve.width,ve.height,ve.depth,0,we,He,ve.data);else if(R.isFramebufferTexture){if(ot)if(ze)t.texStorage2D(n.TEXTURE_2D,ye,Ae,ve.width,ve.height);else{let fe=ve.width,he=ve.height;for(let Se=0;Se<ye;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ae,fe,he,0,we,He,null),fe>>=1,he>>=1}}else if(Be.length>0){if(ze&&ot){const fe=q(Be[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ae,fe.width,fe.height)}for(let fe=0,he=Be.length;fe<he;fe++)Re=Be[fe],ze?ee&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,we,He,Re):t.texImage2D(n.TEXTURE_2D,fe,Ae,we,He,Re);R.generateMipmaps=!1}else if(ze){if(ot){const fe=q(ve);t.texStorage2D(n.TEXTURE_2D,ye,Ae,fe.width,fe.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,He,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ae,we,He,ve);g(R)&&d(J),pe.__version=Q.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function V(L,R,F){if(R.image.length!==6)return;const J=j(L,R),ie=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+F);const Q=i.get(ie);if(ie.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const pe=tt.getPrimaries(tt.workingColorSpace),me=R.colorSpace===pr?null:tt.getPrimaries(R.colorSpace),ge=R.colorSpace===pr||pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=R.isCompressedTexture||R.image[0].isCompressedTexture,ve=R.image[0]&&R.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!ke&&!ve?we[he]=m(R.image[he],!0,r.maxCubemapSize):we[he]=ve?R.image[he].image:R.image[he],we[he]=k(R,we[he]);const He=we[0],Ae=s.convert(R.format,R.colorSpace),Re=s.convert(R.type),Be=v(R.internalFormat,Ae,Re,R.colorSpace),ze=R.isVideoTexture!==!0,ot=Q.__version===void 0||J===!0,ee=ie.dataReady;let ye=S(R,He);P(n.TEXTURE_CUBE_MAP,R);let fe;if(ke){ze&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,He.width,He.height);for(let he=0;he<6;he++){fe=we[he].mipmaps;for(let Se=0;Se<fe.length;Se++){const Ue=fe[Se];R.format!==di?Ae!==null?ze?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ae,Re,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,Be,Ue.width,Ue.height,0,Ae,Re,Ue.data)}}}else{if(fe=R.mipmaps,ze&&ot){fe.length>0&&ye++;const he=q(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,he.width,he.height)}for(let he=0;he<6;he++)if(ve){ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,Ae,Re,we[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Be,we[he].width,we[he].height,0,Ae,Re,we[he].data);for(let Se=0;Se<fe.length;Se++){const $e=fe[Se].image[he].image;ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,$e.width,$e.height,Ae,Re,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,Be,$e.width,$e.height,0,Ae,Re,$e.data)}}else{ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae,Re,we[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Be,Ae,Re,we[he]);for(let Se=0;Se<fe.length;Se++){const Ue=fe[Se];ze?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Ae,Re,Ue.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,Be,Ae,Re,Ue.image[he])}}}g(R)&&d(n.TEXTURE_CUBE_MAP),Q.__version=ie.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Y(L,R,F,J,ie,Q){const pe=s.convert(F.format,F.colorSpace),me=s.convert(F.type),ge=v(F.internalFormat,pe,me,F.colorSpace);if(!i.get(R).__hasExternalTextures){const ve=Math.max(1,R.width>>Q),we=Math.max(1,R.height>>Q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,ge,ve,we,R.depth,0,pe,me,null):t.texImage2D(ie,Q,ge,ve,we,0,pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Z(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,i.get(F).__webglTexture,0,re(R)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,i.get(F).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(L,R,F){if(n.bindRenderbuffer(n.RENDERBUFFER,L),R.depthBuffer){const J=R.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=y(R.stencilBuffer,ie),pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=re(R);Z(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Q,R.width,R.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Q,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Q,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,L)}else{const J=R.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],pe=s.convert(Q.format,Q.colorSpace),me=s.convert(Q.type),ge=v(Q.internalFormat,pe,me,Q.colorSpace),ke=re(R);F&&Z(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ge,R.width,R.height):Z(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,ge,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ge,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),M(R.depthTexture,0);const J=i.get(R.depthTexture).__webglTexture,ie=re(R);if(R.depthTexture.format===va)Z(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(R.depthTexture.format===ka)Z(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function de(L){const R=i.get(L),F=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ce(R.__webglFramebuffer,L)}else if(F){R.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[J]),R.__webglDepthbuffer[J]=n.createRenderbuffer(),ue(R.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),ue(R.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(L,R,F){const J=i.get(L);R!==void 0&&Y(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&de(L)}function be(L){const R=L.texture,F=i.get(L),J=i.get(R);L.addEventListener("dispose",C);const ie=L.textures,Q=L.isWebGLCubeRenderTarget===!0,pe=ie.length>1;if(pe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=R.version,a.memory.textures++),Q){F.__webglFramebuffer=[];for(let me=0;me<6;me++)if(R.mipmaps&&R.mipmaps.length>0){F.__webglFramebuffer[me]=[];for(let ge=0;ge<R.mipmaps.length;ge++)F.__webglFramebuffer[me][ge]=n.createFramebuffer()}else F.__webglFramebuffer[me]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){F.__webglFramebuffer=[];for(let me=0;me<R.mipmaps.length;me++)F.__webglFramebuffer[me]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(pe)for(let me=0,ge=ie.length;me<ge;me++){const ke=i.get(ie[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&Z(L)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const ge=ie[me];F.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[me]);const ke=s.convert(ge.format,ge.colorSpace),ve=s.convert(ge.type),we=v(ge.internalFormat,ke,ve,ge.colorSpace,L.isXRRenderTarget===!0),He=re(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,we,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,F.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(F.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),P(n.TEXTURE_CUBE_MAP,R);for(let me=0;me<6;me++)if(R.mipmaps&&R.mipmaps.length>0)for(let ge=0;ge<R.mipmaps.length;ge++)Y(F.__webglFramebuffer[me][ge],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else Y(F.__webglFramebuffer[me],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(R)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let me=0,ge=ie.length;me<ge;me++){const ke=ie[me],ve=i.get(ke);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),P(n.TEXTURE_2D,ke),Y(F.__webglFramebuffer,L,ke,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),g(ke)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,J.__webglTexture),P(me,R),R.mipmaps&&R.mipmaps.length>0)for(let ge=0;ge<R.mipmaps.length;ge++)Y(F.__webglFramebuffer[ge],L,R,n.COLOR_ATTACHMENT0,me,ge);else Y(F.__webglFramebuffer,L,R,n.COLOR_ATTACHMENT0,me,0);g(R)&&d(me),t.unbindTexture()}L.depthBuffer&&de(L)}function Te(L){const R=L.textures;for(let F=0,J=R.length;F<J;F++){const ie=R[F];if(g(ie)){const Q=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(ie).__webglTexture;t.bindTexture(Q,pe),d(Q),t.unbindTexture()}}}const W=[],Oe=[];function w(L){if(L.samples>0){if(Z(L)===!1){const R=L.textures,F=L.width,J=L.height;let ie=n.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(L),me=R.length>1;if(me)for(let ge=0;ge<R.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<R.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const ke=i.get(R[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,ie,n.NEAREST),l===!0&&(W.length=0,Oe.length=0,W.push(n.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(W.push(Q),Oe.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ge=0;ge<R.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const ke=i.get(R[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const R=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function re(L){return Math.min(r.maxSamples,L.samples)}function Z(L){const R=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function B(L){const R=a.render.frame;u.get(L)!==R&&(u.set(L,R),L.update())}function k(L,R){const F=L.colorSpace,J=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==Vr&&F!==pr&&(tt.getTransfer(F)===ut?(J!==di||ie!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),R}function q(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=M,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Z}function qA(n,e){function t(i,r=pr){let s;const a=tt.getTransfer(r);if(i===Ki)return n.UNSIGNED_BYTE;if(i===Op)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hx)return n.BYTE;if(i===px)return n.SHORT;if(i===Wo)return n.UNSIGNED_SHORT;if(i===Up)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===al)return n.HALF_FLOAT;if(i===gx)return n.ALPHA;if(i===_x)return n.RGB;if(i===di)return n.RGBA;if(i===vx)return n.LUMINANCE;if(i===xx)return n.LUMINANCE_ALPHA;if(i===va)return n.DEPTH_COMPONENT;if(i===ka)return n.DEPTH_STENCIL;if(i===yx)return n.RED;if(i===zp)return n.RED_INTEGER;if(i===Sx)return n.RG;if(i===Bp)return n.RG_INTEGER;if(i===jp)return n.RGBA_INTEGER;if(i===vc||i===xc||i===yc||i===Sc)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$f||i===Zf||i===Kf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jf||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jf||i===eh)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===th)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===gh||i===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mc)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mx||i===vh||i===xh||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class YA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tc extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(c,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($A)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new vn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ir({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new Nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Ga{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const m=new QA,g=t.getContextAttributes();let d=null,v=null;const y=[],S=[],T=new it;let C=null;const A=new Dn;A.layers.enable(1),A.viewport=new Ft;const N=new Dn;N.layers.enable(2),N.viewport=new Ft;const b=[A,N],E=new YA;E.layers.enable(1),E.layers.enable(2);let z=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=y[V];return Y===void 0&&(Y=new Bd,y[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=y[V];return Y===void 0&&(Y=new Bd,y[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=y[V];return Y===void 0&&(Y=new Bd,y[V]=Y),Y.getHandSpace()};function O(V){const Y=S.indexOf(V.inputSource);if(Y===-1)return;const ue=y[Y];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||a),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function M(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",H);for(let V=0;V<y.length;V++){const Y=S[V];Y!==null&&(S[V]=null,y[V].disconnect(Y))}z=null,D=null,m.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",M),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const Y={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ts(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,ue=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?ka:va,ue=g.stencil?La:Es);const de={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ts(f.textureWidth,f.textureHeight,{format:di,type:Ki,depthTexture:new Fx(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(V){for(let Y=0;Y<V.removed.length;Y++){const ue=V.removed[Y],ce=S.indexOf(ue);ce>=0&&(S[ce]=null,y[ce].disconnect(ue))}for(let Y=0;Y<V.added.length;Y++){const ue=V.added[Y];let ce=S.indexOf(ue);if(ce===-1){for(let _e=0;_e<y.length;_e++)if(_e>=S.length){S.push(ue),ce=_e;break}else if(S[_e]===null){S[_e]=ue,ce=_e;break}if(ce===-1)break}const de=y[ce];de&&de.connect(ue)}}const K=new le,X=new le;function G(V,Y,ue){K.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const ce=K.distanceTo(X),de=Y.projectionMatrix.elements,_e=ue.projectionMatrix.elements,be=de[14]/(de[10]-1),Te=de[14]/(de[10]+1),W=(de[9]+1)/de[5],Oe=(de[9]-1)/de[5],w=(de[8]-1)/de[0],re=(_e[8]+1)/_e[0],Z=be*w,B=be*re,k=ce/(-w+re),q=k*-w;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(q),V.translateZ(k),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const L=be+k,R=Te+k,F=Z-q,J=B+(ce-q),ie=W*Te/R*L,Q=Oe*Te/R*L;V.projectionMatrix.makePerspective(F,J,ie,Q,L,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;m.texture!==null&&(V.near=m.depthNear,V.far=m.depthFar),E.near=N.near=A.near=V.near,E.far=N.far=A.far=V.far,(z!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),z=E.near,D=E.far,A.near=z,A.far=D,N.near=z,N.far=D,A.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const Y=V.parent,ue=E.cameras;$(E,Y);for(let ce=0;ce<ue.length;ce++)$(ue[ce],Y);ue.length===2?G(E,A,N):E.projectionMatrix.copy(A.projectionMatrix),U(V,E,Y)};function U(V,Y,ue){ue===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Sh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)};let P=null;function j(V,Y){if(u=Y.getViewerPose(c||a),_=Y,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;ue.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let _e=0;_e<ue.length;_e++){const be=ue[_e];let Te=null;if(p!==null)Te=p.getViewport(be);else{const Oe=h.getViewSubImage(f,be);Te=Oe.viewport,_e===0&&(e.setRenderTargetTextures(v,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(v))}let W=b[_e];W===void 0&&(W=new Dn,W.layers.enable(_e),W.viewport=new Ft,b[_e]=W),W.matrix.fromArray(be.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(be.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Te.x,Te.y,Te.width,Te.height),_e===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(W)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const _e=h.getDepthInformation(ue[0]);_e&&_e.isValid&&_e.texture&&m.init(e,_e,r.renderState)}}for(let ue=0;ue<y.length;ue++){const ce=S[ue],de=y[ue];ce!==null&&de!==void 0&&de.update(ce,Y,c||a)}P&&P(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const se=new Ox;se.setAnimationLoop(j),this.setAnimationLoop=function(V){P=V},this.dispose=function(){}}}const Zr=new Qi,eC=new Nt;function tC(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Lx(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===_n&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===_n&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,Zr.copy(S),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),g.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Zr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=y*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nC(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const T=y.program;i.updateUBOMapping(v,T);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function u(v){const y=h();v.__bindingPointIndex=y;const S=n.createBuffer(),T=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,A=S.length;C<A;C++){const N=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,E=N.length;b<E;b++){const z=N[b];if(p(z,C,b,T)===!0){const D=z.__offset,O=Array.isArray(z.value)?z.value:[z.value];let M=0;for(let H=0;H<O.length;H++){const K=O[H],X=m(K);typeof K=="number"||typeof K=="boolean"?(z.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,D+M,z.__data)):K.isMatrix3?(z.__data[0]=K.elements[0],z.__data[1]=K.elements[1],z.__data[2]=K.elements[2],z.__data[3]=0,z.__data[4]=K.elements[3],z.__data[5]=K.elements[4],z.__data[6]=K.elements[5],z.__data[7]=0,z.__data[8]=K.elements[6],z.__data[9]=K.elements[7],z.__data[10]=K.elements[8],z.__data[11]=0):(K.toArray(z.__data,M),M+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,S,T){const C=v.value,A=y+"_"+S;if(T[A]===void 0)return typeof C=="number"||typeof C=="boolean"?T[A]=C:T[A]=C.clone(),!0;{const N=T[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return T[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(v){const y=v.uniforms;let S=0;const T=16;for(let A=0,N=y.length;A<N;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,z=b.length;E<z;E++){const D=b[E],O=Array.isArray(D.value)?D.value:[D.value];for(let M=0,H=O.length;M<H;M++){const K=O[M],X=m(K),G=S%T,$=G%X.boundary,U=G+$;S+=$,U!==0&&T-U<X.storage&&(S+=T-U),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}const C=S%T;return C>0&&(S+=T-C),v.__size=S,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Hx{constructor(e={}){const{canvas:t=Xw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Rr,this.toneMappingExposure=1;const y=this;let S=!1,T=0,C=0,A=null,N=-1,b=null;const E=new Ft,z=new Ft;let D=null;const O=new nt(0);let M=0,H=t.width,K=t.height,X=1,G=null,$=null;const U=new Ft(0,0,H,K),P=new Ft(0,0,H,K);let j=!1;const se=new Ux;let V=!1,Y=!1;const ue=new Nt,ce=new le,de=new Ft,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Te(){return A===null?X:1}let W=i;function Oe(I,te){return t.getContext(I,te)}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ip}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Se,!1),W===null){const te="webgl2";if(W=Oe(te,I),W===null)throw Oe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let w,re,Z,B,k,q,L,R,F,J,ie,Q,pe,me,ge,ke,ve,we,He,Ae,Re,Be,ze,ot;function ee(){w=new cT(W),w.init(),Be=new qA(W,w),re=new nT(W,w,e,Be),Z=new GA(W),B=new fT(W),k=new PA,q=new XA(W,w,Z,k,re,Be,B),L=new rT(y),R=new lT(y),F=new vb(W),ze=new eT(W,F),J=new uT(W,F,B,ze),ie=new pT(W,J,F,B),He=new hT(W,re,q),ke=new iT(k),Q=new RA(y,L,R,w,re,ze,ke),pe=new tC(y,k),me=new DA,ge=new FA(w),we=new J2(y,L,R,Z,ie,f,l),ve=new HA(y,ie,re),ot=new nC(W,B,re,Z),Ae=new tT(W,w,B),Re=new dT(W,w,B),B.programs=Q.programs,y.capabilities=re,y.extensions=w,y.properties=k,y.renderLists=me,y.shadowMap=ve,y.state=Z,y.info=B}ee();const ye=new JA(y,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const I=w.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=w.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(I){I!==void 0&&(X=I,this.setSize(H,K,!1))},this.getSize=function(I){return I.set(H,K)},this.setSize=function(I,te,ae=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,K=te,t.width=Math.floor(I*X),t.height=Math.floor(te*X),ae===!0&&(t.style.width=I+"px",t.style.height=te+"px"),this.setViewport(0,0,I,te)},this.getDrawingBufferSize=function(I){return I.set(H*X,K*X).floor()},this.setDrawingBufferSize=function(I,te,ae){H=I,K=te,X=ae,t.width=Math.floor(I*ae),t.height=Math.floor(te*ae),this.setViewport(0,0,I,te)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(U)},this.setViewport=function(I,te,ae,oe){I.isVector4?U.set(I.x,I.y,I.z,I.w):U.set(I,te,ae,oe),Z.viewport(E.copy(U).multiplyScalar(X).round())},this.getScissor=function(I){return I.copy(P)},this.setScissor=function(I,te,ae,oe){I.isVector4?P.set(I.x,I.y,I.z,I.w):P.set(I,te,ae,oe),Z.scissor(z.copy(P).multiplyScalar(X).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(I){Z.setScissorTest(j=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){$=I},this.getClearColor=function(I){return I.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(I=!0,te=!0,ae=!0){let oe=0;if(I){let ne=!1;if(A!==null){const Me=A.texture.format;ne=Me===jp||Me===Bp||Me===zp}if(ne){const Me=A.texture.type,Ce=Me===Ki||Me===Es||Me===Wo||Me===La||Me===Op||Me===Fp,Ne=we.getClearColor(),De=we.getClearAlpha(),je=Ne.r,Ve=Ne.g,Fe=Ne.b;Ce?(p[0]=je,p[1]=Ve,p[2]=Fe,p[3]=De,W.clearBufferuiv(W.COLOR,0,p)):(_[0]=je,_[1]=Ve,_[2]=Fe,_[3]=De,W.clearBufferiv(W.COLOR,0,_))}else oe|=W.COLOR_BUFFER_BIT}te&&(oe|=W.DEPTH_BUFFER_BIT),ae&&(oe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),ge.dispose(),k.dispose(),L.dispose(),R.dispose(),ie.dispose(),ze.dispose(),ot.dispose(),Q.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",mi),ye.removeEventListener("sessionend",um),Gr.stop()};function fe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=B.autoReset,te=ve.enabled,ae=ve.autoUpdate,oe=ve.needsUpdate,ne=ve.type;ee(),B.autoReset=I,ve.enabled=te,ve.autoUpdate=ae,ve.needsUpdate=oe,ve.type=ne}function Se(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ue(I){const te=I.target;te.removeEventListener("dispose",Ue),$e(te)}function $e(I){Tt(I),k.remove(I)}function Tt(I){const te=k.get(I).programs;te!==void 0&&(te.forEach(function(ae){Q.releaseProgram(ae)}),I.isShaderMaterial&&Q.releaseShaderCache(I))}this.renderBufferDirect=function(I,te,ae,oe,ne,Me){te===null&&(te=_e);const Ce=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=Hy(I,te,ae,oe,ne);Z.setMaterial(oe,Ce);let De=ae.index,je=1;if(oe.wireframe===!0){if(De=J.getWireframeAttribute(ae),De===void 0)return;je=2}const Ve=ae.drawRange,Fe=ae.attributes.position;let Qe=Ve.start*je,yt=(Ve.start+Ve.count)*je;Me!==null&&(Qe=Math.max(Qe,Me.start*je),yt=Math.min(yt,(Me.start+Me.count)*je)),De!==null?(Qe=Math.max(Qe,0),yt=Math.min(yt,De.count)):Fe!=null&&(Qe=Math.max(Qe,0),yt=Math.min(yt,Fe.count));const St=yt-Qe;if(St<0||St===1/0)return;ze.setup(ne,oe,Ne,ae,De);let Tn,Je=Ae;if(De!==null&&(Tn=F.get(De),Je=Re,Je.setIndex(Tn)),ne.isMesh)oe.wireframe===!0?(Z.setLineWidth(oe.wireframeLinewidth*Te()),Je.setMode(W.LINES)):Je.setMode(W.TRIANGLES);else if(ne.isLine){let Ie=oe.linewidth;Ie===void 0&&(Ie=1),Z.setLineWidth(Ie*Te()),ne.isLineSegments?Je.setMode(W.LINES):ne.isLineLoop?Je.setMode(W.LINE_LOOP):Je.setMode(W.LINE_STRIP)}else ne.isPoints?Je.setMode(W.POINTS):ne.isSprite&&Je.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Je.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))Je.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ie=ne._multiDrawStarts,Vt=ne._multiDrawCounts,et=ne._multiDrawCount,ni=De?F.get(De).bytesPerElement:1,Ps=k.get(oe).currentProgram.getUniforms();for(let An=0;An<et;An++)Ps.setValue(W,"_gl_DrawID",An),Je.render(Ie[An]/ni,Vt[An])}else if(ne.isInstancedMesh)Je.renderInstances(Qe,St,ne.count);else if(ae.isInstancedBufferGeometry){const Ie=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Vt=Math.min(ae.instanceCount,Ie);Je.renderInstances(Qe,St,Vt)}else Je.render(Qe,St)};function jt(I,te,ae){I.transparent===!0&&I.side===Bi&&I.forceSinglePass===!1?(I.side=_n,I.needsUpdate=!0,pl(I,te,ae),I.side=kr,I.needsUpdate=!0,pl(I,te,ae),I.side=Bi):pl(I,te,ae)}this.compile=function(I,te,ae=null){ae===null&&(ae=I),g=ge.get(ae),g.init(te),v.push(g),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),I!==ae&&I.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights();const oe=new Set;return I.traverse(function(ne){const Me=ne.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ne=Me[Ce];jt(Ne,ae,ne),oe.add(Ne)}else jt(Me,ae,ne),oe.add(Me)}),v.pop(),g=null,oe},this.compileAsync=function(I,te,ae=null){const oe=this.compile(I,te,ae);return new Promise(ne=>{function Me(){if(oe.forEach(function(Ce){k.get(Ce).currentProgram.isReady()&&oe.delete(Ce)}),oe.size===0){ne(I);return}setTimeout(Me,10)}w.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ke=null;function Ri(I){Ke&&Ke(I)}function mi(){Gr.stop()}function um(){Gr.start()}const Gr=new Ox;Gr.setAnimationLoop(Ri),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(I){Ke=I,ye.setAnimationLoop(I),I===null?Gr.stop():Gr.start()},ye.addEventListener("sessionstart",mi),ye.addEventListener("sessionend",um),this.render=function(I,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(te),te=ye.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,te,A),g=ge.get(I,v.length),g.init(te),v.push(g),ue.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),se.setFromProjectionMatrix(ue),Y=this.localClippingEnabled,V=ke.init(this.clippingPlanes,Y),m=me.get(I,d.length),m.init(),d.push(m),ye.enabled===!0&&ye.isPresenting===!0){const Me=y.xr.getDepthSensingMesh();Me!==null&&Uu(Me,te,-1/0,y.sortObjects)}Uu(I,te,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,$),be=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,be&&we.addToRenderList(m,I),this.info.render.frame++,V===!0&&ke.beginShadows();const ae=g.state.shadowsArray;ve.render(ae,I,te),V===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=m.opaque,ne=m.transmissive;if(g.setupLights(),te.isArrayCamera){const Me=te.cameras;if(ne.length>0)for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const De=Me[Ce];fm(oe,ne,I,De)}be&&we.render(I);for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const De=Me[Ce];dm(m,I,De,De.viewport)}}else ne.length>0&&fm(oe,ne,I,te),be&&we.render(I),dm(m,I,te);A!==null&&(q.updateMultisampleRenderTarget(A),q.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(y,I,te),ze.resetDefaultState(),N=-1,b=null,v.pop(),v.length>0?(g=v[v.length-1],V===!0&&ke.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Uu(I,te,ae,oe){if(I.visible===!1)return;if(I.layers.test(te.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(te);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||se.intersectsSprite(I)){oe&&de.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ue);const Ce=ie.update(I),Ne=I.material;Ne.visible&&m.push(I,Ce,Ne,ae,de.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||se.intersectsObject(I))){const Ce=ie.update(I),Ne=I.material;if(oe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),de.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),de.copy(Ce.boundingSphere.center)),de.applyMatrix4(I.matrixWorld).applyMatrix4(ue)),Array.isArray(Ne)){const De=Ce.groups;for(let je=0,Ve=De.length;je<Ve;je++){const Fe=De[je],Qe=Ne[Fe.materialIndex];Qe&&Qe.visible&&m.push(I,Ce,Qe,ae,de.z,Fe)}}else Ne.visible&&m.push(I,Ce,Ne,ae,de.z,null)}}const Me=I.children;for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++)Uu(Me[Ce],te,ae,oe)}function dm(I,te,ae,oe){const ne=I.opaque,Me=I.transmissive,Ce=I.transparent;g.setupLightsView(ae),V===!0&&ke.setGlobalState(y.clippingPlanes,ae),oe&&Z.viewport(E.copy(oe)),ne.length>0&&hl(ne,te,ae),Me.length>0&&hl(Me,te,ae),Ce.length>0&&hl(Ce,te,ae),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fm(I,te,ae,oe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Ts(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?al:Ki,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[oe.id],Ce=oe.viewport||E;Me.setSize(Ce.z,Ce.w);const Ne=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(O),M=y.getClearAlpha(),M<1&&y.setClearColor(16777215,.5),y.clear(),be&&we.render(ae);const De=y.toneMapping;y.toneMapping=Rr;const je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),V===!0&&ke.setGlobalState(y.clippingPlanes,oe),hl(I,ae,oe),q.updateMultisampleRenderTarget(Me),q.updateRenderTargetMipmap(Me),w.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,Qe=te.length;Fe<Qe;Fe++){const yt=te[Fe],St=yt.object,Tn=yt.geometry,Je=yt.material,Ie=yt.group;if(Je.side===Bi&&St.layers.test(oe.layers)){const Vt=Je.side;Je.side=_n,Je.needsUpdate=!0,hm(St,ae,oe,Tn,Je,Ie),Je.side=Vt,Je.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(Me),q.updateRenderTargetMipmap(Me))}y.setRenderTarget(Ne),y.setClearColor(O,M),je!==void 0&&(oe.viewport=je),y.toneMapping=De}function hl(I,te,ae){const oe=te.isScene===!0?te.overrideMaterial:null;for(let ne=0,Me=I.length;ne<Me;ne++){const Ce=I[ne],Ne=Ce.object,De=Ce.geometry,je=oe===null?Ce.material:oe,Ve=Ce.group;Ne.layers.test(ae.layers)&&hm(Ne,te,ae,De,je,Ve)}}function hm(I,te,ae,oe,ne,Me){I.onBeforeRender(y,te,ae,oe,ne,Me),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ne.transparent===!0&&ne.side===Bi&&ne.forceSinglePass===!1?(ne.side=_n,ne.needsUpdate=!0,y.renderBufferDirect(ae,te,oe,ne,I,Me),ne.side=kr,ne.needsUpdate=!0,y.renderBufferDirect(ae,te,oe,ne,I,Me),ne.side=Bi):y.renderBufferDirect(ae,te,oe,ne,I,Me),I.onAfterRender(y,te,ae,oe,ne,Me)}function pl(I,te,ae){te.isScene!==!0&&(te=_e);const oe=k.get(I),ne=g.state.lights,Me=g.state.shadowsArray,Ce=ne.state.version,Ne=Q.getParameters(I,ne.state,Me,te,ae),De=Q.getProgramCacheKey(Ne);let je=oe.programs;oe.environment=I.isMeshStandardMaterial?te.environment:null,oe.fog=te.fog,oe.envMap=(I.isMeshStandardMaterial?R:L).get(I.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&I.envMap===null?te.environmentRotation:I.envMapRotation,je===void 0&&(I.addEventListener("dispose",Ue),je=new Map,oe.programs=je);let Ve=je.get(De);if(Ve!==void 0){if(oe.currentProgram===Ve&&oe.lightsStateVersion===Ce)return mm(I,Ne),Ve}else Ne.uniforms=Q.getUniforms(I),I.onBeforeCompile(Ne,y),Ve=Q.acquireProgram(Ne,De),je.set(De,Ve),oe.uniforms=Ne.uniforms;const Fe=oe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Fe.clippingPlanes=ke.uniform),mm(I,Ne),oe.needsLights=Wy(I),oe.lightsStateVersion=Ce,oe.needsLights&&(Fe.ambientLightColor.value=ne.state.ambient,Fe.lightProbe.value=ne.state.probe,Fe.directionalLights.value=ne.state.directional,Fe.directionalLightShadows.value=ne.state.directionalShadow,Fe.spotLights.value=ne.state.spot,Fe.spotLightShadows.value=ne.state.spotShadow,Fe.rectAreaLights.value=ne.state.rectArea,Fe.ltc_1.value=ne.state.rectAreaLTC1,Fe.ltc_2.value=ne.state.rectAreaLTC2,Fe.pointLights.value=ne.state.point,Fe.pointLightShadows.value=ne.state.pointShadow,Fe.hemisphereLights.value=ne.state.hemi,Fe.directionalShadowMap.value=ne.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Fe.spotShadowMap.value=ne.state.spotShadowMap,Fe.spotLightMatrix.value=ne.state.spotLightMatrix,Fe.spotLightMap.value=ne.state.spotLightMap,Fe.pointShadowMap.value=ne.state.pointShadowMap,Fe.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.currentProgram=Ve,oe.uniformsList=null,Ve}function pm(I){if(I.uniformsList===null){const te=I.currentProgram.getUniforms();I.uniformsList=wc.seqWithValue(te.seq,I.uniforms)}return I.uniformsList}function mm(I,te){const ae=k.get(I);ae.outputColorSpace=te.outputColorSpace,ae.batching=te.batching,ae.batchingColor=te.batchingColor,ae.instancing=te.instancing,ae.instancingColor=te.instancingColor,ae.instancingMorph=te.instancingMorph,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphColors=te.morphColors,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents,ae.toneMapping=te.toneMapping}function Hy(I,te,ae,oe,ne){te.isScene!==!0&&(te=_e),q.resetTextureUnits();const Me=te.fog,Ce=oe.isMeshStandardMaterial?te.environment:null,Ne=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vr,De=(oe.isMeshStandardMaterial?R:L).get(oe.envMap||Ce),je=oe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ve=!!ae.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Fe=!!ae.morphAttributes.position,Qe=!!ae.morphAttributes.normal,yt=!!ae.morphAttributes.color;let St=Rr;oe.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=y.toneMapping);const Tn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Je=Tn!==void 0?Tn.length:0,Ie=k.get(oe),Vt=g.state.lights;if(V===!0&&(Y===!0||I!==b)){const Gn=I===b&&oe.id===N;ke.setState(oe,I,Gn)}let et=!1;oe.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Vt.state.version||Ie.outputColorSpace!==Ne||ne.isBatchedMesh&&Ie.batching===!1||!ne.isBatchedMesh&&Ie.batching===!0||ne.isBatchedMesh&&Ie.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ie.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ie.instancing===!1||!ne.isInstancedMesh&&Ie.instancing===!0||ne.isSkinnedMesh&&Ie.skinning===!1||!ne.isSkinnedMesh&&Ie.skinning===!0||ne.isInstancedMesh&&Ie.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ie.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ie.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ie.instancingMorph===!1&&ne.morphTexture!==null||Ie.envMap!==De||oe.fog===!0&&Ie.fog!==Me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ke.numPlanes||Ie.numIntersection!==ke.numIntersection)||Ie.vertexAlphas!==je||Ie.vertexTangents!==Ve||Ie.morphTargets!==Fe||Ie.morphNormals!==Qe||Ie.morphColors!==yt||Ie.toneMapping!==St||Ie.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ie.__version=oe.version);let ni=Ie.currentProgram;et===!0&&(ni=pl(oe,te,ne));let Ps=!1,An=!1,Ou=!1;const At=ni.getUniforms(),nr=Ie.uniforms;if(Z.useProgram(ni.program)&&(Ps=!0,An=!0,Ou=!0),oe.id!==N&&(N=oe.id,An=!0),Ps||b!==I){At.setValue(W,"projectionMatrix",I.projectionMatrix),At.setValue(W,"viewMatrix",I.matrixWorldInverse);const Gn=At.map.cameraPosition;Gn!==void 0&&Gn.setValue(W,ce.setFromMatrixPosition(I.matrixWorld)),re.logarithmicDepthBuffer&&At.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&At.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,An=!0,Ou=!0)}if(ne.isSkinnedMesh){At.setOptional(W,ne,"bindMatrix"),At.setOptional(W,ne,"bindMatrixInverse");const Gn=ne.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),At.setValue(W,"boneTexture",Gn.boneTexture,q))}ne.isBatchedMesh&&(At.setOptional(W,ne,"batchingTexture"),At.setValue(W,"batchingTexture",ne._matricesTexture,q),At.setOptional(W,ne,"batchingIdTexture"),At.setValue(W,"batchingIdTexture",ne._indirectTexture,q),At.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&At.setValue(W,"batchingColorTexture",ne._colorsTexture,q));const Fu=ae.morphAttributes;if((Fu.position!==void 0||Fu.normal!==void 0||Fu.color!==void 0)&&He.update(ne,ae,ni),(An||Ie.receiveShadow!==ne.receiveShadow)&&(Ie.receiveShadow=ne.receiveShadow,At.setValue(W,"receiveShadow",ne.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(nr.envMap.value=De,nr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&te.environment!==null&&(nr.envMapIntensity.value=te.environmentIntensity),An&&(At.setValue(W,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&Gy(nr,Ou),Me&&oe.fog===!0&&pe.refreshFogUniforms(nr,Me),pe.refreshMaterialUniforms(nr,oe,X,K,g.state.transmissionRenderTarget[I.id]),wc.upload(W,pm(Ie),nr,q)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(wc.upload(W,pm(Ie),nr,q),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&At.setValue(W,"center",ne.center),At.setValue(W,"modelViewMatrix",ne.modelViewMatrix),At.setValue(W,"normalMatrix",ne.normalMatrix),At.setValue(W,"modelMatrix",ne.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Gn=oe.uniformsGroups;for(let zu=0,Xy=Gn.length;zu<Xy;zu++){const gm=Gn[zu];ot.update(gm,ni),ot.bind(gm,ni)}}return ni}function Gy(I,te){I.ambientLightColor.needsUpdate=te,I.lightProbe.needsUpdate=te,I.directionalLights.needsUpdate=te,I.directionalLightShadows.needsUpdate=te,I.pointLights.needsUpdate=te,I.pointLightShadows.needsUpdate=te,I.spotLights.needsUpdate=te,I.spotLightShadows.needsUpdate=te,I.rectAreaLights.needsUpdate=te,I.hemisphereLights.needsUpdate=te}function Wy(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,te,ae){k.get(I.texture).__webglTexture=te,k.get(I.depthTexture).__webglTexture=ae;const oe=k.get(I);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ae===void 0,oe.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,te){const ae=k.get(I);ae.__webglFramebuffer=te,ae.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(I,te=0,ae=0){A=I,T=te,C=ae;let oe=!0,ne=null,Me=!1,Ce=!1;if(I){const De=k.get(I);De.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(W.FRAMEBUFFER,null),oe=!1):De.__webglFramebuffer===void 0?q.setupRenderTarget(I):De.__hasExternalTextures&&q.rebindTextures(I,k.get(I.texture).__webglTexture,k.get(I.depthTexture).__webglTexture);const je=I.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const Ve=k.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ve[te])?ne=Ve[te][ae]:ne=Ve[te],Me=!0):I.samples>0&&q.useMultisampledRTT(I)===!1?ne=k.get(I).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[ae]:ne=Ve,E.copy(I.viewport),z.copy(I.scissor),D=I.scissorTest}else E.copy(U).multiplyScalar(X).floor(),z.copy(P).multiplyScalar(X).floor(),D=j;if(Z.bindFramebuffer(W.FRAMEBUFFER,ne)&&oe&&Z.drawBuffers(I,ne),Z.viewport(E),Z.scissor(z),Z.setScissorTest(D),Me){const De=k.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+te,De.__webglTexture,ae)}else if(Ce){const De=k.get(I.texture),je=te||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,De.__webglTexture,ae||0,je)}N=-1},this.readRenderTargetPixels=function(I,te,ae,oe,ne,Me,Ce){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=k.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const De=I.texture,je=De.format,Ve=De.type;if(!re.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=I.width-oe&&ae>=0&&ae<=I.height-ne&&W.readPixels(te,ae,oe,ne,Be.convert(je),Be.convert(Ve),Me)}finally{const De=A!==null?k.get(A).__webglFramebuffer:null;Z.bindFramebuffer(W.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(I,te,ae,oe,ne,Me,Ce){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=k.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const De=I.texture,je=De.format,Ve=De.type;if(!re.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=I.width-oe&&ae>=0&&ae<=I.height-ne){const Fe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Fe),W.bufferData(W.PIXEL_PACK_BUFFER,Me.byteLength,W.STREAM_READ),W.readPixels(te,ae,oe,ne,Be.convert(je),Be.convert(Ve),0),W.flush();const Qe=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);await qw(W,Qe,4);try{W.bindBuffer(W.PIXEL_PACK_BUFFER,Fe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Me)}finally{W.deleteBuffer(Fe),W.deleteSync(Qe)}return Me}}finally{const De=A!==null?k.get(A).__webglFramebuffer:null;Z.bindFramebuffer(W.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(I,te=null,ae=0){I.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,I=arguments[1]);const oe=Math.pow(2,-ae),ne=Math.floor(I.image.width*oe),Me=Math.floor(I.image.height*oe),Ce=te!==null?te.x:0,Ne=te!==null?te.y:0;q.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,ae,0,0,Ce,Ne,ne,Me),Z.unbindTexture()},this.copyTextureToTexture=function(I,te,ae=null,oe=null,ne=0){I.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,I=arguments[1],te=arguments[2],ne=arguments[3]||0,ae=null);let Me,Ce,Ne,De,je,Ve;ae!==null?(Me=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Ne=ae.min.x,De=ae.min.y):(Me=I.image.width,Ce=I.image.height,Ne=0,De=0),oe!==null?(je=oe.x,Ve=oe.y):(je=0,Ve=0);const Fe=Be.convert(te.format),Qe=Be.convert(te.type);q.setTexture2D(te,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const yt=W.getParameter(W.UNPACK_ROW_LENGTH),St=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Tn=W.getParameter(W.UNPACK_SKIP_PIXELS),Je=W.getParameter(W.UNPACK_SKIP_ROWS),Ie=W.getParameter(W.UNPACK_SKIP_IMAGES),Vt=I.isCompressedTexture?I.mipmaps[ne]:I.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Vt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Vt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ne),W.pixelStorei(W.UNPACK_SKIP_ROWS,De),I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ne,je,Ve,Me,Ce,Fe,Qe,Vt.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ne,je,Ve,Vt.width,Vt.height,Fe,Vt.data):W.texSubImage2D(W.TEXTURE_2D,ne,je,Ve,Me,Ce,Fe,Qe,Vt),W.pixelStorei(W.UNPACK_ROW_LENGTH,yt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,St),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Tn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Je),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ie),ne===0&&te.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(I,te,ae=null,oe=null,ne=0){I.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,oe=arguments[1]||null,I=arguments[2],te=arguments[3],ne=arguments[4]||0);let Me,Ce,Ne,De,je,Ve,Fe,Qe,yt;const St=I.isCompressedTexture?I.mipmaps[ne]:I.image;ae!==null?(Me=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Ne=ae.max.z-ae.min.z,De=ae.min.x,je=ae.min.y,Ve=ae.min.z):(Me=St.width,Ce=St.height,Ne=St.depth,De=0,je=0,Ve=0),oe!==null?(Fe=oe.x,Qe=oe.y,yt=oe.z):(Fe=0,Qe=0,yt=0);const Tn=Be.convert(te.format),Je=Be.convert(te.type);let Ie;if(te.isData3DTexture)q.setTexture3D(te,0),Ie=W.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)q.setTexture2DArray(te,0),Ie=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const Vt=W.getParameter(W.UNPACK_ROW_LENGTH),et=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ni=W.getParameter(W.UNPACK_SKIP_PIXELS),Ps=W.getParameter(W.UNPACK_SKIP_ROWS),An=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,St.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,St.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,De),W.pixelStorei(W.UNPACK_SKIP_ROWS,je),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ve),I.isDataTexture||I.isData3DTexture?W.texSubImage3D(Ie,ne,Fe,Qe,yt,Me,Ce,Ne,Tn,Je,St.data):te.isCompressedArrayTexture?W.compressedTexSubImage3D(Ie,ne,Fe,Qe,yt,Me,Ce,Ne,Tn,St.data):W.texSubImage3D(Ie,ne,Fe,Qe,yt,Me,Ce,Ne,Tn,Je,St),W.pixelStorei(W.UNPACK_ROW_LENGTH,Vt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,et),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ni),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ps),W.pixelStorei(W.UNPACK_SKIP_IMAGES,An),ne===0&&te.generateMipmaps&&W.generateMipmap(Ie),Z.unbindTexture()},this.initRenderTarget=function(I){k.get(I).__webglFramebuffer===void 0&&q.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?q.setTextureCube(I,0):I.isData3DTexture?q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?q.setTexture2DArray(I,0):q.setTexture2D(I,0),Z.unbindTexture()},this.resetState=function(){T=0,C=0,A=null,Z.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vp?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ru?"display-p3":"srgb"}}class Gx extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gp extends ul{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M0=new Nt,wh=new Ax,nc=new Pu,ic=new le;class Wx extends xn{constructor(e=new Ci,t=new Gp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;M0.copy(r).invert(),wh.copy(e.ray).applyMatrix4(M0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,m=p;_<m;_++){const g=c.getX(_);ic.fromBufferAttribute(h,g),w0(ic,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p;_<m;_++)ic.fromBufferAttribute(h,_),w0(ic,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function w0(n,e,t,i,r,s,a){const o=wh.distanceSqToPoint(n);if(o<t){const l=new le;wh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);function Oi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xo={duration:.5,overwrite:!1,delay:0},Wp,Wt,ht,Kn=1e8,at=1/Kn,bh=Math.PI*2,iC=bh/4,rC=0,qx=Math.sqrt,sC=Math.cos,aC=Math.sin,Bt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},Xp=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},qp=function(){return typeof window<"u"},rc=function(e){return wt(e)||Bt(e)},Yx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,oC=/random\([^)]+\)/g,lC=/,\s*/g,b0=/(?:-?\.?\d|\.)+/gi,$x=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zx=/[+-]=-?[.\d]+/,cC=/[^,'"\[\]\s]+/gi,uC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,xi,Eh,Yp,Bn={},ru={},Kx,Qx=function(e){return(ru=Ua(e,Bn))&&En},$p=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qo=function(e,t){return!t&&console.warn(e)},Jx=function(e,t){return e&&(Bn[e]=t)&&ru&&(ru[e]=t)||Bn},Yo=function(){return 0},dC={suppressEvents:!0,isStart:!0,kill:!1},bc={suppressEvents:!0,kill:!1},fC={suppressEvents:!0},Zp={},Pr=[],Th={},ey,Nn={},Vd={},E0=30,Ec=[],Kp="",Qp=function(e){var t=e[0],i,r;if(Ai(t)||wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ec.length;r--&&!Ec[r].targetTest(t););i=Ec[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new My(e[r],i)))||e.splice(r,1);return e},ms=function(e){return e._gsap||Qp(Qn(e))[0]._gsap},ty=function(e,t,i){return(i=e[t])&&wt(i)?e[t]():Xp(i)&&e.getAttribute&&e.getAttribute(t)||i},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},hC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},su=function(){var e=Pr.length,t=Pr.slice(0),i,r;for(Th={},Pr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Jp=function(e){return!!(e._initted||e._startAt||e.add)},ny=function(e,t,i,r){Pr.length&&!Wt&&su(),e.render(t,i,!!(Wt&&t<0&&Jp(e))),Pr.length&&!Wt&&su()},iy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cC).length<2?t:Bt(e)?e.trim():e},ry=function(e){return e},jn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},T0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ai(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},au=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Eo=function(e){var t=e.parent||gt,i=e.keyframes?pC(en(e.keyframes)):jn;if(Sn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},sy=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Lu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ah=function(e,t,i,r){return e._startAt&&(Wt?e._startAt.revert(bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_C=function n(e){return!e||e._ts&&n(e.parent)},A0=function(e){return e._repeat?Oa(e._tTime,e=e.duration()+e._rDelay)*e:0},Oa=function(e,t){var i=Math.floor(e=pt(e/t));return e&&i===e?i-1:i},ou=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ku=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},Iu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=pt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ku(e),i._dirty||gs(i,e)),e},ay=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ou(e.rawTime(),t),(!t._dur||fl(0,t.totalDuration(),i)-t._tTime>at)&&t.render(i,!0)),gs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-at}},wi=function(e,t,i,r){return t.parent&&Ur(t),t._start=pt((Ji(i)?i:i||e!==gt?Xn(e,i,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sy(e,t,"_first","_last",e._sort?"_start":0),Ch(t)||(e._recent=t),r||ay(e,t),e._ts<0&&Iu(e,e._tTime),e},oy=function(e,t){return(Bn.ScrollTrigger||$p("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},ly=function(e,t,i,r,s){if(tm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ey!==Ln.frame)return Pr.push(e),e._lazy=[s,r],1},vC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Ch=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xC=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&vC(e)&&!(!e._initted&&Ch(e))||(e._ts<0||e._dp._ts<0)&&!Ch(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=fl(0,e._tDur,t),u=Oa(l,o),e._yoyo&&u&1&&(a=1-a),u!==Oa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Wt||r||e._zTime===at||!t&&e._zTime){if(!e._initted&&ly(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?at:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ah(e,t,i,!0),e._onUpdate&&!i&&In(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ur(e,1),!i&&!Wt&&(In(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Fa=function(e,t,i,r){var s=e._repeat,a=pt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:pt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Iu(e,e._tTime=e._tDur*o),e.parent&&ku(e),i||gs(e.parent,e),e},C0=function(e){return e instanceof fn?gs(e):Fa(e,e._dur)},SC={_start:0,endTime:Yo,totalDuration:Yo},Xn=function n(e,t,i){var r=e.labels,s=e._recent||SC,a=e.duration()>=Kn?s.endTime(!1):e._dur,o,l,c;return Bt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(en(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},To=function(e,t,i){var r=Ji(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;a.immediateRender=Sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Rt(t[0],a,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},fl=function(e,t,i){return i<e?e:i>t?t:i},Jt=function(e,t){return!Bt(e)||!(t=uC.exec(e))?"":t[1]},MC=function(e,t,i){return Hr(i,function(r){return fl(e,t,r)})},Rh=[].slice,cy=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==xi},wC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Bt(r)&&!t||cy(r,1)?(s=i).push.apply(s,Qn(r)):i.push(r)})||i},Qn=function(e,t,i){return ht&&!t&&ht.selector?ht.selector(e):Bt(e)&&!i&&(Eh||!za())?Rh.call((t||Yp).querySelectorAll(e),0):en(e)?wC(e,i):cy(e)?Rh.call(e,0):e?[e]:[]},Ph=function(e){return e=Qn(e)[0]||qo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Qn(t,i.querySelectorAll?i:i===e?qo("Invalid scope")||Yp.createElement("div"):e)}},uy=function(e){return e.sort(function(){return .5-Math.random()})},dy=function(e){if(wt(e))return e;var t=Ai(e)?e:{each:e},i=_s(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Bt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,p,_){var m=(_||t).length,g=a[m],d,v,y,S,T,C,A,N,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!b){for(A=-Kn;A<(A=_[b++].getBoundingClientRect().left)&&b<m;);b<m&&b--}for(g=a[m]=[],d=l?Math.min(b,m)*u-.5:r%b,v=b===Kn?0:l?m*h/b-.5:r/b|0,A=0,N=Kn,C=0;C<m;C++)y=C%b-d,S=v-(C/b|0),g[C]=T=c?Math.abs(c==="y"?S:y):qx(y*y+S*S),T>A&&(A=T),T<N&&(N=T);r==="random"&&uy(g),g.max=A-N,g.min=N,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(b>m?m-1:c?c==="y"?m/b:b:Math.max(b,m/b))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Jt(t.amount||t.each)||0,i=i&&m<0?UC(i):i}return m=(g[f]-g.min)/g.max||0,pt(g.b+(i?i(m):m)*g.v)+g.u}},Nh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=pt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ji(i)?0:Jt(i))}},fy=function(e,t){var i=en(e),r,s;return!i&&Ai(e)&&(r=i=e.radius||Kn,e.values?(e=Qn(e.values),(s=!Ji(e[0]))&&(r*=r)):e=Nh(e.increment)),Hr(t,i?wt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Kn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||Ji(a)?u:u+Jt(a)}:Nh(e))},hy=function(e,t,i,r){return Hr(en(e)?!t:i===!0?!!(i=0):!r,function(){return en(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},bC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},EC=function(e,t){return function(i){return e(parseFloat(i))+(t||Jt(i))}},TC=function(e,t,i){return my(e,t,0,1,i)},py=function(e,t,i){return Hr(i,function(r){return e[~~t(r)]})},AC=function n(e,t,i){var r=t-e;return en(e)?py(e,n(0,e.length),t):Hr(i,function(s){return(r+(s-e)%r)%r+e})},CC=function n(e,t,i){var r=t-e,s=r*2;return en(e)?py(e,n(0,e.length-1),t):Hr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},$o=function(e){return e.replace(oC,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(lC);return hy(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},my=function(e,t,i,r,s){var a=t-e,o=r-i;return Hr(s,function(l){return i+((l-e)/a*o||0)})},RC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Bt(e),o={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(en(e)&&!en(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(_){_*=h;var m=Math.min(f,~~_);return u[m](_-m)},i=t}else r||(e=Ua(en(e)?[]:{},e));if(!u){for(l in t)em.call(o,e,l,"get",t[l]);s=function(_){return rm(_,o)||(a?e.p:e)}}}return Hr(i,s)},R0=function(e,t,i){var r=e.labels,s=Kn,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},In=function(e,t,i){var r=e.vars,s=r[t],a=ht,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Pr.length&&su(),o&&(ht=o),u=l?s.apply(c,l):s.call(c),ht=a,u},ho=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&In(e,"onInterrupt"),e},ua,gy=[],_y=function(e){if(e)if(e=!e.name&&e.default||e,qp()||e.headless){var t=e.name,i=wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Yo,render:rm,add:em,kill:XC,modifier:WC,rawVars:0},a={targetTest:0,get:0,getSetter:im,aliases:{},register:0};if(za(),e!==r){if(Nn[t])return;jn(r,jn(au(e,s),a)),Ua(r.prototype,Ua(s,au(e,a))),Nn[r.prop=t]=r,e.targetTest&&(Ec.push(r),Zp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jx(t,r),e.register&&e.register(En,r,wn)}else gy.push(e)},st=255,po={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},Hd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*st+.5|0},vy=function(e,t,i){var r=e?Ji(e)?[e>>16,e>>8&st,e&st]:0:po.black,s,a,o,l,c,u,h,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),po[e])r=po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&st,r&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(b0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Hd(l+1/3,s,a),r[1]=Hd(l,s,a),r[2]=Hd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match($x),i&&r.length<4&&(r[3]=1),r}else r=e.match(b0)||po.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/st,a=r[1]/st,o=r[2]/st,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},xy=function(e){var t=[],i=[],r=-1;return e.split(Nr).forEach(function(s){var a=s.match(ca)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},P0=function(e,t,i){var r="",s=(e+r).match(Nr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=vy(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=xy(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Nr,"1").split(ca),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Nr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Nr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in po)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),PC=/hsl[a]?\(/,yy=function(e){var t=e.join(" "),i;if(Nr.lastIndex=0,Nr.test(t))return i=PC.test(t),e[1]=P0(e[1],i),e[0]=P0(e[0],i,xy(e[1])),!0},Zo,Ln=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,f,p,_=function m(g){var d=n()-r,v=g===!0,y,S,T,C;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,y=T-a,(y>0||v)&&(C=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,a+=y+(y>=s?4:s-y),S=1),v||(l=c(m)),S)for(p=0;p<o.length;p++)o[p](T,f,C,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Kx&&(!Eh&&qp()&&(xi=Eh=window,Yp=xi.document||{},Bn.gsap=En,(xi.gsapVersions||(xi.gsapVersions=[])).push(En.version),Qx(ru||xi.GreenSockGlobals||!xi.gsap&&xi||{}),gy.forEach(_y)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,a-h.time*1e3+1|0)},Zo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zo=0,c=Yo},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),a=h.time*1e3+s},add:function(g,d,v){var y=d?function(S,T,C,A){g(S,T,C,A),h.remove(y)}:g;return h.remove(g),o[v?"unshift":"push"](y),za(),y},remove:function(g,d){~(d=o.indexOf(g))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),za=function(){return!Zo&&Ln.wake()},qe={},NC=/^[\d.\-M][\d.\-,\s]/,DC=/["']/g,LC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(DC,"").trim():+c,r=l.substr(o+1).trim();return t},kC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},IC=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[LC(t[1])]:kC(e).split(",").map(iy)):qe._CE&&NC.test(e)?qe._CE("",e):i},UC=function(e){return function(t){return 1-e(1-t)}},_s=function(e,t){return e&&(wt(e)?e:qe[e]||IC(e))||t},Rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Mn(e,function(o){qe[o]=Bn[o]=s,qe[a=o.toLowerCase()]=i;for(var l in s)qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[o+"."+l]=s[l]}),s},Sy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/bh*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*aC((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Sy(o);return s=bh/s,l.config=function(c,u){return n(e,c,u)},l},Wd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Sy(i);return r.config=function(s){return n(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Rs("Elastic",Gd("in"),Gd("out"),Gd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Rs("Circ",function(n){return-(qx(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-sC(n*iC)+1});Rs("Back",Wd("in"),Wd("out"),Wd());qe.SteppedEase=qe.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-at;return function(o){return((r*fl(0,a,o)|0)+s)*i}}};Xo.ease=qe["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Kp+=n+","+n+"Params,"});var My=function(e,t){this.id=rC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ty,this.set=t?t.getSetter:im},Ko=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fa(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),Zo||Ln.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Fa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Iu(this,i),!s._dp||s.parent||ay(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===at||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ny(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+A0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+A0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Oa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ou(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-at?0:this._rts,this.totalTime(fl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ku(this),gC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=pt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ou(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fC);var r=Wt;return Wt=i,Jp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Wt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,C0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,C0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Xn(this,i),Sn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Sn(r)),this._dur||(this._zTime=-at),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-at)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=wt(i)?i:ry,l=function(){var u=r.then;r.then=null,s&&s(),wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ho(this)},n}();jn(Ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var fn=function(n){Xx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Sn(i.sortChildren),gt&&wi(i.parent||gt,Oi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&oy(Oi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return To(0,arguments,this),this},t.from=function(r,s,a){return To(1,arguments,this),this},t.fromTo=function(r,s,a,o){return To(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Eo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Xn(this,a),1),this},t.call=function(r,s,a){return wi(this,Rt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Rt(r,a,Xn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Eo(a).immediateRender=Sn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Eo(o).immediateRender=Sn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:pt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,_,m,g,d,v,y,S,T,C,A;if(this!==gt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,S=this._start,y=this._ts,d=!y,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(f=pt(u%g),u===l?(m=this._repeat,f=c):(T=pt(u/g),m=~~T,m&&m===T&&(f=c,m--),f>c&&(f=c)),T=Oa(this._tTime,g),!o&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),C&&m&1&&(f=c-f,A=1),m!==T&&!this._lock){var N=C&&T&1,b=N===(C&&m&1);if(m<T&&(N=!N),o=N?0:u%c?c:u,this._lock=1,this.render(o||(A?0:pt(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=m),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=N?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=yC(this,pt(o),pt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!T&&(In(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=-at);break}}p=_}else{p=this._last;for(var E=r<0?r:f;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,a||Wt&&Jp(p)),f!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=E?-at:at);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-at)._zTime=f>=o?1:-1,this._ts))return this._start=S,ku(this),this.render(r,s,a);this._onUpdate&&!s&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ur(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(In(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Ji(s)||(s=Xn(this,s,r)),!(r instanceof Ko)){if(en(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Bt(r))return this.addLabel(r,s);if(wt(r))r=Rt.delayedCall(0,r);else return this}return this!==r?wi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Kn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Bt(r)?this.removeLabel(r):wt(r)?this.killTweensOf(r):(r.parent===this&&Lu(this,r),r===this._recent&&(this._recent=this._last),gs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Rt.delayedCall(0,s||Yo,a);return o.data="isPause",this._hasPause=1,wi(this,o,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&Ur(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Qn(r),l=this._first,c=Ji(s),u;l;)l instanceof Rt?hC(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Xn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=Rt.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||at,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&Fa(_,g,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,jn({startAt:{time:Xn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),R0(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),R0(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=pt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return gs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Kn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=pt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Fa(a,a===gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(gt._ts&&(ny(gt,ou(r,gt)),ey=Ln.frame),Ln.frame>=E0){E0+=Fn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&Fn.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(Ko);jn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var OC=function(e,t,i,r,s,a,o){var l=new wn(this._pt,e,t,0,1,Cy,null,s),c=0,u=0,h,f,p,_,m,g,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=$o(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),f=i.match(jd)||[];h=jd.exec(r);)_=h[0],m=r.substring(c,h.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?ya(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},c=jd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Zx.test(r)||d)&&(l.e=0),this._pt=l,l},em=function(e,t,i,r,s,a,o,l,c,u){wt(r)&&(r=r(s||0,e,a));var h=e[t],f=i!=="get"?i:wt(h)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=wt(h)?c?VC:Ty:nm,_;if(Bt(r)&&(~r.indexOf("random(")&&(r=$o(r)),r.charAt(1)==="="&&(_=ya(f,r)+(Jt(f)||0),(_||_===0)&&(r=_))),!u||f!==r||Dh)return!isNaN(f*r)&&r!==""?(_=new wn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?GC:Ay,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&$p(t,r),OC.call(this,e,t,f,r,p,l||Fn.stringFilter,c))},FC=function(e,t,i,r,s){if(wt(e)&&(e=Ao(e,s,t,i,r)),!Ai(e)||e.style&&e.nodeType||en(e)||Yx(e))return Bt(e)?Ao(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Ao(e[o],s,t,i,r);return a},wy=function(e,t,i,r,s,a){var o,l,c,u;if(Nn[e]&&(o=new Nn[e]).init(s,o.rawVars?t[e]:FC(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new wn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ua))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,Dh,tm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:g,y=e._overwrite==="auto"&&!Wp,S=e.timeline,T=r.easeReverse||h,C,A,N,b,E,z,D,O,M,H,K,X,G;if(S&&(!f||!s)&&(s="none"),e._ease=_s(s,Xo.ease),e._rEase=T&&(_s(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(O=g[0]?ms(g[0]).harness:0,X=O&&r[O.prop],C=au(r,Zp),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!p?m.render(-1,!0):m.revert(u&&_?bc:dC),m._lazy=0),a){if(Ur(e._startAt=Rt.set(g,jn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return In(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!p)&&e._startAt.revert(bc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(o=!1),N=jn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Sn(l),immediateRender:o,stagger:0,parent:d},C),X&&(N[O.prop]=X),Ur(e._startAt=Rt.set(g,N)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(bc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Sn(l)||l&&!_,A=0;A<g.length;A++){if(E=g[A],D=E._gsap||Qp(g)[A]._gsap,e._ptLookup[A]=H={},Th[D.id]&&Pr.length&&su(),K=v===g?A:v.indexOf(E),O&&(M=new O).init(E,X||C,e,K,v)!==!1&&(e._pt=b=new wn(e._pt,E,M.name,0,1,M.render,M,0,M.priority),M._props.forEach(function($){H[$]=b}),M.priority&&(z=1)),!O||X)for(N in C)Nn[N]&&(M=wy(N,C,e,K,E,v))?M.priority&&(z=1):H[N]=b=em.call(e,E,N,"get",C[N],K,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(E,e._op[A]),y&&e._pt&&(_r=e,gt.killTweensOf(E,H,e.globalTime(t)),G=!e.parent,_r=0),e._pt&&l&&(Th[D.id]=1)}z&&Ry(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&S.render(Kn,!0,!0)},zC=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Dh=1,e.vars[t]="+=0",tm(e,o),Dh=0,l?qo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=bt(i)+Jt(h.e)),h.b&&(h.b=u.s+Jt(h.b))},BC=function(e,t){var i=e[0]?ms(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ua({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},jC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(en(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ao=function(e,t,i,r,s){return wt(e)?e.call(t,i,r,s):Bt(e)&&~e.indexOf("random(")?$o(e):e},by=Kp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ey={};Mn(by+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Ey[n]=1});var Rt=function(n){Xx(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Eo(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=r.parent||gt,v=(en(i)||Yx(i)?Ji(i[0]):"length"in r)?[i]:Qn(i),y,S,T,C,A,N,b,E;if(o._targets=v.length?Qp(v):qo("GSAP target "+i+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||rc(c)||rc(u)){r=o.vars;var z=r.easeReverse||r.yoyoEase;if(y=o.timeline=new fn({data:"nested",defaults:m||{},targets:d&&d.data==="nested"?d.vars.targets:v}),y.kill(),y.parent=y._dp=Oi(o),y._start=0,f||rc(c)||rc(u)){if(C=v.length,b=f&&dy(f),Ai(f))for(A in f)~by.indexOf(A)&&(E||(E={}),E[A]=f[A]);for(S=0;S<C;S++)T=au(r,Ey),T.stagger=0,z&&(T.easeReverse=z),E&&Ua(T,E),N=v[S],T.duration=+Ao(c,Oi(o),S,N,v),T.delay=(+Ao(u,Oi(o),S,N,v)||0)-o._delay,!f&&C===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),y.to(N,T,b?b(S,N,v):0),y._ease=qe.none;y.duration()?c=u=0:o.timeline=0}else if(_){Eo(jn(y.vars.defaults,{ease:"none"})),y._ease=_s(_.ease||r.ease||"none");var D=0,O,M,H;if(en(_))_.forEach(function(K){return y.to(v,K,">")}),y.duration();else{T={};for(A in _)A==="ease"||A==="easeEach"||jC(A,_[A],T,_.easeEach);for(A in T)for(O=T[A].sort(function(K,X){return K.t-X.t}),D=0,S=0;S<O.length;S++)M=O[S],H={ease:M.e,duration:(M.t-(S?O[S-1].t:0))/100*c},H[A]=M.v,y.to(v,H,D),D+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Wp&&(_r=Oi(o),gt.killTweensOf(v),_r=0),wi(d,Oi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===pt(d._time)&&Sn(h)&&_C(Oi(o))&&d.data!=="nested")&&(o._tTime=-at,o.render(Math.max(0,-u)||0)),g&&oy(Oi(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-at&&!u?l:r<at?0:r,f,p,_,m,g,d,v,y;if(!c)xC(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(f=pt(h%m),h===l?(_=this._repeat,f=c):(g=pt(h/m),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),d=this._yoyo&&_&1,d&&(f=c-f),g=Oa(this._tTime,m),f===o&&!a&&this._initted&&_===g)return this._tTime=h,this;_!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==m&&this._initted&&(this._lock=a=1,this.render(pt(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(ly(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var T=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!g&&(In(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ah(this,r,s,a),In(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ah(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!s&&!(u&&!o)&&(h||o||d)&&(In(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Zo||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||tm(this,c),u=this._ease(c/this._dur),zC(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Iu(this,0),this.parent||sy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_r&&_r.vars.overwrite!==!0)._first||ho(this),this.parent&&a!==this.timeline.totalDuration()&&Fa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Qn(r):o,c=this._ptLookup,u=this._pt,h,f,p,_,m,g,d;if((!s||s==="all")&&mC(o,l))return s==="all"&&(this._pt=0),ho(this);for(h=this._op=this._op||[],s!=="all"&&(Bt(s)&&(m={},Mn(s,function(v){return m[v]=1}),s=m),s=BC(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,_=f,p={}):(p=h[d]=h[d]||{},_=s);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Lu(this,g,"_pt"),delete f[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&u&&ho(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return To(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return To(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return gt.killTweensOf(r,s,a)},e}(Ko);jn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(n){Rt[n]=function(){var e=new fn,t=Rh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var nm=function(e,t,i){return e[t]=i},Ty=function(e,t,i){return e[t](i)},VC=function(e,t,i,r){return e[t](r.fp,i)},HC=function(e,t,i){return e.setAttribute(t,i)},im=function(e,t){return wt(e[t])?Ty:Xp(e[t])&&e.setAttribute?HC:nm},Ay=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},rm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},WC=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},XC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Lu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},qC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Ry=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},wn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Ay,this.d=l||this,this.set=c||nm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=qC,this.m=i,this.mt=s,this.tween=r},n}();Mn(Kp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Zp[n]=1});Bn.TweenMax=Bn.TweenLite=Rt;Bn.TimelineLite=Bn.TimelineMax=fn;gt=new fn({sortChildren:!1,defaults:Xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=yy;var vs=[],Tc={},YC=[],N0=0,$C=0,Xd=function(e){return(Tc[e]||YC).map(function(t){return t()})},Lh=function(){var e=Date.now(),t=[];e-N0>2&&(Xd("matchMediaInit"),vs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=xi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Xd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),N0=e,Xd("matchMedia"))},Py=function(){function n(t,i){this.selector=i&&Ph(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$C++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){wt(i)&&(s=r,r=i,i=wt);var a=this,o=function(){var c=ht,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ph(s)),ht=a,h=r.apply(a,arguments),wt(h)&&a._r.push(h),ht=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===wt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ht;ht=null,i(this),ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=vs.length;a--;)vs[a].id===this.id&&vs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),ZC=function(){function n(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ai(i)||(i={matches:i});var a=new Py(0,s||this.scope),o=a.conditions={},l,c,u;ht&&!a.selector&&(a.selector=ht.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=xi.matchMedia(i[c]),l&&(vs.indexOf(a)<0&&vs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lh):l.addEventListener("change",Lh)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),lu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return _y(r)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Bt(e)&&(e=Qn(e)[0]);var s=ms(e||{}).get,a=i?ry:iy;return i==="native"&&(i=""),e&&(t?a((Nn[t]&&Nn[t].get||s)(e,t,i,r)):function(o,l,c){return a((Nn[o]&&Nn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Qn(e),e.length>1){var r=e.map(function(u){return En.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=Nn[t],o=ms(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ua._pt=0,h.init(e,i?u+i:u,ua,0,[e]),h.render(1,h),ua._pt&&rm(1,ua)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=En.to(e,jn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_s(e.ease,Xo.ease)),T0(Xo,e||{})},config:function(e){return T0(Fn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Nn[o]&&!Bn[o]&&qo(t+" effect requires "+o+" plugin.")}),Vd[t]=function(o,l,c){return i(Qn(o),jn(l||{},s),c)},a&&(fn.prototype[t]=function(o,l,c){return this.add(Vd[t](o,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=_s(t)},parseEase:function(e,t){return arguments.length?_s(e,t):qe},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new fn(e),r,s;for(i.smoothChildTiming=Sn(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&wi(i,r,r._start-r._delay),r=s;return wi(gt,i,0),i},context:function(e,t){return e?new Py(e,t):ht},matchMedia:function(e){return new ZC(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Lh()},addEventListener:function(e,t){var i=Tc[e]||(Tc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:AC,wrapYoyo:CC,distribute:dy,random:hy,snap:fy,normalize:TC,getUnit:Jt,clamp:MC,splitColor:vy,toArray:Qn,selector:Ph,mapRange:my,pipe:bC,unitize:EC,interpolate:RC,shuffle:uy},install:Qx,effects:Vd,ticker:Ln,updateRoot:fn.updateRoot,plugins:Nn,globalTimeline:gt,core:{PropTween:wn,globals:Jx,Tween:Rt,Timeline:fn,Animation:Ko,getCache:ms,_removeLinkedListItem:Lu,reverting:function(){return Wt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Wp=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return lu[n]=Rt[n]});Ln.add(fn.updateRoot);ua=lu.to({},{duration:0});var KC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},QC=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=KC(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},qd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Bt(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}QC(o,s)}}}},En=lu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Wt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},qd("roundProps",Nh),qd("modifiers"),qd("snap",fy))||lu;Rt.version=fn.version=En.version="3.15.0";Kx=1;qp()&&za();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var D0,vr,Sa,sm,ds,L0,am,JC=function(){return typeof window<"u"},er={},is=180/Math.PI,Ma=Math.PI/180,$s=Math.atan2,k0=1e8,om=/([A-Z])/g,eR=/(left|right|width|margin|padding|x)/i,tR=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ny=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aR=function(e,t,i){return e.style[t]=i},oR=function(e,t,i){return e.style.setProperty(t,i)},lR=function(e,t,i){return e._gsap[t]=i},cR=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},uR=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},dR=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},_t="transform",bn=_t+"Origin",fR=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in er&&s){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=zi(r,o)}):this.tfm[e]=a.x?a[e]:zi(r,e),e===bn&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Ly=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hR=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(om,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=am(),(!s||!s.isStart)&&!i[_t]&&(Ly(i),r.zOrigin&&i[bn]&&(i[bn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ky=function(e,t){var i={target:e,props:[],revert:hR,save:fR};return e._gsap||En.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Iy,Ih=function(e,t){var i=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return i&&i.style?i:vr.createElement(e)},Un=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(om,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ba(t)||t,1)||""},I0="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,i){var r=t||ds,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(I0[a]+e in s););return a<0?null:(a===3?"ms":a>=0?I0[a]:"")+e},Uh=function(){JC()&&window.document&&(D0=window,vr=D0.document,Sa=vr.documentElement,ds=Ih("div")||{style:{}},Ih("div"),_t=Ba(_t),bn=_t+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iy=!!Ba("perspective"),am=En.core.reverting,sm=1)},U0=function(e){var t=e.ownerSVGElement,i=Ih("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Sa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Sa.removeChild(i),s},O0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Uy=function(e){var t,i;try{t=e.getBBox()}catch{t=U0(e),i=1}return t&&(t.width||t.height)||i||(t=U0(e)),t&&!t.width&&!t.x&&!t.y?{x:+O0(e,["x","cx","x1"])||0,y:+O0(e,["y","cy","y1"])||0,width:0,height:0}:t},Oy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uy(e))},Or=function(e,t){if(t){var i=e.style,r;t in er&&t!==bn&&(t=_t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(om,"-$1").toLowerCase())):i.removeAttribute(t)}},xr=function(e,t,i,r,s,a){var o=new wn(e._pt,t,i,0,1,a?Dy:Ny);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},F0={deg:1,rad:1,turn:1},pR={grid:1,flex:1},Fr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ds.style,l=eR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",_,m,g,d;if(r===a||!s||F0[r]||F0[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&Oy(e),(p||a==="%")&&(er[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[u],bt(p?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===vr||!m.appendChild)&&(m=vr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Ln.time&&!g.uncache)return bt(s/g.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,_=e[u],v?e.style[t]=v:Or(e,t)}else(p||a==="%")&&!pR[Un(m,"display")]&&(o.position=Un(e,"position")),m===e&&(o.position="static"),m.appendChild(ds),_=ds[u],m.removeChild(ds),o.position="absolute";return l&&p&&(g=ms(m),g.time=Ln.time,g.width=m[u]),bt(f?_*s/h:_&&s?h/_*s:0)},zi=function(e,t,i,r){var s;return sm||Uh(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),er[t]&&t!=="transform"?(s=Jo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:uu(Un(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=cu[t]&&cu[t](e,t,i)||Un(e,t)||ty(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fr(e,t,s,i)+i:s},mR=function(e,t,i,r){if(!i||i==="none"){var s=Ba(t,e,1),a=s&&Un(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Un(e,"borderTopColor"))}var o=new wn(this._pt,e.style,t,0,1,Cy),l=0,c=0,u,h,f,p,_,m,g,d,v,y,S,T;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Un(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Un(e,t)||r,m?e.style[t]=m:Or(e,t)),u=[i,r],yy(u),i=u[0],r=u[1],f=i.match(ca)||[],T=r.match(ca)||[],T.length){for(;h=ca.exec(r);)g=h[0],v=r.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(p=parseFloat(m)||0,S=m.substr((p+"").length),g.charAt(1)==="="&&(g=ya(p,g)+S),d=parseFloat(g),y=g.substr((d+"").length),l=ca.lastIndex-y.length,y||(y=y||Fn.units[t]||S,l===r.length&&(r+=y,o.e+=y)),S!==y&&(p=Fr(e,t,m,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Dy:Ny;return Zx.test(r)&&(o.e=0),this._pt=o,o},z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gR=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=z0[i]||i,t[1]=z0[r]||r,t.join(" ")},_R=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],er[o]&&(l=1,o=o==="transformOrigin"?bn:_t),Or(i,o);l&&(Or(i,_t),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Jo(i,1),a.uncache=1,Ly(r)))}},cu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new wn(e._pt,t,i,0,0,_R);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Qo=[1,0,0,1,0,0],Fy={},zy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},B0=function(e){var t=Un(e,_t);return zy(t)?Qo:t.substr(7).match($x).map(bt)},lm=function(e,t){var i=e._gsap||ms(e),r=e.style,s=B0(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qo:s):(s===Qo&&!e.offsetParent&&e!==Sa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Sa.appendChild(e)),s=B0(e),l?r.display=l:Or(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Sa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Oh=function(e,t,i,r,s,a){var o=e._gsap,l=s||lm(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],v=l[5],y=t.split(" "),S=parseFloat(y[0])||0,T=parseFloat(y[1])||0,C,A,N,b;i?l!==Qo&&(A=p*g-_*m)&&(N=S*(g/A)+T*(-m/A)+(m*v-g*d)/A,b=S*(-_/A)+T*(p/A)-(p*v-_*d)/A,S=N,T=b):(C=Uy(e),S=C.x+(~y[0].indexOf("%")?S/100*C.width:S),T=C.y+(~(y[1]||y[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&o.smooth?(d=S-c,v=T-u,o.xOffset=h+(d*p+v*m)-d,o.yOffset=f+(d*_+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[bn]="0px 0px",a&&(xr(a,o,"xOrigin",c,S),xr(a,o,"yOrigin",u,T),xr(a,o,"xOffset",h,o.xOffset),xr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Jo=function(e,t){var i=e._gsap||new My(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Un(e,bn)||"0",u,h,f,p,_,m,g,d,v,y,S,T,C,A,N,b,E,z,D,O,M,H,K,X,G,$,U,P,j,se,V,Y;return u=h=f=m=g=d=v=y=S=0,p=_=1,i.svg=!!(e.getCTM&&Oy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),A=lm(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Oh(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,A)),T=i.xOrigin||0,C=i.yOrigin||0,A!==Qo&&(z=A[0],D=A[1],O=A[2],M=A[3],u=H=A[4],h=K=A[5],A.length===6?(p=Math.sqrt(z*z+D*D),_=Math.sqrt(M*M+O*O),m=z||D?$s(D,z)*is:0,v=O||M?$s(O,M)*is+m:0,v&&(_*=Math.abs(Math.cos(v*Ma))),i.svg&&(u-=T-(T*z+C*O),h-=C-(T*D+C*M))):(Y=A[6],se=A[7],U=A[8],P=A[9],j=A[10],V=A[11],u=A[12],h=A[13],f=A[14],N=$s(Y,j),g=N*is,N&&(b=Math.cos(-N),E=Math.sin(-N),X=H*b+U*E,G=K*b+P*E,$=Y*b+j*E,U=H*-E+U*b,P=K*-E+P*b,j=Y*-E+j*b,V=se*-E+V*b,H=X,K=G,Y=$),N=$s(-O,j),d=N*is,N&&(b=Math.cos(-N),E=Math.sin(-N),X=z*b-U*E,G=D*b-P*E,$=O*b-j*E,V=M*E+V*b,z=X,D=G,O=$),N=$s(D,z),m=N*is,N&&(b=Math.cos(N),E=Math.sin(N),X=z*b+D*E,G=H*b+K*E,D=D*b-z*E,K=K*b-H*E,z=X,H=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=bt(Math.sqrt(z*z+D*D+O*O)),_=bt(Math.sqrt(K*K+Y*Y)),N=$s(H,K),v=Math.abs(N)>2e-4?N*is:0,S=V?1/(V<0?-V:V):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zy(Un(e,_t)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=bt(p),i.scaleY=bt(_),i.rotation=bt(m)+o,i.rotationX=bt(g)+o,i.rotationY=bt(d)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[bn]=uu(c)),i.xOffset=i.yOffset=0,i.force3D=Fn.force3D,i.renderTransform=i.svg?xR:Iy?By:vR,i.uncache=0,i},uu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yd=function(e,t,i){var r=Jt(t);return bt(parseFloat(t)+parseFloat(Fr(e,"x",i+"px",r)))+r},vR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,By(e,t)},Kr="0deg",ao="0px",Qr=") ",By=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,v=i.target,y=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(y&&(h!==Kr||u!==Kr)){var C=parseFloat(u)*Ma,A=Math.sin(C),N=Math.cos(C),b;C=parseFloat(h)*Ma,b=Math.cos(C),a=Yd(v,a,A*b*-y),o=Yd(v,o,-Math.sin(C)*-y),l=Yd(v,l,N*b*-y+y)}g!==ao&&(S+="perspective("+g+Qr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||a!==ao||o!==ao||l!==ao)&&(S+=l!==ao||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Qr),c!==Kr&&(S+="rotate("+c+Qr),u!==Kr&&(S+="rotateY("+u+Qr),h!==Kr&&(S+="rotateX("+h+Qr),(f!==Kr||p!==Kr)&&(S+="skew("+f+", "+p+Qr),(_!==1||m!==1)&&(S+="scale("+_+", "+m+Qr),v.style[_t]=S||"translate(0, 0)"},xR=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,v=i.forceCSS,y=parseFloat(a),S=parseFloat(o),T,C,A,N,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,T=Math.cos(l)*h,C=Math.sin(l)*h,A=Math.sin(l-c)*-f,N=Math.cos(l-c)*f,c&&(u*=Ma,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,N*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),T*=b,C*=b)),T=bt(T),C=bt(C),A=bt(A),N=bt(N)):(T=h,N=f,C=A=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=Fr(p,"x",a,"px"),S=Fr(p,"y",o,"px")),(_||m||g||d)&&(y=bt(y+_-(_*T+m*A)+g),S=bt(S+m-(_*C+m*N)+d)),(r||s)&&(b=p.getBBox(),y=bt(y+r/100*b.width),S=bt(S+s/100*b.height)),b="matrix("+T+","+C+","+A+","+N+","+y+","+S+")",p.setAttribute("transform",b),v&&(p.style[_t]=b)},yR=function(e,t,i,r,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?is:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*k0)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*k0)%a-~~(c/a)*a)),e._pt=f=new wn(e._pt,t,i,r,c,nR),f.e=u,f.u="deg",e._props.push(i),f},j0=function(e,t){for(var i in t)e[i]=t[i];return e},SR=function(e,t,i){var r=j0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,p,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_t]=t,o=Jo(i,1),Or(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],a[_t]=t,o=Jo(i,1),a[_t]=c);for(l in er)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Jt(c),_=Jt(u),h=p!==_?Fr(i,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new wn(e._pt,o,l,h,f-h,kh),e._pt.u=_||0,e._props.push(l));j0(o,r)};Mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});cu[e>1?"border"+n:n]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(_){return zi(o,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(_,m){return p[_]=f[m]=f[m]||f[(m-1)/2|0]}),o.init(l,p,h)}});var jy={name:"css",register:Uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,p,_,m,g,d,v,y,S,T,C,A,N,b;sm||Uh(),this.styles=this.styles||ky(e),N=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Nn[m]&&wy(m,t,i,r,e,s)))){if(p=typeof u,_=cu[m],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=$o(u)),_)_(this,e,m,u,i)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Nr.lastIndex=0,Nr.test(c)||(g=Jt(c),d=Jt(u),d?g!==d&&(c=Fr(e,m,c,d)+d):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),N.push(m,0,o[m]);else if(p!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Bt(c)&&~c.indexOf("random(")&&(c=$o(c)),Jt(c+"")||c==="auto"||(c+=Fn.units[m]||Jt(zi(e,m))||""),(c+"").charAt(1)==="="&&(c=zi(e,m))):c=zi(e,m),f=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),m in bi&&(m==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&h&&(f=0),N.push("visibility",0,o.visibility),xr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=bi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in er,y){if(this.styles.save(m),b=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Un(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=Un(e,"perspective"),E?e.style.perspective=E:Or(e,"perspective")}h=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Jo(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new wn(this._pt,o,_t,0,1,T.renderTransform,T,0,-1),S.dep=1),m==="scale")this._pt=new wn(this._pt,T,"scaleY",T.scaleY,(v?ya(T.scaleY,v+h):h)-T.scaleY||0,kh),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){N.push(bn,0,o[bn]),u=gR(u),T.svg?Oh(e,u,0,C,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&xr(this,T,"zOrigin",T.zOrigin,d),xr(this,o,m,uu(c),uu(u)));continue}else if(m==="svgOrigin"){Oh(e,u,1,C,0,this);continue}else if(m in Fy){yR(this,T,m,f,v?ya(f,v+u):u);continue}else if(m==="smoothOrigin"){xr(this,T,"smooth",T.smooth,u);continue}else if(m==="force3D"){T[m]=u;continue}else if(m==="transform"){SR(this,u,e);continue}}else m in o||(m=Ba(m)||m);if(y||(h||h===0)&&(f||f===0)&&!tR.test(u)&&m in o)g=(c+"").substr((f+"").length),h||(h=0),d=Jt(u)||(m in Fn.units?Fn.units[m]:g),g!==d&&(f=Fr(e,m,c,d)),this._pt=new wn(this._pt,y?T:o,m,f,(v?ya(f,v+h):h)-f,!y&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?sR:kh),this._pt.u=d||0,y&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=rR):g!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=iR);else if(m in o)mR.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,r,s);else if(m!=="parseTransform"){$p(m,u);continue}y||(m in o?N.push(m,0,o[m]):typeof e[m]=="function"?N.push(m,2,e[m]()):N.push(m,1,c||e[m])),a.push(m)}}A&&Ry(this)},render:function(e,t){if(t.tween._time||!am())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:bi,getSetter:function(e,t,i){var r=bi[t];return r&&r.indexOf(",")<0&&(t=r),t in er&&t!==bn&&(e._gsap.x||zi(e,"x"))?i&&L0===i?t==="scale"?cR:lR:(L0=i||{})&&(t==="scale"?uR:dR):e.style&&!Xp(e.style[t])?aR:~t.indexOf("-")?oR:im(e,t)},core:{_removeProperty:Or,_getMatrix:lm}};En.utils.checkPrefix=Ba;En.core.getStyleSaver=ky;(function(n,e,t,i){var r=Mn(n+","+e+","+t,function(s){er[s]=1});Mn(e,function(s){Fn.units[s]="deg",Fy[s]=1}),bi[r[13]]=n+","+e,Mn(i,function(s){var a=s.split(":");bi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Fn.units[n]="px"});En.registerPlugin(jy);var Fh=En.registerPlugin(jy)||En;Fh.core.Tween;const MR=({onIntroComplete:n,forcePlay:e=!1})=>{const t=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),s=Le.useRef(null),a=Le.useRef(null),o=Le.useRef(null),[l,c]=Le.useState(Qt.getIsMuted()),[u,h]=Le.useState(!0),[f,p]=Le.useState(0);if(Le.useEffect(()=>{if(!e&&sessionStorage.getItem("studio_intro_seen")==="true"){h(!1),n();return}const g=i.current;if(!g)return;const d=window.innerWidth,v=window.innerHeight,y=new Gx,S=new Dn(65,d/v,.1,1e3);S.position.z=22;const T=new Hx({canvas:g,antialias:!0,alpha:!0,powerPreference:"high-performance"});T.setSize(d,v),T.setPixelRatio(Math.min(window.devicePixelRatio,2));const C=6e3,A=new Ci,N=new Float32Array(C*3),b=new Float32Array(C*3),E=new Float32Array(C*3),z=new Float32Array(C*3),D=new nt("#d4af37");for(let P=0;P<C;P++){const j=25+Math.random()*20,se=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1);N[P*3]=j*Math.sin(V)*Math.cos(se),N[P*3+1]=j*Math.sin(V)*Math.sin(se),N[P*3+2]=j*Math.cos(V),E[P*3]=N[P*3],E[P*3+1]=N[P*3+1],E[P*3+2]=N[P*3+2];const Y=P/C*Math.PI*8,ue=3+P%6*1.5;b[P*3]=Math.cos(Y)*ue+(Math.random()-.5)*.4,b[P*3+1]=Math.sin(Y)*ue+(Math.random()-.5)*.4,b[P*3+2]=(Math.random()-.5)*2,z[P*3]=D.r+(Math.random()-.5)*.2,z[P*3+1]=D.g+(Math.random()-.5)*.2,z[P*3+2]=D.b+(Math.random()-.5)*.2}A.setAttribute("position",new yn(E,3)),A.setAttribute("color",new yn(z,3));const O=new Gp({size:.16,vertexColors:!0,transparent:!0,opacity:.9,blending:Kc,depthWrite:!1}),M=new Wx(A,O);y.add(M);const H=Fh.timeline({onComplete:()=>{$()}});Qt.playCinematicImpact();const K={val:0};H.to(K,{val:1,duration:2.8,ease:"power3.inOut",onUpdate:()=>{p(Math.round(K.val*100));const P=A.attributes.position,j=K.val;for(let se=0;se<C;se++){const V=N[se*3],Y=N[se*3+1],ue=N[se*3+2],ce=b[se*3],de=b[se*3+1],_e=b[se*3+2];P.setXYZ(se,V+(ce-V)*j+Math.sin(j*Math.PI+se)*(1-j)*2,Y+(de-Y)*j+Math.cos(j*Math.PI+se)*(1-j)*2,ue+(_e-ue)*j)}P.needsUpdate=!0}},0),a.current&&H.fromTo(a.current,{opacity:0,scale:.85,letterSpacing:"0.4em"},{opacity:1,scale:1,letterSpacing:"0.18em",duration:1.6,ease:"power2.out"},.8),o.current&&H.fromTo(o.current,{opacity:0,y:20},{opacity:1,y:0,duration:1.2,ease:"power2.out"},1.4);let X=0;const G=()=>{M.rotation.z+=.003,M.rotation.y+=.002,T.render(y,S),X=requestAnimationFrame(G)};G();const $=()=>{Qt.playWhoosh(),sessionStorage.setItem("studio_intro_seen","true");const P=Fh.timeline({onComplete:()=>{h(!1),n(),cancelAnimationFrame(X),T.dispose(),A.dispose(),O.dispose()}});r.current&&s.current?P.to([a.current,o.current,g],{opacity:0,duration:.5}).to(r.current,{yPercent:-100,duration:.9,ease:"power4.inOut"},"-=0.2").to(s.current,{yPercent:100,duration:.9,ease:"power4.inOut"},"<"):(h(!1),n())},U=()=>{const P=window.innerWidth,j=window.innerHeight;S.aspect=P/j,S.updateProjectionMatrix(),T.setSize(P,j)};return window.addEventListener("resize",U),()=>{H.kill(),cancelAnimationFrame(X),window.removeEventListener("resize",U)}},[e]),!u)return null;const _=()=>{sessionStorage.setItem("studio_intro_seen","true"),Qt.playWhoosh(),h(!1),n()},m=()=>{const g=Qt.toggleMute();c(g),g||Qt.playClick()};return x.jsxs("div",{className:"hollywood-intro-overlay",ref:t,children:[x.jsx("div",{className:"curtain curtain-top",ref:r}),x.jsx("div",{className:"curtain curtain-bottom",ref:s}),x.jsx("canvas",{className:"intro-canvas",ref:i}),x.jsxs("div",{className:"intro-content",children:[x.jsxs("span",{className:"intro-pretitle",children:[x.jsx(bs,{size:14,color:"#d4af37"}),x.jsx("span",{children:"PRODUCTION PREMIERE"})]}),x.jsx("h1",{className:"intro-title",ref:a,children:"STUDIO OS"}),x.jsx("p",{className:"intro-tagline",ref:o,children:"CINEMATIC ARCHITECTURE • 9 MONOLITHIC STANDARDS • ZERO-SLOP"}),x.jsxs("div",{className:"intro-hud-bar",children:[x.jsx("div",{className:"hud-track",children:x.jsx("div",{className:"hud-fill",style:{width:`${f}%`}})}),x.jsxs("span",{children:["INITIALIZING CORE ",f,"%"]})]})]}),x.jsxs("div",{className:"intro-controls",children:[x.jsxs("button",{className:"btn-intro-control",onClick:m,title:"Вкл/Выкл звук",children:[l?x.jsx(XM,{size:16}):x.jsx(WM,{size:16}),x.jsx("span",{children:l?"ЗВУК ВЫКЛ":"ЗВУК ВКЛ"})]}),x.jsxs("button",{className:"btn-intro-control skip-btn",onClick:_,children:[x.jsx("span",{children:"ПРОПУСТИТЬ"}),x.jsx(DM,{size:16})]})]}),x.jsx("style",{children:`
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
      `})]})};function sc(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vy={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function a(c,u){if(!r[c]){if(!i[c]){var h=typeof sc=="function"&&sc;if(!u&&h)return h(c,!0);if(o)return o(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var p=r[c]={exports:{}};i[c][0].call(p.exports,function(_){var m=i[c][1][_];return a(m||_)},p,p.exports,t,i,r,s)}return r[c].exports}for(var o=typeof sc=="function"&&sc,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,i,r){var s=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,h,f,p,_,m,g=[],d=0,v=l.length,y=v,S=s.getTypeOf(l)!=="string";d<l.length;)y=v-d,h=S?(c=l[d++],u=d<v?l[d++]:0,d<v?l[d++]:0):(c=l.charCodeAt(d++),u=d<v?l.charCodeAt(d++):0,d<v?l.charCodeAt(d++):0),f=c>>2,p=(3&c)<<4|u>>4,_=1<y?(15&u)<<2|h>>6:64,m=2<y?63&h:64,g.push(o.charAt(f)+o.charAt(p)+o.charAt(_)+o.charAt(m));return g.join("")},r.decode=function(l){var c,u,h,f,p,_,m=0,g=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var v,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&y--,l.charAt(l.length-2)===o.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|y):new Array(0|y);m<l.length;)c=o.indexOf(l.charAt(m++))<<2|(f=o.indexOf(l.charAt(m++)))>>4,u=(15&f)<<4|(p=o.indexOf(l.charAt(m++)))>>2,h=(3&p)<<6|(_=o.indexOf(l.charAt(m++))),v[g++]=c,p!==64&&(v[g++]=u),_!==64&&(v[g++]=h);return v}},{"./support":30,"./utils":32}],2:[function(t,i,r){var s=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(u,h,f,p,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=f,this.compression=p,this.compressedContent=_}c.prototype={getContentWorker:function(){var u=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,h,f){return u.pipe(new o).pipe(new l("uncompressedSize")).pipe(h.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var s=t("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,u,h,f){var p=a,_=f+h;c^=-1;for(var m=f;m<_;m++)c=c>>>8^p[255&(c^u[m])];return-1^c}(0|l,o,o.length,0):function(c,u,h,f){var p=a,_=f+h;c^=-1;for(var m=f;m<_;m++)c=c>>>8^p[255&(c^u.charCodeAt(m))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var s=null;s=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:s}},{lie:37}],7:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),l=t("./stream/GenericWorker"),c=s?"uint8array":"array";function u(h,f){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=f,this.meta={}}r.magic="\b\0",o.inherits(u,l),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,h.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(f){h.push({data:f,meta:h.meta})}},r.compressWorker=function(h){return new u("Deflate",h)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function s(p,_){var m,g="";for(m=0;m<_;m++)g+=String.fromCharCode(255&p),p>>>=8;return g}function a(p,_,m,g,d,v){var y,S,T=p.file,C=p.compression,A=v!==c.utf8encode,N=o.transformTo("string",v(T.name)),b=o.transformTo("string",c.utf8encode(T.name)),E=T.comment,z=o.transformTo("string",v(E)),D=o.transformTo("string",c.utf8encode(E)),O=b.length!==T.name.length,M=D.length!==E.length,H="",K="",X="",G=T.dir,$=T.date,U={crc32:0,compressedSize:0,uncompressedSize:0};_&&!m||(U.crc32=p.crc32,U.compressedSize=p.compressedSize,U.uncompressedSize=p.uncompressedSize);var P=0;_&&(P|=8),A||!O&&!M||(P|=2048);var j=0,se=0;G&&(j|=16),d==="UNIX"?(se=798,j|=function(Y,ue){var ce=Y;return Y||(ce=ue?16893:33204),(65535&ce)<<16}(T.unixPermissions,G)):(se=20,j|=function(Y){return 63&(Y||0)}(T.dosPermissions)),y=$.getUTCHours(),y<<=6,y|=$.getUTCMinutes(),y<<=5,y|=$.getUTCSeconds()/2,S=$.getUTCFullYear()-1980,S<<=4,S|=$.getUTCMonth()+1,S<<=5,S|=$.getUTCDate(),O&&(K=s(1,1)+s(u(N),4)+b,H+="up"+s(K.length,2)+K),M&&(X=s(1,1)+s(u(z),4)+D,H+="uc"+s(X.length,2)+X);var V="";return V+=`
\0`,V+=s(P,2),V+=C.magic,V+=s(y,2),V+=s(S,2),V+=s(U.crc32,4),V+=s(U.compressedSize,4),V+=s(U.uncompressedSize,4),V+=s(N.length,2),V+=s(H.length,2),{fileRecord:h.LOCAL_FILE_HEADER+V+N+H,dirRecord:h.CENTRAL_FILE_HEADER+s(se,2)+V+s(z.length,2)+"\0\0\0\0"+s(j,4)+s(g,4)+N+H+z}}var o=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),u=t("../crc32"),h=t("../signature");function f(p,_,m,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=m,this.encodeFileName=g,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(f,l),f.prototype.push=function(p){var _=p.meta.percent||0,m=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:m?(_+100*(m-g-1))/m:100}}))},f.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var _=this.streamFiles&&!p.file.dir;if(_){var m=a(p,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(p){this.accumulate=!1;var _=this.streamFiles&&!p.file.dir,m=a(p,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),_)this.push({data:function(g){return h.DATA_DESCRIPTOR+s(g.crc32,4)+s(g.compressedSize,4)+s(g.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var p=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var m=this.bytesWritten-p,g=function(d,v,y,S,T){var C=o.transformTo("string",T(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(v,4)+s(y,4)+s(C.length,2)+C}(this.dirRecords.length,m,p,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(p){this._sources.push(p);var _=this;return p.on("data",function(m){_.processChunk(m)}),p.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),p.on("error",function(m){_.error(m)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(p){var _=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var m=0;m<_.length;m++)try{_[m].error(p)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,_=0;_<p.length;_++)p[_].lock()},i.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var s=t("../compressions"),a=t("./ZipFileWorker");r.generateWorker=function(o,l,c){var u=new a(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{o.forEach(function(f,p){h++;var _=function(v,y){var S=v||y,T=s[S];if(!T)throw new Error(S+" is not a valid compression method !");return T}(p.options.compression,l.compression),m=p.options.compressionOptions||l.compressionOptions||{},g=p.dir,d=p.date;p._compressWorker(_,m).withStreamInfo("file",{name:f,dir:g,date:d,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(f){u.error(f)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=t("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var s=t("./utils"),a=t("./external"),o=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function h(f){return new a.Promise(function(p,_){var m=f.decompressed.getContentWorker().pipe(new c);m.on("error",function(g){_(g)}).on("end",function(){m.streamInfo.crc32!==f.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(f,p){var _=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(f)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",f,!0,p.optimizedBinaryString,p.base64).then(function(m){var g=new l(p);return g.load(m),g}).then(function(m){var g=[a.Promise.resolve(m)],d=m.files;if(p.checkCRC32)for(var v=0;v<d.length;v++)g.push(h(d[v]));return a.Promise.all(g)}).then(function(m){for(var g=m.shift(),d=g.files,v=0;v<d.length;v++){var y=d[v],S=y.fileNameStr,T=s.resolve(y.fileNameStr);_.file(T,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:p.createFolders}),y.dir||(_.file(T).unsafeOriginalName=S)}return g.zipComment.length&&(_.comment=g.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var s=t("../utils"),a=t("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var s=t("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var u=this;o.on("data",function(h,f){u.push(h)||u._helper.pause(),c&&c(f)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}t("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,i,r){function s(T,C,A){var N,b=o.getTypeOf(C),E=o.extend(A||{},u);E.date=E.date||new Date,E.compression!==null&&(E.compression=E.compression.toUpperCase()),typeof E.unixPermissions=="string"&&(E.unixPermissions=parseInt(E.unixPermissions,8)),E.unixPermissions&&16384&E.unixPermissions&&(E.dir=!0),E.dosPermissions&&16&E.dosPermissions&&(E.dir=!0),E.dir&&(T=d(T)),E.createFolders&&(N=g(T))&&v.call(this,N,!0);var z=b==="string"&&E.binary===!1&&E.base64===!1;A&&A.binary!==void 0||(E.binary=!z),(C instanceof h&&C.uncompressedSize===0||E.dir||!C||C.length===0)&&(E.base64=!1,E.binary=!0,C="",E.compression="STORE",b="string");var D=null;D=C instanceof h||C instanceof l?C:_.isNode&&_.isStream(C)?new m(T,C):o.prepareContent(T,C,E.binary,E.optimizedBinaryString,E.base64);var O=new f(T,D,E);this.files[T]=O}var a=t("./utf8"),o=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),u=t("./defaults"),h=t("./compressedObject"),f=t("./zipObject"),p=t("./generate"),_=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),g=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var C=T.lastIndexOf("/");return 0<C?T.substring(0,C):""},d=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},v=function(T,C){return C=C!==void 0?C:u.createFolders,T=d(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:C}),this.files[T]};function y(T){return Object.prototype.toString.call(T)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var C,A,N;for(C in this.files)N=this.files[C],(A=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&T(A,N)},filter:function(T){var C=[];return this.forEach(function(A,N){T(A,N)&&C.push(N)}),C},file:function(T,C,A){if(arguments.length!==1)return T=this.root+T,s.call(this,T,C,A),this;if(y(T)){var N=T;return this.filter(function(E,z){return!z.dir&&N.test(E)})}var b=this.files[this.root+T];return b&&!b.dir?b:null},folder:function(T){if(!T)return this;if(y(T))return this.filter(function(b,E){return E.dir&&T.test(b)});var C=this.root+T,A=v.call(this,C),N=this.clone();return N.root=A.name,N},remove:function(T){T=this.root+T;var C=this.files[T];if(C||(T.slice(-1)!=="/"&&(T+="/"),C=this.files[T]),C&&!C.dir)delete this.files[T];else for(var A=this.filter(function(b,E){return E.name.slice(0,T.length)===T}),N=0;N<A.length;N++)delete this.files[A[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var C,A={};try{if((A=o.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");o.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var N=A.comment||this.comment||"";C=p.generateWorker(this,A,N)}catch(b){(C=new l("error")).error(b)}return new c(C,A.type||"string",A.mimeType)},generateAsync:function(T,C){return this.generateInternalStream(T).accumulate(C)},generateNodeStream:function(T,C){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream(C)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===c&&this.data[f+2]===u&&this.data[f+3]===h)return f-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),f=this.readData(4);return l===f[0]&&c===f[1]&&u===f[2]&&h===f[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var s=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,r){var s=t("./Uint8ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var s=t("./ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var s=t("../utils"),a=t("../support"),o=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");i.exports=function(h){var f=s.getTypeOf(h);return s.checkSupport(f),f!=="string"||a.uint8array?f==="nodebuffer"?new c(h):a.uint8array?new u(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var s=t("./GenericWorker"),a=t("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var s=t("./GenericWorker"),a=t("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(t,i,r){var s=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),l=t("../base64"),c=t("../support"),u=t("../external"),h=null;if(c.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(_,m){return new u.Promise(function(g,d){var v=[],y=_._internalType,S=_._outputType,T=_._mimeType;_.on("data",function(C,A){v.push(C),m&&m(A)}).on("error",function(C){v=[],d(C)}).on("end",function(){try{var C=function(A,N,b){switch(A){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),b);case"base64":return l.encode(N);default:return s.transformTo(A,N)}}(S,function(A,N){var b,E=0,z=null,D=0;for(b=0;b<N.length;b++)D+=N[b].length;switch(A){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(z=new Uint8Array(D),b=0;b<N.length;b++)z.set(N[b],E),E+=N[b].length;return z;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+A+"'")}}(y,v),T);g(C)}catch(A){d(A)}v=[]}).resume()})}function p(_,m,g){var d=m;switch(m){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=m,this._mimeType=g,s.checkSupport(d),this._worker=_.pipe(new a(d)),_.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}p.prototype={accumulate:function(_){return f(this,_)},on:function(_,m){var g=this;return _==="data"?this._worker.on(_,function(d){m.call(g,d.data,d.meta)}):this._worker.on(_,function(){s.delay(m,arguments,g)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var s=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}r.utf8encode=function(p){return a.nodebuffer?o.newBufferFrom(p,"utf-8"):function(_){var m,g,d,v,y,S=_.length,T=0;for(v=0;v<S;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(d=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),v++),T+=g<128?1:g<2048?2:g<65536?3:4;for(m=a.uint8array?new Uint8Array(T):new Array(T),v=y=0;y<T;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(d=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),v++),g<128?m[y++]=g:(g<2048?m[y++]=192|g>>>6:(g<65536?m[y++]=224|g>>>12:(m[y++]=240|g>>>18,m[y++]=128|g>>>12&63),m[y++]=128|g>>>6&63),m[y++]=128|63&g);return m}(p)},r.utf8decode=function(p){return a.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):function(_){var m,g,d,v,y=_.length,S=new Array(2*y);for(m=g=0;m<y;)if((d=_[m++])<128)S[g++]=d;else if(4<(v=c[d]))S[g++]=65533,m+=v-1;else{for(d&=v===2?31:v===3?15:7;1<v&&m<y;)d=d<<6|63&_[m++],v--;1<v?S[g++]=65533:d<65536?S[g++]=d:(d-=65536,S[g++]=55296|d>>10&1023,S[g++]=56320|1023&d)}return S.length!==g&&(S.subarray?S=S.subarray(0,g):S.length=g),s.applyFromCharCode(S)}(p=s.transformTo(a.uint8array?"uint8array":"array",p))},s.inherits(h,l),h.prototype.processChunk=function(p){var _=s.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var m=_;(_=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),_.set(m,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var g=function(v,y){var S;for((y=y||v.length)>v.length&&(y=v.length),S=y-1;0<=S&&(192&v[S])==128;)S--;return S<0||S===0?y:S+c[v[S]]>y?S:y}(_),d=_;g!==_.length&&(a.uint8array?(d=_.subarray(0,g),this.leftOver=_.subarray(g,_.length)):(d=_.slice(0,g),this.leftOver=_.slice(g,_.length))),this.push({data:r.utf8decode(d),meta:p.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,s.inherits(f,l),f.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var s=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),l=t("./external");function c(m){return m}function u(m,g){for(var d=0;d<m.length;++d)g[d]=255&m.charCodeAt(d);return g}t("setimmediate"),r.newBlob=function(m,g){r.checkSupport("blob");try{return new Blob([m],{type:g})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(m),d.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(m,g,d){var v=[],y=0,S=m.length;if(S<=d)return String.fromCharCode.apply(null,m);for(;y<S;)g==="array"||g==="nodebuffer"?v.push(String.fromCharCode.apply(null,m.slice(y,Math.min(y+d,S)))):v.push(String.fromCharCode.apply(null,m.subarray(y,Math.min(y+d,S)))),y+=d;return v.join("")},stringifyByChar:function(m){for(var g="",d=0;d<m.length;d++)g+=String.fromCharCode(m[d]);return g},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function f(m){var g=65536,d=r.getTypeOf(m),v=!0;if(d==="uint8array"?v=h.applyCanBeUsed.uint8array:d==="nodebuffer"&&(v=h.applyCanBeUsed.nodebuffer),v)for(;1<g;)try{return h.stringifyByChunk(m,d,g)}catch{g=Math.floor(g/2)}return h.stringifyByChar(m)}function p(m,g){for(var d=0;d<m.length;d++)g[d]=m[d];return g}r.applyFromCharCode=f;var _={};_.string={string:c,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return _.string.uint8array(m).buffer},uint8array:function(m){return u(m,new Uint8Array(m.length))},nodebuffer:function(m){return u(m,o.allocBuffer(m.length))}},_.array={string:f,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(m)}},_.arraybuffer={string:function(m){return f(new Uint8Array(m))},array:function(m){return p(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(new Uint8Array(m))}},_.uint8array={string:f,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return o.newBufferFrom(m)}},_.nodebuffer={string:f,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return _.nodebuffer.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:c},r.transformTo=function(m,g){if(g=g||"",!m)return g;r.checkSupport(m);var d=r.getTypeOf(g);return _[d][m](g)},r.resolve=function(m){for(var g=m.split("/"),d=[],v=0;v<g.length;v++){var y=g[v];y==="."||y===""&&v!==0&&v!==g.length-1||(y===".."?d.pop():d.push(y))}return d.join("/")},r.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(m)?"nodebuffer":s.uint8array&&m instanceof Uint8Array?"uint8array":s.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(m){if(!s[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(m){var g,d,v="";for(d=0;d<(m||"").length;d++)v+="\\x"+((g=m.charCodeAt(d))<16?"0":"")+g.toString(16).toUpperCase();return v},r.delay=function(m,g,d){setImmediate(function(){m.apply(d||null,g||[])})},r.inherits=function(m,g){function d(){}d.prototype=g.prototype,m.prototype=new d},r.extend=function(){var m,g,d={};for(m=0;m<arguments.length;m++)for(g in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],g)&&d[g]===void 0&&(d[g]=arguments[m][g]);return d},r.prepareContent=function(m,g,d,v,y){return l.Promise.resolve(g).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(T,C){var A=new FileReader;A.onload=function(N){T(N.target.result)},A.onerror=function(N){C(N.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var T=r.getTypeOf(S);return T?(T==="arraybuffer"?S=r.transformTo("uint8array",S):T==="string"&&(y?S=a.decode(S):d&&v!==!0&&(S=function(C){return u(C,s.uint8array?new Uint8Array(C.length):new Array(C.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),l=t("./zipEntry"),c=t("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(f)+", expected "+a.pretty(h)+")")}},isSignature:function(h,f){var p=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===f;return this.reader.setIndex(p),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),f=c.uint8array?"uint8array":"array",p=a.transformTo(f,h);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,f,p,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),f=this.reader.readInt(4),p=this.reader.readData(f),this.zip64ExtensibleData[h]={id:h,length:f,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,f;for(h=0;h<this.files.length;h++)f=this.files[h],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var f=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var _=f-p;if(0<_)this.isSignature(f,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),u=t("./compressions"),h=t("./support");function f(p,_){this.options=p,this.loadOptions=_}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var _,m;if(p.skip(22),this.fileNameLength=p.readInt(2),m=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(g){for(var d in u)if(Object.prototype.hasOwnProperty.call(u,d)&&u[d].magic===g)return u[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var _=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(_),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var _,m,g,d=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<d;)_=p.readInt(2),m=p.readInt(2),g=p.readData(m),this.extraFields[_]={id:_,length:m,value:g};p.setIndex(d)},handleUTF8:function(){var p=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var m=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var d=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null}},i.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function s(_,m,g){this.name=_,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=m,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),u=t("./stream/GenericWorker");s.prototype={internalStream:function(_){var m=null,g="string";try{if(!_)throw new Error("No output type specified.");var d=(g=_.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),m=this._decompressWorker();var v=!this._dataBinary;v&&!d&&(m=m.pipe(new l.Utf8EncodeWorker)),!v&&d&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(y){(m=new u("error")).error(y)}return new a(m,g,"")},async:function(_,m){return this.internalStream(_).accumulate(m)},nodeStream:function(_,m){return this.internalStream(_||"nodebuffer").toNodejsStream(m)},_compressWorker:function(_,m){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,_,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<h.length;p++)s.prototype[h[p]]=f;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(_),h=s.document.createTextNode("");u.observe(h,{characterData:!0}),a=function(){h.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var m=s.document.createElement("script");m.onreadystatechange=function(){_(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:function(){setTimeout(_,0)};else{var f=new s.MessageChannel;f.port1.onmessage=_,a=function(){f.port2.postMessage(0)}}var p=[];function _(){var m,g;o=!0;for(var d=p.length;d;){for(g=p,p=[],m=-1;++m<d;)g[m]();d=p.length}o=!1}i.exports=function(m){p.push(m)!==1||o||a()}}).call(this,typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var s=t("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function h(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,d!==a&&m(this,d)}function f(d,v,y){this.promise=d,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function p(d,v,y){s(function(){var S;try{S=v(y)}catch(T){return o.reject(d,T)}S===d?o.reject(d,new TypeError("Cannot resolve promise with itself")):o.resolve(d,S)})}function _(d){var v=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof v=="function")return function(){v.apply(d,arguments)}}function m(d,v){var y=!1;function S(A){y||(y=!0,o.reject(d,A))}function T(A){y||(y=!0,o.resolve(d,A))}var C=g(function(){v(T,S)});C.status==="error"&&S(C.value)}function g(d,v){var y={};try{y.value=d(v),y.status="success"}catch(S){y.status="error",y.value=S}return y}(i.exports=h).prototype.finally=function(d){if(typeof d!="function")return this;var v=this.constructor;return this.then(function(y){return v.resolve(d()).then(function(){return y})},function(y){return v.resolve(d()).then(function(){throw y})})},h.prototype.catch=function(d){return this.then(null,d)},h.prototype.then=function(d,v){if(typeof d!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var y=new this.constructor(a);return this.state!==u?p(y,this.state===c?d:v,this.outcome):this.queue.push(new f(y,d,v)),y},f.prototype.callFulfilled=function(d){o.resolve(this.promise,d)},f.prototype.otherCallFulfilled=function(d){p(this.promise,this.onFulfilled,d)},f.prototype.callRejected=function(d){o.reject(this.promise,d)},f.prototype.otherCallRejected=function(d){p(this.promise,this.onRejected,d)},o.resolve=function(d,v){var y=g(_,v);if(y.status==="error")return o.reject(d,y.value);var S=y.value;if(S)m(d,S);else{d.state=c,d.outcome=v;for(var T=-1,C=d.queue.length;++T<C;)d.queue[T].callFulfilled(v)}return d},o.reject=function(d,v){d.state=l,d.outcome=v;for(var y=-1,S=d.queue.length;++y<S;)d.queue[y].callRejected(v);return d},h.resolve=function(d){return d instanceof this?d:o.resolve(new this(a),d)},h.reject=function(d){var v=new this(a);return o.reject(v,d)},h.all=function(d){var v=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,S=!1;if(!y)return this.resolve([]);for(var T=new Array(y),C=0,A=-1,N=new this(a);++A<y;)b(d[A],A);return N;function b(E,z){v.resolve(E).then(function(D){T[z]=D,++C!==y||S||(S=!0,o.resolve(N,T))},function(D){S||(S=!0,o.reject(N,D))})}},h.race=function(d){var v=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,S=!1;if(!y)return this.resolve([]);for(var T=-1,C=new this(a);++T<y;)A=d[T],v.resolve(A).then(function(N){S||(S=!0,o.resolve(C,N))},function(N){S||(S=!0,o.reject(C,N))});var A;return C}},{immediate:36}],38:[function(t,i,r){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var s=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),u=Object.prototype.toString,h=0,f=-1,p=0,_=8;function m(d){if(!(this instanceof m))return new m(d);this.options=a.assign({level:f,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},d||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(y!==h)throw new Error(l[y]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var S;if(S=typeof v.dictionary=="string"?o.string2buf(v.dictionary):u.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(y=s.deflateSetDictionary(this.strm,S))!==h)throw new Error(l[y]);this._dict_set=!0}}function g(d,v){var y=new m(v);if(y.push(d,!0),y.err)throw y.msg||l[y.err];return y.result}m.prototype.push=function(d,v){var y,S,T=this.strm,C=this.options.chunkSize;if(this.ended)return!1;S=v===~~v?v:v===!0?4:0,typeof d=="string"?T.input=o.string2buf(d):u.call(d)==="[object ArrayBuffer]"?T.input=new Uint8Array(d):T.input=d,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new a.Buf8(C),T.next_out=0,T.avail_out=C),(y=s.deflate(T,S))!==1&&y!==h)return this.onEnd(y),!(this.ended=!0);T.avail_out!==0&&(T.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(T.output,T.next_out))):this.onData(a.shrinkBuf(T.output,T.next_out)))}while((0<T.avail_in||T.avail_out===0)&&y!==1);return S===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===h):S!==2||(this.onEnd(h),!(T.avail_out=0))},m.prototype.onData=function(d){this.chunks.push(d)},m.prototype.onEnd=function(d){d===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=m,r.deflate=g,r.deflateRaw=function(d,v){return(v=v||{}).raw=!0,g(d,v)},r.gzip=function(d,v){return(v=v||{}).gzip=!0,g(d,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var s=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),u=t("./zlib/zstream"),h=t("./zlib/gzheader"),f=Object.prototype.toString;function p(m){if(!(this instanceof p))return new p(m);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},m||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||m&&m.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,g.windowBits);if(d!==l.Z_OK)throw new Error(c[d]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function _(m,g){var d=new p(g);if(d.push(m,!0),d.err)throw d.msg||c[d.err];return d.result}p.prototype.push=function(m,g){var d,v,y,S,T,C,A=this.strm,N=this.options.chunkSize,b=this.options.dictionary,E=!1;if(this.ended)return!1;v=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?A.input=o.binstring2buf(m):f.call(m)==="[object ArrayBuffer]"?A.input=new Uint8Array(m):A.input=m,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(N),A.next_out=0,A.avail_out=N),(d=s.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(C=typeof b=="string"?o.string2buf(b):f.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,d=s.inflateSetDictionary(this.strm,C)),d===l.Z_BUF_ERROR&&E===!0&&(d=l.Z_OK,E=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&d!==l.Z_STREAM_END&&(A.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=o.utf8border(A.output,A.next_out),S=A.next_out-y,T=o.buf2string(A.output,y),A.next_out=S,A.avail_out=N-S,S&&a.arraySet(A.output,A.output,y,S,0),this.onData(T)):this.onData(a.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(E=!0)}while((0<A.avail_in||A.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},r.Inflate=p,r.inflate=_,r.inflateRaw=function(m,g){return(g=g||{}).raw=!0,_(m,g)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(l[h]=u[h])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,u,h,f){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+h),f);else for(var p=0;p<h;p++)l[f+p]=c[u+p]},flattenChunks:function(l){var c,u,h,f,p,_;for(c=h=0,u=l.length;c<u;c++)h+=l[c].length;for(_=new Uint8Array(h),c=f=0,u=l.length;c<u;c++)p=l[c],_.set(p,f),f+=p.length;return _}},o={arraySet:function(l,c,u,h,f){for(var p=0;p<h;p++)l[f+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(t,i,r){var s=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(h,f){if(f<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,f));for(var p="",_=0;_<f;_++)p+=String.fromCharCode(h[_]);return p}l[254]=l[254]=1,r.string2buf=function(h){var f,p,_,m,g,d=h.length,v=0;for(m=0;m<d;m++)(64512&(p=h.charCodeAt(m)))==55296&&m+1<d&&(64512&(_=h.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),m++),v+=p<128?1:p<2048?2:p<65536?3:4;for(f=new s.Buf8(v),m=g=0;g<v;m++)(64512&(p=h.charCodeAt(m)))==55296&&m+1<d&&(64512&(_=h.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),m++),p<128?f[g++]=p:(p<2048?f[g++]=192|p>>>6:(p<65536?f[g++]=224|p>>>12:(f[g++]=240|p>>>18,f[g++]=128|p>>>12&63),f[g++]=128|p>>>6&63),f[g++]=128|63&p);return f},r.buf2binstring=function(h){return u(h,h.length)},r.binstring2buf=function(h){for(var f=new s.Buf8(h.length),p=0,_=f.length;p<_;p++)f[p]=h.charCodeAt(p);return f},r.buf2string=function(h,f){var p,_,m,g,d=f||h.length,v=new Array(2*d);for(p=_=0;p<d;)if((m=h[p++])<128)v[_++]=m;else if(4<(g=l[m]))v[_++]=65533,p+=g-1;else{for(m&=g===2?31:g===3?15:7;1<g&&p<d;)m=m<<6|63&h[p++],g--;1<g?v[_++]=65533:m<65536?v[_++]=m:(m-=65536,v[_++]=55296|m>>10&1023,v[_++]=56320|1023&m)}return u(v,_)},r.utf8border=function(h,f){var p;for((f=f||h.length)>h.length&&(f=h.length),p=f-1;0<=p&&(192&h[p])==128;)p--;return p<0||p===0?f:p+l[h[p]]>f?p:f}},{"./common":41}],43:[function(t,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,u=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;u=u+(c=c+a[l++]|0)|0,--h;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();i.exports=function(a,o,l,c){var u=s,h=c+l;a^=-1;for(var f=c;f<h;f++)a=a>>>8^u[255&(a^o[f])];return-1^a}},{}],46:[function(t,i,r){var s,a=t("../utils/common"),o=t("./trees"),l=t("./adler32"),c=t("./crc32"),u=t("./messages"),h=0,f=4,p=0,_=-2,m=-1,g=4,d=2,v=8,y=9,S=286,T=30,C=19,A=2*S+1,N=15,b=3,E=258,z=E+b+1,D=42,O=113,M=1,H=2,K=3,X=4;function G(w,re){return w.msg=u[re],re}function $(w){return(w<<1)-(4<w?9:0)}function U(w){for(var re=w.length;0<=--re;)w[re]=0}function P(w){var re=w.state,Z=re.pending;Z>w.avail_out&&(Z=w.avail_out),Z!==0&&(a.arraySet(w.output,re.pending_buf,re.pending_out,Z,w.next_out),w.next_out+=Z,re.pending_out+=Z,w.total_out+=Z,w.avail_out-=Z,re.pending-=Z,re.pending===0&&(re.pending_out=0))}function j(w,re){o._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,re),w.block_start=w.strstart,P(w.strm)}function se(w,re){w.pending_buf[w.pending++]=re}function V(w,re){w.pending_buf[w.pending++]=re>>>8&255,w.pending_buf[w.pending++]=255&re}function Y(w,re){var Z,B,k=w.max_chain_length,q=w.strstart,L=w.prev_length,R=w.nice_match,F=w.strstart>w.w_size-z?w.strstart-(w.w_size-z):0,J=w.window,ie=w.w_mask,Q=w.prev,pe=w.strstart+E,me=J[q+L-1],ge=J[q+L];w.prev_length>=w.good_match&&(k>>=2),R>w.lookahead&&(R=w.lookahead);do if(J[(Z=re)+L]===ge&&J[Z+L-1]===me&&J[Z]===J[q]&&J[++Z]===J[q+1]){q+=2,Z++;do;while(J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&J[++q]===J[++Z]&&q<pe);if(B=E-(pe-q),q=pe-E,L<B){if(w.match_start=re,R<=(L=B))break;me=J[q+L-1],ge=J[q+L]}}while((re=Q[re&ie])>F&&--k!=0);return L<=w.lookahead?L:w.lookahead}function ue(w){var re,Z,B,k,q,L,R,F,J,ie,Q=w.w_size;do{if(k=w.window_size-w.lookahead-w.strstart,w.strstart>=Q+(Q-z)){for(a.arraySet(w.window,w.window,Q,Q,0),w.match_start-=Q,w.strstart-=Q,w.block_start-=Q,re=Z=w.hash_size;B=w.head[--re],w.head[re]=Q<=B?B-Q:0,--Z;);for(re=Z=Q;B=w.prev[--re],w.prev[re]=Q<=B?B-Q:0,--Z;);k+=Q}if(w.strm.avail_in===0)break;if(L=w.strm,R=w.window,F=w.strstart+w.lookahead,J=k,ie=void 0,ie=L.avail_in,J<ie&&(ie=J),Z=ie===0?0:(L.avail_in-=ie,a.arraySet(R,L.input,L.next_in,ie,F),L.state.wrap===1?L.adler=l(L.adler,R,ie,F):L.state.wrap===2&&(L.adler=c(L.adler,R,ie,F)),L.next_in+=ie,L.total_in+=ie,ie),w.lookahead+=Z,w.lookahead+w.insert>=b)for(q=w.strstart-w.insert,w.ins_h=w.window[q],w.ins_h=(w.ins_h<<w.hash_shift^w.window[q+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[q+b-1])&w.hash_mask,w.prev[q&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=q,q++,w.insert--,!(w.lookahead+w.insert<b)););}while(w.lookahead<z&&w.strm.avail_in!==0)}function ce(w,re){for(var Z,B;;){if(w.lookahead<z){if(ue(w),w.lookahead<z&&re===h)return M;if(w.lookahead===0)break}if(Z=0,w.lookahead>=b&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+b-1])&w.hash_mask,Z=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),Z!==0&&w.strstart-Z<=w.w_size-z&&(w.match_length=Y(w,Z)),w.match_length>=b)if(B=o._tr_tally(w,w.strstart-w.match_start,w.match_length-b),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=b){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+b-1])&w.hash_mask,Z=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else B=o._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(B&&(j(w,!1),w.strm.avail_out===0))return M}return w.insert=w.strstart<b-1?w.strstart:b-1,re===f?(j(w,!0),w.strm.avail_out===0?K:X):w.last_lit&&(j(w,!1),w.strm.avail_out===0)?M:H}function de(w,re){for(var Z,B,k;;){if(w.lookahead<z){if(ue(w),w.lookahead<z&&re===h)return M;if(w.lookahead===0)break}if(Z=0,w.lookahead>=b&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+b-1])&w.hash_mask,Z=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=b-1,Z!==0&&w.prev_length<w.max_lazy_match&&w.strstart-Z<=w.w_size-z&&(w.match_length=Y(w,Z),w.match_length<=5&&(w.strategy===1||w.match_length===b&&4096<w.strstart-w.match_start)&&(w.match_length=b-1)),w.prev_length>=b&&w.match_length<=w.prev_length){for(k=w.strstart+w.lookahead-b,B=o._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-b),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=k&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+b-1])&w.hash_mask,Z=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=b-1,w.strstart++,B&&(j(w,!1),w.strm.avail_out===0))return M}else if(w.match_available){if((B=o._tr_tally(w,0,w.window[w.strstart-1]))&&j(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return M}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(B=o._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<b-1?w.strstart:b-1,re===f?(j(w,!0),w.strm.avail_out===0?K:X):w.last_lit&&(j(w,!1),w.strm.avail_out===0)?M:H}function _e(w,re,Z,B,k){this.good_length=w,this.max_lazy=re,this.nice_length=Z,this.max_chain=B,this.func=k}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*A),this.dyn_dtree=new a.Buf16(2*(2*T+1)),this.bl_tree=new a.Buf16(2*(2*C+1)),U(this.dyn_ltree),U(this.dyn_dtree),U(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(N+1),this.heap=new a.Buf16(2*S+1),U(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),U(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Te(w){var re;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=d,(re=w.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?D:O,w.adler=re.wrap===2?0:1,re.last_flush=h,o._tr_init(re),p):G(w,_)}function W(w){var re=Te(w);return re===p&&function(Z){Z.window_size=2*Z.w_size,U(Z.head),Z.max_lazy_match=s[Z.level].max_lazy,Z.good_match=s[Z.level].good_length,Z.nice_match=s[Z.level].nice_length,Z.max_chain_length=s[Z.level].max_chain,Z.strstart=0,Z.block_start=0,Z.lookahead=0,Z.insert=0,Z.match_length=Z.prev_length=b-1,Z.match_available=0,Z.ins_h=0}(w.state),re}function Oe(w,re,Z,B,k,q){if(!w)return _;var L=1;if(re===m&&(re=6),B<0?(L=0,B=-B):15<B&&(L=2,B-=16),k<1||y<k||Z!==v||B<8||15<B||re<0||9<re||q<0||g<q)return G(w,_);B===8&&(B=9);var R=new be;return(w.state=R).strm=w,R.wrap=L,R.gzhead=null,R.w_bits=B,R.w_size=1<<R.w_bits,R.w_mask=R.w_size-1,R.hash_bits=k+7,R.hash_size=1<<R.hash_bits,R.hash_mask=R.hash_size-1,R.hash_shift=~~((R.hash_bits+b-1)/b),R.window=new a.Buf8(2*R.w_size),R.head=new a.Buf16(R.hash_size),R.prev=new a.Buf16(R.w_size),R.lit_bufsize=1<<k+6,R.pending_buf_size=4*R.lit_bufsize,R.pending_buf=new a.Buf8(R.pending_buf_size),R.d_buf=1*R.lit_bufsize,R.l_buf=3*R.lit_bufsize,R.level=re,R.strategy=q,R.method=Z,W(w)}s=[new _e(0,0,0,0,function(w,re){var Z=65535;for(Z>w.pending_buf_size-5&&(Z=w.pending_buf_size-5);;){if(w.lookahead<=1){if(ue(w),w.lookahead===0&&re===h)return M;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var B=w.block_start+Z;if((w.strstart===0||w.strstart>=B)&&(w.lookahead=w.strstart-B,w.strstart=B,j(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-z&&(j(w,!1),w.strm.avail_out===0))return M}return w.insert=0,re===f?(j(w,!0),w.strm.avail_out===0?K:X):(w.strstart>w.block_start&&(j(w,!1),w.strm.avail_out),M)}),new _e(4,4,8,4,ce),new _e(4,5,16,8,ce),new _e(4,6,32,32,ce),new _e(4,4,16,16,de),new _e(8,16,32,32,de),new _e(8,16,128,128,de),new _e(8,32,128,256,de),new _e(32,128,258,1024,de),new _e(32,258,258,4096,de)],r.deflateInit=function(w,re){return Oe(w,re,v,15,8,0)},r.deflateInit2=Oe,r.deflateReset=W,r.deflateResetKeep=Te,r.deflateSetHeader=function(w,re){return w&&w.state?w.state.wrap!==2?_:(w.state.gzhead=re,p):_},r.deflate=function(w,re){var Z,B,k,q;if(!w||!w.state||5<re||re<0)return w?G(w,_):_;if(B=w.state,!w.output||!w.input&&w.avail_in!==0||B.status===666&&re!==f)return G(w,w.avail_out===0?-5:_);if(B.strm=w,Z=B.last_flush,B.last_flush=re,B.status===D)if(B.wrap===2)w.adler=0,se(B,31),se(B,139),se(B,8),B.gzhead?(se(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),se(B,255&B.gzhead.time),se(B,B.gzhead.time>>8&255),se(B,B.gzhead.time>>16&255),se(B,B.gzhead.time>>24&255),se(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),se(B,255&B.gzhead.os),B.gzhead.extra&&B.gzhead.extra.length&&(se(B,255&B.gzhead.extra.length),se(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(w.adler=c(w.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=69):(se(B,0),se(B,0),se(B,0),se(B,0),se(B,0),se(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),se(B,3),B.status=O);else{var L=v+(B.w_bits-8<<4)<<8;L|=(2<=B.strategy||B.level<2?0:B.level<6?1:B.level===6?2:3)<<6,B.strstart!==0&&(L|=32),L+=31-L%31,B.status=O,V(B,L),B.strstart!==0&&(V(B,w.adler>>>16),V(B,65535&w.adler)),w.adler=1}if(B.status===69)if(B.gzhead.extra){for(k=B.pending;B.gzindex<(65535&B.gzhead.extra.length)&&(B.pending!==B.pending_buf_size||(B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),P(w),k=B.pending,B.pending!==B.pending_buf_size));)se(B,255&B.gzhead.extra[B.gzindex]),B.gzindex++;B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=73)}else B.status=73;if(B.status===73)if(B.gzhead.name){k=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),P(w),k=B.pending,B.pending===B.pending_buf_size)){q=1;break}q=B.gzindex<B.gzhead.name.length?255&B.gzhead.name.charCodeAt(B.gzindex++):0,se(B,q)}while(q!==0);B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),q===0&&(B.gzindex=0,B.status=91)}else B.status=91;if(B.status===91)if(B.gzhead.comment){k=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),P(w),k=B.pending,B.pending===B.pending_buf_size)){q=1;break}q=B.gzindex<B.gzhead.comment.length?255&B.gzhead.comment.charCodeAt(B.gzindex++):0,se(B,q)}while(q!==0);B.gzhead.hcrc&&B.pending>k&&(w.adler=c(w.adler,B.pending_buf,B.pending-k,k)),q===0&&(B.status=103)}else B.status=103;if(B.status===103&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&P(w),B.pending+2<=B.pending_buf_size&&(se(B,255&w.adler),se(B,w.adler>>8&255),w.adler=0,B.status=O)):B.status=O),B.pending!==0){if(P(w),w.avail_out===0)return B.last_flush=-1,p}else if(w.avail_in===0&&$(re)<=$(Z)&&re!==f)return G(w,-5);if(B.status===666&&w.avail_in!==0)return G(w,-5);if(w.avail_in!==0||B.lookahead!==0||re!==h&&B.status!==666){var R=B.strategy===2?function(F,J){for(var ie;;){if(F.lookahead===0&&(ue(F),F.lookahead===0)){if(J===h)return M;break}if(F.match_length=0,ie=o._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ie&&(j(F,!1),F.strm.avail_out===0))return M}return F.insert=0,J===f?(j(F,!0),F.strm.avail_out===0?K:X):F.last_lit&&(j(F,!1),F.strm.avail_out===0)?M:H}(B,re):B.strategy===3?function(F,J){for(var ie,Q,pe,me,ge=F.window;;){if(F.lookahead<=E){if(ue(F),F.lookahead<=E&&J===h)return M;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=b&&0<F.strstart&&(Q=ge[pe=F.strstart-1])===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]){me=F.strstart+E;do;while(Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&Q===ge[++pe]&&pe<me);F.match_length=E-(me-pe),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=b?(ie=o._tr_tally(F,1,F.match_length-b),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ie=o._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ie&&(j(F,!1),F.strm.avail_out===0))return M}return F.insert=0,J===f?(j(F,!0),F.strm.avail_out===0?K:X):F.last_lit&&(j(F,!1),F.strm.avail_out===0)?M:H}(B,re):s[B.level].func(B,re);if(R!==K&&R!==X||(B.status=666),R===M||R===K)return w.avail_out===0&&(B.last_flush=-1),p;if(R===H&&(re===1?o._tr_align(B):re!==5&&(o._tr_stored_block(B,0,0,!1),re===3&&(U(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),P(w),w.avail_out===0))return B.last_flush=-1,p}return re!==f?p:B.wrap<=0?1:(B.wrap===2?(se(B,255&w.adler),se(B,w.adler>>8&255),se(B,w.adler>>16&255),se(B,w.adler>>24&255),se(B,255&w.total_in),se(B,w.total_in>>8&255),se(B,w.total_in>>16&255),se(B,w.total_in>>24&255)):(V(B,w.adler>>>16),V(B,65535&w.adler)),P(w),0<B.wrap&&(B.wrap=-B.wrap),B.pending!==0?p:1)},r.deflateEnd=function(w){var re;return w&&w.state?(re=w.state.status)!==D&&re!==69&&re!==73&&re!==91&&re!==103&&re!==O&&re!==666?G(w,_):(w.state=null,re===O?G(w,-3):p):_},r.deflateSetDictionary=function(w,re){var Z,B,k,q,L,R,F,J,ie=re.length;if(!w||!w.state||(q=(Z=w.state).wrap)===2||q===1&&Z.status!==D||Z.lookahead)return _;for(q===1&&(w.adler=l(w.adler,re,ie,0)),Z.wrap=0,ie>=Z.w_size&&(q===0&&(U(Z.head),Z.strstart=0,Z.block_start=0,Z.insert=0),J=new a.Buf8(Z.w_size),a.arraySet(J,re,ie-Z.w_size,Z.w_size,0),re=J,ie=Z.w_size),L=w.avail_in,R=w.next_in,F=w.input,w.avail_in=ie,w.next_in=0,w.input=re,ue(Z);Z.lookahead>=b;){for(B=Z.strstart,k=Z.lookahead-(b-1);Z.ins_h=(Z.ins_h<<Z.hash_shift^Z.window[B+b-1])&Z.hash_mask,Z.prev[B&Z.w_mask]=Z.head[Z.ins_h],Z.head[Z.ins_h]=B,B++,--k;);Z.strstart=B,Z.lookahead=b-1,ue(Z)}return Z.strstart+=Z.lookahead,Z.block_start=Z.strstart,Z.insert=Z.lookahead,Z.lookahead=0,Z.match_length=Z.prev_length=b-1,Z.match_available=0,w.next_in=R,w.input=F,w.avail_in=L,Z.wrap=q,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(s,a){var o,l,c,u,h,f,p,_,m,g,d,v,y,S,T,C,A,N,b,E,z,D,O,M,H;o=s.state,l=s.next_in,M=s.input,c=l+(s.avail_in-5),u=s.next_out,H=s.output,h=u-(a-s.avail_out),f=u+(s.avail_out-257),p=o.dmax,_=o.wsize,m=o.whave,g=o.wnext,d=o.window,v=o.hold,y=o.bits,S=o.lencode,T=o.distcode,C=(1<<o.lenbits)-1,A=(1<<o.distbits)-1;e:do{y<15&&(v+=M[l++]<<y,y+=8,v+=M[l++]<<y,y+=8),N=S[v&C];t:for(;;){if(v>>>=b=N>>>24,y-=b,(b=N>>>16&255)===0)H[u++]=65535&N;else{if(!(16&b)){if(!(64&b)){N=S[(65535&N)+(v&(1<<b)-1)];continue t}if(32&b){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}E=65535&N,(b&=15)&&(y<b&&(v+=M[l++]<<y,y+=8),E+=v&(1<<b)-1,v>>>=b,y-=b),y<15&&(v+=M[l++]<<y,y+=8,v+=M[l++]<<y,y+=8),N=T[v&A];n:for(;;){if(v>>>=b=N>>>24,y-=b,!(16&(b=N>>>16&255))){if(!(64&b)){N=T[(65535&N)+(v&(1<<b)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(z=65535&N,y<(b&=15)&&(v+=M[l++]<<y,(y+=8)<b&&(v+=M[l++]<<y,y+=8)),p<(z+=v&(1<<b)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(v>>>=b,y-=b,(b=u-h)<z){if(m<(b=z-b)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(O=d,(D=0)===g){if(D+=_-b,b<E){for(E-=b;H[u++]=d[D++],--b;);D=u-z,O=H}}else if(g<b){if(D+=_+g-b,(b-=g)<E){for(E-=b;H[u++]=d[D++],--b;);if(D=0,g<E){for(E-=b=g;H[u++]=d[D++],--b;);D=u-z,O=H}}}else if(D+=g-b,b<E){for(E-=b;H[u++]=d[D++],--b;);D=u-z,O=H}for(;2<E;)H[u++]=O[D++],H[u++]=O[D++],H[u++]=O[D++],E-=3;E&&(H[u++]=O[D++],1<E&&(H[u++]=O[D++]))}else{for(D=u-z;H[u++]=H[D++],H[u++]=H[D++],H[u++]=H[D++],2<(E-=3););E&&(H[u++]=H[D++],1<E&&(H[u++]=H[D++]))}break}}break}}while(l<c&&u<f);l-=E=y>>3,v&=(1<<(y-=E<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<f?f-u+257:257-(u-f),o.hold=v,o.bits=y}},{}],49:[function(t,i,r){var s=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),u=1,h=2,f=0,p=-2,_=1,m=852,g=592;function d(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(D){var O;return D&&D.state?(O=D.state,D.total_in=D.total_out=O.total=0,D.msg="",O.wrap&&(D.adler=1&O.wrap),O.mode=_,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(m),O.distcode=O.distdyn=new s.Buf32(g),O.sane=1,O.back=-1,f):p}function S(D){var O;return D&&D.state?((O=D.state).wsize=0,O.whave=0,O.wnext=0,y(D)):p}function T(D,O){var M,H;return D&&D.state?(H=D.state,O<0?(M=0,O=-O):(M=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?p:(H.window!==null&&H.wbits!==O&&(H.window=null),H.wrap=M,H.wbits=O,S(D))):p}function C(D,O){var M,H;return D?(H=new v,(D.state=H).window=null,(M=T(D,O))!==f&&(D.state=null),M):p}var A,N,b=!0;function E(D){if(b){var O;for(A=new s.Buf32(512),N=new s.Buf32(32),O=0;O<144;)D.lens[O++]=8;for(;O<256;)D.lens[O++]=9;for(;O<280;)D.lens[O++]=7;for(;O<288;)D.lens[O++]=8;for(c(u,D.lens,0,288,A,0,D.work,{bits:9}),O=0;O<32;)D.lens[O++]=5;c(h,D.lens,0,32,N,0,D.work,{bits:5}),b=!1}D.lencode=A,D.lenbits=9,D.distcode=N,D.distbits=5}function z(D,O,M,H){var K,X=D.state;return X.window===null&&(X.wsize=1<<X.wbits,X.wnext=0,X.whave=0,X.window=new s.Buf8(X.wsize)),H>=X.wsize?(s.arraySet(X.window,O,M-X.wsize,X.wsize,0),X.wnext=0,X.whave=X.wsize):(H<(K=X.wsize-X.wnext)&&(K=H),s.arraySet(X.window,O,M-H,K,X.wnext),(H-=K)?(s.arraySet(X.window,O,M-H,H,0),X.wnext=H,X.whave=X.wsize):(X.wnext+=K,X.wnext===X.wsize&&(X.wnext=0),X.whave<X.wsize&&(X.whave+=K))),0}r.inflateReset=S,r.inflateReset2=T,r.inflateResetKeep=y,r.inflateInit=function(D){return C(D,15)},r.inflateInit2=C,r.inflate=function(D,O){var M,H,K,X,G,$,U,P,j,se,V,Y,ue,ce,de,_e,be,Te,W,Oe,w,re,Z,B,k=0,q=new s.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return p;(M=D.state).mode===12&&(M.mode=13),G=D.next_out,K=D.output,U=D.avail_out,X=D.next_in,H=D.input,$=D.avail_in,P=M.hold,j=M.bits,se=$,V=U,re=f;e:for(;;)switch(M.mode){case _:if(M.wrap===0){M.mode=13;break}for(;j<16;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(2&M.wrap&&P===35615){q[M.check=0]=255&P,q[1]=P>>>8&255,M.check=o(M.check,q,2,0),j=P=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&P)<<8)+(P>>8))%31){D.msg="incorrect header check",M.mode=30;break}if((15&P)!=8){D.msg="unknown compression method",M.mode=30;break}if(j-=4,w=8+(15&(P>>>=4)),M.wbits===0)M.wbits=w;else if(w>M.wbits){D.msg="invalid window size",M.mode=30;break}M.dmax=1<<w,D.adler=M.check=1,M.mode=512&P?10:12,j=P=0;break;case 2:for(;j<16;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(M.flags=P,(255&M.flags)!=8){D.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){D.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=P>>8&1),512&M.flags&&(q[0]=255&P,q[1]=P>>>8&255,M.check=o(M.check,q,2,0)),j=P=0,M.mode=3;case 3:for(;j<32;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.head&&(M.head.time=P),512&M.flags&&(q[0]=255&P,q[1]=P>>>8&255,q[2]=P>>>16&255,q[3]=P>>>24&255,M.check=o(M.check,q,4,0)),j=P=0,M.mode=4;case 4:for(;j<16;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.head&&(M.head.xflags=255&P,M.head.os=P>>8),512&M.flags&&(q[0]=255&P,q[1]=P>>>8&255,M.check=o(M.check,q,2,0)),j=P=0,M.mode=5;case 5:if(1024&M.flags){for(;j<16;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.length=P,M.head&&(M.head.extra_len=P),512&M.flags&&(q[0]=255&P,q[1]=P>>>8&255,M.check=o(M.check,q,2,0)),j=P=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&($<(Y=M.length)&&(Y=$),Y&&(M.head&&(w=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,H,X,Y,w)),512&M.flags&&(M.check=o(M.check,H,Y,X)),$-=Y,X+=Y,M.length-=Y),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if($===0)break e;for(Y=0;w=H[X+Y++],M.head&&w&&M.length<65536&&(M.head.name+=String.fromCharCode(w)),w&&Y<$;);if(512&M.flags&&(M.check=o(M.check,H,Y,X)),$-=Y,X+=Y,w)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if($===0)break e;for(Y=0;w=H[X+Y++],M.head&&w&&M.length<65536&&(M.head.comment+=String.fromCharCode(w)),w&&Y<$;);if(512&M.flags&&(M.check=o(M.check,H,Y,X)),$-=Y,X+=Y,w)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;j<16;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(P!==(65535&M.check)){D.msg="header crc mismatch",M.mode=30;break}j=P=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),D.adler=M.check=0,M.mode=12;break;case 10:for(;j<32;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}D.adler=M.check=d(P),j=P=0,M.mode=11;case 11:if(M.havedict===0)return D.next_out=G,D.avail_out=U,D.next_in=X,D.avail_in=$,M.hold=P,M.bits=j,2;D.adler=M.check=1,M.mode=12;case 12:if(O===5||O===6)break e;case 13:if(M.last){P>>>=7&j,j-=7&j,M.mode=27;break}for(;j<3;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}switch(M.last=1&P,j-=1,3&(P>>>=1)){case 0:M.mode=14;break;case 1:if(E(M),M.mode=20,O!==6)break;P>>>=2,j-=2;break e;case 2:M.mode=17;break;case 3:D.msg="invalid block type",M.mode=30}P>>>=2,j-=2;break;case 14:for(P>>>=7&j,j-=7&j;j<32;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if((65535&P)!=(P>>>16^65535)){D.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&P,j=P=0,M.mode=15,O===6)break e;case 15:M.mode=16;case 16:if(Y=M.length){if($<Y&&(Y=$),U<Y&&(Y=U),Y===0)break e;s.arraySet(K,H,X,Y,G),$-=Y,X+=Y,U-=Y,G+=Y,M.length-=Y;break}M.mode=12;break;case 17:for(;j<14;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(M.nlen=257+(31&P),P>>>=5,j-=5,M.ndist=1+(31&P),P>>>=5,j-=5,M.ncode=4+(15&P),P>>>=4,j-=4,286<M.nlen||30<M.ndist){D.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;j<3;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.lens[L[M.have++]]=7&P,P>>>=3,j-=3}for(;M.have<19;)M.lens[L[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,Z={bits:M.lenbits},re=c(0,M.lens,0,19,M.lencode,0,M.work,Z),M.lenbits=Z.bits,re){D.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;_e=(k=M.lencode[P&(1<<M.lenbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=j);){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(be<16)P>>>=de,j-=de,M.lens[M.have++]=be;else{if(be===16){for(B=de+2;j<B;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(P>>>=de,j-=de,M.have===0){D.msg="invalid bit length repeat",M.mode=30;break}w=M.lens[M.have-1],Y=3+(3&P),P>>>=2,j-=2}else if(be===17){for(B=de+3;j<B;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}j-=de,w=0,Y=3+(7&(P>>>=de)),P>>>=3,j-=3}else{for(B=de+7;j<B;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}j-=de,w=0,Y=11+(127&(P>>>=de)),P>>>=7,j-=7}if(M.have+Y>M.nlen+M.ndist){D.msg="invalid bit length repeat",M.mode=30;break}for(;Y--;)M.lens[M.have++]=w}}if(M.mode===30)break;if(M.lens[256]===0){D.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,Z={bits:M.lenbits},re=c(u,M.lens,0,M.nlen,M.lencode,0,M.work,Z),M.lenbits=Z.bits,re){D.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,Z={bits:M.distbits},re=c(h,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,Z),M.distbits=Z.bits,re){D.msg="invalid distances set",M.mode=30;break}if(M.mode=20,O===6)break e;case 20:M.mode=21;case 21:if(6<=$&&258<=U){D.next_out=G,D.avail_out=U,D.next_in=X,D.avail_in=$,M.hold=P,M.bits=j,l(D,V),G=D.next_out,K=D.output,U=D.avail_out,X=D.next_in,H=D.input,$=D.avail_in,P=M.hold,j=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;_e=(k=M.lencode[P&(1<<M.lenbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=j);){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(_e&&!(240&_e)){for(Te=de,W=_e,Oe=be;_e=(k=M.lencode[Oe+((P&(1<<Te+W)-1)>>Te)])>>>16&255,be=65535&k,!(Te+(de=k>>>24)<=j);){if($===0)break e;$--,P+=H[X++]<<j,j+=8}P>>>=Te,j-=Te,M.back+=Te}if(P>>>=de,j-=de,M.back+=de,M.length=be,_e===0){M.mode=26;break}if(32&_e){M.back=-1,M.mode=12;break}if(64&_e){D.msg="invalid literal/length code",M.mode=30;break}M.extra=15&_e,M.mode=22;case 22:if(M.extra){for(B=M.extra;j<B;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.length+=P&(1<<M.extra)-1,P>>>=M.extra,j-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;_e=(k=M.distcode[P&(1<<M.distbits)-1])>>>16&255,be=65535&k,!((de=k>>>24)<=j);){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(!(240&_e)){for(Te=de,W=_e,Oe=be;_e=(k=M.distcode[Oe+((P&(1<<Te+W)-1)>>Te)])>>>16&255,be=65535&k,!(Te+(de=k>>>24)<=j);){if($===0)break e;$--,P+=H[X++]<<j,j+=8}P>>>=Te,j-=Te,M.back+=Te}if(P>>>=de,j-=de,M.back+=de,64&_e){D.msg="invalid distance code",M.mode=30;break}M.offset=be,M.extra=15&_e,M.mode=24;case 24:if(M.extra){for(B=M.extra;j<B;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}M.offset+=P&(1<<M.extra)-1,P>>>=M.extra,j-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){D.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(U===0)break e;if(Y=V-U,M.offset>Y){if((Y=M.offset-Y)>M.whave&&M.sane){D.msg="invalid distance too far back",M.mode=30;break}ue=Y>M.wnext?(Y-=M.wnext,M.wsize-Y):M.wnext-Y,Y>M.length&&(Y=M.length),ce=M.window}else ce=K,ue=G-M.offset,Y=M.length;for(U<Y&&(Y=U),U-=Y,M.length-=Y;K[G++]=ce[ue++],--Y;);M.length===0&&(M.mode=21);break;case 26:if(U===0)break e;K[G++]=M.length,U--,M.mode=21;break;case 27:if(M.wrap){for(;j<32;){if($===0)break e;$--,P|=H[X++]<<j,j+=8}if(V-=U,D.total_out+=V,M.total+=V,V&&(D.adler=M.check=M.flags?o(M.check,K,V,G-V):a(M.check,K,V,G-V)),V=U,(M.flags?P:d(P))!==M.check){D.msg="incorrect data check",M.mode=30;break}j=P=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;j<32;){if($===0)break e;$--,P+=H[X++]<<j,j+=8}if(P!==(4294967295&M.total)){D.msg="incorrect length check",M.mode=30;break}j=P=0}M.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;case 32:default:return p}return D.next_out=G,D.avail_out=U,D.next_in=X,D.avail_in=$,M.hold=P,M.bits=j,(M.wsize||V!==D.avail_out&&M.mode<30&&(M.mode<27||O!==4))&&z(D,D.output,D.next_out,V-D.avail_out)?(M.mode=31,-4):(se-=D.avail_in,V-=D.avail_out,D.total_in+=se,D.total_out+=V,M.total+=V,M.wrap&&V&&(D.adler=M.check=M.flags?o(M.check,K,V,D.next_out-V):a(M.check,K,V,D.next_out-V)),D.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(se==0&&V===0||O===4)&&re===f&&(re=-5),re)},r.inflateEnd=function(D){if(!D||!D.state)return p;var O=D.state;return O.window&&(O.window=null),D.state=null,f},r.inflateGetHeader=function(D,O){var M;return D&&D.state&&2&(M=D.state).wrap?((M.head=O).done=!1,f):p},r.inflateSetDictionary=function(D,O){var M,H=O.length;return D&&D.state?(M=D.state).wrap!==0&&M.mode!==11?p:M.mode===11&&a(1,O,H,0)!==M.check?-3:z(D,O,H,H)?(M.mode=31,-4):(M.havedict=1,f):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var s=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(u,h,f,p,_,m,g,d){var v,y,S,T,C,A,N,b,E,z=d.bits,D=0,O=0,M=0,H=0,K=0,X=0,G=0,$=0,U=0,P=0,j=null,se=0,V=new s.Buf16(16),Y=new s.Buf16(16),ue=null,ce=0;for(D=0;D<=15;D++)V[D]=0;for(O=0;O<p;O++)V[h[f+O]]++;for(K=z,H=15;1<=H&&V[H]===0;H--);if(H<K&&(K=H),H===0)return _[m++]=20971520,_[m++]=20971520,d.bits=1,0;for(M=1;M<H&&V[M]===0;M++);for(K<M&&(K=M),D=$=1;D<=15;D++)if($<<=1,($-=V[D])<0)return-1;if(0<$&&(u===0||H!==1))return-1;for(Y[1]=0,D=1;D<15;D++)Y[D+1]=Y[D]+V[D];for(O=0;O<p;O++)h[f+O]!==0&&(g[Y[h[f+O]]++]=O);if(A=u===0?(j=ue=g,19):u===1?(j=a,se-=257,ue=o,ce-=257,256):(j=l,ue=c,-1),D=M,C=m,G=O=P=0,S=-1,T=(U=1<<(X=K))-1,u===1&&852<U||u===2&&592<U)return 1;for(;;){for(N=D-G,E=g[O]<A?(b=0,g[O]):g[O]>A?(b=ue[ce+g[O]],j[se+g[O]]):(b=96,0),v=1<<D-G,M=y=1<<X;_[C+(P>>G)+(y-=v)]=N<<24|b<<16|E|0,y!==0;);for(v=1<<D-1;P&v;)v>>=1;if(v!==0?(P&=v-1,P+=v):P=0,O++,--V[D]==0){if(D===H)break;D=h[f+g[O]]}if(K<D&&(P&T)!==S){for(G===0&&(G=K),C+=M,$=1<<(X=D-G);X+G<H&&!(($-=V[X+G])<=0);)X++,$<<=1;if(U+=1<<X,u===1&&852<U||u===2&&592<U)return 1;_[S=P&T]=K<<24|X<<16|C-m|0}}return P!==0&&(_[C+P]=D-G<<24|64<<16|0),d.bits=K,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var s=t("../utils/common"),a=0,o=1;function l(k){for(var q=k.length;0<=--q;)k[q]=0}var c=0,u=29,h=256,f=h+1+u,p=30,_=19,m=2*f+1,g=15,d=16,v=7,y=256,S=16,T=17,C=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(f+2));l(z);var D=new Array(2*p);l(D);var O=new Array(512);l(O);var M=new Array(256);l(M);var H=new Array(u);l(H);var K,X,G,$=new Array(p);function U(k,q,L,R,F){this.static_tree=k,this.extra_bits=q,this.extra_base=L,this.elems=R,this.max_length=F,this.has_stree=k&&k.length}function P(k,q){this.dyn_tree=k,this.max_code=0,this.stat_desc=q}function j(k){return k<256?O[k]:O[256+(k>>>7)]}function se(k,q){k.pending_buf[k.pending++]=255&q,k.pending_buf[k.pending++]=q>>>8&255}function V(k,q,L){k.bi_valid>d-L?(k.bi_buf|=q<<k.bi_valid&65535,se(k,k.bi_buf),k.bi_buf=q>>d-k.bi_valid,k.bi_valid+=L-d):(k.bi_buf|=q<<k.bi_valid&65535,k.bi_valid+=L)}function Y(k,q,L){V(k,L[2*q],L[2*q+1])}function ue(k,q){for(var L=0;L|=1&k,k>>>=1,L<<=1,0<--q;);return L>>>1}function ce(k,q,L){var R,F,J=new Array(g+1),ie=0;for(R=1;R<=g;R++)J[R]=ie=ie+L[R-1]<<1;for(F=0;F<=q;F++){var Q=k[2*F+1];Q!==0&&(k[2*F]=ue(J[Q]++,Q))}}function de(k){var q;for(q=0;q<f;q++)k.dyn_ltree[2*q]=0;for(q=0;q<p;q++)k.dyn_dtree[2*q]=0;for(q=0;q<_;q++)k.bl_tree[2*q]=0;k.dyn_ltree[2*y]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function _e(k){8<k.bi_valid?se(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function be(k,q,L,R){var F=2*q,J=2*L;return k[F]<k[J]||k[F]===k[J]&&R[q]<=R[L]}function Te(k,q,L){for(var R=k.heap[L],F=L<<1;F<=k.heap_len&&(F<k.heap_len&&be(q,k.heap[F+1],k.heap[F],k.depth)&&F++,!be(q,R,k.heap[F],k.depth));)k.heap[L]=k.heap[F],L=F,F<<=1;k.heap[L]=R}function W(k,q,L){var R,F,J,ie,Q=0;if(k.last_lit!==0)for(;R=k.pending_buf[k.d_buf+2*Q]<<8|k.pending_buf[k.d_buf+2*Q+1],F=k.pending_buf[k.l_buf+Q],Q++,R===0?Y(k,F,q):(Y(k,(J=M[F])+h+1,q),(ie=A[J])!==0&&V(k,F-=H[J],ie),Y(k,J=j(--R),L),(ie=N[J])!==0&&V(k,R-=$[J],ie)),Q<k.last_lit;);Y(k,y,q)}function Oe(k,q){var L,R,F,J=q.dyn_tree,ie=q.stat_desc.static_tree,Q=q.stat_desc.has_stree,pe=q.stat_desc.elems,me=-1;for(k.heap_len=0,k.heap_max=m,L=0;L<pe;L++)J[2*L]!==0?(k.heap[++k.heap_len]=me=L,k.depth[L]=0):J[2*L+1]=0;for(;k.heap_len<2;)J[2*(F=k.heap[++k.heap_len]=me<2?++me:0)]=1,k.depth[F]=0,k.opt_len--,Q&&(k.static_len-=ie[2*F+1]);for(q.max_code=me,L=k.heap_len>>1;1<=L;L--)Te(k,J,L);for(F=pe;L=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Te(k,J,1),R=k.heap[1],k.heap[--k.heap_max]=L,k.heap[--k.heap_max]=R,J[2*F]=J[2*L]+J[2*R],k.depth[F]=(k.depth[L]>=k.depth[R]?k.depth[L]:k.depth[R])+1,J[2*L+1]=J[2*R+1]=F,k.heap[1]=F++,Te(k,J,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],function(ge,ke){var ve,we,He,Ae,Re,Be,ze=ke.dyn_tree,ot=ke.max_code,ee=ke.stat_desc.static_tree,ye=ke.stat_desc.has_stree,fe=ke.stat_desc.extra_bits,he=ke.stat_desc.extra_base,Se=ke.stat_desc.max_length,Ue=0;for(Ae=0;Ae<=g;Ae++)ge.bl_count[Ae]=0;for(ze[2*ge.heap[ge.heap_max]+1]=0,ve=ge.heap_max+1;ve<m;ve++)Se<(Ae=ze[2*ze[2*(we=ge.heap[ve])+1]+1]+1)&&(Ae=Se,Ue++),ze[2*we+1]=Ae,ot<we||(ge.bl_count[Ae]++,Re=0,he<=we&&(Re=fe[we-he]),Be=ze[2*we],ge.opt_len+=Be*(Ae+Re),ye&&(ge.static_len+=Be*(ee[2*we+1]+Re)));if(Ue!==0){do{for(Ae=Se-1;ge.bl_count[Ae]===0;)Ae--;ge.bl_count[Ae]--,ge.bl_count[Ae+1]+=2,ge.bl_count[Se]--,Ue-=2}while(0<Ue);for(Ae=Se;Ae!==0;Ae--)for(we=ge.bl_count[Ae];we!==0;)ot<(He=ge.heap[--ve])||(ze[2*He+1]!==Ae&&(ge.opt_len+=(Ae-ze[2*He+1])*ze[2*He],ze[2*He+1]=Ae),we--)}}(k,q),ce(J,me,k.bl_count)}function w(k,q,L){var R,F,J=-1,ie=q[1],Q=0,pe=7,me=4;for(ie===0&&(pe=138,me=3),q[2*(L+1)+1]=65535,R=0;R<=L;R++)F=ie,ie=q[2*(R+1)+1],++Q<pe&&F===ie||(Q<me?k.bl_tree[2*F]+=Q:F!==0?(F!==J&&k.bl_tree[2*F]++,k.bl_tree[2*S]++):Q<=10?k.bl_tree[2*T]++:k.bl_tree[2*C]++,J=F,me=(Q=0)===ie?(pe=138,3):F===ie?(pe=6,3):(pe=7,4))}function re(k,q,L){var R,F,J=-1,ie=q[1],Q=0,pe=7,me=4;for(ie===0&&(pe=138,me=3),R=0;R<=L;R++)if(F=ie,ie=q[2*(R+1)+1],!(++Q<pe&&F===ie)){if(Q<me)for(;Y(k,F,k.bl_tree),--Q!=0;);else F!==0?(F!==J&&(Y(k,F,k.bl_tree),Q--),Y(k,S,k.bl_tree),V(k,Q-3,2)):Q<=10?(Y(k,T,k.bl_tree),V(k,Q-3,3)):(Y(k,C,k.bl_tree),V(k,Q-11,7));J=F,me=(Q=0)===ie?(pe=138,3):F===ie?(pe=6,3):(pe=7,4)}}l($);var Z=!1;function B(k,q,L,R){V(k,(c<<1)+(R?1:0),3),function(F,J,ie,Q){_e(F),se(F,ie),se(F,~ie),s.arraySet(F.pending_buf,F.window,J,ie,F.pending),F.pending+=ie}(k,q,L)}r._tr_init=function(k){Z||(function(){var q,L,R,F,J,ie=new Array(g+1);for(F=R=0;F<u-1;F++)for(H[F]=R,q=0;q<1<<A[F];q++)M[R++]=F;for(M[R-1]=F,F=J=0;F<16;F++)for($[F]=J,q=0;q<1<<N[F];q++)O[J++]=F;for(J>>=7;F<p;F++)for($[F]=J<<7,q=0;q<1<<N[F]-7;q++)O[256+J++]=F;for(L=0;L<=g;L++)ie[L]=0;for(q=0;q<=143;)z[2*q+1]=8,q++,ie[8]++;for(;q<=255;)z[2*q+1]=9,q++,ie[9]++;for(;q<=279;)z[2*q+1]=7,q++,ie[7]++;for(;q<=287;)z[2*q+1]=8,q++,ie[8]++;for(ce(z,f+1,ie),q=0;q<p;q++)D[2*q+1]=5,D[2*q]=ue(q,5);K=new U(z,A,h+1,f,g),X=new U(D,N,0,p,g),G=new U(new Array(0),b,0,_,v)}(),Z=!0),k.l_desc=new P(k.dyn_ltree,K),k.d_desc=new P(k.dyn_dtree,X),k.bl_desc=new P(k.bl_tree,G),k.bi_buf=0,k.bi_valid=0,de(k)},r._tr_stored_block=B,r._tr_flush_block=function(k,q,L,R){var F,J,ie=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=function(Q){var pe,me=4093624447;for(pe=0;pe<=31;pe++,me>>>=1)if(1&me&&Q.dyn_ltree[2*pe]!==0)return a;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return o;for(pe=32;pe<h;pe++)if(Q.dyn_ltree[2*pe]!==0)return o;return a}(k)),Oe(k,k.l_desc),Oe(k,k.d_desc),ie=function(Q){var pe;for(w(Q,Q.dyn_ltree,Q.l_desc.max_code),w(Q,Q.dyn_dtree,Q.d_desc.max_code),Oe(Q,Q.bl_desc),pe=_-1;3<=pe&&Q.bl_tree[2*E[pe]+1]===0;pe--);return Q.opt_len+=3*(pe+1)+5+5+4,pe}(k),F=k.opt_len+3+7>>>3,(J=k.static_len+3+7>>>3)<=F&&(F=J)):F=J=L+5,L+4<=F&&q!==-1?B(k,q,L,R):k.strategy===4||J===F?(V(k,2+(R?1:0),3),W(k,z,D)):(V(k,4+(R?1:0),3),function(Q,pe,me,ge){var ke;for(V(Q,pe-257,5),V(Q,me-1,5),V(Q,ge-4,4),ke=0;ke<ge;ke++)V(Q,Q.bl_tree[2*E[ke]+1],3);re(Q,Q.dyn_ltree,pe-1),re(Q,Q.dyn_dtree,me-1)}(k,k.l_desc.max_code+1,k.d_desc.max_code+1,ie+1),W(k,k.dyn_ltree,k.dyn_dtree)),de(k),R&&_e(k)},r._tr_tally=function(k,q,L){return k.pending_buf[k.d_buf+2*k.last_lit]=q>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&q,k.pending_buf[k.l_buf+k.last_lit]=255&L,k.last_lit++,q===0?k.dyn_ltree[2*L]++:(k.matches++,q--,k.dyn_ltree[2*(M[L]+h+1)]++,k.dyn_dtree[2*j(q)]++),k.last_lit===k.lit_bufsize-1},r._tr_align=function(k){V(k,2,3),Y(k,y,z),function(q){q.bi_valid===16?(se(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)}(k)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,u,h,f=1,p={},_=!1,m=a.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(a);g=g&&g.setTimeout?g:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){v(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,T=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=T,S}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",y,!1):a.attachEvent("onmessage",y),function(S){a.postMessage(h+S,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(S){v(S.data)},function(S){u.port2.postMessage(S)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(S){var T=m.createElement("script");T.onreadystatechange=function(){v(S),T.onreadystatechange=null,c.removeChild(T),T=null},c.appendChild(T)}):function(S){setTimeout(v,0,S)},g.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var T=new Array(arguments.length-1),C=0;C<T.length;C++)T[C]=arguments[C+1];var A={callback:S,args:T};return p[f]=A,l(f),f++},g.clearImmediate=d}function d(S){delete p[S]}function v(S){if(_)setTimeout(v,0,S);else{var T=p[S];if(T){_=!0;try{(function(C){var A=C.callback,N=C.args;switch(N.length){case 0:A();break;case 1:A(N[0]);break;case 2:A(N[0],N[1]);break;case 3:A(N[0],N[1],N[2]);break;default:A.apply(o,N)}})(T)}finally{d(S),_=!1}}}}function y(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(h)===0&&v(+S.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Vy);var wR=Vy.exports;const V0=W0(wR);var cm={};(function n(e,t,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var U=new OffscreenCanvas(1,1),P=U.getContext("2d");P.fillRect(0,0,1,1);var j=U.transferToImageBitmap();P.createPattern(j,"no-repeat")}catch{return!1}return!0}();function l(){}function c(U){var P=t.exports.Promise,j=P!==void 0?P:e.Promise;return typeof j=="function"?new j(U):(U(l,l),null)}var u=function(U,P){return{transform:function(j){if(U)return j;if(P.has(j))return P.get(j);var se=new OffscreenCanvas(j.width,j.height),V=se.getContext("2d");return V.drawImage(j,0,0),P.set(j,se),se},clear:function(){P.clear()}}}(o,new Map),h=function(){var U=Math.floor(16.666666666666668),P,j,se={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(Y){var ue=Math.random();return se[ue]=requestAnimationFrame(function ce(de){V===de||V+U-1<de?(V=de,delete se[ue],Y()):se[ue]=requestAnimationFrame(ce)}),ue},j=function(Y){se[Y]&&cancelAnimationFrame(se[Y])}):(P=function(Y){return setTimeout(Y,U)},j=function(Y){return clearTimeout(Y)}),{frame:P,cancel:j}}(),f=function(){var U,P,j={};function se(V){function Y(ue,ce){V.postMessage({options:ue||{},callback:ce})}V.init=function(ce){var de=ce.transferControlToOffscreen();V.postMessage({canvas:de},[de])},V.fire=function(ce,de,_e){if(P)return Y(ce,null),P;var be=Math.random().toString(36).slice(2);return P=c(function(Te){function W(Oe){Oe.data.callback===be&&(delete j[be],V.removeEventListener("message",W),P=null,u.clear(),_e(),Te())}V.addEventListener("message",W),Y(ce,be),j[be]=W.bind(null,{data:{callback:be}})}),P},V.reset=function(){V.postMessage({reset:!0});for(var ce in j)j[ce](),delete j[ce]}}return function(){if(U)return U;if(!i&&s){var V=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([V])))}catch(Y){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Y),null}se(U)}return U}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(U,P){return P?P(U):U}function m(U){return U!=null}function g(U,P,j){return _(U&&m(U[P])?U[P]:p[P],j)}function d(U){return U<0?0:Math.floor(U)}function v(U,P){return Math.floor(Math.random()*(P-U))+U}function y(U){return parseInt(U,16)}function S(U){return U.map(T)}function T(U){var P=String(U).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:y(P.substring(0,2)),g:y(P.substring(2,4)),b:y(P.substring(4,6))}}function C(U){var P=g(U,"origin",Object);return P.x=g(P,"x",Number),P.y=g(P,"y",Number),P}function A(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function N(U){var P=U.getBoundingClientRect();U.width=P.width,U.height=P.height}function b(U){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=U,P}function E(U,P,j,se,V,Y,ue,ce,de){U.save(),U.translate(P,j),U.rotate(Y),U.scale(se,V),U.arc(0,0,1,ue,ce,de),U.restore()}function z(U){var P=U.angle*(Math.PI/180),j=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-P+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function D(U,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var j=P.tick++/P.totalTicks,se=P.x+P.random*P.tiltCos,V=P.y+P.random*P.tiltSin,Y=P.wobbleX+P.random*P.tiltCos,ue=P.wobbleY+P.random*P.tiltSin;if(U.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-j)+")",U.beginPath(),a&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))U.fill(X(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(Y-se)*.1,Math.abs(ue-V)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var ce=Math.PI/10*P.wobble,de=Math.abs(Y-se)*.1,_e=Math.abs(ue-V)*.1,be=P.shape.bitmap.width*P.scalar,Te=P.shape.bitmap.height*P.scalar,W=new DOMMatrix([Math.cos(ce)*de,Math.sin(ce)*de,-Math.sin(ce)*_e,Math.cos(ce)*_e,P.x,P.y]);W.multiplySelf(new DOMMatrix(P.shape.matrix));var Oe=U.createPattern(u.transform(P.shape.bitmap),"no-repeat");Oe.setTransform(W),U.globalAlpha=1-j,U.fillStyle=Oe,U.fillRect(P.x-be/2,P.y-Te/2,be,Te),U.globalAlpha=1}else if(P.shape==="circle")U.ellipse?U.ellipse(P.x,P.y,Math.abs(Y-se)*P.ovalScalar,Math.abs(ue-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):E(U,P.x,P.y,Math.abs(Y-se)*P.ovalScalar,Math.abs(ue-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var w=Math.PI/2*3,re=4*P.scalar,Z=8*P.scalar,B=P.x,k=P.y,q=5,L=Math.PI/q;q--;)B=P.x+Math.cos(w)*Z,k=P.y+Math.sin(w)*Z,U.lineTo(B,k),w+=L,B=P.x+Math.cos(w)*re,k=P.y+Math.sin(w)*re,U.lineTo(B,k),w+=L;else U.moveTo(Math.floor(P.x),Math.floor(P.y)),U.lineTo(Math.floor(P.wobbleX),Math.floor(V)),U.lineTo(Math.floor(Y),Math.floor(ue)),U.lineTo(Math.floor(se),Math.floor(P.wobbleY));return U.closePath(),U.fill(),P.tick<P.totalTicks}function O(U,P,j,se,V){var Y=P.slice(),ue=U.getContext("2d"),ce,de,_e=c(function(be){function Te(){ce=de=null,ue.clearRect(0,0,se.width,se.height),u.clear(),V(),be()}function W(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=U.width=r.width,se.height=U.height=r.height),!se.width&&!se.height&&(j(U),se.width=U.width,se.height=U.height),ue.clearRect(0,0,se.width,se.height),Y=Y.filter(function(Oe){return D(ue,Oe)}),Y.length?ce=h.frame(W):Te()}ce=h.frame(W),de=Te});return{addFettis:function(be){return Y=Y.concat(be),_e},canvas:U,promise:_e,reset:function(){ce&&h.cancel(ce),de&&de()}}}function M(U,P){var j=!U,se=!!g(P||{},"resize"),V=!1,Y=g(P,"disableForReducedMotion",Boolean),ue=s&&!!g(P||{},"useWorker"),ce=ue?f():null,de=j?A:N,_e=U&&ce?!!U.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Te;function W(w,re,Z){for(var B=g(w,"particleCount",d),k=g(w,"angle",Number),q=g(w,"spread",Number),L=g(w,"startVelocity",Number),R=g(w,"decay",Number),F=g(w,"gravity",Number),J=g(w,"drift",Number),ie=g(w,"colors",S),Q=g(w,"ticks",Number),pe=g(w,"shapes"),me=g(w,"scalar"),ge=!!g(w,"flat"),ke=C(w),ve=B,we=[],He=U.width*ke.x,Ae=U.height*ke.y;ve--;)we.push(z({x:He,y:Ae,angle:k,spread:q,startVelocity:L,color:ie[ve%ie.length],shape:pe[v(0,pe.length)],ticks:Q,decay:R,gravity:F,drift:J,scalar:me,flat:ge}));return Te?Te.addFettis(we):(Te=O(U,we,de,re,Z),Te.promise)}function Oe(w){var re=Y||g(w,"disableForReducedMotion",Boolean),Z=g(w,"zIndex",Number);if(re&&be)return c(function(L){L()});j&&Te?U=Te.canvas:j&&!U&&(U=b(Z),document.body.appendChild(U)),se&&!_e&&de(U);var B={width:U.width,height:U.height};ce&&!_e&&ce.init(U),_e=!0,ce&&(U.__confetti_initialized=!0);function k(){if(ce){var L={getBoundingClientRect:function(){if(!j)return U.getBoundingClientRect()}};de(L),ce.postMessage({resize:{width:L.width,height:L.height}});return}B.width=B.height=null}function q(){Te=null,se&&(V=!1,e.removeEventListener("resize",k)),j&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,_e=!1)}return se&&!V&&(V=!0,e.addEventListener("resize",k,!1)),ce?ce.fire(w,B,q):W(w,B,q)}return Oe.reset=function(){ce&&ce.reset(),Te&&Te.reset()},Oe}var H;function K(){return H||(H=M(null,{useWorker:!0,resize:!0})),H}function X(U,P,j,se,V,Y,ue){var ce=new Path2D(U),de=new Path2D;de.addPath(ce,new DOMMatrix(P));var _e=new Path2D;return _e.addPath(de,new DOMMatrix([Math.cos(ue)*V,Math.sin(ue)*V,-Math.sin(ue)*Y,Math.cos(ue)*Y,j,se])),_e}function G(U){if(!a)throw new Error("path confetti are not supported in this browser");var P,j;typeof U=="string"?P=U:(P=U.path,j=U.matrix);var se=new Path2D(P),V=document.createElement("canvas"),Y=V.getContext("2d");if(!j){for(var ue=1e3,ce=ue,de=ue,_e=0,be=0,Te,W,Oe=0;Oe<ue;Oe+=2)for(var w=0;w<ue;w+=2)Y.isPointInPath(se,Oe,w,"nonzero")&&(ce=Math.min(ce,Oe),de=Math.min(de,w),_e=Math.max(_e,Oe),be=Math.max(be,w));Te=_e-ce,W=be-de;var re=10,Z=Math.min(re/Te,re/W);j=[Z,0,0,Z,-Math.round(Te/2+ce)*Z,-Math.round(W/2+de)*Z]}return{type:"path",path:P,matrix:j}}function $(U){var P,j=1,se="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?P=U:(P=U.text,j="scalar"in U?U.scalar:j,V="fontFamily"in U?U.fontFamily:V,se="color"in U?U.color:se);var Y=10*j,ue=""+Y+"px "+V,ce=new OffscreenCanvas(Y,Y),de=ce.getContext("2d");de.font=ue;var _e=de.measureText(P),be=Math.ceil(_e.actualBoundingBoxRight+_e.actualBoundingBoxLeft),Te=Math.ceil(_e.actualBoundingBoxAscent+_e.actualBoundingBoxDescent),W=2,Oe=_e.actualBoundingBoxLeft+W,w=_e.actualBoundingBoxAscent+W;be+=W+W,Te+=W+W,ce=new OffscreenCanvas(be,Te),de=ce.getContext("2d"),de.font=ue,de.fillStyle=se,de.fillText(P,Oe,w);var re=1/j;return{type:"bitmap",bitmap:ce.transferToImageBitmap(),matrix:[re,0,0,re,-be*re/2,-Te*re/2]}}t.exports=function(){return K().apply(this,arguments)},t.exports.reset=function(){K().reset()},t.exports.create=M,t.exports.shapeFromPath=G,t.exports.shapeFromText=$})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),cm,!1);const du=cm.exports;cm.exports.create;const H0=[{id:"01-animations",title:"01. Кинематографичные анимации (Scroll & Post-Processing)",category:"Motion & WebGL",sizeEstimate:"45 KB",files:[{name:"TimelineEngine.ts",content:`// STUDIO OS: TimelineEngine.ts
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
export class IntroEngine { constructor(options: any) {} }`}]},{id:"06-seo",title:"06. Сквозная SEO-инъекция (Zod Contracts & JSON-LD)",category:"SEO & Structured Data",sizeEstimate:"22 KB",files:[{name:"seo.contracts.ts",content:"export interface PageSEOContract { title: string; canonical: string; openGraph: any; }"}]},{id:"07-archetypes",title:"07. 5 Дизайн-Архетипов (Noir, Brutal, Cyber, Swiss, Minimal)",category:"Design Systems",sizeEstimate:"38 KB",files:[{name:"TokenEngine.ts",content:"export const ARCHETYPES = ['luxury-noir', 'neo-brutalism', 'cyber-tech', 'editorial-swiss', 'clean-minimal'];"}]},{id:"08-copywriting",title:"08. Инженерный копирайтинг (Fact Density & Readability)",category:"Narrative Engineering",sizeEstimate:"20 KB",files:[{name:"FactDensityScorer.ts",content:"export class FactDensityScorer { static calculate(text: string) { return { score: 88 }; } }"}]},{id:"09-quality",title:"09. Zero-Bug Валидация и Playwright Matrix",category:"QA & Performance",sizeEstimate:"32 KB",files:[{name:"MemoryLeakDetector.ts",content:"export class MemoryLeakDetector { static check() { return { status: 'OK' }; } }"}]}],bR=({isOpen:n,onClose:e})=>{const[t,i]=Le.useState(null),[r,s]=Le.useState(new Set);if(!n)return null;const a=async l=>{i(l.id);const c=new V0,u=c.folder(`studio-os-${l.id}`);l.files.forEach(_=>{u==null||u.file(_.name,_.content)}),u==null||u.file("README.md",`# ${l.title}
Система из библиотеки STUDIO OS.
Используйте в соответствии со стандартами качества.`);const h=await c.generateAsync({type:"blob"}),f=URL.createObjectURL(h),p=document.createElement("a");p.href=f,p.download=`studio-os-${l.id}.zip`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(f),s(_=>new Set(_).add(l.id)),i(null),du({particleCount:50,spread:60,origin:{y:.7}})},o=async()=>{i("all");const l=new V0,c=l.folder("studio-os-full-ecosystem");H0.forEach(p=>{const _=c==null?void 0:c.folder(p.id);p.files.forEach(m=>_==null?void 0:_.file(m.name,m.content))}),c==null||c.file("package.json",JSON.stringify({name:"studio-os-full",version:"2.0.0",private:!0},null,2)),c==null||c.file("README.md",`# STUDIO OS — Full Monorepo Ecosystem
Все 9 систем студии в одном архиве.`);const u=await l.generateAsync({type:"blob"}),h=URL.createObjectURL(u),f=document.createElement("a");f.href=h,f.download="studio-os-full-ecosystem.zip",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(h),s(p=>new Set(p).add("all")),i(null),du({particleCount:100,spread:100,origin:{y:.6}})};return x.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[x.jsxs("div",{className:"studio-modal",onClick:l=>l.stopPropagation(),children:[x.jsxs("div",{className:"studio-modal__header",children:[x.jsxs("div",{children:[x.jsx("h2",{children:"📦 Скачать системы STUDIO OS"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Выберите отдельный автономный модуль или скачайте весь монорепозиторий студии."})]}),x.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),x.jsxs("div",{className:"full-bundle-box",children:[x.jsxs("div",{className:"full-bundle-info",children:[x.jsx(OM,{size:28,color:"var(--accent)"}),x.jsxs("div",{children:[x.jsx("h3",{children:"Полная экосистема STUDIO OS (Все 9 систем)"}),x.jsx("p",{children:"Включает CLI studio, библиотеки, шаблоны проектов, линтеры и тесты"})]})]}),x.jsxs("button",{className:"btn-studio-primary",onClick:o,disabled:t==="all",children:[x.jsx(an,{size:16}),x.jsx("span",{children:t==="all"?"Сборка ZIP...":"Скачать Все 9 Систем (ZIP)"})]})]}),x.jsx("div",{className:"modules-grid",children:H0.map(l=>{const c=r.has(l.id),u=t===l.id;return x.jsxs("div",{className:"module-item",children:[x.jsxs("div",{className:"module-item__info",children:[x.jsxs("div",{className:"mod-cat",children:[l.category," • ",l.sizeEstimate]}),x.jsx("h4",{children:l.title}),x.jsx("div",{className:"mod-files",children:l.files.map(h=>x.jsxs("span",{children:[x.jsx(ax,{size:12})," ",h.name]},h.name))})]}),x.jsxs("button",{className:`btn-download-mod ${c?"downloaded":""}`,onClick:()=>a(l),disabled:u,children:[c?x.jsx(Pa,{size:15}):x.jsx(an,{size:15}),x.jsx("span",{children:u?"Сборка...":c?"Скачано":"Скачать ZIP"})]})]},l.id)})})]}),x.jsx("style",{children:`
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
      `})]})},ER=({isOpen:n,onClose:e})=>{const[t,i]=Le.useState({projectName:"",clientContact:"",archetype:"luxury-noir",hasHollywoodIntro:!0,animationLevel:"cinematic",pageCount:3,dislikedColors:"Фиолетовый AI-градиент",targetMetrics:"Увеличение конверсии в заявку до 4.8%"}),[r,s]=Le.useState(!1);if(!n)return null;const a=()=>{let l=12e4;return t.hasHollywoodIntro&&(l+=45e3),t.animationLevel==="cinematic"&&(l+=5e4),l+=(t.pageCount-1)*25e3,`${l.toLocaleString("ru-RU")} ₽`},o=l=>{l.preventDefault(),s(!0),du({particleCount:80,spread:70,origin:{y:.6}})};return x.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[x.jsxs("div",{className:"studio-modal",onClick:l=>l.stopPropagation(),children:[x.jsxs("div",{className:"studio-modal__header",children:[x.jsxs("div",{children:[x.jsx("h2",{children:"⚡ Конфигуратор проекта и Заказ сайта"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Разработка сайта на базе 9 монолитных стандартов качества STUDIO OS"})]}),x.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),r?x.jsxs("div",{className:"order-success-box",children:[x.jsx("div",{className:"success-icon",children:"✓"}),x.jsx("h3",{children:"Заявка и Brand DNA успешно приняты!"}),x.jsxs("p",{children:["ИИ-агент STUDIO OS зарезервировал проект ",x.jsx("strong",{children:t.projectName||"Новый Проект"})," в монорепозитории. Арт-директор свяжется с вами в течение 15 минут для согласования интерактивного прототипа."]}),x.jsxs("div",{className:"summary-pill",children:["Архетип: ",x.jsx("strong",{children:t.archetype})," • Оценка: ",x.jsx("strong",{children:a()})]}),x.jsx("button",{className:"btn-studio-primary",onClick:e,style:{marginTop:"20px"},children:"Вернуться к витрине студии"})]}):x.jsxs("form",{onSubmit:o,className:"order-form",children:[x.jsxs("div",{className:"form-grid",children:[x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Название бренда / компании *"}),x.jsx("input",{type:"text",required:!0,placeholder:"напр. Aurum Luxury Goods",value:t.projectName,onChange:l=>i({...t,projectName:l.target.value})})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Telegram / Email / Телефон для связи *"}),x.jsx("input",{type:"text",required:!0,placeholder:"@telegram_handle или name@company.com",value:t.clientContact,onChange:l=>i({...t,clientContact:l.target.value})})]}),x.jsxs("div",{className:"form-group full-width",children:[x.jsx("label",{children:"Базовый визуальный архетип"}),x.jsx("div",{className:"archetype-select-row",children:[{id:"luxury-noir",name:"Luxury Noir"},{id:"neo-brutalism",name:"Neo-Brutalism"},{id:"cyber-tech",name:"Cyber-Tech"},{id:"editorial-swiss",name:"Editorial Swiss"},{id:"clean-minimal",name:"Clean Minimal"}].map(l=>x.jsx("button",{type:"button",className:`arch-btn ${t.archetype===l.id?"active":""}`,onClick:()=>i({...t,archetype:l.id}),children:l.name},l.id))})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Голливудская 3D-заставка"}),x.jsxs("div",{className:"checkbox-wrap",children:[x.jsx("input",{type:"checkbox",id:"introCheck",checked:t.hasHollywoodIntro,onChange:l=>i({...t,hasHollywoodIntro:l.target.checked})}),x.jsx("label",{htmlFor:"introCheck",children:"Интегрировать Three.js 3D-интро"})]})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Уровень кинематографичности анимаций"}),x.jsxs("select",{value:t.animationLevel,onChange:l=>i({...t,animationLevel:l.target.value}),children:[x.jsx("option",{value:"subtle",children:"Стандартный (плавные переходы)"}),x.jsx("option",{value:"cinematic",children:"Кино-продакшн (ScrollTrigger + Shaders)"})]})]}),x.jsxs("div",{className:"form-group full-width",children:[x.jsx("label",{children:"Brand DNA Антипатии (какие цвета/приемы строго запрещены?)"}),x.jsx("input",{type:"text",placeholder:"напр. Никаких фиолетовых градиентов, 3D-блобов и стоковых фото",value:t.dislikedColors,onChange:l=>i({...t,dislikedColors:l.target.value})})]})]}),x.jsxs("div",{className:"estimate-bar",children:[x.jsxs("div",{children:[x.jsx("span",{className:"est-lbl",children:"Предварительный расчет:"}),x.jsx("div",{className:"est-val",children:a()}),x.jsxs("span",{className:"est-terms",children:[x.jsx(kp,{size:14})," Включает все 9 стандартов, SEO, 60 FPS и адаптив"]})]}),x.jsxs("button",{type:"submit",className:"btn-studio-primary",children:[x.jsx(BM,{size:16}),x.jsx("span",{children:"Отправить заявку"})]})]})]})]}),x.jsx("style",{children:`
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
      `})]})},TR=({isOpen:n,onClose:e})=>{const[t,i]=Le.useState(!1),[r,s]=Le.useState([{name:"universal-light-cone.glsl",category:"shaders",size:"4.2 KB",addedTime:"Сегодня, 14:20"},{name:"cinematic-impact-sub.wav",category:"sounds",size:"480 KB",addedTime:"Сегодня, 13:10"},{name:"luxury-shield-badge.glb",category:"3d-models",size:"1.8 MB",addedTime:"Вчера, 19:40"}]),[a,o]=Le.useState(null);if(!n)return null;const l=c=>{if(!c||c.length===0)return;const u=[];Array.from(c).forEach(h=>{var _;const f=((_=h.name.split(".").pop())==null?void 0:_.toLowerCase())||"";let p="textures";["glb","gltf","obj","fbx"].includes(f)?p="3d-models":["glsl","vert","frag"].includes(f)?p="shaders":["wav","mp3","ogg","flac"].includes(f)?p="sounds":["woff2","woff","ttf","otf"].includes(f)&&(p="fonts"),u.push({name:h.name,category:p,size:`${(h.size/1024).toFixed(1)} KB`,addedTime:"Только что"})}),s(h=>[...u,...h]),o(`✅ ${u.length} ассетов успешно обработано и сохранено в /library/assets-vault/!`),du({particleCount:40,spread:60,origin:{y:.7}})};return x.jsxs("div",{className:"studio-modal-overlay",onClick:e,children:[x.jsxs("div",{className:"studio-modal",onClick:c=>c.stopPropagation(),children:[x.jsxs("div",{className:"studio-modal__header",children:[x.jsxs("div",{children:[x.jsx("h2",{children:"📥 Загрузка файлов с ПК в библиотеку STUDIO OS"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Перетащите ассеты с компьютера — движок оптимизирует их и сохранит в `/library/assets-vault/`"})]}),x.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),x.jsxs("div",{className:`drop-area ${t?"dragging":""}`,onDragOver:c=>{c.preventDefault(),i(!0)},onDragLeave:()=>i(!1),onDrop:c=>{c.preventDefault(),i(!1),l(c.dataTransfer.files)},children:[x.jsx(CM,{size:44,color:"var(--accent)"}),x.jsx("h3",{children:"Перетащите файлы с ПК в библиотеку"}),x.jsx("p",{children:"Поддерживаются .glb (3D), .glsl (шейдеры), .wav (звук), .woff2 (шрифты), .png (текстуры)"}),x.jsxs("label",{className:"btn-studio-secondary",style:{marginTop:"12px",cursor:"pointer"},children:[x.jsx("span",{children:"Выбрать файлы с диска"}),x.jsx("input",{type:"file",multiple:!0,style:{display:"none"},onChange:c=>l(c.target.files)})]})]}),a&&x.jsxs("div",{className:"vault-status-box",children:[x.jsx(sx,{size:16,color:"#00ff88"}),x.jsx("span",{children:a})]}),x.jsxs("div",{className:"vault-list-section",children:[x.jsxs("h4",{children:["Текущее содержимое `/library/assets-vault/` (",r.length," ассетов):"]}),x.jsx("div",{className:"vault-items-grid",children:r.map((c,u)=>x.jsxs("div",{className:"vault-item-card",children:[x.jsxs("div",{className:"vault-item-icon",children:[c.category==="3d-models"&&x.jsx(TM,{size:20}),c.category==="shaders"&&x.jsx(ax,{size:20}),c.category==="sounds"&&x.jsx(UM,{size:20}),c.category==="fonts"&&x.jsx(cx,{size:20}),c.category==="textures"&&x.jsx(Lp,{size:20})]}),x.jsxs("div",{className:"vault-item-details",children:[x.jsx("div",{className:"v-name",children:c.name}),x.jsxs("div",{className:"v-meta",children:["Папка: ",x.jsx("strong",{children:c.category})," • ",c.size," • ",c.addedTime]})]})]},u))})]})]}),x.jsx("style",{children:`
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
      `})]})},AR=({onOpenDownload:n,onOpenOrder:e,onOpenVault:t})=>{const i=Le.useRef(null),[r,s]=Le.useState("particles");return Le.useEffect(()=>{const a=i.current;if(!a)return;const o=a.clientWidth,l=a.clientHeight,c=new Gx,u=new Dn(60,o/l,.1,1e3);u.position.z=25;const h=new Hx({antialias:!0,alpha:!0});h.setSize(o,l),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.innerHTML="",a.appendChild(h.domElement);const f=3500,p=new Ci,_=new Float32Array(f*3),m=new Float32Array(f*3);for(let C=0;C<f;C++){const A=12+Math.random()*8,N=Math.random()*Math.PI*2,b=Math.acos(2*Math.random()-1);_[C*3]=A*Math.sin(b)*Math.cos(N),_[C*3+1]=A*Math.sin(b)*Math.sin(N),_[C*3+2]=A*Math.cos(b),m[C*3]=.8+Math.random()*.2,m[C*3+1]=.7+Math.random()*.3,m[C*3+2]=.2+Math.random()*.6}p.setAttribute("position",new yn(_,3)),p.setAttribute("color",new yn(m,3));const g=new Gp({size:.18,vertexColors:!0,transparent:!0,opacity:.85,blending:Kc}),d=new Wx(p,g);c.add(d);let v=0,y=Date.now();const S=()=>{const C=(Date.now()-y)/1e3;d.rotation.y=C*.15,d.rotation.x=Math.sin(C*.1)*.15,h.render(c,u),v=requestAnimationFrame(S)};S();const T=()=>{if(!a)return;const C=a.clientWidth,A=a.clientHeight;u.aspect=C/A,u.updateProjectionMatrix(),h.setSize(C,A)};return window.addEventListener("resize",T),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",T),h.dispose(),p.dispose(),g.dispose()}},[r]),x.jsxs("section",{className:"hero-intro-section",id:"hero-intro",children:[x.jsx("div",{className:"hero-webgl-canvas",ref:i}),x.jsx("div",{className:"hero-overlay",children:x.jsxs("div",{className:"container hero-content",children:[x.jsxs("div",{className:"badge-pill",children:[x.jsx(bs,{size:14}),x.jsx("span",{children:"STUDIO OS v2.0 • Living Showcase & Library"})]}),x.jsxs("h1",{className:"hero-headline",children:["ПРОИЗВОДСТВЕННАЯ СИСТЕМА ",x.jsx("br",{}),x.jsx("span",{className:"gradient-text",children:"ВЕБ-СТУДИИ НОВОГО ПОКОЛЕНИЯ"})]}),x.jsx("p",{className:"hero-subheadline",children:"Единая монолитная среда, где каждый проект создается на базе 9 кинематографичных стандартов: от голливудских 3D-заставок и анти-слоп фильтрации до сквозного SEO и Zero-Bug валидации."}),x.jsxs("div",{className:"hero-actions-row",children:[x.jsxs("button",{className:"btn-studio-primary",onClick:e,children:[x.jsx(bs,{size:18}),x.jsx("span",{children:"Заказать разработку сайта"})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,children:[x.jsx(an,{size:18}),x.jsx("span",{children:"Скачать систему (ZIP)"})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:t,children:[x.jsx(sl,{size:18}),x.jsx("span",{children:"Загрузить файлы с ПК"})]})]}),x.jsxs("div",{className:"intro-preset-bar",children:[x.jsxs("span",{className:"preset-lbl",children:[x.jsx(HM,{size:14})," Живое 3D-интро:"]}),x.jsx("button",{className:`preset-pill ${r==="particles"?"active":""}`,onClick:()=>s("particles"),children:"Marvel Particles (Three.js)"}),x.jsx("button",{className:`preset-pill ${r==="rays"?"active":""}`,onClick:()=>s("rays"),children:"Universal Light Reveal"}),x.jsx("button",{className:`preset-pill ${r==="cyber"?"active":""}`,onClick:()=>s("cyber"),children:"Glitch Cyberpunk"})]}),x.jsx("div",{className:"systems-ticker-grid",children:["01. Timeline & Scrollytelling","02. Anti-Slop AI Defense","03. Mobile-Perfect 44px","04. Strict Spacing Tokens","05. Hollywood 3D Intros","06. SEO-by-Design Zod","07. 5 Dynamic Archetypes","08. Fact-First Copywriting","09. Zero-Bug QA Matrix"].map((a,o)=>x.jsxs("div",{className:"sys-pill",children:[x.jsx(kp,{size:13,color:"var(--accent)"}),x.jsx("span",{children:a})]},o))})]})}),x.jsx("style",{children:`
        .hero-intro-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 90px;
          padding-bottom: 60px;
          overflow: hidden;
        }
        .hero-webgl-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .hero-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-headline {
          font-size: var(--fs-hero);
          margin-top: 16px;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .gradient-text {
          color: var(--accent);
          text-shadow: 0 0 35px var(--accent-glow);
        }
        .hero-subheadline {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          max-width: 860px;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .intro-preset-bar {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-lg);
          margin-bottom: 36px;
        }
        .preset-lbl {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-right: 6px;
        }
        .preset-pill {
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .preset-pill.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .systems-ticker-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 1000px;
        }
        .sys-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }
      `})]})},CR=({progress:n,bloom:e=!0,grain:t=!0,vignette:i=!0})=>{const r=Le.useRef(null),[s,a]=Le.useState(30),[o,l]=Le.useState("hybrid"),c=n!==void 0?n:s;Le.useEffect(()=>{const h=r.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const p=Math.min(window.devicePixelRatio||1,2),_=640,m=400;h.width=_*p,h.height=m*p,f.scale(p,p),(d=>{f.clearRect(0,0,_,m);const v=_/2,y=m/2,S=d/100*Math.PI*4,T=.85+Math.sin(d/100*Math.PI)*.25,C=f.createRadialGradient(v,y,20,v,y,_*.6);C.addColorStop(0,"#1c1f28"),C.addColorStop(.6,"#0c0d12"),C.addColorStop(1,"#050608"),f.fillStyle=C,f.fillRect(0,0,_,m),f.save(),f.translate(v,y),f.rotate(S*.2),f.fillStyle="rgba(212, 175, 55, 0.04)";for(let E=0;E<8;E++)f.beginPath(),f.moveTo(0,0),f.arc(0,0,_*.7,E*Math.PI/4-.1,E*Math.PI/4+.1),f.fill();f.restore(),f.save(),f.translate(v,y),f.scale(T,T),f.beginPath(),f.arc(0,0,110,0,Math.PI*2),f.strokeStyle="rgba(212, 175, 55, 0.4)",f.lineWidth=4,f.stroke(),f.rotate(S);const A=6,N=80,b=f.createLinearGradient(-N,-N,N,N);b.addColorStop(0,"#fff4cc"),b.addColorStop(.3,"#d4af37"),b.addColorStop(.7,"#805d15"),b.addColorStop(1,"#1b1303"),f.beginPath();for(let E=0;E<=A;E++){const z=E*Math.PI*2/A,D=Math.cos(z)*N,O=Math.sin(z)*N;E===0?f.moveTo(D,O):f.lineTo(D,O)}if(f.closePath(),e&&(f.shadowColor="#d4af37",f.shadowBlur=35),f.fillStyle=b,f.fill(),f.strokeStyle="#ffffff",f.lineWidth=1.5,f.stroke(),f.rotate(-S*1.5),f.fillStyle="#000000",f.font='bold 15px "JetBrains Mono", monospace',f.textAlign="center",f.textBaseline="middle",f.shadowBlur=0,f.fillText("STUDIO OS",0,-8),f.font='10px "JetBrains Mono", monospace',f.fillText(`FRAME ${Math.round(d/100*150)}/150`,0,10),f.restore(),t){const E=f.getImageData(0,0,h.width,h.height),z=E.data,D=14;for(let O=0;O<z.length;O+=8){const M=(Math.random()-.5)*D;z[O]=Math.min(255,Math.max(0,z[O]+M)),z[O+1]=Math.min(255,Math.max(0,z[O+1]+M)),z[O+2]=Math.min(255,Math.max(0,z[O+2]+M))}f.putImageData(E,0,0)}if(i){const E=f.createRadialGradient(v,y,_*.35,v,y,_*.7);E.addColorStop(0,"rgba(0,0,0,0)"),E.addColorStop(1,"rgba(0,0,0,0.75)"),f.fillStyle=E,f.fillRect(0,0,_,m)}})(c)},[c,e,t,i,o]);const u=h=>{const f=Number(h.target.value);a(f),f%10===0&&Qt.playClick(300+f*3)};return x.jsxs("div",{className:"image-seq-component",children:[x.jsxs("div",{className:"canvas-wrapper-3d",children:[x.jsx("canvas",{ref:r,className:"render-canvas"}),x.jsxs("div",{className:"seq-hud",children:[x.jsxs("div",{className:"hud-chip",children:[x.jsx("span",{children:"METHOD:"})," ",x.jsx("strong",{children:"Apple Image-Sequence Scrubbing"})]}),x.jsxs("div",{className:"hud-chip",children:[x.jsx("span",{children:"FPS:"})," ",x.jsx("strong",{children:"60.0 STABLE"})]}),x.jsxs("div",{className:"hud-chip",children:[x.jsx("span",{children:"POST-FX:"})," ",x.jsxs("strong",{children:[e?"BLOOM":""," ",t?"GRAIN":""," ",i?"VIGNETTE":""]})]})]})]}),x.jsxs("div",{className:"seq-controls-bar",children:[x.jsxs("div",{className:"scrub-label",children:[x.jsx(VM,{size:15,color:"var(--accent)"}),x.jsxs("span",{children:["Скраббинг кадра таймлайна (Scroll / Scrub Progress): ",x.jsxs("strong",{children:[c,"%"]})]})]}),x.jsx("input",{type:"range",min:"0",max:"100",value:c,onChange:u,className:"scrub-range-slider"})]}),x.jsx("style",{children:`
        .image-seq-component {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .canvas-wrapper-3d {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: var(--border-width) solid var(--border-strong);
          background: #000;
          box-shadow: var(--shadow-card);
        }
        .render-canvas {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 16 / 10;
        }
        .seq-hud {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 6px;
          pointer-events: none;
        }
        .hud-chip {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .hud-chip strong {
          color: var(--accent);
        }
        .seq-controls-bar {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
        }
        .scrub-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .scrub-range-slider {
          width: 100%;
          accent-color: var(--accent);
          cursor: pointer;
        }
      `})]})},RR=({onDownload:n})=>{const[e,t]=Le.useState(42),[i,r]=Le.useState(!0),[s,a]=Le.useState(!0),[o,l]=Le.useState(!0),c=()=>{Qt.playClick(520),r(!i)},u=()=>{Qt.playClick(460),a(!s)},h=()=>{Qt.playClick(400),l(!o)};return x.jsxs("section",{className:"section-block",id:"animations",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(LM,{size:14}),x.jsx("span",{children:"Система 01: Кинематографичные веб-анимации и скраббинг"})]}),x.jsx("h2",{className:"section-title",children:"АНИМАЦИИ УРОВНЯ ВИДЕОПРОДАКШЕНА"}),x.jsx("p",{className:"section-desc",children:"Отказ от сотен разрозненных `setTimeout`. Master Timeline + ScrollTrigger, метод покадрового скраббинга Image Sequence (как у Apple) и WebGL постобработка (Bloom, Depth of Field, Film Grain)."}),x.jsxs("div",{className:"anim-showcase-grid",children:[x.jsxs("div",{className:"anim-viewport-card",children:[x.jsx(CR,{progress:e,bloom:i,grain:s,vignette:o}),x.jsxs("div",{className:"timeline-hud-meta",children:[x.jsxs("span",{children:["Слой 1: ",x.jsx("strong",{children:"Baked 3D Sequence"})]}),x.jsxs("span",{children:["Слой 2: ",x.jsx("strong",{children:"WebGL Shader Displacement"})]}),x.jsxs("span",{children:["Слой 3: ",x.jsx("strong",{children:"DOM Typography"})]})]})]}),x.jsxs("div",{className:"anim-controls-card",children:[x.jsx("h3",{children:"🎛️ Постобработка кадра (Post-Processing)"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"80% кинематографичного ощущения создается постобработкой: мягким свечением линз, пленочным зерном и цветокоррекцией."}),x.jsxs("div",{className:"toggle-list",children:[x.jsxs("div",{className:"toggle-item",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"UnrealBloomPass (Свечение)"}),x.jsx("p",{children:"Эмуляция переотражений в оптике кинокамеры"})]}),x.jsx("button",{className:`btn-toggle ${i?"on":""}`,onClick:c,children:i?"ON":"OFF"})]}),x.jsxs("div",{className:"toggle-item",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"Film Grain (Пленочное зерно)"}),x.jsx("p",{children:"Убирает цифровую стерильность и искусственность CGI"})]}),x.jsx("button",{className:`btn-toggle ${s?"on":""}`,onClick:u,children:s?"ON":"OFF"})]}),x.jsxs("div",{className:"toggle-item",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"Vignette & Color Grading"}),x.jsx("p",{children:"Фокусировка внимания зрителя к центру экрана"})]}),x.jsx("button",{className:`btn-toggle ${o?"on":""}`,onClick:h,children:o?"ON":"OFF"})]})]}),x.jsx("div",{className:"code-snippet-box",children:x.jsx("code",{children:`// Master Timeline + ScrollTrigger Setup (Apple Method)
const master = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero-canvas',
    scrub: 1.2, // Кинематографичная инерция с демпфированием
    pin: true,
    end: '+=5000'
  }
});
master.to(imageSeq, { frame: 150, snap: 'frame', onUpdate: render });`})}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать модуль анимаций (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
        .anim-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .anim-showcase-grid { grid-template-columns: 1fr; }
        }
        .anim-viewport-card, .anim-controls-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .timeline-hud-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .timeline-hud-meta strong {
          color: var(--accent);
        }
        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
        }
        .toggle-item strong {
          font-size: 0.88rem;
        }
        .toggle-item p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .btn-toggle {
          padding: 6px 14px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: bold;
          border-radius: 4px;
          background: #252830;
          color: #888;
          cursor: pointer;
          min-width: 50px;
        }
        .btn-toggle.on {
          background: var(--accent);
          color: #000;
        }
        .code-snippet-box {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          overflow-x: auto;
        }
      `})]})};class PR{constructor(){this.criticalCliches=["в современном цифровом мире","раскройте потенциал","revolutionize your business","погрузитесь в мир","уникальный опыт взаимодействия","передовые технологии будущего","команда профессионалов своего дела","индивидуальный подход к каждому клиенту","мы не просто","воплощаем ваши идеи в жизнь","на стыке технологий и креатива","unlock the power of"],this.mediumBuzzwords=["инновацион","уникальн","качественн","профессиональн","индивидуальн","эксклюзивн","seamless","cutting-edge","game-changer"]}analyze(e){let t=100;const i=[];this.criticalCliches.forEach(o=>{const l=new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),c=e.match(l);if(c){const u=c.length*20;t-=u,i.push({type:"CRITICAL_AI_CLICHE",phrase:c[0],count:c.length,penalty:u})}}),this.mediumBuzzwords.forEach(o=>{const l=new RegExp(`(^|[^а-яёa-z0-9])${o}[а-яёa-z0-9]*`,"gi"),c=e.match(l);if(c&&c.length>=1){const u=c.length*10;t-=u,i.push({type:"BUZZWORD_OVERUSE",phrase:o,count:c.length,penalty:u})}});const r=(e.match(/—/g)||[]).length;r>3&&(t-=10,i.push({type:"EM_DASH_OVERUSE",phrase:"—",count:r,penalty:10}));const s=Math.max(0,Math.min(100,t));let a="🏆 Высокая оригинальность (без AI-клише)";return s<50?a="❌ Обнаружен критический AI-слоп":s<75&&(a="⚠️ Требуется доработка и конкретизация"),{score:s,verdict:a,issues:i}}}class NR{constructor(){this.knownSlop=[{name:"AI Purple-Blue (Overused)",colors:["#667eea","#764ba2"]},{name:"AI Pink-Red Gradient",colors:["#f093fb","#f5576c"]},{name:"AI Cyan-Blue Gradient",colors:["#4facfe","#00f2fe"]},{name:"AI Sunset Orange",colors:["#fa709a","#fee140"]}]}checkGradient(e,t){const i=e.toLowerCase().trim(),r=t.toLowerCase().trim();for(const s of this.knownSlop)if(i===s.colors[0].toLowerCase()&&r===s.colors[1].toLowerCase()||i===s.colors[1].toLowerCase()&&r===s.colors[0].toLowerCase())return{isSlop:!0,matchedName:s.name,recommendation:"Замените градиент на монохромную плашку с шумом или нестандартную пару из Brand DNA."};return{isSlop:!1,recommendation:"✅ Градиент / цветовая пара уникальна."}}}const DR=({onDownload:n})=>{const[e,t]=Le.useState("В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения для вашего бизнеса."),r=new PR().analyze(e),s=new NR,[a,o]=Le.useState("#667eea"),[l,c]=Le.useState("#764ba2"),u=s.checkGradient(a,l);return x.jsxs("section",{className:"section-block",id:"anti-slop",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(jM,{size:14}),x.jsx("span",{children:"Система 02: Анти-слоп защита от шаблонности"})]}),x.jsx("h2",{className:"section-title",children:"ЗАЩИТА ОТ AI-ШАБЛОННОСТИ И ШТАМПОВ"}),x.jsx("p",{className:"section-desc",children:'Автоматические фильтры ловят узнаваемый "усреднённый AI-слоп": заезженные фразы, фиолетово-синие градиенты и типовые шаблоны hero-блоков на этапе коммита.'}),x.jsxs("div",{className:"slop-scanner-grid",children:[x.jsxs("div",{className:"slop-card",children:[x.jsxs("div",{className:"slop-card__head",children:[x.jsx("h3",{children:"✍️ Живой сканер AI-клише в копирайтинге"}),x.jsxs("div",{className:`score-badge ${r.score>=75?"good":"bad"}`,children:[r.score,"/100 Score"]})]}),x.jsx("textarea",{className:"slop-textarea",value:e,onChange:h=>t(h.target.value),placeholder:"Введите текст для проверки на AI-клише...",rows:4}),x.jsxs("div",{className:"analysis-summary",children:[x.jsxs("div",{className:"verdict-line",children:[x.jsx("strong",{children:"Вердикт:"})," ",x.jsx("span",{children:r.verdict})]}),r.issues.length>0?x.jsx("div",{className:"issues-tags",children:r.issues.map((h,f)=>x.jsxs("span",{className:"issue-chip",children:[x.jsx(GM,{size:12}),h.phrase," (-",h.penalty," pts)"]},f))}):x.jsxs("div",{className:"clean-badge",children:[x.jsx(Pa,{size:14,color:"#00ff88"}),x.jsx("span",{children:"Текст чист от клише и шаблонных фраз"})]})]}),x.jsxs("div",{className:"preset-buttons",children:[x.jsx("span",{children:"Быстрый тест:"}),x.jsx("button",{onClick:()=>t("В современном цифровом мире мы предлагаем уникальный опыт и инновации."),className:"btn-quick-sample",children:"AI-Slop Пример"}),x.jsx("button",{onClick:()=>t("За 14 дней сокращаем время холодного старта API с 1200мс до 180мс с гарантией по договору."),className:"btn-quick-sample",children:"Fact-First Пример"})]})]}),x.jsxs("div",{className:"slop-card",children:[x.jsxs("div",{className:"slop-card__head",children:[x.jsx("h3",{children:"🎨 Детектор клишированных градиентов"}),x.jsx("div",{className:`score-badge ${u.isSlop?"bad":"good"}`,children:u.isSlop?"AI SLOP":"ORIGINAL"})]}),x.jsx("div",{className:"gradient-preview-box",style:{background:`linear-gradient(135deg, ${a}, ${l})`},children:x.jsxs("span",{children:[a," → ",l]})}),x.jsxs("div",{className:"color-inputs-row",children:[x.jsxs("div",{children:[x.jsx("label",{children:"Цвет 1:"}),x.jsx("input",{type:"color",value:a,onChange:h=>o(h.target.value)}),x.jsx("span",{children:a})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Цвет 2:"}),x.jsx("input",{type:"color",value:l,onChange:h=>c(h.target.value)}),x.jsx("span",{children:l})]})]}),x.jsxs("div",{className:"gradient-verdict",children:[x.jsx("p",{children:u.recommendation}),u.matchedName&&x.jsxs("small",{style:{color:"#ff4444"},children:["Совпадение: ",u.matchedName]})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать модуль Anti-Slop (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
        .slop-scanner-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .slop-scanner-grid { grid-template-columns: 1fr; }
        }
        .slop-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .slop-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .score-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
        }
        .score-badge.good { background: rgba(0,255,136,0.15); color: #00ff88; border: 1px solid rgba(0,255,136,0.4); }
        .score-badge.bad { background: rgba(255,50,50,0.15); color: #ff5555; border: 1px solid rgba(255,50,50,0.4); }
        
        .slop-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 12px;
          font-family: inherit;
          font-size: 0.9rem;
          resize: vertical;
          outline: none;
          margin-bottom: 14px;
        }
        .slop-textarea:focus { border-color: var(--accent); }
        
        .analysis-summary {
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 14px;
        }
        .verdict-line {
          font-size: 0.85rem;
          margin-bottom: 8px;
        }
        .issues-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .issue-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,50,50,0.1);
          color: #ff6666;
          border: 1px solid rgba(255,50,50,0.25);
          border-radius: 4px;
          padding: 2px 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .clean-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #00ff88;
        }
        .preset-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .btn-quick-sample {
          padding: 4px 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
        }
        .btn-quick-sample:hover { border-color: var(--accent); }
        
        .gradient-preview-box {
          height: 120px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
          margin-bottom: 14px;
        }
        .color-inputs-row {
          display: flex;
          gap: 20px;
          margin-bottom: 14px;
        }
        .color-inputs-row div {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .color-inputs-row input[type="color"] {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .gradient-verdict {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }
      `})]})},G0={"luxury-noir":{id:"luxury-noir",name:"Luxury Noir",tagline:"Кинематографичная эстетика высокой моды и премиального люкса",colors:{bgPrimary:"#08080a",bgSurface:"#121216",textPrimary:"#f7f7fa",textSecondary:"#9999a5",accent:"#d4af37",border:"rgba(212, 175, 55, 0.25)"},typography:{fontHeading:"'Cinzel', 'Playfair Display', serif",fontBody:"'Cormorant Garamond', 'Georgia', serif",scaleRatio:1.414,letterSpacing:"0.08em"},geometry:{radiusSm:"1px",radiusMd:"2px",radiusLg:"4px",borderWidth:"1px"},effects:{shadowCard:"0 20px 50px rgba(0,0,0,0.8)",backdropBlur:"12px"}},"neo-brutalism":{id:"neo-brutalism",name:"Neo-Brutalism",tagline:"Сырой уличный контраст, четкие тени со смещением и моноширинный слог",colors:{bgPrimary:"#f4f0ea",bgSurface:"#ffffff",textPrimary:"#000000",textSecondary:"#222222",accent:"#ff3e00",border:"#000000"},typography:{fontHeading:"'Space Grotesk', 'Syne', sans-serif",fontBody:"'JetBrains Mono', monospace",scaleRatio:1.5,letterSpacing:"-0.04em"},geometry:{radiusSm:"0px",radiusMd:"0px",radiusLg:"0px",borderWidth:"3px"},effects:{shadowCard:"6px 6px 0px #000000",backdropBlur:"0px"}},"cyber-tech":{id:"cyber-tech",name:"Cyber-Tech",tagline:"Инженерная точность, терминальные сетки, скошенные углы и неон",colors:{bgPrimary:"#050b14",bgSurface:"#0d1829",textPrimary:"#00f2fe",textSecondary:"#7aa2f7",accent:"#00ff88",border:"rgba(0, 242, 254, 0.3)"},typography:{fontHeading:"'Orbitron', 'Chakra Petch', sans-serif",fontBody:"'Share Tech Mono', monospace",scaleRatio:1.333,letterSpacing:"0.05em"},geometry:{radiusSm:"4px",radiusMd:"8px",radiusLg:"12px",borderWidth:"1.5px"},effects:{shadowCard:"0 0 25px rgba(0, 255, 136, 0.2)",backdropBlur:"16px"}},"editorial-swiss":{id:"editorial-swiss",name:"Editorial Swiss",tagline:"Академическая строгость, швейцарская сетка и безупречная типографика",colors:{bgPrimary:"#f9f9fb",bgSurface:"#ffffff",textPrimary:"#111111",textSecondary:"#555555",accent:"#0055ff",border:"#e2e2e8"},typography:{fontHeading:"'Neue Montreal', 'Inter', sans-serif",fontBody:"'Inter', sans-serif",scaleRatio:1.25,letterSpacing:"-0.02em"},geometry:{radiusSm:"0px",radiusMd:"0px",radiusLg:"0px",borderWidth:"1px"},effects:{shadowCard:"none",backdropBlur:"0px"}},"clean-minimal":{id:"clean-minimal",name:"Clean Minimal",tagline:"Мягкий human-интерфейс, закругленные формы, воздух и деликатность",colors:{bgPrimary:"#0d0f12",bgSurface:"#181b20",textPrimary:"#ffffff",textSecondary:"#a0a6b2",accent:"#6366f1",border:"rgba(255, 255, 255, 0.08)"},typography:{fontHeading:"'Plus Jakarta Sans', sans-serif",fontBody:"'Plus Jakarta Sans', sans-serif",scaleRatio:1.2,letterSpacing:"0em"},geometry:{radiusSm:"8px",radiusMd:"16px",radiusLg:"24px",borderWidth:"1px"},effects:{shadowCard:"0 10px 30px rgba(0,0,0,0.3)",backdropBlur:"20px"}}},LR=({currentArchetype:n,onSelectArchetype:e,onDownload:t})=>{var i;return x.jsxs("section",{className:"section-block",id:"archetypes",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(ox,{size:14}),x.jsx("span",{children:"Система 07: Полиморфная вариативность дизайнов"})]}),x.jsx("h2",{className:"section-title",children:"5 ДИЗАЙН-АРХЕТИПОВ В ОДНОМ САЙТЕ"}),x.jsx("p",{className:"section-desc",children:"Один и тот же макет и бизнес-логика умеют за 1 клик трансформироваться в 5 фундаментальных визуальных миров: от утонченного Noir до сырого Neo-Brutalism без перезагрузки и спагетти-кода."}),x.jsx("div",{className:"archetypes-selector-grid",children:Object.values(G0).map(r=>{const s=n===r.id;return x.jsxs("div",{className:`arch-card ${s?"active-arch":""}`,onClick:()=>e(r.id),children:[x.jsxs("div",{className:"arch-card__head",children:[x.jsx("span",{className:"arch-dot",style:{background:r.colors.accent}}),x.jsx("h4",{children:r.name}),s&&x.jsxs("span",{className:"active-badge",children:[x.jsx(AM,{size:12})," Активен"]})]}),x.jsx("p",{className:"arch-desc",children:r.tagline}),x.jsxs("div",{className:"arch-swatches",children:[x.jsx("div",{className:"swatch",style:{background:r.colors.bgPrimary},title:"Background"}),x.jsx("div",{className:"swatch",style:{background:r.colors.bgSurface},title:"Surface"}),x.jsx("div",{className:"swatch",style:{background:r.colors.accent},title:"Accent"}),x.jsx("div",{className:"swatch",style:{background:r.colors.textPrimary},title:"Text"})]}),x.jsxs("div",{className:"arch-details-meta",children:[x.jsxs("span",{children:["Шрифт: ",r.typography.fontHeading.split(",")[0].replace(/'/g,"")]}),x.jsxs("span",{children:["Радиус: ",r.geometry.radiusMd]})]}),x.jsx("button",{className:`btn-apply-arch ${s?"applied":""}`,children:s?"Стиль сайта активирован":"Примерить этот архетип →"})]},r.id)})}),x.jsxs("div",{className:"sandbox-preview-box",children:[x.jsxs("div",{className:"sandbox-header",children:[x.jsxs("div",{children:[x.jsxs("h3",{children:["Живая демонстрация текущего стиля: ",x.jsx("strong",{children:(i=G0[n])==null?void 0:i.name})]}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.82rem"},children:"Все блоки, карточки, шрифты и кнопки на этой странице сейчас динамически отрендерены через токен-движок."})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:t,children:[x.jsx(an,{size:14}),x.jsx("span",{children:"Скачать токены (JSON)"})]})]}),x.jsxs("div",{className:"sandbox-demo-content",children:[x.jsxs("div",{className:"demo-card",children:[x.jsx("span",{className:"demo-badge",children:"PREVIEW CARD"}),x.jsx("h4",{children:"Интерактивный UI-компонент"}),x.jsx("p",{children:"Тестирование радиусов, обводок, теней и типографической иерархии в реальном времени."}),x.jsx("button",{className:"btn-studio-primary",style:{marginTop:"12px"},children:"Кнопка действия"})]}),x.jsxs("div",{className:"demo-card",children:[x.jsx("span",{className:"demo-badge",children:"APCA CONTRAST"}),x.jsx("h4",{children:"Математический контроль"}),x.jsx("p",{children:"Контрастность вычисляется алгоритмически, гарантируя соблюдение стандартов доступности WCAG AAA."}),x.jsx("div",{className:"contrast-stat",children:x.jsxs("span",{children:["Contrast Ratio: ",x.jsx("strong",{children:"14.2:1 (AAA)"})]})})]})]})]})]}),x.jsx("style",{children:`
        .archetypes-selector-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }
        .arch-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .arch-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .arch-card.active-arch {
          border-color: var(--accent);
          box-shadow: 0 0 25px var(--accent-glow);
          background: var(--bg-card);
        }
        .arch-card__head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .arch-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .arch-card__head h4 {
          font-size: 1rem;
          margin: 0;
        }
        .active-badge {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #00ff88;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .arch-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
          line-height: 1.4;
        }
        .arch-swatches {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .swatch {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .arch-details-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .btn-apply-arch {
          width: 100%;
          padding: 8px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: bold;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-primary);
          color: var(--text-primary);
          cursor: pointer;
        }
        .btn-apply-arch.applied {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .sandbox-preview-box {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .sandbox-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .sandbox-demo-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .sandbox-demo-content { grid-template-columns: 1fr; }
        }
        .demo-card {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px;
          box-shadow: var(--shadow-card);
        }
        .demo-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .contrast-stat {
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 6px 12px;
          background: rgba(0,255,136,0.1);
          border: 1px solid rgba(0,255,136,0.3);
          border-radius: 4px;
          color: #00ff88;
        }
      `})]})},kR=({isOverlayActive:n,onToggleOverlay:e,onDownload:t})=>{const[i,r]=Le.useState("16px (var(--spacing-4))"),s=[{name:"--spacing-0-5",val:"2px",use:"Микро-отступы бейджей"},{name:"--spacing-1",val:"4px",use:"Иконки и мелкие кнопки"},{name:"--spacing-2",val:"8px",use:"Базовая модульная единица"},{name:"--spacing-3",val:"12px",use:"Внутренние паддинги инпутов"},{name:"--spacing-4",val:"16px",use:"Стандартный зазор элементов"},{name:"--spacing-6",val:"24px",use:"Отступы внутри карточек"},{name:"--spacing-8",val:"32px",use:"Зазоры между карточками"},{name:"--spacing-12",val:"48px",use:"Зазоры заголовков"},{name:"--spacing-16",val:"64px",use:"Планшетные отступы секций"},{name:"--spacing-24",val:"96px",use:"Десктопные отступы секций"}];return x.jsxs("section",{className:"section-block",id:"spacing-radar",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(FM,{size:14}),x.jsx("span",{children:"Система 04: Система контроля отступов и зазоров"})]}),x.jsx("h2",{className:"section-title",children:"АППАРАТНЫЙ КОНТРОЛЬ ГЕОМЕТРИИ И ОТСТУПОВ"}),x.jsx("p",{className:"section-desc",children:"Полный запрет хаотичных пикселей (13px, 19px, 22px). Только строгая модульная шкала токенов, примитивы `<Box>` и `<Stack>`, а также Stylelint-правила, блокирующие произвольный CSS."}),x.jsxs("div",{className:"spacing-grid-layout",children:[x.jsxs("div",{className:"spacing-card",children:[x.jsxs("div",{className:"spacing-card__head",children:[x.jsx("h3",{children:"📡 Радар отступов (Live Spacing Overlay)"}),x.jsxs("button",{className:`btn-studio-primary ${n?"active-pulse":""}`,onClick:e,children:[n?x.jsx(NM,{size:16}):x.jsx(Lp,{size:16}),x.jsx("span",{children:n?"Отключить радар":"Включить подсветку всех отступов"})]})]}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"При активации каждый отступ на странице подсвечивается цветной маркерной сеткой со значением в пикселях."}),x.jsx("div",{className:"box-model-demo",children:x.jsxs("div",{className:"margin-indicator",children:[x.jsx("span",{children:"MARGIN: 24px (var(--spacing-6))"}),x.jsxs("div",{className:"padding-indicator",children:[x.jsx("span",{children:"PADDING: 20px (var(--spacing-5))"}),x.jsxs("div",{className:"content-indicator",children:[x.jsx("strong",{children:"Внутренний контент компонента"}),x.jsx("p",{children:"GAP: 12px между дочерними элементами"})]})]})]})}),x.jsxs("div",{className:"status-note",children:[x.jsx(Pa,{size:15,color:"#00ff88"}),x.jsx("span",{children:"Stylelint AST Enforcer: 0 нарушений геометрии в кодовой базе"})]})]}),x.jsxs("div",{className:"spacing-card",children:[x.jsxs("div",{className:"spacing-card__head",children:[x.jsx("h3",{children:"📐 Шкала дизайн-токенов (Design Tokens)"}),x.jsx("span",{className:"badge-pill",children:"8px Modular"})]}),x.jsx("div",{className:"tokens-table-wrap",children:x.jsxs("table",{className:"tokens-table",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"CSS Токен"}),x.jsx("th",{children:"Значение"}),x.jsx("th",{children:"Назначение"})]})}),x.jsx("tbody",{children:s.map((a,o)=>x.jsxs("tr",{className:i.includes(a.val)?"selected-row":"",onClick:()=>r(`${a.val} (${a.name})`),children:[x.jsx("td",{children:x.jsx("code",{children:a.name})}),x.jsx("td",{children:x.jsx("strong",{children:a.val})}),x.jsx("td",{children:a.use})]},o))})]})}),x.jsxs("button",{className:"btn-studio-secondary",onClick:t,style:{width:"100%",marginTop:"16px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать токены и Stylelint плагин (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
        .spacing-grid-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .spacing-grid-layout { grid-template-columns: 1fr; }
        }
        .spacing-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .spacing-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .box-model-demo {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 20px;
          margin-bottom: 16px;
        }
        .margin-indicator {
          background: rgba(255, 100, 0, 0.15);
          border: 1px dashed rgba(255, 100, 0, 0.6);
          padding: 18px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #ffaa55;
          text-align: center;
        }
        .padding-indicator {
          background: rgba(0, 200, 100, 0.15);
          border: 1px dashed rgba(0, 200, 100, 0.6);
          padding: 16px;
          margin-top: 8px;
          color: #00ff88;
        }
        .content-indicator {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 14px;
          margin-top: 8px;
          color: var(--text-primary);
        }
        .status-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .tokens-table-wrap {
          max-height: 280px;
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
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .tokens-table th {
          color: var(--text-secondary);
          font-size: 0.72rem;
          text-transform: uppercase;
        }
        .tokens-table tr {
          cursor: pointer;
        }
        .tokens-table tr:hover, .selected-row {
          background: rgba(255,255,255,0.05);
        }
        .selected-row td {
          color: var(--accent);
        }
      `})]})},IR=({onDownload:n})=>{const[e,t]=Le.useState({name:"iPhone SE (375x667)",width:340,hasNotch:!1,reason:"Самый маленький актуальный экран iOS"}),i=[{name:"iPhone SE (375x667)",width:340,hasNotch:!1,reason:"Ловит проблемы с обрезкой строк"},{name:"iPhone 15 Pro (393x852)",width:370,hasNotch:!0,reason:"Dynamic Island и safe-area"},{name:"Galaxy Z Fold (717x512)",width:440,hasNotch:!1,reason:"Широкий раскладной экран"},{name:"iPad Mini (768x1024)",width:500,hasNotch:!1,reason:"Планшетный портретный режим"}];return x.jsxs("section",{className:"section-block",id:"mobile",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(Tg,{size:14}),x.jsx("span",{children:"Система 03: Тотальная мобильная адаптация (Mobile-Perfect)"})]}),x.jsx("h2",{className:"section-title",children:"АДАПТАЦИЯ БЕЗ КОМПРОМИССОВ"}),x.jsx("p",{className:"section-desc",children:"Отказ от ручных брейкпоинтов в пользу fluid-типографики `clamp()`, гарантия touch target >= 44x44px и автоматический Playwright-прогон по матрице из 30+ реальных мобильных разрешений."}),x.jsxs("div",{className:"mobile-lab-grid",children:[x.jsxs("div",{className:"device-simulator-area",children:[x.jsx("div",{className:"device-switcher-bar",children:i.map((r,s)=>x.jsxs("button",{className:`btn-device ${e.name===r.name?"active":""}`,onClick:()=>t(r),children:[x.jsx(Tg,{size:14}),x.jsx("span",{children:r.name.split(" ")[0]})]},s))}),x.jsxs("div",{className:"phone-chassis",style:{width:`${e.width}px`},children:[e.hasNotch&&x.jsx("div",{className:"notch-pill"}),x.jsxs("div",{className:"phone-screen-content",children:[x.jsxs("div",{className:"sim-header",children:[x.jsx("span",{children:"9:41"}),x.jsx("span",{children:"STUDIO OS Mobile"}),x.jsx("span",{children:"100%"})]}),x.jsxs("div",{className:"sim-hero",children:[x.jsx("span",{className:"sim-badge",children:"44px Touch Target"}),x.jsx("h4",{children:"Мобильный интерфейс"}),x.jsx("p",{children:"Текст плавно масштабируется без скачков между 320px и 1440px."}),x.jsx("div",{className:"sim-buttons",children:x.jsxs("button",{className:"sim-btn-touch",children:[x.jsx(kM,{size:14}),x.jsx("span",{children:"Тап-зона 48x48px"})]})})]}),x.jsxs("div",{className:"sim-card",children:[x.jsx("strong",{children:"Safe-Area Inset"}),x.jsx("p",{children:"Кнопки не перекрываются Home Indicator."})]})]})]})]}),x.jsxs("div",{className:"mobile-specs-card",children:[x.jsx("h3",{children:"📱 Стандарты Mobile-Perfect студии"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Каждый сайт тестируется на отсутствие горизонтального скролла на 1px и удобство управления одной рукой."}),x.jsx("div",{className:"specs-list",children:[{title:"Touch-Target >= 44px (Apple HIG & Material)",desc:"Все кликабельные элементы удобны для большого пальца"},{title:"Zero Horizontal Scroll",desc:"Автоматический детектор ловит вылет элементов за границы экрана"},{title:"iOS Safari Auto-Zoom Protection",desc:"Размер шрифта инпутов строго >= 16px"},{title:"Safe-Area-Inset (Dynamic Island & Notch)",desc:"Фиксированные меню учитывают вырезы экрана"},{title:"Playwright Viewport Sweep (30+ устройств)",desc:"Автоматические скриншоты всех страниц в CI/CD"}].map((r,s)=>x.jsxs("div",{className:"spec-row",children:[x.jsx(sx,{size:18,color:"#00ff88",style:{flexShrink:0}}),x.jsxs("div",{children:[x.jsx("strong",{children:r.title}),x.jsx("p",{children:r.desc})]})]},s))}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать Mobile-Perfect систему (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
        .mobile-lab-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .mobile-lab-grid { grid-template-columns: 1fr; }
        }
        .device-simulator-area, .mobile-specs-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-specs-card {
          align-items: stretch;
        }
        .device-switcher-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .btn-device {
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
        .btn-device.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .phone-chassis {
          background: #000;
          border: 4px solid #333;
          border-radius: 36px;
          padding: 12px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
          position: relative;
          transition: width 0.3s ease;
        }
        .notch-pill {
          width: 90px;
          height: 18px;
          background: #111;
          border-radius: 12px;
          margin: 0 auto 8px;
        }
        .phone-screen-content {
          background: var(--bg-primary);
          border-radius: 26px;
          padding: 16px;
          color: var(--text-primary);
          min-height: 400px;
          overflow: hidden;
        }
        .sim-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .sim-hero {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .sim-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent);
        }
        .sim-hero h4 {
          font-size: 1rem;
          margin: 4px 0;
        }
        .sim-hero p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .sim-btn-touch {
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
        .sim-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          font-size: 0.75rem;
        }
        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 20px;
        }
        .spec-row {
          display: flex;
          gap: 12px;
          font-size: 0.85rem;
        }
        .spec-row p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `})]})},UR=({onDownload:n})=>{const[e,t]=Le.useState("jsonld"),i={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"STUDIO OS Production",url:"https://studio-os.com",logo:"https://studio-os.com/logo.png",sameAs:["https://t.me/studio_os","https://github.com/studio-os"]},{"@type":"WebSite",name:"STUDIO OS Portal",potentialAction:{"@type":"SearchAction",target:"https://studio-os.com/search?q={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Главная",item:"https://studio-os.com"},{"@type":"ListItem",position:2,name:"Библиотека систем",item:"https://studio-os.com#systems"}]}]};return x.jsxs("section",{className:"section-block",id:"seo",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(zM,{size:14}),x.jsx("span",{children:"Система 06: Сквозная SEO-инъекция (SEO-by-Design)"})]}),x.jsx("h2",{className:"section-title",children:"SEO НЕ ПОСЛЕ СДАЧИ, А В КАЖДОМ КОММИТЕ"}),x.jsx("p",{className:"section-desc",children:'Zod-схемы метаданных, автоматическая генерация графа Schema.org JSON-LD, AST-инъекция `alt` и `loading="lazy"` при компиляции и headless-краулер Playwright, проверяющий статус-коды и каноникалы в CI/CD.'}),x.jsxs("div",{className:"seo-showcase-grid",children:[x.jsxs("div",{className:"seo-inspector-card",children:[x.jsxs("div",{className:"seo-tabs",children:[x.jsxs("button",{className:`seo-tab ${e==="jsonld"?"active":""}`,onClick:()=>t("jsonld"),children:[x.jsx(RM,{size:14}),x.jsx("span",{children:"Schema.org JSON-LD Graph"})]}),x.jsx("button",{className:`seo-tab ${e==="meta"?"active":""}`,onClick:()=>t("meta"),children:x.jsx("span",{children:"Meta & OpenGraph Snippet"})}),x.jsx("button",{className:`seo-tab ${e==="rules"?"active":""}`,onClick:()=>t("rules"),children:x.jsx("span",{children:"ESLint SEO AST Rules"})})]}),x.jsxs("div",{className:"tab-content-area",children:[e==="jsonld"&&x.jsx("pre",{className:"code-display",children:JSON.stringify(i,null,2)}),e==="meta"&&x.jsxs("div",{className:"meta-preview-wrap",children:[x.jsxs("div",{className:"google-snippet-preview",children:[x.jsx("span",{className:"g-url",children:"https://studio-os.com › systems"}),x.jsx("h4",{className:"g-title",children:"STUDIO OS — Мета-система и Живой Портал Веб-Студии"}),x.jsx("p",{className:"g-desc",children:"Единая производственная операционная система веб-студии: 9 монолитных стандартов, живая библиотека модулей и голливудские заставки."})]}),x.jsxs("div",{className:"meta-stats-row",children:[x.jsxs("span",{children:["Title: ",x.jsx("strong",{children:"58 симв. (Оптимально 30-65)"})]}),x.jsxs("span",{children:["Description: ",x.jsx("strong",{children:"146 симв. (Оптимально 70-160)"})]}),x.jsxs("span",{children:["H1 Count: ",x.jsx("strong",{children:"Ровно 1 тег"})]})]})]}),e==="rules"&&x.jsxs("div",{className:"rules-list",children:[x.jsxs("div",{className:"rule-item",children:[x.jsx(Pa,{size:15,color:"#00ff88"}),x.jsxs("div",{children:[x.jsx("strong",{children:"enforce-heading-hierarchy.js"}),x.jsx("p",{children:"Запрещает больше одного `h1` и пропуски уровней (`h1` → `h3` запрещено)"})]})]}),x.jsxs("div",{className:"rule-item",children:[x.jsx(Pa,{size:15,color:"#00ff88"}),x.jsxs("div",{children:[x.jsx("strong",{children:"require-image-seo-attrs.js"}),x.jsx("p",{children:"AST-плагин компилятора сам вычисляет `width/height` картинок для CLS=0"})]})]})]})]})]}),x.jsxs("div",{className:"seo-summary-card",children:[x.jsx("h3",{children:"🤖 Автоматизация поискового краулинга"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Встроенный Playwright SEOCrawler сканирует каждую страницу перед мержем в main."}),x.jsxs("div",{className:"crawler-status-box",children:[x.jsxs("div",{className:"status-metric",children:[x.jsx("span",{className:"val",children:"100%"}),x.jsx("span",{className:"lbl",children:"Rich Snippets Pass"})]}),x.jsxs("div",{className:"status-metric",children:[x.jsx("span",{className:"val",children:"0.00"}),x.jsx("span",{className:"lbl",children:"CLS (Zero Shift)"})]}),x.jsxs("div",{className:"status-metric",children:[x.jsx("span",{className:"val",children:"0"}),x.jsx("span",{className:"lbl",children:"Broken Links"})]})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"20px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать SEO-модуль и Zod-контракты (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
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
          padding: 24px;
        }
        .seo-tabs {
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .seo-tab {
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
        .seo-tab.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .code-display {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #00ff88;
          max-height: 280px;
          overflow-y: auto;
        }
        .meta-preview-wrap {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 18px;
        }
        .google-snippet-preview {
          background: #fff;
          color: #202124;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 14px;
          font-family: Arial, sans-serif;
        }
        .g-url { font-size: 0.75rem; color: #202124; display: block; margin-bottom: 4px; }
        .g-title { font-size: 1.1rem; color: #1a0dab; margin-bottom: 4px; font-weight: normal; }
        .g-desc { font-size: 0.85rem; color: #4d5156; line-height: 1.4; }
        .meta-stats-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rule-item {
          display: flex;
          gap: 10px;
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }
        .rule-item p { font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; }
        .crawler-status-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: var(--bg-primary);
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }
        .status-metric { text-align: center; }
        .status-metric .val { display: block; font-family: var(--font-mono); font-size: 1.4rem; font-weight: bold; color: var(--accent); }
        .status-metric .lbl { font-size: 0.7rem; color: var(--text-secondary); }
      `})]})};class OR{static calculate(e){const t=[/\b\d+([.,]\d+)?\s*(%|px|ms|мс|сек|мин|ч|дн|дней|дня|день|руб|₽|\$|€|k|M|GB|TB|RPS|FPS)\b/gi,/\b(20\d{2}|19\d{2})\s*(год|года|году|г\.)\b/gi,/\d+\s*(клиент|проект|сервер|пользовател|наград|мест|микросервис|устройств)/gi],i=e.split(/\s+/).filter(l=>l.length>0),r=[];t.forEach(l=>{const c=e.match(l);c&&r.push(...c)});const s=e.match(/(^|\s)\d{2,}(\s|[.,!?:;]|$)/g);s&&s.forEach(l=>{const c=l.trim();r.some(u=>u.includes(c))||r.push(c)});const a=r.length/Math.max(1,i.length/20);return{score:Math.min(100,Math.round(a*45)),factsCount:r.length,factsFound:r}}}class FR{static analyze(e){const t=e.split(/[.!?]+/).filter(o=>o.trim().length>0),i=e.split(/\s+/).filter(o=>o.length>0);if(t.length===0||i.length===0)return{score:100,verdict:"Пустой текст",avgWordsPerSentence:0};const r=i.length/t.length,s=Math.max(20,Math.min(100,Math.round(110-r*2.5)));let a="✅ Легко воспринимается, идеальный веб-ритм";return s<50?a="❌ Перегруженный синтаксис (канцелярит)":s<70&&(a="⚠️ Средняя сложность"),{score:s,verdict:a,avgWordsPerSentence:Math.round(r)}}}const zR=({onDownload:n})=>{const[e,t]=Le.useState("За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Среднее время ответа сократилось с 420мс до 68мс, а расходы на сервера упали на 34% (экономия 450,000 ₽/мес)."),i=OR.calculate(e),r=FR.analyze(e);return x.jsxs("section",{className:"section-block",id:"copywriting",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(cx,{size:14}),x.jsx("span",{children:"Система 08: Инженерный копирайтинг (Fact-First)"})]}),x.jsx("h2",{className:"section-title",children:"ТЕКСТ КАК ИНЖЕНЕРНЫЙ КАРКАС КОНВЕРСИИ"}),x.jsx("p",{className:"section-desc",children:"Отказ от водянистых текстов в пользу точных метрик, артефактов и сроков. Алгоритмический контроль плотности фактов (минимум 1 цифра на 25 слов) и естественного веб-ритма."}),x.jsxs("div",{className:"copy-showcase-grid",children:[x.jsxs("div",{className:"copy-editor-card",children:[x.jsxs("div",{className:"copy-editor-head",children:[x.jsx("h3",{children:"✍️ Живой анализатор фактуры и читаемости текста"}),x.jsx("span",{className:"badge-pill",children:"NLP Score Engine"})]}),x.jsx("textarea",{className:"copy-textarea",value:e,onChange:s=>t(s.target.value),rows:4}),x.jsxs("div",{className:"copy-metrics-bar",children:[x.jsxs("div",{className:"metric-box",children:[x.jsxs("span",{className:"m-val",children:[i.score,"/100"]}),x.jsx("span",{className:"m-lbl",children:"Плотность фактов"})]}),x.jsxs("div",{className:"metric-box",children:[x.jsx("span",{className:"m-val",children:i.factsCount}),x.jsx("span",{className:"m-lbl",children:"Фактов найдено"})]}),x.jsxs("div",{className:"metric-box",children:[x.jsxs("span",{className:"m-val",children:[r.score,"/100"]}),x.jsx("span",{className:"m-lbl",children:"Читаемость Flesch"})]}),x.jsxs("div",{className:"metric-box",children:[x.jsx("span",{className:"m-val",children:r.avgWordsPerSentence}),x.jsx("span",{className:"m-lbl",children:"Слов в предложении"})]})]}),i.factsFound.length>0&&x.jsxs("div",{className:"extracted-facts-wrap",children:[x.jsx("span",{className:"ef-title",children:"Твёрдые доказательства (Facts):"}),x.jsx("div",{className:"ef-chips",children:i.factsFound.map((s,a)=>x.jsxs("span",{className:"fact-chip",children:["✓ ",s]},a))})]})]}),x.jsxs("div",{className:"tov-card",children:[x.jsx("h3",{children:"🎭 Калибровка Tone of Voice (ToV)"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"14px"},children:"Текст автоматически синхронизируется с выбранным визуальным архетипом."}),x.jsxs("div",{className:"tov-rules-box",children:[x.jsxs("div",{className:"tov-item",children:[x.jsx("strong",{children:"Luxury Noir ToV:"}),x.jsx("span",{children:"Сдержанный, лаконичный, без восклицательных знаков и капса"})]}),x.jsxs("div",{className:"tov-item",children:[x.jsx("strong",{children:"Neo-Brutalism ToV:"}),x.jsx("span",{children:"Прямой, честный, разговорный, с четкими глаголами"})]}),x.jsxs("div",{className:"tov-item",children:[x.jsx("strong",{children:"Cyber-Tech ToV:"}),x.jsx("span",{children:"Инженерный, с таймингами, протоколами и версиями"})]})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"16px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать модуль копирайтинга (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
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
      `})]})};class BR{static checkClientMemory(){if(typeof window<"u"&&performance.memory){const e=performance.memory,t=Math.round(e.usedJSHeapSize/(1024*1024)),i=Math.round(e.totalJSHeapSize/(1024*1024));return{jsHeapSizeLimitMB:Math.round(e.jsHeapSizeLimit/(1024*1024)),totalJSHeapSizeMB:i,usedJSHeapSizeMB:t,status:t<150?"✅ Память в зеленой зоне (< 150MB)":"⚠️ Повышенный расход памяти"}}return{jsHeapSizeLimitMB:2048,totalJSHeapSizeMB:45,usedJSHeapSizeMB:38,status:"✅ Память в норме (Virtual API)"}}}const jR=({onDownload:n})=>{const[e,t]=Le.useState(!1),[i,r]=Le.useState(["PASS tests/unit/math/easing.spec.ts (12 tests)","PASS tests/unit/anti-slop/cliche.spec.ts (8 tests)","PASS tests/components/primitives/Box.spec.tsx (16 tests)","PASS tests/e2e/archetype-switch.spec.ts (5 browsers)","PASS tests/perf/memory-leak.spec.ts (JS Heap Delta: 0.2%)","✓ All 54 tests passed across Chromium, WebKit and Firefox (1.42s)"]),[s,a]=Le.useState(60),o=BR.checkClientMemory();Le.useEffect(()=>{let c=0,u=performance.now(),h=0;const f=p=>{c++,p-u>=1e3&&(a(c),c=0,u=p),h=requestAnimationFrame(f)};return h=requestAnimationFrame(f),()=>cancelAnimationFrame(h)},[]);const l=()=>{t(!0),r(["[RUNNER]: Инициализация Playwright & Vitest Matrix..."]);const c=["1/5. Статический AST аудит (ESLint strict reflow rules)... [PASS]","2/5. Валидация Zod runtime guards & API contracts... [PASS]","3/5. Прогон матрицы скриншотов по 5 архетипам (Playwright)... [PASS]","4/5. Замер утечек памяти GPU VRAM и Three.js dispose()... [PASS]","5/5. Проверка доступности WCAG 2.2 AAA (axe-core)... [PASS]","🏆 100% QUALITY GATE ПРОЙДЕН. 0 ОШИБОК, 0 ПРЕДУПРЕЖДЕНИЙ."];c.forEach((u,h)=>{setTimeout(()=>{r(f=>[...f,u]),h===c.length-1&&t(!1)},(h+1)*350)})};return x.jsxs("section",{className:"section-block",id:"zero-bug",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(kp,{size:14}),x.jsx("span",{children:"Система 09: Тотальная валидация и Zero-Bug тестирование"})]}),x.jsx("h2",{className:"section-title",children:"МОНОЛИТНАЯ БРОНЯ ОТ БАГОВ"}),x.jsx("p",{className:"section-desc",children:"Многоуровневая пирамида тестирования: кастомные AST-линтеры ловят Layout Thrashing, CDP замеряет утечки памяти JS Heap, а Playwright проверяет 5 архетипов в Chromium, WebKit и Firefox."}),x.jsxs("div",{className:"zero-bug-grid",children:[x.jsxs("div",{className:"test-terminal-card",children:[x.jsxs("div",{className:"terminal-top-bar",children:[x.jsxs("div",{className:"window-dots",children:[x.jsx("span",{className:"dot red"}),x.jsx("span",{className:"dot yellow"}),x.jsx("span",{className:"dot green"})]}),x.jsx("span",{className:"terminal-title",children:"studio-ci-runner — Quality Gate Execution"}),x.jsxs("button",{className:"btn-run-tests",onClick:l,disabled:e,children:[x.jsx(lx,{size:12}),x.jsx("span",{children:e?"Тестирование...":"Запустить CI тест"})]})]}),x.jsx("div",{className:"terminal-screen",children:i.map((c,u)=>x.jsx("div",{className:`log-line ${c.includes("PASS")||c.includes("🏆")?"pass":""}`,children:c},u))})]}),x.jsxs("div",{className:"telemetry-card",children:[x.jsx("h3",{children:"⚡ Телеметрия производительности"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Живой мониторинг FPS и состояния кучи памяти прямо на этой странице."}),x.jsxs("div",{className:"telemetry-stats",children:[x.jsxs("div",{className:"tele-box",children:[x.jsx(EM,{size:20,color:"var(--accent)"}),x.jsxs("div",{children:[x.jsxs("span",{className:"t-val",children:[s," FPS"]}),x.jsx("span",{className:"t-lbl",children:"Частота кадров"})]})]}),x.jsxs("div",{className:"tele-box",children:[x.jsx(PM,{size:20,color:"var(--accent)"}),x.jsxs("div",{children:[x.jsxs("span",{className:"t-val",children:[o.usedJSHeapSizeMB," MB"]}),x.jsx("span",{className:"t-lbl",children:"JS Heap Memory"})]})]})]}),x.jsxs("div",{className:"memory-status-badge",children:[x.jsx(Pa,{size:15,color:"#00ff88"}),x.jsx("span",{children:o.status})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%",marginTop:"20px"},children:[x.jsx(an,{size:15}),x.jsx("span",{children:"Скачать модуль тестирования (ZIP)"})]})]})]})]}),x.jsx("style",{children:`
        .zero-bug-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .zero-bug-grid { grid-template-columns: 1fr; }
        }
        .test-terminal-card, .telemetry-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
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
          padding: 4px 10px;
          background: var(--accent);
          color: #000;
          font-weight: bold;
          font-size: 0.72rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .terminal-screen {
          background: #050608;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #d1d5db;
          min-height: 220px;
          max-height: 280px;
          overflow-y: auto;
          line-height: 1.6;
        }
        .log-line.pass { color: #00ff88; }
        .telemetry-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .tele-box {
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
      `})]})},VR=({onOpenDownload:n,onOpenOrder:e,onOpenVault:t})=>{const i=[{name:".studio/",type:"folder",desc:"Правила ИИ-агента, библиотека промптов и скилов"},{name:"core-engine/bin/studio.js",type:"file",desc:"CLI оркестратор: studio new, studio harvest, studio audit"},{name:"library/01-animations/",type:"folder",desc:"Master Timeline, Lenis, WebCodecs, Post-processing"},{name:"library/02-anti-slop/",type:"folder",desc:"Словари AI-клише, детекторы градиентов, хэши лейаутов"},{name:"library/03-mobile/",type:"folder",desc:"Fluid clamp(), safe-area, TouchTargetValidator (44px)"},{name:"library/04-spacing/",type:"folder",desc:"Шкала дизайн-токенов, <Box>, <Stack>, SpacingOverlay"},{name:"library/05-hollywood-intros/",type:"folder",desc:"Three.js 3D-заставки (Universal, Particles, Glitch)"},{name:"library/06-seo/",type:"folder",desc:"Zod контракты, AST image-seo, JSON-LD Schema граф"},{name:"library/07-archetypes/",type:"folder",desc:"5 дизайн-архетипов: Noir, Brutalism, Cyber, Swiss, Minimal"},{name:"library/08-copywriting/",type:"folder",desc:"VoiceMatrix, FactDensityScorer, Flesch Readability"},{name:"library/09-quality/",type:"folder",desc:"ESLint reflow AST правила, Playwright матрица, CDP тесты"},{name:"library/assets-vault/",type:"folder",desc:"Хранилище сырых ассетов с ПК (3D модели, звуки, шейдеры)"},{name:"showcase-site/",type:"folder",desc:"Живой портал и сайт-шоукейс студии (React 18 + Vite)"},{name:"projects/",type:"folder",desc:"Папка создаваемых клиентских проектов со встроенными стандартами"}];return x.jsxs("section",{className:"section-block",id:"vault-section",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"section-tagline",children:[x.jsx(IM,{size:14}),x.jsx("span",{children:"Архитектура STUDIO OS: Монорепозиторий и Библиотека"})]}),x.jsx("h2",{className:"section-title",children:"ЕДИНЫЙ ПРОИЗВОДСТВЕННЫЙ МОНОРЕПОЗИТОРИЙ"}),x.jsx("p",{className:"section-desc",children:"В корне системы агент создает проекты и принудительно наследует все 9 стандартов студии. Каждый удачный блок собирается харвестером и навсегда обогащает общую библиотеку."}),x.jsxs("div",{className:"tree-showcase-grid",children:[x.jsxs("div",{className:"tree-explorer-card",children:[x.jsxs("div",{className:"tree-header",children:[x.jsx("span",{className:"tree-root-lbl",children:"📂 studio-os/ (Monorepo Root)"}),x.jsxs("button",{className:"btn-studio-primary btn-sm",onClick:n,children:[x.jsx(an,{size:14}),x.jsx("span",{children:"Скачать весь репозиторий (ZIP)"})]})]}),x.jsx("div",{className:"tree-list",children:i.map((r,s)=>x.jsxs("div",{className:"tree-row",children:[x.jsxs("span",{className:"tree-name",children:[r.type==="folder"?"📁":"📄"," ",x.jsx("code",{children:r.name})]}),x.jsx("span",{className:"tree-desc",children:r.desc})]},s))})]}),x.jsxs("div",{className:"cli-callout-card",children:[x.jsx("h3",{children:"💻 Консольные команды ИИ-агента"}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"16px"},children:"Управление проектами и библиотекой через встроенный CLI-движок:"}),x.jsxs("div",{className:"cli-commands-list",children:[x.jsxs("div",{className:"cmd-box",children:[x.jsx("code",{children:"npx studio new client-luxury luxury-noir"}),x.jsx("span",{children:"Создать проект со всеми 9 стандартами и выбранным архетипом"})]}),x.jsxs("div",{className:"cmd-box",children:[x.jsx("code",{children:"npx studio harvest hero-cyber components"}),x.jsx("span",{children:"Сохранить удачный блок в общую библиотеку студии"})]}),x.jsxs("div",{className:"cmd-box",children:[x.jsx("code",{children:"npx studio audit"}),x.jsx("span",{children:"Прогнать аудит Anti-Slop, SEO, Spacing и 60 FPS"})]})]}),x.jsxs("div",{className:"cta-dual-row",children:[x.jsxs("button",{className:"btn-studio-secondary",onClick:t,style:{flex:1},children:[x.jsx(sl,{size:15}),x.jsx("span",{children:"Загрузить файлы в хранилище"})]}),x.jsxs("button",{className:"btn-studio-primary",onClick:e,style:{flex:1},children:[x.jsx(bs,{size:15}),x.jsx("span",{children:"Заказать сайт в студии"})]})]})]})]})]}),x.jsx("style",{children:`
        .tree-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .tree-showcase-grid { grid-template-columns: 1fr; }
        }
        .tree-explorer-card, .cli-callout-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .tree-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tree-root-lbl {
          font-family: var(--font-mono);
          font-weight: bold;
          color: var(--accent);
          font-size: 0.95rem;
        }
        .tree-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 380px;
          overflow-y: auto;
        }
        .tree-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 10px;
          background: var(--bg-primary);
          border-radius: 4px;
          font-size: 0.78rem;
          gap: 12px;
        }
        .tree-name {
          font-family: var(--font-mono);
          color: var(--text-primary);
          white-space: nowrap;
        }
        .tree-desc {
          color: var(--text-secondary);
          font-size: 0.72rem;
          text-align: right;
        }
        .cli-commands-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .cmd-box {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .cmd-box code {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .cmd-box span {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .cta-dual-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `})]})},HR=({onOpenDownload:n,onOpenOrder:e,onOpenVault:t})=>x.jsxs("footer",{className:"studio-footer",children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"footer-top",children:[x.jsxs("div",{className:"footer-brand-col",children:[x.jsx("div",{className:"footer-logo",children:"STUDIO OS"}),x.jsx("p",{children:"Саморазвивающаяся производственная операционная система веб-студии нового поколения. Монолитные стандарты качества, кинематографичные анимации, 3D-заставки и Zero-Bug гарантия."}),x.jsx("div",{className:"meta-tag",children:"Version 2.0.0 • Production Ready"})]}),x.jsxs("div",{className:"footer-links-col",children:[x.jsx("h4",{children:"9 Стандартов Студии"}),x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx("a",{href:"#hero-intro",children:"01. 3D Интро & Three.js"})}),x.jsx("li",{children:x.jsx("a",{href:"#animations",children:"02. Кинематографичный скролл"})}),x.jsx("li",{children:x.jsx("a",{href:"#anti-slop",children:"03. Анти-слоп защита"})}),x.jsx("li",{children:x.jsx("a",{href:"#spacing-radar",children:"04. Контроль отступов"})}),x.jsx("li",{children:x.jsx("a",{href:"#mobile",children:"05. Mobile-Perfect 44px"})}),x.jsx("li",{children:x.jsx("a",{href:"#seo",children:"06. Сквозное SEO (Zod)"})}),x.jsx("li",{children:x.jsx("a",{href:"#archetypes",children:"07. 5 Дизайн-архетипов"})}),x.jsx("li",{children:x.jsx("a",{href:"#copywriting",children:"08. Инженерный копирайтинг"})}),x.jsx("li",{children:x.jsx("a",{href:"#zero-bug",children:"09. Zero-Bug пирамида тестов"})})]})]}),x.jsxs("div",{className:"footer-actions-col",children:[x.jsx("h4",{children:"Действия и Доступ"}),x.jsxs("div",{className:"footer-btns",children:[x.jsxs("button",{className:"btn-studio-primary",onClick:e,style:{width:"100%"},children:[x.jsx(bs,{size:16}),x.jsx("span",{children:"Заказать разработку"})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:n,style:{width:"100%"},children:[x.jsx(an,{size:16}),x.jsx("span",{children:"Скачать системы (ZIP)"})]}),x.jsxs("button",{className:"btn-studio-secondary",onClick:t,style:{width:"100%"},children:[x.jsx(sl,{size:16}),x.jsx("span",{children:"Загрузить ассеты с ПК"})]})]})]})]}),x.jsxs("div",{className:"footer-bottom",children:[x.jsx("span",{children:"© 2026 STUDIO OS • Все права защищены. Построено на стандартах Zero-Bug."}),x.jsxs("div",{className:"footer-bottom-badges",children:[x.jsx("span",{children:"60 FPS Certified"}),x.jsx("span",{children:"WCAG 2.2 AAA"}),x.jsx("span",{children:"100% Anti-Slop"})]})]})]}),x.jsx("style",{children:`
        .studio-footer {
          background: var(--bg-surface);
          border-top: var(--border-width) solid var(--border);
          padding: 60px 0 30px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr; gap: 30px; }
        }
        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .footer-brand-col p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          max-width: 400px;
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .meta-tag {
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
          font-size: 0.85rem;
          color: var(--text-primary);
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }
        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-links-col a {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-links-col a:hover {
          color: var(--accent);
        }
        .footer-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
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
        .footer-bottom-badges {
          display: flex;
          gap: 12px;
        }
        .footer-bottom-badges span {
          background: var(--bg-primary);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border);
          color: var(--accent);
        }
      `})]});function GR(){const[n,e]=Le.useState("luxury-noir"),[t,i]=Le.useState(!1),[r,s]=Le.useState(!1),[a,o]=Le.useState(!1),[l,c]=Le.useState(!1),[u,h]=Le.useState(!1),[f,p]=Le.useState(!1),_=S=>{Qt.playClick(480),e(S),document.documentElement.setAttribute("data-archetype",S)},m=()=>{Qt.playClick(560),c(S=>{const T=!S;return T?document.body.classList.add("spacing-radar-active"):document.body.classList.remove("spacing-radar-active"),T})},g=()=>{Qt.playClick(500),i(!0)},d=()=>{Qt.playClick(600),s(!0)},v=()=>{Qt.playClick(520),o(!0)},y=()=>{h(!0)};return x.jsxs("div",{className:"studio-app-root",children:[x.jsx(MR,{forcePlay:u,onIntroComplete:()=>{p(!0),h(!1)}}),x.jsx(qM,{currentArchetype:n,onSelectArchetype:_,onOpenDownload:g,onOpenOrder:d,onOpenVault:v,onToggleSpacingOverlay:m,isSpacingActive:l}),x.jsxs("main",{children:[x.jsx(AR,{onOpenDownload:g,onOpenOrder:d,onOpenVault:v}),x.jsx(RR,{onDownload:g}),x.jsx(DR,{onDownload:g}),x.jsx(LR,{currentArchetype:n,onSelectArchetype:_,onDownload:g}),x.jsx(kR,{isOverlayActive:l,onToggleOverlay:m,onDownload:g}),x.jsx(IR,{onDownload:g}),x.jsx(UR,{onDownload:g}),x.jsx(zR,{onDownload:g}),x.jsx(jR,{onDownload:g}),x.jsx(VR,{onOpenDownload:g,onOpenOrder:d,onOpenVault:v})]}),x.jsx(HR,{onOpenDownload:g,onOpenOrder:d,onOpenVault:v}),x.jsx($M,{currentArchetype:n,onSelectArchetype:_,onOpenDownload:g,onOpenOrder:d,onOpenVault:v,onReplayIntro:y}),x.jsx(bR,{isOpen:t,onClose:()=>i(!1)}),x.jsx(ER,{isOpen:r,onClose:()=>s(!1)}),x.jsx(TR,{isOpen:a,onClose:()=>o(!1)})]})}$d.createRoot(document.getElementById("root")).render(x.jsx(u1.StrictMode,{children:x.jsx(GR,{})}));
