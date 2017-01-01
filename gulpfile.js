const gulp = require('gulp'),
svgstore = require('gulp-svgstore'),
svgmin = require('gulp-svgmin'),
rename = require('gulp-rename');

gulp.task('icons', function () {
  return gulp.src('./assets/images/icons/src/*')
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true, prefix: 'icon-'}))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('./assets/images/icons/'));
});