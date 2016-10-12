import { NgWeatherWidgetPage } from './app.po';

describe('ng-weather-widget App', function() {
  let page: NgWeatherWidgetPage;

  beforeEach(() => {
    page = new NgWeatherWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
