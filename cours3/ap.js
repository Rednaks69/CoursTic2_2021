// ####################################################################################################
//  * Cours Web
//  * made by : Azer Hasnaoui
//  * year : 2020-2021
//  * classroom : TIC-2
// ####################################################################################################
// #                     -function-                                                                   #
// ####################################################################################################
//* function declaration

function affiche(string){
    console.log(string);
    // return 0 ;
}

affiche("hello")

// function manipulations 
var y = function temperature(){
    var x = 30         // local variable
    return x
}
y();

//* Scope 
// Scope determines the accessibility (visibility) of variables.
// In JavaScript there are two types of scope:
//          Local scope
//          Global scope

// exp 1
function myfunction(){
    var name = "momo"
    // you can use name here 
}

// you can not use name here 
// console.log(name);

// exp 2
var fruit = "strawberry"
// you can use fruit here 
function fruitName() {
    // you can use fruit here 
}


//* hoisting : -1 Hoisting is JavaScript's default behavior of moving declarations to the top.
//            -2  problem with var Closures
//            -3  solve the problem with ES6 and the creation let and const

//? -2 problem with var scope
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
 
//? -3  let and const 
let k = 5 ;
for( k = 10; k <10 ; k++){

}
// Here k is 5

const temp = function temperature(){
      console.log("temperature function");         // local variable
}
temp();

//* anonymous function 
const show = function(){
    console.log("show with anonymous function");
}
show();


//* arrow function 
//exp1
const sayHello= ()=> console.log("hello from sayHello arrow function");
sayHello();
//exp2
const adder= (a,b)=>  a + b ; 
console.log(adder(5,3));
