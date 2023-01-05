//addEventListener('touchstart') косание
//addEventListener('touchmove') свайп
//addEventListener('touchend') снятие пальца с элемента
//addEventListener('touchenter') если зажали пальцем на экран и навелись на элемент двигая пальцем
//addEventListener('touchleave') противоположно touchenter когда палце сдвинули с элемента
//addEventListener('touchcancel') при передвижение пальцем по страницы ушли с элементов на интерфейс браузера

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// event имеет такое свойство как: touches сколько пальцев сейчас касаются экрана,
// targetTouches тоже самое что и touches только он даёт данные только при прикосновение на определённом элементе,
// changedTouches список пальцев которые учавствуют в данном событие, если использовать с touchend то мы там получим данные пальца который был убран, даже если 4 остальных пальца остануться на экране 