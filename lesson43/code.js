'use strict'


const wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),     // если мы уже имеем родителя елемента, то вместо документа мы в начале можем обратиться к нему
      circles = document.querySelectorAll('.circle');


circles[0].style.cssText = "background-color: red; width: 40%;"

const div = document.createElement('div');

div.classList.add('black');

// wrapper.prepend(div);
// wrapper.append(div);

// hearts[0].before(div);
// hearts[0].after(div);


// circles[0].remove();

// hearts[0].replaceWith(circles[0]);


//Устаревшие методы

// wrapper.appendChild(div);    тоже что и append

// wrapper.insertBefore(div, hearts[0]); (какой элемент, перед каким)   вместо методов before prepend. так как раньше не было методов before after prepend

// wrapper.removeChild(hearts[0]); тоже самое что и .remove

// wrapper.replaceChild(circles[0], hearts[0]);  (какой поменять, на который меняется) тоже самое что и .replaceWith




// div.innerHTML = 'Hello World';

// div.textContent = "hello";

// div.insertAdjacentHTML('beforbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
// div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');