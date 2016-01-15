angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {
 
    //Opens the login modal as soon as the controller initializes
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modallogin) {
        $scope.modallogin = modallogin;
        $scope.modallogin.show();
    });

    // Authenticate user
    $scope.login = function() {
        var auth = {
            displayName: 'Subhag Oak',
            email: 'oaks007@hotmail.com',
            profileImageURL: 'img/12.png'
        }
    
        $scope.authData = auth;
    }
  
    $scope.savefbinfo  = function() {
        $scope.modallogin.hide();
    }
})

.controller('FeedbackCtrl', function($scope, $window, Questions) {
    $scope.questions = Questions.all();
    
    var X;
    var Y;
    var Z;
    $scope.dynamic = 5;
    $scope.max = 10;
    $scope.prev = 0;
    
    navigator.accelerometer.watchAcceleration(onSuccess, onError, {frequency: 1000});
	
	 function onSuccess(acceleration) {
	        X = acceleration.x;
	        Y = acceleration.y;
	        Z = acceleration.z;
	
	        if(X < -3) {
	            $scope.dynamic += 1;
	        } 
	        
	        if (X > 3) {
	            $scope.dynamic -= 1;
	        } 
	
	        if($scope.dynamic > 10) {
	            $scope.dynamic = 10;
	        } else if ($scope.dynamic < 0 || $scope.dynamic == 0) {
	            $scope.dynamic = 1;
	        }
	        
	        var type = "info";
	
	        if ($scope.dynamic < 3) {
	            type = 'danger';
	        } else if ($scope.dynamic > 7) {
	            type = 'success';
	        }
	        $scope.type = type;
	        $scope.$apply();
	    }
	
	    function onError() {
	        console.log('accelerometer not working');
    }
    
    $scope.submitSurvey = function() {
         $scope.surveySubmitted = true;
    }
})
