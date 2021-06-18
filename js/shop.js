const shopContainer = document.getElementById("shop");

getMyMovies();
function getMyMovies() {
  let user = window.localStorage.getItem("user");
  if (user) {
    // obtiene peliculas guardas en localStorage
    user = JSON.parse(user);
    let movies = user.movies;
    shopContainer.innerHTML = "";
    movies.forEach(function (movie) {
      shopContainer.innerHTML += `
      <div class="col-12 col-md-4 col-lg-5" style="width: 18rem; margin-bottom: 1rem">
        <div class="card">
          <img src=${movie.Poster} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-dark">${movie.Title}</h5>
            <button class="btn btn-danger delete-movie">Borrar</button>
          </div>
        </div>
      </div>
      `;
    });
    activeDeleteButtons();
  } else {
    // envía al index si no hay usuario
    window.location.href = "index.html";
  }
}

function activeDeleteButtons() {
  // agrega evento de click a cada boton de borrar
  let btns = document.querySelectorAll(".delete-movie"); // lista de botones eliminar
  btns.forEach(function (el, index) {
    el.addEventListener("click", function () {
      let user = window.localStorage.getItem("user"); // usuario de localStorage
      user = JSON.parse(user);
      let movies = user.movies; // peliculas guardadas
      movies.splice(index, 1); // elimina elemento del array
      window.localStorage.setItem("user", JSON.stringify(user));
      getMyMovies(); // actualiza lista
    });
  });
}
