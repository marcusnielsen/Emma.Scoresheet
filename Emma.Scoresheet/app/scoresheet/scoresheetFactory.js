appModule.factory('scoresheetFactory', [function () {
    var publicObj = {};

    publicObj.getInput = function (index) {
        return publicObj.formGroups
    };

    publicObj.formGroups = [
        {
            inputs: [
                {
                    name: 'registrationNumber',
                    title: 'Reg.No.',
                    type: 'text',
                    value: 'ABC123', // TODO: Make it work, then remove.
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
                     value: new Date().toISOString(), // TODO: Make it work!
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
                     value: '0', // TODO: Make it work!
                     options: [
                         'Advanced &euro; 4000',
                         'Advanced Unlimited',
                         'Master &euro; 4000',
                         'Master OEM',
                         'Master 6 channel',
                         'Master Unlimited'
                     ]
                 }
             ]
         }
    ];

    return publicObj;
}]);