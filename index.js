// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor,n=4294967295;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=n;var r}var r=Number.POSITIVE_INFINITY;return function(e){var n,o,f,u;if(0===arguments.length)n=[0,0];else{if(!t(e))throw new TypeError(function(){var e,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)t+="&arg[]="+encodeURIComponent(n[e]);return t}("1IB9a",e));n=e}return o=r,f=0,u=!1,function(e){var t;return 0===arguments.length?!1===u?null:(n[0]=o,n[1]=f,n):(u=!0,function(e){return e!=e}(e)?(o=e,f=e):(t=function(e){return Math.abs(e)}(e),t<o&&(o=t),t>f&&(f=t)),n[0]=o,n[1]=f,n)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).incrminmaxabs=n();
//# sourceMappingURL=index.js.map
