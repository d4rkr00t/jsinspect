var path = require('path');

var fixturePaths = ['intersection.js', 'redundantIntersection.js',
  'patternEmitter.js'];
var absolutePaths = {};

fixturePaths.forEach(function(fixture) {
  absolutePaths[fixture] = path.resolve(__dirname, fixture);
});

module.exports = absolutePaths;