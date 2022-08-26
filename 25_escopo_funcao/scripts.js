/* let y = 10

function imprimir() {
  let y = 150

  console.log(y)
}

imprimir()

console.log(y) */

// --------------------
/* let x = 10
if (x > 5) {
  let x = 20
  x++
  console.log(x)
}

console.log(x) */

// ESCOPO ANINHADO
let a = 5

const multiplicar = function (n, m) {
  let a = n * m

  if (a > 10) {
    let a = 0

    console.log(a)
  }

  console.log(a)
}

console.log(a)

multiplicar(3, 7)
