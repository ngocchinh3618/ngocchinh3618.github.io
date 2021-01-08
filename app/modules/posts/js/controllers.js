'use strict'

angular.module('myApp.lab.controllers',[])
	// .controller('PostController',['$scope','postService',function($scope,postService)
	// {
	// 	$scope.getAllPosts=function()
	// 	{
	// 		return postService.getAll();
	// 	};
	// 	$scope.posts=$scope.getAllPosts();
	// }])
	// .controller('PostDetailsController',['$stateParams','$state','$scope','postService',function($stateParams,$state,$scope,postService)
	// {
	// 	$scope.getPostById=function(id)
	// 	{
	// 		return postService.getPostById(id);
	// 	};
	// 	$scope.closePost=function()
	// 	{
	// 		$state.go('allPosts');
	// 	};
	// 	$scope.singlePost=$scope.getPostById($stateParams.id);
	// }])
.controller('ctrlLab1',function($scope)
{
	$scope.sum = ()=>$scope.dt= $scope.dai * $scope.rong;
});