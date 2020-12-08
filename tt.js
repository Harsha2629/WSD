
angular.module('App', []).controller('CrudCtrl', ['$scope',
    function($scope) {
      $scope.fashions = [
          {
            name : "Pastel Bucket Hats",
            designer : "LEONARDO DA VINCI",
            price : "25000",
            editable : false
          },
          {
            name : "THE BURNOUT",
            designer : "JAN VERMEER",
            price : "20000",
            editable : false
          }
        ];
     
     $scope.entity = {}
        
     $scope.edit = function(index){
       $scope.entity = $scope.fashions[index];
       $scope.entity.index = index;
       $scope.entity.editable = true;
     }
        
     $scope.delete = function(index){
       $scope.fashions.splice(index,1);
     }
        
     $scope.save = function(index){
       $scope.fashions[index].editable = false;
       
     }
        
     $scope.add = function(){
       $scope.fashions.push({
          name : "",
        designer : "",
        price : "",
        editable : true
       })
     }
    }
]);