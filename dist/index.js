"use strict";var l=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var m=l(function(x,s){
var v=require('@stdlib/assert-is-array-like-object/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/constants-float64-pinf/dist'),q=require('@stdlib/math-base-special-abs/dist');function b(i){var r,e,a,u;if(arguments.length===0)r=[0,0];else{if(!v(i))throw new TypeError(c('1IB9a',i));r=i}return e=g,a=0,u=!1,f;function f(t){var n;return arguments.length===0?u===!1?null:(r[0]=e,r[1]=a,r):(u=!0,o(t)?(e=t,a=t):(n=q(t),n<e&&(e=n),n>a&&(a=n)),r[0]=e,r[1]=a,r)}}s.exports=b
});var p=m();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
