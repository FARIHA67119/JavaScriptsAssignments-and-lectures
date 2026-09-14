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
let input =  document.getElementById("inp"); 
let output = document.getElementById("output");
input.addEventListener('input', (e) => {
    output.textContent = "you typed :  " + e.target.value;
    
    
})

