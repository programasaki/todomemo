const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const sass = require('gulp-sass');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

//デフォルトのgulp設定
gulp.task('default', ['clean-css']);

//CSS圧縮
gulp.task("clean-css", function () {
  gulp.src('css/*.css')
    .pipe(cleancss())
    .pipe(gulp.dest('dist/css/'));
});

//sassのコンパイル
gulp.task('sass', function () {
  gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest('dist/css/'));
});

//sassを監視
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});