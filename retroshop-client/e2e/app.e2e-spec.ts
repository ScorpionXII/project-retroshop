import { RetroshopClientPage } from './app.po';

describe('retroshop-client App', () => {
  let page: RetroshopClientPage;

  beforeEach(() => {
    page = new RetroshopClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
