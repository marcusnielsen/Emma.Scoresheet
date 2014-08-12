'use strict';

module.exports = {
  users: [
    {
      name: 'userse',
      password: 'userse',
      settings: [
        {name: 'lcl', value: 'sv_SE'},
        {name: 'themeName', value: 'cosmo'}
      ],
      vehicles: [
        {licensePlates: ['ABC123'], brand: 'Volvo', model: 'V70' }
      ]
    },
    {
      name: 'useren',
      password: 'useren',
      settings: [
        {name: 'lcl', value: 'en_US'},
        {name: 'themeName', value: 'slate'}
      ],
      vehicles: [
        {licensePlates: ['DAD323', 'DED523'], brand: 'Saab', model: 'S9' },
        {licensePlates: ['ZZZ3546', 'ASD907', 'USEREN'], brand: 'Ford', model: 'Fiesta' },
        {licensePlates: ['098765434'], brand: 'Toyota', model: 'Auris' }
      ]
    }
  ]
};
