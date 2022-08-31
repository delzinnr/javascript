let pessoa = {
  "nome": 'Matheus',
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)