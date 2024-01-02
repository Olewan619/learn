const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt(
            'Сколько фильмов вы уже посмотрели?',
            ''
        );

        while (
            personalMovieDB.count == '' ||
            personalMovieDB.count == null ||
            // eslint-disable-next-line no-restricted-globals
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                'Сколько фильмов вы уже посмотрели?',
                ''
            );
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    WriteYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр по номеров ${i}`);

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }

        // Альтернативный вариант из урока

        // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

        // if (genres === '' || genres == null) {
        //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.genres.sort();
        // }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
