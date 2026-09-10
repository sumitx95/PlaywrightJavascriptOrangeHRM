import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
       // this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.invalidCredentialsMessage = page.getByText('Invalid credentials');
    }

    /**
     * To navigate to the login page
     */
    async navigateToLoginPage() {
        await this.page.goto( `${process.env.BASE_URL}web/index.php/auth/login`);
    }

     

    /**
     * To open URL
     */
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // // Verify successful login
    // async verifyDashboard() {
    //     await expect(this.dashboardHeading).toBeVisible();
    // }

    // Verify invalid login
    // async verifyInvalidCredentials() {
    //     await expect(this.invalidCredentialsMessage).toBeVisible();
    // }
}