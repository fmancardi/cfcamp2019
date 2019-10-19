/**
 * GL-04.loginKO.js 
 * Test Login Failure using Page Object Model
 *
 * @see {@link https://www.cfcamp.org/sessions/end-to-end-testing-of-cf-apps-using-test-cafe.html}
 * @author Francisco Mancardi [francisco.mancardi@tesisquare.com] 
 * @author Francisco Mancardi [francisco.mancardi@gmail.com] 
 */
import { Selector } from 'testcafe';

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');
const sw = require('@root/framework/common/ta-env.js');

const targetURL = sw.getOpt.getBaseURL(process.cwd());

const pp = '@root/framework/pages/users/';
const pom = require(pp + '/sign_in.js');
const signInPage = new pom.sign_in();

const fxn = __dirname.split("/test/").pop();
fixture(fxn).page(targetURL);

const path = require('path');
const whoami = path.basename(__filename).replace('.js','');
test.meta({'TESTLINK-TCID': 'GL-04','WKFSTATUS': 'ready-to-run'})
  (whoami, async t => {        
    await sw.login.loginTo(t , {user: '@@@@@'});
    await signInPage.ISeeBadLoginMessage(t);
});