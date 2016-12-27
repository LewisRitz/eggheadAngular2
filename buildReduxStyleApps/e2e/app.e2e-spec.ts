import { BuildReduxStyleAppsPage } from './app.po';

describe('build-redux-style-apps App', function() {
  let page: BuildReduxStyleAppsPage;

  beforeEach(() => {
    page = new BuildReduxStyleAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
