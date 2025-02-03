<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrminmaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute minimum and maximum absolute values incrementally.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-minmaxabs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var incrminmaxabs = require( '@stdlib/stats-incr-minmaxabs' );
```

#### incrminmaxabs( \[out] )

Returns an accumulator `function` which incrementally computes minimum and maximum absolute values.

```javascript
var accumulator = incrminmaxabs();
```

By default, the returned accumulator `function` returns the minimum and maximum absolute values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var accumulator = incrminmaxabs( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated minimum and maximum absolute values. If not provided an input value `x`, the accumulator function returns the current minimum and maximum absolute values.

```javascript
var accumulator = incrminmaxabs();

var mm = accumulator();
// returns null

mm = accumulator( 2.0 );
// returns [ 2.0, 2.0 ]

mm = accumulator( 1.0 );
// returns [ 1.0, 2.0 ]

mm = accumulator( 3.0 );
// returns [ 1.0, 3.0 ]

mm = accumulator( -7.0 );
// returns [ 1.0, 7.0 ]

mm = accumulator( -5.0 );
// returns [ 1.0, 7.0 ]

mm = accumulator();
// returns [ 1.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are equal to `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrminmaxabs = require( '@stdlib/stats-incr-minmaxabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrminmaxabs();

// For each simulated datum, update the minimum and maximum absolute values...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/maxabs`][@stdlib/stats/incr/maxabs]</span><span class="delimiter">: </span><span class="description">compute a maximum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/minabs`][@stdlib/stats/incr/minabs]</span><span class="delimiter">: </span><span class="description">compute a minimum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/minmax`][@stdlib/stats/incr/minmax]</span><span class="delimiter">: </span><span class="description">compute a minimum and maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mminmaxabs`][@stdlib/stats/incr/mminmaxabs]</span><span class="delimiter">: </span><span class="description">compute moving minimum and maximum absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-minmaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-minmaxabs

[test-image]: https://github.com/stdlib-js/stats-incr-minmaxabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-minmaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-minmaxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-minmaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-minmaxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-minmaxabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-minmaxabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-minmaxabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-minmaxabs/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/maxabs]: https://github.com/stdlib-js/stats-incr-maxabs

[@stdlib/stats/incr/minabs]: https://github.com/stdlib-js/stats-incr-minabs

[@stdlib/stats/incr/minmax]: https://github.com/stdlib-js/stats-incr-minmax

[@stdlib/stats/incr/mminmaxabs]: https://github.com/stdlib-js/stats-incr-mminmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
