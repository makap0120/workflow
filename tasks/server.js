import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './config'

const server = browserSync.create();

gulp.task('server', () => {
    server.init({
        server: {
            baseDir: config.dest.root
        }
    })

    gulp.watch('build/**/*.*').on('change', server.reload);
})
