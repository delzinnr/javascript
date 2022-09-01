// Exercício 01
class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }

  depositar(deposito) {
    this.saldo += deposito
  }

  sacar(saque) {
    this.saldo -= saque
  }
}

let corrente = new Conta(1000)
corrente.depositar(1000)
console.log(corrente.saldo)

corrente.sacar(2000)
console.log(corrente.saldo)

// Exercício 02
class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens
    this.qtd = qtd
    this.valorTotal = valorTotal
  }

  addItem(item) {
    let contador = 0
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd += item.qtd
        contador = 1
      }
    }

    if (contador == 0) {
      this.itens.push(item)
    }

    this.qtd += item.qtd
    this.valorTotal += item.preco * item.qtd
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho]
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id
        })

        this.qtd -= this.itens[itemCarrinho].qtd
        this.valorTotal -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

        this.itens.splice(index, 1)
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 01,
      nome: 'Camisa',
      qtd: 1,
      preco: 20
    },
    {
      id: 02,
      nome: 'Calça',
      qtd: 2,
      preco: 50
    }
  ],
  3,
  120
)

console.log(carrinho)

carrinho.addItem({ id: 01, nome: 'Camisa', qtd: 2, preco: 20 })
console.log(carrinho)

carrinho.addItem({ id: 03, nome: 'Boné', qtd: 1, preco: 15 })

carrinho.removeItem({ id: 01, nome: 'Camisa', qtd: 1, preco: 20 })
console.log(carrinho)

// Exercício 03
class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  get getRua() {
    return this.rua
  }

  set setRua(rua) {
    this.rua = rua
  }

  get getBairro() {
    return this.bairro
  }

  set setBairro(bairro) {
    this.bairro = this.bairro
  }

  get getCidade() {
    return this.cidade
  }

  set setCidade(cidade) {
    this.cidade = this.cidade
  }

  get getEstado() {
    return this.estado
  }

  set setEstado(estado) {
    this.estado = this.estado
  }
}

Endereco.prototype.rua = 'Não informado'
Endereco.prototype.bairro = 'Não informado'
Endereco.prototype.cidade = 'Não informado'
Endereco.prototype.estado = 'Não informado'

let enderecoAna = new Endereco('José', 'Aparecida', 'patos', 'SP')
enderecoAna.setRua = 'Carlos'
console.log(enderecoAna)

// Exercício 04
class Carro {
  constructor(marca, cor, gasolinaR, consumo) {
    this.marca = marca
    this.cor = cor
    this.gasolinaR = gasolinaR
    this.consumo = consumo
  }

  dirigir(km) {
    let litrosConsumidos = km / this.consumo

    this.gasolinaR -= litrosConsumidos
    return this.gasolinaR
  }

  abastecer(l) {
    this.gasolinaR += l
  }
}

let bmw = new Carro('BMW', 'Preta', 65, 14)
console.log(bmw)
console.log(bmw.dirigir(100))

bmw.abastecer(10)
console.log(bmw)

// Exercício 05
class ContaB {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC
    this.saldoCP = saldoCP
    this.juros = juros
  }

  deposito(valor) {
    this.saldoCC += valor
  }

  saque(valor) {
    this.saldoCC -= valor
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor
    this.saldoCP += valor
  }

  transferenciaCC(valor) {
    this.saldoCP -= valor
    this.saldoCC += valor
  }

  jurosDeAniversario() {
    let juros = (this.saldoCP * this.juros) / 100
    this.saldoCP += juros
  }
}

class ContaEspecial extends ContaB {
  constructor(saldoCC, saldoCP, juros) {
    super(saldoCC, saldoCP, juros * 2)
  }
}

let conta = new ContaB(1000, 5000, 1)

console.log(conta)

conta.saque(300)

console.log(conta)

conta.deposito(5000)

console.log(conta)

conta.transferenciaCP(3000)

console.log(conta)

conta.jurosDeAniversario()

console.log(conta)

let conta2 = new ContaEspecial(10000, 50000, 1)

console.log(conta2)

conta2.saque(5000)

console.log(conta2)

conta2.jurosDeAniversario()

console.log(conta2)

