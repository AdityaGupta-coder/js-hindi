// const { use } = require("react");

// // object literals 
// const User = {
//     username: "Aditya",
//     userId : "@adityakumargupta0555",
//     password: "xyz",
//     singedIn : true,
//     countLogin: 8,
//     getuserDetails: function(){
//        // console.log ( this.userId);
//       // console.log(`countLogin : ${this.countLogin}`);
//       //console.log( this)
//     }
// };
// function user(username , userId , countLogin){
// this.username = username;
// this.userId = userId;
// this.countLogin = countLogin
// }
// //console.log( User.getuserDetails())
// const userOne = new user( "suer" ,"hello_world", 8);
// console.log(userOne.constructor);

                    // +++++++++++++ Prototype in javaScript ++++++++++++++++==
function ans (num , times){
  return num * times;
}
ans.power = 2;
// console.log( ans( 10 , 11)); // Expected output : num * times (110)
// console.log( ans.power); // Expected output : 2
// console.log( ans.prototype);// Expected output: {}
 
// ______________________________ Use of New keyword +++++++++++++++++++++++
function createInfo( product , price){
  this.product = product;
  this.price = price;
}
// const cl = new createInfo(10 ,100);

createInfo.prototype.increment = function(){
  this.price++;
}
createInfo.prototype.printThis = function(){
  console.log( `this is output : ${this.product}`);
}
const chai = new createInfo(10 , 100)
// const t =  createInfo(20 , 200)
//t.printThis(); // error: Cannot read properties of undefined (reading 'printThis')
// after use new 
const t = new createInfo(20 , 200)
t.printThis(); // Expected output : 20