//Task 1
let order = {
    soup: 'holodnik',
    drink: 'tea',
}
delete order.drink;
delete order.soup;
console.log(order);

//Task 2
const myDogs = {
    dachshund: 'Hilda',
    labrador: 'Ellie',
}
if('dachshund' in myDogs) {
    console.log(true);
}
else {console.log(false);
}


//Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}
for (const key in student) {
    console.log(key, student[key]);
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red + ' и ' + colors["ru pum pu ru rum"].blue);


//Task 5
let salaries = {
    alex: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
};

console.log(salaries);

function sumSalary(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum / Object.values(salaries).length;
}
console.log(sumSalary(salaries));

//#### Task 6 🖥

// const validateValue = function (value) {
//     return value.length > 3 && value.length <= 10;
// };

// const createUser = function () {
//     const user = {
//         login: '',
//         password: '',
//     };
    
//     do {
//         user.login = prompt('login');
//     } while (validateValue(user.login) === false)
    
//     do {
//         user.password = prompt('password');
//     } while (validateValue(user.password) === false)

//     return user;
// };

// const user1 = createUser();
// const user2 = createUser();

// if (user1.login === user2.login && user1.password === user2.password) {
//     console.log('Welcome');
// }

//Advanced 
//Task 2
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}

if (student2 === student1){
    console.log(true);
}
else{console.log(false);}

// Решение:
let students = JSON.stringify(student1) === JSON.stringify(student2);
console.log(students);

//Task 3
const animals = {
    cat: {
    name: 'Енчик',
    age: 3,
    },
    dog: {
    name: 'Орео',
    age: 2,
    }
}

animals.name?.replace('name:','');

console.log(animals.bird.name);


