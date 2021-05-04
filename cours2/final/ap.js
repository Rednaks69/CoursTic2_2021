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
var x = 10 
console.log("x est", x);
console.log(typeof(x));
// numbers base 16
var hexa = 0xff
console.log("hexa est :", hexa);
console.log(typeof(hexa));
// numbers base 8 
var octal = 0376 
console.log("octal est :",octal);
// floating-point
// [degits][.degits][E|e][+|-][degits]
var floatingPoint_1 = 3e+10
var floatingPoint_2 = 4.2e+1
console.log("floatingPoint_1 est :\n",floatingPoint_1,"\nfloatingPoint_2 est :\n",floatingPoint_2);
// sinus x 
sin_x = Math.sin(x)
console.log("sin x est :",sin_x);
// square 
square_value = Math.sqrt(16)
console.log(square_value);


// * -2-  string
// string declaration
var b = 'hi '
var a = "to day"
c = b + a
console.log(c);
console.log(typeof(c));
// Accessing 
console.log(c[2]);
console.log(typeof(c[2]));
// count 
console.log("c length",c.length);
// access Operations 
// charAt(index)
lastChar= c.charAt(c.length - 1)
console.log("lastChar is :",lastChar);
//substring(star, end) the end not inluded
subString_1 = c.substring(1,4)
console.log("subString_1 is :", subString_1);
//slice(star, end) the end not inluded
subString_2 = c.slice(1,6)
console.log("subString_2 is :", subString_2);
//split([spliter])
subString_3 = c.split(" ")
console.log("subString_3 is :",subString_3);
// Occurence 
i = c.indexOf("h")
console.log("index of h is :",i);
// Convertion numbers to string 
// String()
var stringConv_1 = String(x)
console.log("stringConv_1 is ",stringConv_1," have the type of ", typeof(stringConv_1));
// toString()
var z = 20 ;
var stringConv_2 = z.toString()
console.log("stringConv_2 is ",stringConv_2," have the type of :", typeof(stringConv_2));
// Convertion String to numbers
// Number()
var number_1 = Number(stringConv_2)
console.log("number_1 :",number_1," have the type of :",typeof(number_1));
//parseInt() and parseFloat()
console.log(parseInt("4 streets"));
console.log(parseFloat("3.14 meters"));
console.log(parseInt("12.34"));
console.log(parseInt("0xff"));
//parseInt()_2
console.log(parseInt("fe",16));
console.log(parseInt("11",2));
console.log(parseInt("076",8));

// * 3 boolean 
// true and false 
var boolean_1 = true 
if (boolean_1) {
    console.log("true value");
}else console.log("false value ");
////////////////
var k = 4 ;
    if (k === 3)
    console.log("true");
    else
    console.log("false");
////////////////
// trully and falsy 
    if (k) 
    console.log("true");
    else
    console.log("false");


// array
// creating array 
var t = new Array();
t[0]='allo'
t[1]='oui' 
console.log("le tableau t est \t",t);
var tab = [2, 10, 31 , "String"]
console.log("le tableau tab est \t",tab);
console.log(typeof(tab));
console.log(typeof(tab[2]));
// multidimension tab 
var martrix = [[1,2,3],[3,4,5],[2,6,7]]
console.log(martrix);
