// let month = 20;
// switch(month) {
//     case 1 : 
//      console.log("January");
//     break;
//     case 2 : 
//     console.log("February");
//     break;
//     case 3 : 
//     console.log(" March ");
//     break;
//     case 4 : 
//     console.log("April");
//     break;
//     case 5 : 
//     console.log("May");
//     break;
//     case 6 : 
//     console.log("June");
//     break;
//     case 7 : 
//     console.log("July");
//     break;
//      case 8 :
//     console.log("August");
//     break;
//      case 9 :
//     console.log("September");
//     break;
//      case 10 : 
//     console.log("October");
//     break;
//      case 11 : 
//     console.log("November");
//     break;
//      case 12 : 
//     console.log("December");
//     break;
//     default:
//     console.log("Invalid Month")
// }

//problem 22

//  let firstNum = 20;
// let secNum = 5;
// let operator = 2;

// switch(operator) {
//     case 1 :
//     console.log(firstNum+secNum);
//     break;
//     case 2 :
//     console.log(firstNum-secNum);
//     break;
//     case 3 :
//     console.log(firstNum*secNum);
//     break;
//     case 4 :
//         if(secNum === 0) {
//             console.log("cannot divide by 0")
//         } else {
//             console.log(firstNum / secNum);
//         }
//     console.log(firstNum/secNum);
//     break;
//     case 5 :
//     console.log(firstNum%secNum);
//     break;
//     default :
//     console.log("Invalid operator");
// }

//problem 23

// let signal = "green";
// switch(signal) {
//     case "red" : 
//      console.log("Stop");
//      break;
//      case "yellow" : 
//      console.log("Wait");
//      break;
//      case "green" : 
//      console.log("Go");
//      break;
//      default : 
//      console.log("Invalid signal")
// } 

//problem 24
// let balance = 10000;
// let withdrawAmount = 3000; //12000
// let remaining_amt = balance - withdrawAmount;

// if(withdrawAmount > balance) {
//     console.log("Amount Cannot be withdrawn");
// } else {
//     console.log("Withdrawl Successful");
// }
// console.log("Ramaining Balance: ", remaining_amt);

//problem 25 
//  let age = 70;
//  let numberOfTickets = 5;
//  let total;
// 
//  if(age < 12) {
//    total = numberOfTickets * 100;
//  } else if(age <= 59) {
    // total = numberOfTickets * 200;
//  }else {
    // total = numberOfTickets * 120
//  }
//  console.log("Total", total);

//problem 26
// let choice = 2;
// let quantity = 3;
// let total;
// switch(choice) {
//     case 1 : "Burger";
//     total = quantity * 150;
//     break;
//     case 2 : "Pizza";
//     total = quantity * 250;
//     break;
//     case 3 : "Pasta";
//     total = quantity * 180;
//     break;
//     case 4 : "Sandwich";
//     total = quantity * 120;
//     break;
//     default :
//     console.log("Sorry we don't have this one!");
// }
// console.log("Total: ", total);

//problem 27 electricity bill 
// let units = 500;

// let bill=0;
// let discount = 10;
// let finalBill;

// if(units <= 100) {
//   bill =   units * 5;
// } else if(units <= 200) {
//     bill = units * 7;
// } else {
//     bill = units * 10;
// }

// if(bill >= 2000) {
//     let discountAmt = (bill * discount) / 100;
//     finalBill = bill - discountAmt;
//     console.log("You get Discount! ");
// } else {
//     finalBill = bill;
//     console.log("No Discount");
// }

// console.log("Units:", units);
// console.log("Original Bill:", bill);
// console.log("Discount:", discount);
// console.log("Final Bill:", finalBill);

//problem 28
// let choice = 5;
// let balance = 20000;
// let deposit = 2000;
// let withdraw = 200000;

// switch(choice) {
//     case 1 : "Check Balance";
//     console.log("Check Balance", balance);
//     break;
//     case 2 : "Deposit";
//     balance = deposit + balance;    
//     console.log(balance, "After deposit");
//     break;
//     case 3 : "Withdraw";
//     if(withdraw < balance) {
//         console.log("Sufficient Balance exist to withdraw");
//     } else {
//       console.log("Sufficient Balance not exist to withdraw");
//     }
//     break;
//     case 4 : "Exit";
//     console.log("Goodbye!");
//     break;
//     default: 
//     console.log("Error Message");
// }

//problem 29

// let num = 100;//150
// if(num < 0) {
//     console.log("Negative", num);
// } else if(num > 0) {
//      console.log("Positive", num);
// } else {
//      console.log("zero", num);
// } 

// if(num %2 == 0) {
//     console.log(num,"even");
// } else {
//      console.log(num, "odd");
// }

// if(num > 100) {
//     console.log("Greater than", num);
// } else if(num < 100) {
//     console.log("Less than", num);
// } else {
//     console.log("Equal", num);

// }


let studentName = "abc";
let rollNumber = 2; 
let mathMarks = 20;
let scienceMarks = 20;
let englishMarks = 35;
let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = totalMarks / 3;
let grade;

let result;
if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
    result = "PASS";
} else {
    result = "FAIL";
}

 if(percentage >= 90) {
   grade = "A";
} else if(percentage >= 80 && percentage <= 89) {
    grade = "B";
} else if(percentage >= 70 && percentage <= 79) {
   grade = "C";
} else if(percentage >= 60 && percentage <= 69) {
       grade = "D";
} else if(percentage >= 40 && percentage <= 59) {
       grade = "E";
} else {
    grade = "F";
}

console.log("-------------------------");
console.log("STUDENT RESULT");
console.log("-------------------------");
console.log("Name       : " + studentName);
console.log("Roll No    : " + rollNumber);
console.log("Math       : " + mathMarks);
console.log("Science    : " + scienceMarks);
console.log("English    : " + englishMarks);
console.log("Total      : " + totalMarks);
console.log("Percentage : " + percentage.toFixed() + "%");
console.log("Grade      : " + grade);
console.log("Result     : " + result);
console.log("-------------------------");
