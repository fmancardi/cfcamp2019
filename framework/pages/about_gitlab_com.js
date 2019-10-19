import { Selector } from 'testcafe';

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');
const sw = require('@root/framework/common/ta-env.js');

export const pageObjects = {
  alertBox: Selector('.flash-content.flash-alert.rounded'),
  badLogin: Selector('span').withText('Invalid Login or password.')
}