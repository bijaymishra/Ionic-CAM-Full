angular.module('starter.services', []);

app.factory('myApp', function() {
	 return {	
	appURL : 'https://mobileapps-stg.cashamerica.com/api/V1/', //stage
	appKey : '23B5D06B-DC43-42A4-84E2-61A531736155',
	cat_id : "",
	isEnv : "",
	catname : "",
	pro_search : "",
	loadproduct : true,
	latitude : '0',
    longitude : '0',
    inventoryDtls : '',	
    productpage :'1',
    search_term : ""
	 };
});

app.factory('PersonService', function($http,myApp){
	var items = [];
	return {
			GetStoreFeed: function(){
			return $http.get(myApp.appURL+"Stores?p="+myApp.productpage+"&s=10&lat="+myApp.latitude+"&lng="+myApp.longitude+"&r=500&t="+myApp.search_term+"&key="+myApp.appKey).then(function(response){
				items = response.data.results;
					return items;
					
				});
		
			},
		GetNewStoreItems: function(){
			myApp.productpage++;
			return $http.get(myApp.appURL+"Stores?p="+myApp.productpage+"&s=10&lat="+myApp.latitude+"&lng="+myApp.longitude+"&r=500&t="+myApp.search_term+"&key="+myApp.appKey).then(function(response){
				items = response.data.results;
					return items;
			});
		}
	}
});