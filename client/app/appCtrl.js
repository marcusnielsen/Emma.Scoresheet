'use strict';

var appCtrl = function ($scope, scoresheetFactory, styleFactory) {
    $scope.app = {
        title: 'EMMA Scoresheet',
        subTitle: 'SQ Advanced / Master',
        heading: 'EMMA',
        subHeading: 'european mobile media association',
        footerLink: 'https://github.com/marcusnielsen/Emma.Scoresheet'
    };

    $scope.style = styleFactory;
    $scope.scoresheet = scoresheetFactory;   
};