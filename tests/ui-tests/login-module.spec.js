import{test,expect} from '../../fixtures/hooks-fixture';
import loginmoduledata from '../../testdata/login-module.json';

test.use({ storageState:{
    cookies: [],
    origins: []
}})

test('TC 01 Login with invalid username and invalid password',{tag:['@UI','@UAT']}, async ({ gotourl,loginPage,dashboardPage}) => {

    await loginPage.login(loginmoduledata.wrongUsername, loginmoduledata.wrongPassword);
    await expect(loginPage.invalidCredentialsMessage).toHaveText(loginmoduledata.invalidCredentialsMessage);
    await expect(loginPage.usernameInput).toBeVisible();

})


test('TC 02 Login with valid username and invalid password', {tag:['@UI','@UAT']}, async ({ gotourl,loginPage}) => {
    const username = process.env.USER_NAME
    await loginPage.login(username, loginmoduledata.wrongPassword);
    await expect(loginPage.invalidCredentialsMessage).toHaveText(loginmoduledata.invalidCredentialsMessage);
     await expect(loginPage.usernameInput).toBeVisible();
})

test('TC 03 Login with invalid username and valid password', {tag:['@UI','@UAT']}, async ({ gotourl,loginPage}) => {

    const password = process.env.PASSWORD
    await loginPage.login(loginmoduledata.wrongUsername, password);
    await expect(loginPage.invalidCredentialsMessage).toHaveText(loginmoduledata.invalidCredentialsMessage);
    await expect(loginPage.usernameInput).toBeVisible();
})

test('TC 04 Login with valid username and valid password', {tag:['@DEV','@UAT']}, async ({ gotourl,loginPage,dashboardPage}) => {
    const username = process.env.USER_NAME
    const password = process.env.PASSWORD   
    await loginPage.login(username, password);
    await dashboardPage.verifyDashboard();
    console.log('Login successful, dashboard heading is visible.');
})