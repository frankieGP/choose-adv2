import { ChooseAdventure2Page } from './app.po';

describe('choose-adventure2 App', function() {
  let page: ChooseAdventure2Page;

  beforeEach(() => {
    page = new ChooseAdventure2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
