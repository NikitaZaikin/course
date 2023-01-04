const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }                                        //если продублировать такое-же событие с другой задачей, то выполниться только 2-е 
//                                          //событие, а первое js просто заменит

// btn.addEventListener('click', function() {
//     alert('click');                             //если продублировать с другой задачей, то он выполнит их поочерёдно
// });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     if(i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// }

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);


// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);     //Оба выдадут только кнопку а не кнопку и контейнер: <button id='btn'>нажми на меня</button>  click <button id='btn'>нажми на меня</button>  click


// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);  //<button id='btn'>нажми на меня</button>  click <div class='overlay'>...</div>  click



const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();    //отменяет стандартные действия браузера, то есть он перестанет пересылать на ютуб
});


// addEventListener(event, function, {options: true or false});  // options: once, capture, passive