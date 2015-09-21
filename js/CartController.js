onlineStore.controller('CartCtrl', function($scope){

    $scope.cost = 0;
    $scope.itemsInCart= [];

    $scope.addToCart = function(){
        $scope.itemsInCart.push({name: $scope.itemName });
        console.log("added to cart!");
        $scope.itemName = null;
    }

    $scope.calculateOrderPrice = function(){

    }
    $scope.calculateShipping = function(){

    }

    $scope.calculateDiscount = function(price){

    }

    $scope.deleteFromCart = function(item){

    }

});
