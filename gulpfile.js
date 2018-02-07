var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/template.js'
];

gulp.task('log', function(){
  gutil.log("Mohamed Dewidar's Portfolio")
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
});
