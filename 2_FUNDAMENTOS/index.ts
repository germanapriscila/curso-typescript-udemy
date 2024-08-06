// Numbers
let x: number = 13.1587879

console.log(x)
console.log(x.toPrecision(4))

// String
const firstName: string = "Germana"
let fullName: string
const lastName: string = "Priscila"
fullName = `${firstName} ${lastName}`
console.log(firstName.toLocaleUpperCase())
console.log(fullName)

// Boolean
let a: boolean = false
console.log(a)
console.log(typeof a)
a = true
console.log(a)

// Inference e annotation
const ann: string = "teste"
let inf = "teste"
// ann = 1
// inf = 1

// exercício
const n1: number = 10
const numberToString = n1.toString()
const printMyNumber = `O número é ${numberToString}`
console.log(printMyNumber)