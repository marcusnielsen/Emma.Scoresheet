'use strict';

module.exports = ['$compileProvider', '$translateProvider',
  function ($compileProvider, $translateProvider) {

    //TODO: Refactor out the router and the translator.
    $translateProvider.useStaticFilesLoader({
      prefix: '/dist/localization/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en_US');

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel):/);
  }];
