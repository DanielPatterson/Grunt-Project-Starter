/*
 * Watch runs specified tasks whenever your watched files are changed in any way - added, edited, deleted.
 */
module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'src/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'src/styles/*.css',
			'src/styles/*.scss',
			'src/styles/*.sass'
        ],
        tasks: [
            'sass:dev'
        ]
    },
};
