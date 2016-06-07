var babel = require('babel-core');
var fs = require('fs');

var results = babel.transformFileSync('src/components.js', {"plugins": ["transform-react-jsx"], minified:true});
fs.writeFileSync('dist/dist.min.js', results.code)