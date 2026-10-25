// promises
// async await 
// settimeout and setinterval

// promises -> ek kaam jaake karo
// pending state
// hojaaega -> resolved
// nahi hoga -> reject

// facebook -> mera data
// pending
// resolve
// reject

// const prm = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })

// prm
//     .then(function(){
//         console.log("resolve");
//     })
//     .catch(function(){
//         console.log("rejected");
        
//     })


// fetch se kisi bhi url par jaa sakte hai
// fetch ka data readable nahi hota 
// usey json banaake redable karte hai
// iske baad jo data milta hai wo readable hota hai



// fetch(`https://randomuser.me/api/`)

//     .then (function(notReadableData){
//         return notReadableData.json();
//     })

//     .then(function(asliData){
//         console.log(asliData.results[0].name.first);
//     })

// Another way to return

// fetch(`https://randomuser.me/api/`)

//     .then((raw) => raw.json())
//     .then((data) => {
//         console.log(data.results[0].name.first);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// async await

// let prn = new Promise((resolve, reject) =>{

//         setTimeout(() => {
//             resolve();
//         }, 3000);
// });

// async function abcd() {
    
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();

//     console.log(data);

// }

// abcd();





// function getNum(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             console.log(num);
//             if (num < 5){
//                 resolve(true);
//             } else reject(false);     
//         }, 2000);
//     });
// }


// async function abcd(){
//     let v = await getNum();
//     console.log(v);
// }

// abcd();