const movieDetail = document.querySelector("#movie-detail");
const param = new URLSearchParams(location.search);
const imdbID = param.get("id");

if(imdbID) {
    searchMovies(imdbID.trim());
}

async function searchMovies(movieName) {
  
    let response = await fetch(`https://www.omdbapi.com/?apikey=28ac641e&i=${movieName}`);
    let data = await response.json();
    console.log(data);

    if(data.Response === "True") {
        displayMovies(data);
        backBtn();
    } else {
        console.log(data.Error);
    }
    
}

function displayMovies(data) {
    movieDetail.innerHTML = `
        <div>
          <img src="${data.Poster !== "N/A" ? data.Poster : ""}" alt="${data.Title}">
        </div>

        <div>
            <h2>${data.Title}</h2>

            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMBD: ${data.imdbRating} / 10</p>
            </section>

            <div>
                <p>Plot overview</p>
                <p>${data.Plot}</p>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>

            <div>
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>

            <button>
                <a href=https://www.imdb.com/title/${data.imdbID} target= "_blank">View on IMDb</a>
            </button>
        </div>
    `
    // mvieDetail.appe)
}
function backBtn() {
    let btn = document.querySelector("#backBtn");
    if(btn) {
        btn.addEventListener('click', () => {
            window.location.href = "http://127.0.0.1:5500/javaScript/movieHubProject/index.html";
        });
    };
};