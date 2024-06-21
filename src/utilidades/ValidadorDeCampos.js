const aplicaMascaraDeCPF = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 11) // Limita a 11 caracteres (incluindo os pontos e traço)
    .replace(/(\d{3})(\d)/, '$1.$2') // Insere o primeiro ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Insere o segundo ponto após o sexto dígito
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço após o nono dígito
};
const aplicaMascaraDeCartaoDoSUS = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 15) // Limita a 15 caracteres (número total de dígitos do cartão SUS)
    .replace(/(\d{3})(\d{4})(\d{4})(\d{4})$/, '$1 $2 $3 $4'); // Adiciona espaços para separar os grupos de 4 dígitos
};
const aplicaMascaraDeCEP = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 8) // Limita a 8 caracteres (incluindo o hífen)
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2'); // Insere o hífen após os primeiros 5 dígitos
};

export {
  aplicaMascaraDeCPF, aplicaMascaraDeCartaoDoSUS, aplicaMascaraDeCEP
}
