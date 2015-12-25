# gulp-striate
[![npm version](https://img.shields.io/npm/v/gulp-striate.svg)](https://npmjs.org/package/gulp-striate)
[![Build Status](https://travis-ci.org/metaraine/gulp-striate.svg?branch=master)](https://travis-ci.org/metaraine/gulp-striate)

striate plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage


```sh
npm install --save-dev gulp-striate
```

```js
var striate = require("gulp-striate")

gulp.src("./templates/*.str")
  .pipe(striate({
    msg: "Hello Gulp!"
  }))
  .pipe(gulp.dest("./dist"))
```
If you want to use **gulp-striate** in a watch/livereload task, you may want to avoid gulp exiting on error when, for instance, a partial file is `ENOENT`.

```js
var striate = require('gulp-striate')
var gutil = require('gulp-util')

gulp.src('./templates/*.str')
  .pipe(striate({
    msg: 'Hello Gulp!'
  }).on('error', gutil.log))
  .pipe(gulp.dest('./dist'))
```

## API

### striate(data, options)

See [striate API](https://github.com/metaraine/striate).

## License

ISC
