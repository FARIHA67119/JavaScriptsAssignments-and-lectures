"use strict";
// let name = "hello";
// console.log(name);
let student = {
    studentName: "John",
    studentAge: 20,
    printStudentDetails: function() {
        console.log(`Name: ${this.studentName}, Age: ${this.studentAge}`);
}
}
student.printStudentDetails();
let a  = student.printStudentDetails();
a();

// function fun() {
//     let name = "John";
//     function inner() {
//         console.log(name);
//     }
//     name = "Doe";
//     return inner;

// }
// let f = fun();
// // f();
// console.log(this);
// console.log(global === globalThis);



// function fun1() {
//     console.log("Hello");
// }

// fun1();

// var a = 7;
// console.log(this.a);