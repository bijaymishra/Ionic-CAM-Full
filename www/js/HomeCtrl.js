angular.module('starter.controllers', ['ionic']);
app.controller('HomeCtrl', function($scope,myApp,$http,$log,$ionicSlideBoxDelegate) {
	
	
	
	$http.get(myApp.appURL+"offers/rotator?key="+myApp.appKey).success(function(offer) {
		$scope.offers = offer;
		$log.info($scope.offers);
		
	});
	$ionicSlideBoxDelegate.update();
	
});