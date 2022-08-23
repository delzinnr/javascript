let maior = Math.max(6, 12, 28, 55, 8)
alert(maior)

let menor = Math.min(6, 12, 28, 55, 24)
alert(menor)

let arredondar = Math.round(5.26456457)
alert(arredondar)

let arredondarParaCima = Math.ceil(5.216262)
alert(arredondarParaCima)

// Função built-in: prompt()
let idade = prompt('Qual a sua idade?')
alert(idade)
let nome = prompt('Qual o seu nome?')
alert(`O seu nome é ${nome}`)

let sobrenome = prompt('Qual é o seu sobrenome')
console.log(sobrenome)

console.log(
  `O maior número é ${maior}\nO menor número é ${menor}\nNome: ${nome}\nSobrenome: ${sobrenome}\nIdade: ${idade}\n`
)
