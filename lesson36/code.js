"use strict"

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]); 

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;   //Устаревший формат

// Object.setPrototypeOf(john, soldier);   // (объект которому я хочу назначить прототип, тот объект прототип которого мы устанавливаем). Используем если есть устоявшийся объект(всё уже существует), не создаётся в динамике

// console.log(jonh); //{ health: 100 }
// console.log(jonh.armor);  //100
// jonh.sayHello(); //Hello



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier); 

