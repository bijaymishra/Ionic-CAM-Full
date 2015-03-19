angular.module('starter.controllers', []);
app.controller('HomeCtrl', function($scope,myApp,$http) {
	
	
	var DashBoardOffer = {
			 method: 'GET',
			 url: myApp.appURL+"offers/rotator?key="+myApp.appKey,
			 headers: {
			   'Content-Type': 'json'
			 }
	};
	
	$http(DashBoardOffer).success(function(){
		
		$scope.offers = DashBoardOffer;
		}).error(function(){alert("cors")});
	
});