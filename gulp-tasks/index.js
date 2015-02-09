var m = require('../gulp-modules');

module.exports = function() {
    return m.gulp.src('./client/index.html').pipe(m.gulp.dest('./build'));
};