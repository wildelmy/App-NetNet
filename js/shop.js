const shopContainer = document.getElementById("shop");

function getMyMovies() {
  let user = window.localStorage.getItem("user");
  if (user) {
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
    window.location.href = "index.html";
  }
}
getMyMovies();

function activeDeleteButtons() {
  let btns = document.querySelectorAll(".delete-movie");
  btns.forEach(function (el, index) {
    el.addEventListener("click", function () {
      let user = window.localStorage.getItem("user");
      user = JSON.parse(user);
      let movies = user.movies;
      movies.splice(index, 1);
      window.localStorage.setItem("user", JSON.stringify(user));
      getMyMovies();
    });
  });
}
