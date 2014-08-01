'use strict';

var _ = require('lodash');

module.exports = function () {
  return {
    restrict: 'E',
    scope: {'input': '='},
    link: function (scope, element, attrs) {
      scope.getTemplateUrl = function () {
        return 'app/mnInput/templates/' + scope.input.type + '.html';
      };

      scope.setSelectedOption = function (optionIndex) {
        scope.input.selected = scope.input.options[optionIndex];
      };

      scope.clearSelected = function () {
        scope.input.selected = '';
      };

      scope.isSelectedOption = function (optionIndex) {
        if (_.isUndefined(scope.input.options[0].value)) {
          return scope.input.selected === scope.input.options[optionIndex];
        }

        return scope.input.selected.value === scope.input.options[optionIndex].value;
      };

      scope.getOptionTitle = function (option) {
        return _.isUndefined(option.title) ? option : option.title;
      };
    },
    templateUrl: 'app/mnInput/mnInputTemplate.html'
  };
};
