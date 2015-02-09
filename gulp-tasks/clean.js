var m = require('../gulp-modules');

module.exports = function(cb) {
    m.rimraf('./build', cb);
};
