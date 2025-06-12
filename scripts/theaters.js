const mainShowtimesContainer = document.getElementById('showtimes-container');
const theaterSelect = document.getElementById('theater-selection');
let theaters = {
  "theaters": [
    {
      "name": "Pig Plaza",
      "location": "123 Pig Street, Pig City",
      "movies": [
        {
          "title": "Ballerina",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },
        {
          "title": "F1: The Movie",
          "showtimes": ["12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"]
        },
        {
          "title": "Something Beautiful",
          "showtimes": ["1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"]
        }
      ]
    },
    {
      "name": "Cinema Galaxy",
      "location": "456 Star Avenue, Movie Town",
      "movies": [
        {
          "title": "Lilo and Stitch",
          "showtimes": ["9:45 AM", "12:45 PM", "3:45 PM", "6:45 PM", "9:45 PM", "12:45 AM"]
        },
        {
          "title": "Mission Impossible 8",
          "showtimes": ["10:15 AM", "1:15 PM", "4:15 PM", "7:15 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["10:45 AM", "1:45 PM", "4:45 PM", "7:45 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:15 AM", "2:15 PM", "5:15 PM", "8:15 PM"]
        },
        {
          "title": "Thunderbolts",
          "showtimes": ["11:45 AM", "2:45 PM", "5:45 PM", "8:45 PM", "11:45 PM"]
        },
        {
          "title": "F1: The Movie",
          "showtimes": ["12:15 PM", "3:15 PM", "6:15 PM", "9:15 PM"]
        },
        {
          "title": "Hurry Up Tomorrow",
          "showtimes": ["12:45 PM", "3:45 PM", "6:45 PM", "9:45 PM"]
        },
        {
          "title": "Something Beautiful",
          "showtimes": ["1:15 PM", "4:15 PM", "7:15 PM", "10:15 PM"]
        }
      ]
    },
    {
      "name": "Neon Cinemas",
      "location": "789 Light Blvd, Film City",
      "movies": [
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        },
        {
          "title": "Lilo and Stitch",
          "showtimes": ["10:00 AM","11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["10:40 AM", "1:40 PM", "4:40 PM", "7:40 PM"]
        },
        {
          "title": "Thunderbolts",
          "showtimes": ["11:20 AM", "2:20 PM", "5:20 PM", "8:20 PM"]
        },
        {
          "title": "F1: The Movie",
          "showtimes": ["11:40 AM", "2:40 PM", "5:40 PM", "8:40 PM"]
        },
        {
          "title": "Hurry Up Tomorrow",
          "showtimes": ["9:00 PM"]
        },
        {
          "title": "Something Beautiful",
          "showtimes": ["6:20 PM", "9:20 PM"]
        }
      ]
    },
    {
      "name": "Studio Royale",
      "location": "101 Cinema Plaza, Popcorn Town",
      "movies": [
        {
          "title": "Lilo and Stitch",
          "showtimes": ["12:30 PM", "3:30 PM", "6:30 PM"]
        },
        {
          "title": "Mission Impossible 8",
          "showtimes": ["10:00 AM", "4:00 PM", "7:00 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["10:30 AM", "1:30 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:00 AM", "12:00 PM", "2:00 PM", "5:00 PM", "8:00 PM"]
        },
        {
          "title": "Thunderbolts",
          "showtimes": ["11:30 AM", "2:30 PM", "8:30 PM"]
        },
        {
          "title": "Hurry Up Tomorrow",
          "showtimes": ["3:30 PM", "6:30 PM", "9:30 PM"]
        },
      ]
    }
  ]
}

let moviesImages = {
  "movies": [
    {
      "title": "Lilo and Stitch",
      "image": "./images/posters/stitch.png",
      "synopsis": "LILO AND STITCH is the heartwarming and hilarious story of a Hawaiian girl and the runaway alien who helps her rebuild her family"
    },
    {
      "title": "Mission Impossible 8",
      "image": "./images/posters/mi8.png",
      "synopsis": "Ethan and his team are on a mission to find and destroy an AI known as The Entity. The global journey results in incredible action scenes and more than one unexpected twist."
    },
    {
      "title": "Ballerina",
      "image": "./images/posters/ballerina.png",
      "synopsis": "In this spin-off of John Wick, we meet Eve Macaro (Ana de Armas), who seeks revenge against all those who murdered her family."
    },
    {
      "title": "How to Train Your Dragon",
      "image": "./images/posters/httyd.webp",
      "synopsis": "On the rugged Berk Island, where Vikings and dragons have held a bitter feud for generations, Hiccup is a boy unlike any other. The resourceful and underestimated son of Chief Stoick the Vast, he defies centuries of tradition by befriending Toothless, a feared Night Fury dragon."
    },
    {
      "title": "Thunderbolts",
      "image": "./images/posters/thunderbolts.webp",
      "synopsis": "The Thunderbolts are a team of anti-heroes and reformed villains who undertake covert missions for the government. Led by John Walker (Sebastian Stan), the team includes Yelena Belova (Florence Pugh), Bucky Barnes (Sebastian Stan), and others with questionable pasts."
    },
    {
      "title": "F1: The Movie",
      "image": "./images/posters/f1.png",
      "synopsis": "Nicknamed The Greatest Who Never Was, Sonny Hayes (Brad Pitt) was the most promising phenomenon of 1990s Formula One until his spectacular crash. Thirty years later, he's a nomadic driver for hire when he's approached by his former teammate Ruben Cervantes (Javier Bardem), owner of a struggling F1 team on the brink of collapse."
    },
    {
      "title": "Hurry Up Tomorrow",
      "image": "./images/posters/hut.png",
      "synopsis": "Hurry Up Tomorrow is a 2025 American psychological thriller film directed by Trey Edward Shults from a screenplay by Shults, Abel the Weeknd Tesfaye, and Reza Fahim. It serves as a companion piece to Tesfaye's 2025 album of the same name and stars Tesfaye as a fictionalized version of himself, alongside Jenna Ortega and Barry Keoghan. In the film, Tesfaye, struggling with depression and insomnia, gets pulled into an existential odyssey by a mysterious fan."
    },
    {
      "title": "Something Beautiful",
      "image": "./images/posters/miley.png",
      "synopsis": "Something Beautiful stands as a one-of-a-kind pop opera, where fantasy comes to life through the 13 original songs that make up Miley Cyrus's eponymous visual album. This cinematic experience was exclusively mixed by Alan Meyerson (Dune: Part One, Batman: The Dark Knight). The work was directed and written by Miley Cyrus, Jacob Bixenman, and Brendan Walter."
    }
  ]
}



function setShowtimes(moviesArray) {
    mainShowtimesContainer.innerHTML = '';
    moviesArray.forEach((movie, index) => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-showtimes');
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        const movieImage = document.createElement('img');
        movieImage.src = moviesImages.movies.find(m => m.title === movie.title).image; 
        const movieSynopsis = document.createElement('p');
        movieSynopsis.classList.add('movie-synopsis');
        movieSynopsis.textContent = moviesImages.movies.find(m => m.title === movie.title).synopsis;
        const showtimesList = movie.showtimes  
        const showtimesContainer = document.createElement('div');
        showtimesContainer.classList.add('showtimes-container');
        const showtimeBox = document.createElement('div');
        showtimesList.forEach(showtime => {
            const showtimeElement = document.createElement('span');
            showtimeElement.textContent = showtime;
            showtimeElement.classList.add('showtime');
            showtimesContainer.appendChild(showtimeElement);
        });
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(movieImage);
        movieContainer.appendChild(movieSynopsis);
        movieContainer.appendChild(showtimesContainer);

        mainShowtimesContainer.appendChild(movieContainer);
    });
}


function createTheaterOption() {
    theaters.theaters.forEach((theater, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${theater.name} - ${theater.location}`;
        theaterSelect.appendChild(option);
    })
}

function createTheaterList() {
    let index = 0;
}

theaterSelect.addEventListener('change', () => {
    const selectedTheater = theaterSelect.value;
    setShowtimes(theaters.theaters[selectedTheater].movies);
});

createTheaterOption();