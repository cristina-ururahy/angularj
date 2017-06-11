(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = [ 'MenuDataService', '$stateParams', 'items'];
function ItemsController( MenuDataService, $stateParams, items) {
  var ictrl = this;
  ictrl.items = items.data.menu_items;
  ictrl.category = $stateParams.category;
}

})();
