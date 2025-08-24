// ++++++++++++++++++++++  ARRAY_JAVASCRIPT ++++++++++++++++++++
 const arr = [0,2,3,4,5,5];
 const myHeroes = ['Aditya', 'saktiman', 'father', 'mother'];
console.log((myHeroes))
myHeroes.pop()
console.log((myHeroes))
myHeroes.pop()
console.log((myHeroes))
arr.unshift(8)// add element in front of array
arr.shift() //shift one element from start
console.log("original array type ->>",typeof(arr))
const newArr= arr.join()
console.log("After join change type of array  ->>",typeof(newArr))

// ->>> slice (does not affect the original array and less than range ) 

// ->>>  splice (affect the original array upto range )

const myarr = [1,2,3,4,5,6,7];

const myn1 = myarr.slice(1, 4 )

console.log( "this is original ", myarr)

console.log( "this slice ->", myn1)

console.log( "this is before  splice ", myarr)

const myn2 = myarr.splice(1, 4 )

console.log( "this is after splice of original arr ", myarr)

console.log( "this splice->>", myn2)

//for concat of two or more array  use this --->>>
const myHeroes2 = ['Aditya', 'saktiman', 'father', 'mother'];
const name_array = ['aditya', 'ganga','suraj','mittal','asha']

const add_two_arr= [...myHeroes , ...name_array]

console.log(add_two_arr);

const another_array = [1,2,3,[2,3,4,11,12],[100,111,112,[19,17,29,31,59]]]

const simple_array = another_array.flat(Infinity) // transform to simple array

console.log( simple_array);

console.log(Array.isArray( "ADITYA GUPTA")) // it is not array

console.log( Array.from ("ADITYA GUPTA"))

let score1 = 94
let score2= 86
let score3 = 99
// it create array of this scores;
console.log( Array.of( score1, score2, score3));



