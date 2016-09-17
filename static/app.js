
var app = angular.module('techBlog', ['ng']);

// create variable $scope, $http, $window -> then pass into function
app.controller('techBlogController', function($scope, $http){

	


	$scope.post = 'waiting to be updated';

	$scope.sendPost = function(){
		$http.post('/post/add', {content: $scope.post});
	}

	$scope.setContent = function(filename){
		$scope.content = '/static/' + filename;
	}


	});

