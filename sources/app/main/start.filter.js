/**
 * StartFrom Filter
 *
 *  @desc Detects which part of items to show on paginated list.
 *
 *  @param {Array} list - list array of items
 *  @param {Number} start - first item to show on current page
 *
 *  @return {Array} - list of items per current page
 *
 */
(function () {

  'use strict';

  angular
    .module('app')
    .filter('startFrom', function () {
      return function(list, start) {
        start = +start;
        return list.slice(start);
      };
    });

})();
