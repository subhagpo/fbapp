angular.module('starter.services', [])
 
.factory('Questions', function() {
  // Some fake testing data
  var questions = [
     {
        Id: 0,
        $value: 'Rate this workshop?',
        Rating: null
     }, 
     {
        Id: 1,
        $value: 'Rate the sessions?',
        Rating: null
     },
     {
        Id: 2,
        $value: 'Rate your overall experience?',
        Rating: 8
     }
  ];
 
  return {
    all: function() {
      return questions;
    }
  };
});
