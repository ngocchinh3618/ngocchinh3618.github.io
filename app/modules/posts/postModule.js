'use strict'

angular.module('myApp.lab',['ui.router','myApp.lab.controllers','myApp.lab.directives','myApp.lab.services','myApp.lab.filters']);
angular.module('myApp.lab').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider)
{
	$stateProvider.state('lab1',
	{
		url:'/lab1',
		templateUrl: 'modules/posts/views/lab1.html',
		controller: 'ctrlLab1'
	});
}]);