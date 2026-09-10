
export class PimPage {
    constructor(page) {
        this.page = page;
        this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.nameEmpNameHeading = page.locator('.orangehrm-edit-employee-name');

            }


    async addEmployee(firstName, middleName, lastName) {
        await this.addEmployeeButton.click();
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.saveButton.click();

    }}
