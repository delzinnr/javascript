// PUSH E POP
let nomes = ['Matheus', 'Ricardo', 'André']

let elementoRemovido = nomes.pop()
console.log(elementoRemovido)
console.log(nomes)

nomes.push('Jonas')

console.log(nomes)

// shift & unshift
let carros = ['bmw', 'audi', 'volkswagen', 'fiat']

let removerPrimeiroCarro = carros.shift()
console.log(removerPrimeiroCarro)
console.log(carros)

carros.unshift('mercedes')
console.log(carros)

// indexOf & lastIndexOf
let nums = [5, 6, 2, 4, 9, 6, 2]

console.log(nums.indexOf(2))
console.log(nums.lastIndexOf(2))

// slice
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num.slice(4, 5))
console.log(num.slice(4, 6))

console.log(num.slice(2))
console.log(num.slice(-2))
console.log(num.slice(3, -2))

// forEach
let names = ['Matheus', 'Maria', 'José', 'Pedro', 'João']

names.forEach(nome => {
  console.log('O nome é ' + nome)
})

// includes
let pets = ['cachorro', 'gato', 'papagaio', 'hamster']

console.log(pets.includes('gato'))

// reverse
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.reverse())
