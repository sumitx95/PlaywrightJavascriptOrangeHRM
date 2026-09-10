 
export class UserPage {
    constructor(page) {
        this.page = page;
        this.userMenu = page.locator('.oxd-userdropdown-name');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }  


    async logout() {
        await this.userMenu.click();
        await this.logoutButton.click();
    }
}