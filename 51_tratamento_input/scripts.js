function checarNumero(num) {
  let number = Number(number)
  if (Number.isNaN(number)) {
    console.log('Por favor, passe só números para o programa')
  } else {
    return number
  }
}

checarNumero(5)
checarNumero('sadh')
