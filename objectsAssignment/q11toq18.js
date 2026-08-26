//q11 destruction and shorthand properties
// const user = { name: "Rahul", email: "rahul@example.com", role: "developer" };

// let objName = user.name;
// let email = user.email;
// console.log(objName);
// console.log(email);

//q12
// const product = { name: "Laptop", price: 50000 }; 
// let productName = product.name;
// console.log(`Product Name : ${productName}`);


//q13
// const name = "Rahul"; 
// const email = "rahul@example.com";
// const role = "developer"; 

// const user = {name, email, role};
// console.log(user)

//q14

// function displayUser({name, email}) {
//     console.log(`${name}\n${email}`);
// }

// displayUser({name: "Rahul", email: "rahul@example.com" });

//spread operator
// const user = { name: "Rahul", role: "developer" };
// const copy = {...user};
// console.log(copy);

//q16

// const user = { name: "Rahul", role: "student" }; 
// const updateUser = {...user, role : 'developer'};
// console.log(updateUser);

//q17
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"]; 
// console.log([...frontend, ...backend]);

//q18

// function showSkill(name, ...skills) {
//     console.log("Name: ", name, "Skill:",...skills);
// }
// showSkill("Rahul", "HTML", "CSS", "JavaScript");