describe("mnInput.js", function () {
    var element,
        scope,
        compile,
        dataModel = {
            title: 'Name',
            type: 'text',
            value: 'Test value',
        },
        outerElement = "<mn-input data-input='dataModel'></mn-input>";

    beforeEach(function () {
        module("appModule");

        inject(function ($rootScope, $compile, $templateCache) {
            scope = $rootScope.$new();
            scope.dataModel = dataModel;
            compile = $compile;

            specHelper.loadTemplate("app/mnInput/mnInputTemplate.html", $templateCache);
            specHelper.loadTemplate("app/mnInput/templates/text.html", $templateCache);

            //var req = new XMLHttpRequest();
            //req.onload = function () {
            //    $templateCache.put("app/mnInput/mnInputTemplate.html", this.responseText);
            //};

            //req.open("get", "../app/mnInput/mnInputTemplate.html", false);
            //req.send();

            //var req2 = new XMLHttpRequest();
            //req2.onload = function () {
            //    $templateCache.put("app/mnInput/templates/text.html", this.responseText);
            //};

            //req2.open("get", "../app/mnInput/templates/text.html", false);
            //req2.send();
        });
    });

    it('should render the value "Test value"', function () {
        element = compile(outerElement)(scope);
        scope.$digest();
        expect(element.find('input').val()).toBe('Test value');
    });
});