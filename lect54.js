class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    login(){ console.log("User logged in successfully"); };
    logout(){
        console.log("User logged out successfully");
    };
}
class Customer extends User{
    cart = [];
    constructor(name, email, password) {
        super(name, email);
        this.password = password;
    }
    buyProduct(){ 
        console.log("Product bought successfully");
    };
    addToCart(...item){ 
        this.cart.push(...item);
    };
}

class Seller extends User {
    constructor(name, email) {
        super(name, email);
    }
    addProduct(){
        console.log("Product added successfully");
    };
}

class Admin extends User{
    constructor(name, email, codes) {
        super(name, email);
        this.codes = codes;
    }

    hideProduct(){ 
        console.log("this product is not meant to buy freely");
    };
}

const c1 = new Customer("abc", "abc@gmail.com", "2345");
const s1 = new Seller("bac", "bac@gmail.com" );
const a1 = new Admin("bca", "bca@gmail.com", "2351");
// c1.buyProduct();    
// c1.addToCart("macbook", "samsung", "iphone");
// // console.log(c1);
// console.log(c1.cart);
// console.log(s1);
// s1.addProduct();
// console.log(a1);
// a1.hideProduct();

class PremiumCustomer extends Customer{
    price = [];

    constructor(name, email, password, membership) {
        super(name, email, password);
        this.membership = membership;
    }


    getDiscount(...itemValue) {
     
        console.log("You have 20% discount on your purchase");
        this.price.push(...itemValue);
    }
}

const u2 = new PremiumCustomer("xyz", "xyz@gmail.com", 2341, "silver");

u2.getDiscount(122);
console.log(u2);