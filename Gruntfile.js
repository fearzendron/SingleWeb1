module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serve: {
            options: {
                port: 9001
            }
        }
    });

    grunt.loadNpmTasks('grunt-serve');

};