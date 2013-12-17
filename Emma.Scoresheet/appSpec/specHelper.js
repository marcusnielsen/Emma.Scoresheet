var specHelper = {
    loadTemplate: function (templatePath, $templateCache) {
        var req = new XMLHttpRequest();
        req.onload = function () {
            $templateCache.put(templatePath, this.responseText);
        };

        req.open("get", "../" + templatePath, false);
        req.send();
    }
};