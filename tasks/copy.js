import gulp from 'gulp';
import config from './config.js';

gulp.task('copy:fonts', () => {
    return gulp.src(config.src.fonts + '/**/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts))
})

gulp.task('copy:img', () => {
    return gulp.src(config.src.img + '/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(gulp.dest(config.dest.img))
})

gulp.task('copy:libs', () => {
    return gulp.src(config.src.libs + '/**/*.*')
        .pipe(gulp.dest(config.dest.libs))
})

gulp.task('copy:root', () => {
    return gulp.src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root))
})

gulp.task('copy', gulp.series(
    'copy:root',
    'copy:libs',
    'copy:img',
    'copy:fonts'
));

gulp.task('copy:watch', () => {
    gulp.watch([config.src.img + '/**/*.*', config.src.fonts + '/**/*.*'], gulp.series('copy'));
})