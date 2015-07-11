/**
 * Created by zen on 15. 7. 10.
 */
var gulp = require('gulp');
var concat = require('gulp-concat'); // 여러 개로 분리된 파일을 통합해주는 모듈
var sourcemaps = require('gulp-sourcemaps'); // 디버깅 시 필요한 소스 맵 생성 모듈
var uglify = require('gulp-uglify'); // 자바 스크립트 파일 사이즈를 줄이는 모듈
var ngAnnotate = require('gulp-ng-annotate'); // 파일 변경 시 재빌드 모듈

gulp.task('js', function() {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
});