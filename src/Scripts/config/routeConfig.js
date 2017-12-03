/* The config function says which view (piece of html to use) depending on the URL.
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { //when the URL ends in /, insert the "home.html" view into the div
            templateUrl: 'Views/home.html'
        })
        .when('/platform', { //when the URL ends in /platform, insert the "platform.html" view into the div
            templateUrl: 'Views/platform.html'
        })
});