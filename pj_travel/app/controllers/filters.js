'use strict'

angular.module('myApp.filters',[])
.filter('myLimitTo', function() {
    return function(input, limit, begin) {
      if(begin >= input.length) begin = 0
      return input.slice(begin, begin + limit);
    };
});