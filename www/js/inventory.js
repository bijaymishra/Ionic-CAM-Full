angular.module('starter.controllers', ['geolocation']);
app.controller('InventoryCtrl', function($scope, $http, myApp, geolocation) {
	$http.get(myApp.appURL + "categories?key=" + myApp.appKey).success(
			function(stores) {
				$scope.store = stores;
			});
	
	$scope.toggleGroup = function(store) {
		if ($scope.isGroupShown(store)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = store;
		}
	};
	$scope.isGroupShown = function(store) {
		return $scope.shownGroup === store;
		
	};
	
	$scope.fnSearchProduct = function(){
		 
		 alert(1);
	 }; 
	 
	 $scope.coords = geolocation.getLocation().then(function(data){
	      return {lat:data.coords.latitude, long:data.coords.longitude};
	    });
	 
});