'use strict';

module.exports = [
    {
      parentSref: 'user',
      menuItems: [
        { name: '$PROFILE', sref: 'user.edit' },
        { name: '$SETTINGS', sref: 'user.setting' },
        { name: '$VEHICLES', sref: 'user.vehicle' },
        { name: '$PARTICIPANT_COMPETITIONS', sref: 'user.competition' }
      ]
    }
  ];
