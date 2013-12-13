appModule
.directive('mnScoresheet', function () {
    return {
        restrict: 'E',
        scope: {
            mnScoresheetModel: '='
        },
        link: function (scope, element, attrs) {
            scope.getInputColWidth = function (formGroup) {
                var itemCount = formGroup.inputs.length;

                var colsPerItem = 12 / itemCount;

                if (colsPerItem < 4) {
                    return 4;
                }

                return Math.floor(colsPerItem);
            };

            scope.getFormGroupScoreSum = function (formGroup) {
                return _.reduce(formGroup.inputs, function (sum, input) {
                    return sum + (input.value !== '' ? parseInt(input.value, 10) : 0);
                }, 0);
            };
        },
        templateUrl: 'app/mnScoresheet/mnScoresheetTemplate.html'
    };
});


