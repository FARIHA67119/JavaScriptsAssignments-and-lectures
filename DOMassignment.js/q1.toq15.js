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
// const para = document.createElement("p");
// para.textContent = "This paragraph created in js";
// // console.log(para);
// document.body.append(para);

//q11

// let skills = document.querySelector("#skills");
// const skillList = ['HTML', 'CSS', 'JS'];

// skillList.forEach(e => {
//     const li = document.createElement("li");
//     li.textContent = e;
//     // console.log(li);

//     skills.append(li);

// })


//q12
// const skills = document.querySelector("#skills");

// const li = document.createElement('li');
// li.textContent = "HTML";
// skills.prepend(li);

// const lsitem = document.createElement('li');
// lsitem.textContent = "React";
// skills.append(lsitem);

//q13
// const list = document.querySelector("#skills");
// const secondItem = list.children[1];

// const newItem = document.createElement('li');
// newItem.textContent = "CSS";

// list.insertBefore(newItem, secondItem) //insertBefore() requires two arguments. Even in DOM manipulation, insertBefore(newNode, referenceNode) takes the new node first and the reference node second.


//q14
//  const skillList = ['HTML', 'CSS', 'JS'];
//  skillList.remove(1);

// const skill = document.querySelector("#skills");
// const remove = skill.children[1];

// skill.remove(remove);
// console.log(skill);

//q15
// const btn = document.querySelector("#btn");
// const b1 = btn.cloneNode(true);
// const b = btn.cloneNode(false)// console.log(btn); 
// console.log(b1); 
// console.log(b); 