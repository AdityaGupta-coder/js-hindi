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
 console.log( typeof [sym] )// without [this bracket typ is symbol ] && with object

Object.freeze(jsUser) // you can not change any things






