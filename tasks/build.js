import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./', {recurse: true})

gulp.task('build', gulp.series('clean', 'copy', 'nunjucks', 'sass', 'webpack'));