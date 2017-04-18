/*
 * The config above simply optimises all images in src/images/ and saves them to dist/images/.
 */
module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};
