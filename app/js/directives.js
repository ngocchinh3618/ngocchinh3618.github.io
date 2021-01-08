'use strict'

angular.module('myApp.directives',[]);

angular.module('myApp.directives').directive('appVersion',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
});