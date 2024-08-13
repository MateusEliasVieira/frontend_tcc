const camposPreenchidos = (jsonObject) => {
  for (let key in jsonObject) {
    if (jsonObject[key] === null || jsonObject[key] === undefined || jsonObject[key] === '') {
      console.log(`Campo vazio ou não definido: ${key}`);
      return false;
    }
    // Verifica se o valor é um objeto e realiza a checagem recursivamente
    if (typeof jsonObject[key] === 'object' && !Array.isArray(jsonObject[key])) {
      if (!camposPreenchidos(jsonObject[key])) {
        return false;
      }
    }
  }
  return true;
}

export {camposPreenchidos}
