var UglifyJS = require("uglify-js");
var loaderUtils = require('loader-utils');

module.exports = function(source, inputSourceMap) {
    var callback = this.async();

    if (this.cacheable) {
        this.cacheable();
    }

    //var opts = this.options['uglify-loader'] || {};
    // Using custom Options
    var opts = {
            compress: {
                properties: false,
                conditionals: false,
                comparisons: false,
                booleans: false,
                unused: false,
                side_effects: false
            },

            output: {
                // use original qoutes.
                // UglifyJs changes single qoutes to double. Which breaks the whole script
                quote_style: 3
            }
        };
    
    var result = UglifyJS.minify(source, opts);

    callback(null, result.code, null);
};
