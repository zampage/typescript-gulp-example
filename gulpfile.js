const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

gulp.task('html', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('ts', function(){
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/app.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'ts']);