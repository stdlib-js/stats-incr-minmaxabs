// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Math.floor;var t=4294967295;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,n(e)===e)&&r.length>=0&&r.length<=t;var e}var e=Number.POSITIVE_INFINITY;function o(n){var t,o,u,l;if(0===arguments.length)t=[0,0];else{if(!r(n))throw new TypeError(function(){var n,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(n=1;n<t.length;n++)r+="&arg[]="+encodeURIComponent(t[n]);return r}("1IB9a",n));t=n}return o=e,u=0,l=!1,function(n){var r;if(0===arguments.length)return!1===l?null:(t[0]=o,t[1]=u,t);l=!0,function(n){return n!=n}(n)?(o=n,u=n):(r=function(n){return Math.abs(n)}(n),r<o&&(o=r),r>u&&(u=r));return t[0]=o,t[1]=u,t}}export{o as default};
//# sourceMappingURL=mod.js.map
