// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(t=n.length,e(t)===t)&&n.length>=0&&n.length<=4294967295;var t}function t(){var e,n=arguments,t=n[0],r="https://stdlib.io/e/"+t+"?";for(e=1;e<n.length;e++)r+="&arg[]="+encodeURIComponent(n[e]);return r}function r(e){return e!=e}var o=Number.POSITIVE_INFINITY;function f(e){return Math.abs(e)}return function(e){var u,i,l,a;if(0===arguments.length)u=[0,0];else{if(!n(e))throw new TypeError(t("1IB9a,Hy",e));u=e}return i=o,l=0,a=!1,h;function h(e){var n;return 0===arguments.length?!1===a?null:(u[0]=i,u[1]=l,u):(a=!0,r(e)?(i=e,l=e):((n=f(e))<i&&(i=n),n>l&&(l=n)),u[0]=i,u[1]=l,u)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).incrminmaxabs=n();
//# sourceMappingURL=index.js.map