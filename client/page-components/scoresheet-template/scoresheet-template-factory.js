'use strict';

module.exports = ['$rootScope', '$http', function ($rootScope, $http) {
  var scoresheetTemplateFactory = {};

  scoresheetTemplateFactory.competitionData = {};

  $http.get('api/scoresheet-templates').then(function (res) {
    scoresheetTemplateFactory.data = res.data;
  });

  return scoresheetTemplateFactory;
}];
