// ####################################################################################################
//  * Cours Web
//  * made by : Azer Hasnaoui
//  * year : 2020-2021
//  * classroom : TIC-2
// ####################################################################################################
// #                     -Classes-                                                                    #
// ####################################################################################################
//* Class syntax + methodes
// class ClassName {
//   constructor() { ... }
// }
"use strict";

//exp1
class car1{
    constructor(firm, name, year){
        this.firm=firm;
        this.name=name;
        this.year=year;
    }
}
let myCar= new car1("VW","polo",2005);
console.log(myCar);

class car2{
    constructor(firm, name, yearConst){
        this.firm=firm;
        this.name=name;
        this.year=yearConst;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    setfirm(firm){
        this.firm=firm
    }
}

const mySecondCar = new car2("peugeot","208",2004)
console.log(mySecondCar);
console.log(mySecondCar.age());
mySecondCar.setfirm("volvo")
console.log(mySecondCar);