var m = require('../gulp-modules');

module.exports = function() {
    return m.gulp.src('./client/templates/**/*.html')
        .pipe(m.dynamicRouting({
            path: 'build/ngroutes.js',
            root: 'client'
        }))
        .pipe(m.gulp.dest('./build/templates'))
        ;
}