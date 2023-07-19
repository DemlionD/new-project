"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt(`Сколько фильмов вы посмотрели?`, ``);
        
        while (personalMovieDB.count == `` || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`Сколько фильмов вы посмотрели?`, ``);
        }
    }, 
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert(`Просмотрено довольно мало фильмов!`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert(`Вы классический зритель!`);
        } else if (personalMovieDB.count >= 30) {
            alert(`Вы киноман!`);
        } else {
            alert(`Произошла ошибка`);
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let a = personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ` + i);
            if (a != null && a != ``) {
                console.log(`Well Done!`);
            } else {
                console.log(`Error!`);
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${personalMovieDB.genres[i]}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

// вопросы: он в приват функции написал хидден и !хидден я же сделал через иф но работает одинаково, еще он поставил после жанра ${i} а я поставил + i и разницы в итоге тоже, по крайней мере я ее не заметил, так вот если у меня работает значит у меня все правильно и можно сделать так как сделал я или нужно делать так как сделал он ведь он знает лучше
// так еще один вопрос я указал иф чтото равно равно тру или фолс а он просто написал чтото и у него все работает разнице же нет просто я уточнил (это в тоглере)