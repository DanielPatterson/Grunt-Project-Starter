/*
 * time-grunt tells you how much time each task and the total build has taken.
 * jitGrunt: true tells load-grunt-config to use the faster jit-grunt (Just In Time) task loader.
 */
module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
};

