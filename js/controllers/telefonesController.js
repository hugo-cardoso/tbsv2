// SCRIPT'S PÁGINA DOS APARELHOS
scotchApp.controller('telefonesController', function($scope, $http) {

  $http.get('data/telefones.json')
  .then(function(result){
    $scope.players = result.data;            
  });

});