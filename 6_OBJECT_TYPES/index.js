"use strict";
function showProductDetails(product) {
    console.log(`Produto: ${product.name}, Preço: R$ ${product.price}`);
    if (product.isAvailable) {
        console.log('Produto disponível');
    }
    else {
        console.log('Produto indiponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.00, isAvailable: false });
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: 'matheus@teste.com', role: 'Admin' };
const u2 = { email: 'joao@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4,
};
let coords = {
    x: 10,
};
// coords.y = 'teste'
coords.y = 15;
coords.z = 17;
console.log(coords);
const arr1 = [1, 2, 3];
const priscila = {
    name: "Priscila",
    age: 45
};
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(priscila);
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
// 7 - read only array
let myArray = ['Maçã', 'Laranja', 'Pêra'];
// myArray[3] = 'Mamão'
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = ["teste", 1]
console.log(myNumberArray);
const anotherUser = ['Matheus', 30];
anotherUser[1] = 'João';
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([14, 23]);
// showNumbers(['teste', 1])
