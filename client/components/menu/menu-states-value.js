'use strict';

module.exports = {
  states: [
    {
      name: 'home',
      url: '/',
      templateUrl: 'dist/html/page-components/home/home.html',
      controller: 'mnHomeController'
    },
    {
      name: 'login',
      url: '/login',
      templateUrl: 'dist/html/page-components/login/login.html',
      controller: 'mnLoginController'
    },
    {
      name: 'scoresheet-template',
      url: '/scoresheet-template',
      templateUrl: 'dist/html/page-components/scoresheet-template/scoresheet-template.html',
      controller: 'mnScoresheet-templateController'
    },
    {
      name: 'competition',
      url: '/competition',
      templateUrl: 'dist/html/page-components/competition/competition.html',
      controller: 'mnCompetitionController'
    },
    {
      name: 'user',
      url: '/user',
      templateUrl: 'dist/html/page-components/user/user.html',
      controller: 'mnUserController'
    },
    {
      name: 'user.edit',
      url: '/user/edit',
      templateUrl: 'dist/html/page-components/user/user-edit.html',
      controller: 'mnUserController'
    },
    {
      name: 'user.setting',
      url: '/user/setting',
      templateUrl: 'dist/html/page-components/setting/user-setting.html',
      controller: 'mnSettingController'
    },
    {
      name: 'user.vehicle',
      url: '/user/vehicle',
      templateUrl: 'dist/html/page-components/vehicle/user-vehicle.html',
      controller: 'mnVehicleController'
    },
    {
      name: 'user.competition',
      url: '/user/competition',
      templateUrl: 'dist/html/page-components/competition/user-competition.html',
      controller: 'mnCompetitionController' //TODO: Will probably need to be renamed.
    }
  ],

  //TODO: Should list authorization-level.
  menuTree: {
    primaryMenu: {
      brand: { name: 'EMMA', sref: 'home' },
      menuItems: [
        { name: '{{$HOME}}', sref: 'home' },
        { name: '{{$COMPETITIONs}}', sref: 'competition' },
        { name: '{{$SCORESHEET_TEMPLATES}}', sref: 'scoresheet-template' }
      ],
      rightMenu: {
        currentIndex: 0,
        options: [
          { name: '{{$LOGIN}} / {{$REGISTER}}', sref: 'login' },
          { name: '{{$USER}}', sref: 'user' }
        ]
      }
    },
    secondaryMenu: {
      currentIndex: '',
      options: [
        {
          parentSref: 'user',
          menuItems: [
            { name: '{{$PROFILE}}', sref: 'user.edit' },
            { name: '{{$SETTINGS}}', sref: 'user.setting' },
            { name: '{{$VEHICLES}}', sref: 'user.vehicle' },
            { name: '{{$PARTICIPANT_COMPETITIONS}}', sref: 'user.competition' }
          ]
        }
      ]
    },
    TertiaryMenu: {

    }
  }
};
