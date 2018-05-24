import gulp from 'gulp';
import del from 'del';
import util from 'gulp-util';
import config from './config.js';

gulp.task('clean', () => {
    return new Promise((resolve, reject) => {
        del([
            config.dest.root
        ]).then((paths) => {
            util.log('Deleted:' + util.colors.magenta(paths.join('\n')));
        });
        resolve();
    })
});