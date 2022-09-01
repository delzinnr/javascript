/* let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function () {
    console.log('AU AU')
  }
}

let labrador = Object.create(cachorro)

labrador.latir()
labrador.raca = 'Labrador'
console.log(labrador)

let pastor = Object.create(cachorro)
pastor.raca = "Pastor Alemão"
console.log(pastor)

 */

// CONSTRUCTOR POR FUNÇÃO

/* function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.latir = function () {
    console.log('Au au')
  }
  return cachorro
}

let doberman = criarCachorro('Doberman', 4, 'Preta')
console.log(doberman)
doberman.latir()
 */

// CONSTRUCTOR POR NEW
function Cachorro(raca, patas, cor) {
  this.raca = raca
  this.patas = patas
  this.cor = cor
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky)

// MÉTODO PROTOTYPE
Cachorro.prototype.uivar = function () {
  console.log('Auuuu')
}

Cachorro.prototype.latir = function () {
  console.log('Latir')
}

husky.uivar()
husky.latir()
