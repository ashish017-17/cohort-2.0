// More Topics in OOPS - [`class expression`, `hoisting`, `inheritence`, `getter & setter`]

// let Animal = class{
//     constructor(){
//         this.name = "Dodo";
//         this.breed = "dog";
//     }
// }

// let an1 = new Animal();

// --inheritence

// agar koi class hai jismein kuch kuch likha hai and aap maante ho ek nayi class usi ka extension hai to aap wo saare features puraani class se borrow kar sakte ho and nayi class mein use kar sakte ho and apne naye feature bhi bana sakte ho

// class Animal{
//     constructor() {
//         this.hands = 2;
//         this.legs = 2;
//     }

//     eat () {}
//     breathe () {}

// }

// class Kekda extends Animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hands = 0;
//     }

//     dance(){}

// }

// let k1 = new Kekda();

// class Marker{}

// class BlueMarker extends Marker{

// }

// ------ getter & setter


// class Animal{
//     constructor(){
//         this._age = 12;
//     }

//     set age(val){
//         if(val<0){
//             console.error("not possible");
//             return;
//         }
//         this._age = val;
//         return this._age;
//     }

//     get age(){
//         return this._age;
//     }
// }

// let a1 = new Animal();
// a1.age = 37
// console.log(a1.age);




// SECTION 1: Objects and OOPS Thinking (Foundation)


// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// let user = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// user.login();

// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a      class.

// let user1 = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// let user2 = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// let user3 = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// let user4 = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// let user5 = {
//     name: 'testName',
//     email: 'name@test.com',
//     login: function () {
//         console.log("logged in");
//     },
// };

// user1.login();
// user2.login();
// user3.login();
// user4.login();
// user5.login();

// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     loggedIn(){
//         console.log("loggedin");
//     }

// }

// let user1 = new User("Ashish", "ashish@test.com");
// let user2 = new User("Harsh", "harsh@test.com");
// let user3 = new User("user", "user@test.com");


// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//     name: "User1",
//     price: 4500,
//     dicountedPrice: function(){
//         return this.price - 200;
//     }
// }

// console.log(product.dicountedPrice());


// 4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }

// let car1 = new Car("BMW", 230);


// 5.	Create two different car objects from the same class and verify that their data is different.

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }

// let car1 = new Car("BMW", 230);
// let car2 = new Car("Audi", 210);


// 6. Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?


// 7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student{
//     constructor(name, rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }

//     intro(){
//         return this.name + " " + this.rollNo;
//     }

// }

// let st1 = new Student("stud", 502);

// 9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// let obj = {
//     sayName: function(){
//         console.log(this);
//     },
//     sayArrowName: ()=>{
//         console.log(this);
//     }
// }

// obj.sayName();
// obj.sayArrowName();


// 10.	Create a User constructor function (do not use class syntax).

// bina class ke bhi constructor function banta hai
// es6 se pahle constructor function aise banta tha

// 11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// function User(){
//     this.name = "user";
//     // this.login = function (){
//     //     console.log("loggedin");
//     // };
// }

// User.prototype.loggedin = function () {
//     console.log("loggedin");
// };

// let us1 = new User();

// 12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.


// function User(name){
//     this.name = name;
// }

// User.prototype.loggedin = function () {
//     console.log("loggedin");
// };

// let us1 = new User("Ashish");
// let us2 = new User("Harsh");


// 13.	Create a function that prints this.name.
// 14.	Create an object that contains a name property.
// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it


// function abcd () {
//     console.log(this.name);
// }

// let obj = {
//     name: "harsh"
// };

// abcd.call(obj);


// 15.	Borrow a method from one object and run it for another object using call.

// let person1 = {
//   name: "Asha",
//   greet(city) {
//     console.log(`Hi, I’m ${this.name} from ${city}.`);
//   }
// };

// let person2 = {
//   name: "Rahul"
// };

// // Borrow person1's method for person2
// person1.greet.call(person2, "Mumbai");







// 1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 2.	Add one more method to the same object that increases the price by 10 percent.
// 3.	Now imagine you need 10 laptops with same structure but different data.


// let laptop = {
//     brand: 'Asus',
//     price: 45000,

//     start(){
//         console.log("Laptop started");
//     },

//     increasePrice(){
//         this.price = this.price * 1.10;
//     },
// };

// laptop.start();
// laptop.increasePrice();

// console.log(laptop.price);

// 3.	Now imagine you need 10 laptops with same structure but different data.

// class Laptop{
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }

//     start(){
//         console.log("Laptop started");
//     };

//     increasePrice(){
//         this.price = this.price * 1.10;
//     };
// };

// let laptop1 = new Laptop ("Hp", 25000);
// let laptop2 = new Laptop ("Dell", 56900);
// let laptop3 = new Laptop ("MSI", 90000);
// let laptop4 = new Laptop ("Asus", 95000);
// let laptop5 = new Laptop ("Alienware", 98000);
// let laptop6 = new Laptop ("Samsung", 67900);
// let laptop7 = new Laptop ("Acer", 75900);
// let laptop8 = new Laptop ("Apple", 69900);
// let laptop9 = new Laptop ("Lenovo", 50900);
// let laptop10 = new Laptop ("Chromebook", 10900);



// 4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.

// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     };

//     showDetails(){
//         console.log(this.name, this.salary);
//     };

    
// }

// let e1 = new Employee("Harsh", 257800);