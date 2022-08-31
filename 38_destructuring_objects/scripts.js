// destructuring objetos
let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

const {
  rodas: vRodas,
  portas: vPortas,
  tetosolar: vTetoSolar,
  motor: vMotor
} = obj
console.log(vMotor)
console.log(vTetoSolar)
console.log(vPortas)
console.log(vRodas)

// destructuring arrays
let numeros = [2,4,5,8]

let [num1,num2,num3,num4] = numeros;

console.log(num1)
console.log(num2)