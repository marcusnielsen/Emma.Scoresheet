var appCtrl = function ($scope, scoresheetFactory) {
    $scope.app = {
        title: 'EMMA Scoresheet TESTING',
        subTitle: 'SQ Advanced / Master',
        heading: 'EMMA',
        subHeading: 'european mobile media association',
        footerLink: 'https://github.com/marcusnielsen/Emma.Scoresheet'
    };

    $scope.scoresheet = scoresheetFactory;
}