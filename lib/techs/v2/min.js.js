'use strict';

exports.API_VER = 2;
exports.baseTechPath = require.resolve('./borschik');

exports.techMixin = {

    getSuffixes: function() {
        return ['js'];
    },

    getDependencies: function() {
        return ['js'];
    }
};