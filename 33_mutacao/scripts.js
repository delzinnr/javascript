let pessoa = {
  nome: 'Matheus'
}

let pessoa2 = pessoa

let pessoa3 = {
  nome: 'Matheus'
}
console.log(pessoa == pessoa2)
console.log(pessoa3 == pessoa)
console.log(pessoa3 == pessoa2)

pessoa2.nome = 'Pedro'
pessoa.nome = 'Maria'
