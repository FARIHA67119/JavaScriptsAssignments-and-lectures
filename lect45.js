function searchPizza(cb1) {
    console.log("Pizza is searching");

    setTimeout(function () {
        console.log("pizza menu is here");
        let price = 500;
        cb1(price);
    }, 2000);
}

function addToCart(cb2) {
    console.log("Pizza is add to cart");
    setTimeout(function () {
         console.log("Pizza is added to cart");
         cb2();
    }, 5000);
}

function payment(price, cb3) {
       console.log(`Pizza price is : ${price}`);
       setTimeout(function () {
          console.log(`Payment done: ${price}`);
          cb3();
       }, 6000);
}


searchPizza(function a(price) {
    addToCart(function b() {    
      payment(price, function c() {
        console.log("Thanks, Visit us again!");
        
      })
    });
});