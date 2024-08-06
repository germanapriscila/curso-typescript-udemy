// 1 - Generics (a função aceita qualter tipo de dado e retorna uma como string)
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}
console.log(showData(5))
console.log(showData('teste'))

// 2 - constraint em generic (reduz o tipo de dado aceito pelo gereric)
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}
const myObj = { name: 'Porta', cor: 'Branca' }
const secondObj = { name: 'Carro', rodas: 4 }
const thirdObj = { price: 19.99, qty: 10 }
console.log(showProductName(myObj))
console.log(showProductName(secondObj))
// console.log(showProductName(thirdObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}
type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>
const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Preto' }
const myPen: Pen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'azul' }
console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} tem o valor ${obj[key]}`
}
const server = {
  hd: '2TB',
  ram: '32GB',
}
console.log(getSomeKey(server, 'hd'))
// console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean }
type C = keyof Character
function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}
const myChar: Character = {
  name: 'Germana',
  age: 45,
  hasDriveLicense: true,
}
console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
// console.log(showCharName([0]))

// 6 - typeof type operator
const userName: string = 'Matheus'
const userName2: typeof userName = 'João'
// const userName3: typeof userName = 3
type x = typeof userName 
const userName4: x = 'Joaquim'

// 7 - indexed access types
type Truck = { km: number; kg: number; description: string }

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
}

function showTruckKm(km: Km) {
  console.log(`O caminhão já rodou ${km} kms`)
}

showTruckKm(newTruck.km)

// 8 - conditional types
interface A {}
interface B extends A {}
interface Teste {
  showName(): string
}
type myType = B extends A ? number : string
type myTypeB = Teste extends {showNumber(): number} ? string : boolean
const someVar: myType = 1
// const someVar2: myType = 'asd'

// 9 - template literal types
type TestA = "text"
type CustomType = `some ${TestA}`
const testing: CustomType = "some text"
type a1 = 'testando'
type a2 = 'union'
type a3 = `${a1}` | `${a2}`