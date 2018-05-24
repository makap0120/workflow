import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./', {recurse: true})

gulp.task('default', gulp.parallel('copy', 'watch', 'server'));