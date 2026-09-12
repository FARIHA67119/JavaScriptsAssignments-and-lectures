// // console.log(window.document);

// // let h = document.getElementById("heading");
// // let h = document.querySelector("h1");
// // let h1= document.querySelector(".head");
// let h2 = document.querySelector("#heading1");
// let h1 = document.querySelector("#pw");
// h1.textContent = "<h1>Hello World</h1>";
// h1.innerHTML = "<h1>Hello World</h1>";
// h1.innerText = "Hello World";
// // console.log(h);
// // console.log(h1);
// // console.log(h1.textContent);
// // console.log(h1.innerHTML);
// // console.log(h1.innerText);

// // h1.setAttribute("style", "color: red; font-size: 50px; background-color: yellow; text-align: center;");

// let btn = document.querySelector("#btn");
// btn.setAttribute("disable", "false");
// btn.remove = "disable";

// let res = h1.getAttribute("style");
// console.log(res);
// h1.classList.contains("random");
// console.log(h1.classList.contains("random"));
// h1.style.backgroundColor = "lavender";
// h1.dataset.helloWorld = "Hi";

// console.log(h1.dataset.helloWorld);
// // btn.removeAttribute("disabled");

let products = [ //backend data
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];
let productList = document.querySelector("#product-list");
products.forEach((product) => { 
  console.log(product);
  const card = document.createElement("p");
  card.textContent = `${product.name} - ${product.price}`;
  //for each product, create a new paragraph element and set its text content to the product's name and price. Then append the paragraph to the product list container in the HTML document.
  productList.append(card);

})
// let div = document.createElement("div");
// div.textContent = "Hello World";

// let body = document.querySelector("body");
// console.log(body);
// // body.appendChild(div);
// body.append(div);
// body.prepend(div);//first appear on document
// // console.log(div);