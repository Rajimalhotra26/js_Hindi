const accountId= 123;
let accountEmail = "asd@gmail.com"
var accountPassword = '1234';
accountCity= "Jaipur";

// accountId= 2;

console.log(accountId);
accountEmail = "mail.com"
accountPassword = '5555';
accountCity= "goa";
let accountState;

/* Prefer Not to use var as there is no scope limit of this variable
 */


console.table([accountEmail,accountPassword,accountCity, accountState])
