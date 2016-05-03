var sdk_version = '1.3.5';

var gulp = require('gulp');
var dot = require('dot');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var fileinclude = require('gulp-file-include');
var rename = require('gulp-rename');

gulp.task('dot-template', function() {
  var dots = dot.process({
    path: 'app/template'
  });

  gulp.src('app/template/*.js')
    .pipe(concat('template.js'))
    .pipe(gulp.dest('product/vtrack'));
});

gulp.task('mini-css', function() {
  return gulp.src('src/vendor.css')
    .pipe(gulp.dest('product/vtrack'))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.' + sdk_version
    }))
    .pipe(gulp.dest('dist/vtrack'));
});

gulp.task('mini-js', function() {
  return gulp.src('src/vendor.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', function() {
  return gulp.src('src/*.js')
    .pipe(concat('test.js'))
    .pipe(gulp.dest('rss'));
});

gulp.task('vtrack-sensorsdata-js', function() {
  gulp.src('src/sensorsdata.js')
    .pipe(fileinclude({
      basepath: '@root',
      context: {
        sensorsdata_mode: 'vtrack',
        sdk_version: sdk_version
      }
    }))
    .pipe(rename('vtrack.js'))
    .pipe(gulp.dest('product/vtrack'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.' + sdk_version
    }))
    .pipe(gulp.dest('dist/vtrack'));
});

gulp.task('vtrack_sdk', ['vtrack-sensorsdata-js', 'dot-template', 'mini-css'], function() {
  gulp.src('src/vendor.js')
    .pipe(fileinclude({
      basepath: '@root'
    }))
    .pipe(gulp.dest('product/vtrack'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.' + sdk_version
    }))
    .pipe(gulp.dest('dist/vtrack'));
});

gulp.task('js_sdk', function() {
  gulp.src('src/sensorsdata.js')
    .pipe(fileinclude({
      basepath: '@root',
      context: {
        sensorsdata_mode: 'js_sdk',
        sdk_version: sdk_version
      }
    }))
    .pipe(gulp.dest('product/jssdk'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.' + sdk_version
    }))
    .pipe(gulp.dest('dist/jssdk'));
});

gulp.task('default', ['js_sdk', 'vtrack_sdk'])
