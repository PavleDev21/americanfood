var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');

//scss to css task
gulp.task('scss', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

//scss lint
gulp.task('scss-lint', function() {
    return gulp.src('src/scss/*.scss')
    .pipe(sassLint({
        configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

//iconfont task
gulp.task('iconfont', function () {
    return gulp.src('src/svg/*.svg')
        .pipe(iconfont({
            fontName: 'iconfont',
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            appendCodepoints: true,
            appendUnicode: false,
            normalize: true,
            fontHeight: 1000,
            centerHorizontally: true
        }))
        .on('glyphs', function (glyphs, options) {
            gulp.src('src/iconfont-template/iconfont.scss')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('src/scss/icon-font'));
        })
        .pipe(gulp.dest('dist/fonts'));
});

//watch task
gulp.task('default', ['scss', 'scss-lint'], function () {
	gulp.watch('src/**/*.scss', ['scss', 'scss-lint']);
});