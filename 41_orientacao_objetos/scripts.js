const cachorro = {
  raca: 'SRD',
  uivar: function () {
    console.log('Auuuuuuuuuuuuuuu')
  },
  rosnar: function () {
    console.log('grrrrrrrrr')
  },
  setRaca: function (raca) {
    this.raca = raca
  },
  getRaca: function () {
    return 'A raça é ' + this.raca
  }
}

cachorro.uivar()
cachorro.rosnar()

// MAIS SOBRE MÉTODOS
cachorro.setRaca('Pastor Alemão')
console.log(cachorro.raca)
console.log(cachorro.getRaca())

// PROTOTYPES
const pessoa = {
  maos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)

console.log(pessoa.hasOwnProperty('maos'))

const pessoaNova = Object.create(pessoa)
console.log(pessoaNova.maos)
console.log(pessoaNova.hasOwnProperty('maos'))

console.log(Object.getPrototypeOf(pessoaNova) === pessoa)
