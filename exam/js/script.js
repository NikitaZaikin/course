'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Годзилла против Конга",
            "Вампиры средней полосы",
            "Рик и морти",
            "Одержимость",
            "Флэш"
        ]
    };
    
    const ad = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bgcImg = document.querySelector('.promo__bg'),
          list = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addFilm = addForm.querySelector('button'),
          checkbox = document.querySelector('[type = "checkbox"]'),
          addInput = addForm.querySelector('.adding__input'),
          modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          tabsParent = document.querySelector('.tabs'),
          tabs = document.querySelectorAll('.promo__menu-item'),
          tabsContent = document.querySelectorAll('.promo__content'),
          modalParent = document.querySelectorAll(".location");

    

    

//List of Films//

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
    
    const makeChanges = () => {
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

//modal window//

    modalTrigger.forEach(btn => {   
        btn.addEventListener('click', function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() { 
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
//Tabs//

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })
    
        tabs.forEach(tab => {
            tab.classList.remove('promo__menu-item_active');
        })
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('promo__menu-item_active');
    }

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
    
        if(target && target.classList.contains('promo__menu-item')){
            tabs.forEach((item, i ) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    
    })
    
    hideTabContent();
    showTabContent(0);
    makeChanges();
    createMovieList(movieDB.movies, list);


});