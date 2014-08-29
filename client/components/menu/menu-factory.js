'use strict';

module.exports = ['$state', function ($state) {
  var factory = {
    brandMenuItem: {title: 'EMMA', sref: 'home'},
    //TODO: These links should be displayed according to the users group policy.
    navigationItems: [
      {title: '$HOME', sref: 'home'},
      {title: '$LOGIN', sref: 'login'},
      {title: '$SETTINGS', sref: 'setting'},
      {title: '$USER', sref: 'user'},
      {title: '$VEHICLES', sref: 'vehicle'},
      {title: '$COMPETITIONS', sref: 'competition'},
      {title: '$SCORESHEET_TEMPLATES', sref: 'scoresheet-template'}
    ]
  };

  factory.isActive = function (sref) {
    return $state.includes(sref);
  };

  // TODO: Check if isCollapsed is the wrong word. Should it be isExpanded?
  // For compressed menu when viewing with a small screen.
  factory.isCollapsed = true;

  return factory;
}];
