import{test ,expect} from '../../fixtures/hooks-fixture';
import pimData from '../../testdata/pim-module-data.json';

test('PIM Module Test', async ({gotourl,leftNavigationPage,pimPage}) => {

    await leftNavigationPage.clickPIMLink();
    await pimPage.addEmployee(pimData[0].firstName, pimData[0].middleName, pimData[0].lastName);
    await expect(pimPage.nameEmpNameHeading).toHaveText(`${pimData[0].firstName} ${pimData[0].lastName}`);

})

test('PIM Module Test emp new', async ({gotourl,leftNavigationPage,pimPage}) => {

    await leftNavigationPage.clickPIMLink();
    await pimPage.addEmployee(pimData[1].firstName, pimData[1].middleName, pimData[1].lastName);
    await expect(pimPage.nameEmpNameHeading).toHaveText(`${pimData[1].firstName} ${pimData[1].lastName}`);

})
 
     