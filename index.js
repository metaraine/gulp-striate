var through2 = require('through2')
var gutil = require('gulp-util')
var striate = require('striate')

module.exports = function (data, striateOptions) {
  striateOptions = striateOptions || {}

  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file)
      return cb()
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-striate', 'Streaming not supported'))
    }

    data = file.data || data || {}

    try {
      file.contents = new Buffer(
        striate(file.contents.toString(), striateOptions)
      )
    }
    catch (err) {
      this.emit('error', new gutil.PluginError('gulp-striate', err.toString()))
    }

    this.push(file)
    cb()
  })
}
