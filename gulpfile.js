var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    typescript = require('typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer'),
    browserifyshim = require('browserify-shim');

var Config = require('./gulpfile.config');
var tsProject = ts.createProject('src/tsconfig.json', { typescript: typescript });
var config = new Config();

gulp.task("ts-compile", function name() {
    var result = gulp.src(config.source + '/**/*{ts,tsx}')
        .pipe(ts(tsProject));
    return result.js.pipe(gulp.dest(config.tmpOutputPath));
});

gulp.task('default', ['ts-compile'], function () {
    return browserify({
        entries: config.javascriptFile,
    })
        .transform(browserifyshim)
        .bundle()
        .pipe(source(config.jsOutputFileName))
        .pipe(gulp.dest(config.outputPath))
        .pipe(buffer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(config.outputPath));
});

gulp.task('clean', function (done) {
    del([config.tmpOutputPath], done.bind(this));
});

gulp.task('watch', ['clean', 'default'], function () {
    gulp.watch(config.source + '/**/*{ts,tsx}', ['default']);
});