import { MeanRsvpPage } from './app.po';

describe('mean-rsvp App', function() {
  let page: MeanRsvpPage;

  beforeEach(() => {
    page = new MeanRsvpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
