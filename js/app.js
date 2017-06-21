(function() {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var controller = this;

    controller.BuyItems = ShoppingListCheckOffService.getToBuyItems();

    controller.doBuy = function(index) {
      ShoppingListCheckOffService.doBuy(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "Grapes", quantity: 50 },
      { name: "Banana", quantity: 5 },
      { name: "Mango", quantity: 10 },
      { name: "Peach", quantity: 6 },
      { name: "Papaya", quantity: 4 },
      { name: "Avocado", quantity: 1 }]
    var boughtItems = [];

    this.doBuy = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    }

    this.getToBuyItems = function() {
      return toBuyItems;
    }

    this.getBoughtItems = function() {
      return boughtItems;
    }
  }

}
)();
