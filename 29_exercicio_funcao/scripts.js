// Exercício 01
function welcome() {
  console.log('Hello World')
}
welcome()

// Exercício 02
function printAge(age) {
  console.log(`Você tem ${age} anos`)
}
printAge(20)
printAge(37)

// Exercício 03
function sumTwoNumbers(a, b) {
  return a + b
}

console.log(sumTwoNumbers(2, 5))
console.log(sumTwoNumbers(100, 37))

// Exercício 04
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

console.log(randomNumber(1, 50))
console.log(randomNumber(50, 1000))

// Exercício 05
function agePerson(age) {
  if (age >= 18) {
    console.log('Você tem mais de 18 anos e pode entrar na auto escola')
  } else {
    console.log('Você tem menos de 18 anos e não pode entrar na auto escola')
  }
}

agePerson(18)
agePerson(17)

// Exercício 06
function dataType(data) {
  if (typeof data == 'string') {
    console.log('Esse dado é uma string')
  } else if (typeof data == 'boolean') {
    console.log('Esse dado é um boolean')
  } else {
    console.log('Esse dado é um number')
  }
}

dataType('André')
dataType(true)
dataType(17)

// Exercício 07
function returnPositiveNumber(num) {
  return Math.abs(num)
}

console.log(returnPositiveNumber(-10))
console.log(returnPositiveNumber(-55))

// Exercício 08
function lengthString(string) {
  if (string.length > 10) {
    console.log('Texto muito longo')
  } else {
    console.log('Texto dentro do limite')
  }
}

lengthString('abcdefghijklm')
lengthString('André')

// Exercício 09
function powNumber(a, b) {
  return Math.pow(a, b)
}

console.log(powNumber(3, 2))
console.log(powNumber(4, 2))
console.log(powNumber(3, 3))

// Exercício 10
function subtractNumber(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(`O número ${i} é par`)
    }
  }
}

subtractNumber(50)
subtractNumber(15)
