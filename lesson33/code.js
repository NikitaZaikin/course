// const arr = [ 1, 2, 3, 6, 8];

// arr.pop();    // удалить последний элемент

// console.log(arr);


const arr = [ 1, 2, 3, 6, 8];

// arr[99] = 0;                   //нарушение правил
// console.log(arr.length);

// console.log(arr.length);  //Могут спросить как соотносяться length и порядковый номер в массиве
//length свойство состоит из последнего порядкового номера(индекса) и +1

// arr.push(10);     // добавить последний элемент с значением в ()

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//                                               результат одинаковый
// for ( let value of arr) {
//     console.log(value);
// }


// arr.forEach(function(item, i, array) {      // (значение в массиве, итератор(номер элемента, и целый массив))
//     console.log(`${i}: ${item} внутри массива ${array}`);
// });                                         //forEach просто перебирает массив, без его изменения по сравнению с map


const str = prompt('', '');
const products = str.split(', ');
console.log(products);