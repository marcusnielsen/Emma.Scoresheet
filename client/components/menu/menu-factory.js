'use strict';

module.exports = ['$rootScope', '$state', 'mnUserFactory', function ($rootScope, $state, mnUserFactory) {
  var factory = {
    brandMenuItem: {title: 'EMMA', sref: 'home'},
    //TODO: These links should be displayed according to the users group policy.
    navigationItems: [
      {title: '$HOME', sref: 'home'},
      {title: '$SETTINGS', sref: 'setting'},
      {title: '$VEHICLES', sref: 'vehicle'},
      {title: '$COMPETITIONS', sref: 'competition'},
      {title: '$SCORESHEET_TEMPLATES', sref: 'scoresheet-template'}
    ]
  };

  factory.isActive = function (sref) {
    return $state.includes(sref);
  };

  factory.loginSref = 'login';
  factory.userSref = 'user';

  // TODO: Refactor dist/html/components/menu/ here and in the directive.
  factory.userLoginTemplate = 'dist/html/components/menu/login-or-register.html';

  $rootScope.$on('login-logged-in', function () {
    factory.userLoginTemplate = 'dist/html/components/menu/user.html';
  });

  $rootScope.$on('login-logged-out', function () {
    factory.userLoginTemplate = 'dist/html/components/menu/login-or-register.html';
  });

  factory.userData = mnUserFactory.userData;

  // TODO: Check if isCollapsed is the wrong word. Should it be isExpanded?
  // For compressed menu when viewing with a small screen.
  factory.isExpanded = true;



  return factory;
}];
