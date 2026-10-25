// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.

// - Handle API request failures (for example, invalid city name) using `try/catch`.

// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.

// - Show user-friendly error messages for network errors, invalid input, or API errors.

// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.




// function getWeather(city){

//     let apikey = `1ca8450665cc803a2498aaeb825f34ef`;

//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//     ).then(raw => raw.json())
//     .then(result => {
//         console.log(result.main.humidity);
//     });
// }

// getWeather("Bhopal");



// async function getWeather(city) {
    
//     try {
//         let apikey = `1ca8450665cc803a2498aaeb825f34ef`;

//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//          );

//         if (!raw.ok) {
//             throw new Error("City not found or Something Went Wrong.");
//         }

//         let real = await raw.json();

//         if(real.main.temp < 0){
//             console.warn(`Too cold out there... ${real.main.temp}°C`);
            
//         }
//         else if( real.main.temp > 32 ){
//             console.warn(`Too hot out there... ${real.main.temp}°C`);
//         }

//         else{
//             console.log(real.main.temp);
//         }


//     } catch (err) {
//         console.log(err.message);
//     }

// }

// getWeather("dubai");



//----------------------------------------------------------------------



// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.





const users = [
    "alex.morgan27@example.com",
    "riya.sharma84@example.com",
    "dev.kapoor19@example.com",
    "sam.taylor56@example.com",
    "arjun.verma92@example.com"
]

function sendEmail(email){
    return new Promise ((resolve, reject) => {
        let time = Math.floor(Math.random() *5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if(probability <= 5) resolve("Email successfully sent...");
            else reject("Email not sent...")
        }, time *1000);

    });
}


async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
        return sendEmail(email)
            .then(function(data){
             return data
            })
            .catch(function (err){
            return err;
            });
    });

    let ans = await Promise.all(allresponses)
    
    ans.forEach(function(status){
        console.log(status);
    })
}

sendEmails(users);
    
