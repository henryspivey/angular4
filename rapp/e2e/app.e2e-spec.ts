import { RappPage } from './app.po';

describe('rapp App', () => {
  let page: RappPage;

  beforeEach(() => {
    page = new RappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
