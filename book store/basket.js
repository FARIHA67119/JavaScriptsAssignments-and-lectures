const basketItemsContainer = document.querySelector("#basket-items-container");
const basketSubtotal = document.querySelector("#basket-subtotal");
const basketTotal = document.querySelector("#basket-total");

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("bookCart")) || [];

    if(cart.length === 0) {
        basketItemsContainer.innerHTML = `
        <div class="bg-paperWhite p-8 rounded-3xl text-center text-textMuted border border-gray-200/80 shadow-sm col-span-full">
                <p class="text-base font-medium">Your basket is empty.</p>
                <a href="index.html" class="inline-block mt-4 px-6 py-2.5 bg-alpineGreen text-sunCream rounded-xl text-xs font-bold hover:bg-pineHover transition-colors">Browse Bookstore</a>
            </div>
        `;
        if(basketSubtotal) basketSubtotal.textContent = "$0.00";
        if(basketTotal) basketTotal.textContent = "$0.00";
        return;
    }

    basketItemsContainer.innerHTML = "";
    let subTotal = 0;

    cart.forEach((item, index) => {
        subTotal += parseFloat(item.price);

        const div = document.createElement("div");

        div.className = "bg-paperWhite p-4 sm:p-6 rounded-3xl border border-gray-200/80 shadow-sm flex items-center justify-between gap-4";
        
        div.innerHTML = `
            <div class="flex items-center space-x-4">
                <div class="w-16 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <img src="${item.imgSrc}" alt="${item.title}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-serif text-lg font-bold text-alpineGreen line-clamp-1">${item.title}</h3>
                    <p class="text-xs text-textMuted mt-0.5 line-clamp-1">${item.author}</p>
                    <span class="text-xs font-bold text-sunWarmth mt-2 block">$${item.price}</span>
                </div>
            </div>
            <button onclick="removeItem(${index})" class="text-textMuted hover:text-red-500 transition-colors p-2 text-sm" title="Remove item">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        basketItemsContainer.appendChild(div);
    });

    if(basketSubtotal) basketSubtotal.textContent = `$${subTotal.toFixed(2)}`;
    if(basketTotal) basketTotal.textContent = `$${subTotal.toFixed(2)}`;
}

window.removeItem = function(index) {
    let cart = JSON.parse(localStorage.getItem("bookCart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("bookCart", JSON.stringify(cart));
    loadCart();
    // console.log(cart);
}

document.addEventListener("DOMContentLoaded", loadCart);
loadCart();