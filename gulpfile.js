const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
  function style() {
    return gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
  }
  
  function html() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
  }
  function js() {
    return gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
  }
  function css() {
    return gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
  }

  function images() {
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(gulp.dest('dist/img'))
  };

  function cleanD() {
    del('dist/**/*')
    del('!dist/img')
    del('!dist/img/**/*')
  };

  function watch() {
    browserSync.init({
        server: {
           baseDir: "app",
           index: "/index.html"
        }
    });
    gulp.watch('./app/scss/**/*.scss', style)
    gulp.watch('./app/*.html').on('change',browserSync.reload);
    gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
  }
  function build() {
    html();
    css()
    js()
    images()
  }
  exports.html = html;
  exports.build = build;
  exports.js = js;
  exports.css = css;
  exports.images = images;
  exports.style = style;
  exports.cleanD = cleanD;
  exports.watch = watch;