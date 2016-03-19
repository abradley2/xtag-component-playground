var gulp = require('gulp'),
    stylus = require('gulp-stylus')

gulp.task('build-styles', function () {
  return gulp.src('./src/styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public'))
})

gulp.task('watch-styles', function () {
  return gulp.watch(['./src/styles/**/*'], ['build-styles'])
})

gulp.task('default', ['build-styles'])
