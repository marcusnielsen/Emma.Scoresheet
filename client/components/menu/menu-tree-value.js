'use strict';

module.exports = {
  primaryMenu: {
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
          templateUrl: 'dist/html/components/menu/login-or-register.html'
        },
        {
          sref: 'user',
          templateUrl: 'dist/html/components/menu/user.html'
        }
      ]
    }
  },
  secondaryMenu: {
    currentOption: '',
    options: [
      {
        parentSref: 'user',
        menuItems: [
          { name: '$PROFILE', sref: 'user.edit' },
          { name: '$SETTINGS', sref: 'user.setting' },
          { name: '$VEHICLES', sref: 'user.vehicle' },
          { name: '$PARTICIPANT_COMPETITIONS', sref: 'user.competition' }
        ]
      }
    ]
  }
};
