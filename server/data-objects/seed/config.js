'use strict';

//TODO: Divide into multiple subconfigs.

module.exports = {
  competitions: [
    {
      title: 'SM Final 2014',
      startDate: new Date(),
      categories: [{
        title: 'Sound quality Advanced and Master',
        judges: ['user@se'],
        participants: [{ email: 'user@en', licencePlate: 'ASD907'}] //TODO: Avoid repeating email and licensePlate data.
      }]
    },
    {
      title: 'Bräcke',
      startDate: new Date(),
      categories: [{
        title: 'Sound quality Advanced and Master',
        judges: ['user@en'],
        participants: [{ email: 'user@se', licencePlate: 'ABC123'}] //TODO: Avoid repeating email and licensePlate data.
      }]
    }
  ],
  scoresheetTemplates: [{
      title: 'Sound quality: Advanced and Master',
        sections: [
          {
            title: '$CHANNEL_CHECK',
            inputs: [
              {
                title: '$INPUT',
                inputType: 'text'
              },
              {
                title: '$OUTPUT',
                inputType: 'text'
              }
            ]
          },
          {
            title: '$PRESENTATION',
            inputs: [
              {
                title: '$BASIC_PRESENTATION_AND_DOCUMENTATION',
                inputType: 'select',
                selectOptions: [0, 1, 2, 3, 4, 5]
              },
              {
                title: '$PRESENTATION_TO_THE_CLIENT',
                inputType: 'select',
                selectOptions: [0, 10]
              },
              {
                title: '$CLEANLINESS',
                inputType: 'select',
                selectOptions: [0, 1, 3, 5]
              }
            ]
          },
          {
            title: '$CABLES',
            inputs: [
              {
                title: '$POWER_WIRES_FUSED_PROPERLY',
                inputType: 'select',
                selectOptions: [0, 10]
              },
              {
                title: '$CABLE_PROPERLY_TERMINATED',
                inputType: 'select',
                selectOptions: [0, 5]
              },
              {
                title: '$ALL_CABLE_TERMINATIONS_PROPERLY_PROTECTED',
                inputType: 'select',
                selectOptions: [0, 5]
              },
              {
                title: '$CABLES_PROTECTED_FROM_DAMAGE',
                inputType: 'select',
                selectOptions: [0, 5]
              },
              {
                title: '$INTERIOR_CABLES_HIDDEN_FROM_VIEW',
                inputType: 'select',
                selectOptions: [0, 1, 2, 3, 4, 5]
              }
            ]
          }
        ]
  }],
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
