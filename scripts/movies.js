const moviesContainer = document.getElementById('movies');
const allMoviesButton = document.getElementById('all');
const pgMoviesButton = document.getElementById('pg');
const teenMoviesButton = document.getElementById('teen');
const matureMoviesButton = document.getElementById('mature');
const adultMoviesButton = document.getElementById('adult');
let moviesJSON = {
  "movies": [
    {
      "title": "Lilo and Stitch",
      "rating": "PG",
      "ratingLevel": 1,
      "duration": "106 Minutes",
      "image": "/images/posters/stitch.png"
    },
    {
      "title": "Mission Impossible 8",
      "rating": "+13",
      "ratingLevel": 2,
      "duration": "169 Minutes",
      "image": "./images/posters/mi8.png"
    },
    {
      "title": "Ballerina",
      "rating": "+16",
      "ratingLevel": 3,
      "duration": "169 Minutes",
      "image": "./images/posters/ballerina.png"
    },
    {
      "title": "Hot to Train a Dragon",
      "rating": "PG",
      "ratingLevel": 1,
      "duration": "169 Minutes",
      "image": "./images/posters/httyd.webp"
    },
    {
      "title": "Thunderbolts",
      "rating": "+13",
      "ratingLevel": 2,
      "duration": "169 Minutes",
      "image": "./images/posters/thunderbolts.webp"
    },
    {
      "title": "F1: The movie",
      "rating": "+16",
      "ratingLevel": 3,
      "duration": "169 Minutes",
      "image": "./images/posters/f1.png"
    },
    {
      "title": "Hurry Up Tomorrow",
      "rating": "+18",
      "ratingLevel": 4,
      "duration": "169 Minutes",
      "image": "./images/posters/hut.png"
    },
    {
      "title": "Something Beautiful",
      "rating": "+13",
      "ratingLevel": 2,
      "duration": "169 Minutes",
      "image": "./images/posters/miley.png"
    }
  ]
}


function displayMovies(movies) {
    movies.forEach(movie => {
        const poster = document.createElement('a');
        poster.className = 'poster';
        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.title;
        img.loading = 'lazy';
        const title = document.createElement('h3');
        title.textContent = movie.title;
        const rating = document.createElement('p');
        rating.textContent = movie.rating;
        poster.appendChild(img);
        poster.appendChild(title);
        poster.appendChild(rating);
        moviesContainer.appendChild(poster);
    });
}

function clearMovies() {
    moviesContainer.innerHTML = '';
}

async function getAllMovies() {
    clearMovies();
    displayMovies(moviesJSON.movies);
}

async function getPGMovies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const pgMovies = moviesArray.filter(movie => movie.ratingLevel === 1);
    displayMovies(pgMovies);
}

async function get13Movies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const teenMovies = moviesArray.filter(movie => movie.ratingLevel === 2);
    displayMovies(teenMovies);
}

async function get16Movies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const matureMovies = moviesArray.filter(movie => movie.ratingLevel === 3);
    displayMovies(matureMovies);
}

async function get18Movies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const adultMovies = moviesArray.filter(movie => movie.ratingLevel === 4);
    displayMovies(adultMovies);
}

allMoviesButton.addEventListener('click', getAllMovies);
pgMoviesButton.addEventListener('click', getPGMovies);
teenMoviesButton.addEventListener('click', get13Movies);
matureMoviesButton.addEventListener('click', get16Movies);
adultMoviesButton.addEventListener('click', get18Movies);
document.addEventListener('DOMContentLoaded', () => { 
    getAllMovies();
})