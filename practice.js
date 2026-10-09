// const arr = [p, q, r, ...{ length }] = [1, 2, 3];
// console.log(arr, length);

// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable

// const array = [1, 2, 3, 4];
// const obj = { ...array }; 
// console.log(obj);
// { 0: 1, 1: 2, 2: 3 }

// const obj = { ...true, ..."test", ...10 };
// for(let i=0; i<10; i++) {
//     console.log(...[i].obj);
// }

// console.log(...obj);
// { '0': 't', '1': 'e', '2': 's', '3': 't' }

// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// // console.log(myFunction.apply(null, args));
// console.log(myFunction.apply(...args));

// function myFunction(x, y, z) {
//     return args;
// }
// const args = [0, 1, 2,3,22,33];
// // myFunction(...args);
// console.log(myFunction(...args));

// function myFunction(v, w, x, y, z) {
//     // return args
// }
// const args = [0, 1];
// console.log(myFunction(-1, ...args, 2, ...[3]));

// const isSummer = true;
// const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// console.log(fruits)
// // ['apple', 'banana']

// const name = "Alice";

// function greet() {
//   const name = "Bob"; // Shadows global 'name'
//   console.log(name);  // "Bob"
// }
 
// function createBankVault() {
//     let balance = 100; // Secret variable in the outer scope (The Vault)
  
//     return {
//       deposit: function(amount) { // Inner function (The Teller)
//         balance += amount;
//         // return `New balance: $${this.deposit()}`;;
//         // return balance;
//         return `New balance: $${balance}`;
//       },
//     //   getBalance: function() {
//     //     return `Balance: $${balance}`;
//     //   
//     };
//     // return `New balance: $${balance}`;
//   }
  
//   const myAccount = createBankVault();
//   // The createBankVault function has finished running!
//   // But myAccount methods STILL have access to 'balance':
  
//   console.log(myAccount.deposit(50)); // "New balance: $150"
// //   console.log(myAccount.getBalance());  // "Balance: $150"

// const promise1 = new Promise((resolve, reject) => {
//     resolve("Success!");
//     reject("error");
//   });
  
// //   promise1.then().catch((value) => {
// //     console.log(value);
// //     // Expected output: "Success!"
// //   });
  
// let p = promise1();
// console.log(p);

// const pendingPromise = new Promise(() => {});
// while (true) {
//   console.log(pendingPromise.then(doSomething));
// }


// console.log("1: Start");

// setTimeout(() => {
//   console.log("2: Macrotask (setTimeout)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3: Microtask 1");
// }).then(() => {
//   console.log("4: Microtask 2");
// });

// console.log("5: End");

// const fetchData = new Promise((resolve, reject) => {
//     const success = true;
//     if (!success) {
//       resolve("Data retrieved!"); // Moves to fulfilled
//     } else {
//       reject(new Error("Request failed")); // Moves to rejected
//     }
//   });
  
//   fetchData
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err.message))
//     .finally(() => console.log("Cleanup complete"));




// function resolveAfter2Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();


// async function getProcessedData(url) {
//     let v;
//     try {
//       v = await downloadData(url);
//     } catch (e) {
//       v = await downloadFallbackData(url);
//     }
//     return processDataInWorker(v);
//   }

// // async function getProcessedData(url) {
// //     const v = await downloadData(url).catch((e) => downloadFallbackData(url));
// //     return processDataInWorker(v);
// //   }

// async function test() {
//     console.log("2: Inside async - synchronous start"); // 🟢 Synchronous
    
//     await Promise.resolve(); // ⏸️ Pauses here & yields to main thread
    
//     console.log("4: Inside async - asynchronous continuation"); // 🟡 Asynchronous (Microtask)
//   }
  
//   console.log("1: Main script start"); // 🟢 Synchronous
//   test();
//   console.log("3: Main script end");   // 🟢 Synchronous

// const str = 
// {
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
//   }
//   console.log(JSON.parse(str))

// Synchronous style syntax for asynchronous logic:
// async function loadUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Fetch failed:", error);
//   }
// }
// // loadUser().then(data => console.log("Done!", data));
// loadUser();


// const newUser = { name: "Alex", role: "Developer" };

// fetch("https://api.example.com/users", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   // Convert JS Object -> JSON String before sending:
//   body: JSON.stringify(newUser) 
// });

// const user = { name: "Alex", age: 25 };

// // Creates a BRAND NEW object in RAM
// const updatedUser = {
//   ...user,
//   age: 26
// };
// user.age = 28;
// console.log(user.age);        // 25 (Original untouched!)
// console.log(updatedUser.age); // 26 (New reference)


// const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

// // ❌ Mutates original: users.splice(0, 1);

// // ✅ Immutable:
// const remainingUsers = users.filter(user => user.id !== 1);

// console.log(remainingUsers);

