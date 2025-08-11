// let kaan = {
//     name:"kaan",
//     yearOfBirth : 2008,
//     job : "student",
// }

// // let kaan = {
// //     firstName:"kaan",
// //     yearOfBirth : 2008,
// //     meslek : "student",
// // }

// val = kaan;
// console.log(val) // {name: 'kaan', yearOfBirth: 2008, job: 'student'}
// console.log(typeof val) // object

// function Student(name,yearOfBirth,job){
//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job,

//     //* console.log(this) // Student {name: 'kaan', yearOfBirth: 2008, job: 'student'}

//     this.calculateAge = function(){
//         return 2025 - this.yearOfBirth;
//     }
// }

// let kaan = new Student("kaan", 2008, "student");
// let aylin = new Student("aylin", 2006, "student"); // Student {name: 'aylin', yearOfBirth: 2006, job: 'student'}

// console.log(kaan.name) // kaan
// console.log(kaan.yearOfBirth) // 2008
// console.log(kaan.job) // student
// console.log(kaan.calculateAge()) // 17

// console.log("----------------------")

// console.log(aylin.name) // aylin
// console.log(aylin.yearOfBirth) // 2006
// console.log(aylin.job) // student
// console.log(aylin.calculateAge()) // 19

// let Student = function (name, yearOfBirth, job) {
//         this.name = name,
//         this.yearOfBirth = yearOfBirth,
//         this.job = job,

//         //* console.log(this) // Student {name: 'kaan', yearOfBirth: 2008, job: 'student'}

//         this.calculateAge = function () {
//             return 2025 - this.yearOfBirth;
//         }
// }

// //! PROTOTYPE

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function(){
//     //     return 2025 - this.yearOfBirth;
//     // }
// }

// let aylin = new Person("aylin", 1980, "teacher");
// console.log(aylin) // Person {name: 'aylin', yearOfBirth: 1980, job: 'teacher', calculateAge: ƒ}

// Person.prototype.calculateAge = function () {
//     return 2025 - this.yearOfBirth;
// }

// console.log(aylin) // Person {name: 'aylin', yearOfBirth: 1980, job: 'teacher'}
// console.log(aylin.calculateAge()) // 45

// Person.prototype.getName = function (){
//     return this.name;
// }

// console.log(aylin.getName()) // aylin

// let kaan = new Person("kaan", 2008, "student");

// console.log("----------------------")

// console.log(kaan) // Person {name: 'kaan', yearOfBirth: 1980, job: 'student'}
// console.log(kaan.getName()) // kaan
// console.log(kaan.calculateAge()) // 17

// //! OBCEJT.CREATE METHODU

// let personProto = {
//     calculateAge : function(){
//         return 2025 - this.yearOfBirth;
//     }
// }

// let kaan = Object.create(personProto);
// console.log(kaan) // {}

// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";
// console.log(kaan) // {name: 'kaan', yearOfBirth: 2008, job: 'student'}
// console.log(kaan.calculateAge()) // 17

// let aylin = Object.create(personProto,{
//     name : {value : "aylin"},
//     yearOfBirth : {value : 1980},
//     job : {value : "teacher"},
// });

// console.log(aylin) // {name: 'aylin', yearOfBirth: 1980, job: 'teacher'}
// console.log(aylin.calculateAge()) // 45

//! PROTOTYPE TABANLI MİRAS ALMA

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2025 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    // this.name = name;
    // this.yearOfBirth = yearOfBirth;
    // this.job = job;
    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}

//? Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);
// console.log(Teacher.prototype.constructor) 
// Teacher {name: 'aylin', yearOfBirth: 1980, job: 'teacher', subject: 'English'}
// job : "teacher"
// name : "aylin"
// subject : "English"
// yearOfBirth : 1980
// [[Prototype]] : Person 

//? Set Teacher constructor
Teacher.prototype.constructor = Teacher;

let aylin = new Teacher("aylin",1980,"teacher","English");

console.log(aylin) // Teacher {name: 'aylin', yearOfBirth: 1980, job: 'teacher', subject: 'English'}
console.log(aylin.calculateAge()); // 45

//! IMMEDIATE FUNCTIONS

function welcome() {

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = "Welcome.Today is " + days[today.getDay()];
    return msg;
}

console.log(welcome()); // Welcome.Today is Monday

(function(){

}());

(function(){

})();

(function (name) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = 'Welcome ' + name + '!. Today is ' + days[today.getDay()];
    // return msg;
    console.log(msg); // Welcome Levent!. Today is Monday
}("Levent"));