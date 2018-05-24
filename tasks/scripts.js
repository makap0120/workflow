import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import config from './config.js';
import webpackConfig from '../webpack.config.js';

gulp.task('webpack', () => {
    gulp.src(config.src.js + '/app.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js))
})

gulp.task('webpack:watch', () => {
    gulp.watch(config.src.js + '/**/*.js', gulp.series('webpack'));
})