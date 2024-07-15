const formatarDataParaDiaMesAno = (item) => {
  if (item) {
    let data = item.split("T")[0];
    let data_array = data.split("-");
    let data_ok = `${data_array[2]}/${data_array[1]}/${data_array[0]}`;
    return data_ok;
  }
}
const formatarDataPadraoAnoMesDia = (item) => {
  if (item) {
    return item.split("T")[0]
  }
}

const calcularIdade = (dataNascimento) => {
  if (dataNascimento) {
    let dataNascimentoFormatada = new Date(formatarDataPadraoAnoMesDia(dataNascimento))
    let diaNascimento = dataNascimentoFormatada.getDate() + 1
    let mesNascimento = dataNascimentoFormatada.getMonth() + 1
    let anoNascimento = dataNascimentoFormatada.getFullYear()

    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate() + 1
    let mesAtual = dataAtual.getMonth() + 1
    let anoAtual = dataAtual.getFullYear()

    if (mesAtual >= mesNascimento && anoAtual >= anoNascimento) {
      if (diaAtual >= diaNascimento) {
        // já fez niver
        let idade = (anoAtual - anoNascimento) + 1
        return idade
      } else {
        // ainda não fez niver, mas to mes que vai fazer
        let idade = (anoAtual - anoNascimento)
        return idade
      }
    } else {
      // ainda não fez niver
      let idade = (anoAtual - anoNascimento)
      return idade
    }
  }
}

export {formatarDataParaDiaMesAno, formatarDataPadraoAnoMesDia, calcularIdade}
