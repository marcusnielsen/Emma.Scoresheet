'use strict';

module.exports = {
  competitions: [
    {
      title: 'SM Final 2014',
      startDate: new Date(),
      judges: ['user@se'],
      participants: ['user@en']
    },
    {
      title: 'Bräcke',
      startDate: new Date(),
      judges: ['user@en'],
      participants: ['user@se']
    }
  ],
  users: [
    {
      name: 'Sverker Svensson',
      email: 'user@se',
      password: 'user@se',
      role: 'user',
      settingCollection: [
        {name: 'lcl', value: 'sv_SE'},
        {name: 'themeName', value: 'cosmo'}
      ],
      vehicleCollection: [
        {licensePlates: ['ABC123'], brand: 'Volvo', model: 'V70' }
      ]
    },
    {
      name: 'Johnny English',
      email: 'user@en',
      password: 'user@en',
      role: 'user',
      settingCollection: [
        {name: 'lcl', value: 'en_US'},
        {name: 'themeName', value: 'slate'}
      ],
      vehicleCollection: [
        {licensePlates: ['DAD323', 'DED523'], brand: 'Saab', model: 'S9' },
        {licensePlates: ['ZZZ3546', 'ASD907', 'USEREN'], brand: 'Ford', model: 'Fiesta' },
        {licensePlates: ['098765434'], brand: 'Toyota', model: 'Auris' }
      ]
    }
  ]
};
