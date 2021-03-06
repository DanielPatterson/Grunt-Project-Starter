/* 
 * The uglify task simply takes Javascript files and minifies them.
 */
module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/scripts',
            src: '**/*.js',
            dest: 'dist/scripts',
            ext: '.min.js'
        }]
    }
};
