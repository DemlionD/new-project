"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, ``);
    
    while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, ``);
    }
} 

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt(`Один из последних просмотренных фильмов?`, ``),
            b = prompt(`На сколько оцените его?`, ``);
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(`Done`);
        } else {
            console.log(`Error`);
            i--;
        }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(`Просмотрено довольно мало фильмов!`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert(`Вы классический зритель!`);
    } else if (personalMovieDB.count >= 30) {
        alert(`Вы киноман!`);
    } else {
        alert(`Произошла ошибка`);
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ` + i);
    }
}

writeYourGenres();


// вопросы: он в приват функции написал хидден и !хидден я же сделал через иф но работает одинаково, еще он поставил после жанра ${i} а я поставил + i и разницы в итоге тоже, по крайней мере я ее не заметил, так вот если у меня работает значит у меня все правильно и можно сделать так как сделал я или нужно делать так как сделал он ведь он знает лучше