appModule.directive('mnInput', function () {
    return {
        restrict: 'E',
        scope: {'input': '='},
        link: function (scope, element, attrs) {
            scope.getTemplateUrl = function () {
                return 'app/mnInput/templates/' + scope.input.type + '.html';
            };

            scope.setSelectedOption = function (optionIndex) {
                scope.input.value = scope.input.options[optionIndex];
            };

            scope.isSelectedOption = function (optionIndex) {
                return scope.input.value === scope.input.options[optionIndex];
            };
        },
        templateUrl: "app/mnInput/mnInputTemplate.html"
    };
});