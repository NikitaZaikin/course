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


