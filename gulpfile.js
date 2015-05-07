var gulp = require('gulp');
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    path = require('path'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    minifyCSS = require('gulp-minify-css'),
    uglifyJS = require('gulp-uglify'),
    http = require('http'),
    st = require('st'),
    plugins = require('gulp-load-plugins')();

var less_source = './pages/less/pages.less';
var less_destination = './pages/css';
var js_app_source = './app';
var js_app_entry = 'app.js';
var js_app_destination = './build'

gulp.task('less', function () {
  return gulp.src(less_source)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(less_destination))
    .pipe(plugins.livereload());
});

function buildScript(source_path, file, watch) {
    // Build react app
    var props = {
        entries: [source_path + '/' + file],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    };
    var bundler = browserify(props);
    if (watch) {
        bundler = watchify(bundler);
    }
    bundler.transform(reactify);
    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
                    .pipe(source(file))
                    .pipe(gulp.dest(js_app_destination + '/'))
                    .pipe(plugins.livereload());
      }
    return rebundle();
}

function handleErrors(e) {
    var args = Array.prototype.slice.call(arguments);
    gutil.log("Compile Error");
    gutil.log(args);
    this.emit('end'); // Keep gulp from hanging on this task
}

plugins.livereload.listen();
gulp.task('build-local', function() {
  buildScript(js_app_source, js_app_entry, false);
});

gulp.task('build-watch', function() {
  buildScript(js_app_source, js_app_entry, true);
});

gulp.task('default', ['less', 'build-local']);

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'index.html', cache: false })
  ).listen(8001, done);
});

gulp.task('watch', ['less', 'build-watch', 'server'], function (){
    gulp.watch(["./pages/less/**/*.less", "sass/**/*.scss"], ['less']);
    gulp.watch(["./app/**/*.js", "!./app/node_modules/**"], ['build-watch'])
});

