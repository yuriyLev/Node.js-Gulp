angular.module('angdev').controller('NavigationCtrl', function(TransactionsStore) {
  this.transactions_store = TransactionsStore;
});