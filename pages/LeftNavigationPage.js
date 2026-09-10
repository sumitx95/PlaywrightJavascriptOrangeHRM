
export class LeftNavigationPage {
    constructor(page) {
        this.page = page;
        this.pimLink= page.getByText('PIM', { exact: true })
    } 

    async clickPIMLink() {
        await this.pimLink.click();
    }

}