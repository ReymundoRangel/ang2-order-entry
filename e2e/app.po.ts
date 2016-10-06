import { browser, element, by } from 'protractor';

export class OrderEntryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('oe-root h1')).getText();
  }
}
