// var let const
// console... prompt alert
//strings kya hoti hai
//slice template-strings (template literal ``) split replace includes
//statements expressions

var a = 12; //oldest one
let b = 13; //always use let
const discount = 100;

//console.log
//console.info
//console.warn
//console.error
//console.table

console.log("hello");
console.info("hello guys!");
//kuchh kuchh browsers bas console.info ko thode alag tareeke se show karte hai unke aage ek i sign aajata hai.
console.warn("hello");
console.error("hello");
console.table({name: "ashish"});


//prompt alert
let namee = prompt("name?");
console.log(namee);

//alert
alert("hello everyone!");

//strings can be written in ""
"harsh"

// `` template string

"harsh 2+2";                                    // harsh 2+2
"harsh "+2+2;                                   // harsh 22
"harsh "+(2+2);                                 // harsh 4
`harsh ${2+2}`;                                 // harsh 4
`I am ${12/4}`;                                 // I am 3 

// split
"harsh".split();                                // ['harsh']
"harsh".split('');                              // (5) ['h','a','r','s','h']
"harsh sharma".split(' ');                      // (2) ['harsh', 'sharma']

// replace 
"harsh bahi kaise ho".replace ('h','g');        // 'garsh bahi kaise ho'
"harsh bahi kaise ho".replaceAll ('h','g');     // 'garsg bgai kaise go'

// includes
"harsh".includes('h')                           // true
"harsh".includes('i')                           // false

//statements 
//ek aisa code jo fixed answer dede wo statement
//ek complete line ka code jiske last mein ; ho
var a = 12;

// expressions
//code jo value deta hai
12+13