'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')

const cssRoot = './css/'


gulp.task('default', ['sass'])

gulp.task('watch', function () {
  gulp.watch([`${cssRoot}/*.scss`, `${cssRoot}/**/*.scss`], ['sass'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

var autoprefixerOptions = {
  browsers: ['> 1%', 'last 4 versions', 'iOS 7', 'not ie <= 8', 'ie 10-11', 'last 2 and_uc versions', 'last 2 OperaMini versions', 'last 2 Android versions'],
  remove: false
}

gulp.task('sass', function () {
  return gulp.src([`${cssRoot}/*.scss`, `${cssRoot}/**/*.scss`])
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css/'))
})


gulp.task('sass:watch', function () {
  gulp.watch([`${cssRoot}/*.scss`, `${cssRoot}/**/*.scss`], ['sass'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})