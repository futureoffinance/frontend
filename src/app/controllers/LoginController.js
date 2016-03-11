(function() {
  'use strict';

  angular.module('frontend')
    .controller('LoginController', ['$location', function($location) {
      var vm = this;

      vm.login = function(accountId) {
        $location.path('/home/' + accountId);
      };
    }]);

})();
