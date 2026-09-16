//q1
// let form = document.getElementById("frm");
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     p.textContent = "Form submitted successfully! ";
// })

// //q2
// let form = document.getElementById("frm");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // console.log("not reloading");
// })

//q3
// let input = document.getElementById("input");
//  let p = document.querySelector("#message");
// input.addEventListener('input', (e) => {
//   let typetext = e.target.value;
//     p.textContent = `you entered; ${typetext}`
// })

// //q4
// let select = document.querySelector("#sel-opts");
// let p = document.querySelector("#message");
// select.addEventListener('change', (e)=> {
    
//         p.textContent = `You entered: ${e.target.value}`
    
// })

//q5
// let input = document.querySelector("#input");
// input.addEventListener('focus', (e) => {
//     input.style.border = "4px solid black";
//     input.style.background = "lavender";
//     input.style.color = "snow"
// });

//q6
// let input = document.querySelector("#inputBox");
// let message = document.querySelector("#message");

// input.addEventListener('blur', () => {
//     message.textContent = "user away from the input field";
// })

//q7
// let form = document.querySelector("#myForm");
// let nameInput = document.querySelector("#name");
// let btn = document.getElementById("btn");
// let error = document.querySelector("#error");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(nameInput.value.trim() === "") {
//         error.textContent = "Name is required";
//     } else {
//         error.textContent = "";
//     }
// });

//q8
// let form = document.querySelector("#myForm");
// let email = document.querySelector("#email");
// let btn = document.getElementById("btn");
// let error = document.querySelector("#error");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(email.value.trim() === "") {
//         error.textContent = "Email is required";
//     } else {
//         error.textContent = "";
//     }
// });

//q9
// let form = document.querySelector("#myForm");
// let password = document.querySelector("#password");
// let btn = document.getElementById("btn");
// let error = document.querySelector("#error");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(password.value.length < 6) {
//         error.textContent = "Password must be at least 6 characters";
//     } else {
//         error.textContent = "";
//     }
// });

//q10
//  let form = document.querySelector("#myForm");
//   let nameInput = document.querySelector("#name");
//   let email = document.querySelector("#email");
//   let password = document.querySelector("#password");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(nameInput.value.trim() === "") {
//         error.textContent = "Name is required";
//     } else if(email.value.trim() === "") {
//          error.textContent = "email is required";
//     } else if(password.value.length < 6 ){
//          error.textContent = "Password must be at least 6 characters";
//     } else {
//         error.textContent = "form is successfully submited";
//     }
// })