// funkcja.call(OBIEKT, ARGUMENTY);

// function test() {
//     console.log('test');
// }

// test.call();

const movie = {

    title: 'The Shining'
}

const showMovie = function(price, cinema) {
    console.log(`Film: "${this.title}", bilet: ${price}zł, kino: ${cinema}`);
}

showMovie.call(movie, 23, 'Super KINO');