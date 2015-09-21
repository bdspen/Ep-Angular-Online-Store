onlineStore.controller('StoreCtrl', function StoreCtrl($scope){
    $scope.name = "My Awesome Store";
    $scope.cartCost = 0;
    $scope.itemsInCart= [];

    $scope.items = [
                    {name: "item1", price: 10},
                    {name: "item2", price: 12},
                    {name: "item4", price: 15},
                    {name: "item5", price: 20}
                    ];
    $scope.addItemToStore = function(){

        $scope.items.push({name: $scope.itemName, price: $scope.itemPrice });
        $scope.itemName = null;
        $scope.itemPrice = null;
    };
    $scope.deleteItem = function(item) {

        var index = $scope.items.indexOf(item);
        $scope.items.splice(index, 1);
    };

//cart specific methods
    $scope.addToCart = function(item){

        $scope.itemsInCart.push(item);
        console.log("added to cart!");
    }

    $scope.calculateOrderPrice = function(){

    }
    $scope.calculateShipping = function(){

    }

    $scope.calculateDiscount = function(price){

    }

    $scope.deleteFromCart = function(item){

        var index = $scope.items.indexOf(item);
        $scope.itemsInCart.splice(index, 1);s
    }
});
