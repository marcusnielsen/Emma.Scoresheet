'use strict';

require('../../helpers/dateHelper');

module.exports = function () {
    return {
        title: 'EMMA Scoresheet',
        formGroups: [
        {
            inputs: [
                {
                    title: 'Registration Number',
                    type: 'static',
                    value: '105' // TODO: Remove static values for all inputs
                    //validationPattern: (/(?:)/), TODO: Refactor to mnInput
                    //errorMessage: 'Invalid.'
                },
                {
                    title: 'Name',
                    type: 'static',
                    value: 'Aston Martin'
                }
            ]
        },
         {
             inputs: [
                 {
                     title: 'Vehicle',
                     type: 'static',
                     value: 'Volvo'
                 },
                 {
                     title: 'Type',
                     type: 'static',
                     value: 'V70'
                 },
                 {
                     title: 'Colour',
                     type: 'static',
                     value: 'Yellow'
                 }
             ]
         },
         {
             inputs: [
                 {
                     title: 'License plate',
                     type: 'static',
                     value: 'ABC 123'
                 },
                 {
                     title: 'License plate 2nd',
                     type: 'static',
                     value: 'CAB 666'
                 }
             ]
         },
         {
             inputs: [
                 {
                     title: 'Competition',
                     type: 'static',
                     value: 'Jönköping 2012-08-12'
                 },
                 {
                     title: 'Date',
                     type: 'static',
                     value: new Date().yyyymmdd()
                 }
             ]
         },
         {
             inputs: [
                 {
                     title: 'Category',
                     type: 'select',
                     selected: '',
                     options: [
                         'Advanced € 4000',
                         'Advanced Unlimited',
                         'Master € 4000',
                         'Master OEM',
                         'Master 6 channel',
                         'Master Unlimited'
                     ]
                 }
             ]
         },
          {
              title: 'Channel check',
              inputs: [
                  {
                      title: 'Input',
                      type: 'text',
                      value: 'Spotify via USB.'
                  },
                  {
                      title: 'Output',
                      type: 'text',
                      value: 'Dual speakers.'
                  }
              ]
          },
          {
              title: 'Presentation',
              inputs: [
                  {
                      title: 'Basic presentation and documentation',
                      type: 'select',
                      selected: '',
                      options: [0, 1, 2, 3, 4, 5]
                  },
                  {
                      title: 'Presentation to the client',
                      type: 'select',
                      selected: '',
                      options: [0, 10]
                  },
                  {
                      title: 'Cleanliness',
                      type: 'select',
                      selected: '',
                      options: [0, 1, 3, 5]
                  }
              ]
          },
          {
              title: 'Cables',
              inputs: [
                  {
                      title: 'Power wires fused properly',
                      type: 'select',
                      selected: '',
                      options: [0, 10]
                  },
                  {
                      title: 'Cable properly terminated',
                      type: 'select',
                      selected: '',
                      options: [0, 5]
                  },
                  {
                      title: 'All cable terminations properly protected',
                      type: 'select',
                      selected: '',
                      options: [0, 5]
                  },
                   {
                       title: 'Cables protected from damage',
                       type: 'select',
                       selected: '',
                       options: [0, 5]
                   },
                    {
                        title: 'Interior cables hidden from view',
                        type: 'select',
                        selected: '',
                        options: [0, 1, 2, 3, 4, 5]
                    }
              ]
          }
        ]
    };
};