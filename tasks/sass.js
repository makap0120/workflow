import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import config from './config.js';

gulp.task('sass', () => {
    return gulp.src(config.src.sass + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expand',
            precision: 5
        }))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 15 versions'],
                cascade: false,
            })
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css))
});

gulp.task('sass:watch', () => {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', gulp.series('sass'));
});