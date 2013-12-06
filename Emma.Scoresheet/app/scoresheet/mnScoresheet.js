appModule
.directive('mnScoresheet', function () {
    return {
        restrict: 'A',
        scope: {
            //'mnScoresheetModel' : '='
        },
        replace: true,
        link: function (scope, element, attrs) {
             //scope.
        },
        template:"<h1>Test</h1>"
    }
});


