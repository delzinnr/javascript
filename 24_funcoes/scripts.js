/* function imprimirNoConsole() {
  console.log('Olá mundo!')
}
imprimirNoConsole()

// FUNÇÃO COM PARAMETRO
function imprimirUmNumero(num) {
  console.log('O número é: ' + num)
}
imprimirUmNumero(2)

// FUNÇÃO EM VARIÁVEL
const numeroAleatorio = function () {
  console.log(Math.random())
}

numeroAleatorio()

// MAIS SOBRE FUNÇÕES
function multiplicarTresNumeros(x, y, z) {
  return z * y * z
}

console.log(multiplicarTresNumeros(2, 3, 4))

const mult = multiplicarTresNumeros(5, 2, 6)
console.log('O valor de mult é ' + mult)

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log('Pode dirigir')
  } else {
    console.log('Não pode dirigir')
  }
}

console.log(podeDirigir(19, true))
console.log(podeDirigir(25, true))
console.log(podeDirigir(44, 0))
console.log(podeDirigir(19, 1))
console.log(podeDirigir(16, 0))
 */

/* function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log('Esta função precisa ter os dois argumentos')
  } else {
    return a + b
  }
}

console.log(soma(1))
console.log(soma(1, 3))

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log('Olá ' + nome)
  } else {
    console.log('Olá ' + nome + ' você tem ' + idade + ' anos')
  }
}

saudacao('Matheus')
saudacao('Igos', 29) */

function potencia(base, exp=2) {
  return Math.pow(base,exp)
}

console.log(potencia(2))
console.log(potencia(2,2))
console.log(potencia(2,3))
