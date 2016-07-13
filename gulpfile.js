'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less');

var cssSrc = [
    'bower_components/normalize-css/normalize.css',
    'src/css/icons/font/flaticon.css',
    'src/css/*.less',
    'bower_components/flexbox-set/dist/flexbox-set.css'
];

gulp.task('css', function() {
    gulp.src(cssSrc)
        .pipe(concat('app.less'))
        .pipe(less())
        .pipe(autoprefixer())
        //.pipe(csso())
        .pipe(gulp.dest('build/css/'))
        .pipe(livereload());
});

gulp.task('icons-fonts', function() {
    gulp.src('css/icons/font/Flaticon*')
        .pipe(gulp.dest('build/css/'))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(cssSrc, ['css']);
})

gulp.task('default', ['icons-fonts', 'css', 'watch']);


