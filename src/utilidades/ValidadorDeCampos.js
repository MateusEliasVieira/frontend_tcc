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
const aplicaMascaraDeTelefone = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 11) // Limita a 11 caracteres (DDD + 9 dígitos)
    .replace(/(\d{2})(\d)/, '($1) $2') // Insere parênteses em torno dos dois primeiros dígitos
    .replace(/(\d{5})(\d{4})$/, '$1-$2'); // Adiciona hífen após os cinco primeiros dígitos do número
};

const aplicaMascaraDeAltura = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 3) // Limita a 3 caracteres (sem contar o ponto)
    .replace(/(\d)(\d{2})$/, '$1.$2'); // Insere o ponto após o primeiro dígito
};
const aplicaMascaraDePeso = (value) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .slice(0, 3); // Limita a 3 caracteres
};

const aplicarValorParaCampoVazioCasoExista = (formularioDeDados) => {
  // Valor padrão para campos vazios
  const valorDefault = 'NAO_INFORMADO';

  // Itera sobre as chaves do objeto
  Object.keys(formularioDeDados).forEach((chave) => {
    if (chave.includes("data") || chave.includes("renda")) {
      formularioDeDados[chave] = null;
    } else {
      if (formularioDeDados[chave] === '' || formularioDeDados[chave] === null || formularioDeDados[chave] === undefined) {
        formularioDeDados[chave] = valorDefault;
      }
    }
  });

  return formularioDeDados;
};

const aplicarValorParaCamposDaAPI_NAO_INFORMADO = (formularioDeDados) => {

  const valorDefault = '';

  // Itera sobre as chaves do objeto
  Object.keys(formularioDeDados).forEach((chave) => {
    if (chave.includes("data") || chave.includes("renda")) {

      formularioDeDados[chave] = formularioDeDados[chave] !== null && formularioDeDados[chave] !== "" ? formularioDeDados[chave] : null;

    } else {
      if (formularioDeDados[chave] === 'NAO_INFORMADO') {
        formularioDeDados[chave] = '';
      }
    }
  });

  return formularioDeDados;

}


export {
  aplicaMascaraDeCPF,
  aplicaMascaraDeCartaoDoSUS,
  aplicaMascaraDeCEP,
  aplicaMascaraDeTelefone,
  aplicaMascaraDeAltura,
  aplicaMascaraDePeso,
  aplicarValorParaCampoVazioCasoExista,
  aplicarValorParaCamposDaAPI_NAO_INFORMADO
}
