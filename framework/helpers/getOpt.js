/**
 * @filesource: getOpt.js
 * 
 * functions to get custom command line paramenters
 *
 */
const path = require('path');
const minimist = require('minimist');

/**
 * Try to get base URL following this order
 *
 * 1. from config file
 * 2. from test cafe custom command line argument
 * 3. from the ENVironment variable (thanks to Raffaele Castagno)
 *
 */
export function getBaseURL() {
  const args = minimist(process.argv.slice(2));

  var url='http://baseURL-Is-Undefined/';
  var gotIt = false;
  
  if( args.cfg != undefined ) {
    var file2include = '@root/config/' + args.cfg;
    var config = require(file2include);
    url = config.baseURL;
    gotIt = true;
  }

  if( gotIt == false && args.url != undefined ) {
    url = args.url
  }

  if( gotIt == false ) {
    url = process.env.baseUrl;
  }

  return url;
}


export function getDefaultPassword() {
  const args = minimist(process.argv.slice(2));

  var passwd = null;
  var gotIt = false;
  
  if( args.cfg != undefined ) {
    var file2include = '@root/config/' + args.cfg;
    var config = require(file2include);
    passwd = config.defaultPassword;
  }

  return passwd;
}