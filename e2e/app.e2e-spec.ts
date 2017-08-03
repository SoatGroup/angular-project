import { AngularProjectPage } from './app.po';

describe('angular-project App', () => {
  let page: AngularProjectPage;

  beforeEach(() => {
    page = new AngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
