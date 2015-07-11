/**
 * Created by zen on 15. 7. 10.
 */
angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc){
    $scope.addPost = function() {
        if($scope.postBody){
            /*
             $http.post('/api/posts',
             {
             username: 'dickeyxxx',
             body: $scope.postBody
             }).success(function(post){
             $scope.posts.unshift(post);
             $scope.postBody = null;
             });
             */
            PostsSvc.create({
                username: 'dickeyxxx',
                body: $scope.postBody
            }).success(function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            });
        }
    };

    /*
     $http.get('/api/posts').success(function(posts) {
     $scope.posts = posts
     });
     */
    PostsSvc.fetch().success(function(posts){
        $scope.posts = posts;
    });
});