// ####################################################################################################
//  * Cours Web
//  * made by : Azer Hasnaoui
//  * year : 2020-2021
//  * classroom : TIC-2
// ####################################################################################################
// #                     -object- java script object notation - JSON                                                                   #
// ####################################################################################################
//* object declaration
// exp1
const person = {
    name:"hassan",
    age:23,
    speech:()=>{
        return "person declaration say hello";
    }
}
console.log(person.name);
console.log(person.age);
console.log(person.speech());


// exp2
let person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 55,
  fullName : function() {
    return this.firstName + " " + this.lastName; // use of 'this' 
  }
};

//* Object properties manipulations
// loop in object with for 
for(let j in person2){
    // console.log(j);
    console.log(person2[j]);    // You must use person[x] in the loop.
                                // person.x will not work (Because x is a variable).
}

// adding props
person2.nationality= "tunisian"
console.log(person2);

// deleting props
delete person2.age;
console.log(person2);

//this methode
console.log(person2.fullName());

// object.value()
const array = Object.values(person)
console.log(array);

// JSON.stringify()
const mystring = JSON.stringify(person);
console.log(mystring);
console.log(typeof(mystring));

//* Accesors 
let person3 ={
    name:"ali",
    age:34,
    language:"arabe",
    get lang(){
        return this.language;
    }
}
console.log(person3.lang)

let person4 ={
    name:"ali",
    age:34,
    language:"arabe",
    set lang(lang){
        this.language=lang;
    }
};
person4.lang= "fr";
console.log(person4);

//* Constructors (Blueprints)
//exp1
function personGeneral(first,last,age,lang){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.lang=lang;
}

const Etudiant1 = new personGeneral("phil","morris",23,"en")
console.log(Etudiant1);

Etudiant1.fullName1= function(){
    return this.lastName+" "+this.firstName
}
console.log(Etudiant1.fullName1());

//exp2
function personGeneral2(first,last,age,lang){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.lang=lang;
    this.nameFull = function(){
        return this.lastName+" "+this.firstName;
    };
}
const Etudiant2 = new personGeneral2("phillloo","morrissso",32,"en")
console.log(Etudiant2.nameFull());