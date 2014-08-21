'use strict';

require('angular/angular');
require('angular-ui-bootstrap/ui-bootstrap');
require('angular-translate/angular-translate');
require('angular-translate-loader-static/angular-translate-loader-static-files');
var uiRouterName = require('angular-ui-router');

var app = angular.module('app', [
  uiRouterName,
  'ui.bootstrap',
  'pascalprecht.translate',
  require('./components/theme').name,
  require('./components/menu').name,
  require('./page-components/home').name,
  require('./page-components/competition').name,
  require('./page-components/login').name,
  require('./page-components/user').name,
  require('./page-components/vehicle').name,
  require('./page-components/setting').name,
  require('./page-components/scoresheet-template').name
]);

app.constant('version', require('../package.json').version);
app.config(require('./config'));
app.controller('appController', require('./app-controller'));
