function factorial(n) {
    let num = n;

    if(n === 1) {
        return num;                      //сам процесс высчитывания факториала
    } else{
        return num * factorial(n-1);
    }
}

console.log(factorial(5));


function factorial(n) {
    let num = n;

    if(n === 1 || n < 1) {
        return 1;
    }else if (typeof(n) !== 'number' || !Number.isInteger(n)) {      // Высчитывание факториала с проверкой на дробные,
        return "Ошибка, проверьте данные";                           // отрицательные числа и в целом число ли это
    }else{
        return num * factorial(n-1);
    }
}

console.log(factorial(5));