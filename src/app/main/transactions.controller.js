angular.module("angdev").controller('TransactionsCtrl', function($scope) {
	
	this.transactions = [
    { amount: 400.00, date: "02/03/2017", description: "Magazine subscription" , action: "Purchase"},
    { amount: 180.00, date: "03/03/2017", description: "Make journal", action: "Order" }
 ]
 
 this.resetTransaction = function() {
    this.newTransaction = {
      amount: 0.0,
      date: "05/08/2015",
      description: null
    }
  }
  this.resetTransaction();
 
 this.addTransaction = function() {
  this.transactions.push(this.newTransaction);
  this.resetTransaction();
}
 
});