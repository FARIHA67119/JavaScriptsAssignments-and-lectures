// let age = 13; //problem 11
// let hasLicense = true;

// if(age >= 18 && hasLicense == true) {
//     console.log("Can drive");
// } else {
//     console.log("Can't drive");
// }

//problem 12
// let num = 50; //3
// if(num >= 10 && num <= 100) {
//     console.log(num, "Number is between 10 & 100");
// } else {
//     console.log(num, "Number is not between the range");
// }

//problem 13
// let  marks = 101;
// if(marks < 0 || marks > 100) {
//     console.log("Invalid Percentage");
// }else if(marks >= 90 && marks <= 100) {
//     console.log("A grade");
// } else if (marks >= 80 && marks <= 89) {
//     console.log("B grade");
// } else if(marks >= 70 && marks <= 79) {
//     console.log("C grade");
// } else if(marks >= 60 && marks <= 69) {
//     console.log("D grade");
// } else if(marks >= 40 && marks <= 59) {
//     console.log("E grade");
// } else {
//     console.log("FAIL");
// }

//problem 14''

// let sub1 = 40;
// let sub2 = 42;
// let sub3 = 40;
// let average;

// let total = sub1+sub2+sub3;

// if(sub1 < 40 || sub2 < 40 || sub3 < 40) {
//     console.log(total, "FAIL")
// } else {
//     average = (total/3).toFixed(2);


// if(average >= 75) {
//     console.log(average,":Distinction");
// } else if(average >= 60) {
//     console.log(average,":First Division");
// } else if(average >= 50) {
//     console.log(average,":Second Division");
// } else {
//     console.log(average,":PASSED")
// } 
// }

// problem 15

// let units = 150;
// let bill;

// if(units <= 100) {
//     bill = units * 5;
// }else if(units <= 200) {
//      bill = units * 5;
// } else {
//     bill = (100*5) + (100*7) + ((units - 200) * 10);
// }

// console.log("Bill", bill);

//problem 16

// let username = "admn";
// let password = "12345";
// if(username === "admin" && password === "12345") {
//     console.log("Login successful!");
// } else {
//     console.log("Invalid username or password ");
// }

//problem 17
// let original_sal = 70000;
// let bonus;
// let finalSalary;
// let experience = 1;

// if(experience >= 10) {
//     bonus = original_sal * 20 / 100;
// } else if(experience >= 5) {
//     bonus = original_sal * 10 /100;
// } else if(experience >= 2) {
//     bonus = original_sal * 5 / 100;
// } else {
//     console.log("there is no bonus")
//     bonus = original_sal * 0 /100;
// }
//  finalSalary = original_sal + bonus;

//  console.log("Final Salary: ", finalSalary);


//problem 18

// let age = 20;

// if(age <= 0 || age >= 100) {
//     console.log("Invalid age");
// } else if(age <= 12) {
//     console.log("Child");
// } else if(age <= 19) {
//     console.log("Teenager");
// } else if(age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }

//problem 19 
// let num = 8;

// switch(num) {
//     case 1 : '1'
//     console.log("Monday");
//     break;
//     case 2 : '2'
//     console.log("Tuesday");
//     break;
//     case 3 : '3'
//     console.log("Wednesday");
//     break;
//     case 4 : '4'
//     console.log("Thursday");
//     break;
//     case 5 : '5'
//     console.log("Friday");
//     break;
//     case 6 : '6'
//     console.log("Saturday");
//     break;
//     case 7 : '7'
//     console.log("Sunday");
//     break;
//     default :
//     console.log("Invalid Day")
// }

//problem 20 
// let firstNum = 20;
// let secNum = 5;
// let operator = "*";

// switch(operator) {
//     case '+' :
//     console.log(firstNum+secNum);
//     break;
//     case '-' :
//     console.log(firstNum-secNum);
//     break;
//     case '*' :
//     console.log(firstNum*secNum);
//     break;
//     case '/' :
        // if(secNum === 0) {
        //     console.log("cannot divide by 0")
        // } else {
        //     console.log(firstNum / secNum);
        // }
//     console.log(firstNum/secNum);
//     break;
//     case '%' :
//     console.log(firstNum%secNum);
//     break;
//     default :
//     console.log("Invalid operator");
// }

//21 
