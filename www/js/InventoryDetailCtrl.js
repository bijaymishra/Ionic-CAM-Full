angular.module('starter.controllers', []);
app.controller('InventoryDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});