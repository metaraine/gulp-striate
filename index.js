var through2 = require('through2')
var gutil = require('gulp-util')
var striate = require('striate')

module.exports = function (options, settings) {
  settings = settings || {}
  options = options || {}
  settings.ext = settings.ext || '.html'

  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file)
      return cb()
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-striate', 'Streaming not supported'))
    }

    options = file.data || options
    options.filename = file.path

    try {
      file.contents = new Buffer(
        striate(file.contents.toString(), options)
      )
      file.path = gutil.replaceExtension(file.path, settings.ext)
    }
    catch (err) {
      this.emit('error', new gutil.PluginError('gulp-striate', err.toString()))
    }

    this.push(file)
    cb()
  })
}
