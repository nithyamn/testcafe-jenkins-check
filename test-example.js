import Page from './basic-page-model';

fixture `My first fixture`
    .page `http://devexpress.github.io/testcafe/example/`;

const page = new Page();

test('My first test', async t => {
    await t
        .typeText(page.nameInput, 'nithyamani3')
        .click(page.macOSRadioButton)
        .click(page.featureList[0].checkbox)
        .click(page.interfaceSelect)
        .click(page.interfaceSelectOption.withText('Both'))
        .expect(page.nameInput.value).contains(process.env.BROWSERSTACK_USERNAME);
});