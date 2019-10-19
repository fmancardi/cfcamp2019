/**
 * GL-100.loginOK.js
 * Using meta to specify versions to what
 * this script applies.
 * example: '5.0': 'no', '5.1': 'yes'
 *
 * @author Francisco Mancardi [francisco.mancardi@tesisquare.com] 
 * @author Francisco Mancardi [francisco.mancardi@gmail.com] 
 *
 */
import { Selector } from 'testcafe';

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');
const sw = require('@root/framework/common/ta-env.js');

const targetURL = sw.getOpt.getBaseURL(process.cwd());

var fxn = __dirname.split("/test/").pop();
fixture(fxn).page(targetURL);

const path = require('path');
var whoami = path.basename(__filename).replace('.js','');
test
  .meta({'TCID': '','WKFSTATUS': 'ready', 
         '5.0': 'no', '5.1': 'yes', '6.0': 'yes',
         '6.1': 'no',
         'SUTVERSION': '6.1.13'})
  (whoami, async t => {        
    await sw.login.loginTo(t , {user: 'shibboleth', password: 'drago.ivan'});    
    await t.expect(Selector('#logo').exists).ok();
});
