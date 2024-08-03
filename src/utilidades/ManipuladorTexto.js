const colocarApenasPrimeiraLetraMaiuscula = (palavra) => {
  if (!palavra) {
    return "";
  }
  const palavras = palavra.split("_");
  const palavrasFormatadas = palavras.map((p, index) => {
    const caixaBaixa = p.toLowerCase();
    if (index === 0) {
      return caixaBaixa.charAt(0).toUpperCase() + caixaBaixa.slice(1);
    } else {
      return caixaBaixa;
    }
  });

  return palavrasFormatadas.join(" ");
};

const formatarDinheiro = (valor) => {
  if (valor === null) {
    return '';
  } else {
    return `R$${valor}`
  }
}

export {
  colocarApenasPrimeiraLetraMaiuscula, formatarDinheiro
}
