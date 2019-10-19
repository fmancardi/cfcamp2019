/**
 * GL-02.loginKO.NO.POM.js 
 * Test Login Failure implemented without Page Object Model
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

const fxn = __dirname.split("/test/").pop();
fixture(fxn).page(targetURL);

const path = require('path');
const whoami = path.basename(__filename).replace('.js','');

test.meta({'TESTLINK-TCID': 'GL-02','WKFSTATUS': 'ready-to-run'})
  (whoami, async t => {        
    await sw.login.loginTo(t , {user: '@@@@@'});

    await t
      .expect(Selector('.flash-content.flash-alert.rounded').exists).ok()
      .expect(Selector('span').withText('Invalid Login or password.')
                              .innerText).ok();
});