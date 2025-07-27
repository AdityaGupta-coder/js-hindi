let num = new Number(200.189)
console.log(num.toString());
console.log( num.toFixed(1));
const othernum = 1000000;
console.log(othernum.toLocaleString('en-IN')); // for indian style of money representation
// +++++++++++++++++++++___Maths___+++++++++++++++++++
console.log(Math);
console.log(Math.abs(-90));
console.log( Math.round(8.98));
console.log( Math.random()); // getting random number like 0.342536365
console.log(Math.floor((Math.random() * 10)));
const min = 1;
const max= 6;
console.log(Math.floor( (Math.random() * (max- min + 1)) + min));