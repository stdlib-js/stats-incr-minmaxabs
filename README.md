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

# incrminmaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute minimum and maximum absolute values incrementally.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-minmaxabs
```

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-minmaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-minmaxabs

[test-image]: https://github.com/stdlib-js/stats-incr-minmaxabs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-minmaxabs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-minmaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-minmaxabs?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-minmaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-minmaxabs/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-minmaxabs/main/LICENSE

</section>

<!-- /.links -->
