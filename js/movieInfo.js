const myModal = document.getElementById("modal");
const userNameInput = document.getElementById("user");
const btnSaveUser = document.getElementById("btn-save-user");

//objeto json donde se almacenará la info de la pelicula
let movie = {};

btnSaveUser.addEventListener("click", saveUser);

getMovieInfo();
async function getMovieInfo() {
  //obtiene el id de la pelicula de la url
  let movieId = window.location.search.split("?")[1];
  // petición
  let response = await fetch(
    `https://www.omdbapi.com/?i=${movieId}&apikey=2499b840`);
  let data = await response.json();
  // guarda pelicula en el objeto global
  movie = data;
  fillMovie();
}

function fillMovie() {
  console.log(movie);
  // pone imagen de la pelicula
  let img = document.getElementById("poster");
  img.src = movie.Poster;
  
  // titulo de la pelicula
  let title = document.getElementById("title");
  title.innerText = movie.Title;
  
  // fecha de la pelicula
  let released = document.getElementById("released");
  released.innerText = movie.Released;
  
  // duration de la pelicula
  let duration = document.getElementById("duration");
  duration.innerText = movie.Runtime;
  
  // trama de la pelicula
  let plot = document.getElementById("plot");
  plot.innerText = movie.Plot;
}

function saveUser() {
  //obtiene nombre de usuario
  let userName = userNameInput.value.trim();
  /*
    si hay usuario
    crea el objeto, guarda la primera pelicula
  */
  if (user) {
    // guarda usuario
    let user = {
      user: userName,
      movies: [movie],
    };
    /* convierte el objeto en string
     guarda en localStorage
    */
    window.localStorage.setItem("user", JSON.stringify(user));

    // envía a la página de tienda
    window.location.href = "./shop.html";
  }
}

function openModal() {
  // obtiene usuario de localStorage
  let user = window.localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user); // convierte en json
    user.movies.push(movie); // agrega la pelicula seleccionada
    window.localStorage.setItem("user", JSON.stringify(user)); // vuelve a guarda en localStorage
    window.location.href = "./shop.html"; //envia a la tienda
  } else {
    myModal.style.display = "block"; //abre modal inscription
  }
}
function closeModal() {
  myModal.style.display = "none"; // cierra modal
}
