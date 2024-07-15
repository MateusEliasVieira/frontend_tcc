const colocarApenasPrimeiraLetraMaiuscula = (palavra) => {
  if (palavra) {
    let caixaBaixa = palavra.toLowerCase()
    let formatado = caixaBaixa.charAt(0).toUpperCase() + caixaBaixa.slice(1)
    return formatado
  }
}

const formatarDinheiro = (valor) => {
  return `R$${valor}`
}

export {
  colocarApenasPrimeiraLetraMaiuscula, formatarDinheiro
}
