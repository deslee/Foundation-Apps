var m = require('../gulp-modules');

module.exports = function() {
    return m.gulp.src(['./bower_components/foundation-apps/js/angular/components/**/*.html'])
        .pipe(m.gulp.dest('./build/components/'));
};