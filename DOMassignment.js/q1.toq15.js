//q1
// let title = document.getElementById("title");
// title.innerText = "Hello JavaScript";
// console.log(title);

//q2
// let desc = document.querySelector(".description");
// desc.textContent = "New Description";
// console.log(desc);

//q3
// let items = document.querySelectorAll(".item");
// for(let item of items) {
//     item.style.color = "red";
// }

//q4
// let message = document.querySelector("#message");
// message.textContent = "Welcome to JavaScript! ";
// console.log(message);

//q5
// let div = document.querySelector("#container");
// div.innerHTML = "<h2>My Website</h2><p>Welcome to my website!</p>";
// console.log(div);

//q6
// let profileImg = document.querySelector("#profileImage");
// profileImg.setAttribute("alt", "new img");
// console.log(profileImg);

// //q7
// let btn = document.getElementById("btn");
// // btn.classList.add("hidden");
// btn.classList.remove("hidden");

//q8
// let heading = document.querySelector("#heading");
// heading.style.fontSize = "16pt";
// heading.style.background = "red";

//q9
// let btn = document.querySelector("#productBtn");
// const productId = btn.dataset.id;
// console.log(productId);

//q10
const para = document.createElement("p");
para.textContent = "This paragraph created in js";
// console.log(para);
document.body.append(para);
