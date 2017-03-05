angular.module("angdev").controller('TransactionsCtrl', function($scope, TransactionsStore) {
	this.transactions = TransactionsStore.transactions;

 this.addTransaction = function() {
  this.transactions.push(this.newTransaction);
  this.resetTransaction();
}
	
	 this.resetTransaction = function() {
    this.newTransaction = {
      amount: 0.0,
      date: "05/08/2015",
      description: null
    }
  }
  this.resetTransaction();
 
 
});