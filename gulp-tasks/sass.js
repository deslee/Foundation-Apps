var m = require('../gulp-modules');

m.gulp.task('sass:vendor', function() {
    return m.gulp.src('./client/vendor.scss')
        .pipe(m.sourceMaps.init())
        .pipe(m.sass({
            includePaths: [
                './app/',
                './bower_components/foundation-apps/scss'
            ],
            outputStyle: 'compressed'
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .pipe(m.sourceMaps.write())
        .pipe(m.gulp.dest('./build/'));
});

m.gulp.task('sass:app', function() {
    return m.gulp.src('./client/app.scss')
        .pipe(m.sourceMaps.init())
        .pipe(m.sass({
            includePaths: [
                './app/',
            ],
            outputStyle: 'compressed'
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .pipe(m.sourceMaps.write())
        .pipe(m.gulp.dest('./build/'));
});

module.exports = function(cb) {
    m.runSequence(['sass:vendor', 'sass:app'], cb);
};