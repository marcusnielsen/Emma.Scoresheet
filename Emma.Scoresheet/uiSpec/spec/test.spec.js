describe('index.html', function() {
  var ptor = protractor.getInstance();

  beforeEach(function() {
    ptor.get('#/');
  });

  it('should have a page header with text "EMMA EUROPEAN MOBILE MEDIA ASSOCIATION"', function () {
    var title = ptor.findElement(protractor.By.className('page-header'));
    expect(title.getText()).toEqual('EMMA EUROPEAN MOBILE MEDIA ASSOCIATION');
  });
    
  //it('should have a heading "EMMA"', function () {
  //    var heading = ptor.findElement(protractor.By.binding('{{app.heading}}'));
  //    expect(heading.getText()).toEqual('EMMA');
  //});
});