(function() {
  'use strict';

  angular
    .module('angdev')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
