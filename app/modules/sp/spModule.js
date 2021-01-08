'use strict'

angular.module('myApp.sp',['ui.router','myApp.sp.controllers','myApp.sp.directives','myApp.sp.services','myApp.sp.filters']);
angular.module('myApp.sp').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider)
{

	$stateProvider.state('sanpham',
	{
		url:'/sanpham',
		templateUrl: 'modules/sp/views/sanpham.html',
		controller:'ctrlsp'
	});

	$stateProvider.state('chitiet',
	{
		url:'/chitiet/:id',
		templateUrl: 'modules/sp/views/chitiet.html',
		controller:'ctrlchitiet'
	});
	$stateProvider.state('giohang',
	{
		url:'/giohang/',
		templateUrl: 'modules/sp/views/giohang.html',
		controller:'ctrlgiohang'
	});
	$stateProvider.state('dangky',{
		url: '/dangky',
		templateUrl: 'modules/sp/views/dangky.html',
		controller:'ctrlDangky'
	});
	$stateProvider.state('trangchu',{
		url: '/',
		templateUrl: 'modules/sp/views/trangchu.html'
	});
	$stateProvider.state('cauchuyenthuonghieu',{
		url: '/cauchuyenthuonghieu',
		templateUrl: 'modules/sp/views/thuonghieu.html'
	});

}]);