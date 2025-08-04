// ++++++++++++++++++++ OBJECTS IN JAVASCRIPTS +++++++++=
 // singleton
 // object literals

 const sym = Symbol("check" )
 const jsUser = {
    name: "Aditya",
    [sym]: "check kar rha tha ",
    roll: 24052690,
    cgpa: 8.98,
    location: "bhubaneswar",
    college: "Kalinga institute of industrial technology"
 };
//  console.log( typeof [sym] )// without [this bracket typ is symbol ] && with object

// //Object.freeze(jsUser) // you can not change any things

jsUser.addobj= function(){
   console.log( "Hello js user");
}
jsUser.addobj2= function() {
   console.log( `KIIT deemed to be university ${this.college}`);
}
// console.log( jsUser.addobj());
// console.log( jsUser.addobj2());

// const tinderweb= new Object ()
const tinderweb={}
tinderweb.userid = "@Aditya1234"
tinderweb.name = "Aditya gupta"
tinderweb.isloggedIn = false

// console.log( tinderweb);


// create a object of information

informationweb = {
userId: "@username12345",
email: "username@gmail.com",
 fullname: {
   userfullname: {
      firstName: "Aditya" ,
      middleName: "kumar",
      lastName : "Gupta",

   }
 }
};
// console.log( informationweb);


const obj1= { 1: "ab" , 2: "cd"}
const obj2={ 3: "ef" , 4: "gh"}

const obj3= Object.assign({}, obj1 , obj2)
// console.log( obj3);
// console.log( Object.keys(tinderweb));
// console.log(Object.values(tinderweb));


// to find property does exits on that obj or not ?
//console.log( tinderweb.hasOwnProperty('isloggedIn'));
 
const course ={
   courName: "coursera",
};
const {courName: Cname}= course
console.log( Cname);



