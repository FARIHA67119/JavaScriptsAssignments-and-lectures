const movieForm = document.getElementById("movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = movieInput.value.trim();
    if(!query)
        return;
    console.log(query);
    searchMovie(query);

})

async function searchMovie(movieName) {
    movieHub.innerHTML = `<span class="loader"></span>`

    let response = await fetch(`https://www.omdbapi.com/?apikey=28ac641e&s=${encodeURIComponent(movieName)}`);
    let data = await response.json();
    console.log(data);

    if(data.Response === "True") {
        displayMovie(data.Search)
    } else {
        console.log(data.Error);
        movieHub.innerHTML = `<p>${data.Error}</p>`;
    }
}

function displayMovie(movies) {
    movieHub.innerHTML = "";

    movies.forEach((movie)=> {
        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;
        div.setAttribute("class", "movie-card");

        div.innerHTML = `
          <div>
            <img src="${movie.Poster}" alt="">
        </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
        </div>
        `
        movieHub.append(div);
    });
}

movieHub.addEventListener("click",(e) => {
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card");
    const imdbID = movieCard.dataset.imdbID;
    location.href = `moviedetails.html?id=${imdbID}`
})


const trendingMovies = [
    "Parasite",
    "Train to Busan",
    "Oldboy",
    "The Handmaiden",
    "Decision to Leave",
    "RRR",
    "Jawan",
    "The Host"
];

async function loadTrendingMovies() {
    movieHub.innerHTML = `<span class="loader"></span>`;

    try{
        const fetchPromises = trendingMovies.map(title => 
            fetch(`https://www.omdbapi.com/?apikey=28ac641e&t=${encodeURIComponent(title)}`).then(res => res.json())
        );

        const results = await Promise.all(fetchPromises);

        //filter out any failed lookups

        const validMovies = results.filter(movie => movie.Response === "True");
    
        displayMovie(validMovies);
    } catch(error) {
        console.log("Movies could not fetch", error);
        movieHub.innerHTML = `<p class="error-msg"> Failed to load trending movies.</p>`
    }

}

window.addEventListener("DOMContentLoaded", loadTrendingMovies);

