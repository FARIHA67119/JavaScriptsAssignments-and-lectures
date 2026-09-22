// console.log("a");

// const p = new Promise(function (resolve, reject) {
//     console.log("b");
//     // resolve("hi i am resolved");
//     reject("error");
// });
// console.log("c");
// // console.log(typeof p);
// console.log(p); //a b c object Promise { <pending> }

// p.then(function onFullfilled(val) {
//     console.log(val);
// }, function () {
// }).then(() => {}, () => {}).then().then().catch( function onRejct(val) {
//     console.log(val);
// });


// console.log(p);

// const res = p.then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).catch(function (val) {
//     console.log(val);
// }).finally(function() {
//     console.log("Ye toh hamesha chalega");
// })

// const p3 = new Promise(function f1(resolve, reject) {
//     resolve("promised") // ye line sirf or sirf itna batati hai ki promise fulfill ho gaya thats it
// })



// setTimeout(function fun3() {
//     console.log("setTimeout");
// }, 2000)

// p3.then(function f3() {
//     console.log("f3 function");
// })
// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })


// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("hello");
//     console.log("confirm");
// })

// p2.then(function f2(val) {
//     console.log(val);
//     console.log("promise fulfilled");
// }).catch((err) => {
//         console.log(err, "catch the error");
// }).finally(() => {
//     console.log("finally fulfilled");
// });

// console.log("all promise methods done");

function searchPizza() {
    return new Promise(function prom1(resolve
        , reject) {
        console.log("Pizza is searching");
        setTimeout(function () {
            console.log("pizza menu is here");
            let price = 500;
            // cb1(price);
            resolve(price);
        }, 2000);
    })
};

function addToCart(price) {
    return new Promise((resolve, reject) => {
        console.log("Pizza is add to cart");
        setTimeout(function () {
            console.log("Pizza is added to cart");
            // cb2();
            resolve(price);
        }, 3000);
    })

}

function payment(price) {
    return new Promise((resolve, reject) => {
        console.log(`Pizza price is : ${price}`);
        setTimeout(function () {
            let isPaymentSuccessful = false;
            // cb3();

            if(isPaymentSuccessful) {
                console.log(`payment completed, amount: ${price}`);
                resolve();
            } else {
                reject("Payment failed");
            }
        }, 5000);
    })

}


// searchPizza(function a(price) {
//     addToCart(function b() {
//         payment(price, function c() {
//             console.log("Thanks, Visit us again!");

//         })
//     });
// });

// searchPizza().then(function(price) {
//     console.log(price);
// }) 

let res = searchPizza();

res.then(function f1 (price) {
    return addToCart(price);
}).then(function f2 (price) {
    return payment(price);
}).then(function f3 () {
    console.log("Pizza is on the way");
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally pizza is here");
})