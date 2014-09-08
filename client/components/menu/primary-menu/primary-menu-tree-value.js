'use strict';

module.exports = {
    brand: { name: 'EMMA', sref: 'home' },
    menuItems: [
      { name: '$HOME', sref: 'home' },
      { name: '$COMPETITIONS', sref: 'competition' },
      { name: '$SCORESHEET_TEMPLATES', sref: 'scoresheet-template' }
    ],
    rightMenu: {
      currentOption: '',
      options: [
        {
          sref: 'login',
          templateUrl: 'dist/html/components/menu/primary-menu/right-menu-templates/login-or-register.html'
        },
        {
          sref: 'user',
          templateUrl: 'dist/html/components/menu/primary-menu/right-menu-templates/user.html'
        }
      ]
    }
};
