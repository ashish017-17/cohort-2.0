// - Introduction to Asynchrony in JavaScript.
// - Introduction to `callbacks` and Problems in Callbacks
// - Understanding `promises` - `pending`, `resolved`,          `rejected`
// - How to prevent callback hell using `async` & `await`
// - `setInterval` & `setTimeout` in JavaScript

// js -> single threaded
// ek kaam ek baar main kar paayegi
// synchronous approach
// asynchronous approach


// callback -> ek function jo turant nahi chalega ye chlega jab aapka koi kaam complete hoga


// setTimeout(() => {
    
// }, 2000);

// getDataFromInstagram("userName", function(){

// })

// cb -> function mein pass karte ho

// function abcd(fn){
//     fn(function (fn2) {
//         fn2(function () {
//             console.log("hye");
//         });
//     });
// }

// abcd(function (fn){
//     fn(function (fn3){
//         fn3();
//     });
// });


// function abcd(fn) {
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         });
//     });
// }

// abcd(function (fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("hey");
//         });
//     });
// });


// callbacks
// situation -> github se repository data laao

// getUserDetails(username, cb)
// getAllRepos(userid, cb)
// getRepoDetail(repos[0], cb)

// amitKePassJaao(address, cb)
// dukaanKoDhundho(details, cb)
//samaanLelo(samaanlist, cb)
//gharAaaajaao(address, cb)





// function amitSeDetailsLaao(address, fn){
//     console.log(address)
//     console.log("fetching details...");
//     setTimeout(() => {
//         fn({lat: 30.561005, lon:76.729583});
//     }, 3000);
// }

// amitSeDetailsLaao("indarapuri 231_H Block", function(details){
//     console.log(details);
// })




// gharAaajaao(address, cb)\

// function iceCreamLaao(address, fn){
//     console.log(address);

//     fn("icecream", [0,1,2]);
// }

// iceCreamLaao("Vadilal", function(ice, arr){
//     console.log(ice);
//     console.log(arr);
// })