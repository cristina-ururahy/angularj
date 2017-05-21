(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.checkOffItem(itemIndex);
  };

  toBuy.isEmpty = function () {
    return (toBuy.items.length == 0);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  alreadyBought.isEmpty = function () {
    return (alreadyBought.items.length == 0);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    { name: "Cookies", quantity: 10 },
    { name: "Milk", quantity: 2 },
    { name: "Donuts", quantity: 200 },
    { name: "Chocolate", quantity: 5 },
    { name: "Peanut Butter", quantity: 2 },
    { name: "Pepto Bismol", quantity: 2 }
  ];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  // List of already bought items
  var boughtItems = [];

  service.getAlreadyBoughtItems = function () {
    return boughtItems;
  };

  service.checkOffItem = function (itemIdex) {
    var item = toBuyItems[itemIdex];
    toBuyItems.splice(itemIdex, 1);
    boughtItems.push(item);
  };
}

})();
