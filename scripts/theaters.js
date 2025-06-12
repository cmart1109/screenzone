const mainShowtimesContainer = document.getElementById('showtimes-container');
const theaterSelect = document.getElementById('theater-selection');
let theaters = {
  "theaters": [
    {
      "name": "Pig Plaza",
      "location": "123 Pig Street, Pig City",
      "movies": [
        {
          "title": "Lilo and Stitch",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
          "title": "Mission Impossible 8",
          "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },
        {
          "title": "Thunderbolts",
          "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"]
        },
        {
          "title": "F1: The Movie",
          "showtimes": ["12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"]
        },
        {
          "title": "Hurry Up Tomorrow",
          "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]
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
          "showtimes": ["9:45 AM", "12:45 PM", "3:45 PM", "6:45 PM"]
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
          "showtimes": ["11:45 AM", "2:45 PM", "5:45 PM", "8:45 PM"]
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
          "title": "Lilo and Stitch",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
          "title": "Mission Impossible 8",
          "showtimes": ["10:20 AM", "1:20 PM", "4:20 PM", "7:20 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["10:40 AM", "1:40 PM", "4:40 PM", "7:40 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
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
          "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"]
        },
        {
          "title": "Something Beautiful",
          "showtimes": ["12:20 PM", "3:20 PM", "6:20 PM", "9:20 PM"]
        }
      ]
    },
    {
      "name": "Studio Royale",
      "location": "101 Cinema Plaza, Popcorn Town",
      "movies": [
        {
          "title": "Lilo and Stitch",
          "showtimes": ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
        },
        {
          "title": "Mission Impossible 8",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
          "title": "Ballerina",
          "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
        },
        {
          "title": "How to Train Your Dragon",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        },
        {
          "title": "Thunderbolts",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },
        {
          "title": "F1: The Movie",
          "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"]
        },
        {
          "title": "Hurry Up Tomorrow",
          "showtimes": ["12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"]
        },
        {
          "title": "Something Beautiful",
          "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]
        }
      ]
    }
  ]
}


function setShowtimes(moviesArray) {
    mainShowtimesContainer.innerHTML = '';
    moviesArray.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie');
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        const showtimesList = movie.showtimes  
        const showtimesContainer = document.createElement('div');
        showtimesContainer.classList.add('showtimes-container');
        showtimesList.forEach(showtime => {
            const showtimeElement = document.createElement('span');
            showtimeElement.textContent = showtime;
            showtimeElement.classList.add('showtime');
            showtimesContainer.appendChild(showtimeElement);
        });
        movieContainer.appendChild(movieTitle);
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