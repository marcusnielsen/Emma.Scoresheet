appModule.factory('scoresheetFactory', [function () {
    var publicObj = {};

    publicObj.getInputColWidth = function (formGroup) {
        var itemCount = formGroup.inputs.length;

        var colsPerItem = 12 / itemCount;

        if (colsPerItem < 4) {
            return 4;
        }

        return Math.floor(colsPerItem);
    };

    publicObj.getFormGroupScoreSum = function (formGroup) {
        return _.reduce(formGroup.inputs, function (sum, input) {
            return sum + (input.value !== '' ? parseInt(input.value) : 0);
        }, 0);
    };

    publicObj.formGroups = [
        {
            inputs: [
                {
                    name: 'registrationNumber',
                    title: 'Reg.No.',
                    type: 'text',
                    value: '',
                    validationPattern: (/ /),
                    errorMessage: 'Invalid.'
                }
            ]
        },
         {
             inputs: [
                 {
                     name: 'name',
                     title: 'Name',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 }
             ]
         },
         {
             inputs: [
                 {
                     name: 'vehicle',
                     title: 'Vehicle',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 },
                 {
                     name: 'type',
                     title: 'Type',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 },
                 {
                     name: 'color',
                     title: 'Colour',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 }
             ]
         },
         {
             inputs: [
                 {
                     name: 'licensePlate',
                     title: 'License plate',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 },
                 {
                     name: 'andOr',
                     title: 'and/or',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 }
             ]
         },
         {
             inputs: [
                 {
                     name: 'competition',
                     title: 'Competition',
                     type: 'text',
                     value: '',
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 },
                 {
                     name: 'date',
                     title: 'Date',
                     type: 'date',
                     value: new Date().yyyymmdd(),
                     validationPattern: (/ /),
                     errorMessage: 'Invalid.'
                 }
             ]
         },
         {
             inputs: [
                 {
                     name: 'category',
                     title: 'Category',
                     type: 'select',
                     value: 'Advanced € 4000',
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
                      name: 'channelCheckInput',
                      title: 'Input',
                      type: 'text',
                      value: '',
                  },
                  {
                      name: 'channelCheckOutput',
                      title: 'Output',
                      type: 'text',
                      value: '',
                  }
              ]
          },
          {
              title: 'Presentation',
              inputs: [
                  {
                      name: 'basicPresentationAndDocumentation',
                      title: 'Basic presentation / documentation',
                      type: 'select',
                      value: '0',
                      options: [0, 1, 2, 3, 4, 5]
                  },
                  {
                      name: 'presentationToThePublic',
                      title: 'Presentation to the public',
                      type: 'select',
                      value: '0',
                      options: [0, 10]
                  },
                  {
                      name: 'cleanliness',
                      title: 'Cleanliness',
                      type: 'select',
                      value: '0',
                      options: [0, 1, 3, 5]
                  }
              ]
          },
          {
              title: 'Cables',
              inputs: [
                  {
                      name: 'powerWiresFusedProperly',
                      title: 'Power wire(s) fused properly',
                      type: 'select',
                      value: '0',
                      options: [0, 10]
                  },
                  {
                      name: 'cableProperlyTerminated',
                      title: 'Cable properly terminated',
                      type: 'select',
                      value: '0',
                      options: [0, 5]
                  },
                  {
                      name: 'allCableTerminationsProperlyProtected',
                      title: 'All cable terminations properly protected',
                      type: 'select',
                      value: '0',
                      options: [0, 5]
                  },
                   {
                       name: 'cablesProtectedFromDamage',
                       title: 'Cables protected from damage',
                       type: 'select',
                       value: '0',
                       options: [0, 5]
                   },
                    {
                        name: 'interiorCablesHiddenFromView',
                        title: 'Interior cables hidden from view',
                        type: 'select',
                        value: '0',
                        options: [0, 1, 2, 3, 4, 5]
                    }
              ]
          }
    ];

    return publicObj;
}]);