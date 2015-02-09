var
    m = require('./gulp-modules')
;

require('gulp-task-loader')();

m.gulp.task('default', function(cb) {
    m.runSequence(
        'clean',
        [
            'index',
            'sass',
            'scripts',
            'templates'
        ],
        cb
    )
});