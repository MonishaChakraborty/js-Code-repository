const accountId = 112546
let accountemail= "monisha@google.com"
var password= "1212121"
accountCity="Durgapur"

//accountId=2 // not allowed

accountemail = "monisha23@.com"
accountCity="Bangaluru"

let accountstate;
/*
prefer not to use var 
because of issue in block scope and fundamental scope
*/
console.table([accountId,accountemail, accountCity,password,accountstate])