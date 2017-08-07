import { BuyervsSellerPage } from './app.po';

describe('buyervs-seller App', () => {
  let page: BuyervsSellerPage;

  beforeEach(() => {
    page = new BuyervsSellerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
