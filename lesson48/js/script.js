/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ad = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bgcImg = document.querySelector('.promo__bg'),
          list = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addFilm = addForm.querySelector('button'),
          checkbox = document.querySelector('[type = "checkbox"]'),
          addInput = addForm.querySelector('.adding__input');
    

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if(newFilm) {

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, list);

            e.target.reset();
        }

        
    });

    const deleteAdv = (array) => {
        array.forEach(item => {
            item.remove();
        });
    };
    
    const makeChenges = () => {
        genre.textContent = 'ДРАМА';
    
        bgcImg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    }
    
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;                                            //ну или вместо ${film} можно поставить movieDB.movies[i]
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        });
    }

    makeChenges();
    deleteAdv(ad);
    createMovieList(movieDB.movies, list);
});