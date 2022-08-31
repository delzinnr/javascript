// trim
let nome = '        Matheus '
// olá       Matheus , tudo bem?
console.log(nome)
nomeCorrigido = nome.trim()
console.log(nomeCorrigido)

// padStart
let sku = '34'

console.log(sku.padStart(6, '0'))

// split
let frase = 'Testando o método split'

console.log(frase.split(' '))

let palavras = frase.split(' ')
console.log(palavras)

let produtos = 'Banana;Maçã;Jaca;Pera;Bola;Tapete'
console.log(produtos.split(';'))

// join
let novaFrase = palavras.join('@')
console.log(novaFrase)

// repeat
palavra = 'Repetir '
console.log(palavra.repeat(20))
