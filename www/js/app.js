//app.js


(function() {
  
  var app = angular.module('md', [
    'ionic',
    'md.appRouter',
    'md.appCtrls',
    'md.appServices'
  ]);

var appRouter= angular.module('md.appRouter', []);

var appControllers= angular.module('md.appCtrls', []);

var appServices= angular.module('md.appServices', []);


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
  });
})


})()


