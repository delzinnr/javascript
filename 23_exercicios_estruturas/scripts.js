// Exercício 01
/* console.log('Exercício 01')
let name = 'André'
let age = 20
let driveIn = true
console.log(typeof name)
console.log(typeof age)
console.log(typeof driveIn)
console.log('') */

// Exercício 02
/* console.log('Exercício 02')
let ofAge = prompt('Informe a idade do cliente: ')
if (ofAge >= 18) {
  console.log('Pode entrar')
} else {
  console.log('Barrar menor de idade')
} */

// Exercício 03
/* console.log('Exercício 03')
const name = 'André'
if (name == 'André') {
  console.log(`Saudações ${name}`)
} else {
  console.log(`Você não é o ${name}`)
} */

// Exercício 04
/* console.log('Exercício 04')
function potencia(base, expoente) {
  let potenciacao = Math.pow(base, expoente)
  console.log(potenciacao)
}

potencia(2, 2)
potencia(3, 2)
potencia(18, 2) */

// Exercício 05
/* console.log('Exercício 05')
let velocity = prompt('Informe a velocidade do carro: ')
if (velocity > 80) {
  console.log('Você está acima da velocidade máxima permitida')
} else {
  console.log('Você está na velocidade máxima permitida')
} */

// Exercício 06
/* console.log('Exercício 06')
let age = prompt('Informe a sua idade: ')
let licenseDrive = prompt('Você possui CNH? (Responda com s ou n)')

if (age >= 18 && licenseDrive == 'n') {
  console.log('Você possui mais de 18 anos mas não tem CNH')
} else if (age >= 18 && licenseDrive == 's') {
  console.log('Você possui mais de 18 anos e tem CNH')
} else {
  console.log('Você é menor de idade e não pode possuir CNH')
} */

// Exercício 07
/* console.log('Exercício 07')
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
 */

// Exercício 08
/* console.log('Exercício 08')
let i = 100
while (i >= 50) {
  console.log(i)
  i--
}

for (let i = 100; i >= 50; i--) {
  console.log(i)
} */

// Exercício 09
/* console.log('Exercício 09')
for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`)
  } else {
    console.log(`${i} é ímpar`)
  }
} */

// Exercício 10
console.log('Exercício 10 DESAFIO')
let number = prompt('Informe um número')
let divisoes = 0
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    divisoes++
  }
}

if (divisoes == 2) {
  console.log(`O Número ${number} é primo`)
} else {
  console.log(`O Número ${number} não é primo`)
}
