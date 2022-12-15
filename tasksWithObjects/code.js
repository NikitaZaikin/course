const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const age = plan.age;
        const languages = Object.values(Object.assign({}, plan.skills.languages));
        let result = '';
        let arrlanguages = '';
        for (let i in languages) {
            arrlanguages += languages[i].toUpperCase().split(', ');
            arrlanguages += ' ';
            result = `Мне ${age} И я владею языками: ${arrlanguages}`;
        }
        console.log(result);
        return result;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// function showExperience(plan) {
//     const experience = Object.assign({} , plan);
//     return experience.skills.exp;
// }
// showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    // const clone = Object.assign({} , plan),
    //      key = Object.keys(Object.assign({}, plan.skills.programmingLangs));
    // const result = `Язык ${key[0]} изучен на ${clone.skills.programmingLangs.js}\nЯзык ${key[1]} изучен на ${clone.skills.programmingLangs.php}\nЯзык ${key[2]} изучен на ${clone.skills.programmingLangs.ruby}`;
    // console.log(result);
    // return result;

    let result = '';
    const value = Object.assign({}, plan.skills.programmingLangs);
    for (let key in value){
        result += `Язык ${key} изучен на ${value[key]}`;
        result += '\n';
    }
    console.log(result);
    return result;
}

showProgrammingLangs(personalPlanPeter);