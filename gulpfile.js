var sdk_version = '1.3.5';



var gulp = require('gulp');
var dot = require('dot');
var gulp_handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var babel = require('gulp-babel');
var fileinclude = require('gulp-file-include');
var rename = require('gulp-rename');
var handlebars = require('./src/helpers.js');
var jshint = require('gulp-jshint');
var gulp   = require('gulp');




gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});


gulp.task('help',function () {
  console.log(' gulp js_sdk      打包埋点的 js_sdk');
  console.log(' gulp vtrack_sdk   打包埋点的 vtrack_sdk');

});


gulp.task('handlebars-template', function(){
  gulp.src('app/template/*.html')
    .pipe(gulp_handlebars({handlebars:handlebars}))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      noRedeclare: true 
    }))
    .pipe(concat('template.js'))
    .pipe(gulp.dest('product/vtrack'));
});

gulp.task('dot-template', function(){

var dots = dot.process({path:'app/template'});

  gulp.src('app/template/*.js')
    .pipe(concat('template.js'))
    .pipe(gulp.dest('product/vtrack'));
});

/*
gulp.task('sass',function(){
  return gulp.src('sass文件位置')
  .pipe(sass())
  .pipe(gulp.dest('css文件生成位置'))
})


    *.scss：*号匹配当前目录任意文件，所以这里*.scss匹配当前目录下所有scss文件
    **：匹配当前目录及其子目录scss/**(去掉这里)/*.scss
    !not-me.scss：！号移除匹配的文件，这里将移除not-me.scss
    *.+(scss|sass)：+号后面会跟着圆括号，里面的元素用|分割，匹配多个选项。这里将匹配scss和sass文件。

除了开发和优化过程，你可以使用gulp-jasmine写JavaScript单元测试，
甚至使用gulp-rync直接部署dist文件到生产环境。

*/

gulp.task('mini-css',function(){
  return gulp.src('src/vendor.css')
  .pipe(gulp.dest('product/vtrack'))
  .pipe(minifyCSS())
  .pipe(rename({
    suffix:'.'+sdk_version
  }))
  .pipe(gulp.dest('dist/vtrack'));
});

gulp.task('mini-js',function(){
  return gulp.src('src/vendor.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('babel', function(){
  return gulp.src('src/test.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', function(){
  return gulp.src('src/*.js')
    .pipe(concat('test.js'))
    .pipe(gulp.dest('rss'));
});

gulp.task('vtrack-sensorsdata-js', function(){
    gulp.src('src/sensorsdata.js')
      .pipe(fileinclude({
          basepath: '@root',
           context: {sensorsdata_mode: 'vtrack',sdk_version: sdk_version}
        }))
      .pipe(rename('vtrack.js'))
      .pipe(gulp.dest('product/vtrack'))
      .pipe(uglify())
      .pipe(rename({
        suffix:'.'+sdk_version
      }))
      .pipe(gulp.dest('dist/vtrack'));
});


//'vtrack-sensorsdata-js','handlebars-template','mini-css'可以并发执行
gulp.task('vtrack_sdk',['vtrack-sensorsdata-js','dot-template','mini-css'], function(){

  setTimeout(function(){

     gulp.src('src/vendor.js')
        .pipe(fileinclude({
            basepath: '@root'
          }))
        .pipe(gulp.dest('product/vtrack'))
        .pipe(uglify())
        .pipe(rename({
          suffix:'.'+sdk_version
        }))
        .pipe(gulp.dest('dist/vtrack'));

  },500)



});


gulp.task('default',function(){

  //gulp.watch('src/**.html', ['include-file-html']);

  //gulp.watch('src/**/*.jss', ['include-file-js']);

  //gulp.watch('../vendor.css', ['mini-css']);
  //gulp.watch('src/vendor.js', ['mini-js']);
  //gulp.watch('src/*.js', ['concat']);
})


gulp.task('js_sdk', function(){
    gulp.src('src/sensorsdata.js')
      .pipe(fileinclude({
          basepath: '@root',
           context: {sensorsdata_mode: 'js_sdk',sdk_version: sdk_version}
        }))
      .pipe(gulp.dest('product/jssdk'))
      .pipe(uglify())
      .pipe(rename({
        suffix:'.'+sdk_version
      }))
      .pipe(gulp.dest('dist/jssdk'));

});


 












