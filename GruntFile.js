module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['ts/**/*.ts'],
                dest: 'js/index.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        watch: {
            files: 'ts/**/*.ts',
            tasks: ['typescript']
        }
    });

    grunt.registerTask('default', ['watch']);
}
