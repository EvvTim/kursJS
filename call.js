// // funkcja.call(OBIEKT, ARGUMENTY)

// const movie = {
//     title: 'The Shining',
//     test: 'test',
// }


// const showMovie = function(price, cinema) {
//     console.log(`Film: "${this.title}", bilet: ${price}zł, kino: ${cinema}`);
// }

// showMovie.call(movie, 20, 'Kino')

function Movie(title, year) {
    this.title = title;
    this.year = year;
};

function ActionMovie(title, year) {

    Movie.call(this, title, year);

    this.category = 'Acja';

    console.log(`"${this.title}", rok ${this.year}, kategoria: ${this.category}`);


}

const newMovie = new ActionMovie('dfdfd',34);

