import gulp from 'gulp';

gulp.task(
    'watch', 
    gulp.parallel(
        'nunjucks:watch',
        'sass:watch',
        'webpack:watch',
        'copy:watch'
    )
);
