const theaterSelect = document.getElementById('theater-selection');
const movieSelect = document.getElementById('movie-form');
const showtimeSelect = document.getElementById('showtime-form')
const comboSelect = document.getElementById('combo-form');
const ticketsNumber = document.getElementById('tickets');
const submitButton = document.getElementById('submit');

const theaters = {
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
const combosList = {
  "combos": [
    {
      "name": "Personal Combo",
      "price": 8.99,
      "sale": 7.99,
      "image": "./images/candy/1.webp"
    },
    {
      "name": "Hot Combo",
      "price": 11.99,
      "sale": 9.99,
      "image": "./images/candy/2.webp"
    },
    {
      "name": "Sweet Combo",
      "price": 12.99,
      "sale": 10.99,
      "image": "./images/candy/3.webp"
    },
    {
      "name": "Double Special Combo",
      "price": 19.99,
      "sale": 15.99,
      "image": "./images/candy/4.webp"
    }
  ]
}

function createTheaterOption() {
    theaters.theaters.forEach((theater, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${theater.name} - ${theater.location}`;
        theaterSelect.appendChild(option);
    })
}

function createMovieOption (movies) {
  movieSelect.innerHTML = "";
  movies.forEach((movie, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = movie.title
    movieSelect.appendChild(option);
  })
}

function createshowtimeOption(showtimes) {
  showtimeSelect.innerHTML = "";
  showtimes.forEach((shotime, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = shotime;
    showtimeSelect.appendChild(option)
  })
}

function createCombosOption(combos) {
  combos.forEach((combo, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = combo.name;
      comboSelect.appendChild(option);
  })
}



theaterSelect.addEventListener('change', () => {
  const selectedTheaterIndex = theaterSelect.value;
  const selectedTheater = theaters.theaters[selectedTheaterIndex];
  createMovieOption(selectedTheater.movies);
  showtimeSelect.innerHTML = "";
});

movieSelect.addEventListener('change', () => {
  const theaterIndex = theaterSelect.value;
  const movieIndex = movieSelect.value;
  const selectedMovie = theaters.theaters[theaterIndex].movies[movieIndex];
  createshowtimeOption(selectedMovie.showtimes)
})

submitButton.addEventListener('click', () => {
  const selectedTheaterIndex = theaterSelect.value;
  const selectedMovieIndex = movieSelect.value;
  const selectedShowtimeIndex = showtimeSelect.value;
  const selectedTicketsNumber = ticketsNumber.value;
  const selectedComboIndex = comboSelect.value;
  localStorage.setItem("ticket", JSON.stringify({
    theaterIndex: selectedTheaterIndex,
    movieIndex: selectedMovieIndex,
    showtimeIndex: selectedShowtimeIndex,
    ticketsIndex: selectedTicketsNumber,
    comboIndex: selectedComboIndex
  }))

})


createTheaterOption();
createCombosOption(combosList.combos);