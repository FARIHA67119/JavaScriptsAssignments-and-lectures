//q1
// let btn = document.getElementById("btn");
// btn.addEventListener('click', () => {
//     console.log("Button clicked!");
// })


//q2
// let para = document.getElementById("para");
// let btn = document.getElementById("btn");

// btn.addEventListener('click', () => {
//     para.textContent = "Thanks for visiting!";
// });

//q3
//  let btn = document.getElementById("btn");
//  let para = document.getElementById('para');

//  btn.addEventListener('mouseover', () => {
//     para.textContent = "Mouse is over the heading";
//  });

//q4
//  let btn = document.getElementById("btn");

//  btn.addEventListener("click", function
//     (event) {
//         console.log(event.target.tagName);
//     }
//  )

//q5
// let div = document.getElementById("d");
// div.style.backgroundColor = "lavender";
// // div.style.height = "100px";
// div.addEventListener('mouseover', function(event)  {
//   console.log(event.clientX = 250);
//      console.log(event.clientY = 180);


// })\

//q6

// let input =  document.getElementById ("inp");
// let output = document.getElementById("output");
// input.addEventListener('input', (e) => {
//     output.textContent = "you typed :  " + e.target.value;
// })

//q7 
// let button = document.getElementById("btn"); //mycode
// let removeButton = document.querySelector("#removeButton");

// function showmessage() {
//     console.log("Button is Clicked! ");
// };

// btn.addEventListener('click', showmessage);


//  removeButton.addEventListener('click', function() {
//     btn.removeEventListener('click', showmessage);
//  })

//sir code
let button = document.getElementById("myButton");
// let removeButton = document.getElementById("removeButton");
// function showMessage() {
//     console.log("Button clicked!");
// }
// button.addEventListener("click", showMessage());
// removeButton.addEventListener("click", function() {
//     button.removeEventListener("click", showMessage());
// });
// console.log(removeButton);
// removeListener();

//gemini code
// document.addEventListener("DOMContentLoaded", function() {
//   let button = document.getElementById("myButton");
//   let removeButton = document.getElementById("removeButton");

//   function showMessage() {
//     console.log("Button clicked!");
//   }

//   if (button) {
//     button.addEventListener("click", showMessage);
//   }

//   if (removeButton) {
//     removeButton.addEventListener("click", function() {
//       if (button) button.removeEventListener("click", showMessage);
//     });
//   }
// });

//q8`
// let btn = document.querySelector("#btn");
// btn.addEventListener( 'click', () => {
//     console.log("welcome!");

// } , {once : true});

//q9
// let div = document.querySelector("#d");
// let btn = document.querySelector("#btn");
// // btn.style.background = "purple";
// // btn.style.height = "10px";

// div.addEventListener('click', (e) => {

//      console.log("parent clicked");
// });

// btn.addEventListener('click', (e) => {
//      e.stopPropagation(); 
//     console.log("button clicked");
// })

//q10
// let div = document.querySelector("#d");
// let btn = document.querySelector("#btn");

// div.addEventListener('click', (e) => {

//     console.log("parent clicked");
//     })


// btn.addEventListener('click', (e) => {
//     console.log("button clicked");
// });


//q11
// let div = document.querySelector("#d");
// let btn = document.querySelector("#btn");

// div.addEventListener('click', (e) => {

//     console.log("parent clicked");
//     } ,{capture : true});


// btn.addEventListener('click', (e) => {
//     console.log("button clicked");
// });

//q12
// let div = document.querySelector("#d");
// let btn1 = document.querySelector("btn1");
// let btn2 = document.querySelector("btn2");
// let btn3 = document.querySelector("btn3");

// div.addEventListener('click', (e) => {
//     if(e.target.tagName === "BUTTON") {
//         console.log(`${e.target.textContent} button clicked`);
//     }
// });

//q13
let ul = document.querySelector("#u");

ul.addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        console.log(`${e.target.textContent}`);
    }
})