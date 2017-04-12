import { Cp2meanPage } from './app.po';

describe('cp2mean App', () => {
  let page: Cp2meanPage;

  beforeEach(() => {
    page = new Cp2meanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
