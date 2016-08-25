'use strict';


var generators = require('yeoman-generator');
var _ = require('lodash');


module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);

    },

    initializing: function(){
    },
    prompting: function(){
        this.fs.copyTpl
    },
    configuring: function(){
    },
    writing: function(){
    },
    conflicts: function(){
    },
    install: function(){
    },
    end: function(){
    }


});



