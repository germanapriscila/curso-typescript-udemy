"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[3]);
// numbers = "teste"
const nomes = ["Ana", "Tina"];
nomes.push("Isa");
console.log(nomes);
// 2 - outra sintaxe
const nums = [100, 200];
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Germana" }];
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(3, 5);
// 5 - retorno de funcao
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Germana"));
// 6 - funcao anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipo de objetos
function passCoordinates(coord) {
    console.log(`x coordinates: ${coord.x}`);
    console.log(`y coordinates: ${coord.y}`);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 8);
// showNumbers(4)
// 9 - validando parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Germana', 'Priscila'));
console.log(advancedGreeting('Schubert'));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(500);
showBalance('100');
// 11 - mais sobre union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return `O usuário é um: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
console.log(showUserRole('Editor'));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId('15');
showId(20);
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Sobrenome: ${user.surname}`);
}
userDetails({ name: 'Germana', surname: 'Priscila' });
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 12,
};
showCoords(coordObj);
const randomNumber = 10;
const somePerson = { name: 'João', age: 25 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = 'testando';
// test = "opa"
function showDirection(direction) {
    console.log(`The direction is: ${direction}`);
}
showDirection('left');
showDirection('center');
//showDirection("up")
// 16 - non-null assertion operator
const p = document.getElementById('some-p');
console.log(p.innerText);
// 17 - big int
let n;
// n = 1
n = 1000n;
// console.log(n + 1)
console.log(typeof n);
console.log(n + 10n);
// 17 - symbol
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
