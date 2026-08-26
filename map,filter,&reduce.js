let originalPrices = [463, 654, 3333];
// let discountPrice = [];

// for(value of originalPrices) {
//     console.log(value);
//     discountPrice.push(value  * 0.9) //10% discount 
// }

// console.log(originalPrices);
// console.log(discountPrice);

// originalPrices.forEach((value) => {
//        discountPrice.push(value  * 0.9);
// })
// const discountPrices = originalPrices.map((value) =>  {
//     console.log("hello");
//     // return value * 0.9;
// })
// console.log(originalPrices);
// console.log(discountPrices);

//  const discountPrices = originalPrices.map((value) => value * 0.9 );
// //  console.log(value); //error
//  console.log(discountPrices);

 let students = [
    {
        sname : "abc",
        marks : 56,
    }, 
    {
        sname : "abc",
        marks : 56,
    },
    {
    sname : "bac",
        marks : 6,
    },
        {
    sname : "cba",
        marks : 20,
    }

 ]

//  let snames  = [];
//  students.forEach((value) => {
//     snames.push(value.sname);
//  })

// const snames = students.map((studentName) => {
// return studentName.sname;
// })
// const smarks = students.map((studentMarks) => studentMarks.marks);
//  console.log(snames);
//  console.log(smarks);

// let boostedMarks = students.map((studentBoost) => {
//     return {...studentBoost, marks : studentBoost.marks + 10};
// }) 

let boostedMarks = students.map(studentBoost => ({...studentBoost, marks : studentBoost.marks + 10}))

// console.log(boostedMarks);

let failStudent = [];

// students.forEach((fStudent) => {
//     if(fStudent.marks < 30) {
//         failStudent.push(fStudent);
//         console.log(fStudent);
//     }
// })
// console.log(...failStudent);

const failStudents = students.filter((fStudent) => fStudent.marks < 30).map((fStudent) => fStudent.sname) // 
// console.log(failStudents) //['bac', 'cba'] 
//[ { sname: 'bac', marks: 6 }, { sname: 'cba', marks: 20 } ]
// const failStudents = students.map((fStudent) => fStudent.marks < 30) // [ false, false, true, true]
// const failStu = failStudents.map((fStudent) => fStudent.sname);
// console.log(failStudents, failStu); //[ { sname: 'bac', marks: 6 }, { sname: 'cba', marks: 20 } ] [ 'bac', 'cba']

let marks = [50,652,69,36,58,32];
// let totalMarks = 0;
// marks.forEach((i)=> totalMarks = totalMarks += i); //i is iteration 
// console.log(totalMarks);
 
// const totalMarks = marks.reduce((accumulator, currentValue) => {
//         accumulator = accumulator + currentValue;
//         return accumulator;
// }, 0)
// console.log(totalMarks); array 

const totalMarks = students.reduce((totalMarks, stuMarks) => totalMarks + stuMarks.marks, 0)
// console.log(totalMarks); //138 object marks total

const attendence = ["present", "absent", "present", "absent", "present"];

// let obj = {};
// attendence.forEach((value) => {
//     if(obj[value]) {
//         obj[value] = obj[value] + 1;
//         console.log(obj[value]);
//     } else {
//         obj[value] =  1;
//         console.log(obj[value]);
//     }
// })
// console.log(obj);

//by reduce 
// const obj = attendence.reduce((acc, value) => {
    //    if(acc[value]) {
    //     acc[value] = acc[value] + 1;
    //     // console.log(acc[value]);
    // } else {
    //     acc[value] =  1;
    //     // console.log(acc[value]);
    // }
//     acc[value] = (acc[value] || 0 ) + 1;
//     console.log(acc[value]);
//     return acc;
// }, {}); 
// console.log(obj); //let obj = {};


//practice by myself

let arr = [2,0,2,0,2];

// let obj1 = {};
// arr.forEach((value) => {
//     if(obj1[value]) {
//         obj1[value] = obj1[value]  + 1;
//     //     console.log(obj1);
//      } else {
//         obj1[value] = 1;
//     }
// })
// console.log(obj1)


const obj = arr.reduce((checkVal, currVal) => {
    checkVal[currVal] = (checkVal[currVal] || 0) + 1;
    return checkVal;
    // console.log(checkVal[currVal]);
    
},
{}) 
console.log(obj);