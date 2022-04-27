//HW_1_hard

// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
let n = 1;
let task = "Task";
console.log("_____________________");
console.log(task + " " + n++ + "*\n");

function checkAge(age) {    
    if (age < 18) {
        console.log("You don’t have access cause, your age is "  + age)
    } else if (age >= 18 && age <= 60) {
            console.log("Technical work")                          
    } else {
        console.log("Keep calm and look Culture channel");
    }
}
                        
checkAge(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.
console.log("_____________________");
console.log(task + " " + n++ + "*\n");

function checkAge(age) {    
    if (typeof age !== "number") {
        console.log("Error! Please enter your age")
    } else if (age < 18) {
        console.log("You don’t have access cause, your age is "  + age)
    } else if (age >= 18 && age <= 60) {
        console.log("Technical work")                          
    } else {
        console.log("Keep calm and look Culture channel");
    }
}
                        
checkAge(61);


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//преобразовываясь в number
console.log("_____________________");
console.log(task + " " + n++ + "*\n");

function checkAge(age) {    
    age = +age;
    if (typeof age !== "number") {
        console.log("Error! Please enter your age")
    } else if (age < 18) {
        console.log("You don’t have access cause, your age is "  + age)
    } else if (age >= 18 && age <= 60) {
        console.log("Technical work")                          
    } else {
        console.log("Keep calm and look Culture channel");
    }
}
                        
checkAge('17'); //17, 18, 61

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
console.log("_____________________");
console.log(task + " " + n++ + "*\n");

function checkAge(age) {
    
    age = +age;
    if (typeof age !== "number") {
        console.log("Error! Please enter your age")
    } else if (age < 18) {
        console.log("You don’t have access cause, your age is "  + age)
    } else if (age >= 18 && age <= 60) {
        console.log("Technical work")                          
    } else {
        console.log("Keep calm and look Culture channel");
    }
    
}                        
checkAge(18)
checkAge(prompt("How old are you?", 18));

