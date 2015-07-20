/**
 * Created by zen on 15. 7. 18.
 */
angular.module('app')
.controller('ApplicationCtrl', function($scope) {
    $scope.$on('login', function(_,user) {
        $scope.currentUser = user;
    })
});