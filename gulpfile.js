var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    kit = require('gulp-kit'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify')
    ;

gulp.task('sass', function() {
    gulp.src('source/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/ui/css'));
});

gulp.task('kit', function() {
    gulp.src('source/kit/**/*.kit')
        .pipe(kit())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch('source/kit/*.kit', ['kit']);
});

gulp.task('default', function() {
    // place code for your default task here
});