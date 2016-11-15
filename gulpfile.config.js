'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)

        this.basePath = '';

        this.source = './src/';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.source + '../dist';
        this.jsOutputFileName = 'dist/bundle.js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/main/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;