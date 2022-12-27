let x = 5; console.log( x++ ); //5  тут сначала выводим потом добавляем 1
let x = 5; console.log( ++x ); //6  тут сначала добавляем потом выводим


// []+flase-null+true

console.log(typeof([] + false));  // 'false'
console.log([] + false - null); // NaN
console.log([] + false - null + true);  // NaN


let y = 1;
let x = y = 2;
console.log(x);


console.log([] + 1 + 2); // 12


alert( '1'[0]); // 1


console.log( 2 && 1 && null && 0 && undefined); // null
// && запинается на первой лжи
// || запинается на первой правде


console.log( !!(1 && 2) === (1 && 2)); // false          console.log(true === 2)

                     // 3
console.log( null || 2 && 3 || 4); //  null || 3    выдаст 3   если в операторе && все значения true то он выдаёт последнюю правду


const a = [1, 2, 3],
      b = [1, 2, 3];
console.log(a == b);   // false


console.log( 0 || "" || 2 || undefined || true || false); // 2