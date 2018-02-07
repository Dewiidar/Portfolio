var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/template.js'
];

var sassSources = ['components/sass/style.scss'];

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
  .pipe(compass({
    sass: 'components/sass',
    image: 'builds/development/images',
    style: 'expanded'
  }))
  .on('error', gutil.log)
  .pipe(gulp.dest('builds/development/css'))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('default', ['js', 'compass', 'connect', 'watch']);
