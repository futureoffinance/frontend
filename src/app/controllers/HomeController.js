(function() {
  'use strict';

  angular.module('frontend')
    .controller('HomeController', ['$scope', '$routeParams', function($scope, $routeParams) {
      var vm = this;

      // Reset the account ID in MainCtrl
      $scope.$parent.MainCtrl.accountId = parseInt($routeParams.accountId, 10);
    }]);

})();
