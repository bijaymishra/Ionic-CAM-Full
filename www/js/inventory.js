angular.module('starter.controllers', []);
app.controller('InventoryCtrl', function($scope,$rootScope,$state, $http, myApp,PersonService) {
	
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
	
	$scope.fnSearchProduct = function(catid,isEnv){
		
		myApp.cat_id = catid;
		myApp.isEnv = isEnv;
		//myApp.catname = catname.replace("_","'");
		//myApp.pro_search = catname;
		myApp.loadproduct = true;
		myApp.productpage = 1;
		
		search_term = "";
		
		
		$http.get(myApp.appURL+"Items?c="+myApp.cat_id+"&p="+myApp.productpage+"&s=10&lat="+myApp.latitude+"&lng="+myApp.longitude+"&r=500&t="+search_term+"&key="+myApp.appKey).success(
				function(data,status) {
				
					$rootScope.inventoryDtls = data;
					$state.go('tab.inventory-details');
					
				});
		
	 }; 
	 
	 
	 
	 /* Store List Generated.*/
	 
	 $rootScope.items = [];
		
	  PersonService.GetStoreFeed().then(function(items){
		  $rootScope.items = items;
		  console.log($rootScope.items);
	  });
	  
	   $scope.loadMore = function(){
	    PersonService.GetNewStoreItems().then(function(items) {
	    	$rootScope.items = $scope.items.concat(items);
		  
	      $scope.$broadcast('scroll.infiniteScrollComplete');
	    });
	  };
	
});