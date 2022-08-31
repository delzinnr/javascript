// Exercício 01
console.log('Exercício 01')
let arr = ['BMW', 'Mercedes', 'Audi', 'Ranger Rover', 'Chevrolet']
console.log(arr[0], arr[2], arr[3])

// Exercício 02
console.log('Exercício 02')
let arr1 = ['Maçã', 'Banana']
let arr2 = ['Cachorro', 'Gato', 'Papagaio', 'Hamster']

console.log(arr1.length)
console.log(arr2.length)

// Exercício 03
console.log('Exercício 03')
let onibus = {
  rodas: 8,
  limitPassageiros: 40,
  portas: 2
}

console.log(onibus)
console.log(onibus.rodas)
console.log(onibus.limitPassageiros)
console.log(onibus.portas)

// Exercício 04
console.log('Exercício 04')

onibus.janelas = 20
delete onibus.rodas

console.log(onibus.janelas)
console.log(onibus.rodas)
console.log(onibus)

// Exercício 05
console.log('Exercício 05')
let nomes = ['Junior', 'Ana', 'Pedro', 'André', 'Vanessa']

if (nomes.includes('André')) {
  console.log('Eu achei o André')
} else {
  console.log('Não achei o nome')
}

// Exercício 06
console.log('Exercício 06')
let arr3 = ['1', '2', '3', '4', '5']
let arr4 = ['Batata', 'Cenoura']

function verificaNumeroElementos(array) {
  if (array.length >= 5) {
    console.log('Muitos elementos')
  } else {
    console.log('Poucos elementos')
  }
}

verificaNumeroElementos(arr3)
verificaNumeroElementos(arr4)

// Exercício 07
console.log('Exercício 07')
let arr5 = ['Capitão', 'Coronel', 'Soldado', 'Cabo', 'Recruta']

arr5.forEach(a => {
  console.log(`A Patente é ${a}`)
})

// Exercício 08
console.log('Exercício 08')
let person = {
  "name": 'André',
  "age": 20,
  "sexo": 'Masculino',
  "profissao": 'Programador'
}

console.log(person.name)
console.log(person.age)
console.log(person.sexo)
console.log(person.profissao)

// Exercício 09
console.log('Exercício 09')
let frase = 'Eu estou estudando JavaScript'
let arrayFrase = frase.split(' ')
for (let i = 0; i <= arrayFrase.length; i++) {
  console.log(arrayFrase[i])
}

// Exercício 10
console.log('Exercício 10')
let calculadora = {
  somar: function(n,m){
    return n + m
  },

  multiplicar: function(n,m){
    return n * m
  },

  subtrair: function(n,m){
    return n - m
  },

  dividir: function(n,m){
    return n / m
  }
}

console.log(calculadora.somar(1,2))
console.log(calculadora.multiplicar(3,3))
console.log(calculadora.subtrair(2,2))
console.log(calculadora.dividir(10,5))


