import {test} from '../fixtures/hooks-fixture';
import { expect } from '@playwright/test';

// test.beforeEach('Before each hook Setup', async ({ page, loginPage }) => {
//     await loginPage.navigateToLoginPage();
     
// })

// test.afterEach('After each hook Teardown', async ({ userPage }) => {
//     await userPage.logout();   

// })

test('Login Test 1', async ({ page, gotourl }) => {
   // await gotourl();

    // console.log('Base URL:', process.env.BASE_URL);
    // console.log('Username:', process.env.USER_NAME);
    // console.log('Password:', process.env.PASSWORD);
    
   console.log(await page.title())
   await expect(page).toHaveTitle('OrangeHRM');
     
    
//  await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
//  await dashboardPage.verifyDashboard();
 
})


test('Login Test 2', async ({ page, gotourl }) => {
    

   console.log(await page.title())
   await expect(page).toHaveTitle('OrangeHRM');

})

test('Login Test 3', async ({ page, gotourl,logout }) => {
     

   console.log(await page.title())
   await expect(page).toHaveTitle('OrangeHRM');

})

