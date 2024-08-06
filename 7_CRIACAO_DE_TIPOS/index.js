"use strict";
// 1 - Generics (a função aceita qualter tipo de dado e retorna uma como string)
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
// 2 - constraint em generic (reduz o tipo de dado aceito pelo gereric)
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Preto' };
const myPen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} tem o valor ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Germana',
    age: 45,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName([0]))
// 6 - typeof type operator
const userName = 'Matheus';
const userName2 = 'João';
const userName4 = 'Joaquim';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showTruckKm(km) {
    console.log(`O caminhão já rodou ${km} kms`);
}
showTruckKm(newTruck.km);
const someVar = 1;
const testing = "some text";
