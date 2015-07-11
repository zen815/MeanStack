/**
 * Created by zen on 15. 7. 10.
 */
angular.module('app')
.service('PostsSvc', function($http){
    console.log('error!');

    this.fetch = function() {
        return $http.get('/api/posts');
    };

    this.create = function(post) {
        return $http.post('/api/posts', post);
    };
});