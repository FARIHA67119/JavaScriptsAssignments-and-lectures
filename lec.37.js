// function outter() {
//     const a = 3;
//     function inner() {
//         const a = 2;
//     }
//    return inner;
// }
// let co = outter();
// console.log(co);
// console.log(outter);


function outter() {
    let count = 0;
    function counter()  {
     count = count + 1;
        console.log(count);
    }
    return counter;
}
const counter1 = outter();
const counter2 = outter();
counter1();
counter2();
counter2();
counter2();