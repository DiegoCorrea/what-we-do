import { WhatWeDoPage } from './app.po';

describe('what-we-do App', () => {
  let page: WhatWeDoPage;

  beforeEach(() => {
    page = new WhatWeDoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
