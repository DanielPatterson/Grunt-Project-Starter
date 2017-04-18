/*
 * Configuring grunt-contrib-clean is quite simple. 
 * Here we just remove all the contents of the dist/ directory. 
 * Use this task with caution - it will indiscriminately delete whatever you tell it to without any warnings, so make sure you configure it correctly.
 */
module.exports = {
    all: [
        "_dist/"
    ]
};
