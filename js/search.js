const myModal = document.getElementById("modal");

async function getMovieInfo() {
  let url = window.location;
  let movieId = url.search.split("=")[1];
  let response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=2499b840`);
  let data = await response.json();
  fillMovie(data)
}
getMovieInfo();


function fillMovie(movie) {
  console.log(movie)
  let img = document.getElementById('poster')
  img.src = movie.Poster

  let title = document.getElementById('title')
  title.innerText = movie.Title

  let released = document.getElementById('released')
  released.innerText = movie.Released

  let duration = document.getElementById('duration')
  duration.innerText = movie.Runtime

  let plot = document.getElementById('plot')
  plot.innerText = movie.Plot
}



function openModal() {
  myModal.style.display = "block";
}
function closeModal() {
  myModal.style.display = "none";
}
