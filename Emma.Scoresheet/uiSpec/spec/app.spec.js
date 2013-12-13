describe('index.html', function() {
  var ptor = protractor.getInstance();

  beforeEach(function() {
    ptor.get('#/');
  });

  it('should have a page header with text "EMMA european mobile media association"', function () {
    var title = ptor.findElement(protractor.By.className('page-header'));
    expect(title.getText()).toEqual('EMMA european mobile media association');
  });
});