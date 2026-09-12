//Event Listeners
let div = document.querySelector("#reveal-gift");
let h1 = document.querySelector("#h1");
function gift(event) {
    h1.classList.toggle("hidden");
    //    h1.classList.add("visible");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);

}

// btn.addEventListener("dblclick", () => console.log("Button clicked", btn));
let btn2 = document.querySelector("#btn2");
let count = 0;
function fun(e) {
if(count < 3 ) {
   console.log("Button clicked", e);
    count++;
} else {
    btn2.removeEventListener('click', fun);
}
}
btn2.addEventListener('click', fun);
// btn2.addEventListener('click', fun, {once:true}); 



// btn2.removeEventListener('click', fun); // this will remove the event listener after the first click

// div.addEventListener('click', gift);

// btn2.addEventListener('click', (e) => {
//     console.log("Button clicked", e);
//     console.log(e.key);
//     console.log(e.clientX);
//     console.log(e.clientY);
// });

// btn2.removeEventListener('click', (e) => {

// });

// let outter = document.querySelector
// ("#outter");
// let inner = document.querySelector("#inner");

// let btn3 = document.querySelector("#btn3");

// outter.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Outter clicked");
// });
// inner.addEventListener('click', (e) => {
//     e.stopPropagation();
//      console.log("inner clicked");
// }
// , {capture: true} );
// btn3.addEventListener('click', (e) => { 
//     e.stopPropagation();
//     console.log("btn clicked") }
// );

