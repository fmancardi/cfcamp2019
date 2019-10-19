/**
 * login.js
 * generic login method
 *
 */
import { Selector } from 'testcafe';

const path = require('path');
var whoami = path.basename(__filename);

/**
 *
 */
export async function loginTo(t, login) {
  const _$f = 'loginTo';

  const userlogin = Selector('#user_login');
  const password = Selector('#user_password');
  const loginButton = Selector('.btn.btn-success');

  await t.typeText( userlogin, login.user);

  if( typeof login.password == 'undefined' ) {
    login.password = 'defa';
  }

  if( await password.exists ) {
    await t.typeText(password, login.password);
  }
  await t.click(loginButton);
}