import{test} from '@playwright/test';
import { expect } from '@playwright/test';

export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    }   


    // Verify successful login
        async verifyDashboard() {
            await expect(this.dashboardHeading).toBeVisible();
        }




}