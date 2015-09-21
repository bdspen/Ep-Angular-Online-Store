onlineStore.controller('StoreCtrl', function StoreCtrl($scope){
    $scope.name = "My Awesome Store";
    $scope.items = [
                    {name: "item1 name", price: 10},
                    {name: "item2 name", price: 12},
                    {name: "item4 name", price: 15},
                    {name: "item5 name", price: 20}
                    ];
    $scope.addItem = function(){

        $scope.items.push({name: $scope.itemName });
        $scope.itemName = null;
    };
    $scope.deleteItem = function() {

    };



});
