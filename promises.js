const promiseOne = new Promise( function(resolve , reject){
        setTimeout(function(){
                console.log( "Hey Aditya , Asyn is start");
                resolve();
        } , 1000);
})
promiseOne.then(function(){
    console.log( "Congrats Aditya , Promise  resolved succesfully");
})

new Promise( function( resolve , reject){
    setTimeout(function(){
        console.log("Hey Aditya , again asyn is started");
        resolve(['hello ', 2690 , 'student', 'getofferedformgoogle']);
    })
}).then(function(data){
    console.log( data);
})

const promiseThird = new Promise( function ( resolve, reject){
    setTimeout ( function (){
        let error = false;
        if( !error){
                resolve( { username : "@Adityagupta123", password : "xyz"})
        }else {
            reject ("Something went wrong");
        }
    })
})
 promiseThird.then( ( user)=>{
    console.log( user);
    return user.password;
 })
 .then ( ( user)=>{
    console.log('user password : ', user);
 })
 .catch((error)=>{
    console.log( error);
 })

promiseThird.then((user)=>{
console.log (user);
}).catch((user)=>{
    console.log( user);
})

const promisefour = new Promise( function(resolve , reject){
    setTimeout( function(){
        //console.log( );
        let error = true;
        if( !error){
             resolve("Hey there !");
        }else {
            reject( " Error 404 ");
        }
    })
})

async function comsumepromisefour(){
        
   try{ 
    const response = await promisefour
    console.log( response);
    }
    // use catch for handle when error occur
    catch(error){
        console.log( error);
    }

}
comsumepromisefour();


// Custom Promise
const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;  // change to true to test rejection
        if (!error) {
            resolve("✅ Custom Promise Resolved: Hey Aditya, what’s up!");
        } else {
            reject("❌ Custom Promise Rejected: Error 404");
        }
    }, 2000); // 2 sec delay
});

// Async function that consumes the promise + fetch
async function comsumepromisefive() {
    try {
        // First wait for custom promise
        const msg = await promisefive;
        console.log(msg);

        // Then fetch weather data
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=20.2961&longitude=85.8245&current_weather=true");
        let data = await response.json();

        console.log("🌡️ Bhubaneswar Temperature:", data.current_weather.temperature, "°C");
        console.log("💨 Wind Speed:", data.current_weather.windspeed, "km/h");

    } catch (error) {
        console.log(error);
    }
}
comsumepromisefive();
