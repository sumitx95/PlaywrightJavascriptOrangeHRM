import{test} from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test('Global Setup Test', async ({ page, loginPage , dashboardPage}) => {

    await loginPage.navigateToLoginPage();
  // console.log(await page.title())
     
    
 await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
  

// Verify that the dashboard heading is visible
await dashboardPage.verifyDashboard();
 console.log('Login successful, dashboard heading is visible.'+await page.title());


await page.context().storageState({
    path: './playwright/.auth/auth.json'
});

})