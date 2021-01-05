'use strict'
angular.module("myApp",["ui.router","myApp.controllers","myApp.filters","myApp.services","myApp.routers"])

angular.module('myApp').run(['$state', function($state){$state.go('homepage'); }]);
//angular.module('spBlogger').value('version','V1.0');