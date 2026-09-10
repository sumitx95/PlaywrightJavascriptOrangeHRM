import { test as baseTest } from './pom-fixture';

//fixture for Before and After hooks

export const test = baseTest.extend({
  gotourl: async ({loginPage}, use) => {
    await loginPage.navigateToLoginPage();
    await use();
  },

  logout: async ({userPage}, use) => {
    await use();
    await userPage.logout();
    
  }

});
export { expect } from '@playwright/test';

