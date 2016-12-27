import { BuildingAngular2ComponentsPage } from './app.po';

describe('building-angular2-components App', function() {
  let page: BuildingAngular2ComponentsPage;

  beforeEach(() => {
    page = new BuildingAngular2ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
