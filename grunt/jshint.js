/*
 * The jshint task validates your Javascript and makes sure everything is hunky-dory.
 */
module.exports = {

    options: {
        reporter: require('jshint-stylish')
    },

    main: [
        'src/scripts/*.js'
    ]
};
