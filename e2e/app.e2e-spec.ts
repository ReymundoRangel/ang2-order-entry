import { OrderEntryPage } from './app.po';

describe('order-entry App', function() {
  let page: OrderEntryPage;

  beforeEach(() => {
    page = new OrderEntryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('oe works!');
  });
});
