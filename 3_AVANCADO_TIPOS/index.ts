// 1 - arrays
let numbers: number[] = [1,2,3]
numbers.push(5)
console.log(numbers[3])
// numbers = "teste"

const nomes: string[] = ["Ana", "Tina"]
nomes.push("Isa")
console.log(nomes)

// 2 - outra sintaxe
const nums: Array<number> = [100,200]

// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "Germana"}]
arr1.push([1,2,3])
console.log(arr1)

// 4 - parametros tipados
function soma(a:number, b: number) {
    console.log(a + b)
}
soma(3,5)

// 5 - retorno de funcao
function greeting(name: string): string {
    return `Olá ${name}`
}
console.log(greeting("Germana"))

// 6 - funcao anonima
setTimeout(function() {
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000)

// 7 - tipo de objetos
 function passCoordinates(coord: {x: number, y: number}) {
    console.log(`x coordinates: ${coord.x}`)
    console.log(`y coordinates: ${coord.y}`)
 }
 const objCoord = {x: 329, y: 84.2}
 passCoordinates(objCoord)

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log('A: ' + a)
    console.log('B: ' + b)
    if(c) {
        console.log('C: ' + c)
    }
  }
  showNumbers(1, 2, 3)
  showNumbers(4, 8)
  // showNumbers(4)

// 9 - validando parâmetro opcional
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
      return `Olá, ${firstName} ${lastName}, tudo bem?`
    }  
    return `Olá, ${firstName}, tudo bem?`
  }
  console.log(advancedGreeting('Germana', 'Priscila'))
  console.log(advancedGreeting('Schubert'))

// 10 - union type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`)
}  
showBalance(500)
showBalance('100')

// 11 - mais sobre union types
function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
      return 'Usuário não aprovado!'
    }
    return `O usuário é um: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole('Admin'))
console.log(showUserRole('Editor'))

// 12 - type alias
type ID = number | string
function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}
showId('15')
showId(20)

type User = {
  name: string
  surname: string
}

function userDetails(user: User) {
  console.log(`Nome: ${user.name}`)
  console.log(`Sobrenome: ${user.surname}`)
}
userDetails({ name: 'Germana', surname: 'Priscila' })

// 13 - interfaces
interface Point {
    x: number
    y: number
    z: number
}
  
function showCoords(obj: Point) {
  console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}
  
const coordObj: Point = {
  x: 10,
  y: 15,
  z: 12,
}
  
showCoords(coordObj)

// 14 - interface x type alias
interface Person {
    name: string
}
const randomNumber = 10
interface Person {
    age: number
}
  
const somePerson: Person = { name: 'João', age: 25 }
  
console.log(somePerson)
  
type personType = {
  name: string
}
  
// type personType = {
//     age: number
// }

// 15 - literal types
let test: 'testando'
test = 'testando'
// test = "opa"

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`The direction is: ${direction}`)
}
showDirection('left')
showDirection('center')
//showDirection("up")

// 16 - non-null assertion operator
const p = document.getElementById('some-p')
console.log(p!.innerText)

// 17 - big int
let n: bigint
// n = 1
n = 1000n
// console.log(n + 1)
console.log(typeof n)
console.log(n + 10n)

// 17 - symbol
let symbolA = Symbol('a')
let symbolB = Symbol('a')
console.log(symbolA == symbolB)
console.log(symbolA === symbolB)