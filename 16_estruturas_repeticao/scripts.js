// WHILE

let x = 10

while (x > 0) {
  console.log('O x é ' + x)
  x = x - 1
}

let y = 0

while (y <= 10) {
  console.log(y)
  y = y + 1
}

// DO WHILE
x = 100

do {
  console.log(x / 2)
  x = x - 5
} while (x >= 0)

// FOR
for (let i = 0; i < 100; i = i + 3) {
  console.log(`A soma de i com 2 é: ${i + 2}`)
}
