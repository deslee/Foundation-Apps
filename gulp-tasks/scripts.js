var m = require('../gulp-modules');

var vendors = [
    /* foundation-apps optimization dependencies */
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
    'bower_components/tether/tether.js',

    /* angularjs */
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/ui-router/release/angular-ui-router.js',

    /* foundation-apps files */
    'bower_components/foundation-apps/js/vendor/**/*.js',

    /* foundation-apps angular integration */
    'bower_components/foundation-apps/js/angular/**/*.js',
    '!bower_components/foundation-apps/js/angular/app.js'
];

m.gulp.task('scripts::vendor', function() {
    return m.gulp.src(vendors)
        .pipe(m.sourceMaps.init())
        .pipe(m.uglify())
        .pipe(m.concat('vendor.js'))
        .pipe(m.sourceMaps.write())
        .pipe(m.gulp.dest('./build/'))
});

m.gulp.task('scripts::ngapp', function() {
    return m.gulp.src('./client/ngapp/**/*.js')
        .pipe(m.sourceMaps.init())
        .pipe(m.uglify())
        .pipe(m.concat('ngapp.js'))
        .pipe(m.sourceMaps.write())
        .pipe(m.gulp.dest('./build'));
});

module.exports = function(cb) {
    m.runSequence(['scripts::vendor', 'scripts::ngapp'], cb);
};