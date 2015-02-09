var m = require('../gulp-modules');


var watch = function(path, task) {
    m.gulp.watch(path, function(events) {
        console.log(events.path + ' changed. running task ' + task + '.');
        m.runSequence(task, function() {
            //livereload.changed(events.path);
        })
    }).on('change', function(file) {
    });
};


module.exports = function() {
    watch('./client/index.html', 'index');
    watch('./client/ngapp/**/*.js', 'scripts::ngapp');
    watch('./client/templates/**/*.html', 'templates');
    watch('./client/**/*.scss', 'sass::app');
};