// let product = {
//     price : 233,
//     avgRating : 4.5,
//     discount:10,
//     phoneName : "iphone",
//     variants : ["pro","pro max", "base"],
//     details: {
//         city : "Hyd",
//         state : "T'lgana",
//         country: "India"
//     },
//     printProductName : function() {
//         console.log(this.price);
//         // console.log(product.price); //not good practice
//     },
//     printDiscount() {
//         console.log(this.discount)
//     }

// }
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

// let product2 = ["hi","hello"]
// for( value of product2) {
//     console.log(value)
// }

// product2.forEach(function(value, index) {
//     console.log(value,index);
// })
// console.log(product['discount']);
// product.printProductName();
// product.printDiscount();
// console.log(product);
// console.log(product[1]);
// console.log(typeof product);


//  function b(num) {
//     console.log(num);
//     console.log("b");
//     // a();
//     num();
//  }

//  b(function  () {
//     console.log("a");
//    num(4)
// });

// for(value in product) {
//     console.log(product[value]);
// }

//destructor
// let product3 = ["hi","hello",1,3]
//  const [a,b,c]  =  ["hi","hello",1,3]
//  console.log(d)

// let {price, avgRating, printDiscount} = product;
// console.log(price,printDiscount(), avgRating);

// for (value of Object.keys(product)) {
//     console.log(value);
// }

// for ([is, value] of Object.entries(product)) {
//     console.log(is, value);
// }

// let product3 = ["hi","hello",1,3];
// const [a,b,c]  =  ["hi","hello",1,3];

// let arr = [1,2,34,4,4,5];
// const [l,e,f, ...hi] = [1,2,34,4,4,5];
// console.log(hi); //[4,4,5]
// console.log(...hi); //4 4 5
// console.log(arr);
// // console.log([arr]);
// console.log(...arr); //spread operator unboxing
// console.log(Math.min(...arr));

// let i = [1,2];
// let j = [1,2];
// let d = [...i, ...j];
// // console.log(d) //output [1,2,1,2]
// console.log(...d);


function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value;
    }
   return total; 
}

console.log(add(1,2,3,4,5,6,7,8,9,10));

// let {details, ...remaining} = product; //rest
// console.log(details,remaining);
// let box = [...variants]
// console.log(...variants);