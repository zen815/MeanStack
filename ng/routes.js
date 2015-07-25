/**
 * Created by zen on 15. 7. 14.
 */

angular.module('app')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    var appBase = '/templates/'
    $routeProvider
    .when('/',          { controller: 'PostsCtrl',    templateUrl: appBase + '/posts.html'} )
    .when('/register',  { controller: 'RegisterCtrl', templateUrl: appBase + '/register.html'})
    .when('/login',     { controller: 'LoginCtrl',    templateUrl: appBase + '/login.html'});

    // use the HTML5 History API
    if(window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
}]);

