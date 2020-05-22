'use strict';

let money = +prompt("Ваш бюджет на месяц"),
    time = prompt("введите дату");


let appData = {
    timeData: time,
    savings: false,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if (( typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {   
        console.log("done");
        appData.expenses[a] =  b;  
    }  
};

if (Object.values(appData.expenses) == false) {
    console.log("Перезагрузка");
    document.location.reload(true);
}

appData.moneyPerDay = appData.budget / 30;

alert("Еждневний бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальний ур дост");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Сер ур дост");
} else if (appData.moneyPerDay > 2000) {
    console.log("Виск ур дост");
} else {
    console.log("Ошибка");
}


