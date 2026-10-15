const API = "https://openlibrary.org/search.json";

const searchForm = document.getElementById("search-form");
const headerSearchInput = document.getElementById("search-input");
const booksHub = document.getElementById("books-hub");
const basketBtn = document.querySelector("#basket-btn");
const heroSectionOrder = document.querySelector("#hero-section-order");
const heroSectionRead = document.querySelector("#hero-section-read");
const heroSectionContainer = document.querySelector("#hero-section-container");
const categoryLink = document.querySelectorAll(".category-link");


categoryLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
console.log(link);
        categoryLink.forEach(l => {
            // console.log(l);
            l.classList.remove("bg-alpineGreen", "text-sunCream", "font-semibold"), 
            l.classList.add("hover:bg-sunLight50", "text-alpineGreen")
        });

        link.classList.remove("hover:bg-sunLight/50", "text-alpineGreen");
        link.classList.add("bg-alpineGreen", "text-sunCream", "font-semibold");

        let query = link.getAttribute("data-query");
        console.log(fetchingBooks(query));

        document.getElementById("catalog").scrollIntoView({behavior : "smooth"});

    })
})


heroSectionContainer.addEventListener('click', (e) => {
    const previewBtn = e.target.closest("#hero-section-read");
    if (previewBtn) {
        
        const iaId = previewBtn.getAttribute("data-ia");
        const bookKey = previewBtn.getAttribute("data-book-key");
        
        const readerContainer = document.querySelector("#reader-container");

        
        if (iaId && readerContainer) {
            readerContainer.innerHTML = ` 
                <div class="w-full h-150 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                    <iframe src="https://archive.org/embed/${iaId}" width="100%" height="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
                </div>
            `;
        } else if (readerContainer) {
            const validLink = bookKey ? `https://openlibrary.org${bookKey}` : "#";
            readerContainer.innerHTML = `
                <div class="p-8 text-center bg-paperWhite rounded-2xl border border-gray-200">
                    <p class="text-textMuted mb-4">Direct embedded preview isn't available for this specific title, but you can read it on Open Library.</p>
                    <a href="${validLink}" target="_blank" class="px-4 py-2 bg-alpineGreen text-sunCream font-bold rounded-xl text-sm">Open on Open Library</a>
                </div>
            `;
        }

    
        const card = previewBtn.closest(".bg-paperWhite");
        const titleElem = card.querySelector("#hero-section-title");
        const bookTitle = titleElem ? titleElem.textContent : "Selected Book";

        const readerTitle = document.querySelector("#reader-title");
        if (readerTitle) {
            readerTitle.textContent = `${bookTitle} - Preview`;
        }

        document.getElementById("reader-section").scrollIntoView({ behavior: "smooth" });
        return;
    }

    // Order (Cart functionality)
    const orderBtn = e.target.closest("#hero-section-order");
    if (orderBtn) {
        const card = orderBtn.closest(".bg-paperWhite");
        const title = card.querySelector("h3").textContent;
        const author = card.querySelector("p").textContent;
        const imgSrc = card.querySelector("img").src;

        const price = (12.99 + (title.length % 10)).toFixed(2);

        let cart = JSON.parse(localStorage.getItem("bookCart")) || [];
        cart.push({ title, author, imgSrc, price });
        localStorage.setItem("bookCart", JSON.stringify(cart));
        window.location.href = "basket.html";
    }
});
if (basketBtn) {
    basketBtn.addEventListener("click", (e) => {
        window.location.href = "basket.html"
    });
}



searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = headerSearchInput.value.trim();
    if (query) {
        fetchingBooks(query);
        headerSearchInput.value = "";
        document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    }
});


//preview and order
// 1. Catalog Grid Event Delegation
booksHub.addEventListener("click", (e) => {
    const previewBtn = e.target.closest(".open-reader-btn");
    if (previewBtn) {
        const iaId = previewBtn.getAttribute("data-ia");
        const bookKey = previewBtn.getAttribute("data-book-key");
        
        const readerContainer = document.querySelector("#reader-container");
     
        if (iaId && readerContainer) {
            readerContainer.innerHTML = ` 
                <div class="w-full h-[600px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                    <iframe src="https://archive.org/embed/${iaId}" width="100%" height="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
                </div>
            `;
        } else if (readerContainer) {
            const validLink = bookKey ? `https://openlibrary.org${bookKey}` : "#";
            readerContainer.innerHTML = `
                <div class="p-8 text-center bg-paperWhite rounded-2xl border border-gray-200">
                    <p class="text-textMuted mb-4">Direct embedded preview isn't available for this specific title, but you can read it on Open Library.</p>
                    <a href="${validLink}" target="_blank" class="px-4 py-2 bg-alpineGreen text-sunCream font-bold rounded-xl text-sm">Open on Open Library</a>
                </div>
            `;
        }

        const card = previewBtn.closest(".bg-paperWhite");
        const titleElem = card.querySelector(".book-card-title");
        const bookTitle = titleElem ? titleElem.textContent : "Selected Book";
        
        const readerTitle = document.querySelector("#reader-title");
        if (readerTitle) {
            readerTitle.textContent = `${bookTitle}Preview`;
        }

        document.getElementById("reader-section").scrollIntoView({ behavior: "smooth" });
        return;
    }

    // Order (Cart functionality)
    const orderBtn = e.target.closest(".add-to-cart-btn");
    if (orderBtn) {
        const card = orderBtn.closest(".bg-paperWhite");
        const title = card.querySelector("h3").textContent;
        const author = card.querySelector("p").textContent;
        const imgSrc = card.querySelector("img").src;

        const price = (12.99 + (title.length % 10)).toFixed(2);

        let cart = JSON.parse(localStorage.getItem("bookCart")) || [];
        cart.push({ title, author, imgSrc, price });
        localStorage.setItem("bookCart", JSON.stringify(cart));
        window.location.href = "basket.html";
    }
});

// 2. Hero Book Card Click Handler
const heroBookCard = document.querySelector("#hero-book-card");
if (heroBookCard) {
    heroBookCard.addEventListener("click", () => {
        const iaId = heroBookCard.getAttribute("data-ia");
        const readerContainer = document.querySelector("#reader-container");
        
        if (iaId && readerContainer) {
            readerContainer.innerHTML = ` 
                <div class="w-full h-[600px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                    <iframe src="https://archive.org/embed/${iaId}" width="100%" height="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
                </div>
            `;
        }
        
        const readerTitle = document.querySelector("#reader-title");
        if (readerTitle) {
            readerTitle.textContent = "The Midnight Library - Preview";
        }
        
        document.getElementById("reader-section").scrollIntoView({ behavior: "smooth" });
    });
}
function loadRandomHeroBook(docs) {
    // 1. Filter books that have both an Internet Archive ID (for preview) and a cover image
    const validBooks = docs.filter(b => b.ia && b.ia.length > 0 && b.cover_i);
    
    if (validBooks.length === 0) return; // Fallback if none match

    // 2. Pick a random book from the filtered list
    const randomBook = validBooks[Math.floor(Math.random() * validBooks.length)];

    // 3. Extract its details
    const title = randomBook.title || "Featured Book";
    const author = randomBook.author_name ? randomBook.author_name[0] : "Unknown Author";
    const coverUrl = `https://covers.openlibrary.org/b/id/${randomBook.cover_i}-L.jpg`;
    const iaId = randomBook.ia[0];
    const bookKey = randomBook.key || "";

    // 4. Update the Hero HTML elements
    const heroImg = document.getElementById("hero-section-img");
    const heroTitle = document.getElementById("hero-section-title");
    const heroAuthor = document.getElementById("hero-section-author");
    const previewBtn = document.getElementById("hero-section-read");
    const orderBtn = document.getElementById("hero-section-order");

    if (heroImg) heroImg.src = coverUrl;
    if (heroTitle) heroTitle.textContent = title;
    if (heroAuthor) heroAuthor.textContent = author;

    // 5. Inject the data attributes so the buttons work instantly
    if (previewBtn) {
        previewBtn.setAttribute("data-ia", iaId);
        previewBtn.setAttribute("data-book-key", bookKey);
    }
    if (orderBtn) {
        orderBtn.setAttribute("data-id", bookKey);
    }
}

function displayBooks(books) {
    booksHub.innerHTML = "";

    // Filter out any books that don't have a cover image ID
    const validBooks = books ? books.filter(b => b.cover_i) : [];
    if (validBooks.length === 0) {
        booksHub.innerHTML = `<p class="text-textMuted col-span-full text-center py-8">No books with covers found. Try another search!</p>`;
        return;
    }


    validBooks.forEach((b) => {
        const div = document.createElement("div");
        div.className = "bg-paperWhite p-6 rounded-3xl border border-gray-200/80 shadow-sm w-full flex flex-col justify-between";
        const title = b.title || "Untitled";
        const authors = b.author_name ? b.author_name.join(", ") : "Unknown Author";
        const coverImg = `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`;
        const subject = b.subject && b.subject.length > 0 ? b.subject[0] : "General";

        const iaId = (b.ia && b.ia.length > 0) ? b.ia[0] : "";
        const bookKey = b.key || "";

        div.innerHTML = `
            <div>
                <div class="aspect-3/4 rounded-2xl overflow-hidden bg-gray-100 w-full shadow-inner">
                    <img src="${coverImg}" alt="${title}" class="w-full h-full object-cover">
                </div>
                <div class="mt-4">
                    <span class="text-[10px] uppercase font-bold text-sunWarmth tracking-wider line-clamp-1">${subject}</span>
                    <h3 class="book-card-title font-serif text-xl font-bold text-alpineGreen mt-0.5 line-clamp-1">${title}</h3>
                    <p class="text-xs text-textMuted mt-1 line-clamp-1">${authors}</p>
                </div>
            </div>

            <div class="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="font-serif font-bold text-alpineGreen text-sm">Available</span>
                <div class="flex space-x-2">
                    <button class="open-reader-btn px-3.5 py-1.5 bg-sunCream hover:bg-sunLight text-alpineGreen text-xs font-bold rounded-lg transition-colors" data-id="${b.key}" data-ia="${iaId}" data-book-key = "${bookKey}">
                        <i class="fa-solid fa-book-open mr-1"></i> Preview
                    </button>
                    <button class="add-to-cart-btn px-3.5 py-1.5 bg-alpineGreen hover:bg-pineHover text-sunCream text-xs font-bold rounded-lg transition-colors" data-id="${b.key}">
                        <i class="fa-solid fa-cart-shopping mr-1"></i> Order
                    </button>
                </div>
            </div>
        `;

        booksHub.appendChild(div);
        // console.log(`${b.key}`);


    });
}

async function fetchingBooks(bookQuery) {
    let query = bookQuery ? bookQuery : "bestsellers";
    // console.log(query);
    let url = `${API}?q=${encodeURIComponent(query)}&limit=16`; // Increased limit slightly since some get filtered out


    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.docs);
        displayBooks(data.docs)
       loadRandomHeroBook(data.docs)


    } catch (error) {
        console.log("Error in fetching books", error);
    }
}

// Load initial books on page open
fetchingBooks("bestsellers");