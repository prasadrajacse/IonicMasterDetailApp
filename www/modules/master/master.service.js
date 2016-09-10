
(function () {
  "use strict";

var app = angular.module('md.appServices');
    
app.factory('masterFactory', function(){
    return {
        getSampleArrayData: getSampleArrayDataFn 
    }

  function getSampleArrayDataFn(){

  var sampleArray =  [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

     return sampleArray;
   }

});

})();