// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "absolutely not bob";
console.log(customerName);
//
function upperCaseCustomerName() {
    customerName = "BOB";
    return customerName;
}
//
function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}
//
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
}
//
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "michael g. scott";
    return leastFavoriteCustomer;
}
// console.log(changeLeastFavoriteCustomer())