/**
 * ta-env.js
 * TestAutomation ENVironment
 *
 */

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');

export const helpers = 'framework/helpers';
export const common = 'framework/common';

export const  login = require('@root/' + helpers + '/login.js');
export const  getOpt = require('@root/' + helpers + '/getOpt.js');
export const  control = require('@root/' + helpers + '/controls.js');

export const  fakerGenerator = require('faker');
export const  moment = require('moment');

const path = require('path');