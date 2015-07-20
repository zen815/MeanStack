/**
 * Created by zen on 15. 7. 17.
 */
angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc){
    $scope.login = function(username, password) {
        UserSvc.login(username, password)
        .then(function(user) {
            $scope.$emit('login', user);
        });
    }
    console.log('login.ctrl.js end');
});