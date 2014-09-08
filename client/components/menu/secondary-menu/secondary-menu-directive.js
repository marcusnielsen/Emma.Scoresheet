'use strict';

module.exports = [function () {
  return {
    replace: true,
    restrict: 'EA',
    scope: {
      parentSref: '@'
    },
    templateUrl: 'dist/html/components/menu/secondary-menu/secondary-menu.html',
    controller: 'mnSecondaryMenuController'
  };
}];
