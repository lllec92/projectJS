const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?', ' ');
const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt('Один из последних просмотренных фильмов?', ' '),
      b = promt('На сколько оцените его?', ' '),
      c = promt('Один из последних просмотренных фильмов?', ' '),
      d = promt('На сколько оцените его?', ' ');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);