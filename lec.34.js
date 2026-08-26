let student = {
    s_name : "anc",
    rno: 2,
    subjects : ["maths", "science", "social"]
}
let {subjects : vishay, totalMarks = 300, ...variable} = student; //rename the key

// console.log(vishay, totalMarks);
//object using spread opt
let obj1 = {
    nam : "abc",
    phone : 12355768
}

let obj2 = {
    address : "india",
    phone : 23222222,
    aadharCard : 4561239780
}

let obj3 = {...obj1, ...obj2};
// console.log(obj3);

const arr = [1,2,3,4];

arr[1] = "update";
// console.log(arr);
// arr = ["hi", "hello"];

const obj = {
    name :  "abc",
    rno : 233,
    address : null
}

// obj.name = "fariha";
// obj["rno"]= 333;
// delete obj.rno; //for deleting object
// console.log(obj);
// console.log(obj.address?.street);

// let arr2 = [2,2,3,4,5];
// arr2.splice(0,1); //2 3 4 5//delete

let arr2 = [2,2,3,4,5];
// arr2.splice(3,1, ["hello"]);
// arr2.splice(3,0, ["hello"]);
// arr2.splice(3,0, 10);  //splice

// let trimarr = arr2.slice(2,0)  //slice
// console.log(trimarr);

// console.log(arr2.indexOf(2)) //if not present return -1
// console.log(arr2.indexOf(6)); //return index no if present 

// let res = arr2.find((value) => {
//     return value === 2;
// })

// let res = arr2.find((value) => {
//     return value === "2";
// })

//flat = merged if nested 
let arr3 = [1,2,2,3,4,5, [5,2,3,[2,2,2]]];
// console.log(...arr3);
// console.log(arr3.flat(Infinity));

let arr4 = [1,2,2,3,4,5];
let arrCopy = arr4;
let arrCopy2 = [...arr4];
// arrCopy.pop();
arrCopy2.pop();
// arr4.pop(); //working same
console.log(arr4);
console.log(arrCopy2);