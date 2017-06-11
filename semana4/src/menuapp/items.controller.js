(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = [ 'MenuDataService', 'items'];
function ItemsController( MenuDataService, items) {
  var ictrl = this;
  ictrl.items = items.data.menu_items;
  ictrl.category = items.data.category;
}

})();
