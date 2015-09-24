'use strict';

/**
 * Test Runner Protractor Config File
 *
 * @link https://github.com/angular/protractor
 * */
var config = require('./protractor-shared-conf').config;

/** Test Target File */
config.specs = ["todo_spec.js"];

exports.config = config;