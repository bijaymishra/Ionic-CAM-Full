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
	 };
});