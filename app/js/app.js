'use strict'

angular.module('myApp',['ui.router','myApp.lab','myApp.sp','myApp.controllers','myApp.directives','myApp.filters','myApp.services']);
angular.module('myApp').run(['$state', function($state){$state.go('trangchu'); }]);
//angular.module('spBlogger').value('version','V1.0');