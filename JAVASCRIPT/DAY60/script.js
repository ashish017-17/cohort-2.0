// - Introduction to Asynchrony in JavaScript.
// - Introduction to `callbacks` and Problems in Callbacks
// - Understanding `promises` - `pending`, `resolved`,          `rejected`
// - How to prevent callback hell using `async` & `await`
// - `setInterval` & `setTimeout` in JavaScript



// cb - ek function hota hai jo turant nahi chalta jab kaam ho jaaye tab chalta hai


// function instagramParJaaoDataLaao(username, cb){
//     //logic
//     //cb
//     setTimeout(() => {
//         cb({id: 1, username: "user_17", year: 2004});
//     }, 2000);
    
// }

// instagramParJaaoDataLaao("user_17", function(data){
//     console.log(data);
// });


// function afterDelay(time, cb){
//     setTimeout(() => {
//         cb();
//     }, time);
// }

// afterDelay(3000, function(){
//     console.log("callbackExecuted")
// })


// function getUser(username, cb){

//     console.log("getting user details...");

//     setTimeout(() => {
//         cb({id: 1, username: "user_17"})
//     }, 1000);
// }

// function getUserPosts(id, cb) {

//     console.log("getting user posts...");
    
//     setTimeout(() => {
        
//         cb(["hello", "good day", "new post"]);

//     }, 2000);
// }

// getUser("harsh", function(data){

//     getUserPosts(data.id, function(allposts){

//         console.log(data.username, allposts);

//     });
// });





// function getInstaData(username, cb){

//     console.log("getting user data...");
    
//     setTimeout(() => {
//         cb({uniqueId: 928901, uniqueName: "user_985"})
//     }, 3000);
// }


// function getMetaData(uniqueName, cb){

//     setTimeout(() => {
//         cb(["hello", "user" ]);
//     }, 4000);

// }

// getInstaData("user", function(data){
    
//     getMetaData(data.uniqueName, function(images){
//         console.log(images);
//     });
//     console.log(data);
// })





function loginUser(username, cb){
    console.log("logging in user...");
    setTimeout(() => {
        cb({id: 1212, username:"harsh"})
    }, 1000);
}

function fetchPermissions(id, cb){
    console.log("fetching permission...");
    setTimeout(() => {
        cb(["read","write","delete"])
    }, 2000);
}

function loadDashBoard(permission, cb){
    console.log("loading dashboard");
    setTimeout(() => {
        cb();
    }, 2000);
}

loginUser("guestUser_7854", function(userdata){
    fetchPermissions(userdata.id, function(permission){
        loadDashBoard(permission, function(){
            console.log("✅Dashboard Loaded");
        });
    });
});