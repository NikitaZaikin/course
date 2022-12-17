// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const age = plan.age;
//         const languages = Object.values(Object.assign({}, plan.skills.languages));
//         let result = '';
//         let arrlanguages = '';
//         for (let i in languages) {
//             arrlanguages += languages[i].toUpperCase().split(', ');
//             arrlanguages += ' ';
//             result = `Мне ${age} И я владею языками: ${arrlanguages}`;
//         }
//         console.log(result);
//         return result;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// // function showExperience(plan) {
// //     const experience = Object.assign({} , plan);
// //     return experience.skills.exp;
// // }
// // showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     // const clone = Object.assign({} , plan),
//     //      key = Object.keys(Object.assign({}, plan.skills.programmingLangs));
//     // const result = `Язык ${key[0]} изучен на ${clone.skills.programmingLangs.js}\nЯзык ${key[1]} изучен на ${clone.skills.programmingLangs.php}\nЯзык ${key[2]} изучен на ${clone.skills.programmingLangs.ruby}`;
//     // console.log(result);
//     // return result;



//     let result = '';
//     const value = Object.assign({}, plan.skills.programmingLangs);
//     for (let key in value){
//         result += `Язык ${key} изучен на ${value[key]}`;
//         result += '\n';
//     }
//     console.log(result);
//     return result;
// }

// showProgrammingLangs(personalPlanPeter);











// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    let result = '';
//    let names = '';
//     if (arr.length < 1) {
//         result = 'Семья пуста';
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             names += arr[i];
//             names += ' ';
//             result = `Семья состоит из: ${names}`;
//         }
//     }
//     console.log(result);
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];



// function standardizeStrings(arr) {
//     let cities = '';
//     let result1 = '';
//     for (let i = 0; i < arr.length; i++) {
//         cities += arr[i].toLowerCase();
//         if (i < arr.length-1){
//             cities += '\n';
//         }
//         result1 = cities;
//     }
//     console.log(result1);
//     return result1;
// }

// standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string'){
        str = 'Ошибка';
    } 
    console.log(str.split('').reverse().join(''));
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}