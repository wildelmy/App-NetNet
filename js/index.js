const inputSearch = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const initialSearch = "Batman"

btnSearch.addEventListener('click', getMoviesBySearch) 

async function getMovies() {
  let response = await fetch(`http://www.omdbapi.com/?s=${initialSearch}&page=1&apikey=2499b840`);
  let data = await response.json();
  fillMovies(data);
}
getMovies();


async function getMoviesBySearch() {
  let searchValue = inputSearch.value.trim()
  let response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&page=1&apikey=2499b840`);
  let data = await response.json();
  fillMovies(data);
}

function fillMovies(data) {
  let movies = document.getElementById("movies");
  movies.innerHTML = "";
  data.Search.forEach((movie) => {
    movies.innerHTML += `
    <a href=movieInfo.html?movie?=${movie.imdbID}>
      <div class="card">
        <img src=${movie.Poster} class="card-img-top" height="200">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <span>${movie.Year}</span>
        </div>
      </div>
    </a>
    `;
  });
}