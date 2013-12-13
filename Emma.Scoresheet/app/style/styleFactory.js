appModule.factory('styleFactory', function ($http) {  

    var publicObj = {};

    publicObj.themes = $http.get('//api.bootswatch.com/3/').success(function (data) { // may not work with https
        publicObj.selectedUrl = data.themes[0].cssCdn;

        var themes = _.map(data.themes, function (theme) {
            return {name: theme.name, cssCdn: theme.cssCdn};
        });

        publicObj.themes = themes;
        publicObj.themesInput.options = _.map(themes, function (theme) {
            return {title: theme.name, value: theme.cssCdn};
        });
    });

    publicObj.themesInput = {
        title: 'Themes',
        type: 'select',
        selected: { title: 'Readable', value: '//netdna.bootstrapcdn.com/bootswatch/latest/readable/bootstrap.min.css' },
        options: []
    };

    return publicObj;
});