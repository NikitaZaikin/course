'use strict'

// To string

// 1)

console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ''));
console.log(typeof(null + ''));


const num = 5;
                                                //пример
console.log('https://vk.com/catalog/' + num);


// To Number

// 1)

console.log(typeof(Number('4')));

// 2)

console.log(typeof(+'5'));

// 3)

console.log(typeof(parseInt('15px', 10)));


let answ = +prompt('Hello', '');


// To Boolean

// 0, '', null, undefined, NaN == false, others will be true

// 1)

let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!'4'));