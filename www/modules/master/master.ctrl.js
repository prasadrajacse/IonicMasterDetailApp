(function() {

var appController = angular.module('md.appCtrls');

appController.controller('masterCtrl', ['$scope','masterFactory',masterCtrlFn]);

function masterCtrlFn($scope,masterFactory) {
  $scope.playlists = masterFactory.getSampleArrayData();
}


})()