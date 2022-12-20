// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         const b = languages.join(' ');
        
//         return `Мне ${age} и я владею языками: ${b.toUpperCase().trim()}`;
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let a = '';
//     for (let key in programmingLangs) {
//         a += `Язык ${key} изучен на ${programmingLangs[key]}`;
//         a += '\n';
//     }
//     console.log(a);
//     return a;
// }

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let value of arr) {
//         let b = value.toLowerCase();
//         console.log(b);
//     }
// }



// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     } else {
//         let res = str.split('').reverse().join('');
//         return res;
//     }
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     } else {
//         let a = 'Доступные валюты:\n';
//         for (let value of arr) {
//             if (missingCurr === value) {
//                 continue;
//             } else {
//                 a += value;
//             }
//             a += '\n';
//         }
//         console.log(a);
//         return a;
//     }
// }



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }


// function isBudgetEnough(data) {
//     const {shops,budget, moneyPer1m3} = data;
//     let mainSquare = 0;
//     let mainVolume = 0;
//     let res = '';
//     for (let i = 0; i < shops.length; i++) {
//         const {width, length} = data.shops[i];
//         let tempSquare = width * length;
//         // console.log(b);
//         mainSquare += tempSquare;
//     }
//     for (let j = 0; j < shops.length; j++) {
//         const {width, length} = data.shops[j];
//         const {height} = data;
//         let tempVolume = width * height * length;
//         mainVolume += tempVolume;
//     }
//     if (mainVolume * moneyPer1m3 > budget) {
//         res += 'Бюджета недостаточно';
//         console.log(res);
//         return res;
//     } else {
//         res += 'Бюджета достаточно';
//         console.log(res);
//         return res;
//     }
// }