const moviesContainer = document.getElementById('movies');
const allMoviesButton = document.getElementById('all');
const pgMoviesButton = document.getElementById('pg');
const teenMoviesButton = document.getElementById('teen');
const matureMoviesButton = document.getElementById('mature');
const adultMoviesButton = document.getElementById('adult');
letmoviesJSON = [];

async function getMovies() {
    const response = await fetch('../data/movies.json');
    const data = await response.json();
    moviesJSON = data.movies;
        return data.movies;
    }


function displayMovies(movies) {
    movies.forEach(movie => {
        const poster = document.createElement('div');
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
    const moviesArray = await getMovies();
    displayMovies(moviesArray);
}

async function getPGMovies() {
    clearMovies(); 
    const moviesArray = await getMovies();
    const pgMovies = moviesArray.filter(movie => movie.ratingLevel === 1);
    displayMovies(pgMovies);
}

async function get13Movies() {
    clearMovies(); 
    const moviesArray = await getMovies();
    const teenMovies = moviesArray.filter(movie => movie.ratingLevel === 2);
    displayMovies(teenMovies);
}

async function get16Movies() {
    clearMovies(); 
    const moviesArray = await getMovies();
    const matureMovies = moviesArray.filter(movie => movie.ratingLevel === 3);
    displayMovies(matureMovies);
}

async function get18Movies() {
    clearMovies(); 
    const moviesArray = await getMovies();
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