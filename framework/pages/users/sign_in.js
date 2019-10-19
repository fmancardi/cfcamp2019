import { Selector } from 'testcafe';

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');
const sw = require('@root/framework/common/ta-env.js');

export class sign_in {

  /**
   *
   */
  constructor() {
    this.ux = {
      alertBox: Selector('.flash-content.flash-alert.rounded'),
      badLogin: Selector('span').withText('Invalid Login or password.')
    }
  }
     
  /**
   *
   */
  async ISeeBadLoginMessage(actor) {
      await actor
             .expect(this.ux.alertBox.exists).ok()
             .expect(this.ux.badLogin.innerText).ok();
  }
}