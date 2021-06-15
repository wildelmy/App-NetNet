const myModal = document.getElementById("modal");
const userNameInput = document.getElementById("user");
const btnSaveUser = document.getElementById("btn-save-user");

let movie = {};

btnSaveUser.addEventListener('click', saveUser)

async function getMovieInfo() {
  let url = window.location;
  let movieId = url.search.split("=")[1];
  let response = await fetch(
    `https://www.omdbapi.com/?i=${movieId}&apikey=2499b840`
  );
  let data = await response.json();
  movie = data;
  fillMovie();
}
getMovieInfo();

function fillMovie() {
  console.log(movie);
  let img = document.getElementById("poster");
  img.src = movie.Poster;

  let title = document.getElementById("title");
  title.innerText = movie.Title;

  let released = document.getElementById("released");
  released.innerText = movie.Released;

  let duration = document.getElementById("duration");
  duration.innerText = movie.Runtime;

  let plot = document.getElementById("plot");
  plot.innerText = movie.Plot;
}

function validateUser() {
  let user = window.localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    user.movies.push(movie);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./shop.html";
  } else {
    myModal.style.display = "block";
  }
}

function saveUser() {
  let userName = userNameInput.value.trim();
  if (user) {
    let user = {
      user: userName,
      movies: [movie],
    };
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./shop.html";
  }
}

function openModal() {
  validateUser();
}
function closeModal() {
  myModal.style.display = "none";
}
