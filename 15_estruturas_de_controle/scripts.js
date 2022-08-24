// IF
let idade = 19

if (idade == 19) {
  console.log('A idade é = 19')
}

if (idade > 25) {
  console.log('A idade é maior que 25')
}

let nome = 'Matheus'

if (nome == 'Matheus' && idade > 10) {
  console.log('Liberado!')
}

// IF-ELSE
let velocidade = 100

if (velocidade <= 80) {
  console.log('Não foi multado')
} else {
  console.log('Multado!')
}

// ELSE - IF
nome = 'André'

if (nome != undefined) {
  console.log('Nome está definido')
} else if (nome == 'André') {
  console.log('O nome é André')
} else {
  console.log('Não é André!')
}
