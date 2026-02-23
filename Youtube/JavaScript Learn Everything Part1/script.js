//var, let, const - line-by-line comparison
//var let const

//declarations and initialization

// var a;      //declare karna 
// var a = 12; //declare and initialize

// let a = 12;

// const discount = 12; //const value cannot be changed

// Scope (global, block, functional)

var a = 123;  //functional scoped

{
    let a = 12;  //block scoped
}

function abcd() {
    if (true) {
        let a = 12; 
    }
}

// global scope can be accessed in any where in code
// function scoped can only access in the function
//block scoped can be access only in the block "{}"

//Reassignment, redeclaration
