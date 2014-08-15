'use strict';

require('angular/angular');
require('angular-ui-bootstrap/ui-bootstrap');
require('angular-translate/angular-translate');
require('angular-translate-loader-static/angular-translate-loader-static-files');
var uiRouterName = require('angular-ui-router');
var theme = require('./components/theme');
var menu = require('./components/menu');
var home = require('./page-components/home');
var login = require('./page-components/login');
var user = require('./page-components/user');
var mnInput = require('./components/mnInput');
var mnSetting = require('./page-components/setting');
var mnScoresheet = require('./components/mnScoresheet');

var app = angular.module('app', [
  uiRouterName,
  'ui.bootstrap',
  'pascalprecht.translate',
  theme.name,
  menu.name,
  home.name,
  login.name,
  user.name,
  mnInput.name,
  mnSetting.name,
  mnScoresheet.name
]);

app.constant('version', require('../package.json').version);
app.config(require('./config'));
app.controller('appController', require('./app-controller'));
