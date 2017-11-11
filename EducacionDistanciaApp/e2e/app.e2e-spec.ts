import { EducacionDistanciaAppPage } from './app.po';

describe('educacion-distancia-app App', () => {
  let page: EducacionDistanciaAppPage;

  beforeEach(() => {
    page = new EducacionDistanciaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
