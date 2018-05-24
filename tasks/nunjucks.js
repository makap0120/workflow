import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import prettify from 'gulp-prettify';
import frontMatter from 'gulp-front-matter';
import config from './config.js';

gulp.task('nunjucks', () => {
    return gulp.src([config.src.root + '/index.html', config.src.pages + '/*.html'])
        .pipe(frontMatter({ property: 'data' }))
        .pipe(nunjucksRender({
            path: [config.src.templates]
        }))
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto',
            preserve_newlines: true,
            end_with_newline: true
        }))
        .pipe(gulp.dest(config.dest.html))
})

gulp.task('nunjucks:watch', () => {
    gulp.watch([
        config.src.templates + '/**/*.html',
        config.src.pages + '/**/*.html'
    ], gulp.series('nunjucks'));
})