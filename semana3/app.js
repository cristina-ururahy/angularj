(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      isEmpty: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'nList',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nList = this;

  nList.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(nList.sTerm)
    .then(function (response) {
      nList.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  nList.removeItem = function (itemIndex) {
    nList.found.splice(itemIndex, 1);
  };

  nList.isEmpty = function () {
    return (nList.found != undefined && nList.found.length === 0);
  };
}

MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
function MenuSearchService($q, $http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (result) {
      // process result and only keep items that match
      // Once it gets all the menu items, it should loop through them to pick
      // out the ones whose description matches the searchTerm. Once a list of
      // found items is compiled, it should return that list (wrapped in a
      // promise).
      var deferred = $q.defer();

      var menu_items = result.data.menu_items;
      var foundItems = [];
      for (var i = 0; i < menu_items.length; i++) {
        if (menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menu_items[i]);
        }
      }
      deferred.resolve(foundItems);

      // return processed items
      return deferred.promise;
    });
  };
}

})();
