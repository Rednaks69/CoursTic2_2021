// ####################################################################################################
//  * Cours Web
//  * made by : Azer Hasnaoui
//  * year : 2020-2021
//  * classroom : TIC-2
// ####################################################################################################
// #                     -varibles-                                                                   #
// ####################################################################################################
// * -1- numbers
// numbers base 10 
var x = 10; 
console.log("la valeur de X est :", x);
console.log(typeof(x));
// numbers base 16
var hexa = 0xff 
console.log("la valeur de hexa est :",hexa);
console.log("le type de hexa est :",typeof(hexa));
// numbers base 8 
var octal = 0375
console.log("la valeur de octal est :",octal);
console.log("le type de octal est :",typeof(octal));
// floating-point
// [degits][.degits][E|e][+|-][degits]
var floatingPoint = 5.2e+10
var floatingPoint_2 = 4e+3
var floatingPoint_3 = 4.3
console.log("la valeur de floatinPoint est :",floatingPoint);
console.log("la valeur de floatinPoint_2 est :",floatingPoint_2);
console.log("la valeur de floatinPoint_3 est :",floatingPoint_3);
// sinus x 
sinX=Math.sin(x)
console.log("la valeur de sinX est :", sinX);
// square 
square_value = Math.sqrt(16)
console.log("la valeur de square_value est :", square_value);

// * -2-  string
// string declaration
var b = 'hi'
var a = "today"
console.log(typeof(a));
c = b + a 
console.log(c);
// Accessing 
console.log(c[0]);
console.log(c[2]);
console.log(typeof(c[0]));
// count 
console.log("the size of c is ", c.length);
console.log("the size of a is ",a.length);
// access Operations  
// charAt(index)
var lastChar = a.charAt(a.length-1)
console.log("la valeur de lastChar est :", lastChar);
//substring(star, end) the end not inluded
subString_1 = c.substring(1,4)
console.log("la valeur de subString_1 est :", subString_1);
//slice(star, end) the end not inluded
subString_2= c.slice(1,6)
console.log("la valeur de subString_2",subString_2);
//split([spliter])
var char_2 = "hello agin"
subString_3 = char_2.split(" ");
console.log("subString_3", subString_3);
console.log(typeof(subString_3));
console.log(typeof(subString_3[0]));
// Occurence 
console.log(char_2.indexOf("a"));

// Convertion numbers to string 
// String()
 var stringVriable = String(23)
 console.log(stringVriable, " i" ,typeof(stringVriable));
// toString
var stringVriable_2 = x.toString()
console.log(stringVriable_2);
console.log(typeof(stringVriable_2));
// Convertion String to numbers
// Number()
var xString = "23"
var xInt = Number(xString)
console.log(xInt);
//parseInt() and parseFloat()
console.log(parseInt("23 hello"));
console.log(parseFloat("12.4"));
console.log(parseInt("0xfa"));
//parseInt()_2
console.log(parseInt("ff",16));
console.log(parseInt("0377",8));
console.log(parseInt("11",2));

// * 3 boolean 
// true and false 
var booleanNumber_1 = false
if (booleanNumber_1){
    console.log(" it's true");
}else{
    console.log("its false");
}

var k = 4 ;
if ( k === 4 ){
    console.log("cest la bonne valeur");
}

// trully and falsy
if (k){
    console.log("la valeur existe");
}

// array
// creating array 
var t = [1,"1234","hello", new Object(), false]
console.log(" afficher le tableau t ", t );

var tab = new Array();
tab[0]="berry"
tab[1]="strawberry"
console.log(" afficher le tableau tab ", tab );

// multidimension tab 
var matrix = [ ["1","2","3"], ["23","54","63"],[new Object(),new Object(),new Object()]]
console.log(" afficher le tableau matrix ", matrix );

// * Operation 
// * if 
//if ( condtion  ){
    // if true traitement 
// }else {
    //  if false traitement 2 
// }
// var veriter 
// var antiveriter
// if (x1){
    //     veriter = " it's true"
    // }else{
        //     antiveriter = "it's false"
        // }
        
var x1 = true
var veriter = (x1 ? "it's true" : "its false")
console.log(veriter);
// * for 
// for ( intialisation, condition darret , incrementation)
// for ( i = 0 , j = t.lenght; condition darret ; incrementation )
// for(; condition da rret ;) 
var t_2 = [1,"1234","hello", new Object(), false]
var i 
for ( i = 0 ; i < t_2.length; i++){
    console.log(t_2[i]);
}
// * for in 
for ( i in t_2){
    console.log(t_2[i]);
}
// * funtions 
// function namefuntion(arg)
function somme( x , y){
    return x +y ;
}
console.log("La somme est :", somme(10, 30));

var returnFuntionVariable = function multilication(a, b){
    return a*b;
};
console.log(returnFuntionVariable(10, 20)); 