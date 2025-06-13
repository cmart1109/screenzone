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
      "image": "./images/posters/stitch.webp"
    },
    {
      "title": "Mission Impossible 8",
      "rating": "+13",
      "ratingLevel": 2,
      "duration": "169 Minutes",
      "image": "./images/posters/mi8.webp"
    },
    {
      "title": "Ballerina",
      "rating": "+16",
      "ratingLevel": 3,
      "duration": "169 Minutes",
      "image": "./images/posters/ballerina.webp"
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
      "image": "./images/posters/f1.webp"
    },
    {
      "title": "Hurry Up Tomorrow",
      "rating": "+18",
      "ratingLevel": 4,
      "duration": "169 Minutes",
      "image": "./images/posters/hut.webp"
    },
    {
      "title": "Something Beautiful",
      "rating": "+13",
      "ratingLevel": 2,
      "duration": "169 Minutes",
      "image": "./images/posters/miley.webp"
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
        const ticketButton = document.createElement('button');
        ticketButton.textContent = 'Get Tickets';
        ticketButton.className = 'ticket-button';
        poster.appendChild(img);
        poster.appendChild(title);
        poster.appendChild(rating);
        poster.appendChild(ticketButton);
        moviesContainer.appendChild(poster);
    });
}

function clearMovies() {
    moviesContainer.innerHTML = '';
}

function getAllMovies() {
    clearMovies();
    displayMovies(moviesJSON.movies);
}

function getPGMovies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const pgMovies = moviesArray.filter(movie => movie.ratingLevel === 1);
    displayMovies(pgMovies);
}

function get13Movies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const teenMovies = moviesArray.filter(movie => movie.ratingLevel === 2);
    displayMovies(teenMovies);
}

function get16Movies() {
    clearMovies(); 
    const moviesArray = moviesJSON.movies;
    const matureMovies = moviesArray.filter(movie => movie.ratingLevel === 3);
    displayMovies(matureMovies);
}

function get18Movies() {
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