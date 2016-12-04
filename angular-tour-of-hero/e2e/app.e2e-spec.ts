import { AngularTourOfHeroPage } from './app.po';

describe('angular-tour-of-hero App', function() {
  let page: AngularTourOfHeroPage;

  beforeEach(() => {
    page = new AngularTourOfHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
