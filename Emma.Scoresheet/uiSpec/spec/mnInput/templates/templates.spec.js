describe("mnInput templates", function () {
    describe("As a developer I want a directive that handles different input element types So that the types are cross-browser compatible", function () {
        describe("Given the element mn-input with input.type: \"text\"", function () {
            var ptor = protractor.getInstance();
            ptor.get('#/');

            it("It should generate an element input with attribute type=\"text\"", function () {
                var inputElement = ptor.findElements(protractor.By.);
            });
        });
    });
});