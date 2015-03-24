angular.module('starter.controllers', []);


app.controller('SignInCtrl', function($scope, $state,myApp,geolocation) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tab.dash');
  };
  $scope.coords = geolocation.getLocation().then(function(data){
		 myApp.longitude = -75.1019942;// data.coords.latitude;
			myApp.latitude = 40.6455638;//data.coords.longitude; 
	 	
	    });
});

