const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const initialSearch = "Batman";

btnSearch.addEventListener("click", getMoviesBySearch);

getMovies();
async function getMovies() {
  // petición para obtener peliculas
  let response = await fetch(
    `https://www.omdbapi.com/?s=${initialSearch}&page=1&apikey=2499b840`
  );
  // convierte datos en json
  let data = await response.json();
  fillMovies(data);
}

async function getMoviesBySearch() {
  // obtiene valor busqueda
  let searchValue = inputSearch.value.trim();
  // petición para obtener peliculas de busqueda
  let response = await fetch(
    `https://www.omdbapi.com/?s=${searchValue}&page=1&apikey=2499b840`
  );
  // convierte datos en json
  let data = await response.json();
  fillMovies(data);
}

function fillMovies(data) {
  //obtiene elemento contenedor de peliculas
  let moviesContainer = document.getElementById("moviesContainer");
  let movies = data.Search; //array de peliculas
  moviesContainer.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    //agrega un link por cada pelicula
    // con el id de la pelicula para obtenerlo en movieInfo.html
    moviesContainer.innerHTML += `
    <a href=movieInfo.html?${movies[i].imdbID}>
      <div class="card">
        <img src=${movies[i].Poster} class="card-img-top" height="200">
        <div class="card-body">
          <h5 class="card-title">${movies[i].Title}</h5>
          <span>${movies[i].Year}</span>
        </div>
      </div>
    </a>
    `;
  }
}
