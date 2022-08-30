let cachorro = {
  patas: 4,
  nome: 'Shark',
  latir: function () {
    console.log('Au Au')
  }
}

console.log(cachorro.patas)
console.log(cachorro.nome)
cachorro.latir()

// CRIANDO & DELETANDO PROPRIEDADES
let pessoa = {
  nome: 'Matheus',
  idade: 29,
  profissao: 'Programador'
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)

pessoa.casado = false

console.log(pessoa)

// Objetct.assign
let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '2.0'
}

console.log(carro)

let adicionais = {
  tetosolar: true,
  arcondicionado: true
}

Object.assign(carro, adicionais)
console.log(carro)

// Object.keys
let obj = {
  chave1: 1,
  chave2: 2,
  chave3: 3
}

console.log(Object.keys(obj))
